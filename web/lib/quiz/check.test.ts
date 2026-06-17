import { describe, it, expect } from "vitest";
import type { ChoiceQuestion } from "@/lib/quiz/types";
import { checkAnswer } from "@/lib/quiz/check";

const q: ChoiceQuestion = {
  id: "x.q1",
  lessonSlug: "x",
  type: "single",
  difficulty: "easy",
  prompt: "p",
  choices: [
    { id: "a", text: "Right" },
    { id: "b", text: "Wrong", feedback: "why b is wrong" },
  ],
  correctId: "a",
  explanation: "because a",
};

describe("checkAnswer", () => {
  it("marks the correct choice right and returns the explanation", () => {
    const r = checkAnswer(q, "a");
    expect(r.correct).toBe(true);
    expect(r.correctId).toBe("a");
    expect(r.explanation).toBe("because a");
  });

  it("marks a wrong choice and surfaces its feedback", () => {
    const r = checkAnswer(q, "b");
    expect(r.correct).toBe(false);
    expect(r.selectedFeedback).toBe("why b is wrong");
  });

  it("treats an empty/unknown selection as incorrect", () => {
    expect(checkAnswer(q, "").correct).toBe(false);
    expect(checkAnswer(q, "z").correct).toBe(false);
  });
});
