import { getAllQuestions } from "@/lib/quiz";
import { ExamApp } from "@/components/exam/ExamApp";
import { PageContainer } from "@/components/layout/PageContainer";

export const metadata = {
  title: "Exam — Stock Market Explainer",
  description: "Timed, Series 7-style practice exams with per-function weak-spot analysis.",
};

export default function ExamPage() {
  // The fn-tagged mastery bank (with answers) is handed to the client engine;
  // selection, timing, and grading happen client-side.
  const allQuestions = getAllQuestions();

  return (
    <PageContainer size="wide" className="pb-16 pt-10">
      <h1 className="text-4xl font-medium tracking-tight">Exam</h1>
      <p className="mt-3 text-muted">
        Timed, Series 7-style practice exams over the mastery curriculum — weighted by exam function,
        scored at <span className="font-mono">72%</span>, with a breakdown of where to study next.
      </p>

      <ExamApp allQuestions={allQuestions} />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · not financial advice · not affiliated with FINRA.
      </footer>
    </PageContainer>
  );
}
