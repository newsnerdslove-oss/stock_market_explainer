import type { Question } from "@/lib/quiz/types";

// Quiz for the "Market Hours & Sessions" lesson.
export const questions: Question[] = [
  {
    id: "market-hours-and-sessions.q1",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "easy",
    tags: ["regular-session"],
    prompt: "What are the U.S. **regular** trading hours?",
    choices: [
      { id: "a", text: "8:00 AM–8:00 PM ET" },
      { id: "b", text: "9:30 AM–4:00 PM ET" },
      { id: "c", text: "9:00 AM–5:00 PM ET" },
      { id: "d", text: "Open 24 hours a day" },
    ],
    correctId: "b",
    explanation:
      "The regular session runs **9:30 AM–4:00 PM ET**, Monday through Friday (excluding holidays).",
  },
  {
    id: "market-hours-and-sessions.q2",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "easy",
    tags: ["weekends"],
    prompt: "Is the U.S. stock market open on weekends?",
    choices: [
      { id: "a", text: "Yes, with reduced hours" },
      { id: "b", text: "Yes, the same as weekdays" },
      { id: "c", text: "No — it's closed on weekends and holidays" },
      { id: "d", text: "Only on Saturdays" },
    ],
    correctId: "c",
    explanation:
      "The market is **closed on weekends and holidays**. It is not a 24/7 market like crypto.",
  },
  {
    id: "market-hours-and-sessions.q3",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "easy",
    tags: ["after-hours"],
    prompt: "When does the **after-hours** session run?",
    choices: [
      { id: "a", text: "4:00 AM–9:30 AM ET" },
      { id: "b", text: "4:00 PM–8:00 PM ET" },
      { id: "c", text: "8:00 PM–midnight ET" },
      { id: "d", text: "Right after midnight ET" },
    ],
    correctId: "b",
    explanation:
      "After-hours trading runs from **4:00 PM to 8:00 PM ET**, right after the regular close.",
  },
  {
    id: "market-hours-and-sessions.q4",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "medium",
    tags: ["extended-hours", "liquidity"],
    prompt: "How does **extended-hours** trading differ from the regular session?",
    choices: [
      { id: "a", text: "Higher volume and tighter spreads" },
      { id: "b", text: "Lower volume, wider spreads, and more volatility" },
      { id: "c", text: "Guaranteed better prices" },
      { id: "d", text: "No price movement at all" },
    ],
    correctId: "b",
    explanation:
      "Extended hours have **lower volume, wider spreads, and more volatility** than the deep, liquid regular session.",
  },
  {
    id: "market-hours-and-sessions.q5",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "medium",
    tags: ["pre-market"],
    prompt: "How early can pre-market trading begin on Nasdaq?",
    choices: [
      { id: "a", text: "About 4:00 AM ET" },
      { id: "b", text: "Exactly 9:00 AM ET" },
      { id: "c", text: "Midnight ET" },
      { id: "d", text: "There is no pre-market" },
    ],
    correctId: "a",
    explanation:
      "Pre-market trading can start as early as about **4:00 AM ET** on Nasdaq, running up to the 9:30 open.",
  },
  {
    id: "market-hours-and-sessions.q6",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "medium",
    tags: ["eastern-time", "early-close"],
    prompt: "Which statement about market timing is correct?",
    choices: [
      { id: "a", text: "Daylight saving changes the clock hours to 10:30–5:00" },
      { id: "b", text: "ET shifts between EST and EDT, but the clock hours stay 9:30–4:00" },
      { id: "c", text: "The market never has shortened days" },
      { id: "d", text: "Early closes happen at 8:00 PM ET" },
    ],
    correctId: "b",
    explanation:
      "**ET** shifts between EST and EDT with daylight saving, but the **clock times stay 9:30–4:00**. Occasional early closes end at 1:00 PM ET.",
  },
  {
    id: "market-hours-and-sessions.q7",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "hard",
    tags: ["earnings", "after-hours", "application"],
    prompt:
      "A company reports earnings at `4:15 PM ET`. When does the price first react to the news?",
    choices: [
      { id: "a", text: "Not until the next morning's 9:30 open" },
      { id: "b", text: "In the after-hours session, up to 8:00 PM ET" },
      { id: "c", text: "Instantly in the regular session" },
      { id: "d", text: "Over the weekend" },
    ],
    correctId: "b",
    explanation:
      "Since the report lands after the 4:00 PM close, the reaction plays out in **after-hours** trading (to 8:00 PM ET), not the next open.",
  },
  {
    id: "market-hours-and-sessions.q8",
    lessonSlug: "market-hours-and-sessions",
    type: "single",
    difficulty: "hard",
    tags: ["pre-market", "volatility", "application"],
    prompt:
      "Major news breaks at `8:00 AM ET`. Why might the stock swing more on this news than identical news at `10:00 AM`?",
    choices: [
      { id: "a", text: "Pre-market volume is thin, so prices move more easily" },
      { id: "b", text: "The exchange amplifies pre-market moves on purpose" },
      { id: "c", text: "Morning news is always more important" },
      { id: "d", text: "Prices can't move at all before 9:30", feedback: "Pre-market trading does happen from about 4:00 AM ET — it's just thinner." },
    ],
    correctId: "a",
    explanation:
      "At 8:00 AM the market is in **thin pre-market** trading, so the same headline can swing the price far more than during the deep, liquid 10 AM session.",
  },
];
