#!/usr/bin/env python3
"""Local LLM comparison harness.

Races several self-hosted, OpenAI-compatible models over a fixed prompt suite
and reports speed (time-to-first-token, tokens/sec) and quality (auto-scored
where answers are checkable, plus an optional local LLM-as-judge). No external
APIs — everything points at endpoints you control.

Usage:
    python run.py --config models.json --suite suite.jsonl --runs 1 --gpu
    python run.py --judge qwen3-32b          # use one model to grade the others

Outputs a timestamped folder under bench/results/ with:
    leaderboard.md  — ranked summary table
    answers.md      — every model's answer to every prompt, side by side
    results.json    — raw metrics for further analysis

See bench/README.md for setup and the model candidate list.
"""
from __future__ import annotations

import argparse
import json
import re
import statistics
import subprocess
import sys
import threading
import time
import urllib.request
from datetime import datetime
from pathlib import Path

HERE = Path(__file__).resolve().parent
THINK_RE = re.compile(r"<think>.*?</think>", re.DOTALL | re.IGNORECASE)


# --------------------------------------------------------------------------- #
# Model calls (OpenAI-compatible /chat/completions, streaming for TTFT)
# --------------------------------------------------------------------------- #
def call_model(model_cfg: dict, messages: list[dict], max_tokens: int,
               temperature: float, timeout: int) -> dict:
    """Stream a completion. Returns timing, text, and token usage."""
    base = model_cfg["base_url"].rstrip("/")
    url = f"{base}/chat/completions"
    payload = {
        "model": model_cfg["model"],
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens,
        "stream": True,
        "stream_options": {"include_usage": True},
    }
    # Per-model request extras (e.g. {"chat_template_kwargs": {"enable_thinking": false}}
    # to disable a reasoning model's chain-of-thought — Qwen3.6 ignores /no_think).
    payload.update(model_cfg.get("extra_body") or {})
    headers = {"Content-Type": "application/json"}
    key = model_cfg.get("api_key", "")
    if key:
        headers["Authorization"] = f"Bearer {key}"

    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(), headers=headers, method="POST"
    )

    start = time.perf_counter()
    ttft_any: float | None = None      # first token of ANY kind (reasoning or answer)
    ttft_content: float | None = None  # first answer (content) token
    text_parts: list[str] = []
    usage: dict | None = None
    saw_reasoning = False

    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            for raw in resp:
                line = raw.decode("utf-8", "replace").strip()
                if not line or not line.startswith("data:"):
                    continue
                data = line[5:].strip()
                if data == "[DONE]":
                    break
                try:
                    obj = json.loads(data)
                except json.JSONDecodeError:
                    continue
                if obj.get("usage"):
                    usage = obj["usage"]
                choices = obj.get("choices") or []
                if not choices:
                    continue
                delta = choices[0].get("delta") or {}
                if delta.get("reasoning_content"):
                    saw_reasoning = True
                    if ttft_any is None:
                        ttft_any = time.perf_counter() - start
                piece = delta.get("content")
                if piece:
                    now = time.perf_counter() - start
                    if ttft_any is None:
                        ttft_any = now
                    if ttft_content is None:
                        ttft_content = now
                    text_parts.append(piece)
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "error": str(exc), "total_s": time.perf_counter() - start}

    total_s = time.perf_counter() - start
    text = "".join(text_parts).strip()
    final = THINK_RE.sub("", text).strip()  # drop any inline <think> blocks

    if usage and usage.get("completion_tokens"):
        out_tokens = int(usage["completion_tokens"])  # ALL generated tokens (reasoning + answer)
    else:
        out_tokens = max(1, round(len(final.split()) * 1.3))  # rough fallback

    # Throughput = all generated tokens / the FULL decode window, measured from the
    # first emitted token (reasoning OR answer) to the end. Dividing by the time to
    # first *content* token instead would drop the entire reasoning phase from the
    # denominator while still counting its tokens in the numerator -> absurd tok/s
    # (that was the bug: a short answer after long thinking reported 342k tok/s).
    decode_s = max(1e-6, total_s - (ttft_any or 0))
    return {
        "ok": True,
        "text": final,
        "raw_text": text,
        "ttft_s": ttft_any if ttft_any is not None else total_s,                       # latency to first token of any kind
        "answer_latency_s": ttft_content if ttft_content is not None else (ttft_any or total_s),  # to first ANSWER token
        "total_s": total_s,
        "out_tokens": out_tokens,
        "tok_per_s": out_tokens / decode_s,
        "saw_reasoning": saw_reasoning,
    }


# --------------------------------------------------------------------------- #
# Scoring
# --------------------------------------------------------------------------- #
def score_task(task: dict, answer: str) -> float | None:
    """Auto-score a task if it's checkable. Returns 0..1, or None if not scorable."""
    s = task.get("score")
    if not s:
        return None
    kind = s.get("type")
    low = answer.lower()

    if kind == "numeric":
        nums = re.findall(r"-?\d+(?:\.\d+)?", answer.replace(",", ""))
        if not nums:
            return 0.0
        target = float(s["value"])
        tol = float(s.get("tol", 0.0))
        # Credit if the target appears among the numbers the model produced.
        return 1.0 if any(abs(float(n) - target) <= tol for n in nums) else 0.0

    if kind == "keywords":
        need = [k.lower() for k in s["all"]]
        hit = sum(1 for k in need if k in low)
        return hit / len(need) if need else None

    if kind == "any":
        opts = [k.lower() for k in s["any"]]
        return 1.0 if any(k in low for k in opts) else 0.0

    if kind == "regex":
        return 1.0 if re.search(s["pattern"], answer, re.IGNORECASE) else 0.0

    return None


# --------------------------------------------------------------------------- #
# Optional GPU sampler (only meaningful when run on the model's host)
# --------------------------------------------------------------------------- #
class GpuSampler(threading.Thread):
    def __init__(self) -> None:
        super().__init__(daemon=True)
        self.samples: list[tuple[float, float]] = []
        self._stop = threading.Event()

    def run(self) -> None:
        while not self._stop.is_set():
            try:
                out = subprocess.check_output(
                    ["nvidia-smi", "--query-gpu=memory.used,utilization.gpu",
                     "--format=csv,noheader,nounits"],
                    text=True, timeout=2,
                ).strip().splitlines()[0]
                mem, util = (float(x) for x in out.split(","))
                self.samples.append((mem, util))
            except Exception:  # noqa: BLE001
                pass
            self._stop.wait(0.5)

    def stop(self) -> dict | None:
        self._stop.set()
        self.join(timeout=2)
        if not self.samples:
            return None
        return {
            "peak_mem_mib": max(s[0] for s in self.samples),
            "avg_util_pct": round(statistics.mean(s[1] for s in self.samples), 1),
        }


# --------------------------------------------------------------------------- #
# LLM-as-judge (optional, uses one of your local models)
# --------------------------------------------------------------------------- #
JUDGE_SYSTEM = (
    "You are a strict grader. Score the assistant answer from 1 to 5 for "
    "correctness, clarity, and usefulness as a beginner finance tutor. "
    "Reply with ONLY the integer score."
)


def judge_answer(judge_cfg: dict, question: str, answer: str, timeout: int,
                 max_tokens: int = 2048) -> int | None:
    msgs = [
        {"role": "system", "content": JUDGE_SYSTEM},
        {"role": "user", "content": f"Question:\n{question}\n\nAnswer:\n{answer}\n\nScore (1-5):"},
    ]
    # A reasoning judge spends tokens thinking before it answers; max_tokens=8 left
    # it no room to emit the score at all. Give it headroom and take the LAST 1-5
    # digit in the (post-reasoning) content, which is the final verdict.
    r = call_model(judge_cfg, msgs, max_tokens=max_tokens, temperature=0.0, timeout=timeout)
    if not r.get("ok"):
        return None
    hits = re.findall(r"[1-5]", r["text"])
    return int(hits[-1]) if hits else None


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def load_suite(path: Path) -> list[dict]:
    tasks = []
    for line in path.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("//"):
            tasks.append(json.loads(line))
    return tasks


def main() -> int:
    ap = argparse.ArgumentParser(description="Local LLM comparison harness")
    ap.add_argument("--config", default=str(HERE / "models.json"))
    ap.add_argument("--suite", default=str(HERE / "suite.jsonl"))
    ap.add_argument("--runs", type=int, default=1, help="repeats per task (median reported)")
    ap.add_argument("--max-tokens", type=int, default=1024)
    ap.add_argument("--temperature", type=float, default=0.2)
    ap.add_argument("--system-suffix", default="",
                    help="text appended to every system prompt (e.g. '/no_think' to disable reasoning)")
    ap.add_argument("--timeout", type=int, default=120)
    ap.add_argument("--gpu", action="store_true", help="sample nvidia-smi during runs")
    ap.add_argument("--judge", default="", help="model key from config to grade answers")
    ap.add_argument("--judge-max-tokens", type=int, default=2048,
                    help="token budget per judge call (reasoning judges need room to think before the score)")
    ap.add_argument("--out", default=str(HERE / "results"))
    args = ap.parse_args()

    cfg = json.loads(Path(args.config).read_text())
    models = [m for m in cfg["models"] if m.get("enabled", True)]
    suite = load_suite(Path(args.suite))
    if not models:
        print("No enabled models in config.", file=sys.stderr)
        return 1
    judge_cfg = next((m for m in cfg["models"] if m.get("key") == args.judge), None)

    print(f"Racing {len(models)} model(s) over {len(suite)} task(s), "
          f"{args.runs} run(s) each…\n")

    results: dict = {"started": datetime.now().isoformat(), "models": {}}

    for m in models:
        key = m.get("key", m["model"])
        print(f"=== {key}  ({m['model']} @ {m['base_url']}) ===")
        gpu = GpuSampler() if args.gpu else None
        if gpu:
            gpu.start()

        per_task = []
        for task in suite:
            sys_prompt = task.get("system", cfg.get("default_system", ""))
            if args.system_suffix:
                sys_prompt = f"{sys_prompt} {args.system_suffix}".strip()
            messages = []
            if sys_prompt:
                messages.append({"role": "system", "content": sys_prompt})
            messages.append({"role": "user", "content": task["prompt"]})

            runs = []
            for _ in range(args.runs):
                r = call_model(m, messages, args.max_tokens, args.temperature, args.timeout)
                runs.append(r)
            ok_runs = [r for r in runs if r.get("ok")]
            if not ok_runs:
                per_task.append({"id": task["id"], "category": task.get("category"),
                                 "ok": False, "error": runs[-1].get("error", "failed")})
                print(f"  [{task['id']:<18}] FAILED: {runs[-1].get('error','')[:60]}")
                continue

            best = min(ok_runs, key=lambda r: r["total_s"])  # representative run
            answer = best["text"]
            score = score_task(task, answer)
            per_task.append({
                "id": task["id"],
                "category": task.get("category"),
                "ok": True,
                "ttft_s": round(statistics.median(r["ttft_s"] for r in ok_runs), 3),
                "answer_latency_s": round(statistics.median(r["answer_latency_s"] for r in ok_runs), 3),
                "tok_per_s": round(statistics.median(r["tok_per_s"] for r in ok_runs), 1),
                "total_s": round(statistics.median(r["total_s"] for r in ok_runs), 2),
                "out_tokens": best["out_tokens"],
                "score": score,
                "answer": answer,
            })
            sc = "-" if score is None else f"{score:.2f}"
            print(f"  [{task['id']:<18}] {per_task[-1]['tok_per_s']:>6.1f} tok/s  "
                  f"ttft {per_task[-1]['ttft_s']:>5.2f}s  score {sc}")

        gpu_stats = gpu.stop() if gpu else None
        results["models"][key] = {"config": m, "tasks": per_task, "gpu": gpu_stats}
        print()

    # Optional judging pass.
    if judge_cfg:
        print(f"Judging with {judge_cfg.get('key')}…")
        for key, mres in results["models"].items():
            for t in mres["tasks"]:
                if t.get("ok"):
                    q = next((s["prompt"] for s in suite if s["id"] == t["id"]), "")
                    t["judge"] = judge_answer(judge_cfg, q, t["answer"], args.timeout,
                                              args.judge_max_tokens)

    write_reports(results, suite, Path(args.out))
    return 0


def _agg(tasks: list[dict], field: str) -> float | None:
    vals = [t[field] for t in tasks if t.get("ok") and t.get(field) is not None]
    return round(statistics.mean(vals), 2) if vals else None


def write_reports(results: dict, suite: list[dict], out_root: Path) -> None:
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    out = out_root / stamp
    out.mkdir(parents=True, exist_ok=True)
    (out / "results.json").write_text(json.dumps(results, indent=2))

    # Leaderboard.
    rows = []
    for key, mres in results["models"].items():
        tasks = mres["tasks"]
        scored = [t["score"] for t in tasks if t.get("ok") and t.get("score") is not None]
        judged = [t["judge"] for t in tasks if t.get("ok") and t.get("judge") is not None]
        rows.append({
            "model": key,
            "avg_acc": round(statistics.mean(scored), 3) if scored else None,
            "avg_judge": round(statistics.mean(judged), 2) if judged else None,
            "tok_s": _agg(tasks, "tok_per_s"),
            "ttft": _agg(tasks, "ttft_s"),
            "answer_lat": _agg(tasks, "answer_latency_s"),
            "fails": sum(1 for t in tasks if not t.get("ok")),
            "gpu": mres.get("gpu"),
        })
    rows.sort(key=lambda r: (-(r["avg_acc"] or 0), -(r["tok_s"] or 0)))

    lines = ["# Model leaderboard", "",
             f"Generated {results['started']} · {len(suite)} tasks", "",
             "| Model | Accuracy | Judge (1-5) | Tok/s | TTFT (s) | Answer (s) | Fails | Peak VRAM |",
             "|---|---|---|---|---|---|---|---|"]
    for r in rows:
        vram = f"{r['gpu']['peak_mem_mib']:.0f} MiB" if r.get("gpu") else "—"
        acc = "—" if r["avg_acc"] is None else f"{r['avg_acc']:.2f}"
        jdg = "—" if r["avg_judge"] is None else f"{r['avg_judge']:.1f}"
        lines.append(f"| {r['model']} | {acc} | {jdg} | {r['tok_s']} | "
                     f"{r['ttft']} | {r['answer_lat']} | {r['fails']} | {vram} |")
    lines += ["", "Accuracy = auto-scored checkable tasks (0-1). Judge = optional "
              "local-model grade. **TTFT** = latency to first token of any kind; "
              "**Answer (s)** = latency to the first answer token (after reasoning) "
              "— the wait a user actually feels. **Tok/s** = all generated tokens "
              "(reasoning + answer) over the full decode window. Sort: accuracy, then speed."]
    (out / "leaderboard.md").write_text("\n".join(lines))

    # Side-by-side answers.
    alines = ["# Answers by task", ""]
    for task in suite:
        alines.append(f"## {task['id']}  ({task.get('category','')})")
        alines.append(f"> {task['prompt']}")
        alines.append("")
        for key, mres in results["models"].items():
            t = next((x for x in mres["tasks"] if x["id"] == task["id"]), None)
            if not t or not t.get("ok"):
                alines.append(f"**{key}** — _failed_\n")
                continue
            sc = "" if t.get("score") is None else f" · score {t['score']:.2f}"
            alines.append(f"**{key}** ({t['tok_per_s']} tok/s{sc}):")
            alines.append(t["answer"] or "_(empty)_")
            alines.append("")
    (out / "answers.md").write_text("\n".join(alines))

    print(f"Wrote {out}/leaderboard.md, answers.md, results.json")
    print((out / "leaderboard.md").read_text())


if __name__ == "__main__":
    raise SystemExit(main())
