import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "rsi-relative-strength-index",
  title: "RSI: Reading Momentum on a 0–100 Scale",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 2,
  summary: "A bounded momentum gauge — how RSI is computed, what 70 and 30 mean, and why it lies in strong trends.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "The **Relative Strength Index** (RSI) compresses recent price momentum into a single number between `0` and `100`. It answers a narrow question: *how lopsided have the last few moves been, up versus down?* Like all technical tools, its readings are probabilistic tendencies, not guarantees — and this is educational material, not financial advice.",
    },
    { type: "heading", text: "The formula" },
    {
      type: "text",
      body:
        "RSI uses a default period of `14`. First compute the average gain and average loss over those bars, then the **relative strength** `RS = AvgGain / AvgLoss`. Finally: `RSI = 100 − [100 / (1 + RS)]`. Because RS can never be negative, RSI is locked between `0` and `100`. If there were *no* down-periods, AvgLoss is `0`, RS is infinite, and RSI = `100`. If there were no gains, RSI = `0`.",
    },
    {
      type: "text",
      body:
        "After the first reading, RSI uses **Wilder's smoothing** to roll forward: `AvgGain = [(priorAvgGain × 13) + currentGain] / 14` (and the same for losses). This makes RSI respond smoothly rather than jumping on a single bar.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "RSI", def: "Relative Strength Index — momentum bounded on a `0–100` scale." },
        { term: "RS", def: "Relative strength = `AvgGain / AvgLoss` over the period." },
        { term: "Overbought", def: "RSI above `70` — recent gains have been lopsided. Not an automatic sell." },
        { term: "Oversold", def: "RSI below `30` — recent losses have been lopsided. Not an automatic buy." },
        { term: "Wilder's smoothing", def: "`AvgGain = [(priorAvg × 13) + currentGain] / 14` — the rolling update that smooths RSI." },
        { term: "Midline (50)", def: "RSI near `50` is neutral; above leans bullish momentum, below bearish." },
        { term: "Period (14)", def: "The default lookback. Shorter = jumpier; longer = smoother." },
      ],
    },
    { type: "heading", text: "Reading the bands" },
    {
      type: "list",
      items: [
        "**Above 70** — overbought; momentum has been strongly up.",
        "**Below 30** — oversold; momentum has been strongly down.",
        "**Around 50** — neutral, no clear momentum edge.",
        "Some traders use stricter **80 / 20** bands to cut false signals in trending names.",
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Suppose the average gain is `2.0` and the average loss is `1.0`. Then `RS = 2.0 / 1.0 = 2`, and `RSI = 100 − [100 / (1 + 2)] = 100 − 33.33 = 66.67` — strong but not yet overbought.",
    },
    {
      type: "text",
      body:
        "Now make the move more one-sided: average gain `4.0`, average loss `1.0`. `RS = 4`, so `RSI = 100 − [100 / (1 + 4)] = 100 − 20 = 80` — firmly overbought. The bigger the gains relative to losses, the closer RSI climbs toward `100`.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: in a **strong uptrend**, RSI can sit above `70` for weeks. Shorting every \"overbought\" reading bleeds you out while the trend keeps running. RSI also gets **jumpy** on low-volume or thin data, where a single bar swings the average.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"RSI > 70 means sell now.\"* Overbought ≠ sell. In a powerful trend, momentum stays stretched far longer than feels reasonable. Treat RSI as context: wait for it to *roll back* under 70 **and** confirm with price structure before acting.",
    },
  ],
};
