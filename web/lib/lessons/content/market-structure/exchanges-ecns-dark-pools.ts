import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "exchanges-ecns-dark-pools",
  title: "Exchanges vs ECNs vs Dark Pools",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 3,
  summary: "Where trades actually happen, and how Reg NMS ties the venues together.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A US stock doesn't trade in one place. It trades across a web of venues — some loudly public, some deliberately quiet — all stitched together by one set of rules so they behave like a single national market.",
    },
    { type: "heading", text: "The three kinds of venue" },
    {
      type: "list",
      items: [
        "**Lit exchanges** — NYSE, Nasdaq, Cboe. They display public quotes that feed the NBBO.",
        "**ECNs** — electronic order-matching systems that display quotes; most now operate *within* registered exchanges or ATSs.",
        "**Dark pools** — a type of **ATS** with **no pre-trade quote display**, used for large institutional blocks with less market impact. The trades still **print to the tape** afterward.",
      ],
    },
    { type: "heading", text: "Why dark pools exist" },
    {
      type: "text",
      body:
        "Showing a huge order on a lit book moves the price *against* you — other traders see the demand and step ahead. A dark pool lets an institution work a block without broadcasting it first, reducing **market impact** and information leakage.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Lit exchange", def: "A venue (NYSE, Nasdaq, Cboe) that displays public quotes feeding the NBBO." },
        { term: "ECN", def: "Electronic Communication Network — an electronic system that matches and displays orders." },
        { term: "ATS", def: "Alternative Trading System — an SEC-registered non-exchange venue; dark pools are one kind." },
        { term: "Dark pool", def: "An ATS with no pre-trade quote display, built for large blocks with low market impact." },
        { term: "Reg NMS", def: "The 2005 SEC rule set that links US venues into one National Market System." },
        { term: "Order Protection Rule (611)", def: "Bars trade-throughs — executing past a better, protected displayed quote." },
        { term: "TRF", def: "Trade Reporting Facility — a FINRA facility through which off-exchange trades are reported to the tape." },
      ],
    },
    { type: "heading", text: "Worked example: routing a block" },
    {
      type: "text",
      body:
        "The **NBBO is `$40.00 / $40.04`**. An institution needs to buy **200,000 shares**. On a lit exchange, an order that size would chew through the offers and push the price up. Instead it routes to a **dark pool**:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "The block executes at the **midpoint `$40.02`** — price improvement versus the `$40.04` lit offer, with no pre-trade display.",
        "The completed `200,000` trade then **prints to the tape** (reported via a FINRA **TRF**).",
        "**Reg NMS** is satisfied: there was no **trade-through** of the protected `$40.04` displayed offer.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Only automated, displayed **top-of-book** quotes are *protected* under Rule 611 — manual and dark quotes are not. And *dark* doesn't mean *unregulated*: an ATS must register with the SEC, file **Form ATS-N**, and report its trades.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "It's a myth that dark-pool trades are *secret and never reported*. They have no **pre-trade** quote display, but every completed trade still **prints to the tape** — so the volume is public after the fact.",
    },
  ],
};
