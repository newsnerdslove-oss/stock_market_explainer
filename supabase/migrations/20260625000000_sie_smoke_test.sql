-- SIE demand-test capture tables. Public (anon) INSERT only; no SELECT via the API —
-- read these through the Supabase dashboard or a service-role client.

create table if not exists public.sie_events (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  pathname text,
  session_id text,
  utm_source text,
  utm_campaign text,
  created_at timestamptz not null default now()
);

create table if not exists public.sie_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now()
);
create unique index if not exists sie_leads_email_key on public.sie_leads (lower(email));

create table if not exists public.sie_preorders (
  id uuid primary key default gen_random_uuid(),
  email text,
  amount_cents integer,
  stripe_session text,
  created_at timestamptz not null default now()
);

alter table public.sie_events enable row level security;
alter table public.sie_leads enable row level security;
alter table public.sie_preorders enable row level security;

-- Anyone may INSERT (the smoke test is unauthenticated). No SELECT policy = no reads via
-- the anon/auth API; analyze in the dashboard or with the service-role key.
create policy "sie_events_insert" on public.sie_events for insert to anon, authenticated with check (true);
create policy "sie_leads_insert" on public.sie_leads for insert to anon, authenticated with check (true);
create policy "sie_preorders_insert" on public.sie_preorders for insert to anon, authenticated with check (true);
