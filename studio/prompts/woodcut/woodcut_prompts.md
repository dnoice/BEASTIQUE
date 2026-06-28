<!--
✒ Metadata
    - Title: Woodcut / Engraving Prompt Library (BEASTIQUE Edition - v1.0)
    - File Name: woodcut_prompts.md
    - Relative Path: studio/prompts/woodcut/woodcut_prompts.md
    - Artifact Type: data
    - Version: 1.0.0
    - Date: 2026-06-26
    - Update: Friday, June 26, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.0.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Initial woodcut library:
      25 prompts, 5 per category, same species set as the low-poly and
      silhouette libraries, authored for the forge --style woodcut path.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "woodcut/engraving"
    house style: tone built from carved parallel-line hatching and cross-hatch
    in the manner of a vintage natural-history engraving — distinct from the
    bolder linocut relief look. Consumed by the forge with `--style woodcut`;
    ids are BQ-WOOD-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - Tone from line density (hatching/cross-hatching), not flat gray.
    - Same species set as low-poly and silhouette for cross-style comparison.
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.5.0+.
    - Output: studio/collections/<gallery>-beasts/woodcut/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py. Expect high node counts
      (hatching is line-dense) — like the linocut family.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Woodcut / Engraving Prompt Library

Twenty-five engraving prompts, five per category, tone carved from line work.

## House Woodcut Spec (style DNA)

- **Tone is line, not fill.** Build every value from carved parallel-line
  hatching and cross-hatching; bold solid-black shadow masses and white carved
  highlight lines. No flat gray.
- **Engraving feel.** Vintage natural-history / Dürer woodcut — fine clean
  directional lines that follow the animal's form.
- **Trace-ready.** Pure black on white, crisp closed lines, no stipple or
  noise. Expect higher node counts than silhouette or low-poly.

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-WOOD-<CLS>-<NUM>` | `BQ-WOOD-MAM-002` |
| Raster out | `<slug>_woodcut-bw_01.png` | `lion_woodcut-bw_01.png` |
| Vector out | `<slug>_woodcut-bw_01.svg` | `lion_woodcut-bw_01.svg` |

---

## Aquatic

### BQ-WOOD-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a blue whale in left-facing profile, gliding level, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — fine clean engraved lines, bold solid-black shadow masses, white carved highlights — never flat gray fills. Run dense directional hatch along the dark dorsal surface following the body's length, fading to open white along the belly; render the deep throat pleats as a fan of bold parallel grooves (the signature texture), and mark the flipper and fluke with a carved dark trailing edge. Pure black ink on pure white, high contrast, closed forms, crisp carved lines following the form, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AQU-002 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a great white shark in left-facing profile, jaws slightly open, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Run dense cross-hatch across the dark dorsal countershading, leaving the belly open white with sparse contour lines; carve the gill slits as crisp parallel strokes and the conical teeth as clean white triangles. Pure black ink on pure white, high contrast, closed forms, crisp carved lines following the form, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AQU-003 · Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a giant manta ray in front three-quarter top view with wings spread, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Fan radial hatch across the dark dorsal wing surface following the wing sweep, leaving the wingtips and shoulder patches open white; carve the cephalic head-fins and the gill region with crisp directional lines. Pure black ink on pure white, high contrast, closed forms, crisp carved lines following the form, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of an orca in left-facing profile, in the manner of a vintage natural-history engraving. Build tone from carved hatching and cross-hatching — but exploit the orca's natural pattern: render the back, head, flippers, tall dorsal fin and tail as bold solid-black engraved masses, and reserve the chin-to-belly underside, the eye-patch and the dorsal saddle as clean white worked with only sparse contour lines. Keep the black/white boundaries crisp; add cross-hatch only where the black mass turns at the jaw and flipper base. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no feathered patch edges, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-WOOD-AQU-005 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a great hammerhead shark in top-down view, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Run directional hatch along the body length and the rear edges of the wide mallet head, leaving the underside and the leading edge of the head open white; carve the tall sickle dorsal fin with crisp lines. Pure black ink on pure white, high contrast, closed forms, crisp carved lines following the form, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

---

## Avian

### BQ-WOOD-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a bald eagle in a stern head-and-shoulders profile, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Keep the head and neck open white worked with only fine contour feather-lines, and run dense feather-hatch through the dark body plumage; carve the hooked beak with clean directional strokes and a sharp dark notch, the fierce eye a crisp accent. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AVI-002 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a snowy owl facing forward, wings tucked, in the manner of a vintage natural-history engraving. Build tone from carved line work, but keep this a predominantly WHITE subject: render most of the plumage as open white with fine contour feather-lines, and place the limited darkness as short carved barring dashes scattered across the wings and crown, plus crisp dark round eyes and a small hooked beak. Add light cross-hatch only as a restrained shadow down one side and under the body. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no over-darkened body, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-WOOD-AVI-003 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `flamingo` · output `flamingo_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a greater flamingo standing on one leg with the deep S-curved neck and down-curved bill, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Run feather-hatch along the back and the bend of the neck, carve the black-tipped bill solid, and leave the breast and lit neck open white; the long stilt leg a clean carved line. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AVI-004 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a scarlet macaw perched in profile with a long pointed tail, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Run feather-hatch across the back and folded wing, render the long tail as a row of clean parallel barb-lines, carve the heavy hooked beak with crisp strokes, and suggest the bare facial patch with fine engraved lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no perch, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-AVI-005 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a shoebill facing forward, the huge clog-shaped bill dominant, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Carve the massive bill with directional lines describing its curved planes, keep its lit top open white, run feather-hatch through the shaggy neck and body, and place a crisp pale eye. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

---

## Insecta

### BQ-WOOD-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN EN · slug `monarch-butterfly` · output `monarch-butterfly_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a monarch butterfly with wings fully spread, symmetric top-down, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Carve the wing veins as bold black branching lines dividing the wing into cells; fill the cells with fine parallel hatch and reserve the marginal spots as clean white dots in the dark border; keep the two wings perfectly mirror-symmetric. Render the body in segmented carved bands and the antennae as clean lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-WOOD-INS-002 · Hercules Beetle

*Dynastes hercules* · IUCN LC · slug `hercules-beetle` · output `hercules-beetle_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a Hercules beetle top-down, the two huge horns prominent, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Carve the horns solid with highlight lines along their curve, run directional hatch across the domed elytra leaving a lit white sweep, and define the six legs as crisp jointed carved lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra insects, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-INS-003 · Praying Mantis

*Mantis religiosa* · IUCN LC · slug `praying-mantis` · output `praying-mantis_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a praying mantis in side profile with raised spiked forelegs, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Carve fine directional hatch along the thorax and abdomen segments, render the forelegs and their spines as crisp clean lines, define the wing with long parallel vein-lines, and place a clear carved eye in the triangular head. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no plant, no background, no scene, no text, no border, no extra insects, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-INS-004 · Emperor Dragonfly

*Anax imperator* · IUCN LC · slug `dragonfly` · output `dragonfly_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of an emperor dragonfly top-down with four outstretched wings, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Render the wing venation as a fine lattice of clean engraved lines, run carved banding hatch along the long segmented abdomen, and carve the large compound eyes and thorax with directional strokes; keep the wings mirror-symmetric. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-WOOD-INS-005 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a stag beetle top-down, the antler-like mandibles prominent, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Carve the branching mandibles solid with highlight lines, run directional hatch across the elytra with a clean seam down the wing-case join, and define the legs as crisp jointed lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra insects, no ultra-thin broken lines, no blurry edges.
```

---

## Mammalian

### BQ-WOOD-MAM-001 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a gray wolf in a head-and-shoulders three-quarter profile, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching that follows the lie of the fur — bold solid-black shadow masses, white carved highlights — never flat gray fills. Run dense fur-hatch through the muzzle shadow, ear interiors and the underside of the neck, render the ruff as long radiating carved strokes, and keep the forehead and snout bridge lit white. The eyes are crisp accents. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-MAM-002 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a male lion in a head-on three-quarter portrait with a full mane, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. The mane is the engraving showcase: render it as long radiating carved strokes that darken into the depth and open to white at the lit edges; hatch the muzzle and eye sockets in shadow, keep the face planes lit, and carve the nose and eyes as crisp accents. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-MAM-003 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a red fox in a head-and-shoulders three-quarter profile, in the manner of a vintage natural-history engraving. Build all tone from carved fur-hatching that follows the coat — bold solid-black shadow masses, white carved highlights — never flat gray fills. Darken the ear interiors and tips, the eye and nose, and the neck underside with dense hatch; keep the cheeks, muzzle and brow lit white with fine contour lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-MAM-004 · African Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of an African elephant in three-quarter front view with fanned ears, trunk and tusks, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Carve the deep wrinkle-lines of the skin across the trunk and legs, render the ear with radiating hatch and a dark shadowed inner fold, keep the lit forehead and back open white, and reserve the tusks as clean white shapes. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no ground, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-MAM-005 · Mountain Gorilla

*Gorilla beringei beringei* · IUCN EN · slug `mountain-gorilla` · output `mountain-gorilla_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a mountain gorilla in a head-and-shoulders view with a heavy brow and broad nose, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Run dense cross-hatch through the dark face shadow, the deep brow, and the heavy body fur, and carve restrained white highlight lines on the brow ridge, muzzle and shoulder tops; the eyes are quiet crisp accents under the brow. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

---

## Reptilian

### BQ-WOOD-REP-001 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a panther chameleon in profile gripping a branch stub, tail coiled, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Carve the casque and the serrated dorsal crest with bold strokes, render the body's scaly skin as fine directional hatch following its curve, darken the underside and tail-coil interior, and define the turret eye and clamping feet with crisp lines; the coiled tail a spiral of carved bands. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no leaves, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-REP-002 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a Komodo dragon in a low four-legged profile stance, forked tongue out, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Render the loose pebbled skin as fine directional hatch, darken the spine, the limb folds and the underside, keep the lit back open white, and carve the blunt snout and clawed feet with crisp lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no ground, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-REP-003 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a king cobra reared upright with hood flared, rising from a coiled base, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Carve the flared hood with bold radiating lines and a dark rear, render the body's scales as fine cross-band hatch, darken the shadow side of the rising S-curve and the coil interiors, and keep the throat and front of the hood lit white. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-REP-004 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a saltwater crocodile in profile, in the manner of a vintage natural-history engraving. Build all tone from carved parallel-line hatching and cross-hatching — bold solid-black shadow masses, white carved highlights — never flat gray fills. Carve the armored back as rows of raised scute blocks with shadowed grooves, render the long snout and jaw with directional lines and clean white teeth, hatch the limb and tail shadows, and keep the lit flank open white. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no water, no ground, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```

### BQ-WOOD-REP-005 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_woodcut-bw_01.{png,svg}`

```text
Create a refined black-and-white WOODCUT ENGRAVING of a green iguana in profile on a branch, in the manner of a vintage natural-history engraving. Build all tone from carved line work — never flat gray fills. Carve the row of dorsal spines bold, render the hanging dewlap with vertical pleat-lines, hatch the body scales as fine directional rows, band the long tail with alternating carved hatch, and define the large round cheek scale and clawed feet with crisp lines. Pure black ink on pure white, high contrast, closed forms, vector-traceable. Center on plain white, no scene.
Negative prompt: no smooth gradients, no airbrush, no soft shading, no color, no grayscale fills, no photographic realism, no stipple, no random speckles, no leaves, no background, no scene, no text, no border, no extra animals, no ultra-thin broken lines, no blurry edges.
```
