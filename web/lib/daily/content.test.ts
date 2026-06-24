import { describe, it, expect } from "vitest";
import { qotdFor, chartOfDayFor } from "./content";

describe("daily content", () => {
  it("is deterministic per date", () => {
    expect(qotdFor("2026-06-24")).toEqual(qotdFor("2026-06-24"));
    const a = chartOfDayFor("2026-06-24");
    const b = chartOfDayFor("2026-06-24");
    expect(a.meta).toEqual(b.meta);
    expect(a.candles).toEqual(b.candles);
    expect(a.signalIndex).toBe(b.signalIndex);
  });

  it("varies across dates", () => {
    // Over a month of dates we should see more than one QOTD and more than one chart pattern.
    const days = Array.from({ length: 31 }, (_, i) => `2026-07-${String(i + 1).padStart(2, "0")}`);
    expect(new Set(days.map((d) => qotdFor(d).q)).size).toBeGreaterThan(1);
    expect(new Set(days.map((d) => chartOfDayFor(d).meta.pattern)).size).toBeGreaterThan(1);
  });

  it("returns a valid QOTD and a chart with a signal candle", () => {
    const q = qotdFor("2026-06-24");
    expect(q.options[q.correct]).toBeTruthy();
    const c = chartOfDayFor("2026-06-24");
    expect(c.candles.length).toBeGreaterThan(0);
    expect(c.signalIndex).toBeGreaterThanOrEqual(0);
    expect(c.signalIndex).toBeLessThan(c.candles.length);
  });
});
