import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "fiduciary-vs-suitability-vs-reg-bi",
  title: "Fiduciary, Suitability, and Reg BI: Who's Held to What",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 5,
  summary:
    "RIAs owe a fiduciary duty over the whole relationship; broker-dealers owe Reg BI at the moment of a retail recommendation — three different standards for three different roles.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Three standards, three roles. Which standard applies depends entirely on **who is acting and in what capacity** — not on the product. Get the role right and the standard follows.",
    },
    { type: "heading", text: "The three standards" },
    {
      type: "list",
      items: [
        "**Investment Advisers (RIAs)** → **fiduciary standard** under the Investment Advisers Act of `1940` (duty of **care** + duty of **loyalty**), across the **entire ongoing relationship**. The highest standard.",
        "**Broker-Dealers (retail)** → **`Reg BI`** since `June 30, 2020`. A **best-interest** standard owed to retail customers **at the time of a recommendation** (transaction-based). Stricter than old suitability, but not labeled a general fiduciary duty.",
        "**Broker-Dealers (non-retail)** → old **`Rule 2111`** suitability still applies to institutions and entities outside `Reg BI`'s scope.",
      ],
    },
    { type: "heading", text: "The hierarchy" },
    {
      type: "text",
      body:
        "Loosest to strictest: **old suitability < `Reg BI` (best interest) < Advisers Act fiduciary duty**. `Reg BI` raised the bar for brokers above old suitability, but it did **not** turn brokers into general fiduciaries — the Advisers Act duty is still broader.",
    },
    { type: "heading", text: "Dual registrants" },
    {
      type: "text",
      body:
        "A person registered as both an adviser and a broker owes **whichever standard applies to the capacity in which they're acting**: the **fiduciary** duty when acting as an adviser, and **`Reg BI`** when acting as a broker. `Form CRS` discloses the capacity so the customer knows which hat the person is wearing.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer pays an RIA an **ongoing advisory fee**, and the same individual also occasionally executes a **one-off commission trade** for her as a broker. Which standard governs each?",
    },
    {
      type: "list",
      items: [
        "**Advisory relationship (ongoing fee):** a **continuous fiduciary duty** — loyalty *and* care across the whole relationship.",
        "**One-off commission trade (broker capacity):** **`Reg BI`** applies at that recommendation (a retail customer, transaction-based).",
        "**Why:** the standard **follows the capacity**, not the person. Same individual, two hats, two standards — disclosed via `Form CRS`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Fiduciary standard", def: "The Investment Advisers Act of 1940 duty of care plus loyalty, owed by RIAs across the entire ongoing relationship; the highest standard." },
        { term: "Duty of loyalty", def: "An adviser's obligation to put the client's interest first and address conflicts — part of the fiduciary duty." },
        { term: "Duty of care", def: "An adviser's obligation to provide advice in the client's best interest with appropriate skill and diligence." },
        { term: "Reg BI standard", def: "A best-interest standard owed by broker-dealers to retail customers at the time of a recommendation; stricter than old suitability, not a general fiduciary duty." },
        { term: "Old suitability (Rule 2111)", def: "The pre-2020 standard, now superseded by Reg BI for retail and limited to non-retail recommendations." },
        { term: "Dual registrant", def: "A person registered as both adviser and broker; owes the standard of the capacity in which they act." },
        { term: "Capacity", def: "The role a professional is acting in (adviser vs broker), which determines the applicable standard; disclosed via Form CRS." },
        { term: "Standards hierarchy", def: "Loosest to strictest: old suitability < Reg BI < Advisers Act fiduciary duty." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Reg BI made broker-dealers fiduciaries' / 'Reg BI and the fiduciary standard are the same.'* They are **distinct**. The Advisers Act fiduciary duty is **broader** — the whole relationship, loyalty + care. `Reg BI` is a **best-interest** standard tied to a **retail recommendation**. Stricter than old suitability, but not a general fiduciary duty.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};
