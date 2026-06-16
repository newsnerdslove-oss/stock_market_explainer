import type { Lesson } from "@/lib/lessons/types";
import { lesson as whatIsACandle } from "@/lib/lessons/content/what-is-a-candle";
import { lesson as lineVsCandle } from "@/lib/lessons/content/line-vs-candle";
import { lesson as bidAskSpread } from "@/lib/lessons/content/bid-ask-spread";
import { lesson as profitAndLoss } from "@/lib/lessons/content/profit-and-loss";
import { lesson as peRatio } from "@/lib/lessons/content/pe-ratio";

// Ordered list of lessons. This is the single source of truth for the Learn
// MVP; later phases swap this module for Supabase-backed queries while keeping
// the same Lesson shape and helper signatures.
export const lessons: Lesson[] = [
  whatIsACandle,
  lineVsCandle,
  bidAskSpread,
  profitAndLoss,
  peRatio,
];

export function getAllLessons(): Lesson[] {
  return lessons;
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export type { Lesson } from "@/lib/lessons/types";
