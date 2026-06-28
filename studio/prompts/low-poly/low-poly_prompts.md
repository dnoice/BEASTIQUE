<!--
✒ Metadata
    - Title: Low-Poly Prompt Library (BEASTIQUE Edition - v1.1)
    - File Name: low-poly_prompts.md
    - Relative Path: studio/prompts/low-poly/low-poly_prompts.md
    - Artifact Type: data
    - Version: 1.1.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Recipe upgrade. Folded
      in the trialed "crystalline" look (which proved indistinct as its own
      style): every prompt now anchors on one bold readable silhouette and uses
      MEDIUM-density bold facets, and explicitly forbids the fine wireframe /
      tiny slivers that made the v1.0 renders busy and trace-heavy. Bolder,
      cleaner, lighter to trace. Re-forge with --force to replace v1.0 renders.
    - 1.0.0 (2026-06-26) [Anthropic - Claude Opus 4.8] — Initial low-poly
      library: 25 prompts, 5 per category.

✒ Description:
    Twenty-five copy-paste-ready prompts in the BEASTIQUE "low-poly" house
    style: bold two-tone (black/white) faceted animals anchored on a clean
    silhouette, with medium-density flat facets — gemstone-cut look, no fine
    wireframe. Authored to trace clean and light. Consumed by the forge with
    `--style low-poly`; ids are BQ-LOPO-<CLASS>-<NUM>.

✒ Key Features:
    - 25 standalone prompts, 5 each across all five categories.
    - Silhouette-anchored: a strong readable contour, faceted interior.
    - Medium bold facets (no fine mesh, no tiny slivers) — light to trace.
    - Per-entry record: scientific name, indicative IUCN, slug, output.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.6.0+.
    - Output: studio/collections/<gallery>-beasts/low-poly/<quality>/ ; traced to
      <quality>/traces/ by tools/bq_linocut_trace.py.
    - IUCN statuses indicative — verify against the live Red List before use.
---------
-->

# BEASTIQUE — Low-Poly Prompt Library

Twenty-five low-poly prompts, five per category — silhouette-anchored, bold facets.

## House Low-Poly Spec (style DNA)

- **Pure two-tone.** Black and white only — no color, no grayscale, no gradient
  inside any facet. Each polygon is filled flat with solid black **or** white.
- **Silhouette-anchored.** Start from one clean, instantly-readable silhouette
  (strong bold outer contour), then facet the interior.
- **Medium bold facets.** Richer than a sparse low-poly but NOT a fine mesh —
  no tiny slivers, no thin wireframe lines, no curved facet edges. This keeps it
  striking AND light to trace (flat polygons → clean, low-node vectors).
- **Facets are the value map.** Solid-black facets on the shadow/volume planes;
  solid-white on the lit planes.

## Naming Conventions

| Field | Pattern | Example |
| ----- | ------- | ------- |
| Prompt id | `BQ-LOPO-<CLS>-<NUM>` | `BQ-LOPO-MAM-002` |
| Raster out | `<slug>_low-poly-bw_01.png` | `lion_low-poly-bw_01.png` |
| Vector out | `<slug>_low-poly-bw_01.svg` | `lion_low-poly-bw_01.svg` |

---

## Aquatic

### BQ-LOPO-AQU-001 · Blue Whale

*Balaenoptera musculus* · IUCN EN · slug `blue-whale` · output `blue-whale_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a blue whale in left-facing profile, gliding level, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable whale silhouette with a strong bold outer contour, then build the interior from a MEDIUM-density set of bold, straight-edged angular facets that follow the body's volume — like the whale cut from a single gemstone. Cluster solid-black facets along the dorsal/shadow planes (back, top of head) and reserve solid-white facets for the lit lower flank and belly. Keep the facets bold and readable — richer than a sparse low-poly but NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AQU-002 · Great White Shark

*Carcharodon carcharias* · IUCN VU · slug `great-white-shark` · output `great-white-shark_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a great white shark in a slight upward three-quarter swimming angle, mouth just agape, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable shark silhouette with a strong bold outer contour (heavy torpedo body, conical snout, tall dorsal fin, crescent tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets following the form. Cluster solid-black facets across the dorsal upper body (the grey countershading), reserve solid-white facets across the belly, with a sharp facet break along the lateral line; teeth as crisp white triangles. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AQU-003 · Manta Ray

*Mobula birostris* · IUCN EN · slug `manta-ray` · output `manta-ray_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a giant oceanic manta ray in a front three-quarter top view with wings spread in a shallow arc, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable manta silhouette with a strong bold outer contour (broad diamond wing-disc, twin cephalic head-fins, slender whip tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets fanning out from the central body. Cluster solid-black facets across the dorsal wing surface, reserve solid-white facets at the wingtips, leading edges, and pale shoulder patches. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AQU-004 · Orca

*Orcinus orca* · IUCN DD · slug `orca` · output `orca_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of an orca (killer whale) in left-facing profile, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable orca silhouette with a strong bold outer contour (robust body, very tall straight dorsal fin, paddle flippers, notched fluke), then facet the interior at MEDIUM density. Use the orca's real pattern as the value map: fill the back, head, flippers, dorsal fin and tail with solid-black facets; reserve crisp solid-white facets for the chin-to-belly underside, the oval eye-patch, and the saddle behind the dorsal fin — keep those black/white boundaries confident and straight-edged. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no feathered patch edges, no hatching, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AQU-005 · Great Hammerhead Shark

*Sphyrna mokarran* · IUCN CR · slug `hammerhead-shark` · output `hammerhead-shark_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a great hammerhead shark in a top-down view emphasizing the wide flattened hammer head, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable hammerhead silhouette with a strong bold outer contour (wide mallet head with eyes at the tips, long body, tall sickle dorsal fin, crescent tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the dorsal surface and the rear edges of the hammer, reserve solid-white facets on the underside and the leading edge of the head. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Avian

### BQ-LOPO-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a bald eagle in a stern head-and-shoulders three-quarter profile, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable eagle-head silhouette with a strong bold outer contour (hooked beak, heavy brow, shoulder plumage), then facet the interior at MEDIUM density. Use the white-head-over-dark-body pattern as the value map: reserve solid-white facets across the head and neck, cluster solid-black facets for the body plumage and the deep eye/beak shadow; the hooked beak a crisp facet shape. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AVI-002 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a snowy owl facing forward, wings tucked, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable owl silhouette with a strong bold outer contour (round earless head, plump upright body), then facet the interior at MEDIUM density. Because the owl is white, keep most facets solid white and use solid-black facets only for the round eyes, the beak, the bold dark barring marks across the wings and crown, and one shadow side. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no over-darkened body, no hatching, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AVI-003 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `flamingo` · output `flamingo_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a greater flamingo standing in profile on one leg with the deep S-curved neck, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable flamingo silhouette with a strong bold outer contour (S-neck, down-curved bill, single stilt leg), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets, the S-curve formed from a chain of bold faceted segments. Cluster solid-black facets along the back, the inner bend of the neck, the black-tipped bill and under the body; reserve solid-white facets across the breast and lit neck. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AVI-004 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a scarlet macaw perched in profile with a long pointed tail streaming down, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable macaw silhouette with a strong bold outer contour (strong curved beak, round head, folded wing, very long tapering tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the back, the underside of the tail, the wing shadow and the lower beak; reserve solid-white facets on the breast, the facial patch and the upper beak; render the long tail as a row of bold angular facets. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no perch, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-AVI-005 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a shoebill facing forward, the enormous clog-shaped bill the focal mass, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable shoebill silhouette with a strong bold outer contour (massive hooked bill, broad head, heavy neck), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets across the bill's shadow side and the body plumage; reserve solid-white facets on the lit top of the bill, the forehead and the throat; the bill hook a sharp crisp facet. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Insecta

### BQ-LOPO-INS-001 · Monarch Butterfly

*Danaus plexippus* · IUCN EN · slug `monarch-butterfly` · output `monarch-butterfly_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a monarch butterfly with wings fully spread, symmetric top-down, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable butterfly silhouette with a strong bold outer contour (four wings, slender body, clubbed antennae), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets following the wing-cell structure. Cluster solid-black facets along the wing borders and the main vein lines, reserve solid-white facets for the bold cells between veins and the marginal-dot facets in the border; keep the wings mirror-symmetric. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-LOPO-INS-002 · Hercules Beetle

*Dynastes hercules* · IUCN LC · slug `hercules-beetle` · output `hercules-beetle_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a Hercules beetle in top-down view, the two huge curving horns the focal feature, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable beetle silhouette with a strong bold outer contour (long pincer horns, armored thorax, broad elytra, six legs), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the horns, head and thorax, and the leg joints; reserve solid-white facets across the broad lit elytra with a few bold dark facets for the pattern. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-LOPO-INS-003 · Praying Mantis

*Mantis religiosa* · IUCN LC · slug `praying-mantis` · output `praying-mantis_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a praying mantis in side profile with raised spiked forelegs and the triangular head turned toward the viewer, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable mantis silhouette with a strong bold outer contour (triangular head, raptorial forelegs, long thorax, folded wings, slender abdomen), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the back, the foreleg spines and the head shadow; reserve solid-white facets on the lit thorax and forelegs. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no plant, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

### BQ-LOPO-INS-004 · Emperor Dragonfly

*Anax imperator* · IUCN LC · slug `dragonfly` · output `dragonfly_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of an emperor dragonfly in top-down view with all four wings outstretched, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable dragonfly silhouette with a strong bold outer contour (four long wings, large eyes, long slender abdomen), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets — the wings as a few bold faceted panes (NOT a fine vein lattice). Cluster solid-black facets along the body, eyes and wing leading edges; reserve solid-white facets for the wing panes. Keep the wings mirror-symmetric. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no vein lattice, no hatching, no thin lines, no outline-only, no background, no scene, no text, no border, no extra insects, no asymmetry, no blurry edges.
```

### BQ-LOPO-INS-005 · Stag Beetle

*Lucanus cervus* · IUCN NT · slug `stag-beetle` · output `stag-beetle_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a stag beetle in top-down view, the oversized antler-like mandibles the focal feature, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable stag-beetle silhouette with a strong bold outer contour (branching mandibles, broad head, armored thorax, long elytra, six legs), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets across the mandibles, head and thorax; reserve solid-white facets across the lit elytra with a clean facet seam down the wing-case join. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra insects, no blurry edges.
```

---

## Mammalian

### BQ-LOPO-MAM-001 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a gray wolf in a head-and-shoulders three-quarter profile, ears erect, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable wolf-head silhouette with a strong bold outer contour (long muzzle, erect triangular ears, neck ruff), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the muzzle shadow, the eye sockets, the ear interiors and the underside of the jaw and neck; reserve solid-white facets across the forehead, the snout bridge and the cheek; the ruff as bold radiating facets. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-MAM-002 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a male lion in a head-on three-quarter portrait with a full mane, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable maned-lion silhouette with a strong bold outer contour, then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Build the mane from bold radiating angular facets alternating solid black and solid white; cluster solid-black facets in the mane depth and the muzzle and eye shadows; reserve solid-white facets across the face and the lit outer mane. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-MAM-003 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a red fox in a head-and-shoulders three-quarter profile, large pointed ears, sharp narrow muzzle, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable fox-head silhouette with a strong bold outer contour, then build the interior from a MEDIUM-density set of bold, straight-edged angular facets (the pointed face an ideal subject for bold faceting). Cluster solid-black facets on the ear interiors and tips, the eyes and nose, and the underside of the neck; reserve solid-white facets across the cheeks, the muzzle and the brow. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-MAM-004 · African Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of an African elephant in a three-quarter front view, huge fanned ears, long curving trunk, tusks, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable elephant silhouette with a strong bold outer contour, then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets in the ear shadows, the underside creases of the trunk, between the legs and beneath the body; reserve solid-white facets across the lit forehead, the ear edges and the back; the tusks crisp white facet shapes; the broad ears as large bold angular facet fields. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-MAM-005 · Mountain Gorilla

*Gorilla beringei beringei* · IUCN EN · slug `mountain-gorilla` · output `mountain-gorilla_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a mountain gorilla in a head-and-shoulders view, heavy brow, broad nostrils, massive shoulders, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable gorilla silhouette with a strong bold outer contour, then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets across the dark face, the deep brow shadow and the body fur mass; reserve solid-white facets sparingly as bold highlight planes on the brow ridge, the muzzle and the tops of the shoulders. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

---

## Reptilian

### BQ-LOPO-REP-001 · Panther Chameleon

*Furcifer pardalis* · IUCN LC · slug `panther-chameleon` · output `panther-chameleon_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a panther chameleon in profile gripping a bare angular branch stub, curled prehensile tail, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable chameleon silhouette with a strong bold outer contour (tall casque, turret eye, zigzag dorsal crest, coiled tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the dorsal crest, the casque shadow and the tail's underside; reserve solid-white facets along the lit flank; render the coiled tail as a bold spiral of facets. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-REP-002 · Komodo Dragon

*Varanus komodoensis* · IUCN EN · slug `komodo-dragon` · output `komodo-dragon_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a Komodo dragon in a low four-legged stance in profile, forked tongue flicking, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable Komodo silhouette with a strong bold outer contour (broad head, bulky body, bowed clawed legs, long tapering tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the spine, the limb and jaw shadows, and the underside of the body and tail; reserve solid-white facets across the lit back and upper flank. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no ground, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-REP-003 · King Cobra

*Ophiophagus hannah* · IUCN VU · slug `king-cobra` · output `king-cobra_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a king cobra reared upright with hood flared, rising from a coiled base, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable reared-cobra silhouette with a strong bold outer contour (flared fan hood, rising S-curve, coiled base), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the back of the hood, the shadow side of the body and the underside of the coils; reserve solid-white facets on the throat and the front of the flared hood; the hood a bold angular fan. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-REP-004 · Saltwater Crocodile

*Crocodylus porosus* · IUCN LC · slug `saltwater-crocodile` · output `saltwater-crocodile_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a saltwater crocodile in profile, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable crocodile silhouette with a strong bold outer contour (long armored snout, ridged back, powerful tail, splayed legs), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the dorsal armor ridges, the jaw line and the leg and tail shadows; reserve solid-white facets on the lit flank and the lower jaw; teeth as crisp white triangles; the armored back as bold angular ridge facets. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no water, no background, no scene, no text, no border, no extra animals, no blurry edges.
```

### BQ-LOPO-REP-005 · Green Iguana

*Iguana iguana* · IUCN LC · slug `green-iguana` · output `green-iguana_low-poly-bw_01.{png,svg}`

```text
Create a bold low-poly geometric illustration of a green iguana in profile on an angular perch, prominent dewlap, spiny dorsal crest, long banded tail, rendered in PURE two-tone black and white only — every facet filled FLAT with solid black OR solid white, no grays, no gradients, no shading inside any facet. Anchor it on ONE clean, instantly-readable iguana silhouette with a strong bold outer contour (blocky head, large round cheek scale, dewlap, dorsal spines, long tail), then build the interior from a MEDIUM-density set of bold, straight-edged angular facets. Cluster solid-black facets along the dorsal crest, the dewlap shadow and the tail bands; reserve solid-white facets along the lit body; spines and tail bands as bold alternating facets. Keep facets bold and readable — NOT a fine mesh: no tiny slivers, no thin wireframe lines, no curved facet edges. Vector-traceable to clean flat polygons. Center on plain pure-white, no scene.
Negative prompt: no gradients, no shading, no grays, no color, no curved facet edges, no tiny slivers or splinter facets, no fine wireframe, no hatching, no texture, no thin lines, no outline-only, no leaves, no background, no scene, no text, no border, no extra animals, no blurry edges.
```
