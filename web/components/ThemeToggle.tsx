"use client";

import { useEffect, useState } from "react";
import { applyTheme, type Theme } from "@/lib/theme";

/**
 * Light/dark toggle. The initial class is set before paint by the inline script
 * in app/layout.tsx; this reads the resulting state on mount, then flips the theme
 * via applyTheme (which drives both the `.light` and `.dark` token systems) and
 * persists the choice to localStorage.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
  }

  // Render a stable placeholder until mounted so SSR and first paint match.
  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition hover:bg-surface hover:text-ink"
    >
      <span aria-hidden className="text-sm">
        {theme === "light" ? "☾" : "☀"}
      </span>
    </button>
  );
}
