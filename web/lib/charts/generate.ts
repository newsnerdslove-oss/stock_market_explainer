// Dynamic candlestick-chart generation: a realistic random-walk "curve" (trend +
// volatility) with a recognized pattern injected at a known location. Seeded, so
// a given seed reproduces the exact chart (stable rendering + fair grading) while
// different seeds give genuinely different instances — the trainer shows a fresh,
// real-looking chart each round rather than one memorized picture.

import type { OHLC } from "@/lib/charts/patterns";

export type PatternId = "bullish-engulfing" | "bearish-engulfing" | "hammer" | "shooting-star" | "doji";

export interface GeneratedChart {
  candles: OHLC[];
  /** Index of the candle that completes the pattern (what the user should click). */
  signalIndex: number;
  /** Candles the pattern spans (engulfing = 2, single-candle = 1). */
  signalLen: number;
  pattern: PatternId;
}

/** Deterministic PRNG — same seed ⇒ same stream. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A realistic OHLC random walk: each candle drifts by `drift` ± `vol` noise, with wicks. */
function walk(rng: () => number, n: number, start: number, drift: number, vol: number): OHLC[] {
  const out: OHLC[] = [];
  let prevClose = start;
  for (let i = 0; i < n; i++) {
    const open = prevClose + (rng() - 0.5) * vol * 0.3;
    const close = open + drift + (rng() - 0.5) * vol;
    const hi = Math.max(open, close) + rng() * vol * 0.5;
    const lo = Math.min(open, close) - rng() * vol * 0.5;
    out.push({ open, high: hi, low: lo, close });
    prevClose = close;
  }
  return out;
}

// Each pattern: the preceding trend it needs, and an injector that builds the
// signal candle(s) off the last close. The signal is exaggerated (≈2× the walk's
// volatility) so it's clearly the standout — unambiguous to grade.
const SPEC: Record<PatternId, { drift: number; len: number; inject: (prev: number, s: number) => OHLC[] }> = {
  "bullish-engulfing": {
    drift: -1, // downtrend before
    len: 2,
    inject: (p, s) => {
      const red = { open: p, high: p + 0.3 * s, low: p - 1.4 * s, close: p - 1.2 * s };
      const green = { open: p - 1.4 * s, high: p + 1.8 * s, low: p - 1.7 * s, close: p + 1.5 * s };
      return [red, green];
    },
  },
  "bearish-engulfing": {
    drift: 1, // uptrend before
    len: 2,
    inject: (p, s) => {
      const green = { open: p, high: p + 1.4 * s, low: p - 0.3 * s, close: p + 1.2 * s };
      const red = { open: p + 1.4 * s, high: p + 1.7 * s, low: p - 1.8 * s, close: p - 1.5 * s };
      return [green, red];
    },
  },
  hammer: {
    drift: -1,
    len: 1,
    inject: (p, s) => [{ open: p, high: p + 0.3 * s, low: p - 2.6 * s, close: p + 0.15 * s }],
  },
  "shooting-star": {
    drift: 1,
    len: 1,
    inject: (p, s) => [{ open: p, high: p + 2.6 * s, low: p - 0.3 * s, close: p - 0.15 * s }],
  },
  doji: {
    drift: 0.4,
    len: 1,
    inject: (p, s) => [{ open: p, high: p + 1.6 * s, low: p - 1.6 * s, close: p + 0.04 * s }],
  },
};

export const PATTERN_IDS: PatternId[] = Object.keys(SPEC) as PatternId[];

/** Generate a chart that exhibits `pattern`, varied by `seed`. */
export function generatePattern(pattern: PatternId, seed: number): GeneratedChart {
  const rng = mulberry32(seed);
  const spec = SPEC[pattern];
  const start = 80 + rng() * 60; // varied price level
  const vol = 2 + rng() * 2; // varied volatility (the candle "scale")
  // Context: enough lead-in to read the trend, with a little jitter on length.
  const lead = 8 + Math.floor(rng() * 5);
  const context = walk(rng, lead, start, spec.drift * (0.4 + rng() * 0.4), vol);
  const prevClose = context[context.length - 1].close;
  const signal = spec.inject(prevClose, vol);
  // A couple of trailing candles after the signal so it isn't always the last bar.
  const tail = walk(rng, 1 + Math.floor(rng() * 3), signal[signal.length - 1].close, 0, vol);

  const candles = [...context, ...signal, ...tail];
  return {
    candles,
    signalIndex: context.length + signal.length - 1, // the completing candle
    signalLen: spec.len,
    pattern,
  };
}

/** A click is correct if it lands on the signal (the completing candle) within `tol`. */
export function isCorrectPick(index: number, signalIndex: number, tol = 1): boolean {
  return Math.abs(index - signalIndex) <= tol;
}
