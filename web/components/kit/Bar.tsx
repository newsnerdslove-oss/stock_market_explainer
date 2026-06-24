import { A } from "./theme";

/** Horizontal progress bar. `pct` is 0..100. */
export function Bar({
  pct = 0,
  color = A.primary,
  track = A.barTrack,
  height = 10,
  radius = 999,
  glow = false,
}: {
  pct?: number;
  color?: string;
  track?: string;
  height?: number;
  radius?: number;
  glow?: boolean;
}) {
  return (
    <div style={{ width: "100%", height, background: track, borderRadius: radius, overflow: "hidden" }}>
      <div
        style={{
          width: `${Math.max(0, Math.min(100, pct))}%`,
          height: "100%",
          background: color,
          borderRadius: radius,
          boxShadow: glow ? `0 0 12px ${color}` : "none",
          transition: "width .4s ease",
        }}
      />
    </div>
  );
}
