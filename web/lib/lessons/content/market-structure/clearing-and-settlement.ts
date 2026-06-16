import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "clearing-and-settlement",
  title: "Clearing & Settlement",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 4,
  summary: "What happens between a fill and actually owning the shares — and why T+1.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Your trade *executed* in milliseconds — but you don't own the shares yet. Between the fill and final ownership sits a quiet machinery of **clearing** and **settlement** that makes the whole market trustworthy.",
    },
    { type: "heading", text: "Execution is not settlement" },
    {
      type: "text",
      body:
        "**Execution** is the *match* — buyer and seller agree, instantly. **Settlement** is the actual exchange of shares and cash, which happens *later*. In between, **clearing** confirms and matches the trade, **nets** offsetting positions, and manages counterparty risk.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Clearing", def: "Post-trade confirmation, matching, and netting, plus managing counterparty risk." },
        { term: "Settlement", def: "The final transfer — shares to the buyer, cash to the seller." },
        { term: "NSCC", def: "National Securities Clearing Corporation — clears and nets US equity trades as the central counterparty." },
        { term: "DTCC", def: "Depository Trust & Clearing Corp — parent of both NSCC and DTC." },
        { term: "DTC", def: "Depository Trust Company — the depository that holds securities and moves ownership by book entry." },
        { term: "Central counterparty (CCP)", def: "An entity that becomes buyer to every seller and seller to every buyer, guaranteeing completion." },
        { term: "T+1", def: "Settlement one business day after the trade date — the US standard since May 28, 2024." },
      ],
    },
    { type: "heading", text: "Who does what" },
    {
      type: "list",
      items: [
        "**NSCC** clears and **nets** US equity trades and acts as the **central counterparty (CCP)** — it becomes the buyer to every seller and the seller to every buyer, guaranteeing the trade completes.",
        "**DTC** is the depository that *holds* the securities and moves ownership by **book entry** — electronic, no paper certificates.",
        "Both sit under **DTCC**.",
      ],
    },
    { type: "heading", text: "Worked example: T+1 timeline" },
    {
      type: "text",
      body:
        "You buy 100 shares at **11:00 Monday** (the trade date, **T**). It executes instantly — but isn't settled. Overnight, **NSCC nets** your obligation against everyone else's. On **Tuesday (T+1)**, settlement runs: cash leaves your account and 100 shares are recorded to you via **DTC book entry**. Since **May 28, 2024**, the US cycle is **T+1**, down from T+2.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Settlement counts **business** days, not calendar days, and T+1 compresses the timeline (trade affirmation is targeted by `9:00pm ET` on trade date). A Friday trade settles **Monday**; if T+1 lands on a holiday, it rolls to the next business day.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume that when your trade *executes* you instantly own the shares free and clear. You take on the **obligation** at execution, but the legal transfer of shares and cash isn't final until **settlement** on T+1.",
    },
  ],
};
