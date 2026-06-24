"use client";

// Single source of truth for the app theme. Both token systems read it: the
// trading tokens key off `.light` (dark is the bare :root), the Stax "Warm Campus"
// tokens key off `.dark` (light is the bare :root). So a theme switch must drive
// BOTH classes — light → `.light`, dark → `.dark` — to keep them in lockstep during
// the redesign. The pre-paint inline script in app/layout.tsx applies the same rule.
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

export function applyTheme(t: Theme) {
  const el = document.documentElement;
  el.classList.toggle("light", t === "light");
  el.classList.toggle("dark", t === "dark");
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* private mode — keep the in-memory toggle only */
  }
  listeners.forEach((l) => l());
}

export function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Reactive theme state shared across all consumers — flipping it anywhere updates them all. */
export function useThemeState(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    setTheme(currentTheme());
    const onChange = () => setTheme(currentTheme());
    listeners.add(onChange);
    return () => {
      listeners.delete(onChange);
    };
  }, []);
  return [theme, applyTheme];
}
