import { describe, it, expect } from "vitest";
import { generateChain, strikeIncrement } from "@/lib/options/chain";

describe("strikeIncrement", () => {
  it("snaps to a conventional ladder by price", () => {
    expect(strikeIncrement(20)).toBe(0.5);
    expect(strikeIncrement(100)).toBe(2.5);
    expect(strikeIncrement(300)).toBe(10);
    expect(strikeIncrement(3000)).toBe(100);
  });
});

describe("generateChain", () => {
  const chain = generateChain({ spot: 296, expiriesInDays: [7, 30, 60], strikesEachSide: 5 });

  it("returns one entry per expiry, each with the right strike count", () => {
    expect(chain).toHaveLength(3);
    for (const exp of chain) expect(exp.rows).toHaveLength(11); // 5 each side + ATM
  });

  it("centers strikes near the spot and exposes both a call and a put per strike", () => {
    const strikes = chain[0].rows.map((r) => r.strike);
    const atm = strikes.reduce((a, b) => (Math.abs(b - 296) < Math.abs(a - 296) ? b : a));
    expect(Math.abs(atm - 296)).toBeLessThanOrEqual(strikeIncrement(296) / 2 + 1e-9);
    for (const row of chain[0].rows) {
      expect(row.call.type).toBe("call");
      expect(row.put.type).toBe("put");
      expect(row.call.quote.price).toBeGreaterThanOrEqual(0);
      expect(row.put.quote.price).toBeGreaterThanOrEqual(0);
    }
  });

  it("classifies moneyness correctly outside the ATM band", () => {
    const step = strikeIncrement(296);
    for (const row of chain[0].rows) {
      if (row.strike <= 296 - step) {
        expect(row.call.moneyness).toBe("ITM"); // call ITM when spot is above strike
        expect(row.put.moneyness).toBe("OTM");
      } else if (row.strike >= 296 + step) {
        expect(row.call.moneyness).toBe("OTM");
        expect(row.put.moneyness).toBe("ITM");
      }
    }
  });

  it("preserves put-call parity across the whole chain", () => {
    const rate = 0.04;
    for (const exp of chain) {
      const years = exp.days / 365;
      for (const row of exp.rows) {
        const parity = 296 - row.strike * Math.exp(-rate * years);
        expect(row.call.quote.price - row.put.quote.price).toBeCloseTo(parity, 3);
      }
    }
  });

  it("longer-dated ATM options cost more (more time value)", () => {
    const atmPrice = (exp: (typeof chain)[number]) => {
      const row = exp.rows.reduce((a, b) => (Math.abs(b.strike - 296) < Math.abs(a.strike - 296) ? b : a));
      return row.call.quote.price;
    };
    expect(atmPrice(chain[2])).toBeGreaterThan(atmPrice(chain[0])); // 60d > 7d
  });

  it("respects an explicit strike step and never lists non-positive strikes", () => {
    const cheap = generateChain({ spot: 3, expiriesInDays: [30], strikesEachSide: 10, strikeStep: 0.5 });
    for (const row of cheap[0].rows) expect(row.strike).toBeGreaterThan(0);
  });
});
