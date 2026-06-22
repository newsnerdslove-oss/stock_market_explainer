import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "accrued-interest-and-how-bonds-trade",
  title: "Accrued Interest & How Bonds Trade",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 8,
  summary: "When you buy a bond between coupons, you pay the seller the interest they've earned — computed with a specific day-count and added to the quoted price.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Bonds pay coupons on fixed dates, but they trade **every day** in between. If you buy a bond a month after its last coupon, the seller has earned a month of interest they haven't been paid yet. So at settlement you **pay the seller that earned interest** — called **accrued interest** — and you're made whole when the full coupon arrives on the next payment date.",
    },
    {
      type: "heading",
      text: "Who pays whom" },
    {
      type: "text",
      body:
        "**The buyer pays accrued interest to the seller.** Accrual runs from the **last coupon date up to (but not including) the settlement date**. Corporate-bond settlement is **`T+1`** (one business day after the trade, since 2024). On the next coupon date the buyer then collects the **entire** coupon — keeping the part they earned and recovering the part they advanced to the seller.",
    },
    {
      type: "heading",
      text: "Day-count conventions" },
    {
      type: "text",
      body:
        "How you count the days depends on the issuer. **Corporate and municipal** bonds use **`30/360`** — every month is treated as 30 days and the year as 360. **US Treasuries** use **`actual/actual`** — the real number of days in the period over the real days in the year. Getting the convention right is the whole game on an accrued-interest question.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Accrued interest", def: "Coupon interest earned by the seller since the last payment date, paid by the buyer at settlement." },
        { term: "30/360", def: "Day-count for corporate and municipal bonds: each month = 30 days, year = 360 days." },
        { term: "Actual/actual", def: "Day-count for US Treasuries: actual calendar days over the actual days in the period." },
        { term: "Clean price", def: "The quoted price of a bond, excluding accrued interest." },
        { term: "Dirty (invoice) price", def: "What the buyer actually pays = clean price + accrued interest." },
        { term: "Trading flat", def: "Trading with NO accrued interest added — for zero-coupon bonds, bonds in default, and income/adjustment bonds." },
      ],
    },
    {
      type: "heading",
      text: "Worked example (30/360)" },
    {
      type: "list",
      ordered: true,
      items: [
        "A `$1,000` par corporate bond, `6%` coupon, pays semiannually (`$30` each).",
        "It's been `60` days (counted 30/360) since the last coupon.",
        "Annual interest is `0.06 × $1,000 = $60`.",
        "Accrued = `$60 × (60 ÷ 360) = $10` per bond.",
        "The buyer's **invoice (dirty) price** = quoted clean price + `$10` accrued.",
      ],
    },
    {
      type: "heading",
      text: "Clean vs. dirty price" },
    {
      type: "text",
      body:
        "Bonds are **quoted** at the **clean price** (no accrued). The amount you actually wire — the **invoice** or **dirty price** — is the clean price **plus** accrued interest. That's why two trades at the same quote can settle for different cash: the one later in the coupon period carries more accrued interest.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Some bonds **trade flat** — with no accrued interest. That's **zero-coupon bonds** (no coupon to accrue), **bonds in default** (the issuer isn't paying), and **income/adjustment bonds** (which only pay interest if earned). If a question says a bond is in default or is a zero, the accrued interest is `$0`.",
    },
  ],
};
