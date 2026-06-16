"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useProgress } from "@/lib/progress/useProgress";
import {
  computeCurriculum,
  summarizeCurriculum,
  type ModuleGroup,
} from "@/lib/progress/moduleProgression";
import type { LessonStatus } from "@/lib/progress/progression";
import type { ModuleId } from "@/lib/lessons/taxonomy";

export interface LearnListItem {
  slug: string;
  title: string;
  level: number;
  summary: string;
  estMinutes: number;
  hasQuiz: boolean;
  moduleId: ModuleId;
  moduleOrder: number;
}

export function LearnList({ lessons }: { lessons: LearnListItem[] }) {
  const { progress, hydrated } = useProgress();
  const itemBySlug = useMemo(() => new Map(lessons.map((l) => [l.slug, l])), [lessons]);
  const { tracks, summary } = useMemo(() => {
    const tracks = computeCurriculum(lessons, progress);
    return { tracks, summary: summarizeCurriculum(tracks) };
  }, [lessons, progress]);

  const multiTrack = tracks.length > 1;

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

      <div className="mt-10 space-y-10">
        {tracks.map((track) => (
          <section key={track.trackId}>
            {multiTrack && (
              <h2 className="font-mono text-xs uppercase tracking-wide text-faint">{track.title}</h2>
            )}
            <div className={`${multiTrack ? "mt-4" : ""} space-y-4`}>
              {track.modules.map((mod) => (
                <ModuleSection key={mod.moduleId} module={mod} itemBySlug={itemBySlug} hydrated={hydrated} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function ModuleSection({
  module,
  itemBySlug,
  hydrated,
}: {
  module: ModuleGroup;
  itemBySlug: Map<string, LearnListItem>;
  hydrated: boolean;
}) {
  // Until hydrated, render unlocked/open so SSR and first client render match.
  const locked = hydrated && !module.unlocked;

  return (
    <details
      open={!locked}
      className="group rounded-lg border border-strong bg-surface/40 [&[open]>summary_.chevron]:rotate-90"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
        <span className="flex items-baseline gap-2">
          <span className="chevron font-mono text-xs text-faint transition-transform">▸</span>
          <span className={`font-medium ${locked ? "text-muted" : "text-ink"}`}>{module.title}</span>
          <span className="font-mono text-xs text-faint">{module.level} level</span>
        </span>
        <span className="font-mono text-xs text-faint">
          {locked ? (
            "🔒 Locked"
          ) : (
            <>
              {module.passed}/{module.total}
              {module.mastered > 0 && <> · {module.mastered}★</>}
            </>
          )}
        </span>
      </summary>

      {locked ? (
        <p className="px-4 pb-4 text-sm text-faint">
          Pass the previous module&apos;s lessons to unlock this.
        </p>
      ) : (
        <ol className="space-y-2 px-4 pb-4">
          {module.lessons.map((status, i) => {
            const item = itemBySlug.get(status.slug);
            if (!item) return null;
            return (
              <LessonRow
                key={status.slug}
                item={item}
                status={status}
                index={i + 1}
                locked={hydrated && !status.unlocked}
                hydrated={hydrated}
              />
            );
          })}
        </ol>
      )}
    </details>
  );
}

function LessonRow({
  item,
  status,
  index,
  locked,
  hydrated,
}: {
  item: LearnListItem;
  status: LessonStatus;
  index: number;
  locked: boolean;
  hydrated: boolean;
}) {
  if (locked) {
    return (
      <li>
        <div
          className="flex cursor-not-allowed items-center gap-4 rounded-lg border border-hairline bg-surface/50 p-4 opacity-60"
          aria-disabled="true"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-strong font-mono text-sm text-faint">
            🔒
          </span>
          <span className="min-w-0">
            <span className="flex flex-wrap items-baseline gap-2">
              <span className="font-medium text-muted">{item.title}</span>
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
    <li>
      <Link
        href={`/learn/${item.slug}`}
        className="group/row flex items-center gap-4 rounded-lg border border-strong bg-surface p-4 transition hover:bg-surface-2"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-learn/40 font-mono text-sm text-learn">
          {index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-2">
            <span className="font-medium text-ink">{item.title}</span>
            <span className="font-mono text-xs text-faint">{item.estMinutes} min</span>
          </span>
          <span className="mt-0.5 block text-sm text-muted">{item.summary}</span>
        </span>
        {hydrated && <StatusBadge status={status} />}
      </Link>
    </li>
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
