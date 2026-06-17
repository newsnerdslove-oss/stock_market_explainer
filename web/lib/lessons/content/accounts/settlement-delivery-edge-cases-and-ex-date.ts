import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "settlement-delivery-edge-cases-and-ex-date",
  title: "Settlement & Delivery Edge Cases: Good Delivery, DK, When-Issued, Ex-Date & Accrued Interest",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 6,
  summary:
    "The tricky corners of clearing — DK notices, good delivery and reclamation, when-issued trades, accrued interest, and how T+1 reshaped the ex-dividend date.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Beyond the standard cycle sit the clearing edge cases the exam loves: **good delivery**, **DK** notices, **reclamation**, **when-issued** trades, **accrued interest**, and — the flagged change — how **`T+1`** reshaped the **ex-dividend date**.",
    },
    { type: "heading", text: "Good delivery and reclamation" },
    {
      type: "list",
      items: [
        "**Good delivery:** securities must be delivered in **transferable form** — proper **endorsement/assignment**, in **deliverable units** (round-lot multiples of 100, or units that add to 100), with required documents. **Non-conforming = rejection.**",
        "**Reclamation:** the right to **return** improperly delivered securities and **recover payment** *after* settlement when delivery wasn't in good form.",
      ],
    },
    { type: "heading", text: "DK and when-issued" },
    {
      type: "list",
      items: [
        "**DK ('don't know') notice:** under the **Uniform Practice Code** (FINRA `11200` series), a firm that receives a delivery/comparison it has **no record of** sends a **DK** to reject/question the trade and ask the contra firm to verify terms.",
        "**When-issued (WI):** trades in securities **authorized but not yet issued** (new IPO or split shares, newly auctioned munis). They settle on a **special date set by the clearing corporation/UPC** once issued — **not** standard `T+1`. Confirmations show **'WI'**.",
      ],
    },
    { type: "heading", text: "Accrued interest" },
    {
      type: "text",
      body:
        "On regular-way **corporate/muni bond** trades the **buyer pays the seller accrued interest** from the **last coupon date up to but NOT including settlement**. It's computed **30/360** for corp/muni and **actual/actual** for governments. Because settlement moved to **`T+1`**, the accrued cutoff shifts **one day earlier** than under the old `T+2`.",
    },
    { type: "heading", text: "Ex-dividend date under T+1 — the flagged change" },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The ex-dividend date is one business day before the record date.'* That was true under **`T+2`**. Under **`T+1`** (since May 2024) the ex-date is the **SAME business day as the record date** — buying **on** the record date no longer earns the dividend.",
    },
    {
      type: "text",
      body:
        "For regular-way trades, the ex-date is set so that buyers **on or after** it do **not** receive the dividend. Under `T+1`, the **ex-dividend date is generally the SAME business day as the record date** (when the record date is a business day). To receive the dividend you must **buy BEFORE the ex-date** — the business day before the record date — so the trade settles **by** the record date.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Ex-date scenario (`T+1`): **Record date Wednesday** → the **ex-date is also Wednesday** (same day). To get the dividend, **buy by Tuesday** (settles Wednesday, the record date). Under the old `T+2` the ex-date would have been Tuesday — one business day before record.",
    },
    {
      type: "list",
      items: [
        "**Record date:** Wednesday.",
        "**Ex-date (`T+1`):** Wednesday — the **same** business day as the record date.",
        "**Last day to buy and still get the dividend:** Tuesday (settles Wednesday).",
        "**Old `T+2` answer (now wrong):** ex-date Tuesday, one business day before record.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "**Record date Thursday** under `T+1`. The **ex-date is also Thursday** (same day). The **last day to buy** and still receive the dividend is **Wednesday** — the business day before the ex-date — because that trade settles Thursday, the record date.",
    },
    {
      type: "list",
      items: [
        "**Record date:** Thursday.",
        "**Ex-date:** Thursday (same business day, under `T+1`).",
        "**Buy by:** Wednesday to receive the dividend.",
        "**Buy on Thursday (ex-date) or later:** no dividend.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Good delivery", def: "Securities delivered in transferable form — proper endorsement, deliverable units (multiples of 100), and required documents; non-conforming is rejected." },
        { term: "Reclamation", def: "The right to return improperly delivered securities and recover payment after settlement when delivery wasn't in good form." },
        { term: "DK ('don't know') notice", def: "Sent under the Uniform Practice Code (11200 series) when a firm receives a delivery/comparison it has no record of, to question the trade." },
        { term: "When-issued (WI)", def: "A trade in a security authorized but not yet issued; settles on a special date set by the clearing corporation once issued, not standard T+1." },
        { term: "Accrued interest", def: "Interest the bond buyer pays the seller from the last coupon date up to but not including settlement; 30/360 for corp/muni, actual/actual for governments." },
        { term: "Record date", def: "The date on which a shareholder must be on the books to receive a dividend." },
        { term: "Ex-dividend date (T+1)", def: "Under T+1, generally the same business day as the record date; buyers on or after it do not receive the dividend." },
        { term: "Uniform Practice Code", def: "FINRA rules (11000 series, incl. 11200 DK procedures) governing comparison, delivery, and settlement of trades between firms." },
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
