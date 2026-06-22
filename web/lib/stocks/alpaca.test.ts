import { describe, it, expect, afterEach } from "vitest";
import { mapAlpacaQuote, mapAlpacaBars, mapAlpacaSnapshot, alpacaTimeframe, alpacaConfigured } from "@/lib/stocks/alpaca";

describe("alpacaConfigured", () => {
  const k = process.env.ALPACA_API_KEY_ID;
  const s = process.env.ALPACA_API_SECRET_KEY;
  afterEach(() => {
    if (k === undefined) delete process.env.ALPACA_API_KEY_ID;
    else process.env.ALPACA_API_KEY_ID = k;
    if (s === undefined) delete process.env.ALPACA_API_SECRET_KEY;
    else process.env.ALPACA_API_SECRET_KEY = s;
  });

  it("is true only when both keys are present", () => {
    process.env.ALPACA_API_KEY_ID = "x";
    process.env.ALPACA_API_SECRET_KEY = "y";
    expect(alpacaConfigured()).toBe(true);
    delete process.env.ALPACA_API_SECRET_KEY;
    expect(alpacaConfigured()).toBe(false);
  });
});

describe("mapAlpacaQuote", () => {
  it("uses last trade for price and the real (tight) bid/ask", () => {
    const q = mapAlpacaQuote("AAPL", { p: 300.0, t: "2026-06-17T14:00:00Z" }, { bp: 299.98, ap: 300.02 });
    expect(q).toEqual({ symbol: "AAPL", price: 300, bid: 299.98, ask: 300.02, timestamp: "2026-06-17T14:00:00Z", source: "alpaca-iex" });
  });

  it("collapses an implausibly wide (off-hours IEX) spread to the last trade", () => {
    const q = mapAlpacaQuote("AAPL", { p: 296, t: "t" }, { bp: 279.62, ap: 309.91 }); // ~10% spread
    expect(q.bid).toBe(296);
    expect(q.ask).toBe(296);
  });

  it("falls back to last trade when bid/ask are missing", () => {
    const q = mapAlpacaQuote("AAPL", { p: 296, t: "t" }, null);
    expect(q.bid).toBe(296);
    expect(q.ask).toBe(296);
  });
});

describe("mapAlpacaBars", () => {
  it("maps OHLCV, keeps ascending order, caps at limit", () => {
    const bars = [
      { o: 300.8, h: 301.95, l: 300.75, c: 300.8, v: 18913, t: "2026-06-17T13:30:00Z" },
      { o: 300.8, h: 300.85, l: 299.56, c: 299.93, v: 11486, t: "2026-06-17T13:31:00Z" },
      { o: 299.94, h: 301.61, l: 299.94, c: 301.21, v: 10313, t: "2026-06-17T13:32:00Z" },
    ];
    const { candles, source } = mapAlpacaBars("AAPL", bars, 2);
    expect(source).toBe("alpaca-iex");
    expect(candles).toHaveLength(2);
    expect(candles[0].time < candles[1].time).toBe(true);
    expect(candles[1]).toMatchObject({ time: "2026-06-17T13:32:00Z", open: 299.94, high: 301.61, low: 299.94, close: 301.21, volume: 10313 });
  });
});

describe("mapAlpacaSnapshot", () => {
  const bar = (t: string, o: number, h: number, l: number, c: number) => ({ o, h, l, c, v: 1000, t });

  it("takes prior close as the 2nd-to-last daily bar and 52wk hi/lo from the window", () => {
    const bars = [
      bar("2026-01-01", 100, 110, 95, 105),
      bar("2026-02-01", 105, 150, 90, 140), // window high 150, low 90
      bar("2026-03-01", 140, 145, 130, 142), // prior close = 142
      bar("2026-03-02", 142, 148, 141, 147), // today (in progress)
    ];
    const s = mapAlpacaSnapshot("AAPL", bars);
    expect(s.prevClose).toBe(142);
    expect(s.high52).toBe(150);
    expect(s.low52).toBe(90);
    expect(s.source).toBe("alpaca-iex");
  });

  it("sorts out-of-order bars and degrades to a single bar", () => {
    const out = mapAlpacaSnapshot("AAPL", [bar("2026-02-01", 1, 2, 1, 2), bar("2026-01-01", 1, 9, 1, 5)]);
    expect(out.prevClose).toBe(5); // 2026-01-01 is the earlier (2nd-to-last after sort)
    const one = mapAlpacaSnapshot("AAPL", [bar("2026-01-01", 1, 9, 1, 5)]);
    expect(one.prevClose).toBe(5);
  });
});

describe("alpacaTimeframe", () => {
  it("maps chart timeframes to Alpaca bar strings", () => {
    expect(alpacaTimeframe("1m")).toBe("1Min");
    expect(alpacaTimeframe("5m")).toBe("5Min");
    expect(alpacaTimeframe("15m")).toBe("15Min");
    expect(alpacaTimeframe("1h")).toBe("1Hour");
    expect(alpacaTimeframe("1d")).toBe("1Day");
  });
});
