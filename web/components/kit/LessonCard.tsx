"use client";

import { A } from "./theme";
import { Icon } from "./Icon";
import { Card } from "./Card";
import { Bar } from "./Bar";

export type LessonState = "done" | "locked" | undefined;

/** A lesson tile with icon, title/sub, progress bar, and done/locked states. */
export function LessonCard({
  title,
  sub,
  icon,
  tint = {},
  pct = 0,
  state,
  onClick = () => {},
}: {
  title?: string;
  sub?: string;
  icon?: string;
  tint?: { bg?: string; fg?: string };
  pct?: number;
  state?: LessonState;
  onClick?: () => void;
}) {
  const done = state === "done";
  const locked = state === "locked";
  const bg = tint.bg || A.primarySoft;
  const fg = tint.fg || A.primary;
  return (
    <Card pad={18} onClick={locked ? undefined : onClick} style={{ opacity: locked ? 0.62 : 1, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 46, height: 46, borderRadius: 14, background: bg, color: fg, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
          <Icon name={locked ? "lock" : icon || "book-open"} size={22} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>{title}</div>
          <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{sub}</div>
        </div>
        {done && (
          <div style={{ marginLeft: "auto" }}>
            <Icon name="check-circle-2" size={22} color={A.green} />
          </div>
        )}
      </div>
      {!locked && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: done ? A.green : A.muted, marginBottom: 6 }}>
            <span>{done ? "Completed" : "In progress"}</span>
            <span>{pct}%</span>
          </div>
          <Bar pct={pct} color={done ? A.green : A.primary} track={A.barTrack} height={8} />
        </div>
      )}
      {locked && <div style={{ fontSize: 13, color: A.faint, fontWeight: 700 }}>Finish the unit to unlock</div>}
    </Card>
  );
}
