import { describe, it, expect } from "vitest";
import { legPayoff, totalPayoff, netPremium, strategyStats } from "@/lib/options/strategy";
import type { PayoffLeg } from "@/lib/lessons/types";

const longCall = (strike: number, premium: number, qty = 1): PayoffLeg => ({ instrument: "call", side: "long", strike, premium, qty });
const shortCall = (strike: number, premium: number, qty = 1): PayoffLeg => ({ instrument: "call", side: "short", strike, premium, qty });
const longPut = (strike: number, premium: number, qty = 1): PayoffLeg => ({ instrument: "put", side: "long", strike, premium, qty });
const shortPut = (strike: number, premium: number, qty = 1): PayoffLeg => ({ instrument: "put", side: "short", strike, premium, qty });

describe("legPayoff", () => {
  it("long call: −premium×100 below strike, intrinsic−premium above (×100)", () => {
    expect(legPayoff(longCall(100, 5), 90)).toBe(-500); // OTM → lose premium
    expect(legPayoff(longCall(100, 5), 110)).toBe((10 - 5) * 100); // +500
  });
  it("short put: keeps premium above strike, loses below (×100)", () => {
    expect(legPayoff(shortPut(100, 4), 110)).toBe(400); // OTM → keep premium
    expect(legPayoff(shortPut(100, 4), 90)).toBe((4 - 10) * 100); // −600
  });
  it("long stock: linear, no multiplier", () => {
    expect(legPayoff({ instrument: "stock", side: "long", premium: 100, qty: 10 }, 105)).toBe(50);
  });
});

describe("netPremium", () => {
  it("a long single option is a debit (negative)", () => {
    expect(netPremium([longCall(100, 5)])).toBe(-500);
  });
  it("a credit spread is positive", () => {
    expect(netPremium([shortPut(100, 4), longPut(95, 2)])).toBe(400 - 200); // +200 credit
  });
});

describe("strategyStats", () => {
  it("long call: bounded loss = premium, unbounded profit, breakeven = strike + premium", () => {
    const s = strategyStats([longCall(100, 5)]);
    expect(s.maxLoss).toBe(-500);
    expect(s.maxProfit).toBe(Infinity);
    expect(s.netPremium).toBe(-500);
    expect(s.breakevens).toHaveLength(1);
    expect(s.breakevens[0]).toBeCloseTo(105, 0);
  });

  it("long put: bounded profit + loss, unbounded neither (profit caps at strike→0)", () => {
    const s = strategyStats([longPut(100, 6)]);
    expect(s.maxLoss).toBe(-600);
    expect(s.maxProfit).not.toBe(Infinity);
    expect(s.maxProfit).toBeCloseTo((100 - 6) * 100, -2); // ≈ 9400 near S=0
    expect(s.breakevens[0]).toBeCloseTo(94, 0);
  });

  it("bull call spread: both extremes bounded, single breakeven", () => {
    const s = strategyStats([longCall(100, 6), shortCall(110, 2)]);
    expect(s.netPremium).toBe(-400); // 4.00 debit
    expect(s.maxLoss).toBe(-400);
    expect(s.maxProfit).toBe(Math.round((10 - 4) * 100)); // width 10 − debit 4 = 6 → 600
    expect(s.maxProfit).toBe(600);
    expect(s.breakevens[0]).toBeCloseTo(104, 0);
  });

  it("long straddle: two breakevens, unbounded profit both ways", () => {
    const s = strategyStats([longCall(100, 5), longPut(100, 5)]);
    expect(s.maxProfit).toBe(Infinity);
    expect(s.breakevens.sort((a, b) => a - b).map((b) => Math.round(b))).toEqual([90, 110]);
  });

  it("iron condor: bounded both sides, two breakevens, net credit", () => {
    const s = strategyStats([shortPut(95, 2), longPut(90, 1), shortCall(105, 2), longCall(110, 1)]);
    expect(s.netPremium).toBe(200); // (2−1)+(2−1) = 2.00 credit ×100
    expect(s.maxProfit).toBe(200);
    expect(s.maxLoss).not.toBe(-Infinity);
    expect(s.breakevens).toHaveLength(2);
  });
});

describe("totalPayoff", () => {
  it("sums legs", () => {
    const legs = [longCall(100, 6), shortCall(110, 2)];
    expect(totalPayoff(legs, 120)).toBe(legPayoff(legs[0], 120) + legPayoff(legs[1], 120));
  });
});
