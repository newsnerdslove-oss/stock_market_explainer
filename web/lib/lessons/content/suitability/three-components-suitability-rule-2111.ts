import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "three-components-suitability-rule-2111",
  title: "The Three Pillars of Suitability: Rule 2111",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 3,
  summary:
    "Rule 2111 breaks suitability into three obligations — reasonable-basis, customer-specific, and quantitative — and you must satisfy all three.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "FINRA `Rule 2111` requires a **reasonable basis** to believe that a recommended transaction or strategy is suitable, based on reasonable diligence to ascertain the customer's investment profile. 'Suitable' is not one test — it's **three obligations**, and a recommendation must clear **all three**.",
    },
    { type: "heading", text: "The three components" },
    {
      type: "list",
      items: [
        "**Reasonable-basis suitability** — the product is suitable for *at least some* investors. The rep must understand the product's risks and rewards before recommending it to anyone.",
        "**Customer-specific suitability** — the product is suitable for *this* customer given their investment profile.",
        "**Quantitative suitability** — a *series* of recommendations, even if each is suitable in isolation, is not **excessive** when taken together (turnover, cost-to-equity, in-and-out trading).",
      ],
    },
    {
      type: "text",
      body:
        "These stack independently. You can satisfy customer-specific suitability and still **fail** reasonable-basis (you never understood the product) or **fail** quantitative (the pattern of trades is excessive). All three must hold.",
    },
    { type: "heading", text: "Current state — Rule 2111 after June 2020" },
    {
      type: "text",
      body:
        "This is load-bearing for the exam. FINRA Regulatory Notice 20-18 (effective `June 30, 2020`) amended `Rule 2111` so that it **does NOT apply** to recommendations subject to SEC **`Reg BI`** — i.e., recommendations to **retail customers**. `Rule 2111` now primarily governs **non-retail** recommendations: institutions, pension funds, entities, and natural persons not acting for personal/household purposes.",
    },
    {
      type: "text",
      body:
        "The same 2020 amendment **removed the 'control' element** from quantitative suitability. A broker no longer needs to *control* the account to be liable for excessive trading — a **pattern of recommendations the customer routinely follows** is enough.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A broker recommends a complex **non-traded REIT** he never actually analyzed, to a conservative 70-year-old retiree, placing **80%** of her portfolio into it.",
    },
    {
      type: "list",
      items: [
        "**Fails reasonable-basis:** he never understood the REIT's risks, so he has no basis to believe it suitable for *anyone*.",
        "**Fails customer-specific:** an illiquid, concentrated 80% position is wrong for a conservative retiree's profile.",
        "**Note on scope:** because the customer is a retail customer, this conduct is actually judged under `Reg BI`'s Care Obligation today; `Rule 2111`'s three-part framework is the analogue that still governs the same situation for a *non-retail* customer.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2111 (Suitability)", def: "FINRA rule requiring a reasonable basis to believe a recommendation is suitable; now primarily governs non-retail recommendations." },
        { term: "Reasonable-basis suitability", def: "The recommendation is suitable for at least some investors; the rep understands its risks and rewards." },
        { term: "Customer-specific suitability", def: "The recommendation is suitable for this particular customer given their investment profile." },
        { term: "Quantitative suitability", def: "A series of recommendations is not excessive for the customer's profile, even if each trade is suitable alone." },
        { term: "Excessive trading", def: "A volume/frequency of trading unreasonable for the customer's objectives, measured by turnover and cost-to-equity." },
        { term: "Reg. Notice 20-18", def: "The June 30, 2020 FINRA amendment making Rule 2111 inapplicable where Reg BI applies and removing the control element." },
        { term: "Control element (removed)", def: "The former requirement that a broker control the account for quantitative-suitability liability — deleted in 2020." },
        { term: "Non-retail customer", def: "Institutions, entities, and natural persons not acting for personal/household purposes — still governed by Rule 2111." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'suitability just means the product fits this one customer.'* No — it's **three obligations**. You can pass **customer-specific** suitability and still fail **reasonable-basis** (you never understood the product) or **quantitative** (the trading pattern is excessive). All three must be satisfied.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
