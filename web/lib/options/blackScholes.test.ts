import { describe, it, expect } from "vitest";
import {
  normCdf,
  priceOption,
  optionPrice,
  DEFAULT_RISK_FREE,
} from "@/lib/options/blackScholes";

describe("normCdf", () => {
  it("is 0.5 at zero and symmetric", () => {
    expect(normCdf(0)).toBeCloseTo(0.5, 6);
    expect(normCdf(1) + normCdf(-1)).toBeCloseTo(1, 5);
    expect(normCdf(2) + normCdf(-2)).toBeCloseTo(1, 5);
  });
  it("matches known tail values", () => {
    expect(normCdf(1.96)).toBeCloseTo(0.975, 3);
    expect(normCdf(-1.645)).toBeCloseTo(0.05, 3);
  });
});

describe("priceOption — known Black-Scholes values", () => {
  it("prices a textbook ATM call (S=K=100, T=1, r=0, σ=0.2) ≈ 7.9656", () => {
    // With r=0 the closed form is S·(2N(σ√T/2) − 1).
    const { price } = priceOption({ type: "call", spot: 100, strike: 100, years: 1, iv: 0.2, rate: 0 });
    expect(price).toBeCloseTo(7.9656, 3);
  });
  it("prices a standard ITM call (S=100,K=95,T=1,r=0.05,σ=0.25) ≈ 15.047", () => {
    const price = optionPrice({ type: "call", spot: 100, strike: 95, years: 1, iv: 0.25, rate: 0.05 });
    expect(price).toBeCloseTo(15.047, 2);
  });
});

describe("put-call parity: C − P = S − K·e^(−rT)", () => {
  const cases = [
    { spot: 100, strike: 100, years: 1, iv: 0.2, rate: 0.05 },
    { spot: 120, strike: 100, years: 0.5, iv: 0.35, rate: 0.03 },
    { spot: 80, strike: 100, years: 2, iv: 0.15, rate: 0.04 },
  ];
  for (const c of cases) {
    it(`holds for S=${c.spot} K=${c.strike} T=${c.years}`, () => {
      const call = optionPrice({ ...c, type: "call" });
      const put = optionPrice({ ...c, type: "put" });
      const parity = c.spot - c.strike * Math.exp(-c.rate * c.years);
      expect(call - put).toBeCloseTo(parity, 4);
    });
  }
});

describe("Greeks — signs and bounds", () => {
  const base = { spot: 100, strike: 100, years: 0.5, iv: 0.3, rate: DEFAULT_RISK_FREE };
  it("call delta in (0,1), put delta in (−1,0)", () => {
    expect(priceOption({ ...base, type: "call" }).greeks.delta).toBeGreaterThan(0);
    expect(priceOption({ ...base, type: "call" }).greeks.delta).toBeLessThan(1);
    expect(priceOption({ ...base, type: "put" }).greeks.delta).toBeGreaterThan(-1);
    expect(priceOption({ ...base, type: "put" }).greeks.delta).toBeLessThan(0);
  });
  it("ATM call delta sits modestly above 0.5; put delta = call delta − 1", () => {
    const call = priceOption({ ...base, type: "call" }).greeks.delta;
    const put = priceOption({ ...base, type: "put" }).greeks.delta;
    expect(call).toBeGreaterThan(0.5); // drift (r + σ²/2) lifts spot-delta above 0.5
    expect(call).toBeLessThan(0.65);
    expect(put).toBeCloseTo(call - 1, 6);
  });
  it("gamma and vega are positive for both; long theta is negative", () => {
    const call = priceOption({ ...base, type: "call" }).greeks;
    const put = priceOption({ ...base, type: "put" }).greeks;
    expect(call.gamma).toBeGreaterThan(0);
    expect(put.gamma).toBeGreaterThan(0);
    expect(call.vega).toBeGreaterThan(0);
    expect(put.vega).toBeGreaterThan(0);
    expect(call.theta).toBeLessThan(0);
  });
  it("call and put share the same gamma and vega (same d1)", () => {
    const call = priceOption({ ...base, type: "call" }).greeks;
    const put = priceOption({ ...base, type: "put" }).greeks;
    expect(call.gamma).toBeCloseTo(put.gamma, 8);
    expect(call.vega).toBeCloseTo(put.vega, 8);
  });
});

describe("degenerate cases collapse to intrinsic", () => {
  it("at expiry (years=0) a call is max(S−K,0)", () => {
    expect(optionPrice({ type: "call", spot: 110, strike: 100, years: 0, iv: 0.3 })).toBe(10);
    expect(optionPrice({ type: "call", spot: 90, strike: 100, years: 0, iv: 0.3 })).toBe(0);
  });
  it("at expiry a put is max(K−S,0)", () => {
    expect(optionPrice({ type: "put", spot: 90, strike: 100, years: 0, iv: 0.3 })).toBe(10);
    expect(optionPrice({ type: "put", spot: 110, strike: 100, years: 0, iv: 0.3 })).toBe(0);
  });
  it("zero vol gives a deep-ITM call its (undiscounted) intrinsic and delta 1", () => {
    const q = priceOption({ type: "call", spot: 150, strike: 100, years: 1, iv: 0 });
    expect(q.price).toBe(50);
    expect(q.greeks.delta).toBe(1);
  });
});

describe("monotonicity sanity", () => {
  it("a call is worth more as the underlying rises", () => {
    const lo = optionPrice({ type: "call", spot: 95, strike: 100, years: 0.5, iv: 0.3 });
    const hi = optionPrice({ type: "call", spot: 105, strike: 100, years: 0.5, iv: 0.3 });
    expect(hi).toBeGreaterThan(lo);
  });
  it("more time and more vol both raise an ATM option's price", () => {
    const shortT = optionPrice({ type: "call", spot: 100, strike: 100, years: 0.1, iv: 0.3 });
    const longT = optionPrice({ type: "call", spot: 100, strike: 100, years: 1, iv: 0.3 });
    expect(longT).toBeGreaterThan(shortT);
    const lowVol = optionPrice({ type: "call", spot: 100, strike: 100, years: 0.5, iv: 0.1 });
    const highVol = optionPrice({ type: "call", spot: 100, strike: 100, years: 0.5, iv: 0.6 });
    expect(highVol).toBeGreaterThan(lowVol);
  });
});
