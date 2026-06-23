import { describe, it, expect } from "vitest";
import { statFor, lookbackFor } from "@/lib/home/spans";
import type { Candle } from "@/lib/marketService";

const bar = (close: number, high = close, low = close): Candle => ({
  time: "2026-01-01T00:00:00Z",
  open: close,
  high,
  low,
  close,
  volume: 0,
});

describe("lookbackFor", () => {
  it("maps span ids to trading-day lookbacks", () => {
    expect(lookbackFor("1D")).toBe(1);
    expect(lookbackFor("1W")).toBe(5);
    expect(lookbackFor("1Y")).toBe(252);
  });
});

describe("statFor", () => {
  it("returns null without enough history", () => {
    expect(statFor([], 100, 1)).toBeNull();
    expect(statFor([bar(100)], 100, 1)).toBeNull();
  });

  it("computes 1D change vs the prior close", () => {
    const candles = [bar(100), bar(110, 112, 108)];
    const s = statFor(candles, 110, 1)!;
    expect(s.change).toBeCloseTo(10);
    expect(s.pct).toBeCloseTo(10);
    expect(s.high).toBe(112);
    expect(s.low).toBe(108);
  });

  it("measures change vs the close `lookback` days back and spans the window", () => {
    const candles = [bar(100, 101, 99), bar(105, 107, 95), bar(108, 120, 90)];
    const s = statFor(candles, 108, 2)!; // ref = first bar (close 100)
    expect(s.change).toBeCloseTo(8);
    expect(s.high).toBe(120);
    expect(s.low).toBe(90);
  });

  it("clamps high/low to the live price", () => {
    const candles = [bar(100), bar(105, 106, 104)];
    const s = statFor(candles, 130, 1)!;
    expect(s.high).toBe(130);
    expect(s.low).toBe(104);
  });
});
