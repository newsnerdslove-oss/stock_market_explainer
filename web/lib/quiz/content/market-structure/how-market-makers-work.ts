import type { Question } from "@/lib/quiz/types";

// Quiz for the "How Market Makers Really Work" lesson.
export const questions: Question[] = [
  {
    id: "how-market-makers-work.q1",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "nbbo"],
    prompt: "The **NBBO** is…",
    choices: [
      { id: "a", text: "The average of every trade in the day" },
      { id: "b", text: "The highest bid and the lowest offer across all venues" },
      { id: "c", text: "The broker's internal price target" },
      { id: "d", text: "The opening auction price" },
    ],
    correctId: "b",
    explanation:
      "The **NBBO** (National Best Bid and Offer) is the highest bid and lowest offer available across every venue. Under Reg NMS, customer orders must fill **no worse** than it.",
  },
  {
    id: "how-market-makers-work.q2",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "market-maker"],
    prompt: "A market maker's **core** source of profit is…",
    choices: [
      { id: "a", text: "Capturing the bid–offer spread across high volume" },
      { id: "b", text: "Correctly predicting the market's direction", feedback: "Directional bets are an *inventory risk* MMs minimize, not their core model." },
      { id: "c", text: "Dividends on shares it holds overnight" },
      { id: "d", text: "Interest paid by the exchange" },
    ],
    correctId: "a",
    explanation:
      "A market maker earns the **spread** — buying at its bid and selling at its offer over enormous volume — while trying to stay flat. Direction is a risk to manage, not the income source.",
  },
  {
    id: "how-market-makers-work.q3",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "liquidity"],
    prompt: "Posting a **two-sided market** means an MM quotes…",
    choices: [
      { id: "a", text: "A bid one day and an offer the next" },
      { id: "b", text: "Only the side the customer asks for" },
      { id: "c", text: "Both a bid and an offer it's ready to trade" },
      { id: "d", text: "Two different stocks at once" },
    ],
    correctId: "c",
    explanation:
      "A **two-sided market** is a simultaneous bid *and* offer the MM stands ready to trade on either side — that's how it provides liquidity.",
  },
  {
    id: "how-market-makers-work.q4",
    lessonSlug: "how-market-makers-work",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["market-structure", "spread", "math"],
    unit: "$",
    prompt:
      "An MM buys **500 shares @ `$30.00`** and later sells the same **500 @ `$30.03`**. What's the spread-capture profit (ignoring fees)?",
    choices: [
      { id: "a", text: "$3" },
      { id: "b", text: "$15" },
      { id: "c", text: "$30", feedback: "That would be $0.06 per share — the spread captured here is only $0.03." },
      { id: "d", text: "$1,500" },
    ],
    correctId: "b",
    explanation:
      "`500 × ($30.03 − $30.00)` = `500 × $0.03` = **`$15`**, and the MM is back to flat. Small per-share edges add up across volume.",
  },
  {
    id: "how-market-makers-work.q5",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "inventory-risk"],
    prompt: "**Inventory risk** for a market maker is the danger that…",
    choices: [
      { id: "a", text: "The spread is too wide to attract trades" },
      { id: "b", text: "A position it's holding moves against it before it can offset it" },
      { id: "c", text: "Customers will stop using its broker" },
      { id: "d", text: "The NBBO is updated too often" },
    ],
    correctId: "b",
    explanation:
      "**Inventory risk** is the exposure from holding a long or short while the price moves against it. MMs manage it by **skewing quotes** and **hedging** to get back toward flat.",
  },
  {
    id: "how-market-makers-work.q6",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "pfof", "scenario"],
    prompt:
      "Under **PFOF**, your broker routes your buy order to a wholesaler that pays for the flow. What protection still applies to your fill?",
    choices: [
      { id: "a", text: "None — PFOF removes execution duties" },
      { id: "b", text: "It must execute no worse than the NBBO, subject to best execution (FINRA 5310)" },
      { id: "c", text: "It must fill at the day's lowest price" },
      { id: "d", text: "It must be filled on a lit exchange only" },
    ],
    correctId: "b",
    explanation:
      "Even under **PFOF**, the broker owes **best execution** (FINRA 5310) and the order must fill **no worse than the NBBO**. Wholesalers often go further and give *price improvement* inside the NBBO.",
  },
  {
    id: "how-market-makers-work.q7",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "price-improvement"],
    prompt: "**Price improvement** means a customer order was filled…",
    choices: [
      { id: "a", text: "Exactly at the NBBO" },
      { id: "b", text: "At a price better than the NBBO" },
      { id: "c", text: "After the market closed" },
      { id: "d", text: "At a worse price but with a rebate" },
    ],
    correctId: "b",
    explanation:
      "**Price improvement** is a fill *inside* the NBBO — better than the best displayed price. Wholesalers handling retail flow often deliver it; the NBBO is the floor, not the ceiling.",
  },
  {
    id: "how-market-makers-work.q8",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "inventory-risk", "scenario"],
    prompt:
      "A wave of retail sells leaves an MM **long 5,000 shares** and the stock keeps falling. What's the textbook response?",
    choices: [
      { id: "a", text: "Raise its bid to attract even more sellers" },
      { id: "b", text: "Skew its bid down and hedge the long exposure" },
      { id: "c", text: "Stop trading the stock permanently" },
      { id: "d", text: "Hold the long and hope it recovers" },
    ],
    correctId: "b",
    explanation:
      "With an unwanted long in a falling market, the MM **skews its bid down** (to stop accumulating more) and **hedges** the existing exposure — managing inventory risk back toward flat rather than betting on a bounce.",
  },
  {
    id: "how-market-makers-work.q9",
    lessonSlug: "how-market-makers-work",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "adverse-selection", "scenario"],
    prompt:
      "In a fast, one-sided market driven by surprise news, why might an MM **widen its spread or pull its quotes**?",
    choices: [
      { id: "a", text: "To guarantee customers a worse price" },
      { id: "b", text: "To protect against adverse selection by better-informed traders" },
      { id: "c", text: "Because the exchange forces it to" },
      { id: "d", text: "To violate the NBBO on purpose" },
    ],
    correctId: "b",
    explanation:
      "When flow is one-sided and informed, tight quotes get picked off. Widening spreads or pulling quotes protects the MM from **adverse selection** — being repeatedly filled by traders who know more than the quote reflects.",
  },
];
