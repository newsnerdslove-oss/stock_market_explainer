"use client";

import { useEffect, useState } from "react";

export type TickDirection = "up" | "down" | "flat";

export interface LivePrice {
  price: number;
  /** Net direction since the last *displayed* value (not the last raw tick). */
  dir: TickDirection;
  /** ISO time of the latest tick folded into this update. */
  at: string;
}

export type FeedStatus = "connecting" | "open" | "closed";

const WS_URL = "wss://ws-feed.exchange.coinbase.com";

// Coinbase streams many ticks/sec; rendering each one makes the UI strobe. We
// buffer the latest tick per product and flush to React state on this cadence —
// 5 updates/sec reads as "live" without the blinking, and direction is measured
// over the whole window (net move) so brief oscillation doesn't flash.
const FLUSH_MS = 200;

/**
 * Live crypto prices over the Coinbase public WebSocket (no API key). Subscribes
 * to the `ticker` channel for the given Coinbase product ids and streams updates,
 * throttled to {@link FLUSH_MS}; reconnects with a short backoff if the socket
 * drops. Client-only — guarded for SSR. Pass a stable array (or it'll reconnect
 * when the identity changes).
 */
export function useCryptoPrices(productIds: string[]): {
  prices: Record<string, LivePrice>;
  status: FeedStatus;
} {
  const [prices, setPrices] = useState<Record<string, LivePrice>>({});
  const [status, setStatus] = useState<FeedStatus>("connecting");
  // Join to a primitive so the effect doesn't re-run on a new array identity.
  const key = productIds.join(",");

  useEffect(() => {
    if (typeof window === "undefined" || typeof WebSocket === "undefined") return;
    const products = key.split(",").filter(Boolean);
    if (products.length === 0) return;

    let ws: WebSocket | null = null;
    let stopped = false;
    let retry: ReturnType<typeof setTimeout> | null = null;
    // Latest raw tick per product, awaiting the next flush.
    const pending: Record<string, { price: number; at: string }> = {};
    // Last price we actually rendered, to measure net direction at flush time.
    const shown: Record<string, number> = {};

    const flush = setInterval(() => {
      const ids = Object.keys(pending);
      if (ids.length === 0) return;
      // Compute the batch and mutate `pending`/`shown` OUT here — never inside the
      // setState updater, which React may invoke more than once (StrictMode,
      // re-render) and must stay pure, or the second run reads already-deleted keys.
      const updates: Record<string, LivePrice> = {};
      for (const id of ids) {
        const { price, at } = pending[id];
        delete pending[id];
        const before = shown[id];
        const dir: TickDirection =
          before == null || price === before ? "flat" : price > before ? "up" : "down";
        shown[id] = price;
        updates[id] = { price, dir, at };
      }
      setPrices((prev) => ({ ...prev, ...updates }));
    }, FLUSH_MS);

    function connect() {
      setStatus("connecting");
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        setStatus("open");
        ws?.send(JSON.stringify({ type: "subscribe", product_ids: products, channels: ["ticker"] }));
      };

      ws.onmessage = (ev) => {
        try {
          const m = JSON.parse(typeof ev.data === "string" ? ev.data : "");
          if (m.type !== "ticker" || !m.product_id || m.price == null) return;
          const price = Number(m.price);
          if (!Number.isFinite(price)) return;
          // Overwrite — only the most recent tick in the window survives to render.
          pending[m.product_id] = { price, at: m.time ?? "" };
        } catch {
          /* ignore malformed frames */
        }
      };

      ws.onerror = () => ws?.close();
      ws.onclose = () => {
        setStatus("closed");
        if (!stopped) retry = setTimeout(connect, 2000);
      };
    }

    connect();
    return () => {
      stopped = true;
      clearInterval(flush);
      if (retry) clearTimeout(retry);
      ws?.close();
    };
  }, [key]);

  return { prices, status };
}
