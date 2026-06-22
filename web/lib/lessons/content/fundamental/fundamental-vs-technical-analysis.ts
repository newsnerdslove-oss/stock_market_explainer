import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "fundamental-vs-technical-analysis",
  title: "Fundamental vs. Technical Analysis",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 10,
  summary: "Two schools of analysis: one values the business to decide WHAT to own, the other reads price and volume to decide WHEN to act.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Walk into any debate about a stock and you'll hear two languages. One side talks about **earnings, cash flow, and assets**; the other talks about **support, resistance, and volume**. These are the two great schools of market analysis — **fundamental** and **technical** — and most of the tools in this module belong to the first. This lesson frames both so you know which question each one answers. *(This is educational material, not financial advice.)*",
    },
    { type: "heading", text: "The two schools" },
    {
      type: "list",
      items: [
        "**Fundamental analysis** — values a security from the *business and the economy*. It studies earnings, cash flow, assets, debt, margins, and growth to estimate a company's **intrinsic value**, then compares that to the market price. It answers **WHAT to own**.",
        "**Technical analysis** — studies *price, volume, and charts* to read the balance of supply and demand. It largely ignores the business itself and looks for trends, patterns, and momentum. It answers **WHEN to act**.",
      ],
    },
    {
      type: "text",
      body:
        "A fundamental analyst asks, *'Is this business worth more than its price?'* A technical analyst asks, *'Which way is price moving, and how strong is the move?'* They aren't asking the same question — which is exactly why many investors use both.",
    },
    { type: "heading", text: "What each one assumes" },
    {
      type: "text",
      body:
        "The two schools rest on different bets about how markets work. Fundamental analysis assumes price can **drift away** from intrinsic value, and that careful study of the business reveals the gap before the crowd does. Technical analysis makes the opposite-feeling bet: that **the price already reflects everything** — fundamentals, news, and crowd psychology — so the chart itself is the data worth studying.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Technical analysis classically rests on three assumptions: **the market discounts everything** (all known information is already in the price), **prices move in trends**, and **history tends to repeat** because human behavior repeats. Fundamental analysis instead bets that price and value can diverge — and that the divergence is where opportunity lives.",
    },
    { type: "heading", text: "What each is best for" },
    {
      type: "list",
      items: [
        "**Fundamental** shines over the **long horizon** and for *selection* — deciding which companies are worth holding for years. It's the foundation of value and growth investing.",
        "**Technical** shines over **shorter horizons** and for *timing and risk* — picking entries and exits, sizing momentum, and setting stop levels. It's the everyday toolkit of active traders.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A clean way to remember it: **fundamentals tell you *what* and *why*; technicals tell you *when* and *how much*.** A great business bought at a terrible moment can still hurt; a perfect entry on a failing business still ends badly.",
    },
    { type: "heading", text: "How investors blend the two" },
    {
      type: "text",
      body:
        "In practice the line blurs. Many investors use fundamentals to build a *shortlist* of businesses they'd be happy to own, then use technicals to *time* entries and exits within that list. A portfolio manager might pick the stock on its cash flow and balance sheet, but wait for the chart to confirm a trend before buying. Neither school has to win for both to be useful.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Fundamental analysis", def: "Valuing a security from the business and economy — earnings, cash flow, assets, and growth — to estimate intrinsic value." },
        { term: "Technical analysis", def: "Studying price, volume, and chart patterns to read supply/demand and time decisions." },
        { term: "Intrinsic value", def: "An estimate of what a security is truly worth, independent of its current market price." },
        { term: "Support / resistance", def: "Price levels where buying (support) or selling (resistance) has tended to halt a move — staples of technical analysis." },
        { term: "Trend", def: "A sustained direction in price — up, down, or sideways — that technical analysis assumes tends to persist." },
        { term: "Discounts everything", def: "The technical premise that a price already reflects all known information and sentiment." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't treat these as *rivals where one must be 'right.'* They answer **different questions** — value vs. timing — and many investors blend them. Picking a school is a choice of *tool*, not a claim that the other is worthless.",
    },
  ],
};
