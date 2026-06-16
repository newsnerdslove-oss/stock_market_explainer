import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "multi-timeframe-analysis",
  title: "Multi-Timeframe Analysis: Trade With the Higher TF",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 10,
  summary: "Read the trend on a higher timeframe, time the entry on a lower one — why alignment, not more charts, improves odds.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A single chart can lie by omission. A stock can be falling on the 1-hour while still climbing on the daily. **Multi-timeframe analysis** fixes that: read the *trend* on a higher timeframe, then *time the entry* on a lower one — in the higher timeframe's direction. This stacks probabilities in your favor, though as always nothing is guaranteed, and this is educational material only.",
    },
    { type: "heading", text: "Higher vs lower timeframe" },
    {
      type: "text",
      body:
        "The **higher timeframe (HTF)** sets the bias and the key levels — it's the strategic view. The **lower timeframe (LTF)** sets the entry, stop, and timing — more precise but noisier. The workflow is **top-down**: start on the HTF for context, then drill down to the LTF for the trigger.",
    },
    { type: "heading", text: "How many frames, and which ratio" },
    {
      type: "list",
      items: [
        "Use about **3 frames**: HTF for context, a middle frame for the setup, and the LTF for the trigger.",
        "A common ratio is roughly **4:1 to 6:1** — e.g. Daily → 1-hour, or Weekly → Daily.",
        "**HTF support/resistance is heavier** than LTF levels — give it more respect.",
        "Trading **counter-trend** to the HTF is a lower-probability bet.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Higher timeframe (HTF)", def: "The strategic chart that defines trend bias and key levels." },
        { term: "Lower timeframe (LTF)", def: "The tactical chart for entry, stop, and timing — more precise, noisier." },
        { term: "Top-down analysis", def: "Start on the HTF for context, then drill down to the LTF for the trigger." },
        { term: "Alignment", def: "HTF and LTF pointing the same way — the source of the edge." },
        { term: "Counter-trend trade", def: "An entry against the HTF trend — lower-probability." },
        { term: "Timeframe ratio", def: "The spacing between frames, commonly ~4:1 to 6:1 (Daily→1h, Weekly→Daily)." },
        { term: "Bias", def: "The directional lean set by the HTF that filters which LTF setups you take." },
      ],
    },
    { type: "heading", text: "Worked example: aligned long" },
    {
      type: "text",
      body:
        "On the **Daily (HTF)**, price is above a rising 200-MA, making higher highs and higher lows — an uptrend, so the bias is *longs only*. On the **4-hour (mid)**, price pulls back to support / a trendline. On the **1-hour (LTF)**, a bullish engulfing forms at that support on rising volume — that's the entry, with a stop just below support, taken *with* the daily uptrend. All three frames agree: high-probability.",
    },
    {
      type: "text",
      body:
        "Counter-example: that same 1-hour bullish engulfing forms while the **Daily is in a downtrend**. Now it's a *counter-trend* long — fighting the HTF — and a lower-probability trade even though the LTF signal looks identical.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: **conflicting timeframes** — HTF pointing up while the LTF drops sharply — give mixed signals; the disciplined move is often to *wait* until they realign. And stacking on *too many* frames creates **analysis paralysis**: more charts, more contradictions, no decision.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"more timeframes = more accuracy.\"* Beyond about 2–3 *aligned* frames, extra charts add noise and conflicting signals, not edge. The value comes from **alignment**, not quantity — pick a clean HTF/mid/LTF stack and let agreement, not the number of screens, drive the decision.",
    },
  ],
};
