// Client for a SELF-HOSTED, OpenAI-compatible chat endpoint.
//
// Works with vLLM, NVIDIA NIM, Ollama (/v1), LM Studio, llama.cpp server — any
// server that speaks POST {base}/chat/completions. Points at your LAN Nemotron
// via env vars; nothing leaves your network and there is no third-party API.
//
//   TUTOR_LLM_URL   e.g. http://192.168.110.145:8000/v1
//   TUTOR_MODEL     the model name your server exposes
//   TUTOR_API_KEY   optional (most local servers ignore it)

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export function tutorConfig() {
  const baseUrl = (process.env.TUTOR_LLM_URL ?? "").trim().replace(/\/$/, "");
  const model = (process.env.TUTOR_MODEL ?? "").trim();
  const apiKey = (process.env.TUTOR_API_KEY ?? "").trim();
  return { baseUrl, model, apiKey, enabled: Boolean(baseUrl && model) };
}

/**
 * Call the self-hosted model. Returns the assistant text, or null on any
 * failure (not configured, unreachable, timeout, bad response) so callers can
 * fall back to retrieval-only answers.
 */
export async function chat(
  messages: ChatMessage[],
  opts: { temperature?: number; maxTokens?: number; timeoutMs?: number } = {},
): Promise<string | null> {
  const { baseUrl, model, apiKey, enabled } = tutorConfig();
  if (!enabled) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), opts.timeoutMs ?? 20000);
  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: opts.temperature ?? 0.2,
        // Generous budget: reasoning models (e.g. Nemotron) spend tokens on
        // hidden `reasoning_content` first, so a low cap can leave `content`
        // empty. Keep this high enough that the visible answer survives.
        max_tokens: opts.maxTokens ?? 1024,
        stream: false,
      }),
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    return typeof content === "string" && content.trim() ? content.trim() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
