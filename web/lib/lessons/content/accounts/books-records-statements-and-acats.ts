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
        "**`3 years`** (first 2 years easily accessible): **order tickets/memoranda**, **trade confirmations**, **customer complaints**, **trial balances**, **advertising/correspondence**, and **U4/U5**.",
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
        "`FINRA Rule 2231` sets statement frequency: **at least quarterly** to every account with a position or balance, and **monthly** if there was **activity** during the period. Statements must advise customers to **promptly report inaccuracies**.",
    },
    {
      type: "list",
      items: [
        "**Quarterly:** the floor — any account with a position or balance.",
        "**Monthly:** required whenever there was **account activity** during that month.",
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
        "An account had **two trades in March**. Under `FINRA Rule 2231` the firm must send a **March (monthly) statement** because there was **activity**. By contrast, a **dormant account** holding only a balance with no trades receives just the **quarterly** statement.",
    },
    {
      type: "list",
      items: [
        "**Activity in March:** monthly statement required for that month.",
        "**No activity:** quarterly statement is sufficient.",
        "**Either way:** the statement must prompt the customer to report inaccuracies.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SEC Rule 17a-3", def: "Specifies which books and records a broker-dealer must CREATE." },
        { term: "SEC Rule 17a-4", def: "Specifies how long records must be RETAINED (lifetime, 6-year, and 3-year buckets)." },
        { term: "6-year records", def: "Blotters, general ledgers, the stock record, and customer account records." },
        { term: "3-year records", def: "Order tickets, trade confirmations, customer complaints, trial balances, advertising/correspondence, and U4/U5 (first 2 years easily accessible)." },
        { term: "Lifetime records", def: "Corporate/partnership formation documents, stock certificate books, and minute books." },
        { term: "FINRA Rule 2231", def: "Requires account statements at least quarterly, and monthly when there was activity, with a notice to report inaccuracies." },
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
