import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "recommendations-required-disclosures",
  title: "Recommendations in Communications: Reasonable Basis & Conflict Disclosures",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 7,
  summary:
    "When a communication recommends a specific security, the firm must have a reasonable basis and disclose its own financial interests and conflicts.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "When a **retail communication recommends a specific security**, `Rule 2210(d)(7)` adds two requirements: the firm must have a **reasonable basis**, and it must **disclose its own financial conflicts** in the security.",
    },
    { type: "heading", text: "Required conflict disclosures" },
    {
      type: "text",
      body:
        "If applicable, the communication must disclose that:",
    },
    {
      type: "list",
      items: [
        "The firm **makes a market** in the recommended security (or its underlying).",
        "The firm or its **officers/partners own options, rights, or warrants** to purchase the security.",
        "The firm was a **manager or co-manager of a public offering** of the security **within the past `12 months`**.",
      ],
    },
    { type: "heading", text: "Reasonable basis and supporting information" },
    {
      type: "list",
      items: [
        "The firm must have a **reasonable basis** for the recommendation.",
        "It must **provide, or offer to furnish on request**, the **supporting information**.",
        "It **cannot imply past performance will recur** or **guarantee** the recommendation's results (ties to Lesson 3).",
        "Disclosures must be **clear and prominent**, not buried.",
      ],
    },
    { type: "heading", text: "What's excluded" },
    {
      type: "text",
      body:
        "Certain **research reports** governed by other rules, and recommendations that **don't name a specific security**, fall outside `2210(d)(7)`.",
    },
    { type: "heading", text: "Worked scenario — a buy recommendation on XYZ" },
    {
      type: "text",
      body:
        "A firm publishes a **buy recommendation on XYZ stock**. The firm **makes a market** in XYZ and **co-managed XYZ's IPO `8 months` ago** (within `12 months`). The retail communication must disclose **both** facts — **market-making** and **underwriting within the past `12 months`** — and **offer the supporting information**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2210(d)(7)", def: "Governs recommendations of specific securities in retail communications." },
        { term: "Reasonable basis", def: "The firm must have a sound basis for any recommendation it publishes." },
        { term: "Market-making disclosure", def: "Must disclose if the firm makes a market in the recommended security or its underlying." },
        { term: "Options/rights/warrants disclosure", def: "Must disclose if the firm or its officers/partners own options, rights, or warrants in the security." },
        { term: "12-month underwriting disclosure", def: "Must disclose if the firm managed/co-managed a public offering of the security within the past 12 months." },
        { term: "Supporting information", def: "Must be provided, or offered to furnish on request, for the recommendation." },
        { term: "Clear and prominent", def: "Conflict disclosures must be conspicuous, not buried in the communication." },
        { term: "Excluded recommendations", def: "Certain research reports under other rules, and recommendations not naming a specific security." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A recommendation only needs to be suitable; I don't have to reveal what my firm owns.'* No — the firm must disclose its **market-making**, **ownership/options**, and **recent (`12-month`) underwriting** conflicts, and must have a **reasonable basis** plus **offer supporting info** on request.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
