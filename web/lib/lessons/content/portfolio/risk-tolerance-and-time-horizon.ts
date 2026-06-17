import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "risk-tolerance-and-time-horizon",
  title: "Risk Tolerance & Time Horizon",
  level: 3,
  moduleId: "markets-portfolio",
  moduleOrder: 5,
  summary:
    "How to match a portfolio to a goal using both your willingness and your ability to take risk — plus sequence-of-returns risk and why a written plan beats reacting.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Two people can be the same age with the same income and still need very different portfolios. The right level of risk depends on two things that are easy to confuse: how much risk you can *stomach*, and how much risk your *situation* can actually absorb. Get the distinction wrong and you either panic-sell in a downturn or run out of money in retirement.",
    },
    {
      type: "heading",
      text: "Tolerance vs. capacity",
    },
    {
      type: "text",
      body:
        "**Risk tolerance** is your *willingness* to take risk — an emotional trait: can you watch your balance fall `30%` and stay invested? **Risk capacity** is your *financial ability* to take risk given your goal and timeline — can your plan survive that loss without derailing? Both matter. A high tolerance with low capacity (you're calm, but you need the money next year) is just as dangerous as the reverse.",
    },
    {
      type: "heading",
      text: "Time horizon",
    },
    {
      type: "text",
      body:
        "Your **time horizon** is how long until you need the money. A longer horizon *raises* your risk capacity, because you have more time to recover from drawdowns. So near-term goals generally favor lower-volatility assets, while long-term goals can tolerate more equity. (Generic education, not advice — your own mix depends on your full picture.)",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Risk tolerance", def: "Your emotional *willingness* to endure volatility and losses." },
        { term: "Risk capacity", def: "Your financial *ability* to absorb losses given your goal and timeline." },
        { term: "Time horizon", def: "How long until you need the money — longer horizons raise capacity." },
        { term: "Sequence-of-returns risk", def: "The risk that the *order* of returns hurts you when adding or withdrawing money." },
        { term: "Drawdown", def: "A peak-to-trough decline in portfolio value." },
        { term: "Behavior gap", def: "The return lost when investors react emotionally — selling low, buying high." },
        { term: "Investment policy / plan", def: "A written set of rules (target mix + rebalancing) that pre-commits decisions." },
      ],
    },
    {
      type: "heading",
      text: "Sequence-of-returns risk",
    },
    {
      type: "text",
      body:
        "Here's a subtlety that catches even careful investors: when money is flowing **in or out**, the *order* of returns matters — not just the average. A big loss **early** in retirement, while you're withdrawing, is far more damaging than the *same* loss later, even with identical average returns. (For a lump sum with no contributions or withdrawals, order doesn't change the ending value at all.)",
    },
    {
      type: "heading",
      text: "Worked example: same returns, different order",
    },
    {
      type: "text",
      body:
        "Two retirees each start with `$1,000,000` and withdraw `$50,000` at the *start* of each year. Both experience a `−30%` year and a `+30%` year — just in opposite order.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Retiree A (bad year first): Year 1 `($1,000,000 − $50,000) × 0.70 = $665,000`; Year 2 `($665,000 − $50,000) × 1.30 = $799,500`.",
        "Retiree B (good year first): Year 1 `($1,000,000 − $50,000) × 1.30 = $1,235,000`; Year 2 `($1,235,000 − $50,000) × 0.70 = $829,500`.",
      ],
    },
    {
      type: "text",
      body:
        "Same average return, same total withdrawals — yet B ends `$829,500 − $799,500 = $30,000` ahead, purely from the *sequence*. Contrast a lump sum with **no** withdrawals: both orders give `$1,000,000 × 0.70 × 1.30 = $910,000`. Without cash flows, order doesn't matter.",
    },
    {
      type: "heading",
      text: "Why a written plan beats reacting",
    },
    {
      type: "text",
      body:
        "A written plan — a target allocation plus a rebalancing rule — pre-commits your decisions *before* emotions run high. That's your defense against the **behavior gap**: reacting to fear tends to lock in losses and miss the recovery. The plan decides for you, so a scary headline doesn't.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A long horizon raises *capacity*, but it doesn't automatically raise *tolerance*. If a crash makes you panic-sell, you realize the loss regardless of how many years you had left — and past return and volatility patterns are never guaranteed to repeat.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"I'm young, so I should always take maximum risk.\"* A long horizon raises your **capacity**, but the right level still depends on your tolerance, your specific goal, and — most of all — your ability to stay invested through a downturn.",
    },
  ],
};
