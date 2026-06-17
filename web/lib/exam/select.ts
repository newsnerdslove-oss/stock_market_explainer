// Exam selector — the SAMPLING layer of the composable exam engine.
//
// Turns a blueprint (lib/exam/blueprint.ts) into a concrete question list drawn
// from the fn-tagged bank. The same selector serves a full weighted mock, a
// quick mixed exam, or a single-function drill — only the blueprint changes.
//
// It is robust about an under-supplied bank: it caps each function to what's
// available and redistributes the shortfall to functions with spare capacity,
// then reports the actual composition so the UI can be honest about coverage
// (e.g. F1 "seeks business" currently has zero authored questions).

import { isChoiceQuestion, type ChoiceQuestion, type Question } from "@/lib/quiz/types";
import { FUNCTIONS, functionByTag, questionFunction, type ExamMode } from "@/lib/exam/blueprint";

export interface FunctionComposition {
  tag: string;
  code: string;
  label: string;
  /** Questions available in the bank for this function. */
  available: number;
  /** Questions actually placed in this exam. */
  delivered: number;
}

export interface ExamComposition {
  totalRequested: number;
  totalDelivered: number;
  byFunction: FunctionComposition[];
  /** Function tags the blueprint draws from but which have zero questions yet. */
  missing: string[];
}

export interface SelectedExam {
  questions: ChoiceQuestion[];
  composition: ExamComposition;
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sample<T>(arr: T[], n: number, rng: () => number): T[] {
  return shuffle(arr, rng).slice(0, Math.max(0, n));
}

/**
 * Select the questions for an exam mode. Selection uses `rng` (Math.random by
 * default) — call it on a user action (client-side), never during render/SSR,
 * so the shuffle can't cause a hydration mismatch.
 */
export function selectExamQuestions(
  mode: ExamMode,
  bank: Question[],
  rng: () => number = Math.random,
): SelectedExam {
  // Only fn-tagged single-answer choice questions are exam-eligible (this is the
  // Series 7 / 400-level bank; lower tiers carry no function tag).
  const pool = bank
    .filter(isChoiceQuestion)
    .filter((q) => questionFunction(q) !== null) as ChoiceQuestion[];

  const byFn = new Map<string, ChoiceQuestion[]>();
  for (const q of pool) {
    const fn = questionFunction(q)!;
    if (!byFn.has(fn)) byFn.set(fn, []);
    byFn.get(fn)!.push(q);
  }

  // Which functions does this blueprint draw from, and at what relative weight?
  const drawFns = mode.functions ?? FUNCTIONS.map((f) => f.tag);
  const weightOf = (tag: string) =>
    mode.weighted ? functionByTag[tag]?.weight ?? 0 : 1; // equal share for a drill

  // Renormalize over functions that actually have questions, so an empty
  // function doesn't silently shrink the exam below its target.
  const availTags = drawFns.filter((t) => (byFn.get(t)?.length ?? 0) > 0);
  const weightSum = availTags.reduce((s, t) => s + weightOf(t), 0) || 1;

  // First pass: ideal target per function, capped at availability.
  const target = new Map<string, number>();
  for (const tag of availTags) {
    const ideal = Math.round((mode.total * weightOf(tag)) / weightSum);
    target.set(tag, Math.min(ideal, byFn.get(tag)!.length));
  }

  // Redistribute any shortfall (rounding or caps) to functions with spare
  // capacity, so the exam reaches `total` whenever the bank can support it.
  let placed = [...target.values()].reduce((a, b) => a + b, 0);
  let guard = 0;
  while (placed < mode.total && guard++ < 5000) {
    let best: string | null = null;
    let bestHeadroom = 0;
    for (const tag of availTags) {
      const headroom = byFn.get(tag)!.length - (target.get(tag) ?? 0);
      if (headroom > bestHeadroom) {
        bestHeadroom = headroom;
        best = tag;
      }
    }
    if (!best) break; // no spare capacity anywhere
    target.set(best, (target.get(best) ?? 0) + 1);
    placed++;
  }

  // Trim any over-count (possible only when equal-weight rounding across several
  // functions overshoots an odd total) so delivery never exceeds the target.
  let over = placed - mode.total;
  while (over > 0) {
    let biggest: string | null = null;
    let most = 0;
    for (const tag of availTags) {
      const n = target.get(tag) ?? 0;
      if (n > most) {
        most = n;
        biggest = tag;
      }
    }
    if (!biggest || most === 0) break;
    target.set(biggest, most - 1);
    over--;
  }

  // Materialize: sample each function, then shuffle the combined order.
  const chosen: ChoiceQuestion[] = [];
  for (const tag of availTags) chosen.push(...sample(byFn.get(tag)!, target.get(tag) ?? 0, rng));
  const questions = shuffle(chosen, rng);

  const byFunction: FunctionComposition[] = drawFns.map((tag) => {
    const f = functionByTag[tag];
    return {
      tag,
      code: f?.code ?? tag,
      label: f?.label ?? tag,
      available: byFn.get(tag)?.length ?? 0,
      delivered: questions.filter((q) => questionFunction(q) === tag).length,
    };
  });

  return {
    questions,
    composition: {
      totalRequested: mode.total,
      totalDelivered: questions.length,
      byFunction,
      missing: drawFns.filter((t) => (byFn.get(t)?.length ?? 0) === 0),
    },
  };
}
