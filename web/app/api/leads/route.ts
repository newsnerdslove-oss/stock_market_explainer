import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Email capture for the SIE taster (non-buyers + free-question takers).
export async function POST(req: Request) {
  const { email, source } = await req.json().catch(() => ({}));
  if (!email || !EMAIL.test(email)) {
    return NextResponse.json({ error: "Enter a valid email" }, { status: 400 });
  }
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return NextResponse.json({ ok: true });
  try {
    const sb = await createClient();
    const { error } = await sb.from("sie_leads").insert({ email: String(email).toLowerCase(), source: source ?? null });
    // 23505 = unique violation (already on the list) — treat as success.
    if (error && error.code !== "23505") return NextResponse.json({ error: "Could not save — try again" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Could not save — try again" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
