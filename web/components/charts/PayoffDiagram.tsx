// Data-driven options payoff-at-expiration diagram. Authors pass position `legs`;
// this computes the P/L curve, zero-crossings (breakevens), and profit/loss fills.
// Pure SVG (no hooks/DOM) so it renders server-side. Colors mirror design tokens.

import type { PayoffLeg } from "@/lib/lessons/types";
import { totalPayoff as totalPnl } from "@/lib/options/strategy";

const UP = "#2BD17E";
const DOWN = "#FF5C5C";
const INK = "#E8EDF4";
const MUTED = "#8A94A6";
const FAINT = "#5A6376";
const STRONG = "#232A36";

const fmt = (v: number) => `${v < 0 ? "−" : ""}$${Math.abs(Math.round(v)).toLocaleString("en-US")}`;
const fmtPrice = (v: number) => `$${(Math.round(v * 100) / 100).toLocaleString("en-US")}`;

export function PayoffDiagram({ legs, title }: { legs: PayoffLeg[]; title?: string }) {
  const keys = legs
    .map((l) => (l.instrument === "stock" ? l.premium ?? 0 : l.strike ?? 0))
    .filter((k) => k > 0);
  const minK = keys.length ? Math.min(...keys) : 0;
  const maxK = keys.length ? Math.max(...keys) : 100;
  const pad = Math.max((maxK - minK) * 0.6, maxK * 0.2, 5);
  const lo = Math.max(0, minK - pad);
  const hi = maxK + pad;

  // Sample grid + strikes, then insert exact zero-crossings so no segment straddles $0.
  const N = 80;
  const grid: number[] = [];
  for (let i = 0; i <= N; i++) grid.push(lo + ((hi - lo) * i) / N);
  const xs = [...new Set([...grid, ...keys])].filter((x) => x >= lo && x <= hi).sort((a, b) => a - b);
  let pts = xs.map((x) => ({ x, y: totalPnl(legs, x) }));
  const crossed: { x: number; y: number }[] = [];
  for (let i = 0; i < pts.length; i++) {
    crossed.push(pts[i]);
    const a = pts[i];
    const b = pts[i + 1];
    if (b && ((a.y < 0 && b.y > 0) || (a.y > 0 && b.y < 0))) {
      const t = -a.y / (b.y - a.y);
      crossed.push({ x: a.x + (b.x - a.x) * t, y: 0 });
    }
  }
  pts = crossed;

  const ys = pts.map((p) => p.y);
  let yMin = Math.min(...ys, 0);
  let yMax = Math.max(...ys, 0);
  const yPad = Math.max((yMax - yMin) * 0.12, 1);
  yMin -= yPad;
  yMax += yPad;

  const W = 560;
  const H = 320;
  const m = { l: 70, r: 20, t: title ? 34 : 18, b: 48 };
  const xpix = (x: number) => m.l + ((x - lo) / (hi - lo)) * (W - m.l - m.r);
  const ypix = (y: number) => m.t + ((yMax - y) / (yMax - yMin)) * (H - m.t - m.b);
  const zeroY = ypix(0);

  const curve = pts.map((p, i) => `${i === 0 ? "M" : "L"}${xpix(p.x).toFixed(1)} ${ypix(p.y).toFixed(1)}`).join(" ");

  // Fill regions: contiguous runs of one sign, closed back along the $0 line.
  const areaPaths = (sign: 1 | -1) => {
    const polys: { x: number; y: number }[][] = [];
    let cur: { x: number; y: number }[] = [];
    for (const p of pts) {
      const inRun = sign > 0 ? p.y >= 0 : p.y <= 0;
      if (inRun) cur.push(p);
      else {
        if (cur.length > 1) polys.push(cur);
        cur = [];
      }
    }
    if (cur.length > 1) polys.push(cur);
    return polys.map((run) => {
      const top = run.map((p) => `${xpix(p.x).toFixed(1)} ${ypix(p.y).toFixed(1)}`).join(" L ");
      const xEnd = xpix(run[run.length - 1].x).toFixed(1);
      const xStart = xpix(run[0].x).toFixed(1);
      return `M ${top} L ${xEnd} ${zeroY.toFixed(1)} L ${xStart} ${zeroY.toFixed(1)} Z`;
    });
  };

  const breakevens = [...new Set(pts.filter((p) => Math.abs(p.y) < 1e-6).map((p) => Math.round(p.x * 100) / 100))];
  const uniqStrikes = [...new Set(keys)].sort((a, b) => a - b);
  const maxProfit = Math.max(...ys);
  const maxLoss = Math.min(...ys);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Payoff-at-expiration diagram${title ? `: ${title}` : ""}. Profit and loss versus the underlying price.`}
      className="w-full"
    >
      {title && (
        <text x={W / 2} y={20} fill={INK} fontSize={14} textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui">
          {title}
        </text>
      )}

      {/* profit / loss fills */}
      {areaPaths(1).map((d, i) => (
        <path key={`p${i}`} d={d} fill={UP} fillOpacity={0.13} />
      ))}
      {areaPaths(-1).map((d, i) => (
        <path key={`l${i}`} d={d} fill={DOWN} fillOpacity={0.13} />
      ))}

      {/* strike guide lines */}
      {uniqStrikes.map((k) => (
        <g key={`k${k}`}>
          <line x1={xpix(k)} y1={m.t} x2={xpix(k)} y2={H - m.b} stroke={FAINT} strokeWidth={1} strokeDasharray="2 3" opacity={0.5} />
          <text x={xpix(k)} y={H - m.b + 14} fill={FAINT} fontSize={10} textAnchor="middle" fontFamily="JetBrains Mono, monospace">
            {fmtPrice(k)}
          </text>
        </g>
      ))}

      {/* zero (breakeven) axis */}
      <line x1={m.l} y1={zeroY} x2={W - m.r} y2={zeroY} stroke={STRONG} strokeWidth={1.5} />

      {/* P/L curve */}
      <path d={curve} fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" />

      {/* breakeven markers */}
      {breakevens.map((b) => (
        <g key={`be${b}`}>
          <circle cx={xpix(b)} cy={zeroY} r={3.5} fill={INK} />
          <text x={xpix(b)} y={zeroY - 7} fill={MUTED} fontSize={10} textAnchor="middle" fontFamily="JetBrains Mono, monospace">
            {fmtPrice(b)}
          </text>
        </g>
      ))}

      {/* y-axis P/L labels */}
      <text x={m.l - 8} y={ypix(maxProfit) + 4} fill={UP} fontSize={11} textAnchor="end" fontFamily="JetBrains Mono, monospace">
        {fmt(maxProfit)}
      </text>
      <text x={m.l - 8} y={zeroY + 4} fill={MUTED} fontSize={11} textAnchor="end" fontFamily="JetBrains Mono, monospace">
        $0
      </text>
      <text x={m.l - 8} y={ypix(maxLoss) + 4} fill={DOWN} fontSize={11} textAnchor="end" fontFamily="JetBrains Mono, monospace">
        {fmt(maxLoss)}
      </text>

      {/* axis labels */}
      <text x={(m.l + W - m.r) / 2} y={H - 6} fill={MUTED} fontSize={11} textAnchor="middle" fontFamily="Inter, ui-sans-serif, system-ui">
        Underlying price at expiration
      </text>
      <text x={16} y={m.t + 6} fill={MUTED} fontSize={11} textAnchor="start" fontFamily="Inter, ui-sans-serif, system-ui">
        P/L
      </text>
    </svg>
  );
}
