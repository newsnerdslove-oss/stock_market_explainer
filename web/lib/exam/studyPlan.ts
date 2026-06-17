// Study plan — sequences readiness gaps into an ordered "do this next" queue.
//
// Bridges Test back to Learn: it takes the per-function readiness (from exam
// history) plus which lessons are still unpassed, and emits an ordered list of
// concrete steps — study this lesson, then drill that function. Functions are
// prioritized by how much they'll move the needle: exam weight × the score gap,
// so a weak F3 (≈73% of the exam) outranks a weak F1. Pure function.

import { drillModeForFunction, functionByTag } from "@/lib/exam/blueprint";
import type { Readiness } from "@/lib/exam/readiness";

/** A lesson tagged with its exam function and whether the learner has passed it. */
export interface StudyLesson {
  slug: string;
  title: string;
  moduleTitle: string;
  fnTag: string;
  /** Passed its quiz (best score >= pass bar). */
  done: boolean;
}

export type StudyStep =
  | { kind: "lesson"; slug: string; title: string; moduleTitle: string; fnCode: string; fnLabel: string; revisit?: boolean }
  | { kind: "drill"; modeId: string; fnCode: string; fnLabel: string };

export interface StudyPlan {
  ready: boolean;
  summary: string;
  steps: StudyStep[];
}

const MAX_STEPS = 12;
const MAX_LESSONS_PER_FN = 3;
/** A function is "handled" once it clears this; below it still earns a study gap. */
const READY_AT = 0.75;

export function buildStudyPlan(
  readiness: Readiness,
  lessons: StudyLesson[],
  askedSlugs?: Set<string>,
): StudyPlan {
  // Severity per function = score gap × exam weight (untested = a full gap).
  const severity = new Map<string, number>();
  for (const f of readiness.byFunction) {
    let gap = 0;
    if (f.status === "untested") gap = READY_AT;
    else if (f.accuracy != null && f.accuracy < READY_AT) gap = READY_AT - f.accuracy;
    severity.set(f.tag, gap * f.weight);
  }

  const targets = readiness.byFunction
    .filter((f) => (severity.get(f.tag) ?? 0) > 0)
    .sort((a, b) => (severity.get(b.tag) ?? 0) - (severity.get(a.tag) ?? 0));

  const allLessonsDone = lessons.length > 0 && lessons.every((l) => l.done);
  if (readiness.overall === "ready" && allLessonsDone) {
    return {
      ready: true,
      summary:
        "You're exam-ready — above the bar on every function and every lesson passed. Keep taking full mocks to stay sharp.",
      steps: [],
    };
  }

  const steps: StudyStep[] = [];
  const added = new Set<string>();

  // Follow-through: lessons you asked the tutor about but haven't passed —
  // surface them first, since you flagged confusion there yourself.
  if (askedSlugs && askedSlugs.size > 0) {
    const revisit = lessons.filter((l) => !l.done && askedSlugs.has(l.slug)).slice(0, 3);
    for (const l of revisit) {
      const meta = functionByTag[l.fnTag];
      steps.push({
        kind: "lesson",
        slug: l.slug,
        title: l.title,
        moduleTitle: l.moduleTitle,
        fnCode: meta?.code ?? l.fnTag,
        fnLabel: meta?.label ?? l.fnTag,
        revisit: true,
      });
      added.add(l.slug);
    }
  }

  for (const f of targets) {
    if (steps.length >= MAX_STEPS) break;
    const meta = functionByTag[f.tag];
    const fnCode = meta?.code ?? f.tag;
    const fnLabel = meta?.label ?? f.tag;

    // Study: the function's still-unpassed lessons, in curriculum order.
    const todo = lessons.filter((l) => l.fnTag === f.tag && !l.done && !added.has(l.slug)).slice(0, MAX_LESSONS_PER_FN);
    for (const l of todo) {
      if (steps.length >= MAX_STEPS) break;
      steps.push({ kind: "lesson", slug: l.slug, title: l.title, moduleTitle: l.moduleTitle, fnCode, fnLabel });
      added.add(l.slug);
    }

    // Then test it.
    const mode = drillModeForFunction(f.tag);
    if (mode && steps.length < MAX_STEPS) steps.push({ kind: "drill", modeId: mode, fnCode, fnLabel });
  }

  const summary =
    readiness.overall === "no-data"
      ? "Take a practice exam to personalize this — meanwhile, here's a sensible order to study in (heaviest exam functions first)."
      : "Work these in order — they target your lowest-scoring functions, weighted by how much of the exam each one covers.";

  return { ready: false, summary, steps };
}
