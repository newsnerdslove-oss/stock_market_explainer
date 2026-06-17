import { describe, it, expect } from "vitest";
import { addDays, daysBetween, newItem, grade, isDue, pickDaily, dueCount, BOX_INTERVALS, MAX_BOX } from "@/lib/review/schedule";
import type { ReviewItem } from "@/lib/progress/schema";

describe("date helpers", () => {
  it("adds days across month boundaries", () => {
    expect(addDays("2026-06-30", 1)).toBe("2026-07-01");
    expect(addDays("2026-01-01", 31)).toBe("2026-02-01");
  });
  it("counts whole days between dates, signed", () => {
    expect(daysBetween("2026-06-01", "2026-06-08")).toBe(7);
    expect(daysBetween("2026-06-08", "2026-06-01")).toBe(-7);
  });
});

describe("Leitner grade", () => {
  const today = "2026-06-17";

  it("starts a new item in box 1 due today", () => {
    const it0 = newItem(today);
    expect(it0.box).toBe(1);
    expect(it0.due).toBe(today);
    expect(isDue(it0, today)).toBe(true);
  });

  it("promotes a box and pushes the due date on a correct answer", () => {
    const after = grade(newItem(today), true, today);
    expect(after.box).toBe(2);
    expect(after.due).toBe(addDays(today, BOX_INTERVALS[2]));
    expect(after.reps).toBe(1);
    expect(after.lapses).toBe(0);
  });

  it("resets to box 1 and counts a lapse on a wrong answer", () => {
    const high: ReviewItem = { box: 4, due: today, last: null, reps: 5, lapses: 1 };
    const after = grade(high, false, today);
    expect(after.box).toBe(1);
    expect(after.lapses).toBe(2);
    expect(after.due).toBe(addDays(today, BOX_INTERVALS[1]));
  });

  it("caps promotion at MAX_BOX", () => {
    const top: ReviewItem = { box: MAX_BOX, due: today, last: null, reps: 9, lapses: 0 };
    expect(grade(top, true, today).box).toBe(MAX_BOX);
  });
});

describe("pickDaily", () => {
  const today = "2026-06-17";

  it("prefers due items, weakest box first", () => {
    const review: Record<string, ReviewItem> = {
      q1: { box: 3, due: today, last: "2026-06-10", reps: 3, lapses: 0 },
      q2: { box: 1, due: today, last: "2026-06-16", reps: 1, lapses: 1 },
      q3: { box: 2, due: "2026-07-01", last: "2026-06-15", reps: 2, lapses: 0 }, // not due
    };
    const picked = pickDaily(review, ["q1", "q2", "q3"], today, 5);
    expect(picked[0]).toBe("q2"); // box 1 before box 3
    expect(picked).not.toContain("q3"); // future item excluded by default
  });

  it("introduces up to maxNew unseen items", () => {
    const picked = pickDaily({}, ["new1", "new2", "new3"], today, 5, 2);
    expect(picked).toHaveLength(2);
  });

  it("counts due items", () => {
    const review: Record<string, ReviewItem> = {
      a: { box: 1, due: today, last: null, reps: 0, lapses: 0 },
      b: { box: 1, due: "2026-07-01", last: null, reps: 0, lapses: 0 },
    };
    expect(dueCount(review, today)).toBe(1);
  });
});
