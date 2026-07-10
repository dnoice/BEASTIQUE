<!--
✒ Metadata
    - Title: Geo-Line Prompt Library (BEASTIQUE Edition - v2.0)
    - File Name: geo-line_prompts.md
    - Relative Path: studio/prompts/geo-line/geo-line_prompts.md
    - Artifact Type: data
    - Version: 2.0.0
    - Date: 2026-07-10
    - Update: Friday, July 10, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.0.0 (2026-07-10) [Anthropic - Claude Fable 5] — GEO-MESH re-voice.
      Every prompt rebuilt from the v1 straight-line voice (verdict:
      amateur coloring-book outlines) into the connected-triangulated-
      wireframe voice that passed the five-render A/B test 5/5 on
      2026-07-09. Anatomy anchors preserved as triangulation-density
      guidance; negatives now ban empty regions, zigzag scribbles, and
      sketch strokes. Ids unchanged — re-render with --force.
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial geo-line
      library: 25 prompts, 5 per category, on a FRESH species set (distinct from
      the other style libraries). Authored for the forge --style geo-line path.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "geo-line" house
    style: the animal drawn ENTIRELY from bold straight line segments — no
    curves, no fills, no polygons — an angular, geometric line rendering.
    Trace-ultra-light. Consumed by the forge with `--style geo-line`; ids are
    BQ-GEOL-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - A FRESH species set (no overlap with the other style libraries).
    - Straight segments only — curves approximated by angular chords; no fill.
    - Species chosen to exploit straight lines (tusks, bills, legs, stripes).
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.7.0+.
    - Output: studio/collections/<gallery>-beasts/geo-line/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Geo-Line Prompt Library

Twenty-five geo-line prompts, five per category — straight segments, no curves.

## House Geo-Line Spec (style DNA)

- **Straight segments only.** Every stroke is dead straight; rounded forms are
  approximated by a chain of short straight chords meeting at angular vertices.
  No curves, no arcs, no rounded corners anywhere.
- **Lines, not shapes.** No fill, no solid black areas, no filled polygons or
  facets — it is a line rendering, not a stencil or low-poly.
- **Bold and even.** Consistent medium-bold line weight; trace-ultra-light
  (straight strokes = very few nodes).

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-GEOL-<CLS>-<NUM>` | `BQ-GEOL-MAM-004` |
| Raster out | `<slug>_geo-line-bw_01.png` | `giraffe_geo-line-bw_01.png` |
| Vector out | `<slug>_geo-line-bw_01.svg` | `giraffe_geo-line-bw_01.svg` |

---

## Aquatic

### BQ-GEOL-AQU-001 · Narwhal

*Monodon monoceros* · IUCN LC · slug `narwhal` · output `narwhal_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a narwhal in left-facing profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the long spiral tusk projecting forward, the torpedo body, small flipper and notched fluke, plus the eye and a short mouthline; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AQU-002 · Whale Shark

*Rhincodon typus* · IUCN EN · slug `whale-shark` · output `whale-shark_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a whale shark in left-facing profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the broad flattened head, wide body, tall dorsal fin and sweeping tail as straight-chord contours, the gill slits and fin edges as short straight segments, and suggest the checkerboard spots with a sparse scatter of tiny straight cross-ticks; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AQU-003 · Swordfish

*Xiphias gladius* · IUCN LC · slug `swordfish` · output `swordfish_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a swordfish in left-facing profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the long sword bill, the streamlined body, the tall sail-like first dorsal fin and the forked tail, plus the large eye; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AQU-004 · Bottlenose Dolphin

*Tursiops truncatus* · IUCN LC · slug `bottlenose-dolphin` · output `bottlenose-dolphin_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a bottlenose dolphin mid-leap in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the body, the short beak, the triangular dorsal fin, the flipper and the notched fluke as straight segments, plus the eye and mouthline; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AQU-005 · Seahorse

*Hippocampus hippocampus* · IUCN DD · slug `seahorse` · output `seahorse_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a seahorse in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the segmented trunk and the curled prehensile tail as a polyline spiral of short straight segments, the tubular snout and the coronet on the head as straight strokes, and the dorsal fin as a small straight-edged fan; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Avian

### BQ-GEOL-AVI-001 · Andean Condor

*Vultur gryphus* · IUCN VU · slug `andean-condor` · output `andean-condor_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of an Andean condor soaring with wings fully spread, viewed from below, on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the broad wings with their splayed fingered tips as bold straight segments, the bald head and the neck ruff as angular strokes, the hooked beak and the fanned tail as straight segments; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AVI-002 · Indian Peafowl

*Pavo cristatus* · IUCN LC · slug `indian-peafowl` · output `indian-peafowl_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of an Indian peafowl (peacock) in profile with its train raised, on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the raised train as a bold fan of radiating straight lines, each tipped with a small angular diamond eye-spot, and render the body, the S-neck (as a chain of straight chords) and the head with its crest as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AVI-003 · Atlantic Puffin

*Fratercula arctica* · IUCN VU · slug `atlantic-puffin` · output `atlantic-puffin_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of an Atlantic puffin standing in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the large triangular bill as bold straight-edged segments, the round head and plump body as straight chords, the eye, and the upright stance on short webbed feet as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AVI-004 · Toco Toucan

*Ramphastos toco* · IUCN LC · slug `toco-toucan` · output `toco-toucan_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a toco toucan perched in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the huge bill as a bold straight-edged angular outline, the round body and head as straight chords, the eye, and the foot gripping a short straight branch stub as straight segments; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-AVI-005 · Red-Crowned Crane

*Grus japonensis* · IUCN EN · slug `red-crowned-crane` · output `red-crowned-crane_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a red-crowned crane standing tall in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the very long legs and the long neck, the slender body and the pointed bill as straight segments, with a small straight-edged crown patch and the bustle of tail plumes as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Insecta

### BQ-GEOL-INS-001 · Goliath Birdeater

*Theraphosa blondi* · IUCN NE · slug `goliath-birdeater` · output `goliath-birdeater_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a goliath birdeater tarantula in top-down view on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the eight legs as bold straight segments angling out from the body in sharp knee joints, the two body sections (cephalothorax and abdomen) as straight-chord outlines, and the chelicerae and pedipalps as short straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-INS-002 · Emperor Scorpion

*Pandinus imperator* · IUCN NE · slug `emperor-scorpion` · output `emperor-scorpion_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of an emperor scorpion in top-down view on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the segmented tail curling overhead as a polyline of bold straight segments ending in the stinger, the two large pincer claws as angular straight-edged outlines, and the body segments and eight legs as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-INS-003 · Leafcutter Ant

*Atta cephalotes* · IUCN NE · slug `leafcutter-ant` · output `leafcutter-ant_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a leafcutter ant in profile carrying a leaf, on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the three body segments, the six angular legs and the elbowed antennae as bold straight segments, and the carried leaf held above as a straight-edged angular outline; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-INS-004 · Honeybee

*Apis mellifera* · IUCN DD · slug `honeybee` · output `honeybee_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a honeybee in top-down view on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the three body segments with their banding as straight strokes, the two pairs of wings as straight-edged angular outlines, and the six legs and the antennae as straight segments; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-INS-005 · Atlas Moth

*Attacus atlas* · IUCN NE · slug `atlas-moth` · output `atlas-moth_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of an atlas moth with wings fully spread, symmetric top-down, on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the large angular wings with their distinctive hooked tips as bold straight-segment outlines, a few main vein lines as straight strokes, and the body and antennae as straight segments; keep the left and right wings mirror-symmetric; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Mammalian

### BQ-GEOL-MAM-001 · Snow Leopard

*Panthera uncia* · IUCN VU · slug `snow-leopard` · output `snow-leopard_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a snow leopard prowling in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the long low body, the very thick long tail and the legs as straight chords, the rounded head as angular segments, and suggest the rosette markings with a sparse scatter of small straight angular ticks; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-MAM-002 · Polar Bear

*Ursus maritimus* · IUCN VU · slug `polar-bear` · output `polar-bear_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a polar bear walking in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the bulky body, the long neck and small head, and the heavy columnar legs as straight chords meeting at angular vertices, plus the small eye, the nose and the short tail as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-MAM-003 · Black Rhinoceros

*Diceros bicornis* · IUCN CR · slug `black-rhinoceros` · output `black-rhinoceros_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a black rhinoceros in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the two horns as bold straight segments, the massive body, the head with its prehensile lip, and the columnar legs as straight chords, plus the pointed ears and the tail as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-MAM-004 · Giraffe

*Giraffa camelopardalis* · IUCN VU · slug `giraffe` · output `giraffe_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a giraffe standing on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the very long neck and the long legs, the sloping back and deep chest as straight chords, the small head with ossicones as straight strokes, and suggest the coat patches with a sparse set of straight-edged angular cells; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-MAM-005 · Bengal Tiger

*Panthera tigris tigris* · IUCN EN · slug `bengal-tiger` · output `bengal-tiger_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a Bengal tiger prowling in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the body, head, legs and long tail as straight chords, and render the stripes as bold straight segments crossing the body — the stripes are the signature straight-line feature; keep the face features as short straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Reptilian

### BQ-GEOL-REP-001 · Gharial

*Gavialis gangeticus* · IUCN CR · slug `gharial` · output `gharial_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a gharial in profile on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the extremely long thin snout, the body and the long tapering tail as straight chords, the bulbous snout-tip knob and the splayed clawed legs as straight segments, and a row of straight back-ridge ticks; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-REP-002 · Frilled Lizard

*Chlamydosaurus kingii* · IUCN LC · slug `frilled-lizard` · output `frilled-lizard_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a frilled lizard facing forward with its neck frill fully spread, on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the circular frill as a bold sunburst of straight radiating segments, the open mouth, the body, the four clawed legs and the long tail as straight strokes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-REP-003 · Gila Monster

*Heloderma suspectum* · IUCN NT · slug `gila-monster` · output `gila-monster_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a Gila monster in top-down view on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the stout body, the broad blunt head, the short splayed legs and the thick tail as straight-chord outlines, and suggest the beaded skin pattern with a sparse scatter of small straight angular ticks; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-REP-004 · Poison Dart Frog

*Dendrobates tinctorius* · IUCN LC · slug `poison-dart-frog` · output `poison-dart-frog_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a poison dart frog facing forward in a crouch on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the rounded body and the two bulging eyes as straight chords, the folded legs and the broad toe-pads as straight segments, and suggest the bold blotch pattern with a few straight-edged angular marks; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-GEOL-REP-005 · Green Sea Turtle

*Chelonia mydas* · IUCN EN · slug `green-sea-turtle` · output `green-sea-turtle_geo-line-bw_01.{png,svg}`

```text
Create a precise GEOMETRIC WIREFRAME illustration of a green sea turtle swimming in three-quarter view on a PURE WHITE background — the unfilled skeleton of a low-poly sculpture. Build the ENTIRE body as one connected triangulated mesh of straight black chords: every line is a triangle edge, every vertex shared with its neighbors, no line exists without structural purpose. MEDIUM-dense, deliberate triangulation that follows the body's volume — denser triangles articulating the carapace as a bold straight-edged angular outline divided into scute cells by straight segment lines, and render the head, the two paddle flippers and the tail as straight-chord shapes; larger triangles opening across the broad planes of the body. Uniform medium line weight, crisp angular vertices, the outer contour unbroken. NO fills, NO shading, NO curves, NO random zigzag strokes, NO empty coloring-book regions — the mesh itself is the drawing. Vector-traceable to clean straight strokes. Center in frame.
Negative prompt: no coloring-book outline, no empty white regions inside the body, no random zigzag lines, no scribbles, no sketch strokes, no doubled lines, no curves, no arcs, no rounded corners, no fills, no solid black shapes, no filled facets, no shading, no hatching, no stipple, no gradient, no grayscale, no color, no background, no scene, no text, no border, no extra animals, no blurry edges.
```
