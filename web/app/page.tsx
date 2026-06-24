"use client";

import { useRouter } from "next/navigation";
import { SymbolSearch } from "@/components/research/SymbolSearch";
import { CryptoTicker } from "@/components/CryptoTicker";
import { HomeStocks } from "@/components/home/HomeStocks";
import { A } from "@/components/kit/theme";
import { Card } from "@/components/kit/Card";
import { Btn } from "@/components/kit/Btn";
import { Pill } from "@/components/kit/Pill";
import { Icon } from "@/components/kit/Icon";
import { SectionTitle } from "@/components/kit/SectionTitle";
import { useIsMobile } from "@/lib/useIsMobile";

const FEATURES: { icon: string; fg: string; bg: string; t: string; d: string }[] = [
  { icon: "candlestick-chart", fg: A.primary, bg: A.primarySoft, t: "Real interactive charts", d: "Tap candles, trace payoffs, and read live curves — not static screenshots." },
  { icon: "flame", fg: A.amberInk, bg: A.amberSoft, t: "Daily streaks & XP", d: "Tiny goals and a streak counter keep the habit going, five minutes a day." },
  { icon: "dumbbell", fg: A.green, bg: A.greenSoft, t: "Practice that pays off", d: "Pattern trainers and paper trades let you apply each lesson immediately." },
];

export default function Home() {
  const router = useRouter();
  const mobile = useIsMobile();

  return (
    <>
      {/* hero */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.05fr .95fr", gap: 36, alignItems: "center", marginBottom: 44 }}>
        <div>
          <Pill icon="sparkles" bg={A.amberSoft} fg={A.amberInk}>
            Learn the markets, daily
          </Pill>
          <h1 style={{ fontSize: mobile ? 36 : 46, fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1.05, margin: "16px 0 14px", color: A.ink }}>
            The stock market, <span style={{ color: A.primary }}>finally clicks.</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: A.muted, fontWeight: 500, maxWidth: 520, margin: "0 0 24px" }}>
            Five-minute lessons with real, interactive charts. Build a daily habit, practice with paper trades, and actually understand what moves prices.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn kind="primary" size="lg" iconRight="arrow-right" onClick={() => router.push("/learn")}>
              Start learning
            </Btn>
            <Btn kind="ghost" size="lg" icon="sparkles" onClick={() => router.push("/today")}>
              Today&apos;s warm-up
            </Btn>
          </div>
        </div>

        {/* chart lookup card */}
        <Card pad={22} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: A.primarySoft, color: A.primary, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
              <Icon name="search" size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>Look up a chart</div>
              <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>Open any ticker&apos;s live candlestick chart</div>
            </div>
          </div>
          <SymbolSearch className="mt-2" inputClassName="w-full" buttonLabel="View chart →" />
          <div style={{ fontSize: 12.5, color: A.faint, fontWeight: 600, marginTop: 8 }}>
            Try <span style={{ fontFamily: A.mono }}>AAPL</span>, <span style={{ fontFamily: A.mono }}>TSLA</span>, <span style={{ fontFamily: A.mono }}>BTC</span>.
          </div>
        </Card>
      </div>

      {/* features */}
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 44 }}>
        {FEATURES.map((f) => (
          <Card key={f.t} pad={22} hover>
            <div style={{ width: 50, height: 50, borderRadius: 15, background: f.bg, color: f.fg, display: "grid", placeItems: "center", marginBottom: 14 }}>
              <Icon name={f.icon} size={24} />
            </div>
            <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 6, color: A.ink }}>{f.t}</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: A.muted, fontWeight: 500 }}>{f.d}</div>
          </Card>
        ))}
      </div>

      {/* live markets */}
      <SectionTitle>Live markets</SectionTitle>
      <CryptoTicker />
      <HomeStocks />

      <footer style={{ marginTop: 56, borderTop: `1px solid ${A.border}`, paddingTop: 22, fontSize: 12.5, color: A.faint, fontWeight: 600 }}>
        Educational only · paper trading only · not financial advice.
      </footer>
    </>
  );
}
