// Tiny client-side funnel tracker for the SIE smoke test. Fire-and-forget; never throws.
// Events land in the `sie_events` Supabase table via /api/track, carrying the UTM source
// so each marketing channel is attributable.

function sessionId(): string {
  try {
    let id = localStorage.getItem("sie_sid");
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem("sie_sid", id);
    }
    return id;
  } catch {
    return "anon";
  }
}

export function track(type: string): void {
  if (typeof window === "undefined") return;
  try {
    const u = new URLSearchParams(window.location.search);
    const body = JSON.stringify({
      type,
      pathname: window.location.pathname,
      session_id: sessionId(),
      utm_source: u.get("utm_source"),
      utm_campaign: u.get("utm_campaign"),
    });
    const blob = new Blob([body], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/track", blob)) {
      void fetch("/api/track", { method: "POST", body, keepalive: true });
    }
  } catch {
    /* tracking must never break the funnel */
  }
}
