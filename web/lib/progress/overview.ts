// Progress overview — aggregates lesson mastery into a single "where am I?"
// snapshot across the curriculum: overall, by track, and by depth band, plus the
// next lesson to resume. Pure function; the streak and exam-readiness halves of
// the dashboard come straight from their own stores.

import { MASTERY_SCORE, PASS_SCORE, type QuizProgress } from "@/lib/progress/schema";

export interface LessonRef {
  slug: string;
  title: string;
  trackId: string;
  trackTitle: string;
  /** Depth band: 100 / 200 / 300 / 400. */
  level: number;
}

export interface Bucket {
  total: number;
  passed: number;
  mastered: number;
  /** passed / total, 0..1. */
  pct: number;
}

export interface Overview {
  overall: Bucket;
  byTrack: (Bucket & { trackId: string; title: string })[];
  byLevel: (Bucket & { level: number })[];
  /** First not-yet-passed lesson in curriculum order, or null if all passed. */
  nextLesson: { slug: string; title: string } | null;
}

interface Counts {
  total: number;
  passed: number;
  mastered: number;
}

const empty = (): Counts => ({ total: 0, passed: 0, mastered: 0 });
const withPct = (c: Counts): Bucket => ({ ...c, pct: c.total > 0 ? c.passed / c.total : 0 });

export function computeOverview(
  lessons: LessonRef[],
  quizzes: Record<string, QuizProgress>,
): Overview {
  const overall = empty();
  const tracks = new Map<string, Counts & { title: string }>();
  const levels = new Map<number, Counts>();
  let nextLesson: { slug: string; title: string } | null = null;

  for (const l of lessons) {
    const best = quizzes[l.slug]?.bestScore ?? 0;
    const passed = best >= PASS_SCORE;
    const mastered = best >= MASTERY_SCORE;

    const tally = (c: Counts) => {
      c.total++;
      if (passed) c.passed++;
      if (mastered) c.mastered++;
    };

    tally(overall);

    if (!tracks.has(l.trackId)) tracks.set(l.trackId, { title: l.trackTitle, ...empty() });
    tally(tracks.get(l.trackId)!);

    if (!levels.has(l.level)) levels.set(l.level, empty());
    tally(levels.get(l.level)!);

    if (!passed && !nextLesson) nextLesson = { slug: l.slug, title: l.title };
  }

  return {
    overall: withPct(overall),
    byTrack: [...tracks.entries()].map(([trackId, t]) => ({
      trackId,
      title: t.title,
      ...withPct(t),
    })),
    byLevel: [...levels.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([level, c]) => ({ level, ...withPct(c) })),
    nextLesson,
  };
}

/** Human label for a depth band. */
export const LEVEL_LABELS: Record<number, string> = {
  100: "Foundations",
  200: "Mechanics",
  300: "Strategy",
  400: "Mastery",
};
