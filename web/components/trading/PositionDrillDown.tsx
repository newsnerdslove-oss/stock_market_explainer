"use client";

// Per-symbol drill-down — the lifecycle of how a position was built and reduced over
// time: a summary, an avg-cost trajectory chart (each fill's price vs the running
// average cost), and the fill timeline with realized P&L on each close. All derived
// from the Phase-1 engine (replayPosition / positionMetrics) over the symbol's fills.
// Fills come from recorded orders (capped until persistence lands in Phase 4).

import { positionMetrics, replayPosition, type Trade } from "@/lib/positions/metrics";
import { companyName } from "@/lib/stocks/names";
import type { Position } from "@/lib/trading/schema";
import type { Snapshot } from "@/lib/marketService";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (n: number) => `${n >= 0 ? "+" : "−"}${money(Math.abs(n))}`;
const pct = (n: number) => `${n >= 0 ? "+" : "−"}${(Math.abs(n) * 100).toFixed(2)}%`;
const pnlColor = (n: number) => (n > 0 ? "text-up" : n < 0 ? "text-down" : "text-muted");
const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toLocaleString("en-US", { maximumFractionDigits: 6 }));
const day = (iso: string) => (iso ? iso.slice(0, 10) : "—");

// SVG palette (mirrors design tokens).
const UP = "#2BD17E";
const DOWN = "#FF5C5C";
const AVG = "#9D8CFF";
const MARK = "#8A94A6";
const FAINT = "#5A6376";

export function PositionDrillDown({
  position,
  trades,
  mark,
  snapshot,
  equity,
  onClose,
}: {
  position: Position;
  trades: Trade[];
  mark: number;
  snapshot?: Snapshot;
  equity: number;
  onClose: () => void;
}) {
  const symbol = position.symbol;
  const name = companyName(symbol);
  const replay = replayPosition(trades);
  const m = positionMetrics(
    symbol,
    [{ symbol, side: "buy", qty: position.qty, price: position.avgCost, at: "" }],
    { mark, accountEquity: equity > 0 ? equity : undefined, priorClose: snapshot?.prevClose, now: new Date() },
  );

  return (
    <section className="mt-4 rounded-lg border border-learn/30 bg-learn/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-mono text-base text-ink">{symbol}</h3>
          {name && <p className="text-xs text-faint">{name}</p>}
        </div>
        <button type="button" onClick={onClose} className="text-xs text-muted transition hover:text-ink" aria-label="Close drill-down">
          Close ✕
        </button>
      </div>

      {/* summary */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Quantity" value={fmtQty(position.qty)} />
        <Stat label="Avg cost" value={money(position.avgCost)} />
        <Stat label="Market value" value={money(m.marketValue)} />
        <Stat label="Total G/L" value={`${signed(m.totalGainLoss)} (${pct(m.totalGainLossPct)})`} color={pnlColor(m.totalGainLoss)} />
        <Stat label="Today" value={m.todayGainLoss != null ? `${signed(m.todayGainLoss)} (${pct(m.todayGainLossPct ?? 0)})` : "—"} color={m.todayGainLoss != null ? pnlColor(m.todayGainLoss) : undefined} />
        <Stat label="Realized (this symbol)" value={signed(replay.realized)} color={pnlColor(replay.realized)} />
        <Stat label="Opened" value={day(replay.openedAt ?? "")} />
        <Stat label="Held" value={m.holdingDays != null ? `${m.holdingDays}d` : "—"} />
      </div>

      <TrajectoryChart trades={trades} mark={mark} />

      {/* fill timeline */}
      <h4 className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">Fill history</h4>
      {replay.events.length === 0 ? (
        <p className="mt-2 text-sm text-muted">No recorded fills for this position yet.</p>
      ) : (
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="text-left text-xs text-faint">
                <th className="pb-1 font-normal">Date</th>
                <th className="pb-1 font-normal">Action</th>
                <th className="pb-1 text-right font-normal">Qty</th>
                <th className="pb-1 text-right font-normal">Price</th>
                <th className="pb-1 text-right font-normal">Position after</th>
                <th className="pb-1 text-right font-normal">Avg cost</th>
                <th className="pb-1 text-right font-normal">Realized</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {[...replay.events].reverse().map((e, i) => (
                <tr key={`${e.at}-${i}`} className="border-t border-hairline">
                  <td className="py-1.5 font-sans text-muted">{day(e.at)}</td>
                  <td className={`py-1.5 font-sans ${e.side === "buy" ? "text-up" : "text-down"}`}>{e.side === "buy" ? "Buy" : "Sell"}</td>
                  <td className="py-1.5 text-right text-muted">{fmtQty(e.qty)}</td>
                  <td className="py-1.5 text-right text-muted">{money(e.price)}</td>
                  <td className="py-1.5 text-right text-muted">{fmtQty(e.qtyAfter)}</td>
                  <td className="py-1.5 text-right text-muted">{money(e.avgCostAfter)}</td>
                  <td className={`py-1.5 text-right ${e.side === "sell" ? pnlColor(e.realizedDelta) : "text-faint"}`}>
                    {e.side === "sell" ? signed(e.realizedDelta) : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-2 text-xs text-faint">Lifecycle from recorded fills (average-cost). Full history persists in a later phase.</p>
    </section>
  );
}

/** Fill prices (buy/sell dots) vs the running average cost, with the current mark. */
function TrajectoryChart({ trades, mark }: { trades: Trade[]; mark: number }) {
  const ev = replayPosition(trades).events;
  if (ev.length < 1) return null;

  const W = 520;
  const H = 130;
  const m = { l: 44, r: 12, t: 12, b: 22 };
  const prices = [...ev.map((e) => e.price), ...ev.map((e) => e.avgCostAfter), mark];
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  const span = hi - lo || 1;
  const n = ev.length;
  const x = (i: number) => m.l + (n === 1 ? 0.5 : i / (n - 1)) * (W - m.l - m.r);
  const y = (v: number) => H - m.b - ((v - lo) / span) * (H - m.t - m.b);
  const avgPath = ev.map((e, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(e.avgCostAfter).toFixed(1)}`).join(" ");

  return (
    <div className="mt-4">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Average cost and fill prices over time">
        {/* current mark reference */}
        <line x1={m.l} y1={y(mark)} x2={W - m.r} y2={y(mark)} stroke={MARK} strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />
        <text x={W - m.r} y={y(mark) - 3} fill={MARK} fontSize={9} textAnchor="end" fontFamily="JetBrains Mono, monospace">mark {money(mark)}</text>
        {/* avg-cost trajectory */}
        <path d={avgPath} fill="none" stroke={AVG} strokeWidth={2} />
        {/* fill markers */}
        {ev.map((e, i) => (
          <circle key={i} cx={x(i)} cy={y(e.price)} r={3.5} fill={e.side === "buy" ? UP : DOWN} />
        ))}
        {/* y labels */}
        {[lo, hi].map((v, i) => (
          <text key={i} x={m.l - 6} y={y(v) + 3} fill={FAINT} fontSize={9} textAnchor="end" fontFamily="JetBrains Mono, monospace">{money(v)}</text>
        ))}
      </svg>
      <div className="-mt-1 flex gap-4 text-xs text-faint">
        <span><span style={{ color: AVG }}>━</span> avg cost</span>
        <span><span style={{ color: UP }}>●</span> buy</span>
        <span><span style={{ color: DOWN }}>●</span> sell</span>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="rounded-md border border-hairline bg-surface px-3 py-2">
      <div className="text-[11px] uppercase tracking-wide text-faint">{label}</div>
      <div className={`mt-0.5 font-mono text-sm ${color ?? "text-ink"}`}>{value}</div>
    </div>
  );
}
