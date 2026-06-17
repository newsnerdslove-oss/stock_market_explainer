import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "muni-yields-and-basis-pricing",
  title: "Yields & Basis Pricing for Municipal Bonds",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 3,
  summary:
    "The full yield hierarchy — nominal, current, YTM, YTC, yield-to-worst — and how premium and discount munis are quoted on a basis (yield) and priced to the worst case.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A muni doesn't have one yield — it has a **hierarchy** of them, and which one you quote depends on whether the bond trades at a premium or discount and whether it's callable. Series 7 wants you to **rank the yields** and know the **worst-case pricing rule**.",
    },
    {
      type: "heading",
      text: "The four yields",
    },
    {
      type: "list",
      items: [
        "**Nominal yield** `= coupon rate` — fixed at issue.",
        "**Current yield** `= annual coupon ÷ current price`.",
        "**Yield to maturity (YTM)** — total return if held to maturity.",
        "**Yield to call (YTC)** — return if the bond is called at the call date/price.",
      ],
    },
    {
      type: "heading",
      text: "Ranking the yields",
    },
    {
      type: "list",
      items: [
        "**DISCOUNT bond** (price `<` par): `nominal < current < YTM < YTC`.",
        "**PREMIUM bond** (price `>` par): `YTC < YTM < current < nominal`.",
        "The ranking **reverses around par** — and for a premium, the **call gives the lowest yield**.",
      ],
    },
    {
      type: "text",
      body:
        "**Yield-to-worst (YTW)** is the **lowest** of the YTM and all possible YTCs — the least the customer could earn.",
    },
    {
      type: "heading",
      text: "Basis pricing and the MSRB worst-case rule",
    },
    {
      type: "text",
      body:
        "Munis are commonly quoted **on a basis** (by yield). \"Quoted at a `4.00` basis\" means priced to yield `4.00%`. The **MSRB worst-case pricing rule** requires a **callable premium muni** to be priced to the **lowest** yield the customer could receive — for a premium that's the **yield-to-call**. For a discount callable, **YTM** is usually the worst case. The **yield-to-worst must be disclosed on the trade confirmation**.",
    },
    {
      type: "heading",
      text: "Worked example — premium callable",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`5%` coupon `= $50/yr` on `$1,000` par, callable, trading at `$1,050` (a premium).",
        "Current yield `= $50 ÷ $1,050 = 4.76%`.",
        "Premium ranking: `YTC < YTM < current (4.76%) < nominal (5.00%)`.",
        "MSRB requires pricing to **YTC** — the worst case — and disclosing it on the confirmation.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Nominal yield", def: "The coupon rate, fixed at issue." },
        { term: "Current yield", def: "`annual coupon ÷ current price`." },
        { term: "Yield to maturity", def: "Total annualized return if held to maturity." },
        { term: "Yield to call", def: "Return if the bond is redeemed at the call date and price." },
        { term: "Yield-to-worst", def: "The lowest of YTM and all possible YTCs." },
        { term: "Basis price", def: "A muni quote stated as a yield; \"4.00 basis\" = priced to yield 4.00%." },
        { term: "MSRB worst-case rule", def: "Callable premium munis priced to YTC; YTW disclosed on the confirmation." },
        { term: "Premium bond", def: "Price above par; here YTC is the lowest yield, nominal the highest." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume **a bond is always priced to its YTM**. For a **premium callable** bond the worst case is **yield-to-call**, and the MSRB requires pricing and confirmation disclosure on a **yield-to-worst** basis — the customer must be shown the lowest yield they could earn. This is educational content, not financial advice.",
    },
  ],
};
