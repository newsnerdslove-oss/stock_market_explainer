-- Phase 3: per-user progress persistence.
-- Mirrors web/lib/progress/schema.ts (v2). Date/time fields are stored as TEXT
-- to round-trip the client's exact values (local YYYY-MM-DD day-strings and ISO
-- stamps the client treats as opaque) — the server is storage, the client owns
-- all progression logic. Every table is RLS-gated to auth.uid(); with anonymous
-- sign-in a guest gets a real user_id, so their rows are theirs from the start
-- (no guest->authed merge needed).

-- profiles: public, RLS-controlled mirror of auth.users (don't FK app tables to auth.users directly).
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "profiles_select_own" on public.profiles
  for select to authenticated using ((select auth.uid()) = id);
create policy "profiles_update_own" on public.profiles
  for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

-- user_progress: one summary row per user (streak/tz/lastSession/schemaVersion).
create table if not exists public.user_progress (
  user_id        uuid primary key references public.profiles(id) on delete cascade default auth.uid(),
  schema_version int  not null default 2,
  streak         jsonb not null default '{"current":0,"longest":0,"lastActiveDate":null,"freezes":2}'::jsonb,
  tz             text  not null default '',
  last_session   text,
  updated_at     timestamptz not null default now()
);
alter table public.user_progress enable row level security;
create policy "user_progress_select_own" on public.user_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "user_progress_insert_own" on public.user_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "user_progress_update_own" on public.user_progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- quiz_progress: per-lesson quiz results, keyed by lessonSlug.
create table if not exists public.quiz_progress (
  user_id     uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  lesson_slug text not null,
  best_score  double precision not null default 0,
  last_score  double precision not null default 0,
  attempts    int  not null default 0,
  last_at     text,
  passed_at   text,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);
alter table public.quiz_progress enable row level security;
create policy "quiz_select_own" on public.quiz_progress
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "quiz_insert_own" on public.quiz_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "quiz_update_own" on public.quiz_progress
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "quiz_delete_own" on public.quiz_progress
  for delete to authenticated using ((select auth.uid()) = user_id);

-- review_items: per-question Leitner spaced-repetition state, keyed by questionId.
create table if not exists public.review_items (
  user_id     uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  question_id text not null,
  box         int  not null default 1,
  due         text,
  last        text,
  reps        int  not null default 0,
  lapses      int  not null default 0,
  updated_at  timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.review_items enable row level security;
create policy "review_select_own" on public.review_items
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "review_insert_own" on public.review_items
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "review_update_own" on public.review_items
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "review_delete_own" on public.review_items
  for delete to authenticated using ((select auth.uid()) = user_id);

-- On signup (incl. anonymous), seed the profile + an empty progress summary row.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  insert into public.user_progress (user_id) values (new.id) on conflict do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
