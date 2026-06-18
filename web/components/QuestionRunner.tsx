"use client";

import { useState } from "react";
import { checkAnswer } from "@/lib/quiz/check";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { inline } from "@/lib/inline";
import { PatternChart } from "@/components/charts/PatternChart";
import type { OHLC } from "@/lib/charts/patterns";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Drives a learner through a fixed list of choice questions one at a time:
 * select → Check → green/red feedback + explanation → Next. Shared by the lesson
 * quiz (QuizCard) and the daily review (DailyToday). Question order is the
 * caller's; choices are shuffled here on mount. Mounts only after a user starts,
 * so the shuffle never causes a hydration mismatch.
 */
export function QuestionRunner({
  questions,
  onAnswer,
  onComplete,
}: {
  questions: ChoiceQuestion[];
  /** Fires once per question when the learner checks it. */
  onAnswer?: (questionId: string, correct: boolean) => void;
  /** Fires after the final question is reviewed. */
  onComplete: (correctCount: number, total: number) => void;
}) {
  const [order] = useState<ChoiceQuestion[]>(() =>
    questions.map((q) => ({ ...q, choices: shuffle(q.choices) })),
  );
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const q = order[idx];
  const total = order.length;
  const isLast = idx === total - 1;
  const result = revealed && q ? checkAnswer(q, selected ?? "") : null;

  function check() {
    if (selected == null || !q || revealed) return; // ignore re-entry once revealed
    const correct = checkAnswer(q, selected).correct;
    if (correct) setCorrectCount((c) => c + 1);
    onAnswer?.(q.id, correct);
    setRevealed(true);
  }

  function advance() {
    if (isLast) {
      onComplete(correctCount, total);
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  if (!q) return null;

  return (
    <div>
      <p className="text-right font-mono text-xs text-faint">
        {idx + 1} / {total}
      </p>
      <p className="mt-2 leading-relaxed text-ink">{inline(q.prompt)}</p>

      {q.type === "chart" && Array.isArray(q.chartData) && (
        <div className="mt-4">
          <PatternChart candles={q.chartData as OHLC[]} />
        </div>
      )}

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
