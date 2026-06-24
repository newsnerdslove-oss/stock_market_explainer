import * as React from 'react';

/**
 * PatternChart — from stock-market-explainer-web@0.1.0 (./components/charts/PatternChart.stories.tsx).
 */
export interface PatternChartProps {
  candles: OHLC[];
  onPick?: (index: number) => void;
  picked?: number;
  correctIndex?: number;
}

export declare const PatternChart: React.ComponentType<PatternChartProps>;
