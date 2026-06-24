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
};

const LIGHT: ChartChrome = {
  canvas: "#ffffff",
  grid: "#efe9df",
  border: "#e6e0d4",
  text: "#837c88",
  priceLine: "#a39cae",
};

const DARK: ChartChrome = {
  canvas: "#13151a",
  grid: "#2a2e37",
  border: "#2b3039",
  text: "#9ca0a8",
  priceLine: "#9fb3c8",
};

export function chartColors(theme: "light" | "dark"): ChartChrome {
  return theme === "dark" ? DARK : LIGHT;
}
