import { describe, it, expect } from "vitest";
import {
  CONTRACT_MULTIPLIER,
  contractKey,
  premiumCash,
  intrinsicPerShare,
  legUnrealized,
  evaluateOptionOrder,
  settleExpirations,
  type OptionsBook,
  type OptionOrder,
} from "@/lib/options/ledger";

const book = (over: Partial<OptionsBook> = {}): OptionsBook => ({ cash: 100_000, realized: 0, legs: {}, ...over });

const order = (over: Partial<OptionOrder> = {}): OptionOrder => ({
  underlying: "AAPL",
  type: "call",
  strike: 300,
  expiry: "2026-07-17",
  action: "buy_to_open",
  contracts: 1,
  ...over,
});

describe("helpers", () => {
  it("premiumCash applies the 100x multiplier", () => {
    expect(premiumCash(2.5, 3)).toBe(750);
    expect(CONTRACT_MULTIPLIER).toBe(100);
  });
  it("contractKey is stable and distinguishes contracts", () => {
    expect(contractKey({ underlying: "AAPL", type: "call", strike: 300, expiry: "2026-07-17" })).toBe("AAPL|call|300|2026-07-17");
    expect(contractKey({ underlying: "AAPL", type: "put", strike: 300, expiry: "2026-07-17" })).not.toBe(
      contractKey({ underlying: "AAPL", type: "call", strike: 300, expiry: "2026-07-17" }),
    );
  });
  it("intrinsicPerShare is correct for calls and puts", () => {
    expect(intrinsicPerShare("call", 300, 320)).toBe(20);
    expect(intrinsicPerShare("call", 300, 290)).toBe(0);
    expect(intrinsicPerShare("put", 300, 280)).toBe(20);
    expect(intrinsicPerShare("put", 300, 310)).toBe(0);
  });
  it("legUnrealized marks long contracts by the 100x multiplier", () => {
    const leg = { underlying: "AAPL", type: "call" as const, strike: 300, expiry: "2026-07-17", qty: 2, avgPrice: 5 };
    expect(legUnrealized(leg, 7)).toBe((7 - 5) * 100 * 2); // +400
    expect(legUnrealized(leg, 4)).toBe((4 - 5) * 100 * 2); // −200
  });
});

describe("buy_to_open", () => {
  it("debits the premium and records the leg at the fill price", () => {
    const { book: b, result } = evaluateOptionOrder(book(), order({ contracts: 2 }), 5);
    expect(result.status).toBe("filled");
    expect(result.cashFlow).toBe(-1000); // 5 × 100 × 2
    expect(b.cash).toBe(99_000);
    expect(b.legs["AAPL|call|300|2026-07-17"]).toMatchObject({ qty: 2, avgPrice: 5 });
  });
  it("averages premium across two opens of the same contract", () => {
    let b = evaluateOptionOrder(book(), order({ contracts: 1 }), 4).book;
    b = evaluateOptionOrder(b, order({ contracts: 1 }), 6).book;
    const leg = b.legs["AAPL|call|300|2026-07-17"];
    expect(leg.qty).toBe(2);
    expect(leg.avgPrice).toBeCloseTo(5, 9); // (4 + 6) / 2
  });
  it("rejects when the premium exceeds cash", () => {
    const { result } = evaluateOptionOrder(book({ cash: 400 }), order({ contracts: 1 }), 5); // needs 500
    expect(result.status).toBe("rejected");
  });
  it("rejects non-whole or non-positive contract counts", () => {
    expect(evaluateOptionOrder(book(), order({ contracts: 0 }), 5).result.status).toBe("rejected");
    expect(evaluateOptionOrder(book(), order({ contracts: 1.5 }), 5).result.status).toBe("rejected");
    expect(evaluateOptionOrder(book(), order({ contracts: -1 }), 5).result.status).toBe("rejected");
  });
});

describe("sell_to_close", () => {
  it("credits proceeds, realizes P&L, and reduces the position", () => {
    const opened = evaluateOptionOrder(book(), order({ contracts: 3 }), 5).book;
    const { book: b, result } = evaluateOptionOrder(opened, order({ action: "sell_to_close", contracts: 2 }), 8);
    expect(result.status).toBe("filled");
    expect(result.cashFlow).toBe(1600); // 8 × 100 × 2
    expect(result.realizedDelta).toBe((8 - 5) * 100 * 2); // +600
    expect(b.realized).toBe(600);
    expect(b.legs["AAPL|call|300|2026-07-17"].qty).toBe(1);
    // cash: 100000 − (5×100×3) + (8×100×2) = 100000 − 1500 + 1600
    expect(b.cash).toBe(100_100);
  });
  it("deletes the leg when fully closed", () => {
    const opened = evaluateOptionOrder(book(), order({ contracts: 1 }), 5).book;
    const { book: b } = evaluateOptionOrder(opened, order({ action: "sell_to_close", contracts: 1 }), 6);
    expect(b.legs["AAPL|call|300|2026-07-17"]).toBeUndefined();
  });
  it("rejects closing more than is held", () => {
    const opened = evaluateOptionOrder(book(), order({ contracts: 1 }), 5).book;
    const { result } = evaluateOptionOrder(opened, order({ action: "sell_to_close", contracts: 2 }), 6);
    expect(result.status).toBe("rejected");
  });
  it("books a loss when closed below cost", () => {
    const opened = evaluateOptionOrder(book(), order({ contracts: 1 }), 5).book;
    const { book: b } = evaluateOptionOrder(opened, order({ action: "sell_to_close", contracts: 1 }), 2);
    expect(b.realized).toBe((2 - 5) * 100 * 1); // −300
  });
});

describe("settleExpirations (cash-settled to intrinsic)", () => {
  const longCall = () => evaluateOptionOrder(book(), order({ contracts: 2 }), 5).book; // avg 5, expiry 2026-07-17

  it("ITM long call pays intrinsic and realizes vs premium", () => {
    const b = longCall();
    const { book: after, settled } = settleExpirations(b, "2026-07-17", { AAPL: 320 });
    expect(settled).toHaveLength(1);
    expect(settled[0].intrinsicPerShare).toBe(20);
    // cash settlement = 20 × 100 × 2 = 4000; realized = (20 − 5) × 100 × 2 = 3000
    expect(after.cash).toBe(b.cash + 4000);
    expect(after.realized).toBe(3000);
    expect(after.legs["AAPL|call|300|2026-07-17"]).toBeUndefined();
  });

  it("OTM long expires worthless — the whole premium is the realized loss", () => {
    const b = longCall();
    const { book: after, settled } = settleExpirations(b, "2026-07-17", { AAPL: 290 });
    expect(settled[0].intrinsicPerShare).toBe(0);
    expect(after.cash).toBe(b.cash); // nothing received
    expect(after.realized).toBe((0 - 5) * 100 * 2); // −1000
    expect(after.legs["AAPL|call|300|2026-07-17"]).toBeUndefined();
  });

  it("does not touch legs that haven't expired yet", () => {
    const b = longCall();
    const { book: after, settled } = settleExpirations(b, "2026-07-16", { AAPL: 320 });
    expect(settled).toHaveLength(0);
    expect(after).toBe(b);
    expect(after.legs["AAPL|call|300|2026-07-17"]).toBeDefined();
  });

  it("leaves a leg untouched when its underlying price is missing", () => {
    const b = longCall();
    const { settled } = settleExpirations(b, "2026-07-17", {}); // no AAPL price
    expect(settled).toHaveLength(0);
  });
});
