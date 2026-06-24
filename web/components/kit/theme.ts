// Stax UI kit theme. Maps the kit's `A.*` token names to the CSS custom properties
// defined in app/globals.css (var(--stax-*)), so the components read live values at
// render and the `.dark` class flips the whole palette. Ported from the prototype
// templates/stax-ui/stax-kit.jsx.
export const A = {
  font: "var(--stax-font)",
  mono: "var(--stax-mono)",
  radius: 22,
  page: "var(--stax-page)",
  card: "var(--stax-card)",
  ink: "var(--stax-ink)",
  muted: "var(--stax-muted)",
  faint: "var(--stax-faint)",
  primary: "var(--stax-primary)",
  primaryDeep: "var(--stax-primary-deep)",
  primarySoft: "var(--stax-primary-soft)",
  green: "var(--stax-green)",
  greenSoft: "var(--stax-green-soft)",
  amber: "var(--stax-amber)",
  amberSoft: "var(--stax-amber-soft)",
  amberInk: "var(--stax-amber-ink)",
  red: "var(--stax-red)",
  redSoft: "var(--stax-red-soft)",
  blue: "var(--stax-blue)",
  blueSoft: "var(--stax-blue-soft)",
  border: "var(--stax-border)",
  borderSoft: "var(--stax-border-soft)",
  sunk: "var(--stax-sunk)",
  barTrack: "var(--stax-bar-track)",
  shadow: "var(--stax-shadow)",
  shadowLg: "var(--stax-shadow-lg)",
} as const;
