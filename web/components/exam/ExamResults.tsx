"use client";

import { useState } from "react";
import { inline } from "@/lib/inline";
import { EXAM_PASS_SCORE } from "@/lib/exam/blueprint";
import type { ExamResult } from "@/lib/exam/score";

const pct = (x: number) => Math.round(x * 100);

/** Results screen: overall pass/fail, per-function weak-spot bars, and review. */
export function ExamResults({
  result,
  onRetry,
  onExit,
}: {
  result: ExamResult;
  onRetry: () => void;
  onExit: () => void;
}) {
  const [showReview, setShowReview] = useState(false);
  const passed = result.passed;
  const headlineBox = passed ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10";
  const headlineColor = passed ? "text-up" : "text-down";

  return (
    <div className="mt-6">
      {/* Headline score */}
      <div className={`rounded-lg border p-5 ${headlineBox}`}>
        <p className={`text-sm font-medium ${headlineColor}`}>
          {passed ? "Passed" : "Below passing"}
        </p>
        <p className="mt-1 font-mono text-4xl text-ink">{pct(result.score)}%</p>
        <p className="mt-1 text-sm text-muted">
          {result.correct} of {result.total} correct · passing is{" "}
          <span className="font-mono">{pct(EXAM_PASS_SCORE)}%</span>
        </p>
        {result.weakest && result.weakest.score != null && !passed && (
          <p className="mt-3 text-sm text-ink">
            Weakest area:{" "}
            <span className="font-medium">
              {result.weakest.code} — {result.weakest.label}
            </span>{" "}
            ({pct(result.weakest.score)}%). Focus your next session there.
          </p>
        )}
      </div>

      {/* Per-function breakdown */}
      {result.byFunction.length > 0 && (
        <section className="mt-6">
          <h3 className="text-sm font-medium text-ink">By exam function</h3>
          <div className="mt-3 space-y-3">
            {result.byFunction.map((f) => {
              const s = f.score ?? 0;
              const weak = result.weakest?.tag === f.tag && !passed;
              return (
                <div key={f.tag}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink">
                      <span className="font-mono text-xs text-muted">{f.code}</span> {f.label}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {f.correct}/{f.total} · {pct(s)}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className={`h-full rounded-full ${
                        s >= EXAM_PASS_SCORE ? "bg-up" : weak ? "bg-down" : "bg-streak"
                      }`}
                      style={{ width: `${Math.max(2, pct(s))}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onRetry}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          New exam
        </button>
        {result.missed.length > 0 && (
          <button
            type="button"
            onClick={() => setShowReview((v) => !v)}
            className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
          >
            {showReview ? "Hide review" : `Review ${result.missed.length} missed`}
          </button>
        )}
        <button
          type="button"
          onClick={onExit}
          className="rounded-md border border-strong px-4 py-2 text-sm text-muted transition hover:bg-surface-2"
        >
          Done
        </button>
      </div>

      {/* Missed-question review */}
      {showReview && (
        <section className="mt-6 space-y-4">
          {result.missed.map(({ question: q, selectedId }) => {
            const correct = q.choices.find((c) => c.id === q.correctId);
            const picked = selectedId ? q.choices.find((c) => c.id === selectedId) : null;
            return (
              <div key={q.id} className="rounded-md border border-strong bg-surface p-4 text-sm">
                <p className="leading-relaxed text-ink">{inline(q.prompt)}</p>
                <p className="mt-3 text-muted">
                  <span className="text-down">Your answer:</span>{" "}
                  {picked ? inline(picked.text) : <span className="text-faint">skipped</span>}
                </p>
                <p className="mt-1 text-muted">
                  <span className="text-up">Correct:</span> {correct ? inline(correct.text) : "—"}
                </p>
                <p className="mt-2 leading-relaxed text-muted">{inline(q.explanation)}</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
