// Series primitive that renders the chart drawings (trend / horizontal / fib)
// on the lightweight-charts canvas. It owns no state of its own — it reads the
// current drawings, the in-progress draft, and the selection through getters,
// projecting each chart-space point to pixels every frame so lines track pan,
// zoom, and timeframe changes. Interaction (placing points, selecting) lives in
// ResearchChart; this file is pure projection + drawing.

import type {
  IChartApi,
  ISeriesApi,
  ISeriesPrimitive,
  IPrimitivePaneView,
  IPrimitivePaneRenderer,
  SeriesAttachedParameter,
  SeriesType,
  Time,
} from "lightweight-charts";
import { fibLevels, type Drawing, type DrawingType, type Point } from "@/lib/charts/drawings";

type Target = Parameters<IPrimitivePaneRenderer["draw"]>[0];

/** A drawing being placed: committed points plus a moving preview endpoint. */
export interface Draft {
  type: DrawingType;
  color: string;
  points: Point[];
  preview: Point | null;
}

interface FibLine {
  y: number;
  label: string;
}

interface Seg {
  id: string | null;
  type: DrawingType;
  color: string;
  draft: boolean;
  selected: boolean;
  /** screen-space endpoints (1 for horizontal, 2 for trend/fib) */
  pts: { x: number | null; y: number }[];
  fib: FibLine[] | null;
  priceLabel: string | null;
}

const money = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** Squared distance from point p to segment ab, in pixels. */
function distToSegment(px: number, py: number, ax: number, ay: number, bx: number, by: number): number {
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy;
  let t = len2 === 0 ? 0 : ((px - ax) * dx + (py - ay) * dy) / len2;
  t = Math.max(0, Math.min(1, t));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return Math.hypot(px - cx, py - cy);
}

class DrawingsRenderer implements IPrimitivePaneRenderer {
  constructor(private readonly segs: Seg[]) {}

  draw(target: Target): void {
    target.useMediaCoordinateSpace(({ context: ctx, mediaSize }) => {
      ctx.font = "10px JetBrains Mono, ui-monospace, monospace";
      ctx.textBaseline = "middle";
      for (const s of this.segs) this.drawSeg(ctx, s, mediaSize.width);
    });
  }

  private drawSeg(ctx: CanvasRenderingContext2D, s: Seg, width: number): void {
    ctx.save();
    ctx.strokeStyle = s.color;
    ctx.fillStyle = s.color;
    ctx.lineWidth = s.selected ? 2.5 : 1.5;
    if (s.draft) ctx.setLineDash([4, 3]);

    if (s.type === "horizontal") {
      const y = s.pts[0]?.y;
      if (y != null) {
        this.hline(ctx, 0, width, y);
        if (s.priceLabel) this.priceTag(ctx, width, y, s.priceLabel, s.color);
      }
    } else if (s.type === "trend") {
      const [a, b] = s.pts;
      if (a?.x != null && b?.x != null) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        if (s.selected) {
          this.handle(ctx, a.x, a.y);
          this.handle(ctx, b.x, b.y);
        }
      }
    } else if (s.type === "fib") {
      const [a, b] = s.pts;
      const x0 = a?.x ?? 0;
      const x1 = b?.x ?? width;
      const left = Math.min(x0, x1);
      const right = Math.max(x0, x1);
      // faint connector between the two anchors
      if (a?.x != null && b?.x != null) {
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      }
      for (const f of s.fib ?? []) {
        this.hline(ctx, left, Math.max(right, left + 1), f.y);
        ctx.fillText(f.label, left + 4, f.y - 6);
      }
    }
    ctx.restore();
  }

  private hline(ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number): void {
    ctx.beginPath();
    ctx.moveTo(x0, Math.round(y) + 0.5);
    ctx.lineTo(x1, Math.round(y) + 0.5);
    ctx.stroke();
  }

  private handle(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.save();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  private priceTag(ctx: CanvasRenderingContext2D, width: number, y: number, text: string, color: string): void {
    ctx.save();
    ctx.setLineDash([]);
    ctx.font = "10px JetBrains Mono, ui-monospace, monospace";
    const w = ctx.measureText(text).width + 8;
    const x = width - w - 2;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.92;
    ctx.fillRect(x, y - 7, w, 14);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#0B0E14";
    ctx.fillText(text, x + 4, y);
    ctx.restore();
  }
}

class DrawingsPaneView implements IPrimitivePaneView {
  constructor(private readonly src: DrawingsPrimitive) {}
  zOrder() {
    return "top" as const;
  }
  renderer(): IPrimitivePaneRenderer {
    return new DrawingsRenderer(this.src.segments());
  }
}

export class DrawingsPrimitive implements ISeriesPrimitive<Time> {
  private chart?: IChartApi;
  private series?: ISeriesApi<SeriesType>;
  private req?: () => void;
  private readonly view = new DrawingsPaneView(this);

  constructor(
    private readonly getDrawings: () => Drawing[],
    private readonly getDraft: () => Draft | null,
    private readonly getSelected: () => string | null,
  ) {}

  attached(p: SeriesAttachedParameter<Time>): void {
    this.chart = p.chart;
    this.series = p.series as ISeriesApi<SeriesType>;
    this.req = p.requestUpdate;
  }

  detached(): void {
    this.chart = undefined;
    this.series = undefined;
    this.req = undefined;
  }

  updateAllViews(): void {
    /* segments are projected lazily in the renderer, always current */
  }

  paneViews(): readonly IPrimitivePaneView[] {
    return [this.view];
  }

  /** Force a redraw (used while a draft endpoint follows the crosshair). */
  requestUpdate(): void {
    this.req?.();
  }

  private toScreen(p: Point): { x: number | null; y: number | null } {
    const x = this.chart?.timeScale().timeToCoordinate(p.time as Time) ?? null;
    const y = this.series?.priceToCoordinate(p.price) ?? null;
    return { x: x as number | null, y: y as number | null };
  }

  /** Project all drawings + the draft to screen segments for the renderer. */
  segments(): Seg[] {
    if (!this.chart || !this.series) return [];
    const selected = this.getSelected();
    const out: Seg[] = [];

    for (const d of this.getDrawings()) {
      const seg = this.toSeg(d.type, d.points, d.color, false, d.id === selected, d.id);
      if (seg) out.push(seg);
    }

    const draft = this.getDraft();
    if (draft) {
      const pts = draft.preview ? [...draft.points, draft.preview] : draft.points;
      const seg = this.toSeg(draft.type, pts, draft.color, true, false, null);
      if (seg) out.push(seg);
    }
    return out;
  }

  private toSeg(
    type: DrawingType,
    points: Point[],
    color: string,
    draft: boolean,
    selected: boolean,
    id: string | null,
  ): Seg | null {
    if (points.length === 0) return null;
    const screen = points.map((p) => {
      const s = this.toScreen(p);
      return { x: s.x, y: s.y };
    });

    if (type === "horizontal") {
      const y = screen[0].y;
      if (y == null) return null;
      return { id, type, color, draft, selected, pts: [{ x: null, y }], fib: null, priceLabel: money(points[0].price) };
    }

    // trend & fib need both endpoints' y (x may be off-screen / null)
    const pts = screen.map((s) => ({ x: s.x, y: s.y ?? 0 }));
    if (screen.some((s) => s.y == null) && !draft) {
      // a finished 2-point drawing with a missing y can't be projected
      if (screen.length < 2 || screen[0].y == null || screen[1].y == null) return null;
    }

    let fib: FibLine[] | null = null;
    if (type === "fib" && points.length === 2) {
      fib = fibLevels(points[0], points[1])
        .map((l) => {
          const y = this.series?.priceToCoordinate(l.price) ?? null;
          return y == null ? null : { y: y as number, label: `${(l.level * 100).toFixed(1)}%  ${money(l.price)}` };
        })
        .filter((x): x is FibLine => x !== null);
    }

    return { id, type, color, draft, selected, pts, fib, priceLabel: null };
  }

  /** Nearest drawing id within `threshold` px of (x, y), or null. */
  hitId(x: number, y: number, threshold = 6): string | null {
    let best: { id: string; d: number } | null = null;
    const consider = (id: string | null, dist: number) => {
      if (id == null || dist > threshold) return;
      if (!best || dist < best.d) best = { id, d: dist };
    };
    for (const s of this.segments()) {
      if (s.id == null) continue;
      if (s.type === "horizontal") {
        consider(s.id, Math.abs(y - s.pts[0].y));
      } else if (s.type === "trend") {
        const [a, b] = s.pts;
        if (a.x != null && b.x != null) consider(s.id, distToSegment(x, y, a.x, a.y, b.x, b.y));
      } else if (s.type === "fib") {
        for (const f of s.fib ?? []) consider(s.id, Math.abs(y - f.y));
      }
    }
    return best ? (best as { id: string }).id : null;
  }
}
