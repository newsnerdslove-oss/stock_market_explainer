"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/Toast";
import { PayoffDiagram } from "@/components/charts/PayoffDiagram";
import { getQuoteViaApi } from "@/lib/marketService";
import { generateChain, type ChainContract } from "@/lib/options/chain";
import { standardExpiries } from "@/lib/options/sim";
import { contractKey, reservedMargin, type OptionAction } from "@/lib/options/ledger";
import { useTrading } from "@/lib/trading/useTrading";
import type { OptionType } from "@/lib/options/blackScholes";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const prem = (n: number) => n.toFixed(2);

interface Selection {
  type: OptionType;
  strike: number;
}

export function OptionsTrade() {
  const { portfolio, placeOptionOrder, refresh } = useTrading();
  const toast = useToast();

  const [underlying, setUnderlying] = useState("AAPL");
  const [spot, setSpot] = useState<number | null>(null);
  const [loadingSpot, setLoadingSpot] = useState(false);
  const [now, setNow] = useState<Date | null>(null); // set after mount (no SSR mismatch)
  const [expiryIdx, setExpiryIdx] = useState(0);
  const [sel, setSel] = useState<Selection | null>(null);
  const [contracts, setContracts] = useState("1");
  const [busy, setBusy] = useState(false);

  useEffect(() => setNow(new Date()), []);

  // Fetch the underlying spot when the symbol changes.
  useEffect(() => {
    const sym = underlying.trim().toUpperCase();
    if (!sym) {
      setSpot(null);
      return;
    }
    let cancelled = false;
    setLoadingSpot(true);
    getQuoteViaApi(sym)
      .then((q) => !cancelled && setSpot(q.price))
      .catch(() => !cancelled && setSpot(null))
      .finally(() => !cancelled && setLoadingSpot(false));
    return () => {
      cancelled = true;
    };
  }, [underlying]);

  const expiries = useMemo(() => (now ? standardExpiries(now) : []), [now]);

  const chain = useMemo(() => {
    if (spot == null || !expiries.length) return null;
    return generateChain({
      spot,
      expiriesInDays: expiries.map((e) => e.days),
      expiryLabels: expiries.map((e) => e.label),
      strikesEachSide: 6,
    });
  }, [spot, expiries]);

  const expiry = expiries[expiryIdx];
  const chainExpiry = chain?.[expiryIdx];

  // The selected contract (from the chain, so it carries price + Greeks).
  const selected: ChainContract | null = useMemo(() => {
    if (!sel || !chainExpiry) return null;
    const row = chainExpiry.rows.find((r) => r.strike === sel.strike);
    return row ? row[sel.type] : null;
  }, [sel, chainExpiry]);

  const heldKey = sel && expiry ? contractKey({ underlying: underlying.trim().toUpperCase(), type: sel.type, strike: sel.strike, expiry: expiry.date }) : null;
  const heldQty = heldKey ? (portfolio.optionLegs[heldKey]?.qty ?? 0) : 0;
  const buyingPower = portfolio.cash - reservedMargin({ cash: portfolio.cash, realized: portfolio.realized, legs: portfolio.optionLegs });
  // Margin a write of the selected contract would reserve (put: cash-secured; call: underlying value).
  const writeMargin = sel ? (sel.type === "put" ? sel.strike : spot ?? 0) * 100 * (Number(contracts) || 1) : 0;

  async function trade(action: OptionAction) {
    if (!sel || !expiry) return;
    const n = Number(contracts);
    if (!Number.isInteger(n) || n <= 0) {
      toast("Enter a whole number of contracts.", "err");
      return;
    }
    setBusy(true);
    const res = await placeOptionOrder({
      underlying: underlying.trim().toUpperCase(),
      type: sel.type,
      strike: sel.strike,
      expiry: expiry.date,
      action,
      contracts: n,
    });
    setBusy(false);
    if (res.status === "rejected") {
      toast(res.reason ?? "Order rejected.", "err");
    } else {
      const verb = action.startsWith("buy") ? "Bought" : action === "sell_to_open" ? "Wrote" : "Sold";
      toast(`${verb} ${n} ${underlying.toUpperCase()} ${sel.strike}${sel.type === "call" ? "C" : "P"} @ ${money(res.premiumPerShare ?? 0)}`, "ok");
      void refresh();
    }
  }

  return (
    <div className="space-y-4">
      {/* learn tie-in */}
      <p className="text-xs text-muted">
        New to options? Try the{" "}
        <Link href="/learn/options-greeks" className="text-learn hover:opacity-80">Greeks lab</Link>{" "}
        and the{" "}
        <Link href="/learn/options-strategy-matrix" className="text-learn hover:opacity-80">strategy builder</Link>.
      </p>

      {/* underlying + spot */}
      <div className="flex flex-wrap items-end gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-[11px] font-medium uppercase tracking-wide text-faint">Underlying</span>
          <input
            value={underlying}
            onChange={(e) => {
              setUnderlying(e.target.value);
              setSel(null);
            }}
            placeholder="AAPL"
            className="w-32 rounded-md border border-strong bg-canvas px-3 py-2 text-sm uppercase text-ink placeholder:text-faint focus:border-learn focus:outline-none"
          />
        </label>
        <div className="text-sm text-muted">
          {loadingSpot ? "…" : spot != null ? <>Spot <span className="font-mono text-ink">{money(spot)}</span></> : <span className="text-down">no quote</span>}
        </div>
      </div>

      {!now || spot == null || !chain ? (
        <div className="h-40 animate-pulse rounded-lg border border-hairline bg-surface/50" aria-hidden />
      ) : (
        <>
          {/* expiry tabs */}
          <div className="flex flex-wrap gap-1.5">
            {expiries.map((e, i) => (
              <button
                key={e.date}
                type="button"
                onClick={() => {
                  setExpiryIdx(i);
                  setSel(null);
                }}
                className={`rounded-full border px-2.5 py-1 text-xs transition ${i === expiryIdx ? "border-learn bg-learn/15 text-ink" : "border-strong text-muted hover:text-ink"}`}
              >
                {e.label} <span className="text-faint">· {e.days}d</span>
              </button>
            ))}
          </div>

          {/* chain table: call | strike | put */}
          <div className="overflow-hidden rounded-lg border border-strong">
            <div className="grid grid-cols-3 bg-surface-2 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-faint">
              <span>Call (Δ)</span>
              <span className="text-center">Strike</span>
              <span className="text-right">Put (Δ)</span>
            </div>
            {chainExpiry!.rows.map((row) => {
              const callSel = sel?.type === "call" && sel.strike === row.strike;
              const putSel = sel?.type === "put" && sel.strike === row.strike;
              return (
                <div key={row.strike} className="grid grid-cols-3 items-center border-t border-hairline text-sm">
                  <button
                    type="button"
                    onClick={() => setSel({ type: "call", strike: row.strike })}
                    className={`px-3 py-2 text-left font-mono transition hover:bg-surface-2 ${callSel ? "bg-learn/15 text-ink" : row.call.moneyness === "ITM" ? "text-ink" : "text-muted"}`}
                  >
                    {prem(row.call.quote.price)} <span className="text-faint">{row.call.quote.greeks.delta.toFixed(2)}</span>
                  </button>
                  <span className={`px-2 py-2 text-center font-mono ${row.call.moneyness === "ATM" ? "font-semibold text-ink" : "text-muted"}`}>{row.strike}</span>
                  <button
                    type="button"
                    onClick={() => setSel({ type: "put", strike: row.strike })}
                    className={`px-3 py-2 text-right font-mono transition hover:bg-surface-2 ${putSel ? "bg-learn/15 text-ink" : row.put.moneyness === "ITM" ? "text-ink" : "text-muted"}`}
                  >
                    <span className="text-faint">{row.put.quote.greeks.delta.toFixed(2)}</span> {prem(row.put.quote.price)}
                  </button>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-faint">Premiums are Black-Scholes model prices (flat IV, European) — a teaching model, not live option quotes.</p>

          {/* selected contract */}
          {selected && expiry && (
            <div className="rounded-lg border border-learn/30 bg-learn/5 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-mono text-sm text-ink">
                  {underlying.toUpperCase()} {selected.strike}{selected.type === "call" ? "C" : "P"} · {expiry.label}
                </h3>
                <span className="text-xs text-muted">
                  {expiry.days} days to expiry
                  {heldQty !== 0 ? ` · you hold ${heldQty > 0 ? `${heldQty} long` : `${-heldQty} short`}` : ""}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                <Stat label="Premium" value={money(selected.quote.price)} />
                <Stat label="Δ Delta" value={selected.quote.greeks.delta.toFixed(3)} />
                <Stat label="Γ Gamma" value={selected.quote.greeks.gamma.toFixed(4)} />
                <Stat label="Θ Theta/day" value={selected.quote.greeks.theta.toFixed(3)} />
                <Stat label="V Vega/pt" value={selected.quote.greeks.vega.toFixed(3)} />
              </div>

              <div className="mt-4">
                <PayoffDiagram
                  legs={[{ instrument: selected.type, side: "long", strike: selected.strike, premium: selected.quote.price, qty: Number(contracts) || 1 }]}
                  title={`Payoff at expiry — ${Number(contracts) || 1} contract${(Number(contracts) || 1) === 1 ? "" : "s"} (×100)`}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-end gap-2">
                <label className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-faint">Contracts</span>
                  <input
                    value={contracts}
                    onChange={(e) => setContracts(e.target.value)}
                    inputMode="numeric"
                    className="w-24 rounded-md border border-strong bg-canvas px-3 py-2 text-sm font-mono text-ink focus:border-learn focus:outline-none"
                  />
                </label>
                {heldQty < 0 ? (
                  <>
                    <button type="button" disabled={busy} onClick={() => trade("sell_to_open")} className="rounded-md bg-down px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40">
                      {busy ? "…" : `Write more · margin ${money(writeMargin)}`}
                    </button>
                    <button type="button" disabled={busy} onClick={() => trade("buy_to_close")} className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2 disabled:opacity-40">
                      Buy to close
                    </button>
                  </>
                ) : (
                  <>
                    <button type="button" disabled={busy} onClick={() => trade("buy_to_open")} className="rounded-md bg-up px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40">
                      {busy ? "…" : `Buy to open · ${money(selected.quote.price * 100 * (Number(contracts) || 1))}`}
                    </button>
                    {heldQty > 0 ? (
                      <button type="button" disabled={busy} onClick={() => trade("sell_to_close")} className="rounded-md border border-strong px-4 py-2 text-sm text-ink transition hover:bg-surface-2 disabled:opacity-40">
                        Sell to close
                      </button>
                    ) : (
                      <button type="button" disabled={busy} onClick={() => trade("sell_to_open")} className="rounded-md bg-down px-4 py-2 text-sm font-medium text-canvas transition hover:opacity-90 disabled:opacity-40">
                        {busy ? "…" : `Write (sell) · margin ${money(writeMargin)}`}
                      </button>
                    )}
                  </>
                )}
              </div>
              <p className="mt-2 text-xs text-faint">
                Buying power <span className="font-mono text-muted">{money(buyingPower)}</span> · writing reserves collateral (put: cash-secured, call: underlying value).
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-hairline bg-surface px-3 py-2">
      <div className="text-[11px] uppercase tracking-wide text-faint">{label}</div>
      <div className="mt-0.5 font-mono text-sm text-ink">{value}</div>
    </div>
  );
}
