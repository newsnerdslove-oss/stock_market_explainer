import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Options Greeks: Delta, Gamma, Theta, Vega" lesson.
export const questions: Question[] = [
  {
    id: "options-greeks.q1",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "easy",
    tags: ["options", "greeks", "vega"],
    prompt: "Which Greek measures an option's sensitivity to a 1-point change in implied volatility?",
    choices: [
      { id: "a", text: "Vega" },
      { id: "b", text: "Delta", feedback: "Delta tracks the *underlying's* price moves, not IV." },
      { id: "c", text: "Theta", feedback: "Theta is time decay — value lost per day." },
      { id: "d", text: "Gamma" },
    ],
    correctId: "a",
    explanation:
      "**Vega** is the value change per 1-point change in **implied volatility**. Long options have positive vega, so a drop in IV (an *IV crush*) hurts them.",
  },
  {
    id: "options-greeks.q2",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "easy",
    tags: ["options", "greeks", "delta"],
    prompt: "A long call's delta falls within which range?",
    choices: [
      { id: "a", text: "`0` to `+1`" },
      { id: "b", text: "`−1` to `0`", feedback: "That's a long *put's* range." },
      { id: "c", text: "`−1` to `+1`" },
      { id: "d", text: "`0` to `+100`" },
    ],
    correctId: "a",
    explanation:
      "A long call's delta runs `0` to `+1`: as the stock rises, the call gains value, up to roughly dollar-for-dollar deep in-the-money.",
  },
  {
    id: "options-greeks.q3",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "easy",
    tags: ["options", "greeks", "theta"],
    prompt: "What does **theta** describe for a long option?",
    choices: [
      { id: "a", text: "The value lost each day to time decay" },
      { id: "b", text: "The value gained each day from time" },
      { id: "c", text: "The change in delta per `$1` move" },
      { id: "d", text: "The sensitivity to IV" },
    ],
    correctId: "a",
    explanation:
      "**Theta** is the daily time decay. For long options it's **negative**, and the bleed accelerates near expiry — why you can be right on direction yet still lose.",
  },
  {
    id: "options-greeks.q4",
    lessonSlug: "options-greeks",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "greeks", "math"],
    unit: "$",
    prompt:
      "Delta is `0.40` and theta is `−0.05`. The stock rises `+$1` and one day passes (IV flat). What's the approximate change per share?",
    choices: [
      { id: "a", text: "+$0.45", feedback: "That adds theta instead of subtracting it." },
      { id: "b", text: "+$0.35" },
      { id: "c", text: "+$0.40", feedback: "That ignores the day of time decay." },
      { id: "d", text: "−$0.05" },
    ],
    correctId: "b",
    explanation:
      "`+1.00 × 0.40 (delta) = +$0.40`, then `−$0.05 (theta)` for the day → `+$0.40 − $0.05 = +$0.35`/share.",
  },
  {
    id: "options-greeks.q5",
    lessonSlug: "options-greeks",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "greeks", "vega", "math"],
    unit: "$",
    prompt: "Vega is `0.12`. If implied volatility falls by `3` points, what's the approximate change per share from vega alone?",
    choices: [
      { id: "a", text: "−$0.36" },
      { id: "b", text: "−$0.12", feedback: "That's a 1-point change; here IV moved 3 points." },
      { id: "c", text: "+$0.36", feedback: "Falling IV lowers a long option's value." },
      { id: "d", text: "−$3.00" },
    ],
    correctId: "a",
    explanation:
      "`vega × points = 0.12 × 3 = $0.36`, and since IV **fell**, a long option loses → `−$0.36`/share.",
  },
  {
    id: "options-greeks.q6",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "medium",
    tags: ["options", "greeks", "scenario", "vega", "theta"],
    prompt:
      "You buy a call, the stock rises all afternoon, yet the option **loses** value the same day. What most likely happened?",
    choices: [
      { id: "a", text: "IV dropped (vega) and/or theta outweighed the small delta gain" },
      { id: "b", text: "Delta turned negative on a call", feedback: "A long call's delta stays between 0 and +1." },
      { id: "c", text: "The strike automatically reset higher" },
      { id: "d", text: "Gamma made the option expire early" },
    ],
    correctId: "a",
    explanation:
      "A falling IV (negative vega impact) and/or a day of theta can more than offset a small delta gain. Being right on direction doesn't guarantee a profit.",
  },
  {
    id: "options-greeks.q7",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "hard",
    tags: ["options", "greeks", "scenario", "gamma", "theta"],
    prompt:
      "Compare a 3-day near-the-money call to a 90-day near-the-money call. What's true of the 3-day option?",
    choices: [
      { id: "a", text: "It has larger gamma and faster theta" },
      { id: "b", text: "It has smaller gamma and slower theta", feedback: "Near-the-money short-dated options have the *most* gamma and decay." },
      { id: "c", text: "It is immune to time decay" },
      { id: "d", text: "Its delta can never change" },
    ],
    correctId: "a",
    explanation:
      "Gamma and theta both **spike near expiry**: the 3-day option's delta swings fast on small moves and it bleeds value quickly. The 90-day option is far steadier.",
  },
  {
    id: "options-greeks.q8",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "hard",
    tags: ["options", "greeks", "delta", "misconception"],
    prompt: "Why is it wrong to treat delta as 'the probability my option pays off'?",
    choices: [
      { id: "a", text: "Delta only *approximates* probability-of-ITM; it is fundamentally a price-sensitivity measure" },
      { id: "b", text: "Delta is always exactly the probability of profit" },
      { id: "c", text: "Delta has nothing to do with the underlying's price" },
      { id: "d", text: "Delta is fixed and never changes" },
    ],
    correctId: "a",
    explanation:
      "Delta is a **price sensitivity** (value change per `$1` move). It's only a *loose* proxy for probability-of-ITM — and it shifts constantly as gamma kicks in.",
  },
  {
    id: "options-greeks.q9",
    lessonSlug: "options-greeks",
    type: "single",
    difficulty: "medium",
    tags: ["options", "greeks", "concept"],
    prompt: "Which statement about the Greeks is most accurate?",
    choices: [
      { id: "a", text: "They are theoretical, dynamic estimates that change as price, time, and IV move" },
      { id: "b", text: "They are fixed guarantees set at the time of purchase" },
      { id: "c", text: "They only matter for short positions" },
      { id: "d", text: "They replace the need to think about the stock" },
    ],
    correctId: "a",
    explanation:
      "The Greeks are **theoretical sensitivities** from a pricing model — estimates, not guarantees — and they're **dynamic**, shifting as the stock, calendar, and volatility change.",
  },
];
