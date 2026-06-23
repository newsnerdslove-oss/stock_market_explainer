import { describe, it, expect } from "vitest";
import { addTo, removeFrom, normalizeStock, normalizeCoin, loadTracked } from "@/lib/home/tracked";

describe("addTo", () => {
  it("appends a new item, no duplicates", () => {
    expect(addTo(["AAPL"], "MSFT")).toEqual(["AAPL", "MSFT"]);
    expect(addTo(["AAPL"], "AAPL")).toEqual(["AAPL"]);
  });
  it("ignores blanks and caps the list length", () => {
    expect(addTo(["A"], "")).toEqual(["A"]);
    const big = Array.from({ length: 30 }, (_, i) => `S${i}`);
    expect(addTo(big, "NEW")).toHaveLength(30);
  });
});

describe("removeFrom", () => {
  it("removes the item if present", () => {
    expect(removeFrom(["AAPL", "MSFT"], "AAPL")).toEqual(["MSFT"]);
    expect(removeFrom(["AAPL"], "TSLA")).toEqual(["AAPL"]);
  });
});

describe("normalizeStock", () => {
  it("upper-cases and strips non-ticker characters", () => {
    expect(normalizeStock(" aapl ")).toBe("AAPL");
    expect(normalizeStock("brk.b")).toBe("BRK.B");
    expect(normalizeStock("a a$pl")).toBe("AAPL");
  });
});

describe("normalizeCoin", () => {
  it("expands bare symbols to a USD pair", () => {
    expect(normalizeCoin("doge")).toBe("DOGE-USD");
    expect(normalizeCoin("BTC")).toBe("BTC-USD");
  });
  it("keeps explicit pairs and accepts slash form", () => {
    expect(normalizeCoin("ETH-USD")).toBe("ETH-USD");
    expect(normalizeCoin("ada/usd")).toBe("ADA-USD");
  });
  it("returns empty for blank input", () => {
    expect(normalizeCoin("  ")).toBe("");
  });
});

describe("loadTracked (SSR)", () => {
  it("returns defaults when window is undefined", () => {
    expect(loadTracked("k", ["AAPL"])).toEqual(["AAPL"]);
  });
});
