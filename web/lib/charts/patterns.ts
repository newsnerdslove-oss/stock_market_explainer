// Deterministic candlestick-pattern instances for the chart-reading quiz. Fixed
// (no RNG) so a question renders the same chart every time and grading is stable.
// Each builder returns a short OHLC series with the named pattern at the end.

export interface OHLC {
  open: number;
  high: number;
  low: number;
  close: number;
}

/** A descending then ascending run of plain candles, to set context before the signal. */
function trend(from: number, step: number, n: number): OHLC[] {
  const out: OHLC[] = [];
  let base = from;
  for (let i = 0; i < n; i++) {
    const open = base;
    const close = base + step;
    const hi = Math.max(open, close) + Math.abs(step) * 0.3;
    const lo = Math.min(open, close) - Math.abs(step) * 0.3;
    out.push({ open, high: hi, low: lo, close });
    base = close;
  }
  return out;
}

/** Big green candle whose body engulfs the prior red one, after a downtrend. */
export function bullishEngulfing(): OHLC[] {
  const ctx = trend(100, -4, 3); // downtrend
  const prevClose = ctx[ctx.length - 1].close;
  return [
    ...ctx,
    { open: prevClose, high: prevClose + 1, low: prevClose - 5, close: prevClose - 4 }, // small red
    { open: prevClose - 5, high: prevClose + 6, low: prevClose - 6, close: prevClose + 5 }, // engulfing green
  ];
}

/** Big red candle engulfing the prior green one, after an uptrend. */
export function bearishEngulfing(): OHLC[] {
  const ctx = trend(80, 4, 3); // uptrend
  const prevClose = ctx[ctx.length - 1].close;
  return [
    ...ctx,
    { open: prevClose, high: prevClose + 5, low: prevClose - 1, close: prevClose + 4 }, // small green
    { open: prevClose + 5, high: prevClose + 6, low: prevClose - 6, close: prevClose - 5 }, // engulfing red
  ];
}

/** Small body near the top, long lower wick, after a downtrend. */
export function hammer(): OHLC[] {
  const ctx = trend(100, -4, 4);
  const base = ctx[ctx.length - 1].close;
  return [...ctx, { open: base, high: base + 1, low: base - 9, close: base + 0.5 }];
}

/** Small body near the bottom, long upper wick, after an uptrend. */
export function shootingStar(): OHLC[] {
  const ctx = trend(80, 4, 4);
  const base = ctx[ctx.length - 1].close;
  return [...ctx, { open: base, high: base + 9, low: base - 1, close: base - 0.5 }];
}

/** Open ≈ close (indecision) with wicks both sides. */
export function doji(): OHLC[] {
  const ctx = trend(90, 3, 3);
  const base = ctx[ctx.length - 1].close;
  return [...ctx, { open: base, high: base + 5, low: base - 5, close: base + 0.1 }];
}

export interface PatternSpec {
  id: string;
  /** Human label — also a quiz choice. */
  name: string;
  build: () => OHLC[];
}

export const PATTERNS: PatternSpec[] = [
  { id: "bullish-engulfing", name: "Bullish engulfing", build: bullishEngulfing },
  { id: "bearish-engulfing", name: "Bearish engulfing", build: bearishEngulfing },
  { id: "hammer", name: "Hammer", build: hammer },
  { id: "shooting-star", name: "Shooting star", build: shootingStar },
  { id: "doji", name: "Doji", build: doji },
];
