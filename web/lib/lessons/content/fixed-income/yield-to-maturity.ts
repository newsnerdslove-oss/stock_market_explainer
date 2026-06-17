import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "yield-to-maturity",
  title: "Yield to Maturity",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 3,
  summary: "YTM is the total return if you hold to maturity — coupons plus the price's pull to par.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Current yield tells you the income per dollar of price — but it leaves money on the table. A discount bond you bought for `$950` repays `$1,000` at maturity; that `$50` gain is part of your return too. **Yield to maturity (YTM)** rolls everything together into one number.",
    },
    {
      type: "heading",
      text: "What YTM actually measures",
    },
    {
      type: "text",
      body:
        "YTM is the *anticipated total annualized return* if you **hold the bond to maturity**. It captures **both** the coupon income **and** the capital gain or loss as the price is pulled toward par. Formally, YTM is the discount rate that makes the present value of all the bond's future cash flows equal to its current price.",
    },
    {
      type: "heading",
      text: "Pull to par",
    },
    {
      type: "text",
      body:
        "No matter where a bond trades today, at maturity it pays exactly par. So a **discount** bond drifts *up* toward `$1,000` over time, and a **premium** bond drifts *down*. This **pull to par** is the capital gain or loss YTM accounts for that current yield ignores.",
    },
    {
      type: "list",
      items: [
        "**Discount bond:** `coupon rate < current yield < YTM`.",
        "**Par bond:** `coupon rate = current yield = YTM` (all equal).",
        "**Premium bond:** `coupon rate > current yield > YTM`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Yield to maturity (YTM)", def: "Total annualized return if held to maturity; the rate that sets present value of cash flows = price." },
        { term: "Pull to par", def: "The drift of a bond's price toward par as maturity approaches — a gain for discounts, a loss for premiums." },
        { term: "Reinvestment risk", def: "YTM assumes coupons are reinvested at the YTM rate; if rates fall, you may reinvest for less." },
        { term: "Yield to call (YTC)", def: "The yield assuming a callable bond is redeemed early at its call date." },
        { term: "Capital gain/loss", def: "The price change between purchase and the par repayment at maturity." },
      ],
    },
    {
      type: "heading",
      text: "Worked example (approximation)",
    },
    {
      type: "text",
      body:
        "Exact YTM requires iteration, but a clean approximation is `YTM ≈ [C + (F − P) / n] ÷ [(F + P) / 2]`, where `C` is the annual coupon, `F` is par, `P` is price, and `n` is years to maturity.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Take a `$1,000` par bond, `5%` annual coupon (`C = $50`), `3` years left, price `$950`.",
        "Current yield first: `$50 ÷ $950 = 5.26%` (income only).",
        "Capital gain spread per year: `(F − P) / n = (1,000 − 950) / 3 = $16.67`.",
        "Numerator: `C + 16.67 = 50 + 16.67 = $66.67`.",
        "Denominator: `(F + P) / 2 = (1,000 + 950) / 2 = $975`.",
        "Approx YTM `= 66.67 ÷ 975 ≈ 6.84%` (the exact value, solved by iteration, is ≈ `6.90%`).",
        "Ordering holds for this discount bond: `5% < 5.26% < ~6.84%`.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "YTM rests on assumptions. It assumes every coupon is **reinvested at the YTM rate** — that's *reinvestment risk*. It also assumes you hold to maturity with no default and no early call. For callable bonds, investors also check **yield to call (YTC)**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't treat current yield and YTM as the same. Current yield is **income only**; YTM adds the gain or loss from the price pulling to par. They're equal **only for a par bond**.",
    },
  ],
};
