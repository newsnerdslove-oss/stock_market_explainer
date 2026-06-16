import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "earnings-reports",
  title: "Earnings Reports: Beats, Misses, and Guidance",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 7,
  summary: "A company can beat earnings and still drop. Learn how surprises, guidance, and expectations actually move a stock.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Four times a year, companies report results — and the stock often lurches in ways that confuse newcomers. A company *beats* and falls; another *misses* and rises. The secret is that markets trade on the gap between results and **expectations**, not on the raw numbers.",
    },
    { type: "heading", text: "Beats, misses, and consensus" },
    {
      type: "text",
      body:
        "Public companies file a quarterly **10-Q** and an annual **10-K**, and analysts publish a **consensus estimate** ahead of time. A **beat** comes in above consensus; a **miss** comes in below. Both EPS and revenue each have their own consensus, so a company can beat on one and miss on the other.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "An EPS beat alongside a revenue miss is a *lower-quality* beat. It often means costs were cut or buybacks shrank the share count — the top line didn't actually grow.",
    },
    { type: "heading", text: "Guidance and expectations" },
    {
      type: "text",
      body:
        "**Guidance** is management's own forecast for upcoming periods. Markets frequently react *more* to guidance than to the quarter just reported, because price already reflects the past. Stocks move on the **surprise versus expectations** — which is why a solid quarter that's merely 'good but not good enough' can still drop.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A buyback lowers the share count, which raises EPS *without* raising net income — so read *why* EPS beat. And reactions aren't instant: **post-earnings drift** can carry a stock in the surprise's direction for days.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Consensus estimate", def: "The average analyst forecast for EPS or revenue ahead of a report." },
        { term: "Beat / miss", def: "Reporting above (beat) or below (miss) the consensus estimate." },
        { term: "EPS surprise", def: "Percentage by which actual EPS differs from the consensus EPS." },
        { term: "Revenue surprise", def: "Percentage by which actual revenue differs from the consensus revenue." },
        { term: "Guidance", def: "Management's own forecast for future periods; often moves the stock most." },
        { term: "Post-earnings drift", def: "The tendency for a stock to keep moving in the surprise's direction for days." },
        { term: "Sandbagging", def: "Setting low expectations so a beat becomes easy to deliver." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Consensus was EPS `$1.50` and revenue `$1,000M`. The company reports actual EPS `$1.60` and revenue `$960M`, and *cuts* next-quarter revenue guidance from `$1,100M` to `$1,000M`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**EPS surprise** = `(1.60 − 1.50) ÷ 1.50 = +6.7%` — a beat.",
        "**Revenue surprise** = `(960 − 1,000) ÷ 1,000 = −4.0%` — a miss.",
        "**Guidance** = cut by `$100M` for next quarter.",
      ],
    },
    {
      type: "text",
      body:
        "Despite the EPS beat, the **revenue miss plus lowered guidance** points to weakening demand — the stock could easily *fall*. Expectations about the future outweighed the headline beat.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *beat earnings → stock goes up*. Expectations rule. A beat can be undercut by weak guidance, a revenue miss, or a low-quality source like buybacks or a one-time tax benefit. And consensus can be deliberately **sandbagged** low, making beats look easy.",
    },
  ],
};
