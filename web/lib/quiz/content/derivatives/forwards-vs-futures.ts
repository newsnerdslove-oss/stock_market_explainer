import type { Question } from "@/lib/quiz/types";

// Quiz for the "Forwards vs. Futures" lesson.
export const questions: Question[] = [
  {
    id: "forwards-vs-futures.q1",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "easy",
    tags: ["forwards", "futures", "definition"],
    prompt: "What is the **defining difference** between a forward and a future?",
    choices: [
      { id: "a", text: "A forward gives a right; a future is an obligation", feedback: "Both are obligations — the right-vs-obligation split is options vs. futures, not forwards vs. futures." },
      { id: "b", text: "A forward is a private OTC contract; a future is standardized and exchange-traded" },
      { id: "c", text: "A forward has no underlying asset; a future does" },
      { id: "d", text: "A forward is always cheaper than a future" },
    ],
    correctId: "b",
    explanation:
      "Both lock in a price for future delivery. The difference is the *plumbing*: a **forward** is a private, customizable **OTC** deal; a **future** is **standardized** and **exchange-traded**, cleared through a clearinghouse.",
  },
  {
    id: "forwards-vs-futures.q2",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "clearinghouse", "counterparty"],
    prompt:
      "On an exchange-traded future, who effectively becomes your **counterparty**?",
    choices: [
      { id: "a", text: "The original trader on the other side of your fill" },
      { id: "b", text: "The CFTC" },
      { id: "c", text: "Your broker, personally" },
      { id: "d", text: "The clearinghouse — buyer to every seller and seller to every buyer" },
    ],
    correctId: "d",
    explanation:
      "The **clearinghouse** steps into the middle of every futures trade, becoming the buyer to every seller and the seller to every buyer. You face the clearinghouse, not the stranger you traded with.",
  },
  {
    id: "forwards-vs-futures.q3",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "medium",
    tags: ["forwards", "counterparty", "risk"],
    prompt:
      "Why does a **forward** carry **counterparty (credit) risk** that a future largely removes?",
    choices: [
      { id: "a", text: "Forwards are marked-to-market daily, which adds risk" },
      { id: "b", text: "Forwards are guaranteed by the CFTC, futures are not" },
      { id: "c", text: "A forward has no clearinghouse in the middle, so if the other party defaults you bear the loss" },
      { id: "d", text: "Forwards always require more margin than futures" },
    ],
    correctId: "c",
    explanation:
      "A forward is a private deal with *no clearinghouse* — performance depends on the other party's creditworthiness. If they default, you eat the loss. A future is guaranteed against default by the clearinghouse.",
  },
  {
    id: "forwards-vs-futures.q4",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "mark-to-market", "settlement"],
    prompt:
      "How does **settlement timing** differ between a typical forward and a future?",
    choices: [
      { id: "a", text: "A future is marked-to-market daily; a forward is typically settled once, at delivery" },
      { id: "b", text: "Both settle only at delivery" },
      { id: "c", text: "A forward settles daily; a future settles only at delivery" },
      { id: "d", text: "Neither ever settles in cash" },
    ],
    correctId: "a",
    explanation:
      "A **future** is **marked-to-market daily** — gains and losses move in cash every day via margin. A traditional **forward** is settled *once*, at delivery.",
  },
  {
    id: "forwards-vs-futures.q5",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "hard",
    tags: ["forwards", "futures", "liquidity", "offset"],
    prompt:
      "You want to **exit** your position early. Why is this easier with a future than a forward?",
    choices: [
      { id: "a", text: "A forward can be sold instantly on the exchange; a future cannot" },
      { id: "b", text: "A future is closed by trading an equal and opposite contract, which extinguishes the position; a forward can't simply be offset and usually must be renegotiated" },
      { id: "c", text: "Forwards have a clearinghouse that buys you out on demand" },
      { id: "d", text: "Futures have no expiration, so there's nothing to exit" },
    ],
    correctId: "b",
    explanation:
      "A standardized **future** is liquid: you close by trading an *equal and opposite* contract, which offsets and extinguishes the position. A **forward** can't be offset that way — unwinding usually means renegotiating with the same counterparty.",
  },
  {
    id: "forwards-vs-futures.q6",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "medium",
    tags: ["futures", "regulation", "cftc"],
    prompt:
      "Which U.S. regulator oversees the **futures and options** markets these contracts trade on?",
    choices: [
      { id: "a", text: "The Federal Reserve" },
      { id: "b", text: "The IRS" },
      { id: "c", text: "The CFTC (Commodity Futures Trading Commission)" },
      { id: "d", text: "The MSRB" },
    ],
    correctId: "c",
    explanation:
      "The **CFTC**, created by Congress in 1974, regulates U.S. futures and options markets; after 2008 its mandate expanded to cover most OTC derivatives. Traditional private forwards historically sat outside that exchange framework.",
  },
  {
    id: "forwards-vs-futures.q7",
    lessonSlug: "forwards-vs-futures",
    type: "single",
    difficulty: "hard",
    tags: ["forwards", "futures", "misconception", "customization"],
    prompt:
      "\"A forward is safer than a future because it's private and fully customizable.\" Why is this misleading?",
    choices: [
      { id: "a", text: "Forwards can't be customized at all" },
      { id: "b", text: "Forwards are actually marked-to-market more often than futures" },
      { id: "c", text: "Privacy is irrelevant because forwards are also exchange-cleared" },
      { id: "d", text: "Customization is real, but a forward has no clearinghouse, no daily settlement, and no exchange oversight — if the counterparty defaults, you bear the loss" },
    ],
    correctId: "d",
    explanation:
      "Forwards *are* flexible, but flexibility isn't safety. With no clearinghouse, no daily mark-to-market, and no exchange watching, a forward leaves you exposed to **counterparty default**. A future trades customization for a guaranteed counterparty.",
  },
];
