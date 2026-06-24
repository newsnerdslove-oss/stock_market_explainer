"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StaxShell } from "@/components/kit/StaxShell";
import { A } from "@/components/kit/theme";
import { Icon } from "@/components/kit/Icon";
import { Card } from "@/components/kit/Card";
import { Pill } from "@/components/kit/Pill";

type Kind = "price" | "learning" | "social";
type Tone = "red" | "primary" | "amber" | "blue" | "green";
interface Note {
  id: number;
  kind: Kind;
  icon: string;
  c: Tone;
  t: string;
  s: string;
  when: string;
  read: boolean;
  to?: string;
}

const TONE: Record<Tone, [string, string]> = {
  red: [A.redSoft, A.red],
  primary: [A.primarySoft, A.primary],
  amber: [A.amberSoft, A.amberInk],
  blue: [A.blueSoft, A.blue],
  green: [A.greenSoft, A.green],
};

// Where a notification deep-links (only routes that exist today; others just mark read).
const TO_ROUTE: Record<string, string> = { daily: "/today" };

const SEED: Note[] = [
  { id: 1, kind: "price", icon: "bell-ring", c: "red", t: "NVDA hit your alert", s: "Crossed $122.00 — up 3.8% today", when: "12m ago", read: false, to: "/symbol/NVDA" },
  { id: 2, kind: "learning", icon: "sparkles", c: "primary", t: "Today's challenge is ready", s: "Spot the hammer · double XP", when: "1h ago", read: false, to: "daily" },
  { id: 3, kind: "social", icon: "trophy", c: "amber", t: "You moved up to #5", s: "Sapphire League · 2 days left", when: "3h ago", read: false },
  { id: 4, kind: "social", icon: "users", c: "blue", t: "Dev posted in Candlestick Club", s: "“Anyone watching the SPY breakout?”", when: "5h ago", read: true },
  { id: 5, kind: "learning", icon: "award", c: "green", t: "Badge unlocked: Sharp eye", s: "You hit 90% on a quiz", when: "Yesterday", read: true },
  { id: 6, kind: "price", icon: "flame", c: "amber", t: "Keep your 12-day streak", s: "Finish a lesson before midnight", when: "Yesterday", read: true, to: "daily" },
];

const FILTERS: [string, Kind | null][] = [
  ["All", null],
  ["Price", "price"],
  ["Learning", "learning"],
  ["Social", "social"],
];

export default function NotificationsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState<Note[]>(SEED);

  const kind = FILTERS.find((f) => f[0] === filter)?.[1] ?? null;
  const shown = items.filter((i) => !kind || i.kind === kind);
  const unread = items.filter((i) => !i.read).length;

  const open = (it: Note) => {
    setItems((arr) => arr.map((x) => (x.id === it.id ? { ...x, read: true } : x)));
    const route = it.to && (TO_ROUTE[it.to] ?? (it.to.startsWith("/") ? it.to : undefined));
    if (route) router.push(route);
  };

  return (
    <StaxShell maxWidth={760}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Notifications</h1>
          {unread > 0 && (
            <Pill bg={A.redSoft} fg={A.red} size="sm">
              {unread} new
            </Pill>
          )}
        </div>
        <span onClick={() => setItems((arr) => arr.map((x) => ({ ...x, read: true })))} style={{ fontSize: 13.5, fontWeight: 700, color: A.primary, cursor: "pointer" }}>
          Mark all read
        </span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {FILTERS.map(([label]) => (
          <div
            key={label}
            onClick={() => setFilter(label)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 13.5,
              border: `1.5px solid ${filter === label ? A.primary : A.border}`,
              background: filter === label ? A.primarySoft : A.card,
              color: filter === label ? A.primaryDeep : A.muted,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      <Card pad={6}>
        {shown.map((it, i) => {
          const [bg, fg] = TONE[it.c];
          return (
            <div
              key={it.id}
              onClick={() => open(it)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px",
                borderRadius: 14,
                cursor: "pointer",
                borderBottom: i < shown.length - 1 ? `1px solid ${A.borderSoft}` : "none",
                background: it.read ? "transparent" : A.sunk,
              }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, color: fg, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                <Icon name={it.icon} size={21} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: 14.5, color: A.ink }}>{it.t}</div>
                <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.s}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, flex: "0 0 auto" }}>
                <span style={{ fontSize: 12, color: A.faint, fontWeight: 600, whiteSpace: "nowrap" }}>{it.when}</span>
                {!it.read && <span style={{ width: 9, height: 9, borderRadius: "50%", background: A.primary }} />}
              </div>
            </div>
          );
        })}
        {shown.length === 0 && <div style={{ padding: 40, textAlign: "center", color: A.faint, fontWeight: 600 }}>Nothing here yet.</div>}
      </Card>
    </StaxShell>
  );
}
