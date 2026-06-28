<!--
✒ Metadata
    - Title: Stencil Prompt Library (BEASTIQUE Edition - v1.0)
    - File Name: stencil_prompts.md
    - Relative Path: studio/prompts/stencil/stencil_prompts.md
    - Artifact Type: data
    - Version: 1.0.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial stencil library:
      25 prompts, 5 per category, same species set as the other style
      libraries, authored for the forge --style stencil path.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "stencil/papercut"
    house style: bold solid-black cut-out shapes with white negative-space
    detail, connected by bridges into a single cut-ready piece. Trace-light and
    ideal for vinyl/laser. Consumed by the forge with `--style stencil`; ids are
    BQ-STEN-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - The CUTOUT language: bold black with white negative-space + bridges.
    - Cut-ready (one connected piece) and trace-light (few closed paths).
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.6.0+.
    - Output: studio/collections/<gallery>-beasts/stencil/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Stencil Prompt Library

Twenty-five stencil/papercut prompts, five per category — cut-ready cut-outs.

## House Stencil Spec (style DNA)

- **Bold black, white negative-space.** Solid-black shapes on white; interior
  detail is carved as clean WHITE gaps (eye, feature separations).
- **One connected piece.** Everything joined by bridges — no floating islands —
  so it's literally cut-ready for vinyl/laser.
- **Chunky only.** No thin fragile lines, no hatching, no shading. Crisp edges,
  trace-light (a few closed paths).

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-STEN-<CLS>-<NUM>` | `BQ-STEN-MAM-002` |
| Raster out | `<slug>_stencil-bw_01.png` | `lion_stencil-bw_01.png` |
| Vector out | `<slug>_stencil-bw_01.svg` | `lion_stencil-bw_01.svg` |

---

## Aquatic

### BQ-STEN-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a blue whale in left-facing profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the whale as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a slot separating the flipper from the body, a few bold parallel throat-pleat slots, and the fluke notch. Keep everything connected by bridges into a single cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading, no gradient. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AQU-002 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a great white shark in left-facing profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the shark as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, the five gill slits as bold white slots, a white mouth gap holding a few bold black triangular teeth (bridged), and slots separating the fins. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AQU-003 · Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a giant manta ray in top-down view with wings spread, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the ray as a bold solid-black diamond shape with interior detail carved as clean WHITE negative-space gaps: the eye, gill slots, and slots separating the two cephalic head-fins from the body. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of an orca in left-facing profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. The orca's natural pattern IS the cut-out: render the body solid black and carve the chin-to-belly underside, the oval eye-patch, and the dorsal saddle as bold clean WHITE negative-space shapes, plus a slot separating the flipper. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AQU-005 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a great hammerhead shark in top-down view, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the shark as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eyes at the hammer tips, gill slots, and slots separating the fins from the body. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Avian

### BQ-STEN-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a bald eagle in a head-and-shoulders profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the eagle as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a slot defining the hooked beak and its gape, and a few bold slots separating the feather groups on the neck and shoulder. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AVI-002 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a snowy owl facing forward, wings tucked, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the owl as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the two large round eyes, the small beak, a slot for the facial outline, slots where the folded wings meet the body, and a few bold white barring slots across the wings. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable to a few closed paths. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AVI-003 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `flamingo` · output `flamingo_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a greater flamingo standing on one leg with the deep S-curved neck, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the flamingo as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a slot for the kink of the down-curved bill, a slot for the wing fold, and the gap between the body and the raised leg. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only (the legs kept thick enough to cut) — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AVI-004 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a scarlet macaw perched in profile with a long tail, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the macaw as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye and a couple of facial-patch slots, a slot defining the hooked beak, slots separating the wing feathers, and a few bold slots banding the long tail. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no perch, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-AVI-005 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a shoebill facing forward, the huge bill dominant, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the shoebill as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the round eyes, a bold slot for the hooked tip and central ridge of the clog-shaped bill, and a few slots for the shaggy crest and neck feathers. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Insecta

### BQ-STEN-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN EN · slug `monarch-butterfly` · output `monarch-butterfly_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a monarch butterfly with wings fully spread, symmetric top-down, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the butterfly as bold solid-black wings with interior detail carved as clean WHITE negative-space cells between bold black veins (the veins act as the bridges), a row of white marginal-dot gaps in the black border, and a segmented black body. Keep the two wings perfectly mirror-symmetric and everything connected into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-STEN-INS-002 · Hercules Beetle

*Dynastes hercules* · IUCN LC · slug `hercules-beetle` · output `hercules-beetle_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a Hercules beetle in top-down view, the two horns prominent, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the beetle as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: a slot between the two curving horns, a seam slot down the elytra, slots at the leg joints, and a couple of bold elytra accent slots. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only (legs thick enough to cut) — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-STEN-INS-003 · Praying Mantis

*Mantis religiosa* · IUCN LC · slug `praying-mantis` · output `praying-mantis_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a praying mantis in side profile with raised forelegs, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the mantis as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, slots at the foreleg joints, a slot for the wing fold, and slots banding the abdomen segments. Keep limbs thick enough to cut and everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no plant, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-STEN-INS-004 · Emperor Dragonfly

*Anax imperator* · IUCN LC · slug `dragonfly` · output `dragonfly_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of an emperor dragonfly in top-down view with four outstretched wings, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the dragonfly as a bold solid-black shape with interior detail carved as clean WHITE negative-space cells inside each wing (bold black vein-bars act as bridges), the large eyes, and slots banding the long abdomen. Keep the wings mirror-symmetric and everything connected into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-STEN-INS-005 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a stag beetle in top-down view, the antler mandibles prominent, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the beetle as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: a slot between the branching mandibles, a seam slot down the elytra, and slots at the leg joints. Keep mandibles and legs thick enough to cut and everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

---

## Mammalian

### BQ-STEN-MAM-001 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a gray wolf in a head-and-shoulders three-quarter profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the wolf as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eyes, a nose-highlight slot, inner-ear gaps, slots separating the muzzle and cheek, and a few bold slots suggesting the neck ruff. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-MAM-002 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a male lion in a front-facing three-quarter portrait, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the lion as a bold solid-black shape, the mane a bold chunky silhouette, with interior detail carved as clean WHITE negative-space gaps: the eyes, a nose slot, muzzle and mouth slots, and a moderate set of bold white slots radiating through the mane to suggest its locks (bridged). Keep everything connected into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-MAM-003 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a red fox in a head-and-shoulders three-quarter profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the fox as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eyes, a nose slot, bold inner-ear gaps, and a cheek-ruff slot. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-MAM-004 · African Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of an African elephant in three-quarter front view, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the elephant as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a bold ear-fold slot, a few trunk-crease slots, white tusk shapes (bridged), and slots separating the legs. Keep everything connected into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-MAM-005 · Mountain Gorilla

*Gorilla beringei beringei* · IUCN EN · slug `mountain-gorilla` · output `mountain-gorilla_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a mountain gorilla in a head-and-shoulders view, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the gorilla as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the deep-set eyes under the brow, a bold slot for the broad nose and its nostril ridges, a mouth slot, and slots separating the shoulders. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Reptilian

### BQ-STEN-REP-001 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a panther chameleon in profile gripping a short branch, tail coiled, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the chameleon as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: a ring for the turret eye, a slot for the tall casque, bold white notches along the dorsal crest, gaps at the clamping feet, and slots separating the tail coils. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-REP-002 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a Komodo dragon in a low four-legged profile stance, forked tongue out, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the dragon as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a mouth slot with the forked tongue gap, slots separating the legs, a couple of bold body-fold slots, and the tail. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-REP-003 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a king cobra reared with its hood flared, rising from a coil, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the cobra as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eyes, a couple of bold hood-pattern shapes inside the flared hood, a mouth slot, and bold slots banding the body and coil. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-REP-004 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a saltwater crocodile in profile, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the crocodile as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a mouth slot with a few bold black teeth bridged across it, bold white notches along the raised back ridge, slots separating the legs, and slots banding the tail. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no water, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-STEN-REP-005 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_stencil-bw_01.{png,svg}`

```text
Create a bold STENCIL / papercut design of a green iguana in profile on a short branch, pure black on a PURE WHITE background, like a cut-vinyl stencil. Render the iguana as a bold solid-black shape with interior detail carved as clean WHITE negative-space gaps: the eye, a ring for the large round cheek scale, a slot for the hanging dewlap, bold white notches along the dorsal spine crest, gaps at the clawed feet, and slots banding the long tail. Keep everything connected by bridges into one cut-ready piece — no floating islands. Bold chunky shapes only — no thin fragile lines, no hatching, no shading. Crisp clean edges, vector-traceable. Center in frame.
Negative prompt: no thin lines, no hatching, no cross-hatching, no stipple, no shading, no gradient, no grayscale, no color, no floating disconnected islands, no fine wispy detail, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```
