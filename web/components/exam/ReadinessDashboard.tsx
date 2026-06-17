"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { ExamAttempt } from "@/lib/progress/schema";
import { EXAM_PASS_SCORE, drillModeForFunction } from "@/lib/exam/blueprint";
import { computeReadiness, type FunctionStatus, type OverallVerdict } from "@/lib/exam/readiness";

const pct = (x: number) => Math.round(x * 100);

const VERDICT: Record<Exclude<OverallVerdict, "no-data">, { label: string; box: string; text: string }> = {
  ready: { label: "Exam-ready", box: "border-up/40 bg-up/10", text: "text-up" },
  almost: { label: "Almost there", box: "border-streak/40 bg-streak/10", text: "text-streak" },
  building: { label: "Building up", box: "border-strong bg-surface", text: "text-ink" },
};

const STATUS_PILL: Record<FunctionStatus, { label: string; cls: string }> = {
  ready: { label: "ready", cls: "border-up/50 text-up" },
  borderline: { label: "borderline", cls: "border-streak/50 text-streak" },
  weak: { label: "weak", cls: "border-down/50 text-down" },
  untested: { label: "untested", cls: "border-strong text-faint" },
};

const BAR: Record<FunctionStatus, string> = {
  ready: "bg-up",
  borderline: "bg-streak",
  weak: "bg-down",
  untested: "bg-surface-2",
};

/**
 * "Are you ready?" panel: a projected exam score from history, the per-function
 * breakdown, and one-tap drills for the weak spots. Shown on the exam setup
 * screen once at least one exam has been taken.
 */
export function ReadinessDashboard({
  exams,
  onStartDrill,
}: {
  exams: ExamAttempt[];
  onStartDrill: (modeId: string) => void;
}) {
  const r = useMemo(() => computeReadiness(exams), [exams]);
  if (r.overall === "no-data") return null;

  const v = VERDICT[r.overall];
  const projected = r.projectedScore ?? 0;

  // Weak/borderline functions that have a drill available, weakest first.
  const drillTargets = r.byFunction
    .filter((f) => f.status === "weak" || f.status === "borderline")
    .sort((a, b) => (a.accuracy ?? 0) - (b.accuracy ?? 0))
    .map((f) => ({ f, mode: drillModeForFunction(f.tag) }))
    .filter((x): x is { f: typeof x.f; mode: string } => x.mode != null);

  return (
    <section className={`rounded-lg border p-5 ${v.box}`}>
      <div className="flex items-baseline justify-between gap-3">
        <h2 className={`text-sm font-medium ${v.text}`}>{v.label}</h2>
        <span className="font-mono text-xs text-muted">
          {r.attempts} exam{r.attempts === 1 ? "" : "s"} · {r.coverage}/4 functions tested
        </span>
      </div>

      {/* Projected score vs the 72% bar */}
      <div className="mt-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-3xl text-ink">{pct(projected)}%</span>
          <span className="text-sm text-muted">projected exam score</span>
        </div>
        <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
          <div
            className={`h-full rounded-full ${r.passProjected ? "bg-up" : "bg-streak"}`}
            style={{ width: `${Math.max(2, pct(projected))}%` }}
          />
          {/* 72% pass marker */}
          <div
            className="absolute top-0 h-full w-px bg-ink/50"
            style={{ left: `${pct(EXAM_PASS_SCORE)}%` }}
            title="72% pass mark"
          />
        </div>
        <p className="mt-1 text-xs text-faint">
          Weighted by the real exam mix over the functions you&apos;ve been tested on · pass bar 72%
        </p>
      </div>

      {/* Per-function readiness */}
      <div className="mt-4 space-y-2.5">
        {r.byFunction.map((f) => (
          <div key={f.tag}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink">
                <span className="font-mono text-xs text-muted">{f.code}</span> {f.label}
              </span>
              <span className="flex items-center gap-2">
                <span
                  className={`rounded-full border px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${STATUS_PILL[f.status].cls}`}
                >
                  {STATUS_PILL[f.status].label}
                </span>
                <span className="font-mono text-xs text-muted">
                  {f.accuracy == null ? "—" : `${pct(f.accuracy)}%`}
                </span>
              </span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
              <div
                className={`h-full rounded-full ${BAR[f.status]}`}
                style={{ width: `${f.accuracy == null ? 0 : Math.max(2, pct(f.accuracy))}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-ink">{r.recommendation}</p>

      {drillTargets.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {drillTargets.map(({ f, mode }) => (
            <button
              key={f.tag}
              type="button"
              onClick={() => onStartDrill(mode)}
              className="rounded-md border border-strong bg-surface px-3 py-1.5 text-xs text-ink transition hover:bg-surface-2"
            >
              Drill {f.code} →
            </button>
          ))}
        </div>
      )}

      <Link href="/study" className="mt-4 inline-block text-xs text-learn transition hover:opacity-80">
        See your full study plan →
      </Link>
    </section>
  );
}
