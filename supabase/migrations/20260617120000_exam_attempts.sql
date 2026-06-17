-- Exam history persistence (schema v3): completed practice-exam attempts.
-- Mirrors the ExamAttempt shape in web/lib/progress/schema.ts. Like the other
-- progress tables, TEXT holds the client's opaque ISO timestamp (`at`) and the
-- per-function tally lives in JSONB. RLS gates every row to auth.uid(); with
-- anonymous sign-in a guest's attempts are theirs from the first exam.

create table if not exists public.exam_attempts (
  user_id     uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  id          text not null,                 -- `<mode>-<ISO timestamp>`, unique per user
  mode        text not null,                 -- ExamMode id (mock / quick / drill-fnN)
  at          text not null,                 -- ISO submit timestamp (client-owned)
  score       double precision not null default 0,
  correct     int  not null default 0,
  total       int  not null default 0,
  passed      boolean not null default false,
  by_function jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now(),
  primary key (user_id, id)
);

-- Newest-first reads per user.
create index if not exists exam_attempts_user_at_idx
  on public.exam_attempts (user_id, at desc);

alter table public.exam_attempts enable row level security;
create policy "exam_select_own" on public.exam_attempts
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "exam_insert_own" on public.exam_attempts
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "exam_update_own" on public.exam_attempts
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "exam_delete_own" on public.exam_attempts
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Tables created via raw SQL don't inherit Supabase's default grants.
grant select, insert, update, delete on public.exam_attempts to authenticated;
