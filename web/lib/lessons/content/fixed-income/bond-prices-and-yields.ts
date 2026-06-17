import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bond-prices-and-yields",
  title: "Bond Prices & Yields",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 2,
  summary: "Prices and yields move on a seesaw — and the current yield reveals why a bond trades above or below par.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Once a bond is issued, its coupon is locked but its **price** is free to move every day. And the most important rule in fixed income is this: bond **prices and yields move in opposite directions**. The SEC calls it a *seesaw* — when one side goes up, the other goes down.",
    },
    {
      type: "heading",
      text: "Why the seesaw works",
    },
    {
      type: "text",
      body:
        "A bond's future cash flows are **fixed** — the coupons and the par repayment never change. So when market rates rise, a bond paying the old, lower coupon becomes less attractive, and the *only* thing that can adjust to compensate a new buyer is **today's price**. The price falls until the bond's return matches what's available elsewhere. Rates up → price down; rates down → price up.",
    },
    {
      type: "heading",
      text: "Premium, par, and discount",
    },
    {
      type: "list",
      items: [
        "**Premium** — price *above* par. The bond's coupon beats current market rates, so buyers pay extra.",
        "**At par** — price ≈ par. The coupon roughly matches market rates.",
        "**Discount** — price *below* par. The coupon trails market rates, so the price drops to compensate.",
      ],
    },
    {
      type: "text",
      body:
        "Bonds are quoted as a **percent of par**. A quote of `95` means `95% × $1,000 = $950` (a discount); `110` means `$1,100` (a premium).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Yield", def: "The return an investor earns relative to the bond's price." },
        { term: "Current yield", def: "`annual coupon ÷ current market price`. A simple income measure." },
        { term: "Premium bond", def: "Trades above par because its coupon beats market rates." },
        { term: "Discount bond", def: "Trades below par because its coupon trails market rates." },
        { term: "At par", def: "Price ≈ par; here the current yield equals the coupon rate." },
        { term: "Inverse relationship", def: "Prices and yields move in opposite directions — the seesaw." },
        { term: "Quoted price", def: "A bond's price stated as a percent of par. `98` = `$980`." },
      ],
    },
    {
      type: "heading",
      text: "Current yield: income per dollar of price",
    },
    {
      type: "text",
      body:
        "The **current yield** is the annual coupon divided by the price you actually pay. As the price falls, the same coupon becomes a bigger slice of a smaller price, so the current yield rises — the inverse relationship in action.",
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Take a `$1,000` par bond with a `$50` annual coupon (a `5%` coupon rate).",
        "At a **discount** price of `$950`: current yield `= $50 ÷ $950 = 5.26%` — above the 5% coupon.",
        "At a **premium** price of `$1,100`: current yield `= $50 ÷ $1,100 = 4.55%` — below the 5% coupon.",
        "Price up, yield down: the seesaw holds.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Exactly **at par**, current yield equals the coupon rate. That tidy equality breaks the instant price moves off par. And current yield is incomplete: it ignores the gain or loss as the price drifts back toward `$1,000` at maturity — **yield to maturity** captures that, coming up next.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume a bond's yield equals its coupon rate. That's only true **at par**. For a *discount* bond, yield is *above* the coupon; for a *premium* bond, yield is *below* it.",
    },
  ],
};
