# Hydraulics Production App

Monorepo scaffold for the Hydraulics Production App.

## Structure
- `apps/frontend` — Next.js App Router UI
- `apps/backend` — NestJS (Fastify) API with global ValidationPipe
- `packages/schemas` — shared Zod schemas
- `packages/ui` — theme tokens

## Dev
- Frontend: `npm run dev` (from `apps/frontend`)
- Backend: `npm run build` (from `apps/backend`)
