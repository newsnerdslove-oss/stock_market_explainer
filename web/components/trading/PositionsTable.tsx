"use client";

// The metadata-rich holdings table (Fidelity-style) — quantity, average cost basis,
// cost basis total, last, current value, total gain/loss $ and %, and % of account —
// computed from each authoritative position + its live mark via the Phase-1 metrics.
// Today's gain/loss, the 52-week range, and company names need a market-data fetch
// and land in the next sub-phase.

import { positionMetrics } from "@/lib/positions/metrics";
import type { Position } from "@/lib/trading/schema";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (n: number) => `${n >= 0 ? "+" : "−"}${money(Math.abs(n))}`;
const pct = (n: number) => `${n >= 0 ? "+" : "−"}${(Math.abs(n) * 100).toFixed(2)}%`;
const pnlColor = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");
const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toLocaleString("en-US", { maximumFractionDigits: 6 }));

export function PositionsTable({
  positions,
  marked,
  isLive,
  equity,
}: {
  positions: Position[];
  marked: Record<string, number>;
  isLive: (symbol: string) => boolean;
  equity: number;
}) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="text-left text-xs text-faint">
            <th className="pb-1 font-normal">Symbol</th>
            <th className="pb-1 text-right font-normal">Qty</th>
            <th className="pb-1 text-right font-normal">Avg cost</th>
            <th className="pb-1 text-right font-normal">Cost basis</th>
            <th className="pb-1 text-right font-normal">Last</th>
            <th className="pb-1 text-right font-normal">Value</th>
            <th className="pb-1 text-right font-normal">Total G/L</th>
            <th className="pb-1 text-right font-normal">%</th>
            <th className="pb-1 text-right font-normal">% acct</th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {positions.map((p) => {
            const last = marked[p.symbol] ?? p.avgCost;
            const m = positionMetrics(
              p.symbol,
              [{ symbol: p.symbol, side: "buy", qty: p.qty, price: p.avgCost, at: "" }],
              { mark: last, accountEquity: equity > 0 ? equity : undefined },
            );
            return (
              <tr key={p.symbol} className="border-t border-hairline">
                <td className="py-1.5 font-sans text-ink">{p.symbol}</td>
                <td className="py-1.5 text-right text-muted">{fmtQty(p.qty)}</td>
                <td className="py-1.5 text-right text-muted">{money(p.avgCost)}</td>
                <td className="py-1.5 text-right text-muted">{money(m.costBasisTotal)}</td>
                <td className="py-1.5 text-right text-muted">
                  {isLive(p.symbol) && <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-up align-middle" title="Live" aria-hidden />}
                  {money(last)}
                </td>
                <td className="py-1.5 text-right text-ink">{money(m.marketValue)}</td>
                <td className={`py-1.5 text-right ${pnlColor(m.totalGainLoss)}`}>{signed(m.totalGainLoss)}</td>
                <td className={`py-1.5 text-right ${pnlColor(m.totalGainLoss)}`}>{pct(m.totalGainLossPct)}</td>
                <td className="py-1.5 text-right text-muted">{m.allocationPct != null ? `${(m.allocationPct * 100).toFixed(1)}%` : "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
