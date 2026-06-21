"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/Toast";
import { useTrading } from "@/lib/trading/useTrading";
import { markPremium, daysToExpiry } from "@/lib/options/sim";
import { legUnrealized, CONTRACT_MULTIPLIER, type OptionLeg } from "@/lib/options/ledger";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (n: number) => `${n >= 0 ? "+" : "-"}${money(Math.abs(n))}`;
const pnlColor = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");
const label = (l: OptionLeg) => `${l.underlying} ${l.strike}${l.type === "call" ? "C" : "P"}`;

/** Held option legs, marked to a live Black-Scholes premium, with a close action. */
export function OptionPositions() {
  const { portfolio, prices, placeOptionOrder, refresh } = useTrading();
  const toast = useToast();
  const [now, setNow] = useState<Date | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  useEffect(() => setNow(new Date()), []);

  const legs = Object.values(portfolio.optionLegs);
  if (legs.length === 0) return null;

  async function close(l: OptionLeg) {
    const key = `${l.underlying}|${l.type}|${l.strike}|${l.expiry}`;
    setBusy(key);
    // Long legs sell to close; short legs buy to close.
    const action = l.qty > 0 ? "sell_to_close" : "buy_to_close";
    const res = await placeOptionOrder({ underlying: l.underlying, type: l.type, strike: l.strike, expiry: l.expiry, action, contracts: Math.abs(l.qty) });
    setBusy(null);
    if (res.status === "rejected") toast(res.reason ?? "Couldn't close.", "err");
    else {
      toast(`Closed ${Math.abs(l.qty)} ${label(l)} @ ${money(res.premiumPerShare ?? 0)}`, "ok");
      void refresh();
    }
  }

  return (
    <section className="rounded-lg border border-strong bg-surface p-5">
      <h2 className="text-sm font-medium text-ink">Options</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-faint">
              <th className="pb-1 font-normal">Contract</th>
              <th className="pb-1 text-right font-normal">Qty</th>
              <th className="pb-1 text-right font-normal">Avg</th>
              <th className="pb-1 text-right font-normal">Mark</th>
              <th className="pb-1 text-right font-normal">Value</th>
              <th className="pb-1 text-right font-normal">Unrealized</th>
              <th className="pb-1 text-right font-normal">Exp</th>
              <th className="pb-1" />
            </tr>
          </thead>
          <tbody className="font-mono">
            {legs.map((l) => {
              const key = `${l.underlying}|${l.type}|${l.strike}|${l.expiry}`;
              const spot = prices[l.underlying];
              const mark = spot != null && now ? markPremium(l, spot, now) : l.avgPrice;
              const value = mark * CONTRACT_MULTIPLIER * l.qty;
              const u = legUnrealized(l, mark);
              const dte = now ? daysToExpiry(l.expiry, now) : null;
              return (
                <tr key={key} className="border-t border-hairline">
                  <td className="py-1.5 font-sans text-ink">
                    {label(l)} <span className="text-xs text-faint">{l.expiry}</span>
                  </td>
                  <td className={`py-1.5 text-right ${l.qty < 0 ? "text-down" : "text-muted"}`}>{l.qty > 0 ? l.qty : `${-l.qty} short`}</td>
                  <td className="py-1.5 text-right text-muted">{money(l.avgPrice)}</td>
                  <td className="py-1.5 text-right text-muted">{money(mark)}</td>
                  <td className="py-1.5 text-right text-muted">{money(value)}</td>
                  <td className={`py-1.5 text-right ${pnlColor(u)}`}>{signed(u)}</td>
                  <td className={`py-1.5 text-right ${dte != null && dte <= 2 ? "text-streak" : "text-faint"}`}>{dte != null ? `${dte}d` : "—"}</td>
                  <td className="py-1.5 text-right">
                    <button
                      type="button"
                      disabled={busy === key}
                      onClick={() => close(l)}
                      className="font-sans text-xs text-muted transition hover:text-ink disabled:opacity-40"
                    >
                      {busy === key ? "…" : "Close"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-faint">Marked to a Black-Scholes model premium · cash-settled at expiry.</p>
    </section>
  );
}
