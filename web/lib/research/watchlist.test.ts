import { describe, it, expect } from "vitest";
import { toggleWatch } from "@/lib/research/watchlist";

describe("toggleWatch", () => {
  it("adds a new symbol to the front, upper-cased", () => {
    expect(toggleWatch([], "aapl")).toEqual(["AAPL"]);
    expect(toggleWatch(["MSFT"], "nvda")).toEqual(["NVDA", "MSFT"]);
  });
  it("removes a symbol already present", () => {
    expect(toggleWatch(["AAPL", "MSFT"], "AAPL")).toEqual(["MSFT"]);
  });
  it("ignores blanks and caps the list length", () => {
    expect(toggleWatch(["A"], "  ")).toEqual(["A"]);
    const big = Array.from({ length: 30 }, (_, i) => `S${i}`);
    expect(toggleWatch(big, "NEW")).toHaveLength(30);
    expect(toggleWatch(big, "NEW")[0]).toBe("NEW");
  });
});
