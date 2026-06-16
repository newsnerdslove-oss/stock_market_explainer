import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Order Book & Market Depth" lesson.
export const questions: Question[] = [
  {
    id: "order-book-and-market-depth.q1",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "order-book"],
    prompt: "What does **Level 2** show that **Level 1** does not?",
    choices: [
      { id: "a", text: "Resting size at multiple price levels on each side" },
      { id: "b", text: "Only the last trade price", feedback: "The last trade is part of Level 1 — Level 2 adds the depth behind it." },
      { id: "c", text: "The company's earnings" },
      { id: "d", text: "Just the best bid and best ask", feedback: "That's exactly the top of book — what Level 1 shows." },
    ],
    correctId: "a",
    explanation:
      "**Level 1** is the *top of book*: best bid, best ask, their sizes, and the last trade. **Level 2** is *depth of book* — the ladder of multiple price levels and the size resting at each.",
  },
  {
    id: "order-book-and-market-depth.q2",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "spread"],
    prompt: "The **spread** is the gap between…",
    choices: [
      { id: "a", text: "The last trade and the open" },
      { id: "b", text: "The best bid and the best ask" },
      { id: "c", text: "The high and the low of the day" },
      { id: "d", text: "Two adjacent ask levels" },
    ],
    correctId: "b",
    explanation:
      "The **spread** is the gap between the best bid and the best ask. Bids stack from highest down; asks from lowest up; the spread sits between the two best prices.",
  },
  {
    id: "order-book-and-market-depth.q3",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "order-book"],
    prompt: "On the order book, **bids** are ranked…",
    choices: [
      { id: "a", text: "Lowest price at the top" },
      { id: "b", text: "Randomly" },
      { id: "c", text: "Highest price at the top" },
      { id: "d", text: "By size, biggest first" },
    ],
    correctId: "c",
    explanation:
      "**Bids** (buyers) are stacked highest-price-first — the highest bid is the one most likely to trade. **Asks** are the mirror image, lowest-price-first.",
  },
  {
    id: "order-book-and-market-depth.q4",
    lessonSlug: "order-book-and-market-depth",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["market-structure", "slippage", "math"],
    unit: "$",
    prompt:
      "The asks read `100 @ $10.00`, `100 @ $10.04`, `100 @ $10.10`. You market-buy **250 shares**. What's your **average fill price**?",
    choices: [
      { id: "a", text: "$10.00", feedback: "That's only the top level — your order walks past it into pricier levels." },
      { id: "b", text: "$10.036" },
      { id: "c", text: "$10.10" },
      { id: "d", text: "$10.05", feedback: "Close, but recompute: 100×10.00 + 100×10.04 + 50×10.10 = 2,509 over 250." },
    ],
    correctId: "b",
    explanation:
      "`100 @ $10.00 = $1,000`, `100 @ $10.04 = $1,004`, `50 @ $10.10 = $505`. Total `$2,509 ÷ 250 = $10.036`. The order *walked the book*, so the average came out above the `$10.00` top quote.",
  },
  {
    id: "order-book-and-market-depth.q5",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "slippage"],
    prompt: "Why does a large market order usually fill at a **worse** average price than the top quote?",
    choices: [
      { id: "a", text: "The exchange charges a penalty fee per share" },
      { id: "b", text: "It walks the book, taking pricier levels once the top level is exhausted" },
      { id: "c", text: "Market orders are always rejected above the top level" },
      { id: "d", text: "The bid and ask are the same price" },
    ],
    correctId: "b",
    explanation:
      "A market order fills the best price first, then climbs to the next level, and the next. Once size exceeds the top level it **walks the book**, so the *average* fill is worse than the top quote — that gap is **slippage**.",
  },
  {
    id: "order-book-and-market-depth.q6",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "depth", "scenario"],
    prompt:
      "Above the best ask the book is **thin** — only tiny sizes at each level, with big price gaps. You send a large **market buy**. What happens?",
    choices: [
      { id: "a", text: "It fills entirely at the best ask" },
      { id: "b", text: "It is automatically converted to a limit order" },
      { id: "c", text: "It walks up through the gaps, producing significant slippage" },
      { id: "d", text: "Nothing — thin books reject large orders" },
    ],
    correctId: "c",
    explanation:
      "A thin book has little **depth** near the touch, so a large market buy climbs through the sparse, widely-spaced levels. The result is **significant slippage** — the average fill lands far above the best ask.",
  },
  {
    id: "order-book-and-market-depth.q7",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "depth"],
    prompt: "A **deep** book (lots of size resting near the touch) tends to…",
    choices: [
      { id: "a", text: "Absorb large orders with little price movement" },
      { id: "b", text: "Always have a wider spread than a thin book" },
      { id: "c", text: "Make every market order fail" },
      { id: "d", text: "Guarantee the price never changes" },
    ],
    correctId: "a",
    explanation:
      "**Depth** is the size resting near the touch. A deep book can **absorb large orders** with little movement; a thin book has gaps, so the same order pushes the price much further.",
  },
  {
    id: "order-book-and-market-depth.q8",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "iceberg", "scenario"],
    prompt:
      "Level 2 shows only **500 shares** displayed at `$25.00`, yet a buy order of **5,000** fills almost entirely right around that price. The most likely explanation is…",
    choices: [
      { id: "a", text: "Hidden or iceberg liquidity sitting at that level beyond what's displayed" },
      { id: "b", text: "The exchange printed a typo" },
      { id: "c", text: "The spread temporarily went to zero" },
      { id: "d", text: "Level 2 always understates the price" },
    ],
    correctId: "a",
    explanation:
      "Displayed size isn't total size. **Iceberg and hidden orders** reveal only a sliver at a time, so far more can fill near a level than Level 2 shows. Level 2 displays only *lit* orders — never dark or hidden liquidity.",
  },
  {
    id: "order-book-and-market-depth.q9",
    lessonSlug: "order-book-and-market-depth",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "liquidity", "scenario"],
    prompt:
      "You aim a marketable order at a level showing plenty of size, but it half-fills and the rest of the size **disappears** before you get there. This is best described as…",
    choices: [
      { id: "a", text: "A settlement failure" },
      { id: "b", text: "Fading or phantom liquidity" },
      { id: "c", text: "Price improvement" },
      { id: "d", text: "A trading halt" },
    ],
    correctId: "b",
    explanation:
      "Quoted size can be cancelled in an instant. When displayed orders vanish before you reach them, that's **fading** or **phantom liquidity** — a reason the book you see isn't a promise of what you'll fill.",
  },
];
