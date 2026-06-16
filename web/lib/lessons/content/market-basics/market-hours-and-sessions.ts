import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "market-hours-and-sessions",
  title: "Market Hours & Sessions",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 3,
  summary: "When the market is open, when it isn't, and why trading before 9:30 is riskier.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Unlike crypto, the U.S. stock market keeps office hours. Knowing exactly when it's open — and what 'extended hours' really means — keeps you from being surprised by a frozen price or a wild swing.",
    },
    { type: "heading", text: "The regular session" },
    {
      type: "text",
      body:
        "The main trading session runs **9:30 AM to 4:00 PM Eastern Time**, Monday through Friday. The market is closed on weekends and on market holidays. This is when volume is highest and prices are most reliable.",
    },
    { type: "heading", text: "Pre-market and after-hours" },
    {
      type: "list",
      items: [
        "**Pre-market** trading can start as early as `4:00 AM ET` (on Nasdaq) and runs up to the `9:30 AM` open.",
        "**After-hours** trading runs from `4:00 PM` to `8:00 PM ET`, right after the regular session ends.",
        "Together these are called **extended hours** — open, but very different from the regular session.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Extended-hours sessions have **lower volume**, **wider spreads**, and **more volatility**. The same headline can swing a thinly traded pre-market price far more than it would at 10 AM.",
    },
    { type: "heading", text: "Holidays, early closes, and 'ET'" },
    {
      type: "text",
      body:
        "The market closes entirely on holidays and occasionally has an **early close** at `1:00 PM ET` (often around holidays). Note that **ET** shifts between EST and EDT with daylight saving, but the clock times — 9:30 to 4:00 — stay the same.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Regular session", def: "The main trading window: 9:30 AM–4:00 PM ET, Mon–Fri." },
        { term: "Pre-market", def: "Early trading before the open, from about 4:00 AM ET on Nasdaq." },
        { term: "After-hours", def: "Trading from 4:00 PM to 8:00 PM ET after the close." },
        { term: "Eastern Time (ET)", def: "The reference time zone for U.S. markets; shifts EST/EDT but keeps the same clock hours." },
        { term: "Extended hours", def: "Pre-market plus after-hours — thinner, more volatile trading." },
        { term: "Early close", def: "A shortened day, often ending at 1:00 PM ET around holidays." },
      ],
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "You place an order at `8:00 AM ET`. It either waits for the `9:30` open or trades thinly in the pre-market. Now suppose a company reports earnings at `4:15 PM ET` — after the regular close. The reaction plays out in **after-hours** trading (up to `8:00 PM ET`), not the next morning's open.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "If you trade in extended hours, consider a limit order. Thin volume and wide spreads mean a market order can fill at a surprisingly bad price.",
    },
  ],
};
