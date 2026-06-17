import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-exam-problems",
  title: "Series 7 Options Problems: Worked End-to-End",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 8,
  summary:
    "Synthesize everything into a set of exam-style calculation problems solved step-by-step using the four-step spread method and the module's formulas.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Time to put the formulas to work. Every options calc on the Series 7 yields to the same **four-step method** — identify the strategy first, then the numbers are automatic. Remember the `×100` multiplier on every dollar answer.",
    },
    { type: "heading", text: "The four-step method" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Identify** the strategy and whether it's a **debit or credit**.",
        "**Compute the net premium** (leg bought − leg sold, per share).",
        "**Apply** the matching max-gain / max-loss / breakeven formula.",
        "**Sanity-check** the value at the strikes, then `×100`.",
      ],
    },
    { type: "heading", text: "Problem A — bull put credit spread" },
    {
      type: "text",
      body:
        "Short the `XYZ` `40` put @ `$2.20`, long the `35` put @ `$0.70`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Strategy: **bull put = credit** spread. Net credit = `2.20 − 0.70 = $1.50` (`$150`); width `$5`.",
        "**Max gain = credit = `$150`.**",
        "**Max loss = width − credit = `5 − 1.50 = $3.50` (`$350`).**",
        "**Breakeven = higher short strike − credit = `40 − 1.50 = $38.50`.**",
      ],
    },
    { type: "heading", text: "Problem B — long call butterfly" },
    {
      type: "text",
      body:
        "Buy the `60` call @ `$6`, sell two `65` calls @ `$3`, buy the `70` call @ `$1.50`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Net debit = `6 − (2 × 3) + 1.50 = 6 − 6 + 1.50 = $1.50` (`$150`); adjacent distance `$5`.",
        "**Max gain = distance − debit = `5 − 1.50 = $3.50` (`$350`)**, at exactly `$65`.",
        "**Max loss = the debit = `$150`** (at or beyond either wing).",
        "**Breakevens = `60 + 1.50 = $61.50` and `70 − 1.50 = $68.50`.**",
      ],
    },
    {
      type: "payoff",
      legs: [
        { instrument: "call", side: "long", strike: 60, premium: 6, qty: 1 },
        { instrument: "call", side: "short", strike: 65, premium: 3, qty: 2 },
        { instrument: "call", side: "long", strike: 70, premium: 1.5, qty: 1 },
      ],
      title: "Problem B — long call butterfly payoff",
      caption:
        "Buy 60 call @ $6, sell two 65 calls @ $3, buy 70 call @ $1.50. Net debit $1.50 ($150). Peak +$350 at $65; breakevens $61.50 and $68.50; max loss −$150 at the wings.",
    },
    { type: "heading", text: "Problem C — collar P/L at a price" },
    {
      type: "text",
      body:
        "Own `100` shares @ `$48`; long the `45` put @ `$0.90`; short the `52` call @ `$0.70`. The stock closes at `$44`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "At `$44` the put is exercised → you sell the stock at the `45` strike. Stock result = `45 − 48 = −$3` per share.",
        "Net premium = `0.90 − 0.70 = $0.20` debit → `−$0.20`.",
        "**Total = `−3 − 0.20 = −$3.20` per share → `−$320`** — exactly the collar's max loss.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Four-step method", def: "Identify strategy/credit-debit → net premium → apply formula → sanity-check, then ×100." },
        { term: "Bull put spread", def: "Short the higher put, long the lower put; a credit spread. BE = higher strike − credit." },
        { term: "Long call butterfly", def: "Buy 1 low, sell 2 middle, buy 1 high; max gain = distance − debit at the middle strike." },
        { term: "Collar max loss", def: "(stock cost − put strike) + net premium, realized at or below the put strike." },
        { term: "Multiplier", def: "×100 shares per equity-option contract — applied to every per-share answer." },
        { term: "Sanity check", def: "Plugging a strike into the payoff to confirm the formula's number." },
        { term: "Width identity", def: "width = max gain + max loss for any vertical spread." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'You can guess the strategy from the answer choices.'* Always **identify debit vs. credit and the strategy first**. Max loss = the **debit** for long verticals, but **width − credit** for short verticals — getting the type wrong flips the math. This is educational content, not financial advice.",
    },
  ],
};
