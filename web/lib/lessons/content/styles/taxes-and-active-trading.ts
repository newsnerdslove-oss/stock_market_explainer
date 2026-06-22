import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "taxes-and-active-trading",
  title: "The Tax Cost of Active Trading",
  level: 2,
  moduleId: "markets-styles",
  moduleOrder: 8,
  summary: "Why frequent trading hands the IRS a bigger cut: short-term gains lose the long-term discount, the wash-sale rule blocks quick loss-harvesting, and turnover raises the breakeven bar.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Active trading has a cost that never shows on your broker statement: **tax drag**. The U.S. tax code is built to reward *patience* — it gives a discount to gains on assets you've held a long time, and it claws that discount back from anyone who trades fast. So even before commissions and spreads, frequent trading starts the scoreboard tilted against you. This lesson is about *why*, and how big the gap can be.",
    },
    { type: "heading", text: "Short-term vs. long-term: the one-year line" },
    {
      type: "text",
      body:
        "The whole system pivots on a single number: **one year**. If you sell a position you've held **one year or less**, any profit is a **short-term capital gain**. Hold for **more than one year** and it's a **long-term capital gain**. That holding-period line is the most important date in a trader's tax life — and active traders, by definition, are almost always on the *short-term* side of it.",
    },
    {
      type: "text",
      body:
        "Here's why that line matters so much. **Short-term capital gains are taxed as ordinary income** — at the same graduated rates as your wages, which top out at **37%** federally. **Long-term capital gains** get a *preferential* schedule of **0%, 15%, or 20%** depending on your taxable income. So the long-term rate can be **less than half** the short-term rate. Trade fast and you *forfeit that discount* on every winning trade.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Holding period", def: "How long you owned an asset before selling. One year or less = short-term; more than one year = long-term. The clock starts the day after you buy." },
        { term: "Short-term capital gain", def: "Profit on an asset held one year or less. Taxed as ordinary income at your marginal wage rate (up to 37% federal)." },
        { term: "Long-term capital gain", def: "Profit on an asset held more than one year. Taxed at the preferential 0% / 15% / 20% rate based on taxable income." },
        { term: "Wash-sale rule", def: "Disallows a loss deduction if you buy a substantially identical security within 30 days before or after the sale (a 61-day window)." },
        { term: "Turnover", def: "How often you replace positions. High turnover means most gains realize short-term and tax bills come sooner rather than deferred." },
        { term: "Mark-to-market election (475(f))", def: "A rare election available only to those who qualify for trader tax status; it converts gains/losses to ordinary income and waives wash-sale rules." },
      ],
    },
    { type: "heading", text: "Worked example: the same $10,000, two rates" },
    {
      type: "text",
      body:
        "Suppose you have a **$10,000** gain and you're in a **35%** ordinary bracket. Sell after **11 months** and it's *short-term*: tax is `$10,000 × 35% = $3,500`, leaving **$6,500**. Wait until you've held **more than a year** and qualify for the **15%** long-term rate: tax is `$10,000 × 15% = $1,500`, leaving **$8,500**. Same trade, same profit — but trading early **handed the IRS an extra $2,000**. That gap is the long-term discount you forfeit by being active.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "On top of the rate, high earners may owe the **Net Investment Income Tax** — an extra **3.8%** on investment income once MAGI tops **$200,000** (single) or **$250,000** (married filing jointly). It applies to short- *and* long-term gains, so it doesn't change the short-vs-long comparison — but it raises the absolute tax bill for active traders in those brackets.",
    },
    { type: "heading", text: "The wash-sale rule blocks fast loss-harvesting" },
    {
      type: "text",
      body:
        "Active traders love the idea of *harvesting losses* — selling a loser to bank a deductible loss, then buying back in. The **wash-sale rule** is built to stop exactly that. If you sell at a loss and buy a **substantially identical** security within **30 days before or after** the sale (a **61-day window**), the IRS **disallows** that loss. It isn't gone forever — the disallowed amount is **added to the cost basis** of the replacement shares — but you can't *deduct it now*. For a trader who churns the same names, this neutralizes much of the tax benefit of taking losses.",
    },
    { type: "heading", text: "Turnover plus costs raises the breakeven bar" },
    {
      type: "text",
      body:
        "Taxes don't act alone. Every round-trip also pays a **spread**, possibly a **commission**, and a little **slippage**. Stack frequent short-term taxation on top of those frictions and your **breakeven** — the gross return you need just to come out even — climbs. A buy-and-hold investor pays costs once and defers tax for years; a high-turnover trader pays costs constantly and settles up with the IRS every April at the *higher* short-term rate. Same market, very different net result.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "There is one carve-out: **trader tax status** with a **mark-to-market (475(f)) election**. It treats gains/losses as ordinary income and waives the wash-sale rule — but the IRS bar is high (trading must be **substantial, frequent, and regular**, pursued like a business), the election generally must be filed by the prior year's return due date, and **very few people qualify**. Treat it as the rare exception, not the plan.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'I'll just trade more to make up the tax difference.'* More trades mean more *short-term* gains, more wash-sale headaches, and more cost drag — they push net returns **down**, not up. This is educational content, not tax or financial advice; tax rules and brackets change, and rules differ for accounts like IRAs — confirm specifics with a qualified tax professional.",
    },
  ],
};
