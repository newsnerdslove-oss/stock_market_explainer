import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "the-yield-curve",
  title: "The Yield Curve",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 6,
  summary: "A line of Treasury yields by maturity — and why its shape, especially an inversion, draws so much attention.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Line up the yields of the *same issuer* across maturities — from short bills to the `30`-year bond — and you get the **yield curve**. For US Treasuries, this curve is one of the most-watched charts in finance, because its *shape* says a lot about what markets expect.",
    },
    {
      type: "heading",
      text: "Three shapes",
    },
    {
      type: "list",
      items: [
        "**Normal (upward):** long yields are *higher* than short yields, rewarding investors for tying up money longer (the *term premium*). This is the usual state.",
        "**Flat:** short and long yields are roughly equal — often a transition phase.",
        "**Inverted:** short yields are *higher* than long yields. This is the shape everyone watches.",
      ],
    },
    {
      type: "heading",
      text: "Why an inversion gets attention",
    },
    {
      type: "text",
      body:
        "An **inverted** curve — for example, the `10`-year yielding *less* than the `2`-year — has preceded **every US recession since the 1970s**, typically leading by roughly `6`–`18` months (often about `12` months on average). It happens when the Fed pushes short rates up to fight inflation while investors, expecting a slowdown, bid up long bonds and pull long yields *down*.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Yield curve", def: "A plot of one issuer's yields (usually Treasury) across maturities." },
        { term: "Normal curve", def: "Upward-sloping: long yields exceed short yields. The usual shape." },
        { term: "Flat curve", def: "Short and long yields are roughly equal." },
        { term: "Inverted curve", def: "Short yields exceed long yields — a closely watched recession warning." },
        { term: "Term premium", def: "Extra yield demanded for the risk of lending over a longer period." },
        { term: "10y-2y spread", def: "The `10`-year yield minus the `2`-year yield; negative means inverted." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Suppose: `3`-mo `5.4%`, `2`-yr `4.9%`, `10`-yr `4.2%`, `30`-yr `4.4%`.",
        "Check the `10y−2y` spread: `4.2% − 4.9% = −0.7%` — negative, so the curve is **inverted**.",
        "Compare a normal curve: `2`-yr `3.0%`, `10`-yr `4.0%` → `10y−2y = 4.0% − 3.0% = +1.0%` (upward).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "There are several versions of the spread — `10y−2y` and `10y−3m` are the most cited — and they can disagree on *timing*. The signal is real but imprecise: lead times vary, and past patterns never guarantee the future.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "An inverted curve doesn't *cause* a recession, nor does it mean one is here *now*. It's a forward-looking **signal** that historically *leads* a downturn by months (`6`–`18`) — if a recession follows at all.",
    },
  ],
};
