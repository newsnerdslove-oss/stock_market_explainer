import { describe, it, expect } from "vitest";
import { migrate, defaultProgress, CURRENT_VERSION, MAX_EXAM_HISTORY, type ExamAttempt } from "@/lib/progress/schema";

const goodExam: ExamAttempt = {
  id: "mock-1",
  mode: "mock",
  at: "2026-06-17T00:00:00Z",
  score: 0.8,
  correct: 100,
  total: 125,
  passed: true,
  byFunction: { "fn:3": { correct: 70, total: 91 } },
};

describe("progress migrate", () => {
  it("upgrades a v2 blob, backfilling exams and keeping prior data", () => {
    const v2 = {
      schemaVersion: 2,
      userId: "u1",
      quizzes: { a: { bestScore: 0.9 } },
      review: {},
      streak: { current: 3 },
      tz: "UTC",
      lastSession: "2026-06-17",
      updatedAt: "x",
    };
    const m = migrate(v2);
    expect(m.schemaVersion).toBe(CURRENT_VERSION);
    expect(Array.isArray(m.exams)).toBe(true);
    expect(m.exams).toHaveLength(0);
    expect(m.streak.current).toBe(3);
    expect(m.quizzes.a).toBeDefined();
  });

  it("keeps valid exam entries and drops corrupt ones", () => {
    const m = migrate({ ...base(), exams: [goodExam, { junk: 1 }, null, { id: 5, score: "x" }] });
    expect(m.exams).toHaveLength(1);
    expect(m.exams[0].id).toBe("mock-1");
  });

  it("caps exam history at MAX_EXAM_HISTORY", () => {
    const many = Array.from({ length: MAX_EXAM_HISTORY + 25 }, (_, i) => ({ ...goodExam, id: `m-${i}` }));
    const m = migrate({ ...base(), exams: many });
    expect(m.exams).toHaveLength(MAX_EXAM_HISTORY);
  });

  it("falls back to defaults for garbage input", () => {
    const m = migrate("nope" as unknown);
    expect(m.schemaVersion).toBe(CURRENT_VERSION);
    expect(m.exams).toHaveLength(0);
    expect(m.quizzes).toEqual({});
  });

  it("backfills tutorLog and filters corrupt entries", () => {
    const good = { id: "s-1", at: "t", slug: "s", question: "what?", mode: "llm", sourceSlugs: [] };
    const v3NoTutor = migrate({ ...base() }); // no tutorLog key at all
    expect(v3NoTutor.tutorLog).toEqual([]);
    const mixed = migrate({ ...base(), tutorLog: [good, null, { id: 5 }, { question: "no id" }] });
    expect(mixed.tutorLog).toHaveLength(1);
    expect(mixed.tutorLog[0].id).toBe("s-1");
  });

  it("defaultProgress is a clean current-version shape", () => {
    const d = defaultProgress();
    expect(d.schemaVersion).toBe(CURRENT_VERSION);
    expect(d.exams).toEqual([]);
    expect(d.tutorLog).toEqual([]);
    expect(d.userId).toBeNull();
  });
});

function base() {
  return { schemaVersion: 3, userId: null, quizzes: {}, review: {}, streak: {}, tz: "", lastSession: null, updatedAt: "x" };
}
