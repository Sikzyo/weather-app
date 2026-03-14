# AGENTS.md - Weather App Development Guide

This document provides guidelines and instructions for agents working on this codebase.

## Project Overview

- **Type**: React + TypeScript + Vite web application
- **Stack**: React 19, TypeScript, Tailwind CSS 4, Vite 8
- **Package Manager**: npm
- **Path Alias**: `@/*` maps to project root (configured in tsconfig.json)

---

## Build / Lint / Test Commands

### Development
```bash
npm run dev          # Start Vite dev server with HMR
```

### Build
```bash
npm run build        # Run TypeScript compiler (tsc -b) then Vite build
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint on all files
```

### Testing
No test framework is currently configured. If tests are added later:
- Run single test file: `vitest run path/to/test.test.ts`
- Run tests in watch mode: `vitest`
- Add test script to package.json following Vitest conventions

---

## Code Style Guidelines

### General Principles
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused
- Use TypeScript strict mode (enabled in tsconfig.app.json)

### Imports
- Use path aliases: `import { cn } from "@/lib/utils"`
- Order imports: external libs → internal aliases → relative paths
- Use `import { type Foo }` syntax for type-only imports
- Use `@tanstack/react-query` for data fetching

### Formatting
- Uses ESLint with TypeScript ESLint, React Hooks, and React Refresh plugins
- Run `npm run lint` before committing
- No Prettier config - rely on ESLint for formatting

### TypeScript
- **Strict mode enabled** - no implicit any
- Use `erasableSyntaxOnly` - prefer `type` over `interface` unless needed
- Use `verbatimModuleSyntax` - must use `import { type }` for types
- Always type function parameters and return types
- Use `noUnusedLocals` and `noUnusedParameters` - clean up unused code

### Naming Conventions
- **Components**: PascalCase (e.g., `Button`, `WeatherCard`)
- **Functions/variables**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **Files**: kebab-case for components (`weather-card.tsx`)
- **UI Components**: colocate in `src/components/ui/`

### Tailwind CSS 4
- Uses `@tailwindcss/vite` plugin
- Use utility classes extensively (see button.tsx for examples)
- Use `cn()` utility from `@/lib/utils` for className merging
- Use `cva` (class-variance-authority) for component variants

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages in UI
- Use Zod for runtime validation of external data

### Component Patterns
Follow the shadcn/ui-style pattern used in this project:
```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base classes", {
  variants: {
    variant: { default: "...", secondary: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
})

function Component({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"element"> & VariantProps<typeof componentVariants>) {
  return <Element className={cn(componentVariants({ variant, size, className }))} {...props} />
}

export { Component, componentVariants }
```

### State Management
- Local state: `useState` for component state
- Server state: `@tanstack/react-query`
- Avoid unnecessary context - lift state up when possible

---

## Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components (shadcn-style)
├── lib/
│   └── utils.ts      # Utility functions (cn, etc.)
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

---

## Key Dependencies

- **UI**: Radix UI, Lucide React, class-variance-authority, tailwind-merge
- **Data**: @tanstack/react-query, Zod
- **Routing**: react-router 7
- **Fonts**: @fontsource-variable (Geist, Manrope, Sora)

---

## Common Tasks

### Adding a new UI component
1. Create file in `src/components/ui/component-name.tsx`
2. Use cva for variants following button.tsx pattern
3. Export both component and variants

### Adding a new page/route
1. Create component in appropriate directory
2. Set up route in router configuration
3. Use React Query for data fetching

### Running typecheck separately
```bash
npx tsc -b          # Full build with type checking
npx tsc --noEmit   # Type check without emitting
```

---

## Notes

- This project uses ESNext module resolution with Vite
- React 19 with new hooks (`use` hook available)
- No test framework configured yet - consider adding Vitest
- Follow existing patterns in `src/components/ui/` for new components
