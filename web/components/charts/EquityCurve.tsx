/** A small SVG line of an equity curve (indexed to 100), green if it ends up. */
export function EquityCurve({ equity }: { equity: number[] }) {
  if (equity.length < 2) return null;

  const W = 320;
  const H = 96;
  const pad = 8;
  const max = Math.max(...equity, 100);
  const min = Math.min(...equity, 100);
  const range = max - min || 1;
  const x = (i: number) => pad + (i / (equity.length - 1)) * (W - 2 * pad);
  const y = (v: number) => pad + ((max - v) / range) * (H - 2 * pad);
  const points = equity.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const up = equity[equity.length - 1] >= 100;

  return (
    <div className="rounded-md border border-strong bg-surface p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Equity curve">
        {/* break-even baseline at 100 */}
        <line x1={pad} x2={W - pad} y1={y(100)} y2={y(100)} className="stroke-hairline" strokeWidth={1} strokeDasharray="3 3" />
        <polyline points={points} fill="none" className={up ? "stroke-up" : "stroke-down"} strokeWidth={1.5} />
      </svg>
    </div>
  );
}
