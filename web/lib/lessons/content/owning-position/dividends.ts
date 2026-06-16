import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "dividends",
  title: "Dividends",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 5,
  summary: "Getting paid just for holding — how to size it, and the one date that decides whether you actually get it.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Some stocks pay you simply for owning them. That cash payment is a **dividend** — a slice of the company's profits handed back to shareholders. Not every company pays one: many fast-growing firms reinvest every dollar instead. But for those that do, there's real money on offer — and one date that decides who actually receives it.",
    },
    {
      type: "text",
      body:
        "A dividend is usually quoted per share — the **dividend per share (DPS)**. Your payment is simply `DPS × shares you own`. To compare dividends across stocks of different prices, you use the **dividend yield**: `annual DPS ÷ share price`, expressed as a percent.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Dividend", def: "Cash a company pays shareholders out of its profits." },
        { term: "Dividend per share (DPS)", def: "The cash paid per share. Your payout = `DPS × shares`." },
        { term: "Dividend yield", def: "`annual DPS ÷ share price`, as a percent — the income rate of the stock." },
        { term: "Ex-dividend date", def: "Buy on or after this date and you do NOT get the dividend — the seller does." },
        { term: "Record date", def: "The day the company checks its books for shareholders. Under T+1 it falls on the same day as the ex-date." },
        { term: "Payment date", def: "The day the cash actually lands in your account." },
      ],
    },
    { type: "heading", text: "The four dates" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Declaration date** — the company announces the dividend.",
        "**Ex-dividend date** — the cutoff. To get paid you must already own the shares **before** this date; buy on or after it and the *seller* keeps the dividend.",
        "**Record date** — the company tallies who's on the books. Under today's **T+1** settlement, this falls on the **same day** as the ex-dividend date.",
        "**Payment date** — the cash arrives.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "It's not free money. On the ex-dividend date the share price typically **drops by roughly the dividend amount** — the cash leaving the company comes out of the stock's value.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "A stock pays **$0.50 per quarter** → annual DPS = `$0.50 × 4 = $2.00`.",
        "At a share price of **$50**, yield = `$2.00 ÷ $50 = 4%`.",
        "You own **200 shares** and bought them **before** the ex-dividend date.",
        "Your quarterly payout = `200 × $0.50 = $100`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: \"I'll buy the day before the **payment** date and collect the cash.\" No — eligibility is locked by the **ex-dividend date**, not the payment date. Own the shares before the ex-date or the seller gets the dividend, even though the cash pays out weeks later.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "In the U.S., **qualified** dividends can be taxed at lower long-term rates if a holding-period test is met, while **ordinary** dividends are taxed at your regular income rate. (Educational only — not tax advice.)",
    },
  ],
};
