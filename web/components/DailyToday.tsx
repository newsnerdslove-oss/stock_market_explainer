"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionRunner } from "@/components/QuestionRunner";
import { isChoiceQuestion, type ChoiceQuestion, type Question } from "@/lib/quiz/types";
import { useProgress } from "@/lib/progress/useProgress";
import { isDue, pickDaily, todayInTz } from "@/lib/review/schedule";
import { A } from "@/components/kit/theme";
import { Card } from "@/components/kit/Card";
import { Btn } from "@/components/kit/Btn";
import { Icon } from "@/components/kit/Icon";

const DAILY_TARGET = 5;

export function DailyToday({ allQuestions }: { allQuestions: Question[] }) {
  const { progress, hydrated, recordReview, completeDailySession } = useProgress();
  const [phase, setPhase] = useState<"idle" | "running">("idle");
  const [sessionQs, setSessionQs] = useState<ChoiceQuestion[]>([]);
  const byId = useMemo(
    () => new Map((allQuestions.filter(isChoiceQuestion) as ChoiceQuestion[]).map((q) => [q.id, q])),
    [allQuestions],
  );

  if (!hydrated) {
    return <div style={{ marginTop: 24, height: 160, borderRadius: A.radius, background: A.sunk }} aria-hidden />;
  }

  const today = todayInTz(progress.tz);
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <Stat glyph="flame" color={A.amberInk} value={progress.streak.current === 0 ? "—" : `${progress.streak.current}`} label="day streak" />
        <Stat glyph="layers" color={A.primary} value={`${due}`} label={due === 1 ? "card due" : "cards due"} />
        <Stat glyph="trophy" color={A.green} value={progress.streak.longest === 0 ? "—" : `${progress.streak.longest}`} label="best streak" />
      </div>
      {progress.streak.freezes > 0 && (
        <p style={{ textAlign: "center", fontSize: 12.5, color: A.faint, fontWeight: 600, marginTop: 10 }}>
          {`❄️ ${progress.streak.freezes} streak freeze${progress.streak.freezes === 1 ? "" : "s"} in reserve — a missed day won't break your streak.`}
        </p>
      )}

      <div style={{ marginTop: 24 }}>
        {seenIds.length === 0 ? (
          <StateCard icon="book-open" title="Your review queue is empty" body="Take a lesson quiz to start building your daily review. Every question you answer gets scheduled to come back at the right time so it sticks." cta="Start a lesson →" to="/learn" primary />
        ) : doneToday || (phase === "idle" && todays.length === 0) ? (
          <StateCard
            icon="check-circle-2"
            tone={A.green}
            title={doneToday ? "Done for today ✓" : "All caught up ✓"}
            body={doneToday ? "You've finished today's review — your streak is safe. Come back tomorrow for the next round." : "Nothing due right now. Learn a new lesson, or come back tomorrow as items come due."}
            cta="Go to lessons →"
            to="/learn"
          />
        ) : phase === "running" ? (
          <Card style={{ borderColor: A.primary }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: A.ink, marginBottom: 12 }}>Today&apos;s review</div>
            <QuestionRunner
              questions={sessionQs}
              onAnswer={(qid, correct) => recordReview(qid, correct)}
              onComplete={() => {
                completeDailySession();
                setPhase("idle");
              }}
            />
          </Card>
        ) : (
          <Card style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: A.ink, marginBottom: 4 }}>Today&apos;s review</div>
              <div style={{ fontSize: 14, color: A.muted, fontWeight: 600 }}>
                {todays.length} question{todays.length === 1 ? "" : "s"} mixing what you&apos;ve learned — a few minutes to keep it sharp and extend your streak.
              </div>
            </div>
            <div>
              <Btn kind="primary" iconRight="arrow-right" onClick={start}>
                Start review
              </Btn>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}

function Stat({ glyph, color, value, label }: { glyph: string; color: string; value: string; label: string }) {
  return (
    <Card pad={16} style={{ textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 7, color }}>
        <Icon name={glyph} size={18} />
        <span style={{ fontFamily: A.mono, fontSize: 24, fontWeight: 800 }}>{value}</span>
      </div>
      <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600, marginTop: 2 }}>{label}</div>
    </Card>
  );
}

function StateCard({ icon, tone, title, body, cta, to, primary }: { icon: string; tone?: string; title: string; body: string; cta: string; to: string; primary?: boolean }) {
  const router = useRouter();
  return (
    <Card style={{ display: "flex", flexDirection: "column", gap: 12, ...(tone ? { borderColor: tone } : {}) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Icon name={icon} size={20} color={tone ?? A.primary} />
        <span style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>{title}</span>
      </div>
      <div style={{ fontSize: 14, color: A.muted, fontWeight: 600 }}>{body}</div>
      <div>
        <Btn kind={primary ? "primary" : "ghost"} onClick={() => router.push(to)}>
          {cta}
        </Btn>
      </div>
    </Card>
  );
}
