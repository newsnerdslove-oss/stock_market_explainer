// Exam blueprints — the DATA layer of the composable exam engine.
//
// The Series 7 is a single weighted instrument: 125 scored questions sampled
// across four job functions at fixed weights. That maps to ONE engine
// parameterized by a blueprint, not one engine per topic. A blueprint says
// "draw this many questions, with this function mix, in this time" — the
// selector (lib/exam/select.ts) turns it into a concrete question list against
// the fn-tagged question bank, and the scorer (lib/exam/score.ts) buckets the
// results back by function for weak-spot analysis.
//
// Every level-400 question carries exactly one function tag (`fn:1`..`fn:4`,
// asserted by the curriculum integrity check), which is the only metadata the
// engine needs to compose a weighted exam.

import type { Question } from "@/lib/quiz/types";

/** A Series 7 job function — the axis the real exam is weighted on. */
export interface ExamFunction {
  /** The tag carried on questions, e.g. "fn:3". */
  tag: string;
  /** Short exam code, e.g. "F3". */
  code: string;
  label: string;
  /** Share of the real Series 7 exam (FINRA content outline weights). */
  weight: number;
}

/**
 * The four Series 7 functions and their verified weights (125 scored items:
 * 9 / 11 / 91 / 14). F3 dominates at ~73%, which is why products,
 * recommendations, and records make up most of the 300/400 curriculum.
 */
export const FUNCTIONS: ExamFunction[] = [
  { tag: "fn:1", code: "F1", label: "Seeks business for the firm", weight: 0.072 },
  { tag: "fn:2", code: "F2", label: "Opens accounts", weight: 0.088 },
  { tag: "fn:3", code: "F3", label: "Information, recommendations & records", weight: 0.728 },
  { tag: "fn:4", code: "F4", label: "Processes transactions", weight: 0.112 },
];

export const functionByTag: Record<string, ExamFunction> = Object.fromEntries(
  FUNCTIONS.map((f) => [f.tag, f]),
);

const FN_RE = /^fn:[1-4]$/;

/** The single function tag a question carries, or null if it has none. */
export function questionFunction(q: Question): string | null {
  return (q.tags ?? []).find((t) => FN_RE.test(t)) ?? null;
}

/** Roughly mirrors the real exam's pace: 225 min / 125 questions ≈ 1.8 min each. */
export const MINUTES_PER_QUESTION = 1.8;

/** Passing score on the Series 7 (and the bar this engine uses). */
export const EXAM_PASS_SCORE = 0.72;

/**
 * An exam configuration. `weighted` draws across all functions in proportion to
 * their real exam weight; `functions` restricts the draw to specific functions
 * (a single-function drill). `total` is the target question count — the selector
 * may deliver fewer if the bank can't fill it, and reports the shortfall.
 */
export interface ExamMode {
  id: string;
  title: string;
  description: string;
  total: number;
  /** When set, draw only from these function tags (equal share each). */
  functions?: string[];
  /** When true, draw across all functions by their real exam weight. */
  weighted?: boolean;
}

export const EXAM_MODES: ExamMode[] = [
  {
    id: "mock",
    title: "Full practice exam",
    description:
      "125 questions weighted like the real Series 7 — products and recommendations dominate. Timed; no feedback until you submit.",
    total: 125,
    weighted: true,
  },
  {
    id: "quick",
    title: "Quick mixed exam",
    description:
      "A shorter 25-question exam across all functions at the real weighting — a fast confidence check.",
    total: 25,
    weighted: true,
  },
  {
    id: "drill-fn3",
    title: "Drill: Information & recommendations (F3)",
    description:
      "30 questions from the largest function — options, products, suitability, muni & debt, analysis.",
    total: 30,
    functions: ["fn:3"],
  },
  {
    id: "drill-fn1",
    title: "Drill: Seeking business & communications (F1)",
    description: "20 questions on communications, advertising, telemarketing, and prospecting rules.",
    total: 20,
    functions: ["fn:1"],
  },
  {
    id: "drill-fn2",
    title: "Drill: Opening accounts (F2)",
    description: "20 questions on account types, suitability profiling, CIP, and registration.",
    total: 20,
    functions: ["fn:2"],
  },
  {
    id: "drill-fn4",
    title: "Drill: Processing transactions (F4)",
    description: "20 questions on confirmations, T+1 settlement, Reg T, recordkeeping, and delivery.",
    total: 20,
    functions: ["fn:4"],
  },
];

export const examModeById: Record<string, ExamMode> = Object.fromEntries(
  EXAM_MODES.map((m) => [m.id, m]),
);

/** The single-function drill mode id for a function tag (e.g. "fn:3" → "drill-fn3"), or null. */
export function drillModeForFunction(tag: string): string | null {
  const id = `drill-${tag.replace(":", "")}`; // fn:3 → drill-fn3
  return examModeById[id] ? id : null;
}
