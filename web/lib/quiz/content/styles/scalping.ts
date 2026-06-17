import type { Question } from "@/lib/quiz/types";

// Quiz for the "Scalping: Many Tiny Trades, Tiny Margins" lesson.
export const questions: Question[] = [
  {
    id: "scalping.q1",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "scalping", "definition"],
    prompt: "Scalping is best described as…",
    choices: [
      { id: "a", text: "Many very short trades, each aiming for a few ticks or cents" },
      { id: "b", text: "Holding a few positions for several months" },
      { id: "c", text: "Buying and holding an index fund" },
      { id: "d", text: "Trading only once per week" },
    ],
    correctId: "a",
    explanation:
      "Scalping means **many very short trades** — holds of seconds to minutes, dozens to hundreds a day — each grabbing a few ticks or cents.",
  },
  {
    id: "scalping.q2",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "scalping", "holding-period"],
    prompt: "A scalper's holding period is typically…",
    choices: [
      { id: "a", text: "Weeks to months" },
      { id: "b", text: "Seconds to minutes" },
      { id: "c", text: "A full trading session, held to the close" },
      { id: "d", text: "Several days" },
    ],
    correctId: "b",
    explanation:
      "Scalps last **seconds to minutes**, which is what drives the very high daily trade count.",
  },
  {
    id: "scalping.q3",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "scalping", "costs"],
    prompt: "For a scalper, what most directly decides profitability?",
    choices: [
      { id: "a", text: "Whether the company beats earnings" },
      { id: "b", text: "The bid-ask spread and per-trade commissions — costs often exceed the tiny profit target" },
      { id: "c", text: "The dividend yield of the stock" },
      { id: "d", text: "The price-to-earnings ratio" },
    ],
    correctId: "b",
    explanation:
      "When the target is a few cents, the **spread plus commissions** can be larger than the move you're capturing. For scalpers, **costs decide profitability more than direction**.",
  },
  {
    id: "scalping.q4",
    lessonSlug: "scalping",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "scalping", "math", "edge"],
    prompt:
      "Target **+$0.05/share**; spread + commissions cost **~$0.03/share**. What's the real edge per winning trade?",
    choices: [
      { id: "a", text: "~$0.02 per share" },
      { id: "b", text: "~$0.05 per share", feedback: "That ignores costs — subtract the ~$0.03 spread and commissions first." },
      { id: "c", text: "~$0.08 per share" },
      { id: "d", text: "~$0.00 per share" },
    ],
    correctId: "a",
    explanation:
      "Real edge = `$0.05 − $0.03 = $0.02` per winning trade. The costs eat most of the target, which is why scalping needs tight spreads and low commissions to survive.",
  },
  {
    id: "scalping.q5",
    lessonSlug: "scalping",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["styles", "scalping", "math", "loss"],
    prompt:
      "If each winning scalp nets **+$0.02/share**, how many wins does one **−$0.10/share** loss wipe out?",
    choices: [
      { id: "a", text: "2 wins" },
      { id: "b", text: "5 wins" },
      { id: "c", text: "10 wins" },
      { id: "d", text: "1 win", feedback: "$0.10 ÷ $0.02 = 5 — a single big loss erases several tiny wins." },
    ],
    correctId: "b",
    explanation:
      "`$0.10 ÷ $0.02 = 5`. One ten-cent loss erases **five** two-cent wins — which is why a single oversized loss is so dangerous in scalping.",
  },
  {
    id: "scalping.q6",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "scalping", "tooling"],
    prompt: "Which set of tools/conditions does scalping most depend on?",
    choices: [
      { id: "a", text: "Long-term financial statements and analyst reports" },
      { id: "b", text: "Fast execution, direct routing, hotkeys, Level 2, and low latency" },
      { id: "c", text: "A buy-and-hold mindset and patience" },
      { id: "d", text: "A basic web brokerage and a daily newspaper" },
    ],
    correctId: "b",
    explanation:
      "Scalping is an arms race against pros and algos: it demands **fast execution, direct routing, hotkeys, Level 2 depth, and low latency**. Without them you're at a structural disadvantage.",
  },
  {
    id: "scalping.q7",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "scalping", "liquidity", "edge-case"],
    prompt: "Why can a **wide-spread, low-liquidity** stock be impossible to scalp profitably regardless of skill?",
    choices: [
      { id: "a", text: "Such stocks can't legally be day traded" },
      { id: "b", text: "The spread alone can exceed the few-cent profit target, so costs swamp any edge" },
      { id: "c", text: "Low-liquidity stocks never move in price" },
      { id: "d", text: "Brokers charge no commission on them" },
    ],
    correctId: "b",
    explanation:
      "In wide-spread, low-liquidity names the **spread by itself** can be larger than the target. No amount of skill at picking direction overcomes a cost bigger than the prize.",
  },
  {
    id: "scalping.q8",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "scalping", "scenario", "execution"],
    prompt:
      "A scalper is right on direction most of the time yet still loses money each month. What's the most likely cause?",
    choices: [
      { id: "a", text: "They aren't trading often enough" },
      { id: "b", text: "Spread and commission drag plus occasional large losses outweigh the many tiny wins" },
      { id: "c", text: "Their stocks pay too many dividends" },
      { id: "d", text: "They are using too tight a spread" },
    ],
    correctId: "b",
    explanation:
      "Being right on direction isn't enough when the edge is a few cents. **Cost drag plus the odd large loss** (from slippage or a slow fill) can outweigh a long run of tiny wins.",
  },
  {
    id: "scalping.q9",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "scalping", "scenario", "beginner"],
    prompt:
      "A beginner with a basic web brokerage wants to start by scalping because 'small wins feel safe.' Best guidance?",
    choices: [
      { id: "a", text: "Great idea — it's the most beginner-friendly style" },
      { id: "b", text: "Scalping is tooling-, speed-, and cost-intensive; a basic setup is a structural disadvantage and it's among the least forgiving styles" },
      { id: "c", text: "Fine, as long as they trade illiquid stocks" },
      { id: "d", text: "Safe, because lots of small wins can't add up to a big loss" },
    ],
    correctId: "b",
    explanation:
      "Scalping competes with professional desks and algorithms and demands fast tooling and low costs. A basic web brokerage is a **structural disadvantage**, making it one of the *least* beginner-friendly styles.",
  },
  {
    id: "scalping.q10",
    lessonSlug: "scalping",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "scalping", "misconception"],
    prompt: "What's wrong with the belief that 'lots of small wins is the safest, steadiest way to trade'?",
    choices: [
      { id: "a", text: "Nothing — small wins truly are the safest path" },
      { id: "b", text: "Costs plus a single large loss can erase dozens of wins, making scalping among the least forgiving styles" },
      { id: "c", text: "Small wins are illegal in margin accounts" },
      { id: "d", text: "Small wins only work for buy-and-hold investors" },
    ],
    correctId: "b",
    explanation:
      "The string of small wins is fragile: **costs and one large loss can wipe out dozens of them**, and the speed magnifies every error. Scalping is among the *least* forgiving styles, not the safest.",
  },
];
