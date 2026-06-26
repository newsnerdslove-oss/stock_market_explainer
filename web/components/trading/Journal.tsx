"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TradingProvider, useTrading } from "@/lib/trading/useTrading";
import { closesFromOrders, tradeStats } from "@/lib/positions/metrics";
import type { Order } from "@/lib/trading/schema";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (n: number) => `${n >= 0 ? "+" : "-"}${money(Math.abs(n))}`;
const pnl = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");

type Mode = "all" | "live" | "replay";

function Body() {
  const { portfolio } = useTrading();
  const [mode, setMode] = useState<Mode>("all");

  // Match a close back to its sell order (same symbol + timestamp) for thesis/replay tags.
  const orderByKey = useMemo(() => {
    const m = new Map<string, Order>();
    for (const o of portfolio.orders) if (o.side === "sell") m.set(`${o.symbol}@${o.createdAt}`, o);
    return m;
  }, [portfolio.orders]);

  const orders = useMemo(
    () => portfolio.orders.filter((o) => (mode === "all" ? true : mode === "replay" ? o.replay : !o.replay)),
    [portfolio.orders, mode],
  );
  const closes = useMemo(() => closesFromOrders(orders), [orders]);
  const stats = useMemo(() => tradeStats(closes), [closes]);

  const tiles: [string, string, string?][] = [
    ["Win rate", stats.closes ? `${Math.round(stats.winRate * 100)}%` : "—", `${stats.wins}W · ${stats.losses}L`],
    ["Expectancy", stats.closes ? signed(stats.expectancy) : "—", "per trade"],
    ["Profit factor", stats.closes ? (stats.profitFactor === Infinity ? "∞" : stats.profitFactor.toFixed(2)) : "—", "gross win ÷ loss"],
    ["Avg win / loss", stats.closes ? `${signed(stats.avgWin)} / ${signed(stats.avgLoss)}` : "—"],
    ["Total realized", stats.closes ? signed(stats.totalRealized) : "—", `${stats.closes} closed`],
  ];

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">Trade journal</h1>
          <p className="mt-1 font-semibold text-muted">Your closed round-trips — the honest scoreboard.</p>
        </div>
        <div className="inline-flex rounded-md border border-strong p-0.5 text-sm">
          {(["all", "live", "replay"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded px-3 py-1 capitalize transition ${mode === m ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {tiles.map(([label, value, sub]) => (
          <div key={label} className="rounded-[22px] border border-strong bg-surface p-4 shadow-sm">
            <div className="text-xs font-bold text-muted">{label}</div>
            <div className={`mt-1 font-mono text-xl font-extrabold ${label === "Total realized" || label === "Expectancy" ? pnl(label === "Total realized" ? stats.totalRealized : stats.expectancy) : "text-ink"}`}>
              {value}
            </div>
            {sub && <div className="mt-0.5 text-[11px] font-semibold text-faint">{sub}</div>}
          </div>
        ))}
      </section>

      <section className="rounded-[22px] border border-strong bg-surface p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-bold text-ink">Recent closes</h2>
        {closes.length === 0 ? (
          <p className="text-sm font-medium text-muted">
            No closed trades yet. Place — and close — some paper trades on the{" "}
            <Link href="/simulator" className="font-bold text-learn hover:underline">
              simulator
            </Link>{" "}
            or in chart replay.
          </p>
        ) : (
          <ul className="divide-y divide-hairline">
            {closes.slice(0, 50).map((c, i) => {
              const o = orderByKey.get(`${c.symbol}@${c.at}`);
              return (
                <li key={i} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2 text-sm">
                  <span className="font-mono font-bold text-ink">{c.symbol}</span>
                  <span className="text-faint">{c.at.slice(0, 10)}</span>
                  <span className="text-muted">{c.qty} @ {money(c.price)}</span>
                  {o?.replay && <span className="rounded-full bg-learn/10 px-2 py-0.5 text-[11px] font-bold text-learn">replay</span>}
                  <span className={`ml-auto font-mono font-bold ${pnl(c.realized)}`}>{signed(c.realized)}</span>
                  {o?.thesis && <span className="w-full text-xs font-medium text-faint">“{o.thesis}”</span>}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}

export function Journal() {
  return (
    <TradingProvider>
      <Body />
    </TradingProvider>
  );
}
