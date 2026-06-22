import type { Question } from "@/lib/quiz/types";

// Quiz for the "Tax Lots & the Wash-Sale Rule" lesson.
export const questions: Question[] = [
  {
    id: "tax-lots-and-wash-sales.q1",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "easy",
    tags: ["tax-lots", "definition"],
    prompt: "What is a **tax lot**?",
    choices: [
      { id: "a", text: "The total tax you owe for the year" },
      { id: "b", text: "A batch of shares from a single purchase, with its own basis and acquisition date" },
      { id: "c", text: "The fee a broker charges to sell shares", feedback: "That's a commission — a tax lot is about *which shares*, not a fee." },
      { id: "d", text: "A government limit on how many shares you can own" },
    ],
    correctId: "b",
    explanation:
      "A **tax lot** is one batch of shares from a single purchase — each carries its own **cost basis** and **acquisition date**, which together decide your gain and holding period.",
  },
  {
    id: "tax-lots-and-wash-sales.q2",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "easy",
    tags: ["tax-lots", "fifo", "default"],
    prompt: "If you don't tell your broker which shares to sell, which lot leaves first by default?",
    choices: [
      { id: "a", text: "The **oldest** shares — first-in, first-out (FIFO)" },
      { id: "b", text: "The shares with the highest cost basis" },
      { id: "c", text: "The newest shares you bought", feedback: "That's last-in, first-out — but FIFO (oldest first) is the default, not LIFO." },
      { id: "d", text: "A random lot chosen by the broker" },
    ],
    correctId: "a",
    explanation:
      "The default is **FIFO** — *first-in, first-out*. Your **oldest** shares are treated as sold first, which is often your lowest-basis lot.",
  },
  {
    id: "tax-lots-and-wash-sales.q3",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "medium",
    tags: ["holding-period", "long-term", "tax"],
    prompt: "For a gain to qualify as **long-term**, how long must you have held the shares?",
    choices: [
      { id: "a", text: "At least 30 days", feedback: "30 days is the wash-sale window — the long-term line is much longer." },
      { id: "b", text: "Exactly one year, to the day" },
      { id: "c", text: "**More than one year**" },
      { id: "d", text: "More than five years" },
    ],
    correctId: "c",
    explanation:
      "Hold **more than one year** and the gain is **long-term** (lower 0/15/20% rates). One year or less is **short-term**, taxed as ordinary income. You count from the day after you acquired the shares through the day you sold.",
  },
  {
    id: "tax-lots-and-wash-sales.q4",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "medium",
    tags: ["wash-sale", "definition"],
    prompt: "A **wash sale** is triggered when you sell at a loss and buy a substantially identical security within…",
    choices: [
      { id: "a", text: "30 days after the sale only" },
      { id: "b", text: "**30 days before or after** the sale" },
      { id: "c", text: "the same calendar year" },
      { id: "d", text: "one year of the sale", feedback: "The wash-sale window is 30 days each side — a year is the long-term holding line, a different rule." },
    ],
    correctId: "b",
    explanation:
      "The wash-sale window runs **30 days before or after** the loss sale — a 61-day window centered on it. It counts *both* directions, so even buying before you sell can trigger it.",
  },
  {
    id: "tax-lots-and-wash-sales.q5",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "medium",
    tags: ["wash-sale", "basis", "mechanics"],
    prompt: "When a wash sale disallows your loss, what happens to that loss?",
    choices: [
      { id: "a", text: "It's permanently lost — you never get the deduction" },
      { id: "b", text: "It's refunded to you immediately as a credit" },
      { id: "c", text: "It's **added to the cost basis of the replacement shares**" },
      { id: "d", text: "It's split evenly across the next three tax years" },
    ],
    correctId: "c",
    explanation:
      "The disallowed loss isn't gone — it's **added to the basis of the replacement shares**, and the holding period carries over. You claim it later when you finally sell those shares.",
  },
  {
    id: "tax-lots-and-wash-sales.q6",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "numericChoice",
    difficulty: "hard",
    unit: "$",
    tags: ["wash-sale", "basis", "math"],
    prompt:
      "You buy 100 shares of X for `$1,000`, sell them for `$750`, and **within 30 days** rebuy 100 shares for `$800`. What's your cost basis in the new shares?",
    choices: [
      { id: "a", text: "$800", feedback: "That's just the rebuy price — the disallowed $250 loss gets added on top." },
      { id: "b", text: "$1,050" },
      { id: "c", text: "$750" },
      { id: "d", text: "$1,000" },
    ],
    correctId: "b",
    explanation:
      "The `$250` loss (`$1,000 − $750`) is disallowed by the wash sale, so you add it to the new cost: `$800 + $250 = $1,050` basis. (This is the IRS Pub 550 example — the loss is postponed, not erased.)",
  },
  {
    id: "tax-lots-and-wash-sales.q7",
    lessonSlug: "tax-lots-and-wash-sales",
    type: "single",
    difficulty: "hard",
    tags: ["specific-identification", "application", "tax-planning"],
    prompt:
      "You hold three lots of one stock at different prices and want to sell some shares while reporting the **smallest** taxable gain. What lets you do that?",
    choices: [
      { id: "a", text: "**Specific identification** — instructing your broker which lot to sell before settlement" },
      { id: "b", text: "Accepting the FIFO default, which always sells the highest-basis lot first", feedback: "FIFO sells the *oldest* lot first, not the highest-basis one — and it's automatic, not a choice." },
      { id: "c", text: "Waiting until tax time and picking the lot on your return" },
      { id: "d", text: "Selling all three lots at once to average them" },
    ],
    correctId: "a",
    explanation:
      "**Specific identification** lets you name the lot to sell (e.g., your highest-basis shares) — but you must give the broker an **adequate identification before the sale settles**, not after the fact. (Educational only — not tax advice.)",
  },
];
