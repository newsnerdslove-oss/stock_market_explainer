// Learner progress — the single source of truth for what someone has done.
//
// One versioned top-level object so reads/writes are atomic, migration has one
// entry point, and the whole thing is one payload to POST to the server on first
// login (Phase 3). The collections are keyed `Record`s — i.e. "rows by primary
// key" — so mapping them to Supabase tables later is an `Object.entries()` loop,
// not a redesign. v2 (Phase 2b) adds `review` (Leitner spaced repetition),
// `streak`, and `tz`; this file is the one place that knows the shape.

export const CURRENT_VERSION = 2;

/** Mastery thresholds (fractions of the quiz answered correctly). */
export const PASS_SCORE = 0.8;
export const MASTERY_SCORE = 0.9;

/** Front-loaded streak freezes (missed days a streak can survive). Capped here. */
export const MAX_FREEZES = 2;

/** Result state for one lesson's quiz. Keyed by lessonSlug in `quizzes`. */
export interface QuizProgress {
  /** Best fraction correct ever achieved, 0..1. Drives unlock + mastery. */
  bestScore: number;
  /** Most recent attempt's fraction correct, 0..1. */
  lastScore: number;
  /** Total attempts taken. */
  attempts: number;
  /** ISO timestamp of the most recent attempt. */
  lastAt: string;
  /** ISO timestamp of the first passing attempt, or null if never passed. */
  passedAt: string | null;
}

/** Leitner spaced-repetition state for one question. Keyed by question id in `review`. */
export interface ReviewItem {
  /** Leitner box 1..5; higher = longer interval. */
  box: number;
  /** Local-calendar date (YYYY-MM-DD) the item next becomes due. */
  due: string;
  /** Local date last reviewed, or null if only just created. */
  last: string | null;
  /** Total times reviewed. */
  reps: number;
  /** Total times answered wrong (surfaces chronically-weak items). */
  lapses: number;
}

export interface StreakState {
  /** Current consecutive-day streak. */
  current: number;
  /** Best streak ever reached. */
  longest: number;
  /** Local date (YYYY-MM-DD) of the last completed daily session, or null. */
  lastActiveDate: string | null;
  /** Remaining streak freezes (0..MAX_FREEZES). */
  freezes: number;
}

export interface Progress {
  schemaVersion: number;
  /** null while a guest; set on login — the join key for the server merge. */
  userId: string | null;
  /** Per-lesson quiz results, keyed by lessonSlug. */
  quizzes: Record<string, QuizProgress>;
  /** Per-question spaced-repetition state, keyed by question id. */
  review: Record<string, ReviewItem>;
  streak: StreakState;
  /** IANA time zone, so "today" is computed on the learner's local calendar day. */
  tz: string;
  /** Local date of the last completed daily review session, or null. */
  lastSession: string | null;
  /** ISO timestamp of the last mutation — the last-write-wins merge key. */
  updatedAt: string;
}

export function defaultStreak(): StreakState {
  return { current: 0, longest: 0, lastActiveDate: null, freezes: MAX_FREEZES };
}

export function defaultProgress(): Progress {
  return {
    schemaVersion: CURRENT_VERSION,
    userId: null,
    quizzes: {},
    review: {},
    streak: defaultStreak(),
    tz: "",
    lastSession: null,
    updatedAt: "1970-01-01T00:00:00.000Z",
  };
}

/**
 * Bring any persisted blob up to the current shape. Spreading over
 * `defaultProgress()` backfills missing fields, so partial/corrupt data — and a
 * v1 blob that predates `review`/`streak` — degrades to sane defaults instead of
 * crashing. Nested record/object fields are merged field-by-field so a missing
 * or non-object value falls back rather than wiping the default.
 */
export function migrate(raw: unknown): Progress {
  const base = defaultProgress();
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return base;
  const s = raw as Record<string, unknown>;
  const obj = <T,>(v: unknown, fallback: T): T =>
    v && typeof v === "object" && !Array.isArray(v) ? { ...fallback, ...(v as object) } : fallback;
  const str = (v: unknown, fallback: string): string => (typeof v === "string" ? v : fallback);
  const strOrNull = (v: unknown): string | null => (typeof v === "string" ? v : null);
  // Construct explicitly (rather than spreading `s`) so unknown or wrong-typed
  // fields from corrupt/tampered storage can't leak into Progress.
  return {
    schemaVersion: CURRENT_VERSION,
    userId: strOrNull(s.userId),
    quizzes: obj(s.quizzes, base.quizzes),
    review: obj(s.review, base.review),
    streak: obj(s.streak, base.streak),
    tz: str(s.tz, base.tz),
    lastSession: strOrNull(s.lastSession),
    updatedAt: str(s.updatedAt, base.updatedAt),
  };
}
