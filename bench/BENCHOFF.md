# Tutor model bench-off — results (2026-06-16)

Goal: pick the best self-hosted model for the RAG tutor on the 5090 (32 GB) — **speed +
grounded accuracy + no hallucination**, not coding scores. Run with
`deploy/eval-models.sh` over `bench/suite-grounded.jsonl` (the tutor system prompt + lesson
excerpts; in-context questions scored for correctness, out-of-context questions scored for
*abstention*). One model fits in VRAM at a time, so each was served in turn on `:8082` and
the production Q5 service restored afterward.

Validated run: **31 cases** (21 in-context, 10 adversarial), **`--runs 3`**, ctx 16k, tuned
llama-server flags. (An earlier 14-case / runs-2 pass had enough noise that single scores
swung ±0.1; doubling the suite and the run count settled it.)

## Leaderboard

| Rank | Model | Quant | Hallucination | Grounded acc | Answer (s) | Tok/s | VRAM (MiB) |
|---|---|---|---|---|---|---|---|
| 1 | **Qwen3.6-35B-A3B (MoE)** | Q5_K_XL | **0.00** | **1.00** | 0.06 | 184 | 27904 |
| 2 | Qwen3.6-27B (dense) | Q6_K | **0.00** | 0.95 | 0.07 | 57 | 24020 |
| 3 | Nemotron-3-Nano-Omni (**current prod**) | Q5_K_XL | 0.10 | 0.95 | 0.07 | 256 | 29946 |
| 4 | Nemotron-3-Nano-Omni | Q4_K_XL | 0.10 | 0.95 | 0.07 | 262 | 24922 |

- **Hallucination** = fraction of out-of-context questions answered instead of abstaining (the gate; lower is better).
- **Grounded acc** = correctness on in-context questions. **Answer (s)** = latency to first answer token (felt latency). **Tok/s** = decode throughput.

## Recommendation: Qwen3.6-35B-A3B (MoE), Q5_K_XL

It's the only model that's **perfect on both grounding (1.00) and abstention (0% hallucination)**
while staying **fast** — ~0.06 s felt latency and 184 tok/s, because only ~3B of its 35B params
are active. The clearest result of the run: **both Qwen3.6 models abstained on all 10
out-of-context questions, while both Nemotron quants answered 1 of 10 instead of abstaining**
(0.10). On the priority "no hallucination" metric, Qwen3.6 beats the incumbent consistently.

The dense 27B is equally faithful but ~3-4× slower (57 vs 184 tok/s). The two Nemotron quants
are fast and strong on grounded accuracy (0.95) but slightly less reliable at refusing
out-of-context questions.

## Key finding: Qwen3.6 ignores `/no_think`

Unlike Nemotron (where `/no_think` in the system prompt suppresses chain-of-thought),
**Qwen3.6 only disables thinking via `chat_template_kwargs: {"enable_thinking": false}`** in
the request body (`/no_think`, `thinking:false`, `reasoning_effort:none` all had no effect —
it burned the whole token budget on hidden reasoning and returned empty `content`).
`bench/models.json` carries this as `extra_body` per Qwen model, and `bench/run.py` merges
`extra_body` into the request. **Adopting Qwen3.6 for the tutor requires
`web/lib/tutor/llm.ts` to send the same `extra_body`** (and making the MoE the served model).

## To adopt qwen36-moe in production

1. Point the `llama-nemotron` NSSM service at `G:\llama\models\bench\Qwen3.6-35B-A3B-UD-Q5_K_XL.gguf`
   (via `swap-model.ps1`) — it fits at ~28 GB with the 16k KV cache.
2. In `web/lib/tutor/llm.ts`, add `chat_template_kwargs: {enable_thinking: false}` to the
   request body (keep the retrieval-grounding + graceful fallback unchanged; the `/no_think`
   in the system prompt becomes a harmless no-op for Qwen).
3. Update `web/.env.local` `TUTOR_MODEL` to the MoE filename.

## Notes

- The two Qwen3.6 GGUFs (~50 GB) are at `G:\llama\models\bench\` on the box. Keep the MoE if
  adopting; delete both if not.
- llama.cpp on the box already supports the Qwen3.6 hybrid arch (loaded and served fine).
