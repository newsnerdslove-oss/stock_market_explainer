import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-expensive-means",
  title: "What \"expensive\" really means",
  level: 1,
  moduleId: "markets-valuation",
  moduleOrder: 4,
  summary: "A $5 stock can be expensive and a $500 stock cheap — here's why.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "\"That stock is too expensive — it's $500 a share.\" It sounds reasonable, and it's one of the most common beginner mistakes. In investing, **expensive** has almost nothing to do with the size of the price tag.",
    },
    { type: "heading", text: "Expensive means relative to what you get" },
    {
      type: "text",
      body:
        "A stock is *expensive* when its price is high **relative to what the share delivers** — its earnings, growth, or assets — not when the dollar number is large. By that measure a **$5** stock can be wildly expensive and a **$500** stock a bargain. The dollar price per share, on its own, is essentially arbitrary.",
    },
    {
      type: "text",
      body:
        "**Stock splits** prove it. A company that does a 10-for-1 split turns one $1,000 share into ten $100 shares. The price per share dropped 90%, but you own the same slice of the same business — nothing about how *expensive* the company is has changed at all.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Valuation", def: "How a company's price compares to its fundamentals — earnings, growth, and assets." },
        { term: "Expensive (overvalued)", def: "A price that's high relative to what the share delivers, not a large dollar price tag." },
        { term: "Value trap", def: "A stock that looks cheap on a low P/E but is cheap because the business is declining." },
        { term: "Stock split", def: "Dividing existing shares into more shares — lowers the price per share without changing the company's value." },
        { term: "Relative valuation", def: "Judging a price by comparison — against the company's own history, its peers, and its sector." },
      ],
    },
    { type: "heading", text: "Cheap and dear are relative" },
    {
      type: "text",
      body:
        "Because price only means something next to fundamentals, valuation is always **relative** — to the company's own past, to its competitors, and to its sector. A P/E of **30** can be perfectly fair for fast-growing software and steep for a sleepy utility. A higher price versus *today's* earnings can be justified if earnings are expected to grow into it.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Worked example: Stock A trades at **$10** with EPS of **$0.20** → P/E `10 ÷ 0.20 = 50`. Stock B trades at **$400** with EPS of **$20** → P/E `400 ÷ 20 = 20`. The cheap-*looking* $10 stock is actually the *more* expensive one.",
    },
    { type: "heading", text: "The value trap" },
    {
      type: "text",
      body:
        "The flip side is just as dangerous. A stock with a low P/E can look like a bargain when it's really a **value trap** — cheap *because* the underlying business is shrinking. The low price is the market's verdict, not a discount waiting to be claimed.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**\"A low share price means it's cheap\" is a myth.** Cheapness is price *relative to value*, and a split can cut the price without making the company any cheaper. Judge expensive with a valuation measure like the P/E — never the raw dollar price.",
    },
  ],
};
