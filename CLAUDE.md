# TopRacket Development Guide

## Commands
- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run type checking

## Code Style
- Use TypeScript for all code; prefer interfaces over types
- Use functional components with the `function` keyword
- Avoid classes, enums (use maps instead)
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Lowercase with dashes for directories (components/auth-wizard)
- Favor named exports for components

## UI Components
- Use Shadcn UI components (never import directly from Radix UI)
- Style with Tailwind; use `cn()` utility for class merging
- Use declarative JSX; avoid unnecessary curly braces

## React Router
- Import from "react-router" (never from "remix-run")
- Components receive props via Router.ComponentProps (not useLoaderData/useActionData)
- Route types: `import type { Route } from "./+types/..."`
- Return plain objects from loaders/actions