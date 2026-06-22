import { describe, it, expect } from "vitest";
import { sma, ema, rsi, macd, bollinger, vwap } from "@/lib/indicators";

describe("sma", () => {
  it("is null during warm-up, then the rolling mean", () => {
    expect(sma([1, 2, 3, 4, 5], 3)).toEqual([null, null, 2, 3, 4]);
  });
});

describe("ema", () => {
  it("seeds with the SMA of the first window, then smooths", () => {
    const out = ema([1, 2, 3, 4, 5], 3); // k = 0.5, seed = 2
    expect(out.slice(0, 2)).toEqual([null, null]);
    expect(out[2]).toBeCloseTo(2, 9);
    expect(out[3]).toBeCloseTo(3, 9); // 4·.5 + 2·.5
    expect(out[4]).toBeCloseTo(4, 9); // 5·.5 + 3·.5
  });
  it("converges toward a constant series", () => {
    const out = ema([5, 5, 5, 5, 5, 5], 3);
    expect(out[5]).toBeCloseTo(5, 9);
  });
});

describe("rsi", () => {
  it("is 100 when every change is a gain", () => {
    const out = rsi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 14);
    expect(out[14]).toBe(100);
  });
  it("stays within [0,100] and is null during warm-up", () => {
    const vals = [44, 44.3, 44.1, 44.6, 43.9, 44.5, 45, 44.8, 45.2, 45.6, 45.4, 46, 46.2, 45.8, 46.5, 46.1];
    const out = rsi(vals, 14);
    expect(out[13]).toBeNull();
    for (let i = 14; i < out.length; i++) {
      expect(out[i]).toBeGreaterThanOrEqual(0);
      expect(out[i]).toBeLessThanOrEqual(100);
    }
  });
});

describe("macd", () => {
  it("macd line = EMA(fast) − EMA(slow); histogram = macd − signal; aligned lengths", () => {
    const vals = Array.from({ length: 60 }, (_, i) => 100 + Math.sin(i / 5) * 5);
    const m = macd(vals);
    expect(m.macd).toHaveLength(60);
    expect(m.signal).toHaveLength(60);
    expect(m.histogram).toHaveLength(60);
    const i = 59;
    expect(m.histogram[i]).toBeCloseTo((m.macd[i] as number) - (m.signal[i] as number), 9);
  });
});

describe("bollinger", () => {
  it("middle is the SMA and bands are symmetric around it", () => {
    const vals = Array.from({ length: 30 }, (_, i) => 100 + (i % 5));
    const b = bollinger(vals, 20, 2);
    const i = 29;
    expect(b.middle[i]).toBeCloseTo(sma(vals, 20)[i] as number, 9);
    const spread = (b.upper[i] as number) - (b.middle[i] as number);
    expect(b.upper[i]! - b.middle[i]!).toBeCloseTo(b.middle[i]! - b.lower[i]!, 9); // symmetric
    expect(spread).toBeGreaterThan(0);
  });
  it("bands collapse to the mean for a flat series", () => {
    const b = bollinger(new Array(25).fill(50), 20, 2);
    expect(b.upper[24]).toBeCloseTo(50, 9);
    expect(b.lower[24]).toBeCloseTo(50, 9);
  });
});

describe("vwap", () => {
  it("is the volume-weighted average of the typical price", () => {
    const c = [
      { high: 11, low: 9, close: 10, volume: 100 }, // typical 10
      { high: 13, low: 11, close: 12, volume: 300 }, // typical 12
    ];
    const out = vwap(c);
    expect(out[0]).toBeCloseTo(10, 9);
    // (10·100 + 12·300) / 400 = 11.5
    expect(out[1]).toBeCloseTo(11.5, 9);
  });
});
