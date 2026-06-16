// Answer checking — the single boundary where a response meets the answer key.
//
// Kept deliberately separate so that when scores eventually gate something that
// "counts" (Phase 3+: server-graded, per-user), the correct ids can move behind
// an API and only this module changes — not the content or the UI.
//
// Phase 2a is a formative, low-stakes learning quiz, so the key lives client-side
// (immediate corrective feedback is the entire point). checkAnswer covers the
// single-answer choice types the UI renders today.

import type { ChoiceQuestion } from "@/lib/quiz/types";

export interface CheckResult {
  correct: boolean;
  /** The id of the correct choice — so the UI can highlight it after answering. */
  correctId: string;
  /** Always shown after answering. */
  explanation: string;
  /** Per-choice rationale for the option the learner actually picked, if any. */
  selectedFeedback?: string;
}

/** Grade a single-answer choice question against the picked choice id. */
export function checkAnswer(question: ChoiceQuestion, selectedId: string): CheckResult {
  const selected = question.choices.find((c) => c.id === selectedId);
  return {
    correct: selectedId === question.correctId,
    correctId: question.correctId,
    explanation: question.explanation,
    selectedFeedback: selected?.feedback,
  };
}
