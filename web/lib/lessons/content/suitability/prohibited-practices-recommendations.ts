import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "prohibited-practices-recommendations",
  title: "Red Flags: Churning, Concentration, Switching, and Breakpoint Sales",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 8,
  summary:
    "The recommendation rules have teeth — these are the classic violations (churning, unsuitable concentration, switching, breakpoint sales) and the quantitative red flags examiners look for.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Suitability isn't just an entrance exam for a single trade — it polices patterns of conduct. These are the classic prohibited practices the exam tests, and the red-flag metrics examiners use to spot them.",
    },
    { type: "heading", text: "Churning / excessive trading" },
    {
      type: "text",
      body:
        "Trading at a level **unreasonable for the customer's objectives** to generate commissions — a quantitative-suitability / `Reg BI` Care violation. The classic metrics are the **turnover ratio** and the **cost-to-equity ratio** (the 'break-even percentage' — how much the account must return just to cover costs).",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'it's only churning if the broker controls (has discretion over) the account.'* **Not anymore.** The `June 30, 2020` amendment **removed the control element** — a **pattern of recommendations a non-discretionary customer routinely follows** can be excessive trading. No formal control is required.",
    },
    { type: "heading", text: "Unsuitable concentration" },
    {
      type: "text",
      body:
        "Over-allocating to one **security, sector, or product** — e.g., a conservative retiree with **70% in one stock**. This fails **customer-specific** suitability even when the underlying product is perfectly fine on its own.",
    },
    { type: "heading", text: "Switching and share-class abuse" },
    {
      type: "list",
      items: [
        "**Mutual fund switching:** moving a customer between funds — especially **across fund families**, incurring **new sales charges** — without a legitimate best-interest rationale.",
        "**Share-class abuse:** recommending **Class B or C** shares when **Class A** with breakpoints would be cheaper for the customer long-term.",
      ],
    },
    { type: "heading", text: "Breakpoint sales and the customer's tools" },
    {
      type: "text",
      body:
        "A **breakpoint sale** is recommending a fund purchase **just below a breakpoint**, so the customer pays a **higher sales charge** than necessary — a violation. Three tools let customers reach lower charges:",
    },
    {
      type: "list",
      items: [
        "**Breakpoints** — volume discounts on the sales charge at set dollar thresholds.",
        "**Letter of Intent (LOI)** — a **13-month** pledge to reach a breakpoint; may be **backdated up to 90 days**.",
        "**Rights of Accumulation (ROA)** — existing holdings **count toward** the next breakpoint.",
      ],
    },
    { type: "heading", text: "Other red flags" },
    {
      type: "list",
      items: [
        "**Unauthorized trading** (trading without the customer's consent).",
        "**Speculative products to conservative customers**.",
        "**Ignoring liquidity needs**.",
        "**Failing to consider lower-cost reasonable alternatives** (a `Reg BI` Care concern).",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A broker recommends investing **$24,000** into a fund where a **breakpoint hits at $25,000**, without disclosing that adding **$1,000** (or signing an **LOI**) would **lower the sales charge**.",
    },
    {
      type: "list",
      items: [
        "**Violation — breakpoint sale:** the recommendation is structured **just below** the breakpoint, so the customer overpays the sales charge.",
        "**The fix the broker omitted:** disclose that $1,000 more — or an **LOI** (13-month pledge, backdatable up to 90 days) — reaches the discount.",
        "**Note:** existing holdings via **ROA** might already push the customer over $25,000 — another reason to check before recommending.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Churning / excessive trading", def: "Trading unreasonable for the customer's objectives to generate commissions; a quantitative-suitability / Reg BI Care violation." },
        { term: "Turnover ratio", def: "A metric of how frequently an account's holdings are replaced — a red flag for excessive trading." },
        { term: "Cost-to-equity (break-even) ratio", def: "The return an account must earn just to cover trading costs — a churning red flag." },
        { term: "Control element (removed 2020)", def: "Formal account control is no longer required for excessive-trading liability; a pattern of followed recommendations suffices." },
        { term: "Unsuitable concentration", def: "Over-allocating to one security/sector/product, failing customer-specific suitability even if the product is fine." },
        { term: "Mutual fund switching", def: "Moving a customer between funds, especially across families incurring new charges, without a best-interest rationale." },
        { term: "Breakpoint sale", def: "Recommending a purchase just below a breakpoint so the customer overpays the sales charge — a violation." },
        { term: "Letter of Intent (LOI)", def: "A 13-month pledge to invest enough to reach a breakpoint; may be backdated up to 90 days." },
        { term: "Rights of Accumulation (ROA)", def: "Existing fund holdings count toward reaching the next breakpoint." },
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
