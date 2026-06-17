"use client";

import Link from "next/link";
import { useCryptoPrices } from "@/lib/crypto/useCryptoPrices";

const PRODUCTS = ["BTC-USD", "ETH-USD"];
const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * A live crypto price strip streamed over the Coinbase WebSocket — real-time,
 * unlike the home page's delayed mock-stock widget. Each row flashes its tick
 * direction; a dot shows the live connection.
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
          const tone = live?.dir === "up" ? "text-up" : live?.dir === "down" ? "text-down" : "text-ink";
          return (
            <Link
              key={p}
              href={`/symbol/${p}`}
              className={`flex items-center justify-between px-4 py-3 transition hover:bg-surface-2 ${i > 0 ? "border-t border-hairline" : ""}`}
            >
              <span className="font-mono text-sm text-ink">{p}</span>
              <span className={`font-mono text-sm ${tone}`}>
                {live ? money(live.price) : <span className="text-faint">—</span>}
                {live && live.dir !== "flat" && (
                  <span className="ml-1 text-xs" aria-hidden>
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
