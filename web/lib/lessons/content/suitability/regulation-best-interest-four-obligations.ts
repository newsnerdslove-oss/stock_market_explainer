import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "regulation-best-interest-four-obligations",
  title: "Regulation Best Interest: The Four Obligations",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 4,
  summary:
    "Since June 2020, broker-dealers must act in a retail customer's best interest — satisfied only by meeting all four obligations: Disclosure, Care, Conflict of Interest, and Compliance.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "SEC **`Reg BI`** (Regulation Best Interest), adopted as Exchange Act `Rule 15l-1` with a compliance date of `June 30, 2020`, applies when a broker-dealer **recommends** a securities transaction or strategy — including a recommended **account type** — to a **retail customer**. The general obligation: act in the customer's **best interest** at the time of the recommendation, and do not place the firm's or rep's interest ahead of the customer's.",
    },
    {
      type: "text",
      body:
        "A **retail customer** is a natural person (or their legal representative) who uses the recommendation **primarily for personal, family, or household purposes**. That definition is what pulls the recommendation out of `Rule 2111` and into `Reg BI`.",
    },
    { type: "heading", text: "The four obligations — all four must be met" },
    {
      type: "list",
      items: [
        "**Disclosure Obligation** — full and fair **written** disclosure of material facts: the capacity in which the firm acts, fees and costs, the scope of services, and material conflicts. `Form CRS` supports this obligation.",
        "**Care Obligation** — exercise reasonable diligence, care, and skill to have a reasonable basis to believe the recommendation is in the customer's best interest — considering potential **risks, rewards, AND costs**. Cost is an explicit factor, but the **lowest-cost** option is **not** required.",
        "**Conflict of Interest Obligation** — maintain **written policies** to identify and at least **disclose** (or eliminate/mitigate) conflicts; and must **eliminate** certain sales contests, quotas, and bonuses tied to specific securities within limited time periods.",
        "**Compliance Obligation** — maintain written policies and procedures reasonably designed to achieve compliance with `Reg BI` **as a whole**.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "For a retail customer, a broker recommends **Mutual Fund A** — which pays him a higher commission — over a **nearly identical but cheaper Fund B**. Even if this would have passed the old suitability rule, it fails `Reg BI`.",
    },
    {
      type: "list",
      items: [
        "**Violates the Care Obligation:** **cost** is an explicit factor in best interest, and recommending the costlier of two near-identical funds is hard to justify as the customer's best interest.",
        "**Violates the Conflict of Interest Obligation:** the recommendation is driven by the broker's **higher commission** — his interest placed ahead of the customer's.",
        "**Why old suitability isn't enough:** Fund A might be 'suitable,' but `Reg BI` is a higher bar — best interest, with cost mandatory to weigh.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Reg BI (Regulation Best Interest)", def: "SEC Exchange Act Rule 15l-1; broker-dealers must act in a retail customer's best interest at the time of a recommendation. Compliance date June 30, 2020." },
        { term: "Retail customer", def: "A natural person (or legal rep) using a recommendation primarily for personal, family, or household purposes." },
        { term: "Disclosure Obligation", def: "Full and fair written disclosure of material facts — capacity, fees/costs, scope, and material conflicts." },
        { term: "Care Obligation", def: "Reasonable diligence/care/skill to have a reasonable basis the recommendation is in the customer's best interest, weighing risks, rewards, and costs." },
        { term: "Conflict of Interest Obligation", def: "Written policies to identify and at least disclose (or mitigate) conflicts; certain sales contests and quotas must be eliminated." },
        { term: "Compliance Obligation", def: "Written policies and procedures reasonably designed to achieve compliance with Reg BI as a whole." },
        { term: "Best interest standard", def: "Higher than old suitability; do not place the firm's or rep's interest ahead of the retail customer's." },
        { term: "Cost as a factor", def: "Cost must be considered under the Care Obligation, but the lowest-cost product is not automatically required." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Reg BI just means recommend the lowest-cost or best-performing product.'* No — `Reg BI` requires acting in the customer's **best interest considering risks, rewards, and costs**. **Cost is mandatory to consider**, but the **lowest-cost** option is **not** automatically required; a slightly costlier product can still be in the customer's best interest.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
