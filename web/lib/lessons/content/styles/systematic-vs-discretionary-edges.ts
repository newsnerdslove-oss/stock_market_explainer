import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "systematic-vs-discretionary-edges",
  title: "Rules vs Judgment, and Two Classic Edges",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 5,
  summary: "Systematic vs discretionary trading, the trend-following and mean-reversion edges, and where each one fails.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Two questions cut across every trading style: *How do you decide?* and *What's your edge?* The first splits into **systematic vs discretionary**. The second usually comes down to two classic edges — **trend following** and **mean reversion**. Understanding both, and especially their *failure modes*, matters more than picking a label.",
    },
    { type: "heading", text: "Rules vs judgment" },
    {
      type: "text",
      body:
        "A **systematic** (rules-based) trader follows predefined signals: if X, then trade. It's consistent, **testable**, and removes emotion from the moment of decision. The cost is rigidity — a rulebook can keep losing when the **market regime** changes underneath it. A **discretionary** trader interprets context and adapts, which is flexible but invites **bias, inconsistency, and emotion**. Most real traders **blend** both: rules for structure, judgment for context.",
    },
    { type: "heading", text: "The two classic edges" },
    {
      type: "list",
      items: [
        "**Trend following** — bets that moves *persist*. You buy strength and sell weakness. Profile: **low win rate, large average winner**. Failure mode: **choppy, range-bound markets**, where it gets whipsawed.",
        "**Mean reversion** — bets that price *snaps back* to an average. You buy weakness and sell strength. Profile: **high win rate, occasional large losers**. Failure mode: **strong trends and breakouts**, where the cheap thing just keeps getting cheaper.",
      ],
    },
    {
      type: "text",
      body:
        "Notice these are **complementary**: each one fails exactly where the other works. That's why some traders run both — when one edge is being punished by the regime, the other is often being paid. The key discipline is knowing your edge's failure mode *before* you trade it, so a losing streak doesn't surprise you into abandoning a sound approach at the worst time.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Systematic trading", def: "Trading by predefined, rules-based signals — consistent and testable, but rigid when the regime shifts." },
        { term: "Discretionary trading", def: "Trading on in-the-moment judgment and context — adaptable, but prone to bias and inconsistency." },
        { term: "Trend following", def: "An edge that buys strength / sells weakness, expecting moves to persist. Low win rate, large winners." },
        { term: "Mean reversion", def: "An edge that buys weakness / sells strength, expecting a snap-back to average. High win rate, occasional large losers." },
        { term: "Market regime", def: "The prevailing character of the market — trending vs range-bound — which determines which edge gets paid." },
        { term: "Overfitting", def: "Tuning a system so tightly to past data that it captures noise, not signal — it looks great in backtest and fails live." },
      ],
    },
    { type: "heading", text: "Worked scenario: same chart, opposite trades" },
    {
      type: "text",
      body:
        "A stock falls **12% in three days** to a price level where it has bounced before. The **mean-reversion** trader sees *'oversold at support — buy the bounce.'* That **wins if it bounces** and **loses big if a real downtrend has begun**. The **trend follower** sees the same chart and reads *'lower lows, momentum down — sell, short, or stand aside.'* That **wins if the decline continues** and gets **whipsawed if it sharply reverses**. Same picture, opposite trades — because each is built for a different regime.",
    },
    {
      type: "text",
      body:
        "Which one is 'right' depends entirely on the regime that follows. In a **range-bound** market, mean reversion gets paid and trend following whipsaws. In a **strong trend**, trend following gets paid and mean reversion gets run over. Neither is universally better; each is a tool matched to a condition.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: mean reversion's **rare large losers can erase a long streak of small wins** — that tail risk is the hidden cost behind its comforting high win rate. And a system that's profitable in **backtest can still fail live** from **overfitting** or a **regime shift** the test never saw.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'systematic or algorithmic trading is automatically safer, or guaranteed to win.'* Rules remove **emotion**, not **risk**. A system can be flat wrong for the current regime, or curve-fit to the past so tightly that it breaks the moment conditions change. Educational content, not financial advice.",
    },
  ],
};
