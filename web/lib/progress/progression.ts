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
  /** Whether the lesson has a quiz. Defaults to true; a quiz-less lesson can't gate. */
  hasQuiz?: boolean;
}

/** Coerce a persisted score to a finite fraction in [0,1]; anything else → 0. */
function sanitizeScore(raw: unknown): number {
  return typeof raw === "number" && Number.isFinite(raw) ? Math.min(1, Math.max(0, raw)) : 0;
}

function statusFor(slug: string, unlocked: boolean, progress: Progress): LessonStatus {
  const q = progress.quizzes[slug];
  const bestScore = sanitizeScore(q?.bestScore);
  return {
    slug,
    unlocked,
    passed: bestScore >= PASS_SCORE,
    mastered: bestScore >= MASTERY_SCORE,
    bestScore,
    attempts: q?.attempts ?? 0,
  };
}

/**
 * Status for every lesson, in order. Lesson i unlocks when lesson i-1 is passed.
 * A lesson with no quiz can't be "passed", so it would otherwise dead-end the
 * ladder — instead it unlocks straight through to the next lesson.
 */
export function computeProgression(lessons: OrderedLesson[], progress: Progress): LessonStatus[] {
  const out: LessonStatus[] = [];
  let prevUnlocksNext = true; // the first lesson is always unlocked
  for (const lesson of lessons) {
    const status = statusFor(lesson.slug, prevUnlocksNext, progress);
    out.push(status);
    const gates = lesson.hasQuiz !== false; // a quiz-less lesson never blocks
    prevUnlocksNext = gates ? status.passed : true;
  }
  return out;
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
