import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "confirmations-settlement-t1-and-reg-t",
  title: "Trade Confirmations, Settlement (T+1) & Reg T Payment",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 4,
  summary:
    "What must appear on a trade confirmation, when it's delivered, the current T+1 settlement cycle, and the Reg T payment clock that now runs to T+3.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Every trade produces a **confirmation**, settles on a cycle, and carries a payment deadline. The headline you must internalize: since **May 28, 2024**, regular-way settlement is **`T+1`**, and the **Reg T** payment deadline now runs to **`T+3`**. The old `T+2` / `T+4` answers are no longer correct.",
    },
    { type: "heading", text: "The trade confirmation" },
    {
      type: "text",
      body:
        "`SEC Rule 10b-10` requires a confirmation to be sent **at or before completion of the transaction** (by settlement). Its required contents are a frequent test item.",
    },
    {
      type: "list",
      items: [
        "**Trade date** (and time on request); **identity**, **price**, and **number** of shares/units.",
        "The firm's **capacity** — **agent** or **principal**.",
        "**Commission** (if agent) or **markup/markdown** (certain principal trades).",
        "**CUSIP** and **settlement date**.",
        "For debt securities, **yield** and **redemption (call)** information.",
      ],
    },
    { type: "heading", text: "Capacity: agent vs principal" },
    {
      type: "list",
      items: [
        "As **AGENT (broker):** the firm acts for the customer and charges a **commission**.",
        "As **PRINCIPAL (dealer):** the firm trades from its own account and charges a **markup/markdown**.",
        "A firm **cannot act as both** agent and principal in the **same** trade.",
      ],
    },
    { type: "heading", text: "Settlement — the T+1 cycle" },
    {
      type: "text",
      body:
        "**Regular-way** settlement is now **`T+1`** (effective May 28, 2024): equities, corporate bonds, municipal bonds, ETFs, and **listed options** settle **one business day after trade date**. U.S. **Treasuries** also settle `T+1`. **Cash settlement** is same-day — **`T+0`** — by agreement.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Regular-way equity settlement is `T+2` and Reg T payment is due `T+4`/`T+5`.'* No longer true — since May 28, 2024, regular-way is **`T+1`** and Reg T payment is due **`T+3`** (settlement + 2 business days).",
    },
    { type: "heading", text: "Reg T payment — the clock to T+3" },
    {
      type: "text",
      body:
        "Under **Regulation T** (12 CFR 220) the payment period is the **standard settlement cycle + 2 business days** = **S+2 = `T+3`** under `T+1`. If the customer hasn't paid by then, the firm must **request a Reg T extension** from FINRA or **sell out** the position.",
    },
    { type: "heading", text: "The T+1 / Reg T calendar" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Monday — Trade date (T):** buy $10,000 of stock regular way.",
        "**Tuesday — Settlement (`T+1`):** the trade settles one business day later.",
        "**Thursday — Reg T payment due (`T+3`):** payment = settlement + 2 business days.",
        "**If unpaid:** request a Reg T extension or sell out the position.",
      ],
    },
    { type: "heading", text: "Freeriding" },
    {
      type: "text",
      body:
        "**Freeriding** is buying then selling in a **cash account** without ever paying for the purchase (or selling before paying). It violates Reg T → the firm **freezes the account for `90 days`**, during which the customer must have **settled cash up front** before any buy.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer **buys $10,000 of stock Monday** (regular way). Settlement is **Tuesday (`T+1`)**; **Reg T payment is due no later than Thursday (`T+3`)**. If the customer doesn't pay, the firm requests an **extension** or **sells out** — and if a **freeriding pattern** exists, a **`90-day` freeze** applies.",
    },
    {
      type: "list",
      items: [
        "**Trade date:** Monday.",
        "**Settles:** Tuesday — `T+1`.",
        "**Reg T due:** Thursday — `T+3` (settlement + 2 business days).",
        "**Unpaid:** Reg T extension or sell-out; freeriding pattern → `90-day` freeze.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SEC Rule 10b-10", def: "Requires a trade confirmation at or before completion of the transaction, listing trade date, price, quantity, capacity, charges, CUSIP, and settlement date." },
        { term: "Capacity (agent vs principal)", def: "Agent = the firm acts for the customer and charges a commission; principal = the firm trades from inventory and charges a markup/markdown." },
        { term: "Regular-way settlement (T+1)", def: "Since May 28, 2024, equities, corporate/muni bonds, ETFs, listed options, and Treasuries settle one business day after the trade." },
        { term: "Cash settlement (T+0)", def: "Same-day settlement by agreement between the parties." },
        { term: "Regulation T", def: "Federal Reserve rule (12 CFR 220) setting the customer payment period at settlement + 2 business days = T+3 under T+1." },
        { term: "Reg T extension", def: "A request to FINRA for more time to pay; the alternative is selling out the unpaid position." },
        { term: "Markup / markdown", def: "The amount a dealer adds (markup) or subtracts (markdown) acting as principal, disclosed on certain confirmations instead of a commission." },
        { term: "Freeriding", def: "Buying then selling in a cash account without paying for the purchase; violates Reg T and triggers a 90-day account freeze." },
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
