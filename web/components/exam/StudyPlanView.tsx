"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useProgress } from "@/lib/progress/useProgress";
import { PASS_SCORE } from "@/lib/progress/schema";
import { computeReadiness } from "@/lib/exam/readiness";
import { buildStudyPlan, type StudyLesson, type StudyStep } from "@/lib/exam/studyPlan";
import type { ExamLessonRef } from "@/lib/exam/lessonFunctions";

/**
 * Renders the personalized study plan: the readiness gaps turned into an ordered
 * queue of lessons to study and drills to take. Computed client-side from
 * persisted progress (exam history + quiz mastery), gated on hydration.
 */
export function StudyPlanView({ examLessons }: { examLessons: ExamLessonRef[] }) {
  const { progress, hydrated } = useProgress();

  const plan = useMemo(() => {
    const readiness = computeReadiness(progress.exams);
    const lessons: StudyLesson[] = examLessons.map((l) => ({
      slug: l.slug,
      title: l.title,
      moduleTitle: l.moduleTitle,
      fnTag: l.fnTag,
      done: (progress.quizzes[l.slug]?.bestScore ?? 0) >= PASS_SCORE,
    }));
    const asked = new Set(progress.tutorLog.map((t) => t.slug));
    return buildStudyPlan(readiness, lessons, asked);
  }, [progress.exams, progress.quizzes, progress.tutorLog, examLessons]);

  if (!hydrated) {
    return <p className="mt-8 text-sm text-faint">Loading your plan…</p>;
  }

  if (plan.ready) {
    return (
      <div className="mt-8 rounded-lg border border-up/40 bg-up/10 p-5">
        <p className="text-sm font-medium text-up">Exam-ready</p>
        <p className="mt-1 text-sm text-muted">{plan.summary}</p>
        <Link
          href="/exam"
          className="mt-4 inline-block rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Take a full mock →
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-muted">{plan.summary}</p>

      {plan.steps.length === 0 ? (
        <p className="mt-4 text-sm text-faint">
          No outstanding steps — nice work.{" "}
          <Link href="/exam" className="text-learn hover:opacity-80">
            Take a practice exam →
          </Link>
        </p>
      ) : (
        <ol className="mt-4 space-y-2">
          {plan.steps.map((step, i) => (
            <StepRow key={stepKey(step)} step={step} n={i + 1} />
          ))}
        </ol>
      )}
    </div>
  );
}

function stepKey(step: StudyStep): string {
  return step.kind === "lesson" ? `l:${step.slug}` : `d:${step.modeId}`;
}

function StepRow({ step, n }: { step: StudyStep; n: number }) {
  const href = step.kind === "lesson" ? `/learn/${step.slug}` : `/exam?start=${step.modeId}`;
  const isDrill = step.kind === "drill";

  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-lg border border-strong bg-surface p-3 transition hover:border-learn/50 hover:bg-surface-2"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-2 font-mono text-xs text-muted">
          {n}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm text-ink">
            {isDrill ? `Drill: ${step.fnLabel}` : step.title}
          </span>
          <span className="block truncate text-xs text-faint">
            {isDrill ? (
              <>
                <span className="font-mono">{step.fnCode}</span> · 20-question timed drill
              </>
            ) : step.revisit ? (
              <>
                You asked about this · {step.moduleTitle}
              </>
            ) : (
              <>
                {step.moduleTitle} · strengthen <span className="font-mono">{step.fnCode}</span>
              </>
            )}
          </span>
        </span>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${
            isDrill ? "border-learn/50 text-learn" : step.kind === "lesson" && step.revisit ? "border-streak/50 text-streak" : "border-strong text-muted"
          }`}
        >
          {isDrill ? "test" : step.kind === "lesson" && step.revisit ? "revisit" : "learn"}
        </span>
      </Link>
    </li>
  );
}
