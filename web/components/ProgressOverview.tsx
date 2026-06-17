"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useProgress } from "@/lib/progress/useProgress";
import { computeOverview, LEVEL_LABELS, type Bucket, type LessonRef } from "@/lib/progress/overview";
import { computeReadiness } from "@/lib/exam/readiness";
import { EXAM_PASS_SCORE } from "@/lib/exam/blueprint";

const pct = (x: number) => Math.round(x * 100);

function Bar({ value, tone = "learn" }: { value: number; tone?: "learn" | "up" }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-surface-2">
      <div
        className={`h-full rounded-full ${tone === "up" ? "bg-up" : "bg-learn"}`}
        style={{ width: `${Math.max(2, pct(value))}%` }}
      />
    </div>
  );
}

function Row({ label, b }: { label: string; b: Bucket }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink">{label}</span>
        <span className="font-mono text-xs text-muted">
          {b.passed}/{b.total} · {pct(b.pct)}%
        </span>
      </div>
      <div className="mt-1.5">
        <Bar value={b.pct} />
      </div>
    </div>
  );
}

/**
 * The unified "where am I?" dashboard: curriculum completion (overall / by track
 * / by depth band), the daily streak, and exam readiness — all from persisted
 * progress, with one-tap ways to continue. Gated on hydration.
 */
export function ProgressOverview({ lessons }: { lessons: LessonRef[] }) {
  const { progress, hydrated } = useProgress();

  const overview = useMemo(() => computeOverview(lessons, progress.quizzes), [lessons, progress.quizzes]);
  const readiness = useMemo(() => computeReadiness(progress.exams), [progress.exams]);

  if (!hydrated) return <p className="mt-8 text-sm text-faint">Loading your progress…</p>;

  const streak = progress.streak;

  return (
    <div className="mt-8 space-y-8">
      {/* Curriculum completion */}
      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-medium text-ink">Curriculum</h2>
          <span className="font-mono text-xs text-muted">
            {overview.overall.passed}/{overview.overall.total} lessons · {overview.overall.mastered} mastered
          </span>
        </div>
        <p className="mt-2 font-mono text-3xl text-ink">{pct(overview.overall.pct)}%</p>
        <div className="mt-2">
          <Bar value={overview.overall.pct} tone="up" />
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wide text-faint">By depth</h3>
            {overview.byLevel.map((b) => (
              <Row key={b.level} label={`${b.level} · ${LEVEL_LABELS[b.level] ?? ""}`} b={b} />
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wide text-faint">By track</h3>
            {overview.byTrack.map((b) => (
              <Row key={b.trackId} label={b.title} b={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Streak + readiness */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-strong bg-surface p-4">
          <h3 className="text-sm font-medium text-ink">Daily streak</h3>
          <p className="mt-1 font-mono text-3xl text-streak">
            {streak.current}
            <span className="ml-1 text-sm text-muted">day{streak.current === 1 ? "" : "s"}</span>
          </p>
          <p className="mt-1 text-xs text-muted">
            Best {streak.longest} · {streak.freezes} freeze{streak.freezes === 1 ? "" : "s"} left
          </p>
          <Link href="/today" className="mt-3 inline-block text-xs text-learn transition hover:opacity-80">
            Keep it alive →
          </Link>
        </div>

        <div className="rounded-lg border border-strong bg-surface p-4">
          <h3 className="text-sm font-medium text-ink">Exam readiness</h3>
          {readiness.overall === "no-data" ? (
            <>
              <p className="mt-1 text-sm text-muted">No practice exams yet.</p>
              <Link href="/exam" className="mt-3 inline-block text-xs text-learn transition hover:opacity-80">
                Take your first →
              </Link>
            </>
          ) : (
            <>
              <p className="mt-1 font-mono text-3xl text-ink">
                {pct(readiness.projectedScore ?? 0)}%
                <span className="ml-2 text-sm text-muted">projected</span>
              </p>
              <p className={`mt-1 text-xs ${readiness.passProjected ? "text-up" : "text-streak"}`}>
                {readiness.passProjected ? "Above the 72% bar" : `Below the ${pct(EXAM_PASS_SCORE)}% bar`} ·{" "}
                {readiness.coverage}/4 functions
              </p>
              <Link href="/study" className="mt-3 inline-block text-xs text-learn transition hover:opacity-80">
                See your study plan →
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Continue */}
      <section className="flex flex-wrap gap-2">
        {overview.nextLesson ? (
          <Link
            href={`/learn/${overview.nextLesson.slug}`}
            className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
          >
            Resume: {overview.nextLesson.title} →
          </Link>
        ) : (
          <Link
            href="/exam"
            className="rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
          >
            Every lesson passed — take a mock exam →
          </Link>
        )}
        <Link
          href="/today"
          className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
        >
          Daily review
        </Link>
        <Link
          href="/study"
          className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
        >
          Study plan
        </Link>
      </section>
    </div>
  );
}
