import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "maintenance-calls-and-minimum-maintenance-price",
  title: "Maintenance Calls & the Minimum Maintenance Price: Multi-Step Problems",
  level: 4,
  moduleId: "markets-margin-math",
  moduleOrder: 4,
  summary:
    "Compute the maintenance call amount and the exact price at which a long or short account hits the maintenance floor — the highest-yield calculation on the exam.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Two formulas dominate this topic: the **maintenance call amount** (how much cash is owed when equity drops too low) and the **minimum maintenance price** (the exact price at which the floor is breached). Get the direction of the division right and these are quick points.",
    },
    {
      type: "heading",
      text: "The core formulas",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Maintenance call** = `Required maintenance − Current equity` (long req `= 25% × LMV`; short req `= 30% × SMV`).",
        "**Minimum maintenance price (LONG)** = `DR ÷ (1 − 0.25) = DR ÷ 0.75` — the LMV at which a long account hits the `25%` floor. Per-share: divide by the share count.",
        "**Minimum maintenance level (SHORT)** = `CR ÷ (1 + 0.30) = CR ÷ 1.30` — the SMV at which a short account hits the `30%` floor.",
        "**Buying power from SMA** = `2 × SMA` under Reg T `50%`.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Direction matters: the long trigger **divides** the debit by `0.75` (a *larger* number than the debit); the short trigger **divides** the credit by `1.30` (a *smaller* number than the credit). The long account breaks when price falls; the short account breaks when price rises.",
    },
    {
      type: "heading",
      text: "Worked example 1 — long minimum maintenance price",
    },
    {
      type: "text",
      body:
        "A customer is long 1,000 shares with a debit balance of `$30,000`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open: 1,000 shares long, `DR = $30,000`.",
        "Minimum maintenance LMV `= $30,000 ÷ 0.75 = $40,000` → `$40/share`. Below `$40` a call triggers.",
        "Stock falls to `$36` (`LMV = $36,000`): `EQ = $36,000 − $30,000 = $6,000`.",
        "Requirement `= 25% × $36,000 = $9,000`; maintenance call `= $9,000 − $6,000 = $3,000`.",
      ],
    },
    {
      type: "heading",
      text: "Worked example 2 — short minimum maintenance level",
    },
    {
      type: "text",
      body:
        "A short account has a credit balance of `$130,000`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open: short account, `CR = $130,000`.",
        "Minimum maintenance SMV `= $130,000 ÷ 1.30 = $100,000`. Above `$100,000` SMV a call triggers.",
        "SMV rises to `$110,000`: `EQ = $130,000 − $110,000 = $20,000`.",
        "Requirement `= 30% × $110,000 = $33,000`; maintenance call `= $33,000 − $20,000 = $13,000`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Maintenance call", def: "`Required maintenance − Current equity`; cash owed to restore the floor." },
        { term: "Minimum maintenance price (long)", def: "`DR ÷ 0.75` — the LMV at which a long account hits the `25%` floor." },
        { term: "Minimum maintenance level (short)", def: "`CR ÷ 1.30` — the SMV at which a short account hits the `30%` floor." },
        { term: "DR", def: "Debit balance on a long account; fixed, drives the long trigger price." },
        { term: "CR", def: "Credit balance on a short account; frozen, drives the short trigger level." },
        { term: "Maintenance (long)", def: "FINRA floor: `25% × LMV`." },
        { term: "Maintenance (short)", def: "FINRA floor: greater of `30% × SMV` or `$5/share`." },
        { term: "Buying power", def: "`2 × SMA` under Reg T `50%`." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"For a long account you find the call price by multiplying the debit by `0.75`.\"* You **divide**: `DR ÷ (1 − 0.25) = DR ÷ 0.75`. Likewise the short trigger is `CR ÷ 1.30`, not `CR × 1.30`. This is educational content, not financial advice.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Reference — intraday/day-trading margin: FINRA Notice 26-10 eliminated the pattern-day-trader rule and the `$25,000` minimum (effective 2026-06-04, phasing in to 2027-10-20). Intraday requirements are now driven by each account's intraday margin *exposure/deficit* under Rule 4210 rather than day-trade counts — there is no discrete codified \"`25%` intraday\" figure to memorize here. The 300-level Margin & leverage module owns this topic; it is cross-referenced only.",
    },
  ],
};
