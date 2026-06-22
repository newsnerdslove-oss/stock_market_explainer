import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "order-duration-and-qualifiers",
  title: "Order Duration & Qualifiers (Day, GTC, AON, FOK, IOC)",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 7,
  summary: "How long an order lives, and the fine print that controls whether it can fill in pieces.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Picking *market* or *limit* sets your price; it doesn't say **how long** the order stays alive or whether you'll accept a partial fill. Two more knobs handle that: a **time-in-force** (how long the order lives) and an **execution qualifier** (the rules on *how* it's allowed to fill).",
    },
    { type: "heading", text: "Time-in-force: how long it lives" },
    {
      type: "text",
      body:
        "Every order needs an expiry. If you don't pick one, brokers default to a **Day** order. The two you'll meet first are Day and GTC.",
    },
    {
      type: "list",
      items: [
        "**Day order** → good for the **current regular trading session** only. If it hasn't filled by the close, it **expires**. It does not roll into after-hours or the next day.",
        "**GTC (Good-Til-Cancelled)** → stays working across days until it fills or you cancel it. In practice brokers cap GTC orders (often around **60–90 days**), after which they auto-expire.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A Day order expires at the **regular-session close** — it doesn't automatically carry into extended-hours or the next session. If you forget to specify, your order is almost certainly a Day order by default.",
    },
    { type: "heading", text: "Execution qualifiers: how it's allowed to fill" },
    {
      type: "text",
      body:
        "Normally a large order can come back as a **partial fill** — you wanted 1,000 shares, only 400 were available, you get 400 and the rest keeps working. Qualifiers let you forbid or reshape that behavior. Three matter most: **AON, FOK, and IOC**.",
    },
    {
      type: "list",
      items: [
        "**AON (All-Or-None)** → the **entire** order must fill, or none of it. But there's **no immediacy requirement** — if it can't fill in full right now, it keeps *working* until it can, you cancel it, or it expires.",
        "**FOK (Fill-Or-Kill)** → the **entire** order, **immediately**, or it's cancelled. No partials, no waiting.",
        "**IOC (Immediate-Or-Cancel)** → fill **whatever is available right now**; cancel the rest. Partial fills are **allowed** — you take what you can get this instant.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "The clean way to keep them straight: **AON** = all, *no rush*. **FOK** = all, *right now*. **IOC** = *right now*, take whatever's there. FOK is the strict one (all **and** now); IOC is the loose one (now, but partials are fine); AON sits between (all, but patient).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Time-in-force", def: "How long an order stays active before it expires — e.g. **Day** or **GTC**." },
        { term: "Day order", def: "Valid for the **current regular session** only; expires unfilled at the close. The usual default." },
        { term: "GTC (Good-Til-Cancelled)", def: "Stays working across sessions until filled or cancelled; brokers typically cap it around **60–90 days**." },
        { term: "Partial fill", def: "When only part of your order executes and the remainder keeps working (or cancels, depending on the qualifier)." },
        { term: "AON (All-Or-None)", def: "Fill the **entire** order or none — but **no** immediacy requirement; it keeps working until it can fill in full." },
        { term: "FOK (Fill-Or-Kill)", def: "Fill the **entire** order **immediately**, or cancel it. No partials, no waiting." },
        { term: "IOC (Immediate-Or-Cancel)", def: "Fill **whatever is available immediately**; cancel the unfilled remainder. Partial fills allowed." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You want **1,000 shares**, but only **400** are available at your price right now. Watch how each qualifier reacts:",
    },
    {
      type: "list",
      items: [
        "**AON 1,000** → won't take the 400. It **waits**, working until all 1,000 can fill at once (or you cancel / it expires).",
        "**FOK 1,000** → can't get all 1,000 *this instant*, so the whole order is **cancelled**. You get nothing.",
        "**IOC 1,000** → takes the **400** available now and **cancels** the remaining 600. You're partially filled.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't confuse **AON** with **FOK**. Both demand the *entire* order, but only FOK demands it *immediately*. An AON order can sit working for hours; an FOK that can't fill in full instantly is dead on arrival.",
    },
  ],
};
