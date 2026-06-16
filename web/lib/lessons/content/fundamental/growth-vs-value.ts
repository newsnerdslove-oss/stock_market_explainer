import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "growth-vs-value",
  title: "Growth vs. Value: Two Investing Styles",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 9,
  summary: "Why multiples diverge between fast growers and cheap stalwarts — and why a low P/E doesn't automatically win.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Investors loosely sort stocks into two camps: **growth** and **value**. Knowing the difference explains why one company can trade at `50×` earnings and another at `10×` — and why the cheaper one isn't automatically the better buy. *(This is educational material, not financial advice.)*",
    },
    { type: "heading", text: "The two styles" },
    {
      type: "list",
      items: [
        "**Growth** — rapidly rising revenue and earnings. Investors pay a high price *for future growth*, and the company usually reinvests profits (low or no dividend).",
        "**Value** — cheap relative to fundamentals. The bet is that the market is underpricing a sound business; these stocks often pay dividends.",
      ],
    },
    {
      type: "text",
      body:
        "This is why multiples diverge: growth stocks carry **high P/E, P/S, and P/B**; value stocks carry **low multiples** and often dividends. The **PEG ratio** bridges the two — it asks whether a high P/E is *justified* by the growth behind it.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Neither style wins permanently. Growth tends to lead in expansions and when rates are low; value tends to do better when rates rise and high-growth names re-price. Markets rotate between them — that rotation is itself a style.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Growth stock", def: "A company with fast-rising revenue/earnings, a high multiple, and little or no dividend." },
        { term: "Value stock", def: "A company priced cheaply vs. fundamentals, often with a dividend." },
        { term: "Multiple", def: "A valuation ratio like P/E, P/S, or P/B." },
        { term: "De-rating (multiple compression)", def: "When a stock's multiple falls as growth slows, even if earnings rise." },
        { term: "Value trap", def: "A low-multiple stock that's cheap because its business is deteriorating." },
        { term: "Style rotation", def: "The market's shifting preference between growth and value over time." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Compare two companies. **Growth Co**: price `$100`, EPS `$2`, growth `30%`, no dividend. **Value Co**: price `$30`, EPS `$3`, growth `4%`, `4%` dividend.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Growth Co **P/E** = `100 ÷ 2 = 50`; **PEG** = `50 ÷ 30 = 1.67`.",
        "Value Co **P/E** = `30 ÷ 3 = 10`; **PEG** = `10 ÷ 4 = 2.5`.",
      ],
    },
    {
      type: "text",
      body:
        "Value Co has a far lower P/E (`10` vs `50`) — yet a **higher** PEG (`2.5` vs `1.67`), because its growth is so slow. On a growth-adjusted basis, the 'cheap' stock is actually the *pricier* of the two. A low P/E alone doesn't make it the better value.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Labels are a *spectrum*, and they shift: a former growth darling becomes a value name as its growth fades. The risk cuts both ways — a low-multiple value stock can be a **value trap**, while a high-multiple growth stock can disappoint and **de-rate** (multiple compression) hard.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *value (low P/E) is always safer or cheaper than growth*. A low multiple can reflect a deteriorating business, and — as the example shows — PEG can make a 'cheap' stock look expensive. A lower multiple is not automatically a better deal.",
    },
  ],
};
