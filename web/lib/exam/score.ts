// Exam scorer — the ANALYTICS layer of the composable exam engine.
//
// Pure function over a question list and the learner's answers. Beyond the
// overall pass/fail, it buckets results back by Series 7 function so the results
// screen can surface a per-function weak-spot breakdown — the same fn tags the
// blueprint sampled on, used in reverse.

import { checkAnswer } from "@/lib/quiz/check";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { EXAM_PASS_SCORE, functionByTag, questionFunction } from "@/lib/exam/blueprint";

export interface FunctionScore {
  tag: string;
  code: string;
  label: string;
  correct: number;
  total: number;
  /** correct / total, 0..1; null when the exam had no questions for this function. */
  score: number | null;
}

export interface MissedQuestion {
  question: ChoiceQuestion;
  /** The choice the learner picked, or null if they skipped it. */
  selectedId: string | null;
}

export interface ExamResult {
  correct: number;
  total: number;
  /** Fraction correct, 0..1. */
  score: number;
  passed: boolean;
  /** Per-function breakdown, ordered by function code (F1..F4). */
  byFunction: FunctionScore[];
  /** The function the learner did worst on (lowest score), or null. */
  weakest: FunctionScore | null;
  /** Wrong or skipped questions, for the review list. */
  missed: MissedQuestion[];
}

/**
 * Score a completed exam. `answers` maps a question id to the selected choice
 * id; a missing entry is treated as skipped (wrong).
 */
export function scoreExam(
  questions: ChoiceQuestion[],
  answers: Record<string, string>,
): ExamResult {
  let correct = 0;
  const missed: MissedQuestion[] = [];
  const fnAgg = new Map<string, { correct: number; total: number }>();

  for (const q of questions) {
    const sel = answers[q.id] ?? null;
    const isRight = sel != null && checkAnswer(q, sel).correct;
    if (isRight) correct++;
    else missed.push({ question: q, selectedId: sel });

    const fn = questionFunction(q);
    if (fn) {
      const agg = fnAgg.get(fn) ?? { correct: 0, total: 0 };
      agg.total++;
      if (isRight) agg.correct++;
      fnAgg.set(fn, agg);
    }
  }

  const total = questions.length;
  const score = total > 0 ? correct / total : 0;

  const byFunction: FunctionScore[] = [...fnAgg.entries()]
    .map(([tag, a]) => {
      const f = functionByTag[tag];
      return {
        tag,
        code: f?.code ?? tag,
        label: f?.label ?? tag,
        correct: a.correct,
        total: a.total,
        score: a.total > 0 ? a.correct / a.total : null,
      };
    })
    .sort((a, b) => a.code.localeCompare(b.code));

  const ranked = byFunction
    .filter((f): f is FunctionScore & { score: number } => f.score != null)
    .sort((a, b) => a.score - b.score);

  return {
    correct,
    total,
    score,
    passed: score >= EXAM_PASS_SCORE,
    byFunction,
    weakest: ranked[0] ?? null,
    missed,
  };
}
