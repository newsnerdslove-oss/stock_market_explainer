"use client";

import Link from "next/link";
import { useCryptoPrices } from "@/lib/crypto/useCryptoPrices";

const PRODUCTS = ["BTC-USD", "ETH-USD"];
const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * A live crypto price strip streamed over the Coinbase WebSocket — real-time,
 * unlike the home page's delayed mock-stock widget. The hook throttles updates to
 * ~4/sec; the price stays in a steady colour and a brief tint flashes on each
 * change so movement is legible without strobing. A dot shows the connection.
 */
export function CryptoTicker() {
  const { prices, status } = useCryptoPrices(PRODUCTS);

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-medium text-muted">Live crypto</h2>
        <span
          className={`flex items-center gap-1 text-[10px] uppercase tracking-wide ${status === "open" ? "text-up" : "text-faint"}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${status === "open" ? "bg-up" : "bg-faint"}`} aria-hidden />
          {status === "open" ? "live" : status === "connecting" ? "connecting" : "offline"}
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-strong bg-surface">
        {PRODUCTS.map((p, i) => {
          const live = prices[p];
          const arrow = live?.dir === "up" ? "text-up" : live?.dir === "down" ? "text-down" : "text-faint";
          return (
            <Link
              key={p}
              href={`/symbol/${p}`}
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
              <span className="relative font-mono text-sm text-ink">{p}</span>
              <span className="relative flex items-baseline gap-1 font-mono text-sm text-ink tabular-nums">
                {live ? money(live.price) : <span className="text-faint">—</span>}
                {live && live.dir !== "flat" && (
                  <span className={`text-[10px] ${arrow}`} aria-hidden>
                    {live.dir === "up" ? "▲" : "▼"}
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-faint">Streaming from Coinbase · trade them in the simulator.</p>
    </section>
  );
}
