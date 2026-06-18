"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/Toast";
import { DailyChallengeCard } from "@/components/DailyChallenge";
import { isCryptoSymbol } from "@/lib/crypto/products";
import { getQuoteViaApi } from "@/lib/marketService";
import { TradingProvider, useTrading } from "@/lib/trading/useTrading";
import { equity, unrealizedPnL } from "@/lib/trading/ledger";
import type { OrderSide, OrderType } from "@/lib/trading/schema";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toLocaleString("en-US", { maximumFractionDigits: 6 }));
const signed = (n: number) => `${n >= 0 ? "+" : "-"}${money(Math.abs(n))}`;
const pnlColor = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");

export function Simulator() {
  return (
    <TradingProvider>
      <SimulatorBody />
    </TradingProvider>
  );
}

function SimulatorBody() {
  const { portfolio, prices, ready, configured, refresh } = useTrading();
  // Quote freshness — set on the client (avoids an SSR/hydration mismatch).
  const [refreshedAt, setRefreshedAt] = useState<number | null>(null);
  useEffect(() => setRefreshedAt(Date.now()), []);
  const doRefresh = () => {
    void refresh();
    setRefreshedAt(Date.now());
  };

  if (!configured) {
    return (
      <p className="mt-8 rounded-lg border border-streak/40 bg-streak/10 p-4 text-sm text-streak">
        The simulator needs the local Supabase backend running and configured. Start it with{" "}
        <code className="font-mono">supabase start</code> and set the NEXT_PUBLIC_SUPABASE_* env vars.
      </p>
    );
  }
  if (!ready) return <div className="mt-8 h-40 animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />;

  const positions = Object.values(portfolio.positions);
  const eq = equity(portfolio, prices);
  let unreal = 0;
  for (const p of positions) unreal += unrealizedPnL(p.avgCost, prices[p.symbol] ?? p.avgCost, p.qty);

  return (
    <div className="mt-8 space-y-6">
      <DailyChallengeCard />

      {/* account summary */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Equity" value={money(eq)} />
        <Stat label="Cash" value={money(portfolio.cash)} />
        <Stat label="Realized P&L" value={signed(portfolio.realized)} color={pnlColor(portfolio.realized)} />
        <Stat label="Unrealized P&L" value={signed(unreal)} color={pnlColor(unreal)} />
      </section>

      <OrderTicket onPlaced={refresh} />

      {/* positions */}
      <section className="rounded-lg border border-strong bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-medium text-ink">Positions</h2>
          <div className="flex items-center gap-3">
            {refreshedAt && (
              <span className="font-mono text-xs text-faint" title="Quotes are delayed mock data">
                as of {new Date(refreshedAt).toLocaleTimeString()} · delayed
              </span>
            )}
            <button type="button" onClick={doRefresh} className="text-xs text-muted transition hover:text-ink">
              Refresh prices
            </button>
          </div>
        </div>
        {positions.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No positions yet — place an order below.</p>
        ) : (
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-faint">
                <th className="pb-1 font-normal">Symbol</th>
                <th className="pb-1 text-right font-normal">Qty</th>
                <th className="pb-1 text-right font-normal">Avg cost</th>
                <th className="pb-1 text-right font-normal">Last</th>
                <th className="pb-1 text-right font-normal">Unrealized</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {positions.map((p) => {
                const last = prices[p.symbol] ?? p.avgCost;
                const u = unrealizedPnL(p.avgCost, last, p.qty);
                return (
                  <tr key={p.symbol} className="border-t border-hairline">
                    <td className="py-1.5 font-sans text-ink">{p.symbol}</td>
                    <td className="py-1.5 text-right text-muted">{fmtQty(p.qty)}</td>
                    <td className="py-1.5 text-right text-muted">{money(p.avgCost)}</td>
                    <td className="py-1.5 text-right text-muted">{money(last)}</td>
                    <td className={`py-1.5 text-right ${pnlColor(u)}`}>{signed(u)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>

      {/* recent orders */}
      {portfolio.orders.length > 0 && (
        <section className="rounded-lg border border-strong bg-surface p-5">
          <h2 className="text-sm font-medium text-ink">Recent orders</h2>
          <ul className="mt-3 space-y-1.5 font-mono text-xs">
            {portfolio.orders.slice(0, 8).map((o) => (
              <li key={o.id} className="flex items-center justify-between text-muted">
                <span>
                  <span className={o.side === "buy" ? "text-up" : "text-down"}>{o.side.toUpperCase()}</span> {fmtQty(o.qty)} {o.symbol}{" "}
                  <span className="text-faint">
                    {o.type}{o.type === "limit" && o.limitPrice ? ` @ ${money(o.limitPrice)}` : ""}
                  </span>
                </span>
                <span className={o.status === "filled" ? "text-ink" : o.status === "pending" ? "text-streak" : "text-faint"}>
                  {o.status}{o.filledPrice ? ` ${money(o.filledPrice)}` : ""}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-lg border border-strong bg-surface p-4">
      <p className={`font-mono text-lg ${color ?? "text-ink"}`}>{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

function OrderTicket({ onPlaced }: { onPlaced: () => void }) {
  const { placeOrder } = useTrading();
  const toast = useToast();
  const [symbol, setSymbol] = useState("AAPL");
  const [side, setSide] = useState<OrderSide>("buy");
  const [type, setType] = useState<OrderType>("market");
  const [qty, setQty] = useState("10");
  const [limit, setLimit] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "warn" | "err"; text: string } | null>(null);
  // Last price for the typed symbol, to preview an order's cost before submitting.
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  useEffect(() => {
    const sym = symbol.trim().toUpperCase();
    if (!sym) {
      setLastPrice(null);
      return;
    }
    let cancelled = false;
    getQuoteViaApi(sym)
      .then((q) => !cancelled && setLastPrice(q.price))
      .catch(() => !cancelled && setLastPrice(null));
    return () => {
      cancelled = true;
    };
  }, [symbol]);

  const estCost = lastPrice != null && Number(qty) > 0 ? lastPrice * Number(qty) : null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const res = await placeOrder({
      symbol: symbol.trim().toUpperCase(),
      side,
      type,
      qty: Number(qty),
      limitPrice: type === "limit" ? Number(limit) : null,
    });
    setBusy(false);
    if (res.status === "rejected") {
      setMsg({ kind: "err", text: res.reason ?? "Order rejected." });
    } else if (res.status === "pending") {
      setMsg({ kind: "warn", text: "Limit order placed — it'll fill when the price crosses. Use Refresh to re-check." });
    } else {
      setMsg({ kind: "ok", text: `Filled at ${money(res.filledPrice ?? 0)}.` });
      toast(
        `Filled: ${side === "buy" ? "bought" : "sold"} ${qty} ${symbol.trim().toUpperCase()} @ ${money(res.filledPrice ?? 0)}`,
        "ok",
      );
    }
    onPlaced();
  }

  const inputCls = "rounded-md border border-strong bg-canvas px-3 py-2 text-sm text-ink placeholder:text-faint focus:border-learn focus:outline-none";

  return (
    <section className="rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-ink">Place an order</h2>
        {symbol.trim() && (
          <Link
            href={`/symbol/${encodeURIComponent(symbol.trim().toUpperCase())}`}
            className="text-xs text-learn transition hover:opacity-80"
          >
            View {symbol.trim().toUpperCase()} chart →
          </Link>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["AAPL", "MSFT", "BTC-USD", "ETH-USD"].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setSymbol(s);
              if (isCryptoSymbol(s)) setQty("0.1"); // fractional — 1 BTC would be most of the account
            }}
            className="rounded-full border border-strong px-2.5 py-1 text-xs text-muted transition hover:text-ink"
          >
            {s}
            {isCryptoSymbol(s) && <span className="ml-1 text-up">· live</span>}
          </button>
        ))}
      </div>
      <form onSubmit={submit} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <input value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="AAPL" aria-label="Symbol" className={`${inputCls} uppercase`} />
        <select value={side} onChange={(e) => setSide(e.target.value as OrderSide)} aria-label="Side" className={inputCls}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value as OrderType)} aria-label="Order type" className={inputCls}>
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>
        <input value={qty} onChange={(e) => setQty(e.target.value)} inputMode="decimal" placeholder="Qty" aria-label="Quantity" className={`${inputCls} font-mono`} />
        {type === "limit" && (
          <input value={limit} onChange={(e) => setLimit(e.target.value)} inputMode="decimal" placeholder="Limit price" aria-label="Limit price" className={`${inputCls} col-span-2 font-mono`} />
        )}
        <button
          type="submit"
          disabled={busy}
          className={`col-span-2 rounded-md px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40 ${side === "buy" ? "bg-up" : "bg-down"}`}
        >
          {busy ? "…" : `${side === "buy" ? "Buy" : "Sell"} ${qty || "0"} ${symbol.toUpperCase() || ""}`}
        </button>
      </form>
      {msg && (
        <p className={`mt-3 text-sm ${msg.kind === "ok" ? "text-up" : msg.kind === "warn" ? "text-streak" : "text-down"}`} role="alert">
          {msg.text}
        </p>
      )}
      {estCost != null && (
        <p className="mt-2 text-xs text-muted">
          ≈ <span className="font-mono text-ink">{money(estCost)}</span> at last{" "}
          <span className="font-mono">{money(lastPrice as number)}</span>
        </p>
      )}
      <p className="mt-2 text-xs text-faint">Paper trading only · ${"​"}100k virtual cash · market buys fill at the ask, sells at the bid.</p>
    </section>
  );
}
