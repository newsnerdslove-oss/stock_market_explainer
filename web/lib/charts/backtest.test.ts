import { describe, it, expect } from "vitest";
import { backtest } from "@/lib/charts/backtest";
import { detectSignals, patternSide } from "@/lib/charts/detect";
import { generateMarket, generatePattern } from "@/lib/charts/generate";
import type { OHLC } from "@/lib/charts/patterns";

const bar = (o: number, h: number, l: number, c: number): OHLC => ({ open: o, high: h, low: l, close: c });

describe("backtest", () => {
  // A signal at index 1; the long enters at index 2's open (100).
  const base: OHLC[] = [bar(100, 101, 99, 100), bar(100, 101, 99, 100), bar(100, 100, 100, 100)];

  it("takes profit when a later bar's high reaches the target", () => {
    const candles = [...base, bar(100, 106, 100, 105)]; // +5% high vs entry 100, TP 3%
    const r = backtest(candles, [1], "long", { tpPct: 3, slPct: 2, maxHold: 5 });
    expect(r.trades).toHaveLength(1);
    expect(r.trades[0].outcome).toBe("tp");
    expect(r.trades[0].pnlPct).toBeCloseTo(3, 5);
  });

  it("stops out when a later bar's low hits the stop", () => {
    const candles = [...base, bar(100, 100, 96, 97)]; // -4% low, SL 2%
    const r = backtest(candles, [1], "long", { tpPct: 3, slPct: 2, maxHold: 5 });
    expect(r.trades[0].outcome).toBe("sl");
    expect(r.trades[0].pnlPct).toBeCloseTo(-2, 5);
  });

  it("assumes the stop fills first when one bar touches both", () => {
    const candles = [...base, bar(100, 106, 96, 100)]; // hits both TP and SL
    const r = backtest(candles, [1], "long", { tpPct: 3, slPct: 2, maxHold: 5 });
    expect(r.trades[0].outcome).toBe("sl");
  });

  it("times out at the max-hold close", () => {
    const candles = [...base, bar(100, 100.5, 99.5, 100.4), bar(100.4, 100.6, 99.5, 100.2)];
    const r = backtest(candles, [1], "long", { tpPct: 3, slPct: 2, maxHold: 1 });
    expect(r.trades[0].outcome).toBe("timeout");
  });

  it("computes win rate, expectancy and a compounding equity curve", () => {
    const candles = [...base, bar(100, 106, 100, 105), bar(105, 105, 100, 102)];
    const win = backtest(candles, [1], "long", { tpPct: 3, slPct: 2, maxHold: 5 });
    expect(win.stats.winRate).toBe(1);
    expect(win.stats.expectancyPct).toBeCloseTo(3, 5);
    expect(win.equity[0]).toBe(100);
    expect(win.equity[1]).toBeCloseTo(103, 5);
  });

  it("does not enter when the signal is the last bar (no look-ahead)", () => {
    const r = backtest(base, [base.length - 1], "long", { tpPct: 3, slPct: 2, maxHold: 5 });
    expect(r.trades).toHaveLength(0);
  });
});

describe("detectSignals", () => {
  it("finds a planted bullish engulfing and reports a long side", () => {
    const g = generatePattern("bullish-engulfing", 42);
    const idx = detectSignals(g.candles, "bullish-engulfing");
    expect(idx).toContain(g.signalIndex);
    expect(patternSide("bullish-engulfing")).toBe("long");
    expect(patternSide("shooting-star")).toBe("short");
  });

  it("finds occurrences in a generated market and they are valid indices", () => {
    const candles = generateMarket(7, 200);
    const idx = detectSignals(candles, "hammer");
    for (const i of idx) {
      expect(i).toBeGreaterThan(0);
      expect(i).toBeLessThan(candles.length);
    }
  });

  it("returns nothing for the non-directional doji", () => {
    expect(detectSignals(generateMarket(3, 80), "doji")).toEqual([]);
  });
});
