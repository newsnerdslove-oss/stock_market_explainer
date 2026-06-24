"use client";

import type { CSSProperties } from "react";
import { icons, type LucideProps } from "lucide-react";

// Aliases for lucide icons the prototypes name by an older spelling.
const ALIASES: Record<string, string> = {
  "line-chart": "chart-line",
  "candlestick-chart": "chart-candlestick",
};

const toPascal = (n: string) =>
  (ALIASES[n] ?? n)
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

/** Renders a lucide icon by its kebab-case name (e.g. "line-chart", "check-circle-2"). */
export function Icon({
  name,
  size = 18,
  color,
  strokeWidth = 2,
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: CSSProperties;
}) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[toPascal(name)] ?? icons.Circle;
  return <Cmp size={size} color={color} strokeWidth={strokeWidth} style={{ display: "inline-flex", ...style }} />;
}
