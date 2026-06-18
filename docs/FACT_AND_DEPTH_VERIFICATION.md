# Curriculum Fact & Depth Verification — Feature Plan (parked)

**Status:** Parked / not started. Queued behind the options-simulator epic.
**Why it exists:** Raise trust in the learning content. Today the curriculum
(~1,400 quiz questions + lessons across the 100–400 ladder) is authored from
well-established finance fundamentals, with per-module research passes and
adversarial review agents that re-derive answer keys. Time-sensitive regulatory
facts (e.g. FINRA 26-10 PDT change, T+1, the $300 gift limit, TRACE 15-min) were
verified against live sources. But there is **no per-claim citation to an
authoritative free source**, and **no systematic depth/gap audit** against a
reference blueprint. This feature closes both gaps.

## Goal / outcome
1. **Fact**: every time-sensitive or numeric claim is traceable to an authoritative
   *free* source (FINRA, SEC, IRS, OCC, MSRB, Fed/Treasury), with discrepancies
   flagged and fixed.
2. **Depth**: every topic is covered to the right depth for its level, graded
   against a reference outline (SIE / Series 7 content outline), with gaps and
   shallow spots flagged and filled.

## Two dimensions, deliberately separated
| | **Fact verification** | **Depth verification** |
|---|---|---|
| Question | "Is this claim correct, and provable from a free source?" | "Is this topic covered completely and at the right rigor?" |
| Risk concentrates in | numbers, thresholds, dates, regulatory rules | missing subtopics, shallow treatments, level mismatch |
| Output | claim → verdict → citation + as-of date | module → gap list with severity |

## Approach (phased; each remediation phase = its own CI-gated PR)

**Phase 0 — Claim extraction & risk tagging.**
Parse every lesson + quiz question into a structured claim inventory. Classify each
claim as: (a) timeless fundamental, (b) **time-sensitive / numeric / regulatory**
(the risk set), or (c) math/mechanics (already test-verifiable). Most verification
effort targets (b).

**Phase 1 — Authoritative source map.**
Define and rank the trusted free sources per domain: FINRA.org (rules/notices),
SEC.gov (acts, Reg BI, schedules), IRS.gov (taxation), OCC (options mechanics),
MSRB (munis), Fed/Treasury (rates/settlement), Investopedia (definitions only,
not a primary source).

**Phase 2 — Fact-verification sweep (fan out).**
For each high-risk claim: an agent checks it against the live source
(WebSearch/WebFetch), recording a verdict (confirmed / contradicted / uncertain),
the citation URL, and an as-of date. An adversarial second agent tries to refute.
Aggregate a discrepancy report. Run as a multi-agent **workflow** (one verifier per
claim batch + a refute pass + synthesis) under an explicit token budget.

**Phase 3 — Depth / gap analysis.**
Per module, compare coverage against the reference blueprint (SIE/Series 7 outline).
Flag missing subtopics, shallow treatments, and level-appropriateness. Produce a
gap list with severity.

**Phase 4 — Remediation.**
Fix flagged facts (correct the value, attach the citation). Fill depth gaps (add or
expand lessons + questions). Reuse the proven curriculum-authoring pattern
(author → wire indexes → integrity route → adversarial review). Each batch its own PR.

**Phase 5 — Durable provenance + re-verification.**
Optionally attach machine-readable source metadata to time-sensitive facts so they
can be re-checked on a schedule (regulations change). A periodic re-verification job
keeps the content from silently going stale; surface a "verified as of" signal.

## Tooling
- Multi-agent **workflow** for the sweep (fan out verifiers, adversarial refute,
  synthesize) — token-heavy, so run with a budget and start with the highest-risk
  regulatory/numeric set before the long tail.
- WebSearch / WebFetch for live sources; structured outputs (claim → verdict →
  citation) for determinism.

## Scope decisions to make when we pick this up
1. **Breadth first pass** — just the time-sensitive/regulatory risk set, or all
   ~1,400 questions?
2. **Citations in the UI** — show learners a source link per fact, or keep
   provenance internal?
3. **Depth blueprint** — grade against the official Series 7 outline, the SIE, or
   both?

## Relationship to other work
- The **options simulator** epic (active) is model-priced and test-verified, so its
  *math* needs no fact-sweep; its *contract-mechanics* claims (assignment, exercise,
  multipliers, exercise/position limits) are good candidates for this feature's
  fact pass (OCC/FINRA sources).
- Complements the existing per-module research + adversarial-review authoring
  pattern; this feature makes verification *systematic and cited* rather than
  per-author.
