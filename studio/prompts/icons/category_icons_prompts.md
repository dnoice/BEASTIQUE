<!--
✒ Metadata
    - Title: Category Icon Prompt Library (BEASTIQUE Edition - v1.2)
    - File Name: category_icons_prompts.md
    - Relative Path: studio/prompts/icons/category_icons_prompts.md
    - Artifact Type: data
    - Version: 1.2.0
    - Date: 2026-07-09
    - Update: Thursday, July 09, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.2.0 (2026-07-09) [Anthropic - Claude Fable 5] — Six marks re-voiced
      after the full 30-piece curation review flagged them as cartoonish or
      stock (AQU-101, MAM-101, MAM-103, INS-103, REP-101, REP-103). The
      failures were prompt-authored: MAM-101 asked for "two dot eyes",
      REP-103 for a "gentle comma" gecko. All six now carry the heraldic
      re-voice — "austere, heraldic, gallery-grade, never cute, never
      mascot-like" — with negatives banning dot eyes, mascot look,
      children's-book cuteness, clip-art, and tattoo flash. The nine
      unflagged marks (all five crests, all avian, insecta sigil, aquatic
      crest/glyph) are untouched.
    - 1.1.0 (2026-07-08) [Anthropic - Claude Fable 5] — AQU-103 rewritten
      after first render review: the "sweeping double-curve" abstraction
      rendered as a mustache. Now anchored to top-down manta anatomy
      (diamond body, cephalic fins, trailing tail) with "no mustache shape,
      no side profile" in the negative. Review verdict on the first eight
      renders: the other seven landed on-brief.
    - 1.0.0 (2026-07-07) [Anthropic - Claude Fable 5] — Initial 15-prompt
      library (Sigil/Crest/Glyph × five categories).

✒ Description:
    Fifteen logo-icon prompts — three emblem types for each of the five
    BEASTIQUE categories — authored for the forge --style silhouette path.
    These are brand marks, not species portraits: category identity distilled
    into flat, vector-traceable emblems for the Archive portals, nav, badges,
    and favicons. Ids are BQ-SILH-<CLASS>-1xx (the 100 block), clear of every
    species library so the shared silhouette ledger never collides.

✒ Key Features:
    - One system, three voices per category: Sigil (101) — the flagship beast
      in a circular museum-seal ring; Crest (102) — a geometric badge built
      from the category's habitat element with animal negative space;
      Glyph (103) — the category reduced to one minimal mark that reads at 16px.
    - Silhouette style DNA throughout: solid black on pure white, flat, one
      confident shape language, traceable to clean fillable paths.
    - Square 1024x1024 canvas intent — run the forge with --size 1024x1024.
    - Per-entry record: type, slug, output stem, prompt + folded negative.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.8+.
    - Output routes by class code: studio/collections/<gallery>-beasts/
      silhouette/<quality>/ ; trace with tools/bq_linocut_trace.py.
    - Keepers graduate to site/assets/logos/ as web derivatives.
---------
-->

# BEASTIQUE — Category Icon Prompt Library

Fifteen logo-icon prompts: three emblem types × five categories. Brand marks
for the Archive wings — not portraits, *insignia*.

## The Three Types (system DNA)

- **101 · The Sigil** — the category's flagship beast, solid black, enclosed in
  a bold circular seal ring. Museum-stamp authority. Favicon-ready.
- **102 · The Crest** — a geometric badge (shield or hexagon) built from the
  category's habitat element, with the animal carried in white negative space.
- **103 · The Glyph** — the whole category distilled to a single minimal mark.
  One continuous shape. Must read at 16 pixels.

## House Icon Spec (style DNA)

- **Solid black on pure white.** Flat vector language — no gradients, no
  grayscale, no texture, no 3D, no photorealism.
- **Centered, generous margin.** The mark floats with clear space on all
  sides; nothing touches the canvas edge.
- **Trace-clean.** Crisp edges, deliberate curves, minimal node count —
  destined for Potrace and then SVG duty across the site.

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-SILH-<CLS>-1<NN>` | `BQ-SILH-AQU-101` |
| Raster out | `<slug>_silhouette-bw_01.png` | `aquatic-icon-sigil_silhouette-bw_01.png` |
| Vector out | `<slug>_silhouette-bw_01.svg` | `aquatic-icon-sigil_silhouette-bw_01.svg` |

---

## Aquatic — Guardians of the Deep

### BQ-SILH-AQU-101 · Aquatic Sigil — Whale Fluke Seal

Category emblem · type sigil · slug `aquatic-icon-sigil` · output `aquatic-icon-sigil_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a circular museum-seal emblem for an ocean-life collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, heraldic, gallery-grade, never cute, never mascot-like. Inside a bold solid-black circular ring, a great whale tail fluke rises SOLID BLACK from a calm horizontal waterline, its trailing edge subtly notched and asymmetric like a real fluke mid-dive; below the waterline, two thin concentric ripple arcs — nothing else. Monumental composure, thick confident shapes, generous white margin around the ring. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible as a favicon at 32 pixels.
Negative prompt: no water drops, no teardrops, no droplets, no splash, no cartoon style, no mascot look, no children's-book cuteness, no clip-art, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no thin fragile linework, no scene, no sky, no fish school, no text, no letters, no watermark, no border beyond the seal ring, no blurry edges.
```

### BQ-SILH-AQU-102 · Aquatic Crest — Wave Shield

Category emblem · type crest · slug `aquatic-icon-crest` · output `aquatic-icon-crest_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a geometric heraldic shield badge for an ocean-life collection, centered on a PURE WHITE background. The shield is built from three bold solid-black stacked wave bands with clean scalloped crests, and a shark dorsal fin reads in WHITE NEGATIVE SPACE cutting up through the top wave band. Simple shield silhouette, flat graphic language, thick shapes, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no ornate heraldry flourishes, no thin linework, no scene, no whole shark body, no text, no letters, no watermark, no outer border, no blurry edges.
```

### BQ-SILH-AQU-103 · Aquatic Glyph — Manta From Above

Category emblem · type glyph · slug `aquatic-icon-glyph` · output `aquatic-icon-glyph_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: an ultra-minimal glyph for an ocean-life collection, centered on a PURE WHITE background. One SOLID BLACK manta ray seen directly FROM ABOVE, unmistakably a manta: a broad diamond-shaped body with two wide triangular pectoral wings swept back like a delta, two small forward-pointing cephalic fins at the head like short horns, and one slender straight tail trailing behind. Symmetrical along its length, gliding pose. Nothing else on the canvas. Absolute economy, one closed shape, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to a single fillable path, legible at 16 pixels.
Negative prompt: no mustache shape, no side profile, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no eyes, no gill detail, no spots, no second animal, no waterline, no waves, no scene, no text, no letters, no watermark, no border, no blurry edges.
```

---

## Avian — Voices of the Vanishing Sky

### BQ-SILH-AVI-101 · Avian Sigil — Raptor Head Seal

Category emblem · type sigil · slug `avian-icon-sigil` · output `avian-icon-sigil_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a circular museum-seal emblem for a bird-life collection, centered on a PURE WHITE background. Inside a bold solid-black circular ring, a noble eagle head in left-facing profile rendered SOLID BLACK — the hooked raptor bill, the proud brow, and the neck feather edge stepped into three clean points. The eye is a single round WHITE negative-space dot. Strong, dignified, thick confident shapes, generous white margin around the ring. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible as a favicon at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no feather-by-feather detail, no thin linework, no full bird body, no scene, no sky, no text, no letters, no watermark, no border beyond the seal ring, no blurry edges.
```

### BQ-SILH-AVI-102 · Avian Crest — Wing Chevron Badge

Category emblem · type crest · slug `avian-icon-crest` · output `avian-icon-crest_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a geometric hexagonal badge for a bird-life collection, centered on a PURE WHITE background. Inside a bold solid-black hexagon, a spread wing of five clean stepped feather chevrons fans upward, and a small soaring bird reads in WHITE NEGATIVE SPACE above the wing. Flat graphic language, precise geometry, thick shapes, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no ornate detail, no thin fragile linework, no clouds, no scene, no text, no letters, no watermark, no outer border beyond the hexagon, no blurry edges.
```

### BQ-SILH-AVI-103 · Avian Glyph — Feather Quill

Category emblem · type glyph · slug `avian-icon-glyph` · output `avian-icon-glyph_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: an ultra-minimal glyph for a bird-life collection, centered on a PURE WHITE background. One single SOLID BLACK feather, gently curved like a quill, its vane split by one clean diagonal WHITE notch near the tip and its shaft tapering to a fine point. Nothing else on the canvas. Absolute economy, one closed elegant shape, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to a single fillable path, legible at 16 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no barb-by-barb detail, no second feather, no bird, no scene, no text, no letters, no watermark, no border, no blurry edges.
```

---

## Insecta — The Invisible Architecture of Life

### BQ-SILH-INS-101 · Insecta Sigil — Monarch Seal

Category emblem · type sigil · slug `insecta-icon-sigil` · output `insecta-icon-sigil_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a circular museum-seal emblem for an insect-life collection, centered on a PURE WHITE background. Inside a bold solid-black circular ring, a perfectly symmetrical butterfly with wings spread rendered SOLID BLACK, the wing panels divided by three clean WHITE negative-space veins per wing, slender body and two simple curved antennae. Mirror symmetry, thick confident shapes, generous white margin around the ring. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible as a favicon at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no lace-fine wing detail, no thin fragile linework, no flowers, no scene, no text, no letters, no watermark, no border beyond the seal ring, no blurry edges.
```

### BQ-SILH-INS-102 · Insecta Crest — Honeycomb Badge

Category emblem · type crest · slug `insecta-icon-crest` · output `insecta-icon-crest_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a geometric badge for an insect-life collection, centered on a PURE WHITE background. A cluster of seven bold solid-black honeycomb hexagons arranged in a flower pattern, with one clean bee read in WHITE NEGATIVE SPACE inside the center cell — simple wings, banded abdomen reduced to two white stripes. The architecture IS the badge. Flat graphic language, precise geometry, thick shapes, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no honey drips, no thin linework, no flowers, no scene, no text, no letters, no watermark, no outer border, no blurry edges.
```

### BQ-SILH-INS-103 · Insecta Glyph — Scarab Mark

Category emblem · type glyph · slug `insecta-icon-glyph` · output `insecta-icon-glyph_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: an ultra-minimal glyph for an insect-life collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, gallery-grade, never cute, never mascot-like: an EGYPTIAN SACRED SCARAB with the authority of a carved amulet in a museum case. One compact SOLID BLACK scarab seen from above with true scarab architecture: a serrated crescent clypeus at the head, a clean trapezoidal pronotum, the elytra split by one WHITE center seam and squared at the shoulders, and six angular sculpted legs — forelegs raked forward, hind legs swept back — carved, not doodled. Nothing else on the canvas. Absolute economy, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 16 pixels.
Negative prompt: no ladybug roundness, no blob body, no stick legs, no pest-control-logo look, no cartoon style, no mascot look, no clip-art, no rounded toy-like shapes, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no antennae clutter, no second insect, no scene, no text, no letters, no watermark, no border, no blurry edges.
```

---

## Mammalian — Bloodlines Running Out

### BQ-SILH-MAM-101 · Mammalian Sigil — Lion Mane Seal

Category emblem · type sigil · slug `mammalian-icon-sigil` · output `mammalian-icon-sigil_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a circular museum-seal emblem for a mammal collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, heraldic, gallery-grade, never cute, never mascot-like. Inside a bold solid-black circular ring, a front-facing heraldic lion head rendered SOLID BLACK in the tradition of venetian and bank-crest lions: the mane a stern radiating crown of thick asymmetric flame-tongues, the face carved by a few severe WHITE negative-space cuts — a heavy lowered brow shadowing narrowed eyes, a strong wedge nose, a grave closed mouth — dignified and fierce, never friendly. Regal weight, thick confident shapes, generous white margin around the ring. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible as a favicon at 32 pixels.
Negative prompt: no dot eyes, no round friendly face, no teddy-bear muzzle, no smiling, no cartoon style, no mascot look, no children's-book cuteness, no clip-art, no perfect daisy-petal symmetry, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no fur strand detail, no whiskers, no thin linework, no full body, no scene, no text, no letters, no watermark, no border beyond the seal ring, no blurry edges.
```

### BQ-SILH-MAM-102 · Mammalian Crest — Elephant Shield

Category emblem · type crest · slug `mammalian-icon-crest` · output `mammalian-icon-crest_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a geometric heraldic shield badge for a mammal collection, centered on a PURE WHITE background. The solid-black shield's own outline IS the animal: a front-facing elephant head where two broad spread ears form the shield's shoulders and the trunk descends as the shield's pointed base, tusks reading as two clean WHITE negative-space crescents. Flat graphic language, monumental symmetry, thick shapes, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no wrinkle detail, no thin linework, no full body, no savanna, no scene, no text, no letters, no watermark, no outer border, no blurry edges.
```

### BQ-SILH-MAM-103 · Mammalian Glyph — Paw Mark

Category emblem · type glyph · slug `mammalian-icon-glyph` · output `mammalian-icon-glyph_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: an ultra-minimal glyph for a mammal collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, field-guide authoritative, gallery-grade, never cute, never mascot-like. One SOLID BLACK big-cat track as a naturalist would record it pressed into earth mid-stride: a broad three-lobed pad with its true scalloped base, four toes of subtly unequal size and spacing set in a natural asymmetric arc, the whole print tilted a few degrees off vertical like a genuine trackway impression — anatomy observed, not a symmetrical sticker. Nothing else on the canvas. Absolute economy, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 16 pixels.
Negative prompt: no perfect symmetry, no pet-store logo look, no cartoon style, no mascot look, no clip-art, no rounded toy-like shapes, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no claws, no fifth toe, no second print, no trail of prints, no heart shapes, no scene, no text, no letters, no watermark, no border, no blurry edges.
```

---

## Reptilian — Ancient Scales, Modern Graves

### BQ-SILH-REP-101 · Reptilian Sigil — Coiled Serpent Seal

Category emblem · type sigil · slug `reptilian-icon-sigil` · output `reptilian-icon-sigil_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a circular museum-seal emblem for a reptile collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, heraldic, gallery-grade, never cute, never mascot-like. Inside a bold solid-black circular ring, a serpent coiled in one elegant SOLID BLACK spiral of two and a half turns, the coil tapering with true snake anatomy, the head rising at the center as a clean featureless strike-ready wedge — no eye, no tongue, no face at all; the menace lives entirely in the coil and the poised head. Ancient, deliberate, thick confident shapes, generous white margin around the ring. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible as a favicon at 32 pixels.
Negative prompt: no eye dot, no tongue, no face, no smiling, no cartoon style, no mascot look, no children's-book cuteness, no clip-art, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no scale-by-scale detail, no thin fragile linework, no fangs, no ouroboros tail-eating, no scene, no text, no letters, no watermark, no border beyond the seal ring, no blurry edges.
```

### BQ-SILH-REP-102 · Reptilian Crest — Turtle Shell Badge

Category emblem · type crest · slug `reptilian-icon-crest` · output `reptilian-icon-crest_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: a geometric badge for a reptile collection, centered on a PURE WHITE background. A sea-turtle shell viewed from above as the badge itself: a bold solid-black domed oval divided by clean WHITE negative-space seams into a central column of large hexagonal scutes flanked by side plates — the shell reading as a natural shield. Four simple flipper tips and a small head emerge as minimal black shapes. Flat graphic language, ancient armor geometry, thick shapes, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to clean fillable paths, legible at 32 pixels.
Negative prompt: no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no barnacles, no thin linework, no water, no scene, no text, no letters, no watermark, no outer border, no blurry edges.
```

### BQ-SILH-REP-103 · Reptilian Glyph — Gecko Curl

Category emblem · type glyph · slug `reptilian-icon-glyph` · output `reptilian-icon-glyph_silhouette-bw_01.{png,svg}`

```text
Design a flat LOGO ICON: an ultra-minimal glyph for a reptile collection, centered on a PURE WHITE background, in the manner of a master brand mark — austere, gallery-grade, never cute, never mascot-like. One single SOLID BLACK gecko seen from above in a natural asymmetric wall-climbing gait: body in a gentle S-flex, opposite legs advanced the way a real gecko climbs, each foot a fan of distinct slender toe pads, the tail trailing in one confident tapering sweep — anatomy observed like a field-guide plate, not a souvenir. Nothing else on the canvas. Absolute economy, one closed shape, generous white margin. Flat vector mark, high contrast, crisp edges, traceable to a single fillable path, legible at 16 pixels.
Negative prompt: no tribal tattoo look, no tourist-souvenir gecko, no curled comma pose, no ball-tipped toes, no curly-Q tail, no cartoon style, no mascot look, no clip-art, no rounded toy-like shapes, no photorealism, no 3D, no gradients, no grayscale, no color, no texture, no eyes, no scales, no second animal, no leaf, no scene, no text, no letters, no watermark, no border, no blurry edges.
```
