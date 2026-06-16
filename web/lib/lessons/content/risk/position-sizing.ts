import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "position-sizing",
  title: "Position Sizing: How Many Shares to Buy",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 1,
  summary: "The real question isn't *which* stock — it's *how much*. Size every trade so a stop-out costs a fixed dollar amount.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Most beginners agonize over *which* stock to buy and barely think about *how much* to buy. That's backwards. **Position sizing** — deciding how many shares to hold — is the single biggest lever on whether a losing streak is a scratch or a catastrophe.",
    },
    {
      type: "text",
      body:
        "The professional approach is **fixed-fractional sizing**: decide in advance how many dollars you're willing to lose if the trade goes wrong, then work backward to a share count. The whole formula is one line:",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`Shares = (Account × Risk%) ÷ (Entry − Stop)`. The denominator is **risk per share**, *not* the share price.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Position size", def: "How many shares (or contracts) you hold in a single trade." },
        { term: "Risk per share", def: "`Entry − Stop` for a long, or `Stop − Entry` for a short. The dollars you lose per share if the stop is hit." },
        { term: "Dollar risk (1R)", def: "`Account × Risk%` — the total dollars at stake on the trade. One unit of risk, called *R*." },
        { term: "Fixed-fractional sizing", def: "Risking a fixed *percentage* of the account each trade, so size scales with the balance." },
        { term: "Position value", def: "`Shares × Entry` — the dollars deployed. Not the same as what you can lose." },
        { term: "Buying power", def: "The cash (plus any margin) available to fund a position." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Say your account is `$10,000` and you'll risk `1%` per trade. First, the dollar risk: `1R = $10,000 × 1% = $100`. You buy at `$50` with a stop at `$48`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Risk per share = `Entry − Stop = $50 − $48 = $2`.",
        "Shares = `$100 ÷ $2 = 50 shares`.",
        "Position **value** = `50 × $50 = $2,500` — a quarter of the account.",
        "But the **stop-out** = `50 × $2 = $100`, exactly `1%`.",
      ],
    },
    {
      type: "text",
      body:
        "Notice that position **value** (`$2,500`) and position **risk** (`$100`) are completely different numbers. You can hold a $2,500 position while risking only $100, because the stop is close.",
    },
    { type: "heading", text: "A tighter stop changes everything" },
    {
      type: "text",
      body:
        "Keep the same account and risk, but tighten the stop to `$49.50`. Now risk per share = `$50 − $49.50 = $0.50`, so shares = `$100 ÷ $0.50 = 200 shares`. The position value jumps to `200 × $50 = $10,000` — your whole account — yet the dollar risk is *still* `$100`. A tighter stop buys you more shares for the same risk.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases to watch: a *very* tight stop can demand more shares than your buying power allows, and it gets you whipsawed out by normal noise. And **slippage or an overnight gap** can fill below your stop, so a real loss can exceed 1R. Always confirm `shares × entry` fits your buying power, and round **down** to whole shares.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I'll just buy `$1,000` of every stock.\"* A fixed dollar **value** ignores how far away the stop is — a wide stop on $1,000 risks far more than a tight one. Size by **risk per share**, not by a flat dollar amount.",
    },
  ],
};
