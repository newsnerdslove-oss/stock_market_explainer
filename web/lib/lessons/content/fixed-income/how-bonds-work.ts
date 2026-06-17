import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "how-bonds-work",
  title: "How Bonds Work",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 1,
  summary: "A bond is a loan with a few fixed numbers — par, coupon, and maturity — that set every cash flow.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When a company or government needs to borrow, it can issue a **bond**. If you buy that bond, you're the *lender*: you hand over cash today, and the issuer promises to pay you interest along the way and return your money on a set date. A bond is simply a **loan with standardized terms**.",
    },
    {
      type: "heading",
      text: "The three numbers that define a bond",
    },
    {
      type: "text",
      body:
        "Almost everything about a plain bond comes from three terms set at issuance. The **par value** (or face value) is the amount the issuer repays at the end — conventionally `$1,000` per bond. The **coupon rate** is the fixed annual interest rate paid on that par. The **maturity** is the date the principal is repaid.",
    },
    {
      type: "text",
      body:
        "Multiply the coupon rate by par and you get the **annual coupon** in dollars. A `6%` coupon on a `$1,000` bond pays `0.06 × 1,000 = $60` per year. Crucially, the coupon rate is *fixed* at issuance — it does **not** change when market interest rates move later.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Par / face value", def: "The amount repaid at maturity, conventionally `$1,000` per bond." },
        { term: "Coupon rate", def: "The fixed annual interest rate, set at issuance. `coupon rate × par` = annual coupon in dollars." },
        { term: "Coupon payment", def: "An actual interest payment. Most US bonds pay semiannually, so each payment is `annual coupon ÷ 2`." },
        { term: "Maturity", def: "The date the issuer repays the principal (par)." },
        { term: "Issuer", def: "The borrower — the company or government that sells the bond and owes the payments." },
        { term: "Principal", def: "The borrowed amount that is returned at maturity — the par value." },
      ],
    },
    {
      type: "heading",
      text: "Most coupons are paid twice a year",
    },
    {
      type: "text",
      body:
        "Here's the part people miss: most US bonds, including Treasuries, pay coupons **semiannually** — every six months. So the per-period payment is the *annual* coupon split in half, and the number of payments is `years × 2`.",
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Start with a `$1,000` par bond, `6%` coupon, `5` years, paying semiannually.",
        "Annual coupon: `0.06 × 1,000 = $60`.",
        "Each semiannual coupon: `$60 ÷ 2 = $30`.",
        "Number of payments: `5 years × 2 = 10`.",
        "Total cash if held to maturity: `(10 × $30) + $1,000 = $300 + $1,000 = $1,300`.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Some bonds skip coupons entirely. A **zero-coupon bond** pays no interest along the way — it's sold *below* par, and your whole return is the gap between the discounted purchase price and the `$1,000` paid at maturity.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume you always pay `$1,000` to buy a bond. Par is what's *repaid* at maturity — a repayment convention, not the price. The market **price** can sit above or below par and moves daily as rates change.",
    },
  ],
};
