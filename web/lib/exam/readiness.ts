// Exam readiness — turns persisted exam history into a forward-looking signal.
//
// Aggregates the per-function tallies stored on each ExamAttempt into a single
// "are you ready?" verdict: a projected exam score (each function's accuracy
// weighted by its real Series 7 weight) plus a per-function breakdown and a
// concrete recommendation. Pure function — no UI, no persistence, no clock.

import type { ExamAttempt } from "@/lib/progress/schema";
import { EXAM_PASS_SCORE, FUNCTIONS } from "@/lib/exam/blueprint";

export type FunctionStatus = "ready" | "borderline" | "weak" | "untested";

export interface FunctionReadiness {
  tag: string;
  code: string;
  label: string;
  weight: number;
  /** Total questions answered for this function across all attempts. */
  seen: number;
  correct: number;
  /** correct / seen, 0..1; null when never tested. */
  accuracy: number | null;
  status: FunctionStatus;
}

export type OverallVerdict = "ready" | "almost" | "building" | "no-data";

export interface Readiness {
  attempts: number;
  totalSeen: number;
  /**
   * Projected exam score: each tested function's accuracy weighted by its real
   * exam weight, renormalized over the functions actually tested (so untested
   * functions lower confidence/coverage rather than zeroing the estimate).
   * Null when there's no history.
   */
  projectedScore: number | null;
  passProjected: boolean;
  /** Functions tested (seen > 0) out of the four. */
  coverage: number;
  overall: OverallVerdict;
  byFunction: FunctionReadiness[];
  /** Tested functions below the pass bar, weakest first. */
  weakest: FunctionReadiness[];
  recommendation: string;
}

/** A function reads "ready" only with a margin above the 72% pass bar. */
const READY_AT = 0.75;
const WEAK_BELOW = 0.65;

function statusFor(accuracy: number | null): FunctionStatus {
  if (accuracy == null) return "untested";
  if (accuracy < WEAK_BELOW) return "weak";
  if (accuracy < READY_AT) return "borderline";
  return "ready";
}

function buildRecommendation(
  overall: OverallVerdict,
  weakest: FunctionReadiness[],
  byFunction: FunctionReadiness[],
): string {
  if (overall === "no-data") {
    return "Take a practice exam to see where you stand against the 72% pass bar.";
  }
  if (overall === "ready") {
    return "You're above the passing bar across all four functions — keep taking full mocks to stay exam-sharp.";
  }
  const untested = byFunction.filter((f) => f.seen === 0);
  const parts: string[] = [];
  if (weakest.length > 0) {
    const w = weakest[0];
    parts.push(`Your weakest area is ${w.code} (${Math.round((w.accuracy ?? 0) * 100)}%) — drill it.`);
  }
  if (untested.length > 0) {
    parts.push(
      `You haven't been tested on ${untested.map((f) => f.code).join(", ")} yet; a full mock covers every function.`,
    );
  }
  if (parts.length === 0) parts.push("Keep taking full mocks to push above the 72% bar.");
  return parts.join(" ");
}

/** Compute readiness from the full list of completed exam attempts. */
export function computeReadiness(exams: ExamAttempt[]): Readiness {
  // Sum correct/seen per function across every attempt.
  const agg = new Map<string, { correct: number; seen: number }>();
  for (const e of exams) {
    for (const [tag, v] of Object.entries(e.byFunction ?? {})) {
      const a = agg.get(tag) ?? { correct: 0, seen: 0 };
      a.correct += v.correct;
      a.seen += v.total;
      agg.set(tag, a);
    }
  }

  const byFunction: FunctionReadiness[] = FUNCTIONS.map((f) => {
    const a = agg.get(f.tag);
    const seen = a?.seen ?? 0;
    const correct = a?.correct ?? 0;
    const accuracy = seen > 0 ? correct / seen : null;
    return { tag: f.tag, code: f.code, label: f.label, weight: f.weight, seen, correct, accuracy, status: statusFor(accuracy) };
  });

  const tested = byFunction.filter((f) => f.seen > 0);
  const totalSeen = byFunction.reduce((s, f) => s + f.seen, 0);

  let projectedScore: number | null = null;
  if (tested.length > 0) {
    const wSum = tested.reduce((s, f) => s + f.weight, 0) || 1;
    projectedScore = tested.reduce((s, f) => s + (f.accuracy ?? 0) * f.weight, 0) / wSum;
  }

  const coverage = tested.length;
  const weakest = tested
    .filter((f) => (f.accuracy ?? 0) < EXAM_PASS_SCORE)
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0));

  const passProjected = projectedScore != null && projectedScore >= EXAM_PASS_SCORE;

  let overall: OverallVerdict;
  if (exams.length === 0 || totalSeen === 0) {
    overall = "no-data";
  } else if (passProjected && coverage === FUNCTIONS.length && !byFunction.some((f) => f.status === "weak")) {
    overall = "ready";
  } else if (projectedScore != null && projectedScore >= WEAK_BELOW) {
    overall = "almost";
  } else {
    overall = "building";
  }

  return {
    attempts: exams.length,
    totalSeen,
    projectedScore,
    passProjected,
    coverage,
    overall,
    byFunction,
    weakest,
    recommendation: buildRecommendation(overall, weakest, byFunction),
  };
}
