import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "spread-math-mastery",
  title: "Spread Math: Breakeven, Max Gain, Max Loss, Worked Exactly",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 2,
  summary:
    "Master the four-step Series 7 method for any two-leg vertical spread so the breakeven/max-gain/max-loss numbers fall out mechanically.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "A **vertical spread** is two options of the same type and expiration at different strikes. Once you compute the **net premium** and know the **strike width**, every exam number — breakeven, max gain, max loss — falls out mechanically. The trick is a tight four-step method you apply the same way every time.",
    },
    { type: "heading", text: "Step 1 — net premium" },
    {
      type: "text",
      body:
        "**Add the leg you buy, subtract the leg you sell** (per share). If the result is money out, it's a **net debit** (you paid). If it's money in, it's a **net credit** (you received). A debit spread is a *long vertical* (bull call, bear put); a credit spread is a *short vertical* (bull put, bear call). Multiply every per-share answer by `100` for the dollar figure.",
    },
    { type: "heading", text: "Debit spreads (long verticals)" },
    {
      type: "list",
      items: [
        "**Max loss = net debit.**",
        "**Max gain = strike width − net debit.**",
        "**Breakeven** = lower strike + net debit (call spread) or higher strike − net debit (put spread).",
      ],
    },
    { type: "heading", text: "Credit spreads (short verticals)" },
    {
      type: "list",
      items: [
        "**Max gain = net credit.**",
        "**Max loss = strike width − net credit.**",
        "**Breakeven** = higher short strike − net credit (bull put) or lower short strike + net credit (bear call).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The identity that ties it together: `width = max gain + max loss` for **every** vertical. If you have the width and one of the two, the other is forced.",
    },
    { type: "heading", text: "Worked example — bull call debit spread" },
    {
      type: "text",
      body:
        "Buy the `XYZ` Jul `50` call at `$4`, sell the Jul `55` call at `$1.50`. This is a long call vertical — a debit spread.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Net premium:** `4 − 1.50 = $2.50` debit (`$250`).",
        "**Strike width:** `55 − 50 = $5`.",
        "**Max loss:** the debit = `$2.50` (`$250`).",
        "**Max gain:** `width − debit = 5 − 2.50 = $2.50` (`$250`).",
        "**Breakeven:** lower strike + debit = `50 + 2.50 = $52.50`.",
        "**Sanity check at `$55`:** long `50` call worth `$5`, short `55` call worth `$0` → spread `$5`; minus the `$2.50` cost = `+$2.50`. ✓",
      ],
    },
    {
      type: "payoff",
      legs: [
        { instrument: "call", side: "long", strike: 50, premium: 4, qty: 1 },
        { instrument: "call", side: "short", strike: 55, premium: 1.5, qty: 1 },
      ],
      title: "Bull call (debit) spread payoff",
      caption:
        "Long 50 call @ $4, short 55 call @ $1.50. Net debit $2.50 ($250). Breakeven $52.50; max gain +$250 above $55; max loss −$250 below $50.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Vertical spread", def: "Two options of the same type and expiration at different strikes." },
        { term: "Net premium", def: "Leg bought minus leg sold, per share; positive = debit, negative = credit." },
        { term: "Net debit", def: "Premium paid; the max loss on a long vertical." },
        { term: "Net credit", def: "Premium received; the max gain on a short vertical." },
        { term: "Strike width", def: "The distance between the two strikes — sets the total $5-of-spread value here." },
        { term: "Breakeven", def: "The price where the spread's value exactly returns the net premium." },
        { term: "Width identity", def: "width = max gain + max loss for every vertical spread." },
        { term: "Long vertical", def: "A debit spread (bull call or bear put) — you buy net premium." },
        { term: "Short vertical", def: "A credit spread (bull put or bear call) — you sell net premium." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Max gain on a debit spread is the spread width.'* It is **width minus the debit paid**. Here the width is `$5` but the max gain is `5 − 2.50 = $2.50`, not `$5`. This is educational content, not financial advice.",
    },
  ],
};
