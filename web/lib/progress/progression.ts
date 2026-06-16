// Derived progression state. Unlock status is *computed* from quiz results and
// lesson order — never stored — so it can't drift out of sync with the source of
// truth. Linear ladder for now: the first lesson is always open, and each next
// lesson unlocks once the previous one's quiz is passed (≥ PASS_SCORE).

import { MASTERY_SCORE, PASS_SCORE, type Progress } from "@/lib/progress/schema";

export interface LessonStatus {
  slug: string;
  /** Reachable yet? (first lesson, or previous lesson passed). */
  unlocked: boolean;
  /** Best score ≥ PASS_SCORE. */
  passed: boolean;
  /** Best score ≥ MASTERY_SCORE. */
  mastered: boolean;
  /** Best fraction correct so far, 0..1 (0 if never attempted). */
  bestScore: number;
  attempts: number;
}

/** A lesson identified by slug, in curriculum order. */
interface OrderedLesson {
  slug: string;
}

function statusFor(slug: string, unlocked: boolean, progress: Progress): LessonStatus {
  const q = progress.quizzes[slug];
  const bestScore = q?.bestScore ?? 0;
  return {
    slug,
    unlocked,
    passed: bestScore >= PASS_SCORE,
    mastered: bestScore >= MASTERY_SCORE,
    bestScore,
    attempts: q?.attempts ?? 0,
  };
}

/** Status for every lesson, in order. Lesson i unlocks when lesson i-1 is passed. */
export function computeProgression(lessons: OrderedLesson[], progress: Progress): LessonStatus[] {
  const out: LessonStatus[] = [];
  let prevPassed = true; // the first lesson is always unlocked
  for (const lesson of lessons) {
    const status = statusFor(lesson.slug, prevPassed, progress);
    out.push(status);
    prevPassed = status.passed;
  }
  return out;
}

/** Convenience: the status of a single lesson within the ordered list. */
export function lessonStatus(
  slug: string,
  lessons: OrderedLesson[],
  progress: Progress,
): LessonStatus | undefined {
  return computeProgression(lessons, progress).find((s) => s.slug === slug);
}

export interface ProgressSummary {
  total: number;
  passed: number;
  mastered: number;
}

export function summarize(statuses: LessonStatus[]): ProgressSummary {
  return {
    total: statuses.length,
    passed: statuses.filter((s) => s.passed).length,
    mastered: statuses.filter((s) => s.mastered).length,
  };
}
