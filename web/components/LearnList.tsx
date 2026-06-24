"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useProgress } from "@/lib/progress/useProgress";
import { computeCurriculum, summarizeCurriculum, type ModuleGroup } from "@/lib/progress/moduleProgression";
import type { LessonStatus } from "@/lib/progress/progression";
import type { ModuleId } from "@/lib/lessons/taxonomy";
import { A } from "@/components/kit/theme";
import { Card } from "@/components/kit/Card";
import { Badge } from "@/components/kit/Badge";
import { Bar } from "@/components/kit/Bar";
import { Pill } from "@/components/kit/Pill";
import { Icon } from "@/components/kit/Icon";

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

// Rotating tile tints + icons for the unit cards (modules carry no icon in data).
const TINTS: [string, string][] = [
  [A.greenSoft, A.green],
  [A.primarySoft, A.primary],
  [A.blueSoft, A.blue],
  [A.amberSoft, A.amberInk],
];
const ICONS = ["sprout", "chart-candlestick", "git-branch", "wallet", "trending-up", "book-open"];

export function LearnList({ lessons }: { lessons: LearnListItem[] }) {
  const { progress, hydrated } = useProgress();
  const itemBySlug = useMemo(() => new Map(lessons.map((l) => [l.slug, l])), [lessons]);
  const { tracks, summary } = useMemo(() => {
    const tracks = computeCurriculum(lessons, progress);
    return { tracks, summary: summarizeCurriculum(tracks) };
  }, [lessons, progress]);

  const multiTrack = tracks.length > 1;
  const allModules = tracks.flatMap((t) => t.modules);
  const unitsDone = allModules.filter((m) => m.total > 0 && m.passed === m.total).length;
  const totalMins = lessons.reduce((s, l) => s + l.estMinutes, 0);

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 6px", color: A.ink }}>All units</h1>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>
            {allModules.length} units · {summary.total} lessons · ~{Math.round(totalMins / 60)}h to finish
          </p>
        </div>
        <Pill icon="award" bg={A.greenSoft} fg={A.green}>
          {hydrated ? `${unitsDone} of ${allModules.length} complete` : `${allModules.length} units`}
        </Pill>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {tracks.map((track, ti) => (
          <div key={track.trackId}>
            {multiTrack && (
              <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: ".04em", textTransform: "uppercase", color: A.faint, marginBottom: 12 }}>{track.title}</div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {track.modules.map((mod, mi) => (
                <ModuleCard key={mod.moduleId} module={mod} itemBySlug={itemBySlug} hydrated={hydrated} index={ti * 100 + mi} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ModuleCard({ module, itemBySlug, hydrated, index }: { module: ModuleGroup; itemBySlug: Map<string, LearnListItem>; hydrated: boolean; index: number }) {
  const locked = hydrated && !module.unlocked;
  const [open, setOpen] = useState(true);
  const done = module.total > 0 && module.passed === module.total;
  const active = !locked && !done && module.passed > 0;
  const pct = module.total ? Math.round((module.passed / module.total) * 100) : 0;
  const [bg, fg] = TINTS[index % TINTS.length];
  const mins = module.lessons.reduce((s, ls) => s + (itemBySlug.get(ls.slug)?.estMinutes ?? 0), 0);
  const showLessons = open && !locked;

  return (
    <Card pad={0} style={{ overflow: "hidden", opacity: locked ? 0.62 : 1 }}>
      <div onClick={() => !locked && setOpen((o) => !o)} style={{ display: "flex", alignItems: "center", gap: 18, padding: 18, cursor: locked ? "default" : "pointer" }}>
        <div style={{ fontFamily: A.mono, fontSize: 13, fontWeight: 700, color: A.faint, width: 22, flex: "0 0 auto" }}>{String(index + 1).padStart(2, "0")}</div>
        <div style={{ width: 52, height: 52, borderRadius: 16, background: bg, color: fg, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
          <Icon name={locked ? "lock" : ICONS[index % ICONS.length]} size={24} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 17, color: A.ink }}>{module.title}</span>
            {done && <Badge tone="green">Done</Badge>}
            {active && <Badge tone="primary">In progress</Badge>}
            {locked && <Badge tone="neutral">Locked</Badge>}
          </div>
          <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>
            {module.level} level · {module.total} lessons · ~{mins}m
          </div>
          {active && (
            <div style={{ marginTop: 10, maxWidth: 380 }}>
              <Bar pct={pct} color={A.primary} track={A.barTrack} height={7} />
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: A.muted, fontWeight: 700, fontSize: 13, flex: "0 0 auto" }}>
          <span>
            {module.passed}/{module.total}
            {module.mastered > 0 ? ` · ${module.mastered}★` : ""}
          </span>
          {!locked && <Icon name={open ? "chevron-down" : "chevron-right"} size={20} color={A.faint} />}
        </div>
      </div>

      {showLessons && (
        <div style={{ borderTop: `1px solid ${A.borderSoft}`, padding: "8px 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
          {module.lessons.map((status, i) => {
            const item = itemBySlug.get(status.slug);
            if (!item) return null;
            return <LessonRow key={status.slug} item={item} status={status} index={i + 1} locked={hydrated && !status.unlocked} hydrated={hydrated} />;
          })}
        </div>
      )}
      {locked && <div style={{ padding: "0 18px 16px 92px", fontSize: 13, color: A.faint, fontWeight: 600 }}>Finish the previous unit to unlock this.</div>}
    </Card>
  );
}

function LessonRow({ item, status, index, locked, hydrated }: { item: LearnListItem; status: LessonStatus; index: number; locked: boolean; hydrated: boolean }) {
  if (locked) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 12px", borderRadius: 12, background: A.sunk, opacity: 0.7 }}>
        <span style={{ width: 30, height: 30, borderRadius: "50%", display: "grid", placeItems: "center", flex: "0 0 auto", color: A.faint }}>
          <Icon name="lock" size={15} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14.5, color: A.muted }}>{item.title}</div>
          <div style={{ fontSize: 12.5, color: A.faint, fontWeight: 600 }}>Pass the previous lesson&apos;s quiz to unlock this.</div>
        </div>
      </div>
    );
  }
  return (
    <Link href={`/learn/${item.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 13, padding: "11px 12px", borderRadius: 12 }}>
      <span style={{ width: 30, height: 30, borderRadius: "50%", border: `2px solid ${A.primary}`, color: A.primary, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 12.5, fontFamily: A.mono, flex: "0 0 auto" }}>{index}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 14.5, color: A.ink }}>
          {item.title} <span style={{ fontFamily: A.mono, fontSize: 12, color: A.faint, fontWeight: 600 }}>{item.estMinutes} min</span>
        </div>
        <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{item.summary}</div>
      </div>
      {hydrated && <StatusBadge status={status} />}
    </Link>
  );
}

function StatusBadge({ status }: { status: { passed: boolean; mastered: boolean; bestScore: number; attempts: number } }) {
  const pct = Math.round(status.bestScore * 100);
  if (status.mastered) return <Badge tone="green">★ {pct}%</Badge>;
  if (status.passed) return <Badge tone="green">✓ {pct}%</Badge>;
  if (status.attempts > 0) return <Badge tone="amber">{pct}%</Badge>;
  return null;
}
