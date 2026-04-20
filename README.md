# PeakFix Handyman

Marketing site for **PeakFix Handyman Services** in Boulder, CO: services, gallery, FAQ, and a contact form backed by a Next.js API route.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

- Node.js 20+ (recommended; matches Next.js 16 expectations)

## Setup

```bash
npm install
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`  | Start dev server (default: port 3000) |
| `npm run build` | Production build                    |
| `npm run start` | Run production server after build   |
| `npm run lint`  | Run ESLint                          |

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact API

`POST /api/contact` expects JSON with `name`, `email`, `phone`, and `message`. Successful submissions are logged on the server; wire this route to email or a CRM when you deploy.

## Favicon

The app icon is defined as [`app/icon.svg`](app/icon.svg) (mountain motif). Next.js serves it automatically; no extra metadata is required.

## Deploy

Build with `npm run build` and run with `npm run start`, or deploy to [Vercel](https://vercel.com/) or any host that supports Node.js for Next.js.

Set `siteConfig.url` in [`lib/site.ts`](lib/site.ts) to your production URL so metadata and Open Graph stay correct.
