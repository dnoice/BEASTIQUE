<!--
✒ Metadata
    - Title: Ancient Beasts Collection README (BEASTIQUE Edition - v1.0)
    - File Name: README.md
    - Relative Path: collections/ancient-beasts/README.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2025-12-02
    - Update: Tuesday, December 02, 2025
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.5
    - Signature:  ︻デ═—··· 🎯 = Aim Twice, Shoot Once!

✒ Description:
    Documentation for the Ancient Beasts collection within the BEASTIQUE project.
    Contains organizational guidelines, subcategory breakdown, and contribution
    instructions for artists and data managers.
---------
-->

# 🦴 Ancient Beasts

> *Living fossils—species unchanged for millions of years, surviving everything except us.*

---

## Collection Overview

The **Ancient Beasts** collection contains BEASTIQUE artworks depicting endangered species
within this taxonomic grouping. Each piece transforms the subject into industrial
or precious materials, creating visual evidence of what humanity stands to lose.

## Subcategories

- `living-fossils/`
- `prehistoric-survivors/`
- `evolutionary-relics/`

## Directory Structure

```
ancient-beasts/
├── README.md                 # This file
├── _index.yaml              # Collection metadata and species index
├── artworks/                # Organized by subcategory
│   ├── [subcategory]/
│   │   └── [species-name]/
│   │       ├── [artwork files]
│   │       └── metadata.yaml
├── metadata/                # Aggregated metadata files
├── references/              # Research and reference materials
└── exports/                 # Generated exports (galleries, PDFs)
```

## Species Entry Requirements

Each species in this collection must include:

### Required Fields
- Common name
- Scientific name (binomial nomenclature)
- Conservation status (IUCN Red List)
- Geographic range
- Primary threats
- BEASTIQUE material transformation
- Narrative description (BEASTIQUE voice)

### Artwork Specifications
- **Resolution**: Minimum 4K (3840×2160)
- **Format**: PNG (primary), JPG (web)
- **Aspect Ratio**: 16:9 (preferred), 4:3, 1:1 acceptable
- **Color Space**: sRGB (web), Adobe RGB (print)

## Adding Species to This Collection

```bash
# Add via CLI tool
python tools/beastique_db_manager.py add

# Import from template
python tools/beastique_db_manager.py import species_template.yaml
```

## Quality Standards

All artworks must meet BEASTIQUE quality benchmarks:

- [ ] Hyper-realistic rendering
- [ ] Complete material transformation
- [ ] Species-accurate anatomy
- [ ] Research-verified habitat
- [ ] Physically accurate lighting
- [ ] BEASTIQUE narrative included

## Collection Statistics

*Auto-generated statistics will appear here once species are added.*

---

## Related Collections

Cross-reference species that appear in special collections:
- Endangered Beasts (priority collection)
- Polar Beasts (if applicable)
- Nocturnal Beasts (if applicable)
- Island Beasts (if applicable)

---

*BEASTIQUE - Visual Evidence from the Sixth Mass Extinction*

︻デ═—··· 🎯 = Aim Twice, Shoot Once!
