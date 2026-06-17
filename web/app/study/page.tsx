import Link from "next/link";
import { examLessonFunctions } from "@/lib/exam/lessonFunctions";
import { StudyPlanView } from "@/components/exam/StudyPlanView";

export const metadata = {
  title: "Study plan — Stock Market Explainer",
  description: "A personalized, ordered queue of lessons and drills that targets your exam weak spots.",
};

export default function StudyPage() {
  // The lesson→function map is computed server-side; the client personalizes the
  // plan from persisted progress (exam history + quiz mastery).
  const examLessons = examLessonFunctions();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/exam" className="text-sm text-muted transition hover:text-ink">
        ← Exam
      </Link>

      <h1 className="mt-4 text-4xl font-medium tracking-tight">Study plan</h1>
      <p className="mt-3 text-muted">
        Your next steps, in order — built from your exam history and lesson progress to close the gaps
        that matter most for the <span className="font-mono">72%</span> pass bar.
      </p>

      <StudyPlanView examLessons={examLessons} />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · not financial advice · not affiliated with FINRA.
      </footer>
    </main>
  );
}
