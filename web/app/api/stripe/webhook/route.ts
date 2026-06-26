import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

// Records confirmed pre-orders into `sie_preorders` on checkout.session.completed.
// Convenience only — the Stripe dashboard is the source of truth for the test.
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!key || !whSecret) return NextResponse.json({ ok: true });

  const stripe = new Stripe(key);
  const sig = req.headers.get("stripe-signature");
  const raw = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig ?? "", whSecret);
  } catch {
    return NextResponse.json({ error: "bad signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    try {
      const sb = await createClient();
      await sb.from("sie_preorders").insert({
        email: s.customer_email ?? s.customer_details?.email ?? null,
        amount_cents: s.amount_total ?? null,
        stripe_session: s.id,
      });
    } catch {
      /* ignore — Stripe dashboard remains source of truth */
    }
  }
  return NextResponse.json({ received: true });
}
