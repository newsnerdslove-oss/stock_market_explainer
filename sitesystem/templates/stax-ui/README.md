# Stax UI Kit

The reusable React primitives behind the Stax app — the buttons, cards, nav, and
form controls that every screen is built from. Pair them with the synced
`StocksDS.*` chart components to assemble full screens.

> **Why this exists.** The design system used to ship only the 4 SVG chart
> components. Everything else (buttons, cards, nav shell…) lived in a one-off
> prototype file, so every new screen rebuilt the kit from scratch. This package
> is that kit, formalized as a reusable starting point.

## Start here

Open **`StaxScreen.dc.html`** — the "Stax App Screen" template. It's a working,
themed dashboard you can copy and edit. It shows the canonical wiring:

```html
<helmet>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet" />
  <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
  <script src="./ds-base.js"></script>   <!-- DS styles + StocksDS bundle -->
</helmet>

<x-import component-from-global-scope="StaxKit.AppShell" from="./stax-kit.jsx"
          tab="dashboard" theme="{{ theme }}" set-theme="{{ setTheme }}" hint-size="100%,640px">
  <x-import component-from-global-scope="StaxKit.Card" from="./stax-kit.jsx" hint-size="100%,160px">…</x-import>
</x-import>
```

Do **not** load React yourself — the runtime provides it. Loading a second copy
causes "invalid hook call" errors. (In a plain non-DC HTML page you *do* load
React + Babel yourself, then `<script type="text/babel" src="stax-kit.jsx">`.)

## Components (`window.StaxKit.*`)

| Component | Key props | Notes |
|---|---|---|
| `AppShell` | `tab`, `go(id)`, `theme`, `setTheme`, `brand`, `streak`, `xp`, `user`, `maxWidth` | Persistent top nav; wrap a screen in it. `setTheme` omitted → theme toggle hidden. |
| `Btn` | `kind` (`primary\|soft\|ghost\|success\|white`), `size` (`sm\|md\|lg`), `icon`, `iconRight`, `full`, `onClick` | |
| `Card` | `pad`, `onClick`, `hover`, `style` | Rounded surface; lifts on hover when interactive. |
| `Pill` | `icon`, `bg`, `fg`, `size` | Rounded status chip. |
| `Badge` | `tone` (`primary\|green\|amber\|red\|blue\|neutral`) | Small uppercase label. |
| `SectionTitle` | `action`, `onAction` | Heading + optional right-aligned link. |
| `LessonCard` | `title`, `sub`, `icon`, `tint:{bg,fg}`, `pct`, `state` (`done\|active\|locked`) | |
| `Field` | `label`, `placeholder`, `icon`, `type`, `value`, `onChange` | Text input. |
| `Toggle` | `on`, `onClick` | Switch. |
| `Ring` | `size`, `stroke`, `pct` (0–1), `color`, `track`, children | Circular progress. |
| `Bar` | `pct` (0–100), `color`, `track`, `height` | Linear progress. |
| `Avatar` | `name`, `size`, `bg`, `color`, `ring` | Initials avatar. |
| `WeekDots` | `days:[{l,done}]`, `on`, `off`, `txt`, `today` | Streak strip. |
| `Icon` | `name` (lucide), `size`, `color`, `strokeWidth` | Auto-refreshes lucide. |

> **Passing non-string props in a DC template:** attributes are strings unless
> bound with `{{ }}`. Numbers (`pct`, `size`), arrays (`days`), objects (`tint`),
> and functions (`go`, `onClick`) must come from the logic class's `renderVals()`
> and be bound as `pct="{{ ringPct }}"`. See `StaxScreen.dc.html`'s `Component`.

## Theming

One palette object, `StaxKit.A`, read by every component at render. Flip it with
`StaxKit.applyTheme('light' | 'dark')`. In `StaxScreen.dc.html` the logic class
calls `applyTheme(this.state.theme)` in `renderVals()` and passes `setTheme` to
`AppShell`, so the in-page moon/sun toggle flips the whole screen — and the
`StocksDS` charts follow automatically. Colors: surfaces (`page/card/sunk`),
text (`ink/muted/faint`), semantic (`green/red/amber/blue/primary`), each with a
`*Soft` tint, plus `border`, `barTrack`, `gradA/gradB`, `shadow/shadowLg`.

## Roadmap

- These are prototype-grade primitives. To make them first-class **synced** DS
  components (with `.stories.tsx`), graduate them in the code repo and re-run
  `/design-sync` — same path as the charts.
- `ResearchChart` (the full TradingView-style chart) is backend-dependent and not
  yet composable here; it needs a fixtures/demo-data mode before it can be synced
  as a building block.
