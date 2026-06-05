-- Enable Row Level Security
alter table auth.users enable row level security;

-- 1. Therapists Table
create table public.therapists (
  id uuid references auth.users on delete cascade not null primary key,
  email text unique not null,
  clinic_name text,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Patients Table
create table public.patients (
  id uuid references auth.users on delete cascade not null primary key,
  therapist_id uuid references public.therapists(id) on delete cascade not null,
  character_class text, -- warrior, mage, etc.
  current_world text default 'Castle Kingdom',
  xp integer default 0,
  level integer default 1,
  streak integer default 0,
  campaign_day integer default 1,
  campaign_id uuid, -- references campaigns(id)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Invite Codes (Secure Linking)
create table public.invites (
  id uuid default uuid_generate_v4() primary key,
  therapist_id uuid references public.therapists(id) on delete cascade not null,
  code text unique not null, -- Stored hashed in production
  used_at timestamp with time zone,
  expires_at timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Exercises (Game Mapping)
create table public.exercises (
  id uuid default uuid_generate_v4() primary key,
  name text not null, -- e.g., Straight Leg Raise
  game_name text not null, -- e.g., Rocket Launch
  description text,
  video_url text,
  metric_keys text[] -- ['knee_angle', 'hip_flexion']
);

-- 5. Patient Progress (Day by Day)
create table public.checkins (
  id uuid default uuid_generate_v4() primary key,
  patient_id uuid references public.patients(id) on delete cascade not null,
  date date not null,
  pain_level integer,
  energy_level integer,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Exercise Sessions (Scores)
create table public.sessions (
  id uuid default uuid_generate_v4() primary key,
  patient_id uuid references public.patients(id) on delete cascade not null,
  exercise_id uuid references public.exercises(id) not null,
  score integer,
  rep_count integer,
  rank text, -- S, A, B, C
  session_date timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Security)
alter table public.patients enable row level security;
create policy "Therapists can view own patients" on public.patients
  for select using (auth.uid() in (select therapist_id from public.therapists where id = auth.uid()));

alter table public.invites enable row level security;
create policy "Public can use invite" on public.invites for all using (true); -- Refine in production
