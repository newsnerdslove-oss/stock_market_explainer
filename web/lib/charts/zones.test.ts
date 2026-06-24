import { describe, it, expect } from "vitest";
import { detectZones } from "@/lib/charts/zones";
import type { Candle } from "@/lib/marketService";

let t = 0;
const c = (open: number, high: number, low: number, close: number): Candle => ({
  time: new Date((t += 60_000)).toISOString(),
  open,
  high,
  low,
  close,
  volume: 0,
});

// A flat base of small candles, then one big bullish impulse, then drift.
function demandSeries(): Candle[] {
  t = 0;
  return [
    c(100, 101, 99, 100),
    c(100, 100.5, 99.5, 100),
    c(100, 100.5, 99.5, 100),
    c(100, 110, 100, 109), // impulse up (range 10 ≫ avg)
    c(109, 110, 108, 109),
    c(109, 111, 108, 110),
  ];
}

describe("detectZones", () => {
  it("returns nothing for too-few or flat candles", () => {
    expect(detectZones([])).toEqual([]);
    expect(detectZones(Array.from({ length: 8 }, () => c(100, 100, 100, 100)))).toEqual([]);
  });

  it("flags a demand zone from a base + bullish impulse", () => {
    const zones = detectZones(demandSeries());
    expect(zones.length).toBeGreaterThanOrEqual(1);
    const z = zones[0];
    expect(z.kind).toBe("demand");
    // band comes from the small base candles (~99.5–100.5), below the impulse
    expect(z.lo).toBeLessThanOrEqual(100);
    expect(z.hi).toBeLessThan(109);
  });

  it("drops a zone whose level was later broken by a close through it", () => {
    t = 0;
    const series = [
      c(100, 101, 99, 100),
      c(100, 100.5, 99.5, 100),
      c(100, 100.5, 99.5, 100),
      c(100, 110, 100, 109), // demand impulse, base low ~99
      c(109, 110, 106, 107), // small candles drifting down (not impulses)…
      c(107, 107, 103, 104),
      c(104, 104, 100, 101),
      c(101, 101, 97, 98), // …closes 98, below the demand band → broken
    ];
    expect(detectZones(series)).toEqual([]);
  });

  it("classifies a bearish impulse as a supply zone", () => {
    t = 0;
    const series = [
      c(100, 101, 99, 100),
      c(100, 100.5, 99.5, 100),
      c(100, 100.5, 99.5, 100),
      c(100, 100, 90, 91), // impulse down
      c(91, 92, 90, 91),
    ];
    const zones = detectZones(series);
    expect(zones.length).toBeGreaterThanOrEqual(1);
    expect(zones[0].kind).toBe("supply");
  });
});
