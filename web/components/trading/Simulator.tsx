"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/Toast";
import { DailyChallengeCard } from "@/components/DailyChallenge";
import { OptionsTrade } from "@/components/trading/OptionsTrade";
import { OptionPositions } from "@/components/trading/OptionPositions";
import { PositionsTable } from "@/components/trading/PositionsTable";
import { PositionDrillDown } from "@/components/trading/PositionDrillDown";
import { tradesFromOrders } from "@/lib/positions/metrics";
import { coinbaseProduct, isCryptoSymbol } from "@/lib/crypto/products";
import { useCryptoPrices } from "@/lib/crypto/useCryptoPrices";
import { getQuoteViaApi, getSnapshotViaApi, type Snapshot } from "@/lib/marketService";
import { TradingProvider, useTrading } from "@/lib/trading/useTrading";
import { equity, unrealizedPnL } from "@/lib/trading/ledger";
import { legUnrealized, CONTRACT_MULTIPLIER } from "@/lib/options/ledger";
import { markPremium } from "@/lib/options/sim";
import { Icon } from "@/components/kit/Icon";
import { A } from "@/components/kit/theme";
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
  const [tradeMode, setTradeMode] = useState<"stocks" | "options">("stocks");
  const [drillSymbol, setDrillSymbol] = useState<string | null>(null);
  // Quote freshness — set on the client (avoids an SSR/hydration mismatch).
  const [refreshedAt, setRefreshedAt] = useState<number | null>(null);
  useEffect(() => setRefreshedAt(Date.now()), []);
  const doRefresh = () => {
    void refresh();
    setRefreshedAt(Date.now());
  };

  // Slow-moving daily stats (prior close + 52-week range) for the positions table.
  // Fetched whenever the set of held symbols changes — separate from the fast quote
  // poll, since they only move once a day.
  const [snapshots, setSnapshots] = useState<Record<string, Snapshot>>({});
  const heldKey = Object.keys(portfolio.positions).join(",");
  useEffect(() => {
    const syms = heldKey.split(",").filter(Boolean);
    if (!syms.length) return;
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(
        syms.map(async (s) => {
          const snap = await getSnapshotViaApi(s).catch(() => null);
          return snap ? ([s, snap] as const) : null;
        }),
      );
      if (cancelled) return;
      setSnapshots((prev) => {
        const next = { ...prev };
        for (const e of entries) if (e) next[e[0]] = e[1];
        return next;
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [heldKey]);

  // Stream live prices for held crypto over the Coinbase WS and merge them over
  // the REST `prices`, so equity and unrealized P&L tick in real time. (Stocks
  // stay on REST — the free Alpaca IEX tier has no WS here.)
  const heldCryptoProducts = useMemo(() => {
    const set = new Set<string>();
    for (const sym of Object.keys(portfolio.positions)) {
      const product = coinbaseProduct(sym);
      if (product) set.add(product);
    }
    return [...set];
  }, [portfolio.positions]);
  const { prices: livePrices } = useCryptoPrices(heldCryptoProducts);
  const marked = useMemo(() => {
    const m: Record<string, number> = { ...prices };
    for (const sym of Object.keys(portfolio.positions)) {
      const product = coinbaseProduct(sym);
      if (product && livePrices[product]) m[sym] = livePrices[product].price;
    }
    return m;
  }, [prices, livePrices, portfolio.positions]);
  const isLive = (sym: string) => {
    const product = coinbaseProduct(sym);
    return Boolean(product && livePrices[product]);
  };

  if (!ready) return <div className="mt-8 h-40 animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />;

  const positions = Object.values(portfolio.positions);
  let unreal = 0;
  for (const p of positions) unreal += unrealizedPnL(p.avgCost, marked[p.symbol] ?? p.avgCost, p.qty);

  // Fold option legs into equity + unrealized (marked to a Black-Scholes premium).
  // The body only renders post-`ready` (client), so new Date() is hydration-safe.
  let optionValue = 0;
  for (const l of Object.values(portfolio.optionLegs)) {
    const spot = marked[l.underlying];
    if (spot == null) continue;
    const mark = markPremium(l, spot, new Date());
    optionValue += mark * CONTRACT_MULTIPLIER * l.qty;
    unreal += legUnrealized(l, mark);
  }
  const eq = equity(portfolio, marked) + optionValue;
  const totalPL = portfolio.realized + unreal;
  const posCount = positions.length + Object.keys(portfolio.optionLegs).length;

  // Today's change: (mark − prior close) × qty over stock positions that have a snapshot.
  // Options are excluded (no prior-premium mark), matching the per-position drilldown.
  let dayPL = 0;
  let dayHasData = false;
  for (const p of positions) {
    const prev = snapshots[p.symbol]?.prevClose;
    if (prev == null) continue;
    dayPL += ((marked[p.symbol] ?? p.avgCost) - prev) * p.qty;
    dayHasData = true;
  }
  const dayPriorVal = eq - dayPL;
  const dayPLPct = dayHasData && dayPriorVal > 0 ? (dayPL / dayPriorVal) * 100 : 0;

  return (
    <div className="mt-8 space-y-6">
      <DailyChallengeCard />

      {/* account header — Paper portfolio */}
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-muted">Paper portfolio</span>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-4xl font-extrabold tracking-tight text-ink">{money(eq)}</span>
              {dayHasData ? (
                <span className={`text-base font-extrabold ${pnlColor(dayPL)}`}>
                  {signed(dayPL)} ({dayPL >= 0 ? "+" : ""}
                  {dayPLPct.toFixed(1)}%) today
                </span>
              ) : (
                <span className="text-base font-bold text-faint">— today</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* stat tiles */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile icon="activity" color={dayHasData ? (dayPL >= 0 ? A.green : A.red) : A.faint} label="Day P&L" value={dayHasData ? signed(dayPL) : "—"} valueClass={dayHasData ? pnlColor(dayPL) : "text-faint"} />
        <Tile icon="trending-up" color={totalPL >= 0 ? A.green : A.red} label="Total P&L" value={signed(totalPL)} valueClass={pnlColor(totalPL)} />
        <Tile icon="wallet" color={A.primary} label="Buying power" value={money(portfolio.cash)} />
        <Tile icon="layers" color={A.amberInk} label="Positions" value={String(posCount)} />
      </section>

      {/* stocks vs options ticket */}
      <section className="rounded-[22px] border border-learn/30 bg-learn/5 p-5">
        <div className="mb-4 inline-flex rounded-md border border-strong p-0.5 text-sm">
          {(["stocks", "options"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setTradeMode(m)}
              className={`rounded px-3 py-1 capitalize transition ${tradeMode === m ? "bg-learn text-canvas" : "text-muted hover:text-ink"}`}
            >
              {m}
            </button>
          ))}
        </div>
        {tradeMode === "stocks" ? <OrderTicket onPlaced={refresh} bare /> : <OptionsTrade />}
      </section>

      {/* positions */}
      <section className="rounded-[22px] border border-strong bg-surface shadow-sm p-5">
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
          <PositionsTable positions={positions} marked={marked} isLive={isLive} equity={eq} snapshots={snapshots} onSelect={setDrillSymbol} />
        )}
      </section>

      {drillSymbol && portfolio.positions[drillSymbol] && (
        <PositionDrillDown
          position={portfolio.positions[drillSymbol]}
          trades={tradesFromOrders(portfolio.orders)[drillSymbol] ?? []}
          mark={marked[drillSymbol] ?? portfolio.positions[drillSymbol].avgCost}
          snapshot={snapshots[drillSymbol]}
          equity={eq}
          onClose={() => setDrillSymbol(null)}
        />
      )}

      <OptionPositions />

      {/* recent orders */}
      {portfolio.orders.length > 0 && (
        <section className="rounded-[22px] border border-strong bg-surface shadow-sm p-5">
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

      {!configured && (
        <p className="text-xs text-faint">
          Saved on this device. Sign-in sync isn’t configured, so your paper portfolio won’t follow you to another browser.
        </p>
      )}
    </div>
  );
}

function Tile({ icon, color, label, value, valueClass }: { icon: string; color: string; label: string; value: string; valueClass?: string }) {
  return (
    <div className="rounded-[22px] border border-strong bg-surface p-[18px] shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold text-muted">
        <Icon name={icon} size={16} color={color} /> {label}
      </div>
      <p className={`font-mono text-[22px] font-extrabold ${valueClass ?? "text-ink"}`}>{value}</p>
    </div>
  );
}

function OrderTicket({ onPlaced, bare = false }: { onPlaced: () => void; bare?: boolean }) {
  const { placeOrder } = useTrading();
  const toast = useToast();
  const [symbol, setSymbol] = useState("AAPL");
  const [side, setSide] = useState<OrderSide>("buy");
  const [type, setType] = useState<OrderType>("market");
  const [qty, setQty] = useState("10");
  const [limit, setLimit] = useState("");
  const [busy, setBusy] = useState(false);
  // Pre-fill from ?symbol= (trade-from-chart). Client-only; no Suspense needed.
  useEffect(() => {
    const sym = new URLSearchParams(window.location.search).get("symbol");
    if (sym) setSymbol(sym.toUpperCase());
  }, []);
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
  // Quantity is a count of shares (stocks) or coin units (crypto) — never dollars.
  const unitLabel = isCryptoSymbol(symbol.trim().toUpperCase()) ? "Units" : "Shares";

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
  const labelCls = "text-[11px] font-medium uppercase tracking-wide text-faint";

  const Wrapper = bare ? "div" : "section";
  return (
    <Wrapper className={bare ? "" : "rounded-[22px] border border-learn/30 bg-learn/5 p-5"}>
      <div className="flex items-center justify-between">
        {!bare && <h2 className="text-sm font-medium text-ink">Place an order</h2>}
        {symbol.trim() && (
          <Link
            href={`/symbol/${encodeURIComponent(symbol.trim().toUpperCase())}`}
            className="ml-auto text-xs text-learn transition hover:opacity-80"
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
        <label className="flex flex-col gap-1">
          <span className={labelCls}>Symbol</span>
          <input value={symbol} onChange={(e) => setSymbol(e.target.value)} placeholder="AAPL" className={`${inputCls} uppercase`} />
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelCls}>Side</span>
          <select value={side} onChange={(e) => setSide(e.target.value as OrderSide)} className={inputCls}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelCls}>Type</span>
          <select value={type} onChange={(e) => setType(e.target.value as OrderType)} className={inputCls}>
            <option value="market">Market</option>
            <option value="limit">Limit</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className={labelCls}>{unitLabel}</span>
          <input value={qty} onChange={(e) => setQty(e.target.value)} inputMode="decimal" placeholder="0" className={`${inputCls} font-mono`} />
        </label>
        {type === "limit" && (
          <label className="col-span-2 flex flex-col gap-1">
            <span className={labelCls}>Limit price ($)</span>
            <input value={limit} onChange={(e) => setLimit(e.target.value)} inputMode="decimal" placeholder="0.00" className={`${inputCls} font-mono`} />
          </label>
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
          ≈ <span className="font-mono text-ink">{money(estCost)}</span> — {qty} {unitLabel.toLowerCase()} at{" "}
          <span className="font-mono">{money(lastPrice as number)}</span>
        </p>
      )}
      <p className="mt-2 text-xs text-faint">Paper trading only · ${"​"}100k virtual cash · market buys fill at the ask, sells at the bid.</p>
    </Wrapper>
  );
}
