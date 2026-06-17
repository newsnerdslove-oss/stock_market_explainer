// Tutor insights — aggregates a learner's asked questions into a "confusion
// hotspots" view: which lessons they ask about most, and their recent questions.
// Pure function; the UI resolves lesson titles from the slugs.

import type { TutorQuery } from "@/lib/progress/schema";

export interface LessonHotspot {
  slug: string;
  count: number;
  /** Most recent ISO timestamp a question was asked from this lesson. */
  lastAt: string;
}

export interface TutorInsights {
  total: number;
  /** Lessons by ask volume, most-asked first (ties broken by most recent). */
  hotspots: LessonHotspot[];
  /** Most recent questions, newest first. */
  recent: TutorQuery[];
}

export function computeTutorInsights(tutorLog: TutorQuery[], recentLimit = 8): TutorInsights {
  const byLesson = new Map<string, LessonHotspot>();
  for (const q of tutorLog) {
    const h = byLesson.get(q.slug) ?? { slug: q.slug, count: 0, lastAt: q.at };
    h.count++;
    if (q.at > h.lastAt) h.lastAt = q.at;
    byLesson.set(q.slug, h);
  }

  const hotspots = [...byLesson.values()].sort(
    (a, b) => b.count - a.count || b.lastAt.localeCompare(a.lastAt),
  );

  // tutorLog is stored newest-first, but sort defensively so display is stable.
  const recent = [...tutorLog].sort((a, b) => b.at.localeCompare(a.at)).slice(0, recentLimit);

  return { total: tutorLog.length, hotspots, recent };
}
