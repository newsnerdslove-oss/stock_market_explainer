# Stax — Asana handoff

This folder lets **Claude Code** create the Asana project, epics, and tickets for building
the real product from the design prototype.

## Files
- `tickets.json` — the source of truth. Structured epics → tickets with descriptions,
  acceptance criteria, priority, estimates, prototype file references, and dependencies.
- `Stax-Asana-Import.csv` — fallback for a manual Asana CSV import (Project → ⋯ → Import → CSV).
  Sections = epics; one row per ticket. (Asana CSV import doesn't carry subtasks or dependencies —
  prefer the API path below.)

## Instructions for Claude Code
Using the Asana integration available to you (MCP tool or the Asana REST API with a PAT):

1. **Create a project** named from `tickets.json > project` (board or list layout) in the target team/workspace.
2. **Create custom fields** from `tickets.json > customFields` (Priority enum, Estimate number, Epic enum) and add them to the project.
3. **Create a section per epic** (`epics[].name`), preserving order.
4. **Create one task per ticket** (`epics[].tickets[]`) in its epic's section:
   - Task name = `title`
   - Notes = `description` followed by an "Acceptance criteria" checklist built from `acceptanceCriteria[]`, and a "Prototype" line listing `prototype[]` paths.
   - Set the Priority and Estimate custom fields from `priority` / `estimateDays`.
   - Keep a map of `id → Asana task gid`.
5. **Wire dependencies**: after all tasks exist, for each ticket with `dependsOn[]`, mark it as
   blocked by those tickets (Asana "dependencies") using the id→gid map.
6. Report the created project URL and a count of tasks per epic.

Notes:
- IDs (e.g. `PT-2`) are stable references used by `dependsOn` — they are not Asana fields; use them only to resolve dependencies.
- `prototype[]` paths point at the HTML/JSX prototype in this repo so engineers can see the intended UX.
- Don't invent scope. If a field is missing, leave it blank rather than guessing.
