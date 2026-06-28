<!--
========================================================================
✒ METADATA
  Title ................ BEASTIQUE — Insecta Beasts · Linocut Prompt Library
  File Name ............ insecta_beasts_linocut_prompts.md
  Relative Path ........ BEASTIQUE/studio/prompts/linocut/insecta_beasts_linocut_prompts.md
  Artifact Type ........ Image-Generation Prompt Library (Markdown)
  Version .............. 1.0.0
  Date ................. 2026-06-25
  Update ............... 2026-06-25
  Author ............... Dennis 'dendogg' Smaltz
  A.I. Acknowledgement . Anthropic - Claude Opus 4.8
  Signature ............ ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ DESCRIPTION
  Curated linocut emblem prompts for the Insecta Beasts gallery — the
  BEASTIQUE terrestrial-arthropod bucket, insects plus the arachnid-and-kin
  umbrella. Authored in the locked "linocut emblem" house style: refined,
  high-contrast, pure black-on-white, vector-traceable woodcut illustration
  suitable for downstream SVG / silhouette stock. Each prompt is
  subject-specific. This is the most ruthlessly CURATED collection in the
  project by necessity: a million-plus described insects exist, so
  "complete" was never on the table — the stockroom wants only the shapes
  you would name in black at a glance. The count (44) falls out of
  distinctiveness and broad order coverage, not a quota. In silhouette a
  beetle, a wasp, and a mantis are worlds apart, but four jumping spiders
  are one shape — so order breadth drove the cut.

✒ CHANGELOG
  - v1.0.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Initial library.
    Fifth and final BEASTIQUE primary collection. Insects (INS) plus the
    arachnid-and-kin umbrella (ARA) unified under one gallery/folder while
    keeping distinct ID prefixes at the data layer. Carried the locked house
    linocut skeleton forward, adapted the field rule into the insect posture
    system, anchored density maps on exoskeleton + wing structure, and added
    the thin-appendage vector-hazard rule. 32 insects + 12 arachnids/kin = 44.

✒ KEY FEATURES
  - 44 standalone prompts, each a single fenced block (prompt + negative).
  - DUAL ID series: BQ-LINO-INS-001…-032 (insects), BQ-LINO-ARA-001…-012
    (arachnids and chelicerate kin) — merged gallery, preserved precision.
  - Per-entry record: scientific name, indicative IUCN status, slug, and
    canonical output filenames (raster + vector).
  - DRY insecta "House Linocut Spec" documents the shared style DNA once;
    every prompt still ships complete and copy-paste-ready.

✒ USAGE INSTRUCTIONS
  - Lift the contents of any single ```text block straight into the image
    generator. The negative-prompt line is included inside the block.
  - Name the generated raster per the Naming Conventions table; trace to
    SVG under the matching .svg name.
  - Validate every status against the live Red List before publication —
    this matters MORE here than in any other collection (see note below).

✒ OTHER IMPORTANT INFORMATION
  - MERGED GALLERY: "Insecta Beasts" is the curated terrestrial-arthropod
    bucket. The "...Beasts" suffix is the honesty signal that this is an
    ecological/artistic gallery, not the taxonomic class Insecta — which is
    exactly why arachnids (and a chelicerate flagship) ride the umbrella.
    Label layer is the friendly umbrella; the data layer stays precise: INS
    = true insects, ARA = arachnids and chelicerate kin, with per-entry
    clade notes where a beast is not a true arachnid (e.g. the horseshoe
    crab is Xiphosura, not Arachnida).
  - THIN-APPENDAGE VECTOR HAZARD (insect-specific, critical): legs,
    antennae, wing-veins, and other fine appendages are the make-or-break
    for this collection. They MUST be rendered as bold, confident, traceable
    strokes — never hairline filaments that drop out or fragment under the
    trace. When an insect's whole identity is thin (walking stick,
    harvestman), draw those lines deliberately heavier so the silhouette
    survives vectorization.
  - INSECT FIELD RULE (by posture): winged display insects (butterflies,
    moths) float on blank white with wings spread; flying insects (bee,
    wasp, dragonfly) float on white with wings out; perched/standing insects
    grip a short stub or get a few foot-shadow strokes; the one web spider
    gets a minimal hint of radial web lines only; ground arachnids and
    scorpions get foot-shadow strokes; the horseshoe crab gets minimal
    substrate. Background always blank white, no scene, no border, no text.
  - DENSITY MAP forks by exoskeleton + wing: butterfly/moth wing pattern as
    bold reserved blocks + clean venation (pattern IS the density map);
    beetle elytra as smooth domed chitin with reserved gloss highlights;
    bee/wasp banding as bold reserved stripes, fuzzy pile where hairy;
    membranous wings as clean OPEN vein-lattice; segmented bodies as clean
    banded grooves; raptorial/horned/jawed parts as bold clean shapes.
  - TRACE-BASELINE NOTE: fuzzy subjects (honeybee, bumblebee, tarantula)
    ease Speckles like the fur/feather subjects; hard-shell beetles trace
    clean at the mammal baseline; membranous wings need the vein-lattice
    drawn bold enough to survive.
  - INVERTEBRATE RED LIST GAP: unlike birds and herps (near-complete Red
    List coverage), most insects and arachnids are genuinely NOT EVALUATED
    (NE) by IUCN. The status column here is therefore marked NE by honest
    default, with only the few confirmed assessments flagged. The data gap
    is itself a real conservation story worth surfacing, not hidden.
========================================================================
-->

# BEASTIQUE — Insecta Beasts · Linocut Prompt Library

The terrestrial-arthropod gallery: 32 insects and 12 arachnids-and-kin,
curated for distinct silhouettes and broad order coverage. Density maps are
anchored on the animal's real structure — wing venation and scale-pattern,
domed chitin elytra, banded segmentation, raptorial limbs, jointed legs —
drawn bold enough that even the thinnest appendage traces clean to vector.

## House Linocut Spec

Every prompt is built on the style DNA locked by the mammalian gold master.
This section documents the shared standard once; it is already woven into
each prompt below.

- **Medium** — Refined, high-contrast black-and-white **linocut / woodcut**
  illustration. Upgraded antique natural-history engraving energy; premium
  emblem, not a sketch.
- **Ink discipline** — Pure black ink on pure white background only. No
  grayscale, no color, no gradients, no painterly shading. Tone is built
  from carved hatch and closed black shapes, not value.
- **Vector-readiness** — All black detail intentional, separated, and
  capable of becoming clean vector paths. No tiny isolated specks, no broken
  fragments. **Thin appendages (legs, antennae, wing-veins) are rendered
  bold and confident — never hairline.**
- **Contour** — One confident, bold, continuous outer outline; simplified
  silhouette. Interior texture follows the exoskeleton and wing structure.
- **Weight hierarchy** — Thick outer contour, medium interior shapes,
  smaller-but-clean detail. Legible at both large and small sizes.
- **Density map (exoskeleton + wing)** — Each beast carries an intentional
  dark/dense region and a lighter/open region drawn from its real structure:
  wing pattern and venation, domed chitin gloss, banded segmentation,
  raptorial or horned hardware. The structure is the per-subject variable
  and the heart of each prompt — never random stipple.
- **Field (insect posture)** — Winged-display and flying insects float on
  blank white; perched insects grip a stub or get foot-shadows; the one web
  spider gets minimal web radials; ground arachnids get foot-shadows; the
  horseshoe crab gets minimal substrate. Background stays blank white. No
  scene, no border, no text, no extra animals.

## Naming Conventions

This is a MERGED gallery: true insects and the arachnid-and-kin umbrella
share one folder while keeping distinct ID prefixes — the frontend reads one
"Insecta Beasts" while the dataset still knows a spider from a beetle.

### Prompt IDs

Format: `BQ-LINO-{CLASS}-{NNN}`. This file uses two class codes:

| Class code | Sub-taxon within Insecta Beasts |
| ---------- | ------------------------------- |
| `INS`      | True insects (class Insecta) |
| `ARA`      | Arachnids and chelicerate kin (scorpions, spiders, solifuges, harvestmen, uropygids, plus the Xiphosuran horseshoe crab) |

Each series is numbered independently from 001.

### File outputs

| Artifact          | Pattern                                              | Example                                  |
| ----------------- | ---------------------------------------------------- | ---------------------------------------- |
| Prompt library    | `insecta_beasts_linocut_prompts.md`                  | (this file)                              |
| Raster render     | `{species-slug}_linocut-bw_{NN}.png`                 | `monarch-butterfly_linocut-bw_01.png`    |
| Vector trace      | `{species-slug}_linocut-bw_{NN}.svg`                 | `monarch-butterfly_linocut-bw_01.svg`    |
| Library folder    | `BEASTIQUE/studio/prompts/linocut/`                    | —                                        |
| Render folder     | `BEASTIQUE/studio/collections/insecta-beasts/linocut/`      | (insects + arachnids together)           |

Slugs are lower-kebab. Both INS and ARA renders live under the unified
`insecta-beasts/` render folder.

## The Library — Insects (INS)

### BQ-LINO-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN VU† · slug `monarch-butterfly` · output `monarch-butterfly_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a monarch butterfly with wings spread fully open and symmetric, viewed from directly above, styled as a premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space; the spread wings fill the composition symmetrically. Render the defining anatomy: two pairs of broad wings spread flat, a slender segmented body, a small head with clubbed antennae and coiled proboscis, and six legs tucked beneath. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the wing pattern — render the signature monarch venation as a bold network of clean black veins dividing each wing into cells, with the wing surface reading as a reserved mid-pattern, framed by a bold solid-black wing margin studded with two clean rows of reserved white dots (the unmistakable identifier). The pattern IS the density map. Render the body as a clean banded thorax-and-abdomen with fine pile on the thorax, the clubbed antennae as bold confident lines (never hairline), the eyes crisp. Keep the wing structure perfectly symmetric left-to-right. One bold continuous contour around the spread butterfly. Weight hierarchy: thick contour, bold vein-network, dotted black margins, banded body — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no orange, no photographic realism, no soft scales, no airbrush, no blurry edges, no flowers, no garden, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-002 · Blue Morpho

*Morpho menelaus* · IUCN NE · slug `blue-morpho` · output `blue-morpho_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a blue morpho butterfly with wings spread fully open and symmetric, viewed from above, styled as a premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: two pairs of very broad, rounded wings (the morpho's signature wide rounded shape), a slender body, a small head with clubbed antennae, and tucked legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the broad rounded wing silhouette — render the wings as clean wide sweeping shapes with fine radiating vein-lines from the body, a reserved-open central field (standing in for the iridescent expanse), and a bold dark wing-border carrying a clean row of small reserved eyespot-rings along the margin (the underside ocelli motif brought to the edge). The density map is the bold border-and-vein contrast against the open wing field. Render the body as a clean banded thorax-and-abdomen, the clubbed antennae as bold confident lines (never hairline). Keep the wings symmetric. One bold continuous contour around the spread morpho. Weight hierarchy: thick contour, broad rounded wings, radiating veins, eyespot border — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no blue, no iridescence, no photographic realism, no soft scales, no airbrush, no blurry edges, no rainforest, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-003 · Atlas Moth

*Attacus atlas* · IUCN NE · slug `atlas-moth` · output `atlas-moth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Atlas moth with wings spread fully open and symmetric, viewed from above, styled as a grand premium woodcut emblem and upgraded antique natural-history engraving — one of the largest moths. Center it in the frame with clean white space; the huge wings dominate. Render the defining anatomy: two pairs of enormous broad wings, the signature sharply hooked and extended forewing tips (the cobra-head-mimic corners), a stout furry body, a small head with large feathery (comb-like) antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the angular hooked wingtips — render the extended, curved forewing corners as bold clean hooks (the unmistakable identifier). The density map: render each wing with bold dark zones sweeping in from the margins, a clean reserved triangular "window" patch near the center of each wing (the translucent eyespot-windows), and bold curved band patterns, the venation drawn as clean confident lines. Render the stout body with fine fur-pile, and the feathery comb antennae as bold structured comb-shapes (never hairline). Keep the wings symmetric. One bold continuous contour around the spread moth. Weight hierarchy: thick contour, hooked wingtips, reserved window patches, feathery antennae — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-004 · Luna Moth

*Actias luna* · IUCN NE · slug `luna-moth` · output `luna-moth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a luna moth with wings spread open and symmetric, viewed from above, styled as an elegant premium woodcut emblem and upgraded antique natural-history engraving. Center it in a tall composition with clean white space to honor the trailing tails. Render the defining anatomy: rounded forewings, and the signature long sweeping hindwing tails (two long curving streamers trailing down from the hindwings), a furry body, a small head with large feathery comb antennae, and an eyespot on each wing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the long trailing hindwing tails — render the two sweeping curved streamers as bold clean tapering shapes (the unmistakable identifier silhouette). The density map: render each wing as a clean reserved field crossed by fine confident vein-lines, with a bold dark leading-edge band along the forewing and a clean concentric eyespot motif (a reserved ring with a dark center) on each wing. Render the furry body with fine pile, the feathery comb antennae as bold structured combs (never hairline). Keep symmetric. One bold continuous contour around the spread moth and its tails. Weight hierarchy: thick contour, trailing tails, eyespot motifs, vein-lines, feathery antennae — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage, no moon, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-005 · Swallowtail

*Papilio machaon* · IUCN NE · slug `swallowtail` · output `swallowtail_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Old World swallowtail butterfly with wings spread open and symmetric, viewed from above, styled as an ornate premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: pointed forewings, and the signature tailed hindwings (each hindwing drawn out into a slender pointed swallow-tail extension), a slender body, a small head with clubbed antennae, and small eyespots near the hindwing tails. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the tailed hindwings — render the slender pointed tail extensions as bold clean projections (the identifier). The density map is the bold pattern: render each wing with a bold dark vein-and-margin framework enclosing reserved pale cells, a strong dark band along the wing edges studded with reserved lunule spots, and a clean eyespot near each tail base. The venation reads as confident black lines. Render the body as a clean banded thorax-and-abdomen, the clubbed antennae bold (never hairline). Keep symmetric. One bold continuous contour around the spread swallowtail. Weight hierarchy: thick contour, tailed hindwings, bold vein-and-margin pattern, eyespots — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no flowers, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-006 · Death's-head Hawkmoth

*Acherontia atropos* · IUCN NE · slug `deaths-head-hawkmoth` · output `deaths-head-hawkmoth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a death's-head hawkmoth at rest with its wings swept back into a streamlined delta, viewed from above, styled as an ominous premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: narrow pointed forewings swept back along the body in the hawkmoth resting posture, a stout powerful furry thorax bearing the signature pale skull-shaped marking, a thick banded abdomen, a small head with short antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the skull thorax-marking — render the famous death's-head pattern on the top of the thorax as a clean reserved skull motif against the dark fur (the unmistakable identifier). The density map: render the swept narrow forewings with bold dark mottled banding and clean vein-lines, the stout thorax as dense fur-pile framing the reserved skull, and the abdomen as bold clean alternating dark-and-reserved segment bands. The skull marking, the stout body, and the swept-wing delta silhouette are the focal accents. The antennae are bold (never hairline). One bold continuous contour around the resting hawkmoth. Weight hierarchy: thick contour, reserved skull thorax, banded abdomen, swept delta wings — legible large and small. At rest, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage, no skull background, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-007 · Madagascan Sunset Moth

*Chrysiridia rhipheus* · IUCN NE · slug `madagascan-sunset-moth` · output `madagascan-sunset-moth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Madagascan sunset moth with wings spread open and symmetric, viewed from above, styled as an ornate premium woodcut emblem and upgraded antique natural-history engraving — a day-flying moth and a pattern showpiece. Center it in the frame with clean white space. Render the defining anatomy: broad forewings, and hindwings with scalloped wavy margins drawn into several short pointed tails fringed at the edges, a slender body, a small head with antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the scalloped tailed hindwings plus the radiating band pattern — render the wavy fringed hindwing margins with their little pointed tails as clean scalloped edges (the identifier), and lay across all four wings the signature pattern of bold curved concentric bands sweeping in arcs (rendered as alternating reserved and solid-black curved zones, standing in for the iridescent rainbow). The pattern IS the density map. Render the venation as confident lines and the fringed margins as fine clean edge-teeth (bold enough to trace). The body is a clean banded form, antennae bold. Keep symmetric. One bold continuous contour around the spread moth. Weight hierarchy: thick contour, scalloped tailed margins, curved band pattern, fringed edges — legible large and small. Wings spread, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no iridescence, no rainbow, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-008 · Io Moth

*Automeris io* · IUCN NE · slug `io-moth` · output `io-moth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Io moth with wings spread open and symmetric in the defensive display that reveals the hindwing eyespots, viewed from above, styled as a dramatic premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the forewings raised or held forward to expose the hindwings, the signature pair of large bold hindwing eyespots (one big concentric eye on each hindwing), a furry body, a small head with feathery comb antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the pair of hindwing eyespots — render each as a bold large concentric eye motif (a solid dark pupil ringed by clean concentric bands with a reserved highlight), the startle-display identifier, dominating the lower wings. The density map: render the forewings with bold dark margins and clean vein-lines over a reserved field, the hindwings carrying the great eyespots against a darker base, the furry body with fine pile, the feathery comb antennae as bold structured combs (never hairline). Keep symmetric. One bold continuous contour around the displaying moth. Weight hierarchy: thick contour, bold hindwing eyespots, vein-lines, feathery antennae — legible large and small. Wings spread in display, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage, no background, no border, no text, no extra animals, no asymmetry, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-009 · Hercules Beetle

*Dynastes hercules* · IUCN NE · slug `hercules-beetle` · output `hercules-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a male Hercules beetle in left-facing profile, the great horns forward, styled as a powerful premium woodcut emblem and upgraded antique natural-history engraving — one of the largest beetles. Center it in the frame with clean white space. Render the defining anatomy: a long curved horn projecting forward from the thorax and a smaller upward-curving horn from the head, the two meeting like pincers, a broad glossy domed body (elytra), six strong clawed legs, and clubbed antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the great curved thoracic horn paired with the head horn — render them as bold clean curved shapes forming the signature caliper silhouette (the identifier), with a fine row of teeth on the inner edge of the thoracic horn. The density map: render the domed elytra as smooth hard chitin with a few clean reserved highlight streaks to read the polished shell (the beetle gloss), the thorax as a solid bold mass, and the legs as bold segmented limbs with clean spines and claws (never hairline). The clubbed antennae are bold accents. One bold continuous contour around the horned beetle. Weight hierarchy: thick contour, caliper horns, glossy domed elytra, bold legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no log, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-010 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a male stag beetle in left-facing profile, the great jaws raised, styled as a heraldic premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the signature enormous branched antler-like mandibles (jaws) projecting forward from the head like a stag's antlers, a broad head, a glossy domed body, six clawed legs, and elbowed antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the antler mandibles — render the branched, toothed jaws as bold clean antler shapes with inner points (the unmistakable identifier). The density map: render the broad head and thorax as solid bold masses, the domed elytra as smooth hard chitin with clean reserved highlight streaks to read the polished gloss, and the legs as bold segmented limbs with clean tarsal claws (never hairline). The elbowed antennae end in bold comb-clubs. One bold continuous contour around the antlered beetle. Weight hierarchy: thick contour, antler mandibles, glossy elytra, bold legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no bark, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-011 · Rhinoceros Beetle

*Oryctes nasicornis* · IUCN NE · slug `rhinoceros-beetle` · output `rhinoceros-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a male rhinoceros beetle in left-facing profile, the single nose horn raised, styled as a bold premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a single stout upward-and-backward curving horn rising from the head (the rhino horn), a broad ridged thorax, a heavily domed rounded glossy body (elytra), six powerful clawed legs, and clubbed antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the single curved nose horn — render it as a bold clean curving shape rising off the head (the identifier, distinct from the Hercules beetle's paired calipers). The density map: render the strongly domed elytra as smooth hard chitin with clean reserved highlight streaks down the dome (the heavy beetle gloss), the ridged thorax as a solid bold mass with a clean transverse ridge, and the thick legs as bold segmented limbs with strong clean claws (never hairline). The clubbed antennae are bold accents. One bold continuous contour around the horned beetle. Weight hierarchy: thick contour, single curved horn, glossy domed body, powerful legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no soil, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-012 · Goliath Beetle

*Goliathus goliatus* · IUCN NE · slug `goliath-beetle` · output `goliath-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Goliath beetle viewed from directly above, styled as a massive premium woodcut emblem and upgraded antique natural-history engraving — among the heaviest insects. Center it in the frame with clean white space. Render the defining anatomy: a huge bulky robust body, a broad shield-like pronotum behind the head, a small Y-shaped horn structure on the head of the male, broad domed elytra, six very thick clawed legs splayed out, and clubbed antennae; and the signature bold pattern of dark and pale longitudinal markings across the pronotum and elytra. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the bold pattern on the bulk — render the pronotum and elytra with crisp reserved-white longitudinal stripe-and-blotch markings against the dark chitin (the unmistakable identifier and the density map). The density map: keep the elytra hard and glossy with a few reserved highlight streaks, the broad pronotum a bold patterned shield, the small Y-horn a crisp accent, and the thick legs as bold heavily-built segmented limbs with strong claws (never hairline). The clubbed antennae are bold. One bold continuous contour around the bulky beetle. Weight hierarchy: thick contour, bold reserved stripe pattern, massive bulk, thick legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no background, no border, no text, no extra animals, no hairline legs, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-013 · Seven-spot Ladybird

*Coccinella septempunctata* · IUCN NE · slug `ladybug` · output `ladybug_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a seven-spot ladybird (ladybug) viewed from above in the classic domed-oval emblem pose, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small beetle rendered large and bold. Render the defining anatomy: a near-circular strongly domed body, the central seam dividing the two elytra, the signature round spots arranged across the dome, a small head tucked under a pronotum bearing a pair of pale patches, and six short legs just visible at the edges. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the domed spotted oval — render the round body with a bold clean central seam and the signature spots as crisp clean round shapes arranged symmetrically across the dome (the unmistakable identifier), with a couple of reserved patches on the pronotum behind the head. The density map: render the elytra as smooth hard chitin with a clean reserved highlight arc to read the gloss, the spots crisp, the small head and short legs as bold clean accents (never hairline). One bold continuous contour around the domed ladybird. Weight hierarchy: thick contour, domed oval, bold round spots, central seam — legible large and small. On a short stem stub or standing with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no airbrush, no blurry edges, no leaf, no flowers, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-014 · Sacred Scarab

*Scarabaeus sacer* · IUCN NE · slug `dung-beetle` · output `dung-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a sacred scarab (dung beetle) in left-facing profile in its iconic ball-rolling stance — forelegs braced against a round ball, hind legs pushing — styled as an emblematic premium woodcut and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an oval glossy body, the signature toothed fan-shaped clypeus rake at the front of the head (the broad serrated head-shovel), strong digging forelegs, long hind legs, clubbed lamellate antennae, and a clean round ball that the beetle rolls. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the rolling stance plus the toothed clypeus rake — render the serrated fan-shaped head-shovel as a bold clean toothed edge (the scarab identifier) and pose the beetle braced against the ball in the classic profile. The density map: render the elytra as smooth hard chitin with clean reserved highlight streaks, the round ball as a clean sphere with a fine surface texture and a base shadow, and the legs as bold segmented limbs with clean spines for digging (never hairline). The lamellate antennae are bold accents. One bold continuous contour around the scarab and its ball. Weight hierarchy: thick contour, toothed clypeus rake, glossy body, clean ball, bold legs — legible large and small. Standing/rolling; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no desert, no hieroglyphs, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-015 · Jewel Beetle

*Chrysochroa fulgidissima* · IUCN NE · slug `jewel-beetle` · output `jewel-beetle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a jewel beetle viewed from directly above, styled as a sleek premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a streamlined elongate teardrop body, a narrow head, a tapering pronotum, long parallel-sided elytra that taper to a point at the rear, six slender clawed legs, and short serrate antennae; the surface famously metallic. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the metallic gloss on the elongate form — render the long tapering elytra with bold longitudinal ridge-grooves running their length and crisp reserved highlight streaks gleaming down the ridges (the jewel-shine identifier, standing in for the iridescence). The density map: render the body as hard sculpted chitin, dark in the grooves and reserved-bright on the ridge-crests, the pronotum with matching ridge-lines, and the slender legs as bold segmented limbs with clean claws (never hairline). The serrate antennae are bold accents. One bold continuous contour around the streamlined beetle. Weight hierarchy: thick contour, ridge-grooved elytra, reserved gloss streaks, slender bold legs — legible large and small. Standing or on a short stub with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no iridescence, no photographic realism, no airbrush, no blurry edges, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-016 · Common Eastern Firefly

*Photinus pyralis* · IUCN NE · slug `firefly` · output `firefly_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a common eastern firefly in left-facing three-quarter, perched alert with the abdomen tip prominent, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small beetle rendered large and bold. Render the defining anatomy: a soft elongate beetle body, the signature broad flat pronotum shield extending forward over and hiding the head (with a small dark central mark), soft pliable elytra, the light-organ segments at the tip of the abdomen, six slender legs, and filiform antennae. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the head-hiding pronotum shield (render as a clean rounded shield with the signature central mark, the identifier) and the lantern abdomen tip (render the terminal light-organ segments as a clean reserved-bright panel at the tail, standing in for the glow). The density map: render the soft elytra with fine clean lengthwise texture (softer than a hard beetle's gloss), the pronotum as a bold shield, and the slender legs and filiform antennae as bold confident strokes (never hairline). One bold continuous contour around the perched firefly. Weight hierarchy: thick contour, pronotum shield, reserved lantern tip, soft elytra — legible large and small. Perched on a short stub with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no glow effect, no photographic realism, no airbrush, no blurry edges, no night scene, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-017 · Acorn Weevil

*Curculio glandium* · IUCN NE · slug `weevil` · output `weevil_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an acorn weevil in left-facing profile, the absurd long snout angled down, styled as a characterful premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small beetle rendered large and bold. Render the defining anatomy: a small rounded body, and the signature extremely long thin downcurved snout (rostrum) projecting from the head — far longer than the body in the female — with the elbowed antennae attached partway along the snout, a domed scaly body, and six slender legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the long downcurved snout — render the rostrum as a bold clean tapering curve (drawn deliberately bold so this thin signature feature survives the trace, the unmistakable identifier), with the elbowed antennae sprouting from its midpoint as bold clean lines. The density map: render the rounded body with a clean field of fine scale-texture and a couple of reserved highlight glints to read the dome, the legs as bold segmented limbs with clean claws (never hairline). One bold continuous contour around the long-snouted weevil. Weight hierarchy: thick contour, long bold snout, scaly domed body, bold legs — legible large and small. Standing on a short stub with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no acorn, no foliage, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-018 · Western Honeybee

*Apis mellifera* · IUCN NE · slug `honeybee` · output `honeybee_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a western honeybee worker in flight, wings extended, in left-facing three-quarter, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small insect rendered large and bold. Render the defining anatomy: a compact body in three parts (head, fuzzy thorax, banded abdomen), large compound eyes, antennae, two pairs of membranous wings held out, six legs with the hind legs bearing pollen baskets, and the tapered abdomen. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map forks into three textures: render the thorax as dense fuzzy pile (fine directional fur-strokes — the fuzzy texture, a Speckles-eased subject), the abdomen as bold clean alternating dark-and-reserved bands (the signature striping), and the wings as clean OPEN membranes defined only by a confident vein-lattice (kept light so they read as transparent). The large compound eyes (fine reserved facet-texture), the antennae, and the pollen-laden hind legs are crisp accents; render all legs and antennae bold (never hairline). One bold continuous contour around the flying bee. Weight hierarchy: thick contour, fuzzy thorax, banded abdomen, open vein-lattice wings — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no flowers, no hive, no honeycomb, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-019 · Buff-tailed Bumblebee

*Bombus terrestris* · IUCN NE · slug `bumblebee` · output `bumblebee_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a buff-tailed bumblebee in flight, wings extended, in left-facing three-quarter, styled as a charming premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the insect rendered large and bold. Render the defining anatomy: a notably round, robust, heavily furred body (much rounder and bulkier than a honeybee), large compound eyes, antennae, two pairs of small membranous wings held out, six legs, and the broad furry abdomen with bold colour bands. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the round furry bulk — render the whole body as dense fuzzy pile (heavier and shaggier than the honeybee's, the Speckles-eased fur texture) so the roundness and fuzz read as the identifier. The density map: lay the signature bold reserved bands across the furry thorax and abdomen (clean wide stripes interrupting the pile), render the small wings as clean OPEN vein-lattice membranes, and keep the compound eyes, antennae, and legs bold (never hairline). One bold continuous contour around the round flying bumblebee. Weight hierarchy: thick contour, round fuzzy bulk, bold reserved bands, open wings — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no flowers, no garden, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-020 · Paper Wasp

*Polistes dominula* · IUCN NE · slug `paper-wasp` · output `paper-wasp_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a paper wasp in flight, wings out and the long legs trailing beneath, in left-facing three-quarter, styled as a sleek premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the insect rendered large and bold. Render the defining anatomy: a slender smooth (not furry) body, the signature extremely narrow thread-like waist (petiole) cinching between thorax and abdomen, a spindle-shaped pointed abdomen, large eyes, antennae, two pairs of membranous wings held out, and the long legs dangling down in flight. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the threadlike waist plus the dangling-legged flight silhouette — render the dramatic narrow petiole cinch as a bold clean pinch (the identifier that separates a wasp from a bee), and the long legs trailing below as bold confident lines. The density map: render the smooth slender body with bold clean reserved bands across the abdomen (sharp-edged striping, no fuzz), the wings as clean OPEN vein-lattice membranes (often folded narrow at rest, here extended), the eyes and antennae crisp. All legs and antennae bold (never hairline). One bold continuous contour around the flying wasp. Weight hierarchy: thick contour, threadlike waist, banded abdomen, trailing legs, open wings — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no nest, no flowers, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-021 · Praying Mantis

*Mantis religiosa* · IUCN NE · slug `praying-mantis` · output `praying-mantis_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a European praying mantis perched in left-facing profile in its classic upright praying stance, the raptorial forelegs folded and raised, head turned toward the viewer, styled as a striking premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the signature raptorial forelegs folded in the praying pose, lined with grasping spines, a triangular head with large compound eyes turned toward the viewer, an elongate prothorax (neck-like front segment), a slender body with folded wings down the back, and four walking legs gripping a stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the folded raptorial forelegs — render them as bold clean folded limbs with a row of clean grasping spines along the inner edge (the predator identifier), raised in the prayer posture. The density map: render the elongate prothorax and slender body with fine clean segment-texture, the folded wings as clean lengthwise vein-lines down the back, the triangular head with bold compound eyes (reserved facet-texture) and the swivel toward the viewer as the focal accent. All legs and antennae bold (never hairline). One bold continuous contour around the praying mantis and stub. Weight hierarchy: thick contour, raptorial forelegs, triangular head, elongate body — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no flowers, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-022 · Orchid Mantis

*Hymenopus coronatus* · IUCN NE · slug `orchid-mantis` · output `orchid-mantis_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an orchid mantis perched on a stem in left-facing three-quarter, the petal-like limbs displayed, styled as an ornate premium woodcut emblem and upgraded antique natural-history engraving — the flower-mimic mantis. Center it in the frame with clean white space. Render the defining anatomy: the signature flattened petal-shaped lobes on the four walking legs (each leg bearing a broad rounded petal flange that mimics orchid petals), raptorial folded forelegs, a small triangular head with large eyes, a slender body, and folded wings. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the petal-lobed legs — render the broad rounded petal flanges on the walking legs as clean smooth petal-shapes with fine radiating vein-lines (the unmistakable flower-mimic identifier), arranged so the insect reads like a blossom with a body. The density map: render the petal-lobes mostly open with delicate vein-hatch, the slender body and triangular head with fine clean texture, the raptorial forelegs as bold spined grasping limbs, the eyes crisp. All limbs and antennae bold (never hairline). One bold continuous contour around the orchid mantis and stem. Weight hierarchy: thick contour, petal-lobed legs, raptorial forelegs, slender body — legible large and small. Perched on a short stem stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no orchid, no flowers, no foliage, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-023 · Common Green Darner

*Anax junius* · IUCN NE · slug `common-green-darner` · output `common-green-darner_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a common green darner dragonfly with all four wings spread flat and outstretched, viewed from above, styled as a precise premium woodcut emblem and upgraded antique natural-history engraving. Center it in a wide composition with clean white space; the four long wings reach toward the corners. Render the defining anatomy: a long slender segmented abdomen, a stout thorax, the signature pair of huge compound eyes meeting on top of the head, and two pairs of long narrow membranous wings held out flat (the dragonfly posture, wings never folded). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the four-wing-and-long-body silhouette — render the long wings as clean OPEN membranes carrying a fine confident lattice of cross-veins and a clean reserved pterostigma near each wingtip (the wing structure is the identifier, drawn bold enough to trace despite being a fine lattice). The density map: render the long abdomen as clean segmented bands darkening at the joints, the stout thorax with fine clean texture, and the huge wrap-around compound eyes as a bold reserved facet-dome (the focal accent). Legs tucked, bold where shown (never hairline). Keep the wings symmetric. One bold continuous contour around the dragonfly. Weight hierarchy: thick contour, four open lattice-wings, long segmented body, huge eyes — legible large and small. In flight/perched with wings out flat, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no pond, no reeds, no water, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-024 · Banded Demoiselle

*Calopteryx splendens* · IUCN NE · slug `banded-demoiselle` · output `banded-demoiselle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a banded demoiselle damselfly perched on a reed-stem in left-facing profile, wings held closed together up over the back, styled as a delicate premium woodcut emblem and upgraded antique natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: a very slender needle-like body (far thinner than a dragonfly), the signature posture of the wings folded together and held up over the back at rest (not spread flat — the key damselfly distinction), broad rounded wings each bearing a bold dark band patch across the middle, and the widely separated compound eyes set apart on a small head. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the folded-up wing posture plus the wing band — render the paired wings raised together over the body (the unmistakable damselfly silhouette distinct from the dragonfly's flat-out wings), each broad wing carrying a clean fine vein-lattice with a bold solid-dark band patch across the middle (the identifier). The density map: render the very slender segmented body as a fine clean needle with banded joints, the small head with the two separated compound eyes as crisp reserved domes. All legs and antennae bold (never hairline). One bold continuous contour around the perched demoiselle and reed-stem. Weight hierarchy: thick contour, folded raised wings, dark wing-bands, needle body — legible large and small. Perched on a short reed-stem stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no pond, no water, no reeds scene, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-025 · Giant Cicada

*Tacua speciosa* · IUCN NE · slug `giant-cicada` · output `giant-cicada_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant cicada clinging to a bark stub in left-facing three-quarter, the wings held roof-like over the body, styled as a robust premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a broad blunt head with wide-set bulging compound eyes, a stout heavy thorax, a short tapering abdomen, the signature pair of large clear membranous wings held tent-like (roof-shaped) over the back, and six strong clinging legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the broad-headed body under roof-held wings — render the wings as clean OPEN membranes pitched in a tent over the body, each carrying a bold confident vein-lattice with heavier major veins (the roof-wing identifier). The density map: render the stout thorax and broad head as solid bold masses with fine clean texture and the wide bulging eyes as bold reserved domes, the short abdomen as clean segment-bands, and the strong legs gripping the bark as bold segmented limbs with clean claws (never hairline). One bold continuous contour around the clinging cicada and bark stub. Weight hierarchy: thick contour, roof-held lattice wings, broad head and bulging eyes, stout thorax — legible large and small. Clinging to a short bark stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no tree, no foliage, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-026 · Leaf Insect

*Phyllium siccifolium* · IUCN NE · slug `leaf-insect` · output `leaf-insect_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a leaf insect viewed from above, splayed flat in its leaf-mimic display, styled as a clever premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a broad flattened leaf-shaped abdomen that mimics a leaf complete with a midrib and branching veins and a slightly ragged edge, flattened leaf-like flanges on the legs, a small head with antennae, and the overall outline reading unmistakably as a foliage leaf with an insect's structure. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the leaf-mimic body — render the broad flat abdomen with a bold central midrib and clean branching lateral vein-lines spreading to a gently ragged leaf-edge (the unmistakable identifier and the density map), so the insect reads as a leaf. The density map: render the leg flanges as smaller clean leaf-blades with their own vein-lines, the body kept fairly open with the vein structure doing the work, a few reserved blotches suggesting leaf blemishes. The small head, antennae, and legs are bold (never hairline). One bold continuous contour around the leaf insect. Weight hierarchy: thick leaf-edge contour, midrib and vein-lines, leaf-flange legs — legible large and small. On a short stub with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no airbrush, no blurry edges, no foliage background, no branch with leaves, no background, no border, no text, no extra animals, no hairline appendages, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-027 · Giant Walking Stick

*Phobaeticus chani* · IUCN NE · slug `giant-walking-stick` · output `giant-walking-stick_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant walking stick insect on a bare twig stub in left-facing profile, styled as a minimalist premium woodcut emblem and upgraded antique natural-history engraving — one of the longest insects. Center it in a wide composition with clean white space to honor the extreme length. Render the defining anatomy: an extraordinarily long, thin, twig-like body, a tiny head with long thread antennae, and six extremely long slender thread-like legs splayed and gripping the twig — the entire animal a study in elongated thinness. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. CRITICAL for this subject: because the whole insect is thin, render the body, legs, and antennae as BOLD, confident, deliberately-thickened strokes so the twig-mimic silhouette survives the trace — never hairline filaments. The hero is the elongated twig silhouette — render the long body as a clean bold segmented stick with fine reserved node-rings at the segment joints (the twig-mimic texture), the long legs as bold tapering segmented limbs with clean joint-knuckles and small grip-claws, and the thread antennae as bold confident lines. One bold continuous contour around the stretched-out walking stick and twig stub. Weight hierarchy: bold thickened contour throughout, segmented stick body, node-ring joints, long bold legs — legible large and small. Gripping a short twig stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no branch with leaves, no background, no border, no text, no extra animals, no hairline legs, no hairline antennae, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-028 · Bullet Ant

*Paraponera clavata* · IUCN NE · slug `bullet-ant` · output `bullet-ant_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a bullet ant in left-facing profile, the classic ant silhouette rendered bold, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the ant rendered large and bold. Render the defining anatomy: the textbook three-part ant body — a large head with strong curved mandibles and elbowed antennae, a robust thorax, a single petiole node, and a large gaster (rear) tipped with a sting — carried on six long slender clawed legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the crisp ant segmentation — render the head, thorax, petiole node, and gaster as four clean defined masses with bold joints between them (the unmistakable ant silhouette, drawn large), the big head with bold curved mandibles and the elbowed antennae as a focal accent. The density map: render each body segment as smooth hard chitin with a few reserved highlight glints to read the gloss, fine sculpting texture on the head and thorax, the sting at the gaster tip a crisp point. Render all six legs and the antennae as bold confident segmented strokes with clean claws (never hairline). One bold continuous contour around the ant. Weight hierarchy: thick contour, four-mass segmentation, big mandibled head, bold legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no nest, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-029 · Leafcutter Ant

*Atta cephalotes* · IUCN NE · slug `leafcutter-ant` · output `leafcutter-ant_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a leafcutter ant in left-facing profile carrying a cut leaf-fragment held aloft above its body, styled as an iconic premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the ant rendered large and bold. Render the defining anatomy: a worker ant with the three-part body (spined thorax, petiole nodes, gaster), a large head with powerful cutting mandibles, elbowed antennae, six long clawed legs, and the signature trapezoidal cut leaf-section gripped in the jaws and raised overhead like a sail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the carried-leaf silhouette — render the cut leaf-fragment held aloft as a clean reserved leaf-shape with a bold midrib and fine vein-lines and a cleanly scissored edge (the unmistakable identifier), balanced over the ant. The density map: render the ant's segmented body as smooth hard chitin with a spiny thorax (clean dorsal spines), the big mandibled head as a focal accent gripping the leaf-stalk, and all six legs and antennae as bold confident segmented strokes with clean claws (never hairline). One bold continuous contour around the leaf-carrying ant. Weight hierarchy: thick contour, raised cut-leaf, spined segmented body, bold legs — legible large and small. Walking; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no trail, no foliage background, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-030 · Desert Locust

*Schistocerca gregaria* · IUCN NE · slug `desert-locust` · output `desert-locust_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a desert locust in left-facing profile, poised in the classic grasshopper stance, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an elongate body, a blunt head with large compound eyes and short antennae, a saddle-like pronotum, long folded wings reaching down the back past the abdomen, four short walking legs, and the signature pair of greatly enlarged powerful hind jumping legs with thick femurs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the enlarged hind jumping leg — render the thick muscular hind femur with its clean herringbone ridge-texture and the long spined tibia folded beneath it (the jumping identifier). The density map: render the folded wings as clean lengthwise vein-lines layered down the back, the body segments and saddle-pronotum with fine clean texture, the large compound eye as a bold reserved dome. Render the short walking legs, the powerful hind legs, and the antennae as bold confident strokes with clean spines (never hairline). One bold continuous contour around the locust. Weight hierarchy: thick contour, powerful hind femur, folded vein-wings, segmented body — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no crops, no grass, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-031 · Field Cricket

*Gryllus campestris* · IUCN NE · slug `field-cricket` · output `field-cricket_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a field cricket in left-facing profile, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a stout rounded body, a large rounded head with a domed face and small eyes, the signature very long thread-like antennae (longer than the body — the cricket identifier versus a grasshopper's short ones), flattened folded wings over the back, robust hind jumping legs, and (on the female) the long needle-like ovipositor projecting straight back from the tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the very long antennae and the needle ovipositor — render both as bold confident lines (drawn deliberately bold so these thin signatures survive the trace; the long antennae and the straight tail-spike are the identifiers). The density map: render the stout body as smooth glossy chitin with reserved highlight glints, the folded wings with clean lengthwise vein-lines and the cricket's stridulatory wing-texture, the domed head as a bold mass with small crisp eyes. Render the hind jumping legs and walking legs as bold segmented limbs with clean spines (never hairline). One bold continuous contour around the cricket. Weight hierarchy: thick contour, long bold antennae, ovipositor spike, stout glossy body, hind legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no grass, no soil, no background, no border, no text, no extra animals, no hairline antennae, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-INS-032 · Mole Cricket

*Gryllotalpa gryllotalpa* · IUCN NE · slug `mole-cricket` · output `mole-cricket_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a mole cricket in left-facing profile, half-emerged from the soil, styled as a bizarre premium woodcut emblem and upgraded antique natural-history engraving — the digging cricket. Center it in the frame with clean white space. Render the defining anatomy: a cylindrical velvety body, a small head, short antennae, short wings, and the signature pair of greatly enlarged shovel-like front legs (broad, flattened, toothed digging forelimbs that look strikingly mole-like). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the shovel forelimbs — render the broad flattened front legs with their clean row of digging teeth as bold paddle-shapes (the unmistakable mole-cricket identifier, utterly unlike any other cricket's legs). The density map: render the cylindrical body as a clean field of fine velvety pile-texture (the soft fur-like covering, a Speckles-eased subject), the short wings as small clean vein-lined flaps over the back, the small head and short antennae as bold accents. Render the digging forelimbs and the rear legs as bold segmented limbs (never hairline). One bold continuous contour around the mole cricket and the soil line it emerges from. Weight hierarchy: thick contour, shovel forelimbs, velvety cylindrical body, short wings — legible large and small. Half-emerged from a minimal soil line; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no burrow scene, no soil background, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

## The Library — Arachnids & Kin (ARA)

### BQ-LINO-ARA-001 · Emperor Scorpion

*Pandinus imperator* · IUCN NE · slug `emperor-scorpion` · output `emperor-scorpion_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an emperor scorpion viewed from above in a defensive stance, the great pincers forward and the tail arched over the back, styled as a bold premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a broad flat body (cephalothorax and segmented mesosoma), the signature pair of massive bulky pincer pedipalps (large grasping claws) held forward, eight legs, and the long segmented metasoma (tail) arched up and over the back ending in the bulbous venom vesicle and curved sting. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the massive pincers (render as bold heavy claws with clean reserved highlight glints to read the glossy chitin — the bulky-clawed identifier) and the arched stinging tail (render the segmented metasoma as clean bold beads curving overhead to the bulb and sting). The density map: render the body and claws as smooth hard chitin with reserved gloss streaks and fine sculptural pitting, the segmented tail as clean defined beads. Render all eight legs as bold segmented limbs with clean claws (never hairline). One bold continuous contour around the scorpion and its arched tail. Weight hierarchy: thick contour, massive glossy pincers, arched beaded tail, bold legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no desert, no sand, no rocks, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-002 · Deathstalker Scorpion

*Leiurus quinquestriatus* · IUCN NE · slug `deathstalker-scorpion` · output `deathstalker-scorpion_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a deathstalker scorpion viewed from above in an alert stance, the slender tail held high, styled as a tense premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slender lightweight body, the signature thin delicate pincer pedipalps (slim claws, in pointed contrast to the emperor's bulk), eight long legs, and a notably long, thin, gracile segmented metasoma (tail) carried high and arched, ending in a prominent venom bulb and a sharp curved sting. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the slender lethal profile — render the thin pincers and the long gracile tail (the identifier that contrasts it sharply with the bulky emperor scorpion) as clean lean shapes, the tail a row of fine elongated segments curving up to an oversized venom bulb and a needle sting. The density map: render the slim body and claws as hard chitin with fine sculpting and a few reserved glints, the long thin tail-segments cleanly defined, the body kept lean and open. Render all eight long legs as bold confident segmented strokes with clean claws (never hairline, despite the slimness). One bold continuous contour around the slender scorpion and its high tail. Weight hierarchy: thick contour, slim pincers, long gracile tail, oversized sting bulb, bold legs — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no desert, no sand, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-003 · Goliath Birdeater Tarantula

*Theraphosa blondi* · IUCN NE · slug `tarantula` · output `tarantula_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Goliath birdeater tarantula viewed from above in a sprawling stance, styled as an imposing premium woodcut emblem and upgraded antique natural-history engraving — the largest spider. Center it in the frame with clean white space. Render the defining anatomy: a heavy bulky two-part body (cephalothorax and large rounded abdomen), eight thick powerful legs sprawled outward, prominent forward chelicerae with fangs, leg-like pedipalps, and the signature dense covering of bristly hair (setae) over the entire body and legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the hairy bulk — render the dense setae over the body and legs as a clean field of fine directional bristle-strokes (the shaggy spider-hair texture, a Speckles-eased subject) so the fuzziness reads as the identifier, with the thick legs carrying bristle-fringes along their length. The density map: render the heavy abdomen and cephalothorax as bold masses clothed in the hair texture, darkening underneath and in the leg-joints, the chelicerae and fangs as crisp bold accents at the front. Render all eight thick legs and the pedipalps as bold heavily-built segmented limbs (never hairline) with bristle-fringe and clean tarsal claws. One bold continuous contour around the sprawling tarantula. Weight hierarchy: thick contour, hairy bulk, thick bristled legs, fanged chelicerae — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no web, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-004 · Black Widow

*Latrodectus mactans* · IUCN NE · slug `black-widow` · output `black-widow_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a black widow spider hanging upside-down in its signature pose, viewed to show the bulbous abdomen and the underside marking, styled as a sleek premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small cephalothorax, the signature large glossy spherical bulbous abdomen, eight long slender legs angled around the body, and the famous reserved hourglass marking on the underside of the abdomen. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the glossy bulbous abdomen with the hourglass — render the round abdomen as a bold smooth sphere with a clean reserved highlight glint to read its shine (the glossy globe identifier) and the signature hourglass marking rendered as a crisp clean reserved shape on its underside. The density map: keep the abdomen-sphere bold and dark with the reserved glint and marking, the small cephalothorax a clean mass, and the eight long legs as bold confident segmented strokes radiating around the body (never hairline). A few minimal silk-strand lines may suggest the hanging anchor. One bold continuous contour around the hanging widow. Weight hierarchy: thick contour, glossy globe abdomen, reserved hourglass, long bold legs — legible large and small. Hanging on a few minimal silk strands; background blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no airbrush, no blurry edges, no full web, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-005 · Jumping Spider

*Phidippus regius* · IUCN NE · slug `jumping-spider` · output `jumping-spider_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a jumping spider facing the viewer head-on in an alert compact crouch, styled as a charismatic premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small spider rendered large and bold. Render the defining anatomy: a compact stocky furry body, the signature large pair of huge forward-facing principal eyes dominating the squarish face (with the smaller secondary eyes around them), short sturdy legs held in the alert ready crouch, and prominent hairy pedipalps held up at the face. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the huge forward eyes — render the two big principal eyes as bold clean reserved domes dominating the face (the charismatic identifier), framed by the smaller eyes and the furry face. The density map: render the compact body with a clean field of fine fuzzy pile (the velvety setae texture), with a suggestion of a bold reserved pattern across the abdomen, the face fuzzy around the big eyes, and the raised pedipalps as bold hairy accents. Render the short sturdy legs as bold confident segmented limbs with bristle-fringe and clean claws (never hairline). One bold continuous contour around the crouched jumping spider. Weight hierarchy: thick contour, huge front eyes, fuzzy compact body, sturdy bold legs — legible large and small. Alert on a short stub with minimal foot-shadows; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no web, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-006 · Orb Weaver

*Argiope aurantia* · IUCN NE · slug `orb-weaver` · output `orb-weaver_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a garden orb-weaver spider hanging head-down at the hub of its web in the signature legs-paired posture, viewed from the front, styled as a striking premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a large patterned egg-shaped abdomen, a smaller silvery cephalothorax, eight long legs arranged in the characteristic four-pairs posture (legs held together in pairs forming an X/cross), and a minimal suggestion of the web hub with the signature zigzag silk stabilimentum. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the legs-on-web posture plus the patterned abdomen — render the eight legs held together in their four pairs forming the bold X-cross (the orb-weaver identifier), and the large abdomen carrying a bold reserved dorsal pattern of clean blotches and bands. The density map: render the patterned abdomen with crisp reserved markings, the cephalothorax a clean fine-textured mass. Keep the web MINIMAL — only a few clean radial strands meeting at the hub and a short clean zigzag stabilimentum band (the identifier), not a full web scene. Render all eight legs as bold confident segmented strokes (never hairline). One bold continuous contour around the spider; minimal web lines behind it. Weight hierarchy: thick contour, X-cross leg posture, patterned abdomen, minimal web hub — legible large and small. At the web hub with only a few minimal radial/stabilimentum strands; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no full web scene, no dew, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-007 · Wolf Spider

*Hogna carolinensis* · IUCN NE · slug `wolf-spider` · output `wolf-spider_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a wolf spider viewed from above in a robust ground-hunting stance, legs sprawled, styled as a rugged premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a robust stout two-part body (broad cephalothorax and oval abdomen) covered in short bristly hair, the distinctive eye arrangement (a row of small eyes with two large eyes above on the high face), eight strong sprawling legs built for running (not web-building), and stout pedipalps. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the robust sprawled ground-hunter build — render the stout body and the powerful sprawling legs as a bold ground-predator silhouette (distinct from a web spider's delicate hang), with the high face and its two large eyes as a crisp focal accent. The density map: render the body with a clean field of short bristly pile and a bold reserved dorsal stripe-pattern down the cephalothorax and abdomen (the camouflage marking), darkening in the leg-joints and underside. Render all eight strong legs as bold confident segmented limbs with bristle-fringe and clean claws (never hairline). One bold continuous contour around the sprawled wolf spider. Weight hierarchy: thick contour, robust body, sprawling powerful legs, eye-row face — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no web, no burrow, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-008 · Camel Spider

*Galeodes arabs* · IUCN NE · slug `camel-spider` · output `camel-spider_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a camel spider (solifuge) viewed from above in a fast-running stance, the great jaws forward, styled as a fearsome premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a segmented body, and the signature enormous pair of forward-projecting chelicerae (jaws) — disproportionately huge, vertically-hinged pincer-jaws making up a large fraction of the front — large leg-like pedipalps held forward as feelers, and the running legs (the rearmost three pairs used for running, the front pair acting as extra feelers). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the giant jaws — render the massive forward chelicerae as bold clean vertically-paired pincer-jaws dominating the front of the animal (the unmistakable terrifying identifier). The density map: render the segmented body with a clean field of fine bristly pile, the prosoma a bold mass behind the jaws, the leg-like pedipalps raised forward. Render the long running legs and the feeler-palps as bold confident segmented strokes with bristle-fringe (never hairline). One bold continuous contour around the running solifuge. Weight hierarchy: thick contour, giant pincer-jaws, bristly segmented body, long bold legs — legible large and small. Running; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no desert, no sand, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-009 · Harvestman

*Phalangium opilio* · IUCN NE · slug `harvestman` · output `harvestman_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a harvestman (daddy longlegs) viewed from above, the tiny body perched at the center of its vast splayed legs, styled as a minimalist premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space to honor the leg-span. Render the defining anatomy: a single small compact oval body (no waist division, unlike a true spider), a pair of tiny eyes on a small turret, and the signature eight extraordinarily long, thin, gently-kinked legs splayed out in all directions, each far longer than the body. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the small-body-huge-legs silhouette — render the tiny single body as a clean compact oval and the eight legs as bold confident long lines radiating out with fine clean knee-kinks (drawn deliberately bold so these thread-thin signature legs survive the trace — never hairline). The density map: render the small body with fine clean texture and a reserved dorsal saddle-marking and the tiny eye-turret as a crisp accent; the legs carry subtle joint-knuckles. One bold continuous contour around the compact body, with the bold legs sprawling beyond it. Weight hierarchy: small bold body, vast bold splayed legs, eye-turret — legible large and small. Standing on the splayed legs with a few minimal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no foliage, no wall, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-010 · Giant Vinegaroon

*Mastigoproctus giganteus* · IUCN NE · slug `vinegaroon` · output `vinegaroon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant vinegaroon (whip scorpion) viewed from above, styled as a strange premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space to honor the whip-tail length. Render the defining anatomy: a flattened elongate segmented body, a pair of heavy thick pincer pedipalps held forward (raptorial grasping arms), the signature long thin whip-like tail (flagellum) trailing from the rear — a fine threadlike sensory whip, NOT a stinger — the modified first pair of legs held forward as long thin antenna-like feelers, and three pairs of walking legs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the whip-tail-without-a-sting — render the long thin flagellum trailing from the rear as a bold confident tapering line (drawn deliberately bold so the thread survives the trace; the unmistakable identifier that separates it from a true scorpion's bulbed stinger). The density map: render the flattened segmented body as hard chitin with clean segment-grooves and reserved glints, the heavy pincer pedipalps as bold grasping claws at the front, and the long feeler-legs and walking legs as bold confident segmented strokes (never hairline). One bold continuous contour around the vinegaroon and its whip-tail. Weight hierarchy: thick contour, heavy front pincers, long bold whip-tail, segmented body — legible large and small. Standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no desert, no soil, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-011 · Tick

*Ixodes scapularis* · IUCN NE · slug `tick` · output `tick_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a tick viewed from above, the flat shield-body and forward mouthparts clear, styled as a clean premium woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space, the small parasite rendered large and bold. Render the defining anatomy: the signature flattened teardrop-to-oval body (the unfed flat shape), a hardened dorsal shield (scutum) over the front, the small forward-projecting mouthpart cluster (capitulum) with its barbed feeding tube at the head end, and eight short legs clustered toward the front of the body. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the flat shield-body silhouette — render the broad flattened oval body with the bold defined scutum shield over the front portion (a clean reserved-edged plate, the identifier) and the rest of the body as a clean flat field with fine festoon-grooves along the rear margin. The forward mouthparts (capitulum) are a crisp bold accent at the head end. The density map: render the body as a clean flat surface with the scutum's reserved sheen and fine texture, pooling light shadow at the body edge to give the flatness form. Render the eight short legs clustered forward as bold confident segmented strokes with clean claws (never hairline). One bold continuous contour around the flat tick. Weight hierarchy: thick contour, flat shield-body, scutum plate, forward mouthparts, clustered bold legs — legible large and small. On a surface with a few minimal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no skin, no host, no foliage, no background, no border, no text, no extra animals, no hairline legs, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-ARA-012 · Atlantic Horseshoe Crab

*Limulus polyphemus* · IUCN VU · slug `horseshoe-crab` · output `horseshoe-crab_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Atlantic horseshoe crab viewed from directly above on the sea floor, styled as an ancient premium woodcut emblem and upgraded antique natural-history engraving — a living-fossil chelicerate, not a true crab. Center it in the frame with clean white space. Render the defining anatomy: the signature large smooth horseshoe-shaped domed front shield (prosoma/carapace) with a pair of compound eyes set on its dome, a hinged hexagonal rear section (opisthosoma) edged with a row of short marginal spines, and the long rigid pointed tail-spike (telson) trailing straight back; the many legs hidden beneath the shell. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the helmet-and-spike silhouette — render the broad smooth domed horseshoe carapace as a bold clean shield (with a few reserved highlight arcs to read the dome and the two ridge-lines and compound eyes), the hinged spiny rear section as a clean hexagon with bold marginal spine-teeth, and the long telson as a bold straight tapering spike (the unmistakable living-fossil identifier). The density map: keep the carapace smooth and bold with reserved sheen, the rear section's spines crisp, pooling shadow along the shell rim. One bold continuous contour around the horseshoe crab. Weight hierarchy: thick contour, domed horseshoe shield, spiny hinged rear, rigid tail-spike — legible large and small. On the sea floor with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no airbrush, no blurry edges, no ocean scene, no water column, no seaweed, no background, no border, no text, no extra animals, no random speckles, no ultra-thin lines, no fragmented outline.
```

## Roster Index

| Insects (INS) | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | Monarch Butterfly | *Danaus plexippus* | `monarch-butterfly` | VU† |
| 002 | Blue Morpho | *Morpho menelaus* | `blue-morpho` | NE |
| 003 | Atlas Moth | *Attacus atlas* | `atlas-moth` | NE |
| 004 | Luna Moth | *Actias luna* | `luna-moth` | NE |
| 005 | Old World Swallowtail | *Papilio machaon* | `swallowtail` | NE |
| 006 | Death's-head Hawkmoth | *Acherontia atropos* | `deaths-head-hawkmoth` | NE |
| 007 | Madagascan Sunset Moth | *Chrysiridia rhipheus* | `madagascan-sunset-moth` | NE |
| 008 | Io Moth | *Automeris io* | `io-moth` | NE |
| 009 | Hercules Beetle | *Dynastes hercules* | `hercules-beetle` | NE |
| 010 | Stag Beetle | *Lucanus cervus* | `stag-beetle` | NT |
| 011 | Rhinoceros Beetle | *Oryctes nasicornis* | `rhinoceros-beetle` | NE |
| 012 | Goliath Beetle | *Goliathus goliatus* | `goliath-beetle` | NE |
| 013 | Seven-spot Ladybird | *Coccinella septempunctata* | `ladybug` | NE |
| 014 | Sacred Scarab | *Scarabaeus sacer* | `dung-beetle` | NE |
| 015 | Jewel Beetle | *Chrysochroa fulgidissima* | `jewel-beetle` | NE |
| 016 | Common Eastern Firefly | *Photinus pyralis* | `firefly` | NE |
| 017 | Acorn Weevil | *Curculio glandium* | `weevil` | NE |
| 018 | Western Honeybee | *Apis mellifera* | `honeybee` | NE |
| 019 | Buff-tailed Bumblebee | *Bombus terrestris* | `bumblebee` | NE |
| 020 | Paper Wasp | *Polistes dominula* | `paper-wasp` | NE |
| 021 | Praying Mantis | *Mantis religiosa* | `praying-mantis` | NE |
| 022 | Orchid Mantis | *Hymenopus coronatus* | `orchid-mantis` | NE |
| 023 | Common Green Darner | *Anax junius* | `common-green-darner` | NE |
| 024 | Banded Demoiselle | *Calopteryx splendens* | `banded-demoiselle` | NE |
| 025 | Giant Cicada | *Tacua speciosa* | `giant-cicada` | NE |
| 026 | Leaf Insect | *Phyllium siccifolium* | `leaf-insect` | NE |
| 027 | Giant Walking Stick | *Phobaeticus chani* | `giant-walking-stick` | NE |
| 028 | Bullet Ant | *Paraponera clavata* | `bullet-ant` | NE |
| 029 | Leafcutter Ant | *Atta cephalotes* | `leafcutter-ant` | NE |
| 030 | Desert Locust | *Schistocerca gregaria* | `desert-locust` | NE |
| 031 | Field Cricket | *Gryllus campestris* | `field-cricket` | NE |
| 032 | Mole Cricket | *Gryllotalpa gryllotalpa* | `mole-cricket` | NE |

| Arachnids & kin (ARA) | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | Emperor Scorpion | *Pandinus imperator* | `emperor-scorpion` | NE |
| 002 | Deathstalker Scorpion | *Leiurus quinquestriatus* | `deathstalker-scorpion` | NE |
| 003 | Goliath Birdeater Tarantula | *Theraphosa blondi* | `tarantula` | NE |
| 004 | Black Widow | *Latrodectus mactans* | `black-widow` | NE |
| 005 | Jumping Spider | *Phidippus regius* | `jumping-spider` | NE |
| 006 | Orb Weaver | *Argiope aurantia* | `orb-weaver` | NE |
| 007 | Wolf Spider | *Hogna carolinensis* | `wolf-spider` | NE |
| 008 | Camel Spider | *Galeodes arabs* | `camel-spider` | NE |
| 009 | Harvestman | *Phalangium opilio* | `harvestman` | NE |
| 010 | Giant Vinegaroon | *Mastigoproctus giganteus* | `vinegaroon` | NE |
| 011 | Tick | *Ixodes scapularis* | `tick` | NE |
| 012 | Atlantic Horseshoe Crab‡ | *Limulus polyphemus* | `horseshoe-crab` | VU |

*IUCN column is indicative and must be validated against the live Red List
before publication. †The migratory monarch subspecies (*Danaus plexippus
plexippus*) carries a recent Red List assessment; verify the current
category, as it has been revised. ‡The horseshoe crab is a chelicerate
(Xiphosura), not a true arachnid — it rides the ARA umbrella as the
gallery's living-fossil deep cut. Most other entries are genuinely NOT
EVALUATED (NE): invertebrate Red List coverage is sparse, and that data
gap is itself a real conservation story. Confirmed flags here: 1 NT (stag
beetle), 2 VU (migratory monarch, horseshoe crab).

## Sign-off

Insecta Beasts linocut library — 44 of 44 carved (32 insects + 12
arachnids & kin), the terrestrial-arthropod gallery and the most ruthlessly
curated collection in the project. A million-plus insects exist; the
stockroom holds only the shapes you'd name in black at a glance, chosen for
distinct silhouette and broad order coverage. House spec carried forward,
insect posture field rule, exoskeleton/wing density maps, and the
thin-appendage vector-hazard rule locked. INS/ARA prefixes preserved under
the unified insecta-beasts gallery; arachnids and the Xiphosuran horseshoe
crab ride the umbrella per the locked two-layer standard. Fifth and FINAL
BEASTIQUE primary collection — the linocut set is complete across all five.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
