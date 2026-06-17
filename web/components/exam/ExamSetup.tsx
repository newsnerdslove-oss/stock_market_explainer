"use client";

import { EXAM_MODES, FUNCTIONS, MINUTES_PER_QUESTION } from "@/lib/exam/blueprint";

/** Availability of the bank, per function tag (count of exam-eligible questions). */
export type Availability = Record<string, number>;

function estMinutes(total: number): number {
  return Math.round(total * MINUTES_PER_QUESTION);
}

/** Exam mode picker. Honest about which functions the bank can actually cover. */
export function ExamSetup({
  availability,
  onStart,
}: {
  availability: Availability;
  onStart: (modeId: string) => void;
}) {
  const totalPool = Object.values(availability).reduce((a, b) => a + b, 0);
  const emptyFns = FUNCTIONS.filter((f) => (availability[f.tag] ?? 0) === 0);

  return (
    <div className="mt-6">
      <div className="rounded-md border border-strong bg-surface p-4 text-sm text-muted">
        <p>
          A timed, Series 7-style exam drawn from the{" "}
          <span className="font-mono text-ink">{totalPool}</span>-question mastery bank. Questions are
          weighted by the four exam functions; you get no feedback until you submit, then a
          per-function breakdown shows where to focus.
        </p>
        {emptyFns.length > 0 && (
          <p className="mt-2 text-xs text-faint">
            Note: {emptyFns.map((f) => `${f.code} (${f.label})`).join(", ")}{" "}
            {emptyFns.length === 1 ? "has" : "have"} no questions in the bank yet, so weighted exams
            redistribute that share across the remaining functions.
          </p>
        )}
      </div>

      <div className="mt-4 space-y-3">
        {EXAM_MODES.map((mode) => {
          // How many questions this mode can actually field right now.
          const drawTags = mode.functions ?? FUNCTIONS.map((f) => f.tag);
          const capacity = drawTags.reduce((s, t) => s + (availability[t] ?? 0), 0);
          const deliverable = Math.min(mode.total, capacity);
          const short = deliverable < mode.total;

          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => onStart(mode.id)}
              disabled={deliverable === 0}
              className="block w-full rounded-lg border border-strong bg-surface p-4 text-left transition hover:border-learn/50 hover:bg-surface-2 disabled:opacity-40"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-medium text-ink">{mode.title}</h3>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {deliverable} Q · ~{estMinutes(deliverable)} min
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted">{mode.description}</p>
              {short && (
                <p className="mt-1.5 text-xs text-faint">
                  Bank currently fields {deliverable} of {mode.total} for this mode.
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
