"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { loadProgress, saveProgress } from "@/lib/progress/storage";
import { defaultProgress, PASS_SCORE, type Progress, type QuizProgress } from "@/lib/progress/schema";
import { grade, newItem, todayInTz } from "@/lib/review/schedule";
import { completeSession } from "@/lib/progress/streak";

interface ProgressContextValue {
  progress: Progress;
  /**
   * False until the real localStorage value has loaded after mount. SSR and the
   * first client render both use `defaultProgress()` so they match exactly; gate
   * any progress-dependent UI on this flag to avoid a hydration mismatch.
   */
  hydrated: boolean;
  /** Record a finished quiz attempt for a lesson. `score` is the fraction correct (0..1). */
  recordQuizAttempt: (lessonSlug: string, score: number) => void;
  /** Record one answer to a question into the spaced-repetition schedule. */
  recordReview: (questionId: string, correct: boolean) => void;
  /** Count today as a training day for the streak, without marking the daily review done. */
  markActiveToday: () => void;
  /** Mark today's daily review session complete (advances the streak AND the review). */
  completeDailySession: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

function resolvedTz(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  // Load the persisted value once, after mount (never during render/SSR).
  // Stamp the local tz on first load so "today" is computed on the right calendar day.
  useEffect(() => {
    const loaded = loadProgress();
    if (!loaded.tz) loaded.tz = resolvedTz();
    setProgress(loaded);
    setHydrated(true);
  }, []);

  // Persist on change — but not the pre-hydration default, which would clobber
  // real saved progress with an empty object on first paint.
  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

  // Avoid recording against the empty default before load completes.
  const hydratedRef = useRef(hydrated);
  hydratedRef.current = hydrated;

  const recordQuizAttempt = useCallback((lessonSlug: string, score: number) => {
    if (!hydratedRef.current) return;
    const now = new Date().toISOString();
    setProgress((prev) => {
      const prior = prev.quizzes[lessonSlug];
      const passNow = score >= PASS_SCORE;
      const next: QuizProgress = {
        bestScore: Math.max(prior?.bestScore ?? 0, score),
        lastScore: score,
        attempts: (prior?.attempts ?? 0) + 1,
        lastAt: now,
        passedAt: prior?.passedAt ?? (passNow ? now : null),
      };
      return { ...prev, quizzes: { ...prev.quizzes, [lessonSlug]: next }, updatedAt: now };
    });
  }, []);

  const recordReview = useCallback((questionId: string, correct: boolean) => {
    if (!hydratedRef.current) return;
    setProgress((prev) => {
      const tz = prev.tz || resolvedTz();
      const today = todayInTz(tz);
      const existing = prev.review[questionId] ?? newItem(today);
      const updated = grade(existing, correct, today);
      return {
        ...prev,
        tz,
        review: { ...prev.review, [questionId]: updated },
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  const markActiveToday = useCallback(() => {
    if (!hydratedRef.current) return;
    setProgress((prev) => {
      const tz = prev.tz || resolvedTz();
      const today = todayInTz(tz);
      const streak = completeSession(prev.streak, today);
      if (streak === prev.streak) return prev; // already counted today — no-op
      return { ...prev, tz, streak, updatedAt: new Date().toISOString() };
    });
  }, []);

  const completeDailySession = useCallback(() => {
    if (!hydratedRef.current) return;
    setProgress((prev) => {
      const tz = prev.tz || resolvedTz();
      const today = todayInTz(tz);
      return {
        ...prev,
        tz,
        streak: completeSession(prev.streak, today),
        lastSession: today,
        updatedAt: new Date().toISOString(),
      };
    });
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        hydrated,
        recordQuizAttempt,
        recordReview,
        markActiveToday,
        completeDailySession,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
  return ctx;
}
