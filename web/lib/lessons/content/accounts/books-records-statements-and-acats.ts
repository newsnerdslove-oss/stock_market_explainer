import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "books-records-statements-and-acats",
  title: "Books, Records, Statements & Account Transfers (ACATS)",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 5,
  summary:
    "What records the firm must keep and for how long, how often customers get statements, and the FINRA-mandated timeline for transferring an account.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Recordkeeping splits cleanly between two SEC rules: `Rule 17a-3` says which records must be **created**, and `Rule 17a-4` says **how long** they must be **retained**. The most-missed point is that **order tickets and confirmations are `3-year` records**, not `6-year`.",
    },
    { type: "heading", text: "Retention buckets" },
    {
      type: "list",
      items: [
        "**Lifetime of the firm:** partnership/corporate **formation documents**, **stock certificate books**, and **minute books**.",
        "**`6 years`:** **blotters**, **general ledgers**, the **stock record**, and **customer account records** (the clock runs from account closing / last update).",
        "**`4 years`:** **written customer complaints** (`FINRA Rule 4513`, aligned to FINRA's exam cycle).",
        "**`3 years`** (first 2 years easily accessible): **order tickets/memoranda**, **trade confirmations**, **trial balances**, **advertising/correspondence**, and **U4/U5**.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Order tickets and confirmations are kept `6 years`.'* No — those are **`3-year`** records (first 2 years readily accessible). The **`6-year`** bucket is **blotters, ledgers, the stock record, and customer account records**.",
    },
    { type: "heading", text: "Customer account statements" },
    {
      type: "text",
      body:
        "`FINRA Rule 2231` sets statement frequency: **at least once every calendar quarter** to every account with a **position, money balance, or activity** during the period. There is **no monthly-on-activity requirement** — FINRA proposed one but did not adopt it. Statements must advise customers to **promptly report inaccuracies**.",
    },
    {
      type: "list",
      items: [
        "**At least quarterly:** the rule — any account with a position, money balance, or activity in the period.",
        "**No monthly mandate:** account activity does **not** trigger a monthly statement under Rule 2231 (a common myth).",
        "**Always:** a notice to **promptly report** any errors.",
      ],
    },
    { type: "heading", text: "Proxies and voting" },
    {
      type: "text",
      body:
        "When securities are held in **street name**, the broker (the record holder) **forwards proxy materials** to the **beneficial owners**. The broker may vote **uninstructed** shares only on **routine** matters — **never** on **contested or non-routine** matters.",
    },
    { type: "heading", text: "Account transfers — ACATS" },
    {
      type: "text",
      body:
        "`FINRA Rule 11870` governs the **Automated Customer Account Transfer Service (ACATS)**. The customer signs a **Transfer Initiation Form (TIF)**, and the timeline is strict.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "On a signed **TIF**, the **carrying firm has `1 business day`** to **validate** (or take exception / reject).",
        "Once validated, the transfer must **complete within `3 business days`**.",
        "End to end this runs roughly **`4–6 business days`**. **Nontransferable / proprietary** assets are handled separately.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "An account had **two trades in March**; another held only a **cash balance** with no trades. Under `FINRA Rule 2231` **both** receive **at least a quarterly statement** — the activity in the first account does **not** mandate a separate monthly statement. (A firm may *choose* to send monthly statements, but the rule only requires quarterly.)",
    },
    {
      type: "list",
      items: [
        "**Both accounts:** a position, money balance, or activity each guarantees the **quarterly** statement.",
        "**Activity ≠ monthly:** trading in March does not force a March statement under Rule 2231.",
        "**Either way:** the statement must prompt the customer to report inaccuracies.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SEC Rule 17a-3", def: "Specifies which books and records a broker-dealer must CREATE." },
        { term: "SEC Rule 17a-4", def: "Specifies how long records must be RETAINED (lifetime, 6-year, and 3-year buckets)." },
        { term: "6-year records", def: "Blotters, general ledgers, the stock record, and customer account records." },
        { term: "3-year records", def: "Order tickets, trade confirmations, trial balances, advertising/correspondence, and U4/U5 (first 2 years easily accessible)." },
        { term: "4-year records", def: "Written customer complaints (FINRA Rule 4513), aligned to FINRA's exam cycle." },
        { term: "Lifetime records", def: "Corporate/partnership formation documents, stock certificate books, and minute books." },
        { term: "FINRA Rule 2231", def: "Requires account statements at least once every calendar quarter (no monthly-on-activity mandate), with a notice to report inaccuracies." },
        { term: "Street-name proxy voting", def: "The broker forwards proxies to beneficial owners and may vote uninstructed shares only on routine matters, never contested ones." },
        { term: "ACATS (FINRA Rule 11870)", def: "Account transfer process: 1 business day to validate the TIF, then 3 business days to complete the transfer." },
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
