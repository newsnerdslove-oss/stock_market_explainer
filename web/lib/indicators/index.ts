// Pure technical indicators for the research charts — computed client-side from a
// candle series (no new data feed). Each returns an array aligned to the input, with
// `null` during the warm-up period where the indicator isn't yet defined, so the
// chart can simply skip the nulls. Standard formulas, unit-tested.

export interface OHLCV {
  high: number;
  low: number;
  close: number;
  volume: number;
}

/** Simple moving average. */
export function sma(values: number[], period: number): (number | null)[] {
  const out: (number | null)[] = [];
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (i >= period) sum -= values[i - period];
    out.push(i >= period - 1 ? sum / period : null);
  }
  return out;
}

/** Exponential moving average, seeded with the SMA of the first `period` values. */
export function ema(values: number[], period: number): (number | null)[] {
  const out: (number | null)[] = [];
  const k = 2 / (period + 1);
  let prev: number | null = null;
  for (let i = 0; i < values.length; i++) {
    if (i < period - 1) {
      out.push(null);
      continue;
    }
    if (prev === null) {
      let s = 0;
      for (let j = i - period + 1; j <= i; j++) s += values[j];
      prev = s / period;
    } else {
      prev = values[i] * k + prev * (1 - k);
    }
    out.push(prev);
  }
  return out;
}

/** Relative Strength Index (Wilder's smoothing). Output in [0, 100]. */
export function rsi(values: number[], period = 14): (number | null)[] {
  const out: (number | null)[] = new Array(values.length).fill(null);
  if (values.length <= period) return out;

  let gain = 0;
  let loss = 0;
  for (let i = 1; i <= period; i++) {
    const ch = values[i] - values[i - 1];
    if (ch >= 0) gain += ch;
    else loss -= ch;
  }
  let avgGain = gain / period;
  let avgLoss = loss / period;
  const rsiAt = () => (avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss));
  out[period] = rsiAt();

  for (let i = period + 1; i < values.length; i++) {
    const ch = values[i] - values[i - 1];
    const g = ch >= 0 ? ch : 0;
    const l = ch < 0 ? -ch : 0;
    avgGain = (avgGain * (period - 1) + g) / period;
    avgLoss = (avgLoss * (period - 1) + l) / period;
    out[i] = rsiAt();
  }
  return out;
}

export interface Macd {
  macd: (number | null)[];
  signal: (number | null)[];
  histogram: (number | null)[];
}

/** MACD = EMA(fast) − EMA(slow); signal = EMA(MACD); histogram = MACD − signal. */
export function macd(values: number[], fast = 12, slow = 26, signal = 9): Macd {
  const ef = ema(values, fast);
  const es = ema(values, slow);
  const macdLine: (number | null)[] = values.map((_, i) => (ef[i] != null && es[i] != null ? (ef[i] as number) - (es[i] as number) : null));

  const firstIdx = macdLine.findIndex((v) => v != null);
  const signalLine: (number | null)[] = macdLine.map(() => null);
  if (firstIdx >= 0) {
    const defined = macdLine.slice(firstIdx).map((v) => v as number);
    const sig = ema(defined, signal);
    for (let i = 0; i < sig.length; i++) signalLine[firstIdx + i] = sig[i];
  }
  const histogram = macdLine.map((v, i) => (v != null && signalLine[i] != null ? v - (signalLine[i] as number) : null));
  return { macd: macdLine, signal: signalLine, histogram };
}

export interface Bands {
  middle: (number | null)[];
  upper: (number | null)[];
  lower: (number | null)[];
}

/** Bollinger Bands: SMA(period) ± mult × population standard deviation. */
export function bollinger(values: number[], period = 20, mult = 2): Bands {
  const middle = sma(values, period);
  const upper: (number | null)[] = [];
  const lower: (number | null)[] = [];
  for (let i = 0; i < values.length; i++) {
    const mid = middle[i];
    if (mid == null) {
      upper.push(null);
      lower.push(null);
      continue;
    }
    let sq = 0;
    for (let j = i - period + 1; j <= i; j++) sq += (values[j] - mid) ** 2;
    const sd = Math.sqrt(sq / period);
    upper.push(mid + mult * sd);
    lower.push(mid - mult * sd);
  }
  return { middle, upper, lower };
}

/** Cumulative VWAP from typical price ((H+L+C)/3) weighted by volume. */
export function vwap(candles: OHLCV[]): (number | null)[] {
  let cumPV = 0;
  let cumV = 0;
  return candles.map((c) => {
    const typical = (c.high + c.low + c.close) / 3;
    cumPV += typical * c.volume;
    cumV += c.volume;
    return cumV > 0 ? cumPV / cumV : null;
  });
}
