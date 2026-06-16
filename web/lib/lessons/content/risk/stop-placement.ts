import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "stop-placement",
  title: "Stop Placement: Where the Stop Belongs",
  level: 2,
  moduleId: "markets-risk",
  moduleOrder: 3,
  summary: "Put your stop where the trade idea is proven wrong — not at a round number — and let that distance drive your size.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A stop-loss isn't a panic button or a round number you picked because it felt safe. It's the price that says *the reason I took this trade no longer holds*. Place it where the thesis is **invalidated**, and everything else — including how many shares you buy — follows from there.",
    },
    { type: "heading", text: "Place it at structure" },
    {
      type: "text",
      body:
        "For a long, the idea usually breaks if price falls **below support**; for a short, if it rises **above resistance**. So the stop goes just beyond that level — with a small buffer, because exact levels get tested. If support sits at `$48.00`, a stop at `$47.80` gives the level a little room.",
    },
    {
      type: "text",
      body:
        "A second method is the **volatility stop** using ATR (Average True Range): `Stop = Entry − (k × ATR)` for a long, with `k` typically `1.5–2`. This sizes the stop to how much the stock normally moves, so a jumpy stock gets a wider stop than a sleepy one.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Stop-loss", def: "An order that exits the trade at a preset price to cap the loss." },
        { term: "Support / resistance", def: "Price levels where buyers (support) or sellers (resistance) have historically stepped in." },
        { term: "ATR", def: "Average True Range — a measure of a stock's typical price movement per period." },
        { term: "Buffer", def: "A small extra margin placed beyond the level so normal testing doesn't trigger the stop." },
        { term: "Whipsaw", def: "Getting stopped out by random noise just before price moves your way." },
        { term: "Stop-hunting", def: "Price briefly spiking through obvious stop levels (round numbers, swing lows) before reversing." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Stock at `$50`, support at `$48`, ATR `$1`, account `$10,000`, risk `1%` → dollar risk `1R = $100`. Compare the two stop methods:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Structure stop**: just below support, `$48 − $0.20 = $47.80`. Risk per share = `$50 − $47.80 = $2.20`. Shares = `$100 ÷ $2.20 = 45.45 → 45 shares` (round down).",
        "**Volatility stop**: `2 × ATR = $2`, so stop = `$50 − $2 = $48`. Risk per share = `$2`. Shares = `$100 ÷ $2 = 50 shares`.",
      ],
    },
    {
      type: "text",
      body:
        "The key sequence: **stop placement comes first** (from structure or volatility), and **size comes second** (compute shares from that distance). Never the other way around.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: round numbers and obvious swing lows attract **stop-hunting**, so place your stop *just beyond* them rather than right on them. And a gap-down straight through your stop fills at the open — meaning a real loss can exceed `1R`. A stop limits *intended* risk, not gap risk.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"A tighter stop is always safer.\"* A tighter stop does lower the per-share risk, but it raises the odds of being shaken out by ordinary noise (whipsaw). The correct stop is where the **idea is wrong** — not the smallest number you can stomach. And once you're in, never *widen* a stop to avoid taking the loss.",
    },
  ],
};
