import { describe, it, expect } from "vitest";
import type { Order, Portfolio } from "@/lib/trading/schema";
import { emptyPortfolio } from "@/lib/trading/schema";
import { CHALLENGES, dailyChallenge } from "@/lib/challenge/daily";

const TODAY = "2026-06-17";

function order(over: Partial<Order>): Order {
  return {
    id: "o1",
    symbol: "AAPL",
    side: "buy",
    type: "market",
    qty: 1,
    limitPrice: null,
    status: "filled",
    filledPrice: 100,
    createdAt: `${TODAY}T12:00:00.000Z`,
    ...over,
  };
}

function portfolio(orders: Order[] = [], positions: Portfolio["positions"] = {}): Portfolio {
  return { ...emptyPortfolio(), orders, positions };
}

const byId = Object.fromEntries(CHALLENGES.map((c) => [c.id, c]));

describe("dailyChallenge selection", () => {
  it("is stable for a given day", () => {
    expect(dailyChallenge(TODAY).id).toBe(dailyChallenge(TODAY).id);
  });

  it("varies across days", () => {
    const ids = new Set<string>();
    for (let d = 1; d <= 28; d++) ids.add(dailyChallenge(`2026-06-${String(d).padStart(2, "0")}`).id);
    expect(ids.size).toBeGreaterThan(1);
  });

  it("always returns a real challenge", () => {
    expect(CHALLENGES).toContain(dailyChallenge("2026-01-01"));
  });
});

describe("challenge isDone predicates", () => {
  it("place-order: any order today", () => {
    expect(byId["place-order"].isDone(portfolio([]), TODAY)).toBe(false);
    expect(byId["place-order"].isDone(portfolio([order({})]), TODAY)).toBe(true);
  });

  it("ignores orders from a different day", () => {
    const yesterday = order({ createdAt: "2026-06-16T12:00:00.000Z" });
    expect(byId["place-order"].isDone(portfolio([yesterday]), TODAY)).toBe(false);
  });

  it("limit-order: requires a limit order", () => {
    expect(byId["limit-order"].isDone(portfolio([order({ type: "market" })]), TODAY)).toBe(false);
    expect(byId["limit-order"].isDone(portfolio([order({ type: "limit", limitPrice: 90 })]), TODAY)).toBe(true);
  });

  it("buy-5: a filled buy of 5+ shares", () => {
    expect(byId["buy-5"].isDone(portfolio([order({ qty: 4 })]), TODAY)).toBe(false);
    expect(byId["buy-5"].isDone(portfolio([order({ qty: 5 })]), TODAY)).toBe(true);
    expect(byId["buy-5"].isDone(portfolio([order({ qty: 9, status: "pending" })]), TODAY)).toBe(false);
  });

  it("two-symbols: two distinct symbols today", () => {
    expect(byId["two-symbols"].isDone(portfolio([order({ symbol: "AAPL" }), order({ symbol: "AAPL" })]), TODAY)).toBe(false);
    expect(byId["two-symbols"].isDone(portfolio([order({ symbol: "AAPL" }), order({ symbol: "MSFT" })]), TODAY)).toBe(true);
  });

  it("hold-position: an open position (not day-scoped)", () => {
    expect(byId["hold-position"].isDone(portfolio([]), TODAY)).toBe(false);
    expect(byId["hold-position"].isDone(portfolio([], { AAPL: { symbol: "AAPL", qty: 10, avgCost: 100 } }), TODAY)).toBe(true);
  });
});
