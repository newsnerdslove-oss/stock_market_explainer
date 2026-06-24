"use client";

// Single source of truth for the app theme. The whole app (semantic tokens AND the
// --stax-* kit tokens) now keys off one class: `.dark` = dark, bare `:root` = the
// Warm Campus light default. The pre-paint inline script in app/layout.tsx applies
// the same rule.
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

export function applyTheme(t: Theme) {
  const el = document.documentElement;
  el.classList.toggle("dark", t === "dark");
  el.classList.remove("light"); // legacy class — light is now the bare :root
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
