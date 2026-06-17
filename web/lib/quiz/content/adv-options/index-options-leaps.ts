import type { Question } from "@/lib/quiz/types";

// Quiz for the "Index Options & LEAPS" lesson.
export const questions: Question[] = [
  {
    id: "index-options-leaps.q1",
    lessonSlug: "index-options-leaps",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "index-options", "tax"],
    unit: "$",
    prompt:
      "A `$20,000` gain on broad-based index options held `3 months` — how much is taxed as **long-term** under Section 1256?",
    choices: [
      { id: "a", text: "$12,000" },
      { id: "b", text: "$8,000", feedback: "$8,000 is the short-term portion (40%) — the long-term portion is 60%." },
      { id: "c", text: "$20,000", feedback: "Only 60% is long-term; the other 40% is short-term regardless of holding period." },
      { id: "d", text: "$0" },
    ],
    correctId: "a",
    explanation:
      "1256 60/40: long-term = `0.60 × 20,000 = $12,000`; short-term = `0.40 × 20,000 = $8,000` — independent of the 3-month hold.",
  },
  {
    id: "index-options-leaps.q2",
    lessonSlug: "index-options-leaps",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "index-options", "tax"],
    unit: "$",
    prompt:
      "Same `$20,000` index-option gain held `3 months`. How much is taxed as **short-term**?",
    choices: [
      { id: "a", text: "$8,000" },
      { id: "b", text: "$20,000", feedback: "Held under a year, but 1256 still splits it 60/40 — only 40% is short-term." },
      { id: "c", text: "$12,000" },
      { id: "d", text: "$0" },
    ],
    correctId: "a",
    explanation:
      "Short-term = `0.40 × 20,000 = $8,000`. The 60/40 split applies regardless of how long the contract was held.",
  },
  {
    id: "index-options-leaps.q3",
    lessonSlug: "index-options-leaps",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "index-options", "settlement"],
    prompt: "Which settles in **cash**, and which **delivers shares**: `SPX` vs. `SPY` options?",
    choices: [
      { id: "a", text: "SPX is cash-settled; SPY is physically settled" },
      { id: "b", text: "SPX delivers shares; SPY is cash-settled", feedback: "Reversed — SPX (an index) cash-settles; SPY (an ETF) delivers shares." },
      { id: "c", text: "Both are cash-settled" },
      { id: "d", text: "Both deliver shares" },
    ],
    correctId: "a",
    explanation:
      "`SPX` is a broad-based **index** option → **cash-settled**. `SPY` is an **ETF** option → **physically settled** (delivers shares).",
  },
  {
    id: "index-options-leaps.q4",
    lessonSlug: "index-options-leaps",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "leaps"],
    prompt: "What best defines **LEAPS** and their key feature?",
    choices: [
      { id: "a", text: "Long-dated options (~9 months to ~3 years) with large time value and higher premiums" },
      { id: "b", text: "Weekly options that expire every Friday", feedback: "That describes weeklys — LEAPS are the opposite, long-dated contracts." },
      { id: "c", text: "Cash-settled options on narrow indexes only" },
      { id: "d", text: "Options that can only be exercised at expiration" },
    ],
    correctId: "a",
    explanation:
      "**LEAPS** are long-dated options (expirations beyond ~9 months, up to ~3 years) — the extra time value makes the premium higher.",
  },
  {
    id: "index-options-leaps.q5",
    lessonSlug: "index-options-leaps",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "index-options", "oex"],
    prompt: "Which broad index option is the well-known **American-style exception**?",
    choices: [
      { id: "a", text: "OEX (S&P 100)" },
      { id: "b", text: "SPX (S&P 500)", feedback: "SPX is European-style; the American-style exception is OEX (with XEO as its European version)." },
      { id: "c", text: "NDX (Nasdaq-100)" },
      { id: "d", text: "RUT (Russell 2000)" },
    ],
    correctId: "a",
    explanation:
      "Most broad-based index options are European, but `OEX` (S&P 100) is **American-style**. `XEO` is the European version of the S&P 100.",
  },
  {
    id: "index-options-leaps.q6",
    lessonSlug: "index-options-leaps",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "index-options", "tax", "1256"],
    prompt: "Section 1256 contracts are also subject to which year-end rule?",
    choices: [
      { id: "a", text: "They are marked-to-market at year-end" },
      { id: "b", text: "They are exempt from all taxation until sold", feedback: "1256 contracts are taxed even if unsold — they're marked-to-market at year-end." },
      { id: "c", text: "They convert to ordinary income after one year" },
      { id: "d", text: "They defer all gains to the following tax year" },
    ],
    correctId: "a",
    explanation:
      "Section 1256 contracts are **marked-to-market at year-end** — open positions are treated as if sold, with the 60/40 split applied.",
  },
  {
    id: "index-options-leaps.q7",
    lessonSlug: "index-options-leaps",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "index-options", "tax", "spy"],
    unit: "$",
    prompt:
      "A `$10,000` gain on `SPY` options held `20 days`. How much is taxed as **short-term**?",
    choices: [
      { id: "a", text: "$10,000" },
      { id: "b", text: "$4,000", feedback: "$4,000 would be the 1256 short-term portion — but SPY is an ordinary equity option, so the whole 20-day gain is short-term." },
      { id: "c", text: "$6,000" },
      { id: "d", text: "$0" },
    ],
    correctId: "a",
    explanation:
      "`SPY` options are ordinary equity options taxed by holding period. Held `20 days` (< 1 year), the **full `$10,000`** is short-term.",
  },
  {
    id: "index-options-leaps.q8",
    lessonSlug: "index-options-leaps",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "index-options", "settlement"],
    unit: "$",
    prompt: "A broad-based index put finishes `25` points ITM (multiplier `100`). How much **cash** does the holder receive at exercise?",
    choices: [
      { id: "a", text: "$2,500" },
      { id: "b", text: "$25", feedback: "Apply the 100 multiplier: 25 × 100 = $2,500 in cash; no shares are delivered." },
      { id: "c", text: "$250" },
      { id: "d", text: "$25,000" },
    ],
    correctId: "a",
    explanation:
      "Broad-based index options are **cash-settled**: ITM amount × multiplier = `25 × 100 = $2,500` in cash; no stock changes hands.",
  },
];
