// Learner progress — the single source of truth for what someone has done.
//
// One versioned top-level object so reads/writes are atomic, migration has one
// entry point, and the whole thing is one payload to POST to the server on first
// login (Phase 3). The collections are keyed `Record`s — i.e. "rows by primary
// key" — so mapping them to Supabase tables later is an `Object.entries()` loop,
// not a redesign. Phase 2b adds `review` (Leitner) and `streak` here behind a
// schema-version bump; this file is the one place that knows the shape.

export const CURRENT_VERSION = 1;

/** Mastery thresholds (fractions of the quiz answered correctly). */
export const PASS_SCORE = 0.8;
export const MASTERY_SCORE = 0.9;

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

export interface Progress {
  schemaVersion: number;
  /** null while a guest; set on login — the join key for the server merge. */
  userId: string | null;
  /** Per-lesson quiz results, keyed by lessonSlug. */
  quizzes: Record<string, QuizProgress>;
  /** ISO timestamp of the last mutation — the last-write-wins merge key. */
  updatedAt: string;
}

export function defaultProgress(): Progress {
  return {
    schemaVersion: CURRENT_VERSION,
    userId: null,
    quizzes: {},
    updatedAt: "1970-01-01T00:00:00.000Z",
  };
}

/**
 * Bring any persisted blob up to the current shape. Spreading over
 * `defaultProgress()` backfills missing fields, so partial/corrupt data degrades
 * to sane defaults instead of crashing. Add a branch per version as the shape
 * evolves (e.g. v1 → v2 introduces `review`/`streak` for Phase 2b).
 */
export function migrate(raw: unknown): Progress {
  const base = defaultProgress();
  if (!raw || typeof raw !== "object") return base;
  const s = raw as Partial<Progress>;
  // (no historical versions yet — future: if (s.schemaVersion === 1) s = v1_to_v2(s))
  return {
    ...base,
    ...s,
    quizzes: { ...base.quizzes, ...(s.quizzes ?? {}) },
    schemaVersion: CURRENT_VERSION,
  };
}
