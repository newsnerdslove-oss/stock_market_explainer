import type { ReactNode } from "react";
import { A } from "./theme";

/** Circular progress ring with centered content. `pct` is 0..1. */
export function Ring({
  size = 84,
  stroke = 9,
  pct = 0,
  color = A.primary,
  track = A.barTrack,
  children,
}: {
  size?: number;
  stroke?: number;
  pct?: number;
  color?: string;
  track?: string;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(1, pct)));
  return (
    <div style={{ position: "relative", width: size, height: size, flex: "0 0 auto", display: "grid", placeItems: "center" }}>
      <svg width={size} height={size} style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={c}
          strokeDashoffset={off}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: "relative", textAlign: "center", lineHeight: 1 }}>{children}</div>
    </div>
  );
}
