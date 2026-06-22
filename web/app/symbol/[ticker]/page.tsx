import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
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
    <PageContainer size="wide" className="py-16">
      <div className="flex items-center justify-between">
        <Link href="/simulator" className="text-sm text-muted transition hover:text-ink">
          ← Simulator
        </Link>
        <Link href="/" className="text-sm text-muted transition hover:text-ink">
          Home →
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="font-mono text-4xl font-medium tracking-tight">{symbol}</h1>
        {quote && (
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl text-ink">{money(quote.price)}</span>
            <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-faint">{quote.source}</span>
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">
        Candlestick chart with EMAs, volume, and multiple timeframes. <span className="text-faint">Green = close above open, red = below.</span>
      </p>

      <ResearchBar symbol={symbol} />

      <section className="mt-4 rounded-lg border border-strong bg-surface p-3">
        <SymbolChart symbol={symbol} initialCandles={initialCandles} />
      </section>

      <div className="mt-6">
        <Link
          href={`/simulator?symbol=${encodeURIComponent(symbol)}`}
          className="inline-block rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90"
        >
          Trade {symbol} →
        </Link>
      </div>

      <footer className="mt-16 border-t border-hairline pt-6 text-xs text-faint">
        Educational only · paper trading only · not financial advice.
      </footer>
    </PageContainer>
  );
}
