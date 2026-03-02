# SYSTM.RE — Agence Web Premium (La Réunion)

## Project Overview

Site vitrine / landing page pour **SYSTM.RE**, studio web indépendant basé à La Réunion. Le site présente les services (landing pages, MVP, SaaS, branding) et optimise la conversion vers la prise de rendez-vous Cal.com.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack en dev)
- **Language**: TypeScript (strict mode)
- **UI**: React 19, Tailwind CSS 4, Lucide React (icons)
- **Utilities**: clsx + tailwind-merge (via `cn()`), class-variance-authority (CVA)
- **Intégrations**: Cal.com (booking), Vercel Analytics & Speed Insights
- **Build**: PostCSS, `@tailwindcss/postcss`

## Commands

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (metadata, fonts, analytics)
│   ├── page.tsx             # Home — assemble toutes les sections
│   ├── globals.css          # Theme variables, animations, styles globaux
│   ├── icon.tsx             # Favicon
│   ├── manifest.ts          # PWA manifest
│   ├── robots.ts            # robots.txt
│   ├── sitemap.ts           # XML sitemap
│   ├── not-found.tsx        # Page 404
│   └── mentions-legales/
│       └── page.tsx         # Mentions légales
│
├── components/
│   ├── json-ld.tsx          # Schema.org JSON-LD (SEO)
│   ├── ui/
│   │   ├── button.tsx       # Button polymorphe (4 variants, 4 sizes)
│   │   ├── badge.tsx        # Badge / tag
│   │   └── animate-on-scroll.tsx  # Wrapper animation au scroll
│   └── sections/
│       ├── navbar.tsx       # Navigation fixe + menu mobile
│       ├── hero.tsx         # Hero avec background animé
│       ├── hero-animated.tsx # Orchestrateur animations hero
│       ├── projects.tsx     # Carousel projets
│       ├── services.tsx     # Services en accordéon
│       ├── how-it-works.tsx # Process en 3 étapes
│       ├── testimonials.tsx # Carousel témoignages
│       ├── faq.tsx          # FAQ accordéon
│       ├── cal-embed.tsx    # Embed calendrier Cal.com
│       └── footer.tsx       # Footer avec CTA
│
├── hooks/
│   └── use-scroll-reveal.ts # Hook Intersection Observer
│
└── lib/
    └── utils.ts             # cn() — class merging utility
```

## Architecture & Conventions

### Composants
- **Sections** (`components/sections/`) : Chaque section de la page est un composant isolé
- **UI** (`components/ui/`) : Composants réutilisables (Button, Badge, AnimateOnScroll)
- **Variants** : Utiliser CVA (`class-variance-authority`) pour les variantes de composants
- **Classes** : Toujours utiliser `cn()` de `@/lib/utils` pour merger les classes Tailwind

### Styling
- **Tailwind CSS 4** — pas de fichier `tailwind.config`, la config est dans `globals.css` via `@theme`
- **Variables CSS** définies dans `globals.css` :
  - `--color-dark: #0f0f0f`
  - `--color-orange: #F77331` (accent principal)
  - `--color-orange-light: #f8935c`
  - `--color-cream: #FFF9EB`
  - `--color-cream-dark: #f5edd8`
- **Animations** : Préfixe `anim-` (ex: `anim-fade-up`, `anim-scale-in`, `anim-slide-left`)
- **Stagger delays** : `anim-delay-100` à `anim-delay-700`

### Imports
- Path alias : `@/*` → `./src/*`
- Exemple : `import { cn } from "@/lib/utils"`

### Langue
- Le contenu du site est en **français**
- Le code (noms de variables, composants, commentaires) est en **anglais**

## SEO
- Metadata complètes dans `layout.tsx` (OpenGraph, Twitter Cards)
- JSON-LD Schema.org (ProfessionalService) dans `json-ld.tsx`
- Sitemap et robots.txt générés dynamiquement
- Langue : `fr_FR`

## Deployment
- Hébergé sur **Vercel**
- Domaine : `systm.re`
