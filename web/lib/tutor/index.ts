// Tutor orchestrator: retrieve grounded context, then either ask the
// self-hosted model to explain it, or (if no model is reachable) return the
// matched lesson text directly. Either way, answers come from YOUR lessons.

import { retrieve, type RankedChunk } from "@/lib/tutor/retrieval";
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
}

const SYSTEM_PROMPT = [
  "You are a patient finance tutor inside a learning app for beginners.",
  "Answer the student's question using ONLY the lesson excerpts provided.",
  "If the excerpts do not contain the answer, say you're not certain and point",
  "them to the most relevant lesson instead of guessing.",
  "Keep answers short, plain, and encouraging. Define jargon in everyday words.",
  "Never give financial advice or tell the student what to buy, sell, or trade.",
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
  if (tutorConfig().enabled) {
    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Question: ${q}\n\nLesson excerpts:\n${context}` },
    ];
    const reply = await chat(messages);
    if (reply) return { answer: reply, sources, mode: "llm" };
  }

  // Fallback: no model reachable — hand back the most relevant lesson text.
  const best = chunks[0];
  return {
    answer:
      `Here's what your lessons say:\n\n"${best.text}"\n\n` +
      `Open "${best.lessonTitle}" to read it in context.`,
    sources,
    mode: "retrieval",
  };
}
