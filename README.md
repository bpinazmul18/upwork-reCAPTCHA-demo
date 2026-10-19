# ShieldLayer reCAPTCHA Demo

A polished Next.js + TypeScript + App Router demo for a registration page and contact page, styled with Tailwind CSS and shadcn-style reusable form primitives.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Connect Google reCAPTCHA

1. Create a reCAPTCHA v3 key in the Google admin console and add `localhost` plus your Vercel domain to its allowed domains.
2. Copy `.env.example` to `.env.local`.
3. Set both `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`.
4. Deploy with the same variables configured in Vercel Project Settings.

The browser loads Google's v3 script and creates an action-specific token on submit. `src/app/api/recaptcha/route.ts` sends that token to Google's server-side `siteverify` endpoint and checks the expected action and minimum score before either form shows success. Set `RECAPTCHA_MIN_SCORE` to tune the threshold.

The `register` and `contact` pages are separate App Router routes at `/register` and `/contact`. The demo API route verifies the request but does not persist form data; connect its success branch to your real registration or email service.
