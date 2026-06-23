import { describe, it, expect } from "vitest";
import { heikinAshi } from "@/lib/charts/heikinAshi";
import type { Candle } from "@/lib/marketService";

const c = (open: number, high: number, low: number, close: number): Candle => ({
  time: "2026-01-01T00:00:00Z",
  open,
  high,
  low,
  close,
  volume: 0,
});

describe("heikinAshi", () => {
  it("returns one HA bar per input bar", () => {
    expect(heikinAshi([c(10, 12, 9, 11), c(11, 13, 10, 12)])).toHaveLength(2);
  });

  it("first bar seeds open from (open+close)/2 and close from the OHLC average", () => {
    const [ha] = heikinAshi([c(10, 12, 8, 11)]);
    expect(ha.open).toBeCloseTo(10.5); // (10 + 11) / 2
    expect(ha.close).toBeCloseTo(10.25); // (10 + 12 + 8 + 11) / 4
  });

  it("subsequent open is the average of the previous HA open/close", () => {
    const ha = heikinAshi([c(10, 12, 8, 11), c(11, 14, 10, 13)]);
    expect(ha[1].open).toBeCloseTo((ha[0].open + ha[0].close) / 2);
  });

  it("high/low envelope the HA open/close and raw high/low", () => {
    const ha = heikinAshi([c(10, 12, 8, 11), c(11, 14, 10, 13)]);
    for (let i = 0; i < ha.length; i++) {
      expect(ha[i].high).toBeGreaterThanOrEqual(Math.max(ha[i].open, ha[i].close));
      expect(ha[i].low).toBeLessThanOrEqual(Math.min(ha[i].open, ha[i].close));
    }
  });

  it("handles an empty series", () => {
    expect(heikinAshi([])).toEqual([]);
  });
});
