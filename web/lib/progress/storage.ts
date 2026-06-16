// The only module that touches window.localStorage. Framework-agnostic and
// SSR-safe: every access is guarded for the server (no window) and wrapped in
// try/catch so corrupt JSON, quota errors, or private-mode failures degrade to
// in-memory defaults instead of throwing.

import { CURRENT_VERSION, defaultProgress, migrate, type Progress } from "@/lib/progress/schema";

const KEY = "smx.progress.v1";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress(); // SSR
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultProgress();
    return migrate(JSON.parse(raw));
  } catch {
    return defaultProgress(); // corrupt JSON or read blocked
  }
}

export function saveProgress(p: Progress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...p, schemaVersion: CURRENT_VERSION }));
  } catch {
    // quota exceeded or private-mode write blocked — state stays in memory
  }
}
