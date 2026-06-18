"use client";

import { useMemo, useState } from "react";
import { generateMarket, type PatternId } from "@/lib/charts/generate";
import { detectSignals, patternSide } from "@/lib/charts/detect";
import { backtest } from "@/lib/charts/backtest";
import { EquityCurve } from "@/components/charts/EquityCurve";

const PATTERNS: { id: PatternId; label: string }[] = [
  { id: "bullish-engulfing", label: "Bullish engulfing (long)" },
  { id: "hammer", label: "Hammer (long)" },
  { id: "bearish-engulfing", label: "Bearish engulfing (short)" },
  { id: "shooting-star", label: "Shooting star (short)" },
];

const pct = (x: number) => `${x >= 0 ? "+" : ""}${x.toFixed(1)}%`;
const tone = (x: number) => (x > 0 ? "text-up" : x < 0 ? "text-down" : "text-muted");

/**
 * Backtesting sandbox — pick a candlestick rule, run it over a generated price
 * series, and see whether it actually has an edge: hit-rate, expectancy, and an
 * equity curve. The series is fixed per "data set" (seed) so changing the rule
 * compares fairly on identical data; "New data" draws a fresh series. All grading
 * is look-ahead-honest (entry on the bar after the signal). Computed client-side.
 */
export function BacktestSandbox() {
  const [seed, setSeed] = useState(1);
  const [pattern, setPattern] = useState<PatternId>("bullish-engulfing");
  const [tpPct, setTpPct] = useState(3);
  const [slPct, setSlPct] = useState(2);
  const [maxHold, setMaxHold] = useState(10);

  const candles = useMemo(() => generateMarket(seed, 160), [seed]);
  const result = useMemo(() => {
    const signals = detectSignals(candles, pattern);
    return backtest(candles, signals, patternSide(pattern), { tpPct, slPct, maxHold });
  }, [candles, pattern, tpPct, slPct, maxHold]);

  const s = result.stats;
  const inputCls = "rounded-md border border-strong bg-canvas px-2 py-1.5 text-sm text-ink focus:border-learn focus:outline-none";

  return (
    <section className="mt-12 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <h2 className="text-sm font-medium text-ink">Backtest sandbox</h2>
      <p className="mt-1 text-sm text-muted">
        Run a pattern rule over a generated price series and see if it has an edge. Tweak the rule on
        the same data; draw a fresh series with “New data.”
      </p>

      {/* Controls */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <label className="text-xs text-muted">
          Pattern
          <select value={pattern} onChange={(e) => setPattern(e.target.value as PatternId)} className={`${inputCls} mt-1 w-full`}>
            {PATTERNS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs text-muted">
          Take-profit %
          <input type="number" min={0.5} step={0.5} value={tpPct} onChange={(e) => setTpPct(Math.max(0.1, Number(e.target.value)))} className={`${inputCls} mt-1 w-full font-mono`} />
        </label>
        <label className="text-xs text-muted">
          Stop-loss %
          <input type="number" min={0.5} step={0.5} value={slPct} onChange={(e) => setSlPct(Math.max(0.1, Number(e.target.value)))} className={`${inputCls} mt-1 w-full font-mono`} />
        </label>
        <label className="text-xs text-muted">
          Max hold (bars)
          <input type="number" min={1} step={1} value={maxHold} onChange={(e) => setMaxHold(Math.max(1, Math.round(Number(e.target.value))))} className={`${inputCls} mt-1 w-full font-mono`} />
        </label>
      </div>

      {/* Results */}
      {s.trades === 0 ? (
        <p className="mt-4 text-sm text-muted">
          No occurrences of this pattern in this data set — hit “New data” for a different series.
        </p>
      ) : (
        <>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Trades" value={String(s.trades)} />
            <Stat label="Hit rate" value={`${Math.round(s.winRate * 100)}%`} />
            <Stat label="Expectancy / trade" value={pct(s.expectancyPct)} color={tone(s.expectancyPct)} />
            <Stat label="Total return" value={pct(s.totalReturnPct)} color={tone(s.totalReturnPct)} />
            <Stat label="Avg win" value={pct(s.avgWinPct)} color="text-up" />
            <Stat label="Avg loss" value={pct(s.avgLossPct)} color="text-down" />
          </div>

          <div className="mt-4">
            <p className="mb-1 text-xs uppercase tracking-wide text-faint">Equity curve (start = 100)</p>
            <EquityCurve equity={result.equity} />
          </div>
        </>
      )}

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={() => setSeed((x) => x + 1)}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          New data
        </button>
      </div>

      {/* Caveats — the whole point of the backtesting module */}
      <div className="mt-4 rounded-md border border-streak/40 bg-streak/10 p-3 text-xs text-streak">
        <p className="font-medium">Read this before you trust any number above.</p>
        <ul className="mt-1 list-disc space-y-0.5 pl-4">
          <li><strong>Small sample:</strong> a handful of trades proves nothing — edges need hundreds.</li>
          <li><strong>Overfitting:</strong> tuning TP/SL until the curve looks good is curve-fitting, not an edge.</li>
          <li><strong>This is synthetic data</strong> with no costs, slippage, or spread; entry is the next bar’s open and stops fill first — already optimistic.</li>
          <li><strong>Past ≠ future,</strong> and one position is risked fully each trade (no sizing).</li>
        </ul>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-md border border-strong bg-surface p-3">
      <p className={`font-mono text-lg ${color ?? "text-ink"}`}>{value}</p>
      <p className="mt-0.5 text-xs text-muted">{label}</p>
    </div>
  );
}
