"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/lib/progress/useProgress";
import { TradingProvider, useTrading } from "@/lib/trading/useTrading";
import { equity } from "@/lib/trading/ledger";
import { STARTING_CASH } from "@/lib/trading/schema";
import { computeCurriculum } from "@/lib/progress/moduleProgression";
import { todayInTz } from "@/lib/review/schedule";
import type { LearnListItem } from "@/components/LearnList";
import { A } from "@/components/kit/theme";
import { Card } from "@/components/kit/Card";
import { Btn } from "@/components/kit/Btn";
import { Pill } from "@/components/kit/Pill";
import { Ring } from "@/components/kit/Ring";
import { WeekDots } from "@/components/kit/WeekDots";
import { SectionTitle } from "@/components/kit/SectionTitle";
import { LessonCard } from "@/components/kit/LessonCard";
import { useIsMobile } from "@/lib/useIsMobile";

const TINTS: [string, string][] = [
  [A.greenSoft, A.green],
  [A.primarySoft, A.primary],
  [A.blueSoft, A.blue],
  [A.amberSoft, A.amberInk],
];
const ICONS = ["sprout", "chart-candlestick", "git-branch", "wallet"];

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Practice-portfolio teaser. Reads the real portfolio via the trading context (which
// syncs the server-side portfolio for signed-in users), marked at live prices — current
// value + total return only, NOT a fabricated time-series.
function PortfolioTeaser() {
  const router = useRouter();
  const { portfolio, prices } = useTrading();
  const hasActivity = portfolio.orders.length > 0 || Object.keys(portfolio.positions).length > 0;
  const value = equity(portfolio, prices);
  const totalReturn = value - STARTING_CASH;
  const pct = (totalReturn / STARTING_CASH) * 100;

  return (
    <Card>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Practice portfolio</div>
      <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 12 }}>Your paper trades</div>
      {hasActivity ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: A.muted, fontWeight: 700 }}>Value</div>
            <div style={{ fontFamily: A.mono, fontSize: 20, fontWeight: 800, color: A.ink }}>{money(value)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: A.muted, fontWeight: 700 }}>Total return</div>
            <div style={{ fontFamily: A.mono, fontSize: 16, fontWeight: 800, color: totalReturn >= 0 ? A.green : A.red }}>
              {totalReturn >= 0 ? "+" : ""}
              {pct.toFixed(1)}%
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", padding: "4px 0" }}>
          <div style={{ fontSize: 13, color: A.faint, fontWeight: 600 }}>No paper trades yet — practice what you learn, risk-free.</div>
          <Btn kind="soft" size="sm" icon="line-chart" onClick={() => router.push("/simulator")}>
            Open the simulator
          </Btn>
        </div>
      )}
    </Card>
  );
}

export function LearnDashboard({ lessons }: { lessons: LearnListItem[] }) {
  const router = useRouter();
  const mobile = useIsMobile();
  const { progress, hydrated } = useProgress();

  const itemBySlug = useMemo(() => new Map(lessons.map((l) => [l.slug, l])), [lessons]);
  const modules = useMemo(() => computeCurriculum(lessons, progress).flatMap((t) => t.modules), [lessons, progress]);

  // Resume target: the in-progress module's next incomplete lesson (or the first
  // unlocked-not-done lesson to start).
  const active = modules.find((m) => m.unlocked && m.passed > 0 && m.passed < m.total) ?? modules.find((m) => m.unlocked && m.passed < m.total) ?? modules[0];
  const resumeStatus = active?.lessons.find((l) => l.unlocked && !l.passed) ?? active?.lessons[0];
  const resumeItem = resumeStatus ? itemBySlug.get(resumeStatus.slug) : undefined;
  const activePct = active && active.total ? active.passed / active.total : 0;

  const streak = hydrated ? progress.streak.current : 0;
  const todayLocal = progress.tz ? todayInTz(progress.tz) : "";
  const doneToday = progress.lastSession === todayLocal;

  const dayIdx = (new Date().getDay() + 6) % 7;
  const week = ["M", "T", "W", "T", "F", "S", "S"].map((l, i) => ({
    l,
    done: i < dayIdx ? dayIdx - i <= streak : i === dayIdx ? doneToday : false,
  }));

  const start = (slug?: string) => router.push(slug ? `/learn/${slug}` : "/learn/units");

  return (
    <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 320px", gap: 22, alignItems: "start" }}>
      {/* main column */}
      <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
        {/* resume hero */}
        <div style={{ background: `linear-gradient(120deg, ${A.primaryDeep}, ${A.primary})`, borderRadius: 26, padding: 26, color: "#fff", display: "flex", alignItems: "center", gap: 22, boxShadow: A.shadowLg, flexWrap: "wrap" }}>
          <Ring size={92} stroke={10} pct={activePct} color="#fff" track="rgba(255,255,255,.28)">
            <div style={{ fontWeight: 800, fontSize: 22 }}>
              {Math.round(activePct * 100)}
              <span style={{ fontSize: 12 }}>%</span>
            </div>
          </Ring>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85, marginBottom: 4, textTransform: "uppercase", letterSpacing: ".03em" }}>
              {active ? `Continue · ${active.title}` : "Start learning"}
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.02em", marginBottom: 4 }}>{resumeItem?.title ?? "Market basics"}</div>
            <div style={{ fontSize: 14, opacity: 0.9, fontWeight: 600 }}>
              {streak > 0 ? `You're on a ${streak}-day streak — keep it going. 🔥` : "Five minutes a day builds the habit."}
            </div>
          </div>
          <Btn kind="white" size="lg" iconRight="arrow-right" onClick={() => start(resumeStatus?.slug)}>
            {active && active.passed > 0 ? "Resume" : "Start"}
          </Btn>
        </div>

        {/* your path */}
        <div>
          <SectionTitle action="See all units →" onAction={() => router.push("/learn/units")}>
            Your path
          </SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1fr 1fr", gap: 16 }}>
            {modules.slice(0, 4).map((m, i) => {
              const done = m.total > 0 && m.passed === m.total;
              const locked = !m.unlocked;
              const [bg, fg] = locked ? [A.sunk, A.faint] : TINTS[i % TINTS.length];
              const first = m.lessons.find((l) => l.unlocked && !l.passed) ?? m.lessons[0];
              return (
                <LessonCard
                  key={m.moduleId}
                  title={m.title}
                  sub={`${m.passed}/${m.total} lessons`}
                  icon={ICONS[i % ICONS.length]}
                  pct={m.total ? Math.round((m.passed / m.total) * 100) : 0}
                  state={done ? "done" : locked ? "locked" : undefined}
                  tint={{ bg, fg }}
                  onClick={() => first && start(first.slug)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* right rail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <Card>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>Today&apos;s goal</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Ring size={88} stroke={10} pct={doneToday ? 1 : 0} color={A.green} track={A.barTrack}>
              <div style={{ fontWeight: 800, fontSize: 22, color: A.ink }}>
                {doneToday ? "✓" : "0"}
                {!doneToday && <span style={{ color: A.faint, fontSize: 14 }}>/1</span>}
              </div>
            </Ring>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>{doneToday ? "Done for today!" : "Keep your streak"}</div>
              <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginTop: 2 }}>
                {doneToday ? "Your review is complete — come back tomorrow." : "Finish today's review to hit your goal."}
              </div>
              {!doneToday && (
                <div style={{ marginTop: 8 }}>
                  <Btn kind="soft" size="sm" onClick={() => router.push("/review")}>
                    Start review
                  </Btn>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontWeight: 800, fontSize: 15 }}>This week</div>
            <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>
              {streak}-day streak
            </Pill>
          </div>
          <WeekDots today={dayIdx} on={A.amber} off={A.barTrack} txt={A.faint} days={week} />
        </Card>

        <TradingProvider>
          <PortfolioTeaser />
        </TradingProvider>
      </div>
    </div>
  );
}
