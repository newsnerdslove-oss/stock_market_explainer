import { getAllLessons } from "@/lib/lessons";
import { hasQuiz } from "@/lib/quiz";
import { LearnList, type LearnListItem } from "@/components/LearnList";

export const metadata = {
  title: "Learn — Stock Market Explainer",
  description: "Structured lessons from market basics toward Series 7 depth.",
};

export default function LearnIndex() {
  // Pass only serializable fields across the server→client boundary.
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
      <LearnList lessons={lessons} />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </>
  );
}
