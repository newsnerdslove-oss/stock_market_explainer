import { describe, it, expect } from "vitest";
import { evaluateOrder, fillPrice, limitCrosses, unrealizedPnL } from "@/lib/trading/ledger";
import { emptyPortfolio, type Portfolio } from "@/lib/trading/schema";
import type { Quote } from "@/lib/marketService";

const quote = (bid: number, ask: number, price = (bid + ask) / 2): Quote => ({
  symbol: "X",
  price,
  bid,
  ask,
  timestamp: "t",
  source: "test",
});

describe("fill pricing", () => {
  it("buys at the ask, sells at the bid", () => {
    expect(fillPrice("buy", quote(99, 101))).toBe(101);
    expect(fillPrice("sell", quote(99, 101))).toBe(99);
  });
  it("falls back to last price when a side is missing", () => {
    expect(fillPrice("buy", quote(0, 0, 100))).toBe(100);
  });
  it("crosses a limit at the right side", () => {
    expect(limitCrosses("buy", 101, quote(99, 101))).toBe(true);
    expect(limitCrosses("buy", 100, quote(99, 101))).toBe(false);
    expect(limitCrosses("sell", 99, quote(99, 101))).toBe(true);
  });
});

describe("evaluateOrder — market buy/sell", () => {
  it("fills a fractional buy at the ask and sets average cost", () => {
    const { portfolio, result } = evaluateOrder(emptyPortfolio(), { symbol: "BTC-USD", side: "buy", type: "market", qty: 0.1, limitPrice: null }, quote(63999, 64000));
    expect(result.status).toBe("filled");
    expect(result.filledPrice).toBe(64000);
    expect(portfolio.cash).toBeCloseTo(100000 - 6400, 6);
    expect(portfolio.positions["BTC-USD"]).toMatchObject({ qty: 0.1, avgCost: 64000 });
  });

  it("averages cost across two fractional buys", () => {
    let pf = evaluateOrder(emptyPortfolio(), { symbol: "ETH-USD", side: "buy", type: "market", qty: 0.5, limitPrice: null }, quote(1999, 2000)).portfolio;
    pf = evaluateOrder(pf, { symbol: "ETH-USD", side: "buy", type: "market", qty: 0.5, limitPrice: null }, quote(2999, 3000)).portfolio;
    const pos = pf.positions["ETH-USD"];
    expect(pos.qty).toBeCloseTo(1, 6);
    expect(pos.avgCost).toBeCloseTo(2500, 6); // (0.5*2000 + 0.5*3000)/1
  });

  it("realizes P&L on a partial fractional sell and keeps the remainder", () => {
    const bought = evaluateOrder(emptyPortfolio(), { symbol: "BTC-USD", side: "buy", type: "market", qty: 0.2, limitPrice: null }, quote(49999, 50000)).portfolio;
    const { portfolio, result } = evaluateOrder(bought, { symbol: "BTC-USD", side: "sell", type: "market", qty: 0.1, limitPrice: null }, quote(60000, 60001));
    expect(result.status).toBe("filled");
    expect(result.filledPrice).toBe(60000); // sells at the bid
    expect(portfolio.realized).toBeCloseTo((60000 - 50000) * 0.1, 4);
    expect(portfolio.positions["BTC-USD"].qty).toBeCloseTo(0.1, 6);
  });

  it("deletes the position when sold to (near) zero", () => {
    const bought = evaluateOrder(emptyPortfolio(), { symbol: "BTC-USD", side: "buy", type: "market", qty: 0.1, limitPrice: null }, quote(49999, 50000)).portfolio;
    const sold = evaluateOrder(bought, { symbol: "BTC-USD", side: "sell", type: "market", qty: 0.1, limitPrice: null }, quote(50000, 50001)).portfolio;
    expect(sold.positions["BTC-USD"]).toBeUndefined();
  });

  it("rejects a buy that exceeds cash and a sell beyond holdings", () => {
    const tooBig = evaluateOrder(emptyPortfolio(), { symbol: "BTC-USD", side: "buy", type: "market", qty: 2, limitPrice: null }, quote(63999, 64000));
    expect(tooBig.result.status).toBe("rejected");
    const noShares = evaluateOrder(emptyPortfolio(), { symbol: "BTC-USD", side: "sell", type: "market", qty: 0.1, limitPrice: null }, quote(63999, 64000));
    expect(noShares.result.status).toBe("rejected");
  });

  it("rejects non-positive or non-finite quantity", () => {
    expect(evaluateOrder(emptyPortfolio(), { symbol: "X", side: "buy", type: "market", qty: 0, limitPrice: null }, quote(1, 1)).result.status).toBe("rejected");
    expect(evaluateOrder(emptyPortfolio(), { symbol: "X", side: "buy", type: "market", qty: NaN, limitPrice: null }, quote(1, 1)).result.status).toBe("rejected");
  });
});

describe("evaluateOrder — limit orders", () => {
  it("leaves a non-crossing limit pending and unchanged", () => {
    const pf: Portfolio = emptyPortfolio();
    const { portfolio, result } = evaluateOrder(pf, { symbol: "X", side: "buy", type: "limit", qty: 1, limitPrice: 90 }, quote(99, 101));
    expect(result.status).toBe("pending");
    expect(portfolio).toBe(pf);
  });
  it("fills a crossing limit at the limit price", () => {
    const { result } = evaluateOrder(emptyPortfolio(), { symbol: "X", side: "buy", type: "limit", qty: 1, limitPrice: 101 }, quote(99, 101));
    expect(result.status).toBe("filled");
    expect(result.filledPrice).toBe(101);
  });
});

describe("unrealizedPnL", () => {
  it("is (price - avgCost) * qty", () => {
    expect(unrealizedPnL(100, 110, 0.5)).toBeCloseTo(5, 6);
  });
});
