import { getAllLessons } from "@/lib/lessons";
import { hasQuiz } from "@/lib/quiz";
import { LearnDashboard } from "@/components/LearnDashboard";
import type { LearnListItem } from "@/components/LearnList";

export const metadata = {
  title: "Learn — Stock Market Explainer",
  description: "Your learning dashboard — pick up where you left off, today's goal, and your paper portfolio.",
};

export default function LearnIndex() {
  // Serializable lesson fields for the client dashboard (curriculum + progress are
  // computed client-side against localStorage progress).
  const lessons: LearnListItem[] = getAllLessons().map((l) => ({
    slug: l.slug,
    title: l.title,
    level: l.level,
    summary: l.summary,
    estMinutes: l.estMinutes,
    hasQuiz: hasQuiz(l.slug),
    moduleId: l.moduleId,
    moduleOrder: l.moduleOrder,
  }));

  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Learn</h1>
      <p className="mb-8 mt-2 font-semibold text-muted">Pick up where you left off — your path, today&apos;s goal, and your paper portfolio.</p>

      <LearnDashboard lessons={lessons} />

      <footer className="mt-16 border-t border-strong pt-6 text-xs font-semibold text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </>
  );
}
