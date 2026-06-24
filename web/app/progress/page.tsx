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
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Your progress</h1>
      <p className="mt-2 font-semibold text-muted">
        Where you stand across the curriculum, your streak, and how ready you are for the exam — with
        the quickest way to pick up where you left off.
      </p>

      <div className="mt-8">
        <ProgressOverview lessons={lessons} />
      </div>

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · not financial advice.
      </footer>
    </>
  );
}
