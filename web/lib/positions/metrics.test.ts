import { describe, it, expect } from "vitest";
import {
  replayPosition,
  positionMetrics,
  avgCostTrajectory,
  realizedCloses,
  tradesFromOrders,
  type Trade,
} from "@/lib/positions/metrics";
import type { Order } from "@/lib/trading/schema";

const buy = (qty: number, price: number, at: string): Trade => ({ symbol: "AAPL", side: "buy", qty, price, at });
const sell = (qty: number, price: number, at: string): Trade => ({ symbol: "AAPL", side: "sell", qty, price, at });

describe("replayPosition", () => {
  it("averages cost across two buys", () => {
    const r = replayPosition([buy(10, 100, "2026-01-01"), buy(10, 120, "2026-01-02")]);
    expect(r.qty).toBe(20);
    expect(r.avgCost).toBeCloseTo(110, 9);
    expect(r.realized).toBe(0);
    expect(r.openedAt).toBe("2026-01-01");
  });

  it("realizes P&L on a partial sell and keeps avg cost", () => {
    const r = replayPosition([buy(10, 100, "2026-01-01"), sell(4, 130, "2026-01-03")]);
    expect(r.qty).toBe(6);
    expect(r.avgCost).toBeCloseTo(100, 9); // avg unchanged by a sell
    expect(r.realized).toBeCloseTo((130 - 100) * 4, 9); // +120
  });

  it("resets avg cost and openedAt when sold to zero, and re-opens on a later buy", () => {
    const r = replayPosition([buy(10, 100, "2026-01-01"), sell(10, 150, "2026-02-01"), buy(5, 200, "2026-03-01")]);
    expect(r.realized).toBeCloseTo((150 - 100) * 10, 9); // +500 from the round trip
    expect(r.qty).toBe(5);
    expect(r.avgCost).toBeCloseTo(200, 9); // fresh basis
    expect(r.openedAt).toBe("2026-03-01"); // the new run
  });

  it("guards against overselling more than held", () => {
    const r = replayPosition([buy(5, 100, "2026-01-01"), sell(10, 120, "2026-01-02")]);
    expect(r.qty).toBe(0);
    expect(r.realized).toBeCloseTo((120 - 100) * 5, 9); // only 5 sold
    expect(r.openedAt).toBeNull();
  });

  it("sorts out-of-order fills by timestamp", () => {
    const r = replayPosition([buy(10, 120, "2026-01-02"), buy(10, 100, "2026-01-01")]);
    expect(r.avgCost).toBeCloseTo(110, 9);
    expect(r.openedAt).toBe("2026-01-01");
  });
});

describe("positionMetrics", () => {
  const trades = [buy(10, 100, "2026-01-01"), buy(10, 120, "2026-01-02")]; // 20 @ avg 110
  const now = new Date("2026-01-12T00:00:00Z");

  it("computes cost basis, market value, and total gain/loss", () => {
    const m = positionMetrics("AAPL", trades, { mark: 130, now });
    expect(m.qty).toBe(20);
    expect(m.avgCost).toBeCloseTo(110, 9);
    expect(m.costBasisTotal).toBeCloseTo(2200, 6);
    expect(m.marketValue).toBeCloseTo(2600, 6);
    expect(m.totalGainLoss).toBeCloseTo(400, 6);
    expect(m.totalGainLossPct).toBeCloseTo(400 / 2200, 9);
    expect(m.holdingDays).toBe(11); // 2026-01-01 → 2026-01-12
  });

  it("adds today's gain/loss from the prior close", () => {
    const m = positionMetrics("AAPL", trades, { mark: 130, priorClose: 125 });
    expect(m.todayGainLoss).toBeCloseTo((130 - 125) * 20, 6); // +100
    expect(m.todayGainLossPct).toBeCloseTo((130 - 125) / 125, 9);
  });

  it("adds % of account from account equity", () => {
    const m = positionMetrics("AAPL", trades, { mark: 130, accountEquity: 10_000 });
    expect(m.allocationPct).toBeCloseTo(2600 / 10_000, 9);
  });

  it("includes realized P&L from prior closes and omits optional fields when inputs are absent", () => {
    const m = positionMetrics("AAPL", [buy(10, 100, "2026-01-01"), sell(5, 140, "2026-01-05")], { mark: 150 });
    expect(m.realizedPnl).toBeCloseTo((140 - 100) * 5, 6); // +200
    expect(m.todayGainLoss).toBeUndefined();
    expect(m.allocationPct).toBeUndefined();
    expect(m.holdingDays).toBeUndefined();
  });
});

describe("drill-down series", () => {
  const trades = [buy(10, 100, "2026-01-01"), buy(10, 120, "2026-01-02"), sell(5, 130, "2026-01-05")];

  it("avgCostTrajectory tracks avg cost + size after each fill", () => {
    const t = avgCostTrajectory(trades);
    expect(t).toHaveLength(3);
    expect(t[0]).toMatchObject({ at: "2026-01-01", qty: 10 });
    expect(t[0].avgCost).toBeCloseTo(100, 9);
    expect(t[1].avgCost).toBeCloseTo(110, 9);
    expect(t[2]).toMatchObject({ at: "2026-01-05", qty: 15 });
    expect(t[2].avgCost).toBeCloseTo(110, 9); // sell doesn't move avg
  });

  it("realizedCloses lists each sell's realized P&L", () => {
    const c = realizedCloses(trades);
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ at: "2026-01-05", price: 130 });
    expect(c[0].realized).toBeCloseTo((130 - 110) * 5, 9); // +100
  });
});

describe("tradesFromOrders", () => {
  const order = (over: Partial<Order>): Order => ({
    id: "x", symbol: "AAPL", side: "buy", type: "market", qty: 1, limitPrice: null, status: "filled", filledPrice: 100, createdAt: "2026-01-01", ...over,
  });

  it("groups filled stock orders by symbol and maps to trades", () => {
    const by = tradesFromOrders([order({ symbol: "AAPL", qty: 10, filledPrice: 100 }), order({ symbol: "MSFT", qty: 5, filledPrice: 400 })]);
    expect(Object.keys(by).sort()).toEqual(["AAPL", "MSFT"]);
    expect(by.AAPL[0]).toMatchObject({ symbol: "AAPL", side: "buy", qty: 10, price: 100, at: "2026-01-01" });
  });

  it("skips unfilled orders and option-contract labels", () => {
    const by = tradesFromOrders([
      order({ symbol: "AAPL", status: "pending", filledPrice: null }),
      order({ symbol: "AAPL 300C 2026-07-17", filledPrice: 5 }), // option label (has a space)
      order({ symbol: "AAPL", filledPrice: 100 }),
    ]);
    expect(Object.keys(by)).toEqual(["AAPL"]);
    expect(by.AAPL).toHaveLength(1);
  });
});
