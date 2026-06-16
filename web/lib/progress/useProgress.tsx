"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { loadProgress, saveProgress } from "@/lib/progress/storage";
import { defaultProgress, PASS_SCORE, type Progress, type QuizProgress } from "@/lib/progress/schema";

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
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  // Load the persisted value once, after mount (never during render/SSR).
  useEffect(() => {
    setProgress(loadProgress());
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
      return {
        ...prev,
        quizzes: { ...prev.quizzes, [lessonSlug]: next },
        updatedAt: now,
      };
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, hydrated, recordQuizAttempt }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within a ProgressProvider");
  return ctx;
}
