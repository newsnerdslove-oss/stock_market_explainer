// Candlestick-pattern detection — scans a price series and returns the indices
// where a pattern completes. Real (if teaching-simple) rules: body relationships
// plus a short trend-context check. Used by the backtesting sandbox to find every
// occurrence of a pattern, then simulate trading it.

import type { OHLC } from "@/lib/charts/patterns";
import type { PatternId } from "@/lib/charts/generate";

const body = (c: OHLC) => Math.abs(c.close - c.open);
const isGreen = (c: OHLC) => c.close > c.open;
const isRed = (c: OHLC) => c.close < c.open;
const EPS = 1e-6;

/** Was price falling into bar i (close[i-1] below close[i-look])? */
function downtrend(c: OHLC[], i: number, look = 3): boolean {
  return i >= look && c[i - 1].close < c[i - look].close;
}
function uptrend(c: OHLC[], i: number, look = 3): boolean {
  return i >= look && c[i - 1].close > c[i - look].close;
}

/** Indices where `pattern` completes in `candles`. */
export function detectSignals(candles: OHLC[], pattern: PatternId): number[] {
  const out: number[] = [];
  for (let i = 1; i < candles.length; i++) {
    const c = candles[i];
    const p = candles[i - 1];
    const lower = Math.min(c.open, c.close) - c.low;
    const upper = c.high - Math.max(c.open, c.close);

    switch (pattern) {
      case "bullish-engulfing":
        if (isRed(p) && isGreen(c) && c.open <= p.close && c.close >= p.open && body(c) > body(p) && downtrend(candles, i)) out.push(i);
        break;
      case "bearish-engulfing":
        if (isGreen(p) && isRed(c) && c.open >= p.close && c.close <= p.open && body(c) > body(p) && uptrend(candles, i)) out.push(i);
        break;
      case "hammer":
        if (body(c) > EPS && lower >= 2 * body(c) && upper <= body(c) && downtrend(candles, i)) out.push(i);
        break;
      case "shooting-star":
        if (body(c) > EPS && upper >= 2 * body(c) && lower <= body(c) && uptrend(candles, i)) out.push(i);
        break;
      case "doji":
        // Indecision, not directional — not a tradable signal here.
        break;
    }
  }
  return out;
}

/** Trade direction a pattern implies (bullish reversals → long, bearish → short). */
export function patternSide(pattern: PatternId): "long" | "short" {
  return pattern === "bearish-engulfing" || pattern === "shooting-star" ? "short" : "long";
}
