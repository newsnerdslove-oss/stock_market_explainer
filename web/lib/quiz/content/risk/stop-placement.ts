import type { Question } from "@/lib/quiz/types";

// Quiz for the "Stop Placement: Where the Stop Belongs" lesson.
export const questions: Question[] = [
  {
    id: "stop-placement.q1",
    lessonSlug: "stop-placement",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["risk", "stop-placement", "atr", "math"],
    prompt:
      "A long at entry `$80` with ATR `$2`, using a `2 × ATR` volatility stop. Where's the stop?",
    choices: [
      { id: "a", text: "$78" },
      { id: "b", text: "$76" },
      { id: "c", text: "$84", feedback: "That places the stop *above* a long entry — the stop goes below for a long." },
      { id: "d", text: "$72" },
    ],
    correctId: "b",
    explanation:
      "`Stop = Entry − (k × ATR) = $80 − (2 × $2) = $80 − $4 = $76`.",
  },
  {
    id: "stop-placement.q2",
    lessonSlug: "stop-placement",
    type: "numericChoice",
    difficulty: "medium",
    unit: "shares",
    tags: ["risk", "stop-placement", "sizing", "math"],
    prompt:
      "Account `$10,000`, risk `1%`, entry `$50`, structure stop `$47.80`. How many shares (rounded down)?",
    choices: [
      { id: "a", text: "50" },
      { id: "b", text: "45" },
      { id: "c", text: "46", feedback: "45.45 rounds *down* to 45 so you stay within your intended risk." },
      { id: "d", text: "200" },
    ],
    correctId: "b",
    explanation:
      "Dollar risk = `$100`. Risk per share = `$50 − $47.80 = $2.20`. Shares = `$100 ÷ $2.20 = 45.45 → 45` (round down).",
  },
  {
    id: "stop-placement.q3",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "stop-placement", "scenario", "whipsaw"],
    prompt:
      "You keep getting stopped out right before the move runs in your favor. What's the most likely fix?",
    choices: [
      { id: "a", text: "Use a wider structure or ATR stop, placed with a buffer beyond the level", feedback: undefined },
      { id: "b", text: "Tighten the stop further to cut losses faster", feedback: "Tightening makes whipsaw worse — you'll be shaken out by even smaller wiggles." },
      { id: "c", text: "Remove the stop so you're never taken out" },
      { id: "d", text: "Move the stop down a little each time price approaches it" },
    ],
    correctId: "a",
    explanation:
      "Being stopped right before the move is classic **whipsaw** — the stop is inside normal noise. Give it room with a wider structure/ATR stop and a buffer just beyond the level.",
  },
  {
    id: "stop-placement.q4",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "stop-placement", "process", "order"],
    prompt:
      "What's the correct order of decisions?",
    choices: [
      { id: "a", text: "Decide share count first, then place the stop to fit it" },
      { id: "b", text: "Place the stop from structure first, then size the position to it" },
      { id: "c", text: "Pick a round-number stop, then double the shares" },
      { id: "d", text: "Set the target first, then ignore the stop" },
    ],
    correctId: "b",
    explanation:
      "**Stop first, size second.** The stop comes from where the idea is wrong (structure/volatility); the share count is then computed from that distance.",
  },
  {
    id: "stop-placement.q5",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "stop-placement", "concept"],
    prompt:
      "Where should a stop-loss be placed, in principle?",
    choices: [
      { id: "a", text: "At a comfortable round dollar number" },
      { id: "b", text: "Where the trade idea is proven wrong" },
      { id: "c", text: "Exactly 5% below the entry, always" },
      { id: "d", text: "At the lowest price the stock has ever traded" },
    ],
    correctId: "b",
    explanation:
      "A stop marks the price at which your thesis is **invalidated** — typically just beyond support (long) or resistance (short), not an arbitrary round number.",
  },
  {
    id: "stop-placement.q6",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "stop-placement", "misconception"],
    prompt:
      "Why isn't *\"a tighter stop is always safer\"* true?",
    choices: [
      { id: "a", text: "Tighter stops are illegal on most exchanges" },
      { id: "b", text: "It lowers per-share risk but raises the odds of being whipsawed out by noise" },
      { id: "c", text: "Tighter stops always increase the dollar risk" },
      { id: "d", text: "A tighter stop guarantees a smaller share count" },
    ],
    correctId: "b",
    explanation:
      "A tighter stop does cut the per-share loss, but it sits closer to normal price noise, so you're more likely to be shaken out before the move. The right stop is where the idea is wrong — not the smallest possible number.",
  },
  {
    id: "stop-placement.q7",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "stop-placement", "stop-hunting"],
    prompt:
      "Support is a clean `$48.00`. Why place the stop at `$47.80` rather than exactly `$48.00`?",
    choices: [
      { id: "a", text: "Round numbers and obvious levels attract stop-hunting; a buffer avoids it" },
      { id: "b", text: "$47.80 always gives a 2:1 reward ratio" },
      { id: "c", text: "Brokers reject stops at round numbers" },
      { id: "d", text: "It makes the position larger" },
    ],
    correctId: "a",
    explanation:
      "Round numbers and obvious swing levels are crowded with stops and prone to brief spikes through them (**stop-hunting**). A small buffer beyond the level keeps you from being knocked out on a wick.",
  },
  {
    id: "stop-placement.q8",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "stop-placement", "gap", "edge-case"],
    prompt:
      "Bad news gaps the stock straight down through your `$48` stop, which fills at the `$45` open. What does this show about stops?",
    choices: [
      { id: "a", text: "A stop limits intended risk but not gap risk; a real loss can exceed 1R" },
      { id: "b", text: "Stops always fill at the exact stop price" },
      { id: "c", text: "The stop failed and should be removed next time" },
      { id: "d", text: "Gaps can never move through a stop" },
    ],
    correctId: "a",
    explanation:
      "A stop triggers a market order, which fills at the next available price — on a gap that can be well below the stop. Stops cap *intended* risk, not overnight gap risk, so a loss can exceed `1R`.",
  },
  {
    id: "stop-placement.q9",
    lessonSlug: "stop-placement",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "stop-placement", "discipline"],
    prompt:
      "After entering, the trade goes against you and approaches your stop. What's the disciplined action?",
    choices: [
      { id: "a", text: "Let the stop do its job; never widen it to avoid the loss" },
      { id: "b", text: "Widen the stop to give the trade more room" },
      { id: "c", text: "Add more shares to lower your average cost" },
      { id: "d", text: "Cancel the stop and hope it recovers" },
    ],
    correctId: "a",
    explanation:
      "Widening a stop after entry abandons your predefined risk and turns a 1R loss into something larger. The stop was set where the idea is wrong — honor it.",
  },
];
