"use client";

// Home-page stock strip: a user-editable list of tickers with client-fetched
// quotes (polled), an add box, and per-row remove + chart link. Replaces the old
// server-rendered demo list so symbols can be added/removed at runtime. The
// tracked list is persisted in localStorage (see lib/home/tracked).

import Link from "next/link";
import { useEffect, useState } from "react";
import { getQuoteViaApi, getCandlesViaApi, type Quote } from "@/lib/marketService";
import { useTracked, normalizeStock } from "@/lib/home/tracked";
import { COMPANY_NAMES } from "@/lib/stocks/names";
import { AddTicker } from "@/components/home/AddTicker";

const KEY = "sme.home.stocks.v1";
const DEFAULTS = ["AAPL", "MSFT", "TSLA"];
const POLL_MS = 15_000;

const SUGGESTIONS = Object.keys(COMPANY_NAMES)
  .filter((s) => !s.includes("-USD"))
  .map((value) => ({ value, label: COMPANY_NAMES[value] }));

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const num = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function liveSource(source: string): boolean {
  const s = source.toLowerCase();
  return s.includes("iex") || s.includes("alpaca");
}

// Daily stats for the change% + day-range columns. Two daily bars give us the
// prior close (for today's change) and today's high/low. Slow-moving, so it polls
// far less often than the price quote.
interface DailyStat {
  prevClose: number;
  high: number;
  low: number;
}
const DAILY_MS = 5 * 60 * 1000;

async function loadDaily(sym: string): Promise<DailyStat | null> {
  try {
    const { candles } = await getCandlesViaApi(sym, 2, "1d");
    if (!candles.length) return null;
    const today = candles[candles.length - 1];
    const prev = candles.length >= 2 ? candles[candles.length - 2] : today;
    return { prevClose: prev.close, high: today.high, low: today.low };
  } catch {
    return null;
  }
}

export function HomeStocks() {
  const { list, add, remove } = useTracked(KEY, DEFAULTS, normalizeStock);
  const [quotes, setQuotes] = useState<Record<string, Quote | null>>({});
  const [daily, setDaily] = useState<Record<string, DailyStat | null>>({});
  const [reachable, setReachable] = useState<boolean | null>(null);

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

  // Daily stats (prior close + day high/low) on a slow cadence — they barely move.
  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      const entries = await Promise.all(list.map(async (s) => [s, await loadDaily(s)] as const));
      if (cancelled) return;
      setDaily(() => {
        const next: Record<string, DailyStat | null> = {};
        for (const [s, d] of entries) next[s] = d;
        return next;
      });
    }

    void refresh();
    const id = setInterval(() => void refresh(), DAILY_MS);
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
        <div className="ml-auto">
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
                      {(() => {
                        const d = daily[sym];
                        if (!d || !d.prevClose) return <span className="hidden text-faint sm:inline">—</span>;
                        const change = q.price - d.prevClose;
                        const pct = (change / d.prevClose) * 100;
                        const up = change >= 0;
                        const sign = up ? "+" : "";
                        const high = Math.max(d.high, q.price);
                        const low = Math.min(d.low, q.price);
                        return (
                          <>
                            <span className={`w-32 text-right ${up ? "text-up" : "text-down"}`}>
                              {sign}{num(change)} ({sign}{num(pct)}%)
                            </span>
                            <span className="hidden text-faint sm:inline">
                              H {num(high)} · L {num(low)}
                            </span>
                          </>
                        );
                      })()}
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
