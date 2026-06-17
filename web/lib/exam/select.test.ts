import { describe, it, expect } from "vitest";
import type { Question } from "@/lib/quiz/types";
import type { ExamMode } from "@/lib/exam/blueprint";
import { selectExamQuestions } from "@/lib/exam/select";

// Deterministic RNG so selection is reproducible across runs.
function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function q(id: string, fn: string): Question {
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
      { id: "c", text: "C" },
      { id: "d", text: "D" },
    ],
    correctId: "a",
    explanation: "e",
  };
}

function bank(counts: Record<string, number>): Question[] {
  const out: Question[] = [];
  for (const [fn, n] of Object.entries(counts)) {
    const key = fn.replace(":", "");
    for (let i = 0; i < n; i++) out.push(q(`${key}-l${i}.q1`, fn));
  }
  return out;
}

const uniqueIds = (qs: Question[]) => new Set(qs.map((x) => x.id)).size;

describe("selectExamQuestions", () => {
  it("delivers the target count, weighted, with no duplicates", () => {
    const mode: ExamMode = { id: "m", title: "", description: "", total: 100, weighted: true };
    const sel = selectExamQuestions(mode, bank({ "fn:1": 20, "fn:2": 30, "fn:3": 200, "fn:4": 30 }), rng(1));
    expect(sel.questions.length).toBe(100);
    expect(uniqueIds(sel.questions)).toBe(100);
    expect(sel.composition.missing).toEqual([]);
    // F3 dominates by weight.
    const byTag = Object.fromEntries(sel.composition.byFunction.map((f) => [f.tag, f.delivered]));
    expect(byTag["fn:3"]).toBeGreaterThan(byTag["fn:2"]);
  });

  it("redistributes a missing function and still hits the total", () => {
    const mode: ExamMode = { id: "m", title: "", description: "", total: 100, weighted: true };
    const sel = selectExamQuestions(mode, bank({ "fn:2": 30, "fn:3": 200, "fn:4": 30 }), rng(2));
    expect(sel.questions.length).toBe(100);
    expect(sel.composition.missing).toContain("fn:1");
    const f1 = sel.composition.byFunction.find((f) => f.tag === "fn:1")!;
    expect(f1.delivered).toBe(0);
  });

  it("a single-function drill draws only that function", () => {
    const mode: ExamMode = { id: "d", title: "", description: "", total: 30, functions: ["fn:3"] };
    const sel = selectExamQuestions(mode, bank({ "fn:2": 50, "fn:3": 200, "fn:4": 50 }), rng(3));
    expect(sel.questions.length).toBe(30);
    expect(sel.questions.every((x) => x.tags?.includes("fn:3"))).toBe(true);
  });

  it("caps to availability when the bank is too small", () => {
    const mode: ExamMode = { id: "m", title: "", description: "", total: 500, weighted: true };
    const b = bank({ "fn:2": 30, "fn:3": 200, "fn:4": 30 }); // 260 available
    const sel = selectExamQuestions(mode, b, rng(4));
    expect(sel.questions.length).toBe(260);
    expect(uniqueIds(sel.questions)).toBe(260);
  });

  it("never exceeds the target (equal-weight overflow is trimmed)", () => {
    const mode: ExamMode = { id: "x", title: "", description: "", total: 7, functions: ["fn:2", "fn:3"] };
    const sel = selectExamQuestions(mode, bank({ "fn:2": 50, "fn:3": 50 }), rng(5));
    expect(sel.questions.length).toBe(7);
  });

  it("ignores questions with no function tag", () => {
    const mode: ExamMode = { id: "d", title: "", description: "", total: 10, functions: ["fn:3"] };
    const untagged = q("u1.q1", "");
    untagged.tags = ["misc"];
    const sel = selectExamQuestions(mode, [...bank({ "fn:3": 10 }), untagged], rng(6));
    expect(sel.questions.some((x) => x.id === "u1.q1")).toBe(false);
  });
});
