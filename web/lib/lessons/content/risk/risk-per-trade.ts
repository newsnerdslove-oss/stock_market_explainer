import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "risk-per-trade",
  title: "Risk Per Trade: The 1–2% Rule",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 2,
  summary: "Why capping the loss on any single trade at 1–2% of your account is what keeps you in the game through bad streaks.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Every trader hits a losing streak. The question is whether the streak is a flesh wound or a fatal blow — and that's decided *before* the streak ever starts, by how much you risk per trade.",
    },
    {
      type: "text",
      body:
        "The classic rule: **risk only 1–2% of your account equity on any one trade**. On a `$10,000` account that's `$100–$200` of dollar risk per trade. This single number sets your `1R` and feeds straight into position sizing.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Risk per trade", def: "The percentage of account equity you're willing to lose on one trade — typically 1–2%." },
        { term: "Equity", def: "Your current account balance. Risk % is taken of *this* number, which shrinks as you lose." },
        { term: "Losing streak", def: "A run of consecutive losing trades — unavoidable over a long enough sample." },
        { term: "Capital preservation", def: "Protecting your account so you survive to keep trading. The first job of risk management." },
        { term: "Open (aggregate) risk", def: "The total risk across *all* open positions at once. Worth capping (e.g. 6%) so correlated trades don't stack." },
        { term: "Risk of ruin", def: "The probability of losing enough capital that you can't recover. Falls sharply as risk-per-trade falls." },
      ],
    },
    { type: "heading", text: "Survival math" },
    {
      type: "text",
      body:
        "Small risk buys staying power. At `1%` risk it takes roughly **69 straight losses** to halve your account; at `10%` it takes only about **7**. Here's a 10-loss streak side by side, with each loss taken on the *shrinking* balance:",
    },
    {
      type: "list",
      items: [
        "At `1%`: `$10,000 × 0.99^10 ≈ $9,044` — a drawdown of about `−9.6%`. Easily recovered.",
        "At `10%`: `$10,000 × 0.90^10 ≈ $3,487` — a drawdown of about `−65%`, which now needs roughly `+186%` just to get back to even.",
      ],
    },
    {
      type: "text",
      body:
        "Same ten losses. One trader is barely dented; the other is nearly wiped out. That's the whole argument for keeping risk-per-trade small — it trades a little return-per-trade for a lot of survivability.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A sensible scale: `0.5–1%` for conservative or new traders, with `2%` as an upper bound. Also cap your **total open risk** (e.g. `6%`) so several positions can't quietly add up to one huge bet.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case — correlation hides risk. Risking `1%` on eight different semiconductor names isn't eight independent 1% bets; if the sector moves together it behaves like a single `~8%` bet. \"1% risk\" means 1% of the **account**, and you still have to watch how positions cluster.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Risking 2% means I can only lose 2% total.\"* No — it's 2% **per trade**, and consecutive losses compound. The rule limits the damage from any *single* trade; it does not cap your total drawdown across a streak.",
    },
  ],
};
