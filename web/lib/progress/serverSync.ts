// Server persistence for progress, layered UNDER the existing localStorage path.
// Uses the browser Supabase client. Anonymous sign-in gives every visitor a real
// user_id, so their rows are theirs from the first quiz (no guest->authed merge).
// All calls are best-effort: any failure leaves the app on localStorage-only.

import type { SupabaseClient } from "@supabase/supabase-js";
import { defaultProgress, type ExamAttempt, type Progress, type StreakState, type TutorQuery } from "@/lib/progress/schema";

// Dedupe concurrent first-time anonymous sign-ins. Without this, two providers
// mounting together (Progress + Trading on /simulator) each call
// signInAnonymously, creating two anon users and desyncing the session cookie
// from the user_id each provider holds — which then trips RLS (writes 403,
// because auth.uid() != user_id).
let anonInflight: Promise<string | null> | null = null;

/** Get the current user id, creating one shared anonymous session if there isn't one. */
export async function ensureSession(supabase: SupabaseClient): Promise<string | null> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) return session.user.id;
    if (!anonInflight) {
      anonInflight = supabase.auth
        .signInAnonymously()
        .then(({ data, error }) => (error ? null : (data.user?.id ?? null)))
        .finally(() => {
          anonInflight = null;
        });
    }
    return await anonInflight;
  } catch {
    return null;
  }
}

/** Does this progress object hold anything worth treating as the source of truth? */
export function hasData(p: Progress): boolean {
  return (
    Object.keys(p.quizzes).length > 0 ||
    Object.keys(p.review).length > 0 ||
    p.exams.length > 0 ||
    p.tutorLog.length > 0 ||
    p.streak.current > 0 ||
    p.lastSession != null
  );
}

/** Assemble a Progress object from the user's rows, or null on failure. */
export async function loadServerProgress(
  supabase: SupabaseClient,
  userId: string,
): Promise<Progress | null> {
  try {
    const [up, qz, rv, ex, tq] = await Promise.all([
      supabase.from("user_progress").select("schema_version,streak,tz,last_session,updated_at").eq("user_id", userId).maybeSingle(),
      supabase.from("quiz_progress").select("lesson_slug,best_score,last_score,attempts,last_at,passed_at").eq("user_id", userId),
      supabase.from("review_items").select("question_id,box,due,last,reps,lapses").eq("user_id", userId),
      supabase.from("exam_attempts").select("id,mode,at,score,correct,total,passed,by_function").eq("user_id", userId).order("at", { ascending: false }),
      supabase.from("tutor_queries").select("id,at,slug,question,mode,source_slugs").eq("user_id", userId).order("at", { ascending: false }),
    ]);
    if (up.error || qz.error || rv.error || ex.error || tq.error) return null;

    const base = defaultProgress();
    base.userId = userId;
    if (up.data) {
      base.schemaVersion = up.data.schema_version ?? base.schemaVersion;
      base.streak = (up.data.streak as StreakState) ?? base.streak;
      base.tz = up.data.tz ?? base.tz;
      base.lastSession = up.data.last_session ?? null;
      base.updatedAt = up.data.updated_at ?? base.updatedAt;
    }
    for (const r of qz.data ?? []) {
      base.quizzes[r.lesson_slug] = {
        bestScore: r.best_score, lastScore: r.last_score, attempts: r.attempts,
        lastAt: r.last_at, passedAt: r.passed_at,
      };
    }
    for (const r of rv.data ?? []) {
      base.review[r.question_id] = {
        box: r.box, due: r.due, last: r.last, reps: r.reps, lapses: r.lapses,
      };
    }
    base.exams = (ex.data ?? []).map((r) => ({
      id: r.id, mode: r.mode, at: r.at, score: r.score, correct: r.correct,
      total: r.total, passed: r.passed, byFunction: (r.by_function ?? {}) as ExamAttempt["byFunction"],
    }));
    base.tutorLog = (tq.data ?? []).map((r) => ({
      id: r.id, at: r.at, slug: r.slug, question: r.question,
      mode: r.mode as TutorQuery["mode"], sourceSlugs: (r.source_slugs ?? []) as string[],
    }));
    return base;
  } catch {
    return null;
  }
}

/** Write-through the whole progress object to the user's rows (upsert). Best-effort. */
export async function saveServerProgress(
  supabase: SupabaseClient,
  userId: string,
  p: Progress,
): Promise<void> {
  const now = new Date().toISOString();
  try {
    await supabase.from("user_progress").upsert(
      { user_id: userId, schema_version: p.schemaVersion, streak: p.streak, tz: p.tz, last_session: p.lastSession, updated_at: now },
      { onConflict: "user_id" },
    );
    const quizRows = Object.entries(p.quizzes).map(([lesson_slug, q]) => ({
      user_id: userId, lesson_slug, best_score: q.bestScore, last_score: q.lastScore,
      attempts: q.attempts, last_at: q.lastAt, passed_at: q.passedAt, updated_at: now,
    }));
    if (quizRows.length) await supabase.from("quiz_progress").upsert(quizRows, { onConflict: "user_id,lesson_slug" });
    const reviewRows = Object.entries(p.review).map(([question_id, r]) => ({
      user_id: userId, question_id, box: r.box, due: r.due, last: r.last,
      reps: r.reps, lapses: r.lapses, updated_at: now,
    }));
    if (reviewRows.length) await supabase.from("review_items").upsert(reviewRows, { onConflict: "user_id,question_id" });
    const examRows = p.exams.map((e) => ({
      user_id: userId, id: e.id, mode: e.mode, at: e.at, score: e.score,
      correct: e.correct, total: e.total, passed: e.passed, by_function: e.byFunction, updated_at: now,
    }));
    if (examRows.length) await supabase.from("exam_attempts").upsert(examRows, { onConflict: "user_id,id" });
    const tutorRows = p.tutorLog.map((t) => ({
      user_id: userId, id: t.id, at: t.at, slug: t.slug, question: t.question,
      mode: t.mode, source_slugs: t.sourceSlugs, updated_at: now,
    }));
    if (tutorRows.length) await supabase.from("tutor_queries").upsert(tutorRows, { onConflict: "user_id,id" });
  } catch {
    /* best-effort — localStorage remains the cache */
  }
}
