import type { OHLC } from "@/lib/charts/patterns";

/**
 * A small, dependency-free SVG candlestick chart — green up / red down candles
 * with wicks, auto-scaled. Pure render from props. When `onPick` is supplied each
 * candle becomes a clickable, keyboard-focusable target (for the pattern-spotter
 * trainer); `picked` and `correctIndex` draw highlight boxes after a guess. The
 * aria-label is intentionally generic so it never leaks the pattern name.
 */
export function PatternChart({
  candles,
  onPick,
  picked,
  correctIndex,
}: {
  candles: OHLC[];
  onPick?: (index: number) => void;
  picked?: number | null;
  correctIndex?: number | null;
}) {
  if (!candles.length) return null;

  const W = 360;
  const H = 160;
  const pad = 12;
  const max = Math.max(...candles.map((c) => c.high));
  const min = Math.min(...candles.map((c) => c.low));
  const range = max - min || 1;
  const y = (p: number) => pad + ((max - p) / range) * (H - 2 * pad);
  const slot = (W - 2 * pad) / candles.length;
  const bodyW = Math.max(3, slot * 0.6);
  const interactive = typeof onPick === "function";

  return (
    <div className="rounded-md border border-strong bg-surface p-3">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Price candlestick chart">
        {candles.map((c, i) => {
          const cx = pad + slot * (i + 0.5);
          const up = c.close >= c.open;
          const cls = up ? "fill-up stroke-up" : "fill-down stroke-down";
          const bodyTop = y(Math.max(c.open, c.close));
          const bodyH = Math.max(1, y(Math.min(c.open, c.close)) - bodyTop);
          const isPicked = picked === i;
          const isCorrect = correctIndex === i;
          return (
            <g key={i}>
              {(isPicked || isCorrect) && (
                <rect
                  x={cx - slot / 2 + 1}
                  y={2}
                  width={slot - 2}
                  height={H - 4}
                  rx={3}
                  className={isCorrect ? "fill-up/10 stroke-up" : "fill-learn/10 stroke-learn"}
                  strokeWidth={1.5}
                />
              )}
              <g className={cls}>
                <line x1={cx} x2={cx} y1={y(c.high)} y2={y(c.low)} strokeWidth={1.5} />
                <rect x={cx - bodyW / 2} y={bodyTop} width={bodyW} height={bodyH} />
              </g>
              {interactive && (
                <rect
                  x={cx - slot / 2}
                  y={0}
                  width={slot}
                  height={H}
                  fill="transparent"
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`Candle ${i + 1} of ${candles.length}`}
                  onClick={() => onPick?.(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onPick?.(i);
                    }
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
