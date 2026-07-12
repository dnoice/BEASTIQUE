<!--
✒ Metadata
    - Title: Silhouette Prompt Library (BEASTIQUE Edition - v1.1)
    - File Name: silhouette_prompts.md
    - Relative Path: studio/prompts/silhouette/silhouette_prompts.md
    - Artifact Type: data
    - Version: 1.1.0
    - Date: 2026-07-08
    - Update: Wednesday, July 08, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-07-08) [Anthropic - Claude Fable 5] — Expansion Set 006-010:
      25 additions (5 per category) selected by the two-test rule born from
      the first render review — the stranger test (instantly nameable from
      the black shape alone) and the lineup test (distinct from every other
      member of its set). First use of the ARA (scorpion, orb-weaver) and
      AMP (tree frog) class codes. Review note: orca and blue whale flagged
      as weak silhouettes (dolphin-ambiguous / not stranger-nameable).
    - 1.0.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Initial silhouette
      library: 25 prompts, 5 per category, same species set as the low-poly
      library, authored for the forge --style silhouette path.

✒ Description:
    Fifty copy-paste-ready prompts in the BEASTIQUE "silhouette" house
    style: solid-black filled forms on white, readable by outline alone, that
    trace to a single clean fillable vector path. Consumed by the forge with
    `--style silhouette`; ids are BQ-SILH-<CLASS>-<NUM>.

✒ Key Features:
    - 50 standalone prompts, 10 per category (core set + expansion).
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

Fifty silhouette prompts, ten per category, recognizable by outline.

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


---

# Expansion Set — 006-010 (2026-07-08)

Twenty-five additions chosen by the two-test rule: **the stranger test**
(nameable from the black shape alone, instantly) and **the lineup test**
(distinct from every other member of its set). Props are allowed when the
prop does the naming (the leafcutter's leaf, the dung beetle's ball).

## Aquatic — Expansion


### BQ-SILH-AQU-007 · Giant Pacific Octopus

*Enteroctopus dofleini* · IUCN LC · slug `giant-pacific-octopus` · output `giant-pacific-octopus_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a giant Pacific octopus, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the bulbous mantle head and all eight arms flowing outward and downward in varied elegant curls, two or three arm tips spiraling. The rounded head above a crown of curling arms is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no sucker detail, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no bubbles, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-008 · Narwhal

*Monodon monoceros* · IUCN LC · slug `narwhal` · output `narwhal_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a narwhal in left-facing profile, gliding level, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the smooth rounded head with the single long straight spiral tusk projecting forward, the stout finless back, the short flippers, and the notched fluke sharp and legible. The long forward tusk is the signature of the outline — unmistakable and unlike any other sea creature. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no spiral groove detail on the tusk, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no dorsal fin, no water, no ice, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-009 · Swordfish

*Xiphias gladius* · IUCN LC · slug `swordfish` · output `swordfish_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a swordfish in left-facing profile, mid-lunge, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the long flat sword bill, the tall sickle-shaped dorsal fin, the streamlined body, and the deeply forked crescent tail sharp and legible. The sword bill plus sickle dorsal are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no gill detail, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no splash, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AQU-010 · Moon Jellyfish

*Aurelia aurita* · IUCN NE · slug `moon-jellyfish` · output `moon-jellyfish_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a moon jellyfish drifting upright, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the smooth dome bell with a gently scalloped rim and a graceful fall of long trailing tentacles beneath, a few drifting sideways in the current. The dome above flowing tentacles is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no white inside the bell, no gradient, no grayscale, no color, no transparency effect, no glow, no texture, no hatching, no outline-only unfilled shape, no water, no bubbles, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

## Avian — Expansion

### BQ-SILH-AVI-006 · Indian Peafowl

*Pavo cristatus* · IUCN LC · slug `indian-peafowl` · output `indian-peafowl_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a peacock in full display, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the great fanned train spread in a wide arc with a scalloped feather-tip edge, the slender neck and small crested head centered before it, and the two legs beneath. The huge fanned train is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyespot detail inside the train, no eye, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-007 · Toco Toucan

*Ramphastos toco* · IUCN LC · slug `toco-toucan` · output `toco-toucan_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a toco toucan perched in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the enormous deep banana-curved bill nearly as large as the body, the compact rounded body, the short perch branch under gripping feet, and the squared tail angled down. The oversized bill is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no bill markings, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no leaves, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-008 · Ruby-throated Hummingbird

*Archilochus colubris* · IUCN LC · slug `ruby-throated-hummingbird` · output `ruby-throated-hummingbird_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a hummingbird hovering, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the tiny body tilted upright, the long needle-thin bill, the two swept-back wings raised in a V, and the short fanned tail. The needle bill and hovering V wings are the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no motion blur, no wing trails, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no flowers, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-009 · Emperor Penguin

*Aptenodytes forsteri* · IUCN NT · slug `emperor-penguin` · output `emperor-penguin_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of an emperor penguin standing upright in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the smooth rounded head with slender down-curved bill, the heavy teardrop body, the flipper wing held flat against the side breaking the contour slightly, and the short tail propped behind the feet. The upright teardrop stance is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no chest patch, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ice, no snow, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AVI-010 · Common Ostrich

*Struthio camelus* · IUCN LC · slug `common-ostrich` · output `common-ostrich_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of an ostrich striding in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the small head on the very long slender neck, the huge fluffed rounded body plume, and the two long powerful bare legs mid-stride. The tiny head, endless neck, and big round body are the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no feather detail, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

## Insecta — Expansion

### BQ-SILH-INS-006 · Leafcutter Ant

*Atta cephalotes* · IUCN NE · slug `leafcutter-ant` · output `leafcutter-ant_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a leafcutter ant in left-facing profile carrying a large cut leaf fragment overhead in its mandibles, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the three distinct body segments, the six angled legs, the bent antennae, and the big tilted leaf piece held aloft like a sail. The ant-plus-leaf sail is the signature of the outline. The ant and its leaf form one connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no leaf veins, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no trail of ants, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-INS-007 · Desert Locust

*Schistocerca gregaria* · IUCN NE · slug `desert-locust` · output `desert-locust_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a desert locust in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the blunt head with short antennae, the long wings folded flat along the back, and especially the two huge angled jumping hind legs with their distinctive bent-knee Z shape. The oversized angled hind legs are the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no wing venation, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no grass, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```


### BQ-SILH-ARA-002 · Golden Orb-Weaver

*Trichonephila clavipes* · IUCN NE · slug `golden-orb-weaver` · output `golden-orb-weaver_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a golden orb-weaver spider seen from directly above, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the small head section, the long oval abdomen, and all eight slender legs arranged in the orb-weaver's distinctive paired X posture, two pairs sweeping forward and two back. The eight-legged X posture is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no web, no silk threads, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no leaves, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-INS-008 · Sacred Dung Beetle

*Scarabaeus sacer* · IUCN NE · slug `sacred-dung-beetle` · output `sacred-dung-beetle_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a sacred dung beetle in left-facing profile rolling a large perfect sphere, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the rounded beetle body angled up onto the ball, the toothed shovel-edged head, and the angled working legs braced against the sphere. The beetle-and-ball pairing is the signature of the outline. The beetle and its sphere form one connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no texture on the ball, no white inside the body, no gradient, no grayscale, no color, no hatching, no outline-only unfilled shape, no ground line, no sand, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

## Mammalian — Expansion

### BQ-SILH-MAM-006 · Giraffe

*Giraffa camelopardalis* · IUCN VU · slug `giraffe` · output `giraffe_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a giraffe standing in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the extraordinary long neck, the small head with two ossicone horns and alert ears, the steeply sloping back from shoulder to tail, and the long slender legs. The impossible neck and sloped back are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no patch pattern, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no acacia tree, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-007 · Red Kangaroo

*Osphranter rufus* · IUCN LC · slug `red-kangaroo` · output `red-kangaroo_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a red kangaroo in left-facing profile, upright at rest on its haunches, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the long rabbit-like ears, the small forepaws tucked before the chest, the huge bent haunches and long feet, and the thick tapering tail resting behind as a third leg. The upright stance on haunches and tail is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no pouch detail, no joey, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-008 · White Rhinoceros

*Ceratotherium simum* · IUCN NT · slug `white-rhinoceros` · output `white-rhinoceros_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a white rhinoceros standing in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the long low head with two stacked horns, the larger front horn curving up, the pronounced shoulder hump, the massive barrel body, and the sturdy column legs. The double horn and hump are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no skin folds, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no grass, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-009 · Large Flying Fox

*Pteropus vampyrus* · IUCN NT · slug `large-flying-fox` · output `large-flying-fox_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a large flying fox bat in flight seen from below, wings fully spread, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the two vast angular wings with their distinct finger-strut points along the trailing edge, the small fox-like head with upright ears between them, and the tailless body. The spread finger-strutted wings are the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no wing membrane veins, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no moon, no trees, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-MAM-010 · Wild Bactrian Camel

*Camelus ferus* · IUCN CR · slug `wild-bactrian-camel` · output `wild-bactrian-camel_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a wild Bactrian camel standing in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the two distinct humps, the long down-curved neck rising to a small head, the shaggy chest fringe breaking the front contour, and the long slender legs. The twin humps are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no harness, no saddle, no rider, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no dunes, no ground, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

## Reptilian — Expansion

### BQ-SILH-REP-006 · Green Sea Turtle

*Chelonia mydas* · IUCN EN · slug `green-sea-turtle` · output `green-sea-turtle_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a green sea turtle seen from directly above, swimming, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the broad oval shell, the two long wing-like front flippers swept out mid-stroke, the two short rear flippers, and the small rounded head. The top-down oval-and-flippers plan is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no scute pattern on the shell, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no water, no bubbles, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-007 · Galápagos Giant Tortoise

*Chelonoidis niger* · IUCN VU · slug `galapagos-giant-tortoise` · output `galapagos-giant-tortoise_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a Galápagos giant tortoise in left-facing profile, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the huge high-domed shell, the long wrinkled neck stretched forward and slightly up, the small beaked head, and the thick elephant-column legs. The great dome and reaching neck are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no shell plate pattern, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no rocks, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-008 · Tokay Gecko

*Gekko gecko* · IUCN LC · slug `tokay-gecko` · output `tokay-gecko_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a tokay gecko seen from directly above in a climbing pose, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the broad triangular head, the plump body curved in a gentle S, the four legs splayed wide with distinctly rounded toe pads spread like small fans, and the thick tapering tail curling to one side. The splayed fan-toed feet are the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eyes, no spot pattern, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no wall, no leaf, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-REP-009 · Western Diamondback Rattlesnake

*Crotalus atrox* · IUCN LC · slug `western-diamondback-rattlesnake` · output `western-diamondback-rattlesnake_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a western diamondback rattlesnake coiled in a defensive posture, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the layered coil of the thick body, the head raised and drawn back to strike with the wide viper jaw, and the tail lifted high on the other side ending in the distinctly segmented rattle. The raised segmented rattle is the signature of the outline. One connected shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye, no diamond pattern, no forked tongue, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no ground, no rocks, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```

### BQ-SILH-AMP-001 · Red-eyed Tree Frog

*Agalychnis callidryas* · IUCN LC · slug `red-eyed-tree-frog` · output `red-eyed-tree-frog_silhouette-bw_01.{png,svg}`

```text
Create a clean, bold SILHOUETTE of a red-eyed tree frog in left-facing profile, crouched as if about to leap, filled completely SOLID BLACK with absolutely no interior detail, features, or shading, centered on a PURE WHITE background. The whole subject reads from its crisp outer contour alone — keep the large bulging eye dome on top of the head, the smooth rounded back arcing to the hindquarters, the big folded jumping hind legs, and the front toes with distinctly round suction pads. The crouched leap posture with bulging eye dome and pad-tipped toes is the signature of the outline. One closed shape, smooth confident edges, high contrast, vector-traceable to a single fillable path.
Negative prompt: no interior lines, no eye pupil, no stripes, no white inside the body, no gradient, no grayscale, no color, no texture, no hatching, no outline-only unfilled shape, no leaf, no branch, no background, no scene, no text, no border, no extra animals, no blurry or fuzzy edges.
```
