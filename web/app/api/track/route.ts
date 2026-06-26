import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Funnel event sink for the SIE smoke test. Always 200s — tracking must never break the
// page. No-ops when Supabase isn't configured (e.g. local dev without keys).
export async function POST(req: Request) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return NextResponse.json({ ok: true });
  try {
    const b = await req.json();
    const sb = await createClient();
    await sb.from("sie_events").insert({
      type: String(b.type ?? "").slice(0, 64),
      pathname: b.pathname ?? null,
      session_id: b.session_id ?? null,
      utm_source: b.utm_source ?? null,
      utm_campaign: b.utm_campaign ?? null,
    });
  } catch {
    /* swallow */
  }
  return NextResponse.json({ ok: true });
}
