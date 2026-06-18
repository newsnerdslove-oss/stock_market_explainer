import { describe, it, expect } from "vitest";
import { PATTERNS, bullishEngulfing, bearishEngulfing, hammer, shootingStar, doji, type OHLC } from "@/lib/charts/patterns";

function valid(c: OHLC): boolean {
  return c.high >= Math.max(c.open, c.close) && c.low <= Math.min(c.open, c.close) && c.high >= c.low;
}

describe("candlestick pattern builders", () => {
  it("produce OHLC-valid candles (high ≥ body ≥ low)", () => {
    for (const p of PATTERNS) {
      const candles = p.build();
      expect(candles.length).toBeGreaterThanOrEqual(4);
      expect(candles.every(valid)).toBe(true);
    }
  });

  it("are deterministic — same output every call", () => {
    expect(bullishEngulfing()).toEqual(bullishEngulfing());
    expect(doji()).toEqual(doji());
  });

  it("encode the defining shape of each pattern", () => {
    // Bullish engulfing: last candle green and its body engulfs the prior red body.
    const be = bullishEngulfing();
    const [prev, last] = be.slice(-2);
    expect(last.close).toBeGreaterThan(last.open); // green
    expect(prev.close).toBeLessThan(prev.open); // red
    expect(last.close).toBeGreaterThan(prev.open);
    expect(last.open).toBeLessThan(prev.close);

    // Bearish engulfing mirror: last candle red and engulfs a prior green.
    const ber = bearishEngulfing();
    const last2 = ber[ber.length - 1];
    expect(last2.close).toBeLessThan(last2.open); // red

    // Hammer: long lower wick — distance below the body ≫ above it.
    const h = hammer().at(-1)!;
    const lower = Math.min(h.open, h.close) - h.low;
    const upper = h.high - Math.max(h.open, h.close);
    expect(lower).toBeGreaterThan(upper * 3);

    // Shooting star: long upper wick — the inverse of the hammer.
    const s = shootingStar().at(-1)!;
    const sUpper = s.high - Math.max(s.open, s.close);
    const sLower = Math.min(s.open, s.close) - s.low;
    expect(sUpper).toBeGreaterThan(sLower * 3);

    // Doji: open ≈ close (tiny body relative to range).
    const d = doji().at(-1)!;
    expect(Math.abs(d.close - d.open)).toBeLessThan((d.high - d.low) * 0.1);
  });
});
