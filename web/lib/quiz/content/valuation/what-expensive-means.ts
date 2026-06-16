import type { Question } from "@/lib/quiz/types";

// Quiz for the "What \"expensive\" really means" lesson.
export const questions: Question[] = [
  {
    id: "what-expensive-means.q1",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "expensive"],
    prompt: "In investing, a stock being \"expensive\" mainly means…",
    choices: [
      { id: "a", text: "Its price is high relative to its fundamentals (earnings, growth, assets)" },
      { id: "b", text: "It has a large dollar price per share", feedback: "A big price tag alone says nothing — a $500 stock can be cheap and a $5 stock dear." },
      { id: "c", text: "It costs more than the market average in dollars" },
      { id: "d", text: "It trades above $100 a share" },
    ],
    correctId: "a",
    explanation:
      "**Expensive = price high relative to what you get** — earnings, growth, assets. The raw dollar price per share is essentially arbitrary.",
  },
  {
    id: "what-expensive-means.q2",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "expensive", "splits"],
    prompt: "A company does a 10-for-1 stock split, taking its shares from `$1,000` to `$100`. Is the stock now cheaper?",
    choices: [
      { id: "a", text: "Yes — a $100 share is a tenth the price, so it's a bargain", feedback: "The price per share fell, but you own ten times as many shares — the value is unchanged." },
      { id: "b", text: "No — the value is unchanged; only the price per share was divided up" },
      { id: "c", text: "Yes — splits always make a company cheaper" },
      { id: "d", text: "No — splits make a company more expensive" },
    ],
    correctId: "b",
    explanation:
      "A split slices the same pie into more pieces. The price per share dropped 90%, but each owner's stake — and how *expensive* the company is — is **unchanged**.",
  },
  {
    id: "what-expensive-means.q3",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "expensive", "misconception"],
    prompt: "Why is \"a low share price means it's cheap\" a mistake?",
    choices: [
      { id: "a", text: "Because cheapness is price relative to value, not the size of the dollar price" },
      { id: "b", text: "Because low-priced stocks are always about to rise" },
      { id: "c", text: "Because cheap stocks always have high earnings", feedback: "There's no such rule — a low-priced stock can have tiny or negative earnings." },
      { id: "d", text: "Because share price has nothing to do with any company" },
    ],
    correctId: "a",
    explanation:
      "Cheapness is **price relative to value**. A $5 stock with minuscule earnings can be far more expensive than a $400 stock that earns a lot.",
  },
  {
    id: "what-expensive-means.q4",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "expensive", "context"],
    prompt: "Why can a P/E of **30** be reasonable for a software company but steep for a utility?",
    choices: [
      { id: "a", text: "Valuation is relative — fast growth can justify a higher price than a low-growth business deserves" },
      { id: "b", text: "Software companies are legally allowed higher P/Es" },
      { id: "c", text: "Utilities can never have a P/E above 10" },
      { id: "d", text: "A P/E of 30 is always cheap regardless of the business" },
    ],
    correctId: "a",
    explanation:
      "Valuation is **relative** — to history, peers, and sector. Expected fast growth can justify a higher price versus today's earnings, while a slow-growing utility at the same P/E looks expensive.",
  },
  {
    id: "what-expensive-means.q5",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "valuetrap"],
    prompt: "A stock with a very **low** P/E might be a \"value trap.\" What does that mean?",
    choices: [
      { id: "a", text: "It looks cheap, but it's cheap because the underlying business is declining" },
      { id: "b", text: "It's guaranteed to double in value" },
      { id: "c", text: "Its low P/E means it must be a bargain", feedback: "That's the very assumption a value trap punishes — low P/E can reflect a shrinking business." },
      { id: "d", text: "It trades at a high dollar price per share" },
    ],
    correctId: "a",
    explanation:
      "A **value trap** looks cheap on a low P/E but is cheap *for a reason* — the business is shrinking. The low price is the market's verdict, not a discount.",
  },
  {
    id: "what-expensive-means.q6",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "expensive", "growth"],
    prompt: "How can a higher price relative to *today's* earnings still be justified?",
    choices: [
      { id: "a", text: "If earnings are expected to grow into the price over time" },
      { id: "b", text: "It never can — today's earnings are all that matter" },
      { id: "c", text: "Only if the company does a stock split" },
      { id: "d", text: "Only if the share price is under $50" },
    ],
    correctId: "a",
    explanation:
      "Investors pay up for **expected growth**. A high price versus current earnings can be reasonable if those earnings are expected to rise and \"grow into\" the valuation.",
  },
  {
    id: "what-expensive-means.q7",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "expensive", "application", "scenario"],
    prompt:
      "Stock A: `$10`, EPS `$0.20`. Stock B: `$400`, EPS `$20`. Which is the more expensive stock?",
    choices: [
      { id: "a", text: "Stock B — its $400 price tag is far bigger", feedback: "Compute the P/E for each — the dollar price tag isn't what makes a stock expensive." },
      { id: "b", text: "Stock A — its P/E of 50 dwarfs B's P/E of 20" },
      { id: "c", text: "They're equally expensive" },
      { id: "d", text: "Stock B — because it has the higher EPS" },
    ],
    correctId: "b",
    explanation:
      "A: `10 ÷ 0.20 = 50`. B: `400 ÷ 20 = 20`. The cheap-*looking* $10 stock is actually the **more** expensive one at a P/E of 50 versus 20.",
  },
  {
    id: "what-expensive-means.q8",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "expensive", "application", "scenario"],
    prompt:
      "Stock A: `$8`, EPS `$0.10`. Stock B: `$250`, EPS `$12.50`. Which costs more per dollar of earnings?",
    choices: [
      { id: "a", text: "Stock A — P/E of 80 versus B's P/E of 20" },
      { id: "b", text: "Stock B — its high price makes it pricier", feedback: "B's price is higher, but B's P/E is only 20 — far below A's 80." },
      { id: "c", text: "They cost the same per dollar of earnings" },
      { id: "d", text: "Stock A — because its price is the lowest" },
    ],
    correctId: "a",
    explanation:
      "A: `8 ÷ 0.10 = 80`. B: `250 ÷ 12.50 = 20`. Stock **A** costs $80 per $1 of earnings versus $20 for B — four times more expensive, despite its tiny share price.",
  },
  {
    id: "what-expensive-means.q9",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "expensive", "relative"],
    prompt: "To judge whether a stock is expensive, the soundest approach is to compare its valuation against…",
    choices: [
      { id: "a", text: "Its own history, its peers, and its sector" },
      { id: "b", text: "Only the raw dollar price of one share" },
      { id: "c", text: "Whichever stock has the highest price that day" },
      { id: "d", text: "The number of shares it has outstanding" },
    ],
    correctId: "a",
    explanation:
      "Valuation is **relative**. You weigh a stock's P/E against its own past, its competitors, and its sector — never against a raw price tag.",
  },
  {
    id: "what-expensive-means.q10",
    lessonSlug: "what-expensive-means",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "expensive"],
    prompt: "Can a $5 stock be more expensive than a $500 stock?",
    choices: [
      { id: "a", text: "Yes — if the $5 stock's price is high relative to its earnings" },
      { id: "b", text: "No — the $500 stock is always more expensive" },
      { id: "c", text: "No — a $5 stock is always a bargain" },
      { id: "d", text: "Only if the $5 stock pays a dividend" },
    ],
    correctId: "a",
    explanation:
      "Absolutely. Expensive is about price *relative to value*, so a $5 stock with weak earnings can easily be pricier than a $500 stock that earns a great deal.",
  },
];
