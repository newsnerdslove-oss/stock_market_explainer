# Tutor model bench-off — results (2026-06-16)

Goal: pick the best self-hosted model for the RAG tutor on the 5090 (32 GB) — **speed +
grounded accuracy + no hallucination**, not coding scores. Run with
`deploy/eval-models.sh` over `bench/suite-grounded.jsonl` (the tutor system prompt + lesson
excerpts; in-context questions scored for correctness, out-of-context questions scored for
*abstention*). One model fits in VRAM at a time, so each was served in turn on `:8082` and
the production Q5 service restored afterward. `--runs 2`, ctx 16k, tuned llama-server flags.

## Leaderboard

| Rank | Model | Quant | Hallucination | Grounded acc | Answer (s) | Tok/s | VRAM (MiB) |
|---|---|---|---|---|---|---|---|
| 1 | **Qwen3.6-35B-A3B (MoE)** | Q5_K_XL | 0.00 | 1.00 | 0.10 | 184 | 28048 |
| 2 | Nemotron-3-Nano-Omni (prod family) | Q4_K_XL | 0.00 | 0.89 | 0.10 | 260 | 25066 |
| 3 | Nemotron-3-Nano-Omni (**current prod**) | Q5_K_XL | 0.00 | 0.78 | 0.10 | 250 | 30090 |
| 4 | Qwen3.6-27B (dense) | Q6_K | 0.20 | 1.00 | 0.68 | 57 | 24164 |

- **Hallucination** = fraction of out-of-context questions answered instead of abstaining (the gate; lower is better).
- **Grounded acc** = correctness on in-context questions. **Answer (s)** = latency to first answer token (felt latency). **Tok/s** = decode throughput.

## Recommendation

**Qwen3.6-35B-A3B (MoE), Q5_K_XL** is the empirical winner: it matches Nemotron's felt
latency (~0.1 s, because only ~3B params are active) while scoring highest on grounded
accuracy (1.00) and tying on zero hallucination. The dense 27B is equally accurate but ~7×
slower and less reliable at abstaining. Both Nemotron quants are fast and never hallucinate
but trail on grounded accuracy.

## Key finding: Qwen3.6 ignores `/no_think`

Unlike Nemotron (where `/no_think` in the system prompt suppresses chain-of-thought),
**Qwen3.6 only disables thinking via `chat_template_kwargs: {"enable_thinking": false}`** in
the request body (`/no_think`, `thinking:false`, `reasoning_effort:none` all had no effect —
it burned the whole token budget on hidden reasoning and returned empty `content`).
`bench/models.json` carries this as `extra_body` per Qwen model, and `bench/run.py` merges
`extra_body` into the request. **Adopting Qwen3.6 for the tutor would require
`web/lib/tutor/llm.ts` to send the same `extra_body`** (and making the MoE the served model).

## Caveats (read before acting)

- **Small suite + run-to-run variance.** 14 cases (~9 in-context, 5 adversarial), `--runs 2`.
  Single-run swings of ±0.1 are noise: Nemotron-Q5 scored 0.89 one run and 0.78 another;
  Qwen-dense scored 0.00 hallucination one run and 0.20 another. The ranking is **directional,
  not definitive** — widen the suite and raise `--runs` before treating it as final.
- The two Qwen3.6 GGUFs (~50 GB) were downloaded to `G:\llama\models\bench\` on the box and
  left there. Delete them if not adopting the MoE.
- llama.cpp on the box already supports the Qwen3.6 hybrid arch (it loaded and served fine).
