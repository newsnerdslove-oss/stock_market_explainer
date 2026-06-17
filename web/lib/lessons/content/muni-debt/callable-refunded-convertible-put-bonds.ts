import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "callable-refunded-convertible-put-bonds",
  title: "Callable, Refunded, Convertible & Put Bonds",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 4,
  summary:
    "Embedded options that change who controls the cash flows — call features and protection, pre-refunded vs escrowed-to-maturity bonds, convertible parity, and put bonds.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Plain bonds pay a coupon and return par. **Embedded options** change *who controls the cash flows*. A **call** hands control to the issuer; a **put** hands it to the investor; a **conversion** feature links the bond to the issuer's stock; and **refunding** can transform a bond's credit overnight.",
    },
    {
      type: "heading",
      text: "Callable bonds",
    },
    {
      type: "list",
      items: [
        "Let the **ISSUER** redeem early — usually when rates fall and it can refinance cheaper.",
        "**Call protection** = a period after issuance during which the bond **can't** be called.",
        "A **call premium** (price above par) may be paid to compensate the investor.",
        "Calls **favor the issuer** and **hurt the investor** (reinvestment risk).",
      ],
    },
    {
      type: "heading",
      text: "Refunding, pre-refunded, and escrowed-to-maturity",
    },
    {
      type: "list",
      items: [
        "**Refunding** = issuing new (lower-rate) bonds to retire an outstanding (higher-rate) issue.",
        "**Advance refunding** funds an **escrow** before the call date.",
        "**Pre-refunded (\"pre-re\")** bonds: refunding proceeds are escrowed in **U.S. government securities** until the call date — the escrow makes them effectively **AAA / very high quality**, and they now trade to the **call date** (shorter effective maturity).",
        "**Escrowed-to-maturity (ETM)** bonds: the escrow is sized to pay principal + interest all the way to the **original maturity** (not called early).",
      ],
    },
    {
      type: "heading",
      text: "Convertible bonds and parity",
    },
    {
      type: "text",
      body:
        "A **convertible** bond is exchangeable for the issuer's common stock at a set conversion ratio. The key formulas: `conversion ratio = $1,000 ÷ conversion price`; `bond parity = stock price × conversion ratio`; `stock parity = bond price ÷ conversion ratio`. **Parity** is the price at which the bond and the stock it converts into are worth the same.",
    },
    {
      type: "heading",
      text: "Worked example — convertible parity",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Conversion price `$40`, stock trading at `$50`.",
        "`conversion ratio = $1,000 ÷ $40 = 25 shares`.",
        "`bond parity = $50 × 25 = $1,250` → the bond should trade `≥ $1,250` to reflect conversion value.",
        "If the bond instead trades at `$1,100`: `stock parity = $1,100 ÷ 25 = $44`; the stock (`$50`) is **above** parity → the bond is **undervalued** vs the stock.",
      ],
    },
    {
      type: "heading",
      text: "Put bonds",
    },
    {
      type: "text",
      body:
        "A **put bond** lets the **INVESTOR** sell the bond back to the issuer at par on set dates — it **favors the investor** and protects against rising rates. It's the **mirror image of a call**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Callable bond", def: "Issuer can redeem early; favors the issuer, hurts the investor." },
        { term: "Call protection", def: "Period after issuance during which a bond can't be called." },
        { term: "Refunding", def: "Issuing new lower-rate bonds to retire an older higher-rate issue." },
        { term: "Pre-refunded bond", def: "Proceeds escrowed in U.S. governments to the call date; effectively AAA." },
        { term: "Escrowed-to-maturity", def: "Escrow sized to pay principal and interest to the original maturity." },
        { term: "Conversion ratio", def: "`$1,000 ÷ conversion price` — shares each bond converts into." },
        { term: "Parity", def: "`bond parity = stock × ratio`; the price where bond and stock are equal in value." },
        { term: "Put bond", def: "Investor can sell back at par on set dates; favors the investor." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't lump a **call feature** together with **refunding** as both bad for the bondholder. A **pre-refunded** bond is escrowed in U.S. governments and is one of the **safest** muni positions (effectively AAA), now trading to its call date. Separate the issuer's **call option** (bad for the investor) from the **credit upgrade** escrowing produces. This is educational content, not financial advice.",
    },
  ],
};
