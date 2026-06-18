"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createClient, supabaseConfigured } from "@/lib/supabase/client";
import { ensureSession } from "@/lib/progress/serverSync";
import { getQuoteViaApi } from "@/lib/marketService";
import { evaluateOrder, type FillResult, type OrderRequest } from "@/lib/trading/ledger";
import { insertOrder, loadLocalPortfolio, loadPortfolio, savePortfolio, saveLocalPortfolio, updateOrder } from "@/lib/trading/store";
import { emptyPortfolio, type Order, type Portfolio } from "@/lib/trading/schema";
import type { SupabaseClient } from "@supabase/supabase-js";

interface TradingContextValue {
  portfolio: Portfolio;
  /** Latest known prices by symbol (for mark-to-market P&L). */
  prices: Record<string, number>;
  ready: boolean;
  configured: boolean;
  placeOrder: (req: OrderRequest) => Promise<FillResult>;
  /** Re-fetch prices for held + pending symbols and fill any crossed limit orders. */
  refresh: () => Promise<void>;
}

const Ctx = createContext<TradingContextValue | null>(null);

export function TradingProvider({ children }: { children: ReactNode }) {
  const [portfolio, setPortfolio] = useState<Portfolio>(emptyPortfolio);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const sbRef = useRef<SupabaseClient | null>(null);
  const uidRef = useRef<string | null>(null);
  const pfRef = useRef(portfolio);
  pfRef.current = portfolio;
  const configured = supabaseConfigured();

  const refreshPrices = useCallback(async (symbols: string[]) => {
    const uniq = [...new Set(symbols)].filter(Boolean);
    if (!uniq.length) return;
    const entries = await Promise.all(
      uniq.map(async (s) => {
        const q = await getQuoteViaApi(s).catch(() => null);
        return q ? ([s, q.price] as const) : null;
      }),
    );
    setPrices((prev) => {
      const next = { ...prev };
      for (const e of entries) if (e) next[e[0]] = e[1];
      return next;
    });
  }, []);

  useEffect(() => {
    // localStorage-first: load instantly so the simulator works with no backend.
    const local = loadLocalPortfolio() ?? emptyPortfolio();
    setPortfolio(local);
    setReady(true);
    void refreshPrices(Object.keys(local.positions));

    if (!configured) return; // local-only mode

    // Layer Supabase under localStorage for durable, cross-device persistence.
    let cancelled = false;
    (async () => {
      const sb = createClient();
      sbRef.current = sb;
      const uid = await ensureSession(sb);
      if (cancelled || !uid) return;
      uidRef.current = uid;
      const server = await loadPortfolio(sb, uid);
      if (cancelled) return;
      if (server) {
        // The server copy is the source of truth across devices.
        setPortfolio(server);
        saveLocalPortfolio(server);
        void refreshPrices(Object.keys(server.positions));
      } else {
        // No server portfolio yet — seed it from the local one.
        await savePortfolio(sb, uid, pfRef.current);
        for (const o of [...pfRef.current.orders].reverse()) await insertOrder(sb, uid, o);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [configured, refreshPrices]);

  const placeOrder = useCallback(async (req: OrderRequest): Promise<FillResult> => {
    const quote = await getQuoteViaApi(req.symbol).catch(() => null);
    if (!quote) return { status: "rejected", reason: `Couldn't get a quote for ${req.symbol}.` };
    setPrices((p) => ({ ...p, [req.symbol]: quote.price }));

    const { portfolio: next, result } = evaluateOrder(pfRef.current, req, quote);
    if (result.status === "rejected") return result;

    const order: Order = {
      id: crypto.randomUUID(),
      symbol: req.symbol,
      side: req.side,
      type: req.type,
      qty: req.qty,
      limitPrice: req.limitPrice,
      status: result.status,
      filledPrice: result.filledPrice ?? null,
      createdAt: new Date().toISOString(),
    };
    const withOrder: Portfolio = { ...next, orders: [order, ...next.orders].slice(0, 50) };
    setPortfolio(withOrder);
    saveLocalPortfolio(withOrder); // always persist locally

    // Best-effort server sync when Supabase is configured + signed in.
    const sb = sbRef.current;
    const uid = uidRef.current;
    if (sb && uid) {
      await insertOrder(sb, uid, order);
      if (result.status === "filled") await savePortfolio(sb, uid, withOrder);
    }
    return result;
  }, []);

  const refresh = useCallback(async () => {
    const pf = pfRef.current;
    const pendingSyms = pf.orders.filter((o) => o.status === "pending").map((o) => o.symbol);
    await refreshPrices([...Object.keys(pf.positions), ...pendingSyms]);

    const sb = sbRef.current;
    const uid = uidRef.current;
    let cur = pf;
    let changed = false;
    for (const o of pf.orders) {
      if (o.status !== "pending") continue;
      const quote = await getQuoteViaApi(o.symbol).catch(() => null);
      if (!quote) continue;
      const { portfolio: nextPf, result } = evaluateOrder(
        cur,
        { symbol: o.symbol, side: o.side, type: o.type, qty: o.qty, limitPrice: o.limitPrice },
        quote,
      );
      if (result.status === "filled") {
        changed = true;
        cur = {
          ...nextPf,
          orders: cur.orders.map((x) => (x.id === o.id ? { ...x, status: "filled" as const, filledPrice: result.filledPrice ?? null } : x)),
        };
        if (sb && uid) await updateOrder(sb, uid, o.id, "filled", result.filledPrice ?? null);
      }
    }
    if (changed) {
      setPortfolio(cur);
      saveLocalPortfolio(cur);
      if (sb && uid) await savePortfolio(sb, uid, cur);
    }
  }, [refreshPrices]);

  return (
    <Ctx.Provider value={{ portfolio, prices, ready, configured, placeOrder, refresh }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTrading(): TradingContextValue {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTrading must be used within a TradingProvider");
  return c;
}
