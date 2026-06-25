import { getAllQuestions } from "@/lib/quiz";
import { ExamApp } from "@/components/exam/ExamApp";

export const metadata = {
  title: "Exam — Stock Market Explainer",
  description: "Timed, Series 7-style practice exams with per-function weak-spot analysis.",
};

export default function ExamPage() {
  // The fn-tagged mastery bank (with answers) is handed to the client engine;
  // selection, timing, and grading happen client-side.
  const allQuestions = getAllQuestions();

  return (
    <>
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Exam</h1>
      <p className="mt-2 font-semibold text-muted">
        Timed, Series 7-style practice exams over the mastery curriculum — weighted by exam function,
        scored at <span className="font-mono">72%</span>, with a breakdown of where to study next.
      </p>

      <div className="mt-8">
        <ExamApp allQuestions={allQuestions} />
      </div>

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · not financial advice · not affiliated with FINRA.
      </footer>
    </>
  );
}
