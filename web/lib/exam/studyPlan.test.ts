import { describe, it, expect } from "vitest";
import type { ExamAttempt } from "@/lib/progress/schema";
import { computeReadiness } from "@/lib/exam/readiness";
import { buildStudyPlan, type StudyLesson } from "@/lib/exam/studyPlan";

function attempt(byFunction: ExamAttempt["byFunction"]): ExamAttempt {
  let correct = 0;
  let total = 0;
  for (const v of Object.values(byFunction)) {
    correct += v.correct;
    total += v.total;
  }
  return { id: "x", mode: "mock", at: "t", score: total ? correct / total : 0, correct, total, passed: false, byFunction };
}

function lessons(spec: Array<[string, string, boolean]>): StudyLesson[] {
  return spec.map(([slug, fnTag, done]) => ({ slug, title: slug, moduleTitle: "Mod", fnTag, done }));
}

describe("buildStudyPlan", () => {
  it("leads with the weakest function's lessons, then a drill", () => {
    const readiness = computeReadiness([
      attempt({ "fn:1": { correct: 8, total: 9 }, "fn:2": { correct: 10, total: 11 }, "fn:3": { correct: 40, total: 91 }, "fn:4": { correct: 12, total: 14 } }),
    ]);
    const plan = buildStudyPlan(
      readiness,
      lessons([
        ["opt", "fn:3", false],
        ["spread", "fn:3", false],
        ["kyc", "fn:2", false],
      ]),
    );
    expect(plan.ready).toBe(false);
    // First steps target F3 (the weak, heavily-weighted function).
    expect(plan.steps[0]).toMatchObject({ kind: "lesson", fnCode: "F3" });
    expect(plan.steps.some((s) => s.kind === "drill" && s.modeId === "drill-fn3")).toBe(true);
  });

  it("reports ready when every function clears the bar and all lessons are passed", () => {
    const readiness = computeReadiness([
      attempt({ "fn:1": { correct: 9, total: 9 }, "fn:2": { correct: 11, total: 11 }, "fn:3": { correct: 85, total: 91 }, "fn:4": { correct: 13, total: 14 } }),
    ]);
    const plan = buildStudyPlan(readiness, lessons([["opt", "fn:3", true]]));
    expect(plan.ready).toBe(true);
    expect(plan.steps).toHaveLength(0);
  });

  it("caps the plan length", () => {
    const readiness = computeReadiness([]); // no-data: every function is a gap
    const many: StudyLesson[] = [];
    for (let i = 0; i < 30; i++) many.push({ slug: `f3-${i}`, title: "t", moduleTitle: "m", fnTag: "fn:3", done: false });
    const plan = buildStudyPlan(readiness, many);
    expect(plan.steps.length).toBeLessThanOrEqual(12);
  });

  it("prepends asked-about unpassed lessons as revisit steps", () => {
    const readiness = computeReadiness([attempt({ "fn:3": { correct: 40, total: 91 } })]);
    const plan = buildStudyPlan(
      readiness,
      lessons([
        ["opt", "fn:3", false],
        ["spread", "fn:3", false],
        ["asked-one", "fn:3", false],
      ]),
      new Set(["asked-one"]),
    );
    const first = plan.steps[0];
    expect(first).toMatchObject({ kind: "lesson", slug: "asked-one", revisit: true });
    // The revisited lesson isn't then duplicated in the function section.
    const occurrences = plan.steps.filter((s) => s.kind === "lesson" && s.slug === "asked-one").length;
    expect(occurrences).toBe(1);
  });

  it("does not revisit an asked-about lesson that's already passed", () => {
    const readiness = computeReadiness([attempt({ "fn:3": { correct: 40, total: 91 } })]);
    const plan = buildStudyPlan(
      readiness,
      lessons([["passed", "fn:3", true], ["todo", "fn:3", false]]),
      new Set(["passed"]),
    );
    expect(plan.steps.some((s) => s.kind === "lesson" && s.slug === "passed")).toBe(false);
  });

  it("skips already-passed lessons", () => {
    const readiness = computeReadiness([attempt({ "fn:3": { correct: 5, total: 30 } })]);
    const plan = buildStudyPlan(
      readiness,
      lessons([
        ["done-one", "fn:3", true],
        ["todo-one", "fn:3", false],
      ]),
    );
    const lessonSlugs = plan.steps.filter((s) => s.kind === "lesson").map((s) => (s.kind === "lesson" ? s.slug : ""));
    expect(lessonSlugs).toContain("todo-one");
    expect(lessonSlugs).not.toContain("done-one");
  });
});
