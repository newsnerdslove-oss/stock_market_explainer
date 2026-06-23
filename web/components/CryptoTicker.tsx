"use client";

import Link from "next/link";
import { useCryptoPrices } from "@/lib/crypto/useCryptoPrices";
import { useTracked, normalizeCoin } from "@/lib/home/tracked";
import { COMPANY_NAMES } from "@/lib/stocks/names";
import { AddTicker } from "@/components/home/AddTicker";

const KEY = "sme.home.coins.v1";
const DEFAULTS = ["BTC-USD", "ETH-USD"];
const SUGGESTIONS = Object.keys(COMPANY_NAMES)
  .filter((s) => s.includes("-USD"))
  .map((value) => ({ value, label: COMPANY_NAMES[value] }));

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * A live, user-editable crypto price strip streamed over the Coinbase WebSocket —
 * real-time, unlike the home page's delayed stock widget. The hook throttles
 * updates to ~5/sec; the price stays in a steady colour and a brief tint flashes
 * on each change so movement is legible without strobing. A dot shows the
 * connection. Any Coinbase USD pair can be added (a pair the candles backend
 * doesn't map may stream a price here but not open a chart).
 */
export function CryptoTicker() {
  const { list, add, remove } = useTracked(KEY, DEFAULTS, normalizeCoin);
  const { prices, status } = useCryptoPrices(list);

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
        <div className="ml-auto">
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
                <span className="relative flex items-center gap-3 font-mono text-sm text-ink tabular-nums">
                  <span className="flex items-baseline gap-1">
                    {live ? money(live.price) : <span className="text-faint">—</span>}
                    {live && live.dir !== "flat" && (
                      <span className={`text-[10px] ${arrow}`} aria-hidden>
                        {live.dir === "up" ? "▲" : "▼"}
                      </span>
                    )}
                  </span>
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
