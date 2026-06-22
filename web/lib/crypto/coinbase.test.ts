import { describe, it, expect } from "vitest";
import { mapTicker, mapCandles, mapCoinbaseSnapshot } from "@/lib/crypto/coinbase";

describe("Coinbase mappers", () => {
  it("maps a ticker's string fields to numbers", () => {
    const q = mapTicker("BTC-USD", { price: "64370.81", bid: "64370.80", ask: "64370.82", time: "2026-06-17T20:59:07Z" });
    expect(q).toEqual({
      symbol: "BTC-USD",
      price: 64370.81,
      bid: 64370.8,
      ask: 64370.82,
      timestamp: "2026-06-17T20:59:07Z",
      source: "coinbase",
    });
  });

  it("maps candles to ISO time, ascending, capped at limit", () => {
    // Coinbase rows: [time_sec, low, high, open, close, volume], newest-first.
    const rows = [
      [1781729760, 1740.91, 1741.68, 1741.19, 1741.11, 27.3],
      [1781729700, 1739.4, 1741.2, 1739.4, 1740.98, 31.0],
      [1781729640, 1738.81, 1740.1, 1738.81, 1739.18, 16.5],
    ];
    const { candles, source, symbol } = mapCandles("ETH-USD", rows, 2);
    expect(source).toBe("coinbase");
    expect(symbol).toBe("ETH-USD");
    // ascending by time, only the most recent 2 kept
    expect(candles).toHaveLength(2);
    expect(candles[0].time < candles[1].time).toBe(true);
    expect(candles[1].time).toBe(new Date(1781729760 * 1000).toISOString());
    expect(candles[1]).toMatchObject({ open: 1741.19, high: 1741.68, low: 1740.91, close: 1741.11, volume: 27.3 });
  });
});

describe("mapCoinbaseSnapshot", () => {
  // rows: [time(unix s), low, high, open, close, vol], newest-first from Coinbase
  it("derives prior close (2nd-to-last) and hi/lo from daily candles", () => {
    const rows = [
      [300, 64000, 67000, 64500, 66000, 10], // newest (today)
      [200, 60000, 66500, 61000, 65000, 12], // prior close = 65000
      [100, 58000, 70000, 59000, 62000, 9], // window high 70000, low 58000
    ];
    const s = mapCoinbaseSnapshot("BTC-USD", rows);
    expect(s.prevClose).toBe(65000);
    expect(s.high52).toBe(70000);
    expect(s.low52).toBe(58000);
    expect(s.source).toBe("coinbase");
  });
});
