"use client";

// The metadata-rich holdings table (Fidelity-style) — company name, quantity,
// average cost basis, cost basis total, last, today's gain/loss, current value,
// total gain/loss $ and %, % of account, and a 52-week range bar. Per-position
// metrics come from the Phase-1 engine; today's gain/loss + the 52-week range come
// from the snapshot endpoint (prior close + 52wk hi/lo).

import { positionMetrics } from "@/lib/positions/metrics";
import { companyName } from "@/lib/stocks/names";
import type { Position } from "@/lib/trading/schema";
import type { Snapshot } from "@/lib/marketService";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (n: number) => `${n >= 0 ? "+" : "−"}${money(Math.abs(n))}`;
const pct = (n: number) => `${n >= 0 ? "+" : "−"}${(Math.abs(n) * 100).toFixed(2)}%`;
const pnlColor = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");
const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toLocaleString("en-US", { maximumFractionDigits: 6 }));

/** A compact low — • — high bar showing where `last` sits in the 52-week range. */
function RangeBar({ low, high, last }: { low: number; high: number; last: number }) {
  const span = high - low;
  const frac = span > 0 ? Math.min(1, Math.max(0, (last - low) / span)) : 0.5;
  return (
    <div className="inline-flex items-center gap-1" title={`${money(low)} – ${money(high)}`}>
      <span className="text-[10px] text-faint">{money(low)}</span>
      <span className="relative h-1 w-14 rounded-full bg-surface-2">
        <span className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" style={{ left: `${frac * 100}%` }} />
      </span>
      <span className="text-[10px] text-faint">{money(high)}</span>
    </div>
  );
}

export function PositionsTable({
  positions,
  marked,
  isLive,
  equity,
  snapshots,
  onSelect,
}: {
  positions: Position[];
  marked: Record<string, number>;
  isLive: (symbol: string) => boolean;
  equity: number;
  snapshots: Record<string, Snapshot>;
  onSelect?: (symbol: string) => void;
}) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-[900px] text-sm">
        <thead>
          <tr className="text-left text-xs text-faint">
            <th className="pb-1 font-normal">Symbol</th>
            <th className="pb-1 text-right font-normal">Qty</th>
            <th className="pb-1 text-right font-normal">Avg cost</th>
            <th className="pb-1 text-right font-normal">Cost basis</th>
            <th className="pb-1 text-right font-normal">Last</th>
            <th className="pb-1 text-right font-normal">Today</th>
            <th className="pb-1 text-right font-normal">Value</th>
            <th className="pb-1 text-right font-normal">Total G/L</th>
            <th className="pb-1 text-right font-normal">% acct</th>
            <th className="pb-1 text-right font-normal">52-wk range</th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {positions.map((p) => {
            const last = marked[p.symbol] ?? p.avgCost;
            const snap = snapshots[p.symbol];
            const name = companyName(p.symbol);
            const m = positionMetrics(
              p.symbol,
              [{ symbol: p.symbol, side: "buy", qty: p.qty, price: p.avgCost, at: "" }],
              { mark: last, accountEquity: equity > 0 ? equity : undefined, priorClose: snap?.prevClose },
            );
            return (
              <tr key={p.symbol} className="border-t border-hairline align-top">
                <td className="py-1.5">
                  <button
                    type="button"
                    onClick={() => onSelect?.(p.symbol)}
                    className="text-left font-sans text-ink transition hover:text-learn"
                    title="View position history"
                  >
                    {p.symbol} <span className="text-[10px] text-faint">▸</span>
                  </button>
                  {name && <div className="font-sans text-[11px] text-faint">{name}</div>}
                </td>
                <td className="py-1.5 text-right text-muted">{fmtQty(p.qty)}</td>
                <td className="py-1.5 text-right text-muted">{money(p.avgCost)}</td>
                <td className="py-1.5 text-right text-muted">{money(m.costBasisTotal)}</td>
                <td className="py-1.5 text-right text-muted">
                  {isLive(p.symbol) && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-up align-middle" title="Live" aria-hidden />}
                  {money(last)}
                </td>
                <td className={`py-1.5 text-right ${m.todayGainLoss != null ? pnlColor(m.todayGainLoss) : "text-faint"}`}>
                  {m.todayGainLoss != null ? (
                    <>
                      {signed(m.todayGainLoss)}
                      <span className="block text-[10px]">{pct(m.todayGainLossPct ?? 0)}</span>
                    </>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="py-1.5 text-right text-ink">{money(m.marketValue)}</td>
                <td className={`py-1.5 text-right ${pnlColor(m.totalGainLoss)}`}>
                  {signed(m.totalGainLoss)}
                  <span className="block text-[10px]">{pct(m.totalGainLossPct)}</span>
                </td>
                <td className="py-1.5 text-right text-muted">{m.allocationPct != null ? `${(m.allocationPct * 100).toFixed(1)}%` : "—"}</td>
                <td className="py-1.5 text-right">
                  {snap ? <RangeBar low={snap.low52} high={snap.high52} last={last} /> : <span className="text-faint">—</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
