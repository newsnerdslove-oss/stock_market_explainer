"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { A } from "@/components/kit/theme";
import { Icon } from "@/components/kit/Icon";
import { Card } from "@/components/kit/Card";
import { Btn } from "@/components/kit/Btn";
import { Pill } from "@/components/kit/Pill";
import { Ring } from "@/components/kit/Ring";
import { WeekDots } from "@/components/kit/WeekDots";
import { SectionTitle } from "@/components/kit/SectionTitle";
import { PatternChart } from "@/components/charts/PatternChart";
import { isCorrectPick } from "@/lib/charts/generate";
import { chartOfDayFor, qotdFor } from "@/lib/daily/content";
import { useProgress } from "@/lib/progress/useProgress";
import { useThemeState } from "@/lib/theme";
import { useIsMobile } from "@/lib/useIsMobile";

const LAUNCHERS: { icon: string; t: string; s: string; tint: [string, string]; to: string }[] = [
  { icon: "candlestick-chart", t: "Candlestick patterns", s: "Learn to read the candles", tint: [A.primarySoft, A.primary], to: "/learn" },
  { icon: "repeat", t: "Daily review", s: "Spaced repetition · keep it fresh", tint: [A.greenSoft, A.green], to: "/review" },
  { icon: "timer", t: "Practice exam", s: "Test under pressure", tint: [A.blueSoft, A.blue], to: "/exam" },
  { icon: "line-chart", t: "Trade the simulator", s: "Put it to work, risk-free", tint: [A.amberSoft, A.amberInk], to: "/simulator" },
];

export default function TodayPage() {
  const router = useRouter();
  const [theme] = useThemeState();
  const mobile = useIsMobile();
  const { progress, hydrated, awardXp, markActiveToday } = useProgress();

  const dateKey = useMemo(() => new Date().toISOString().slice(0, 10), []); // UTC day — same for everyone
  const chart = useMemo(() => chartOfDayFor(dateKey), [dateKey]);
  const qotd = useMemo(() => qotdFor(dateKey), [dateKey]);

  const [picked, setPicked] = useState<number | null>(null);
  const [qPick, setQPick] = useState<number | null>(null);

  const found = picked !== null && isCorrectPick(picked, chart.signalIndex);
  const answered = qPick !== null;
  const goalDone = (found ? 1 : 0) + (answered ? 1 : 0);

  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const dateStr = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const streak = hydrated ? progress.streak.current : 0;

  // A rough week strip: past days in this week count as done if the streak reaches
  // back that far; today is done once the chart challenge is solved.
  const dayIdx = (new Date().getDay() + 6) % 7; // Mon=0 … Sun=6
  const completedToday = found || progress.streak.lastActiveDate === dateKey;
  const week = ["M", "T", "W", "T", "F", "S", "S"].map((l, i) => ({
    l,
    done: i < dayIdx ? dayIdx - i <= streak : i === dayIdx ? completedToday : false,
  }));

  function pickChart(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (isCorrectPick(i, chart.signalIndex)) {
      awardXp(`chart:${dateKey}`, 20); // double XP for the chart of the day
      markActiveToday();
    }
  }
  function pickQotd(i: number) {
    if (answered) return;
    setQPick(i);
    if (i === qotd.correct) awardXp(`qotd:${dateKey}`, 10);
  }

  return (
    <>
      {/* greeting */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 6px" }}>{greet}</h1>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>{dateStr} · here&apos;s your daily warm-up</p>
        </div>
        <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>
          {streak}-day streak
        </Pill>
      </div>

      {/* chart of the day */}
      <div style={{ background: `linear-gradient(120deg, ${A.primaryDeep}, ${A.primary})`, borderRadius: 26, padding: mobile ? 20 : 26, color: "#fff", display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: mobile ? 18 : 26, alignItems: "center", boxShadow: A.shadowLg, marginBottom: 22 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,.18)", padding: "5px 12px", borderRadius: 999, fontSize: 12.5, fontWeight: 800, marginBottom: 14 }}>
            <Icon name="sparkles" size={15} /> CHART OF THE DAY
          </div>
          <h2 style={{ fontSize: 27, fontWeight: 800, letterSpacing: "-.02em", margin: "0 0 8px" }}>{chart.meta.title}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.92, fontWeight: 500, margin: "0 0 20px" }}>
            {picked === null ? chart.meta.prompt : found ? "Nice — you found it. +20 XP earned and your streak is safe." : "Not quite — the highlighted candle is the one. Tap through to the trainer for more practice."}
          </p>
          <Btn kind="white" size="lg" iconRight="arrow-right" onClick={() => router.push("/learn")}>
            {picked === null ? "Or learn the patterns" : "Practice more"}
          </Btn>
        </div>
        <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 18, padding: 14 }}>
          <div style={{ background: theme === "dark" ? A.card : "#fff", borderRadius: 12, padding: 10 }}>
            <PatternChart candles={chart.candles} onPick={pickChart} picked={picked} correctIndex={picked === null ? null : chart.signalIndex} />
          </div>
        </div>
      </div>

      {/* QOTD + daily goal */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.4fr 1fr", gap: 18, marginBottom: 26 }}>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
            <Icon name="help-circle" size={18} color={A.primary} />
            <span style={{ fontWeight: 800, fontSize: 15 }}>Question of the day</span>
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: A.ink, marginBottom: 16, lineHeight: 1.35 }}>{qotd.q}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {qotd.options.map((o, i) => {
              const isCorrect = i === qotd.correct;
              const show = answered && (isCorrect || i === qPick);
              const bg = !answered ? A.card : isCorrect ? A.greenSoft : i === qPick ? A.redSoft : A.card;
              const bd = !answered ? A.border : show ? (isCorrect ? A.green : A.red) : A.border;
              return (
                <div key={i} onClick={() => pickQotd(i)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderRadius: 13, cursor: answered ? "default" : "pointer", border: `1.5px solid ${bd}`, background: bg, fontWeight: 700, fontSize: 14.5, color: A.ink }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", flex: "0 0 auto", display: "grid", placeItems: "center", border: `2px solid ${show ? (isCorrect ? A.green : A.red) : A.faint}`, color: "#fff", background: show ? (isCorrect ? A.green : A.red) : "transparent" }}>
                    {show && <Icon name={isCorrect ? "check" : "x"} size={13} strokeWidth={3} />}
                  </span>
                  {o}
                </div>
              );
            })}
          </div>
          {answered && (
            <div style={{ marginTop: 14, fontSize: 13.5, color: A.muted, fontWeight: 600 }}>
              {qPick === qotd.correct ? `✅ ${qotd.explain} +10 XP` : qotd.explain}
            </div>
          )}
        </Card>

        <Card style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>Daily goal</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
            <Ring size={84} stroke={10} pct={goalDone / 2} color={A.amber} track={A.barTrack}>
              <div style={{ fontWeight: 800, fontSize: 20, color: A.ink }}>
                {goalDone}
                <span style={{ color: A.faint, fontSize: 13 }}>/2</span>
              </div>
            </Ring>
            <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>Find today&apos;s pattern and answer the question of the day to hit your goal.</div>
          </div>
          <div style={{ marginTop: "auto" }}>
            <WeekDots today={dayIdx} on={A.amber} off={A.barTrack} txt={A.faint} days={week} />
          </div>
        </Card>
      </div>

      {/* what to test today */}
      <SectionTitle>What do you want to test today?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 16 }}>
        {LAUNCHERS.map((t) => (
          <Card key={t.t} pad={20} onClick={() => router.push(t.to)} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: t.tint[0], color: t.tint[1], display: "grid", placeItems: "center" }}>
              <Icon name={t.icon} size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15.5, marginBottom: 3 }}>{t.t}</div>
              <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{t.s}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: A.primary, fontWeight: 700, fontSize: 13.5, marginTop: "auto" }}>
              Start <Icon name="arrow-right" size={15} />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
