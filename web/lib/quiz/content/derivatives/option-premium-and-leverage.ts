import type { Question } from "@/lib/quiz/types";

// Quiz for the "Option Premium & Leverage" lesson.
export const questions: Question[] = [
  {
    id: "option-premium-and-leverage.q1",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "easy",
    tags: ["options", "premium"],
    prompt: "An option's **premium** is made up of which two components?",
    choices: [
      { id: "a", text: "Intrinsic value and time value" },
      { id: "b", text: "Strike value and dividend value", feedback: "Dividends and strike aren't components of premium — it's intrinsic plus time value only." },
      { id: "c", text: "Bid value and ask value" },
      { id: "d", text: "Margin and notional" },
    ],
    correctId: "a",
    explanation:
      "`premium = intrinsic value + time value`. Those are the only two components — nothing else is in there.",
  },
  {
    id: "option-premium-and-leverage.q2",
    lessonSlug: "option-premium-and-leverage",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "intrinsic", "math"],
    unit: "$",
    prompt:
      "A call has strike `$100` and the spot is `$104`; the premium is `$7`. What is the **intrinsic value** per share?",
    choices: [
      { id: "a", text: "$3", feedback: "`$3` is the *time* value (`premium − intrinsic`). Intrinsic is `spot − strike`." },
      { id: "b", text: "$4" },
      { id: "c", text: "$7" },
      { id: "d", text: "$11" },
    ],
    correctId: "b",
    explanation:
      "Intrinsic value (call) = `max(0, spot − strike) = max(0, 104 − 100) = $4`.",
  },
  {
    id: "option-premium-and-leverage.q3",
    lessonSlug: "option-premium-and-leverage",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "time-value", "math"],
    unit: "$",
    prompt:
      "Same option: call strike `$100`, spot `$104`, premium `$7`. What is the **time value** per share?",
    choices: [
      { id: "a", text: "$3" },
      { id: "b", text: "$4", feedback: "`$4` is the *intrinsic* value. Time value is `premium − intrinsic`." },
      { id: "c", text: "$7" },
      { id: "d", text: "$0" },
    ],
    correctId: "a",
    explanation:
      "Time value = `premium − intrinsic = 7 − 4 = $3`.",
  },
  {
    id: "option-premium-and-leverage.q4",
    lessonSlug: "option-premium-and-leverage",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["options", "theta", "math"],
    unit: "$",
    prompt:
      "You paid `$7` for that call (strike `$100`). At expiration the spot is **unchanged** at `$104`. What is the option worth per share?",
    choices: [
      { id: "a", text: "$7", feedback: "At expiration there's no time value left — only intrinsic remains." },
      { id: "b", text: "$4" },
      { id: "c", text: "$3" },
      { id: "d", text: "$0" },
    ],
    correctId: "b",
    explanation:
      "At expiration, time value has decayed to `$0`, so the option = intrinsic = `max(0, 104 − 100) = $4`. You paid `$7`, so that's a `−$3`/share loss (theta) even though the stock didn't move.",
  },
  {
    id: "option-premium-and-leverage.q5",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "medium",
    tags: ["options", "theta", "time-decay"],
    prompt: "**Theta** (time decay) does what to a long option's value over time?",
    choices: [
      { id: "a", text: "Increases its time value as expiry nears" },
      { id: "b", text: "Erodes its time value daily, accelerating near expiry, reaching $0 at expiration" },
      { id: "c", text: "Has no effect until the final day" },
      { id: "d", text: "Only affects the intrinsic value" },
    ],
    correctId: "b",
    explanation:
      "Time value erodes a little each day, *accelerating* as expiration approaches and reaching `$0` at expiry — at which point the option is worth only its intrinsic value. A long option is a **wasting asset**.",
  },
  {
    id: "option-premium-and-leverage.q6",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "medium",
    tags: ["options", "leverage", "risk"],
    prompt: "What is the **maximum loss** on a long (bought) option?",
    choices: [
      { id: "a", text: "The full notional value of the 100 shares" },
      { id: "b", text: "Unlimited" },
      { id: "c", text: "The premium paid (a 100% loss if it expires OTM)" },
      { id: "d", text: "The strike price" },
    ],
    correctId: "c",
    explanation:
      "A long option's max loss is the **premium paid**. If it expires OTM, that's a `100%` loss — total loss is normal, as OTM options routinely expire worthless.",
  },
  {
    id: "option-premium-and-leverage.q7",
    lessonSlug: "option-premium-and-leverage",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["options", "leverage", "math"],
    unit: "$",
    prompt:
      "A `$700` premium controls one contract on a stock trading at `$104`. What **notional** value of stock does it control? (`1 contract = 100 shares`)",
    choices: [
      { id: "a", text: "$700" },
      { id: "b", text: "$1,040" },
      { id: "c", text: "$7,000", feedback: "Multiply the *share price* by 100 shares, not the premium." },
      { id: "d", text: "$10,400" },
    ],
    correctId: "d",
    explanation:
      "Notional = `100 shares × $104 = $10,400`. A `$700` premium controlling `$10,400` of stock is what leverage means — it magnifies the percentage P&L in both directions.",
  },
  {
    id: "option-premium-and-leverage.q8",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "hard",
    tags: ["options", "scenario", "theta"],
    prompt:
      "You buy a call. The stock does rise a little, yet your option still loses money. What most likely happened?",
    choices: [
      { id: "a", text: "Intrinsic value is always negative" },
      { id: "b", text: "The move was too small or too slow to overcome the premium plus time decay" },
      { id: "c", text: "Calls can't profit when the stock rises" },
      { id: "d", text: "The strike automatically resets each day" },
    ],
    correctId: "b",
    explanation:
      "You can be right on direction and still lose. If the move is too *small* (it doesn't beat the premium) or too *slow* (theta decays the time value first), a long option loses — the leverage-plus-decay double threat.",
  },
  {
    id: "option-premium-and-leverage.q9",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "medium",
    tags: ["options", "intrinsic", "moneyness"],
    prompt: "What is the intrinsic value of an **out-of-the-money** option?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "Equal to the full premium" },
      { id: "c", text: "Equal to the time value" },
      { id: "d", text: "A negative number" },
    ],
    correctId: "a",
    explanation:
      "Intrinsic value is never negative; an OTM (or ATM) option has `$0` intrinsic. All of its premium is time value.",
  },
  {
    id: "option-premium-and-leverage.q10",
    lessonSlug: "option-premium-and-leverage",
    type: "single",
    difficulty: "hard",
    tags: ["options", "misconception"],
    prompt:
      "\"If I'm right that the stock goes up, I'll make money on my call.\" Why is this not guaranteed?",
    choices: [
      { id: "a", text: "Calls lose money whenever the stock rises" },
      { id: "b", text: "You can be right on direction yet still lose if the move is too small (under the premium) or too slow (theta)" },
      { id: "c", text: "Intrinsic value falls when the stock rises" },
      { id: "d", text: "Premiums are refunded only if the stock falls" },
    ],
    correctId: "b",
    explanation:
      "Being right on direction isn't enough. If the move is too small to beat the premium, or too slow so time decay erodes the value first, a long call can still lose money.",
  },
];
