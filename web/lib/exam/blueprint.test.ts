import { describe, it, expect } from "vitest";
import type { Question } from "@/lib/quiz/types";
import { FUNCTIONS, questionFunction, drillModeForFunction, examModeById } from "@/lib/exam/blueprint";

function q(tags: string[]): Question {
  return {
    id: "x.q1",
    lessonSlug: "x",
    type: "single",
    difficulty: "easy",
    prompt: "p",
    tags,
    choices: [{ id: "a", text: "A" }],
    correctId: "a",
    explanation: "e",
  };
}

describe("blueprint", () => {
  it("function weights mirror the real exam and sum to ~1", () => {
    const sum = FUNCTIONS.reduce((s, f) => s + f.weight, 0);
    expect(sum).toBeCloseTo(1, 2);
    expect(FUNCTIONS.find((f) => f.tag === "fn:3")!.weight).toBeGreaterThan(0.7);
  });

  it("questionFunction extracts the fn:N tag, or null", () => {
    expect(questionFunction(q(["fn:2", "kyc"]))).toBe("fn:2");
    expect(questionFunction(q(["topic-only"]))).toBeNull();
    expect(questionFunction(q([]))).toBeNull();
  });

  it("maps a function to its drill mode when one exists", () => {
    expect(drillModeForFunction("fn:3")).toBe("drill-fn3");
    expect(drillModeForFunction("fn:1")).toBe("drill-fn1");
    expect(examModeById["drill-fn3"]).toBeDefined();
  });

  it("returns null for a function with no drill mode", () => {
    expect(drillModeForFunction("fn:9")).toBeNull();
  });
});
