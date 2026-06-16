import Link from "next/link";
import { getAllLessons } from "@/lib/lessons";

export const metadata = {
  title: "Learn — Stock Market Explainer",
  description: "Structured lessons from market basics toward Series 7 depth.",
};

export default function LearnIndex() {
  const lessons = getAllLessons();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-muted transition hover:text-ink">
        ← Home
      </Link>

      <h1 className="mt-4 text-4xl font-medium tracking-tight">Learn</h1>
      <p className="mt-3 text-muted">
        Start at the basics and work up. Each lesson is a few minutes — read them in order.
      </p>

      <ol className="mt-10 space-y-3">
        {lessons.map((lesson, i) => (
          <li key={lesson.slug}>
            <Link
              href={`/learn/${lesson.slug}`}
              className="group flex items-center gap-4 rounded-lg border border-strong bg-surface p-4 transition hover:bg-surface-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-learn/40 font-mono text-sm text-learn">
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium text-ink">{lesson.title}</span>
                  <span className="font-mono text-xs text-faint">
                    Level {lesson.level} · {lesson.estMinutes} min
                  </span>
                </span>
                <span className="mt-0.5 block text-sm text-muted">{lesson.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
