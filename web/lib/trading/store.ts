// Supabase persistence for the paper portfolio. Per-user, RLS-protected. Best-
// effort like the progress store. Reuses the Phase 3 anonymous/real session.

import type { SupabaseClient } from "@supabase/supabase-js";
import { emptyPortfolio, STARTING_CASH, type Order, type Portfolio } from "@/lib/trading/schema";

/** Load the user's portfolio, or null if they have no portfolio row yet. */
export async function loadPortfolio(supabase: SupabaseClient, userId: string): Promise<Portfolio | null> {
  try {
    const [pf, pos, ord] = await Promise.all([
      supabase.from("portfolios").select("cash,realized").eq("user_id", userId).maybeSingle(),
      supabase.from("positions").select("symbol,qty,avg_cost").eq("user_id", userId),
      supabase.from("orders").select("id,symbol,side,type,qty,limit_price,status,filled_price,created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(50),
    ]);
    if (pf.error || pos.error || ord.error || !pf.data) return null;
    const base = emptyPortfolio();
    base.userId = userId;
    base.cash = pf.data.cash;
    base.realized = pf.data.realized;
    for (const p of pos.data ?? []) base.positions[p.symbol] = { symbol: p.symbol, qty: p.qty, avgCost: p.avg_cost };
    base.orders = (ord.data ?? []).map((o) => ({
      id: o.id, symbol: o.symbol, side: o.side, type: o.type, qty: o.qty,
      limitPrice: o.limit_price, status: o.status, filledPrice: o.filled_price, createdAt: o.created_at,
    }));
    return base;
  } catch {
    return null;
  }
}

/** Load the portfolio, creating a fresh funded one if none exists. */
export async function ensurePortfolio(supabase: SupabaseClient, userId: string): Promise<Portfolio> {
  const existing = await loadPortfolio(supabase, userId);
  if (existing) return existing;
  await supabase.from("portfolios").upsert({ user_id: userId, cash: STARTING_CASH, realized: 0 }, { onConflict: "user_id" });
  const pf = emptyPortfolio();
  pf.userId = userId;
  return pf;
}

/** Persist the account scalars + reconcile positions (upsert held, delete closed). */
export async function savePortfolio(supabase: SupabaseClient, userId: string, pf: Portfolio): Promise<void> {
  const now = new Date().toISOString();
  try {
    await supabase.from("portfolios").upsert({ user_id: userId, cash: pf.cash, realized: pf.realized, updated_at: now }, { onConflict: "user_id" });

    const held = Object.values(pf.positions);
    if (held.length) {
      await supabase.from("positions").upsert(
        held.map((p) => ({ user_id: userId, symbol: p.symbol, qty: p.qty, avg_cost: p.avgCost, updated_at: now })),
        { onConflict: "user_id,symbol" },
      );
    }
    // Delete any DB positions no longer held (sold to zero).
    const cur = await supabase.from("positions").select("symbol").eq("user_id", userId);
    const want = new Set(Object.keys(pf.positions));
    for (const row of cur.data ?? []) {
      if (!want.has(row.symbol)) await supabase.from("positions").delete().eq("user_id", userId).eq("symbol", row.symbol);
    }
  } catch {
    /* best-effort */
  }
}

/** Record an order in history. */
export async function insertOrder(supabase: SupabaseClient, userId: string, o: Order): Promise<void> {
  try {
    await supabase.from("orders").insert({
      id: o.id, user_id: userId, symbol: o.symbol, side: o.side, type: o.type, qty: o.qty,
      limit_price: o.limitPrice, status: o.status, filled_price: o.filledPrice, created_at: o.createdAt,
    });
  } catch {
    /* best-effort */
  }
}

/** Update an order's status/fill (e.g. a pending limit that later fills). */
export async function updateOrder(supabase: SupabaseClient, userId: string, id: string, status: string, filledPrice: number | null): Promise<void> {
  try {
    await supabase.from("orders").update({ status, filled_price: filledPrice, updated_at: new Date().toISOString() }).eq("user_id", userId).eq("id", id);
  } catch {
    /* best-effort */
  }
}
