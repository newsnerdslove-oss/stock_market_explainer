import { describe, it, expect } from "vitest";
import { newAlert, crossed, isAlert, type Alert } from "@/lib/charts/alerts";

describe("newAlert", () => {
  it("is an 'above' alert when the level is at/above the current price", () => {
    expect(newAlert(110, 100, 1).above).toBe(true);
    expect(newAlert(90, 100, 1).above).toBe(false);
  });
});

describe("crossed", () => {
  const above: Alert = { id: "a", price: 110, above: true, triggered: false, createdAt: 0 };
  const below: Alert = { id: "b", price: 90, above: false, triggered: false, createdAt: 0 };

  it("fires an above-alert when price rises through the level", () => {
    expect(crossed([above], 105, 111).map((a) => a.id)).toEqual(["a"]);
    expect(crossed([above], 105, 109)).toEqual([]);
  });

  it("fires a below-alert when price falls through the level", () => {
    expect(crossed([below], 95, 89).map((a) => a.id)).toEqual(["b"]);
    expect(crossed([below], 95, 91)).toEqual([]);
  });

  it("never fires an already-triggered alert", () => {
    expect(crossed([{ ...above, triggered: true }], 105, 120)).toEqual([]);
  });
});

describe("isAlert", () => {
  it("validates shape", () => {
    expect(isAlert({ id: "x", price: 1, above: true, triggered: false, createdAt: 0 })).toBe(true);
    expect(isAlert({ id: "x", price: "1", above: true, triggered: false, createdAt: 0 })).toBe(false);
    expect(isAlert(null)).toBe(false);
  });
});
