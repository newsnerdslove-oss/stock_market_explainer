import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "divergence-price-vs-indicator",
  title: "Divergence: When Price and Momentum Disagree",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 9,
  summary: "When price and an indicator point different ways — regular divergence warns of reversal, hidden divergence of continuation.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**Divergence** is the gap between what price is doing and what a momentum indicator (RSI or MACD) is doing at the same swing points. When they disagree, the move may be running on fumes — or, in the hidden case, getting ready to resume. These are odds-shifters, not triggers, and this is educational material only.",
    },
    { type: "heading", text: "Regular divergence: a reversal warning" },
    {
      type: "text",
      body:
        "**Regular bearish** divergence: price makes a **higher high** but the indicator makes a **lower high** — the new price high came on *less* momentum, so the uptrend is weakening (reversal-down warning). **Regular bullish** divergence is the mirror: price makes a **lower low** while the indicator makes a **higher low** — the downtrend is weakening (reversal-up warning). The takeaway: **regular = reversal warning**.",
    },
    { type: "heading", text: "Hidden divergence: a continuation cue" },
    {
      type: "text",
      body:
        "**Hidden bullish** divergence appears *within an uptrend*: price makes a **higher low** but the indicator makes a **lower low** → the trend is likely to *continue up*. **Hidden bearish** divergence appears within a downtrend: price makes a **lower high** but the indicator makes a **higher high** → continuation *down*. The takeaway: **hidden = continuation**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Divergence", def: "Price and a momentum indicator disagreeing at the same swing points." },
        { term: "Regular bullish divergence", def: "Price lower low, indicator higher low → reversal-up warning." },
        { term: "Regular bearish divergence", def: "Price higher high, indicator lower high → reversal-down warning." },
        { term: "Hidden bullish divergence", def: "Uptrend: price higher low, indicator lower low → continuation up." },
        { term: "Hidden bearish divergence", def: "Downtrend: price lower high, indicator higher high → continuation down." },
        { term: "Reversal signal", def: "What regular divergence flags — momentum no longer confirms the trend." },
        { term: "Continuation signal", def: "What hidden divergence flags — the prevailing trend likely resumes." },
      ],
    },
    { type: "heading", text: "Worked example: regular bearish" },
    {
      type: "text",
      body:
        "At swing high A, price is `$100` and RSI is `78`. At swing high B, price is `$108` — a **higher high** — but RSI is `71`, a **lower high**. The new price peak was made on *less* momentum: that's **regular bearish divergence**. The odds of a reversal rise, though you'd still wait for a structure break to confirm timing.",
    },
    {
      type: "text",
      body:
        "Now a **hidden bullish** example inside an uptrend: at the first pullback low, price is `$50` with RSI `40`. At the next pullback, price holds a **higher low** of `$55`, but RSI prints a **lower low** of `35`. Price is stronger than momentum suggests — a continuation-higher cue.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: in **strong trends**, divergence appears again and again and \"fails.\" Shorting the *first* regular bearish divergence in a raging bull market gets you stopped out repeatedly — the divergence recurs as the trend keeps grinding higher. Divergence also has **no built-in timing**; it can signal weeks before anything happens.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"divergence means reverse right now.\"* It doesn't. It flags **weakening or strengthening momentum** and shifts the odds — it's not a timing trigger. It can persist and fail in strong trends, so always pair it with confirmation (a structure break, a trendline break) before acting.",
    },
  ],
};
