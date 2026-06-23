"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCryptoPrices } from "@/lib/crypto/useCryptoPrices";
import { getCandlesViaApi, type Candle } from "@/lib/marketService";
import { useTracked, normalizeCoin } from "@/lib/home/tracked";
import { SPANS, SPAN_HISTORY, lookbackFor, statFor, type SpanId } from "@/lib/home/spans";
import { COMPANY_NAMES } from "@/lib/stocks/names";
import { AddTicker } from "@/components/home/AddTicker";

const KEY = "sme.home.coins.v1";
const DEFAULTS = ["BTC-USD", "ETH-USD"];
const BARS_MS = 5 * 60 * 1000; // daily bars barely move — refresh slowly
const SUGGESTIONS = Object.keys(COMPANY_NAMES)
  .filter((s) => s.includes("-USD"))
  .map((value) => ({ value, label: COMPANY_NAMES[value] }));

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const num = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

async function loadBars(sym: string): Promise<Candle[]> {
  try {
    const { candles } = await getCandlesViaApi(sym, SPAN_HISTORY, "1d");
    return candles ?? [];
  } catch {
    return [];
  }
}

/**
 * A live, user-editable crypto price strip streamed over the Coinbase WebSocket —
 * real-time, unlike the home page's delayed stock widget. The hook throttles
 * updates to ~5/sec; the price stays in a steady colour and a brief tint flashes
 * on each change so movement is legible without strobing. A dot shows the
 * connection. A span selector (1D…1Y) drives the change% + high/low columns,
 * derived from a year of daily bars per coin. Any Coinbase USD pair can be added
 * (a pair the candles backend doesn't map streams a live price here but won't
 * show a change/range or open a chart).
 */
export function CryptoTicker() {
  const { list, add, remove } = useTracked(KEY, DEFAULTS, normalizeCoin);
  const { prices, status } = useCryptoPrices(list);
  const [bars, setBars] = useState<Record<string, Candle[]>>({});
  const [span, setSpan] = useState<SpanId>("1D");

  const lookback = lookbackFor(span);

  // One year of daily bars per coin, on a slow cadence; every span derives from these.
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

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-sm font-medium text-muted">Live crypto</h2>
        <span
          className={`flex items-center gap-1 text-[10px] uppercase tracking-wide ${status === "open" ? "text-up" : "text-faint"}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status === "open" ? "bg-up" : "bg-faint"}`} aria-hidden />
          {status === "open" ? "live" : status === "connecting" ? "connecting" : "offline"}
        </span>
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
          <AddTicker onAdd={add} placeholder="Add coin" suggestions={SUGGESTIONS} />
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-3 rounded-lg border border-strong bg-surface p-4 text-sm text-faint">
          No coins tracked. Add a pair above (e.g. <span className="font-mono">SOL-USD</span>).
        </p>
      ) : (
        <div className="mt-3 overflow-hidden rounded-lg border border-strong bg-surface">
          {list.map((p, i) => {
            const live = prices[p];
            const arrow = live?.dir === "up" ? "text-up" : live?.dir === "down" ? "text-down" : "text-faint";
            const seriesBars = bars[p];
            const price = live?.price ?? seriesBars?.[seriesBars.length - 1]?.close ?? 0;
            const stat = statFor(seriesBars, price, lookback);
            return (
              <div
                key={p}
                className={`relative flex items-center justify-between overflow-hidden px-4 py-3 transition hover:bg-surface-2 ${i > 0 ? "border-t border-hairline" : ""}`}
              >
                {/* Fade-flash on change: keyed by tick time so it remounts & replays. */}
                {live && live.dir !== "flat" && (
                  <span
                    key={live.at}
                    aria-hidden
                    className={`animate-tick-flash pointer-events-none absolute inset-0 ${live.dir === "up" ? "bg-up/15" : "bg-down/15"}`}
                  />
                )}
                <Link href={`/symbol/${encodeURIComponent(p)}`} className="relative font-mono text-sm text-ink transition hover:text-learn" title={COMPANY_NAMES[p]}>
                  {p}
                </Link>
                <span className="relative flex items-center gap-4 font-mono text-sm text-ink tabular-nums">
                  <span className="flex items-baseline gap-1">
                    {live ? money(live.price) : <span className="text-faint">—</span>}
                    {live && live.dir !== "flat" && (
                      <span className={`text-[10px] ${arrow}`} aria-hidden>
                        {live.dir === "up" ? "▲" : "▼"}
                      </span>
                    )}
                  </span>
                  {stat && (
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
                  )}
                  <button
                    type="button"
                    onClick={() => remove(p)}
                    aria-label={`Stop tracking ${p}`}
                    className="text-faint transition hover:text-down"
                  >
                    ✕
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      )}
      <p className="mt-2 text-xs text-faint">Streaming from Coinbase · trade them in the simulator.</p>
    </section>
  );
}
