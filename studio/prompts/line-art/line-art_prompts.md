<!--
✒ Metadata
    - Title: Line-Art Prompt Library (BEASTIQUE Edition - v1.0)
    - File Name: line-art_prompts.md
    - Relative Path: studio/prompts/line-art/line-art_prompts.md
    - Artifact Type: data
    - Version: 1.0.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial line-art
      library: 25 prompts, 5 per category, same species set as the other style
      libraries, authored for the forge --style line-art path.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "line-art" house
    style: clean medium-weight black line drawings on white — a bold contour
    plus only the essential interior lines, no fill or hatching. Trace-light.
    Consumed by the forge with `--style line-art`; ids are BQ-LINE-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - The clean-LINE language: contour + minimal defining lines, no fill.
    - Trace-light (open strokes); great for icons, logos, merch.
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.6.0+.
    - Output: studio/collections/<gallery>-beasts/line-art/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Line-Art Prompt Library

Twenty-five clean line-art prompts, five per category — contour plus essentials.

## House Line-Art Spec (style DNA)

- **Lines only.** Confident, even, medium-weight black lines on white — no
  fill, no solid black areas, no hatching, no shading, no texture.
- **Bold contour + essentials.** One clean outer contour plus only the few
  interior lines that define the subject (eye, mouth, key separations).
- **Trace-clean.** Smooth closed lines, never thin/broken/sketchy, so they
  trace to crisp light vector strokes.

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-LINE-<CLS>-<NUM>` | `BQ-LINE-MAM-002` |
| Raster out | `<slug>_line-art-bw_01.png` | `lion_line-art-bw_01.png` |
| Vector out | `<slug>_line-art-bw_01.svg` | `lion_line-art-bw_01.svg` |

---

## Aquatic

### BQ-LINE-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a blue whale in left-facing profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold continuous outer contour plus only the essential interior lines: the small eye, the long mouthline, a few long throat-pleat grooves, the flipper separation, and the notch of the fluke. NO fill, NO solid black areas, NO hatching, NO shading, NO texture — line work only. Keep lines smooth, closed, and clean, not thin or sketchy, so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AQU-002 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a great white shark in left-facing profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the round eye, the curved mouthline with a hint of a few triangular teeth, the five gill slits as short clean strokes, and the fin separations. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AQU-003 · Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a giant manta ray in top-down view with wings spread on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour of the diamond wing-disc plus only the essentials: the two cephalic head-fins, the gill lines, the small eye, and a soft centerline where the wings meet the body. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of an orca in left-facing profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the mouthline, the OUTLINE of the eye-patch and the saddle drawn as simple closed line shapes (not filled), and the flipper and dorsal-fin separations. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no filled eye-patch, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AQU-005 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a great hammerhead shark in top-down view on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour of the wide mallet head and long body plus only the essentials: the eyes at the hammer tips, a soft body centerline, the gill lines, and the fin separations. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Avian

### BQ-LINE-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a bald eagle in a head-and-shoulders profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the hooked beak with its line of the gape, the sharp eye and brow, the cere, and a few clean feather-group separations on the neck and shoulder. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AVI-002 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a snowy owl facing forward, wings tucked, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the two large round eyes, the small hooked beak, the soft heart-shaped facial outline, and the line where the folded wings meet the body. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AVI-003 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `flamingo` · output `flamingo_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a greater flamingo standing on one leg with the deep S-curved neck on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the kinked down-curved bill, the wing-fold line, and the long single stilt leg with the other tucked. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AVI-004 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a scarlet macaw perched in profile with a long tail on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the heavy hooked beak, the eye in the bare facial patch (a few short patch lines), the wing-fold line, and the long tail with a couple of feather separations. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no perch, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-AVI-005 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a shoebill facing forward, the huge bill dominant, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the clog-shaped bill with its hooked tip and central ridge, the round eyes, and a few feather-group lines on the head crest and neck. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Insecta

### BQ-LINE-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN EN · slug `monarch-butterfly` · output `monarch-butterfly_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a monarch butterfly with wings fully spread, symmetric top-down, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour of the four wings plus only the essentials: the main wing-vein lines dividing each wing into a few cells, the segmented body, and the two clubbed antennae. Keep the left and right wings perfectly mirror-symmetric. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Smooth, closed, clean lines that trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-LINE-INS-002 · Hercules Beetle

*Dynastes hercules* · IUCN LC · slug `hercules-beetle` · output `hercules-beetle_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a Hercules beetle in top-down view on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the two large curving horns, the seam down the oval elytra, the thorax edge, and the six clean jointed legs. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-LINE-INS-003 · Praying Mantis

*Mantis religiosa* · IUCN LC · slug `praying-mantis` · output `praying-mantis_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a praying mantis in side profile with raised forelegs on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the triangular head and eye, the jointed raptorial forelegs, the wing-fold line along the thorax, and the abdomen segment lines. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no plant, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-LINE-INS-004 · Emperor Dragonfly

*Anax imperator* · IUCN LC · slug `dragonfly` · output `dragonfly_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of an emperor dragonfly in top-down view with four outstretched wings on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: a few main vein lines per wing, the segment lines along the long abdomen, and the large eyes. Keep the wings mirror-symmetric. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Smooth, closed, clean lines that trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-LINE-INS-005 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a stag beetle in top-down view on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the branching antler mandibles, the seam down the elytra, the thorax edge, and the six jointed legs. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

---

## Mammalian

### BQ-LINE-MAM-001 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a gray wolf in a head-and-shoulders three-quarter profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eyes, the nose, the muzzle line, the inner-ear lines, and two or three long strokes suggesting the neck ruff. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-MAM-002 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a male lion in a front-facing three-quarter portrait on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eyes, the broad nose, the muzzle and mouth lines, and the mane suggested by a moderate ring of long clean radiating contour strokes (not dense, not filled). NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no dense mane fill, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-MAM-003 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a red fox in a head-and-shoulders three-quarter profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eyes, the nose, the sharp muzzle line, the large pointed ears with inner-ear lines, and a cheek-ruff line. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-MAM-004 · African Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of an African elephant in three-quarter front view on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the ear edge with one inner fold line, a few trunk crease lines, the tusk lines, and the leg separations. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-MAM-005 · Mountain Gorilla

*Gorilla beringei beringei* · IUCN EN · slug `mountain-gorilla` · output `mountain-gorilla_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a mountain gorilla in a head-and-shoulders view on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the heavy brow line, the eyes, the broad flat nose with its distinctive nostril ridges, the mouth line, and the shoulder line. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Reptilian

### BQ-LINE-REP-001 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a panther chameleon in profile gripping a short branch, tail coiled, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the tall casque line, the turret eye, the clamping feet, the dorsal-crest line as a row of small triangles, and the spiral line of the coiled tail. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-REP-002 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a Komodo dragon in a low four-legged profile stance, forked tongue out, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the mouthline, the forked tongue, the limb separations, a couple of neck and belly fold lines, and the long tail. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-REP-003 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a king cobra reared with its hood flared, rising from a coil, on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the flared hood outline, the eyes, the mouthline, and a few clean cross-band lines along the body and coil to suggest scales. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-REP-004 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a saltwater crocodile in profile on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the long jawline with a few teeth, the raised back ridge drawn as a row of clean bumps, the limb separations, and a few cross lines banding the tail. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no water, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LINE-REP-005 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_line-art-bw_01.{png,svg}`

```text
Create a clean, minimalist BLACK LINE-ART illustration of a green iguana in profile on a short branch on a PURE WHITE background. Use confident, even, medium-weight black lines only — one bold outer contour plus only the essentials: the eye, the large round cheek scale as a clean circle, the hanging dewlap line, the dorsal-spine line as a row of small triangles, the clawed feet, and a few tail-band lines. NO fill, NO solid black areas, NO hatching, NO shading — line work only. Keep lines smooth, closed, and clean so they trace to crisp vector strokes. Center in frame.
Negative prompt: no fill, no solid black shapes, no shading, no hatching, no cross-hatching, no stipple, no gradient, no grayscale, no color, no doubled sketchy lines, no thin wispy lines, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```
