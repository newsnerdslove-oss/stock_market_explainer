import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "reporting-and-recordkeeping",
  title: "Reporting & Recordkeeping: Retention Periods, TRACE, Gifts & Reportable Ownership",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 7,
  summary:
    "Firms must make and keep specific records for 3, 6, or the firm's lifetime, report bond trades through TRACE, observe the gift limit and outside-activity rules, and disclose large positions and ownership.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Recordkeeping is governed by `SEC Rule 17a-3` (which records to **make**) and `SEC Rule 17a-4` (how long to **retain** them). The exam tests the **tiered** retention periods — they are **not all the same**.",
    },
    { type: "heading", text: "Books & records — the retention tiers" },
    {
      type: "list",
      items: [
        "**`3 years`** — most records (confirmations, order tickets, communications), with the **first `2 years` easily accessible**.",
        "**`6 years`** — **blotters**, **general ledgers**, the **stock/securities record**, and **customer account records** (the `6 years` for account records runs **from account closing**).",
        "**Life of the firm** — **organizational documents** under `Rule 17a-4(d)`: partnership articles, articles of incorporation/charter, minute books, and stock certificate books.",
      ],
    },
    { type: "heading", text: "TRACE — bond trade reporting" },
    {
      type: "text",
      body:
        "Under `FINRA Rule 6730`, eligible fixed-income trades must be reported to **TRACE** within `15 minutes` of execution. (A `1-minute` rule was approved but has **no effective date** — teach `15 minutes` as current.)",
    },
    { type: "heading", text: "Gifts and outside activities" },
    {
      type: "list",
      items: [
        "**FINRA gift limit** — `Rule 3220`: **`$300` per person per year**, effective **March 30 2026** (raised from `$100`). Teach `$300` as current. Gifts **aggregate** per person per year.",
        "**Outside Business Activities** — `Rule 3270`: **prior written notice** to the firm.",
        "**Private Securities Transactions / 'selling away'** — `Rule 3280`: **prior written notice**; if **compensated**, written firm **approval** and **recording on the firm's books**.",
      ],
    },
    { type: "heading", text: "Reportable ownership and large positions" },
    {
      type: "list",
      items: [
        "**Schedule 13D/13G** — filed at **>`5%`** beneficial ownership of a voting equity class. The **13D deadline** was shortened to **`5 business days`** (effective **Feb 5 2024**).",
        "**Section 16 insiders** — directors, officers, and **>`10%`** holders — file **Form 3** (initial), **Form 4** (changes), and **Form 5** (annual).",
        "**Large trader** — `SEC Rule 13h-1`: self-identify via **Form 13H** (≈`2M` shares or `$20M` in a day / `20M` shares or `$200M` in a month).",
      ],
    },
    { type: "heading", text: "Worked scenario — gift aggregation" },
    {
      type: "text",
      body:
        "A rep gives a client a `$120` bottle of wine in Q1 and `$200` of event tickets in Q3. Total = `$120 + $200 = $320`, which **exceeds** the current `$300` annual limit (`Rule 3220`) by `$20` → **violation**. Gifts **aggregate** per person per year, so the two count together.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 17a-3 / 17a-4", def: "SEC rules to make and retain books and records, with tiered retention periods." },
        { term: "3-year records", def: "Most records (confirmations, order tickets, communications); first 2 years easily accessible." },
        { term: "6-year records", def: "Blotters, general ledgers, the stock/securities record, and customer account records (6 years from account closing)." },
        { term: "Life-of-firm records", def: "Organizational documents (partnership articles, charter, minute books, stock certificate books) under 17a-4(d)." },
        { term: "TRACE (Rule 6730)", def: "Reports eligible fixed-income trades within 15 minutes of execution." },
        { term: "Rule 3220 gift limit", def: "$300 per person per year (eff. March 30 2026, up from $100); gifts aggregate per person per year." },
        { term: "Rules 3270 / 3280", def: "Outside business activities require prior written notice; selling away requires notice and, if compensated, firm approval and recording." },
        { term: "Schedule 13D/13G", def: "Filed at >5% beneficial ownership of a voting equity class; the 13D deadline is 5 business days (eff. Feb 5 2024)." },
        { term: "Section 16 / Forms 3,4,5", def: "Directors, officers, and >10% holders file Form 3 (initial), 4 (changes), and 5 (annual)." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'All BD records are kept the same period (often `3 years`).'* No — retention is **tiered**: `3 years` for most records, `6 years` for blotters/ledgers/account records, and **life of the firm** for organizational documents.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
