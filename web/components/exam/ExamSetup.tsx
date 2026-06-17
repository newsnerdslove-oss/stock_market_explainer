"use client";

import { EXAM_MODES, examModeById, FUNCTIONS, MINUTES_PER_QUESTION } from "@/lib/exam/blueprint";
import type { ExamAttempt } from "@/lib/progress/schema";
import { ReadinessDashboard } from "@/components/exam/ReadinessDashboard";

/** Availability of the bank, per function tag (count of exam-eligible questions). */
export type Availability = Record<string, number>;

function estMinutes(total: number): number {
  return Math.round(total * MINUTES_PER_QUESTION);
}

const pct = (x: number) => Math.round(x * 100);

function fmtDate(iso: string): string {
  // Render on the client only (this component is gated behind hydration upstream).
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

/** Exam mode picker. Honest about which functions the bank can actually cover. */
export function ExamSetup({
  availability,
  exams,
  onStart,
}: {
  availability: Availability;
  exams: ExamAttempt[];
  onStart: (modeId: string) => void;
}) {
  const totalPool = Object.values(availability).reduce((a, b) => a + b, 0);
  const emptyFns = FUNCTIONS.filter((f) => (availability[f.tag] ?? 0) === 0);

  return (
    <div className="mt-6">
      {exams.length > 0 && (
        <div className="mb-4">
          <ReadinessDashboard exams={exams} onStartDrill={onStart} />
        </div>
      )}

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

      {exams.length > 0 && <ExamHistory exams={exams} />}
    </div>
  );
}

/** Recent attempts, best score, and a sparkline of the last several exams. */
function ExamHistory({ exams }: { exams: ExamAttempt[] }) {
  const best = exams.reduce((m, e) => Math.max(m, e.score), 0);
  const passes = exams.filter((e) => e.passed).length;
  // Oldest → newest for the trend strip; show up to the last 12.
  const trend = [...exams].slice(0, 12).reverse();
  const recent = exams.slice(0, 5);

  return (
    <section className="mt-8 border-t border-hairline pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-ink">Your exam history</h2>
        <span className="font-mono text-xs text-muted">
          {exams.length} taken · {passes} passed · best{" "}
          <span className={best >= 0.72 ? "text-up" : "text-ink"}>{pct(best)}%</span>
        </span>
      </div>

      {/* Score trend strip — one bar per recent attempt, oldest to newest. */}
      <div className="mt-3 flex items-end gap-1" aria-label="Recent exam scores">
        {trend.map((e) => (
          <div
            key={e.id}
            className="flex-1"
            title={`${pct(e.score)}% · ${fmtDate(e.at)}`}
          >
            <div
              className={`w-full rounded-sm ${e.passed ? "bg-up/70" : "bg-streak/60"}`}
              style={{ height: `${Math.max(4, Math.round(e.score * 40))}px` }}
            />
          </div>
        ))}
      </div>

      {/* Most recent attempts. */}
      <ul className="mt-4 space-y-1.5">
        {recent.map((e) => {
          const mode = examModeById[e.mode];
          return (
            <li key={e.id} className="flex items-center justify-between text-sm">
              <span className="text-muted">
                {mode?.title ?? e.mode}
                <span className="ml-2 text-faint">{fmtDate(e.at)}</span>
              </span>
              <span className="font-mono text-xs">
                <span className={e.passed ? "text-up" : "text-streak"}>{pct(e.score)}%</span>
                <span className="ml-2 text-faint">
                  {e.correct}/{e.total}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
