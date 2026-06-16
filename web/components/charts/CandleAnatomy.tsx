// Static, dependency-free SVG explainer of a single candlestick's anatomy.
// Used by lessons via a { type: "chart", kind: "candle-anatomy" } section.
// Colors mirror the design tokens (see docs/DESIGN_SYSTEM.md): up/down/strong/ink/muted.

const UP = "#2BD17E"; // up (green)
const DOWN = "#FF5C5C"; // down (red)
const STRONG = "#232A36"; // border-strong
const INK = "#E8EDF4"; // text-primary
const MUTED = "#8A94A6"; // text-secondary

// Geometry for the labeled bullish candle (close above open).
const CX = 150;
const HIGH_Y = 40;
const CLOSE_Y = 110; // top of body
const OPEN_Y = 230; // bottom of body
const LOW_Y = 300;
const BODY_HALF = 30;

function Leader({ y, label }: { y: number; label: string }) {
  return (
    <>
      <line x1={CX + BODY_HALF + 6} y1={y} x2={300} y2={y} stroke={STRONG} strokeWidth={1} strokeDasharray="3 3" />
      <text x={306} y={y + 4} fill={INK} fontSize={13} fontFamily="Inter, ui-sans-serif, system-ui">
        {label}
      </text>
    </>
  );
}

export function CandleAnatomy() {
  return (
    <svg
      viewBox="0 0 460 340"
      role="img"
      aria-label="Anatomy of a candlestick: high, low, open, and close prices."
      className="w-full max-w-md"
    >
      {/* upper wick */}
      <line x1={CX} y1={HIGH_Y} x2={CX} y2={CLOSE_Y} stroke={UP} strokeWidth={2} />
      {/* lower wick */}
      <line x1={CX} y1={OPEN_Y} x2={CX} y2={LOW_Y} stroke={UP} strokeWidth={2} />
      {/* body */}
      <rect
        x={CX - BODY_HALF}
        y={CLOSE_Y}
        width={BODY_HALF * 2}
        height={OPEN_Y - CLOSE_Y}
        rx={2}
        fill={UP}
        fillOpacity={0.85}
      />

      {/* labels */}
      <Leader y={HIGH_Y} label="High — highest price in the period" />
      <Leader y={CLOSE_Y} label="Close (top of a green body)" />
      <Leader y={OPEN_Y} label="Open (bottom of a green body)" />
      <Leader y={LOW_Y} label="Low — lowest price in the period" />

      {/* body + wick labels */}
      <text x={CX - BODY_HALF - 10} y={(CLOSE_Y + OPEN_Y) / 2} fill={MUTED} fontSize={12} textAnchor="end">
        body
      </text>
      <text x={CX} y={(HIGH_Y + CLOSE_Y) / 2} fill={MUTED} fontSize={11} textAnchor="middle" dx={-44}>
        wick
      </text>

      {/* up vs down legend */}
      <g transform="translate(20, 318)">
        <rect x={0} y={-9} width={12} height={12} rx={2} fill={UP} fillOpacity={0.85} />
        <text x={18} y={1} fill={MUTED} fontSize={12}>
          green = close above open (price rose)
        </text>
        <rect x={250} y={-9} width={12} height={12} rx={2} fill={DOWN} fillOpacity={0.85} />
        <text x={268} y={1} fill={MUTED} fontSize={12}>
          red = close below open
        </text>
      </g>
    </svg>
  );
}
