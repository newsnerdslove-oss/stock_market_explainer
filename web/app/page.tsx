import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { SymbolSearch } from "@/components/research/SymbolSearch";
import { CryptoTicker } from "@/components/CryptoTicker";
import { HomeStocks } from "@/components/home/HomeStocks";

const pillars = [
  {
    title: "Learn",
    accent: "text-learn",
    body: "Structured lessons from basics to advanced: candlesticks vs. line charts, P&L, P/E, options, swing vs. day trading.",
  },
  {
    title: "Test",
    accent: "text-learn",
    body: "Progressive quizzes that gate the next module. A Series 7-style question bank that builds exam confidence.",
  },
  {
    title: "Simulate",
    accent: "text-up",
    body: "Paper-trade stocks & crypto on near-real-time quotes. Virtual cash, positions, P&L, and live charts.",
  },
];

export default function Home() {
  return (
    <PageContainer size="wide" className="pb-16 pt-12">
      <h1 className="text-4xl font-medium tracking-tight">
        Learn the markets. <span className="text-muted">Daily.</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Training for stocks and crypto — from absolute basics to Series 7-level
        mastery — with a paper-trading simulator on near-real-time quotes.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Start learning →
        </Link>
        <Link
          href="/today"
          className="inline-flex items-center gap-2 rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
        >
          Daily review →
        </Link>
      </div>

      <section className="mt-8 rounded-lg border border-strong bg-surface p-4">
        <h2 className="text-sm font-medium text-ink">Look up a chart</h2>
        <p className="mt-1 text-xs text-muted">
          Enter a ticker to open its live candlestick chart — e.g. <span className="font-mono">AAPL</span>,{" "}
          <span className="font-mono">TSLA</span>, <span className="font-mono">BTC</span>.
        </p>
        <SymbolSearch className="mt-3" inputClassName="w-full max-w-xs" buttonLabel="View chart →" />
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-strong bg-surface p-4"
          >
            <h2 className={`text-base font-medium ${p.accent}`}>{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.body}</p>
          </div>
        ))}
      </section>

      <CryptoTicker />

      <HomeStocks />

      <footer className="mt-16 flex items-center gap-2 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </PageContainer>
  );
}
