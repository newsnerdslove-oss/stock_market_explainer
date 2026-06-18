"use client";

import { useEffect, useState } from "react";
import { PatternChart } from "@/components/charts/PatternChart";
import { generatePattern, isCorrectPick, PATTERN_IDS, type GeneratedChart, type PatternId } from "@/lib/charts/generate";

const NAME: Record<PatternId, string> = {
  "bullish-engulfing": "bullish engulfing",
  "bearish-engulfing": "bearish engulfing",
  hammer: "hammer",
  "shooting-star": "shooting star",
  doji: "doji",
};

function freshChart(): GeneratedChart {
  const pattern = PATTERN_IDS[Math.floor(Math.random() * PATTERN_IDS.length)];
  const seed = (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
  return generatePattern(pattern, seed);
}

/**
 * Interactive "spot the signal" trainer: a freshly-generated chart each round
 * (real random-walk price action with the named pattern injected), where the
 * learner clicks the candle that completes the pattern. Graded against where the
 * generator placed it (±1). Charts are made on the client so the random seed
 * can't cause a hydration mismatch.
 */
export function PatternSpotter() {
  const [chart, setChart] = useState<GeneratedChart | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => setChart(freshChart()), []);

  if (!chart) return null;

  const revealed = picked !== null;
  const correct = revealed && isCorrectPick(picked, chart.signalIndex);

  function pick(i: number) {
    if (revealed) return;
    setPicked(i);
    setScore((s) => ({ correct: s.correct + (isCorrectPick(i, chart!.signalIndex) ? 1 : 0), total: s.total + 1 }));
  }

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-medium text-ink">Spot the pattern</h2>
        {score.total > 0 && (
          <span className="font-mono text-xs text-muted">
            {score.correct}/{score.total}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-muted">
        On the chart below, click the candle that completes the{" "}
        <span className="font-medium text-ink">{NAME[chart.pattern]}</span>.
      </p>

      <div className="mt-4">
        <PatternChart
          candles={chart.candles}
          onPick={pick}
          picked={picked}
          correctIndex={revealed ? chart.signalIndex : null}
        />
      </div>

      {revealed && (
        <div
          className={`mt-3 rounded-md border p-3 text-sm ${correct ? "border-up/40 bg-up/10" : "border-down/40 bg-down/10"}`}
          aria-live="polite"
        >
          <p className={`font-medium ${correct ? "text-up" : "text-down"}`}>{correct ? "Correct" : "Not quite"}</p>
          <p className="mt-1 text-muted">
            {correct
              ? `That's the candle that completes the ${NAME[chart.pattern]}.`
              : `The ${NAME[chart.pattern]} completes at the highlighted candle — note the shape and where it sits in the trend.`}
          </p>
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => {
            setChart(freshChart());
            setPicked(null);
          }}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          {revealed ? "Next chart" : "Skip"}
        </button>
      </div>
    </section>
  );
}
