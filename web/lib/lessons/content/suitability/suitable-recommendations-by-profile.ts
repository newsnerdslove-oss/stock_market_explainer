import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "suitable-recommendations-by-profile",
  title: "Matching Products to Profiles: Worked Recommendation Scenarios",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 7,
  summary:
    "Suitability is judgment, not math — here we work three classic profiles (retiree, young growth investor, speculator) from objective to the right (and wrong) recommendation.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Suitability questions on the exam are pattern-matching with traps. There's no formula — you read a profile, shortlist what fits, then **filter out** the products that violate a constraint. Wealth and risk tolerance never override time horizon, liquidity, or concentration limits.",
    },
    { type: "heading", text: "The five-step method" },
    {
      type: "list",
      items: [
        "**1. Read the profile:** objective + risk tolerance + time horizon + liquidity + tax status.",
        "**2. Shortlist** product categories that fit the **objective**.",
        "**3. Filter** by the **constraints** (drop anything that violates horizon, liquidity, or risk tolerance).",
        "**4. Check concentration/diversification** — even a fine product can be unsuitable in too large a dose.",
        "**5. Confirm cost** is in the customer's best interest (`Reg BI` Care Obligation).",
      ],
    },
    { type: "heading", text: "Three archetypes" },
    {
      type: "list",
      items: [
        "**Retiree** (income + preservation, short horizon, low risk) → high-grade/Treasury and municipal bonds, preferred stock, dividend equities, fixed annuities, money market. **Avoid** options, concentrated growth, illiquid products.",
        "**Young accumulator** (growth, 30+ year horizon, high risk tolerance) → diversified equities/growth funds. **Avoid** over-allocating to cash/bonds.",
        "**Speculator** (surplus capital, very high risk tolerance) → options, low-priced/leveraged products — **only** with surplus, loss-tolerant funds.",
      ],
    },
    { type: "heading", text: "Two overrides that catch test-takers" },
    {
      type: "list",
      items: [
        "**Liquidity override:** even a wealthy customer is **unsuitable** for an illiquid product (non-traded REIT, LP) if they have **near-term liquidity needs**.",
        "**Tax overlay:** municipal bonds suit **high-bracket TAXABLE** accounts; **never** put munis in a **tax-deferred retirement account** — it wastes the exemption.",
      ],
    },
    { type: "heading", text: "Worked three-way scenario" },
    {
      type: "text",
      body:
        "Three customers, three objectives. The same product can be perfect for one and a violation for another.",
    },
    {
      type: "list",
      items: [
        "**Retiree, 68, income/low-risk** → **Suitable:** an investment-grade **bond ladder** plus **dividend equities**. **Unsuitable:** **70% in one speculative biotech** — wrong objective and a concentration failure.",
        "**Investor, 28, growth** → **Suitable:** **diversified equity/growth funds**. **Unsuitable:** **all money-market** — defeats the growth objective and invites inflation risk over decades.",
        "**Wealthy speculator with $50,000 of true risk capital** → **Suitable:** **options funded with that $50k**. **Unsuitable:** the **same options strategy funded from the children's college savings** — those funds aren't loss-tolerant.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Suitability method", def: "Read profile → shortlist by objective → filter by constraints → check concentration → confirm cost (Reg BI Care)." },
        { term: "Retiree archetype", def: "Income + preservation, short horizon, low risk; high-grade bonds, preferred, dividend stocks, fixed annuities, money market." },
        { term: "Young accumulator archetype", def: "Growth, long horizon, high risk tolerance; diversified equities/growth funds; avoid over-allocating to cash." },
        { term: "Speculator archetype", def: "Very high risk tolerance using surplus, loss-tolerant capital; options, low-priced/leveraged products." },
        { term: "Liquidity override", def: "Near-term liquidity needs make illiquid products unsuitable even for wealthy, risk-tolerant customers." },
        { term: "Concentration check", def: "Over-allocating to one security/sector/product can make an otherwise fine product unsuitable." },
        { term: "Tax overlay", def: "Munis fit high-bracket taxable accounts; never hold munis in a tax-deferred account, which wastes the exemption." },
        { term: "Risk capital", def: "Surplus funds a customer can afford to lose — the only suitable basis for speculative strategies." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'a risk-tolerant or wealthy customer can be sold anything.'* High net worth or risk tolerance does **not** override **time horizon**, **liquidity needs**, or **concentration limits**. Suitability is the **intersection of all profile factors** — one failed constraint makes the recommendation unsuitable.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice.",
    },
  ],
};
