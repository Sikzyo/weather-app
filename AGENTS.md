# AGENTS.md

## Stack

React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4 · Bun

## Commands

```bash
bun dev        # dev server
bun run build  # tsc -b + vite build
bun run lint   # eslint
```

## Principles

- **KISS**: prefer the simplest solution that works
- **SOLID**: single responsibility, open/closed, dependency inversion
- Small, focused components — compose over inherit
- No unused locals/params (enforced by tsc)

## Key conventions

### Imports

- `@/*` maps to project root — **always use `@/` aliases, never relative paths**
- Order: external libs → `@/` aliases → (no relative)
- Types only: `import { type Foo } from "@/..."`

### Naming

- Component files: kebab-case (`weather-card.tsx`), exports: PascalCase (`WeatherCard`)
- Functions/variables: camelCase
- Config constants: `SCREAMING_SNAKE_CASE`

### Components

- One responsibility per component; if it grows, split it
- All UI components live in `src/components/ui/` and follow the `cva` + `cn()` pattern for variants
- Use `cn()` from `@/lib/utils` for all className merging

### State & data fetching

- Local state: `useState`
- Server state: `@tanstack/react-query` — no manual fetch/useEffect for remote data
- Avoid context unless state is truly global; lift state up first

### Validation

- Use Zod for all external data (API responses, env vars, form input)

## Doubts or unfamiliar tasks?

Consult available skills in `/mnt/skills/` before proceeding.
