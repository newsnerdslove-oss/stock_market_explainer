import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "form-crs-disclosure-obligations",
  title: "Form CRS and Disclosure to Retail Investors",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 6,
  summary:
    "Form CRS is the short, plain-English relationship summary that BDs and RIAs must give every retail investor — the front door of Reg BI's disclosure regime.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "`Form CRS` (the **Customer/Client Relationship Summary**) was adopted alongside `Reg BI`, with the same `June 30, 2020` compliance date. It's required of both **broker-dealers and RIAs that serve retail investors**. A firm with **no retail investors** need not prepare one.",
    },
    { type: "heading", text: "Length and format" },
    {
      type: "list",
      items: [
        "Maximum **2 pages** for a stand-alone broker-dealer or stand-alone RIA.",
        "Maximum **4 pages** for a **dual registrant**.",
        "Must be **plain English**, in a **prescribed format** — not free-form marketing copy.",
      ],
    },
    { type: "heading", text: "Required content" },
    {
      type: "list",
      items: [
        "The **services** offered.",
        "The **standard of conduct** (`Reg BI` for a BD; **fiduciary** for an RIA).",
        "**Fees and costs**.",
        "**Conflicts of interest**.",
        "Required **'conversation starter'** questions for the investor to ask.",
        "Whether the firm or its professionals have **reportable legal or disciplinary history**.",
      ],
    },
    { type: "heading", text: "Filing and delivery" },
    {
      type: "list",
      items: [
        "**BDs file** `Form CRS` with **FINRA**.",
        "**RIAs file** it as **Part 3 of Form ADV** with the **SEC**.",
        "**Delivered** to retail investors at or before the **earliest of**: a recommendation, opening an account, or placing an order.",
        "Also **posted prominently** on the firm's website.",
      ],
    },
    {
      type: "text",
      body:
        "Crucial nuance: `Form CRS` **supports** but does **NOT by itself satisfy** `Reg BI`'s broader **Disclosure Obligation**. It's the front door, not the whole house.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A new retail customer is about to open a brokerage account. What must the firm do, and what happens if it skips `Form CRS`?",
    },
    {
      type: "list",
      items: [
        "**Required:** deliver `Form CRS` (≤ **2 pages** for this stand-alone BD) at or before account opening, and **post it on the website**.",
        "**Failure is a standalone violation:** if the firm never delivers `Form CRS`, that's a violation **even if the recommendation itself was perfectly suitable**.",
        "**Not a substitute:** delivering `Form CRS` alone does **not** discharge the full `Reg BI` Disclosure Obligation — additional material-fact disclosure is still required.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Form CRS", def: "The Customer/Client Relationship Summary, a short plain-English disclosure required of BDs and RIAs serving retail investors; adopted with Reg BI." },
        { term: "Page limit", def: "Max 2 pages for a stand-alone BD or RIA; max 4 pages for a dual registrant." },
        { term: "Conversation starters", def: "Prescribed questions Form CRS prompts retail investors to ask their firm." },
        { term: "Standard of conduct (in CRS)", def: "The disclosed standard — Reg BI for a broker-dealer, fiduciary for an RIA." },
        { term: "Form ADV Part 3", def: "Where an RIA files its Form CRS, submitted to the SEC." },
        { term: "Delivery trigger", def: "Form CRS is delivered at or before the earliest of a recommendation, account opening, or order placement." },
        { term: "Disclosure Obligation (Reg BI)", def: "Reg BI's requirement of full and fair written disclosure of material facts; Form CRS supports but does not by itself satisfy it." },
        { term: "Retail investor", def: "A natural person (or legal rep) who receives services primarily for personal, family, or household purposes." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Form CRS is just marketing / optional.'* It is a **required, regulated disclosure** with a **prescribed format**, **page limits**, **delivery timing**, and **filing** (BD with FINRA; RIA as `Form ADV` Part 3 with the SEC). And it does **not by itself** discharge `Reg BI`'s full **Disclosure Obligation**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
