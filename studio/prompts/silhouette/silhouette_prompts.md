<!--
✒ Metadata
    - Title: Silhouette Prompt Library (BEASTIQUE Edition - v1.0)
    - File Name: silhouette_prompts.md
    - Relative Path: studio/prompts/silhouette/silhouette_prompts.md
    - Artifact Type: data
    - Version: 1.0.0
    - Date: 2026-06-26
    - Update: Friday, June 26, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.0.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Initial silhouette
      library: 25 prompts, 5 per category, same species set as the low-poly
      library, authored for the forge --style silhouette path.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "silhouette" house
    style: solid-black filled forms on white, readable by outline alone, that
    trace to a single clean fillable vector path. Consumed by the forge with
    `--style silhouette`; ids are BQ-SILH-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - Poses chosen so each species is recognizable from its contour alone.
    - The cleanest-tracing style: one closed shape, no interior detail.
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.5.0+.
    - Output: studio/collections/<gallery>-beasts/silhouette/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Silhouette Prompt Library

Twenty-five silhouette prompts, five per category, recognizable by outline.

## House Silhouette Spec (style DNA)

- **Solid black fill, pure white ground.** No interior detail, features, eyes,
  or shading. The form is the contour and nothing else.
- **Readable by outline.** Pose each subject so its species-defining shape (a
  dorsal fin, a mane, an S-neck, a hooked bill) reads instantly in silhouette.
- **One closed shape, crisp edges.** Traces to a single fillable path — the
  cleanest, lowest-node style and ideal for vinyl/cut.

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-SILH-<CLS>-<NUM>` | `BQ-SILH-MAM-002` |
| Raster out | `<slug>_silhouette-bw_01.png` | `lion_silhouette-bw_01.png` |
| Vector out | `<slug>_silhouette-bw_01.svg` | `lion_silhouette-bw_01.svg` |

---

## Aquatic

### BQ-SILH-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a blue whale in left-facing profile, gliding level, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the long tapering torpedo body, the broad flat head, the tiny dorsal fin set far back, the long slender flipper, and the notched horizontal fluke sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no facial features, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-002 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a great white shark in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the heavy torpedo body, the conical snout, the tall triangular dorsal fin, the pointed pectoral fins, and the asymmetric crescent tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no facial features, no teeth detail, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-003 · Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a giant manta ray in top-down view with wings spread wide, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the broad diamond wing-disc, the twin cephalic head-fins curling forward, and the long slender whip tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no features, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of an orca in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the robust body, the conical head, the very tall straight triangular dorsal fin, the paddle flipper, and the notched fluke sharp and legible. Do NOT render the white eye-patch or saddle — this is a solid silhouette, the contour only. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye-patch, no white patches inside the body, no features, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-005 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a great hammerhead shark in top-down view, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the wide flattened mallet-shaped head, the long slender body, the tall sickle dorsal fin, the swept pectoral fins, and the crescent tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no features, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

---

## Avian

### BQ-SILH-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a bald eagle with wings raised in a landing flare, talons forward, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the broad fingered wingtips, the fanned tail, the hooked beak in profile, and the extended talons sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no facial features, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no sky, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-002 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a snowy owl perched facing forward with wings tucked, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the rounded earless head, the plump upright body, the curved talons gripping a short perch stub, and the soft feathered outline sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no facial disc, no eyes, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-003 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `flamingo` · output `flamingo_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a greater flamingo standing on one leg with the signature deep S-curved neck and down-curved bill, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the S-neck, the kinked bill, the rounded body, and the single long stilt leg with the other tucked up sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-004 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a scarlet macaw perched in profile with its long pointed tail streaming down, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the heavy hooked beak, the rounded head, the folded wing, and the very long tapering tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no perch detail, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-005 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a shoebill standing in profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the enormous clog-shaped hooked bill, the rounded head, the heavy neck, the upright body, and the long legs sharp and legible. The huge bill is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

---

## Insecta

### BQ-SILH-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN EN · slug `monarch-butterfly` · output `monarch-butterfly_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a monarch butterfly with wings fully spread in a symmetric top-down view, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the scalloped edges of the four wings, the slender body, and the pair of clubbed antennae sharp and legible, with the left and right wings perfectly mirror-symmetric. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no wing pattern, no veins, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry or fuzzy edges.
```

### BQ-SILH-INS-002 · Hercules Beetle

*Dynastes hercules* · IUCN LC · slug `hercules-beetle` · output `hercules-beetle_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a Hercules beetle in top-down view, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the two huge curving pincer horns, the broad oval body, and the six angular legs sharp and legible. The long horns are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no features, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra insects, no blurry or fuzzy edges.
```

### BQ-SILH-INS-003 · Praying Mantis

*Mantis religiosa* · IUCN LC · slug `praying-mantis` · output `praying-mantis_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a praying mantis in side profile with its spiked forelegs raised in the prayer pose, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the triangular head, the raised raptorial forelegs, the long thorax, the folded wing line, and the slender abdomen sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no plant, no background, no scene, no text, no border, no extra insects, no blurry or fuzzy edges.
```

### BQ-SILH-INS-004 · Emperor Dragonfly

*Anax imperator* · IUCN LC · slug `dragonfly` · output `dragonfly_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of an emperor dragonfly in top-down view with all four wings outstretched, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the four long narrow wings, the large rounded head, and the long slender segmented abdomen sharp and legible, wings mirror-symmetric. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no wing veins, no eyes, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry or fuzzy edges.
```

### BQ-SILH-INS-005 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a stag beetle in top-down view, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the oversized branching antler-like mandibles, the broad body, and the six angular legs sharp and legible. The antler-jaws are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no features, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra insects, no blurry or fuzzy edges.
```

---

## Mammalian

### BQ-SILH-MAM-001 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a gray wolf standing in profile, head lowered and alert, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the erect pointed ears, the long muzzle, the thick neck ruff, the level back, the four legs, and the low bushy tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-002 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a male lion standing in profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the full mane framing the head, the broad muzzle, the muscular body, the four legs, and the tufted tail sharp and legible. The maned head is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no mane texture, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-003 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a red fox trotting in profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the large pointed ears, the sharp narrow muzzle, the slender body, the four delicate legs, and the long bushy tail sharp and legible. The big ears and full brush tail are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-004 · African Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of an African elephant standing in profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the large fanned ear, the long curving trunk, the curved tusk, the domed back, the heavy columnar legs, and the tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-005 · Mountain Gorilla

*Gorilla beringei beringei* · IUCN EN · slug `mountain-gorilla` · output `mountain-gorilla_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a mountain gorilla seated in a knuckle-resting profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the domed head, the heavy brow, the massive sloping shoulders, the broad back, and the thick resting arms sharp and legible. The powerful hunched mass is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no face, no eyes, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

---

## Reptilian

### BQ-SILH-REP-001 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a panther chameleon in profile gripping a short branch stub, with its prehensile tail coiled, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the tall casque head crest, the bulging turret eye bump, the grasping clamp feet, the serrated dorsal crest, and the tight tail spiral sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye detail, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no leaves, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-002 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a Komodo dragon in a low four-legged profile stance with a forked tongue extended, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the broad blunt snout, the forked tongue, the heavy body, the bowed clawed legs, and the long thick tapering tail sharp and legible. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no scales, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-003 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a king cobra reared upright with its hood flared, rising from a coiled base, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the flared fan-shaped hood, the blunt head, the rising S-curve of the upper body, and the coiled lower body sharp and legible. The flared hood is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no scales, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-004 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a saltwater crocodile in profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the long armored snout, the raised brow, the jagged sawtooth back ridge, the bowed splayed legs, and the thick tapering tail sharp and legible. The serrated dorsal ridge is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no scales, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-005 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a green iguana in profile on a short branch, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the blocky head, the hanging dewlap under the jaw, the row of dorsal spines, the clawed feet, and the very long tapering tail sharp and legible. The spiny crest and long tail are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no scales, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no leaves, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```
