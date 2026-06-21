"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createClient, supabaseConfigured } from "@/lib/supabase/client";
import { ensureSession } from "@/lib/progress/serverSync";
import { getQuoteViaApi } from "@/lib/marketService";
import { evaluateOrder, type FillResult, type OrderRequest } from "@/lib/trading/ledger";
import { evaluateOptionOrder, settleExpirations, type OptionAction, type OptionResult, type OptionsBook } from "@/lib/options/ledger";
import { markPremium } from "@/lib/options/sim";
import type { OptionType } from "@/lib/options/blackScholes";
import { insertOrder, loadLocalPortfolio, loadPortfolio, savePortfolio, saveLocalPortfolio, updateOrder } from "@/lib/trading/store";
import { emptyPortfolio, type Order, type Portfolio } from "@/lib/trading/schema";
import type { SupabaseClient } from "@supabase/supabase-js";

export interface OptionTradeRequest {
  underlying: string;
  type: OptionType;
  strike: number;
  expiry: string; // ISO YYYY-MM-DD
  action: OptionAction;
  contracts: number;
}

interface TradingContextValue {
  portfolio: Portfolio;
  /** Latest known prices by symbol (for mark-to-market P&L). */
  prices: Record<string, number>;
  ready: boolean;
  configured: boolean;
  placeOrder: (req: OrderRequest) => Promise<FillResult>;
  /** Buy-to-open / sell-to-close an option; filled at a Black-Scholes premium. */
  placeOptionOrder: (req: OptionTradeRequest) => Promise<OptionResult>;
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
        // The server copy is the source of truth across devices — but option legs
        // aren't persisted server-side yet, so keep the local ones.
        const merged: Portfolio = { ...server, optionLegs: local.optionLegs };
        setPortfolio(merged);
        saveLocalPortfolio(merged);
        void refreshPrices(Object.keys(merged.positions));
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

  const placeOptionOrder = useCallback(async (req: OptionTradeRequest): Promise<OptionResult> => {
    const quote = await getQuoteViaApi(req.underlying).catch(() => null);
    if (!quote) return { status: "rejected", reason: `Couldn't get a quote for ${req.underlying}.` };
    setPrices((p) => ({ ...p, [req.underlying]: quote.price }));

    // Fill at a Black-Scholes premium off the live underlying.
    const fill = markPremium({ underlying: req.underlying, type: req.type, strike: req.strike, expiry: req.expiry }, quote.price, new Date());
    // Collateral for writing: a put is cash-secured (strike×100); a call is secured
    // against the underlying value (spot×100). Conservative vs real spread margin.
    const marginPerContract = req.action === "sell_to_open" ? (req.type === "put" ? req.strike : quote.price) * 100 : 0;
    const pf = pfRef.current;
    const book: OptionsBook = { cash: pf.cash, realized: pf.realized, legs: pf.optionLegs };
    const { book: after, result } = evaluateOptionOrder(
      book,
      { underlying: req.underlying, type: req.type, strike: req.strike, expiry: req.expiry, action: req.action, contracts: req.contracts },
      fill,
      marginPerContract,
    );
    if (result.status === "rejected") return result;

    // Record an order-history row (reusing the stock Order shape, with a contract label).
    const label = `${req.underlying} ${req.strike}${req.type === "call" ? "C" : "P"} ${req.expiry}`;
    const order: Order = {
      id: crypto.randomUUID(),
      symbol: label,
      side: req.action.startsWith("buy") ? "buy" : "sell",
      type: "market",
      qty: req.contracts,
      limitPrice: null,
      status: "filled",
      filledPrice: result.premiumPerShare ?? fill,
      createdAt: new Date().toISOString(),
    };
    const updated: Portfolio = { ...pf, cash: after.cash, realized: after.realized, optionLegs: after.legs, orders: [order, ...pf.orders].slice(0, 50) };
    setPortfolio(updated);
    saveLocalPortfolio(updated);

    // Best-effort server sync of cash/realized + order history (legs are local-only this phase).
    const sb = sbRef.current;
    const uid = uidRef.current;
    if (sb && uid) {
      await insertOrder(sb, uid, order);
      await savePortfolio(sb, uid, updated);
    }
    return result;
  }, []);

  // Cash-settle any expired option legs to intrinsic, using the current underlying
  // price (a sim simplification — we don't store the historical price at expiry).
  const settleExpiredOptions = useCallback(async () => {
    const pf = pfRef.current;
    const today = new Date().toISOString().slice(0, 10);
    const due = Object.values(pf.optionLegs).filter((l) => l.expiry <= today);
    if (!due.length) return;
    const unders = [...new Set(due.map((l) => l.underlying))];
    const priced = await Promise.all(
      unders.map(async (u) => {
        const q = await getQuoteViaApi(u).catch(() => null);
        return q ? ([u, q.price] as const) : null;
      }),
    );
    const underlyingPrices: Record<string, number> = {};
    for (const e of priced) if (e) underlyingPrices[e[0]] = e[1];
    const book: OptionsBook = { cash: pf.cash, realized: pf.realized, legs: pf.optionLegs };
    const { book: after, settled } = settleExpirations(book, today, underlyingPrices);
    if (!settled.length) return;
    const updated: Portfolio = { ...pf, cash: after.cash, realized: after.realized, optionLegs: after.legs };
    setPortfolio(updated);
    saveLocalPortfolio(updated);
  }, []);

  // Settle expirations once the portfolio has loaded.
  useEffect(() => {
    if (ready) void settleExpiredOptions();
  }, [ready, settleExpiredOptions]);

  const refresh = useCallback(async () => {
    const pf = pfRef.current;
    const pendingSyms = pf.orders.filter((o) => o.status === "pending").map((o) => o.symbol);
    const optionUnders = Object.values(pf.optionLegs).map((l) => l.underlying);
    await refreshPrices([...Object.keys(pf.positions), ...pendingSyms, ...optionUnders]);
    await settleExpiredOptions();

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
    <Ctx.Provider value={{ portfolio, prices, ready, configured, placeOrder, placeOptionOrder, refresh }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTrading(): TradingContextValue {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTrading must be used within a TradingProvider");
  return c;
}
