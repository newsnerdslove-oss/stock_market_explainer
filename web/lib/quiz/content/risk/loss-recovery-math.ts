import type { Question } from "@/lib/quiz/types";

// Quiz for the "Loss Recovery Math: The Cost of Getting Even" lesson.
export const questions: Question[] = [
  {
    id: "loss-recovery-math.q1",
    lessonSlug: "loss-recovery-math",
    type: "numericChoice",
    difficulty: "easy",
    unit: "%",
    tags: ["risk", "loss-recovery", "math"],
    prompt:
      "You lose `20%`. What gain is needed to get back to even?",
    choices: [
      { id: "a", text: "20%", feedback: "That assumes symmetry — but you're rebuilding from a smaller base." },
      { id: "b", text: "25%" },
      { id: "c", text: "22%" },
      { id: "d", text: "40%" },
    ],
    correctId: "b",
    explanation:
      "`Gain = Loss ÷ (1 − Loss) = 0.20 ÷ 0.80 = 0.25 = +25%`.",
  },
  {
    id: "loss-recovery-math.q2",
    lessonSlug: "loss-recovery-math",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["risk", "loss-recovery", "compounding", "math"],
    prompt:
      "From `$10,000`, you take two `−10%` losses in a row. What's the balance?",
    choices: [
      { id: "a", text: "$8,000", feedback: "That subtracts 20% flat; the second 10% is taken on the already-reduced $9,000." },
      { id: "b", text: "$8,100" },
      { id: "c", text: "$8,200" },
      { id: "d", text: "$9,000" },
    ],
    correctId: "b",
    explanation:
      "`$10,000 × 0.90 = $9,000`, then `$9,000 × 0.90 = $8,100`. That's `0.90 × 0.90 = 0.81`, a combined `−19%` (not −20%).",
  },
  {
    id: "loss-recovery-math.q3",
    lessonSlug: "loss-recovery-math",
    type: "numericChoice",
    difficulty: "hard",
    unit: "%",
    tags: ["risk", "loss-recovery", "math"],
    prompt:
      "After a `−40%` loss, what gain is needed to recover?",
    choices: [
      { id: "a", text: "40%" },
      { id: "b", text: "50%" },
      { id: "c", text: "66.7%" },
      { id: "d", text: "80%", feedback: "Close to double, but `0.40 ÷ 0.60 = 0.667`, i.e. +66.7%." },
    ],
    correctId: "c",
    explanation:
      "`Gain = 0.40 ÷ (1 − 0.40) = 0.40 ÷ 0.60 ≈ 66.7%`.",
  },
  {
    id: "loss-recovery-math.q4",
    lessonSlug: "loss-recovery-math",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "loss-recovery", "scenario", "comparison"],
    prompt:
      "Trader A is down `−10%`; Trader B is down `−50%`. Who is better positioned to recover, and why?",
    choices: [
      { id: "a", text: "A — needs only +11.1% versus B's +100%", feedback: undefined },
      { id: "b", text: "B — a bigger loss means a bigger bounce" },
      { id: "c", text: "They're equal — both just need to make back what they lost" },
      { id: "d", text: "B — being down more leaves more room to grow" },
    ],
    correctId: "a",
    explanation:
      "A needs `0.10 ÷ 0.90 = +11.1%`; B needs `0.50 ÷ 0.50 = +100%`. The shallow loss recovers near-symmetrically, the deep one requires doubling — keeping losses small keeps recovery easy.",
  },
  {
    id: "loss-recovery-math.q5",
    lessonSlug: "loss-recovery-math",
    type: "single",
    difficulty: "easy",
    tags: ["risk", "loss-recovery", "formula"],
    prompt:
      "What is the loss-recovery formula?",
    choices: [
      { id: "a", text: "Gain needed = Loss ÷ (1 − Loss)" },
      { id: "b", text: "Gain needed = Loss × (1 + Loss)" },
      { id: "c", text: "Gain needed = Loss ÷ (1 + Loss)" },
      { id: "d", text: "Gain needed = Loss (recovery is always symmetric)" },
    ],
    correctId: "a",
    explanation:
      "`Gain needed = Loss ÷ (1 − Loss)`. Because you rebuild from a smaller base, the required gain always exceeds the loss.",
  },
  {
    id: "loss-recovery-math.q6",
    lessonSlug: "loss-recovery-math",
    type: "single",
    difficulty: "hard",
    tags: ["risk", "loss-recovery", "misconception"],
    prompt:
      "Why is *\"lose 20%, a 20% gain gets me back\"* wrong?",
    choices: [
      { id: "a", text: "It's right — gains and losses are symmetric" },
      { id: "b", text: "After −20% you hold 80%, so you need +25% on that smaller base" },
      { id: "c", text: "You actually need only +18%" },
      { id: "d", text: "A 20% loss can never be recovered" },
    ],
    correctId: "b",
    explanation:
      "`0.20 ÷ (1 − 0.20) = 0.20 ÷ 0.80 = +25%`. The gain is computed on the reduced base, so it always exceeds the loss — and the gap widens as losses deepen.",
  },
  {
    id: "loss-recovery-math.q7",
    lessonSlug: "loss-recovery-math",
    type: "single",
    difficulty: "medium",
    tags: ["risk", "loss-recovery", "concept", "asymmetry"],
    prompt:
      "Which statement about gains and losses compounding is correct?",
    choices: [
      { id: "a", text: "Both compound identically in your favor" },
      { id: "b", text: "Gains compound favorably; losses compound unfavorably, so avoiding deep losses beats chasing gains" },
      { id: "c", text: "Losses compound in your favor over time" },
      { id: "d", text: "Compounding has no effect on recovery" },
    ],
    correctId: "b",
    explanation:
      "Recovery is asymmetric: each loss shrinks the base, so the gain needed grows faster than the loss. Protecting capital from deep losses matters more than reaching for big gains.",
  },
  {
    id: "loss-recovery-math.q8",
    lessonSlug: "loss-recovery-math",
    type: "numericChoice",
    difficulty: "hard",
    unit: "%",
    tags: ["risk", "loss-recovery", "compounding", "math"],
    prompt:
      "Ten consecutive `−5%` losses leave you down about `−40%` (`0.95^10 ≈ 0.60`). What gain undoes that?",
    choices: [
      { id: "a", text: "40%" },
      { id: "b", text: "50%", feedback: "That's the recovery for −33%; from −40% you need 0.40 ÷ 0.60 ≈ 66.7%." },
      { id: "c", text: "66.7%" },
      { id: "d", text: "100%" },
    ],
    correctId: "c",
    explanation:
      "`0.95^10 ≈ 0.5987`, about `−40%`. Recovery = `0.40 ÷ 0.60 ≈ +66.7%`. Frequent small losses quietly compound into a deep hole.",
  },
  {
    id: "loss-recovery-math.q9",
    lessonSlug: "loss-recovery-math",
    type: "numericChoice",
    difficulty: "easy",
    unit: "%",
    tags: ["risk", "loss-recovery", "table", "math"],
    prompt:
      "Using the table, what gain recovers a `−10%` loss?",
    choices: [
      { id: "a", text: "10%" },
      { id: "b", text: "11.11%" },
      { id: "c", text: "12.5%" },
      { id: "d", text: "9.09%" },
    ],
    correctId: "b",
    explanation:
      "`0.10 ÷ (1 − 0.10) = 0.10 ÷ 0.90 ≈ 11.11%`. Small losses stay close to symmetric, which is the whole case for keeping losses small.",
  },
];
