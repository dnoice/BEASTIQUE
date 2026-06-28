<!--
========================================================================
✒ METADATA
  Title ................ BEASTIQUE — Aquatic Beasts · Linocut Prompt Library
  File Name ............ aquatic_beasts_linocut_prompts.md
  Relative Path ........ BEASTIQUE/studio/prompts/linocut/aquatic_beasts_linocut_prompts.md
  Artifact Type ........ Image-Generation Prompt Library (Markdown)
  Version .............. 1.0.0
  Date ................. 2026-06-24
  Update ............... 2026-06-24
  Author ............... Dennis 'dendogg' Smaltz
  A.I. Acknowledgement . Anthropic - Claude Opus 4.8
  Signature ............ ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ DESCRIPTION
  Fifty copy-paste-ready image-generation prompts for the 50 most widely
  recognized aquatic animals, each authored in the BEASTIQUE "linocut
  emblem" house style: refined, high-contrast, pure black-on-white,
  vector-traceable woodcut illustration suitable for downstream SVG / vinyl
  conversion. Each prompt is subject-specific — pose, anatomy, and the
  black-density map are tailored to the individual animal, never find-and-
  replaced from a single skeleton. Membership follows the BEASTIQUE 90%
  rule: any animal that spends ~90%+ of its life submerged is aquatic,
  regardless of biological class — so whales, dolphins, seals, and the
  sirenians live here, not in mammalian-beasts.

✒ CHANGELOG
  - v1.0.0 (2026-06-24) [Anthropic - Claude Opus 4.8] — Initial library.
    Carried the locked house linocut skeleton over from the mammalian gold
    master, adapted the ground/field rule for water, authored all 50
    aquatic entries. Second of the seven BEASTIQUE collections.

✒ KEY FEATURES
  - 50 standalone prompts, each a single fenced block (prompt + negative).
  - Stable prompt IDs (BQ-LINO-AQU-001 … -050) for cross-referencing.
  - Per-entry record: scientific name, indicative IUCN status, slug,
    and canonical output filenames (raster + vector).
  - DRY "House Linocut Spec" documents the shared style DNA once; every
    prompt still ships complete and copy-paste-ready.

✒ USAGE INSTRUCTIONS
  - Lift the contents of any single ```text block straight into the image
    generator. The negative-prompt line is included inside the block.
  - Name the generated raster per the Naming Conventions table; trace to
    SVG under the matching .svg name.
  - Verify the indicative IUCN status against the live Red List before any
    status is published in gallery metadata.

✒ OTHER IMPORTANT INFORMATION
  - This is the black-and-white LINOCUT family. Keep it distinct from any
    material-treatment or color render sets for the same collection.
  - 90% SUBMERGED RULE: marine mammals are catalogued here, not in
    mammalian-beasts. Sea turtles (entries 049–050) also clear the 90%
    bar and are placed here on ecology; they remain reptiles by class, so
    they may be relocated to reptilian-beasts at the maintainer's call.
  - GROUND/FIELD ADAPTATION: aquatic subjects float on blank white — no
    waterline, no waves, no bubbles, no seabed, no scene. The mammalian
    "ground-shadow strokes" convention is dropped for swimmers. Only true
    bottom-dwellers (octopus, lobster, crab, sea star, nautilus, urchin)
    may carry a few minimal horizontal substrate strokes directly beneath
    the body.
  - "Recognized" is interpreted as globally iconic, instantly-named-on-
    sight species with strong, distinct silhouettes that read well as a
    carved emblem.
========================================================================
-->

# BEASTIQUE — Aquatic Beasts · Linocut Prompt Library

A library of 50 subject-specific linocut emblem prompts for the most
recognized aquatic animals. Membership follows the BEASTIQUE **90% rule** —
if a creature lives ~90%+ of its life submerged, it is aquatic regardless of
biological class, so the great whales, dolphins, seals, sirenians, and sea
turtles are catalogued here.

## House Linocut Spec

Every prompt in this library is built on the same style DNA, locked by the
mammalian gold master. This section documents that shared standard once; it
is already woven into each individual prompt below, so no assembly is
required — but this is the contract a new prompt must honor to belong here.

- **Medium** — Refined, high-contrast black-and-white **linocut / woodcut**
  illustration. Upgraded antique natural-history engraving energy; premium
  emblem, not a sketch.
- **Ink discipline** — Pure black ink on pure white background only. No
  grayscale, no color, no gradients, no painterly or airbrush shading.
  Tone is built from carved hatch and closed black shapes, not value.
- **Vector-readiness** — All black detail must be intentional, separated,
  and capable of becoming clean vector paths. No tiny isolated specks, no
  broken fragments, no ultra-thin lines that will not trace.
- **Contour** — One confident, bold, continuous outer outline; simplified
  silhouette around body, fins, flukes, and extremities. Interior texture
  is tapered strokes, wedge cuts, and curved hatch that *follow the form*.
- **Weight hierarchy** — Thick outer contour, medium interior shadow
  shapes, smaller-but-clean hatch strokes. Legible at both large and small
  sizes.
- **Density map** — Each animal carries an intentional dark/dense region
  and a lighter/open region, chosen from the animal's real form (dorsal
  countershading, scute pattern, sucker rows, fin spines, etc.). This is
  the per-subject variable and the heart of each prompt.
- **Field (aquatic)** — Subjects float alone on blank white. No water, no
  waves, no bubbles, no seabed, no scene, no border, no text, no extra
  animals. Bottom-dwellers may carry a few minimal substrate strokes only.

## Naming Conventions

These conventions keep the linocut family cleanly separated from the
existing render sets and traceable end-to-end.

### Prompt IDs

Format: `BQ-LINO-{CLASS}-{NNN}` — e.g., `BQ-LINO-AQU-001`.

| Class code | BEASTIQUE collection |
| ---------- | -------------------- |
| `MAM`      | mammalian-beasts     |
| `AVI`      | avian-beasts         |
| `AQU`      | aquatic-beasts       |
| `REP`      | reptilian-beasts     |
| `AMP`      | amphibian-beasts     |
| `INS`      | insecta-beasts       |
| `ARA`      | arachnid-beasts      |

### File outputs

| Artifact          | Pattern                                              | Example                                  |
| ----------------- | ---------------------------------------------------- | ---------------------------------------- |
| Prompt library    | `{class}_beasts_linocut_prompts.md`                  | `aquatic_beasts_linocut_prompts.md`      |
| Raster render     | `{species-slug}_linocut-bw_{NN}.png`                 | `blue-whale_linocut-bw_01.png`           |
| Vector trace      | `{species-slug}_linocut-bw_{NN}.svg`                 | `blue-whale_linocut-bw_01.svg`           |
| Library folder    | `BEASTIQUE/studio/prompts/linocut/`                    | —                                        |
| Render folder     | `BEASTIQUE/studio/collections/{class}-beasts/linocut/`      | `studio/collections/aquatic-beasts/linocut/`    |

Slugs are lower-kebab and match the locked collection slugs (`blue-whale`,
not `blue_whale`). The `_linocut-bw_` variant tag is what separates these
emblems from the `{slug}-{n}.png` base/custom render family.

## The Library

Each entry below is a complete, standalone prompt. Lift the whole ```text
block — the negative prompt is the final line inside it.

### BQ-LINO-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body blue whale in left-facing profile, styled as an upgraded antique natural-history engraving and premium woodcut emblem. Center it in a wide landscape frame with clean white space; honor the immense streamlined length. Render the defining anatomy: a long tapering torpedo body, broad flat U-shaped head with a single central ridge running to twin blowholes, small eye low on the head, a long mouthline, deep pleated throat grooves running from chin to belly, a tiny falcate dorsal fin set far back, long slender flippers, and a powerful horizontal tail fluke shown edge-on with a notched center. Pose is gliding and level, the body slightly arched. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dorsal countershading: run the top of the head, back, and dorsal fin dark with long directional hatch following the body's length, fading to open white along the lower flank and belly. The throat pleats are the signature texture — render them as a fan of clean parallel grooves, bold and evenly carved, the brightest-organized region of the piece. Mark the flipper and fluke with a defined dark trailing edge. One bold continuous contour around the whole streamlined form, flippers, and fluke. Weight hierarchy: thick contour, bold dorsal shadow, fine pleat and flank hatch — legible large and small. The whale floats alone on blank white; no water, no waves, no bubbles, no scene.
Negative prompt: no grayscale, no color, no blue, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no spray, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-002 · Humpback Whale

*Megaptera novaeangliae* · IUCN LC · slug `humpback-whale` · output `humpback-whale_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body humpback whale, styled as a premium woodcut emblem and upgraded natural-history engraving. Pose it in a dynamic gentle arc — body curving as if mid-glide — centered in the frame with clean white space. Render the defining anatomy: a robust body, broad rounded head covered in distinctive raised knobby tubercles each carrying a bristle, a long mouthline, deep throat pleats, a low humped dorsal fin on a small ridge, and the signature feature: extremely long wing-like pectoral flippers with a scalloped knobbed leading edge, nearly a third of the body length. Include the broad tail fluke with its irregular serrated trailing edge and pointed tips. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal surface and the long flippers: run the back and the upper flipper dark with directional hatch, leaving the patterned underside of the flipper and the belly open white so the contrast reads. The head tubercles are a focal texture — render them as a scatter of bold clean rounded bumps with crisp edges, never speckled. Throat pleats are bold parallel grooves. The fluke's knobbly trailing edge stays a clean carved silhouette. One bold continuous contour throughout, especially the dramatic flippers. Weight hierarchy: thick contour, bold dorsal and flipper shadow, clean tubercle accents — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-003 · Sperm Whale

*Physeter macrocephalus* · IUCN VU · slug `sperm-whale` · output `sperm-whale_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body sperm whale in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving with a Moby-Dick gravity. Center it in a wide frame with clean white space. Render the defining anatomy: the enormous squared block-like head making up a third of the body, a single blowhole set forward and to the left at the snout tip, a narrow underslung lower jaw lined with conical teeth, small eye behind the jaw, a corrugated wrinkled body surface behind the head, low rounded dorsal hump followed by a knuckle ridge, short stubby flippers, and a broad triangular fluke. Pose is massive and level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the colossal head and dorsal mass: run the top of the head and back dark, with the signature shriveled-prune body wrinkles rendered as bold horizontal crease hatch along the rear two-thirds of the body — the defining texture. Keep the lower head and belly more open. The squared brow is a strong bold shape; the narrow toothed jaw a crisp accent. One bold continuous contour around the blocky head, body, knuckle ridge, and fluke. Weight hierarchy: thick contour, bold head and crease shadows, fine wrinkle hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no ship, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body orca (killer whale) in left-facing profile, styled as a bold premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. This subject is the purest linocut natural: its real coloration is a black-and-white pattern, so render it as solid black ink and clean reserved white shapes with no invented shading. Render the defining anatomy: a robust streamlined body, conical rounded head, a tall straight triangular dorsal fin (very tall and erect for a bull), large paddle-shaped flippers, and a notched fluke. The pattern IS the density map: fill the back, head, flippers, dorsal fin, and tail solid black; reserve the chin-to-belly underside, the oval eye-patch above and behind the eye, and the grey saddle behind the dorsal fin as clean pure-white shapes with crisp carved edges. Add only minimal interior hatch where the black mass turns at the jaw and flipper base. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. The strength of this emblem is the clean boundary between the big black masses and the reserved white patches — keep those edges confident and sharp, not feathered. One bold continuous outer contour around body, tall dorsal, flippers, and fluke. Weight hierarchy: thick contour, big solid black fields, clean white reserves — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no sky, no border, no text, no extra animals, no cartoon proportions, no feathered patch edges, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-005 · Beluga Whale

*Delphinapterus leucas* · IUCN LC · slug `beluga-whale` · output `beluga-whale_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body beluga whale in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy: a stout rounded body, the signature bulbous domed forehead (the melon) above a short blunt snout, a slight mouthline that curves into a gentle expression, small eye, no dorsal fin — only a low dorsal ridge running along the back, short rounded paddle flippers, and a broad fluke with curved trailing edges. The neck is flexible, allowing a subtle nod to the head. Pose is calm and gliding. Because the beluga is famously white, this subject inverts the usual density map: keep the body largely OPEN white and build form almost entirely from a confident contour plus restrained shadow. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Concentrate the limited darkness as carved shadow only along the underside, beneath the melon, behind the flipper, and the dorsal-ridge bumps; render the melon's curve with a few clean curved accent strokes, not fill. The eye and mouthline are crisp small accents. One bold continuous contour around the rounded melon, body, ridge, flippers, and fluke. Weight hierarchy: thick contour, sparse underside shadow, minimal accent hatch — the open white IS the subject. Legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no sky, no border, no text, no extra animals, no cartoon proportions, no over-darkened body, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-006 · Narwhal

*Monodon monoceros* · IUCN LC · slug `narwhal` · output `narwhal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body narwhal in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space; the long tusk extends the composition forward. Render the defining anatomy: a stout rounded body like a beluga, bulbous forehead, blunt short head, small eye, no dorsal fin (only a low dorsal ridge), short rounded flippers, and a fluke whose trailing edge is distinctively convex with a deep central notch. The signature feature is the single long straight spiral tusk projecting forward from the upper left of the head — render its helical groove as a clean bold spiraling line wrapping a tapering cone, the focal detail of the piece and a perfect vector subject. Render the body's natural mottling as a scatter of bold clean dark blotches over the back and flanks — deliberate closed shapes, never speckled noise — fading to open white on the belly. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Density anchor: the dark dappled back versus open white underside, plus the dramatic spiral tusk. One bold continuous contour around body, tusk, flippers, ridge, and fluke. Weight hierarchy: thick contour, bold mottle blotches, clean tusk spiral — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no ice, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-007 · Bottlenose Dolphin

*Tursiops truncatus* · IUCN LC · slug `bottlenose-dolphin` · output `bottlenose-dolphin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body bottlenose dolphin, styled as a premium woodcut emblem and upgraded natural-history engraving. Pose it in a graceful arc — body curving as if leaping or gliding — centered in the frame with clean white space. Render the defining anatomy: a sleek robust torpedo body, the curved melon forehead flowing into a short stubby beak (rostrum), the famous upcurved mouthline giving a smiling look, small eye, a tall falcate (backswept hooked) dorsal fin at mid-back, slim pointed flippers, and a powerful notched fluke. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dorsal countershading: run the back, dorsal fin, and top of the head dark with long smooth directional hatch following the body's curve, sweeping down the flank and fading cleanly to open white along the belly — the hallmark dolphin two-tone. Keep the lines sleek and flowing, never busy; the dolphin's beauty is its smooth hydrodynamic form. The eye, mouthline, and blowhole are crisp small accents. One bold continuous contour around the arced body, dorsal fin, flippers, and fluke. Weight hierarchy: thick contour, smooth dorsal shadow, minimal flank hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no splash, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-008 · Common Dolphin

*Delphinus delphis* · IUCN LC · slug `common-dolphin` · output `common-dolphin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body common dolphin in a streamlined leaping arc, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slender athletic body more slimly built than a bottlenose, a long slim beak set off from the melon by a crease, small eye, a tall slightly falcate dorsal fin, slim curved flippers, and a notched fluke. The signature feature is the bold criss-cross flank pattern: render the dolphin's distinctive hourglass / figure-eight side panels as clean closed black shapes — dark cape sweeping down from the dorsal fin and a dark band along the lower flank, meeting in a saddle dip below the fin to form the crossing pattern, with a reserved lighter panel between them. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Density anchor: the dark dorsal cape and the crossing flank panels versus the open white belly and reserved side panel. Keep the pattern boundaries crisp — they are the identifying feature. One bold continuous contour around the slim body, dorsal fin, flippers, and fluke. Weight hierarchy: thick contour, bold pattern shapes, minimal hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no ocean, no sky, no border, no text, no extra animals, no cartoon proportions, no muddy pattern, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-009 · West Indian Manatee

*Trichechus manatus* · IUCN VU · slug `manatee` · output `manatee_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body West Indian manatee in a gentle near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy: a huge rotund seal-shaped body tapering to a broad flat rounded paddle tail, a small whiskered face with a blunt squared snout and bristly prehensile upper lip, tiny eyes, no neck, two stout flexible flippers near the chest each with small nails, and a thick wrinkled hide often marked with creases and old scars. Pose is placid and hovering, slightly head-up. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The manatee has no fur and little pattern, so density is carried by sculpted shadow and the wrinkled skin: render bold curved shadow shapes under the belly, beneath the flippers, under the chin, and along the underside of the paddle tail; use deliberate crease and fold hatch where the thick hide bunches at the neck, shoulders, and tail base. Keep the broad back and upper body fairly open and bright so the heavy rounded mass reads. The bristled snout and small eye are crisp focal accents; the flipper nails are tiny clean marks. One bold continuous contour around the whole rotund form and paddle tail. Weight hierarchy: thick contour, bold belly and fold shadows, fine crease hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no seagrass, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-010 · Dugong

*Dugong dugon* · IUCN VU · slug `dugong` · output `dugong_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body dugong in a gentle near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy that distinguishes it from a manatee: a smooth torpedo-shaped body, a broad downturned snout with a large fleshy bristled muzzle adapted for grazing, small eyes, paddle-like front flippers without nails, no dorsal fin, and the key feature — a whale-like fluked tail with two pointed lobes and a central notch (not the manatee's round paddle). Pose is calm and grazing-angled, head tilted slightly down. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Like the manatee, density comes from sculpted shadow rather than pattern: render bold curved shadow under the belly, beneath the flippers, under the down-turned snout, and along the tail stock; keep the smooth back open and bright so the streamlined mass reads cleanly — the dugong's hide is smoother than a manatee's so use fewer, longer shadow strokes. The bristled downturned muzzle is the focal accent; the forked fluke is a strong clean silhouette. One bold continuous contour around the smooth body, flippers, and fluked tail. Weight hierarchy: thick contour, smooth belly shadow, minimal hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no seagrass, no sky, no border, no text, no extra animals, no cartoon proportions, no round paddle tail, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-011 · California Sea Lion

*Zalophus californianus* · IUCN LC · slug `sea-lion` · output `sea-lion_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body California sea lion, styled as a premium woodcut emblem and upgraded natural-history engraving. Pose it in its characteristic upright posture on the fore-flippers, chest raised and head up, in near-profile, centered with clean white space. Render the defining anatomy that marks a sea lion (not a true seal): visible small external ear flaps, a dog-like muzzle with whiskers, large dark eyes, a sleek muscular neck and chest, long strong fore-flippers it can rotate to "walk," large steerable hind flippers turned forward under the body, and a sleek streamlined coat that reads slick and wet. Adult bulls carry a raised bony forehead crest (sagittal crest). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the wet-sheen coat: run the back, top of the head, and the shadowed side of the neck and flippers dark with smooth directional hatch following the muscle, leaving highlight streaks of reserved white along the wet brow, the top of the muzzle, and the chest to read as glossy. The whiskers are fine clean radiating lines; the ear flaps and eye are crisp accents. One bold continuous contour around the raised body, neck, flippers. Weight hierarchy: thick contour, bold wet-coat shadow, clean highlight reserves — legible large and small. A few minimal substrate strokes beneath the flippers are permitted (haul-out); otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no rocks scene, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-012 · Harbor Seal

*Phoca vitulina* · IUCN LC · slug `harbor-seal` · output `harbor-seal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body harbor seal in its classic "banana" haul-out pose — belly down with head and hind flippers both lifted in a gentle curve — shown in near-profile, centered with clean white space. Render the defining anatomy that marks a true seal (not a sea lion): NO external ear flaps (just a small ear hole), a rounded cat-like head with a short snout, large round dark eyes, prominent whiskers, a plump spindle-shaped body, short fore-flippers held close, and hind flippers that cannot rotate forward, here lifted behind. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the spotted coat: render the harbor seal's dense dark spots and rings as a scatter of clean closed black blotches across the back and flanks — deliberate varied shapes, never noise — thinning to open white on the belly. Density anchor: the dark dappled dorsal coat versus the open pale underside, plus a smooth wet-sheen shadow along the lower body. The round eyes and whisker spray are crisp focal accents. One bold continuous contour around the curved banana-posed body, flippers, and head. Weight hierarchy: thick contour, bold coat spots, smooth underside shadow — legible large and small. A few minimal substrate strokes beneath the body are permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no rocks scene, no sky, no border, no text, no extra animals, no cartoon proportions, no external ears, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-013 · Leopard Seal

*Hydrurga leptonyx* · IUCN LC · slug `leopard-seal` · output `leopard-seal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body leopard seal in a sinuous near-profile, head raised and turned slightly toward the viewer to show its reptilian menace, centered with clean white space. Render the defining anatomy: a long muscular serpentine body, a disproportionately large reptile-like head with a wide gape, a long jawline and a sinister slight "smile," powerful jaws with visible teeth, no external ear flaps, large fore-flippers with a clawed leading edge it uses to swim with raptor-like power, and a slimmer rear body. Pose conveys a sleek predator. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the spotted coat: render bold clean dark blotches along the back and a dappled throat, thinning to open white on the pale belly. Density anchor: the dark serpentine dorsal mass with its leopard spotting versus the open lighter underside, plus carved shadow that models the long muscular form and the broad head. The toothy gape and the long jawline are the focal accents — keep them crisp and a little menacing. The clawed fore-flipper edge is a clean detail. One bold continuous contour around the long sinuous body, head, and flippers. Weight hierarchy: thick contour, bold coat spots and head shadow, fine connective hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no ice, no penguins, no sky, no border, no text, no extra animals, no cartoon proportions, no external ears, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-014 · Northern Elephant Seal

*Mirounga angustirostris* · IUCN LC · slug `elephant-seal` · output `elephant-seal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body adult bull northern elephant seal rearing up in near-profile, head and chest lifted in a dominance display, centered with clean white space. Render the defining anatomy of a bull: an enormous bulky body, the signature large inflatable pendulous proboscis (the elephant-like overhanging snout) drooping over the mouth, a broad scarred chest shield of thick wrinkled cornified skin around the neck, small deep-set eyes, no external ear flaps, short fore-flippers, and hind flippers trailing behind. Pose is massive and imposing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the heavily creased neck shield and the drooping proboscis: render the chest-and-neck scarring and folds as bold crease hatch and stacked wrinkle shadows — the defining texture — with the proboscis a strong wrinkled hanging shape. Run shadow along the underside and the shadowed flank, keeping the broad back open so the bulk reads. The proboscis, scarred neck, and small eye are the focal accents. One bold continuous contour around the rearing mass, proboscis, and flippers. Weight hierarchy: thick contour, bold neck-fold shadows, fine wrinkle hatch — legible large and small. A few minimal substrate strokes beneath the body permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no beach scene, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-015 · Walrus

*Odobenus rosmarus* · IUCN VU · slug `walrus` · output `walrus_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body walrus in near-profile, propped upright on its fore-flippers with head raised, centered with clean white space. Render the defining anatomy: an enormous rotund wrinkled body, a broad squared muzzle packed with a dense mustache of stiff whiskers (vibrissae), the signature pair of long downward tusks descending from the upper jaw, small eyes, no external ear flaps, thick tough hide thrown into heavy folds and knobby bosses around the neck and shoulders, stout fore-flippers it stands on, and hind flippers tucked forward. Pose is monumental. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the bumpy wrinkled hide: render the thick neck-and-shoulder folds and the knobbly tubercle skin as bold crease hatch and stacked shadow shapes — the defining texture — with deep shadow under the belly and chin. Keep the back open so the bulk reads. The whisker mustache is a bold dense field of clean short radiating strokes; the two tusks are clean bright closed shapes with only a thin base shadow so they read as ivory. One bold continuous contour around the heavy body, tusks, and flippers. Weight hierarchy: thick contour, bold fold shadows, dense whisker field, clean tusks — legible large and small. A few minimal substrate strokes beneath the body permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no ice scene, no sky, no border, no text, no extra animals, no cartoon proportions, no gray tusks, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-016 · Sea Otter

*Enhydra lutris* · IUCN EN · slug `sea-otter` · output `sea-otter_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body sea otter in its iconic pose — floating on its back at the surface, paws held up over the chest — shown from the side-front, centered with clean white space. Render the defining anatomy: a dense plush fur coat (the thickest of any animal), a rounded blunt-muzzled face with a button nose, small ears, bristly cheek whiskers, expressive eyes, small dexterous forepaws held together over the belly, broad webbed hind flippers, and a thick flattened tail. Pose conveys the charismatic back-float. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the luxuriant dense fur: render it as rich directional flick-hatch and tapered wedge cuts across the body and limbs, clustered and clean rather than noisy, with the wet face fur reading slightly spiked. Density anchor: dark shadowed fur along the body's underside and the shadowed flank versus a lighter open face and chest where the paws rest. Keep the face bright and expressive — the eyes, nose, and whiskers are the focal accents that carry the otter's charm. The webbed hind flippers are a clean defined shape. One bold continuous contour around the floating body, paws, and tail. Weight hierarchy: thick contour, rich fur hatch, clean face accents — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush fur, no blurry edges, no water, no waves, no kelp, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-017 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body great white shark in left-facing profile, styled as a bold premium woodcut emblem and upgraded natural-history engraving with menace. Center it in a wide frame with clean white space. Render the defining anatomy: a massive torpedo-shaped body, a conical pointed snout, a slightly open mouth revealing rows of large triangular serrated teeth, a black fathomless eye, five gill slits, a tall stiff triangular first dorsal fin, broad pointed pectoral fins with dark tips, a second small dorsal, and a powerful crescent (lunate) tail with nearly equal lobes. Pose is a level predatory cruise. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the sharp countershading the species is named against: run the dorsal surface — back, top of head, upper flanks, fin tips — dark with smooth directional hatch, meeting the white underside along a hard clean dividing line down the flank (the actual edge between grey top and white belly), leaving the entire belly open white. The gill slits are five bold clean parallel marks; the toothy mouth and black eye are the crisp focal accents. One bold continuous contour around the streamlined body, all fins, and crescent tail. Weight hierarchy: thick contour, bold dorsal shadow, hard countershade line, clean teeth — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no blood, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-018 · Whale Shark

*Rhincodon typus* · IUCN EN · slug `whale-shark` · output `whale-shark_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body whale shark in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving; honor the colossal gentle scale. Center it in a wide frame with clean white space. Render the defining anatomy: an enormous broad flattened head with a wide terminal mouth set right at the snout tip (not underslung), tiny eyes at the head corners, prominent longitudinal ridges running down the broad back, five very large gill slits, large pectoral fins, two dorsal fins set far back, and a tall sweeping tail. The signature feature is the checkerboard spot pattern: render the whale shark's grid of pale spots and stripes by INVERTING — fill the body with bold black and reserve the famous spots and the cross-hatching ridge lines as a clean regular array of round white dots and white pinstripes, the defining texture and a striking vector pattern. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. Density anchor: the dark body carrying the reserved white spot-grid on the back and upper flank, fading to a plain open white belly. Keep the spot rows even and crisp — the regularity is the identity. The broad terminal mouth and back ridges are bold accents. One bold continuous contour around the huge body, fins, and tail. Weight hierarchy: thick contour, big dark body field, clean reserved spot-grid — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no divers, no sky, no border, no text, no extra animals, no cartoon proportions, no irregular smeared spots, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-019 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body great hammerhead shark, posed at a three-quarter front-oblique angle so the unmistakable head is fully presented, centered with clean white space. Render the defining anatomy: the signature wide flattened T-shaped cephalofoil head (the "hammer") with an eye and nostril at each far tip and a nearly straight front edge, a streamlined muscular body behind it, five gill slits, an extremely tall pointed sickle-shaped first dorsal fin (the species' tallest-relative dorsal), pointed pectoral fins, and a long crescent tail. Pose conveys the head as the hero element. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dorsal countershading plus the dramatic head: run the top of the cephalofoil, the back, and the towering dorsal fin dark with smooth directional hatch, dividing along a clean countershade line to the open white underside. Model the broad hammer with curved hatch that shows its flattened wing-like form; the eyes set at the hammer tips are crisp focal accents. The tall sickle dorsal is a bold clean shape — a key silhouette read. One bold continuous contour around the hammer head, body, all fins, and crescent tail. Weight hierarchy: thick contour, bold dorsal shadow, clean hammer modeling — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-020 · Tiger Shark

*Galeocerdo cuvier* · IUCN NT · slug `tiger-shark` · output `tiger-shark_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body tiger shark in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy: a heavy-bodied shark with a broad blunt squared snout (wider and blunter than a great white), a wide mouth with distinctive cockscomb-shaped serrated teeth, a dark eye, five gill slits, a tall first dorsal fin set forward, a low second dorsal, long pectoral fins, and a long upper tail lobe. Pose is a level cruise. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is the vertical tiger barring: render the dark vertical stripes and blotches running down the back and upper flank as bold tapered closed black bars — the very thing linocut does best — strongest and most distinct toward the head and fading along the body toward the tail, leaving the belly open white. Density anchor: the striped dark dorsal half versus the clean white underside. Keep generous white between bars so the pattern stays crisp. The blunt snout, wide mouth, and dark eye are the focal accents. One bold continuous contour around the heavy body, all fins, and long tail. Weight hierarchy: thick contour, bold vertical bars, minimal connective hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no smudged stripes, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-021 · Giant Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant manta ray seen from a dramatic top-front angle so the full diamond wingspan and the head are presented, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; the broad wings nearly fill the width. Render the defining anatomy: an enormous flat diamond-shaped body with long pointed triangular pectoral "wings," a pair of forward-projecting cephalic fins (the head fins / "horns") flanking a wide terminal mouth, eyes set on the sides of the head, gill slits on the underside, and a slender whip-like tail without a sting. Pose conveys soaring flight, wings raised in a graceful arc. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal surface and the bold shoulder markings: run the top of the body and the leading wing edges dark with long directional hatch that radiates outward following the wing's sweep, reserving clean white shoulder-patch markings (the manta's identifying pale blazes) and fading the wingtips and trailing edges lighter. The cephalic horns and the wide mouth are the focal accents. One bold continuous contour around the diamond wings, head fins, and tail. Weight hierarchy: thick contour, bold dorsal shadow with radiating wing hatch, clean reserved shoulder blazes — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no stinger, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-022 · Southern Stingray

*Hypanus americanus* · IUCN NT · slug `stingray` · output `stingray_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a southern stingray seen from a top three-quarter angle, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a flat rounded-diamond (rhomboidal) disc body with smoothly rounded wing edges, eyes raised on top of the disc with the spiracles (breathing holes) just behind them, a low ridge along the midline of the back, and the signature long slender whip-like tail bearing a barbed venomous spine near its base. Pose conveys the ray gliding, the disc slightly undulating at the wing margins. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal disc: run the top of the body dark with directional hatch that radiates from the central ridge outward toward the wing margins, modeling the disc's gentle dome, and fade to a lighter rim along the undulating wing edges. Render the raised eyes and spiracles as crisp focal accents on the dark disc. The long tail tapers to a fine clean line with the barb a small bold detail. One bold continuous contour around the rounded disc and the long tail. Weight hierarchy: thick contour, bold radiating disc hatch, clean tail line — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no sand, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-023 · Atlantic Bluefin Tuna

*Thunnus thynnus* · IUCN LC · slug `bluefin-tuna` · output `bluefin-tuna_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Atlantic bluefin tuna in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving conveying raw speed. Center it in a wide frame with clean white space. Render the defining anatomy: a massive muscular fusiform (torpedo) body built for power, a conical pointed head, a large eye, a moderately large mouth, two dorsal fins (the second tall and sickle-shaped), a row of small yellow finlets running along the rear back and belly toward the tail (render as a neat row of clean small triangles), a sharply tapered keeled tail base, and a stiff high-aspect crescent (lunate) tail — the hallmark of a fast pelagic swimmer. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the metallic countershading: run the back and top of the head dark with smooth directional hatch that follows the powerful body, dividing along a clean countershade line to a bright open silver belly. Mark the gill cover and the muscular shoulder with a few curved interior accents to show the bulk. The finlet row and the crescent tail are crisp signature accents. One bold continuous contour around the streamlined body, fins, finlets, and crescent tail. Weight hierarchy: thick contour, bold dorsal shadow, clean finlets and tail — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-024 · Atlantic Salmon

*Salmo salar* · IUCN LC · slug `atlantic-salmon` · output `atlantic-salmon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Atlantic salmon caught mid-leap in a powerful upstream arc, body curved and tail kicked, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a streamlined silvery fish with a pointed head, a slightly hooked lower jaw (a spawning male's kype), a large eye, a single soft dorsal fin, a small fleshy adipose fin behind it, paired pectoral and pelvic fins, an anal fin, and a slightly forked tail. Pose conveys the iconic leaping salmon. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the scaled flank and the spotting: render the body scales as clean overlapping crescent rows (organized, not noisy) and place the salmon's characteristic dark X- and spot-marks as bold clean blotches scattered along the upper flank and gill cover. Density anchor: the darker hatched dorsal surface and spotted upper flank versus the open bright silver belly, with curved scale-hatch wrapping the muscular curve of the leaping body. The hooked jaw and large eye are focal accents; the fins carry fine clean ray lines. One bold continuous contour around the arced body, all fins, and forked tail. Weight hierarchy: thick contour, organized scale hatch, bold flank spots — legible large and small. Floats alone on blank white; no water, no splash, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no splash, no river, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-025 · Atlantic Blue Marlin

*Makaira nigricans* · IUCN VU · slug `blue-marlin` · output `blue-marlin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Atlantic blue marlin in left-facing profile, posed as a dramatic billfish in full sail, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy: a powerful elongated body, the signature long spear-like upper-jaw bill (rostrum), a large eye, and the hallmark tall pointed first dorsal fin (the sail) raised high at the front and tapering rearward, rigid sword-like pectoral fins, a slim keeled tail base, and a tall rigid crescent tail. Pose conveys a hooked game-fish power, body slightly arched, dorsal sail erect. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal surface and the raised sail: run the back and the upper sail dark with smooth directional hatch, and render the marlin's vertical bars as a series of clean faint closed black bands down the upper flank, fading to an open bright belly. The long bill is a bold clean tapering spear; the erect dorsal sail is the hero silhouette — keep its edge crisp with fine internal ray lines. One bold continuous contour around the body, bill, sail, fins, and crescent tail. Weight hierarchy: thick contour, bold dorsal shadow, clean sail rays and flank bars — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no spray, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-026 · Swordfish

*Xiphias gladius* · IUCN NT · slug `swordfish` · output `swordfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body swordfish in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide frame with clean white space. Render the defining anatomy that separates it from a marlin: a stout muscular body, the signature long flat broad sword bill (flattened like a blade, not round like a marlin's spear), a very large eye, a tall stiff crescent first dorsal fin set well forward and fixed (not a folding sail), no pelvic fins, a single strong keel on each side of the tail base, and a tall rigid lunate tail. The body is scaleless and smooth in adults. Pose is a powerful level cruise. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal surface: run the back, the top of the head, and the crescent dorsal fin dark with smooth directional hatch following the muscular body, dividing cleanly to an open bright belly — the smooth skin means longer, cleaner shadow strokes and less fine texture than a scaled fish. The flat broad sword is the hero element — a bold clean tapering blade; the large eye is a strong focal accent. One bold continuous contour around the body, flat sword, fins, and crescent tail. Weight hierarchy: thick contour, smooth dorsal shadow, clean blade — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no waves, no spray, no sky, no border, no text, no extra animals, no cartoon proportions, no round bill, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-027 · Clownfish

*Amphiprion ocellaris* · IUCN LC · slug `clownfish` · output `clownfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a clownfish (anemonefish) in near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the small rounded fish in the frame with clean white space, presented large and bold. Render the defining anatomy: a small stocky oval body, a blunt rounded snout, a large round eye, a continuous dorsal fin with a notch dividing spiny and soft sections, rounded paddle-like pectoral fins, rounded pelvic and anal fins, and a fan-shaped slightly rounded tail. The signature feature is the three white vertical bands on the body: render them by treating the body as bold black fields with three clean reserved white vertical bars — one behind the eye through the head, one tall mid-body bar that bulges forward, and one across the tail base — each band edged with a crisp carved black margin (the species' black band-outline). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. Density anchor: the bold black body fields versus the three reserved white bands — the pattern IS the emblem. Keep the band edges sharp and confident. The large round eye sits in the front white band as a crisp focal accent; the fins carry fine clean ray lines with a thin dark margin. One bold continuous contour around the rounded body and all fins. Weight hierarchy: thick contour, big black body fields, clean white bands — legible large and small. Floats alone on blank white; no anemone, no water, no scene.
Negative prompt: no grayscale, no color, no orange, no photographic realism, no soft shading, no airbrush, no blurry edges, no anemone, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-028 · Seahorse

*Hippocampus erectus* · IUCN VU · slug `seahorse` · output `seahorse_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a seahorse in upright profile, styled as a premium woodcut emblem and upgraded natural-history engraving — an ornate heraldic specimen. Center it vertically in the frame with clean white space. Render the defining anatomy: the horse-like head bent at right angles to the body with a long tubular snout, a small eye, a bony crown (coronet) on top of the head, a series of bony armored ridges and rings segmenting the upright body, a forward-curved chest, a small fluttering dorsal fin on the back, tiny pectoral fins behind the head, and the signature prehensile tail curled into a tight spiral at the bottom. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the armored segmentation: render the bony body rings and ridges as a regular sequence of bold carved plate-edges and raised tubercles down the body and tail — the defining ornamental pattern, crisp and rhythmic, perfect for vector. Density anchor: deep carved shadow within each ring groove and along the shadowed front of the body versus the lighter raised plate faces, building a sculpted segmented relief. The coronet, the long snout, and the tightly coiled tail spiral are the focal accents. One bold continuous contour around the whole curved upright form and the coiled tail. Weight hierarchy: thick contour, bold ring-groove shadows, fine plate hatch, clean tail spiral — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no seagrass, no coral, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-029 · Anglerfish

*Melanocetus johnsonii* · IUCN LC · slug `anglerfish` · output `anglerfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a deep-sea anglerfish (humpback blackdevil) in near-profile, styled as a grotesque but crisp premium woodcut emblem and upgraded natural-history engraving. Center the menacing globular fish in the frame with clean white space. Render the defining anatomy: a large round bulbous body, an enormous upturned mouth filled with long needle-like translucent fangs, a cavernous jaw, a small sunken eye, loose flabby dark skin, short rounded fins, and the signature feature — a long dorsal spine (the illicium) arching forward over the head ending in a bulbous bioluminescent lure (the esca). Pose conveys a lurking ambush predator. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The anglerfish is famously near-black, so this subject leans dark: fill the body largely with bold black, modeling its round bulk with curved hatch and a few reserved white highlight streaks along the brow and jaw so the form reads. The signature lure on its arching stalk is the focal accent — render the esca as a clean bold round bulb with short radiating rays, the brightest organized element. The gaping mouth and long fangs are crisp menacing accents, the fangs kept as clean reserved white needles against the black mouth. One bold continuous contour around the round body, jaw, lure stalk, and fins. Weight hierarchy: thick contour, dominant black body mass, clean lure and fang accents — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no glow haze, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-030 · Mediterranean Moray

*Muraena helena* · IUCN LC · slug `moray-eel` · output `moray-eel_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a moray eel in a bold S-curve, head raised and jaws parted, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the sinuous serpent-like fish in the frame with clean white space. Render the defining anatomy: a long thick muscular snake-like body, a pointed head with a strong jaw lined with sharp curved teeth, round eyes, prominent forward nostrils as small tubes, a continuous low dorsal fin running as a fleshy ridge along the entire spine to the tail, and no pectoral fins. Pose conveys the eel emerging and coiling, mouth agape in its characteristic breathing gape. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the mottled marbling: render the moray's blotchy camouflage as bold clean interlocking dark blotches and pale reserved patches along the whole body — a marbled network, deliberate closed shapes never noise — denser and darker along the back, opening along the belly. Density anchor: the marbled dark dorsal length versus the lighter underside, with curved hatch wrapping the muscular S-curves to show the round body. The toothy gape, the tube nostrils, and the round eye are the menacing focal accents. One bold continuous contour around the long sinuous body and dorsal ridge. Weight hierarchy: thick contour, bold marbling blotches, fine wrap hatch — legible large and small. Floats alone on blank white; no reef, no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no coral, no rocks, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-031 · Red Lionfish

*Pterois volitans* · IUCN LC · slug `lionfish` · output `lionfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a red lionfish in near-profile, fins fully fanned, styled as a dramatic ornate premium woodcut emblem and upgraded natural-history engraving. Center the flamboyant fish in the frame with clean white space; the spread fins nearly fill the composition. Render the defining anatomy: a modest oval body almost lost behind a spectacular array of long separated venomous dorsal spines radiating upward like a crown, enormous fan-like pectoral fins spreading outward as feathered rays, trailing dorsal and anal fin membranes, fleshy tentacles above the eyes, a large eye, and a striped face. The fins are the entire spectacle. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is the bold banding: render the lionfish's vertical stripes across the body AND along every fin spine and ray as alternating bold black bars and reserved white gaps — a rhythmic radiating zebra pattern fanning out across the whole spread, the defining texture and a striking vector subject. Density anchor: the dense banded body and the long banded spines radiating into open white space — keep the bars crisp and evenly alternating, with each long spine and ray clearly separated so they trace clean. The eye tentacles and striped face are focal accents. One bold continuous contour around the body and each radiating fin element. Weight hierarchy: thick contour, bold alternating bands, cleanly separated spines — legible large and small. Floats alone on blank white; no reef, no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no coral, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no merged spines, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-032 · Pufferfish

*Arothron hispidus* · IUCN LC · slug `pufferfish` · output `pufferfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a pufferfish fully inflated into a near-sphere, in a front-three-quarter view, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the round comical-yet-spiky fish in the frame with clean white space. Render the defining anatomy: a body puffed into a balloon, the surface covered in short outward-projecting spines (erected when inflated), a small puckered beak-like mouth with fused front teeth, large expressive round eyes set high, small waving pectoral fins, a small dorsal and anal fin set far back, and a small fanned tail. Pose conveys the inflated defensive ball. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the radiating spines and the spotted skin: render the erected spines as a regular field of bold short clean triangles projecting from the spherical contour all around, and place the species' dark spots as a scatter of clean closed blotches across the back, fading toward a paler patterned belly. Density anchor: the curved hatch that models the sphere's volume (darker along the lower and shadowed side, open white over the top highlight) plus the spot field. The big round eyes and puckered mouth are the charming focal accents. One bold continuous spiny contour around the inflated ball and the small fins. Weight hierarchy: thick spiny contour, volume hatch, bold spots — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-033 · Ocean Sunfish

*Mola mola* · IUCN VU · slug `ocean-sunfish` · output `ocean-sunfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an ocean sunfish (mola mola) in near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving honoring its bizarre disc form. Center the strange fish in the frame with clean white space. Render the defining anatomy: an enormous flattened oval disc-shaped body that looks like a swimming head, a tall pointed triangular dorsal fin and a mirror-image anal fin projecting from top and bottom toward the rear, a small beak-like mouth, a large round eye, small pectoral fins, and — instead of a true tail — a frilly rounded rudder-like flap (the clavus) closing the back of the body with a scalloped edge. Pose conveys the lumbering disc, often with the body slightly tilted. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the tough leathery hide and the disc's volume: render bold curved hatch radiating from the eye and gill region across the great disc, darker along the back and the shadowed lower edge, opening to white over the central highlight, and give the leathery skin a subtle coarse mottle of clean small marks (organized, not noisy). Density anchor: the dark-rimmed disc with a bright center, plus the bold tall fins. The scalloped clavus edge and the large round eye are crisp focal accents. One bold continuous contour around the disc, the two tall fins, and the clavus. Weight hierarchy: thick contour, radiating disc hatch, bold fins — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-034 · Koi Carp

*Cyprinus rubrofuscus* · IUCN DOM · slug `koi` · output `koi_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a koi carp in a graceful curved swimming pose, body arced and fins trailing, styled as a premium woodcut emblem with an elegant Japanese ukiyo-e woodblock sensibility. Center it in the frame with clean white space. Render the defining anatomy: a robust torpedo body, a blunt rounded head with a downturned sucker-like mouth flanked by two pairs of barbels (whiskers), a large eye, a long flowing single dorsal fin, large trailing pectoral and pelvic fins, and a broad flowing forked tail that streams behind the curved body. Pose conveys the iconic koi in motion, as if circling in a pond. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is the bold blotched koi pattern: render the koi's large irregular patches by treating the body as bright white with several bold clean black patches (kohaku/showa-style markings) laid across the back, head, and flanks — large confident closed shapes with crisp edges, the defining decorative pattern. Render the body scales beneath and around the patches as clean organized overlapping crescent rows. Density anchor: the bold black pattern patches versus the bright reserved white body, with scale-hatch giving texture and the flowing fins carrying fine clean ray lines. The barbels and large eye are focal accents. One bold continuous contour around the arced body and all flowing fins. Weight hierarchy: thick contour, bold pattern patches, organized scale hatch, flowing fin rays — legible large and small. Floats alone on blank white; no water, no pond, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no ripples, no pond, no lily pads, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-035 · Great Barracuda

*Sphyraena barracuda* · IUCN LC · slug `barracuda` · output `barracuda_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body great barracuda in left-facing profile, styled as a lean menacing premium woodcut emblem and upgraded natural-history engraving. Center the long predatory fish in a wide frame with clean white space. Render the defining anatomy: a very long slender pike-like body, a large pointed head with a long underslung lower jaw, a fearsome mouth of large irregular dagger-like fangs, a large eye, two well-separated small dorsal fins, small paired fins, and a forked tail. Pose is a level menacing hover, jaw slightly open to show teeth. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark dorsal countershading plus the scattered dark blotches: run the back and top of the head dark with smooth directional hatch dividing cleanly to a bright silver belly, and place the barracuda's characteristic irregular dark side-blotches as a sparse row of bold clean marks along the lower flank. Render the body with clean organized scale-hatch over the muscular length. The toothy underslung jaw and the large eye are the crisp menacing focal accents — keep the fangs as clean reserved white daggers. One bold continuous contour around the long body, separated dorsals, and forked tail. Weight hierarchy: thick contour, bold dorsal shadow, clean flank blotches and fangs — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no reef, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-036 · Atlantic Sturgeon

*Acipenser oxyrinchus* · IUCN NT · slug `sturgeon` · output `sturgeon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Atlantic sturgeon in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving conveying an ancient armored fish. Center the long primitive fish in a wide frame with clean white space. Render the defining anatomy: a long torpedo body, a pointed conical shovel-like snout, a small toothless underslung protrusible sucker mouth on the underside, four sensory barbels hanging in front of the mouth, a sharply upturned shark-like (heterocercal) tail with a long upper lobe, and the signature feature — five lengthwise rows of large bony armored plates (scutes) running along the back, sides, and lower flanks, each scute a raised ridged shield. Pose is a slow ancient bottom-cruise. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the rows of scutes: render each scute as a bold clean diamond or shield shape with a raised carved ridge and a defined shadow, marching in even rows down the body — the defining armored pattern, rhythmic and perfect for vector. Density anchor: the dark scute rows and the shaded dorsal length versus the lighter belly, with the bare skin between scutes kept fairly open. The shovel snout, barbels, and upturned tail are focal accents. One bold continuous contour around the long armored body and the heterocercal tail. Weight hierarchy: thick contour, bold scute shields, fine skin hatch — legible large and small. A few minimal substrate strokes beneath the body permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no riverbed scene, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-037 · Red-bellied Piranha

*Pygocentrus nattereri* · IUCN LC · slug `piranha` · output `piranha_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red-bellied piranha in near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving with a fierce edge. Center the deep-bodied fish in the frame with clean white space. Render the defining anatomy: a deep, laterally compressed disc-shaped body, a blunt steep forehead, a powerful jutting underslung lower jaw packed with interlocking triangular razor teeth, a large eye, a single dorsal fin, a small adipose fin, a deep anal fin, and a forked tail. Pose conveys a compact muscular predator, jaw set, slightly open to show the teeth. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark upper body and the fine speckled flank: run the back and head dark with directional hatch over the steep forehead, and render the piranha's characteristic fine spangled scale-speckling along the upper flank as clean small organized marks (controlled, never noise), opening to a brighter belly region (its namesake red belly read as open white). Render the deep body with curved scale-hatch showing the compressed bulk. The jutting toothed jaw and the large eye are the fierce focal accents — keep the triangular teeth as clean reserved white points. One bold continuous contour around the deep body, fins, and forked tail. Weight hierarchy: thick contour, bold dorsal shadow, controlled flank speckle, clean teeth — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no river, no sky, no border, no text, no extra animals, no cartoon proportions, no chaotic speckle noise, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-038 · Giant Pacific Octopus

*Enteroctopus dofleini* · IUCN LC · slug `giant-pacific-octopus` · output `giant-pacific-octopus_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant Pacific octopus with arms spread in a dynamic sprawling display, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the cephalopod in the frame with clean white space; the curling arms reach toward the composition edges. Render the defining anatomy: a large bulbous domed mantle (the "head"), two prominent eyes set on the sides, the gathered web between the arm bases, and eight long tapering muscular arms that curl and coil in different directions, each arm lined with two rows of suckers from base to tip. Pose conveys intelligence and motion — some arms reaching, some curling back. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the sucker rows and the muscular arms: render each arm's double row of suckers as a clean rhythmic sequence of bold round rings tapering smaller toward the arm tips — the defining detail, crisp and perfect for vector — and wrap each arm with curved directional hatch showing its round muscular twist. Density anchor: the dark domed mantle (run with curved hatch and a few reserved highlight streaks to show its bulge) and the shadowed sides of the coiling arms, versus the lighter upper arm faces. The two large eyes are the focal accents. One bold continuous contour around the mantle and every curling arm. Weight hierarchy: thick contour, bold mantle shadow, clean sucker rows, arm-wrap hatch — legible large and small. Floats alone on blank white; a few minimal substrate strokes beneath the lowest arms permitted; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-039 · Giant Squid

*Architeuthis dux* · IUCN DD · slug `giant-squid` · output `giant-squid_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a giant squid in a vertical descending pose, tentacles streaming, styled as a dramatic premium woodcut emblem and upgraded natural-history engraving with a deep-sea legend gravity. Center the long cephalopod vertically in the frame with clean white space. Render the defining anatomy: a long torpedo-shaped mantle ending in a pair of large triangular terminal fins, the enormous eyes (the largest in the animal kingdom) set at the head, a crown of eight shorter muscular arms, and two extremely long whip-like feeding tentacles trailing far beyond the arms, each ending in a flattened sucker-covered club. All eight arms and the two long tentacles bear rows of suckers ringed with toothed rims. Pose conveys the kraken descending, tentacles writhing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark mantle and the great eyes: run the mantle and terminal fins with bold curved directional hatch (darker along the shadowed side, reserved highlight along the lit edge), and render the huge eyes as strong dark focal accents. The signature texture is the sucker rows on the arms and the two club-tipped tentacles — clean rhythmic ring sequences tapering along each limb, with the two tentacle clubs as bold detailed paddle accents. One bold continuous contour around the mantle, fins, arms, and the two long streaming tentacles. Weight hierarchy: thick contour, bold mantle shadow, clean sucker rows, dramatic eyes — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no ship, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-040 · Common Cuttlefish

*Sepia officinalis* · IUCN NT · slug `cuttlefish` · output `cuttlefish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a common cuttlefish in near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the cephalopod in the frame with clean white space. Render the defining anatomy: a broad flattened oval mantle, a continuous undulating fin skirt running around the entire mantle margin, a distinctive W-shaped pupil in a prominent eye, a cluster of eight short arms held together in front, and two longer retractable feeding tentacles. The cuttlefish is known for its rippling skin patterns. Pose conveys hovering, the fin skirt mid-undulation. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the zebra-band display pattern: render the cuttlefish's bold dynamic body stripes as clean alternating dark bars and reserved white bands across the mantle (the dramatic "passing cloud" display), crisp and rhythmic. The undulating fin skirt is rendered as a rhythmic wave of clean lobes with fine ray hatch along its frill — a defining motion accent. Density anchor: the banded mantle and the shadowed arm cluster versus the lighter fin frill and highlights. The W-pupil eye and the gathered arms are focal accents. One bold continuous contour around the mantle, the full fin skirt, arms, and tentacles. Weight hierarchy: thick contour, bold display bands, clean undulating fin, fine frill hatch — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-041 · Chambered Nautilus

*Nautilus pompilius* · IUCN EN · slug `nautilus` · output `nautilus_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a chambered nautilus in profile, styled as an elegant premium woodcut emblem and upgraded natural-history engraving — a living-fossil specimen. Center it in the frame with clean white space. Render the defining anatomy: the signature smooth planispiral coiled shell (a logarithmic spiral) marked with curved radial stripe-bands sweeping across its surface, the open aperture at the front from which emerges a hood and a fringe of many short slender tentacles (cirri) — far more numerous than an octopus's arms — and a pair of simple pinhole eyes. Pose conveys the nautilus jetting forward, tentacles spread. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is twofold: the shell's radial banding — render the nautilus's flame-like stripe pattern as bold clean dark bands radiating across the spiral following its curve, the iconic decorative pattern, crisp and rhythmic; and the internal logarithmic chambering implied by the elegant spiral contour. Render the shell's volume with curved hatch along the inner whorl shadow. The fringe of many tentacles is rendered as a clean radiating spray of slender separated strokes, each distinct so it traces. Density anchor: the boldly banded spiral shell versus the lighter tentacle fringe and the reserved white between bands. One bold continuous contour around the spiral shell and the tentacle hood. Weight hierarchy: thick contour, bold radial shell bands, clean tentacle spray — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-042 · American Lobster

*Homarus americanus* · IUCN LC · slug `lobster` · output `lobster_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body American lobster seen from a top-down dorsal view, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the crustacean in a wide frame with clean white space; the claws and antennae reach toward the edges. Render the defining anatomy: a segmented hard-shelled body with a cylindrical carapace and a clearly jointed tail (abdomen) of overlapping plates ending in a fanned tailpiece (telson and uropods), two large unequal front claws — a heavier crusher claw and a slimmer pincer claw — held forward, four pairs of walking legs, two pairs of long sweeping antennae, a pair of small eyes on stalks, and small feathery mouth appendages. Pose conveys the lobster squared toward the viewer, claws raised. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the armored segmentation: render each carapace and tail segment as a bold clean plate with a defined edge and carved ridge-shadow, the claws given heavy curved shadow and a pebbled-surface hatch to show their bulk and the crusher's knobby teeth. Density anchor: deep shadow within the joint grooves and along the underside of the claws and segments versus the lighter raised plate faces, building a sculpted exoskeleton relief. The long antennae are clean confident sweeping lines; the eyestalks and segmented legs are crisp accents. One bold continuous contour around the whole body, claws, legs, antennae, and tail fan. Weight hierarchy: thick contour, bold segment shadows, pebbled claw hatch — legible large and small. A few minimal substrate strokes beneath the body permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-043 · Red King Crab

*Paralithodes camtschaticus* · IUCN NE · slug `king-crab` · output `king-crab_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red king crab seen from a top-front view, legs spread wide, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the formidable crustacean in a wide frame with clean white space; the long spiny legs reach toward the composition edges. Render the defining anatomy: a broad fan-shaped spiny carapace covered in sharp conical tubercles and spines, a triangular rostrum between the eyes, two stalked eyes, a heavier right claw and a smaller left claw, and the king crab's signature leg arrangement — three pairs of very long spiny walking legs spread wide (the fourth pair is small and hidden under the shell), each leg jointed and bristling with spines. Pose conveys the crab squared toward the viewer, legs splayed in a wide commanding spread. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the spiny armor: render the carapace and legs studded with bold clean conical spines projecting from every surface and edge, each leg segment carrying rows of these spikes — the defining aggressive texture, crisp and perfect for vector. Density anchor: deep shadow in the joint grooves and beneath the carapace versus the lighter spiny plate faces, with curved hatch modeling the round leg segments. The clustered spines, the claws, and the stalked eyes are the focal accents. One bold continuous spiny contour around the carapace, claws, and every long leg. Weight hierarchy: thick contour, bold spines, joint shadows — legible large and small. A few minimal substrate strokes beneath permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no ice, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-044 · Peacock Mantis Shrimp

*Odontodactylus scyllarus* · IUCN LC · slug `mantis-shrimp` · output `mantis-shrimp_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body peacock mantis shrimp in near-profile, styled as an ornate premium woodcut emblem and upgraded natural-history engraving. Center the vivid crustacean in a wide frame with clean white space. Render the defining anatomy: an elongated segmented shrimp-like body with a clearly jointed armored tail (abdomen) ending in a strong ridged tailfan (telson), the signature pair of folded raptorial club appendages tucked under the head (the powerful smashers), a pair of prominent stalked compound eyes that swivel, several pairs of small walking and grasping legs, and feathery antennal scales projecting forward. Pose conveys the alert predator, raptorial clubs cocked, eyes raised. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the segmented carapace and the ornate ridged tailfan: render each body segment as a bold clean armored plate with a carved edge, and render the telson's raised carinae (ridges) and bumps as a bold patterned shield — a defining ornamental detail. The folded raptorial clubs are bold modeled appendages; the two stalked eyes are striking focal accents — render their faceted surface with fine clean grid hatch. Density anchor: deep joint-groove shadow and the shadowed underside versus the lighter raised plate faces, with the patterned tailfan as a bold focal shape. One bold continuous contour around the segmented body, raptorial clubs, eyestalks, legs, and tailfan. Weight hierarchy: thick contour, bold segment shadows, ornate tailfan, faceted eyes — legible large and small. A few minimal substrate strokes beneath permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no reef, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-045 · Moon Jellyfish

*Aurelia aurita* · IUCN LC · slug `jellyfish` · output `jellyfish_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a moon jellyfish drifting vertically, styled as an elegant premium woodcut emblem and upgraded natural-history engraving. Center the jelly in the frame with clean white space; the trailing parts stream downward. Render the defining anatomy: a translucent shallow domed bell (umbrella) like a saucer, the signature four horseshoe-shaped gonad rings clustered at the center of the bell, fine radial canals fanning out from the center to the bell margin, a fringe of many short fine tentacles around the entire bell rim, and four longer frilled oral arms hanging from the center beneath. Pose conveys gentle pulsing drift, the bell gently domed and the oral arms flowing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The challenge and the signature is rendering translucency in pure linework: build the bell as a confident clean dome outline with the four horseshoe gonads as bold clean closed shapes at the center (the unmistakable focal motif), the radial canals as fine clean lines fanning to the rim, and the marginal tentacle fringe as a delicate even row of short clean strokes all around the bell edge. The four oral arms are rendered as flowing frilled ribbons with clean wavy edges. Keep the bell largely open white so it reads as translucent; concentrate the limited darkness in the gonad rings, the rim shadow, and the oral-arm frills. One bold continuous contour around the bell dome and the streaming oral arms. Weight hierarchy: thick bell contour, bold central gonad motif, fine radial and tentacle lines — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no glow haze, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-046 · Common Sea Star

*Asterias rubens* · IUCN LC · slug `sea-star` · output `sea-star_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a common sea star (starfish) seen from a top-down dorsal view, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the five-armed star in the frame with clean white space, arms reaching symmetrically toward the corners. Render the defining anatomy: a five-pointed star body with a small central disc and five tapering arms, the upper surface covered in a texture of small bony knobs and short blunt spines arranged in rows, a pale madreporite spot offset on the central disc, and arms that taper to slightly upturned tips. Pose is the classic flat five-point star, gently asymmetrical so it looks alive rather than stamped. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the knobby skin: render the rows of small bony tubercles and short spines as a regular field of bold clean dots and dashes following the length of each arm and ringing the disc — the defining surface pattern, organized and rhythmic, never random noise. Run a defined central ridge-line down each arm. Density anchor: the textured darker arm centers and disc versus the lighter arm margins, with a clean strong shadow defining the underside edge of each arm. The madreporite is a small crisp focal accent. One bold continuous contour around the whole five-armed star. Weight hierarchy: thick contour, organized tubercle texture, clean arm ridges — legible large and small. A few minimal substrate strokes beneath permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no sand, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-047 · Sea Urchin

*Echinus esculentus* · IUCN LC · slug `sea-urchin` · output `sea-urchin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a sea urchin seen from a side-top three-quarter view, styled as a premium woodcut emblem and upgraded natural-history engraving — a radial-symmetry specimen. Center the spiny globe in the frame with clean white space. Render the defining anatomy: a rounded dome-shaped hard test (shell) whose entire surface is covered in long slender movable spines radiating outward in every direction, the spines arranged in ordered rows following the test's five-fold radial symmetry, with the rounded test visible at the spine bases. Pose is a symmetrical radiating sphere of spines. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is the radiating spines: render them as a dense but ORGANIZED halo of bold clean tapering needles projecting outward from the central body all around the contour and across the visible dome, each spine a distinct separated stroke that tapers to a point — the defining texture and a striking radial vector pattern; keep them clearly separated so they trace, never a matted clump. The test surface between the spine bases carries the urchin's fine tubercle bumps in ordered rows (the boss where each spine mounts) as clean small accents. Density anchor: the darker shadowed lower hemisphere and the spine-base shadows versus the lighter upper dome highlight, the spines themselves crisp black needles on white. One bold continuous spiny contour around the radiating globe. Weight hierarchy: thick spine field, ordered tubercle bases, dome shadow — legible large and small. A few minimal substrate strokes beneath permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no matted spines, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-048 · Nudibranch

*Chromodoris* · IUCN NE · slug `nudibranch` · output `nudibranch_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a nudibranch (sea slug) seen from a top-side three-quarter view, styled as an ornate premium woodcut emblem and upgraded natural-history engraving. Center the flamboyant sea slug in the frame with clean white space, presented large and bold. Render the defining anatomy: a soft elongated oval body crawling along, a pair of club-shaped sensory rhinophores rising from the head like little horns, a feathery rosette of branching gills (the branchial plume) rising from the back near the tail, a flared mantle skirt edging the body, and a broad creeping foot. Pose conveys the slug gliding forward, rhinophores up and gill plume erect. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature feature is twofold: the bold high-contrast body markings — render the nudibranch's striking pattern as confident clean dark blotches, stripes, and a bold mantle-edge band reserved against bright white body (these animals are famous for graphic patterns, ideal for linocut) — and the ornate appendages. Render the branched gill plume as a clean feathery rosette of separated branching strokes and the rhinophores as crisply ridged clubs — the defining ornamental focal accents. Density anchor: the bold pattern blotches and mantle band versus the reserved white body, with the textured gill rosette as the hero detail. One bold continuous contour around the soft body, mantle skirt, rhinophores, and gill plume. Weight hierarchy: thick contour, bold pattern shapes, feathery gill detail — legible large and small. A few minimal substrate strokes beneath the foot permitted; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no coral, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-049 · Green Sea Turtle

*Chelonia mydas* · IUCN EN · slug `green-sea-turtle` · output `green-sea-turtle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body green sea turtle in a gliding swimming pose seen from a top-side three-quarter angle, front flippers spread mid-stroke, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the turtle in the frame with clean white space; the broad flippers reach outward. Render the defining anatomy: a streamlined heart-shaped carapace (shell) covered in a mosaic of non-overlapping scutes, a small rounded head with a blunt beak and a pattern of large scales, a short neck, two long powerful wing-like front flippers, two smaller rear flippers, and a short tail. Pose conveys the turtle "flying" through water, flippers extended. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the carapace scute mosaic: render the shell's pattern of bordered polygonal scutes — central vertebral row, paired costal scutes, and the rim of marginal scutes — as bold clean tiles separated by carved channel-lines, each scute given a subtle internal radiating streak-grain (the green turtle's starburst markings), the defining pattern and a perfect vector subject. Density anchor: the patterned darker shell and the shadowed flipper undersides versus the lighter flipper faces and plastron; the head and flippers carry the large clean scale-plate pattern. The beaked head and the scaled flippers are crisp focal accents. One bold continuous contour around the carapace, head, neck, all flippers, and tail. Weight hierarchy: thick contour, bold scute tiles with grain, clean scale plates — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no reef, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AQU-050 · Leatherback Sea Turtle

*Dermochelys coriacea* · IUCN VU · slug `leatherback-turtle` · output `leatherback-turtle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body leatherback sea turtle in a gliding swimming pose seen from a top-side three-quarter angle, the great front flippers spread, styled as a premium woodcut emblem and upgraded natural-history engraving. Center the largest sea turtle in a wide frame with clean white space; the enormous flippers reach toward the edges. Render the defining anatomy that separates it from other sea turtles: instead of a hard scuted shell, a large teardrop-shaped leathery carapace bearing seven prominent longitudinal ridges (keels) running its full length, a barrel-shaped body tapering to a point at the rear, a comparatively large head with a deeply notched upper beak (two tooth-like cusps), no visible scutes, and exceptionally long wing-like front flippers (the longest of any sea turtle, spanning very wide) without claws. Pose conveys powerful open-ocean flight, flippers fully extended. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the seven ridges: render the carapace keels as seven bold clean raised ridge-lines running the length of the shell, each with a defined carved shadow channel along its flank — the defining structural pattern, rhythmic and converging toward the pointed rear. The leathery skin carries the leatherback's scattered pale-spot speckling as clean reserved white flecks (controlled, organized) over a darker hide. Density anchor: the ridged dark carapace and the shadowed flipper undersides versus the lighter flipper faces. The notched beak and the long flippers are focal accents. One bold continuous contour around the ridged carapace, head, the long flippers, and tail. Weight hierarchy: thick contour, bold seven-keel ridges, controlled spot-fleck — legible large and small. Floats alone on blank white; no water, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no water, no bubbles, no sky, no border, no text, no extra animals, no cartoon proportions, no scuted shell, no random speckles, no ultra-thin lines, no fragmented outline.
```

## Roster Index

| ID  | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | Blue Whale | *Balaenoptera musculus* | `blue-whale` | EN |
| 002 | Humpback Whale | *Megaptera novaeangliae* | `humpback-whale` | LC |
| 003 | Sperm Whale | *Physeter macrocephalus* | `sperm-whale` | VU |
| 004 | Orca (Killer Whale) | *Orcinus orca* | `orca` | DD |
| 005 | Beluga Whale | *Delphinapterus leucas* | `beluga-whale` | LC |
| 006 | Narwhal | *Monodon monoceros* | `narwhal` | LC |
| 007 | Bottlenose Dolphin | *Tursiops truncatus* | `bottlenose-dolphin` | LC |
| 008 | Common Dolphin | *Delphinus delphis* | `common-dolphin` | LC |
| 009 | West Indian Manatee | *Trichechus manatus* | `manatee` | VU |
| 010 | Dugong | *Dugong dugon* | `dugong` | VU |
| 011 | California Sea Lion | *Zalophus californianus* | `sea-lion` | LC |
| 012 | Harbor Seal | *Phoca vitulina* | `harbor-seal` | LC |
| 013 | Leopard Seal | *Hydrurga leptonyx* | `leopard-seal` | LC |
| 014 | Northern Elephant Seal | *Mirounga angustirostris* | `elephant-seal` | LC |
| 015 | Walrus | *Odobenus rosmarus* | `walrus` | VU |
| 016 | Sea Otter | *Enhydra lutris* | `sea-otter` | EN |
| 017 | Great White Shark | *Carcharodon carcharias* | `great-white-shark` | VU |
| 018 | Whale Shark | *Rhincodon typus* | `whale-shark` | EN |
| 019 | Great Hammerhead Shark | *Sphyrna mokarran* | `hammerhead-shark` | CR |
| 020 | Tiger Shark | *Galeocerdo cuvier* | `tiger-shark` | NT |
| 021 | Giant Manta Ray | *Mobula birostris* | `manta-ray` | EN |
| 022 | Southern Stingray | *Hypanus americanus* | `stingray` | NT |
| 023 | Atlantic Bluefin Tuna | *Thunnus thynnus* | `bluefin-tuna` | LC |
| 024 | Atlantic Salmon | *Salmo salar* | `atlantic-salmon` | LC |
| 025 | Atlantic Blue Marlin | *Makaira nigricans* | `blue-marlin` | VU |
| 026 | Swordfish | *Xiphias gladius* | `swordfish` | NT |
| 027 | Clownfish | *Amphiprion ocellaris* | `clownfish` | LC |
| 028 | Seahorse | *Hippocampus erectus* | `seahorse` | VU |
| 029 | Anglerfish | *Melanocetus johnsonii* | `anglerfish` | LC |
| 030 | Mediterranean Moray | *Muraena helena* | `moray-eel` | LC |
| 031 | Red Lionfish | *Pterois volitans* | `lionfish` | LC |
| 032 | Pufferfish | *Arothron hispidus* | `pufferfish` | LC |
| 033 | Ocean Sunfish | *Mola mola* | `ocean-sunfish` | VU |
| 034 | Koi Carp | *Cyprinus rubrofuscus* | `koi` | DOM |
| 035 | Great Barracuda | *Sphyraena barracuda* | `barracuda` | LC |
| 036 | Atlantic Sturgeon | *Acipenser oxyrinchus* | `sturgeon` | NT |
| 037 | Red-bellied Piranha | *Pygocentrus nattereri* | `piranha` | LC |
| 038 | Giant Pacific Octopus | *Enteroctopus dofleini* | `giant-pacific-octopus` | LC |
| 039 | Giant Squid | *Architeuthis dux* | `giant-squid` | DD |
| 040 | Common Cuttlefish | *Sepia officinalis* | `cuttlefish` | NT |
| 041 | Chambered Nautilus | *Nautilus pompilius* | `nautilus` | EN |
| 042 | American Lobster | *Homarus americanus* | `lobster` | LC |
| 043 | Red King Crab | *Paralithodes camtschaticus* | `king-crab` | NE |
| 044 | Peacock Mantis Shrimp | *Odontodactylus scyllarus* | `mantis-shrimp` | LC |
| 045 | Moon Jellyfish | *Aurelia aurita* | `jellyfish` | LC |
| 046 | Common Sea Star | *Asterias rubens* | `sea-star` | LC |
| 047 | Sea Urchin | *Echinus esculentus* | `sea-urchin` | LC |
| 048 | Nudibranch | *Chromodoris* | `nudibranch` | NE |
| 049 | Green Sea Turtle | *Chelonia mydas* | `green-sea-turtle` | EN |
| 050 | Leatherback Sea Turtle | *Dermochelys coriacea* | `leatherback-turtle` | VU |

*IUCN column is indicative and must be validated against the live Red List
before publication. `DOM` = domesticated/ornamental stock; `NE` = not
evaluated at species level. Entries 049–050 (sea turtles) are reptiles by
class, placed here on the 90% submerged rule; relocate to reptilian-beasts
at the maintainer's discretion.

## Sign-off

Aquatic Beasts linocut library — 50 of 50 authored, house spec carried
forward, water-field adaptation locked. Second of the seven BEASTIQUE
collections. Marine mammals catalogued here per the 90% submerged rule.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
