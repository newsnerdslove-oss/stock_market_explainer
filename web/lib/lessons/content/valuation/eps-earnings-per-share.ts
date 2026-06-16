import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "eps-earnings-per-share",
  title: "Earnings per share (EPS)",
  level: 1,
  moduleId: "markets-valuation",
  moduleOrder: 1,
  summary: "The profit-per-share number that sits underneath every P/E.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Before you can ask *is this stock expensive?*, you need to know what one share actually earns. That number is **earnings per share** (EPS) — and it's the quiet engine behind the most-quoted valuation metric of all.",
    },
    { type: "heading", text: "What EPS is" },
    {
      type: "text",
      body:
        "EPS is simply a company's profit sliced across its shares: `EPS = net income ÷ shares outstanding`. If a company earned **$500M** and has **250M** shares, each share earned `500 ÷ 250 = $2.00`. That's the profit attributable to one share over the period.",
    },
    {
      type: "text",
      body:
        "Companies report EPS **every quarter**. Analysts publish estimates ahead of time, and the result is judged against them — a **beat** (above estimate) or a **miss** (below). Surprises can move the stock sharply, even when the raw EPS looks fine, because the market trades on *expectations*.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "EPS", def: "Earnings per share — `net income ÷ shares outstanding`. The profit earned by one share." },
        { term: "Net income", def: "The company's bottom-line profit after all costs, interest, and taxes." },
        { term: "Shares outstanding", def: "The total number of shares currently held by all investors." },
        { term: "Earnings", def: "Another word for profit — what's left after expenses." },
        { term: "Beat / miss", def: "Actual EPS coming in above (beat) or below (miss) analyst estimates." },
      ],
    },
    { type: "heading", text: "How EPS feeds the P/E" },
    {
      type: "text",
      body:
        "EPS is the **denominator of the P/E ratio**: `P/E = share price ÷ EPS`. Take that $2.00 EPS company. If it trades at **$40** a share, its P/E is `40 ÷ 2 = 20` — investors pay $20 for every $1 the business earns per share. EPS on its own tells you nothing about value; only when you pair it with price does it become a valuation.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**\"Higher EPS = better/more expensive stock\" is wrong.** A $50 share with $5 EPS and a $5 share with $0.50 EPS have the *same* P/E of 10 — they're equally priced relative to earnings. EPS alone can't say whether a stock is cheap or dear; you have to weigh it against the price.",
    },
    { type: "heading", text: "When EPS breaks down" },
    {
      type: "list",
      items: [
        "**Negative EPS** — an unprofitable company has *negative* earnings per share, which makes the P/E ratio meaningless (you can't sensibly divide a price by a loss).",
        "**One-off items** — a single large gain or charge can swing reported EPS in a quarter without reflecting the ongoing business.",
        "**Share count changes** — buybacks shrink shares outstanding and lift EPS even if profit is flat; new issuance does the reverse.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Read EPS and price together. Higher EPS is generally a good thing, but it's only *comparable* once you divide the price by it — which is exactly the job the P/E ratio does.",
    },
  ],
};
