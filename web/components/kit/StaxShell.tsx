"use client";

import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppShell } from "./AppShell";
import { useThemeState } from "@/lib/theme";
import { useProgress } from "@/lib/progress/useProgress";

// The Stax AppShell's tab ids ↔ real app routes. As more screens convert, this is
// the one place the nav targets live.
const TAB_ROUTE: Record<string, string> = {
  daily: "/today",
  dashboard: "/learn",
  quiz: "/exam",
  trade: "/simulator",
  catalog: "/",
  profile: "/settings",
  marketing: "/",
};
const ROUTE_TAB: [string, string][] = [
  ["/today", "daily"],
  ["/learn", "dashboard"],
  ["/exam", "quiz"],
  ["/simulator", "trade"],
  ["/settings", "dashboard"],
];

/**
 * Routing- and theme-aware wrapper around the kit AppShell: derives the active tab
 * from the pathname, routes tab/brand/avatar clicks via the Next router, wires the
 * theme toggle to the shared theme state, and pulls the live streak from progress.
 * The shell for every Stax-redesigned screen.
 */
export function StaxShell({ children, maxWidth, xp = 0 }: { children?: ReactNode; maxWidth?: number; xp?: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useThemeState();
  const { progress, hydrated } = useProgress();

  const tab = ROUTE_TAB.find(([p]) => pathname === p || pathname.startsWith(`${p}/`))?.[1] ?? "daily";
  const streak = hydrated ? progress.streak.current : 0;

  return (
    <AppShell tab={tab} go={(id) => router.push(TAB_ROUTE[id] ?? "/")} theme={theme} setTheme={setTheme} streak={streak} xp={xp} maxWidth={maxWidth}>
      {children}
    </AppShell>
  );
}
