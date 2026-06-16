import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "support-and-resistance",
  title: "Support & Resistance",
  level: 1,
  moduleId: "markets-reading-price",
  moduleOrder: 6,
  summary: "The floors and ceilings where prices tend to pause — and why they form.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Watch a stock long enough and you'll notice it keeps stalling near the same prices — bouncing off a **floor** down low and bumping into a **ceiling** up high. Those areas are called **support** and **resistance**, and they're some of the most-discussed ideas in chart reading.",
    },
    { type: "heading", text: "Floors and ceilings" },
    {
      type: "list",
      items: [
        "**Support** — a price area where **buyers tend to step in**, slowing or stopping a fall. Think of it as a floor.",
        "**Resistance** — a price area where **sellers tend to step in**, capping a rise. Think of it as a ceiling.",
      ],
    },
    { type: "heading", text: "Why they form" },
    {
      type: "text",
      body:
        "These levels exist largely because traders **react to remembered past prices**. If a stock bounced at `$100` before, people watch for it to bounce there again — and their buying can make it happen. That shared memory is self-reinforcing, but it's a behavioral tendency, not a law of physics.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "support", def: "A price area where buyers tend to step in — a floor under the price." },
        { term: "resistance", def: "A price area where sellers tend to step in — a ceiling over the price." },
        { term: "breakout", def: "A decisive move through a support or resistance level." },
        { term: "role reversal", def: "When broken resistance becomes new support (or vice versa)." },
        { term: "zone", def: "A range of prices, not an exact line — support and resistance are approximate." },
        { term: "bounce", def: "When price reaches a level and reverses away from it." },
      ],
    },
    { type: "heading", text: "They're zones, and they flip" },
    {
      type: "text",
      body:
        "Support and resistance are **zones**, not exact lines — a stock might turn anywhere within a small range. And when price **decisively breaks** a level, that old barrier often flips roles: broken **resistance can become new support**. This is called **role reversal**.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A stock dips to near `$100` and bounces — three separate times. That area is acting as **support**. Up top, it keeps stalling near `$120` — that's **resistance**. Then a strong, high-volume **breakout** carries it above `$120`. Afterward, pullbacks find a floor right at `$120`: the old resistance has become new **support**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A common myth: *support and resistance are exact prices a stock can never cross.* They're **approximate zones**, and prices break through them all the time — especially on big news or heavy volume. They mark where reversals are **more likely**, not certain. These are tendencies, not guarantees.",
    },
  ],
};
