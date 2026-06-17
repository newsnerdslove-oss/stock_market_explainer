import Link from "next/link";
import { getAllQuestions } from "@/lib/quiz";
import { DailyToday } from "@/components/DailyToday";
import { AuthControls } from "@/components/AuthControls";

export const metadata = {
  title: "Today — Stock Market Explainer",
  description: "Your daily review and streak — spaced repetition over what you've learned.",
};

export default function TodayPage() {
  // The full question bank (with answers) is handed to the client component;
  // selection + grading happen client-side against localStorage progress.
  const allQuestions = getAllQuestions();

  return (
    <main className="mx-auto max-w-2xl px-6 pb-16 pt-10">
      <h1 className="text-4xl font-medium tracking-tight">Today</h1>
      <p className="mt-3 text-muted">
        A few minutes of review keeps what you&apos;ve learned from fading — and keeps your streak alive.
      </p>

      <DailyToday allQuestions={allQuestions} />

      <p className="mt-8 text-sm text-muted">
        Ready to test under pressure?{" "}
        <Link href="/exam" className="text-learn transition hover:opacity-80">
          Take a timed practice exam →
        </Link>{" "}
        or follow your{" "}
        <Link href="/study" className="text-learn transition hover:opacity-80">
          study plan →
        </Link>
      </p>

      <AuthControls />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
