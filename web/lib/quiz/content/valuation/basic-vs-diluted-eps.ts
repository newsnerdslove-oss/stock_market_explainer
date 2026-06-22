import type { Question } from "@/lib/quiz/types";

// Quiz for the "Basic vs. diluted EPS" lesson.
export const questions: Question[] = [
  {
    id: "basic-vs-diluted-eps.q1",
    lessonSlug: "basic-vs-diluted-eps",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps", "diluted"],
    prompt: "What is the formula for **basic** EPS?",
    choices: [
      { id: "a", text: "Net income ÷ shares outstanding, ignoring preferred dividends", feedback: "Preferred dividends must come out of the top first — they aren't profit attributable to common stock." },
      { id: "b", text: "(Net income − preferred dividends) ÷ weighted-average common shares" },
      { id: "c", text: "(Net income + preferred dividends) ÷ shares outstanding" },
      { id: "d", text: "Share price ÷ weighted-average common shares" },
    ],
    correctId: "b",
    explanation:
      "**Basic EPS = (net income − preferred dividends) ÷ weighted-average common shares.** Preferred dividends are subtracted because that cash belongs to preferred holders, not common.",
  },
  {
    id: "basic-vs-diluted-eps.q2",
    lessonSlug: "basic-vs-diluted-eps",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps", "diluted"],
    prompt: "How does **diluted** EPS differ from basic EPS?",
    choices: [
      { id: "a", text: "It assumes all dilutive convertibles, options, and warrants become common shares, raising the share count" },
      { id: "b", text: "It uses a higher net income figure", feedback: "The profit base is essentially the same — what changes is the share count in the denominator." },
      { id: "c", text: "It removes preferred shareholders from the calculation entirely" },
      { id: "d", text: "It uses the year-end share count instead of a weighted average" },
    ],
    correctId: "a",
    explanation:
      "Diluted EPS assumes every **dilutive** option, warrant, and convertible turns into common stock. More shares in the denominator means a lower, more conservative EPS.",
  },
  {
    id: "basic-vs-diluted-eps.q3",
    lessonSlug: "basic-vs-diluted-eps",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "eps", "diluted", "concept"],
    prompt: "Compared with basic EPS, diluted EPS is always…",
    choices: [
      { id: "a", text: "Higher, because it counts more shares" },
      { id: "b", text: "Exactly equal, every time" },
      { id: "c", text: "Less than or equal to basic EPS" },
      { id: "d", text: "Unpredictable — it can be higher or lower", feedback: "It can never exceed basic EPS; antidilutive securities that would raise it are excluded by rule." },
    ],
    correctId: "c",
    explanation:
      "Because the same profit is spread over **more** shares, diluted EPS is by definition **≤ basic EPS**. That conservatism is why investors anchor on it.",
  },
  {
    id: "basic-vs-diluted-eps.q4",
    lessonSlug: "basic-vs-diluted-eps",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["valuation", "eps", "diluted", "math"],
    prompt:
      "A company earns `$120M`, pays `$20M` in preferred dividends, and has a weighted-average `40M` common shares. What is its **basic** EPS?",
    choices: [
      { id: "a", text: "$3.50", feedback: "That divides $140M by 40M — but preferred dividends are *subtracted*, not added, from net income." },
      { id: "b", text: "$3.00", feedback: "That's $120M ÷ 40M — you still need to subtract the $20M of preferred dividends first." },
      { id: "c", text: "$2.50" },
      { id: "d", text: "$2.00" },
    ],
    correctId: "c",
    explanation:
      "`Basic EPS = (120 − 20) ÷ 40 = 100 ÷ 40 = $2.50`. Preferred dividends come out of the numerator before dividing.",
  },
  {
    id: "basic-vs-diluted-eps.q5",
    lessonSlug: "basic-vs-diluted-eps",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["valuation", "eps", "diluted", "math", "scenario"],
    prompt:
      "Same company: `$100M` available to common after preferred dividends, `40M` weighted-average shares. Its options, if exercised, would add `10M` net new shares. What is **diluted** EPS?",
    choices: [
      { id: "a", text: "$2.50", feedback: "That's the *basic* EPS (100 ÷ 40). Diluted EPS must add the 10M new shares to the denominator." },
      { id: "b", text: "$2.00" },
      { id: "c", text: "$1.67" },
      { id: "d", text: "$2.78" },
    ],
    correctId: "b",
    explanation:
      "`Diluted EPS = 100 ÷ (40 + 10) = 100 ÷ 50 = $2.00`. Same profit, more shares — the dilution drops EPS from $2.50 to $2.00.",
  },
  {
    id: "basic-vs-diluted-eps.q6",
    lessonSlug: "basic-vs-diluted-eps",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "eps", "diluted", "antidilutive"],
    prompt: "A security is **antidilutive** when…",
    choices: [
      { id: "a", text: "Its assumed conversion would *raise* EPS rather than lower it" },
      { id: "b", text: "It has already been converted into common shares" },
      { id: "c", text: "It pays a fixed dividend to preferred holders", feedback: "That describes preferred stock generally — antidilutive is specifically about a security whose conversion would lift EPS." },
      { id: "d", text: "It lowers EPS by the largest amount of any security" },
    ],
    correctId: "a",
    explanation:
      "An **antidilutive** security is one whose assumed conversion would *increase* EPS (e.g., out-of-the-money options). Including it would inflate the number, so it's excluded.",
  },
  {
    id: "basic-vs-diluted-eps.q7",
    lessonSlug: "basic-vs-diluted-eps",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "eps", "diluted", "antidilutive", "concept"],
    prompt: "How are antidilutive securities treated in the diluted EPS calculation?",
    choices: [
      { id: "a", text: "They're weighted at half their value" },
      { id: "b", text: "They're added to the numerator only" },
      { id: "c", text: "They replace the basic share count entirely" },
      { id: "d", text: "They're excluded — only dilutive securities are folded in" },
    ],
    correctId: "d",
    explanation:
      "Under U.S. GAAP, you only include a security in diluted EPS if it **lowers** EPS. Antidilutive securities — those that would raise it — are left out, keeping diluted EPS the conservative floor.",
  },
];
