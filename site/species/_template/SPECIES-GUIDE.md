# BEASTIQUE Species Page Guide

## How to Create a New Species Page

1. Copy this entire `_template/` directory to `species/{species-slug}/`
2. Rename and customize the files below
3. Add the species to `data/species.json` with `hasPage: true`
4. Add a species card link in the appropriate category page

## Required Files

```
species/{species-slug}/
├── index.html          # Page content (customize all sections)
├── css/
│   ├── main.css        # Entry point (usually no changes needed)
│   ├── theme.css       # CUSTOMIZE: colors, fonts, species personality
│   ├── base.css        # CUSTOMIZE: body colors reference theme vars
│   ├── animations.css  # CUSTOMIZE: species-specific keyframes
│   └── components/     # CUSTOMIZE: section-specific styles
│       ├── nav.css
│       ├── hero.css
│       ├── stats.css
│       ├── about.css
│       ├── facts.css
│       ├── conservation.css
│       ├── closing.css
│       └── footer.css
├── js/
│   ├── main.js         # Entry point (add species-specific modules)
│   └── modules/        # Species-specific JS effects only
│       └── (e.g., particles.js, snowflakes.js)
└── assets/
    ├── hero.png (or .webp)     # Hero section image
    ├── closing.png              # Closing section image
    └── images/facts/            # 6 fact card images
        ├── fact-01-{name}.png
        ├── fact-02-{name}.png
        ├── fact-03-{name}.png
        ├── fact-04-{name}.png
        ├── fact-05-{name}.png
        └── fact-06-{name}.png
```

## Data Contract

Each species page needs these content elements:

### Hero Section

- Common name (e.g., "Amur Leopard")
- Scientific name (e.g., "Panthera pardus orientalis")
- Tagline / subtitle (e.g., "Ghost of the Siberian Forest")
- Hero description paragraph (2-3 sentences)
- Hero image (full-bleed, atmospheric)

### Stats (4 key numbers)

- Pick 4 compelling stats about the species
- Format: number + label (e.g., "~120" / "Wild Population")
- The counter module animates these on scroll

### About Section

- 3 paragraphs of species profile text
- Full scientific taxonomy (Kingdom through Species/Subspecies)

### Facts (6 illustrated facts)

- Each fact needs: number, title, description paragraph, image
- Images should be circular crop format, 440x440px recommended
- Optional: alternate images for gallery rotation

### Conservation Section

- Conservation status badge (e.g., "Critically Endangered")
- Section title (e.g., "On the Edge of Forever")
- 2 paragraphs on conservation situation
- 3-5 threat tags, each with:
  - Label (e.g., "Poaching")
  - Detail text (1-2 sentences)
  - Source URL (IUCN, WWF, etc.)
  - Source name

### Closing

- Atmospheric image
- Poetic blockquote (2-3 lines)
- Citation (e.g., "In reverence of Panthera pardus orientalis")

## Theme Customization (theme.css)

Every species gets its own color palette and font pair:

```css
:root {
  /* Color Palette — Name your theme (e.g., "Siberian Twilight") */
  --color-shadow:       #0a0806;   /* Deepest background */
  --color-dusk:         #161210;   /* Dark surface */
  --color-umber:        #2d2319;   /* Medium dark */
  --color-bark:         #453526;   /* Border/muted */
  --color-amber:        #d4944a;   /* Primary accent */
  --color-amber-soft:   #e0a85e;   /* Soft accent */
  --color-amber-bright: #f0b860;   /* Bright accent */
  --color-ivory:        #f0e6d6;   /* Primary text */
  --color-frost:        #c4b8a8;   /* Secondary text */
  --color-mist:         rgba(255, 255, 255, 0.07);  /* Subtle overlay */

  /* Typography — Pick a serif display + sans-serif body */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Raleway', 'Segoe UI', sans-serif;
}
```

## JS Conventions

### Entry function

Every `main.js` must use `bootstrap()` as the entry function name:

```js
function bootstrap() { ... }
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
```

### Module exports

All modules (shared and species-specific) export a single `init` function:

```js
// In your module file:
export function init(config = {}) { ... }

// In main.js — alias to a descriptive name:
import { init as initSnowflakes } from './modules/snowflakes.js';
```

### Shared modules

Imported from `../../../js/modules/`:

- `scroll-animations.js` — Intersection Observer reveals
- `counter.js` — Animated stat counters
- `nav-scroll.js` — Nav background darkens on scroll
- `smooth-scroll.js` — Anchor link smooth scrolling
- `parallax.js` — Hero parallax effect
- `sos-frame.js` — SOS morse code frame animations

Species-specific JS goes in local `js/modules/` (e.g., particles, snowflakes, galleries).

## Image Specifications

| Image | Dimensions | Format | Notes |
|-------|-----------|--------|-------|
| Hero | 1920x1080+ | PNG/WebP | Full-bleed, atmospheric |
| Fact cards | 440x440 | PNG | Circular crop in CSS |
| Closing | 1024x1024 | PNG | Framed presentation |
| Alt images | 440x440 | PNG | Optional gallery variants |
