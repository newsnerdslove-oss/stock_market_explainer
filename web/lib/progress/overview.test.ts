import { describe, it, expect } from "vitest";
import type { QuizProgress } from "@/lib/progress/schema";
import { computeOverview, type LessonRef } from "@/lib/progress/overview";

const refs: LessonRef[] = [
  { slug: "a", title: "A", trackId: "markets", trackTitle: "Markets", level: 100 },
  { slug: "b", title: "B", trackId: "markets", trackTitle: "Markets", level: 100 },
  { slug: "c", title: "C", trackId: "markets", trackTitle: "Markets", level: 200 },
  { slug: "d", title: "D", trackId: "crypto", trackTitle: "Crypto", level: 100 },
];

const qz = (best: number): QuizProgress => ({
  bestScore: best,
  lastScore: best,
  attempts: 1,
  lastAt: "x",
  passedAt: best >= 0.8 ? "x" : null,
});

describe("computeOverview", () => {
  it("is empty with the first lesson queued when nothing is passed", () => {
    const o = computeOverview(refs, {});
    expect(o.overall.passed).toBe(0);
    expect(o.overall.total).toBe(4);
    expect(o.overall.pct).toBe(0);
    expect(o.nextLesson?.slug).toBe("a");
  });

  it("counts passed and mastered against the right thresholds", () => {
    // a: mastered (0.95), b: passed not mastered (0.85), c: failed (0.5), d: untouched
    const o = computeOverview(refs, { a: qz(0.95), b: qz(0.85), c: qz(0.5) });
    expect(o.overall.passed).toBe(2);
    expect(o.overall.mastered).toBe(1);
    expect(o.nextLesson?.slug).toBe("c"); // first unpassed in order
  });

  it("buckets by track and by depth band, and the buckets sum to the total", () => {
    const o = computeOverview(refs, { a: qz(0.9), d: qz(0.9) });
    const markets = o.byTrack.find((t) => t.trackId === "markets")!;
    const crypto = o.byTrack.find((t) => t.trackId === "crypto")!;
    expect(markets.total).toBe(3);
    expect(crypto.total).toBe(1);
    expect(o.byTrack.reduce((s, t) => s + t.total, 0)).toBe(4);
    expect(o.byLevel.reduce((s, l) => s + l.total, 0)).toBe(4);
    const l100 = o.byLevel.find((l) => l.level === 100)!;
    expect(l100.total).toBe(3);
    expect(l100.passed).toBe(2); // a + d
  });

  it("reports all-passed with no next lesson", () => {
    const o = computeOverview(refs, { a: qz(0.9), b: qz(0.9), c: qz(0.9), d: qz(0.9) });
    expect(o.overall.pct).toBe(1);
    expect(o.nextLesson).toBeNull();
  });
});
