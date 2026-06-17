"use client";

import { useEffect, useState } from "react";

export type TickDirection = "up" | "down" | "flat";

export interface LivePrice {
  price: number;
  /** Direction of the most recent tick vs the previous one. */
  dir: TickDirection;
  /** ISO time of the tick. */
  at: string;
}

export type FeedStatus = "connecting" | "open" | "closed";

const WS_URL = "wss://ws-feed.exchange.coinbase.com";

/**
 * Live crypto prices over the Coinbase public WebSocket (no API key). Subscribes
 * to the `ticker` channel for the given Coinbase product ids and streams updates;
 * reconnects with a short backoff if the socket drops. Client-only — guarded for
 * SSR. Pass a stable array (or it'll reconnect when the identity changes).
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
    const last: Record<string, number> = {};

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
          const prev = last[m.product_id];
          const dir: TickDirection = prev == null ? "flat" : price > prev ? "up" : price < prev ? "down" : "flat";
          last[m.product_id] = price;
          setPrices((p) => ({ ...p, [m.product_id]: { price, dir, at: m.time ?? "" } }));
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
      if (retry) clearTimeout(retry);
      ws?.close();
    };
  }, [key]);

  return { prices, status };
}
