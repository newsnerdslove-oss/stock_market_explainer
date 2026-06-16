import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "position-trading-trend-following",
  title: "Position Trading: Riding the Longer Trend",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 3,
  summary: "Position trading and trend following — wider stops, fewer trades, big winners, and where the style fails.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**Position trading** is the most patient of the active styles. Holds run *weeks to months*, you trade the **fewest** times of any active approach, and you accept large open swings in exchange for occasionally catching a big move. It's the closest active style to investing — but it's still active, and it still has a failure mode that ends most attempts.",
    },
    {
      type: "text",
      body:
        "Many position traders are **trend followers**: the core bet is that a move in motion *tends to persist*. You enter when a higher-timeframe trend is established — price above a long moving average, a series of higher highs and higher lows — and you stay in until the trend breaks. Fewer trades means the **lowest cost drag and time commitment** among active styles.",
    },
    { type: "heading", text: "Wider stops mean smaller size" },
    {
      type: "text",
      body:
        "To ride a months-long trend you need a **wide stop** so normal volatility doesn't shake you out at the first wobble. But a wide stop doesn't mean more risk — *if you size correctly.* Dollar risk = **stop distance × shares**. Widen the stop and you must **shrink the position** to keep dollar risk constant. This is the single most misunderstood point in the whole style.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Position trade", def: "A trade held weeks to months to capture a longer-term trend, accepting large open swings along the way." },
        { term: "Trend following", def: "Buying strength and selling weakness on the premise that established moves persist. Low win rate, large average winner." },
        { term: "Drawdown", def: "A decline from a peak — here, the open profit you give back as price pulls in or the trend turns." },
        { term: "Whipsaw", def: "Repeated small losses from getting chopped in and out when the market goes sideways instead of trending." },
        { term: "Trailing stop", def: "A stop that follows price up (for a long), locking in gains while letting a winner run until the trend breaks." },
      ],
    },
    { type: "heading", text: "Worked example: position size and the hold" },
    {
      type: "text",
      body:
        "**ABC** is in a clear uptrend. You enter at **$100** with a **wide** stop at **$85** (risk **$15**/share), and *no fixed target* — you'll exit when the trend breaks (say, a close below the 50-week average). Account **$50,000**, risk **1%** = **$500**. Size = `$500 ÷ $15 ≈ 33 shares`. Compare a swing trader risking the same $500 with a tight **$3** stop: `$500 ÷ $3 ≈ 166 shares` — *five times* the share count for the *same dollar risk*. The wider stop simply means fewer shares.",
    },
    {
      type: "text",
      body:
        "Over the next four months ABC runs to **$160**. The trend finally breaks and you exit around **$150**, banking roughly **$50/share**. But getting there meant **holding through a pullback to $108** — a real test of nerve. The discipline of position trading is *sitting through the pullback* without bailing, because the few big winners are what pay for the many small losers.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: trend following **structurally gives back a chunk of profit at every reversal** — that's the price of admission for catching the big move, not a mistake. And in **chop**, you'll string together losses (whipsaw). That stretch is exactly when most people quit — often right before the next trend pays them.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'wider stops are riskier.'* Risk is **stop distance × shares**. A wider stop with a correspondingly **smaller position** can carry the *same or less* dollar risk than a tight stop with a big position. Also honest: even done well, position trading is **still beaten by simple buy-and-hold** for many people after costs and taxes. Educational content, not financial advice.",
    },
  ],
};
