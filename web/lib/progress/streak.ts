// Streak mechanics for the daily training habit. Deliberately gentle (research:
// a low bar beats an intense one for retention): one completed session a day
// extends the streak, missed days are absorbed by a small pool of freezes before
// the streak resets — no pay-to-restore, no dark patterns.

import { MAX_FREEZES, type StreakState } from "@/lib/progress/schema";
import { daysBetween } from "@/lib/review/schedule";

/**
 * Fold "the learner completed a session today" into the streak.
 * - Same day already counted → unchanged (one session/day is enough).
 * - Consecutive day → +1.
 * - Gap → spend one freeze per missed day; if freezes can't cover it, reset to 1.
 */
export function completeSession(streak: StreakState, today: string): StreakState {
  if (streak.lastActiveDate === today) return streak; // already done today

  let current: number;
  let freezes = streak.freezes;

  if (streak.lastActiveDate === null) {
    current = 1; // first session ever
  } else {
    const gap = daysBetween(streak.lastActiveDate, today);
    if (gap <= 0) {
      return streak; // anomalous: last session is "today or later" (clock/tz moved back) — don't advance
    } else if (gap === 1) {
      current = streak.current + 1; // consecutive day
    } else {
      const missed = gap - 1;
      if (freezes >= missed) {
        freezes -= missed; // freezes absorb the gap; streak survives
        current = streak.current + 1;
      } else {
        current = 1; // gap too big — streak resets
      }
    }
  }

  return {
    current,
    longest: Math.max(streak.longest, current),
    lastActiveDate: today,
    freezes: Math.min(MAX_FREEZES, freezes),
  };
}
