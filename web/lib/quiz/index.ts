import type { Question } from "@/lib/quiz/types";
import { questions as whatIsACandle } from "@/lib/quiz/content/what-is-a-candle";
import { questions as lineVsCandle } from "@/lib/quiz/content/line-vs-candle";
import { questions as bidAskSpread } from "@/lib/quiz/content/bid-ask-spread";
import { questions as profitAndLoss } from "@/lib/quiz/content/profit-and-loss";
import { questions as peRatio } from "@/lib/quiz/content/pe-ratio";

// Single source of truth for the question bank, keyed by lesson slug. Mirrors
// lib/lessons/index.ts; later phases swap this for Supabase-backed queries while
// keeping the same Question shape and helper signatures.
const byLesson: Record<string, Question[]> = {
  "what-is-a-candle": whatIsACandle,
  "line-vs-candle": lineVsCandle,
  "bid-ask-spread": bidAskSpread,
  "profit-and-loss": profitAndLoss,
  "pe-ratio": peRatio,
};

/** Questions for one lesson's quiz, in authored order. Empty if none exist. */
export function getQuiz(lessonSlug: string): Question[] {
  return byLesson[lessonSlug] ?? [];
}

/** True if a lesson has any questions authored. */
export function hasQuiz(lessonSlug: string): boolean {
  return getQuiz(lessonSlug).length > 0;
}

/** Every question across all lessons (for future review/spaced-repetition use). */
export function getAllQuestions(): Question[] {
  return Object.values(byLesson).flat();
}

export type { Question } from "@/lib/quiz/types";
