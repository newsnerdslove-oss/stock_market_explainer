// Tutor orchestrator: retrieve grounded context, then either ask the
// self-hosted model to explain it, or (if no model is reachable) return the
// matched lesson text directly. Either way, answers come from YOUR lessons.

import { retrieve, tokenize, type RankedChunk } from "@/lib/tutor/retrieval";
import { chat, tutorConfig, type ChatMessage } from "@/lib/tutor/llm";

export interface TutorSource {
  slug: string;
  title: string;
}

export interface TutorAnswer {
  answer: string;
  sources: TutorSource[];
  /** "llm" = answered by the self-hosted model; "retrieval" = matched text only. */
  mode: "llm" | "retrieval" | "none";
  /**
   * Why the model wasn't used on a "retrieval" answer: "off" = not configured,
   * "unreachable" = configured but the call failed. Lets the UI explain accurately.
   */
  llmStatus?: "off" | "unreachable";
}

const SYSTEM_PROMPT = [
  "You are a patient finance tutor inside a learning app for beginners.",
  "Ground your answer in the provided lesson excerpts whenever they are relevant, and point the student to those lessons.",
  "The excerpts are a starting point, not a limit. If the student asks for more than the excerpts contain — for example 'what OTHER...' or a broader factual question about markets, investing, trading, or finance — give the fuller, correct answer from your own knowledge (e.g. actually name the major global stock exchanges), then briefly note which part went beyond the lessons. Stay brief, beginner-friendly, and on-topic.",
  "Define jargon in everyday words and keep answers short and encouraging.",
  "Do NOT give financial advice or tell the student what to buy, sell, hold, or trade, and do not predict prices — explain the concept instead.",
  "If a question is outside finance/markets, or you genuinely don't know, say so honestly rather than guessing.",
  // Disable the model's chain-of-thought for these short, mostly-grounded answers.
  // Benchmarked 2026-06-16 (bench/): `/no_think` cut time-to-first-answer-token
  // ~5x (0.51s -> 0.10s) on our 15-task suite with no real accuracy loss.
  // NOTE: this Nemotron-Omni build IGNORES its own "detailed thinking off"
  // directive — only `/no_think` (Qwen-style) suppresses reasoning here. It's a
  // harmless no-op for models that don't recognize it.
  "/no_think",
].join(" ");

function uniqueSources(chunks: RankedChunk[]): TutorSource[] {
  const seen = new Map<string, string>();
  for (const c of chunks) if (!seen.has(c.lessonSlug)) seen.set(c.lessonSlug, c.lessonTitle);
  return [...seen].map(([slug, title]) => ({ slug, title }));
}

export async function answerQuestion(
  question: string,
  currentSlug?: string,
): Promise<TutorAnswer> {
  const q = question.trim();
  if (!q) return { answer: "Ask me anything about this lesson.", sources: [], mode: "none" };

  // Only excerpts that genuinely match (2+ query terms, or any hit on a one-word
  // question) count as grounding — so an incidental keyword hit (e.g. an options
  // lesson surfacing on "stock markets") doesn't anchor the answer or get cited.
  const allChunks = retrieve(q, { currentSlug, k: 4 });
  const grounded = allChunks.filter((c) => c.matched >= 2 || tokenize(q).length <= 1);
  const sources = uniqueSources(grounded);

  // Preferred path: let the self-hosted model answer — grounded on the excerpts
  // when we have them, and from general knowledge (per the system prompt) when we
  // don't, rather than refusing a reasonable finance question outright.
  const cfg = tutorConfig();
  if (cfg.enabled) {
    const context = grounded.length
      ? grounded.map((c, i) => `[${i + 1}] (${c.lessonTitle}) ${c.text}`).join("\n\n")
      : "(No lesson excerpts closely matched this question.)";
    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Question: ${q}\n\nLesson excerpts:\n${context}` },
    ];
    const reply = await chat(messages);
    if (reply) return { answer: reply, sources, mode: "llm" };
  }

  // Model off or unreachable: fall back to the most relevant lesson text, or — if
  // nothing matched well — say so and point to the lesson list.
  if (grounded.length === 0) {
    return {
      answer:
        "I couldn't find that in the lessons, and the tutor model isn't available right now to answer from general knowledge. Try rephrasing, or browse the lesson list.",
      sources: [],
      mode: "none",
      llmStatus: cfg.enabled ? "unreachable" : "off",
    };
  }

  const best = grounded[0];
  return {
    answer:
      `Here's what your lessons say:\n\n"${best.text}"\n\n` +
      `Open "${best.lessonTitle}" to read it in context.`,
    sources,
    mode: "retrieval",
    llmStatus: cfg.enabled ? "unreachable" : "off",
  };
}
