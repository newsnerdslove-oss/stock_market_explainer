// Shared span math for the home-page ticker strips. One year of daily bars is
// fetched per symbol; each span (1D…1Y) is derived from those bars client-side:
// the change is measured vs the close `lookback` trading days ago and the high/low
// spans that window (clamped to the live price so the range stays honest between
// the slow bar refreshes).

import type { Candle } from "@/lib/marketService";

export const SPANS = [
  { id: "1D", lookback: 1 },
  { id: "1W", lookback: 5 },
  { id: "1M", lookback: 21 },
  { id: "3M", lookback: 63 },
  { id: "1Y", lookback: 252 },
] as const;

export type SpanId = (typeof SPANS)[number]["id"];

/** ~1 trading year of daily bars — enough history for every span above. */
export const SPAN_HISTORY = 260;

export interface SpanStat {
  change: number;
  pct: number;
  high: number;
  low: number;
}

export function lookbackFor(span: SpanId): number {
  return SPANS.find((s) => s.id === span)?.lookback ?? 1;
}

export function statFor(candles: Candle[] | undefined, price: number, lookback: number): SpanStat | null {
  if (!candles || candles.length < 2 || !price) return null;
  const refIdx = Math.max(0, candles.length - 1 - lookback);
  const refClose = candles[refIdx].close;
  if (!refClose) return null;
  let high = price;
  let low = price;
  for (const c of candles.slice(refIdx + 1)) {
    high = Math.max(high, c.high);
    low = Math.min(low, c.low);
  }
  const change = price - refClose;
  return { change, pct: (change / refClose) * 100, high, low };
}
