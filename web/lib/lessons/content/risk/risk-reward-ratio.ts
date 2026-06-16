import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "risk-reward-ratio",
  title: "Risk/Reward Ratio and Breakeven Win Rate",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 4,
  summary: "How much you stand to make versus lose — and the win rate you need to break even at any given ratio.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Before taking a trade, ask two numbers: how much can I make, and how much can I lose? The **risk/reward ratio** compares them, and it quietly determines how *often* you need to be right to come out ahead.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`R:R = reward per share ÷ risk per share`, where `reward = |Target − Entry|` and `risk = |Entry − Stop|`.",
    },
    {
      type: "text",
      body:
        "A ratio of `2:1` or better means you can be **wrong more often than right** and still profit, because each win is worth more than each loss. The exact bar is the **breakeven win rate**:",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "`Breakeven win rate = 1 ÷ (1 + R:R)`.",
    },
    {
      type: "list",
      items: [
        "`1:1` → `50%`",
        "`1.5:1` → `40%`",
        "`2:1` → `33.3%`",
        "`3:1` → `25%`",
        "`0.5:1` → `66.7%`",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Risk/reward ratio (R:R)", def: "Reward per share divided by risk per share — potential gain compared to potential loss." },
        { term: "Reward per share", def: "`|Target − Entry|` — the dollars per share you make if the target is hit." },
        { term: "Breakeven win rate", def: "`1 ÷ (1 + R:R)` — the win % at which gains and losses cancel out." },
        { term: "Expectancy", def: "`(WinRate × RewardR) − (LossRate × RiskR)` — the average R you make per trade over many trades." },
        { term: "R (R-multiple)", def: "Profit or loss measured in units of 1R, your per-trade risk. A +3R win makes three times what a −1R loss costs." },
        { term: "Win rate", def: "The fraction of trades that are winners. Meaningful only alongside R:R." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Entry `$50`, stop `$48`, target `$56`. Risk = `$50 − $48 = $2`; reward = `$56 − $50 = $6`. So `R:R = $6 ÷ $2 = 3:1`. Breakeven win rate = `1 ÷ (1 + 3) = 25%` — you only need to win one trade in four.",
    },
    {
      type: "text",
      body:
        "Now put a real win rate on it. **Expectancy** at `40%` win rate and `3:1` = `(0.40 × 3) − (0.60 × 1) = 1.2 − 0.6 = +0.6R` per trade. Over `100` trades risking `$100` each, that's roughly `+$6,000`. Drop the ratio to `2:1` at the same `40%` win rate: `(0.40 × 2) − (0.60 × 1) = 0.8 − 0.6 = +0.2R` → about `+$2,000`. Same win rate, very different outcome — because R:R does the heavy lifting.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: slippage and scaling out of a position make your *realized* R:R worse than the planned one. And a gorgeous `5:1` ratio is meaningless if the target is at a price the stock will realistically never reach — set the target from **structure** first, then check the ratio.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I need to win most of my trades to make money.\"* At `3:1` you break even winning just `25%` of the time. Profit comes from **win rate and R:R together** — a high win rate with a terrible ratio can still lose, and a low win rate with a great ratio can win handily.",
    },
  ],
};
