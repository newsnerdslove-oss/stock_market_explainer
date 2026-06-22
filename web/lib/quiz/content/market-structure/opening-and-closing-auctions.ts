import type { Question } from "@/lib/quiz/types";

// Quiz for the "Opening & Closing Auctions (the Cross)" lesson.
export const questions: Question[] = [
  {
    id: "opening-and-closing-auctions.q1",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "auctions"],
    prompt: "An opening or closing **cross** sets its price to…",
    choices: [
      { id: "a", text: "The midpoint of the prior day's high and low", feedback: "It's not a midpoint of any range — the cross specifically picks the volume-maximizing price." },
      { id: "b", text: "The price that maximizes the number of shares that can be executed" },
      { id: "c", text: "The average of all submitted limit prices", feedback: "The auction doesn't average limits; it solves for the single price that trades the most shares." },
      { id: "d", text: "Whatever the last continuous trade was" },
    ],
    correctId: "b",
    explanation:
      "The auction finds the **single price that maximizes executable volume** — the price at which the most shares can be matched — and prints all crossing orders there at once.",
  },
  {
    id: "opening-and-closing-auctions.q2",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "easy",
    tags: ["market-structure", "order-types"],
    prompt: "A **MOC (Market-on-Close)** order…",
    choices: [
      { id: "a", text: "Executes immediately when entered, in the continuous book", feedback: "On-close orders don't rest in the continuous book; they execute only in the closing auction." },
      { id: "b", text: "Executes only at the closing-auction price, with no limit" },
      { id: "c", text: "Sets a guaranteed minimum sale price", feedback: "MOC has no limit at all — that price protection is what a **LOC** provides." },
      { id: "d", text: "Can only be filled in the pre-market" },
    ],
    correctId: "b",
    explanation:
      "A MOC commits you to the **closing cross price** with no price limit — it executes only in the auction, not in continuous trading. You get the official close, but not to choose the number.",
  },
  {
    id: "opening-and-closing-auctions.q3",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "closing-auction"],
    prompt: "Why is the **closing auction** the most-watched price of the day?",
    choices: [
      { id: "a", text: "Because it is the only time market orders are allowed", feedback: "Market orders are allowed throughout the regular session, not just at the close." },
      { id: "b", text: "Because trading is halted everywhere else at that moment" },
      { id: "c", text: "Because the closing price feeds index levels, fund NAVs, and benchmark pricing" },
      { id: "d", text: "Because it always trades at the day's high", feedback: "Nothing ties the close to the day's high — it's the volume-maximizing auction price." },
    ],
    correctId: "c",
    explanation:
      "The official **closing price** is used downstream for **index levels and rebalances, mutual-fund/ETF NAVs, benchmarks, and derivatives settlement** — so enormous interest concentrates into that single print.",
  },
  {
    id: "opening-and-closing-auctions.q4",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "imbalance"],
    prompt: "Ahead of the cross, exchanges **publish the order imbalance** mainly to…",
    choices: [
      { id: "a", text: "Invite offsetting liquidity so the auction prints more efficiently" },
      { id: "b", text: "Hide which side has more interest from the public", feedback: "It's the opposite — the imbalance is disseminated *publicly* on purpose to attract the other side." },
      { id: "c", text: "Force all imbalanced orders to cancel", feedback: "Imbalanced orders aren't force-cancelled; the published info invites the other side to fill them." },
      { id: "d", text: "Set the prior day's closing price" },
    ],
    correctId: "a",
    explanation:
      "Publishing the imbalance signals where extra liquidity is needed — e.g. a big buy imbalance invites sellers to step in with offsetting orders, tightening the eventual cross.",
  },
  {
    id: "opening-and-closing-auctions.q5",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "medium",
    tags: ["market-structure", "nasdaq", "timing"],
    prompt:
      "On **Nasdaq**, when does the **opening** Order Imbalance Indicator (NOII) begin disseminating before the `9:30am` open?",
    choices: [
      { id: "a", text: "9:00am ET" },
      { id: "b", text: "9:28am ET" },
      { id: "c", text: "9:30am ET, at the open itself", feedback: "By the open it's too late to react — the imbalance is published *before* the cross, starting at 9:28am." },
      { id: "d", text: "8:00am ET" },
    ],
    correctId: "b",
    explanation:
      "Nasdaq begins disseminating the opening Order Imbalance Indicator at **`9:28am ET`**, every second until the `9:30am` opening cross.",
  },
  {
    id: "opening-and-closing-auctions.q6",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "scenario", "moc"],
    prompt:
      "At `3:50pm` a stock shows a closing imbalance of `1,500,000` shares **to buy** near `$50.00`. You hold a **MOC buy**. What's the realistic risk?",
    choices: [
      { id: "a", text: "Your order won't execute at all because of the imbalance", feedback: "A MOC into a buy imbalance is very likely to fill — the concern is *price*, not whether you execute." },
      { id: "b", text: "You're guaranteed to fill at `$50.00` or better", feedback: "MOC carries no price protection; the print can land above `$50.00`." },
      { id: "c", text: "The cross can print well above `$50.00`, and your MOC takes whatever that is" },
      { id: "d", text: "The auction will be cancelled and the stock won't close" },
    ],
    correctId: "c",
    explanation:
      "Into a large *same-side* (buy) imbalance, the volume-maximizing price can print well above the `3:50pm` reference. A **MOC has no limit**, so you take whatever the close is. A **LOC** would cap your price.",
  },
  {
    id: "opening-and-closing-auctions.q7",
    lessonSlug: "opening-and-closing-auctions",
    type: "single",
    difficulty: "hard",
    tags: ["market-structure", "auctions", "concept"],
    prompt:
      "Which statement about the cross is **correct**?",
    choices: [
      { id: "a", text: "All participating orders that cross the auction price fill at that single price, regardless of their individual limits" },
      { id: "b", text: "Each order fills at its own limit price, like the continuous book", feedback: "Unlike the continuous book, the cross fills everyone at one common price, not at individual limits." },
      { id: "c", text: "The opening and closing crosses are run on ECNs with no published price" },
      { id: "d", text: "Only LOC orders, never MOC orders, can join the closing auction", feedback: "Both MOC and LOC orders participate in the closing auction." },
    ],
    correctId: "a",
    explanation:
      "The auction is a single batch match: every crossing order executes at the **one** auction price, not at its own limit. That's why the open and close appear as one large print.",
  },
];
