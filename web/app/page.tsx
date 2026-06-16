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
    body: "Structured lessons from basics to advanced: candlesticks vs. line charts, P&L, P/E, options, swing vs. day trading.",
  },
  {
    title: "Test",
    body: "Progressive quizzes that gate the next module. A Series 7-style question bank that builds exam confidence.",
  },
  {
    title: "Simulate",
    body: "Paper-trade stocks & crypto on near-real-time quotes. Virtual cash, positions, P&L, and live charts.",
  },
];

export default async function Home() {
  const demo = await loadDemo();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Stock Market Explainer</h1>
      <p className="mt-3 text-slate-400">
        Daily training for the stock market and crypto — from absolute basics to
        Series 7-level mastery, with a paper-trading simulator.
      </p>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Market service status</h2>
        {demo ? (
          <div className="mt-3">
            <p className="text-sm text-slate-400">
              Connected · provider:{" "}
              <span className="font-mono text-emerald-400">{demo.provider}</span>
              {demo.provider === "mock" && " (add Alpaca keys for live data)"}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-800">
              <table className="w-full text-sm">
                <thead className="bg-slate-900 text-left text-slate-400">
                  <tr>
                    <th className="px-4 py-2">Symbol</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Bid</th>
                    <th className="px-4 py-2">Ask</th>
                  </tr>
                </thead>
                <tbody>
                  {demo.quotes.map((q) => (
                    <tr key={q.symbol} className="border-t border-slate-800">
                      <td className="px-4 py-2 font-mono">{q.symbol}</td>
                      <td className="px-4 py-2">${q.price.toFixed(2)}</td>
                      <td className="px-4 py-2 text-slate-400">${q.bid.toFixed(2)}</td>
                      <td className="px-4 py-2 text-slate-400">${q.ask.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="mt-3 rounded-lg border border-amber-900/50 bg-amber-950/30 p-4 text-sm text-amber-300">
            Market service not reachable. Start it with{" "}
            <code className="font-mono">uvicorn app.main:app --port 8000</code> in{" "}
            <code className="font-mono">market-service/</code>, then reload.
          </p>
        )}
      </section>

      <footer className="mt-16 border-t border-slate-800 pt-6 text-xs text-slate-500">
        Educational only. Not financial advice. All trading is simulated (paper).
        See <code className="font-mono">docs/ROADMAP.md</code> for what's next.
      </footer>
    </main>
  );
}
