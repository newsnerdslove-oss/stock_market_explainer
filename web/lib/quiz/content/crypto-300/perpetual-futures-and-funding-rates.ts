import type { Question } from "@/lib/quiz/types";

// Quiz for the "Perpetual Futures & Funding Rates" lesson.
export const questions: Question[] = [
  {
    id: "perpetual-futures-and-funding-rates.q1",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "easy",
    tags: ["perps", "funding"],
    prompt: "With no expiry to force convergence, what keeps a perp's price near spot?",
    choices: [
      { id: "a", text: "The funding-rate mechanism" },
      { id: "b", text: "A weekly settlement to spot" },
      { id: "c", text: "The exchange manually resetting the price" },
      { id: "d", text: "Mandatory contract rolls every month" },
    ],
    correctId: "a",
    explanation:
      "A perp never expires, so it uses the **funding rate** — payments between longs and shorts — to keep its price anchored to the spot index.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q2",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "medium",
    tags: ["perps", "funding"],
    prompt: "When funding is **positive** (perp trading above spot), who pays whom?",
    choices: [
      { id: "a", text: "Shorts pay longs" },
      { id: "b", text: "Longs pay shorts" },
      { id: "c", text: "Everyone pays the exchange" },
      { id: "d", text: "The exchange pays both sides" },
    ],
    correctId: "b",
    explanation:
      "Positive funding means the perp is above spot, so the crowded **longs pay shorts** — nudging the perp back down toward the spot index.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q3",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["perps", "funding", "scenario", "math"],
    prompt:
      "BTC perp is above spot with funding `+0.01%`/`8h`. You hold a `$10,000` long. How much do you pay at the next funding timestamp?",
    choices: [
      { id: "a", text: "$0.10" },
      { id: "b", text: "$1.00" },
      { id: "c", text: "$10.00", feedback: "That would be `0.1%`, not `0.01%` — recheck the decimal." },
      { id: "d", text: "$100.00" },
    ],
    correctId: "b",
    explanation:
      "Funding is charged on **notional**: `0.01% × $10,000 = $1.00`, paid to shorts since funding is positive and you're long.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q4",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "medium",
    tags: ["perps", "funding", "notional"],
    prompt: "Funding payments are calculated on…",
    choices: [
      { id: "a", text: "Your posted margin only" },
      { id: "b", text: "The position's full notional (size)" },
      { id: "c", text: "Your realized profit" },
      { id: "d", text: "The exchange's trading volume" },
    ],
    correctId: "b",
    explanation:
      "Funding is paid on **notional**, not margin. With high leverage, a small rate on a large notional is a large drag relative to your small margin.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q5",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "medium",
    tags: ["perps", "funding", "sentiment"],
    prompt: "Funding has been **strongly negative** for several days. What does that suggest?",
    choices: [
      { id: "a", text: "Shorts are crowded and paying longs; the perp is trading below spot" },
      { id: "b", text: "Longs are crowded and paying shorts" },
      { id: "c", text: "The exchange is profiting heavily" },
      { id: "d", text: "Funding is about to be turned off" },
    ],
    correctId: "a",
    explanation:
      "Negative funding means the perp is **below spot**, so **shorts pay longs**. Persistently negative funding signals crowded shorts — a sentiment gauge, not a direction guarantee.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q6",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "easy",
    tags: ["perps", "funding", "timing"],
    prompt: "When do you actually pay or receive funding?",
    choices: [
      { id: "a", text: "Only if you hold the position through the funding timestamp" },
      { id: "b", text: "Every second you hold the position" },
      { id: "c", text: "Only when you close at a profit" },
      { id: "d", text: "Once, when you open the position" },
    ],
    correctId: "a",
    explanation:
      "Funding is exchanged on a schedule (often every `8h`). You only pay or receive it if your position is open **through** that timestamp.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q7",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["perps", "funding", "scenario", "math"],
    prompt:
      "You hold a `10x` long: `$1,000` margin, `$10,000` notional. Funding stays `+0.01%`/`8h` for 30 days and price is flat. Roughly what's the funding drag, as a share of your margin?",
    choices: [
      { id: "a", text: "~`$9`, about `0.9%` of margin" },
      { id: "b", text: "~`$90`, about `9%` of margin" },
      { id: "c", text: "~`$900`, about `90%` of margin", feedback: "That's 10x too high — `$1/interval × 3/day × 30 days` is about `$90`." },
      { id: "d", text: "~`$3`, about `0.3%` of margin" },
    ],
    correctId: "b",
    explanation:
      "`$1.00` per interval × `3` intervals/day × `30` days ≈ `$90`. Against `$1,000` margin that's ~`9%` drained by funding alone — with no price move.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q8",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "hard",
    tags: ["perps", "funding", "misconception"],
    prompt: "Which statement about the funding rate is **correct**?",
    choices: [
      { id: "a", text: "It's a fee the exchange always charges the trader, like loan interest" },
      { id: "b", text: "It's generally a peer-to-peer transfer between longs and shorts; you can receive it" },
      { id: "c", text: "It's deducted from spot holders, not perp traders" },
      { id: "d", text: "It only ever flows from shorts to the exchange" },
    ],
    correctId: "b",
    explanation:
      "Funding is mostly a **trader-to-trader** transfer (longs ↔ shorts) to keep the perp near spot. The exchange usually takes no cut, and depending on your side you may **receive** it.",
  },
  {
    id: "perpetual-futures-and-funding-rates.q9",
    lessonSlug: "perpetual-futures-and-funding-rates",
    type: "single",
    difficulty: "medium",
    tags: ["perps", "mark-price", "liquidation"],
    prompt: "Why do perps use a **mark price** separate from the last-traded price?",
    choices: [
      { id: "a", text: "To tie liquidations to an index and limit manipulation from a thin order book" },
      { id: "b", text: "To charge higher trading fees" },
      { id: "c", text: "To hide the real price from traders" },
      { id: "d", text: "Because the spot price is illegal to reference" },
    ],
    correctId: "a",
    explanation:
      "Liquidations run off the **mark/index price**, not the last trade. That keeps a single wick on a thin book from unfairly triggering liquidations and limits manipulation.",
  },
];
