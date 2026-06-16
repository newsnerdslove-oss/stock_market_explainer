// Question bank model for Test + Quiz progression (Phase 2a).
//
// Authored as plain typed data, exactly like lessons (see lib/lessons/types.ts):
// trivial to write now, and each Question maps cleanly to a future Postgres/
// Supabase row (shared fields → columns, variant fields → JSONB) without a
// reshape. Question prompts/choices support the lesson inline syntax
// (**bold**, *italic*, `code`) rendered by the same helper the LessonRenderer uses.
//
// Phase 2a authors only the MCQ types (`single`, `numericChoice`). The remaining
// variants are defined now so the union is stable, but are intentionally not yet
// authored — adding them later is content, not a schema change.

import type { ChartKind } from "@/lib/lessons/types";

export type Difficulty = "easy" | "medium" | "hard";

/** One selectable option. `feedback` explains why a wrong pick is wrong. */
export interface Choice {
  /** Stable within its question, e.g. "a" | "b" | "c" | "d". */
  id: string;
  text: string;
  feedback?: string;
}

/** Fields every question shares — these become table columns later. */
interface QuestionBase {
  /** Globally unique, stable id. Convention: `<lessonSlug>.q<n>` (becomes the PK). */
  id: string;
  /** FK to Lesson.slug — ties the question to the lesson/topic it tests. */
  lessonSlug: string;
  /** The stem. Inline syntax allowed. */
  prompt: string;
  /** Shown after answering — the single highest-leverage field. Inline syntax allowed. */
  explanation: string;
  difficulty: Difficulty;
  /** Cross-cutting topics for variety/grouping, e.g. ["candlesticks","reversal"]. */
  tags?: string[];
  /** Defaults to 1 when scoring. */
  points?: number;
}

/** Single-answer multiple choice — the Phase-2a workhorse. */
export interface SingleChoiceQuestion extends QuestionBase {
  type: "single";
  choices: Choice[];
  correctId: string;
}

/** Calculation delivered as MCQ (Series-7 style: pick the right number). */
export interface NumericChoiceQuestion extends QuestionBase {
  type: "numericChoice";
  choices: Choice[];
  correctId: string;
  /** Display hint only, e.g. "$" | "%". */
  unit?: string;
}

// ── Variants defined for forward-compatibility; not authored in Phase 2a ──

/** Chart/candlestick identification — reuses the lessons' chart registry. */
export interface ChartQuestion extends QuestionBase {
  type: "chart";
  chartKind: ChartKind;
  /** e.g. an OHLC array the renderer draws — keeps items programmatically generable. */
  chartData?: unknown;
  choices: Choice[];
  correctId: string;
}

/** Free-entry numeric with tolerance/range (for deliberate calc drills). */
export interface NumericInputQuestion extends QuestionBase {
  type: "numericInput";
  answer: number;
  /** |input − answer| ≤ tolerance. */
  tolerance?: number;
  /** OR min ≤ input ≤ max. */
  range?: [number, number];
  unit?: string;
}

/** Multi-select with a partial-credit policy (not exam-aligned; later). */
export interface MultiSelectQuestion extends QuestionBase {
  type: "multi";
  choices: Choice[];
  correctIds: string[];
  scoring?: "allOrNothing" | "fraction" | "penalty";
}

/** True/false. Schema-complete; the weakest format, so not a primary type. */
export interface TrueFalseQuestion extends QuestionBase {
  type: "boolean";
  correct: boolean;
}

export type Question =
  | SingleChoiceQuestion
  | NumericChoiceQuestion
  | ChartQuestion
  | NumericInputQuestion
  | MultiSelectQuestion
  | TrueFalseQuestion;

/** The single-answer, choice-based types the Phase-2a quiz UI renders. */
export type ChoiceQuestion = SingleChoiceQuestion | NumericChoiceQuestion | ChartQuestion;

export function isChoiceQuestion(q: Question): q is ChoiceQuestion {
  return q.type === "single" || q.type === "numericChoice" || q.type === "chart";
}
