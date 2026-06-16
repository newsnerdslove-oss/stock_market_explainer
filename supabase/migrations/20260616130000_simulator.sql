-- Phase 4: paper-trading simulator — per-user portfolio (local ledger).
-- The web app computes fills against the quote feed and persists here; no real
-- money. Same per-user + RLS pattern as Phase 3. Starting virtual cash $100,000.

create table if not exists public.portfolios (
  user_id    uuid primary key references public.profiles(id) on delete cascade default auth.uid(),
  cash       double precision not null default 100000,
  realized   double precision not null default 0,   -- cumulative realized P&L (locked in on sells)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.positions (
  user_id    uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  symbol     text not null,
  qty        double precision not null default 0,
  avg_cost   double precision not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, symbol)
);

create table if not exists public.orders (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  symbol       text not null,
  side         text not null,           -- buy | sell
  type         text not null,           -- market | limit
  qty          double precision not null,
  limit_price  double precision,
  status       text not null,           -- filled | pending | canceled | rejected
  filled_price double precision,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists orders_user_created_idx on public.orders (user_id, created_at desc);

alter table public.portfolios enable row level security;
alter table public.positions  enable row level security;
alter table public.orders     enable row level security;

-- One policy set per table, gated to the owner. (select auth.uid()) is evaluated
-- once per statement (initplan), TO authenticated short-circuits the anon role.
create policy "pf_select" on public.portfolios for select to authenticated using ((select auth.uid()) = user_id);
create policy "pf_insert" on public.portfolios for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "pf_update" on public.portfolios for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "ps_select" on public.positions for select to authenticated using ((select auth.uid()) = user_id);
create policy "ps_insert" on public.positions for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "ps_update" on public.positions for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "ps_delete" on public.positions for delete to authenticated using ((select auth.uid()) = user_id);

create policy "or_select" on public.orders for select to authenticated using ((select auth.uid()) = user_id);
create policy "or_insert" on public.orders for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "or_update" on public.orders for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Raw-SQL tables don't inherit Supabase's default grants (Phase 3 lesson: 42501).
grant select, insert, update, delete on
  public.portfolios, public.positions, public.orders to authenticated;
