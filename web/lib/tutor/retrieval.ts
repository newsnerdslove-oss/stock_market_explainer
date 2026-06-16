// Retrieval over lesson content — the grounding layer for the tutor.
//
// Flattens every lesson into small text chunks, then ranks them against a
// learner's question with a simple, dependency-free relevance score. The top
// chunks become the *only* context the LLM is allowed to answer from (and, if
// no LLM is configured, they ARE the answer). No external services, no API.

import { getAllLessons } from "@/lib/lessons";
import type { Lesson, Section } from "@/lib/lessons/types";

export interface Chunk {
  lessonSlug: string;
  lessonTitle: string;
  /** Plain text (markdown markers stripped). */
  text: string;
}

export interface RankedChunk extends Chunk {
  score: number;
  /** How many distinct query terms this chunk matched (in body or title). */
  matched: number;
}

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "was", "were", "be", "been", "to", "of", "in",
  "on", "for", "and", "or", "but", "with", "as", "at", "by", "it", "this", "that",
  "what", "why", "how", "when", "do", "does", "i", "you", "my", "me", "can", "if",
  "about", "from", "into", "vs", "mean", "means", "explain", "tell", "whats",
]);

function strip(md: string): string {
  return md.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1").trim();
}

function sectionToText(s: Section): string | null {
  switch (s.type) {
    case "text":
    case "callout":
      return strip(s.body);
    case "heading":
      return strip(s.text);
    case "list":
      return s.items.map(strip).join(" ");
    case "keyTerms":
      return s.terms.map((t) => `${t.term}: ${strip(t.def)}`).join(" ");
    case "chart":
      return s.caption ? strip(s.caption) : null;
  }
}

/** Build the searchable corpus from all lessons (one chunk per section). */
export function buildCorpus(lessons: Lesson[] = getAllLessons()): Chunk[] {
  const chunks: Chunk[] = [];
  for (const lesson of lessons) {
    for (const section of lesson.sections) {
      const text = sectionToText(section);
      if (text && text.length > 0) {
        chunks.push({ lessonSlug: lesson.slug, lessonTitle: lesson.title, text });
      }
    }
  }
  return chunks;
}

export function tokenize(s: string): string[] {
  return (s.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter(
    (w) => w.length > 1 && !STOPWORDS.has(w),
  );
}

/**
 * Rank chunks for a question. Scores by query-term overlap (with rarer terms
 * weighted higher), boosts chunks from the lesson the learner is currently on,
 * and boosts matches in the lesson title. Returns the top `k` above a floor.
 */
export function retrieve(
  question: string,
  opts: { currentSlug?: string; k?: number; corpus?: Chunk[] } = {},
): RankedChunk[] {
  const { currentSlug, k = 4 } = opts;
  const corpus = opts.corpus ?? buildCorpus();
  const qTerms = tokenize(question);
  if (qTerms.length === 0) return [];

  // Document frequency for a light idf weighting.
  const df = new Map<string, number>();
  for (const c of corpus) {
    const seen = new Set(tokenize(c.text));
    for (const t of seen) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const N = corpus.length;
  const idf = (t: string) => Math.log((N + 1) / ((df.get(t) ?? 0) + 1)) + 1;

  const ranked: RankedChunk[] = corpus.map((c) => {
    const terms = tokenize(c.text);
    const tf = new Map<string, number>();
    for (const t of terms) tf.set(t, (tf.get(t) ?? 0) + 1);
    const titleTerms = new Set(tokenize(c.lessonTitle));

    let score = 0;
    let matched = 0;
    for (const q of qTerms) {
      const inBody = tf.has(q);
      const inTitle = titleTerms.has(q);
      if (inBody) score += (tf.get(q) ?? 0) * idf(q);
      if (inTitle) score += 1.5 * idf(q); // title relevance
      if (inBody || inTitle) matched += 1;
    }
    if (currentSlug && c.lessonSlug === currentSlug) score *= 1.25; // local boost
    return { ...c, score, matched };
  });

  return ranked
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}
