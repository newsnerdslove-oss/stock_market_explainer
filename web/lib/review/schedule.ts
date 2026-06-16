// Leitner spaced-repetition scheduling for the daily review.
//
// Per-question state (a `ReviewItem`): correct → promote a box (longer interval),
// wrong → back to box 1. Binary right/wrong is exactly what a multiple-choice
// quiz produces, which is why Leitner fits here and SM-2/FSRS don't yet (they
// want a graded rating + a review-log history we won't have until Supabase).
// All dates are local-calendar `YYYY-MM-DD` strings so a due date never drifts
// by a timezone off-by-one.

import type { ReviewItem } from "@/lib/progress/schema";

/** Box → days until due. Classic Leitner spacing. */
export const BOX_INTERVALS: Record<number, number> = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
export const MAX_BOX = 5;

/** The learner's local calendar date (YYYY-MM-DD) in the given IANA tz. */
export function todayInTz(tz: string): string {
  try {
    // en-CA formats as YYYY-MM-DD; timeZone pins it to the local calendar day.
    return new Intl.DateTimeFormat("en-CA", { timeZone: tz || undefined }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat("en-CA").format(new Date());
  }
}

/** Add `n` days to a YYYY-MM-DD date. Parsed at UTC noon to dodge DST edges. */
export function addDays(date: string, n: number): string {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** Whole days from `a` to `b` (both YYYY-MM-DD); negative if b precedes a. */
export function daysBetween(a: string, b: string): number {
  const da = new Date(`${a}T12:00:00Z`).getTime();
  const db = new Date(`${b}T12:00:00Z`).getTime();
  return Math.round((db - da) / 86_400_000);
}

/** A brand-new item: box 1, due today (so it can be reviewed immediately). */
export function newItem(today: string): ReviewItem {
  return { box: 1, due: today, last: null, reps: 0, lapses: 0 };
}

/** Apply an answer: correct promotes a box, wrong resets to box 1. */
export function grade(item: ReviewItem, correct: boolean, today: string): ReviewItem {
  const box = correct ? Math.min(item.box + 1, MAX_BOX) : 1;
  return {
    box,
    due: addDays(today, BOX_INTERVALS[box]),
    last: today,
    reps: item.reps + 1,
    lapses: item.lapses + (correct ? 0 : 1),
  };
}

export function isDue(item: ReviewItem, today: string): boolean {
  return item.due <= today;
}

/**
 * Pick the day's review questions from items the learner has seen.
 * Priority: due items (weakest box first, then longest-unseen) → up to `maxNew`
 * brand-new questions from `bank` → nearest-future items to top up to `n`.
 * `bank` is the set of candidate question ids; pass only seen ids (and maxNew=0)
 * to keep the daily review as reinforcement rather than introducing new material.
 */
export function pickDaily(
  review: Record<string, ReviewItem>,
  bank: string[],
  today: string,
  n = 5,
  maxNew = 0,
  fillFuture = false,
): string[] {
  const inBank = new Set(bank);
  const seen = new Set(Object.keys(review).filter((q) => inBank.has(q)));

  const due = [...seen]
    .filter((q) => isDue(review[q], today))
    .sort((a, b) => review[a].box - review[b].box || (review[a].last ?? "").localeCompare(review[b].last ?? ""));

  const fresh = bank.filter((q) => !review[q]).slice(0, Math.max(0, maxNew));

  const chosen = [...due, ...fresh];
  // Optional: when there aren't enough due/new items, pull the soonest-future
  // reviews forward. Off by default for the daily hub, where "nothing due" should
  // read as "caught up" rather than forcing early reviews that erode spacing.
  if (fillFuture && chosen.length < n) {
    const future = [...seen]
      .filter((q) => !isDue(review[q], today))
      .sort((a, b) => review[a].due.localeCompare(review[b].due));
    chosen.push(...future);
  }
  return [...new Set(chosen)].slice(0, n); // dedup in case an id appears in more than one source
}

/** How many seen items are due today — the recurring "N cards due" signal. */
export function dueCount(review: Record<string, ReviewItem>, today: string): number {
  return Object.values(review).filter((i) => isDue(i, today)).length;
}
