
create table public.likes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_agent text,
  fingerprint text
);

alter table public.likes enable row level security;

create policy "anyone can insert likes"
  on public.likes for insert
  to anon, authenticated
  with check (true);
