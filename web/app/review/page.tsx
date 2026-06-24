import Link from "next/link";
import { getAllQuestions } from "@/lib/quiz";
import { DailyToday } from "@/components/DailyToday";
import { DailyChallengeTeaser } from "@/components/DailyChallenge";
import { AuthControls } from "@/components/AuthControls";

export const metadata = {
  title: "Daily review — Stock Market Explainer",
  description: "Your daily review and streak — spaced repetition over what you've learned.",
};

export default function ReviewPage() {
  // The full question bank (with answers) is handed to the client component;
  // selection + grading happen client-side against localStorage progress.
  const allQuestions = getAllQuestions();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Daily review</h1>
      <p className="mt-2 font-semibold text-muted">
        A few minutes of review keeps what you&apos;ve learned from fading — and keeps your streak alive.
      </p>

      <div className="mt-8">
        <DailyToday allQuestions={allQuestions} />
      </div>

      <DailyChallengeTeaser />

      <p className="mt-6 text-sm text-muted">
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
    </div>
  );
}
