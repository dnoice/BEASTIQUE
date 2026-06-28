<!--
========================================================================
✒ METADATA
  Title ................ BEASTIQUE — Reptilian Beasts · Linocut Prompt Library
  File Name ............ reptilian_beasts_linocut_prompts.md
  Relative Path ........ BEASTIQUE/studio/prompts/linocut/reptilian_beasts_linocut_prompts.md
  Artifact Type ........ Image-Generation Prompt Library (Markdown)
  Version .............. 1.0.0
  Date ................. 2026-06-25
  Update ............... 2026-06-25
  Author ............... Dennis 'dendogg' Smaltz
  A.I. Acknowledgement . Anthropic - Claude Opus 4.8
  Signature ............ ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ DESCRIPTION
  Curated linocut emblem prompts for the merged Reptilian Beasts gallery —
  the full BEASTIQUE herpetofauna bucket (reptiles + amphibians under one
  roof). Authored in the locked "linocut emblem" house style: refined,
  high-contrast, pure black-on-white, vector-traceable woodcut illustration
  suitable for downstream SVG / silhouette stock. Each prompt is
  subject-specific — pose, anatomy, and the black-density map are tailored
  to the individual animal, never find-and-replaced. This collection is
  deliberately CURATED rather than padded to a round number: every entry
  earns its slot on a DISTINCT carved silhouette, posture, skin/shell/armor
  texture, or pattern showpiece. The count (46) falls out of the
  distinctiveness, not a quota — the distinct herps of the planet fill one
  good collection, not two padded ones.

✒ CHANGELOG
  - v1.0.0 (2026-06-25) [Anthropic - Claude Opus 4.8] — Initial library.
    Fourth of the five BEASTIQUE primary collections, and the first MERGED
    gallery: reptiles + amphibians unified at the gallery/folder layer while
    keeping distinct REP/AMP ID prefixes at the data layer. Carried the
    locked house linocut skeleton forward, adapted the field rule into the
    herp four-posture system, anchored density maps on skin/scale/shell/
    armor structure. 23 reptiles + 23 amphibians = 46 curated entries.

✒ KEY FEATURES
  - 46 standalone prompts, each a single fenced block (prompt + negative).
  - DUAL ID series: BQ-LINO-REP-001…-023 (reptiles), BQ-LINO-AMP-001…-023
    (amphibians) — merged gallery, preserved taxon precision.
  - Per-entry record: scientific name, indicative IUCN status, slug, and
    canonical output filenames (raster + vector).
  - DRY herp "House Linocut Spec" documents the shared style DNA once;
    every prompt still ships complete and copy-paste-ready.

✒ USAGE INSTRUCTIONS
  - Lift the contents of any single ```text block straight into the image
    generator. The negative-prompt line is included inside the block.
  - Name the generated raster per the Naming Conventions table; trace to
    SVG under the matching .svg name.
  - Verify the indicative IUCN status against the live Red List before any
    status is published in gallery metadata.

✒ OTHER IMPORTANT INFORMATION
  - This is the black-and-white LINOCUT family — silhouette-ready vector
    STOCK, the complement to the full-color BEASTIQUE gallery, not a mirror
    of it. Curating for distinct silhouettes does double duty: it dedupes
    within the stockroom AND gives future designs (banners, watermarks,
    layouts) animal shapes the color gallery isn't already showing.
  - MERGED GALLERY: "Reptilian Beasts" is the curated herpetofauna bucket
    (reptiles + amphibians). The "...Beasts" suffix is the honesty signal
    that this is an ecological/artistic gallery, not a strict clade. Label
    layer is a friendly umbrella; the data layer stays precise (REP vs AMP
    prefixes, per-animal clade tags).
  - HERP FIELD RULE (four-posture): (1) TERRESTRIAL lizards/tortoises/toads
    get a few horizontal ground- or belly-shadow strokes. (2) ARBOREAL
    climbers (tree python, eyelash viper, chameleon, basilisk, tree frogs)
    grip a short branch/stem stub. (3) AQUATIC / BOTTOM forms (matamata,
    snapping turtle, axolotl, olm, Surinam toad, giant salamander) sit on
    blank white with at most a few water-surface or minimal substrate
    strokes. (4) LEAPING / GLIDING frogs float alone on blank white.
    Caecilian sits on a minimal soil line. Background always blank white,
    no scene, no border, no text, no extra animals.
  - DENSITY MAP forks by integument — the per-subject variable: snakes as
    clean scale-rows (pattern species as bold reserved blocks); the SHELL
    is the hero on chelonians (scute geometry, star pattern, keeled spikes);
    osteoderm ridge-rows on crocodilians; warty tubercles as structured
    closed shapes on toads; smooth frogs lean on contour; poison frogs and
    the fire salamander become bold pattern blocks; gilled forms (axolotl,
    olm) get external gill-fronds as separated feathery frond-strokes.
  - SEA TURTLES live in Aquatic Beasts (the ~90%-submerged rule), surfacing
    here only via the clade lens — they are NOT catalogued in this file.
========================================================================
-->

# BEASTIQUE — Reptilian Beasts · Linocut Prompt Library

The merged herpetofauna gallery: 23 reptiles and 23 amphibians, curated so
every entry is a distinct carved object. Density maps are anchored on the
animal's real integument — scale-rows, shell scutes, osteoderm armor, warty
tubercles, smooth contour skin, bold aposematic pattern, or feathery
external gills — so the texture and the form are the same linework and the
result traces clean to vector.

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
  fragments, no ultra-thin lines that will not trace.
- **Contour** — One confident, bold, continuous outer outline; simplified
  silhouette. Interior texture is tapered strokes, wedge cuts, and the
  integument structure that follows the body's form.
- **Weight hierarchy** — Thick outer contour, medium interior shadow shapes,
  smaller-but-clean detail. Legible at both large and small sizes.
- **Density map (integument)** — Each animal carries an intentional
  dark/dense region and a lighter/open region, drawn from its real skin,
  scales, shell, or armor. The integument structure is the per-subject
  variable and the heart of each prompt — never random stipple.
- **Field (herp four-posture)** — Terrestrial forms get ground/belly
  shadow strokes; arboreal climbers grip a branch stub; aquatic/bottom forms
  sit on white with minimal water or substrate strokes; leaping/gliding
  frogs float on blank white. Background stays blank white. No scene, no
  border, no text, no extra animals.

## Naming Conventions

This is a MERGED gallery: reptiles and amphibians share one folder while
keeping distinct ID prefixes, so the frontend reads one "Reptilian Beasts"
while the dataset still knows a salamander from a skink.

### Prompt IDs

Format: `BQ-LINO-{CLASS}-{NNN}`. This file uses two class codes:

| Class code | Sub-taxon within Reptilian Beasts |
| ---------- | --------------------------------- |
| `REP`      | Reptiles (snakes, lizards, chelonians, crocodilians) |
| `AMP`      | Amphibians (frogs, toads, salamanders, newts, caecilians) |

Each series is numbered independently from 001.

### File outputs

| Artifact          | Pattern                                              | Example                                  |
| ----------------- | ---------------------------------------------------- | ---------------------------------------- |
| Prompt library    | `reptilian_beasts_linocut_prompts.md`                | (this file)                              |
| Raster render     | `{species-slug}_linocut-bw_{NN}.png`                 | `king-cobra_linocut-bw_01.png`           |
| Vector trace      | `{species-slug}_linocut-bw_{NN}.svg`                 | `king-cobra_linocut-bw_01.svg`           |
| Library folder    | `BEASTIQUE/studio/prompts/linocut/`                    | —                                        |
| Render folder     | `BEASTIQUE/studio/collections/reptilian-beasts/linocut/`    | (reptiles + amphibians together)         |

Slugs are lower-kebab. Both REP and AMP renders live under the unified
`reptilian-beasts/` render folder.

## The Library — Reptiles (REP)

### BQ-LINO-REP-001 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a king cobra reared into its iconic upright threat posture, the front third of the body raised vertically off a coiled base and the hood spread wide, head facing the viewer, styled as a commanding woodcut emblem and upgraded antique natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: a raised vertical forebody, the broad flared hood (narrower than a true cobra's, elongated), a blunt rounded head with fixed lidless eyes and a slightly open mouth showing the tongue, smooth large body scales, and the lower body gathered in a resting coil at the base. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the spread hood — render it as a clean bold shape with the smooth scale-rows fanning across it and the species' chevron throat-banding reserved as crisp pale bands. The density map: render the body scales as clean overlapping scale-rows that follow the curve of the raised forebody and the basal coil, darkening along the spine ridge and the shadowed underside of the coil, lighter across the hood face. The fixed eye and the flicking tongue are crisp focal accents. One bold continuous contour around the reared serpent and its coil. Weight hierarchy: thick contour, bold flared hood, clean scale-rows, dark coil shadow — legible large and small. Rising from a resting coil on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no jungle, no foliage, no background scene, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-002 · Gaboon Viper

*Bitis gabonica* · IUCN LC · slug `gaboon-viper` · output `gaboon-viper_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a gaboon viper coiled at rest with its massive head forward, styled as a bold woodcut emblem and upgraded antique natural-history engraving — a pattern showpiece. Center it in the frame with clean white space. Render the defining anatomy: an enormously broad triangular flat head (the widest head of any viper) with a pair of small raised nasal horns between the nostrils, a thick heavy body gathered in flat coils, and the signature geometric dorsal pattern of interlocking hourglasses, rectangles, and pale triangles running the length of the body. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the bold geometric pattern — render it as crisp reserved-white and solid-black interlocking shapes (hourglass and rectangle blocks edged clean) tiling along the coiled body, the unmistakable identifier; this pattern IS the density map. The massive flat head carries fine symmetric facial-scale lines, a sharp eye with vertical pupil, and the small nasal horns as crisp accents. Render the coil overlaps with a clean dark shadow where loops cross. One bold continuous contour around the coiled viper. Weight hierarchy: thick contour, bold geometric pattern blocks, broad patterned head — legible large and small. Coiled at rest on blank white with a few minimal ground strokes; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no leaf-litter scene, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-003 · Eyelash Viper

*Bothriechis schlegelii* · IUCN LC · slug `eyelash-viper` · output `eyelash-viper_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an eyelash viper coiled tightly on a thin branch, prehensile tail anchored, head raised in an alert S, styled as a jewel-like woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small triangular pit-viper head, the signature cluster of raised modified "eyelash" scales projecting over each eye like little horned lashes, a slender body of heavily keeled rough scales wound in a compact coil around a horizontal branch, and the prehensile tail tip gripping. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accent is the eyelash scales — render the raised supraocular fringe over each eye as crisp little separated spiky shapes, the unmistakable identifier. The density map: render the keeled body scales as a clean field of small overlapping pointed-keel scale-shapes (the rough beaded texture that distinguishes it from a smooth snake), following the tight coil and darkening where loops overlap and along the spine. The pit-viper eye with its vertical pupil and the heat-pit are crisp accents. One bold continuous contour around the coiled viper and the branch stub. Weight hierarchy: thick contour, eyelash-scale accent, keeled scale field — legible large and small. Coiled on a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no jungle, no foliage scene, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-004 · Green Tree Python

*Morelia viridis* · IUCN LC · slug `green-tree-python` · output `green-tree-python_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a green tree python draped over a horizontal branch in its signature resting posture — the body looped in neat symmetric coils saddled over the branch with the head resting in the center — styled as an elegant woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the distinctive draped-saddle silhouette (smooth even loops hanging in matched arcs on either side of a branch), a smooth-scaled muscular body, a blocky python head with deep labial heat-pits along the lips, and a fine vertebral line of pale dorsal markings. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the saddle-loop silhouette — keep the draped arcs clean, symmetric, and instantly readable as the identifying shape. The density map: render the smooth body scales as fine clean overlapping scale-rows that follow each looped arc, with a dark shadow where the loops stack and along the underside of each hang, and the row of pale vertebral spots reserved as a clean broken line down the spine. The blocky head with its labial pits and the eye are crisp accents. One bold continuous contour around the draped python and the branch. Weight hierarchy: thick contour, clean saddle loops, fine scale-rows, reserved spine line — legible large and small. Draped over a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft scales, no airbrush, no blurry edges, no rainforest, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-005 · Western Diamondback Rattlesnake

*Crotalus atrox* · IUCN LC · slug `western-diamondback-rattlesnake` · output `western-diamondback-rattlesnake_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a western diamondback rattlesnake in its defensive strike-ready coil — body gathered, neck drawn back into a raised striking S, tail lifted and the rattle erect and buzzing — styled as a tense woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a broad triangular pit-viper head with a sharp vertical-pupil eye and heat-pit, the raised striking-S neck, a heavy body in a defensive coil bearing the signature dorsal diamond pattern, the bold black-and-white banded "coon tail" just before the rattle, and the segmented keratin rattle held erect. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the diamond pattern plus the banded tail: render the row of dorsal diamonds as crisp reserved-white shapes outlined and centered against the darker body (the identifier), the keeled body scales as clean rows following the coil, and the pre-rattle tail as bold clean alternating black-and-white bands. The hero accents are the erect segmented rattle (rendered as crisp stacked interlocking segments) and the striking-S head. One bold continuous contour around the coiled, striking snake and raised rattle. Weight hierarchy: thick contour, reserved diamond pattern, banded tail, segmented rattle — legible large and small. Coiled on blank white with a few minimal ground strokes; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no desert scene, no rocks, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-006 · Green Anaconda

*Eunectes murinus* · IUCN LC · slug `green-anaconda` · output `green-anaconda_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a green anaconda — the most massive snake on Earth — gathered in heavy muscular coils with the blunt head raised at the water's edge, styled as a powerful woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space; the sheer bulk fills the composition. Render the defining anatomy: an immensely thick heavy-bodied serpent in stacked overlapping coils, a relatively small blunt head set with high dorsal eyes and nostrils (a near-aquatic ambush predator), and the signature dorsal pattern of large dark oval blotches along the back with smaller eye-spots on the flanks. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the mass — render the thick coils as bold stacked loops with deep clean shadows where the heavy body overlaps itself, conveying weight and girth. The density map: render the smooth body scales as clean scale-rows following the bulk, with the large dorsal oval blotches as bold reserved-dark shapes and the flank eye-spots as smaller clean rings (the identifier), darkest in the coil overlaps and the spine. The blunt head with high-set eyes and the flicking tongue are crisp accents. One bold continuous contour around the massive coiled anaconda. Weight hierarchy: thick contour, heavy coil mass, oval-blotch pattern — legible large and small. Coiled at the water's edge with at most a few minimal water-surface strokes at the base; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no swamp scene, no jungle, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-007 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Komodo dragon in a low-slung menacing stride, head low and the forked tongue extended, seen in left-facing profile, styled as a formidable woodcut emblem and upgraded antique natural-history engraving — the largest living lizard. Center it in the frame with clean white space. Render the defining anatomy: a long heavy muscular body carried low on bowed powerful limbs, a broad flat head with a strong jaw, the deeply forked tongue flicking out, loose folded leathery neck skin, robust clawed feet, and a long heavy muscular tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the beaded armored hide — render the skin as a clean field of small pebbled bead-scales (osteoderm granules) tiling over the body, larger and looser at the folded neck, finer along the limbs, darkening over the back and the shadowed flank and underbelly. The forked tongue, the heavy claws, and the muscular limb definition are crisp focal accents; the powerful jaw and small eye anchor the head. One bold continuous contour around the low-striding dragon. Weight hierarchy: thick contour, beaded hide field, muscular limbs, dark underbelly shadow — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no island scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-008 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a panther chameleon gripping a thin branch, the prehensile tail curled into a tight signature spiral, one turret eye swiveled toward the viewer, styled as an ornate woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a laterally compressed body, the tall bony casque (helmet ridge) on the head, the independently rotating turret eye in its conical scaled lid, the signature tightly coiled prehensile tail spiral, and the zygodactyl "mitten" feet (toes fused into opposed grasping bundles) clamped on the branch. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the coiled tail spiral — render it as a clean tightening scroll, the unmistakable identifier. The density map: render the granular skin as a fine even field of tiny bead-scales over the body, with a crest of small clean serrations along the spine and belly, the casque carrying ridge-lines, and bold reserved cross-bands suggested along the flank to model the patterned body. The turret eye (a bold cone with a small reserved pupil) and the mitten feet are crisp focal accents. One bold continuous contour around the chameleon, coiled tail, and branch. Weight hierarchy: thick contour, scroll-tail hero, granular skin, ridge crest — legible large and small. Gripping a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage scene, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-009 · Frilled Lizard

*Chlamydosaurus kingii* · IUCN LC · slug `frilled-lizard` · output `frilled-lizard_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a frilled lizard in full threat display — the great neck frill flared wide open in a circular ruff, mouth gaping, body reared up on the hind legs — styled as a dramatic woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space; the flared frill dominates the composition. Render the defining anatomy: the enormous circular pleated neck frill spread wide around the open gaping mouth, a wedge head, a slender body reared up on the hind legs in the bipedal threat stance, clawed feet, and a long whip tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the flared frill — render it as a great circular fan of radiating pleat-ridges (cartilage spokes) sweeping out from the neck, with clean radial fold-lines and reserved pale sectors so the membrane reads, the unmistakable identifier. The density map: render the body and tail in clean overlapping scale-rows with reserved banding, darkening over the back, while the frill carries the radial structure. The gaping mouth, the reared bipedal posture, and the clawed feet are crisp focal accents. One bold continuous contour around the reared, frilled lizard. Weight hierarchy: thick contour, radiating frill fan, gaping mouth, scaled body — legible large and small. Ground-standing/reared; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no outback scene, no tree, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-010 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a green iguana perched on a branch in left-facing profile, the dewlap extended and the dorsal crest erect, styled as a regal woodcut emblem and upgraded antique natural-history engraving. Center it in a wide composition with clean white space to honor the long tail. Render the defining anatomy: a blocky head with the signature large round subtympanic scale (cheek shield) below the ear, the big pendulous throat dewlap hanging beneath the jaw, the row of tall comb-like dorsal spines running from the nape down the back, a robust scaly body, clawed grasping feet on the branch, and a very long banded whip tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the erect dorsal spine-comb (render as a row of clean separated tapering spines along the spine) and the big round cheek shield. The density map: render the body in clean overlapping scale-rows that shift to fine pebbled scales on the limbs, with the dewlap carrying clean curved fold-lines, and the long tail in clean alternating reserved bands. The eye, the cheek shield, and the clawed feet are crisp focal accents. One bold continuous contour around the perched iguana and branch. Weight hierarchy: thick contour, spine-comb crest, scale-rows, banded tail — legible large and small. Gripping a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft scales, no airbrush, no blurry edges, no foliage scene, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-011 · Marine Iguana

*Amblyrhynchus cristatus* · IUCN VU · slug `marine-iguana` · output `marine-iguana_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a marine iguana hauled out on a lava rock in left-facing profile, head raised, styled as a rugged woodcut emblem and upgraded antique natural-history engraving — the only sea-foraging lizard, a Galápagos flagship. Center it in the frame with clean white space. Render the defining anatomy: a blunt squared snout (cropped for grazing algae), a low spiny dorsal crest of short stiff spines running the back, a stocky dark body of rough crusty scales, strong clawed feet for clinging to rock, and a long laterally flattened swimming tail. Optionally a suggestion of salt-crust texture on the crown. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: render the hide as a clean field of rough rugged scale-clusters and knobs (the crusty weathered texture), darkest over the back and the dorsal crest base, with the short spiny crest as a row of clean separated stubby spines. The blunt cropped snout (the key identifier distinguishing it from other iguanas) and the laterally compressed paddle-tail are crisp focal accents; the clawed grip anchors the rock. One bold continuous contour around the basking iguana and the rock. Weight hierarchy: thick contour, rugged scale field, short spine crest, blunt snout — legible large and small. On a rock with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no ocean scene, no waves, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-012 · Gila Monster

*Heloderma suspectum* · IUCN NT · slug `gila-monster` · output `gila-monster_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Gila monster in left-facing profile, low to the ground, head slightly raised, styled as a bold woodcut emblem and upgraded antique natural-history engraving — one of the few venomous lizards. Center it in the frame with clean white space. Render the defining anatomy: a heavy sausage-shaped body, a blunt rounded head with small bead-like eyes and a forked tongue, short sturdy clawed limbs, the signature fat tail (fat-storage organ), and the unmistakable beaded skin bearing a bold blotched-and-banded pattern. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the beaded skin plus the bold pattern: render the entire hide as a clean field of small raised round bead-scales (osteoderm beads, the signature texture — structured round shapes, never random stipple), and lay over it the bold reserved pattern of dark bands and blotches against lighter reticulated zones (the aposematic warning pattern, the identifier). The fat tail, the blunt head with forked tongue, and the clawed feet are crisp focal accents. One bold continuous contour around the squat lizard. Weight hierarchy: thick contour, beaded-skin field, bold reserved pattern blocks, fat tail — legible large and small. Ground-standing; a few horizontal belly/foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no desert scene, no rocks, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-013 · Tokay Gecko

*Gekko gecko* · IUCN LC · slug `tokay-gecko` · output `tokay-gecko_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a tokay gecko clinging head-up to a vertical surface, splayed flat in the classic gecko sprawl, styled as a striking woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a big broad head with a wide mouth, the signature large lidless eye with a vertical slit pupil and ornate patterned iris, a stout body with loose tubercled skin, splayed limbs, the unmistakable expanded toe-pads (each toe a broad fan of adhesive lamellae), and a banded regenerating tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the big lidless eye (render the vertical pupil and the fine radiating iris-lines crisply) and the splayed toe-pads (render each toe-fan with clean lamellar ridge-lines, the gripping identifier). The density map: render the skin as a clean field of fine granular scales studded with larger raised tubercles (the bumpy texture), carrying a bold pattern of reserved spots and mottling across the back, with the tail in clean reserved bands. One bold continuous contour around the splayed clinging gecko. Weight hierarchy: thick contour, big eye, lamellar toe-fans, tubercled spotted skin — legible large and small. Clinging to a vertical surface; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no wall scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-014 · Thorny Devil

*Moloch horridus* · IUCN LC · slug `thorny-devil` · output `thorny-devil_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a thorny devil standing in left-facing profile, styled as a bristling woodcut emblem and upgraded antique natural-history engraving — the spike-covered desert lizard. Center it in the frame with clean white space. Render the defining anatomy: a small squat lizard entirely studded with conical spines of varying size projecting from every surface — head, back, flanks, limbs, and tail — a small head with two large spikes above it, the signature false "second head" (a spiny knob on the back of the neck), short stout limbs, and a stiff spiky tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the armament of spikes — render the conical thorns as a field of clean separated tapering spike-shapes bristling from the whole body silhouette (the entire identifier), largest over the head and neck-knob, graded smaller along the limbs and tail. The density map: render the skin between the spines as a clean field of small ridged scales carrying a reserved maze-like pattern of pale and dark zones (the desert camouflage), with shadow pooling at the spine bases. The two head-horns and the false-head neck-knob are crisp focal accents. One bold continuous contour around the spiky lizard. Weight hierarchy: thick spiky contour, bristling spike field, patterned skin between — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no desert scene, no sand dunes, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-015 · Tuatara

*Sphenodon punctatus* · IUCN LC · slug `tuatara` · output `tuatara_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a tuatara in left-facing profile, low and alert, styled as a venerable woodcut emblem and upgraded antique natural-history engraving — the sole surviving rhynchocephalian, a living fossil that is not a lizard. Center it in the frame with clean white space. Render the defining anatomy: a robust lizard-like body (but distinctly archaic), a wedge head with a beak-like overhanging upper jaw and a fixed lidded eye, the signature crest of soft spiny folds running along the nape and spine (more pronounced in males), loose folded skin, sturdy clawed limbs, and a thick tapering tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accent is the dorsal crest — render it as a row of clean separated soft triangular spine-folds along the nape and back (the identifier), distinct from a hard lizard comb. The density map: render the skin as a clean field of fine granular scales with scattered larger reserved pale flecks (the "punctatus" speckling), loose folds at the throat and limb joints, darkening over the back and the shadowed underside. The beaked snout and the fixed eye are crisp focal accents; the clawed feet anchor the stance. One bold continuous contour around the tuatara. Weight hierarchy: thick contour, soft spine-fold crest, granular flecked skin, beaked head — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no burrow scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-016 · Green Basilisk

*Basiliscus plumifrons* · IUCN LC · slug `green-basilisk` · output `green-basilisk_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a green basilisk (the "Jesus Christ lizard") in an upright alert posture on a branch, the tall head and back crests displayed, styled as a flamboyant woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slender body, a small head bearing the signature tall rounded head-crest (a fin plume rising off the crown), the high membranous sail-crest running along the back and base of the tail (in the male), long slender limbs with the very long fringed toes that let it sprint across water, clawed grasping feet, and a long whip tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the crests — render the rounded head-plume and the tall dorsal sail as clean membranous fins supported by fine radiating spine-rays (the identifier). The density map: render the body in fine clean overlapping scale-rows with reserved pale flank-bars, the long toes splayed with clean fringe-scales, darkening over the back beneath the sail. The long fringed running-toes and the clawed grip are crisp focal accents. One bold continuous contour around the crested basilisk and branch. Weight hierarchy: thick contour, head-plume and dorsal sail, fine scale-rows, fringed toes — legible large and small. Gripping a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft scales, no airbrush, no blurry edges, no water scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-017 · Galápagos Giant Tortoise

*Chelonoidis niger* · IUCN VU · slug `galapagos-giant-tortoise` · output `galapagos-giant-tortoise_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Galápagos giant tortoise in left-facing profile, the long neck stretched up and forward, styled as a monumental woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a massive high-domed carapace built of large polygonal scutes, a long thick wrinkled neck extended upward, a blunt beaked head with an ancient hooded eye, columnar elephantine forelegs and hindlegs covered in heavy knobbed scales, and the heavy plastron edge. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the domed shell — render the carapace as clean tessellated polygonal scutes, each scute modeled with concentric growth-ring hatch radiating from its center (the identifier and the heart of the density map), darkening into the scute seams and along the shaded underside of the dome. The density map elsewhere: render the wrinkled neck and the elephantine legs as deep clean skin-fold hatch and heavy knobbed scale-clusters, the leathery hide of a great age. The beaked head with its hooded eye is a crisp focal accent. One bold continuous contour around the towering tortoise. Weight hierarchy: thick contour, growth-ring scute dome, wrinkled neck and columnar legs — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shell, no airbrush, no blurry edges, no island scene, no cactus, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-018 · Alligator Snapping Turtle

*Macrochelys temminckii* · IUCN VU · slug `alligator-snapping-turtle` · output `alligator-snapping-turtle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an alligator snapping turtle in a low three-quarter pose, the massive hooked beak slightly agape, styled as a prehistoric woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a huge rugged head with a sharply hooked raptorial beak and small fierce eyes set on the sides, the signature carapace bearing three prominent longitudinal ridges (keels) of raised pointed pyramidal scutes giving an armored "alligator-back" look, thick scaly limbs with heavy claws, and a long thick ridged tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the ridged spiked shell — render the three keeled rows of raised pyramidal scutes as clean bold ridge-peaks running the carapace (the unmistakable identifier), each scute modeled with growth hatch and deep seam shadow. The hooked beak (a crisp bold raptor-hook) and the rugged head are the second focal accent. The density map: render the head and limb skin as a clean field of coarse rough tubercled scales, the long tail with a serrated ridge, darkening into the shell seams and the shaded underbelly. One bold continuous contour around the low, armored turtle. Weight hierarchy: thick contour, keeled spiked carapace, hooked beak, rugged hide — legible large and small. On the bottom with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shell, no airbrush, no blurry edges, no riverbed scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-019 · Matamata

*Chelus fimbriata* · IUCN LC · slug `matamata` · output `matamata_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a matamata turtle in left-facing profile, the bizarre flat triangular head and snorkel snout forward, styled as a strange woodcut emblem and upgraded antique natural-history engraving — the leaf-mimic oddity. Center it in the frame with clean white space. Render the defining anatomy: a large flattened triangular head fringed with ragged skin flaps and tubercles, a long tube-like snorkel snout, tiny eyes set far forward, a long neck draped in frilled skin fringes (the leaf-litter camouflage), and the signature knobby ridged carapace built of three rows of raised conical-peaked scutes with rough sculptured surfaces. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the head-and-neck oddity — render the flat triangular head, the snorkel snout (a clean tube accent), and the ragged neck fringes as separated leaf-like flap-shapes (the camouflage identifier). The density map: render the gnarled carapace as clean rows of raised conical scutes, each ridged with concentric and radial growth hatch giving a craggy bark-like surface, darkening into the deep seams. The tiny forward eyes and the fringed flaps are crisp focal accents. One bold continuous contour around the strange turtle. Weight hierarchy: thick contour, craggy conical-scute shell, fringed flat head, snorkel snout — legible large and small. On the bottom with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shell, no airbrush, no blurry edges, no riverbed scene, no leaves, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-020 · Radiated Tortoise

*Astrochelys radiata* · IUCN CR · slug `radiated-tortoise` · output `radiated-tortoise_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a radiated tortoise in left-facing profile, head and neck raised, styled as an ornate woodcut emblem and upgraded antique natural-history engraving — a pattern showpiece, critically endangered. Center it in the frame with clean white space. Render the defining anatomy: a high-domed carapace built of polygonal scutes, each scute bearing the signature starburst pattern of fine lines radiating outward from a dark central node, a small head with a blunt beak on a raised scaly neck, and sturdy scaled clubbed limbs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the radiating star pattern — render each domed scute with a bold dark center and clean pale lines bursting outward to the scute edges in a starburst (the unmistakable identifier and the entire density map of the shell), the patterns tessellating crisply across the whole carapace, darkening into the seams. The density map elsewhere: render the neck and the clubbed legs as clean knobbed scale-clusters with their own reserved radiating markings, the leathery skin in fold hatch. The blunt beaked head is a crisp focal accent. One bold continuous contour around the domed tortoise. Weight hierarchy: thick contour, starburst scute pattern, knobbed legs, raised neck — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shell, no airbrush, no blurry edges, no habitat scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-021 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a saltwater crocodile in a raised "high walk" stance, left-facing profile, jaws parted to show the interlocking teeth, styled as an apex-predator woodcut emblem and upgraded antique natural-history engraving — the largest living reptile. Center it in a wide composition with clean white space. Render the defining anatomy: a long massive body held up off the ground on bowed muscular limbs, a long powerful head with a relatively narrow-to-moderate snout and a jagged tooth-line where upper and lower teeth interlock visibly, raised bony brow ridges over the eyes, the signature armored back of raised keeled osteoderm scutes in regular longitudinal rows, heavy clawed feet, and a long laterally compressed keeled tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the osteoderm armor — render the dorsal scutes as clean bold rows of raised keeled plates marching down the back and tail (each a defined ridged block with seam shadow), the unmistakable identifier. The density map: render the flank and limb hide as a clean field of rectangular and pebbled scales, the head with symmetric cranial-scale facets, darkening along the spine ridge and the shaded underbelly. The interlocking teeth, the brow ridges, and the clawed feet are crisp focal accents. One bold continuous contour around the high-walking crocodile. Weight hierarchy: thick contour, osteoderm ridge-rows, toothy jaws, armored hide — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no river scene, no water, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-022 · American Alligator

*Alligator mississippiensis* · IUCN LC · slug `american-alligator` · output `american-alligator_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an American alligator resting low in left-facing profile, jaws closed, styled as a powerful woodcut emblem and upgraded antique natural-history engraving. Center it in a wide composition with clean white space. Render the defining anatomy: a heavy body low to the ground, the signature broad rounded U-shaped snout (the key feature distinguishing it from a crocodile), a closed mouth where the teeth are hidden behind the overhanging upper jaw, raised eyes and nostrils on top of the head, the armored back of raised keeled osteoderm scutes in regular rows, short stout clawed limbs, and a long keeled muscular tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the broad rounded snout (render it as a clean wide blunt U, the identifier) together with the osteoderm armor — render the dorsal scutes as clean bold rows of raised keeled plates down the back and tail with deep seam shadow. The density map: render the flank and limb hide as a clean field of rectangular plate-scales and pebbled skin, the head with symmetric cranial facets, darkening along the spine and the shaded underbelly. The raised eyes and the clawed feet are crisp focal accents. One bold continuous contour around the resting alligator. Weight hierarchy: thick contour, broad rounded snout, osteoderm ridge-rows, plated hide — legible large and small. Ground-standing/resting; a few horizontal belly-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no swamp scene, no water, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-REP-023 · Gharial

*Gavialis gangeticus* · IUCN CR · slug `gharial` · output `gharial_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a gharial in left-facing profile, the unmistakable needle snout raised, styled as a distinctive woodcut emblem and upgraded antique natural-history engraving — a critically endangered fish-eating crocodilian. Center it in a wide composition with clean white space. Render the defining anatomy: a long slender body, the signature extremely long, thin, needle-like snout lined with rows of fine interlocking needle teeth, the male's bulbous "ghara" knob at the snout tip, eyes set high, the armored back of raised keeled osteoderm scutes, slender limbs less suited to land, and a long powerful keeled swimming tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the needle snout — render it as a clean long thin bar lined with fine even tooth-marks along both jaws and tipped with the bulbous ghara knob (the unmistakable identifier). The density map: render the dorsal osteoderm scutes as clean rows of raised keeled plates down the back and tail with seam shadow, the flank hide as a clean field of plate-scales and pebbled skin, darkening along the spine and the shaded underside. The high-set eye and the slender limbs are crisp focal accents. One bold continuous contour around the long-snouted gharial. Weight hierarchy: thick contour, needle snout with ghara, osteoderm ridge-rows, plated hide — legible large and small. Ground-resting at the water's edge with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft scales, no airbrush, no blurry edges, no river scene, no water, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

## The Library — Amphibians (AMP)

### BQ-LINO-AMP-001 · Red-eyed Tree Frog

*Agalychnis callidryas* · IUCN LC · slug `red-eyed-tree-frog` · output `red-eyed-tree-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a red-eyed tree frog perched on a leaf-stem in its iconic alert crouch, big eyes wide, styled as a vivid woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a smooth slender body, the signature huge bulging round eyes (render the famously large eyes as bold reserved domes with a clean vertical pupil), a sleek head, long folded limbs tucked close, the signature broad adhesive toe-pads on splayed fingers gripping the stem, and the flank showing the species' barred side-pattern. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the pair of huge eyes — render them as the boldest focal accents, large clean domes set high on the head. The density map: this is a smooth-skinned subject, so build the body from a confident contour and fine directional skin-hatch over the back, with the signature vertical flank-bars rendered as clean reserved stripes along the side (the identifier), and the broad toe-pads drawn as clean rounded grip-discs. Keep the belly and much of the body open white. One bold continuous contour around the crouched frog and the stem. Weight hierarchy: thick contour, huge bold eyes, reserved flank-bars, grip-pads — legible large and small. Gripping a short leaf-stem stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no red, no green, no photographic realism, no soft skin, no airbrush, no blurry edges, no rainforest scene, no leaves, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-002 · White's Tree Frog

*Litoria caerulea* · IUCN LC · slug `whites-tree-frog` · output `whites-tree-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a White's tree frog perched plumply on a branch in left-facing three-quarter, wearing its signature placid drowsy expression, styled as a charming woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a fat rounded smooth-skinned body, the signature heavy fatty ridges drooping over the eyes (the sleepy hooded look), a wide gentle mouth-line, plump folded limbs, and the large rounded adhesive toe-pads gripping the branch. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. This is a smooth, rounded subject driven by contour rather than texture: build the plump form from a confident bold outline and gentle directional skin-hatch that pools into soft shadow under the drooping fat folds, the rounded haunch, and the chin. The hero accents are the heavy hooded fatty brow-ridges (the sleepy identifier), the gentle mouth-line, and the big rounded toe-pads. Keep much of the body open white so the roundness reads. One bold continuous contour around the plump perched frog and the branch. Weight hierarchy: thick contour, hooded fatty brows, soft fold shadows, grip-pads — legible large and small. Gripping a short branch stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no terrarium scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-003 · Wallace's Flying Frog

*Rhacophorus nigropalmatus* · IUCN LC · slug `wallaces-flying-frog` · output `wallaces-flying-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of Wallace's flying frog in a mid-glide parachute pose, all four limbs splayed wide and the enormous webbed feet fully spread, seen from a front-three-quarter angle, styled as a dynamic woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space; the spread limbs reach toward the corners. Render the defining anatomy: a streamlined body flattened for gliding, a blunt head with large eyes, four limbs splayed out symmetrically, and the signature greatly enlarged hands and feet with full webbing stretched taut between very long fingers and toes (the gliding parachutes), the toe-pads broad at the tips. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the spread webbed feet — render the taut interdigital webbing as clean membrane fans supported by the long radiating finger-and-toe struts (the gliding identifier), the broad pads at the tips as clean discs. The density map: this is a smooth subject — build the body from a confident contour and fine directional skin-hatch over the back, darkening at the limb-joints and the body's underside, with the webbing kept mostly open so the membranes read as bright glide-surfaces. The large eyes are crisp focal accents. One bold continuous contour around the gliding, splay-limbed frog. Weight hierarchy: thick contour, spread web-fans, long struts, smooth body — legible large and small. In mid-glide, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft airbrush, no blurry edges, no motion blur, no rainforest scene, no canopy, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-004 · Vietnamese Mossy Frog

*Theloderma corticale* · IUCN LC · slug `vietnamese-mossy-frog` · output `vietnamese-mossy-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Vietnamese mossy frog hunched on a wet rock, styled as a textural woodcut emblem and upgraded antique natural-history engraving — the living-moss camouflage specialist. Center it in the frame with clean white space. Render the defining anatomy: a squat rounded body whose entire skin is covered in raised tubercles, bumps, spiny warts, and ridged folds that mimic a clump of moss and bark, a broad head with eyes tucked into the lumpy texture, tucked muscular limbs, and toe-pads gripping the rock. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the mossy tubercled skin — render the entire body surface as a clean dense field of raised bumps, warty knobs, spiny points, and ridged folds (structured closed shapes each with a base shadow, never random stipple), clustered and varied so the camouflage texture reads as the identifier, with reserved pale mottle-zones breaking up the form. The density map IS this bumpy texture: pool the deepest shadow into the crevices between tubercles and under the body, keep the raised bump-tops lighter. The eyes hidden in the texture and the gripping toe-pads are crisp focal accents. One bold continuous knobbly contour around the hunched frog and rock. Weight hierarchy: thick bumpy contour, dense tubercle field, reserved mottle-zones — legible large and small. Gripping a rock/stub with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft airbrush, no blurry edges, no pond scene, no moss background, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-005 · Glass Frog

*Hyalinobatrachium fleischmanni* · IUCN LC · slug `glass-frog` · output `glass-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a glass frog perched on a leaf-stem, viewed slightly from below to show its famous translucency, styled as a delicate woodcut emblem and upgraded antique natural-history engraving — the open-white wildcard of the collection. Center it in the frame with clean white space. Render the defining anatomy: a small smooth slender frog, large pale upward-tilted eyes, slim limbs folded close, broad toe-pads gripping the stem, and the signature translucent underside through which the internal organs and fine bones are faintly visible. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. This subject INVERTS the usual density map: keep the body almost entirely OPEN white, building the frog from a confident delicate contour and the most restrained marks, so the emptiness reads as transparency. Concentrate the limited darkness in: the large eyes (the strongest accents, crisp clean domes), the faint reserved hint of internal structure low in the belly (a soft suggestion of the visible organs and a thread of skeleton, kept subtle — the translucency identifier), and a few fine shadow strokes under the limbs and along the contour. Render the toe-pads as clean grip-discs. The white IS the subject. One bold continuous contour around the perched glass frog and the stem. Weight hierarchy: thick delicate contour, bold eyes, faint reserved innards, open translucent body — legible large and small. Gripping a short leaf-stem stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft airbrush, no blurry edges, no over-darkened body, no rainforest scene, no leaves, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-006 · Dyeing Poison Frog

*Dendrobates tinctorius* · IUCN LC · slug `dyeing-poison-frog` · output `dyeing-poison-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a dyeing poison frog in a low alert stance on the forest floor, seen in three-quarter, styled as a bold woodcut emblem and upgraded antique natural-history engraving — a pattern showpiece. Center it in the frame with clean white space, the small frog rendered large and bold. Render the defining anatomy: a small smooth-skinned dart frog with a rounded body, a blunt head with large dark eyes, short sturdy limbs, and small toe-pads; and most importantly the signature bold aposematic pattern of dark and pale zones — irregular dark masses webbing across a lighter back with stippled/marbled limbs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the pattern — render the bold aposematic markings as crisp reserved-white and solid-black zones: dark river-like bands and blotches sweeping across a reserved-pale back (the identifier), with the limbs carrying a clean fine reticulated speckle-pattern. The pattern IS the density map — there is little other texture; let the bold blocks do the work against a smooth contour. The large dark eyes are crisp focal accents. One bold continuous contour around the small frog. Weight hierarchy: thick contour, bold reserved pattern zones, reticulated limbs — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no rainforest scene, no leaf-litter, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-007 · Golden Poison Frog

*Phyllobates terribilis* · IUCN EN · slug `golden-poison-frog` · output `golden-poison-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a golden poison frog in a low alert stance on a leaf, seen in three-quarter, styled as a clean woodcut emblem and upgraded antique natural-history engraving — the most toxic frog on Earth, deceptively simple. Center it in the frame with clean white space, the small frog rendered large and bold. Render the defining anatomy: a small smooth-skinned dart frog with a rounded body, a blunt head with large dark eyes, relatively long sturdy limbs, fine adhesive toe-pads, and the species' uniform unmarked skin (no bold pattern — its uniformity is its look). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Because the frog is uniform and smooth, build the form from a confident bold contour and clean directional skin-hatch following the body's curves — enough to model the rounded back, the haunch, and the gathered limbs while keeping it distinct from a solid-black or empty silhouette. The density map: pool gentle shadow under the chin, the belly, the limb-folds, and the haunch, keeping the upper back and head more open; a faint fine skin-grain over the back. The large dark eyes, the slightly downturned mouth, and the grip-pads are crisp focal accents. One bold continuous contour around the small frog. Weight hierarchy: thick contour, smooth modeled body, clean shadow pooling, bold eyes — legible large and small. On a leaf/ground with a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no gold, no photographic realism, no soft airbrush, no blurry edges, no rainforest scene, no leaves, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-008 · Goliath Frog

*Conraua goliath* · IUCN EN · slug `goliath-frog` · output `goliath-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a goliath frog crouched powerfully on a wet rock, left-facing three-quarter, styled as a weighty woodcut emblem and upgraded antique natural-history engraving — the largest frog alive. Center it in the frame with clean white space. Render the defining anatomy: a massive muscular true-frog body, a broad flat head with a wide mouth and large eyes set with a clear tympanum behind each, immensely powerful folded hind legs bunched with muscle, robust forelimbs propping the front up, and large partly-webbed feet planted on the rock. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the muscular mass — render the bunched, powerful hind-leg musculature with clean directional contour hatch that models the thigh and shank volume (the strength identifier), the broad shoulders propped on stout arms. The density map: this is a smooth-skinned frog, so build it from a confident bold contour and fine skin-grain hatch over the granular back, pooling deep shadow under the body, the throat, and between the muscle masses, keeping the highlights on the rounded muscle-tops open. The large eye with its tympanum and the planted webbed feet are crisp focal accents. One bold continuous contour around the crouched giant frog and the rock. Weight hierarchy: thick contour, muscular hind-leg modeling, deep body shadow, granular back — legible large and small. Crouched on a rock with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no river scene, no waterfall, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-009 · African Bullfrog

*Pyxicephalus adspersus* · IUCN LC · slug `african-bullfrog` · output `african-bullfrog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an African bullfrog squatting in a broad aggressive stance, front-three-quarter, mouth set in a wide grim line, styled as a hefty woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an enormously fat squat body, a very wide head with a huge wide mouth and a heavy jaw, small high-set eyes, the signature longitudinal skin ridges and folds running down the back, stout muscular limbs braced wide, and big blunt-toed feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the squat bulk and wide mouth — render the broad domed body and the grim wide mouth-line as the dominant masses (the bruiser identifier). The density map: render the signature dorsal skin as a clean field of raised longitudinal ridges and folds (parallel ridge-strokes running front-to-back, the texture identifier), pooling shadow into the fold-grooves, under the heavy jaw, the belly, and the braced limbs, with reserved pale ridge-tops. The wide mouth-line, the small high eyes, and the braced blunt feet are crisp focal accents. One bold continuous contour around the squat bullfrog. Weight hierarchy: thick contour, ridged dorsal folds, heavy bulk, wide mouth — legible large and small. Ground-standing; a few horizontal belly/foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no savanna scene, no mud, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-010 · Argentine Horned Frog

*Ceratophrys ornata* · IUCN NT · slug `argentine-horned-frog` · output `argentine-horned-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Argentine horned frog (Pacman frog) squatting front-on, the enormous mouth dominating, styled as a comical-yet-fierce woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a nearly circular squat body that is mostly mouth, an immense wide gape spanning the whole front of the head, the signature pointed fleshy "horns" (raised eyelid projections) over each eye, small tucked limbs almost lost beside the bulk, and a bold mottled dorsal pattern. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the round-blob-that-is-all-mouth silhouette — render the vast mouth-line sweeping across the front and the circular body as the dominant shape (the unmistakable identifier), with the pointed eyelid-horns as crisp accents above. The density map: render the dorsal skin with a bold reserved pattern of dark blotches and rings against lighter zones (the ornate camouflage), and a clean field of low warty bumps over the back, pooling shadow under the jaw, the body, and into the pattern's dark masses. The horned eyes and the wide grin are the focal accents. One bold continuous contour around the round mouthy frog. Weight hierarchy: thick contour, dominant mouth and round body, eyelid-horns, bold pattern — legible large and small. Ground-standing/half-settled; a few horizontal belly-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no terrarium scene, no leaf-litter, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-011 · Malayan Horned Frog

*Megophrys nasuta* · IUCN LC · slug `malayan-horned-frog` · output `malayan-horned-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Malayan horned frog settled among the leaf litter in left-facing three-quarter, styled as an angular woodcut emblem and upgraded antique natural-history engraving — the dead-leaf mimic. Center it in the frame with clean white space. Render the defining anatomy: a squat body whose outline is broken into sharp angular points, the signature long pointed fleshy horns projecting from each upper eyelid and a matching pointed projection on the snout (the three-point leaf-mimic profile), prominent skin ridges sweeping back from the eyes across the body like leaf veins, and tucked limbs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the angular dead-leaf silhouette — render the sharp eyelid-horns and snout-point and the sweeping dorsal ridges as clean angular edges and ridge-lines (the leaf-mimic identifier), so the whole frog reads like a folded dry leaf. The density map: render the dorsal skin with reserved pale and dark zones mimicking a leaf's light-and-shadow, the prominent supraocular-to-back ridges as clean raised ridge-strokes (the leaf veins), pooling shadow beneath the ridges and the body. The horned eyes and the pointed snout are crisp focal accents. One bold continuous angular contour around the leaf-mimic frog. Weight hierarchy: thick angular contour, horns and ridge-veins, reserved leaf-zones — legible large and small. Settled on the ground with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no leaf-litter scene, no foliage, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-012 · Cane Toad

*Rhinella marina* · IUCN LC · slug `cane-toad` · output `cane-toad_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a cane toad squatting in left-facing three-quarter, styled as a textural woodcut emblem and upgraded antique natural-history engraving — the representative warty toad of the collection. Center it in the frame with clean white space. Render the defining anatomy: a large heavy-bodied toad, a broad blunt head with bony crests over the eyes, the signature huge swollen parotoid glands bulging behind each eye on the shoulders, dry warty skin covering the entire body, short stout limbs, and blunt unwebbed-looking toes planted on the ground. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero accents are the big parotoid glands (render as clean swollen smooth-topped bulges behind the eyes, the identifier) and the bony cranial crests. The density map is the warty skin — render the entire body surface as a clean field of raised round warts and tubercles of varied size (structured closed bumps each with a base shadow, never random stipple), denser and coarser over the back and limbs, pooling shadow into the spaces between warts and under the squat body, with reserved pale wart-tops. The blunt head, the heavy-lidded eye, and the planted feet are crisp focal accents. One bold continuous warty contour around the squat toad. Weight hierarchy: thick contour, parotoid bulges, dense wart field, squat bulk — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no garden scene, no grass, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-013 · Surinam Toad

*Pipa pipa* · IUCN LC · slug `surinam-toad` · output `surinam-toad_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Surinam toad hanging in the water column, splayed flat, seen from a top-three-quarter angle, styled as a strange angular woodcut emblem and upgraded antique natural-history engraving — the flat aquatic oddity. Center it in the frame with clean white space. Render the defining anatomy: an extremely flattened, squared, leaf-like body, a flat triangular head with tiny lidless eyes set far forward and near the edges, no tongue and a wide lipless mouth-line, four limbs splayed straight out to the sides, the signature star-tipped fingers (each forefinger ending in a tiny star-shaped sensory tuft), and large fully-webbed hind feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the flat squared silhouette — render the angular leaf-flat body and the straight splayed limbs as the dominant unmistakable shape, with the star-tipped fingers as crisp tiny accents and the big webbed hind feet as clean membrane fans. The density map: render the flat dorsal skin with a fine clean texture and a subtle reserved midline and edge-folds, the limbs with clean banding, pooling light shadow along the body edges and limb undersides to give the flatness form. The tiny far-set eyes and the star-fingers are crisp focal accents. One bold continuous angular contour around the splayed toad. Weight hierarchy: thick angular contour, flat squared body, splayed limbs, star-fingers — legible large and small. Hanging in water, floating alone on blank white with at most a few minimal water strokes; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no aquarium scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-014 · Hairy Frog

*Trichobatrachus robustus* · IUCN LC · slug `hairy-frog` · output `hairy-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a hairy frog (the "horror frog") crouched in left-facing three-quarter during breeding condition, styled as a bizarre woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a robust muscular true-frog body, a broad head with a wide mouth and large eyes, powerful limbs, and the signature breeding feature — dense hair-like dermal filaments (papillae) growing along the flanks and the outer thighs of the body, looking like coarse fur. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the dermal "hair" — render the filaments along the flanks and thighs as a clean dense fringe of fine separated tapering filament-strokes that hang and overlap (the unmistakable identifier), distinct in texture from the smooth body. The density map: render the body itself as smooth-skinned built from a confident contour and fine skin-grain hatch, pooling shadow under the body, the jaw, and the muscular limbs, so the hairy fringe stands out against the smoother torso. The wide mouth, the large eyes, and the powerful feet are crisp focal accents. One bold continuous contour around the crouched hairy frog. Weight hierarchy: thick contour, hanging filament fringe, smooth modeled body, muscular limbs — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no forest-floor scene, no leaf-litter, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-015 · Darwin's Frog

*Rhinoderma darwinii* · IUCN EN · slug `darwins-frog` · output `darwins-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Darwin's frog perched alert on the forest floor in left-facing profile, styled as a delicate woodcut emblem and upgraded antique natural-history engraving — the pointy-nosed mouth-brooder. Center it in the frame with clean white space, the small frog rendered large and bold. Render the defining anatomy: a small slender frog, the signature long pointed fleshy proboscis-like snout projecting forward from the nose (the leaf-mimic identifier), large eyes, a slim body that narrows to the pointed nose, slender limbs, and fine toes. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the pointed snout — render the forward-projecting proboscis as a clean tapering point continuing the body line into a dead-leaf tip (the unmistakable identifier). The density map: this is a smooth, slim subject — build it from a confident contour and fine directional skin-hatch over the back, with reserved pale-and-dark dorsal zones suggesting the leaf camouflage, pooling shadow along the belly, the limb-folds, and under the pointed snout. The large eye and the slim grasping toes are crisp focal accents. One bold continuous contour around the pointy-nosed frog. Weight hierarchy: thick contour, pointed snout, smooth leaf-camo body, fine limbs — legible large and small. On the ground with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no forest scene, no leaf-litter, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-016 · Purple Frog

*Nasikabatrachus sahyadrensis* · IUCN EN · slug `purple-frog` · output `purple-frog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a purple frog (Indian purple frog) emerging from the soil, seen front-three-quarter, styled as a strange bloated woodcut emblem and upgraded antique natural-history engraving — the burrowing pig-nosed oddity. Center it in the frame with clean white space. Render the defining anatomy: a grossly bloated rotund balloon-like body, a tiny head fused into the bulk with a small pointed pig-like snout and a tiny hardened nose-tip, very small beady eyes, short stout burrowing limbs with spade-like inner feet, and smooth glossy loose skin. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the bloated round silhouette — render the swollen balloon body as the dominant unmistakable shape (a near-sphere with limbs), tapering to the comically tiny pointed snout (the pig-nose identifier). The density map: this is a smooth glossy subject — build the rotund form from a confident bold contour and clean directional skin-hatch that wraps the sphere to model its volume, pooling shadow under the heavy body, the limb-folds, and the chin, with reserved highlight kept on the bulging top so the gloss and roundness read. The tiny pointed snout, the beady eyes, and the spade-feet are crisp focal accents. One bold continuous contour around the bloated frog and the soil it emerges from. Weight hierarchy: thick contour, dominant round body, tiny pig-snout, wrapped volume hatch — legible large and small. Half-emerged from a minimal soil line; background blank white, no scene.
Negative prompt: no grayscale, no color, no purple, no photographic realism, no soft airbrush, no blurry edges, no jungle scene, no mud background, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-017 · Axolotl

*Ambystoma mexicanum* · IUCN CR · slug `axolotl` · output `axolotl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an axolotl hanging in the water in left-facing profile, the famous gill fronds fanned out, wearing its signature gentle smile, styled as an endearing woodcut emblem and upgraded antique natural-history engraving — the neotenic darling of the collection, critically endangered. Center it in the frame with clean white space. Render the defining anatomy: a soft cylindrical body, a broad rounded head with the signature upturned smiling mouth-line and tiny lidless dot-eyes, the three pairs of external feathery gill stalks branching off the neck like plumes, four slender limbs with delicate fingers and toes, and a long laterally finned tail (a fin-crest running the dorsal line into the tail). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the external gills — render the three pairs of gill stalks as clean separated feathery fronds, each stalk lined with fine branching filament-strokes fanning outward (the unmistakable identifier). The density map: this is a smooth, soft, pale subject — build the body from a confident gentle contour and fine directional skin-hatch, pooling soft shadow along the belly, under the limbs, and beneath the tail-fin, keeping the back and the smiling face open and light. The smiling mouth, the dot-eyes, and the finned tail are crisp focal accents. One bold continuous contour around the smiling axolotl. Weight hierarchy: thick gentle contour, feathery gill fronds, smiling face, finned tail — legible large and small. Hanging in water, floating alone on blank white with at most a few minimal water strokes; no scene.
Negative prompt: no grayscale, no color, no pink, no photographic realism, no soft airbrush, no blurry edges, no aquarium scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-018 · Chinese Giant Salamander

*Andrias davidianus* · IUCN CR · slug `chinese-giant-salamander` · output `chinese-giant-salamander_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a Chinese giant salamander resting on a streambed in left-facing profile, styled as an ancient woodcut emblem and upgraded antique natural-history engraving — the largest amphibian on Earth, critically endangered. Center it in a wide composition with clean white space. Render the defining anatomy: a long heavy flattened body, a very broad blunt flat head with a wide mouth-line and tiny lidless dot-eyes set far apart, the signature loose wrinkled skin folds running in a fringe along each flank (the surface-area folds for skin-breathing), short stubby limbs with rounded toes, and a long laterally compressed paddle tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the lateral skin fringe — render the loose wrinkled flank folds as a clean wavy fringe of overlapping skin-flaps running the length of the body (the identifier), distinct from the smoother back. The density map: render the broad flat head and the mottled back with a clean field of fine tubercled skin and reserved dark blotches (the camouflage mottle), pooling shadow under the body, into the flank folds, and beneath the head, with the dorsal surface kept flatter and lighter. The wide mouth-line, the tiny far-set eyes, and the paddle tail are crisp focal accents. One bold continuous contour around the resting giant salamander. Weight hierarchy: thick contour, wavy flank fringe, broad flat head, mottled back — legible large and small. On the streambed with a few minimal substrate strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no riverbed scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-019 · Fire Salamander

*Salamandra salamandra* · IUCN LC · slug `fire-salamander` · output `fire-salamander_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a fire salamander in left-facing profile, mid-stride, head slightly raised, styled as a bold woodcut emblem and upgraded antique natural-history engraving — a pattern showpiece. Center it in the frame with clean white space. Render the defining anatomy: a glossy smooth-skinned salamander with a robust rounded body, a broad head with prominent paired parotoid glands behind the eyes, large dark eyes, four short sturdy limbs, a rounded tail, and the signature bold aposematic pattern of irregular bright blotches and bands over a dark ground. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the pattern — render the body as a solid clean black ground with the bold warning markings reserved as crisp bright blotches, bars, and patches scattered along the back, head, and limbs (the unmistakable identifier); the pattern IS the density map, doing the work in bold reserved shapes against the dark body. The density map elsewhere: keep the skin glossy and smooth, with a few reserved highlight glints along the rounded back and parotoid glands to read the sheen. The paired parotoid glands, the large dark eyes, and the sturdy feet are crisp focal accents. One bold continuous contour around the striding salamander. Weight hierarchy: solid black body, bold reserved blotch pattern, glossy highlights, parotoid glands — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no yellow, no photographic realism, no soft airbrush, no blurry edges, no forest-floor scene, no moss, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-020 · Marbled Salamander

*Ambystoma opacum* · IUCN LC · slug `marbled-salamander` · output `marbled-salamander_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a marbled salamander in left-facing profile, low and stocky, styled as a crisp woodcut emblem and upgraded antique natural-history engraving — the boldly banded mole salamander. Center it in the frame with clean white space. Render the defining anatomy: a stocky chunky-bodied mole salamander, a broad rounded head with a blunt snout and dark eyes, short sturdy limbs, a thick rounded tail, and the signature pattern of bold pale crossbands saddling the dark back from neck to tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the crossband pattern — render the body as a solid clean dark ground crossed by the series of bold reserved-white saddle-bands marching down the back (the unmistakable identifier, distinguishing it instantly from a spotted or striped salamander); the bands are crisp clean shapes with defined edges, the pattern doing the density work. The density map elsewhere: keep the skin smooth with a few reserved highlight glints along the chunky back and tail to read the form, pooling shadow under the stocky body and limbs. The blunt head, the dark eyes, and the sturdy feet are crisp focal accents. One bold continuous contour around the stocky salamander. Weight hierarchy: solid dark body, bold reserved crossbands, chunky form — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no forest-floor scene, no leaf-litter, no background, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-021 · Great Crested Newt

*Triturus cristatus* · IUCN LC · slug `great-crested-newt` · output `great-crested-newt_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a great crested newt (breeding male) in left-facing profile in its aquatic display, the tall jagged crest raised, styled as a dramatic woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slender newt body, a broad head, the signature tall jagged dorsal crest rising along the back in a saw-toothed ridge and continuing as a separate finned crest along the tail, warty rough skin, slender limbs with fine toes, and a laterally compressed swimming tail bearing the male's pale tail-stripe. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the jagged crest — render the saw-toothed dorsal crest and the separate tall tail-fin as clean ragged membranous ridges with fine supporting strokes (the breeding-male identifier, the distinctive profile). The density map: render the rough skin as a clean field of fine warty tubercles over the dark back, pooling shadow along the belly and limb-folds, with a reserved pale stripe along the tail and a suggestion of the spotted belly at the lower edge. The broad head, the eye, and the fine swimming toes are crisp focal accents. One bold continuous contour around the crested newt. Weight hierarchy: thick contour, jagged dorsal and tail crests, warty skin, pale tail-stripe — legible large and small. In water, floating alone on blank white with at most a few minimal water strokes; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no pond scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-022 · Olm

*Proteus anguinus* · IUCN VU · slug `olm` · output `olm_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an olm hanging in cave water in left-facing profile, styled as a ghostly woodcut emblem and upgraded antique natural-history engraving — the blind cave salamander, "the human fish." Center it in the frame with clean white space. Render the defining anatomy: a long slender pale eel-like body, a flattened elongated head with a blunt rounded snout and vestigial skin-covered eyes (blind, no visible eye-domes), the signature pair of feathery external red gill tufts at the neck, very thin spindly limbs with reduced toes (three on the front, two on the back), and a finned paddle tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. This is a pale, ghostly subject INVERTING the density map: keep the long eel-body almost entirely OPEN white, building it from a confident slender contour and the most restrained skin-hatch, so the emptiness reads as the colorless cave-dweller. Concentrate the limited darkness in: the feathery external gill tufts (the strongest focal accent, rendered as clean separated branching frond-strokes at the neck), a few fine shadow strokes along the underside of the body and the tail-fin, and the subtle blunt head with its skin-covered eye-spots. The spindly limbs are clean fine lines. The white IS the subject. One bold continuous contour around the slender olm. Weight hierarchy: slender contour, feathery gill tufts, open pale body, finned tail — legible large and small. Hanging in cave water, floating alone on blank white with at most a few minimal water strokes; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no over-darkened body, no cave scene, no water column, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AMP-023 · Ringed Caecilian

*Siphonops annulatus* · IUCN LC · slug `ringed-caecilian` · output `ringed-caecilian_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a ringed caecilian partly emerged from the soil in a gentle curve, styled as a strange woodcut emblem and upgraded antique natural-history engraving — the limbless burrowing amphibian, sole representative of its order in the collection. Center it in the frame with clean white space, the body arranged in a clean readable S-curve. Render the defining anatomy: a long limbless cylindrical worm-like body with no limbs at all, a blunt rounded head with a small mouth and tiny vestigial eyes nearly hidden under skin, and the signature series of evenly spaced annular rings (encircling skin grooves) segmenting the entire body along its length. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the annular ring segmentation — render the encircling grooves as a clean even series of ring-lines wrapping the cylindrical body from head to tail (the unmistakable identifier that separates a caecilian from any snake or worm), each ring crisp and following the body's curve. The density map: pool clean shadow into each annular groove and along the underside of the curved body to give the cylinder volume, keeping the ring-segment tops smooth and lighter, the smooth glossy skin reading between the grooves. The blunt head, the tiny mouth, and the soil-line emergence are crisp focal accents. One bold continuous contour around the curving limbless body. Weight hierarchy: thick contour, even annular rings, cylindrical volume, blunt head — legible large and small. Partly emerged from a minimal soil line; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no soil scene, no worms, no snake features, no limbs, no background, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

## Roster Index

| Reptiles (REP) | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | King Cobra | *Ophiophagus hannah* | `king-cobra` | VU |
| 002 | Gaboon Viper | *Bitis gabonica* | `gaboon-viper` | LC |
| 003 | Eyelash Viper | *Bothriechis schlegelii* | `eyelash-viper` | LC |
| 004 | Green Tree Python | *Morelia viridis* | `green-tree-python` | LC |
| 005 | Western Diamondback Rattlesnake | *Crotalus atrox* | `western-diamondback-rattlesnake` | LC |
| 006 | Green Anaconda | *Eunectes murinus* | `green-anaconda` | LC |
| 007 | Komodo Dragon | *Varanus komodoensis* | `komodo-dragon` | EN |
| 008 | Panther Chameleon | *Furcifer pardalis* | `panther-chameleon` | LC |
| 009 | Frilled Lizard | *Chlamydosaurus kingii* | `frilled-lizard` | LC |
| 010 | Green Iguana | *Iguana iguana* | `green-iguana` | LC |
| 011 | Marine Iguana | *Amblyrhynchus cristatus* | `marine-iguana` | VU |
| 012 | Gila Monster | *Heloderma suspectum* | `gila-monster` | NT |
| 013 | Tokay Gecko | *Gekko gecko* | `tokay-gecko` | LC |
| 014 | Thorny Devil | *Moloch horridus* | `thorny-devil` | LC |
| 015 | Tuatara | *Sphenodon punctatus* | `tuatara` | LC |
| 016 | Green Basilisk | *Basiliscus plumifrons* | `green-basilisk` | LC |
| 017 | Galápagos Giant Tortoise | *Chelonoidis niger* | `galapagos-giant-tortoise` | VU |
| 018 | Alligator Snapping Turtle | *Macrochelys temminckii* | `alligator-snapping-turtle` | VU |
| 019 | Matamata | *Chelus fimbriata* | `matamata` | LC |
| 020 | Radiated Tortoise | *Astrochelys radiata* | `radiated-tortoise` | CR |
| 021 | Saltwater Crocodile | *Crocodylus porosus* | `saltwater-crocodile` | LC |
| 022 | American Alligator | *Alligator mississippiensis* | `american-alligator` | LC |
| 023 | Gharial | *Gavialis gangeticus* | `gharial` | CR |

| Amphibians (AMP) | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | Red-eyed Tree Frog | *Agalychnis callidryas* | `red-eyed-tree-frog` | LC |
| 002 | White's Tree Frog | *Litoria caerulea* | `whites-tree-frog` | LC |
| 003 | Wallace's Flying Frog | *Rhacophorus nigropalmatus* | `wallaces-flying-frog` | LC |
| 004 | Vietnamese Mossy Frog | *Theloderma corticale* | `vietnamese-mossy-frog` | LC |
| 005 | Glass Frog | *Hyalinobatrachium fleischmanni* | `glass-frog` | LC |
| 006 | Dyeing Poison Frog | *Dendrobates tinctorius* | `dyeing-poison-frog` | LC |
| 007 | Golden Poison Frog | *Phyllobates terribilis* | `golden-poison-frog` | EN |
| 008 | Goliath Frog | *Conraua goliath* | `goliath-frog` | EN |
| 009 | African Bullfrog | *Pyxicephalus adspersus* | `african-bullfrog` | LC |
| 010 | Argentine Horned Frog | *Ceratophrys ornata* | `argentine-horned-frog` | NT |
| 011 | Malayan Horned Frog | *Megophrys nasuta* | `malayan-horned-frog` | LC |
| 012 | Cane Toad | *Rhinella marina* | `cane-toad` | LC |
| 013 | Surinam Toad | *Pipa pipa* | `surinam-toad` | LC |
| 014 | Hairy Frog | *Trichobatrachus robustus* | `hairy-frog` | LC |
| 015 | Darwin's Frog | *Rhinoderma darwinii* | `darwins-frog` | EN |
| 016 | Purple Frog | *Nasikabatrachus sahyadrensis* | `purple-frog` | EN |
| 017 | Axolotl | *Ambystoma mexicanum* | `axolotl` | CR |
| 018 | Chinese Giant Salamander | *Andrias davidianus* | `chinese-giant-salamander` | CR |
| 019 | Fire Salamander | *Salamandra salamandra* | `fire-salamander` | LC |
| 020 | Marbled Salamander | *Ambystoma opacum* | `marbled-salamander` | LC |
| 021 | Great Crested Newt | *Triturus cristatus* | `great-crested-newt` | LC |
| 022 | Olm | *Proteus anguinus* | `olm` | VU |
| 023 | Ringed Caecilian | *Siphonops annulatus* | `ringed-caecilian` | LC |

*IUCN column is indicative and must be validated against the live Red List
before publication. Combined spread across 46 entries: 4 CR, 5 EN, 5 VU,
2 NT, remainder LC — 16 threatened, heavy enough to feed the Endangered
lens hard.

## Sign-off

Reptilian Beasts linocut library — 46 of 46 carved (23 reptiles + 23
amphibians), the first merged herpetofauna gallery. Curated for distinct
silhouettes, not padded to a quota; the count fell out of the
distinctiveness. House spec carried forward, herp four-posture field rule
and integument density maps locked, REP/AMP prefixes preserved under the
unified reptilian-beasts gallery. Fourth of the five BEASTIQUE primary
collections. Sea turtles remain in Aquatic Beasts (the 90%-submerged rule),
surfacing here only via the clade lens.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
