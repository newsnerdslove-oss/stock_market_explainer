"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Question } from "@/lib/quiz/types";
import { useProgress } from "@/lib/progress/useProgress";
import { examModeById, MINUTES_PER_QUESTION, questionFunction } from "@/lib/exam/blueprint";
import { selectExamQuestions, type SelectedExam } from "@/lib/exam/select";
import { scoreExam, type ExamResult } from "@/lib/exam/score";
import { ExamSetup, type Availability } from "@/components/exam/ExamSetup";
import { ExamRunner } from "@/components/exam/ExamRunner";
import { ExamResults } from "@/components/exam/ExamResults";

type Phase = "setup" | "running" | "results";

/**
 * Orchestrates the exam engine's three phases — pick a mode (ExamSetup) → take
 * the timed exam (ExamRunner) → see the per-function results (ExamResults) —
 * over the full question bank handed down from the server page. Selection and
 * grading happen client-side; each answered question is also fed into the
 * spaced-repetition schedule and counts as training today.
 */
export function ExamApp({ allQuestions }: { allQuestions: Question[] }) {
  const { progress, hydrated, recordReview, recordExam, markActiveToday } = useProgress();
  const [phase, setPhase] = useState<Phase>("setup");
  const [exam, setExam] = useState<SelectedExam | null>(null);
  const [modeId, setModeId] = useState<string>("");
  const [result, setResult] = useState<ExamResult | null>(null);
  // Guards against a double-submit race (timer hitting 0 and the button firing
  // in the same tick would otherwise grade — and record reviews — twice).
  const submittedRef = useRef(false);

  // Exam-eligible bank size per function (fn-tagged choice questions).
  const availability = useMemo<Availability>(() => {
    const counts: Availability = {};
    for (const q of allQuestions) {
      const fn = questionFunction(q);
      if (fn) counts[fn] = (counts[fn] ?? 0) + 1;
    }
    return counts;
  }, [allQuestions]);

  function start(modeId: string) {
    const mode = examModeById[modeId];
    if (!mode) return;
    const selected = selectExamQuestions(mode, allQuestions); // Math.random — on user action only
    if (selected.questions.length === 0) return;
    submittedRef.current = false;
    setModeId(modeId);
    setExam(selected);
    setResult(null);
    setPhase("running");
  }

  function submit(answers: Record<string, string>) {
    if (!exam || submittedRef.current) return;
    submittedRef.current = true;
    const res = scoreExam(exam.questions, answers);
    // Feed every answered question into the Leitner schedule, and bank a streak day.
    const missed = new Set(res.missed.map((m) => m.question.id));
    for (const q of exam.questions) recordReview(q.id, !missed.has(q.id));
    markActiveToday();
    // Persist the attempt to exam history (newest-first, capped).
    const at = new Date().toISOString();
    recordExam({
      id: `${modeId}-${at}`,
      mode: modeId,
      at,
      score: res.score,
      correct: res.correct,
      total: res.total,
      passed: res.passed,
      byFunction: Object.fromEntries(
        res.byFunction.map((f) => [f.tag, { correct: f.correct, total: f.total }]),
      ),
    });
    setResult(res);
    setPhase("results");
  }

  // One-click drill links from the study plan: /exam?start=drill-fnN auto-starts
  // that mode once, client-side after hydration (selection uses Math.random, so
  // it must not run during SSR/render).
  const autoStartedRef = useRef(false);
  useEffect(() => {
    if (!hydrated || autoStartedRef.current) return;
    autoStartedRef.current = true;
    const startId = new URLSearchParams(window.location.search).get("start");
    if (startId && examModeById[startId]) start(startId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  const minutes = exam ? Math.round(exam.questions.length * MINUTES_PER_QUESTION) : 0;

  if (phase === "running" && exam) {
    return (
      <ExamRunner
        questions={exam.questions}
        minutes={minutes}
        onSubmit={submit}
        onQuit={() => setPhase("setup")}
      />
    );
  }

  if (phase === "results" && result) {
    return (
      <ExamResults result={result} onRetry={() => setPhase("setup")} onExit={() => setPhase("setup")} />
    );
  }

  return (
    <ExamSetup
      availability={availability}
      exams={hydrated ? progress.exams : []}
      onStart={start}
    />
  );
}
