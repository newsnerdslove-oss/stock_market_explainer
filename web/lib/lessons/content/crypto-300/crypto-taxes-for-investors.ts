import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-taxes-for-investors",
  title: "Crypto Taxes for Investors",
  level: 3,
  moduleId: "crypto-300",
  moduleOrder: 8,
  summary:
    "How US investors are actually taxed on crypto: the IRS treats it as property, so every sale, every swap, and spending it triggers a capital gain or loss — while staking, mining, and airdrops are ordinary income.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "The single most important fact about crypto taxes in the US: the IRS treats digital assets as **property**, not currency. The official guidance is blunt — *\"for U.S. tax purposes, digital assets are considered property, not currency.\"* That one classification drives almost everything that follows. Because crypto is property, the rules that apply to selling a stock or a house apply to your coins, and a lot of activity that *feels* like \"just moving money around\" is actually a **taxable event**.",
    },
    {
      type: "text",
      body:
        "This lesson is educational, not tax advice — rules change and your situation is your own. But the framework is stable and worth knowing cold, because the most expensive crypto mistakes aren't bad trades; they're untracked taxable events that surface years later with penalties attached.",
    },
    { type: "heading", text: "Disposals: sales, swaps, and spending" },
    {
      type: "text",
      body:
        "A **disposal** is when you dispose of crypto through *sale, exchange, or transfer of ownership* — and a disposal triggers a **capital gain or loss**. Three things people underestimate all count as disposals:",
    },
    {
      type: "list",
      items: [
        "**Selling** crypto for dollars — the obvious one.",
        "**Crypto-to-crypto swaps** — trading BTC for ETH is a disposal of your BTC. You're taxed as if you sold the BTC for its dollar value and immediately rebought, even though no dollars ever hit your bank.",
        "**Spending** crypto on goods or services — buying a coffee with bitcoin is a disposal of that bitcoin at its fair market value, with gain or loss measured against what you paid for it.",
      ],
    },
    {
      type: "text",
      body:
        "The gain or loss is the difference between the **fair market value** at disposal (in US dollars) and your **cost basis** — what you originally paid, including fees. Note what is *not* a disposal: simply **holding** crypto, or transferring it **between your own wallets**, isn't a taxable event by itself (though paying an on-chain fee in crypto to make that transfer can itself be a small disposal of the coin spent on the fee).",
    },
    { type: "heading", text: "Holding period: short-term vs. long-term" },
    {
      type: "text",
      body:
        "Once you have a capital gain, its **character** depends on how long you held the asset before disposing of it. The IRS line is exactly one year:",
    },
    {
      type: "list",
      items: [
        "**Short-term** — held **one year or less**. Taxed at your ordinary income tax rate (the same brackets as wages).",
        "**Long-term** — held **more than one year**. Taxed at the preferential long-term capital gains rates, which are generally lower.",
      ],
    },
    {
      type: "text",
      body:
        "That one-year boundary is why holding period matters so much: the *same* `$5,000` gain can be taxed very differently depending on whether you disposed at day `365` or day `366`. This is also why crypto-to-crypto swaps are sneaky — every swap **resets the clock** on the coin you receive, starting a fresh holding period.",
    },
    { type: "heading", text: "Ordinary income: staking, mining, airdrops, and payment" },
    {
      type: "text",
      body:
        "Not all crypto income is a capital gain. When you **receive** new crypto as a reward or as payment, that's **ordinary income** at the asset's fair market value on the day you receive it. The main buckets:",
    },
    {
      type: "list",
      items: [
        "**Staking rewards** — per IRS **Revenue Ruling 2023-14**, rewards are gross income at fair market value in the year you gain *\"dominion and control\"* (roughly, when they become yours to transfer).",
        "**Mining** rewards — ordinary income at fair market value when received (and possibly self-employment income if you mine as a business).",
        "**Airdrops** — tokens dropped into your wallet are ordinary income at their fair market value when you gain control of them.",
        "**Crypto as payment** — getting paid in crypto for goods, services, or wages is ordinary income at its dollar value when received.",
      ],
    },
    {
      type: "text",
      body:
        "Crucially, income crypto gets taxed **twice in different ways**: once as **ordinary income** when you receive it, and that fair-market value then becomes your **cost basis**. When you later sell or swap it, you owe **capital gains tax** on any change since. Earn `1 ETH` worth `$3,000` from staking, hold it, sell later at `$4,000` → `$3,000` ordinary income at receipt, plus a `$1,000` capital gain at sale.",
    },
    { type: "heading", text: "Cost-basis tracking — the part everyone skips" },
    {
      type: "text",
      body:
        "Every disposal needs a **cost basis**, and the IRS requires you to compute gains and losses *as measured in US dollars* with records to back them up. This is genuinely hard in crypto: coins move across exchanges and self-custody wallets, every swap is a disposal, and a single year can hold thousands of taxable events. If you can't prove your basis, the IRS can treat it as **zero** — meaning the *entire* proceeds are taxed as gain. Good record-keeping (or tax software / a `1099` from a broker) isn't optional; it's what keeps a routine tax bill from becoming a worst-case one.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Property (vs. currency)", def: "The IRS's classification of digital assets — it makes capital-gain rules apply to every disposal." },
        { term: "Disposal", def: "Selling, swapping, or spending crypto — each one triggers a capital gain or loss." },
        { term: "Cost basis", def: "What you originally paid (incl. fees), in USD — subtracted from proceeds to find your gain or loss." },
        { term: "Fair market value (FMV)", def: "The US-dollar value of crypto at the moment of a transaction, used for both income and gain/loss." },
        { term: "Short-term gain", def: "Gain on crypto held one year or less; taxed at ordinary income rates." },
        { term: "Long-term gain", def: "Gain on crypto held more than one year; taxed at lower preferential rates." },
        { term: "Ordinary income", def: "Staking, mining, airdrops, and crypto-as-payment, taxed at FMV when received." },
        { term: "Wash-sale rule (§1091)", def: "Disallows a loss if you rebuy the same security within 30 days — currently applies to securities, not crypto property." },
      ],
    },
    { type: "heading", text: "The wash-sale quirk (for now)" },
    {
      type: "text",
      body:
        "Here's a quirk worth knowing — and watching. The **wash-sale rule** (Internal Revenue Code **§1091**) disallows a capital loss if you sell a security at a loss and buy it back within `30` days. But §1091 applies to **stock or securities** — and the IRS treats crypto as **property**, not a security. So as the law currently stands, the wash-sale rule **does not apply to crypto**: you can sell bitcoin at a loss, harvest that loss, and rebuy bitcoin immediately.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**This is a 'for now' fact, not a permanent one.** Closing the crypto wash-sale gap has appeared in multiple draft tax bills since 2021; none have become law yet, but it's a frequently-cited rule that **could change**. Treat it as a current quirk, not a guarantee — and never rely on stale tax facts.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Common misconception:** *\"I never cashed out to dollars, so I don't owe anything.\"* A **crypto-to-crypto swap** is a disposal — you owe capital gains on the coin you traded away, even if no dollars touched your bank. Spending crypto on a purchase is a disposal too. \"I didn't withdraw to fiat\" is not a defense.",
    },
  ],
};
