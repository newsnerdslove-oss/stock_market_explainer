"use client";

import { useState } from "react";
import Link from "next/link";
import { checkAnswer } from "@/lib/quiz/check";
import { isChoiceQuestion, type ChoiceQuestion, type Question } from "@/lib/quiz/types";
import { useProgress } from "@/lib/progress/useProgress";
import { MASTERY_SCORE, PASS_SCORE } from "@/lib/progress/schema";

// Inline **bold**/*italic*/`code` → nodes. Mirrors LessonRenderer's `inline`
// so question text reads like the lessons. (Small enough to keep local.)
function inline(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((tok, i) => {
      if (tok.startsWith("**") && tok.endsWith("**"))
        return (
          <strong key={i} className="font-medium text-ink">
            {tok.slice(2, -2)}
          </strong>
        );
      if (tok.startsWith("*") && tok.endsWith("*")) return <em key={i}>{tok.slice(1, -1)}</em>;
      if (tok.startsWith("`") && tok.endsWith("`"))
        return (
          <code key={i} className="rounded bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-up">
            {tok.slice(1, -1)}
          </code>
        );
      return <span key={i}>{tok}</span>;
    });
}

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
  const { recordQuizAttempt } = useProgress();
  const pool = questions.filter(isChoiceQuestion) as ChoiceQuestion[];

  const [phase, setPhase] = useState<Phase>("intro");
  const [order, setOrder] = useState<ChoiceQuestion[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  if (pool.length === 0) return null;

  function start() {
    // Shuffle only on this click (post-mount) so SSR/first render stay deterministic.
    setOrder(shuffle(pool).map((q) => ({ ...q, choices: shuffle(q.choices) })));
    setIdx(0);
    setSelected(null);
    setRevealed(false);
    setCorrectCount(0);
    setPhase("answering");
  }

  const q = order[idx];
  const result = revealed && q ? checkAnswer(q, selected ?? "") : null;
  const isLast = idx === order.length - 1;

  function check() {
    if (selected == null || !q) return;
    if (checkAnswer(q, selected).correct) setCorrectCount((c) => c + 1);
    setRevealed(true);
  }

  function advance() {
    if (isLast) {
      const score = correctCount / order.length;
      recordQuizAttempt(lessonSlug, score);
      setFinalScore(score);
      setPhase("results");
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-learn/20 font-mono text-xs text-learn">
          ✓
        </span>
        <h2 className="text-sm font-medium text-ink">Test yourself</h2>
        {phase === "answering" && (
          <span className="ml-auto font-mono text-xs text-faint">
            {idx + 1} / {order.length}
          </span>
        )}
      </div>

      {phase === "intro" && (
        <Intro count={pool.length} onStart={start} />
      )}

      {phase === "answering" && q && (
        <div className="mt-4">
          <p className="leading-relaxed text-ink">{inline(q.prompt)}</p>

          <div className="mt-4 space-y-2" role="group" aria-label="Answer choices">
            {q.choices.map((c) => (
              <ChoiceButton
                key={c.id}
                label={c.text}
                state={choiceState(c.id, q.correctId, selected, revealed)}
                disabled={revealed}
                onClick={() => setSelected(c.id)}
              />
            ))}
          </div>

          {result && (
            <div
              className={`mt-4 rounded-md border p-4 text-sm leading-relaxed ${
                result.correct ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10"
              }`}
              aria-live="polite"
            >
              <p className={`font-medium ${result.correct ? "text-up" : "text-down"}`}>
                {result.correct ? "Correct" : "Not quite"}
              </p>
              {!result.correct && result.selectedFeedback && (
                <p className="mt-1 text-muted">{inline(result.selectedFeedback)}</p>
              )}
              <p className="mt-1 text-muted">{inline(result.explanation)}</p>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            {!revealed ? (
              <button
                type="button"
                onClick={check}
                disabled={selected == null}
                className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40"
              >
                Check
              </button>
            ) : (
              <button
                type="button"
                onClick={advance}
                className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
              >
                {isLast ? "See results" : "Next question"}
              </button>
            )}
          </div>
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
        <span className="font-mono text-ink">{Math.round(PASS_SCORE * 100)}%</span> to unlock the next
        one. Retry as many times as you like.
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

type ChoiceVisualState = "idle" | "selected" | "correct" | "wrong" | "dimmed";

function choiceState(
  id: string,
  correctId: string,
  selected: string | null,
  revealed: boolean,
): ChoiceVisualState {
  if (!revealed) return selected === id ? "selected" : "idle";
  if (id === correctId) return "correct";
  if (id === selected) return "wrong";
  return "dimmed";
}

const CHOICE_CLASSES: Record<ChoiceVisualState, string> = {
  idle: "border-strong bg-surface text-ink hover:bg-surface-2",
  selected: "border-learn bg-learn/10 text-ink",
  correct: "border-up/60 bg-up/10 text-ink",
  wrong: "border-down/60 bg-down/10 text-ink",
  dimmed: "border-strong bg-surface text-faint",
};

function ChoiceButton({
  label,
  state,
  disabled,
  onClick,
}: {
  label: string;
  state: ChoiceVisualState;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={state === "selected"}
      className={`flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition ${CHOICE_CLASSES[state]} disabled:cursor-default`}
    >
      <span className="flex-1">{inline(label)}</span>
      {state === "correct" && <span className="font-mono text-xs text-up">✓</span>}
      {state === "wrong" && <span className="font-mono text-xs text-down">✗</span>}
    </button>
  );
}
