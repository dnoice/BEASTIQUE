# BEASTIQUE V2 — Complete Rebuild Blueprint

**Author:** Antigravity (Private Build Consultant)
**Client:** Solo Developer — Dennis "dnoice" Smaltz
**Date:** April 25, 2026
**Status:** DRAFT — Awaiting Review

> **⚠ Historical (April 2026).** This blueprint predates the June 2026 repo
> restructure. Paths it references (root-level `css/`, `js/`, `assets/`,
> `collections/`, `species/`, etc.) have since moved into `site/` and `studio/`.
> For the current layout see [PROJECT-TREE.md](PROJECT-TREE.md); for the move
> itself see [REORG-AUDIT.md](REORG-AUDIT.md).

---

## Table of Contents

1. [Philosophy & Design North Star](#1-philosophy--design-north-star)
2. [Flagship Species — The Grand Openers](#2-flagship-species--the-grand-openers)
3. [Stack Selection & Rationale](#3-stack-selection--rationale)
4. [Project Structure](#4-project-structure)
5. [Content Architecture](#5-content-architecture)
6. [Image Pipeline](#6-image-pipeline)
7. [Design System](#7-design-system)
8. [UX & Visual Direction](#8-ux--visual-direction)
9. [Component Library](#9-component-library)
10. [Page Architecture](#10-page-architecture)
11. [Interactive Features (JS Islands)](#11-interactive-features-js-islands)
12. [Performance Budget](#12-performance-budget)
13. [Build, Deploy & Hosting](#13-build-deploy--hosting)
14. [Migration Strategy](#14-migration-strategy)
15. [Phase Plan](#15-phase-plan)
16. [Risk Register](#16-risk-register)

---

## 1. Philosophy & Design North Star

### What V2 Must Be

BEASTIQUE is not a blog, not a portfolio, not a generic awareness site. It is a **confrontational luxury experience** — a digital gallery where extinction is rendered in the visual language of value. V2 must feel like walking into a museum exhibit designed by someone who studied both ecology and haute couture.

### Design North Star

> **"If Cartier made a website about extinction, and it was backed by IUCN data."**

That's the bar. Every pixel earns its place. Every interaction has weight. Every transition feels considered. The site should feel expensive, deliberate, and slightly unsettling — beauty that makes you uncomfortable because of what it represents.

### What V1 Got Right (Keep)
- The core premise: beauty as the argument
- BEM CSS discipline
- Vanilla JS modules with `init()` pattern
- Species-specific ambient effects (snow, fireflies, particles)
- SOS Morse code frame system (34 KB of brilliance)
- Research-backed content with source citations

### What V2 Must Fix
- Zero build pipeline → modern toolchain with automatic image optimization
- Hardcoded HTML for 220+ species → content-driven dynamic generation
- 100+ MB page loads → under 3 MB per page
- Disconnected data layer → single source of truth for all content
- Inconsistent navigation/branding across tiers → unified design system
- No responsive images → automatic WebP/AVIF with srcset
- CSS @import chains (10+ blocking requests) → single bundled stylesheet

---

## 2. Flagship Species — The Grand Openers

The site launches with **15 flagship species** — a curated, resonance-weighted shortlist from the [Resonant Red List Atlas](file:///c:/Users/DnnsS/OneDrive/Desktop/dd1/projects/beastique/docs/BEASTIQUE_RESONANT_RED_LIST_ATLAS_TOP15.md). These are not just the rarest — they're the species whose stories hit hardest, look most striking, and carry the BEASTIQUE mission most effectively.

Each flagship comes with:
- 12 researched facts
- 12 corresponding AI image prompts (1:1, material-fusion style)
- A unique BEASTIQUE material pairing
- A resonance rationale

### The Launch Roster

| # | Species | Slug | Material Pairing | Category | Status |
|---|---------|------|-----------------|----------|--------|
| 01 | Vaquita | `vaquita` | Translucent sea-glass, pearl-gray mineral, soft silver | aquatic | CR |
| 02 | Javan Rhinoceros | `javan-rhinoceros` | Wet basalt, dark bronze, rainforest stone | mammalian | CR |
| 03 | Sumatran Rhinoceros | `sumatran-rhinoceros` | Oxidized copper, volcanic earth, dark ironwood | mammalian | CR |
| 04 | Tapanuli Orangutan | `tapanuli-orangutan` | Amber resin, dark teak, fine copper | mammalian | CR |
| 05 | Cross River Gorilla | `cross-river-gorilla` | Black obsidian, mossy stone, smoked steel | mammalian | CR |
| 06 | African Forest Elephant | `african-forest-elephant` | Aged bronze, rainforest jade, dark wood | mammalian | CR |
| 07 | Amur Leopard | `amur-leopard` | Snow quartz, frosted silver, pale steel | mammalian | CR |
| 08 | Sumatran Tiger | `sumatran-tiger` | Ember-gold, black onyx, smoked copper | mammalian | CR |
| 09 | Saola | `saola` | Moon porcelain, wet lacquer, mist-silver | mammalian | CR |
| 10 | Sunda Pangolin | `sunda-pangolin` | Hammered bronze, warm keratin-gold, dark soil stone | mammalian | CR |
| 11 | North Atlantic Right Whale | `north-atlantic-right-whale` | Midnight cobalt, weathered steel, ocean obsidian | aquatic | CR/EN |
| 12 | Hawksbill Sea Turtle | `hawksbill-sea-turtle` | Amber glass, reef gold, iridescent shell mosaic | reptilian | CR |
| 13 | Kākāpō | `kakapo` | Moss jade, soft greenstone, muted gold | avian | CR |
| 14 | Philippine Eagle | `philippine-eagle` | Weathered gold, storm steel, dark wood | avian | CR |
| 15 | Red Wolf | `red-wolf` | Red sandstone, brushed copper, dark ironwood | mammalian | CR |

### Content Already Available Per Species

- **12 facts** — researched, written, ready to port into MDX frontmatter
- **12 image prompts** — production-ready for AI image generation pipeline
- **Material pairing** — informs both the color palette AND a new texture/material design language per species
- **Resonance rationale** — can serve as the species page tagline or pull-quote

### What This Means for the Build

1. **Phase 1 content migration** creates all 220+ skeleton MDX files, but the **Top 15 get full dossiers** immediately
2. **Image generation** follows the atlas prompts — 12 fact images per species = **180 images** to generate across the 15
3. **Landing page gallery** features the Top 15 as the hero showcase, not random species
4. **Species pages** for the Top 15 are the first to reach `status: complete`
5. The remaining 205+ species stay as `status: placeholder` with "Coming Soon" treatment until research is done

> **Source document:** `docs/BEASTIQUE_RESONANT_RED_LIST_ATLAS_TOP15.md` — the full atlas with all 180 facts and 180 prompts.

---

## 3. Stack Selection & Rationale

### The Decision: Astro + Vanilla CSS + Vanilla JS Islands

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | **Astro 5.x** | Ships 0 JS by default. Content Collections built for exactly this use case. Built-in image optimization. File-based routing. Solo-dev friendly. |
| **Styling** | **Vanilla CSS** (design tokens + layers) | You already write excellent CSS. No framework overhead. CSS `@layer` for cascade control. Custom properties for theming. |
| **Interactivity** | **Vanilla JS (Astro Islands)** | Canvas particles, galleries, SOS frames — these are custom systems. No React/Vue overhead needed. Astro hydrates them only when visible. |
| **Content** | **Astro Content Collections + MDX** | Species data lives in Markdown frontmatter. Type-safe schemas. Queryable. Auto-generates pages. |
| **Images** | **Astro `<Image>` / `<Picture>`** | Automatic WebP/AVIF conversion, responsive srcsets, lazy loading. Solves the #1 problem from V1. |
| **Hosting** | **Netlify or Vercel** | Free tier handles static sites. Automatic deploys from git push. Edge CDN. |
| **Version Control** | **Git + GitHub** | With proper `.gitignore` to exclude source art files |

### Why Not Next.js?

Next.js is excellent, but it ships ~40 KB+ of React runtime on every page even for static content. BEASTIQUE is a content gallery — 95% of pages need zero client-side JavaScript. Astro's "zero JS by default, add it only where needed" model is purpose-built for this.

### Why Not Plain HTML Again?

V1 proved that 220+ hardcoded species pages don't scale. One person can't maintain 5 category files × 30-60 species cards each as hand-written HTML. Content Collections solve this — write the data once, pages generate automatically.

### Why Not Tailwind?

You write beautiful, intentional CSS. Tailwind would fight your aesthetic instincts and add cognitive overhead for marginal benefit. Vanilla CSS with `@layer`, `@scope`, and custom properties gives you full control with modern tooling.

---

## 3. Project Structure

```
beastique-v2/
├── astro.config.mjs              # Astro configuration
├── package.json
├── tsconfig.json                 # TypeScript config (Astro uses TS for schemas)
│
├── public/                       # Static assets (copied as-is)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og-image.png              # Social sharing default image
│   └── fonts/                    # Self-hosted font files (WOFF2)
│
├── src/
│   ├── assets/                   # Processed by Astro's image pipeline
│   │   ├── images/
│   │   │   ├── featured/         # Gallery/hero artwork (optimized at build)
│   │   │   ├── species/          # Species thumbnails + hero images
│   │   │   │   ├── amur-leopard/
│   │   │   │   ├── beluga-sturgeon/
│   │   │   │   └── ...
│   │   │   ├── categories/       # Category hero/card images
│   │   │   └── landing/          # Landing page specific
│   │   ├── logos/
│   │   └── icons/
│   │
│   ├── content/                  # Astro Content Collections
│   │   ├── config.ts             # Collection schemas (type-safe)
│   │   ├── species/              # One .mdx file per species
│   │   │   ├── amur-leopard.mdx
│   │   │   ├── beluga-sturgeon.mdx
│   │   │   ├── kakapo.mdx
│   │   │   └── ... (220+ files)
│   │   └── categories/           # One .mdx file per category
│   │       ├── aquatic.mdx
│   │       ├── avian.mdx
│   │       ├── insecta.mdx
│   │       ├── mammalian.mdx
│   │       └── reptilian.mdx
│   │
│   ├── components/               # Reusable Astro components
│   │   ├── global/               # Site-wide
│   │   │   ├── Nav.astro
│   │   │   ├── Footer.astro
│   │   │   ├── SEO.astro
│   │   │   └── Breadcrumb.astro
│   │   ├── landing/              # Landing page sections
│   │   │   ├── Hero.astro
│   │   │   ├── Gallery.astro
│   │   │   ├── BeastCards.astro
│   │   │   ├── Showcases.astro
│   │   │   ├── Mission.astro
│   │   │   ├── Numbers.astro
│   │   │   └── ClosingBanner.astro
│   │   ├── category/             # Category page components
│   │   │   ├── CategoryHero.astro
│   │   │   └── SpeciesGrid.astro
│   │   ├── species/              # Species page sections
│   │   │   ├── SpeciesHero.astro
│   │   │   ├── Stats.astro
│   │   │   ├── About.astro
│   │   │   ├── Facts.astro
│   │   │   ├── Conservation.astro
│   │   │   └── Closing.astro
│   │   ├── cards/                # Card variants
│   │   │   ├── SpeciesCard.astro
│   │   │   └── BeastCard.astro
│   │   └── interactive/          # Client-side JS islands
│   │       ├── ParticleCanvas.astro
│   │       ├── SOSFrame.astro
│   │       ├── Typewriter.astro
│   │       ├── ImageGallery.astro
│   │       └── AmbientEffect.astro
│   │
│   ├── layouts/                  # Page layouts (shared shells)
│   │   ├── BaseLayout.astro      # HTML head, body, fonts, global CSS
│   │   ├── LandingLayout.astro
│   │   ├── CategoryLayout.astro
│   │   └── SpeciesLayout.astro
│   │
│   ├── pages/                    # File-based routing
│   │   ├── index.astro           # Landing page
│   │   ├── categories/
│   │   │   └── [slug].astro      # Dynamic: generates 5 category pages
│   │   └── species/
│   │       └── [slug].astro      # Dynamic: generates 220+ species pages
│   │
│   ├── styles/                   # CSS architecture
│   │   ├── global.css            # Reset, tokens, base typography
│   │   ├── layers.css            # @layer declarations
│   │   └── components/           # Component-scoped styles
│   │       └── (Astro scopes CSS automatically per component)
│   │
│   ├── scripts/                  # Client-side JS modules
│   │   ├── particles.ts          # Canvas particle systems
│   │   ├── sos-frame.ts          # SOS Morse frame engine
│   │   ├── gallery.ts            # Image gallery/slideshow
│   │   ├── typewriter.ts         # Text animation
│   │   ├── scroll-reveal.ts      # Intersection Observer reveals
│   │   ├── counter.ts            # Animated counters
│   │   └── ambient/              # Species-specific ambient effects
│   │       ├── snowflakes.ts
│   │       ├── fireflies.ts
│   │       ├── bubbles.ts
│   │       └── base.ts           # Shared ambient effect interface
│   │
│   └── lib/                      # Utility functions
│       ├── species.ts            # Species data helpers
│       ├── images.ts             # Image path resolution
│       └── format.ts             # Text formatting utilities
│
├── scripts/                      # Build-time scripts
│   ├── optimize-images.mjs       # Batch image processing
│   └── migrate-v1-data.mjs       # One-time V1 → V2 data migration
│
└── .gitignore                    # Excludes source art, node_modules, dist
```

---

## 4. Content Architecture

### Species Content Collection Schema

Every species is a single `.mdx` file in `src/content/species/`. The frontmatter IS the data — no separate JSON needed.

```typescript
// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const species = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Identity
    name: z.string(),
    scientificName: z.string(),
    category: z.enum(['aquatic', 'avian', 'insecta', 'mammalian', 'reptilian']),
    tagline: z.string(),

    // Conservation
    conservationStatus: z.enum([
      'Extinct', 'Extinct in Wild', 'Critically Endangered',
      'Endangered', 'Vulnerable', 'Near Threatened',
      'Least Concern', 'Data Deficient'
    ]),
    iucnCode: z.enum(['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD']),

    // BEASTIQUE Identity (from Resonant Red List Atlas)
    materialPairing: z.string().optional(),       // e.g. "snow quartz, frosted silver, pale steel"
    resonanceReason: z.string().optional(),        // Why this species resonates with humans
    flagshipRank: z.number().min(1).max(15).optional(), // Position in Top 15 launch roster

    // Media
    thumbnail: image(),
    heroImage: image().optional(),
    closingImage: image().optional(),

    // Page readiness
    status: z.enum(['complete', 'draft', 'placeholder']).default('placeholder'),

    // Stats (optional — only for complete pages)
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),

    // Taxonomy
    taxonomy: z.object({
      kingdom: z.string().default('Animalia'),
      phylum: z.string(),
      class: z.string(),
      order: z.string(),
      family: z.string(),
      genus: z.string(),
      species: z.string(),
      subspecies: z.string().optional(),
    }).optional(),

    // Threats (for conservation section)
    threats: z.array(z.object({
      name: z.string(),
      detail: z.string(),
      sourceUrl: z.string().url(),
      sourceName: z.string(),
    })).optional(),

    // Facts — 12 per flagship species, each with optional image prompt
    facts: z.array(z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(image()),
      imagePrompt: z.string().optional(),  // AI generation prompt from Atlas
    })).optional(),

    // Species-specific ambient effect
    ambientEffect: z.enum([
      'snowflakes', 'fireflies', 'bubbles',
      'dust', 'embers', 'spores', 'none'
    ]).default('none'),

    // Color palette for theming
    palette: z.object({
      shadow: z.string(),
      dark: z.string(),
      mid: z.string(),
      accent: z.string(),
      accentSoft: z.string(),
      text: z.string(),
      textMuted: z.string(),
    }),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string(),
    heroImage: image(),
    accentColor: z.string(),
    bgColor: z.string(),
    textColor: z.string(),
    order: z.number(),
  }),
});

export const collections = { species, categories };
```

### Example Species File

```mdx
---
# src/content/species/amur-leopard.mdx
name: "Amur Leopard"
scientificName: "Panthera pardus orientalis"
category: "mammalian"
tagline: "Ghost of the Siberian Forest"
conservationStatus: "Critically Endangered"
iucnCode: "CR"
thumbnail: "../../assets/images/species/amur-leopard/thumb.webp"
heroImage: "../../assets/images/species/amur-leopard/hero.webp"
closingImage: "../../assets/images/species/amur-leopard/closing.webp"
status: "complete"
ambientEffect: "snowflakes"

palette:
  shadow: "#0a0806"
  dark: "#161210"
  mid: "#2d2319"
  accent: "#d4944a"
  accentSoft: "#e0a85e"
  text: "#f0e6d6"
  textMuted: "#c4b8a8"

stats:
  - { value: "~120", label: "Wild Population" }
  - { value: "37mph", label: "Top Speed" }
  - { value: "19ft", label: "Leap Distance" }
  - { value: "15", label: "Years Lifespan" }

taxonomy:
  phylum: "Chordata"
  class: "Mammalia"
  order: "Carnivora"
  family: "Felidae"
  genus: "Panthera"
  species: "P. pardus"
  subspecies: "P. p. orientalis"

threats:
  - name: "Poaching"
    detail: "Pelts sell for up to $1,000 on the black market."
    sourceUrl: "https://www.worldwildlife.org/species/amur-leopard"
    sourceName: "World Wildlife Fund"
  - name: "Habitat Loss"
    detail: "Logging and road construction fragment forest into isolated patches."
    sourceUrl: "https://www.iucnredlist.org/species/15957/160695029"
    sourceName: "IUCN Red List"
  - name: "Inbreeding"
    detail: "Gene pool is dangerously shallow with fewer than 120 individuals."
    sourceUrl: "https://link.springer.com/journal/10592"
    sourceName: "Conservation Genetics"

facts:
  - title: "Ghost of the Forest"
    description: "Strictly nocturnal and fiercely solitary, it patrols territories of up to 120 square miles. Camera traps remain the primary means of study."
    images:
      - "../../assets/images/species/amur-leopard/facts/ghost-of-the-forest.webp"
  - title: "Olympic Athlete"
    description: "Can leap 19 feet horizontally and 10 feet vertically. At full sprint, reaches 37 mph."
    images:
      - "../../assets/images/species/amur-leopard/facts/olympic-athlete.webp"
---

## About

The Amur leopard (*Panthera pardus orientalis*) is the world's rarest big cat...

## Conservation

With fewer than 120 individuals left in the wild...
```

### Dynamic Page Generation

```astro
---
// src/pages/species/[slug].astro
import { getCollection } from 'astro:content';
import SpeciesLayout from '../../layouts/SpeciesLayout.astro';

export async function getStaticPaths() {
  const species = await getCollection('species');
  return species.map(entry => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();
---

<SpeciesLayout species={entry.data}>
  <!-- All species sections render from entry.data -->
</SpeciesLayout>
```

This means: **write one MDX file → get a fully styled, optimized species page automatically.** Adding species #221 takes 5 minutes instead of hours.

---

---

## 5. Image Pipeline

### The Problem (V1)
- 1.5+ GB of unoptimized PNGs
- Single hero image: 42 MB
- No responsive variants
- No WebP/AVIF conversion

### The Solution (V2)

**Astro handles image optimization at build time.** You drop images into `src/assets/` and use `<Image>` or `<Picture>` components. At build, Astro:
1. Converts to WebP (and AVIF if configured)
2. Generates multiple sizes (480, 768, 1200, 1920)
3. Outputs responsive `srcset` attributes
4. Lazy-loads by default

```astro
---
// In any component:
import { Image, Picture } from 'astro:assets';
import heroImg from '../../assets/images/species/amur-leopard/hero.webp';
---

<!-- Automatic optimization -->
<Picture
  src={heroImg}
  widths={[480, 768, 1200, 1920]}
  formats={['avif', 'webp']}
  alt="Amur leopard in snowy Siberian forest"
  class="hero__image"
  loading="eager"
/>
```

### Pre-Build Image Prep (One-Time)

Before V2 dev starts, run a batch script to prepare V1 source images:

```
Original PNGs (2-150 MB) 
  → Resize to max 2400px wide (preserves print quality)
  → Convert to WebP at quality 85
  → Output to src/assets/images/
  
Astro build then further optimizes these into final sizes.
```

**Expected results:**
| Image Type | V1 Size | V2 Size | Reduction |
|-----------|---------|---------|-----------|
| Hero image | 42 MB | ~150 KB | 99.6% |
| Gallery slide | 5 MB | ~80 KB | 98.4% |
| Species thumbnail | 3 MB | ~40 KB | 98.7% |
| Fact card image | 4 MB | ~60 KB | 98.5% |

### Source Art Separation

Non-web assets live OUTSIDE the V2 project:
```
beastique-source-art/          ← Separate repo or cloud storage
├── inkscape-originals/        ← SVG design files
├── full-resolution-renders/   ← Print-quality PNGs
├── holding-area/              ← Experimental work
├── mini-series/               ← Editorial content
└── prompts/                   ← AI generation reference
```

Only web-ready, pre-sized images go into `beastique-v2/src/assets/`.

---

## 6. Design System

### CSS Architecture

```css
/* src/styles/layers.css — Cascade control */
@layer reset, tokens, base, layout, components, utilities, overrides;
```

```css
/* src/styles/global.css */
@import 'layers.css';

@layer tokens {
  :root {
    /* ── Spacing ── */
    --space-2xs: clamp(0.25rem, 0.5vw, 0.375rem);
    --space-xs:  clamp(0.5rem, 1vw, 0.75rem);
    --space-sm:  clamp(0.75rem, 1.5vw, 1.125rem);
    --space-md:  clamp(1.25rem, 2.5vw, 2rem);
    --space-lg:  clamp(2rem, 4vw, 3.5rem);
    --space-xl:  clamp(3rem, 6vw, 5rem);
    --space-2xl: clamp(5rem, 10vw, 8rem);

    /* ── Typography ── */
    --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
    --font-body:    'Raleway', 'Segoe UI', system-ui, sans-serif;
    --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

    --text-xs:   clamp(0.7rem, 0.8vw, 0.8rem);
    --text-sm:   clamp(0.85rem, 1vw, 0.95rem);
    --text-base: clamp(1rem, 1.2vw, 1.15rem);
    --text-lg:   clamp(1.15rem, 1.5vw, 1.35rem);
    --text-xl:   clamp(1.4rem, 2.5vw, 2rem);
    --text-2xl:  clamp(2rem, 4vw, 3.25rem);
    --text-3xl:  clamp(2.5rem, 6vw, 5rem);
    --text-hero: clamp(3.5rem, 10vw, 9rem);

    /* ── Motion ── */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring:   cubic-bezier(0.5, 1.25, 0.75, 1.25);
    --dur-fast:   150ms;
    --dur-normal: 350ms;
    --dur-slow:   700ms;
    --dur-reveal: 1000ms;

    /* ── Layout ── */
    --max-width: 1440px;
    --nav-height: 64px;
    --gutter: clamp(1rem, 3vw, 2rem);

    /* ── Global Colors (dark base) ── */
    --color-void:     #050505;
    --color-deep:     #0a0a0b;
    --color-surface:  #111113;
    --color-elevated: #1a1a1e;
    --color-border:   rgba(255, 255, 255, 0.06);
    --color-text:     #e8e4de;
    --color-text-dim: #8a857e;
    --color-signal:   #f2bc00;  /* SOS gold — universal accent */

    /* ── Radius ── */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-pill: 9999px;
  }

  /* ── Species Theme Override Pattern ── */
  /* Each species page sets these via inline style on <body> */
  [data-species-theme] {
    --color-shadow:      var(--species-shadow, var(--color-void));
    --color-accent:      var(--species-accent, var(--color-signal));
    --color-accent-soft: var(--species-accent-soft, var(--color-signal));
  }
}

@layer reset {
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
  body { font-family: var(--font-body); color: var(--color-text); background: var(--color-void); line-height: 1.6; }
  img { max-width: 100%; height: auto; display: block; }
  a { color: inherit; text-decoration: none; }
  ul, ol { list-style: none; }
  button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
}

@layer base {
  h1, h2, h3, h4 { font-family: var(--font-display); line-height: 1.1; }
  h1 { font-size: var(--text-hero); font-weight: 300; letter-spacing: -0.03em; }
  h2 { font-size: var(--text-2xl); font-weight: 400; }
  h3 { font-size: var(--text-xl); font-weight: 600; }
  p  { font-size: var(--text-base); max-width: 68ch; }
}
```

### Species Theming

Species don't need separate CSS files. The palette from frontmatter is injected as CSS custom properties on `<body>`:

```astro
<!-- SpeciesLayout.astro -->
<body
  data-species-theme
  style={`
    --species-shadow: ${species.palette.shadow};
    --species-accent: ${species.palette.accent};
    --species-accent-soft: ${species.palette.accentSoft};
    --species-text: ${species.palette.text};
    --species-text-muted: ${species.palette.textMuted};
  `}
>
```

Every component reads `var(--color-accent)` — no per-species CSS files needed.

---

## 7. UX & Visual Direction

### Forget V1's Layout — Start From Impact

V1 is a standard scroll-down website. V2 should feel like opening a case file, entering an exhibit, confronting evidence. Here are bold directions that a solo developer can execute:

### Landing Page: "The Vault"

**Concept:** The homepage isn't a friendly welcome. It's a controlled entry — like a bank vault door slowly opening onto a gallery of the world's most valuable creatures.

- **Opening state:** Near-black screen. A single line of gold text fades in: *"What We Destroy to Extract."* The BQ logo materializes. Particle system active — metallic gold dust.
- **Scroll trigger #1:** The gallery reveals itself — not as a carousel, but as a **masonry grid** that assembles itself (staggered fade-up). Each image has a subtle gold frame. Hover reveals species name, status badge, and a "View" prompt.
- **Scroll trigger #2:** The five category portals — large, full-bleed cards that react to mouse position (parallax tilt). Each has a distinct color cast.
- **Scroll trigger #3:** The mission statement — split screen. Left: scrolling text. Right: slowly cross-fading species portraits. The data sources (IUCN, WWF, etc.) render as a subtle grid of logos.
- **Closing:** A full-viewport image. One line: *"The clock does not pause."* Extinction counter ticking in real time.

### Category Pages: "The Archive"

**Concept:** A filterable, sortable gallery — not just a grid of cards. Think museum archive room.

- **Sticky sidebar** (desktop) or **filter bar** (mobile) with conservation status filters
- **Sort options:** Alphabetical, conservation severity, most recent additions
- Species count updates dynamically as filters change
- Cards show thumbnail, name, status badge, and one-line tagline
- Species with complete pages have a distinct visual treatment vs. placeholders

### Species Pages: "The Exhibit"

**Concept:** Each species page is a single-scroll cinematic exhibit. No tabs, no sub-navigation that breaks immersion. The scroll IS the experience.

- **Hero:** Full-viewport. Species image fills the frame. Name overlaid in massive display type. Scientific name underneath. A subtle ambient effect (snow, fireflies, bubbles) runs continuously.
- **Pull quote:** On scroll, a single confrontational line — the "replacement transaction" framing
- **Stats bar:** Four numbers, animated on scroll, horizontally laid out
- **About section:** Two-column. Left: narrative text. Right: taxonomy card with the classification tree
- **Facts section:** Alternating layout — image left/text right, then image right/text left. Each fact card has a circular image frame. Multiple images per fact rotate on a timer.
- **Conservation section:** Dark background shift. Warning badge. Threat tags link to external sources. This section should feel different — more urgent, more clinical.
- **Closing:** Full-width image. Poetic quote. The SOS frame wraps the species image, morse code pulsing.
- **Footer:** Minimal. Back to category. Back to home. Copyright.

### Micro-Interactions That Matter

| Interaction | Effect | Difficulty |
|------------|--------|------------|
| Image hover | Subtle scale(1.02) + brightness shift | Easy |
| Card hover | Gold border materializes from corners inward | Medium |
| Nav scroll | Blurs background, gains subtle dark wash | Easy |
| Stat counter | Numbers count up when scrolled into view | Already built |
| Category card | 3D tilt on mouse position (CSS `perspective`) | Medium |
| Threat tag hover | Expands to show detail + source | Easy |
| Page transition | Cross-fade between pages (View Transitions API) | Medium |
| Scroll reveal | Elements fade up with stagger delay | Already built |

### Typography Hierarchy

| Element | Font | Weight | Size Token | Tracking |
|---------|------|--------|-----------|----------|
| Page title (H1) | Playfair Display | 300 | `--text-hero` | -0.03em |
| Section heading (H2) | Playfair Display | 400 | `--text-2xl` | -0.01em |
| Card title (H3) | Playfair Display | 600 | `--text-xl` | normal |
| Body text | Raleway | 400 | `--text-base` | 0.01em |
| Labels/badges | Raleway | 600 | `--text-xs` | 0.15em |
| Scientific names | Raleway Italic | 400 | `--text-sm` | 0.02em |

### Color Philosophy

The site lives in darkness. Color is rare, intentional, and species-specific:

- **Base:** Near-black (`#050505` to `#111113`) — always
- **Text:** Warm ivory/bone (`#e8e4de`) — never pure white
- **Accent:** Species-defined — warm golds, deep teals, mossy greens, rust oranges
- **Signal:** SOS gold (`#f2bc00`) — universal across all species for morse elements
- **Conservation badges:** Status-coded colors (red for CR, orange for EN, yellow for VU, etc.)

---

## 8. Component Library

### Global Components

**`Nav.astro`** — Unified across all pages
- Fixed position, glass-morphism background on scroll
- Logo (SVG, not PNG) + "BEASTIQUE" wordmark
- Breadcrumb trail: Home / Category / Species
- Desktop: horizontal links. Mobile: hamburger → full-screen overlay
- Scroll progress bar (landing page only)

**`Footer.astro`** — Consistent, minimal
- Logo + tagline
- Navigation links
- Contact/GitHub links
- Copyright
- Signature line

**`SEO.astro`** — Automatic meta tags
- Title, description, og:image, twitter:card
- JSON-LD structured data for species pages
- Canonical URLs

**`Breadcrumb.astro`** — Schema.org compliant
- Renders from page context automatically

### Card Components

**`SpeciesCard.astro`** — Used on category pages and landing gallery
```
Props: name, scientificName, status, tagline, thumbnail, slug, hasPage
```
- Responsive image via `<Image>`
- Status badge with conservation-coded color
- Hover: gold border animation, slight lift
- If `hasPage === false`: "Coming Soon" overlay, no link

**`BeastCard.astro`** — Category portal cards on landing page
```
Props: name, tagline, accentColor, heroImage, speciesCount, slug
```
- Full-bleed image with gradient overlay
- Species count badge
- CSS `perspective` tilt on mousemove (JS island)

### Species Page Components

**`SpeciesHero.astro`**
- Full-viewport, species image fills frame
- Title + scientific name overlaid
- Ambient effect container (hydrated island)
- Wave divider at bottom

**`Stats.astro`**
- 4-stat horizontal bar
- Counter animation on scroll (hydrated island)
- Custom SVG icons per stat

**`Facts.astro`**
- Alternating left/right layout
- Circular image frames with auto-rotating gallery
- Numbered fact titles
- Scroll-triggered reveal

**`Conservation.astro`**
- Status badge (animated pulse)
- Threat tags grid — each links to external source
- Dark background shift to create section break

### Interactive Islands

These components hydrate client-side JS only when visible:

```astro
<!-- ParticleCanvas.astro -->
<canvas id="particles" class="particles" data-count="70"></canvas>

<script>
  // This JS only loads when the component is on screen
  import { init } from '../scripts/particles';
  const canvas = document.getElementById('particles');
  init(canvas, { count: parseInt(canvas.dataset.count) });
</script>
```

Astro's `client:visible` directive means the JS loads **only when the user scrolls to it**:

```astro
<ParticleCanvas client:visible count={70} />
```

---

## 9. Page Architecture

### Routing (File-Based)

```
src/pages/
├── index.astro                  →  /                    (Landing)
├── categories/
│   └── [slug].astro             →  /categories/aquatic   (× 5)
└── species/
    └── [slug].astro             →  /species/amur-leopard  (× 220+)
```

**Total pages generated at build:** ~230 static HTML files from 3 page templates + content data.

### Layout Inheritance

```
BaseLayout.astro          ← <html>, <head>, fonts, global CSS, SEO, skip link
  ├── LandingLayout.astro ← Landing-specific: particle canvas, progress bar
  ├── CategoryLayout.astro← Category nav, filter sidebar, breadcrumb
  └── SpeciesLayout.astro ← Species theming injection, ambient effect, SOS frame
```

### View Transitions (Page-to-Page)

Astro supports the native View Transitions API. This gives cross-fade/morph animations between pages — no SPA framework required:

```astro
<!-- BaseLayout.astro -->
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions />
</head>
```

Species thumbnail on a category page morphs into the full hero image on the species page. Zero JavaScript. Native browser API.

---

## 10. Interactive Features (JS Islands)

### What Ships Zero JS
- All static text, images, layouts, cards, grids, footers, navs
- CSS-only hover effects, transitions, scroll-driven animations
- Conservation badges, taxonomy cards, breadcrumbs

### What Hydrates JS (Islands)

| Island | Trigger | Size (est.) | Hydration |
|--------|---------|-------------|-----------|
| Canvas Particles | Landing hero | ~5 KB | `client:load` |
| Typewriter | Landing hero | ~2 KB | `client:load` |
| Image Gallery | Landing gallery section | ~4 KB | `client:visible` |
| Stat Counter | Stats section (all pages) | ~2 KB | `client:visible` |
| SOS Frame | Species closing section | ~15 KB | `client:visible` |
| Ambient Effects | Species hero | ~3 KB | `client:load` |
| Category Filter | Category sidebar | ~3 KB | `client:load` |
| Card Tilt | Landing category cards | ~1 KB | `client:visible` |

**Total maximum JS per page:** ~25 KB (species page with all islands). Compare to V1 which loaded all JS on every page regardless.

### Ambient Effect System

A unified interface for all species-specific particle effects:

```typescript
// src/scripts/ambient/base.ts
export interface AmbientConfig {
  container: HTMLElement;
  count: number;
  sizeRange: [number, number];
  speedRange: [number, number];
  opacityRange: [number, number];
  colors: string[];
}

export abstract class AmbientEffect {
  protected canvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;
  protected particles: Particle[];
  protected animId: number;

  abstract createParticle(): Particle;
  abstract updateParticle(p: Particle, dt: number): void;

  start(): void { /* RAF loop */ }
  stop(): void { cancelAnimationFrame(this.animId); }
  resize(): void { /* Handle viewport changes */ }
}
```

Each species effect (snowflakes, fireflies, bubbles, dust, embers, spores) extends this base class. The `ambientEffect` field in frontmatter determines which one loads:

```astro
<!-- AmbientEffect.astro -->
---
const { effect } = Astro.props;
---
<canvas class="ambient-canvas" data-effect={effect}></canvas>

<script>
  const canvas = document.querySelector('.ambient-canvas');
  const effect = canvas.dataset.effect;
  const mod = await import(`../scripts/ambient/${effect}.ts`);
  mod.init(canvas);
</script>
```

---

## 11. Performance Budget

### Per-Page Targets

| Metric | Target | V1 Actual |
|--------|--------|-----------|
| Total page weight | < 2.5 MB | 80-120 MB |
| Largest Contentful Paint | < 2.5s | Untestable |
| First Contentful Paint | < 1.2s | Untestable |
| Cumulative Layout Shift | < 0.05 | Unknown |
| Total JS shipped | < 30 KB | ~120 KB |
| Total CSS shipped | < 50 KB | 50-80 KB |
| Image count above fold | ≤ 3 | 1-5 |
| HTTP requests (initial) | < 15 | 25+ (CSS @imports) |

### How We Hit These Numbers

1. **Astro's zero-JS default** — static HTML, no framework runtime
2. **Built-in image optimization** — WebP/AVIF at correct sizes
3. **CSS bundling** — Astro concatenates all component CSS into one file
4. **Island hydration** — JS only loads for interactive components, only when visible
5. **Font optimization** — Self-host WOFF2, `font-display: swap`, preload critical weights
6. **Preloading** — Hero image uses `loading="eager"` + `<link rel="preload">`

---

## 12. Build, Deploy & Hosting

### Local Development

```bash
npm create astro@latest beastique-v2  -- --template minimal
cd beastique-v2
npm run dev     # → localhost:4321 with hot reload
```

### Build

```bash
npm run build   # Generates static site in dist/
npm run preview # Preview production build locally
```

### Hosting Recommendation: **Netlify** (Free Tier)

| Feature | Detail |
|---------|--------|
| Deploy trigger | Git push to `main` branch |
| Build command | `npm run build` |
| Publish directory | `dist/` |
| CDN | Global edge network (automatic) |
| HTTPS | Automatic via Let's Encrypt |
| Custom domain | Supported (free) |
| Build minutes | 300/month (free tier — more than enough) |
| Bandwidth | 100 GB/month (free tier) |

### `.gitignore`

```
node_modules/
dist/
.astro/

# Source art (NOT web assets)
*.psd
*.ai
*.indd

# OS files
.DS_Store
Thumbs.db
desktop.ini
```

### Environment

```
Node.js 18+ (LTS)
npm 9+
```

---

## 13. Migration Strategy

### What Migrates From V1

| V1 Asset | V2 Destination | Action |
|----------|---------------|--------|
| `data/species.json` (220 entries) | `src/content/species/*.mdx` | Script converts JSON → 220 MDX frontmatter files |
| `data/categories.json` | `src/content/categories/*.mdx` | Manual — only 5 files |
| Species page HTML content | MDX body text | Manual extraction for 3 complete species |
| Species CSS palettes | MDX frontmatter `palette:` field | Manual — 3 species |
| Shared JS modules | `src/scripts/` | Refactor to TypeScript, keep logic |
| SOS Frame system | `src/scripts/sos-frame.ts` | Port directly — logic is solid |
| SOS Frame SVGs | `public/svg/sos-frames/` | Copy directly — already optimized |
| Species images (optimized) | `src/assets/images/species/` | Batch resize + WebP convert |
| Featured images (optimized) | `src/assets/images/featured/` | Batch resize + WebP convert |
| Logo SVG | `src/assets/logos/` | Recreate as clean SVG |
| Design source files | `beastique-source-art/` repo | Move OUT of web project |
| Mini-series | Separate project or subdomain | Move OUT of web project |

### Migration Script (One-Time)

```javascript
// scripts/migrate-v1-data.mjs
// Reads V1 species.json → generates 220+ skeleton .mdx files
// Each file has correct frontmatter from JSON data
// Body text is placeholder "## About\n\nContent coming soon."
// Complete species (amur-leopard, beluga-sturgeon, kākāpō) get
// their full body text manually ported afterward
```

### Image Batch Script

```bash
# Using sharp-cli or imagemagick
# For each image in V1:
#   1. Resize to max 2400px wide
#   2. Convert to WebP quality 85
#   3. Output to src/assets/images/{category}/{species-slug}/

# Thumbnails: resize to 800px wide
# Heroes: resize to 2400px wide
# Facts: resize to 1200px wide
```

---

## 14. Phase Plan

### Phase 0: Foundation (Days 1-3)
- [ ] Initialize Astro project
- [ ] Set up Git + GitHub repo
- [ ] Configure `astro.config.mjs` (image optimization, MDX, View Transitions)
- [ ] Create `global.css` with full design token system
- [ ] Self-host fonts (Playfair Display + Raleway WOFF2)
- [ ] Create `BaseLayout.astro` with SEO, fonts, skip link
- [ ] Deploy empty shell to Netlify (verify pipeline)

### Phase 1: Content System (Days 4-7)
- [ ] Define Content Collection schemas (`config.ts`)
- [ ] Run migration script: `species.json` → 220+ skeleton `.mdx` files
- [ ] Create 5 category `.mdx` files manually
- [ ] Create `[slug].astro` dynamic route for species
- [ ] Create `[slug].astro` dynamic route for categories
- [ ] Verify all 230+ pages generate at build time

### Phase 2: Landing Page (Days 8-14)
- [ ] Batch optimize V1 landing/featured images → WebP
- [ ] Build `Nav.astro` (global)
- [ ] Build `Footer.astro` (global)
- [ ] Build `Hero.astro` with particle canvas island
- [ ] Build `Gallery.astro` with masonry grid
- [ ] Build `BeastCards.astro` with category portals
- [ ] Build `Mission.astro` section
- [ ] Build `Numbers.astro` with counter island
- [ ] Build `ClosingBanner.astro`
- [ ] Polish landing page animations and scroll reveals
- [ ] Mobile responsive pass

### Phase 3: Category Pages (Days 15-19)
- [ ] Batch optimize category thumbnail images → WebP
- [ ] Build `CategoryHero.astro`
- [ ] Build `SpeciesGrid.astro` (dynamic from Content Collections)
- [ ] Build `SpeciesCard.astro` with status badges
- [ ] Add filter/sort island (conservation status, alphabetical)
- [ ] "Coming Soon" treatment for placeholder species
- [ ] Mobile responsive pass

### Phase 4: Species Pages — The Grand Openers (Days 20-32)

The **15 flagship species** from the Resonant Red List Atlas are the launch content.
Each gets a full dossier: 12 facts, material-fusion images, complete narrative.

**4a: Build the species page system (Days 20-24)**
- [ ] Build `SpeciesHero.astro` with ambient effect island
- [ ] Build `Stats.astro` with counter island
- [ ] Build `About.astro` with taxonomy card
- [ ] Build `Facts.astro` with 12-fact layout and image rotation
- [ ] Build `Conservation.astro` with threat tags
- [ ] Build `Closing.astro` with SOS frame island
- [ ] Port SOS Frame JS → TypeScript
- [ ] Port ambient effects (snowflakes, fireflies, bubbles) → TypeScript
- [ ] Species palette theming system (CSS custom properties from frontmatter)
- [ ] Material pairing visual integration (texture overlays, accent treatments)
- [ ] View Transitions: card thumbnail → hero morph
- [ ] Mobile responsive pass

**4b: Populate the Top 15 (Days 25-32)**
- [ ] Generate fact images using Atlas prompts (batch AI pipeline — 180 images)
- [ ] Optimize all generated images → WebP pipeline
- [ ] Port V1 species (Amur Leopard, Kākāpō) — merge with Atlas data
- [ ] Write full MDX dossiers for all 15 flagship species:
  - [ ] 01 Vaquita
  - [ ] 02 Javan Rhinoceros
  - [ ] 03 Sumatran Rhinoceros
  - [ ] 04 Tapanuli Orangutan
  - [ ] 05 Cross River Gorilla
  - [ ] 06 African Forest Elephant
  - [ ] 07 Amur Leopard *(port from V1 + Atlas enrichment)*
  - [ ] 08 Sumatran Tiger
  - [ ] 09 Saola
  - [ ] 10 Sunda Pangolin
  - [ ] 11 North Atlantic Right Whale
  - [ ] 12 Hawksbill Sea Turtle
  - [ ] 13 Kākāpō *(port from V1 + Atlas enrichment)*
  - [ ] 14 Philippine Eagle
  - [ ] 15 Red Wolf
- [ ] Assign ambient effects to each flagship (snowflakes, fireflies, bubbles, dust, embers, spores)
- [ ] QA: verify all 15 species pages render correctly with full content

### Phase 5: Polish & Launch (Days 29-35)
- [ ] Full accessibility audit (keyboard nav, screen reader, contrast)
- [ ] Lighthouse performance audit — hit all green scores
- [ ] Open Graph / Twitter Card meta for all page types
- [ ] JSON-LD structured data for species pages
- [ ] Proper `favicon.svg` + `apple-touch-icon`
- [ ] `robots.txt` + `sitemap.xml` (Astro plugin)
- [ ] 404 page
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Final deploy to production
- [ ] Custom domain setup (if applicable)

### Phase 6: Scale (Ongoing)
- [ ] Upgrade placeholder species to full dossiers as research completes (~5 min per species for data entry)
- [ ] Generate fact images for new species using the Atlas prompt pattern
- [ ] New ambient effects as needed (extend base class)
- [ ] Blog/mini-series integration (if desired — Astro Content Collections handle this natively)
- [ ] Dark/light mode toggle (if desired — design tokens make this trivial)
- [ ] Explore alternate material pairings from the Atlas bench list (Māui dolphin, Iberian lynx, California condor, etc.)

---

## 15. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Image optimization takes longer than expected | Medium | Medium | Start with 20 priority images for landing + 3 species. Batch the rest. |
| 220+ MDX files slow down Astro build | Low | Medium | Astro handles thousands of pages. Can enable parallel builds if needed. |
| SOS Frame port to TypeScript introduces bugs | Medium | Low | Port logic 1:1 first, refactor later. Keep V1 as reference. |
| Scope creep from design ambition | High | High | Phase plan is strict. Ship Phase 5 first, polish in Phase 6. |
| Solo developer burnout | Medium | Critical | Phases are scoped to ~1 week each. Take breaks between phases. |
| Browser compat for View Transitions | Low | Low | Progressive enhancement — falls back to instant navigation. |
| Content Collections schema changes mid-build | Medium | Medium | Lock schema in Phase 1. All later changes are additive only. |

---

## Final Note

This blueprint is designed for one person to execute in 6-8 weeks of focused work. Every decision optimizes for:
1. **Your time** — Content Collections eliminate repetitive HTML
2. **Your strengths** — Vanilla CSS + JS, not framework churn
3. **Your users** — Sub-3-second loads instead of 100+ MB pages
4. **Your content** — 15 flagship species launch-ready, 205+ species queued as research completes
5. **Your vision** — "Beauty as the argument" with the technical backbone to deliver it
6. **Your atlas** — 180 facts, 180 image prompts, 15 material pairings — all pre-researched and pipeline-ready

The current V1 codebase is not wasted — the research, content, CSS discipline, and JS modules all carry forward. V2 is the engine that makes it scalable.

---

*End of blueprint. Ready for your review, partner.*

