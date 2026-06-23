"use client";

// Home-page stock strip: a user-editable list of tickers with client-fetched
// quotes (polled), an add box, and per-row remove + chart link. Replaces the old
// server-rendered demo list so symbols can be added/removed at runtime. The
// tracked list is persisted in localStorage (see lib/home/tracked). A span
// selector (1D…1Y) sets the window for the change% + high/low columns; one year
// of daily bars is fetched per symbol and every span is derived client-side.

import Link from "next/link";
import { useEffect, useState } from "react";
import { getQuoteViaApi, getCandlesViaApi, type Candle, type Quote } from "@/lib/marketService";
import { useTracked, normalizeStock } from "@/lib/home/tracked";
import { COMPANY_NAMES } from "@/lib/stocks/names";
import { AddTicker } from "@/components/home/AddTicker";

const KEY = "sme.home.stocks.v1";
const DEFAULTS = ["AAPL", "MSFT", "TSLA"];
const POLL_MS = 15_000;
const BARS_MS = 5 * 60 * 1000; // daily bars barely move — refresh slowly
const HISTORY = 260; // ~1 trading year of daily bars

const SUGGESTIONS = Object.keys(COMPANY_NAMES)
  .filter((s) => !s.includes("-USD"))
  .map((value) => ({ value, label: COMPANY_NAMES[value] }));

// Lookback in trading days for each span (approximate calendar windows).
const SPANS = [
  { id: "1D", lookback: 1 },
  { id: "1W", lookback: 5 },
  { id: "1M", lookback: 21 },
  { id: "3M", lookback: 63 },
  { id: "1Y", lookback: 252 },
] as const;
type SpanId = (typeof SPANS)[number]["id"];

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const num = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function liveSource(source: string): boolean {
  const s = source.toLowerCase();
  return s.includes("iex") || s.includes("alpaca");
}

async function loadBars(sym: string): Promise<Candle[]> {
  try {
    const { candles } = await getCandlesViaApi(sym, HISTORY, "1d");
    return candles ?? [];
  } catch {
    return [];
  }
}

interface SpanStat {
  change: number;
  pct: number;
  high: number;
  low: number;
}

// Change vs the close `lookback` trading days ago, and the high/low over that
// window (clamped to the live price so the range stays honest between refreshes).
function statFor(candles: Candle[] | undefined, price: number, lookback: number): SpanStat | null {
  if (!candles || candles.length < 2) return null;
  const refIdx = Math.max(0, candles.length - 1 - lookback);
  const refClose = candles[refIdx].close;
  if (!refClose) return null;
  let high = price;
  let low = price;
  for (const c of candles.slice(refIdx + 1)) {
    high = Math.max(high, c.high);
    low = Math.min(low, c.low);
  }
  const change = price - refClose;
  return { change, pct: (change / refClose) * 100, high, low };
}

export function HomeStocks() {
  const { list, add, remove } = useTracked(KEY, DEFAULTS, normalizeStock);
  const [quotes, setQuotes] = useState<Record<string, Quote | null>>({});
  const [bars, setBars] = useState<Record<string, Candle[]>>({});
  const [span, setSpan] = useState<SpanId>("1D");
  const [reachable, setReachable] = useState<boolean | null>(null);

  const lookback = SPANS.find((s) => s.id === span)?.lookback ?? 1;

  useEffect(() => {
    let cancelled = false;

    async function tick() {
      const entries = await Promise.all(
        list.map(async (sym) => {
          try {
            return [sym, await getQuoteViaApi(sym)] as const;
          } catch {
            return [sym, null] as const;
          }
        }),
      );
      if (cancelled) return;
      setQuotes(() => {
        const next: Record<string, Quote | null> = {};
        for (const [s, q] of entries) next[s] = q;
        return next;
      });
      setReachable(entries.length === 0 ? null : entries.some(([, q]) => q != null));
    }

    void tick();
    const id = setInterval(() => void tick(), POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [list]);

  // One year of daily bars per symbol, on a slow cadence; every span derives from these.
  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      const entries = await Promise.all(list.map(async (s) => [s, await loadBars(s)] as const));
      if (cancelled) return;
      setBars(() => {
        const next: Record<string, Candle[]> = {};
        for (const [s, c] of entries) next[s] = c;
        return next;
      });
    }

    void refresh();
    const id = setInterval(() => void refresh(), BARS_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [list]);

  const anyQuote = list.map((s) => quotes[s]).find((q): q is Quote => q != null);
  const live = anyQuote ? liveSource(anyQuote.source) : false;

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-sm font-medium text-muted">Stocks</h2>
        {reachable && (
          <span
            className={`rounded-full border px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${
              live ? "border-up/40 text-up" : "border-streak/40 text-streak"
            }`}
          >
            {live ? "IEX · live" : "Delayed"}
          </span>
        )}
        <div className="ml-auto flex items-center gap-2">
          <div className="inline-flex rounded-md border border-strong p-0.5 text-[11px]" role="group" aria-label="Change window">
            {SPANS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSpan(s.id)}
                aria-pressed={s.id === span}
                className={`rounded px-1.5 py-0.5 transition ${s.id === span ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}
              >
                {s.id}
              </button>
            ))}
          </div>
          <AddTicker onAdd={add} placeholder="Add stock" suggestions={SUGGESTIONS} />
        </div>
      </div>

      {reachable === false && list.length > 0 && (
        <p className="mt-3 rounded-md border border-streak/40 bg-streak/10 p-4 text-sm text-streak">
          Market service not reachable. Start it with{" "}
          <code className="font-mono">uvicorn app.main:app --port 8000</code> in{" "}
          <code className="font-mono">market-service/</code>, then reload.
        </p>
      )}

      {list.length === 0 ? (
        <p className="mt-3 rounded-lg border border-strong bg-surface p-4 text-sm text-faint">
          No stocks tracked. Add a ticker above to follow it here.
        </p>
      ) : (
        <div className="mt-3 overflow-hidden rounded-lg border border-strong bg-surface">
          {list.map((sym, i) => {
            const q = quotes[sym];
            const stat = q ? statFor(bars[sym], q.price, lookback) : null;
            return (
              <div
                key={sym}
                className={`flex items-center justify-between px-4 py-3 ${i > 0 ? "border-t border-hairline" : ""}`}
              >
                <Link href={`/symbol/${encodeURIComponent(sym)}`} className="font-mono text-sm text-ink transition hover:text-learn" title={COMPANY_NAMES[sym]}>
                  {sym}
                </Link>
                <div className="flex items-center gap-4 font-mono text-sm">
                  {q ? (
                    <>
                      <span className="text-ink">{money(q.price)}</span>
                      {stat ? (
                        <>
                          <span className={`w-32 text-right ${stat.change >= 0 ? "text-up" : "text-down"}`}>
                            {stat.change >= 0 ? "+" : ""}
                            {num(stat.change)} ({stat.change >= 0 ? "+" : ""}
                            {num(stat.pct)}%)
                          </span>
                          <span className="hidden text-faint sm:inline">
                            <span className="text-[10px] uppercase tracking-wide">{span}</span> H {num(stat.high)} · L {num(stat.low)}
                          </span>
                        </>
                      ) : (
                        <span className="hidden text-faint sm:inline">—</span>
                      )}
                    </>
                  ) : (
                    <span className="text-faint">{reachable === null ? "…" : "—"}</span>
                  )}
                  <button
                    type="button"
                    onClick={() => remove(sym)}
                    aria-label={`Stop tracking ${sym}`}
                    className="text-faint transition hover:text-down"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
