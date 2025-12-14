<!--
✒ Metadata
    - Title: BEASTIQUE Master Blueprint (BEASTIQUE Edition - v1.0)
    - File Name: BEASTIQUE_BLUEPRINT.md
    - Relative Path: docs/BEASTIQUE_BLUEPRINT.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2025-12-12
    - Update: Friday, December 12, 2025
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.5
    - Signature:  ︻デ═—··· 🎯 = Aim Twice, Shoot Once!

✒ Description:
    The definitive master blueprint for the BEASTIQUE project. Documents the complete
    vision, thesis, technical pipeline, data architecture, narrative framework, and
    implementation roadmap. This is the single source of truth for the entire project
    after two years of asset development.

✒ Key Features:
    - Feature 1: Complete project thesis and philosophical foundation
    - Feature 2: Art production pipeline documentation (Dall-E → Inkscape → Export)
    - Feature 3: Data architecture and JSON schema specifications
    - Feature 4: Conservation data sourcing requirements and standards
    - Feature 5: Narrative writing guidelines and emotional framework
    - Feature 6: Asset inventory and organizational structure (two-tier system)
    - Feature 7: Category taxonomy and species selection criteria
    - Feature 8: Front end architecture and web/gallery implementation
    - Feature 9: Visual style guide with hard rules (no emoji, SVG-only, etc.)
    - Feature 10: Dynamic frame system (lightweight SVG overlays, CSS/JS animation)
    - Feature 11: Quality control standards and review processes
    - Feature 12: Technical specifications and deployment strategy

✒ Usage Instructions:
    This document serves as the authoritative reference for all BEASTIQUE development.
    
    How to use:
        1. Read Section 1 (Thesis) before any work begins
        2. Reference Section 3 (Data Standards) for all conservation data
        3. Follow Section 4 (Narrative Framework) for all written content
        4. Use Section 6 (JSON Schema) as template for all species entries
        5. Track progress against Section 8 (Implementation Roadmap)

✒ Other Important Information:
    - Dependencies: Inkscape 1.3+, GIMP 2.10+, Python 3.11+, Dall-E 3/4
    - Compatible platforms: Cross-platform (primary development on Windows)
    - Project duration: 2+ years of asset development
    - Current asset count: ~40 custom finished pieces
    - Target scope: Scalable gallery with ongoing additions
---------
-->

# 🦁 BEASTIQUE: Master Blueprint

> *"BEASTIQUE transforms the overwhelming narrative of species loss into something
> immediate, beautiful, and unforgettable. We render endangered creatures in the
> precious materials, industrial metals, and rare substances we destroy their habitats
> to extract—revealing the brutal economic replacement transaction at the heart of
> extinction."*

---

## Table of Contents

1. [The Thesis](#1-the-thesis)
2. [Project Architecture](#2-project-architecture)
3. [Conservation Data Standards](#3-conservation-data-standards)
4. [Narrative Framework](#4-narrative-framework)
5. [Art Production Pipeline](#5-art-production-pipeline)
6. [Data Schema & Structure](#6-data-schema--structure)
7. [Category Taxonomy](#7-category-taxonomy)
8. [Front End Architecture](#8-front-end-architecture)
9. [Visual Style Guide](#9-visual-style-guide)
10. [Dynamic Frame System](#10-dynamic-frame-system)
11. [Implementation Roadmap](#11-implementation-roadmap)
12. [Asset Inventory](#12-asset-inventory)
13. [Quality Standards](#13-quality-standards)
14. [Technical Specifications](#14-technical-specifications)
15. [Distribution Strategy](#15-distribution-strategy)

---

## 1. The Thesis

### 1.1 Core Message

BEASTIQUE is not an art project. It is a **visual indictment of extraction economics**.

Every piece answers one question: *What did we trade this creature for?*

When we render a pangolin in hammered copper, we are saying: *This is the transaction.
You cleared forests for ore deposits. You chose copper wiring over scaled mammals.
Here is your receipt.*

The elegance of execution makes it impossible to look away.
The material choice makes it impossible to misunderstand.
The data makes it impossible to dismiss.

### 1.2 The Extraction Equation

```
HABITAT DESTRUCTION → RESOURCE EXTRACTION → MATERIAL PRODUCTS
         ↓                                           ↓
   SPECIES LOSS    ←←←←←← BEASTIQUE ←←←←←←    ARTISTIC MEDIUM
```

Every BEASTIQUE piece completes this circuit. The creature is rendered in the very
substance that justified its annihilation.

### 1.3 What BEASTIQUE Is NOT

| ❌ NOT This | ✅ THIS Instead |
|-------------|-----------------|
| Pretty animal art | Economic critique made visible |
| AI-generated novelty | Digitally-assisted artisan craft |
| Generic conservation messaging | Specific, data-driven storytelling |
| Depressing doom content | Beautiful, unforgettable memorials |
| Activist propaganda | Factual, emotionally resonant documentation |

### 1.4 Emotional Architecture

Each piece operates on three levels:

1. **Aesthetic Hook** — The image is beautiful enough to stop scrolling
2. **Cognitive Dissonance** — The material choice creates unease
3. **Data Anchor** — The conservation facts make it real and undeniable

---

## 2. Project Architecture

### 2.1 Component Overview

```
BEASTIQUE/
├── 🎨 ASSETS/
│   ├── images/
│   │   ├── source/          # Original Dall-E outputs (webp)
│   │   ├── processed/       # Enhanced PNGs (alpha, DPI bumped)
│   │   ├── finished/        # Inkscape-treated final pieces
│   │   │   ├── web/         # 97 DPI exports
│   │   │   └── print/       # 300 DPI exports
│   │   └── thumbnails/      # Gallery thumbnails
│   ├── frames/              # Inkscape frame templates (.svg)
│   ├── textures/            # Custom texture overlays
│   └── prompts/             # Randomized prompt outputs
│
├── 📊 DATA/
│   ├── species/             # Individual species JSON files
│   ├── categories/          # Category metadata
│   ├── sources/             # Conservation data citations
│   └── narratives/          # Long-form narrative content
│
├── 🔧 TOOLS/
│   ├── prompt_randomizer.py # Material/animal pairing script
│   ├── image_processor.py   # Batch preprocessing
│   ├── schema_validator.py  # JSON validation
│   └── data_updater.py      # Conservation data refresh
│
├── 🌐 WEB/
│   ├── gallery/             # Web gallery implementation
│   ├── api/                 # Data API endpoints
│   └── cms/                 # Content management
│
└── 📚 DOCS/
    ├── BEASTIQUE_BLUEPRINT.md  # This document
    ├── STYLE_GUIDE.md          # Visual consistency standards
    ├── DATA_SOURCES.md         # Citation and sourcing guide
    └── NARRATIVE_TEMPLATES.md  # Writing frameworks
```

### 2.2 Relationship Between Projects

```
┌─────────────────────────────────────────────────────────────┐
│                    SME PROJECT (Research)                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  major_minor_animal_groups.md                        │    │
│  │  major_minor_biomes.md                               │    │
│  │  major_minor_plant_groups.md                         │    │
│  │  major_minor_extinction_events.md                    │    │
│  └─────────────────────────────────────────────────────┘    │
│                            │                                 │
│                            │ FEEDS DATA TO                   │
│                            ▼                                 │
│  ┌─────────────────────────────────────────────────────┐    │
│  │               BEASTIQUE (Creative Output)            │    │
│  │                                                      │    │
│  │   Art + Narrative + Conservation Data = Impact       │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

The **Sixth Mass Extinction (SME) Project** provides the research backbone.
**BEASTIQUE** transforms that research into emotionally resonant creative output.

---

## 3. Conservation Data Standards

### 3.1 The Data Mandate

> **"Not just a tagline from IUCN and call it good. Fok no!"**

BEASTIQUE demands real-world, accurate, up-to-date, properly sourced conservation data.
Every number must be verifiable. Every claim must have a citation.

### 3.2 Required Data Points Per Species

| Field | Requirement | Example |
|-------|-------------|---------|
| **IUCN Status** | Current Red List category with assessment year | `Endangered (2023)` |
| **Population Estimate** | Most recent survey data with source | `~415,000 (DNA survey, 2024)` |
| **Population Trend** | Direction + magnitude if available | `Decreasing (-68% since 1970)` |
| **Range** | Geographic distribution | `Sub-Saharan Africa, fragmented` |
| **Habitat** | Primary ecosystem types | `Savanna, woodland, forest edge` |
| **Primary Threats** | Top 3-5 threats, ranked | `1. Habitat loss, 2. Poaching, 3. Human-wildlife conflict` |
| **Threat Quantification** | Numbers where available | `~20,000 killed annually for ivory` |
| **Conservation Actions** | Active programs, legislation | `CITES Appendix I, range state action plans` |

### 3.3 Acceptable Data Sources

**Tier 1 (Primary):**

- IUCN Red List (iucnredlist.org)
- CITES Trade Database
- Peer-reviewed journals (Nature, Science, Conservation Biology, etc.)
- Government wildlife agencies (USFWS, DEFRA, etc.)

**Tier 2 (Secondary):**

- WWF Living Planet Reports
- TRAFFIC wildlife trade reports
- BirdLife International assessments
- Regional conservation body reports

**Tier 3 (Supplementary):**

- Reputable news coverage of peer-reviewed studies
- NGO reports with cited methodology
- Expert interviews with credentials

### 3.4 Data Freshness Requirements

| Data Type | Maximum Age | Refresh Trigger |
|-----------|-------------|-----------------|
| IUCN Status | 2 years | New Red List assessment |
| Population Estimates | 3 years | New survey publication |
| Threat Rankings | 2 years | Significant change event |
| Range Maps | 5 years | Major distribution shift |

### 3.5 Citation Format

Every data point in a species entry MUST have a citation in the `sources` array:

```json
"sources": [
  {
    "claim": "Population decreased by 80% in two decades",
    "source": "Thogmartin, W.E. et al. (2017). Monarch butterfly population decline in North America",
    "publication": "Royal Society Open Science",
    "doi": "10.1098/rsos.170760",
    "accessed": "2025-12-01"
  }
]
```

---

## 4. Narrative Framework

### 4.1 The Voice

BEASTIQUE narratives are:

- **Direct** — No hedging, no academic distance
- **Visceral** — Physical, sensory language
- **Specific** — Named places, real numbers, concrete details
- **Accusatory** — The reader is implicated (we, our, us)
- **Beautiful** — Even in horror, the prose has craft

### 4.2 Narrative Structure Template

```
[OPENING HOOK]
A single, arresting image or statement that stops the reader.

[THE TRANSACTION]
Explicit connection between the material and the habitat destruction.
What did we extract? What did we trade away?

[THE BIOLOGY]
One remarkable fact about the creature that makes its loss feel specific.
Not generic "biodiversity" — THIS creature, THIS behavior, THIS miracle.

[THE NUMBERS]
Hard data. Population figures. Decline percentages. Timeline.

[THE INDICTMENT]
The closing that places responsibility. Not guilt-tripping — accounting.
```

### 4.3 Example Narrative (Monarch Butterfly)

> The monarch's wings are like pages torn from Earth's story, each one lost is a
> chapter we can never read again. These living stained-glass windows perform one
> of nature's most extraordinary feats—a multi-generational migration spanning
> thousands of miles. Yet the orange tide of their migration has thinned dramatically.
> Places that once witnessed millions of monarchs now see mere thousands. The delicate
> choreography between butterfly and milkweed, perfected over millennia, unravels as
> we plow, spray, and develop their critical habitats. Their decline isn't just about
> losing a beautiful insect—it's the unraveling of an entire ecological tapestry. As
> monarchs fade, we lose a living connection between North and Central America, a
> reminder that nature transcends our borders and demands our collective protection.

### 4.4 Forbidden Language

| ❌ AVOID | ✅ USE INSTEAD |
|----------|----------------|
| "Sadly..." | [Just state the fact] |
| "Unfortunately..." | [Let the data speak] |
| "We should care because..." | [Show why it matters through specifics] |
| "Biodiversity loss" | [Name the specific creature and behavior lost] |
| "Climate change" (alone) | [Specific mechanism: "warming waters," "shifting seasons"] |
| "Habitat destruction" (alone) | [Specific: "milkweed fields plowed for soy"] |

### 4.5 Material-to-Meaning Connections

The material choice MUST connect to actual extraction impact:

| Material | Connects To | Example Species |
|----------|-------------|-----------------|
| Copper | Mining, deforestation, water pollution | Forest elephants, pangolins |
| Gold | Mercury pollution, river destruction | Amazon river dolphins, freshwater fish |
| Stained Glass | Sand mining, coastal erosion | Sea turtles, coral reef species |
| Titanium | Strip mining, soil destruction | Ground-nesting birds, burrowing mammals |
| Obsidian | Volcanic habitat disturbance | Island endemics |
| Steel/Iron | Ore mining, industrial pollution | Watershed species |
| Crystal/Quartz | Mining operations | Mountain/alpine species |
| Bronze | Copper + tin extraction | Tropical forest species |

---

## 5. Art Production Pipeline

### 5.1 Phase 1: Prompt Generation

**Tool:** `prompt_randomizer.py`

The script randomly pairs animals with materials. This is intentional — we're not
forcing "perfect" matches because AI generation can't reliably execute any specific
vision. We generate combinations, then cherry-pick what works.

```python
# Pseudocode concept
animals = load_animal_list()
materials = load_material_list()
random.shuffle(animals)
random.shuffle(materials)
pairs = list(zip(animals, materials))
write_prompts(pairs, output_file)
```

### 5.2 Phase 2: Image Generation

**Platform:** Dall-E 3/4 (NOT Dall-E 5 for this project)

**Process:**

1. Run prompts through Dall-E
2. Generate multiple variations per prompt
3. Ruthlessly cull — most outputs won't work
4. Select candidates that achieve the aesthetic naturally
5. Download as WebP (Dall-E default)

**Success Criteria:**

- Material integration looks organic, not forced
- Animal anatomy is correct and dignified
- Composition supports the emotional weight
- No grotesque, broken, or damaged appearance

### 5.3 Phase 3: Preprocessing

**Tools:** GIMP, Python scripts

**Steps:**

1. Convert WebP → PNG with alpha channel intact
2. Increase DPI early (96 → working resolution)
3. Apply image enhancement:
   - Subtle sharpening
   - Color correction if needed
   - Noise reduction where appropriate
4. Save as high-quality PNG

```bash
# Example Python preprocessing call
python image_processor.py \
  --input source/elephant_copper.webp \
  --output processed/elephant_copper.png \
  --dpi 300 \
  --sharpen 0.5 \
  --denoise light
```

### 5.4 Phase 4: Inkscape Treatment

**Tool:** Inkscape 1.3+

**The BEASTIQUE Makeover Process:**

1. **Import** processed PNG into Inkscape document
2. **Canvas Setup:**
   - Document size: 1792 × 1024 px
   - Working at 300 DPI equivalent
3. **Frame Application:**
   - Select/create thematic frame template
   - Custom gradients matching image palette
   - Geometric patterns (see Bronze Turkey example: sunburst gear-tooth)
4. **Texture Overlays:**
   - Apply subtle texture layers
   - Blend modes for integration
5. **Filter Effects:**
   - Material-appropriate filters
   - Lighting adjustments
6. **Color Harmony:**
   - Ensure frame colors complement image
   - Custom gradient stops for each piece

**Time Investment:** 2 hours to 2+ days per piece depending on complexity

### 5.5 Phase 5: Export

**Dual Export Required:**

| Version | DPI | Purpose | Format |
|---------|-----|---------|--------|
| Web | 97 | Gallery display, social media | PNG |
| Print | 300 | Physical prints, archival | PNG |

**File Naming Convention:**

```
{category}_{common_name}_{material}_{version}.png

Examples:
aves_wild_turkey_bronze_v1_web.png
aves_wild_turkey_bronze_v1_print.png
insecta_monarch_stained_glass_v2_web.png
```

---

## 6. Data Schema & Structure

### 6.1 Species Entry JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "BEASTIQUE Species Entry",
  "type": "object",
  "required": [
    "animal_id",
    "common_name",
    "scientific_name",
    "scientific_taxonomy",
    "project_category",
    "conservation_status",
    "conservation_trend",
    "primary_threats",
    "narrative",
    "image_paths"
  ],
  "properties": {
    "animal_id": {
      "type": "string",
      "pattern": "^[a-z_]+$",
      "description": "Unique identifier, lowercase with underscores"
    },
    "asset_tier": {
      "type": "string",
      "enum": ["flagship", "standard"],
      "description": "Tier 1 (flagship) = full SVG treatment; Tier 2 (standard) = processed Dall-E"
    },
    "common_name": {
      "type": "string",
      "description": "Standard English common name"
    },
    "display_name": {
      "type": "string",
      "description": "Name as displayed in gallery (may differ from common_name)"
    },
    "scientific_name": {
      "type": "string",
      "description": "Binomial nomenclature, italicized in display"
    },
    "scientific_taxonomy": {
      "type": "object",
      "properties": {
        "kingdom": { "type": "string" },
        "phylum": { "type": "string" },
        "class": { "type": "string" },
        "order": { "type": "string" },
        "family": { "type": "string" },
        "genus": { "type": "string" },
        "species": { "type": "string" }
      },
      "required": ["kingdom", "phylum", "class", "order", "family", "genus", "species"]
    },
    "project_category": {
      "type": "string",
      "enum": [
        "mammalia",
        "aves", 
        "reptilia",
        "amphibia",
        "actinopterygii",
        "chondrichthyes",
        "insecta",
        "arachnida",
        "crustacea",
        "mollusca",
        "cnidaria",
        "other_invertebrates"
      ]
    },
    "conservation_status": {
      "type": "string",
      "enum": [
        "Extinct",
        "Extinct in the Wild",
        "Critically Endangered",
        "Endangered",
        "Vulnerable",
        "Near Threatened",
        "Least Concern",
        "Data Deficient",
        "Not Evaluated"
      ]
    },
    "conservation_trend": {
      "type": "string",
      "enum": ["Increasing", "Stable", "Decreasing", "Unknown"]
    },
    "iucn_assessment_year": {
      "type": "integer",
      "minimum": 2000,
      "maximum": 2030
    },
    "population_remaining": {
      "type": "string",
      "description": "Current population estimate with context"
    },
    "population_detail": {
      "type": "object",
      "properties": {
        "estimate": { "type": ["number", "string"] },
        "estimate_year": { "type": "integer" },
        "trend_percentage": { "type": "string" },
        "trend_timeframe": { "type": "string" },
        "source": { "type": "string" }
      }
    },
    "range": {
      "type": "string",
      "description": "Geographic distribution summary"
    },
    "habitat": {
      "type": "string",
      "description": "Primary habitat types"
    },
    "physical_stats": {
      "type": "object",
      "description": "Relevant physical measurements (species-dependent)",
      "additionalProperties": { "type": "string" }
    },
    "lifespan": {
      "type": "string"
    },
    "primary_threats": {
      "type": "array",
      "items": { "type": "string" },
      "minItems": 1,
      "description": "Ranked list of primary threats"
    },
    "threat_detail": {
      "type": "object",
      "description": "Quantified threat data where available",
      "additionalProperties": { "type": "string" }
    },
    "material_pairing": {
      "type": "object",
      "properties": {
        "material": { "type": "string" },
        "extraction_connection": { "type": "string" },
        "symbolic_meaning": { "type": "string" }
      }
    },
    "narrative": {
      "type": "string",
      "minLength": 200,
      "description": "The BEASTIQUE narrative (see Section 4)"
    },
    "quick_fact": {
      "type": "string",
      "description": "Single remarkable fact for quick display"
    },
    "conservation_urgency": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "description": "Urgency score for display prioritization"
    },
    "image_paths": {
      "type": "object",
      "properties": {
        "featured": { "type": "string", "description": "Primary display image (PNG)" },
        "standard": { "type": "string", "description": "Standard gallery image (PNG)" },
        "thumbnails": {
          "type": "array",
          "items": { "type": "string" }
        },
        "print": { "type": "string", "description": "300 DPI print version (PNG)" },
        "source_svg": { "type": "string", "description": "SVG source file path (flagship tier only, NOT served to web)" }
      },
      "required": ["featured", "standard", "thumbnails"]
    },
    "special_galleries": {
      "type": "array",
      "items": { 
        "type": "string",
        "enum": [
          "endangered",
          "critically_endangered",
          "remarkable_migrations",
          "keystone_species",
          "recently_extinct",
          "conservation_success",
          "featured"
        ]
      }
    },
    "display_priority": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
    "sources": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "claim": { "type": "string" },
          "source": { "type": "string" },
          "publication": { "type": "string" },
          "doi": { "type": "string" },
          "url": { "type": "string" },
          "accessed": { "type": "string", "format": "date" }
        },
        "required": ["claim", "source", "accessed"]
      }
    },
    "last_updated": {
      "type": "string",
      "format": "date"
    },
    "content_status": {
      "type": "string",
      "enum": ["draft", "review", "complete", "needs_update"]
    }
  }
}
```

### 6.2 Complete Species Entry Example

```json
{
  "animal_id": "monarch_butterfly",
  "asset_tier": "standard",
  "common_name": "Monarch Butterfly",
  "display_name": "Monarch Butterfly",
  "scientific_name": "Danaus plexippus",
  "scientific_taxonomy": {
    "kingdom": "Animalia",
    "phylum": "Arthropoda",
    "class": "Insecta",
    "order": "Lepidoptera",
    "family": "Nymphalidae",
    "genus": "Danaus",
    "species": "D. plexippus"
  },
  "project_category": "insecta",
  "conservation_status": "Endangered",
  "conservation_trend": "Decreasing",
  "iucn_assessment_year": 2022,
  "population_remaining": "Decreased by 80% in two decades",
  "population_detail": {
    "estimate": "Western: ~335,000 (2021); Eastern: varies by year",
    "estimate_year": 2021,
    "trend_percentage": "-80%",
    "trend_timeframe": "1990-2020",
    "source": "Xerces Society, IUCN 2022 Assessment"
  },
  "range": "North America to Central America (migratory)",
  "habitat": "Fields, meadows, gardens with milkweed plants; overwinters in oyamel fir forests (Mexico) and eucalyptus groves (California)",
  "physical_stats": {
    "wingspan": "3.5-4 inches (9-10 cm)",
    "weight": "0.5 grams"
  },
  "lifespan": "2-6 weeks (summer generations), 6-9 months (migratory generation)",
  "primary_threats": [
    "Habitat loss (milkweed destruction from herbicides and development)",
    "Pesticide use (neonicotinoids, glyphosate)",
    "Climate change disrupting migration timing and overwintering sites",
    "Deforestation of Mexican overwintering forests",
    "Severe weather events"
  ],
  "threat_detail": {
    "milkweed_loss": "Estimated 1.3 billion milkweed stems lost in agricultural areas since 1999",
    "overwintering_forest": "Mexican forest coverage declined from 18.19 hectares (1996) to 2.83 hectares (2013)",
    "climate_impact": "Warming temperatures causing earlier spring emergence, misalignment with milkweed availability"
  },
  "material_pairing": {
    "material": "Stained Glass with Copper Filigree",
    "extraction_connection": "Sand mining for glass production destroys coastal and riverine habitats; copper mining pollutes waterways and clears forests that support milkweed ecosystems",
    "symbolic_meaning": "The monarch's translucent wings mirror the fragility of stained glass—both are luminous, both shatter easily, both require careful stewardship to persist"
  },
  "narrative": "The monarch's wings are like pages torn from Earth's story, each one lost is a chapter we can never read again. These living stained-glass windows perform one of nature's most extraordinary feats—a multi-generational migration spanning thousands of miles. Yet the orange tide of their migration has thinned dramatically. Places that once witnessed millions of monarchs now see mere thousands. The delicate choreography between butterfly and milkweed, perfected over millennia, unravels as we plow, spray, and develop their critical habitats. Their decline isn't just about losing a beautiful insect—it's the unraveling of an entire ecological tapestry. As monarchs fade, we lose a living connection between North and Central America, a reminder that nature transcends our borders and demands our collective protection.",
  "quick_fact": "Monarchs navigate 3,000 miles during migration using a combination of sun position and Earth's magnetic field—a journey no individual butterfly completes twice",
  "conservation_urgency": 80,
  "image_paths": {
    "featured": "/assets/images/animals/featured/monarch_butterfly_1.png",
    "standard": "/assets/images/animals/insecta/monarch_butterfly_1.png",
    "thumbnails": [
      "/assets/images/animals/thumbnails/monarch_butterfly_1.png"
    ],
    "print": "/assets/images/animals/print/monarch_butterfly_1_300dpi.png"
  },
  "special_galleries": [
    "endangered",
    "remarkable_migrations"
  ],
  "display_priority": 85,
  "sources": [
    {
      "claim": "Population decreased by 80% in two decades",
      "source": "Thogmartin, W.E. et al. (2017)",
      "publication": "Royal Society Open Science",
      "doi": "10.1098/rsos.170760",
      "accessed": "2025-12-01"
    },
    {
      "claim": "1.3 billion milkweed stems lost",
      "source": "Pleasants, J.M. & Oberhauser, K.S. (2013)",
      "publication": "Insect Conservation and Diversity",
      "doi": "10.1111/j.1752-4598.2012.00196.x",
      "accessed": "2025-12-01"
    },
    {
      "claim": "IUCN Endangered status",
      "source": "IUCN Red List",
      "url": "https://www.iucnredlist.org/species/194052961/201663294",
      "accessed": "2025-12-01"
    }
  ],
  "last_updated": "2025-12-12",
  "content_status": "complete"
}
```

---

## 7. Category Taxonomy

### 7.1 Primary Categories (from asset manifest)

| Category | Image Count | Subcategories | Top Subcategory |
|----------|-------------|---------------|-----------------|
| **Mammalian Beasts** | 247 | 10 | Carnivora (84) |
| **Avian Beasts** | 96 | 10 | Raptors (21) |
| **Reptilian Beasts** | 62 | 5 | Snakes (25) |
| **Aquatic Beasts** | 39 | 9 | Coral Reef (8) |
| **Insecta Beasts** | 39 | 7 | Butterflies & Moths (13) |
| **Amphibian Beasts** | 7 | 1 | Frogs & Toads (7) |
| **Arachnid Beasts** | 5 | 3 | Spiders (3) |

### 7.2 Subcategory Structure (52 total)

```
mammalian-beasts/
├── carnivora           # 84 - Big cats, bears, canids, mustelids
├── ungulates           # 79 - Hoofed mammals (horses, rhinos, deer, antelope)
├── primates            # 16 - Apes, monkeys, lemurs, lorises
├── cetaceans           # 10 - Whales, dolphins, porpoises
├── marsupials          # 11 - Kangaroos, koalas, possums, wombats
├── marine-mammals      # 6  - Seals, walrus, manatees, dugongs
├── rodents             # 11 - Squirrels, beavers, capybaras, mice
├── bats                # 2  - Flying foxes, microbats
├── elephants           # 3  - African, Asian elephants
└── other-mammals       # 20 - Monotremes, xenarthrans, lagomorphs

avian-beasts/
├── raptors             # 21 - Eagles, hawks, falcons, vultures
├── owls                # 6  - All owl species
├── songbirds           # 10 - Passerines, perching birds
├── waterfowl           # 8  - Ducks, geese, swans
├── seabirds            # 11 - Terns, albatross, pelicans, boobies
├── flightless          # 5  - Penguins, kiwis, ostriches
├── wading-birds        # 9  - Cranes, herons, sandpipers
├── gamebirds           # 7  - Pheasants, turkeys, grouse
├── parrots             # 2  - Parrots, macaws, cockatoos
└── other-birds         # 6  - Kingfishers, woodpeckers, hummingbirds

reptilian-beasts/
├── snakes              # 25 - Constrictors, vipers, cobras, colubrids
├── lizards             # 15 - Monitors, geckos, chameleons, iguanas
├── turtles-tortoises   # 7  - Land tortoises, freshwater turtles
├── crocodilians        # 5  - Crocodiles, alligators, gharials
└── marine-reptiles     # 5  - Sea turtles, sea snakes

aquatic-beasts/
├── sharks              # 7  - Requiem sharks, hammerheads
├── rays-skates         # 4  - Manta rays, guitarfish
├── bony-fish-marine    # 5  - Tuna, marlin, halibut
├── bony-fish-freshwater # 5 - Catfish, eels, tigerfish
├── coral-reef          # 8  - Clownfish, seahorses, reef fish
├── deep-sea            # 1  - Anglerfish, deep dwellers
├── migratory           # 1  - Salmon, migratory species
├── ancient-fish        # 1  - Sturgeon, coelacanths
└── other-fish          # 3  - Invertebrates (krill, shrimp)

insecta-beasts/
├── butterflies-moths   # 13 - Lepidoptera
├── beetles             # 7  - Coleoptera
├── bees-wasps          # 8  - Hymenoptera (partial)
├── ants                # 2  - Hymenoptera (partial)
├── dragonflies         # 1  - Odonata
├── crickets-grasshoppers # 1 - Orthoptera
└── other-insects       # 7  - Mantids, cockroaches, misc.

arachnid-beasts/
├── spiders             # 3  - Araneae
├── scorpions           # 1  - Scorpiones
└── ticks-mites         # 1  - Acari

amphibian-beasts/
└── frogs-toads         # 7  - Anura
```

### 7.3 Taxonomic Mapping (for JSON `project_category`)

| Manifest Category | JSON `project_category` Value |
|-------------------|-------------------------------|
| mammalian-beasts | `mammalia` |
| avian-beasts | `aves` |
| reptilian-beasts | `reptilia` |
| aquatic-beasts/sharks | `chondrichthyes` |
| aquatic-beasts/rays-skates | `chondrichthyes` |
| aquatic-beasts/bony-fish-* | `actinopterygii` |
| aquatic-beasts/coral-reef | `actinopterygii` |
| aquatic-beasts/other-fish | `crustacea` or `other_invertebrates` |
| insecta-beasts | `insecta` |
| arachnid-beasts | `arachnida` |
| amphibian-beasts | `amphibia` |

### 7.3 Special Galleries (curated collections)

| Gallery | Criteria | Purpose |
|---------|----------|---------|
| `critically_endangered` | IUCN CR status | Maximum urgency messaging |
| `endangered` | IUCN EN status | High urgency |
| `remarkable_migrations` | Species with notable migrations | Wonder + loss |
| `keystone_species` | Ecological keystone role | Ecosystem messaging |
| `recently_extinct` | Extinct since 1900 | Memorial gallery |
| `conservation_success` | Recovering species | Hope messaging |
| `featured` | Editorial picks | Homepage rotation |

---

## 8. Front End Architecture

### 8.1 Web Gallery Implementation

#### 8.1.1 Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Astro / 11ty / Hugo | Static site generation for performance |
| **Styling** | SCSS/SASS | Variables, mixins, modular architecture |
| **Icons** | Font Awesome 6 Pro + Custom SVG | FA for utilities, custom for brand elements |
| **Animations** | CSS + GSAP (minimal) | Performance-first, no bloat |
| **Build** | Vite / esbuild | Fast builds, modern tooling |
| **Hosting** | Netlify / Vercel / Cloudflare Pages | CDN-backed, edge deployment |

#### 8.1.2 Page Architecture

```
BEASTIQUE Web/
├── index.html                    # Landing / hero experience
├── gallery/
│   ├── index.html               # Main gallery grid
│   ├── [category]/              # Category views (mammalia/, aves/, etc.)
│   │   └── index.html
│   └── [species_id]/            # Individual species pages
│       └── index.html
├── collections/
│   ├── endangered/              # Special gallery: Endangered
│   ├── critically-endangered/   # Special gallery: CR status
│   ├── migrations/              # Special gallery: Migrations
│   └── keystone/                # Special gallery: Keystone species
├── about/
│   ├── index.html               # Project mission
│   ├── thesis/                  # Full thesis statement
│   └── methodology/             # How we create
├── data/
│   └── index.html               # Conservation data transparency
└── support/
    └── index.html               # How to help / licensing
```

#### 8.1.3 Component Architecture

```
components/
├── layout/
│   ├── Header.astro             # Site header with navigation
│   ├── Footer.astro             # Site footer with links
│   ├── Navigation.astro         # Main nav component
│   └── Sidebar.astro            # Category/filter sidebar
├── gallery/
│   ├── GalleryGrid.astro        # Responsive image grid
│   ├── GalleryCard.astro        # Individual species card
│   ├── GalleryFilter.astro      # Filter controls
│   └── GalleryPagination.astro  # Pagination component
├── species/
│   ├── SpeciesHero.astro        # Full-width hero image
│   ├── SpeciesData.astro        # Conservation data display
│   ├── SpeciesNarrative.astro   # Story/narrative section
│   ├── SpeciesTaxonomy.astro    # Scientific classification
│   ├── SpeciesThreats.astro     # Threat visualization
│   └── SpeciesSources.astro     # Citation display
├── ui/
│   ├── Button.astro             # Button variants
│   ├── Card.astro               # Generic card component
│   ├── Modal.astro              # Lightbox/modal
│   ├── Tooltip.astro            # Info tooltips
│   ├── Badge.astro              # Status badges (IUCN status)
│   └── Icon.astro               # SVG icon wrapper
└── data-viz/
    ├── ThreatChart.astro        # Threat breakdown visual
    ├── PopulationTrend.astro    # Population trend graph
    ├── StatusIndicator.astro    # IUCN status visual
    └── RangeMap.astro           # Geographic range display
```

#### 8.1.4 Species Page Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  HEADER / NAVIGATION                                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                                                               │  │
│  │                     HERO IMAGE (16:9)                         │  │
│  │                   Full-width, immersive                       │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────┬─────────────────────────────────┐  │
│  │  SPECIES HEADER             │  CONSERVATION STATUS            │  │
│  │  Common Name                │  ┌───────────────────────────┐  │  │
│  │  Scientific Name            │  │  IUCN Badge + Trend Icon  │  │  │
│  │  Category Badge             │  │  Population Remaining     │  │  │
│  │                             │  │  Urgency Score            │  │  │
│  └─────────────────────────────┴──┴───────────────────────────┘──┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  NARRATIVE                                                    │  │
│  │  Full prose narrative with pull-quote styling                 │  │
│  │  Material connection highlighted                              │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌──────────────────────┬────────────────────────────────────────┐  │
│  │  THREATS             │  QUICK FACTS                           │  │
│  │  Visual breakdown    │  Habitat, Range, Lifespan              │  │
│  │  Quantified data     │  Physical stats                        │  │
│  └──────────────────────┴────────────────────────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  SCIENTIFIC TAXONOMY                                          │  │
│  │  Kingdom → Phylum → Class → Order → Family → Genus → Species  │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  SOURCES & CITATIONS                                          │  │
│  │  Collapsible, properly formatted academic citations           │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  RELATED SPECIES                                              │  │
│  │  3-4 cards: Same category or conservation status              │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                             │
└─────────────────────────────────────────────────────────────────────┘
```

#### 8.1.5 Gallery Grid Specifications

| Breakpoint | Grid Columns | Card Width | Gap |
|------------|--------------|------------|-----|
| Mobile (<640px) | 1 | 100% | 16px |
| Tablet (640-1024px) | 2 | ~45% | 24px |
| Desktop (1024-1440px) | 3 | ~30% | 32px |
| Large (>1440px) | 4 | ~23% | 32px |

#### 8.1.6 Performance Requirements

| Metric | Target | Method |
|--------|--------|--------|
| **LCP** | < 2.5s | Optimized hero images, preload |
| **FID** | < 100ms | Minimal JS, deferred loading |
| **CLS** | < 0.1 | Reserved image dimensions |
| **TTI** | < 3.5s | Static generation, CDN |
| **Image Load** | Progressive | LQIP + lazy loading |

#### 8.1.7 Image Optimization Pipeline

```
TIER 1: FLAGSHIP IMAGES (from SVG exports)
─────────────────────────────────────────────────────────────────
Source: PNG export from Inkscape SVG (1792×1024)
        ↓
        Already optimized during export process
        ↓
┌─────────────────────────────────────┐
│  Build-time Processing              │
│  ├── Generate WebP version          │
│  ├── Generate AVIF version          │
│  ├── Create hero srcset (full res)  │
│  ├── Generate LQIP placeholder      │
│  └── Extract dominant colors        │
└─────────────────────────────────────┘
        ↓
Usage: Hero images, featured sections, homepage, print


TIER 2: STANDARD IMAGES (Dall-E processed)
─────────────────────────────────────────────────────────────────
Source: PNG (1792×1024)
        ↓
┌─────────────────────────────────────┐
│  Build-time Optimization            │
│  ├── Generate WebP versions         │
│  ├── Generate AVIF versions         │
│  ├── Create responsive srcset       │
│  │   ├── 480w (mobile)              │
│  │   ├── 768w (tablet)              │
│  │   ├── 1024w (desktop)            │
│  │   └── 1792w (full)               │
│  ├── Generate LQIP placeholders     │
│  └── Extract dominant colors        │
└─────────────────────────────────────┘
        ↓
Usage: Gallery grids, category pages, species pages
```

```html
<picture>
  <source srcset="..." type="image/avif">
  <source srcset="..." type="image/webp">
  <img src="fallback.png" loading="lazy">
</picture>
```

#### 8.1.8 Search & Filter System

**Filter Dimensions:**

- Category (taxonomic)
- Conservation Status (IUCN)
- Population Trend
- Region/Range
- Threat Type
- Special Collections

**Search Implementation:**

- Client-side search with Fuse.js or Pagefind
- Indexed fields: common_name, scientific_name, narrative, threats
- Fuzzy matching enabled
- Search suggestions/autocomplete

#### 8.1.9 Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| **Keyboard Navigation** | Full tab support, focus indicators |
| **Screen Readers** | Proper ARIA labels, alt text for all images |
| **Color Contrast** | WCAG AA minimum (4.5:1 text, 3:1 UI) |
| **Motion** | Respect prefers-reduced-motion |
| **Text Scaling** | Supports 200% zoom without horizontal scroll |
| **Focus States** | Visible, high-contrast focus rings |

---

## 9. Visual Style Guide

### 9.1 HARD RULES — NON-NEGOTIABLE

> **These rules are absolute. No exceptions. No "just this once." Ever.**

#### 9.1.1 ABSOLUTELY NO EMOJIS

```
❌ FORBIDDEN — ZERO TOLERANCE
─────────────────────────────────────────────────────
• No emoji characters anywhere in the web interface
• No emoji in HTML, CSS, or JavaScript
• No emoji in alt text or ARIA labels
• No emoji in meta descriptions or titles
• No emoji in JSON display content
• No emoji in error messages or UI feedback
• No emoji in comments visible to users

WHY: Emojis are inconsistent across platforms, unprofessional 
for serious conservation messaging, and undermine the gravitas 
of the project's thesis. BEASTIQUE is not a children's app.
```

#### 9.1.2 SVG-ONLY Graphics Policy

```
✓ ALLOWED GRAPHIC FORMATS
─────────────────────────────────────────────────────
• SVG — Custom icons, logos, decorative elements, UI graphics
• PNG — Photography/artwork ONLY (the animal images themselves)
• WebP/AVIF — Optimized versions of PNG artwork

❌ FORBIDDEN GRAPHIC FORMATS
─────────────────────────────────────────────────────
• GIF — No animated GIFs, no static GIFs
• ICO — Use SVG favicon with PNG fallback
• BMP — Never
• JPEG — Only if PNG unavailable (rare edge case)
• Emoji fonts — See 9.1.1
• Icon fonts (except Font Awesome) — Use SVG instead
```

#### 9.1.3 Icon Hierarchy

```
ICON SOURCE PRIORITY (in order):
─────────────────────────────────────────────────────

1. CUSTOM SVG (Brand/Project-Specific)
   • BEASTIQUE logo and wordmark
   • Category icons (custom animal silhouettes)
   • Conservation status badges
   • Threat type icons
   • Any icon central to project identity
   
   Location: /assets/icons/custom/
   Format: Optimized SVG, single path where possible
   Naming: icon-{category}-{name}.svg

2. CUSTOM SVG (UI Elements)
   • Navigation arrows
   • Decorative borders/frames
   • Section dividers
   • Loading indicators
   • Any UI element that needs precise brand alignment
   
   Location: /assets/icons/ui/
   
3. FONT AWESOME 6 (Utility Icons)
   • Social media icons (fa-twitter, fa-instagram, etc.)
   • Generic actions (fa-share, fa-download, fa-link)
   • Navigation utilities (fa-chevron-*, fa-arrow-*)
   • Form elements (fa-search, fa-filter, fa-times)
   • Status indicators (fa-check, fa-exclamation-triangle)
   
   Usage: <i class="fa-solid fa-share"></i>
   CDN: Kit or self-hosted subset
   
4. GLYPHS (CLI/Terminal Only)
   • Progress indicators in build scripts
   • Status output in Python tools
   • Never in web interface
   
   Examples: ✓ ✗ → ● ○ ▸ ▾ (terminal output only)
```

### 9.2 Color System

#### 9.2.1 Core Palette

```scss
// BEASTIQUE Core Colors
// ─────────────────────────────────────────────────────

// Primary — Deep Earth
$color-primary-900: #1a1612;  // Near-black earth
$color-primary-800: #2d261f;  // Deep soil
$color-primary-700: #3f352b;  // Rich loam
$color-primary-600: #524437;  // Weathered bark
$color-primary-500: #6b5a4a;  // Base earth tone
$color-primary-400: #8a7766;  // Warm stone
$color-primary-300: #a99685;  // Sandy clay
$color-primary-200: #c8b9aa;  // Pale sand
$color-primary-100: #e7ddd2;  // Cream
$color-primary-50:  #f5f1ec;  // Off-white

// Accent — Oxidized Metal
$color-accent-copper: #b87333;   // Copper
$color-accent-bronze: #cd7f32;   // Bronze  
$color-accent-brass:  #d4af37;   // Brass
$color-accent-gold:   #ffd700;   // Gold (sparingly)
$color-accent-patina: #4a7c59;   // Aged copper patina

// Status — Conservation
$color-status-extinct:    #1a1a1a;  // Black — gone
$color-status-critical:   #8b0000;  // Dark red — CR
$color-status-endangered: #cc4400;  // Burnt orange — EN
$color-status-vulnerable: #cc8800;  // Amber — VU
$color-status-near:       #999900;  // Olive — NT
$color-status-concern:    #4a7c59;  // Forest green — LC

// Semantic
$color-text-primary:   $color-primary-900;
$color-text-secondary: $color-primary-600;
$color-text-muted:     $color-primary-400;
$color-bg-primary:     $color-primary-50;
$color-bg-secondary:   $color-primary-100;
$color-bg-dark:        $color-primary-900;
```

#### 9.2.2 Dark Mode Palette

```scss
// Dark Mode Overrides
// ─────────────────────────────────────────────────────

@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary:   #{$color-primary-100};
    --color-text-secondary: #{$color-primary-300};
    --color-bg-primary:     #{$color-primary-900};
    --color-bg-secondary:   #{$color-primary-800};
  }
}
```

### 9.3 Typography

#### 9.3.1 Font Stack

```scss
// Primary — Headlines, Display
$font-display: 'Playfair Display', 'Georgia', 'Times New Roman', serif;

// Secondary — Body, UI
$font-body: 'Source Sans Pro', 'Helvetica Neue', 'Arial', sans-serif;

// Tertiary — Scientific Names, Data
$font-mono: 'Source Code Pro', 'Consolas', 'Monaco', monospace;

// Scientific Names (italic serif)
$font-scientific: 'EB Garamond', 'Georgia', serif;
```

#### 9.3.2 Type Scale

```scss
// Modular Scale: 1.25 (Major Third)
// Base: 16px
// ─────────────────────────────────────────────────────

$text-xs:   0.64rem;   // 10.24px
$text-sm:   0.8rem;    // 12.8px
$text-base: 1rem;      // 16px
$text-lg:   1.25rem;   // 20px
$text-xl:   1.563rem;  // 25px
$text-2xl:  1.953rem;  // 31.25px
$text-3xl:  2.441rem;  // 39px
$text-4xl:  3.052rem;  // 48.8px
$text-5xl:  3.815rem;  // 61px

// Line Heights
$leading-tight:  1.25;
$leading-snug:   1.375;
$leading-normal: 1.5;
$leading-relaxed: 1.625;
$leading-loose:  2;
```

#### 9.3.3 Typography Rules

```
HEADLINE RULES:
─────────────────────────────────────────────────────
• H1: Playfair Display, 3xl-5xl, tight leading
• H2: Playfair Display, 2xl-3xl, tight leading
• H3: Source Sans Pro, xl-2xl, snug leading, semi-bold
• H4: Source Sans Pro, lg-xl, normal leading, semi-bold

BODY RULES:
─────────────────────────────────────────────────────
• Paragraphs: Source Sans Pro, base, relaxed leading
• Max line width: 75ch
• Paragraph spacing: 1.5em margin-bottom

SCIENTIFIC NAMES:
─────────────────────────────────────────────────────
• Always italicized: <em class="scientific">Danaus plexippus</em>
• EB Garamond or fallback serif
• Same size as surrounding text
• Never bold, never all-caps

DATA/NUMBERS:
─────────────────────────────────────────────────────
• Statistics: Source Sans Pro, tabular figures
• Large numbers: Use locale formatting (1,000,000 not 1000000)
• Percentages: Include sign for changes (+15%, -80%)
```

### 9.4 Spacing System

```scss
// 4px base unit
// ─────────────────────────────────────────────────────

$space-0:  0;
$space-1:  0.25rem;   // 4px
$space-2:  0.5rem;    // 8px
$space-3:  0.75rem;   // 12px
$space-4:  1rem;      // 16px
$space-5:  1.25rem;   // 20px
$space-6:  1.5rem;    // 24px
$space-8:  2rem;      // 32px
$space-10: 2.5rem;    // 40px
$space-12: 3rem;      // 48px
$space-16: 4rem;      // 64px
$space-20: 5rem;      // 80px
$space-24: 6rem;      // 96px
```

### 9.5 Component Standards

#### 9.5.1 IUCN Status Badges

```html
<!-- Status Badge Structure -->
<span class="badge badge--status badge--{status-code}">
  <svg class="badge__icon" aria-hidden="true"><!-- Custom SVG --></svg>
  <span class="badge__text">{Status Text}</span>
</span>

<!-- Examples -->
<span class="badge badge--status badge--cr">
  <svg class="badge__icon">...</svg>
  <span class="badge__text">Critically Endangered</span>
</span>
```

```scss
// Badge Status Colors
.badge--ex  { background: $color-status-extinct; }
.badge--ew  { background: $color-status-extinct; }
.badge--cr  { background: $color-status-critical; }
.badge--en  { background: $color-status-endangered; }
.badge--vu  { background: $color-status-vulnerable; }
.badge--nt  { background: $color-status-near; }
.badge--lc  { background: $color-status-concern; }
```

#### 9.5.2 Card Component

```html
<!-- Gallery Card Structure -->
<article class="card card--species">
  <figure class="card__media">
    <picture>
      <source srcset="..." type="image/avif">
      <source srcset="..." type="image/webp">
      <img src="..." alt="..." loading="lazy" class="card__image">
    </picture>
  </figure>
  <div class="card__content">
    <h3 class="card__title">{Common Name}</h3>
    <p class="card__subtitle"><em class="scientific">{Scientific Name}</em></p>
    <span class="badge badge--status badge--{status}">{Status}</span>
  </div>
  <a href="..." class="card__link" aria-label="View {Common Name}">
    <span class="sr-only">View details</span>
  </a>
</article>
```

#### 9.5.3 Button Variants

```scss
// Button Base
.btn {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  padding: $space-3 $space-6;
  font-family: $font-body;
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.2s ease;
  
  // Icon within button
  .btn__icon {
    width: 1em;
    height: 1em;
  }
}

// Variants
.btn--primary {
  background: $color-primary-800;
  color: $color-primary-50;
  
  &:hover { background: $color-primary-700; }
}

.btn--secondary {
  background: transparent;
  color: $color-primary-800;
  border: 2px solid $color-primary-800;
  
  &:hover { background: $color-primary-100; }
}

.btn--accent {
  background: $color-accent-copper;
  color: $color-primary-50;
  
  &:hover { background: darken($color-accent-copper, 10%); }
}
```

### 9.6 Motion & Animation

```scss
// Timing Functions
// ─────────────────────────────────────────────────────

$ease-out: cubic-bezier(0.33, 1, 0.68, 1);
$ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
$ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

// Durations
$duration-fast: 150ms;
$duration-normal: 300ms;
$duration-slow: 500ms;

// Reduced Motion
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 9.7 Forbidden Patterns

```
❌ NEVER DO THIS:
─────────────────────────────────────────────────────

• Emoji anywhere in web UI (see 9.1.1)
• Icon fonts other than Font Awesome
• Inline styles in HTML
• !important in CSS (except reduced-motion)
• Fixed pixel font sizes (use rem)
• Z-index values > 100 without documentation
• Auto-playing video or audio
• Horizontal scrolling on body
• Text over images without proper contrast overlay
• Carousel/slider for important content
• Modal dialogs for non-critical information
• Infinite scroll without "load more" fallback
• Disabled buttons without explanation
• Red/green only color indicators (accessibility)
• Lorem ipsum in production
• Console.log in production JS
• Comments in production HTML
```

### 9.8 CLI Output Standards

```
TERMINAL/CLI OUTPUT ONLY:
─────────────────────────────────────────────────────

These glyphs are ONLY for Python scripts, build tools, 
and terminal output. NEVER in web interface.

SUCCESS:  ✓  (U+2713)
FAILURE:  ✗  (U+2717)
ARROW:    →  (U+2192)
BULLET:   •  (U+2022)
PROGRESS: ● ○ (U+25CF, U+25CB)
TREE:     ├ └ │ (box drawing)

Example Python output:
─────────────────────────────────────────────────────
$ python tools/validate_species.py

BEASTIQUE Species Validator
───────────────────────────
✓ monarch_butterfly.json — valid
✓ african_elephant.json — valid
✗ amur_leopard.json — missing: population_detail
  → Line 45: required field "estimate_year"

Results: 2 passed, 1 failed
```

---

## 10. Dynamic Frame System

### 10.1 Overview

BEASTIQUE uses lightweight, modular SVG frames as a **core UI orchestration system** — not just image overlays. These frames are purpose-built for browser rendering, DOM manipulation, CSS/JS animation, and sophisticated user experience choreography.

```
FRAME SYSTEM CAPABILITIES:
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    DYNAMIC FRAMES                            │
├─────────────────────────────────────────────────────────────┤
│  • Loading screen orchestration                             │
│  • Page transition animations                               │
│  • Viewport-filling brand reveals                           │
│  • Image overlays (species cards, heroes)                   │
│  • Interactive UI elements                                  │
│  • Status indicators (conservation urgency)                 │
│  • Ambient/background animation                             │
└─────────────────────────────────────────────────────────────┘

NOT JUST: "Put frame around image"
BUT ALSO: "Frame IS the experience"
```

### 10.2 Frame Types Comparison

| Type | Lines | Purpose | Delivery |
|------|-------|---------|----------|
| **Heavyweight** (Flagship Art) | 2,000-5,000+ | One-off masterpieces | PNG export only |
| **Lightweight** (Dynamic UI) | < 500 | Reusable, animated, interactive | SVG direct to DOM |

### 10.3 The S.O.S. Frame

#### 10.3.1 Specifications

| Spec | Value | Notes |
|------|-------|-------|
| **Viewport** | 1792 × 1024 px | Matches BEASTIQUE artwork; scales to any container |
| **Target File Size** | < 50 KB | Ideally < 20 KB |
| **Path Structure** | Modular, named IDs | Each element independently animatable |
| **Color Approach** | CSS custom properties | Dynamic theming via variables |
| **Aspect Ratio** | 1.75:1 | Maintains proportion at any scale |

#### 10.3.2 Element Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                              [CR]                                    │
│  ·  ·  ·  —  —  —  ·  ·  ·     ·  ·  ·  —  —  —  ·  ·  ·           │
├─────────────────────────────────────────────────────────────────────┤
│ ·                                                                 · │
│ ·                                                                 · │
│ ·                                                                 · │
│ —                        CONTENT AREA                             — │
│ —                        (image, text,                            — │
│ —                         or empty)                               — │
│ ·                                                                 · │
│ ·                                                                 · │
│ ·                                                                 · │
├─────────────────────────────────────────────────────────────────────┤
│  ·  ·  ·  —  —  —  ·  ·  ·     ·  ·  ·  —  —  —  ·  ·  ·           │
│                              [BQ]                                    │
└─────────────────────────────────────────────────────────────────────┘

ELEMENT IDs:
─────────────────────────────────────────────────────────────────
#frame-border          Single cohesive path (all 4 sides)
#label-cr              "CR" letterforms (path, not text)
#label-bq              "BQ" letterforms (path, not text)
#morse-top-s1-dot[1-3] Top edge, first S (3 dots)
#morse-top-o-dash[1-3] Top edge, O (3 dashes)
#morse-top-s2-dot[1-3] Top edge, second S (3 dots)
#morse-left-*          Left edge morse elements
#morse-right-*         Right edge morse elements
#morse-bottom-*        Bottom edge morse elements
```

### 10.4 Use Case: Loading Screen Orchestration

The S.O.S. frame can serve as a **premium loading experience** — the frame assembles itself before any content appears.

#### 10.4.1 Animation Sequence

```
PHASE 1: MORSE ASSEMBLY (0-2s)
═══════════════════════════════════════════════════════════════
[Black screen]
        ↓ 0.0s
·       First dot fades in (center screen)
        ↓ 0.2s
  ·     Second dot appears
        ↓ 0.2s
    ·   Third dot — "S" complete
        ↓ 0.3s
      ——— First dash slides in
        ↓ 0.2s
         ——— Second dash
        ↓ 0.2s
            ——— Third dash — "O" complete
        ↓ 0.3s
               · · · Final S appears (rapid)
        ↓ 0.5s
[Morse elements drift to their frame positions]


PHASE 2: FRAME CONSTRUCTION (2-3.5s)
═══════════════════════════════════════════════════════════════
[Morse in position around empty rectangle]
        ↓
Frame border draws itself (SVG stroke-dashoffset animation)
  → Top edge draws left-to-right
  → Right edge draws top-to-bottom
  → Bottom edge draws right-to-left
  → Left edge draws bottom-to-top
        ↓
[Complete frame, empty interior]


PHASE 3: BRAND REVEAL (3.5-4.5s)
═══════════════════════════════════════════════════════════════
[Frame complete]
        ↓
"CR" materializes at top (fade + slight scale)
        ↓ 0.3s
"BQ" materializes at bottom
        ↓ 0.5s
[Beat — hold for impact]


PHASE 4: VIEWPORT TRANSITION (4.5-5.5s)
═══════════════════════════════════════════════════════════════
[Full frame, branded, empty]
        ↓
Frame scales/transforms into hero section position
Content fades in behind/within frame
        ↓
BOOM. Main page. Full experience.
```

#### 10.4.2 Implementation

```javascript
// Loading screen orchestration
class BeastiqueLoader {
  constructor(frameElement) {
    this.frame = frameElement;
    this.timeline = gsap.timeline({ paused: true });
    this.buildTimeline();
  }
  
  buildTimeline() {
    const tl = this.timeline;
    
    // Phase 1: Morse Assembly
    tl.set('[id^="morse-"]', { opacity: 0, scale: 0.5 })
      .set('#frame-border', { strokeDashoffset: 'var(--path-length)' })
      .set(['#label-cr', '#label-bq'], { opacity: 0, scale: 0.8 });
    
    // S.O.S. dots and dashes appear in sequence
    const morseSequence = [
      '#morse-center-s1-dot1', '#morse-center-s1-dot2', '#morse-center-s1-dot3',
      '#morse-center-o-dash1', '#morse-center-o-dash2', '#morse-center-o-dash3',
      '#morse-center-s2-dot1', '#morse-center-s2-dot2', '#morse-center-s2-dot3',
    ];
    
    morseSequence.forEach((id, i) => {
      tl.to(id, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.15,
        ease: 'back.out(2)'
      }, i * 0.12);
    });
    
    // Morse elements move to frame positions
    tl.to('[id^="morse-center-"]', {
      motionPath: { /* paths to final positions */ },
      duration: 0.8,
      ease: 'power2.inOut',
      stagger: 0.02
    }, '+=0.3');
    
    // Phase 2: Frame draws itself
    tl.to('#frame-border', {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power1.inOut'
    }, '+=0.2');
    
    // Phase 3: Labels appear
    tl.to('#label-cr', {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.5)'
    })
    .to('#label-bq', {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.5)'
    }, '-=0.2');
    
    // Beat
    tl.to({}, { duration: 0.5 });
    
    // Phase 4: Transition to main content
    tl.to(this.frame, {
      scale: 0.6,
      y: '-20vh',
      duration: 0.8,
      ease: 'power2.inOut'
    })
    .to('.main-content', {
      opacity: 1,
      duration: 0.5
    }, '-=0.3');
  }
  
  play() {
    return this.timeline.play();
  }
  
  // Skip animation (for returning visitors)
  skip() {
    this.timeline.progress(1);
  }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
  const loader = new BeastiqueLoader(document.querySelector('#loading-frame'));
  
  // Check if first visit or returning
  if (sessionStorage.getItem('beastique-visited')) {
    loader.skip();
  } else {
    loader.play().then(() => {
      sessionStorage.setItem('beastique-visited', 'true');
    });
  }
});
```

### 10.5 Use Case: Page Transitions

The frame can orchestrate transitions between pages/views.

```javascript
// Page transition using frame
async function transitionToPage(targetUrl) {
  const frame = document.querySelector('#transition-frame');
  
  // Frame assembles over current content
  await gsap.timeline()
    .fromTo(frame, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
    .fromTo('[id^="morse-"]',
      { scale: 0 },
      { scale: 1, stagger: 0.02, duration: 0.4 }
    )
    .fromTo('#frame-border',
      { strokeDashoffset: 'var(--path-length)' },
      { strokeDashoffset: 0, duration: 0.6 }
    );
  
  // Navigate
  await navigateTo(targetUrl);
  
  // Frame dissolves to reveal new content
  await gsap.timeline()
    .to('#frame-border',
      { strokeDashoffset: 'var(--path-length)', duration: 0.4 }
    )
    .to('[id^="morse-"]',
      { scale: 0, stagger: 0.01, duration: 0.3 }
    )
    .to(frame,
      { opacity: 0, duration: 0.2 }
    );
}
```

### 10.6 Use Case: Image Overlay

The "traditional" use — framing species artwork.

#### 10.6.1 Overlay Pattern

```html
<figure class="species-card" data-status="CR">
  <div class="image-container">
    <img src="/images/amur-leopard.png" alt="Amur Leopard" loading="lazy" />
    <svg class="frame-overlay" viewBox="0 0 1792 1024" aria-hidden="true">
      <use href="/frames/sos-frame.svg#sos-frame" />
    </svg>
  </div>
  <figcaption>...</figcaption>
</figure>
```

```css
.image-container {
  position: relative;
  aspect-ratio: 1792 / 1024;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Interactive frame elements */
.frame-overlay [id^="morse-"],
.frame-overlay #label-cr,
.frame-overlay #label-bq {
  pointer-events: auto;
  cursor: pointer;
}

/* Status-based theming */
[data-status="CR"] .frame-overlay { --frame-color: var(--status-critical); }
[data-status="EN"] .frame-overlay { --frame-color: var(--status-endangered); }
[data-status="VU"] .frame-overlay { --frame-color: var(--status-vulnerable); }
```

### 10.7 Use Case: Ambient Background

Subtle, continuous morse code animation as page background texture.

```css
.page-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  opacity: 0.03;
  pointer-events: none;
}

.page-background [id^="morse-"] {
  animation: subtle-pulse 4s ease-in-out infinite;
  animation-delay: calc(var(--morse-index) * 0.3s);
}

@keyframes subtle-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .page-background [id^="morse-"] {
    animation: none;
    opacity: 0.5;
  }
}
```

### 10.8 CSS Custom Properties API

All frame colors are controlled via CSS custom properties for maximum flexibility:

```css
:root {
  /* Frame structure */
  --frame-color: #2d261f;
  --frame-stroke-width: 3;
  
  /* Morse elements */
  --morse-color: #6b5a4a;
  --morse-color-active: #cd7f32;
  --morse-pulse-duration: 200ms;
  
  /* Labels */
  --label-cr-color: #8b0000;
  --label-bq-color: #6b5a4a;
  
  /* Conservation status colors */
  --status-critical: #8b0000;
  --status-endangered: #cc4400;
  --status-vulnerable: #cc8800;
  --status-near: #999900;
  --status-concern: #4a7c59;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --frame-color: #a99685;
    --morse-color: #8a7766;
  }
}
```

### 10.9 Frame Library

| Frame ID | Motif | Use Cases | Status |
|----------|-------|-----------|--------|
| `frame-sos` | Morse S.O.S. + CR/BQ | Loading, transitions, overlays, ambient | ✅ COMPLETE |
| `frame-minimal` | Simple border | Standard gallery cards | ⬜ TODO |
| `frame-extinction` | Broken/fractured | Recently extinct memorial | ⬜ TODO |
| `frame-success` | Growth/flourish | Conservation wins | ⬜ TODO |
| `frame-keystone` | Interlocking | Keystone species | ⬜ TODO |
| `frame-migration` | Flow/arrows | Migratory species | ⬜ TODO |

### 10.10 Performance Guidelines

```
DO:
─────────────────────────────────────────────────────────────────
✓ Keep path count under 100 elements
✓ Use CSS animations where possible (GPU-accelerated)
✓ Use will-change sparingly and remove after animation
✓ Inline critical frame SVGs for loading screen
✓ Use <use href="..."> for repeated frames
✓ Test at 60fps on mid-range devices
✓ Provide skip option for loading animations
✓ Respect prefers-reduced-motion

DON'T:
─────────────────────────────────────────────────────────────────
✗ Animate complex paths (frame border is ONE path for a reason)
✗ Use JavaScript for animations CSS can handle
✗ Block interaction during non-essential animations
✗ Exceed 5s for loading sequences (aim for 3-4s)
✗ Forget mobile performance testing
✗ Use filters (blur, drop-shadow) during animation
```

### 10.11 Morse Code Reference

```
BEASTIQUE MORSE VOCABULARY:
─────────────────────────────────────────────────────────────────
S.O.S.  · · · — — — · · ·    Save Our Species (distress signal)
CR      — · — ·  · — ·        Critically Endangered
EN      ·  — ·                Endangered
VU      · · · —  · · —        Vulnerable
NT      — ·  —                Near Threatened
LC      · — · ·  — · — ·      Least Concern
BQ      — · · ·  — — · —      BEASTIQUE
EX      ·  — · · —            Extinct

STANDARD TIMING:
─────────────────────────────────────────────────────────────────
Dot (dit):     1 unit  │  Animation: 150-200ms
Dash (dah):    3 units │  Animation: 450-600ms
Intra-char:    1 unit  │  Gap between dots/dashes in letter
Inter-char:    3 units │  Gap between letters
Inter-word:    7 units │  Gap between words
```

---

## 11. Implementation Roadmap

### 11.1 Phase 1: Foundation (Current)

**Status:** COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| Blueprint document | ✅ COMPLETE | This document |
| JSON schema finalization | ✅ COMPLETE | See Section 6 |
| Art pipeline documentation | ✅ COMPLETE | See Section 5 |
| Front end architecture | ✅ COMPLETE | See Section 8 |
| Visual style guide | ✅ COMPLETE | See Section 9 |
| Asset inventory | ✅ COMPLETE | 470 images catalogued |
| Image manifest | ✅ COMPLETE | beastique-image-manifest.yaml |
| Folder structure defined | ✅ COMPLETE | 52 subcategories mapped |

### 11.2 Phase 2: Data Population

**Status:** READY TO BEGIN

**Scope:** Create species JSON entries for 470 artwork images

| Task | Status | Est. Time | Notes |
|------|--------|-----------|-------|
| Create JSON template generator | ⬜ TODO | 2 hours | Python script |
| Mammalian entries (247) | ⬜ TODO | ~80 hours | Largest category |
| Avian entries (96) | ⬜ TODO | ~32 hours | |
| Reptilian entries (62) | ⬜ TODO | ~21 hours | |
| Aquatic entries (39) | ⬜ TODO | ~13 hours | |
| Insecta entries (39) | ⬜ TODO | ~13 hours | |
| Amphibian entries (7) | ⬜ TODO | ~2 hours | |
| Arachnid entries (5) | ⬜ TODO | ~2 hours | |
| Validate all entries | ⬜ TODO | ~8 hours | Schema validation |
| **TOTAL** | | **~173 hours** | |

**Per-Species Workflow:**

1. Research conservation data (15-30 min)
2. Write narrative (15-30 min)
3. Populate JSON fields (10-15 min)
4. Validate and review (5-10 min)

**Priority Order:**

1. Critically Endangered species first
2. Flagship/charismatic species
3. Fill by category completion

### 11.3 Phase 3: Gallery Implementation

| Task | Status | Notes |
|------|--------|-------|
| Choose web framework | ⬜ TODO | Static site vs. CMS |
| Design gallery UI | ⬜ TODO | |
| Implement species pages | ⬜ TODO | |
| Build category views | ⬜ TODO | |
| Build special galleries | ⬜ TODO | |
| Search/filter functionality | ⬜ TODO | |
| Mobile responsiveness | ⬜ TODO | |

### 11.4 Phase 4: Content Expansion

| Task | Status | Notes |
|------|--------|-------|
| Identify species gaps | ⬜ TODO | Key species without art |
| Generate new art | ⬜ TODO | Ongoing |
| Commission materials | ⬜ TODO | If needed |
| Quarterly data refresh | ⬜ TODO | Ongoing maintenance |

---

## 12. Asset Inventory

### 12.1 Two-Tier Asset System

```
BEASTIQUE ASSET TIERS
═══════════════════════════════════════════════════════════════

TIER 1: FLAGSHIP COLLECTION (~40 pieces)
────────────────────────────────────────────────────────────────
  • Full BEASTIQUE artisan treatment
  • Custom SVG frames (hand-crafted, 2,000-5,000+ lines each)
  • Custom gradients, textures, filters
  • Hours to DAYS of Inkscape work per piece
  • Source: .svg files (vault/archive only)
  • Web: .png exports (97 DPI + 300 DPI print)
  • Status: CROWN JEWELS — homepage features, hero images

TIER 2: STANDARD COLLECTION (470 images)
────────────────────────────────────────────────────────────────
  • Dall-E generated + preprocessing
  • Quality artwork, organized by taxonomy
  • Source: .png files
  • Web: .png (optimized WebP/AVIF versions)
  • Status: Gallery backbone — category browsing, species pages

═══════════════════════════════════════════════════════════════
```

### 12.2 Why SVG Source Files Stay in the Vault

The flagship SVG files (like the Bronze Wild Turkey, Horse, etc.) are:

| Concern | Reality |
|---------|---------|
| **File Size** | 2,000-5,000+ lines of XML per piece |
| **Complexity** | Hundreds of gradient definitions, path elements |
| **Browser Rendering** | Inconsistent across browsers, potential choking |
| **Load Time** | Unacceptable for web delivery |
| **Manipulation** | Way too cumbersome for any browser-based interaction |

**Solution:** SVG is the *source format* (like a .psd or .ai file). PNG exports are the *delivery format*.

```
FLAGSHIP WORKFLOW:
────────────────────────────────────────────────────────────────
[Inkscape SVG]  →  [Export PNG 97 DPI]   →  [Web Gallery]
    (vault)              ↓
                 [Export PNG 300 DPI]  →  [Print/Archive]
```

### 12.3 Flagship Collection Inventory (~40 pieces)

| # | Species | Material | Category | Hours | Status |
|---|---------|----------|----------|-------|--------|
| 01 | Wild Turkey | Bronze | Aves | 8+ | ✅ COMPLETE |
| 02 | Horse | [TBD] | Mammalia | 8+ | ✅ COMPLETE |
| ... | ... | ... | ... | ... | ... |

*[To be filled with complete flagship inventory]*

### 12.4 Standard Collection Statistics

```
STANDARD COLLECTION (470 images)
═══════════════════════════════════════════════════════════════
Last Updated: December 2025
═══════════════════════════════════════════════════════════════

BY PRIMARY CATEGORY:
────────────────────────────────────────────────────────────────
  Mammalian Beasts    247  ████████████████████████████████ 52.6%
  Avian Beasts         96  █████████████                    20.4%
  Reptilian Beasts     62  ████████                         13.2%
  Aquatic Beasts       39  █████                             8.3%
  Insecta Beasts       39  █████                             8.3%
  Amphibian Beasts      7  █                                 1.5%
  Arachnid Beasts       5  █                                 1.1%
────────────────────────────────────────────────────────────────
```

### 12.5 Detailed Subcategory Breakdown

#### MAMMALIAN BEASTS (247 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Carnivora | 84 | Tigers (5), Bears (9), Wolves (6), Leopards (4), Lions (3) |
| Ungulates | 79 | Giraffes (5), Zebras (4), Rhinos (5), Okapis (4), Tapirs (4) |
| Other Mammals | 20 | Armadillos (3), Anteaters (2), Hares (6), Platypus, Echidna |
| Primates | 16 | Gorillas (2), Orangutans, Lemurs (2), Spider Monkeys (2) |
| Marsupials | 11 | Koala, Kangaroo, Wombat, Quokka, Quoll, Potoroos (3) |
| Rodents | 11 | Capybara, Beaver, Chinchilla, Porcupine, Squirrels |
| Cetaceans | 10 | Blue Whale, Humpback, Dolphins (3), Vaquita |
| Marine Mammals | 6 | Walrus, Manatee, Dugong, Seals (3) |
| Elephants | 3 | African (2), Asian |
| Bats | 2 | Flying Foxes (2) |

#### AVIAN BEASTS (96 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Raptors | 21 | Eagles (7), Falcons (2), Vultures (3), Hawks (3), Condor |
| Seabirds | 11 | Terns (3), Albatross, Petrel, Pelican, Booby |
| Songbirds | 10 | Robin, Warbler, Grosbeak, Cock-of-the-rock |
| Wading Birds | 9 | Cranes (2), Sandpipers (4), Shoebill, Jabiru |
| Waterfowl | 8 | Swan, Geese, Ducks (5), Coot |
| Gamebirds | 7 | Turkey, Peacock, Pheasant, Grouse, Ptarmigan |
| Owls | 6 | Great Horned (2), Snowy, Scops Owls (2) |
| Other Birds | 6 | Kingfisher, Roadrunner, Hummingbird, Woodpecker |
| Flightless | 5 | Penguins (2), Kiwis (2), Ostrich |
| Parrots | 2 | African Grey (2) |

#### REPTILIAN BEASTS (62 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Snakes | 25 | Cobras (3), Rattlesnakes (6), Pythons (3), Vipers (2) |
| Lizards | 15 | Komodo Dragons (2), Monitors (4), Chameleon, Geckos (3) |
| Turtles & Tortoises | 7 | Galápagos (2), Tortoises (3), River Turtle, Slider |
| Crocodilians | 5 | Saltwater (2), Nile (2), Crocodile |
| Marine Reptiles | 5 | Sea Turtles (4), Sea Snake |

#### AQUATIC BEASTS (39 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Coral Reef | 8 | Clownfish (2), Seahorses (2), Lionfish, Pufferfish |
| Sharks | 7 | Great White (2), Hammerhead (2), Bull Shark (2) |
| Bony Fish - Marine | 5 | Marlin (2), Tuna, Halibut, Mahi-Mahi |
| Bony Fish - Freshwater | 5 | Electric Eel, Tigerfish, Barramundi, Catfish |
| Rays & Skates | 4 | Manta Rays (3), Guitarfish |
| Other Aquatic | 3 | Krill, Shrimp, Bobbit Worm |
| Deep Sea | 1 | Anglerfish |
| Migratory | 1 | Chinook Salmon |
| Ancient Fish | 1 | Beluga Sturgeon |

#### INSECTA BEASTS (39 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Butterflies & Moths | 13 | Monarch, Atlas Moth (2), Swallowtails (3), Hawkmoth |
| Bees & Wasps | 8 | Honeybee, Mason Bees (2), Hornets, Wasps (2) |
| Beetles | 7 | Weevils (2), Ladybug, June Bug, Pine Beetle |
| Other Insects | 7 | Mantis, Cockroaches (2), Walking Leaf, Lanternfly |
| Ants | 2 | Carpenter Ant, Fire Ant |
| Dragonflies | 1 | Eastern Amberwing |
| Crickets & Grasshoppers | 1 | Northern Mole Cricket |

#### ARACHNID BEASTS (5 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Spiders | 3 | Brown Recluse, Garden Spider |
| Scorpions | 1 | Scorpion |
| Ticks & Mites | 1 | Mule Deer Tick |

#### AMPHIBIAN BEASTS (7 images)

| Subcategory | Count | Notable Species |
|-------------|-------|-----------------|
| Frogs & Toads | 7 | Golden Poison Dart Frog (3), Fowler's Toad, Tree Frogs (2) |

### 12.6 Directory Structure

```
assets/
├── flagship/                       # TIER 1: ~40 custom masterpieces
│   ├── source/                     # SVG vault (DO NOT SERVE TO WEB)
│   │   ├── horse.svg                   # 5,000+ lines
│   │   ├── wild-turkey-bronze.svg      # 4,000+ lines
│   │   └── ...
│   ├── web/                        # PNG exports (97 DPI)
│   │   ├── horse.png
│   │   ├── wild-turkey-bronze.png
│   │   └── ...
│   └── print/                      # PNG exports (300 DPI)
│       ├── horse_print.png
│       ├── wild-turkey-bronze_print.png
│       └── ...
│
└── collections/                    # TIER 2: 470 standard images
    ├── mammalian-beasts/           # 247 images
    │   ├── carnivora/artworks/         # 84
    │   ├── ungulates/artworks/         # 79
    │   ├── primates/artworks/          # 16
    │   ├── cetaceans/artworks/         # 10
    │   ├── marsupials/artworks/        # 11
    │   ├── marine-mammals/artworks/    # 6
    │   ├── rodents/artworks/           # 11
    │   ├── bats/artworks/              # 2
    │   ├── elephants/artworks/         # 3
    │   └── other-mammals/artworks/     # 20
    │
    ├── avian-beasts/               # 96 images
    │   ├── raptors/artworks/           # 21
    │   ├── owls/artworks/              # 6
    │   ├── songbirds/artworks/         # 10
    │   ├── waterfowl/artworks/         # 8
    │   ├── seabirds/artworks/          # 11
    │   ├── flightless/artworks/        # 5
    │   ├── wading-birds/artworks/      # 9
    │   ├── gamebirds/artworks/         # 7
    │   ├── parrots/artworks/           # 2
    │   └── other-birds/artworks/       # 6
    │
    ├── reptilian-beasts/           # 62 images
    │   ├── snakes/artworks/            # 25
    │   ├── lizards/artworks/           # 15
    │   ├── turtles-tortoises/artworks/ # 7
    │   ├── crocodilians/artworks/      # 5
    │   └── marine-reptiles/artworks/   # 5
    │
    ├── aquatic-beasts/             # 39 images
    │   ├── sharks/artworks/            # 7
    │   ├── rays-skates/artworks/       # 4
    │   ├── bony-fish-marine/artworks/  # 5
    │   ├── bony-fish-freshwater/artworks/ # 5
    │   ├── coral-reef/artworks/        # 8
    │   ├── deep-sea/artworks/          # 1
    │   ├── migratory/artworks/         # 1
    │   ├── ancient-fish/artworks/      # 1
    │   └── other-fish/artworks/        # 3
    │
    ├── insecta-beasts/             # 39 images
    │   ├── butterflies-moths/artworks/ # 13
    │   ├── beetles/artworks/           # 7
    │   ├── bees-wasps/artworks/        # 8
    │   ├── ants/artworks/              # 2
    │   ├── dragonflies/artworks/       # 1
    │   ├── crickets-grasshoppers/artworks/ # 1
    │   └── other-insects/artworks/     # 7
    │
    ├── arachnid-beasts/            # 5 images
    │   ├── spiders/artworks/           # 3
    │   ├── scorpions/artworks/         # 1
    │   └── ticks-mites/artworks/       # 1
    │
    └── amphibian-beasts/           # 7 images
        └── frogs-toads/artworks/       # 7
```

### 12.7 Asset Naming Convention

```
{###}_{common_name}_{material}
001_wild_turkey_bronze
002_horse_copper
003_monarch_butterfly_stained_glass
```

### 12.8 Asset Status Codes

| Code | Tier | Meaning |
|------|------|---------|
| SOURCE | Both | Raw Dall-E output / Working SVG |
| PROCESSED | Tier 2 | Preprocessing complete (PNG) |
| FRAMED | Tier 1 | Inkscape treatment complete (SVG) |
| EXPORTED | Both | Web + print exports done |
| COMPLETE | Both | Full JSON entry created |

---

## 13. Quality Standards

### 13.1 Image Quality Checklist

- [ ] Animal anatomy is correct
- [ ] Material integration looks natural, not forced
- [ ] No cracked, broken, or damaged appearance
- [ ] Creature appears elevated and majestic
- [ ] Composition is balanced
- [ ] Frame complements (doesn't overwhelm) the image
- [ ] Color harmony between image and frame
- [ ] Web export is sharp at display size
- [ ] Print export is crisp at 300 DPI

### 13.2 Data Quality Checklist

- [ ] IUCN status is current (within 2 years)
- [ ] Population data has source citation
- [ ] All threats are specific (not generic)
- [ ] At least one quantified threat detail
- [ ] Range description is accurate
- [ ] Habitat description matches species
- [ ] All sources array entries are complete

### 13.3 Narrative Quality Checklist

- [ ] Opens with arresting hook
- [ ] Connects material to extraction
- [ ] Includes at least one remarkable biological fact
- [ ] Contains hard data (numbers, percentages)
- [ ] Closes with accountability framing
- [ ] Avoids forbidden language (see 4.4)
- [ ] Minimum 200 words
- [ ] No passive voice in key statements

---

## 14. Technical Specifications

### 14.1 Image Specifications

| Spec | Web Version | Print Version |
|------|-------------|---------------|
| Resolution | 97 DPI | 300 DPI |
| Dimensions | 1792 × 1024 px | 1792 × 1024 px (scales for print) |
| Format | PNG-24 | PNG-24 |
| Color Space | sRGB | sRGB (or Adobe RGB for print) |
| Alpha Channel | Yes | Yes |
| Max File Size | 5 MB | No limit |

### 14.2 Software Requirements

| Tool | Version | Purpose |
|------|---------|---------|
| Inkscape | 1.3+ | Frame design, SVG work, final treatment |
| GIMP | 2.10+ | Image preprocessing, enhancement |
| Python | 3.11+ | Scripting, automation |
| Dall-E | 3 or 4 | Image generation |

### 14.3 File Formats

| Extension | Use Case |
|-----------|----------|
| .webp | Dall-E output (source) |
| .png | All processed and final images |
| .svg | Frame templates, scalable assets |
| .json | Species data entries |
| .md | Documentation |
| .py | Scripts and tools |

---

## 15. Distribution Strategy

### 15.1 Primary Channels

| Channel | Content Type | Frequency |
|---------|--------------|-----------|
| Web Gallery | Full species profiles | Ongoing additions |
| Social Media | Single images + quick facts | Weekly |
| Print | High-quality prints | On demand |
| Educational | Lesson plans, presentations | Quarterly |

### 15.2 Social Media Formats

| Platform | Image Size | Caption Length | Hashtags |
|----------|------------|----------------|----------|
| Instagram | 1080×1080 (square crop) | 2200 char max | 15-20 |
| Twitter/X | 1200×675 | 280 char | 3-5 |
| Facebook | 1200×630 | Long-form OK | 3-5 |
| Pinterest | 1000×1500 (vertical) | 500 char | N/A |

### 15.3 Licensing

**Default License:** Creative Commons BY-NC-SA 4.0

- Attribution required
- Non-commercial use
- Share-alike for derivatives
- Commercial licensing available on request

---

## Appendix A: Quick Reference Commands

```bash
# Preprocessing an image
python tools/image_processor.py --input source/image.webp --output processed/image.png

# Validating a species JSON
python tools/schema_validator.py --input data/species/monarch_butterfly.json

# Generating random prompts
python tools/prompt_randomizer.py --animals lists/animals.txt --materials lists/materials.txt --output prompts/batch_001.txt

# Batch export from Inkscape (CLI)
inkscape --export-type=png --export-dpi=97 --export-filename=web/image.png source.svg
inkscape --export-type=png --export-dpi=300 --export-filename=print/image.png source.svg
```

---

## Appendix B: Material Categories

### Precious Metals

Gold, Silver, Platinum, Palladium

### Industrial Metals  

Copper, Bronze, Brass, Steel, Iron, Titanium, Aluminum

### Volcanic/Mineral

Obsidian, Basalt, Granite, Quartz, Marble

### Gemstones

Ruby, Emerald, Sapphire, Opal, Jade, Onyx

### Glass/Ceramic

Stained Glass, Murano Glass, Porcelain, Ceramic

### Organic Materials

Amber, Coral, Ivory (symbolic only), Wood types

### Modern Materials

Carbon Fiber, Graphene, Titanium Alloy, Polymer

---

## Appendix C: Threat Categories

### Direct Threats

- Hunting/Poaching
- Bycatch
- Wildlife trade
- Human-wildlife conflict
- Vehicle strikes

### Habitat Threats

- Deforestation
- Agricultural conversion
- Urban development
- Mining operations
- Dam construction

### Pollution Threats

- Pesticides/Herbicides
- Industrial pollution
- Plastic pollution
- Light pollution
- Noise pollution

### Climate Threats

- Temperature changes
- Precipitation shifts
- Sea level rise
- Ocean acidification
- Extreme weather events

### Biological Threats

- Invasive species
- Disease
- Loss of prey/food sources
- Genetic isolation

---

*︻デ═—··· 🎯 = Aim Twice, Shoot Once!*

**Document Version:** 1.0.0  
**Last Updated:** Friday, December 12, 2025  
**Status:** ACTIVE - Master Reference Document
