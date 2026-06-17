import { describe, it, expect } from "vitest";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { scoreExam } from "@/lib/exam/score";

function q(id: string, fn: string, correctId = "a"): ChoiceQuestion {
  return {
    id,
    lessonSlug: id.split(".")[0],
    type: "single",
    difficulty: "easy",
    prompt: "p",
    tags: [fn],
    choices: [
      { id: "a", text: "A" },
      { id: "b", text: "B" },
    ],
    correctId,
    explanation: "e",
  };
}

describe("scoreExam", () => {
  const qs = [q("a.q1", "fn:3"), q("a.q2", "fn:3"), q("b.q1", "fn:2")];

  it("scores all-correct as 100% and passing", () => {
    const r = scoreExam(qs, { "a.q1": "a", "a.q2": "a", "b.q1": "a" });
    expect(r.correct).toBe(3);
    expect(r.score).toBe(1);
    expect(r.passed).toBe(true);
    expect(r.missed).toHaveLength(0);
  });

  it("treats a skipped question as wrong with a null selection", () => {
    const r = scoreExam(qs, { "a.q1": "a", "a.q2": "a" }); // b.q1 unanswered
    expect(r.correct).toBe(2);
    const skipped = r.missed.find((m) => m.question.id === "b.q1");
    expect(skipped).toBeDefined();
    expect(skipped!.selectedId).toBeNull();
  });

  it("buckets results by function and finds the weakest", () => {
    const r = scoreExam(qs, { "a.q1": "a", "a.q2": "b", "b.q1": "a" }); // F3 1/2, F2 1/1
    const f3 = r.byFunction.find((f) => f.tag === "fn:3")!;
    const f2 = r.byFunction.find((f) => f.tag === "fn:2")!;
    expect(f3.correct).toBe(1);
    expect(f3.total).toBe(2);
    expect(f2.score).toBe(1);
    expect(r.weakest?.tag).toBe("fn:3");
  });

  it("applies the 72% pass bar", () => {
    const four = [q("a.q1", "fn:3"), q("a.q2", "fn:3"), q("a.q3", "fn:3"), q("a.q4", "fn:3")];
    const threeRight = scoreExam(four, { "a.q1": "a", "a.q2": "a", "a.q3": "a", "a.q4": "b" });
    expect(threeRight.score).toBe(0.75);
    expect(threeRight.passed).toBe(true);
    const twoRight = scoreExam(four, { "a.q1": "a", "a.q2": "a" });
    expect(twoRight.score).toBe(0.5);
    expect(twoRight.passed).toBe(false);
  });
});
