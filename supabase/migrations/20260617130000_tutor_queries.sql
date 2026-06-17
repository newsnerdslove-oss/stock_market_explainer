-- Tutor question tracking (schema v4): the "ask about this lesson" questions a
-- learner has asked, for personal history, confusion hotspots, and study-plan
-- follow-through. Mirrors the TutorQuery shape in web/lib/progress/schema.ts.
-- RLS gates every row to auth.uid(); cited sources live in JSONB.

create table if not exists public.tutor_queries (
  user_id      uuid not null references public.profiles(id) on delete cascade default auth.uid(),
  id           text not null,                 -- `<slug>-<ISO timestamp>`, unique per user
  at           text not null,                 -- ISO ask timestamp (client-owned)
  slug         text not null,                 -- lesson the question was asked from
  question     text not null,
  mode         text not null,                 -- llm | retrieval | none
  source_slugs jsonb not null default '[]'::jsonb,
  updated_at   timestamptz not null default now(),
  primary key (user_id, id)
);

create index if not exists tutor_queries_user_at_idx
  on public.tutor_queries (user_id, at desc);

alter table public.tutor_queries enable row level security;
create policy "tutor_q_select_own" on public.tutor_queries
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "tutor_q_insert_own" on public.tutor_queries
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "tutor_q_update_own" on public.tutor_queries
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "tutor_q_delete_own" on public.tutor_queries
  for delete to authenticated using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.tutor_queries to authenticated;
