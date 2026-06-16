import Link from "next/link";
import { getHealth, getQuote, type Quote } from "@/lib/marketService";

async function loadDemo(): Promise<{ provider: string; quotes: Quote[] } | null> {
  try {
    const health = await getHealth();
    const symbols = ["AAPL", "MSFT", "TSLA"];
    const quotes = await Promise.all(symbols.map(getQuote));
    return { provider: health.provider, quotes };
  } catch {
    return null; // market-service not running yet
  }
}

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

export default async function Home() {
  const demo = await loadDemo();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center gap-2.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-up text-canvas">
          <span className="text-sm font-medium">$</span>
        </div>
        <span className="text-sm font-medium tracking-tight">Explainer</span>
      </div>

      <h1 className="mt-8 text-4xl font-medium tracking-tight">
        Learn the markets. <span className="text-muted">Daily.</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Training for stocks and crypto — from absolute basics to Series 7-level
        mastery — with a paper-trading simulator on near-real-time quotes.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Start learning →
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2"
        >
          Browse lessons
        </Link>
      </div>

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

      <section className="mt-12">
        <h2 className="text-sm font-medium text-muted">Market service</h2>
        {demo ? (
          <div className="mt-3">
            <p className="text-xs text-muted">
              Connected · provider:{" "}
              <span className="font-mono text-up">{demo.provider}</span>
              {demo.provider === "mock" && " — add Alpaca keys for live data"}
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-strong bg-surface">
              {demo.quotes.map((q, i) => (
                <div
                  key={q.symbol}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i > 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <span className="font-mono text-sm">{q.symbol}</span>
                  <div className="flex items-center gap-6 font-mono text-sm">
                    <span>${q.price.toFixed(2)}</span>
                    <span className="text-faint">
                      ${q.bid.toFixed(2)} / ${q.ask.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-3 rounded-md border border-streak/40 bg-streak/10 p-4 text-sm text-streak">
            Market service not reachable. Start it with{" "}
            <code className="font-mono">uvicorn app.main:app --port 8000</code> in{" "}
            <code className="font-mono">market-service/</code>, then reload.
          </p>
        )}
      </section>

      <footer className="mt-16 flex items-center gap-2 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </main>
  );
}
