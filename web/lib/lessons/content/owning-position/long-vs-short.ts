import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "long-vs-short",
  title: "Long vs. Short",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 4,
  summary: "Betting up versus betting down — and the dangerous reason the two aren't mirror images.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "There are two ways to bet on a stock. You can bet it goes **up** or you can bet it goes **down**. They sound symmetric — but the risk on each side is wildly different, and that asymmetry is the single most important thing to understand here.",
    },
    {
      type: "text",
      body:
        "Going **long** is what most beginners do: you **buy** shares hoping the price rises, then sell higher for a profit. Going **short** is the reverse: you **borrow** shares, **sell** them now, and plan to **buy them back later** at a lower price to return them — pocketing the difference if the price falls.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Long position", def: "You own shares, profiting when the price rises. The default way to invest." },
        { term: "Short position", def: "You borrow and sell shares, profiting when the price falls." },
        { term: "Cover (buy to cover)", def: "Buying shares back to close a short and return what you borrowed." },
        { term: "Risk asymmetry", def: "Long losses are capped (price stops at $0); short losses have no ceiling." },
        { term: "Margin account", def: "A borrowing account required to short — it carries borrow fees and forced-close risk." },
      ],
    },
    { type: "heading", text: "Why the risk isn't symmetric" },
    {
      type: "list",
      items: [
        "**Long:** max loss = your investment. A price can only fall to **$0**, so your downside is *capped*. Your upside, though, is theoretically unlimited.",
        "**Short:** the reverse. Your gain is capped (the price can only fall to $0), but a price has **no ceiling** — so as it rises, your loss keeps growing with no limit.",
        "Shorting needs a **margin account**, charges **borrow fees**, and you can be **forced to close** (a buy-in or margin call) at the worst possible time.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "**Long 10 shares @ $100** (`$1,000` in). If it climbs to $130 you sell for `$1,300` → **+$300**. Worst case it goes to $0 → you lose the whole **−$1,000**, and not a cent more.",
    },
    {
      type: "text",
      body:
        "**Short 10 shares @ $100** (you collect `$1,000` up front). If it falls to $70 you buy back for `$700` → **+$300**. But if it *rises* to $160 you must buy back at `$1,600` → **−$600** — and if it keeps climbing, that loss just keeps growing.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: \"shorting is just buying in reverse with the same risk.\" It is **not** symmetric. A long loss is capped at your investment; a short loss is **theoretically unlimited**, because there's no cap on how high a price can go. This lesson is concept and risk awareness — not a how-to.",
    },
  ],
};
