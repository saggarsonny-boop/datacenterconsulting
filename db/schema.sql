create table if not exists intake_submissions (
  id bigserial primary key,
  clerk_user_id text not null,
  contact_name text not null,
  company_name text not null,
  email text not null,
  property_location text not null,
  parcel_size numeric,
  utility_node text,
  document_summary text,
  owner_use_concepts text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists document_uploads (
  id bigserial primary key,
  clerk_user_id text not null,
  category text not null,
  reference text,
  file_name text,
  external_url text,
  uploadthing_url text,
  source text not null default 'uploadthing',
  created_at timestamptz not null default now()
);

create table if not exists stakeholder_requests (
  id bigserial primary key,
  stakeholder_type text not null,
  full_name text not null,
  organization text not null,
  email text not null,
  location text,
  primary_goal text not null,
  timeline text,
  materials_summary text,
  material_categories text,
  document_link text,
  requested_output text,
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists idx_intake_user_created on intake_submissions(clerk_user_id, created_at desc);
create index if not exists idx_uploads_user_created on document_uploads(clerk_user_id, created_at desc);
create index if not exists idx_stakeholder_requests_created on stakeholder_requests(created_at desc);
