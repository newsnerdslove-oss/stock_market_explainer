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
  "Answer the student's question using ONLY the lesson excerpts provided.",
  "If the excerpts do not contain the answer, say you're not certain and point",
  "them to the most relevant lesson instead of guessing.",
  "Keep answers short, plain, and encouraging. Define jargon in everyday words.",
  "Never give financial advice or tell the student what to buy, sell, or trade.",
  // Disable the model's chain-of-thought for these short, RAG-grounded answers.
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

  const chunks = retrieve(q, { currentSlug, k: 4 });
  const sources = uniqueSources(chunks);

  if (chunks.length === 0) {
    return {
      answer:
        "I couldn't find that in the lessons yet. Try rephrasing, or browse the lesson list — this topic may be coming in a later module.",
      sources: [],
      mode: "none",
    };
  }

  const context = chunks
    .map((c, i) => `[${i + 1}] (${c.lessonTitle}) ${c.text}`)
    .join("\n\n");

  // Preferred path: let the self-hosted model explain, grounded on the excerpts.
  const cfg = tutorConfig();
  if (cfg.enabled) {
    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Question: ${q}\n\nLesson excerpts:\n${context}` },
    ];
    const reply = await chat(messages);
    if (reply) return { answer: reply, sources, mode: "llm" };
  }

  // Fallback: hand back the most relevant lesson text. When the top match is
  // weak (only one query term hit, on a multi-word question), hedge the wording
  // so an incidental keyword match doesn't read as a confident answer.
  const best = chunks[0];
  const strongMatch = best.matched >= 2 || tokenize(q).length <= 1;
  const answer = strongMatch
    ? `Here's what your lessons say:\n\n"${best.text}"\n\n` +
      `Open "${best.lessonTitle}" to read it in context.`
    : `I'm not certain that's covered yet, but this looks related — from "${best.lessonTitle}":\n\n` +
      `"${best.text}"\n\nOpen the lesson to read it in full context.`;

  return {
    answer,
    sources,
    mode: "retrieval",
    llmStatus: cfg.enabled ? "unreachable" : "off",
  };
}
