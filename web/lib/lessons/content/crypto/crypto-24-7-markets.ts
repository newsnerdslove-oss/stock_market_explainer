import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-24-7-markets",
  title: "Markets that never close",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 4,
  summary: "Crypto trades every hour of every day — and 'always open' is a risk, not a comfort.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "The US stock market keeps office hours. Crypto doesn't sleep. That single difference changes how prices move — and how *you're* tempted to react to them.",
    },
    {
      type: "heading",
      text: "Two very different clocks",
    },
    {
      type: "list",
      items: [
        "**US stocks** trade roughly **9:30am–4:00pm ET on weekdays**, and are closed on weekends and holidays.",
        "**Crypto** trades **24/7/365** — no open, no close, no weekend break, across a global network.",
      ],
    },
    {
      type: "heading",
      text: "Why 'always on' is a risk",
    },
    {
      type: "list",
      items: [
        "Prices can move **sharply overnight or over the weekend** while you sleep — there's no *\"wait for the open\"* to buy you time.",
        "There's **no built-in pause or circuit breaker**, so a wave of panic or hype can run continuously with nothing to halt it.",
        "Constant access can quietly encourage **overtrading** and emotional, reactive decisions — a very real beginner risk.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "This is a point about **risk and behavior**, not a reason to trade more. Being able to trade at any hour is not the same as it being wise to.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Market hours", def: "The window when a market accepts trades (US stocks: ~9:30am–4:00pm ET weekdays)." },
        { term: "24/7/365", def: "Always open — every hour, every day, all year, like crypto markets." },
        { term: "Gap", def: "A jump in price between one session's close and the next session's open (a stock-market concept)." },
        { term: "Circuit breaker", def: "An automatic trading halt that pauses a market after extreme moves — crypto generally has none." },
        { term: "Overtrading", def: "Trading too often, frequently driven by emotion rather than a plan." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Big news breaks on **Saturday night**. A stock investor can't act until **Monday at 9:30am ET** — the market is simply closed. A crypto holder watching the same news can see a **15% drop play out in real time**, all weekend, with no close to halt it. Same news, completely different experience.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"24/7 means crypto is safer or steadier because I can always sell.\"* It's closer to the opposite — prices can crash at **any hour** with no close to pause the slide. **Availability is not safety.**",
    },
  ],
};
