import { getOrderedLessons } from "@/lib/lessons";
import { moduleById, trackById } from "@/lib/lessons/taxonomy";
import { ProgressOverview } from "@/components/ProgressOverview";
import type { LessonRef } from "@/lib/progress/overview";

export const metadata = {
  title: "Progress — Stock Market Explainer",
  description: "Your curriculum completion, daily streak, and exam readiness in one view.",
};

export default function ProgressPage() {
  // Curriculum-ordered lesson refs (track + depth band per lesson); the client
  // overlays the learner's quiz/streak/exam progress.
  const lessons: LessonRef[] = getOrderedLessons().map((l) => {
    const m = moduleById[l.moduleId];
    return {
      slug: l.slug,
      title: l.title,
      trackId: m.trackId,
      trackTitle: trackById[m.trackId]?.title ?? m.trackId,
      level: m.level,
    };
  });

  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-10">
      <h1 className="text-4xl font-medium tracking-tight">Your progress</h1>
      <p className="mt-3 text-muted">
        Where you stand across the curriculum, your streak, and how ready you are for the exam — with
        the quickest way to pick up where you left off.
      </p>

      <ProgressOverview lessons={lessons} />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · not financial advice.
      </footer>
    </main>
  );
}
