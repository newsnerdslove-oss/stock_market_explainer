#!/usr/bin/env python3
"""Smoke-test the local model endpoint from your Mac. Changes nothing.

Confirms the OpenAI-compatible server is live, lists the model(s), and runs one
tiny timed completion to report latency and rough tokens/sec.

    python3 healthcheck.py                       # defaults to 192.168.110.145:8082
    python3 healthcheck.py 192.168.110.145 8082
"""
import json
import sys
import time
import urllib.request

host = sys.argv[1] if len(sys.argv) > 1 else "192.168.110.145"
port = sys.argv[2] if len(sys.argv) > 2 else "8082"
base = f"http://{host}:{port}/v1"


def get_json(url):
    with urllib.request.urlopen(url, timeout=5) as r:
        return json.load(r)


def main() -> int:
    print(f"Probing {base} …")
    try:
        models = get_json(f"{base}/models")
    except Exception as exc:  # noqa: BLE001
        print(f"  DOWN — could not reach {base}/models: {exc}")
        print("  Is the llama-nemotron service running on the box? "
              "(check: Get-Service llama-nemotron)")
        return 1

    ids = [m.get("id") for m in models.get("data", [])]
    if not ids:
        print("  Reachable, but no models listed.")
        return 1
    model = ids[0]
    print(f"  LIVE. Models: {', '.join(ids)}")
    print(f"  Testing completion with: {model}")

    payload = {
        "model": model,
        "messages": [{"role": "user", "content": "Reply with exactly: ok"}],
        "max_tokens": 64,
        "stream": True,
        "stream_options": {"include_usage": True},
    }
    req = urllib.request.Request(
        f"{base}/chat/completions",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    start = time.perf_counter()
    ttft = None
    toks = 0
    usage = None
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            for raw in resp:
                line = raw.decode("utf-8", "replace").strip()
                if not line.startswith("data:"):
                    continue
                data = line[5:].strip()
                if data == "[DONE]":
                    break
                obj = json.loads(data)
                if obj.get("usage"):
                    usage = obj["usage"]
                ch = obj.get("choices") or []
                if ch and (ch[0].get("delta") or {}).get("content"):
                    if ttft is None:
                        ttft = time.perf_counter() - start
    except Exception as exc:  # noqa: BLE001
        print(f"  Completion failed: {exc}")
        return 1

    total = time.perf_counter() - start
    out = (usage or {}).get("completion_tokens", 0)
    gen = max(1e-6, total - (ttft or 0))
    print(f"  TTFT: {ttft:.2f}s · total: {total:.2f}s · "
          f"out tokens: {out} · ~{out / gen:.0f} tok/s")
    print("  OK — the tutor can use this. Set TUTOR_LLM_URL="
          f"{base} and TUTOR_MODEL={model}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
