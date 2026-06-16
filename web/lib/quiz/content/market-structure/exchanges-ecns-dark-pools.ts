import type { Question } from "@/lib/quiz/types";

// Quiz for the "Exchanges vs ECNs vs Dark Pools" lesson.
export const questions: Question[] = [
  {
    id: "exchanges-ecns-dark-pools.q1",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "dark-pool"],
    prompt: "The defining feature of a **dark pool** is…",
    choices: [
      { id: "a", text: "It is illegal and unregulated", feedback: "Dark pools are ATSs — they register with the SEC and report trades." },
      { id: "b", text: "No pre-trade quote display" },
      { id: "c", text: "It only trades after hours" },
      { id: "d", text: "It guarantees the best price in the market" },
    ],
    correctId: "b",
    explanation:
      "A **dark pool** is an ATS with **no pre-trade quote display**. Orders aren't shown before they trade — that's how big blocks avoid moving the price.",
  },
  {
    id: "exchanges-ecns-dark-pools.q2",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "lit-exchange"],
    prompt: "Which of these is a **lit exchange**?",
    choices: [
      { id: "a", text: "Nasdaq" },
      { id: "b", text: "A FINRA TRF" },
      { id: "c", text: "A clearinghouse" },
      { id: "d", text: "A custodian bank" },
    ],
    correctId: "a",
    explanation:
      "**Nasdaq** (along with NYSE and Cboe) is a **lit exchange** — it displays public quotes that feed the NBBO. A TRF is a reporting facility, not a trading venue.",
  },
  {
    id: "exchanges-ecns-dark-pools.q3",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "reg-nms"],
    prompt: "The **Order Protection Rule (611)** prevents…",
    choices: [
      { id: "a", text: "Trading any stock below $5" },
      { id: "b", text: "Trade-throughs of protected displayed quotes" },
      { id: "c", text: "Brokers from accepting market orders" },
      { id: "d", text: "Dark pools from existing" },
    ],
    correctId: "b",
    explanation:
      "Rule 611 bars **trade-throughs** — executing past a better, protected displayed quote on another venue. It's the glue that makes fragmented venues behave like one market under Reg NMS.",
  },
  {
    id: "exchanges-ecns-dark-pools.q4",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "reg-nms"],
    prompt: "**Reg NMS** (2005) primarily…",
    choices: [
      { id: "a", text: "Sets the maximum spread for every stock" },
      { id: "b", text: "Ties US venues into one National Market System with linked rules" },
      { id: "c", text: "Bans high-frequency trading" },
      { id: "d", text: "Requires all trades to settle in real time" },
    ],
    correctId: "b",
    explanation:
      "**Reg NMS** links US trading venues into the **National Market System**, with rules like Order Protection (611) so a better protected quote can't be ignored across venues.",
  },
  {
    id: "exchanges-ecns-dark-pools.q5",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "ats"],
    prompt: "A **dark pool** is best classified as a type of…",
    choices: [
      { id: "a", text: "Clearinghouse" },
      { id: "b", text: "Lit exchange" },
      { id: "c", text: "ATS (Alternative Trading System)" },
      { id: "d", text: "Index provider" },
    ],
    correctId: "c",
    explanation:
      "A dark pool is a kind of **ATS** — an SEC-registered, non-exchange venue. It must register, file **Form ATS-N**, and report its trades.",
  },
  {
    id: "exchanges-ecns-dark-pools.q6",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "dark-pool", "scenario"],
    prompt:
      "A pension fund routes **500,000 shares** to a dark pool rather than a lit exchange. The main reason is to…",
    choices: [
      { id: "a", text: "Avoid ever reporting the trade" },
      { id: "b", text: "Reduce market impact and information leakage" },
      { id: "c", text: "Escape SEC regulation" },
      { id: "d", text: "Guarantee execution at the day's low" },
    ],
    correctId: "b",
    explanation:
      "Showing a huge order on a lit book moves the price against you. A dark pool lets the fund work the block without pre-trade display, cutting **market impact** and information leakage. The trade is still reported afterward.",
  },
  {
    id: "exchanges-ecns-dark-pools.q7",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "tape"],
    prompt: "After an off-exchange (dark) trade completes, it is reported to the tape via…",
    choices: [
      { id: "a", text: "A FINRA TRF (Trade Reporting Facility)" },
      { id: "b", text: "The opening auction" },
      { id: "c", text: "The clearinghouse only" },
      { id: "d", text: "It is never reported" },
    ],
    correctId: "a",
    explanation:
      "Off-exchange trades are reported through a FINRA **TRF**, so they **print to the tape**. There's no pre-trade display, but the completed trade becomes public.",
  },
  {
    id: "exchanges-ecns-dark-pools.q8",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "price-improvement", "scenario"],
    prompt:
      "The lit offer is `$40.04` but a block fills in a dark pool at the **midpoint `$40.02`**. For the buyer, this `$40.02` fill is…",
    choices: [
      { id: "a", text: "A trade-through violation" },
      { id: "b", text: "Price improvement within the NBBO" },
      { id: "c", text: "Worse than the lit offer" },
      { id: "d", text: "Impossible under Reg NMS" },
    ],
    correctId: "b",
    explanation:
      "Buying at `$40.02` instead of the `$40.04` lit offer is **price improvement** inside the NBBO. Dark pools commonly execute at the midpoint, and Reg NMS is satisfied because no protected quote was traded through.",
  },
  {
    id: "exchanges-ecns-dark-pools.q9",
    lessonSlug: "exchanges-ecns-dark-pools",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "reg-nms", "protected-quote"],
    prompt: "Which quotes are **protected** under the Order Protection Rule?",
    choices: [
      { id: "a", text: "Every quote on every venue, lit or dark" },
      { id: "b", text: "Only automated, displayed top-of-book quotes" },
      { id: "c", text: "Only quotes inside dark pools" },
      { id: "d", text: "Only manual floor quotes" },
    ],
    correctId: "b",
    explanation:
      "Only **automated, displayed top-of-book** quotes are *protected*. Manual quotes and undisplayed (dark) quotes are not — so a trade-through only matters against the automated, displayed best.",
  },
];
