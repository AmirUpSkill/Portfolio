# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. The project is designed to be a single-page application showcasing professional portfolio sections including skills, projects, experience, achievements, and contact information. It uses the latest animation libraries for smooth, engaging user interactions.

## Tech Stack Architecture

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS v4 with CSS Variables and custom theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animation Libraries**: 
  - Framer Motion (primary)
  - GSAP (advanced animations)
  - React Spring (spring-based animations)
  - Lottie React (complex animations)
  - Auto-animate (simple transitions)
- **State & Utilities**: React 19, Intersection Observer, Lucide React icons

## Development Commands

```bash
# Development server with Turbopack (faster builds)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Add shadcn/ui components
pnpm dlx shadcn@latest add [component-name]
```

## Project Structure

The project follows Next.js 15 App Router conventions:

- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui primitive components
- `components/sections/` - Planned portfolio section components
- `lib/utils.ts` - Utility functions (cn for className merging)
- `public/` - Static assets and icons

## Animation Strategy

Multiple animation libraries are integrated for different use cases:
- **Framer Motion**: Page transitions, component animations, layout animations
- **GSAP**: Complex timeline animations, performance-critical animations
- **React Spring**: Smooth spring-based interactions
- **Intersection Observer**: Scroll-triggered animations
- **Lottie**: Complex animated illustrations and micro-interactions

## Development Workflow

The project uses a **divide and conquer** approach with feature branch development:

### Git Flow Strategy

**Core Principle**: We handle each layer separately, building each layer in its own Git branch and submitting pull requests to the remote repository before merging them.

**Workflow Steps**:
1. Create a new branch for each major feature/section
2. Develop the feature completely in isolation
3. Submit pull request to remote repository for review
4. Merge after review and testing
5. Move to next layer/feature

**Branch Naming Convention**:
- `feature/section-name` (e.g., `feature/hero-section`)
- `feature/navigation`
- `feature/skills-section`
- `feature/projects-section`
- `feature/experience-section`
- `feature/achievements-section`
- `feature/contact-section`

**Git Commands for Each Layer**:
```bash
# Start new feature branch
git checkout -b feature/section-name

# Work on feature, commit regularly
git add .
git commit -m "feat: implement section component"

# Push to remote for PR
git push -u origin feature/section-name

# After PR approval and merge, cleanup
git checkout main
git pull origin main
git branch -d feature/section-name
```

## Component Development

- Uses shadcn/ui "New York" style with Zinc base color
- Components use `@/` path aliasing for clean imports
- TypeScript strict mode enabled for type safety
- CSS Variables used for theming (light/dark mode ready)

## Styling Conventions

- Tailwind CSS v4 with CSS Variables for theme tokens
- Custom theme configuration in `app/globals.css`
- Dark mode support built-in with `.dark` class variant
- Geist font family (Sans and Mono) for typography

## Portfolio Sections Planned

Based on the project brief, the following sections will be implemented:
1. **Header & Navigation** - Sticky navigation with smooth scrolling
2. **Hero/Intro Section** - Main introduction with CTA
3. **Skills Section** - Technologies organized by category
4. **Projects Section** - Project showcase with images and tech stacks
5. **Experience Section** - Work history timeline
6. **Achievements Section** - Recognition and accomplishments
7. **Contact Section** - Contact form and social links
8. **Footer** - Simple attribution

## Deployment

- Target platform: Vercel (free tier)
- Static generation optimized for performance
- No backend dependencies (static site)

## Key Files to Modify

- `app/page.tsx` - Main portfolio page content
- `app/layout.tsx` - Site metadata and root layout
- `app/globals.css` - Global styles and theme variables
- `components/sections/` - Individual portfolio sections (to be created)
- `public/` - Portfolio images and assets
