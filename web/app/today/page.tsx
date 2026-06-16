import Link from "next/link";
import { getAllQuestions } from "@/lib/quiz";
import { DailyToday } from "@/components/DailyToday";

export const metadata = {
  title: "Today — Stock Market Explainer",
  description: "Your daily review and streak — spaced repetition over what you've learned.",
};

export default function TodayPage() {
  // The full question bank (with answers) is handed to the client component;
  // selection + grading happen client-side against localStorage progress.
  const allQuestions = getAllQuestions();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-muted transition hover:text-ink">
        ← Home
      </Link>

      <h1 className="mt-4 text-4xl font-medium tracking-tight">Today</h1>
      <p className="mt-3 text-muted">
        A few minutes of review keeps what you&apos;ve learned from fading — and keeps your streak alive.
      </p>

      <DailyToday allQuestions={allQuestions} />

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
