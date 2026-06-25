---
name: asana-tracking
description: Asana project GID, section GIDs, and ticket filing conventions for Stax UI/UX issues
metadata:
  type: reference
---

# Asana Tracking — Stax UI/UX Issues

## Project
- Project GID: `1215741548419232`
- Project name: Stocks (the feature-tracking board)

## Sections
- Backlog section GID: `1215763060319827`
- Use Backlog for all new UI/UX defect tickets unless a specific sprint section is requested

## Ticket conventions
- Prefix all UI/UX tickets with `[UI/UX]` in the title
- Format: `[UI/UX] {route or scope}: {concise defect description}`
- Description must include: route(s) affected, severity, what was observed (with screenshot reference when available), exact file/line references, and a concrete fix prescription
- Severity levels: Critical / Major / Minor
- Do not file tickets for Next.js devtools or dev-only artifacts unless they need production verification

## Tickets filed 2026-06-24 (post-migration audit PRs #94–#103)
All 10 tickets filed to Backlog (section 1215763060319827). See [[per-route-verdicts]] for full list.
