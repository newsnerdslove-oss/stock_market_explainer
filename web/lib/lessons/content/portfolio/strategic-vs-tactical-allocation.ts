import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "strategic-vs-tactical-allocation",
  title: "Strategic vs. Tactical Allocation",
  level: 2,
  moduleId: "markets-portfolio",
  moduleOrder: 8,
  summary:
    "Two layers of asset allocation: a long-term strategic target you keep rebalancing back to, and deliberate shorter-term tactical tilts within set bands — plus the core-satellite way to build them.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You already know **asset allocation** is the high-level split across stocks, bonds, and cash. But that mix really lives on two layers. The bottom layer is your long-run **target** — the `60/40` you set once and keep returning to. The top layer is any **deliberate short-term tilt** away from that target to act on a view. The first layer is about **discipline**; the second is about **flexibility**. Knowing which layer you're operating on keeps a 'good idea' from quietly wrecking a sound plan.",
    },
    {
      type: "heading",
      text: "Strategic allocation: the long-term target",
    },
    {
      type: "text",
      body:
        "**Strategic asset allocation** is your long-term target mix — say `60%` stocks / `40%` bonds — set from your **goals**, **risk tolerance**, and **time horizon**. It's chosen deliberately and reviewed occasionally, not changed on a whim. The whole point is to **rebalance back** to it: when drift pushes the mix off target, you trade it back. The SEC's investor education materials describe exactly this — pick an allocation that fits your timeline and risk level, then bring the portfolio back to that mix on a relatively infrequent basis, such as **every six or twelve months**. Strategic allocation is the **anchor**.",
    },
    {
      type: "heading",
      text: "Tactical allocation: deliberate short-term tilts",
    },
    {
      type: "text",
      body:
        "**Tactical asset allocation** is a deliberate, shorter-term shift *away* from the strategic target to act on a view about markets. If you think stocks are cheap, you might **overweight** them — push stocks above their `60%` target — and **underweight** bonds. The tilt is temporary and, crucially, **bounded**: disciplined investors set **bands** (e.g. allow stocks to range `55–65%`) so a tactical bet can never blow past a hard limit. Tactical allocation trades the strategic plan's discipline for **flexibility** — and that flexibility is also its risk: it's a form of market timing, which is hard to get right consistently.",
    },
    {
      type: "list",
      items: [
        "**Overweight** — holding *more* of an asset class than its strategic target (e.g. stocks at `65%` vs a `60%` target).",
        "**Underweight** — holding *less* than the target (e.g. bonds at `35%` vs a `40%` target).",
        "**Bands** — the allowed range around each target (e.g. `±5` points) that caps how far a tactical tilt can go.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Strategic asset allocation", def: "The long-term target mix set from goals, risk tolerance, and horizon — the level you rebalance back to." },
        { term: "Tactical asset allocation", def: "A deliberate, temporary tilt away from the strategic target to act on a market view." },
        { term: "Overweight", def: "Holding more of an asset class than its strategic target weight." },
        { term: "Underweight", def: "Holding less of an asset class than its strategic target weight." },
        { term: "Bands", def: "The allowed range around each target weight that caps how far a tactical tilt (or drift) may run." },
        { term: "Core-satellite", def: "A construction with a large passive core plus smaller active satellites." },
        { term: "Core", def: "The large, low-cost, passive base of a core-satellite portfolio, aligned to the strategic mix." },
        { term: "Satellite", def: "A smaller, active or specialized holding bolted onto the core to add a tilt." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: a tilt within bands",
    },
    {
      type: "text",
      body:
        "Strategic target `60/40`. You set bands of `±5` points, so stocks may sit anywhere in `55–65%`. You turn bullish and tilt to **`65%` stocks / `35%` bonds** — a tactical overweight in stocks, underweight in bonds. On a `$200,000` portfolio that's the difference between the target and the tilt:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Strategic dollars: stocks `0.60 × 200,000 = $120,000`, bonds `0.40 × 200,000 = $80,000`.",
        "Tactical dollars: stocks `0.65 × 200,000 = $130,000`, bonds `0.35 × 200,000 = $70,000`.",
        "The tilt: move `$10,000` from bonds into stocks — and stocks at `65%` sit right at the **edge** of the `55–65%` band, not beyond it.",
      ],
    },
    {
      type: "text",
      body:
        "If your view plays out, the overweight adds return; if it doesn't, the band limits the damage and your rebalancing discipline pulls you back toward `60/40`. Notice the two layers working together: **tactical** flexibility *inside* the guardrails set by your **strategic** discipline.",
    },
    {
      type: "heading",
      text: "Core-satellite: building the two layers",
    },
    {
      type: "text",
      body:
        "A common way to house both layers is **core-satellite**. The **core** — usually the large majority of the portfolio — is low-cost, broadly diversified, and *passive*, built to track the strategic mix (think a total-market index fund plus a bond fund). Around it sit a few smaller **satellites** — active funds, a sector tilt, or a thematic bet — that express tactical views. The core delivers **discipline and broad market exposure cheaply**; the satellites add **flexibility** without letting any single active bet dominate. If a satellite idea fails, the diversified core still carries the portfolio.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Discipline vs. flexibility is the whole trade-off. **Strategic** allocation (and the rebalancing that enforces it) is *discipline* — it keeps your risk level where you chose it. **Tactical** allocation is *flexibility* — it lets you act on a view, at the cost of taking on timing risk. Bands and a passive core are how you get some flexibility without abandoning the discipline.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Tactical allocation means I can move whenever I want, as much as I want.\"* Done well, tactical tilts are **bounded** by pre-set bands around the strategic target — not a license to abandon the plan. Unbounded 'tactical' trading is just market timing, and chasing it usually raises costs and risk more than returns.",
    },
  ],
};
