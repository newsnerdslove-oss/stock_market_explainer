// Module-aware progression. Wraps the per-lesson `computeProgression` (the linear
// ladder) once per module, then applies a thin module-to-module gate: a module
// unlocks when the previous *non-empty* module in the same track is fully passed.
// Tracks are independent. Nothing here is persisted — it's all derived from quiz
// results + the taxonomy, so it can't drift (same guarantee as progression.ts).

import type { Progress } from "@/lib/progress/schema";
import { computeProgression, type LessonStatus } from "@/lib/progress/progression";
import { MODULES, TRACKS, type ModuleId, type TrackId } from "@/lib/lessons/taxonomy";

export interface CurriculumLesson {
  slug: string;
  moduleId: ModuleId;
  moduleOrder: number;
  /** Whether the lesson has a quiz. Defaults to true; a quiz-less lesson can't gate. */
  hasQuiz?: boolean;
}

export interface ModuleGroup {
  moduleId: ModuleId;
  title: string;
  level: number;
  /** Reachable yet? (first non-empty module in track, or prior module fully passed). */
  unlocked: boolean;
  /** Lesson statuses in module order. When the module is locked, all are locked. */
  lessons: LessonStatus[];
  passed: number;
  total: number;
  mastered: number;
}

export interface TrackGroup {
  trackId: TrackId;
  title: string;
  modules: ModuleGroup[];
}

/**
 * Curriculum status grouped track → module → lesson. Only modules that contain at
 * least one of the given lessons are included (empty modules don't render or gate).
 */
export function computeCurriculum(lessons: CurriculumLesson[], progress: Progress): TrackGroup[] {
  const byModule = new Map<ModuleId, CurriculumLesson[]>();
  for (const l of lessons) {
    const arr = byModule.get(l.moduleId);
    if (arr) arr.push(l);
    else byModule.set(l.moduleId, [l]);
  }

  const tracks: TrackGroup[] = [];
  for (const track of [...TRACKS].sort((a, b) => a.order - b.order)) {
    const mods = MODULES.filter((m) => m.trackId === track.id && byModule.has(m.id)).sort(
      (a, b) => a.order - b.order,
    );
    if (mods.length === 0) continue;

    const moduleGroups: ModuleGroup[] = [];
    let prevModulePassed: boolean = true; // the first non-empty module in a track is open
    for (const mod of mods) {
      const moduleLessons = (byModule.get(mod.id) ?? [])
        .slice()
        .sort((a, b) => a.moduleOrder - b.moduleOrder);
      const statuses = computeProgression(moduleLessons, progress);
      const unlocked: boolean = prevModulePassed;
      const lessons = unlocked ? statuses : statuses.map((s) => ({ ...s, unlocked: false }));

      // The module gates the next one only if it's reachable AND every gating
      // (quiz-bearing) lesson in it is passed.
      const gating = moduleLessons.filter((l) => l.hasQuiz !== false);
      const modulePassed: boolean =
        unlocked && gating.every((l) => statuses.find((s) => s.slug === l.slug)?.passed === true);

      moduleGroups.push({
        moduleId: mod.id,
        title: mod.title,
        level: mod.level,
        unlocked,
        lessons,
        passed: statuses.filter((s) => s.passed).length,
        total: statuses.length,
        mastered: statuses.filter((s) => s.mastered).length,
      });
      prevModulePassed = modulePassed;
    }
    tracks.push({ trackId: track.id, title: track.title, modules: moduleGroups });
  }
  return tracks;
}

export interface CurriculumSummary {
  total: number;
  passed: number;
  mastered: number;
}

export function summarizeCurriculum(tracks: TrackGroup[]): CurriculumSummary {
  let total = 0;
  let passed = 0;
  let mastered = 0;
  for (const t of tracks) {
    for (const m of t.modules) {
      total += m.total;
      passed += m.passed;
      mastered += m.mastered;
    }
  }
  return { total, passed, mastered };
}
