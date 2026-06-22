import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "market-breadth-and-sentiment",
  title: "Market Breadth & Sentiment",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 11,
  summary:
    "Look past the index price itself — breadth measures how many stocks participate, and sentiment indicators fade the crowd at extremes.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "The earlier lessons read **price** and **volume** on a single chart. This one zooms out to two different lenses: **breadth** — how *many* stocks are participating in a move — and **sentiment** — how the *crowd is positioned*. Several of these are **contrarian** by design: when the crowd leans hard one way, the tool says lean the other. As always, these are odds-shifters, not triggers, and this is educational material, not financial advice.",
    },
    { type: "heading", text: "The advance/decline line (breadth)" },
    {
      type: "text",
      body:
        "Each day, count how many stocks **advanced** versus **declined**, take the difference (advances − declines), and keep a running total. That cumulative total is the **advance/decline (A/D) line**. It answers a question the index price can't: *is the whole army marching, or just the generals?* When the A/D line rises with the index, the rally has **breadth confirmation** — broad participation. When the index makes a new high but the A/D line does *not*, that's a **breadth divergence**: fewer and fewer names are carrying the index, a sign the advance is narrowing and weakening.",
    },
    { type: "heading", text: "Short interest theory (contrarian)" },
    {
      type: "text",
      body:
        "**Short interest** is the total number of shares sold short but not yet covered. In the U.S., **FINRA** requires firms to report short positions **twice a month** — as of the settlement date on or before the 15th, and as of the last business day of the month — due to FINRA by **6 p.m. ET on the second business day after** the reporting settlement date. The classic **short interest theory** is *contrarian* and may feel backwards: **high short interest is bullish**. Why? Every short must eventually **buy** the stock to close the position, so a large short interest is a reservoir of *future buying demand* — fuel that can power a **short squeeze** if the price rises and shorts rush to cover.",
    },
    { type: "heading", text: "Odd-lot theory (contrarian)" },
    {
      type: "text",
      body:
        "An **odd lot** is an order for *fewer than 100 shares* — historically the footprint of the small, less-informed retail trader. The **odd-lot theory** says **fade the odd-lotter**: when small traders are heavily *buying*, that's a sign of a top (be cautious); when they're heavily *selling*, a bottom may be near. The premise is that the small crowd tends to be wrong at extremes. Treat this one as a *historical* sentiment idea — fractional shares and modern retail order flow have eroded how clean the odd-lot signal is — but it's a staple of the SIE/Series-7 contrarian toolkit.",
    },
    { type: "heading", text: "The put/call ratio (sentiment)" },
    {
      type: "text",
      body:
        "The **put/call ratio** divides the volume of **put** options by the volume of **call** options (CBOE publishes the widely watched series). Puts profit when prices fall, calls when they rise, so the ratio is a direct read on fear vs. greed. A reading **above 1.0** means more puts than calls — net **bearish** positioning; **below 1.0** means call buying dominates — net **bullish/complacent** positioning. Used as a **contrarian** gauge: an *extremely high* ratio signals peak fear (a possible bottom), while an *extremely low* ratio signals peak greed/complacency (a possible top). It's the **extreme**, not the everyday reading, that carries the signal.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Breadth", def: "How many stocks participate in a move — measured by tools like the advance/decline line." },
        { term: "Advance/decline line", def: "Cumulative running total of (advancing stocks − declining stocks)." },
        { term: "Breadth divergence", def: "Index makes a new high but the A/D line doesn't — fewer names carrying it; a weakening signal." },
        { term: "Short interest", def: "Shares sold short but not yet covered; FINRA-reported twice a month." },
        { term: "Short squeeze", def: "Rising price forces shorts to buy to cover, accelerating the rise." },
        { term: "Short interest theory", def: "Contrarian: high short interest is bullish — future covering is latent buying demand." },
        { term: "Odd lot", def: "An order for fewer than 100 shares — the classic small-retail footprint." },
        { term: "Odd-lot theory", def: "Contrarian: fade the odd-lot trader, who tends to be wrong at extremes." },
        { term: "Put/call ratio", def: "Put volume ÷ call volume; >1 net bearish, <1 net bullish — a contrarian sentiment gauge at extremes." },
      ],
    },
    { type: "heading", text: "Worked example: a breadth divergence" },
    {
      type: "text",
      body:
        "An index touches a fresh 52-week high in March, then an even higher high in April. But the **A/D line** peaks in March and makes a *lower* high in April — the second push was carried by a shrinking handful of large names while most stocks lagged. That's a textbook **breadth divergence**: the rally is narrowing. It doesn't time the turn, but it flags that the move is running on fewer and fewer participants.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Why \"contrarian\" works here: **short interest** and the **put/call ratio** both measure *positions already taken*. Once nearly everyone is bearish (high short interest, high put/call), the marginal seller is exhausted and the only path left is buying back — so sentiment extremes tend to *precede* a reversal, not confirm the trend.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"high short interest means a stock is doomed.\"* The contrarian theory says the opposite — that latent covering demand can fuel a squeeze higher. But don't flip it into a rule either: high short interest can also reflect a genuinely broken company. Like every tool here, it shifts odds; pair it with breadth and price confirmation before acting.",
    },
  ],
};
