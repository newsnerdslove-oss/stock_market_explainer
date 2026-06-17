import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "municipal-debt-exam-math",
  title: "Series 7 Municipal & Debt Math, Worked End-to-End",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 6,
  summary:
    "A capstone of exam-style calculations — TEY both directions, accrued interest with the right day-count, T-bill discount, and parity — solved step by step.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "This capstone pulls the module's formulas together and walks four exam-style problems end to end. The recurring trap is the **day-count**: corporates and munis use `30/360`, but Treasuries use `actual/actual`. Get the convention right and the rest is arithmetic.",
    },
    {
      type: "heading",
      text: "The consolidated formulas",
    },
    {
      type: "list",
      items: [
        "`TEY = tax-free yield ÷ (1 − bracket)`; `after-tax yield = taxable yield × (1 − bracket)`.",
        "`accrued interest = par × coupon × (days ÷ basis)` — corporate/muni `30/360`, Treasuries `actual/actual`.",
        "Accrued runs from the **last coupon date up to but NOT including settlement**; the **buyer pays** the seller. Settlement is **T+1**.",
        "`T-bill discount yield = (face − price) ÷ face × (360 ÷ days)`.",
        "`conversion ratio = $1,000 ÷ conversion price`; `bond parity = stock price × conversion ratio`.",
      ],
    },
    {
      type: "heading",
      text: "Worked example A — accrued interest, 30/360 (muni/corp)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`$1,000` par, `6%` semiannual, last coupon **July 1**, settlement **Oct 16**.",
        "Days (`30/360`): Jul + Aug + Sep `= 90`, plus Oct 1→16 `= 15` (the 16th is **not** counted) → `105` days.",
        "`accrued = $1,000 × 6% × (105 ÷ 360) = $60 × 0.29167 = $17.50`.",
        "The **buyer pays the seller** `$17.50` on top of the price.",
      ],
    },
    {
      type: "heading",
      text: "Worked example B — accrued interest, actual/actual (Treasury)",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Same dates and par, but a Treasury at `3%` per semiannual period.",
        "Actual days Jul 1 → Oct 16 (not incl settlement) `= 30 + 31 + 30 + 15 = 106`.",
        "Treasury denominator = actual days in the semiannual period (Jul 1 → Jan 1 `≈ 184`).",
        "`accrued ≈ $1,000 × 3% × (106 ÷ 184) = $30 × 0.5761 = $17.28`.",
        "Same dates, **different day-count** → a different accrued figure than example A.",
      ],
    },
    {
      type: "heading",
      text: "Worked example C — TEY decision",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`32%` bracket; muni `3.75%` vs corporate `5.25%`.",
        "`muni TEY = 3.75% ÷ (1 − 0.32) = 3.75% ÷ 0.68 = 5.51%`.",
        "`5.51% > 5.25%` → the **muni wins**.",
        "Cross-check: `5.25% × 0.68 = 3.57%` after-tax `< 3.75%` muni → same conclusion.",
      ],
    },
    {
      type: "heading",
      text: "Worked example D — T-bill discount yield",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`$10,000` face bought at `$9,800`, `100` days to maturity.",
        "Discount `= $200`.",
        "`yield = ($200 ÷ $10,000) × (360 ÷ 100) = 0.02 × 3.6 = 7.2%`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Accrued interest", def: "`par × coupon × (days ÷ basis)`; buyer pays seller through settlement." },
        { term: "30/360 day-count", def: "Corporate and municipal convention: each month 30 days, year 360." },
        { term: "Actual/actual", def: "Treasury convention: real days over real days in the coupon period." },
        { term: "Settlement (T+1)", def: "Trade settles the next business day; accrued runs up to but not including it." },
        { term: "TEY", def: "`tax-free yield ÷ (1 − bracket)` — makes a muni comparable to a taxable bond." },
        { term: "Bank-discount yield", def: "`(face − price) ÷ face × (360 ÷ days)` for a T-bill." },
        { term: "Conversion ratio", def: "`$1,000 ÷ conversion price` — shares per convertible bond." },
        { term: "Parity", def: "`bond parity = stock × ratio` — where bond and stock are equal in value." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume **all bonds accrue interest the same way**. The day-count depends on the instrument: **corporates/munis use `30/360`**, **Treasuries use `actual/actual`**. Mixing them is a classic trap — the **same dates can give a different accrued-interest answer**. This is educational content, not financial advice.",
    },
  ],
};
