import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "non-marginable-securities-and-special-margin",
  title: "What's Marginable (and What Isn't)",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 7,
  summary:
    "Not every security can be bought on margin. Learn which ones are marginable, which must be paid for in full, and why Treasuries and munis carry far lower maintenance than the 25% on stocks.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You know margin lets you borrow against your securities — but borrow against *what*, exactly? The broker won't lend against everything. Some securities you can margin freely; others you must pay for `100%` in cash. Knowing the difference keeps you from being surprised when a position lands in your account with **zero** loan value.",
    },
    {
      type: "heading",
      text: "What counts as marginable",
    },
    {
      type: "text",
      body:
        "A **marginable security** is one the broker is willing to lend against. The big, liquid categories qualify: most **exchange-listed stocks** and many **Nasdaq** stocks, plus **corporate bonds**, **U.S. Treasury** securities, and **municipal bonds**. These have deep markets and observable prices, so a lender can value the collateral with confidence and sell it quickly if needed.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Being *marginable* doesn't mean `50%` always applies. Reg T's `50%` initial requirement governs **margin equity securities** (stocks). Bonds and other exempt or non-equity securities are extended credit on a **good-faith** basis, and they carry much lower maintenance — more on that below.",
    },
    {
      type: "heading",
      text: "What isn't marginable",
    },
    {
      type: "text",
      body:
        "Several categories must be paid for in full — they have **no loan value** when you buy them:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Long options** (the puts and calls you buy). Under Reg T these are paid in full; options only enter margin math as *cover* for a position (e.g., a protective put against stock, or an option that collateralizes a short).",
        "**New issues** (IPOs and other freshly offered securities). The primary market sits outside Reg T, so a new issue is non-marginable for roughly the first **30 days** after pricing — it must be paid for in full until it has seasoned in the market.",
        "**Low-priced and thinly traded OTC stocks** — typically those under `$5` a share or with little trading volume. As **non-margin, non-exempt** securities they require `100%` of market value, so the broker won't lend a cent against them.",
        "**Mutual fund shares** cannot be *bought* on margin — Reg T requires you to pay for fund purchases in full. After you've held them about **30 days**, though, they can acquire loan value and serve as **collateral**.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Mental model: *buying* on margin and *being collateral* are two different questions. A mutual fund flunks the first (pay in full) but can pass the second after 30 days. A fresh IPO flunks both until it seasons.",
    },
    {
      type: "heading",
      text: "Exempt securities carry far lower maintenance",
    },
    {
      type: "text",
      body:
        "Equities sit at the **25%** maintenance floor under **FINRA Rule 4210**. But **exempt securities** — U.S. government and municipal obligations — are treated as much safer collateral, so their maintenance requirements are *dramatically* lower. The exact percentage scales with how much time is left until the bond matures: the shorter the remaining life, the less can go wrong, and the lower the requirement.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**U.S. Treasury obligations:** maintenance runs from about `1%` of market value (under 1 year to maturity) up to roughly `6%` for the longest maturities — a fraction of the `25%` on stocks.",
        "**Other exempt securities (incl. municipal bonds):** generally `7%` of current market value.",
        "**Corporate bonds (non-exempt, non-equity):** extended credit in good faith, with maintenance well below equities but above Treasuries.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Marginable security", def: "A security a broker will lend against — most listed/Nasdaq stocks, corporate/Treasury/muni bonds." },
        { term: "Non-marginable security", def: "A security with no loan value that must be paid for in full — long options, new issues (~30 days), low-priced/thinly-traded OTC stocks, and mutual funds at purchase." },
        { term: "Loan value", def: "The portion of a security's market value a broker will lend against. Non-marginable securities have a loan value of `0`." },
        { term: "Exempt security", def: "U.S. government and municipal obligations, which carry far lower maintenance than the `25%` on equities." },
        { term: "New issue", def: "A freshly offered security (e.g., an IPO); non-marginable for roughly `30` days after pricing while it seasons." },
        { term: "Cover", def: "How a long option enters margin math — collateralizing another position (e.g., a put covering a short call's stock) rather than being margined itself." },
        { term: "Good-faith credit", def: "Credit a broker extends on bonds and other non-equity/exempt securities, rather than the fixed `50%` Reg T applies to stocks." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Say you hold `$100,000` across three positions. A `$40,000` Treasury note maturing in under a year needs only about `1%` maintenance = `$400`. A `$30,000` muni-bond position needs `7%` = `$2,100`. A `$30,000` stock position needs `25%` = `$7,500`. The *same dollar amount* of stock demands roughly 18× the equity cushion of the Treasury — the regulator's verdict on relative risk.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"If it's in my margin account, I can borrow against it.\"* No. A just-bought IPO, a buck-fifty OTC stock, the call options you opened this morning, and a brand-new mutual fund purchase all carry **zero** loan value. Counting on buying power that doesn't exist is how margin calls catch people off guard. This is educational content, not financial advice.",
    },
  ],
};
