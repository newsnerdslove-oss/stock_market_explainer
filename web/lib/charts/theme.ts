// Theme-aware colours for the lightweight-charts canvas (which needs hex, not CSS
// vars). Only the chart "chrome" — background, grid, axis border, axis text — flips
// with the app theme; the vivid data accents (candle up/down, EMA/RSI/MACD/VWAP/…)
// read fine on either background and stay constant. Values align with the Stax tokens.
export type ChartChrome = {
  canvas: string;
  grid: string;
  border: string;
  text: string;
  priceLine: string;
  /** Candle/volume up & down colours — theme-specific so they read as a solid surface. */
  up: string;
  down: string;
  /** Volume histogram fill opacity. */
  volAlpha: number;
};

const LIGHT: ChartChrome = {
  canvas: "#ffffff",
  grid: "#d3c9b5",
  border: "#beb4a0",
  text: "#423c46",
  priceLine: "#a39cae",
  up: "#149056",
  down: "#E03C30",
  volAlpha: 0.78,
};

const DARK: ChartChrome = {
  canvas: "#13151a",
  grid: "#3c424f",
  border: "#454c5c",
  text: "#c4c8d1",
  priceLine: "#9fb3c8",
  up: "#2FE08C",
  down: "#FF6257",
  volAlpha: 0.72,
};

export function chartColors(theme: "light" | "dark"): ChartChrome {
  return theme === "dark" ? DARK : LIGHT;
}
