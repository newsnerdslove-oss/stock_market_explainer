import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "msrb-municipal-securities-rulemaking",
  title: "The MSRB: Who Writes Municipal Rules (and Who Enforces Them)",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 3,
  summary:
    "The MSRB writes the rules for municipal securities dealers and advisors but — uniquely — has no enforcement arm; FINRA, the SEC, and bank regulators enforce its rules.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "The **MSRB** — the Municipal Securities Rulemaking Board — was created by the `Securities Acts Amendments of 1975`. It **writes rules** for **municipal securities dealers** (firms and banks) and **municipal advisors**. It has **no authority over issuers or investors**.",
    },
    { type: "heading", text: "The exam's favorite distinction: rules, but no enforcement" },
    {
      type: "text",
      body:
        "This is the point the exam tests hardest: the **MSRB makes rules but does NOT enforce them**. Enforcement is **delegated** to others — the **SEC**, **FINRA** (for broker-dealers), and the **bank regulators** (the **FDIC**, **Fed**, and **OCC**) for bank dealers. When the MSRB has written a rule, its job is done; someone else disciplines a violator.",
    },
    { type: "heading", text: "MSRB rules to know exist" },
    {
      type: "list",
      items: [
        "**Fair dealing** and **suitability** in municipal recommendations.",
        "**Fair pricing** and **confirmation / markup disclosure**.",
        "**Best execution**.",
        "The **gift rule** — `MSRB Rule G-20`, a `$100` per person per year limit on gifts related to muni business.",
      ],
    },
    { type: "heading", text: "EMMA — the official disclosure repository" },
    {
      type: "text",
      body:
        "**EMMA** (Electronic Municipal Market Access) is **MSRB-operated** and the **SEC-designated official repository** for municipal **disclosures**, **trade prices**, and market **data** — with **free public access**.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A muni dealer overcharges markups, violating an MSRB **fair-pricing** rule. The **MSRB cannot discipline** the dealer. Instead **FINRA** examines and enforces (or the **SEC**, or a **bank regulator** if it's a bank dealer). The MSRB's role ended the moment it wrote the rule.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "MSRB", def: "The Municipal Securities Rulemaking Board — writes rules for muni dealers and advisors; created by the Securities Acts Amendments of 1975." },
        { term: "Rulemaking-only SRO", def: "The MSRB writes rules but does NOT enforce them — its defining feature on the exam." },
        { term: "Enforcement delegation", def: "MSRB rules are enforced by the SEC, FINRA (for BDs), and bank regulators (FDIC, Fed, OCC)." },
        { term: "Securities Acts Amendments of 1975", def: "The law by which Congress created the MSRB." },
        { term: "MSRB Rule G-20", def: "The muni gift rule — a $100 per person per year limit for gifts related to municipal business." },
        { term: "EMMA", def: "MSRB-operated, SEC-designated official repository of municipal disclosures, trade prices, and data, with free public access." },
        { term: "Scope limits", def: "The MSRB has no authority over municipal issuers or investors — only over dealers and municipal advisors." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The MSRB enforces its own rules.'* It does **NOT** — the MSRB is a **rulemaking-only** SRO. **FINRA**, the **SEC**, and **bank regulators** enforce its rules. This is a favorite exam distinction.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
