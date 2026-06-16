# Model comparison harness

Race self-hosted reasoning models on your 5090 and pick the best one with data,
not vibes. Measures **speed** (time-to-first-token, tokens/sec) and **quality**
(auto-scored checkable tasks + an optional local LLM-as-judge). Pure standard
library — no pip installs, no external APIs.

## Quick start

1. **Serve a model** on your box with an OpenAI-compatible API. Any of these work:
   - llama.cpp: `llama-server -m model.gguf --port 8000` → API at `http://HOST:8000/v1`
   - Ollama: built-in OpenAI compat at `http://HOST:11434/v1`
   - vLLM / LM Studio / NVIDIA NIM: all expose `/v1/chat/completions`
2. **Point the harness at it** — edit `models.json` (`base_url`, `model`, `enabled`).
   Get the exact model name with `curl http://HOST:8000/v1/models`.
3. **Run it** (on the same machine as the model if you want VRAM numbers):
   ```bash
   python run.py --gpu
   ```
   Add `--runs 3` to median over repeats, `--judge qwen3-32b` to grade quality
   with one of your models.

Results land in `bench/results/<timestamp>/`: `leaderboard.md`, `answers.md`
(side-by-side), and `results.json`.

### Try it with no GPU first
```bash
python mock_server.py 8999 &
# set one model's base_url to http://localhost:8999/v1, enabled:true
python run.py
```

## What it measures

| Metric | Meaning |
|---|---|
| **Accuracy** | Fraction of checkable tasks answered correctly (math, format, domain). Objective. |
| **Judge (1-5)** | Optional: one local model grades each answer for tutor quality. |
| **Tok/s** | Generation throughput (higher = snappier). |
| **TTFT** | Time to first token — the latency a user feels before words appear. |
| **Peak VRAM** | Sampled from `nvidia-smi` during the run (with `--gpu`). |

The suite (`suite.jsonl`) mixes grounded tutor explanations, multi-step math
(P&L, margin buying power, option payoff, compounding), instruction-following,
and domain knowledge — chosen so a strong reasoning model visibly separates from
a fast-but-shallow one. Edit it freely; each line is one task.

## Picking the "max capacity" model for a 32GB 5090

Footprints to fill the card (leave ~4-6GB for context KV cache):

| Model | Type | Quant to target | Approx VRAM | Notes |
|---|---|---|---|---|
| **Qwen3 32B** | dense | Q5_K_M / Q6_K | ~24-28 GB | The dense reasoning model to beat; uses most of the card. |
| **DeepSeek-R1-Distill 32B** | dense | Q4_K_M / Q5 | ~19-24 GB | Reasoning-tuned distill. |
| **GLM-4.x 30B** | MoE | Q4_K_M | ~22-24 GB | Strong general/coding. |
| **Nemotron Nano 30B-A3B** | MoE (3B active) | Q5/Q6 | ~20-25 GB | Fast + multimodal + 256k ctx (your current pick). Run higher quant since you have room. |
| **gpt-oss-20b** | dense-ish | MXFP4 | ~15 GB | Smaller but very fast (~290-420 tok/s) — a great latency baseline. |

Rule: a dense 32B at Q5/Q6 generally **reasons** best and fills the 32GB; MoEs
(Nemotron, GLM) are **faster** for the same memory. This harness tells you which
trade wins for the tutor — run it, read `leaderboard.md`.

> Tip: for the tutor specifically, weight TTFT and accuracy over raw tok/s —
> answers are short and RAG-grounded, so latency and correctness matter most.
