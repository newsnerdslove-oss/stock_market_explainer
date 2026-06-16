import type { Question } from "@/lib/quiz/types";

// Quiz for the "Liquidity" lesson.
export const questions: Question[] = [
  {
    id: "liquidity.q1",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "easy",
    tags: ["liquidity", "definition"],
    prompt: "**Liquidity** measures how easily you can…",
    choices: [
      { id: "a", text: "Trade quickly, in size, and near the current price" },
      { id: "b", text: "Earn dividends from a stock", feedback: "Dividends are a payout, unrelated to how easily the stock trades." },
      { id: "c", text: "Predict tomorrow's price" },
      { id: "d", text: "Avoid all trading fees" },
    ],
    correctId: "a",
    explanation:
      "**Liquidity** is how easily you can trade **quickly, in size, and near the current price**.",
  },
  {
    id: "liquidity.q2",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "easy",
    tags: ["liquidity", "signs"],
    prompt: "A **highly liquid** stock typically has…",
    choices: [
      { id: "a", text: "Low volume and a wide spread" },
      { id: "b", text: "High volume and a tight spread" },
      { id: "c", text: "No order book" },
      { id: "d", text: "A very low share price", feedback: "Price tag and liquidity are unrelated — liquidity is about volume and depth." },
    ],
    correctId: "b",
    explanation:
      "High liquidity shows up as **high average volume**, **tight spreads**, and a **deep order book**.",
  },
  {
    id: "liquidity.q3",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "medium",
    tags: ["liquidity", "signs"],
    prompt: "Which describes a **low-liquidity** (thinly traded) stock?",
    choices: [
      { id: "a", text: "Low volume, wide spreads, prices that jump on modest orders" },
      { id: "b", text: "Millions of shares trading with a one-cent spread" },
      { id: "c", text: "A deep order book at every price level" },
      { id: "d", text: "Instant fills with no price impact" },
    ],
    correctId: "a",
    explanation:
      "Low liquidity means **low volume, wide spreads**, and prices that **jump on even modest orders** — typical of small- and micro-caps.",
  },
  {
    id: "liquidity.q4",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "medium",
    tags: ["liquidity", "effects"],
    prompt: "Why does low liquidity matter when you trade?",
    choices: [
      { id: "a", text: "It guarantees a higher return" },
      { id: "b", text: "It leads to slower fills and more slippage" },
      { id: "c", text: "It removes the bid/ask spread" },
      { id: "d", text: "It only affects buying, never selling", feedback: "Liquidity affects getting *out* too — a thin stock can be hard to sell later." },
    ],
    correctId: "b",
    explanation:
      "Low liquidity means **slower fills, worse prices, and more slippage** — both when you buy and when you sell.",
  },
  {
    id: "liquidity.q5",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "medium",
    tags: ["liquidity", "definition", "depth"],
    prompt: "**Market depth** refers to…",
    choices: [
      { id: "a", text: "How far a stock's price has fallen" },
      { id: "b", text: "How many shares are available at and near the current price" },
      { id: "c", text: "How long a company has been public" },
      { id: "d", text: "The dividend paid per share" },
    ],
    correctId: "b",
    explanation:
      "**Market depth** is how many shares sit at and near the current price across the order book — a key part of liquidity.",
  },
  {
    id: "liquidity.q6",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "hard",
    tags: ["liquidity", "misconception"],
    prompt: "Why is \"a low share price means it's easy to trade\" wrong?",
    choices: [
      { id: "a", text: "Low-priced stocks are always banned from trading" },
      { id: "b", text: "Liquidity is about volume and depth, not the price tag — a $3 micro-cap can be very illiquid" },
      { id: "c", text: "Low-priced stocks always have the tightest spreads" },
      { id: "d", text: "Share price and volume are always equal" },
    ],
    correctId: "b",
    explanation:
      "Liquidity is about **volume and depth, not the price tag**. A `$3` micro-cap can be brutally illiquid, while a `$400` mega-cap trades effortlessly.",
  },
  {
    id: "liquidity.q7",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "hard",
    tags: ["liquidity", "value", "misconception"],
    prompt: "Which statement about liquidity and value is correct?",
    choices: [
      { id: "a", text: "Liquidity and value are the same thing" },
      { id: "b", text: "An expensive stock can be highly liquid, and a cheap one can be illiquid" },
      { id: "c", text: "Only cheap stocks can be liquid" },
      { id: "d", text: "Only expensive stocks can be liquid" },
    ],
    correctId: "b",
    explanation:
      "**Liquidity is not value.** An expensive stock can be very liquid and a cheap one nearly impossible to trade — they measure different things.",
  },
  {
    id: "liquidity.q8",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "hard",
    tags: ["liquidity", "application", "scenario"],
    prompt:
      "Stock ABC trades 50M shares/day with a `$0.01` spread; stock ZZZ trades 8,000 shares/day with a `$0.40` spread. Which is more liquid, and what does that mean for a 100-share order?",
    choices: [
      { id: "a", text: "ABC — it fills near the quote almost instantly with little price impact" },
      { id: "b", text: "ZZZ — its wide spread means more shares available", feedback: "A wide spread signals the *opposite* of depth — ZZZ is the illiquid one." },
      { id: "c", text: "They're equally liquid because both trade daily" },
      { id: "d", text: "ZZZ — lower volume means faster fills" },
    ],
    correctId: "a",
    explanation:
      "**ABC** is far more liquid (huge volume, penny spread): a 100-share order fills near the quote instantly. The same order in **ZZZ** fills at a worse price and can move it.",
  },
  {
    id: "liquidity.q9",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "medium",
    tags: ["liquidity", "application"],
    prompt:
      "You can buy a thin micro-cap easily today. Why should you still worry about its liquidity?",
    choices: [
      { id: "a", text: "Liquidity only matters for dividends" },
      { id: "b", text: "Liquidity affects getting OUT too — selling later may be slow or move the price" },
      { id: "c", text: "Once you own it, liquidity no longer applies" },
      { id: "d", text: "Buying is the only side that has slippage" },
    ],
    correctId: "b",
    explanation:
      "Liquidity affects **exits as well as entries**. An easy buy in a thin stock can become a painful sell — slow fills and price impact when you want out.",
  },
  {
    id: "liquidity.q10",
    lessonSlug: "liquidity",
    type: "single",
    difficulty: "easy",
    tags: ["liquidity", "comparison", "application"],
    prompt:
      "Between two stocks, which is the more liquid one?",
    choices: [
      { id: "a", text: "The one with higher volume and a tighter spread" },
      { id: "b", text: "The one with the lower share price" },
      { id: "c", text: "The one with the wider spread" },
      { id: "d", text: "The one that trades fewer shares per day" },
    ],
    correctId: "a",
    explanation:
      "More liquid = **higher volume and a tighter spread**. Share price alone tells you nothing about liquidity.",
  },
];
