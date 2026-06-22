import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "tips-and-stripped-treasuries",
  title: "TIPS & STRIPS: Inflation-Protected and Stripped Treasuries",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 11,
  summary:
    "Two specialized Treasuries: TIPS adjust principal with inflation, while STRIPS strip a bond down to a single zero-coupon payment — and both can tax you on money you haven't received yet.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "A plain Treasury note pays a fixed coupon and returns par at maturity. But two Treasury variants reshape that deal. **TIPS** defend your purchasing power against inflation by moving the *principal*. **STRIPS** do the opposite of paying coupons — they strip them away, leaving a single payment at maturity. Both are heavily tested, and both share one nasty quirk: **phantom income**.",
    },
    {
      type: "heading",
      text: "TIPS: principal that tracks inflation",
    },
    {
      type: "text",
      body:
        "**Treasury Inflation-Protected Securities (TIPS)** carry a **fixed coupon rate**, but the **principal is adjusted for inflation** using the **Consumer Price Index (CPI)**. When prices rise, the principal grows; when prices fall, it shrinks. The Treasury issues TIPS in **5-, 10-, and 30-year** terms, and they pay interest **every six months** like other notes and bonds.",
    },
    {
      type: "heading",
      text: "The fixed rate is paid on an adjusted principal",
    },
    {
      type: "text",
      body:
        "Here's the mechanism the exam wants: the coupon **rate** never changes, but it's applied to the **inflation-adjusted principal** — so the **dollar coupon payment rises and falls** with that principal. If a `$1,000` TIPS with a `2%` coupon sees its principal indexed up to `$1,030`, the semiannual payment is `1% × $1,030 = $10.30` instead of `1% × $1,000 = $10`. Inflation lifts both the principal you'll be repaid **and** every coupon along the way.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "TIPS", def: "Treasury Inflation-Protected Securities — a fixed coupon rate paid on a principal that adjusts with the CPI." },
        { term: "CPI", def: "Consumer Price Index — the inflation gauge the Treasury uses to adjust TIPS principal." },
        { term: "Adjusted principal", def: "The TIPS face value after CPI indexing; the coupon rate is applied to this, so the dollar payment moves with inflation." },
        { term: "Deflation floor", def: "At maturity, a TIPS pays the greater of the adjusted principal or the original par — you never get back less than face value." },
        { term: "STRIPS", def: "Separate Trading of Registered Interest and Principal of Securities — a Treasury stripped into zero-coupon pieces." },
        { term: "Zero-coupon security", def: "A bond with no periodic interest, bought at a discount and redeemed at full face value at maturity." },
        { term: "Phantom income", def: "Accrued income (TIPS inflation adjustments and STRIPS discount) taxed annually even though no cash is received until maturity." },
        { term: "Purchasing-power risk", def: "The danger that inflation erodes the real value of fixed payments — the risk TIPS are designed to hedge." },
      ],
    },
    {
      type: "heading",
      text: "The deflation floor",
    },
    {
      type: "text",
      body:
        "What if deflation drags the principal *below* par? TIPS have a built-in safety net. **At maturity, you receive the greater of the inflation-adjusted principal or the original par value** — so even after sustained deflation, you get back at least your original face amount. (Coupon payments along the way can still fall with a deflated principal, but the final principal repayment is floored at par.)",
    },
    {
      type: "heading",
      text: "STRIPS: a Treasury cut into zeros",
    },
    {
      type: "text",
      body:
        "**STRIPS** stands for **Separate Trading of Registered Interest and Principal of Securities**. A dealer takes an eligible note, bond, or even a TIPS and **separates each coupon payment and the final principal into its own security**. A 10-year note has 20 semiannual coupons plus one principal payment — stripping it yields **21 separate zero-coupon securities**, each a single future payment. Note that **the Treasury doesn't auction STRIPS directly**; financial institutions create them through the Federal Reserve, and they trade through brokers and dealers.",
    },
    {
      type: "heading",
      text: "Bought at a discount, redeemed at par",
    },
    {
      type: "text",
      body:
        "Because a STRIP makes **no periodic interest payments**, you buy it at a **discount** to face value and receive the **full face value at maturity**. The gap between purchase price and face *is* your return — the accreted discount stands in for the coupons you gave up. The deeper the discount and the longer the wait, the higher the implied yield.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Phantom income — the shared trap.** Per the Treasury and IRS, the **annual inflation adjustment on a TIPS** and the **accreted discount on a STRIP** must be reported as taxable income **in the year earned**, even though you receive **no cash** until maturity. You owe federal tax on money you haven't touched yet. For this reason, both are often best held in **tax-deferred accounts** like an IRA. (Like all Treasuries, their interest is still **exempt from state and local tax**.)",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "**Why TIPS hedge inflation.** A normal bond's fixed coupon and par loses real value when prices climb — that's **purchasing-power risk**. TIPS neutralize it by growing the principal (and thus the coupon) with the CPI, so your *real* return is preserved. The trade-off: TIPS carry **lower stated coupon rates** than comparable nominal Treasuries, since you're paying for the inflation insurance.",
    },
  ],
};
