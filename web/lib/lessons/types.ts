// Lesson content model for the Learn MVP (Phase 1).
//
// Lessons are plain typed data so they're trivial to author now and easy to
// move into Supabase later (each Lesson maps to a row; `sections` becomes JSON).
// See docs/CURRICULUM.md for the content ladder these levels refer to.

import type { ModuleId } from "@/lib/lessons/taxonomy";

/** Identifiers for built-in chart explainers the renderer knows how to draw. */
export type ChartKind = "candle-anatomy";

/** Visual tone for a callout box. */
export type CalloutTone = "info" | "tip" | "warn";

/**
 * A single block within a lesson. Text bodies support a tiny inline syntax:
 *   **bold**  and  `code`.
 */
export type Section =
  | { type: "text"; body: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone?: CalloutTone; body: string }
  | { type: "chart"; kind: ChartKind; caption?: string }
  | { type: "keyTerms"; terms: { term: string; def: string }[] };

export interface Lesson {
  /** URL-safe id, used as /learn/[slug]. */
  slug: string;
  title: string;
  /** Curriculum level 1-5 (see docs/CURRICULUM.md). */
  level: number;
  /** FK → Module.id (taxonomy.ts). The track is derived via moduleById. */
  moduleId: ModuleId;
  /** Order within the module (used for sequencing and gating). */
  moduleOrder: number;
  /** One-sentence hook shown in the lesson list. */
  summary: string;
  /** Rough read time in minutes. */
  estMinutes: number;
  sections: Section[];
}
