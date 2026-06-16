import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "order-lifecycle",
  title: "The Order Lifecycle",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 4,
  summary: "What actually happens between clicking 'buy' and the shares being yours.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Clicking *buy* doesn't instantly make shares yours. An order moves through several stages, and the words your broker shows — *Working*, *Partially Filled*, *Filled* — each mean something specific. Knowing them keeps you from misreading where your trade stands.",
    },
    { type: "heading", text: "The main path" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Placed** — you submit the order; the broker accepts it.",
        "**Routed** — the broker sends it to a trading venue (an exchange or market maker) to find the other side.",
        "**Filled / Partially Filled** — shares trade. A partial fill means only some of your shares traded; the rest stays working.",
        "**Settled** — cash and shares actually change hands. In the US this is **T+1** (one business day after the trade).",
      ],
    },
    {
      type: "text",
      body:
        "Not every order completes. An order can also end as **Rejected** (the broker won't accept it), **Canceled** (you pulled it), or **Expired** (it ran out its time without filling).",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Order statuses you'll see: **Open/Working**, **Filled**, **Partially Filled**, **Canceled**, **Rejected**, **Expired**. *Filled* tells you the trade happened — *Settled* tells you it's financially finalized.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Routing", def: "The broker forwarding your order to a venue (exchange or market maker) where it can be matched." },
        { term: "Partial fill", def: "Only some of your shares trade; the remainder stays working until filled, canceled, or expired." },
        { term: "Settlement (T+1)", def: "When cash and shares change hands — in the US, **one business day** after the trade (since May 28, 2024)." },
        { term: "Trade date", def: "The day the order actually fills. Settlement is measured from here." },
        { term: "Order status", def: "The current state of an order: Open/Working, Filled, Partially Filled, Canceled, Rejected, or Expired." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "On **Tuesday at 10:00**, you submit a limit buy for **100 shares at $25**.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "The order is **Placed**, then **Routed** to a venue.",
        "Only 40 shares trade at your price → status becomes **Partially Filled (40/100)**, with 60 still working.",
        "The rest trade later that day → status becomes **Filled**.",
        "The trade **settles Wednesday** — T+1, the next business day. Only then have cash and shares fully changed hands.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common mistake: thinking *Filled* means \"fully done and the money has moved.\" A fill locks in your price and shares, but the actual transfer of cash and stock happens at **settlement (T+1)** — not the instant you see *Filled*.",
    },
  ],
};
