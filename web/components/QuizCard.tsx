"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QuestionRunner } from "@/components/QuestionRunner";
import { isChoiceQuestion, type ChoiceQuestion, type Question } from "@/lib/quiz/types";
import { useProgress } from "@/lib/progress/useProgress";
import { MASTERY_SCORE, PASS_SCORE } from "@/lib/progress/schema";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = "intro" | "answering" | "results";

export function QuizCard({
  lessonSlug,
  questions,
  next,
}: {
  lessonSlug: string;
  questions: Question[];
  next?: { slug: string; title: string } | null;
}) {
  const { recordQuizAttempt, recordReview, markActiveToday } = useProgress();
  // Stable for the component's life; the UI only renders single-answer choice types.
  const pool = useMemo(
    () => questions.filter(isChoiceQuestion) as ChoiceQuestion[],
    [questions],
  );

  const [phase, setPhase] = useState<Phase>("intro");
  const [order, setOrder] = useState<ChoiceQuestion[]>([]);
  const [finalScore, setFinalScore] = useState(0);

  if (pool.length === 0) return null;

  function start() {
    setOrder(shuffle(pool)); // question order; QuestionRunner shuffles each question's choices
    setPhase("answering");
  }

  function complete(correctCount: number, total: number) {
    const score = total > 0 ? Math.min(1, Math.max(0, correctCount / total)) : 0;
    recordQuizAttempt(lessonSlug, score);
    markActiveToday(); // finishing a lesson quiz counts as training today (streak credit)
    setFinalScore(score);
    setPhase("results");
  }

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-learn/20 font-mono text-xs text-learn">
          ✓
        </span>
        <h2 className="text-sm font-medium text-ink">Test yourself</h2>
      </div>

      {phase === "intro" && <Intro count={pool.length} onStart={start} />}

      {phase === "answering" && (
        <div className="mt-4">
          <QuestionRunner
            questions={order}
            onAnswer={(qid, correct) => recordReview(qid, correct)}
            onComplete={complete}
          />
        </div>
      )}

      {phase === "results" && (
        <Results score={finalScore} total={order.length} next={next} onRetry={start} />
      )}
    </section>
  );
}

function Intro({ count, onStart }: { count: number; onStart: () => void }) {
  return (
    <div className="mt-4">
      <p className="text-sm text-muted">
        {count} quick question{count === 1 ? "" : "s"} on this lesson. Score{" "}
        <span className="font-mono text-ink">{Math.round(PASS_SCORE * 100)}%</span>{" "}
        to unlock the next one. Retry as many times as you like.
      </p>
      <div className="mt-4">
        <button
          type="button"
          onClick={onStart}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Start quiz
        </button>
      </div>
    </div>
  );
}

function Results({
  score,
  total,
  next,
  onRetry,
}: {
  score: number;
  total: number;
  next?: { slug: string; title: string } | null;
  onRetry: () => void;
}) {
  const pct = Math.round(score * 100);
  const passed = score >= PASS_SCORE;
  const mastered = score >= MASTERY_SCORE;
  const correct = Math.round(score * total);

  // Static class strings (Tailwind JIT can't see interpolated names).
  const box = passed ? "border-up/40 bg-up/10" : "border-streak/40 bg-streak/10";
  const headlineColor = passed ? "text-up" : "text-streak";
  const headline = mastered ? "Mastered!" : passed ? "Passed" : "Keep going";

  return (
    <div className="mt-4">
      <div className={`rounded-md border p-4 ${box}`}>
        <p className={`text-sm font-medium ${headlineColor}`}>{headline}</p>
        <p className="mt-1 font-mono text-3xl text-ink">{pct}%</p>
        <p className="mt-1 text-sm text-muted">
          {correct} of {total} correct.{" "}
          {mastered
            ? "Full marks — this one's locked in."
            : passed
              ? "Next lesson unlocked."
              : `You need ${Math.round(PASS_SCORE * 100)}% to unlock the next lesson — give it another go.`}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
        >
          {passed ? "Retry" : "Try again"}
        </button>
        {passed && next && (
          <Link
            href={`/learn/${next.slug}`}
            className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
          >
            Next: {next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
