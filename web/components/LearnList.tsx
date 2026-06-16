"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useProgress } from "@/lib/progress/useProgress";
import { computeProgression, summarize } from "@/lib/progress/progression";

export interface LearnListItem {
  slug: string;
  title: string;
  level: number;
  summary: string;
  estMinutes: number;
  hasQuiz: boolean;
}

export function LearnList({ lessons }: { lessons: LearnListItem[] }) {
  const { progress, hydrated } = useProgress();
  const { statusBySlug, summary } = useMemo(() => {
    const statuses = computeProgression(lessons, progress);
    return {
      statusBySlug: new Map(statuses.map((s) => [s.slug, s])),
      summary: summarize(statuses),
    };
  }, [lessons, progress]);

  return (
    <>
      <p className="mt-3 text-muted">
        {hydrated && summary.passed > 0 ? (
          <>
            You&apos;ve passed{" "}
            <span className="font-mono text-ink">
              {summary.passed}/{summary.total}
            </span>{" "}
            lessons
            {summary.mastered > 0 && <> · {summary.mastered} mastered ★</>}. Pass each quiz to unlock
            the next.
          </>
        ) : (
          <>Start at the basics and work up. Pass each lesson&apos;s quiz to unlock the next.</>
        )}
      </p>

      <ol className="mt-10 space-y-3">
        {lessons.map((lesson, i) => {
          const status = statusBySlug.get(lesson.slug)!;
          // Until hydrated, don't assert lock state — render every lesson as an
          // open link so SSR and first client render match (no hydration flash).
          const locked = hydrated && !status.unlocked;

          if (locked) {
            return (
              <li key={lesson.slug}>
                <div
                  className="flex cursor-not-allowed items-center gap-4 rounded-lg border border-hairline bg-surface/50 p-4 opacity-60"
                  aria-disabled="true"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-strong font-mono text-sm text-faint">
                    🔒
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-2">
                      <span className="font-medium text-muted">{lesson.title}</span>
                      <span className="font-mono text-xs text-faint">Locked</span>
                    </span>
                    <span className="mt-0.5 block text-sm text-faint">
                      Pass the previous lesson&apos;s quiz to unlock this.
                    </span>
                  </span>
                </div>
              </li>
            );
          }

          return (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${lesson.slug}`}
                className="group flex items-center gap-4 rounded-lg border border-strong bg-surface p-4 transition hover:bg-surface-2"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-learn/40 font-mono text-sm text-learn">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-2">
                    <span className="font-medium text-ink">{lesson.title}</span>
                    <span className="font-mono text-xs text-faint">
                      Level {lesson.level} · {lesson.estMinutes} min
                    </span>
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{lesson.summary}</span>
                </span>
                {hydrated && <StatusBadge status={status} />}
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function StatusBadge({
  status,
}: {
  status: { passed: boolean; mastered: boolean; bestScore: number; attempts: number };
}) {
  if (status.mastered)
    return <span className="shrink-0 font-mono text-xs text-up">★ {Math.round(status.bestScore * 100)}%</span>;
  if (status.passed)
    return <span className="shrink-0 font-mono text-xs text-up">✓ {Math.round(status.bestScore * 100)}%</span>;
  if (status.attempts > 0)
    return (
      <span className="shrink-0 font-mono text-xs text-streak">{Math.round(status.bestScore * 100)}%</span>
    );
  return null;
}
