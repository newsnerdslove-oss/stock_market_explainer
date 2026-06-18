// A small, look-ahead-honest backtester for pattern rules. For each detected
// signal it enters at the NEXT bar's open (you can't act on a bar you haven't
// seen close), then walks forward bar-by-bar to a take-profit, a stop-loss, or a
// max-hold timeout — conservatively assuming the stop fills first if a single bar
// touches both. Reports hit-rate, expectancy, and a compounding equity curve.

import type { OHLC } from "@/lib/charts/patterns";

export type Side = "long" | "short";

export interface BacktestRule {
  /** Take-profit, percent move in the trade's favor. */
  tpPct: number;
  /** Stop-loss, percent move against. */
  slPct: number;
  /** Max bars to hold before exiting at the close. */
  maxHold: number;
}

export interface Trade {
  entryIndex: number;
  entry: number;
  exitIndex: number;
  exit: number;
  /** Signed return of the trade in percent (direction-adjusted). */
  pnlPct: number;
  outcome: "tp" | "sl" | "timeout";
}

export interface BacktestStats {
  trades: number;
  wins: number;
  /** Fraction of trades with a positive return, 0..1. */
  winRate: number;
  avgWinPct: number;
  avgLossPct: number;
  /** Average return per trade — the headline edge number. */
  expectancyPct: number;
  /** Compounded total return over all trades, percent. */
  totalReturnPct: number;
}

export interface BacktestResult {
  trades: Trade[];
  stats: BacktestStats;
  /** Equity indexed to 100 before the first trade, one point per trade. */
  equity: number[];
}

export function backtest(candles: OHLC[], signals: number[], side: Side, rule: BacktestRule): BacktestResult {
  const trades: Trade[] = [];

  for (const sig of signals) {
    const entryIndex = sig + 1; // enter the bar AFTER the signal — no look-ahead
    if (entryIndex >= candles.length) continue;
    const entry = candles[entryIndex].open;
    const tp = side === "long" ? entry * (1 + rule.tpPct / 100) : entry * (1 - rule.tpPct / 100);
    const sl = side === "long" ? entry * (1 - rule.slPct / 100) : entry * (1 + rule.slPct / 100);
    const lastBar = Math.min(entryIndex + rule.maxHold, candles.length - 1);

    let exit = candles[lastBar].close;
    let exitIndex = lastBar;
    let outcome: Trade["outcome"] = "timeout";

    for (let j = entryIndex; j <= lastBar; j++) {
      const bar = candles[j];
      const hitSL = side === "long" ? bar.low <= sl : bar.high >= sl;
      const hitTP = side === "long" ? bar.high >= tp : bar.low <= tp;
      // Conservative: if a single bar touches both, assume the stop filled first.
      if (hitSL) {
        exit = sl;
        exitIndex = j;
        outcome = "sl";
        break;
      }
      if (hitTP) {
        exit = tp;
        exitIndex = j;
        outcome = "tp";
        break;
      }
    }

    const pnlPct = side === "long" ? ((exit - entry) / entry) * 100 : ((entry - exit) / entry) * 100;
    trades.push({ entryIndex, entry, exitIndex, exit, pnlPct, outcome });
  }

  const wins = trades.filter((t) => t.pnlPct > 0);
  const losses = trades.filter((t) => t.pnlPct <= 0);
  const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

  let eq = 100;
  const equity = [100];
  for (const t of trades) {
    eq *= 1 + t.pnlPct / 100;
    equity.push(eq);
  }

  return {
    trades,
    equity,
    stats: {
      trades: trades.length,
      wins: wins.length,
      winRate: trades.length ? wins.length / trades.length : 0,
      avgWinPct: avg(wins.map((t) => t.pnlPct)),
      avgLossPct: avg(losses.map((t) => t.pnlPct)),
      expectancyPct: avg(trades.map((t) => t.pnlPct)),
      totalReturnPct: eq - 100,
    },
  };
}
