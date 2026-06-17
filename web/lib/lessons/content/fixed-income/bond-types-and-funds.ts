import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bond-types-and-funds",
  title: "Bond Types & Funds",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 7,
  summary: "Treasuries, corporates, and tax-advantaged munis — plus the tradeoff between individual bonds and bond funds.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Bonds aren't one thing. The major categories differ in who issues them, how risky they are, and — critically — how they're *taxed*. Knowing the main types, and whether to own them individually or through a fund, shapes most fixed-income decisions.",
    },
    {
      type: "heading",
      text: "The three big issuer types",
    },
    {
      type: "list",
      items: [
        "**US Treasuries** — government-backed, near risk-free. *Bills* (`≤ 52` weeks, sold at a discount, no coupon), *notes* (`2/3/5/7/10`-year), and *bonds* (`20/30`-year). Notes and bonds pay semiannual coupons.",
        "**Corporate bonds** — issued by companies, carry credit risk, and pay higher yields via the spread. Interest is **fully taxable**.",
        "**Municipal bonds (munis)** — issued by state and local governments. Interest is **generally federal-tax-exempt** (often state/local too if you live in-state) — though not always.",
      ],
    },
    {
      type: "heading",
      text: "The muni tax break: taxable-equivalent yield",
    },
    {
      type: "text",
      body:
        "Munis usually carry **lower** stated yields than taxable bonds — the advantage shows up *after tax*. To compare fairly, convert the muni to a **taxable-equivalent yield (TEY)**: `TEY = tax-free yield ÷ (1 − marginal tax rate)`. The higher your tax bracket, the bigger the muni's edge.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Treasury bill / note / bond", def: "Government debt by maturity: bills `≤ 52` wks (no coupon), notes `2`–`10` yr, bonds `20`/`30` yr." },
        { term: "Corporate bond", def: "Company-issued debt with credit risk and fully taxable interest." },
        { term: "Municipal bond", def: "State/local debt whose interest is generally federal-tax-exempt." },
        { term: "Taxable-equivalent yield", def: "`tax-free yield ÷ (1 − marginal tax rate)` — lets you compare a muni to a taxable bond." },
        { term: "Bond fund / ETF", def: "A pooled portfolio of many bonds; diversified and tradable, but with no fixed maturity." },
        { term: "Expense ratio", def: "The annual fee a fund or ETF charges, as a percent of assets." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "An investor in the `32%` bracket compares a muni yielding `3.5%` (tax-exempt) with a corporate yielding `4.8%` (taxable).",
        "Muni TEY `= 3.5% ÷ (1 − 0.32) = 3.5% ÷ 0.68 = 5.15%` — that beats the `4.8%` corporate.",
        "Cross-check from the other side: corporate *after-tax* `= 4.8% × (1 − 0.32) = 4.8% × 0.68 = 3.26%`, which is below the muni's `3.5%`. The **muni wins**.",
        "In a `0%` bracket, muni TEY `= 3.5% ÷ 1 = 3.5%` < `4.8%` → the **taxable bond wins**. The muni's edge scales with the bracket.",
      ],
    },
    {
      type: "heading",
      text: "Individual bonds vs. funds",
    },
    {
      type: "list",
      items: [
        "**Individual bonds** — a *defined maturity* and known cash flows, so you can plan a payout on a set date. Downside: single-issuer concentration.",
        "**Bond funds / ETFs** — instant diversification and easy trading, but **no fixed maturity** (the price fluctuates with rates) and an *expense ratio*.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Not all muni interest is tax-free — there are *taxable munis*, and some bonds trigger the Alternative Minimum Tax (AMT). And a bond fund's lack of a maturity date means there's no guaranteed return of principal on a set day.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume a bond fund *matures* like a single bond. Most funds and ETFs have **no maturity** — they continually buy and sell holdings, so the price keeps moving with rates. (Defined-maturity ETFs are the exception.)",
    },
  ],
};
