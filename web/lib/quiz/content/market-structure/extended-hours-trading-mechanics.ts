import type { Question } from "@/lib/quiz/types";

// Quiz for the "Extended-Hours Trading Mechanics" lesson.
export const questions: Question[] = [
  {
    id: "extended-hours-trading-mechanics.q1",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "extended-hours"],
    prompt: "In extended hours, most brokers restrict you to which **order type**?",
    choices: [
      { id: "a", text: "Market orders only" },
      { id: "b", text: "Limit orders only" },
      { id: "c", text: "Stop-loss orders only" },
      { id: "d", text: "Any order type, no restrictions" },
    ],
    correctId: "b",
    explanation:
      "Most brokers accept **limit orders only** in extended hours and reject market orders — thin books would otherwise cause severe slippage.",
  },
  {
    id: "extended-hours-trading-mechanics.q2",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "sessions"],
    prompt: "The **regular** US trading session runs from…",
    choices: [
      { id: "a", text: "4:00am to 8:00pm ET" },
      { id: "b", text: "9:30am to 4:00pm ET" },
      { id: "c", text: "8:00am to 5:00pm ET" },
      { id: "d", text: "9:00am to 3:00pm ET" },
    ],
    correctId: "b",
    explanation:
      "Regular hours are **9:30am–4:00pm ET**. Pre-market (~4:00am) and after-hours (~8:00pm) sit outside that window and run on ECNs/ATSs.",
  },
  {
    id: "extended-hours-trading-mechanics.q3",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "extended-hours"],
    prompt: "Extended-hours trades are executed on…",
    choices: [
      { id: "a", text: "ECNs / ATSs, with no opening or closing auctions" },
      { id: "b", text: "Only the NYSE floor" },
      { id: "c", text: "The Federal Reserve" },
      { id: "d", text: "A single consolidated national auction" },
    ],
    correctId: "a",
    explanation:
      "Extended-hours trading runs on **ECNs/ATSs**, with **no opening or closing auctions** to pool liquidity — a big reason the books are thin and fragmented.",
  },
  {
    id: "extended-hours-trading-mechanics.q4",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "liquidity"],
    prompt: "Compared with regular hours, after-hours trading typically has…",
    choices: [
      { id: "a", text: "Tighter spreads and deeper liquidity" },
      { id: "b", text: "Wider spreads and thinner liquidity" },
      { id: "c", text: "Identical conditions" },
      { id: "d", text: "Guaranteed price stability" },
    ],
    correctId: "b",
    explanation:
      "After-hours books have **thin liquidity** — wider spreads and shallow depth — so even modest orders can move the price noticeably.",
  },
  {
    id: "extended-hours-trading-mechanics.q5",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "fragmentation"],
    prompt: "**Fragmentation** in extended hours means…",
    choices: [
      { id: "a", text: "Each ECN runs its own book, which may not interact, and NBBO protections don't apply the same" },
      { id: "b", text: "All venues merge into one giant auction" },
      { id: "c", text: "Trades are split into one-share pieces" },
      { id: "d", text: "Only fractional shares can trade" },
    ],
    correctId: "a",
    explanation:
      "In extended hours, liquidity is **fragmented** across separate ECN books that may not interact, and the usual NBBO protections don't apply the same way — so prices can diverge venue to venue.",
  },
  {
    id: "extended-hours-trading-mechanics.q6",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "gap-risk", "scenario"],
    prompt:
      "A stock jumps to `$108` after-hours, but the next morning's **regular session opens at `$103`**. This is an example of…",
    choices: [
      { id: "a", text: "Price improvement" },
      { id: "b", text: "Gap risk — extended-hours prices not holding to the open" },
      { id: "c", text: "A trading halt" },
      { id: "d", text: "A settlement failure" },
    ],
    correctId: "b",
    explanation:
      "Extended-hours prices are set by thin, fragmented liquidity and often **don't hold**. The regular open can **gap away** from the overnight price — here, from `$108` down to `$103`.",
  },
  {
    id: "extended-hours-trading-mechanics.q7",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "order-duration"],
    prompt: "Why might a plain **day order** fail to execute in extended hours?",
    choices: [
      { id: "a", text: "Day orders are illegal" },
      { id: "b", text: "Some order durations don't carry into extended hours unless explicitly enabled" },
      { id: "c", text: "Extended hours only accept market orders" },
      { id: "d", text: "The exchange cancels all orders overnight" },
    ],
    correctId: "b",
    explanation:
      "Order durations matter: a standard **day** order often won't trade in extended hours unless you specifically enable extended-hours execution. Some durations simply don't carry over.",
  },
  {
    id: "extended-hours-trading-mechanics.q8",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "last-price", "scenario"],
    prompt:
      "After-hours, a **10-share** trade prints **8% above** the prior close, with almost nothing else trading. The best read is…",
    choices: [
      { id: "a", text: "Tiny size on a thin, fragmented book flashed an unrepresentative price" },
      { id: "b", text: "The company definitely announced great news" },
      { id: "c", text: "The stock will open exactly 8% higher" },
      { id: "d", text: "A market-wide circuit breaker tripped" },
    ],
    correctId: "a",
    explanation:
      "On a thin, fragmented after-hours book, a single tiny trade can flash a far-off price. The after-hours **last price** is misleading — 10 shares is not a representative market.",
  },
  {
    id: "extended-hours-trading-mechanics.q9",
    lessonSlug: "extended-hours-trading-mechanics",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "gap-risk", "scenario"],
    prompt:
      "You place a **limit buy at `$112`** after-hours and fill `50` shares; the regular session then opens at `$104`. Which factors most directly hurt you?",
    choices: [
      { id: "a", text: "A clearing failure and a trading halt" },
      { id: "b", text: "Wide spread, low liquidity, and gap risk" },
      { id: "c", text: "Payment for order flow and the NBBO" },
      { id: "d", text: "Netting and book entry at DTC" },
    ],
    correctId: "b",
    explanation:
      "You paid the high end of a **wide spread** in a **low-liquidity** book, and **gap risk** meant the overnight price didn't hold — the regular open came in at `$104`, well below your `$112` fill.",
  },
];
