"use client";

import type { ReactNode } from "react";
import { A } from "./theme";
import { Icon } from "./Icon";
import { Pill } from "./Pill";
import { Avatar } from "./Avatar";
import { useIsMobile } from "@/lib/useIsMobile";

const TABS = [
  { id: "daily", label: "Today", icon: "sparkles" },
  { id: "dashboard", label: "Learn", icon: "graduation-cap" },
  { id: "quiz", label: "Practice", icon: "dumbbell" },
  { id: "trade", label: "Invest", icon: "line-chart" },
  { id: "catalog", label: "Markets", icon: "trending-up" },
];

/**
 * The Stax app shell: persistent top nav (brand + 5 tabs), streak/XP pills, theme
 * toggle, and avatar, wrapping the page content. `go(id)` is called on tab/brand/
 * avatar clicks — the host wires it to routing. On phones the top tabs give way to a
 * fixed bottom tab bar.
 */
export function AppShell({
  tab = "daily",
  go = () => {},
  children,
  maxWidth = 1180,
  theme = "light",
  setTheme,
  brand = "Stax",
  streak = 12,
  xp = 340,
  user = "Maya R",
}: {
  tab?: string;
  go?: (id: string) => void;
  children?: ReactNode;
  maxWidth?: number;
  theme?: "light" | "dark";
  setTheme?: (t: "light" | "dark") => void;
  brand?: string;
  streak?: number;
  xp?: number;
  user?: string;
}) {
  const mobile = useIsMobile();
  return (
    <div style={{ background: A.page, color: A.ink, fontFamily: A.font, minHeight: "100%" }}>
      <div style={{ maxWidth, margin: "0 auto", padding: mobile ? "16px 14px 92px" : "22px 28px 60px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: mobile ? 18 : 26 }}>
          <div onClick={() => go("marketing")} style={{ display: "flex", alignItems: "center", gap: 10, marginRight: mobile ? "auto" : 18, cursor: "pointer" }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: A.primary, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, fontSize: 20 }}>
              {brand[0]}
            </div>
            <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-.02em" }}>{brand}</span>
          </div>
          {!mobile &&
            TABS.map((tt) => (
              <div
                key={tt.id}
                onClick={() => go(tt.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "9px 14px",
                  borderRadius: 12,
                  background: tab === tt.id ? A.primarySoft : "transparent",
                  color: tab === tt.id ? A.primaryDeep : A.muted,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                <Icon name={tt.icon} size={18} />
                {tt.label}
              </div>
            ))}
          {!mobile && <div style={{ flex: 1 }} />}
          <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>
            {streak}
          </Pill>
          {!mobile && (
            <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep}>
              {xp} XP
            </Pill>
          )}
          <div onClick={() => go("search")} title="Search" style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${A.border}`, cursor: "pointer", display: "grid", placeItems: "center", color: A.muted, background: A.card }}>
            <Icon name="search" size={19} />
          </div>
          <div onClick={() => go("notifications")} title="Notifications" style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${A.border}`, cursor: "pointer", display: "grid", placeItems: "center", color: A.muted, background: A.card }}>
            <Icon name="bell" size={19} />
          </div>
          {setTheme && (
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              style={{ width: 40, height: 40, borderRadius: 12, border: `1px solid ${A.border}`, cursor: "pointer", display: "grid", placeItems: "center", color: A.muted, background: A.card }}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
            </div>
          )}
          <div onClick={() => go("profile")} style={{ cursor: "pointer" }}>
            <Avatar name={user} size={40} bg={A.green} ring={A.card} />
          </div>
        </div>
        {children}
      </div>

      {mobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", background: A.card, borderTop: `1px solid ${A.border}`, zIndex: 50, paddingBottom: "env(safe-area-inset-bottom)" }}>
          {TABS.map((tt) => {
            const active = tab === tt.id;
            return (
              <div
                key={tt.id}
                onClick={() => go(tt.id)}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "9px 0 10px", color: active ? A.primary : A.muted, fontWeight: 700, fontSize: 10.5, cursor: "pointer" }}
              >
                <Icon name={tt.icon} size={21} />
                {tt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
