"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "@/lib/progress/useProgress";
import { loadLocalPortfolio } from "@/lib/trading/store";
import { emptyPortfolio, type Order, type Position } from "@/lib/trading/schema";
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
import { Icon } from "@/components/kit/Icon";
import { EquityCurve } from "@/components/charts/EquityCurve";
import { useIsMobile } from "@/lib/useIsMobile";

const TINTS: [string, string][] = [
  [A.greenSoft, A.green],
  [A.primarySoft, A.primary],
  [A.blueSoft, A.blue],
  [A.amberSoft, A.amberInk],
];
const ICONS = ["sprout", "chart-candlestick", "git-branch", "wallet"];
const NO_PRICES: Record<string, number> = {}; // no live provider here — mark at avg cost

// Equity-over-time indexed to 100 ($100k start), replayed from filled orders and
// marked at current prices (best-effort: marks are live, not historical).
function equitySeries(orders: Order[], positions: Record<string, Position>, prices: Record<string, number>): number[] {
  const START = 100_000;
  const filled = orders
    .filter((o) => o.status === "filled" && o.filledPrice != null)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  if (!filled.length) return [];
  const mark = (s: string) => prices[s] ?? positions[s]?.avgCost ?? 0;
  let cash = START;
  const shares: Record<string, number> = {};
  const series = [100];
  for (const o of filled) {
    const fp = o.filledPrice as number;
    if (o.side === "buy") {
      cash -= fp * o.qty;
      shares[o.symbol] = (shares[o.symbol] ?? 0) + o.qty;
    } else {
      cash += fp * o.qty;
      shares[o.symbol] = (shares[o.symbol] ?? 0) - o.qty;
    }
    let posVal = 0;
    for (const s in shares) posVal += shares[s] * mark(s);
    series.push((cash + posVal) / (START / 100));
  }
  return series;
}

export function LearnDashboard({ lessons }: { lessons: LearnListItem[] }) {
  const router = useRouter();
  const mobile = useIsMobile();
  const { progress, hydrated } = useProgress();
  // Read-only portfolio teaser — load from localStorage (no live TradingProvider here).
  const [portfolio, setPortfolio] = useState(emptyPortfolio);
  useEffect(() => {
    const pf = loadLocalPortfolio();
    if (pf) setPortfolio(pf);
  }, []);

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

  const equity = useMemo(() => equitySeries(portfolio.orders, portfolio.positions, NO_PRICES), [portfolio]);
  const ret = equity.length >= 2 ? equity[equity.length - 1] - 100 : 0;

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
              <div style={{ fontWeight: 800, fontSize: 22, color: A.ink }}>{doneToday ? "✓" : "0"}{!doneToday && <span style={{ color: A.faint, fontSize: 14 }}>/1</span>}</div>
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

        <Card>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Practice portfolio</div>
          <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 10 }}>Your paper trades</div>
          {equity.length >= 2 ? (
            <>
              <EquityCurve equity={equity} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
                <span style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>Return</span>
                <span style={{ fontFamily: A.mono, fontSize: 14, fontWeight: 700, color: ret >= 0 ? A.green : A.red }}>
                  {ret >= 0 ? "+" : ""}
                  {ret.toFixed(1)}%
                </span>
              </div>
            </>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", padding: "8px 0 4px" }}>
              <div style={{ fontSize: 13, color: A.faint, fontWeight: 600 }}>No paper trades yet — practice what you learn, risk-free.</div>
              <Btn kind="soft" size="sm" icon="line-chart" onClick={() => router.push("/simulator")}>
                Open the simulator
              </Btn>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
