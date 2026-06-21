import { describe, it, expect } from "vitest";
import { optionValueCurve, timeValue } from "@/lib/options/lab";

const base = { strike: 100, years: 0.5, iv: 0.3, rate: 0.04 } as const;

describe("optionValueCurve", () => {
  it("returns steps+1 points spanning [from, to]", () => {
    const pts = optionValueCurve({ ...base, type: "call" }, 60, 140, 40);
    expect(pts).toHaveLength(41);
    expect(pts[0].spot).toBeCloseTo(60, 9);
    expect(pts[pts.length - 1].spot).toBeCloseTo(140, 9);
  });

  it("a call's value is monotonically increasing in the underlying", () => {
    const pts = optionValueCurve({ ...base, type: "call" }, 60, 140, 40);
    for (let i = 1; i < pts.length; i++) expect(pts[i].value).toBeGreaterThanOrEqual(pts[i - 1].value);
  });

  it("a call's model value never dips below intrinsic", () => {
    const pts = optionValueCurve({ ...base, type: "call" }, 60, 140, 40);
    for (const p of pts) expect(p.value).toBeGreaterThanOrEqual(p.intrinsic - 1e-9);
  });

  it("intrinsic is the kinked payoff (zero OTM, linear ITM)", () => {
    const pts = optionValueCurve({ ...base, type: "put" }, 60, 140, 80);
    const otm = pts.find((p) => Math.abs(p.spot - 130) < 1)!;
    const itm = pts.find((p) => Math.abs(p.spot - 70) < 1)!;
    expect(otm.intrinsic).toBe(0); // put OTM above strike
    expect(itm.intrinsic).toBeCloseTo(30, 0); // 100 − 70
  });
});

describe("timeValue", () => {
  it("is positive at the money and decays to ~0 deep in the money for a call", () => {
    expect(timeValue({ ...base, type: "call" }, 100)).toBeGreaterThan(0);
    expect(timeValue({ ...base, type: "call" }, 100)).toBeGreaterThan(timeValue({ ...base, type: "call" }, 180));
  });
});
