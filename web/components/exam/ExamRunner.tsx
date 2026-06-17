"use client";

import { useEffect, useRef, useState } from "react";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { inline } from "@/lib/inline";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clock(seconds: number): string {
  const s = Math.max(0, seconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

/**
 * The exam SESSION: one timed pass over a fixed question list with free
 * navigation, flag-for-review, and a single graded submission at the end.
 * Deliberately unlike the lesson QuestionRunner (which reveals each answer
 * immediately) — an exam withholds feedback until you submit, which is the whole
 * point of the mode. Choices are shuffled once on mount; the timer auto-submits
 * at zero.
 */
export function ExamRunner({
  questions,
  minutes,
  onSubmit,
  onQuit,
}: {
  questions: ChoiceQuestion[];
  minutes: number;
  /** Fires with the final answer map (question id -> selected choice id). */
  onSubmit: (answers: Record<string, string>) => void;
  onQuit: () => void;
}) {
  // Shuffle each question's choices once (stable for the session).
  const [deck] = useState<ChoiceQuestion[]>(() =>
    questions.map((q) => ({ ...q, choices: shuffle(q.choices) })),
  );
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flags, setFlags] = useState<Set<string>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState(Math.round(minutes * 60));
  const [confirming, setConfirming] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const q = deck[idx];
  const total = deck.length;
  const answeredCount = Object.keys(answers).length;

  // Keep the latest submit closure available to the timer without re-arming it.
  const submitRef = useRef<() => void>(() => {});
  submitRef.current = () => onSubmit(answers);

  // Tick down once per second; auto-submit at zero.
  useEffect(() => {
    if (secondsLeft <= 0) {
      submitRef.current();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  if (!q) return null;

  const select = (choiceId: string) => setAnswers((a) => ({ ...a, [q.id]: choiceId }));
  const toggleFlag = () =>
    setFlags((f) => {
      const next = new Set(f);
      if (next.has(q.id)) next.delete(q.id);
      else next.add(q.id);
      return next;
    });

  const lowTime = secondsLeft <= 60;

  return (
    <div className="mt-6">
      {/* Status bar */}
      <div className="flex items-center justify-between gap-3 rounded-md border border-strong bg-surface px-4 py-2.5 text-sm">
        <span className="text-muted">
          Question <span className="font-mono text-ink">{idx + 1}</span> / {total}
          <span className="ml-3 text-faint">{answeredCount} answered</span>
          {flags.size > 0 && <span className="ml-3 text-streak">{flags.size} flagged</span>}
        </span>
        <span
          className={`font-mono tabular-nums ${lowTime ? "text-down" : "text-ink"}`}
          aria-live="off"
          title="Time remaining"
        >
          ⏱ {clock(secondsLeft)}
        </span>
      </div>

      {/* Question */}
      <div className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <p className="leading-relaxed text-ink">{inline(q.prompt)}</p>
          <button
            type="button"
            onClick={toggleFlag}
            className={`shrink-0 rounded-md border px-2.5 py-1 text-xs transition ${
              flags.has(q.id)
                ? "border-streak/60 bg-streak/10 text-streak"
                : "border-strong text-muted hover:bg-surface-2"
            }`}
            aria-pressed={flags.has(q.id)}
          >
            {flags.has(q.id) ? "★ Flagged" : "☆ Flag"}
          </button>
        </div>

        <div className="mt-4 space-y-2" role="radiogroup" aria-label="Answer choices">
          {q.choices.map((c) => {
            const selected = answers[q.id] === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => select(c.id)}
                className={`flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition ${
                  selected
                    ? "border-learn bg-learn/10 text-ink"
                    : "border-strong bg-surface text-ink hover:bg-surface-2"
                }`}
              >
                <span className="flex-1">{inline(c.text)}</span>
                {selected && <span className="font-mono text-xs text-learn">●</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="rounded-md border border-strong px-3 py-2 text-sm text-ink transition hover:bg-surface-2 disabled:opacity-40"
        >
          ← Prev
        </button>

        <button
          type="button"
          onClick={() => setShowNav((v) => !v)}
          className="rounded-md border border-strong px-3 py-2 text-sm text-muted transition hover:bg-surface-2"
        >
          {showNav ? "Hide map" : "Question map"}
        </button>

        {idx < total - 1 ? (
          <button
            type="button"
            onClick={() => setIdx((i) => Math.min(total - 1, i + 1))}
            className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            className="rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
          >
            Submit exam
          </button>
        )}
      </div>

      {/* Question navigator grid */}
      {showNav && (
        <div className="mt-4 rounded-md border border-strong bg-surface p-3">
          <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
            {deck.map((dq, i) => {
              const done = answers[dq.id] != null;
              const flagged = flags.has(dq.id);
              return (
                <button
                  key={dq.id}
                  type="button"
                  onClick={() => {
                    setIdx(i);
                    setShowNav(false);
                  }}
                  className={`relative h-8 rounded font-mono text-xs transition ${
                    i === idx
                      ? "bg-learn text-canvas"
                      : done
                        ? "bg-learn/15 text-ink hover:bg-learn/25"
                        : "border border-strong text-muted hover:bg-surface-2"
                  }`}
                  title={`Question ${i + 1}${done ? " · answered" : ""}${flagged ? " · flagged" : ""}`}
                >
                  {i + 1}
                  {flagged && (
                    <span className="absolute -right-0.5 -top-0.5 text-[9px] text-streak">★</span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-faint">
            <span><span className="font-mono text-learn">▮</span> answered</span>
            <span><span className="text-streak">★</span> flagged</span>
            <span>{total - answeredCount} unanswered</span>
          </p>
        </div>
      )}

      <div className="mt-6 border-t border-hairline pt-4">
        <button
          type="button"
          onClick={onQuit}
          className="text-xs text-faint transition hover:text-muted"
        >
          Quit without submitting
        </button>
      </div>

      {/* Submit confirmation */}
      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-lg border border-strong bg-surface p-5 shadow-lg">
            <h3 className="text-sm font-medium text-ink">Submit exam?</h3>
            <p className="mt-2 text-sm text-muted">
              You answered <span className="font-mono text-ink">{answeredCount}</span> of {total}.
              {answeredCount < total && (
                <> {total - answeredCount} unanswered question{total - answeredCount === 1 ? "" : "s"} will be marked wrong.</>
              )}
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="rounded-md border border-strong px-3 py-2 text-sm text-ink transition hover:bg-surface-2"
              >
                Keep working
              </button>
              <button
                type="button"
                onClick={() => onSubmit(answers)}
                className="rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
              >
                Submit & score
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
