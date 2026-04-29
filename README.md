# datacenterconsulting

Independent think tank site and partner portal for datacenterconsulting.org.

## Stack

1. Next.js App Router
2. Clerk authentication
3. Neon Postgres database
4. UploadThing file uploads

## Product Direction

The site now leads with a public-facing mission:

1. Publish open frameworks for transparent data center siting and power stewardship.
2. Release public research and white papers that make infrastructure decisions legible to non-experts.
3. Maintain a secondary secure portal for invited partners to share confidential intake and diligence materials.

## Required Environment Variables

Copy `.env.example` to `.env.local` and fill values:

1. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
2. `CLERK_SECRET_KEY`
3. `NEON_DATABASE_URL`
4. `UPLOADTHING_SECRET`
5. `UPLOADTHING_APP_ID`

## Database Setup

Run SQL in Neon console from [db/schema.sql](db/schema.sql).

## Local Run

1. `npm install`
2. `npm run dev`
3. `npm run build` before shipping changes

## Deploy

1. Add all environment variables in Vercel project settings.
2. Push changes to `main`.
3. Let Vercel build automatically, or trigger a redeploy from the Vercel dashboard.
4. Confirm the homepage reflects the think tank positioning instead of the legacy consultant copy.

## Domain Notes

Use `datacenterconsulting.org` as the primary domain in Vercel.
If Cloudflare DNS is used at apex, use CNAME flattening/alias behavior to the Vercel target.
