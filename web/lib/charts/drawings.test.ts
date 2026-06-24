import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  fibLevels,
  newDrawing,
  isDrawing,
  loadDrawings,
  saveDrawings,
  POINTS_FOR,
  FIB_LEVELS,
  type Drawing,
} from "./drawings";

describe("fibLevels", () => {
  it("places 0% at the end point and 100% at the anchor", () => {
    const a = { time: 1, price: 100 }; // anchor → level 1
    const b = { time: 2, price: 200 }; // end → level 0
    const levels = fibLevels(a, b);
    expect(levels[0]).toEqual({ level: 0, price: 200 });
    expect(levels[levels.length - 1]).toEqual({ level: 1, price: 100 });
  });

  it("computes the midpoint at 50%", () => {
    const mid = fibLevels({ time: 1, price: 100 }, { time: 2, price: 200 }).find((l) => l.level === 0.5);
    expect(mid?.price).toBe(150);
  });

  it("returns one entry per standard ratio", () => {
    expect(fibLevels({ time: 1, price: 0 }, { time: 2, price: 10 })).toHaveLength(FIB_LEVELS.length);
  });

  it("handles a downward move (anchor below end)", () => {
    const levels = fibLevels({ time: 1, price: 50 }, { time: 2, price: 10 });
    expect(levels.find((l) => l.level === 0)?.price).toBe(10);
    expect(levels.find((l) => l.level === 1)?.price).toBe(50);
    expect(levels.find((l) => l.level === 0.5)?.price).toBe(30);
  });
});

describe("newDrawing", () => {
  it("stamps an id and the tool colour", () => {
    const d = newDrawing("trend", [
      { time: 1, price: 10 },
      { time: 2, price: 20 },
    ]);
    expect(d.id).toBeTruthy();
    expect(d.type).toBe("trend");
    expect(d.color).toBe("#5BA8FF");
    expect(d.points).toHaveLength(2);
  });

  it("declares the right point count per tool", () => {
    expect(POINTS_FOR).toEqual({ horizontal: 1, trend: 2, fib: 2, zone: 2 });
  });
});

describe("isDrawing", () => {
  it("accepts a well-formed drawing", () => {
    expect(isDrawing(newDrawing("horizontal", [{ time: 1, price: 5 }]))).toBe(true);
  });

  it("rejects a wrong point count for the type", () => {
    const bad: Drawing = { id: "x", type: "trend", color: "#fff", points: [{ time: 1, price: 5 }] };
    expect(isDrawing(bad)).toBe(false);
  });

  it("rejects junk", () => {
    expect(isDrawing(null)).toBe(false);
    expect(isDrawing({ id: 1 })).toBe(false);
    expect(isDrawing({ id: "x", type: "spiral", color: "#fff", points: [] })).toBe(false);
  });
});

describe("persistence", () => {
  // The app runs in the browser; the unit env is node, so stub a minimal
  // in-memory localStorage on a fake `window` for these tests.
  const store = new Map<string, string>();
  const fakeLocalStorage = {
    getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
    setItem: (k: string, v: string) => void store.set(k, String(v)),
    removeItem: (k: string) => void store.delete(k),
    clear: () => store.clear(),
    key: (i: number) => [...store.keys()][i] ?? null,
    get length() {
      return store.size;
    },
  };

  beforeEach(() => {
    store.clear();
    vi.stubGlobal("window", { localStorage: fakeLocalStorage });
  });
  afterEach(() => vi.unstubAllGlobals());

  it("returns [] for an unknown symbol", () => {
    expect(loadDrawings("ZZZZ")).toEqual([]);
  });

  it("round-trips drawings per symbol (case-insensitive)", () => {
    const d = [
      newDrawing("horizontal", [{ time: 10, price: 100 }]),
      newDrawing("fib", [
        { time: 1, price: 100 },
        { time: 2, price: 200 },
      ]),
    ];
    saveDrawings("aapl", d);
    expect(loadDrawings("AAPL")).toHaveLength(2);
    expect(loadDrawings("AAPL")[0].type).toBe("horizontal");
  });

  it("drops corrupt entries on load", () => {
    window.localStorage.setItem("chart:drawings:MSFT", JSON.stringify([{ id: "x", type: "trend", points: "nope" }]));
    expect(loadDrawings("MSFT")).toEqual([]);
  });

  it("tolerates non-JSON without throwing", () => {
    window.localStorage.setItem("chart:drawings:NVDA", "{not json");
    expect(loadDrawings("NVDA")).toEqual([]);
  });
});
