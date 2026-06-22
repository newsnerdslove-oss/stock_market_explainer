// A unique id that also works in INSECURE contexts. `crypto.randomUUID()` only
// exists in a secure context (https or localhost) — the LAN preview is served over
// plain http on a LAN IP, where it's undefined. `crypto.getRandomValues()` IS
// available there, so fall back to it (still cryptographically strong), and finally
// to a timestamp + Math.random for any environment without Web Crypto at all.

export function uid(): string {
  const c = typeof crypto !== "undefined" ? crypto : undefined;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  if (c && typeof c.getRandomValues === "function") {
    const b = c.getRandomValues(new Uint8Array(16));
    b[6] = (b[6] & 0x0f) | 0x40; // version 4
    b[8] = (b[8] & 0x3f) | 0x80; // variant 10xx
    const h = Array.from(b, (x) => x.toString(16).padStart(2, "0"));
    return `${h.slice(0, 4).join("")}-${h.slice(4, 6).join("")}-${h.slice(6, 8).join("")}-${h.slice(8, 10).join("")}-${h.slice(10, 16).join("")}`;
  }
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
