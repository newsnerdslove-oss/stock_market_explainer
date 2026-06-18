import type { OHLC } from "@/lib/charts/patterns";

/**
 * A small, dependency-free SVG candlestick chart for the chart-reading quiz —
 * green up / red down candles with wicks, auto-scaled to the series. Deterministic
 * (pure render from props). The aria-label is intentionally generic so it doesn't
 * leak the pattern name the question is asking about.
 */
export function PatternChart({ candles }: { candles: OHLC[] }) {
  if (!candles.length) return null;

  const W = 320;
  const H = 150;
  const pad = 12;
  const max = Math.max(...candles.map((c) => c.high));
  const min = Math.min(...candles.map((c) => c.low));
  const range = max - min || 1;
  const y = (p: number) => pad + ((max - p) / range) * (H - 2 * pad);
  const slot = (W - 2 * pad) / candles.length;
  const bodyW = Math.max(3, slot * 0.6);

  return (
    <div className="rounded-md border border-strong bg-surface p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Price candlestick chart">
        {candles.map((c, i) => {
          const cx = pad + slot * (i + 0.5);
          const up = c.close >= c.open;
          const cls = up ? "fill-up stroke-up" : "fill-down stroke-down";
          const bodyTop = y(Math.max(c.open, c.close));
          const bodyH = Math.max(1, y(Math.min(c.open, c.close)) - bodyTop);
          return (
            <g key={i} className={cls}>
              <line x1={cx} x2={cx} y1={y(c.high)} y2={y(c.low)} strokeWidth={1.5} />
              <rect x={cx - bodyW / 2} y={bodyTop} width={bodyW} height={bodyH} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
