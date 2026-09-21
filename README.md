# Digital Heroes — Golf Lottery Charity Platform

Production-oriented Next.js 14 App Router starter for Version 1.0 (March 2026). The product is intentionally charity/impact-first rather than a traditional golf site.

## Stack
- Next.js 14 + TypeScript + App Router
- Tailwind CSS + Framer Motion
- Supabase PostgreSQL, Auth and Storage
- Next.js Route Handlers as the backend
- Stripe Checkout / Customer Portal (mock fallback when Stripe keys are absent)
- Vercel deployment

## Local setup
1. Create a new Supabase project and run `supabase/schema.sql` in SQL Editor.
2. Create a Storage bucket named `winner-proofs` and make it public (or replace public URL handling with signed URLs for private production storage).
3. Enable Email/password Auth.
4. Copy `.env.example` to `.env.local` and fill values.
5. `npm install`
6. `npm run dev`

## Stripe
Create two recurring prices for $19/month and $199/year, then set `STRIPE_MONTHLY_PRICE_ID` and `STRIPE_YEARLY_PRICE_ID`. Configure the Stripe webhook/portal for production. The success route activates the profile; production should additionally process signed webhooks for renewals, cancellations and lapsed states.

## Test credentials
- User: `user@test.com` / `test123`
- Admin: `admin@test.com` / `admin123`

For a fresh Supabase project, create these users in Supabase Auth and ensure the admin user's email is `admin@test.com`. The app's demo admin gate uses that email; replace it with a role/claims based authorization model before public launch.

## Draw rules implemented
- 5 unique numbers from 1–45.
- Random and frequency-weighted algorithmic generation.
- Draft simulation endpoint previews matching users.
- Publish calculates 5/4/3 match tiers at 40%/35%/25%, carries unclaimed amounts into rollover, and splits a tier among multiple winners.
- Pool is active subscribers × plan fee × 50%.
- Scores are unique per user/date and capped at five, with oldest scores removed after a sixth entry.

## Production hardening checklist
- Add an explicit `roles`/admin table and server-side RBAC instead of the demo admin email gate.
- Use Stripe webhooks as the source of truth for subscription lifecycle, including cancellation and failed-payment/lapsed transitions.
- Use private Supabase Storage with signed URLs for proof documents.
- Add rate limiting, CSRF/origin checks where appropriate, audit logs, structured logging and monitoring.
- Add automated Playwright/integration tests for auth, five-score rolling, draw simulation/publish, verification and Stripe webhooks.
- Review lottery/gambling/charity laws and licensing requirements in every jurisdiction before accepting real money or operating a lottery. This repository is software, not legal advice.

## Vercel
Import the Git repository into Vercel, set the same environment variables, deploy, and set `NEXT_PUBLIC_APP_URL` to the production URL. In Stripe, set the production success/cancel URLs and webhook endpoint to your Vercel deployment.
