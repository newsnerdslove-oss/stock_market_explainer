import type { Question } from "@/lib/quiz/types";

// Quiz for the "Choosing & Matching a Trading Style" lesson.
export const questions: Question[] = [
  {
    id: "choosing-and-matching-a-trading-style.q1",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "matching", "spectrum"],
    prompt: "On the **active↔passive spectrum**, which style sits at the *most passive* end?",
    choices: [
      { id: "a", text: "Scalping" },
      { id: "b", text: "Day trading" },
      { id: "c", text: "Buy-and-hold investing" },
      { id: "d", text: "Swing trading" },
    ],
    correctId: "c",
    explanation:
      "**Buy-and-hold investing** is the most passive style — years to decades, minimal trading — letting compounding and long-term market drift do the work. Scalping is the most active end.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q2",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "easy",
    tags: ["styles", "matching", "fit-factors"],
    prompt: "The lesson says the *best* trading style for you is mainly the one that…",
    choices: [
      { id: "a", text: "Has the highest theoretical return on paper" },
      { id: "b", text: "You can actually execute given your time, capital, temperament, and goals" },
      { id: "c", text: "Trades the most frequently" },
      { id: "d", text: "Your favorite influencer uses" },
    ],
    correctId: "b",
    explanation:
      "A style you can't stick to has a return of roughly zero. The right style is the one you can **actually execute** given your time, capital, temperament, and goals — not the highest theoretical return.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q3",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "matching", "screen-time"],
    prompt:
      "Someone with a full-time day job who can only review the market in the evening is **best matched** to…",
    choices: [
      { id: "a", text: "Scalping, holding positions for seconds to minutes" },
      { id: "b", text: "Day trading, watching screens all session" },
      { id: "c", text: "Swing or position trading / investing, which need far less screen time" },
      { id: "d", text: "Whichever style has the highest win rate" },
    ],
    correctId: "c",
    explanation:
      "Scalping and day trading demand constant **screen time**. Someone limited to evening check-ins fits the slower end — **swing, position, or buy-and-hold** — where decisions are infrequent.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q4",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "taxes", "irs"],
    prompt:
      "Under **IRS Topic 409**, a gain on a stock held **one year or less** is…",
    choices: [
      { id: "a", text: "Short-term, taxed as ordinary income at your graduated rate" },
      { id: "b", text: "Long-term, taxed at 0%, 15%, or 20%", feedback: "Long-term treatment requires holding *more than one year*; one year or less is short-term." },
      { id: "c", text: "Always tax-free" },
      { id: "d", text: "Taxed only when you withdraw from the account" },
    ],
    correctId: "a",
    explanation:
      "A holding of **one year or less is short-term**, taxed as **ordinary income**. Holding **more than one year** makes it long-term (0/15/20%). Active styles realize gains constantly at the higher short-term rate.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q5",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "medium",
    tags: ["styles", "pdt", "regulation", "2026"],
    prompt:
      "What happened to the **$25,000 pattern-day-trader minimum** as of June 4, 2026?",
    choices: [
      { id: "a", text: "It was raised to $50,000" },
      { id: "b", text: "It now applies to every account, including cash accounts" },
      { id: "c", text: "Nothing changed; it is still in force unchanged" },
      { id: "d", text: "FINRA eliminated it (RN 26-10), replacing it with real-time intraday margin standards, phasing in through Oct 20, 2027" },
    ],
    correctId: "d",
    explanation:
      "FINRA eliminated the PDT rule and its **$25,000** minimum effective **June 4, 2026** (Regulatory Notice 26-10), replacing them with **intraday margin** standards under Rule 4210, with an **18-month phase-in through Oct 20, 2027**. Lower capital barrier — same difficulty.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q6",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "evidence", "passive", "spiva"],
    prompt:
      "What do S&P's **SPIVA** scorecards show over a 15-year horizon for U.S. large-cap active funds?",
    choices: [
      { id: "a", text: "More than 90% of them underperformed their benchmark index after costs" },
      { id: "b", text: "Roughly 90% of them beat their benchmark" },
      { id: "c", text: "They matched the index almost exactly" },
      { id: "d", text: "About half outperformed and half underperformed" },
    ],
    correctId: "a",
    explanation:
      "Over **15 years**, no major fund category has had a *majority* of active managers beat its benchmark, and for U.S. **large-cap** funds **more than 90%** underperformed after costs. These are full-time pros — retail day traders fare worse.",
  },
  {
    id: "choosing-and-matching-a-trading-style.q7",
    lessonSlug: "choosing-and-matching-a-trading-style",
    type: "single",
    difficulty: "hard",
    tags: ["styles", "misconception", "synthesis", "scenario"],
    prompt:
      "A friend says: *'Since the $25k rule is gone in 2026, the most active style must make the most money.'* What's the soundest response?",
    choices: [
      { id: "a", text: "Correct — easier access means higher returns" },
      { id: "b", text: "After costs and taxes, frequency usually raises cost and error, not returns — most active traders underperform a buy-and-hold index" },
      { id: "c", text: "True, but only for cash accounts" },
      { id: "d", text: "Removing the rule guarantees unlimited buying power and profits" },
    ],
    correctId: "b",
    explanation:
      "Removing the $25k barrier lowered the **capital** required, not the **difficulty**. Higher frequency multiplies **cost and error**, not returns, and the evidence (SPIVA; day-trading studies) shows most active traders underperform a simple **buy-and-hold index**. Educational content, not advice.",
  },
];
