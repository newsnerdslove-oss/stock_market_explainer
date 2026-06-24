"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { loadProgress, saveProgress } from "@/lib/progress/storage";
import { defaultProgress, MAX_EXAM_HISTORY, MAX_TUTOR_LOG, PASS_SCORE, type ExamAttempt, type Progress, type QuizProgress, type TutorQuery } from "@/lib/progress/schema";
import { grade, newItem, todayInTz } from "@/lib/review/schedule";
import { completeSession } from "@/lib/progress/streak";
import { createClient, supabaseConfigured } from "@/lib/supabase/client";
import { ensureSession, hasData, loadServerProgress, saveServerProgress } from "@/lib/progress/serverSync";
import type { SupabaseClient } from "@supabase/supabase-js";

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
  /** Record a completed practice-exam attempt (stored newest-first, capped). */
  recordExam: (attempt: ExamAttempt) => void;
  /** Record a tutor question that was asked (stored newest-first, capped). */
  recordTutorQuery: (query: TutorQuery) => void;
  /** Grant XP under an idempotency key (e.g. "qotd:2026-06-24") — a repeated key is a no-op. */
  awardXp: (key: string, amount: number) => void;
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

  // ── Server persistence (Phase 3) ──────────────────────────────────────────
  // Layered UNDER localStorage: localStorage stays the instant/offline cache;
  // Supabase is the durable per-user store. Anonymous sign-in gives a real
  // user_id so progress is theirs from the first quiz (no guest->authed merge).
  const [serverReady, setServerReady] = useState(false);
  const supabaseRef = useRef<SupabaseClient | null>(null);
  const userIdRef = useRef<string | null>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    if (!hydrated || !supabaseConfigured()) return; // localStorage-only mode
    const supabase = createClient();
    supabaseRef.current = supabase;
    let cancelled = false;
    let initialSynced = false;

    // Load a user's server progress into state. seedFromLocal=true (first anon
    // session) pushes the guest's localStorage up if the server is empty; false
    // (a login/account switch) loads that account's own data, even if empty.
    const syncForUser = async (uid: string, seedFromLocal: boolean) => {
      userIdRef.current = uid;
      const server = await loadServerProgress(supabase, uid);
      if (cancelled) return;
      if (server && hasData(server)) {
        setProgress(server);
      } else if (seedFromLocal) {
        await saveServerProgress(supabase, uid, { ...progressRef.current, userId: uid });
        if (!cancelled) setProgress((p) => ({ ...p, userId: uid }));
      } else {
        const fresh = defaultProgress();
        fresh.userId = uid;
        fresh.tz = progressRef.current.tz || resolvedTz();
        setProgress(fresh);
      }
    };

    (async () => {
      const uid = await ensureSession(supabase); // anonymous sign-in if no session
      if (cancelled || !uid) return;
      await syncForUser(uid, true);
      if (cancelled) return;
      initialSynced = true;
      setServerReady(true);
    })();

    // React to login / logout / account-claim after the initial sync.
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!initialSynced || cancelled) return; // ignore the initial-session events
      const uid = session?.user?.id;
      if (!uid) {
        // signed out -> drop back to a fresh anonymous guest
        void (async () => {
          const newUid = await ensureSession(supabase);
          if (newUid && !cancelled) await syncForUser(newUid, false);
        })();
      } else if (uid !== userIdRef.current) {
        void syncForUser(uid, false); // logged in as a different (real) account
      }
      // same uid (e.g. claim emits USER_UPDATED) -> data unchanged, no reload
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  // Write-through to the server on every change once synced (best-effort).
  useEffect(() => {
    if (serverReady && supabaseRef.current && userIdRef.current) {
      void saveServerProgress(supabaseRef.current, userIdRef.current, progress);
    }
  }, [progress, serverReady]);

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

  const recordExam = useCallback((attempt: ExamAttempt) => {
    if (!hydratedRef.current) return;
    setProgress((prev) => ({
      ...prev,
      exams: [attempt, ...prev.exams].slice(0, MAX_EXAM_HISTORY),
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const recordTutorQuery = useCallback((query: TutorQuery) => {
    if (!hydratedRef.current) return;
    setProgress((prev) => ({
      ...prev,
      tutorLog: [query, ...prev.tutorLog].slice(0, MAX_TUTOR_LOG),
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const awardXp = useCallback((key: string, amount: number) => {
    if (!hydratedRef.current) return;
    setProgress((prev) => {
      if (prev.xpClaims[key]) return prev; // already granted under this key — no double-count
      return {
        ...prev,
        xp: prev.xp + amount,
        xpClaims: { ...prev.xpClaims, [key]: true },
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
        recordExam,
        recordTutorQuery,
        awardXp,
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
