import Link from "next/link";
import { SymbolChart } from "@/components/charts/SymbolChart";
import { ResearchBar } from "@/components/research/ResearchBar";
import { getCandles, getQuote, type Candle, type Quote } from "@/lib/marketService";

export async function generateMetadata({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;
  const sym = ticker.toUpperCase();
  return {
    title: `${sym} — Stock Market Explainer`,
    description: `Live candlestick chart for ${sym}.`,
  };
}

const money = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default async function SymbolPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;
  const symbol = ticker.toUpperCase();

  // Best-effort initial load for fast first paint; the chart polls client-side, so
  // an offline market-service degrades gracefully rather than crashing the page.
  let initialCandles: Candle[] = [];
  let quote: Quote | null = null;
  try {
    const [candles, q] = await Promise.allSettled([getCandles(symbol, 60), getQuote(symbol)]);
    if (candles.status === "fulfilled") initialCandles = candles.value.candles;
    if (q.status === "fulfilled") quote = q.value;
  } catch {
    // leave defaults — the client chart will retry on its poll
  }

  return (
    <>
      <div className="flex items-center justify-between text-sm font-semibold text-muted">
        <Link href="/simulator" className="transition hover:text-ink">
          ← Simulator
        </Link>
        <Link href="/" className="transition hover:text-ink">
          Home →
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="font-mono text-4xl font-extrabold tracking-tight text-ink">{symbol}</h1>
        {quote && (
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold text-ink">{money(quote.price)}</span>
            <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-semibold text-faint">{quote.source}</span>
          </div>
        )}
      </div>
      <p className="mt-2 font-semibold text-muted">
        Candlestick chart with EMAs, volume, and multiple timeframes. <span className="text-faint">Green = close above open, red = below.</span>
      </p>

      <ResearchBar symbol={symbol} />

      <section className="mt-4 rounded-[22px] border border-strong bg-surface p-3 shadow-sm">
        <SymbolChart symbol={symbol} initialCandles={initialCandles} />
      </section>

      <div className="mt-6">
        <Link
          href={`/simulator?symbol=${encodeURIComponent(symbol)}`}
          className="inline-flex items-center gap-2 rounded-xl bg-learn px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:opacity-90"
        >
          Trade {symbol} →
        </Link>
      </div>

      <footer className="mt-16 border-t border-strong pt-6 text-xs font-semibold text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </>
  );
}
