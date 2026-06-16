"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QuestionRunner } from "@/components/QuestionRunner";
import { isChoiceQuestion, type ChoiceQuestion, type Question } from "@/lib/quiz/types";
import { useProgress } from "@/lib/progress/useProgress";
import { isDue, pickDaily, todayInTz } from "@/lib/review/schedule";

const DAILY_TARGET = 5;

export function DailyToday({ allQuestions }: { allQuestions: Question[] }) {
  const { progress, hydrated, recordReview, completeDailySession } = useProgress();
  const [phase, setPhase] = useState<"idle" | "running">("idle");
  // The exact question set for this session, snapshotted when the learner starts.
  const [sessionQs, setSessionQs] = useState<ChoiceQuestion[]>([]);
  const byId = useMemo(
    () => new Map((allQuestions.filter(isChoiceQuestion) as ChoiceQuestion[]).map((q) => [q.id, q])),
    [allQuestions],
  );

  if (!hydrated) {
    return (
      <div className="mt-10 h-40 animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />
    );
  }

  const today = todayInTz(progress.tz);
  // Only consider questions still in the bank, so the "cards due" count and the
  // runnable queue are always derived from the same set (no orphaned-id drift).
  const seenIds = Object.keys(progress.review).filter((id) => byId.has(id));
  const todays = pickDaily(progress.review, seenIds, today, DAILY_TARGET, 0).map((id) => byId.get(id)!);
  const due = seenIds.filter((id) => isDue(progress.review[id], today)).length;
  const doneToday = progress.lastSession === today;

  const start = () => {
    setSessionQs(todays);
    setPhase("running");
  };

  return (
    <>
      <StreakHeader
        current={progress.streak.current}
        longest={progress.streak.longest}
        freezes={progress.streak.freezes}
        due={due}
      />

      <div className="mt-8">
        {seenIds.length === 0 ? (
          <EmptyQueue />
        ) : doneToday || (phase === "idle" && todays.length === 0) ? (
          <DoneToday done={doneToday} />
        ) : phase === "running" ? (
          <section className="rounded-lg border border-learn/30 bg-learn/5 p-5">
            <h2 className="text-sm font-medium text-ink">Today&apos;s review</h2>
            <div className="mt-4">
              <QuestionRunner
                questions={sessionQs}
                onAnswer={(qid, correct) => recordReview(qid, correct)}
                onComplete={() => {
                  completeDailySession();
                  setPhase("idle");
                }}
              />
            </div>
          </section>
        ) : (
          <StartCard count={todays.length} onStart={start} />
        )}
      </div>
    </>
  );
}

function StreakHeader({
  current,
  longest,
  freezes,
  due,
}: {
  current: number;
  longest: number;
  freezes: number;
  due: number;
}) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      <Stat
        value={current === 0 ? "—" : `${current}`}
        label={current === 1 ? "day streak" : "day streak"}
        accent="streak"
        glyph="🔥"
      />
      <Stat value={`${due}`} label={due === 1 ? "card due" : "cards due"} accent="learn" glyph="🗂" />
      <Stat value={longest === 0 ? "—" : `${longest}`} label="best streak" accent="up" glyph="★" />
      {freezes > 0 && (
        <p className="col-span-3 text-center text-xs text-faint">
          ❄️ {freezes} streak freeze{freezes === 1 ? "" : "s"} in reserve — a missed day won&apos;t break your streak.
        </p>
      )}
    </div>
  );
}

const ACCENT: Record<string, string> = {
  streak: "text-streak",
  learn: "text-learn",
  up: "text-up",
};

function Stat({
  value,
  label,
  accent,
  glyph,
}: {
  value: string;
  label: string;
  accent: "streak" | "learn" | "up";
  glyph: string;
}) {
  return (
    <div className="rounded-lg border border-strong bg-surface p-4 text-center">
      <p className={`font-mono text-2xl ${ACCENT[accent]}`}>
        <span aria-hidden className="mr-1 text-base">
          {glyph}
        </span>
        {value}
      </p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

function StartCard({ count, onStart }: { count: number; onStart: () => void }) {
  return (
    <section className="rounded-lg border border-learn/30 bg-learn/5 p-5">
      <h2 className="text-sm font-medium text-ink">Today&apos;s review</h2>
      <p className="mt-2 text-sm text-muted">
        {count} question{count === 1 ? "" : "s"} mixing what you&apos;ve learned — a few minutes to keep it
        sharp and extend your streak.
      </p>
      <div className="mt-4">
        <button
          type="button"
          onClick={onStart}
          className="rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Start review
        </button>
      </div>
    </section>
  );
}

function DoneToday({ done }: { done: boolean }) {
  return (
    <section className="rounded-lg border border-up/40 bg-up/10 p-5">
      <p className="text-sm font-medium text-up">{done ? "Done for today ✓" : "All caught up ✓"}</p>
      <p className="mt-1 text-sm text-muted">
        {done
          ? "You've finished today's review — your streak is safe. Come back tomorrow for the next round."
          : "Nothing due right now. Learn a new lesson, or come back tomorrow as items come due."}
      </p>
      <Link
        href="/learn"
        className="mt-4 inline-block rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
      >
        Go to lessons →
      </Link>
    </section>
  );
}

function EmptyQueue() {
  return (
    <section className="rounded-lg border border-strong bg-surface p-5">
      <h2 className="text-sm font-medium text-ink">Your review queue is empty</h2>
      <p className="mt-2 text-sm text-muted">
        Take a lesson quiz to start building your daily review. Every question you answer gets scheduled
        to come back at the right time so it sticks.
      </p>
      <Link
        href="/learn"
        className="mt-4 inline-block rounded-md bg-learn px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
      >
        Start a lesson →
      </Link>
    </section>
  );
}
