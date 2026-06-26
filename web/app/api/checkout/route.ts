import { NextResponse } from "next/server";
import Stripe from "stripe";

// Creates a Stripe Checkout Session for the $29 SIE Pass Pack founding pre-order.
// Inline price_data → no dashboard Product/Price setup needed. Returns 503 until
// STRIPE_SECRET_KEY is set, so the rest of the funnel works without payments wired.
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return NextResponse.json({ error: "Payments not configured yet" }, { status: 503 });

  const stripe = new Stripe(key);
  const site = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
  const { email } = await req.json().catch(() => ({}));

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email || undefined,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 2900,
            product_data: {
              name: "SIE Pass Pack — founding pre-order",
              description: "Full SIE question bank + mock exams. Refundable anytime before launch.",
            },
          },
        },
      ],
      success_url: `${site}/sie/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/sie?canceled=1`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Could not start checkout" }, { status: 500 });
  }
}
