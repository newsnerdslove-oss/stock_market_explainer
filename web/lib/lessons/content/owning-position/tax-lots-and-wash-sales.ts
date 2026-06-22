import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "tax-lots-and-wash-sales",
  title: "Tax Lots & the Wash-Sale Rule",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 8,
  summary:
    "When you bought at different prices, which shares you sell changes your tax bill — and selling a loser too close to a rebuy can erase the loss.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You bought the same stock three times at three different prices. Now you want to sell *some* of it. Here's the catch the app doesn't shout about: **which shares you sell** changes your taxable gain — and selling a loser at the wrong moment can wipe out the loss entirely.",
    },
    {
      type: "text",
      body:
        "Each separate purchase is a **tax lot** — a batch of shares with its own cost basis and its own purchase date. When you sell part of a position, the IRS needs to know *which lot* the shares came from, because that decides both your gain and how long you held them.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Tax lot", def: "One batch of shares from a single purchase, with its own cost basis and acquisition date." },
        { term: "FIFO", def: "*First-In, First-Out* — the default method. The **oldest** shares are treated as sold first." },
        { term: "Specific identification", def: "Telling your broker exactly which lot to sell, instead of accepting FIFO." },
        { term: "Holding period", def: "How long you held shares — **more than one year** is *long-term*; one year or less is *short-term*." },
        { term: "Wash sale", def: "Selling at a loss while buying a *substantially identical* security within 30 days before or after — the loss is disallowed." },
      ],
    },
    { type: "heading", text: "FIFO vs. specific identification" },
    {
      type: "text",
      body:
        "If you don't tell your broker otherwise, sales default to **FIFO** — *first-in, first-out*. Your **oldest** shares leave first. That's often your *lowest*-priced lot, which can mean a *bigger* taxable gain than you wanted.",
    },
    {
      type: "text",
      body:
        "The alternative is **specific identification**: you tell the broker exactly which lot to sell *before the sale settles*. Want to harvest a loss? Sell your *highest*-basis lot. Want a long-term rate? Pick a lot you've held **more than a year**. The IRS allows this only if you make an **adequate identification** to your broker — you can't decide after the fact at tax time.",
    },
    { type: "heading", text: "Short-term vs. long-term" },
    {
      type: "text",
      body:
        "The holding period decides the tax treatment. Per the IRS, you count **from the day after you acquired** the shares **up to and including the day you sold**. Hold **more than one year** and the gain is **long-term** (taxed at the lower 0% / 15% / 20% capital-gains rates). Hold **one year or less** and it's **short-term**, taxed as ordinary income. This is exactly why *which lot* you sell matters — older lots may already be long-term.",
    },
    { type: "heading", text: "The wash-sale rule" },
    {
      type: "text",
      body:
        "Here's the trap. A **wash sale** happens when you sell a security at a **loss** and, within **30 days before or after** that sale, you buy the **same or a substantially identical** security. That's a 61-day window centered on the sale. When it triggers, the IRS **disallows the loss** — you can't deduct it that year.",
    },
    {
      type: "text",
      body:
        "The loss isn't gone forever, though. The **disallowed loss is added to the cost basis of the replacement shares**, and the original lot's holding period **carries over** to them. You get the deduction later — when you finally sell the replacement shares for good.",
    },
    { type: "heading", text: "Worked example (straight from IRS Pub 550)" },
    {
      type: "list",
      ordered: true,
      items: [
        "You buy **100 shares of X for `$1,000`**.",
        "You sell those 100 shares for **`$750`** — a `$250` loss.",
        "**Within 30 days** of the sale, you buy **100 shares of X again for `$800`**.",
        "Because you rebought substantially identical stock, the **`$250` loss is disallowed** — you can't deduct it now.",
        "Instead, add it to the new cost: `$800 + $250 = $1,050` basis on the replacement shares.",
        "The loss is **postponed**, not lost — it shows up when you sell the new shares.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: selling a stock at a loss in December to \"lock in\" a tax deduction, then buying it right back. If the rebuy is within the **30-day window** (before *or* after), the wash-sale rule **disallows the loss** for that year. The window counts both directions — even buying *before* you sell can trigger it.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Your broker tracks lots and flags many wash sales on **Form 1099-B**, but it won't catch everything — for example, a wash sale across two of your *different* accounts, or a rebuy in your IRA. Default FIFO is automatic; specific identification takes a deliberate instruction *before settlement*. (Educational only — not tax advice; see IRS Pub 550.)",
    },
  ],
};
