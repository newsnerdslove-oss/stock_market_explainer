import { describe, it, expect } from "vitest";
import { standardExpiries, daysToExpiry, assumedIV, markPremium } from "@/lib/options/sim";
import { priceOption } from "@/lib/options/blackScholes";

const ref = new Date("2026-06-21T14:30:00Z"); // a fixed reference instant

describe("standardExpiries", () => {
  it("produces the requested horizons as future ISO dates with day counts", () => {
    const exps = standardExpiries(ref, [7, 30]);
    expect(exps).toHaveLength(2);
    expect(exps[0]).toMatchObject({ date: "2026-06-28", days: 7 });
    expect(exps[1]).toMatchObject({ date: "2026-07-21", days: 30 });
    expect(exps[1].label).toBe("Jul 21");
  });
  it("defaults to five horizons", () => {
    expect(standardExpiries(ref)).toHaveLength(5);
  });
});

describe("daysToExpiry", () => {
  it("counts whole days and ignores the time-of-day", () => {
    expect(daysToExpiry("2026-06-28", ref)).toBe(7);
    expect(daysToExpiry("2026-06-21", ref)).toBe(0);
  });
  it("clamps past expiries to 0", () => {
    expect(daysToExpiry("2026-06-01", ref)).toBe(0);
  });
});

describe("markPremium", () => {
  it("matches the pricer for the implied days-to-expiry and IV", () => {
    const opt = { underlying: "AAPL", type: "call" as const, strike: 300, expiry: "2026-07-21" };
    const got = markPremium(opt, 305, ref);
    const expected = priceOption({ type: "call", spot: 305, strike: 300, years: 30 / 365, iv: assumedIV("AAPL") }).price;
    expect(got).toBeCloseTo(expected, 9);
    expect(got).toBeGreaterThan(5); // in-the-money + time value
  });
  it("an expired option marks at intrinsic", () => {
    const opt = { underlying: "AAPL", type: "call" as const, strike: 300, expiry: "2026-06-01" };
    expect(markPremium(opt, 320, ref)).toBe(20); // days clamped to 0 → intrinsic
  });
});
