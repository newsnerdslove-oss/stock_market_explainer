import type { Question } from "@/lib/quiz/types";

// Quiz for the "Crypto market cap & supply" lesson.
export const questions: Question[] = [
  {
    id: "crypto-market-cap-and-supply.q1",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "market-cap"],
    prompt: "How is a crypto's **market cap** calculated?",
    choices: [
      { id: "a", text: "Unit price ÷ max supply" },
      { id: "b", text: "Unit price × circulating supply" },
      { id: "c", text: "Circulating supply ÷ unit price" },
      { id: "d", text: "Max supply × max supply" },
    ],
    correctId: "b",
    explanation:
      "**Market cap = price × circulating supply** — the same logic as a stock's market cap.",
  },
  {
    id: "crypto-market-cap-and-supply.q2",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["crypto", "market-cap", "math"],
    unit: "$",
    prompt: "A coin trades at `$2` with a circulating supply of **10 billion** units. What's its market cap?",
    choices: [
      { id: "a", text: "$5B" },
      { id: "b", text: "$12B" },
      { id: "c", text: "$20B" },
      { id: "d", text: "$200B", feedback: "Check the zeros: 2 × 10B = 20B, not 200B." },
    ],
    correctId: "c",
    explanation:
      "`$2 × 10,000,000,000 = $20B`. Price times circulating supply gives the market cap.",
  },
  {
    id: "crypto-market-cap-and-supply.q3",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "supply"],
    prompt: "What is the difference between **circulating** supply and **max** supply?",
    choices: [
      { id: "a", text: "Circulating is the units in the market now; max is the hard cap on how many can ever exist" },
      { id: "b", text: "They always mean the same number" },
      { id: "c", text: "Circulating is the future cap; max is what exists today" },
      { id: "d", text: "Max supply is the daily trading volume" },
    ],
    correctId: "a",
    explanation:
      "**Circulating supply** is the units available *now*; **max supply** is the hard cap on how many can *ever* exist — if the coin has one at all.",
  },
  {
    id: "crypto-market-cap-and-supply.q4",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "supply", "bitcoin"],
    prompt: "Which statement about supply caps is accurate (illustrative)?",
    choices: [
      { id: "a", text: "Bitcoin has no cap, while Ethereum is capped at 21 million" },
      { id: "b", text: "Bitcoin is capped at 21 million; Ethereum has no fixed cap; Dogecoin is uncapped" },
      { id: "c", text: "Every cryptocurrency has the same 21 million cap" },
      { id: "d", text: "Dogecoin is capped at 21 million and Bitcoin is inflationary" },
    ],
    correctId: "b",
    explanation:
      "**Bitcoin** is capped at **21M**; **Ethereum** has **no fixed cap**; **Dogecoin** is **uncapped / inflationary**.",
  },
  {
    id: "crypto-market-cap-and-supply.q5",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["crypto", "market-cap", "math", "application"],
    unit: "$",
    prompt:
      "Coin X: `$0.05` × **1 trillion** units. Coin Y: `$1,000` × **5 million** units. Which has the **larger** market cap, and by roughly how much?",
    choices: [
      { id: "a", text: "Coin Y is larger — its $1,000 unit price wins", feedback: "Unit price alone is misleading — you must multiply by supply." },
      { id: "b", text: "Coin X is larger — $50B vs. $5B" },
      { id: "c", text: "They're equal at $50B each" },
      { id: "d", text: "Coin X is larger — $5B vs. $50B" },
    ],
    correctId: "b",
    explanation:
      "Coin X: `$0.05 × 1,000,000,000,000 = $50B`. Coin Y: `$1,000 × 5,000,000 = $5B`. The **`$0.05` coin is 10× bigger** — proof that unit price alone misleads.",
  },
  {
    id: "crypto-market-cap-and-supply.q6",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "hard",
    tags: ["crypto", "misconception", "application"],
    prompt:
      "A friend says a `$0.01` coin with **100 billion** units in circulation will *\"easily hit `$100`.\"* What's the soundest reaction?",
    choices: [
      { id: "a", text: "Agree — a low unit price means lots of room to grow" },
      { id: "b", text: "It already has a ~$1B cap; reaching $100/unit would need a ~$10T cap, which is enormous" },
      { id: "c", text: "Unit price guarantees the price will rise" },
      { id: "d", text: "A penny coin is always cheaper than a dollar coin" },
    ],
    correctId: "b",
    explanation:
      "`$0.01 × 100B = $1B` *already*. For one unit to reach `$100`, the cap would need to be `$100 × 100B = $10T` — larger than almost anything on Earth. A low unit price isn't 'cheap.'",
  },
  {
    id: "crypto-market-cap-and-supply.q7",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "medium",
    tags: ["crypto", "unit-price"],
    prompt: "Why is a coin's **unit price alone** a poor measure of how big it is?",
    choices: [
      { id: "a", text: "Because unit prices are always fake" },
      { id: "b", text: "Because unit price equals market cap" },
      { id: "c", text: "Because only max supply matters, never price" },
      { id: "d", text: "Because supplies differ enormously, so the same value can come from a tiny price × huge supply or vice versa" },
    ],
    correctId: "d",
    explanation:
      "Supplies vary wildly. A small unit price × a huge supply can outweigh a large unit price × a tiny supply — so you need **price × supply** to judge size.",
  },
  {
    id: "crypto-market-cap-and-supply.q8",
    lessonSlug: "crypto-market-cap-and-supply",
    type: "single",
    difficulty: "easy",
    tags: ["crypto", "supply"],
    prompt: "A coin whose supply keeps growing over time with **no hard cap** is described as…",
    choices: [
      { id: "a", text: "Capped" },
      { id: "b", text: "Deflationary by design" },
      { id: "c", text: "Inflationary" },
      { id: "d", text: "Fully circulating" },
    ],
    correctId: "c",
    explanation:
      "A coin with no hard cap that keeps issuing new units is **inflationary** (e.g. Dogecoin), versus a **capped** coin like Bitcoin.",
  },
];
