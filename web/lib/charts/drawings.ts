// Drawing-tool model for the research chart (Phase 5).
//
// A drawing is a small typed record of chart-space points (time + price) — not
// pixels — so it survives pan/zoom and timeframe changes and can be persisted.
// Rendering (pixel projection) lives in components/charts/drawingsPrimitive.ts.

import { uid } from "@/lib/uid";

export type DrawingType = "trend" | "horizontal" | "fib" | "zone";
export type ZoneKind = "supply" | "demand";

/** A point in chart space: a UTC timestamp (seconds) and a price. */
export interface Point {
  time: number;
  price: number;
}

export interface Drawing {
  id: string;
  type: DrawingType;
  /** horizontal: 1 point; trend/fib/zone: 2 points (anchor → end / two corners). */
  points: Point[];
  color: string;
  /** supply vs demand, for `zone` drawings only. */
  kind?: ZoneKind;
}

/** Supply/demand zone colours (green = demand/support, red = supply/resistance). */
export const ZONE_DEMAND = "#2BD17E";
export const ZONE_SUPPLY = "#FF5C5C";

/** Standard Fibonacci retracement ratios. */
export const FIB_LEVELS = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1] as const;

/** How many clicks each tool needs before the drawing is complete. */
export const POINTS_FOR: Record<DrawingType, number> = { horizontal: 1, trend: 2, fib: 2, zone: 2 };

/** Default colour per tool, themed to the chart palette. */
export const TOOL_COLOR: Record<DrawingType, string> = {
  trend: "#5BA8FF",
  horizontal: "#F5C451",
  fib: "#9D8CFF",
  zone: ZONE_DEMAND,
};

/**
 * Fib retracement level prices between anchor `a` and end `b`.
 * Level 0 sits at the end point `b`, level 1 at the anchor `a` — the convention
 * where 0% is the most recent swing and 100% the prior one.
 */
export function fibLevels(a: Point, b: Point): { level: number; price: number }[] {
  return FIB_LEVELS.map((level) => ({ level, price: b.price + (a.price - b.price) * level }));
}

export function newDrawing(type: DrawingType, points: Point[]): Drawing {
  return { id: uid(), type, points, color: TOOL_COLOR[type] };
}

/** A supply/demand zone (a two-corner box). */
export function newZone(kind: ZoneKind, points: Point[]): Drawing {
  return { id: uid(), type: "zone", points, color: kind === "demand" ? ZONE_DEMAND : ZONE_SUPPLY, kind };
}

const storageKey = (symbol: string) => `chart:drawings:${symbol.toUpperCase()}`;

export function isDrawing(d: unknown): d is Drawing {
  if (!d || typeof d !== "object") return false;
  const x = d as Drawing;
  return (
    typeof x.id === "string" &&
    (x.type === "trend" || x.type === "horizontal" || x.type === "fib" || x.type === "zone") &&
    typeof x.color === "string" &&
    (x.type !== "zone" || x.kind === "supply" || x.kind === "demand") &&
    Array.isArray(x.points) &&
    x.points.length === POINTS_FOR[x.type] &&
    x.points.every((p) => p && typeof p.time === "number" && typeof p.price === "number")
  );
}

export function loadDrawings(symbol: string): Drawing[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey(symbol));
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isDrawing) : [];
  } catch {
    return [];
  }
}

export function saveDrawings(symbol: string, drawings: Drawing[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(symbol), JSON.stringify(drawings));
  } catch {
    /* private mode / quota — drawings simply won't persist */
  }
}
