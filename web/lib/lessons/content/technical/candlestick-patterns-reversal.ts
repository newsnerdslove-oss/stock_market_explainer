import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "candlestick-patterns-reversal",
  title: "Candlestick Patterns: Doji, Hammer, Engulfing",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 7,
  summary: "The classic reversal candles — and why the same shape means opposite things depending on where it appears.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Candlestick patterns read the *psychology* inside one or two bars — who won the session, buyers or sellers. But here's the rule that separates beginners from the rest: **context decides meaning**. The identical candle is bullish in one spot and bearish in another. As always, these are probabilistic tendencies, not guarantees, and this is educational material only.",
    },
    { type: "heading", text: "Single candles" },
    {
      type: "list",
      items: [
        "**Doji** — open ≈ close (a tiny body): indecision. Meaningful mainly *after* an extended move.",
        "**Hammer** — small body near the *top*, long lower wick (~2× the body or more), appearing after a **downtrend** → bullish reversal candidate.",
        "**Hanging man** — the *same shape* as a hammer, but after an **uptrend** → bearish. Location flips the meaning.",
        "**Shooting star** — small body near the *low*, long upper wick, after an **uptrend** → bearish.",
      ],
    },
    { type: "heading", text: "Two-candle patterns" },
    {
      type: "list",
      items: [
        "**Bullish engulfing** — a green body fully engulfs the prior red body, after a downtrend.",
        "**Bearish engulfing** — a red body fully engulfs the prior green body, after an uptrend.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Doji", def: "Open ≈ close; a near-bodyless candle signaling indecision (meaningful after a move)." },
        { term: "Hammer", def: "Small body near the top with a long lower wick, after a downtrend → bullish candidate." },
        { term: "Hanging man", def: "The hammer shape after an uptrend → bearish. Same candle, opposite meaning." },
        { term: "Bullish engulfing", def: "A green body that fully engulfs the prior red body after a downtrend." },
        { term: "Bearish engulfing", def: "A red body that fully engulfs the prior green body after an uptrend." },
        { term: "Shooting star", def: "Small body near the low with a long upper wick, after an uptrend → bearish." },
        { term: "Confirmation candle", def: "The next bar moving in the pattern's direction, strengthening the signal." },
      ],
    },
    { type: "heading", text: "Worked example: hammer vs hanging man" },
    {
      type: "text",
      body:
        "After **5 down days**, a candle opens at `$30`, sells off to `$27`, then closes at `$29.80`. The body is `$30.00 − $29.80 = $0.20`. The lower wick runs from `$29.80` down to `$27` ≈ `$2.80` — about `14×` the body — with essentially no upper wick. That's a **hammer** after a downtrend: a bullish reversal candidate. **Confirmation** would be the next candle closing green, above the hammer's high (~`$30.50`).",
    },
    {
      type: "text",
      body:
        "Now imagine that *exact same candle* printing after an **uptrend** instead. Same `$0.20` body, same long lower wick — but now it's a **hanging man**, a *bearish* warning. Nothing about the candle changed; only its location did. That's why shape alone is never enough.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: a pattern **out of context** means little — a hammer sitting in the middle of a range with no prior downtrend isn't a reversal of anything. And single candles throw **frequent false signals** without confirmation; the next bar matters as much as the pattern bar.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"a hammer is always bullish\"* or *\"a doji always means a reversal.\"* Shape alone is insufficient. The same hammer shape after an uptrend is a *hanging man* (bearish), and a doji only matters after an extended move and *with confirmation*. Read the candle plus its location plus the next bar.",
    },
  ],
};
