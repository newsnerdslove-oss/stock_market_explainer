import { describe, it, expect } from "vitest";
import type { ExamAttempt } from "@/lib/progress/schema";
import { computeReadiness } from "@/lib/exam/readiness";

function attempt(byFunction: ExamAttempt["byFunction"]): ExamAttempt {
  let correct = 0;
  let total = 0;
  for (const v of Object.values(byFunction)) {
    correct += v.correct;
    total += v.total;
  }
  return {
    id: "x",
    mode: "mock",
    at: "2026-06-17T00:00:00Z",
    score: total ? correct / total : 0,
    correct,
    total,
    passed: total ? correct / total >= 0.72 : false,
    byFunction,
  };
}

describe("computeReadiness", () => {
  it("returns no-data with an empty history", () => {
    const r = computeReadiness([]);
    expect(r.overall).toBe("no-data");
    expect(r.projectedScore).toBeNull();
  });

  it("reads strong-everywhere as ready", () => {
    const r = computeReadiness([
      attempt({ "fn:1": { correct: 8, total: 9 }, "fn:2": { correct: 10, total: 11 }, "fn:3": { correct: 80, total: 91 }, "fn:4": { correct: 12, total: 14 } }),
    ]);
    expect(r.overall).toBe("ready");
    expect(r.passProjected).toBe(true);
    expect(r.coverage).toBe(4);
  });

  it("lets a weak dominant function (F3) tank the weighted projection", () => {
    const r = computeReadiness([
      attempt({ "fn:1": { correct: 8, total: 9 }, "fn:2": { correct: 9, total: 11 }, "fn:3": { correct: 45, total: 91 }, "fn:4": { correct: 11, total: 14 } }),
    ]);
    // Three strong small functions, but F3 (~73% weight) at ~49% pulls it under.
    expect(r.passProjected).toBe(false);
    expect(r.overall).toBe("building");
    expect(r.weakest[0]?.tag).toBe("fn:3"); // weakest is an ordered list, weakest first
    expect(r.weakest.map((f) => f.tag)).toContain("fn:3");
  });

  it("flags partial coverage as almost, not ready", () => {
    const r = computeReadiness([attempt({ "fn:3": { correct: 24, total: 30 } })]);
    expect(r.coverage).toBe(1);
    expect(r.overall).toBe("almost");
    expect(r.projectedScore).toBeCloseTo(0.8, 5);
  });

  it("aggregates across multiple attempts", () => {
    const r = computeReadiness([
      attempt({ "fn:3": { correct: 10, total: 20 } }),
      attempt({ "fn:3": { correct: 20, total: 20 } }),
    ]);
    const f3 = r.byFunction.find((f) => f.tag === "fn:3")!;
    expect(f3.correct).toBe(30);
    expect(f3.seen).toBe(40);
    expect(f3.accuracy).toBeCloseTo(0.75, 5);
  });
});
