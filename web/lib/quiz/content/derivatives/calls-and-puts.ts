import type { Question } from "@/lib/quiz/types";

// Quiz for the "Calls and Puts" lesson.
export const questions: Question[] = [
  {
    id: "calls-and-puts.q1",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "easy",
    tags: ["options", "call", "put"],
    prompt: "A **call** option gives the buyer the right to…",
    choices: [
      { id: "a", text: "Buy the underlying at the strike price" },
      { id: "b", text: "Sell the underlying at the strike price", feedback: "That's a *put*. A call is the right to *buy*." },
      { id: "c", text: "Force the seller to buy shares from them" },
      { id: "d", text: "Collect a guaranteed dividend" },
    ],
    correctId: "a",
    explanation:
      "A **call** is the right (not the obligation) to **buy** the underlying at the strike. A **put** is the right to **sell**.",
  },
  {
    id: "calls-and-puts.q2",
    lessonSlug: "calls-and-puts",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "call", "payoff", "math"],
    unit: "$",
    prompt:
      "A call has a strike of `$100`. At expiration the spot is `$108`. What is the **payoff per share**?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$8" },
      { id: "c", text: "$108" },
      { id: "d", text: "$208", feedback: "Payoff is `max(0, spot − strike) = 108 − 100`, not the sum of the two prices." },
    ],
    correctId: "b",
    explanation:
      "Call payoff = `max(0, spot − strike) = max(0, 108 − 100) = $8` per share.",
  },
  {
    id: "calls-and-puts.q3",
    lessonSlug: "calls-and-puts",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "put", "profit", "math"],
    unit: "$",
    prompt:
      "You buy `1` put, strike `$50`, premium `$2` (cost `$200`). At expiration the spot is `$44`. What is your **net profit**?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$400" },
      { id: "c", text: "$600", feedback: "`$600` is the payoff; subtract the `$200` premium to get net profit." },
      { id: "d", text: "$800" },
    ],
    correctId: "b",
    explanation:
      "Payoff = `max(0, 50 − 44) = $6` → `6 × 100 = $600`. Net profit = `payoff − premium = $600 − $200 = +$400`.",
  },
  {
    id: "calls-and-puts.q4",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "easy",
    tags: ["options", "moneyness"],
    prompt: "A call has a strike of `$70` while the stock trades at `$65`. This call is…",
    choices: [
      { id: "a", text: "In-the-money" },
      { id: "b", text: "At-the-money" },
      { id: "c", text: "Out-of-the-money" },
      { id: "d", text: "Already assigned" },
    ],
    correctId: "c",
    explanation:
      "For a call, **OTM** means `spot < strike`. With spot `$65` below the `$70` strike, this call is out-of-the-money.",
  },
  {
    id: "calls-and-puts.q5",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "medium",
    tags: ["options", "put", "payoff"],
    prompt: "The payoff at expiration for a **put** buyer is…",
    choices: [
      { id: "a", text: "`max(0, spot − strike)`", feedback: "That's the *call* payoff. A put pays when the spot falls *below* the strike." },
      { id: "b", text: "`max(0, strike − spot)`" },
      { id: "c", text: "`strike − spot` (which can be negative)" },
      { id: "d", text: "`premium − strike`" },
    ],
    correctId: "b",
    explanation:
      "Put payoff = `max(0, strike − spot)` — never negative for the buyer. The only thing the buyer can lose is the premium.",
  },
  {
    id: "calls-and-puts.q6",
    lessonSlug: "calls-and-puts",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "call", "profit", "math"],
    unit: "$",
    prompt:
      "You buy `1` call, strike `$100`, premium `$5` (cost `$500`). At expiration the spot is `$108`. What is your **net profit**?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$300" },
      { id: "c", text: "$500" },
      { id: "d", text: "$800", feedback: "`$800` is the payoff; you still need to subtract the `$500` premium." },
    ],
    correctId: "b",
    explanation:
      "Payoff = `max(0, 108 − 100) = $8` → `$800`. Net profit = `$800 − $500 = +$300`. ITM *and* a net winner here.",
  },
  {
    id: "calls-and-puts.q7",
    lessonSlug: "calls-and-puts",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "put", "risk", "math"],
    unit: "$",
    prompt:
      "You buy `1` put, strike `$50`, premium `$2` (cost `$200`). At expiration the spot is `$52`. What is your **net profit/loss**?",
    choices: [
      { id: "a", text: "−$200" },
      { id: "b", text: "$0" },
      { id: "c", text: "+$200", feedback: "The put is OTM at `$52`, so payoff is `$0` — you lose the premium, not gain it." },
      { id: "d", text: "−$52" },
    ],
    correctId: "a",
    explanation:
      "Payoff = `max(0, 50 − 52) = $0` (the put is OTM). You lose the full `$200` premium → `−$200`.",
  },
  {
    id: "calls-and-puts.q8",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "medium",
    tags: ["options", "seller", "risk"],
    prompt: "Compared with the buyer, the **seller (writer)** of an option…",
    choices: [
      { id: "a", text: "Pays the premium and owns the right" },
      { id: "b", text: "Receives the premium and takes on the obligation if assigned" },
      { id: "c", text: "Has zero risk in all cases" },
      { id: "d", text: "Can never be assigned before expiration" },
    ],
    correctId: "b",
    explanation:
      "The **writer** receives the premium and takes the obligation to perform if assigned. A naked call seller faces *theoretically unlimited* loss — and American-style options can be assigned early.",
  },
  {
    id: "calls-and-puts.q9",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "hard",
    tags: ["options", "covered-call", "scenario", "assignment"],
    prompt:
      "You wrote a **covered call** on stock you own. The stock jumps well above the strike and you're assigned. What happens?",
    choices: [
      { id: "a", text: "You must sell your shares at the strike, forgoing the upside above it, but you keep the premium" },
      { id: "b", text: "You buy more shares at the strike and keep all the upside", feedback: "As the call writer you're obligated to *sell* at the strike, not buy." },
      { id: "c", text: "You owe an unlimited loss because the stock rose" },
      { id: "d", text: "Nothing happens until expiration day exactly" },
    ],
    correctId: "a",
    explanation:
      "When assigned on a covered call, you must **sell** your shares at the strike. You keep the premium, but you give up any gain above the strike. American-style assignment can occur before expiry.",
  },
  {
    id: "calls-and-puts.q10",
    lessonSlug: "calls-and-puts",
    type: "single",
    difficulty: "hard",
    tags: ["options", "misconception"],
    prompt:
      "Why is \"buying a call is the same as buying the stock\" a misconception?",
    choices: [
      { id: "a", text: "Calls always outperform the stock" },
      { id: "b", text: "A call has a strike, an expiration, and a decaying premium — the stock must clear the strike by enough before expiry or you can lose 100%" },
      { id: "c", text: "Stocks expire worthless but calls never do" },
      { id: "d", text: "Calls pay dividends and shares do not" },
    ],
    correctId: "b",
    explanation:
      "A call is a time-limited contract with a strike and a decaying premium. You need the stock to clear the strike by *enough* to recover the premium before expiry — and can lose `100%`, unlike a share owner facing a small dip.",
  },
];
