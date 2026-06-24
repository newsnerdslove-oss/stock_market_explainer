import type { ReactNode } from "react";
import { A } from "./theme";

export type BadgeTone = "primary" | "green" | "amber" | "red" | "blue" | "neutral";

/** A small uppercase status badge. */
export function Badge({ children, tone = "primary" }: { children?: ReactNode; tone?: BadgeTone }) {
  const tones: Record<BadgeTone, [string, string]> = {
    primary: [A.primarySoft, A.primaryDeep],
    green: [A.greenSoft, A.green],
    amber: [A.amberSoft, A.amberInk],
    red: [A.redSoft, A.red],
    blue: [A.blueSoft, A.blue],
    neutral: [A.sunk, A.muted],
  };
  const [bg, fg] = tones[tone] || tones.primary;
  return (
    <span
      style={{
        background: bg,
        color: fg,
        padding: "3px 9px",
        borderRadius: 8,
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: ".02em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}
