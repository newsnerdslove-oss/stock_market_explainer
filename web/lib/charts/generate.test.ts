import { describe, it, expect } from "vitest";
import { mulberry32, generatePattern, isCorrectPick, PATTERN_IDS } from "@/lib/charts/generate";
import type { OHLC } from "@/lib/charts/patterns";

const valid = (c: OHLC) => c.high >= Math.max(c.open, c.close) && c.low <= Math.min(c.open, c.close);

describe("mulberry32", () => {
  it("is deterministic per seed and varies by seed", () => {
    const a = mulberry32(7);
    const b = mulberry32(7);
    expect(a()).toBe(b());
    expect(mulberry32(1)()).not.toBe(mulberry32(2)());
  });
});

describe("generatePattern", () => {
  it("is reproducible for a seed and different across seeds", () => {
    expect(generatePattern("hammer", 123)).toEqual(generatePattern("hammer", 123));
    expect(generatePattern("hammer", 123).candles).not.toEqual(generatePattern("hammer", 456).candles);
  });

  it("produces OHLC-valid candles with the signal index in range", () => {
    for (const id of PATTERN_IDS) {
      for (const seed of [1, 99, 1000, 54321]) {
        const g = generatePattern(id, seed);
        expect(g.candles.every(valid)).toBe(true);
        expect(g.signalIndex).toBeGreaterThanOrEqual(0);
        expect(g.signalIndex).toBeLessThan(g.candles.length);
        expect(g.pattern).toBe(id);
      }
    }
  });

  it("injects each pattern's defining shape at the signal index", () => {
    for (const seed of [3, 77, 2024]) {
      // Bullish engulfing: signal candle is green and its body engulfs the prior one.
      const be = generatePattern("bullish-engulfing", seed);
      const sig = be.candles[be.signalIndex];
      const prior = be.candles[be.signalIndex - 1];
      expect(sig.close).toBeGreaterThan(sig.open); // green
      expect(sig.close).toBeGreaterThan(prior.open);
      expect(sig.open).toBeLessThan(prior.close);

      // Hammer: long lower wick relative to the upper.
      const h = generatePattern("hammer", seed);
      const hc = h.candles[h.signalIndex];
      const lower = Math.min(hc.open, hc.close) - hc.low;
      const upper = hc.high - Math.max(hc.open, hc.close);
      expect(lower).toBeGreaterThan(upper * 2);

      // Doji: near-zero body relative to range.
      const d = generatePattern("doji", seed);
      const dc = d.candles[d.signalIndex];
      expect(Math.abs(dc.close - dc.open)).toBeLessThan((dc.high - dc.low) * 0.15);
    }
  });
});

describe("isCorrectPick", () => {
  it("accepts within tolerance, rejects outside", () => {
    expect(isCorrectPick(10, 10)).toBe(true);
    expect(isCorrectPick(9, 10)).toBe(true); // ±1 default
    expect(isCorrectPick(11, 10)).toBe(true);
    expect(isCorrectPick(8, 10)).toBe(false);
    expect(isCorrectPick(8, 10, 2)).toBe(true);
  });
});
