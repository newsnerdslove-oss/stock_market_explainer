# In-app tutor — ask questions while studying

Lets a learner ask "I don't get this" on any lesson and get a grounded answer —
**without any external/paid API.** It uses your self-hosted Nemotron on the LAN,
and falls back to your own lesson text when the model isn't connected.

## How it works

```
Question ─▶ /api/tutor (server) ─▶ retrieve relevant lesson excerpts
                                      │
                          model set? ─┤── yes ─▶ self-hosted Nemotron
                                      │            (grounded on excerpts)
                                      └── no  ─▶ return best excerpt verbatim
```

Two design choices make this safe and free:

1. **Grounded (RAG).** The model may only answer from the lesson excerpts the
   retriever pulls (`web/lib/tutor/retrieval.ts`). That keeps answers accurate
   and stops a small local model from inventing finance "facts."
2. **Graceful fallback.** If `TUTOR_MODEL`/`TUTOR_LLM_URL` aren't set, or the
   LAN model is unreachable, the tutor returns the matched lesson text directly.
   The feature still works with zero AI.

The model call happens **server-side** in the Next.js route, so the LAN URL and
any key never reach the browser.

## Files

| File | Role |
|---|---|
| `web/lib/tutor/retrieval.ts` | Flattens lessons into chunks; ranks them for a question. |
| `web/lib/tutor/llm.ts` | OpenAI-compatible client for the self-hosted model. |
| `web/lib/tutor/index.ts` | Orchestrator: retrieve → ask model → or fall back. |
| `web/app/api/tutor/route.ts` | `POST /api/tutor` endpoint. |
| `web/components/AskTutor.tsx` | The "ask about this lesson" UI on each lesson. |

## Connect your Nemotron

1. Find how your server exposes the model. Most self-hosted servers (NVIDIA NIM,
   vLLM, Ollama, LM Studio) speak the **OpenAI-compatible** API at
   `POST {base}/chat/completions`. Note the base URL and the model name.
2. In `web/.env.local`, set:
   ```
   TUTOR_LLM_URL=http://192.168.110.145:8000/v1   # adjust port/path
   TUTOR_MODEL=<the model name your server reports>
   TUTOR_API_KEY=                                  # usually blank for local
   ```
3. Restart `npm run dev` (env is read at server start).

### Verify the model directly (from your Mac, on the LAN)
```bash
# List models the server exposes (gives you the exact TUTOR_MODEL value):
curl http://192.168.110.145:8000/v1/models

# Try a completion:
curl http://192.168.110.145:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"<your-model>","messages":[{"role":"user","content":"hi"}]}'
```

### Verify the app endpoint
```bash
curl http://localhost:3000/api/tutor \
  -H "Content-Type: application/json" \
  -d '{"question":"what is a wick?","slug":"what-is-a-candle"}'
```
Response shape:
```json
{ "answer": "...", "sources": [{"slug":"...","title":"..."}], "mode": "llm" }
```
`mode` is `llm` when the model answered, `retrieval` when it fell back to lesson text.

> If your server uses Ollama's **native** API (`/api/chat`) instead of the
> OpenAI-compatible `/v1`, either enable Ollama's OpenAI compatibility (it ships
> with it at `/v1`) or adjust `web/lib/tutor/llm.ts` — it's a single fetch call.

## Roadmap for the tutor

- **Now:** retrieval + grounded answers from the LAN model (this).
- **Next:** stream tokens for a faster feel; remember the last few Q&As per lesson.
- **Later:** precompute embeddings for semantic retrieval (still local, via
  `transformers.js`); optional in-browser model so learners off your LAN get a
  tutor too. None of these need an external API.

> Educational only. The tutor is instructed never to give financial advice.
