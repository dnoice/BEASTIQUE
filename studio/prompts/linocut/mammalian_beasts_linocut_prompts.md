<!--
========================================================================
✒ METADATA
  Title ................ BEASTIQUE — Mammalian Beasts · Linocut Prompt Library
  File Name ............ mammalian_beasts_linocut_prompts.md
  Relative Path ........ BEASTIQUE/studio/prompts/linocut/mammalian_beasts_linocut_prompts.md
  Artifact Type ........ Image-Generation Prompt Library (Markdown)
  Version .............. 1.0.0
  Date ................. 2026-06-22
  Update ............... 2026-06-22
  Author ............... Dennis 'dendogg' Smaltz
  A.I. Acknowledgement . Anthropic - Claude Opus 4.8
  Signature ............ ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ DESCRIPTION
  Fifty copy-paste-ready image-generation prompts for the 50 most widely
  recognized terrestrial mammals, each authored in the BEASTIQUE "linocut
  emblem" house style: refined, high-contrast, pure black-on-white,
  vector-traceable woodcut illustration suitable for downstream SVG / vinyl
  conversion. Each prompt is subject-specific — pose, anatomy, and the
  black-density map are tailored to the individual animal, never find-and-
  replaced from a single skeleton.

✒ CHANGELOG
  - v1.0.0 (2026-06-22) [Anthropic - Claude Opus 4.8] — Initial library.
    Refined the seed bison prompt into the house linocut skeleton, locked
    naming conventions and prompt-ID scheme, authored all 50 mammalian
    entries.

✒ KEY FEATURES
  - 50 standalone prompts, each a single fenced block (prompt + negative).
  - Stable prompt IDs (BQ-LINO-MAM-001 … -050) for cross-referencing.
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
  - Distinct from the prior "brutal economic replacement" material-
    treatment set (mammalian_beasts_image_prompts.md). This is the
    black-and-white LINOCUT family; do not merge the two.
  - Marine mammals are intentionally excluded — they live in the
    aquatic-beasts collection per the locked BEASTIQUE taxonomy.
  - "Recognized" is interpreted as globally iconic, instantly-named-on-
    sight species with strong, distinct silhouettes that read well as a
    carved emblem.
========================================================================
-->

# BEASTIQUE — Mammalian Beasts · Linocut Prompt Library

A library of 50 subject-specific linocut emblem prompts for the most
recognized terrestrial mammals. The seed bison prompt (yours) is preserved
as entry **BQ-LINO-MAM-001**, lightly refined into the house skeleton that
governs all 50.

## House Linocut Spec

Every prompt in this library is built on the same style DNA, distilled from
the seed bison prompt. This section documents that shared standard once; it
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
  silhouette around body and extremities. Interior texture is tapered
  strokes, wedge cuts, and curved hatch that *follow the anatomy*.
- **Weight hierarchy** — Thick outer contour, medium interior shadow
  shapes, smaller-but-clean hatch strokes. Legible at both large and small
  sizes.
- **Density map** — Each animal carries an intentional dark/dense region
  and a lighter/open region, chosen from the animal's real form (mane,
  hump, chest, mask, etc.). This is the per-subject variable and the heart
  of each prompt.
- **Ground & field** — A few simple horizontal ground-shadow strokes
  beneath the feet only. Background stays completely blank white. No scene,
  no border, no text, no extra animals.

## Naming Conventions

These conventions keep the linocut family cleanly separated from the
existing render sets and traceable end-to-end.

### Prompt IDs

Format: `BQ-LINO-{CLASS}-{NNN}` — e.g., `BQ-LINO-MAM-001`.

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
| Prompt library    | `{class}_beasts_linocut_prompts.md`                  | `mammalian_beasts_linocut_prompts.md`    |
| Raster render     | `{species-slug}_linocut-bw_{NN}.png`                 | `american-bison_linocut-bw_01.png`       |
| Vector trace      | `{species-slug}_linocut-bw_{NN}.svg`                 | `american-bison_linocut-bw_01.svg`       |
| Library folder    | `BEASTIQUE/studio/prompts/linocut/`                    | —                                        |
| Render folder     | `BEASTIQUE/studio/collections/{class}-beasts/linocut/`      | `studio/collections/mammalian-beasts/linocut/`  |

Slugs are lower-kebab and match the locked collection slugs (`american-bison`,
not `american_bison`). The `_linocut-bw_` variant tag is what separates these
emblems from the `{slug}-{n}.png` base/custom render family.

## The Library

Each entry below is a complete, standalone prompt. Lift the whole ```text
block — the negative prompt is the final line inside it.

### BQ-LINO-MAM-001 · American Bison

*Bison bison* · IUCN NT · slug `american-bison` · output `american-bison_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body American bison standing in left-facing profile. The image should feel like an upgraded antique natural-history engraving, western emblem, or premium woodcut logo, with crisp structure, strong anatomy, and clean traceable black shapes. Center the bison in a wide landscape composition, occupying most of the frame with clean white space around it. It has a massive raised shoulder hump, large lowered head, shaggy forehead and beard, curved horns, alert eye, short muzzle, strong chest, thick front quarters, smoother rounded hindquarters, thin curved tail with a small dark tuft, slim legs, and solid hooves. The pose is stable and natural, all four legs visible and grounded. Use pure black ink on a pure white background only — no grayscale, no color, no gradients, no painterly shading. Build the animal from clean closed black forms and intentional carved hatch marks that remain suitable for vector path tracing; preserve rich detail but organize it into readable clusters rather than noisy micro-texture. Keep one confident continuous outer contour around body, hump, head, horns, legs, hooves, and tail. Concentrate density in the front mass — forehead, face, beard, chest, shoulder hump, belly, and front legs run dark with tapered wedge cuts and curved hatch following the fur; let the rear half stay lighter and open, with sparse long curved strokes wrapping the round flank and hindquarter. Maintain a clear weight hierarchy: thick outer contour, medium interior shadow shapes, smaller clean hatch. Keep it legible large and small. Add a few simple horizontal ground-shadow strokes beneath the hooves only; background stays blank white. Final image should look crisp, scalable, and emblematic while keeping the expressive hand-carved bison texture.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush shading, no blurry edges, no antialias haze, no background scene, no grass, no mountains, no sky, no border, no text, no extra animals, no cartoon proportions, no messy stippling, no random speckles, no ultra-thin micro-lines, no open or fragmented outlines.
```

### BQ-LINO-MAM-002 · African Bush Elephant

*Loxodonta africana* · IUCN EN · slug `african-elephant` · output `african-elephant_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body African bush elephant in left-facing profile, styled as an upgraded antique natural-history engraving and premium woodcut emblem. Center it in a wide landscape frame with clean white space around it. Render the defining anatomy clearly: enormous fanned ears with a ragged lower edge, long curved tusks, a heavy trunk hanging in a relaxed S-curve with the finger-tip just off the ground, a domed forehead, small eye, columnar pillar legs, broad flat feet with toenail marks, sloping back, and a thin rope tail with a dark brush tuft. Pose is monumental and grounded, all four legs visible. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. Build from closed black forms and carved hatch that trace cleanly to vector paths; keep detail in readable clusters. Hold one bold continuous contour around ears, trunk, tusks, body, and legs. The signature texture is the wrinkled hide: render it as deliberate long curved hatch and cross-cut creases that wrap the trunk in rings, fan across the ear in radiating folds, and bag loosely over the joints. Concentrate darkness in the ear's inner shadow, the trunk underside, the brow, and behind the front leg; keep the back, rump, and tusks bright and open so the ivory reads pure white. Tusks stay clean closed shapes with only a thin base shadow. Weight hierarchy: thick outer contour, medium crease shadows, fine wrinkle hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft skin shading, no airbrush, no blurry edges, no background scene, no savanna, no trees, no sky, no border, no text, no extra animals, no cartoon proportions, no tiny speckles, no scratchy micro-lines, no fragmented outline, no gray tusks.
```

### BQ-LINO-MAM-003 · Lion

*Panthera leo* · IUCN VU · slug `lion` · output `lion_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body adult male lion in left-facing profile, styled as a heraldic woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a full thick mane framing the face and chest, broad muzzle with strong jaw, alert forward eye, rounded ears set in the mane, deep chest, lean muscular flanks, long body, slim powerful legs, large paws, and a long tail ending in a dark terminal tuft. Pose is regal and grounded, all four legs visible, head carried level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. Build from closed black forms and carved hatch that trace cleanly to vector; keep detail in clusters. One bold continuous contour around mane, body, legs, and tail. The mane is the density anchor: render it as bold radiating wedge cuts and tapered locks flowing outward from the face, the deepest black of the piece, with a clean carved edge against the white muzzle so the face stays open and legible. Let the body coat stay light — short directional flick-hatch along the spine, shoulder, and haunch only, leaving the flank mostly white. Mark the muscle with a few curved interior shadow shapes at the shoulder and thigh. Tail tuft is a solid black shape. Weight hierarchy: thick contour, bold mane shapes, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no grass, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no messy stippling, no random speckles, no ultra-thin lines, no fragmented outline, no female lion.
```

### BQ-LINO-MAM-004 · Bengal Tiger

*Panthera tigris tigris* · IUCN EN · slug `bengal-tiger` · output `bengal-tiger_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Bengal tiger in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: broad rounded head with white-cheek ruff, short muzzle, alert eye, rounded ears, heavy forequarters, long supple body, deep chest, powerful slim legs, large paws, and a long thick tail. The signature feature is the stripe pattern: render the tiger's vertical body stripes as bold tapered black brush-bars — the very thing linocut does best — running down the flank, shoulder, haunch, and ringing the tail, each stripe a clean closed shape that traces to vector. Pose is prowling but grounded, all four legs visible. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. The stripes ARE the density: arrange them as a rhythmic dense-to-open pattern, tightest over the shoulders and face, more spaced over the rump, leaving generous white coat between bars so the pattern stays crisp and unmuddied. Keep the face open and readable with only fine cheek and brow hatch; the eye and muzzle stay bright. One bold continuous contour around the whole body and tail. Weight hierarchy: thick contour, bold stripe bars, minimal connective hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no orange, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no jungle, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no smudged stripes, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-005 · Reticulated Giraffe

*Giraffa reticulata* · IUCN EN · slug `reticulated-giraffe` · output `reticulated-giraffe_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body reticulated giraffe in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Use a tall composition within the landscape frame to honor the height, the animal centered with clean white space. Render the defining anatomy: very long neck, small head with two ossicone horns and tufted tips, large eye, short upright mane along the neck crest, steeply sloping back, long slender legs, knobby knees, and a long tufted tail. The signature feature is the reticulated coat: render the giraffe's polygonal patches as bold closed black tiles separated by clean white channel-lines — the network is the entire texture and the heart of the piece, tracing perfectly to vector. Pose is calm and grounded, all four legs visible, head high. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. Density is carried by the patch network: tiles run large and dark over the body and upper legs, shrinking and fading to open white on the lower legs, face, and belly so the silhouette stays light overall and the pattern reads crisply. Keep the white separation channels clean and even. The short mane is a row of small wedge cuts; ossicone tufts and tail tuft are solid black shapes. One bold continuous contour throughout. Weight hierarchy: thick contour, bold patch tiles, clean channel whites — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no background scene, no acacia trees, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no muddy patches, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-006 · Western Lowland Gorilla

*Gorilla gorilla gorilla* · IUCN CR · slug `western-gorilla` · output `western-gorilla_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body adult male silverback gorilla in a seated three-quarter front pose, styled as a powerful woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; favor a near-square crop inside the landscape field. Render the defining anatomy: massive sloping sagittal-crest head, heavy brow ridge, broad flat nose, deep-set calm eyes, enormous shoulders and chest, long thick arms resting on the knuckles, broad hands and feet, and a barrel torso. The signature density region is the dark coat against the pale silver saddle: render the body fur as bold sweeping wedge cuts and tapered locks, deepest black over the arms, chest, and head, then carve the silverback saddle across the lower back as an open, brighter zone of fine sparse hatch so the "silver" reads as near-white. Keep the face open and legible — minimal modeling, strong dark brow shadow, bright muzzle. Hands and knuckles get short directional hatch to show the grip. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch only, vector-traceable. One bold continuous contour around the whole seated mass. Weight hierarchy: thick contour, bold coat shapes, fine saddle hatch — legible large and small. A few horizontal ground-shadow strokes beneath the knuckles and seat; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no human face, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-007 · Common Chimpanzee

*Pan troglodytes* · IUCN EN · slug `chimpanzee` · output `chimpanzee_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body adult chimpanzee in a relaxed seated three-quarter pose, knuckles forward, styled as a woodcut emblem and upgraded natural-history engraving. Center it with clean white space. Render the defining anatomy: rounded head with large flared ears, prominent brow, flat bare face, expressive deep-set eyes, protruding muzzle, long arms reaching to the knuckles, slender hands with long fingers, lean torso, and bent legs with grasping feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the shaggy coat against the bare face and hands: render the body hair as long tapered downward wedge cuts, densest over the back, shoulders, and forearms, leaving the bare face, ears, and palms open and bright with only fine contour modeling. Keep the face highly legible — clean carved brow shadow, defined lips, alert eyes — since the expression carries the emblem. Hands and knuckles get short directional hatch to read the grip. One bold continuous contour around the whole seated form. Weight hierarchy: thick contour, bold hair strokes, fine facial lines — legible large and small. A few horizontal ground-shadow strokes beneath the knuckles and seat; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no human likeness, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-008 · Grizzly Bear

*Ursus arctos horribilis* · IUCN LC · slug `grizzly-bear` · output `grizzly-bear_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body grizzly bear walking in left-facing profile, styled as a rugged woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a pronounced muscular shoulder hump, broad dished face with small rounded ears, short muzzle, small eye, heavy forelimbs, long curved claws, thick legs, broad plantigrade paws, and a short stub tail. Pose is powerful and grounded, all four legs visible, head carried low and forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dense shaggy pelt over the shoulder hump and forequarters: render it as bold layered wedge cuts and curved hatch flowing along the body, deepest at the hump, neck ruff, chest, and belly. Let the hindquarters and lower back stay lighter and more open with sparser long curved strokes. Claws are clean closed black hooks against bright paws. Keep the face open and legible with a strong brow and muzzle shadow only. One bold continuous contour around the whole walking form. Weight hierarchy: thick contour, bold hump shapes, fine flank hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no forest, no rocks, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-009 · Gray Wolf

*Canis lupus* · IUCN LC · slug `gray-wolf` · output `gray-wolf_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body gray wolf standing alert in left-facing profile, styled as a woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a lean angular head with a long muzzle, erect triangular ears, intent forward eye, thick neck ruff, deep narrow chest, level back, long slender legs, large feet, and a long bushy low-carried tail. Pose is poised and grounded, all four legs visible, head level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the neck-and-shoulder ruff and the bushy tail: render the ruff as bold radiating wedge cuts and the tail as a dense tapered black plume, the deepest blacks of the piece. Run directional flick-hatch along the spine and over the haunch following the lay of the fur; keep the legs, chest, and lower body lighter and more open so the lean build reads. Keep the face crisp — defined muzzle, bright eye, carved ear shadows. One bold continuous contour around the whole standing form. Weight hierarchy: thick contour, bold ruff and tail, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no forest, no snow, no moon, no sky, no border, no text, no extra animals, no cartoon proportions, no husky markings, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-010 · Red Fox

*Vulpes vulpes* · IUCN LC · slug `red-fox` · output `red-fox_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red fox trotting in left-facing profile, styled as a crisp woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a sharp triangular face with a slender pointed muzzle, large erect pointed ears, keen narrow eye, slim delicate legs with dark lower stockings, a lithe low body, and an oversized luxuriant brush tail with a distinct pale tip. Pose is light and grounded, all four legs visible mid-trot, head forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the enormous brush tail and the dark lower legs: render the tail as a dense tapered black plume of layered wedge cuts, and the leg stockings and ear backs as clean solid black shapes, but leave the tail TIP a clean white shape — its signature. Run fine directional flick-hatch along the back and haunch; keep the chest, cheek, and belly open and bright. Keep the face sharp and legible with a defined muzzle and bright eye. One bold continuous contour around the whole trotting form. Weight hierarchy: thick contour, bold tail and stockings, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no snow, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline, no white tail base.
```

### BQ-LINO-MAM-011 · Cheetah

*Acinonyx jubatus* · IUCN VU · slug `cheetah` · output `cheetah_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body cheetah standing in left-facing profile, styled as a sleek woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a small rounded head with the signature black tear-mark line running from inner eye to mouth, small rounded ears, a deep narrow chest, a very lean tucked waist, a long slender flexible spine, tall thin legs built for speed, and a long tail with a ringed dark tip. The signature feature is the spotted coat: render the solid round body spots as clean closed black dots of varied size, scattered evenly across the coat and tracing perfectly to vector. Pose is taut and grounded, all four legs visible, head high and alert. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. The spots ARE the texture: keep them crisp, separated, and well-spaced over a bright white coat — densest along the back and flank, fading on the belly and legs — never merging into noise. Render the tear-marks as two bold clean black strokes; tail tip as black rings. Keep the body open and white so the lean speed-build reads. One bold continuous contour throughout. Weight hierarchy: thick contour, clean round spots, minimal connective hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no rosettes, no merged spots, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-012 · Leopard

*Panthera pardus* · IUCN VU · slug `leopard` · output `leopard_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body leopard in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a broad rounded head with a short muzzle, small rounded ears, alert eye, an exceptionally muscular deep chest and shoulders, a powerful compact body, heavy stocky legs, large paws, and a long low-slung tail. The signature feature is the rosette coat: render the leopard's rosettes as clusters of clean broken black ring-shapes — open rosettes on the flank and back, solid spots on the head, legs, and tail — every mark a closed traceable shape. Pose is heavy and grounded, all four legs visible, head level and watchful. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. The rosettes carry the texture: keep them crisp and separated over a bright coat, densest along the spine and flank, simplifying to solid spots on the limbs, never muddying into noise. Keep the face open and legible. Mark heavy shoulder and thigh muscle with a few curved interior shadow shapes beneath the pattern. One bold continuous contour throughout. Weight hierarchy: thick contour, clean rosettes, minimal muscle shadow — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no tree, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no solid spots only, no merged rosettes, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-013 · Jaguar

*Panthera onca* · IUCN NT · slug `jaguar` · output `jaguar_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body jaguar in a low prowling left-facing profile, styled as a bold woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a notably large blocky head with the most powerful jaw of the big cats, short rounded ears, intense forward eye, a stocky barrel chest, robust short muscular legs, very large paws, and a thick tail. The signature feature is the jaguar's rosette coat: render the rosettes as clean black ring-clusters that — unlike the leopard — contain one or more small solid central dots, every mark a closed traceable shape. Pose is heavy, low, and grounded, all four legs visible, shoulders bunched, head dropped forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading. The rosettes-with-centers carry the texture: keep them crisp and separated over a bright coat, densest over the broad back and shoulders, becoming solid spots on the big head, legs, and tail. Keep the face open and legible to read the heavy jaw and stare. Mark the bunched shoulder mass with a couple of curved shadow shapes. One bold continuous contour throughout. Weight hierarchy: thick contour, clean centered rosettes, minimal muscle shadow — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no jungle, no water, no sky, no border, no text, no extra animals, no cartoon proportions, no empty rosettes, no merged spots, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-014 · Plains Zebra

*Equus quagga* · IUCN NT · slug `plains-zebra` · output `plains-zebra_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body plains zebra standing in left-facing profile, styled as a striking woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a horse-like build with a sturdy neck, a short stiff erect mane following the stripe pattern, large rounded ears, a blunt muzzle, a barrel body, slim legs ending in single hooves, and a tufted tail. The signature — and the entire texture — is the stripe pattern: render the zebra's stripes as bold clean black bars over white, broad and vertical on the neck and body, bending horizontal across the rump, narrowing down the legs, and meeting in the dorsal line. Pose is calm and grounded, all four legs visible, head level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; the natural black-on-white of the animal IS the linocut. Keep every stripe a clean closed traceable shape with even white channels between, the pattern flowing correctly with the body's curvature — never smeared, never noisy. The mane is a row of striped wedge tufts; muzzle reads dark; tail tuft is solid black. No additional hatch is needed beyond the stripes themselves. One bold continuous contour throughout. Weight hierarchy: thick contour, bold stripe bars, clean white channels — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no background scene, no savanna, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no smeared stripes, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-015 · Common Hippopotamus

*Hippopotamus amphibius* · IUCN VU · slug `hippopotamus` · output `hippopotamus_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body common hippopotamus standing in left-facing profile, styled as a heavy woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: an enormous barrel body, a massive broad head with a huge blunt muzzle, the eyes-ears-nostrils set high on the same plane, small rounded ears, a wide gape hint with lower tusks, thick short pillar legs, four-toed splayed feet, and a small flicking tail. Pose is grounded and monumental, all four legs visible, head heavy and level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hippo is mostly smooth, so density is carried by sculpted shadow rather than fur: render deep curved shadow shapes under the belly, behind the front leg, beneath the jaw, and in the deep skin folds at the neck and leg joints, using bold curved hatch that follows the bulk. Keep the broad back, flank, and head largely open and bright so the immense smooth mass reads. Suggest the thick hide with a few short scattered pore-flicks only, sparingly. Tusks and the eye-ear-nostril cluster stay crisp closed shapes. One bold continuous contour around the whole heavy form. Weight hierarchy: thick contour, bold fold shadows, minimal surface flicks — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft skin shading, no airbrush, no blurry edges, no background scene, no water, no river, no sky, no border, no text, no extra animals, no cartoon proportions, no busy texture, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-016 · White Rhinoceros

*Ceratotherium simum* · IUCN NT · slug `white-rhinoceros` · output `white-rhinoceros_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body white rhinoceros standing in left-facing profile, styled as an armored woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: two horns with a long front horn and shorter rear horn, a long broad head carried low, a square wide lip, small eyes, large tubular ears, a pronounced muscular neck hump, a massive deep body, thick pillar legs, three-toed feet, and a tasseled tail. Pose is grounded and monumental, all four legs visible, head lowered in its characteristic graze-carry. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Density is carried by the heavy hide and its plated folds: render bold curved shadow shapes and deep crease hatch where the thick skin bunches at the shoulder, neck hump, leg joints, and around the eye and ear, with directional hatch wrapping the barrel. Keep the back, upper flank, and the horns largely open and bright — the horns are clean closed shapes with only a thin base shadow. The square lip and ear interiors read as crisp dark accents. One bold continuous contour around the whole heavy form. Weight hierarchy: thick contour, bold fold shadows, fine crease hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft skin shading, no airbrush, no blurry edges, no background scene, no savanna, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no single horn, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-017 · Red Kangaroo

*Osphranter rufus* · IUCN LC · slug `red-kangaroo` · output `red-kangaroo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red kangaroo standing upright in left-facing profile, balanced on its hind legs and tail, styled as a woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small deer-like head with a blunt muzzle, very large upright ears, alert eye, a relatively small chest and short forelimbs with clawed hands, a powerful low-slung haunch, enormously developed muscular hind legs, long narrow feet, and a thick heavy tapering tail braced to the ground as a tripod. Pose is upright, alert, and grounded on the hind feet and tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the massive hind leg and haunch musculature: render bold curved shadow shapes and directional flick-hatch wrapping the thigh, shin, and tail base, the darkest region of the piece. Keep the chest, belly, face, and ears lighter and open. Mark the long foot and the tail's heft with clean contour and a few directional strokes. Ears get fine interior hatch; eye stays bright. One bold continuous contour around the whole upright form including the tail to the ground. Weight hierarchy: thick contour, bold haunch shadows, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hind feet and tail; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no background scene, no outback, no grass, no sky, no border, no text, no extra animals, no joey in pouch, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-018 · Koala

*Phascolarctos cinereus* · IUCN VU · slug `koala` · output `koala_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body koala clinging to a short vertical branch stub in a near-front three-quarter pose, styled as a charming but crisp woodcut emblem and upgraded natural-history engraving. Center it with clean white space; keep the branch stub minimal, just enough to read the grip. Render the defining anatomy: a large round head, very large round fluffy ears, a prominent broad leathery spoon-shaped nose, small eyes, a stout rounded body, strong limbs with clawed gripping paws (two opposed thumbs on the hands), and a vestigial tail. Pose is hunched and clinging, paws wrapped around the stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the big dark nose and the fluffy ear fringe: render the nose as a clean solid black spoon shape (the focal accent), and the ears as bold radiating wedge-cut fur fringe. The body fur is rendered as short curved directional hatch in soft readable clusters — denser at the back, chest fluff, and ear edges, open and bright over the face and belly. Claws are clean black hooks gripping the stub. Keep the face open and legible. One bold continuous contour around the whole clinging form and the branch stub. Weight hierarchy: thick contour, bold nose and ear fringe, fine body hatch — legible large and small. A few horizontal ground-shadow strokes are not needed; instead keep the branch stub grounded with minimal marks. Background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no full tree, no leaves, no sky, no border, no text, no extra animals, no cartoon proportions, no teddy-bear face, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-019 · Giant Panda

*Ailuropoda melanoleuca* · IUCN VU · slug `giant-panda` · output `giant-panda_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body giant panda seated in a three-quarter pose, styled as a bold woodcut emblem and upgraded natural-history engraving. Center it with clean white space. Render the defining anatomy: a large round head, rounded black ears, the signature black eye-patches, a short muzzle, a heavy rotund body, stocky limbs, and broad paws with the pseudo-thumb grip. The panda is the rare subject whose natural coloration IS pure black-and-white, so lean into it: render the black mask, ears, shoulders, forelimbs, and hind legs as bold clean solid black shapes, and keep the white face, back, and rump as open bright fields. Pose is seated and relaxed, perhaps a paw resting forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; the bold black saddle pattern carries the entire composition and traces perfectly to vector. Within the black regions, add only minimal directional fur-grain hatch at the edges to suggest pile without breaking the solid shapes. Keep the white regions almost untouched — only a thin contour and a whisper of belly-fold hatch — so the contrast stays maximal and emblematic. Ears, eye-patches, and nose read as crisp closed accents; eyes stay bright within the patches. One bold continuous contour around the whole seated form. Weight hierarchy: thick contour, bold solid black saddle, fine edge grain — legible large and small. A few horizontal ground-shadow strokes beneath the seat; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no bamboo, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no muddy gray, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-020 · Polar Bear

*Ursus maritimus* · IUCN VU · slug `polar-bear` · output `polar-bear_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body polar bear walking in left-facing profile, styled as a clean woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a long narrow head with a sloped Roman profile, small rounded ears set far back, a small dark nose, a long neck, an elongated powerful body, heavy limbs, and very large feet for the ice. Pose is purposeful and grounded, all four legs visible, head low and forward. The challenge and the signature: a white bear on white must be carved entirely by contour and selective shadow, not fill. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Keep the coat overwhelmingly OPEN and bright; build the form purely with a bold confident contour and restrained directional shadow hatch tucked under the belly, behind the front leg, beneath the jaw and neck, and along the underside of the limbs. Add a light flick-hatch only at the shaggy leg and shoulder edges to read the pelt. The nose, eye, and paw-pad edges are the only true black accents — small, crisp, deliberate. The overall impression is a luminous near-white emblem defined by a masterful outline. One bold continuous contour throughout. Weight hierarchy: thick contour, restrained underside shadow, minimal edge hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no ice, no snow drift, no water, no sky, no border, no text, no extra animals, no cartoon proportions, no filled black body, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-021 · Moose

*Alces alces* · IUCN LC · slug `moose` · output `moose_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body bull moose standing in left-facing profile, styled as a rugged woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space, allowing room above for the antlers. Render the defining anatomy: enormous broad palmate antlers with finger-like tines, a long heavy drooping muzzle with a bulbous overhanging nose, large mule-like ears, the distinctive throat dewlap (bell), a pronounced shoulder hump, a deep narrow chest, very long stilt-like legs, and a short tail. Pose is tall, gangly, and grounded, all four legs visible, head carried level. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The palmate antlers are the emblem's crown: render them as bold clean broad black palms with crisp tine edges, the strongest shapes up top. The density anchor in the body is the dark shoulder hump, neck, and dewlap: render these with bold layered wedge cuts, fading to lighter open hatch over the flank, belly, and the long legs. Keep the lower legs and muzzle bright with simple contour. One bold continuous contour around the whole form including each antler palm. Weight hierarchy: thick contour, bold antler palms and shoulder mass, fine flank hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no forest, no water, no sky, no border, no text, no extra animals, no cartoon proportions, no deer antlers, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-022 · Rocky Mountain Elk

*Cervus canadensis* · IUCN LC · slug `elk` · output `elk_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body bull elk standing in left-facing profile, head raised, styled as a stately woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space, leaving room above and behind for the sweeping antlers. Render the defining anatomy: tall branching antlers sweeping back over the body with long curved tines, a long elegant neck with a shaggy dark neck-mane ruff, large ears, a refined head with a long muzzle, a lean strong body with a pale rump patch, slim athletic legs, and a short tail. Pose is proud and grounded, all four legs visible, head and antlers held high. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The antlers are the crown: render the beams and tines as confident clean tapering black lines with crisp points. The density anchor is the shaggy dark neck-mane and underbelly: render the mane as bold downward wedge cuts and tapered locks, the darkest body region, fading to fine directional hatch along the back and flank. Keep the rump patch a clean open white shape — its signature. Legs and face stay bright with simple contour. One bold continuous contour around the whole form and the antler rack. Weight hierarchy: thick contour, bold antlers and neck-mane, fine flank hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no forest, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no moose antlers, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-023 · White-tailed Deer

*Odocoileus virginianus* · IUCN LC · slug `white-tailed-deer` · output `white-tailed-deer_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body white-tailed deer buck standing alert in left-facing profile, styled as a graceful woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space, room above for the antlers. Render the defining anatomy: an elegant slender build, a refined head with large alert ears and a dark moist nose, a forward-curving antler rack with tines rising from two main beams, a slim graceful neck, a smooth lean body, delicate thin legs with small pointed hooves, and the signature broad tail raised to flash its white underside. Pose is alert and grounded, all four legs visible, head up, tail lifted. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The deer's coat is sleek, so keep it largely OPEN and bright: build the form with a confident contour and restrained directional flick-hatch along the back, shoulder, and haunch only. The density accents are deliberate and few — a dark nose, dark eye, ear-rim shadows, and a soft shadow under the chest and belly. The raised tail's underside is a clean bright white shape with a dark border — its identity. Antlers are clean tapering black lines with crisp tines. One bold continuous contour throughout. Weight hierarchy: thick contour, crisp antlers, restrained body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no forest, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no spots, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-024 · Caribou (Reindeer)

*Rangifer tarandus* · IUCN VU · slug `caribou` · output `caribou_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body caribou (reindeer) standing in left-facing profile, styled as a northern woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space, room above for the antlers. Render the defining anatomy: large asymmetrical antlers with a distinctive forward-sweeping brow shovel and tall curved main beams (the antlers are large on both sexes), a blunt down-tilted muzzle, medium furred ears, a thick neck with a pronounced pale throat-mane dewlap, a stocky cold-adapted body, sturdy legs, and broad splayed crescent hooves built for snow and tundra. Pose is sturdy and grounded, all four legs visible, head carried forward and low. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The antlers are the crown: render their sweeping beams, brow shovel, and tines as bold clean tapering black shapes. The density anchor is the dense winter coat with its shaggy neck-mane: render the throat-mane and lower neck as bold downward wedge cuts (often appearing pale, so carve it with open hatch giving a bright frosted read), and run directional hatch over the back and flank, denser at the shoulder, lighter at the belly. Broad hooves get clean crescent contours. One bold continuous contour throughout, including the antler rack. Weight hierarchy: thick contour, bold antlers, layered coat hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no snow scene, no sled, no sky, no border, no text, no extra animals, no cartoon proportions, no red nose, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-025 · Dromedary Camel

*Camelus dromedarius* · Domesticated (wild ancestor extinct) · slug `dromedary-camel` · output `dromedary-camel_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body dromedary camel standing in left-facing profile, styled as a desert woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a single large rounded hump, a long arching neck, a small head with a long muzzle, heavy-lidded eyes, small ears, the characteristic gently humped lips, a deep narrow chest, long slender legs with leathery knee and chest callosity pads, broad two-toed splayed feet, and a thin tufted tail. Pose is calm and grounded, all four legs visible, head high on the curving neck. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the hump and the shaggy fringes: render the single hump as a bold rounded mass with curved directional hatch, and carve the longer trailing hair on the throat, the back of the neck, the hump crest, and the upper forelegs as tapered wedge-cut tufts — the darkest accents. Keep the long legs, lower body, and face open and bright with simple contour. Mark the knee and chest pads as small clean shapes. One bold continuous contour around the whole tall form including the hump and neck arch. Weight hierarchy: thick contour, bold hump and fringe tufts, fine flank hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no desert dunes, no sky, no border, no text, no extra animals, no two humps, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-026 · Wild Horse (Mustang)

*Equus ferus caballus* · Feral / Domesticated · slug `wild-horse` · output `wild-horse_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body wild mustang horse in a spirited standing pose, left-facing profile, head turned slightly with mane flowing, styled as a western woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a refined head with a straight profile, large expressive eye, alert pricked ears, an arched muscular neck, a flowing forelock and mane, a deep chest, a strong sloping shoulder, a powerful rounded hindquarter, clean athletic legs with defined tendons, single hooves, and a long full flowing tail. Pose is animated and grounded, all four legs visible, weight balanced, energy in the carriage. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchors are the flowing mane and tail: render them as bold sweeping tapered black locks with motion, the strongest dark shapes of the piece. Across the body, use confident curved muscle-hatch that follows the anatomy — defining the neck crest, shoulder, barrel, and the round haunch — denser in the muscle hollows, open over the highlights so the form reads sculptural. Keep the face and lower legs crisp and bright. One bold continuous contour around the whole spirited form including the mane and tail flow. Weight hierarchy: thick contour, bold mane and tail, anatomical muscle hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no prairie, no fence, no sky, no border, no text, no extra animals, no saddle, no tack, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-027 · Cape Buffalo

*Syncerus caffer* · IUCN NT · slug `cape-buffalo` · output `cape-buffalo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Cape buffalo standing in left-facing profile, head slightly raised, styled as a formidable woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: the massive fused horn "boss" sweeping across the brow then curving down and up into heavy hooked tips, large drooping fringed ears beneath the horns, a broad blunt muzzle, small wary eyes, a heavy muscular neck and shoulder, a deep barrel body, stocky strong legs, cloven hooves, and a tufted tail. Pose is solid, defiant, and grounded, all four legs visible, head level with a hard stare. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The horn boss is the emblem's signature: render it as a bold heavy rugged black mass with carved ridge texture, then clean sweeping horn curves. The density anchor is the dark hide over the head, neck, and shoulder: render bold curved shadow shapes and directional hatch here, plus the dark fringed ear interiors, fading to lighter open hatch across the flank and belly. Keep the lower legs and muzzle reasonably bright. One bold continuous contour around the whole heavy form and the horn sweep. Weight hierarchy: thick contour, bold horn boss and forequarter, fine flank hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no savanna, no grass, no oxpecker birds, no sky, no border, no text, no extra animals, no cartoon proportions, no water buffalo horns, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-028 · Wild Boar

*Sus scrofa* · IUCN LC · slug `wild-boar` · output `wild-boar_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body wild boar standing in left-facing profile, styled as a bristly woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a wedge-shaped head tapering to a strong flat snout disc, upward-curving lower tusks, small upright ears, a heavy forequarter and shoulder hump, a stiff erect dorsal crest of bristles (the mane), a compact muscular body that narrows to lighter hindquarters, short sturdy legs, small cloven hooves, and a thin tufted tail. Pose is low, powerful, and grounded, all four legs visible, head carried forward and down. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the coarse bristly coat: render it as bold spiky directional wedge cuts and stiff tapered strokes lying back along the body, with the erect dorsal crest standing up sharply along the spine — the boldest dark accent. Concentrate density over the head, shoulder hump, and crest, fading to coarser sparse bristle-hatch over the rear. Tusks are clean closed white shapes; snout disc and eye are crisp dark accents. One bold continuous contour around the whole form with a slightly ragged bristled edge along the back. Weight hierarchy: thick contour, bold crest and forequarter bristle, coarse rear hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no forest, no mud, no sky, no border, no text, no extra animals, no piglets, no cartoon proportions, no domestic pig, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-029 · Bornean Orangutan

*Pongo pygmaeus* · IUCN CR · slug `bornean-orangutan` · output `bornean-orangutan_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body adult male Bornean orangutan in a seated three-quarter pose, one long arm raised gripping overhead, styled as a woodcut emblem and upgraded natural-history engraving. Center it with clean white space. Render the defining anatomy: a large head with broad fleshy cheek flanges (the male's signature face discs), a flat face with close-set calm eyes and a small nose, a wispy beard, an enormous arm span with very long arms, hooked grasping hands and feet, a heavy rounded torso, and a thick coat of long stringy hair. Pose is contemplative, seated, with the long arms emphasized. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the long shaggy stringy coat: render it as long flowing tapered wedge cuts and trailing locks that hang from the arms, shoulders, and back — the longest, boldest strokes in the library — densest over the back, arms, and flanks. The broad cheek flanges read as bold curved framing shapes around the bare face; keep the face itself open and legible with a defined brow and calm eyes. Hands and long fingers get directional grip-hatch. One bold continuous contour around the whole seated form including the raised arm. Weight hierarchy: thick contour, bold cheek flanges and long coat locks, fine facial lines — legible large and small. A few horizontal ground-shadow strokes beneath the seat; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no human face, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-030 · Three-toed Sloth

*Bradypus variegatus* · IUCN LC · slug `three-toed-sloth` · output `three-toed-sloth_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body brown-throated three-toed sloth hanging upside-down from a short horizontal branch stub, styled as a distinctive woodcut emblem and upgraded natural-history engraving. Center it with clean white space; keep the branch stub minimal, just enough for the hang. Render the defining anatomy: a small round head with a flat face, the gentle fixed "smile" mouth-line, small eyes with subtle dark eye-stripes, a tiny nose, a rounded compact body, very long limbs, and the signature long curved three-clawed hooks gripping the branch. Pose is slow and serene, the body suspended beneath the stub, all four hooked limbs reading clearly. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the long shaggy algae-streaked fur: render it as long downward-trailing tapered wedge cuts that hang with gravity from the suspended body — the coat appears to flow toward the head since the animal is inverted — with a few bold dark streak-clusters suggesting the coarse pelt. Keep the round face open and legible with the soft eye-stripes and the calm mouth-line as crisp accents. The long curved claws are clean bold black hooks — a key identifier. One bold continuous contour around the whole hanging form and the branch stub. Weight hierarchy: thick contour, bold claws and coat streaks, fine facial lines — legible large and small. No ground shadow needed; ground the branch stub with minimal marks. Background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no full tree, no leaves, no sky, no border, no text, no extra animals, no cartoon proportions, no two-toed hands, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-031 · Common Raccoon

*Procyon lotor* · IUCN LC · slug `raccoon` · output `raccoon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body common raccoon standing in a low alert left-facing profile, head turned toward the viewer, styled as a crisp woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a pointed face with the signature bold black eye-mask across the eyes, small rounded ears, a sharp dark nose, a hunched rounded back, a stocky body, dexterous five-fingered hand-like paws, short legs, and a thick ringed tail. Pose is curious and grounded, all four legs visible, back arched, tail trailing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The two signatures carry the emblem: render the facial mask as a bold clean solid black band across the eyes (the focal accent, with bright eyes within it), and the ringed tail as a rhythmic series of clean alternating black rings — every ring a closed traceable shape. The body fur is rendered as short directional curved hatch in readable clusters, denser over the back and haunches, lighter at the chest and face surround so the white facial framing reads. Dexterous paws get fine finger-hatch. One bold continuous contour around the whole arched form and the ringed tail. Weight hierarchy: thick contour, bold mask and tail rings, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no trash can, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no merged tail rings, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-032 · North American Beaver

*Castor canadensis* · IUCN LC · slug `beaver` · output `beaver_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body North American beaver in a side three-quarter pose, sitting up slightly with the flat tail visible, styled as a sturdy woodcut emblem and upgraded natural-history engraving. Center it with clean white space. Render the defining anatomy: a blunt rounded head with small rounded ears, a broad muzzle, the prominent large orange-toned incisors (rendered as clean bold white teeth), small eyes, small clawed front paws, a stout heavy rounded body, webbed hind feet, and the unmistakable broad flat scaly paddle tail. Pose is grounded and busy, perhaps gnawing or paws held forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the flat scaly tail: render it as a bold paddle shape filled with a clean cross-hatched scale grid — a crisp geometric texture distinct from the fur, tracing perfectly to vector. The body fur is rendered as dense short curved directional wedge cuts giving a thick plush read, densest over the back and haunch, lighter at the chest and face. The big incisors stay clean closed white shapes; nose and eye are crisp dark accents. Webbed hind feet read with clean contour. One bold continuous contour around the whole form and the paddle tail. Weight hierarchy: thick contour, scale-grid tail and bold fur, fine facial lines — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no water, no dam, no logs, no sky, no border, no text, no extra animals, no cartoon proportions, no furry tail, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-033 · North American River Otter

*Lontra canadensis* · IUCN LC · slug `river-otter` · output `river-otter_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body North American river otter in a lively left-facing profile, head lifted, styled as a sleek woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a small flat-topped rounded head with a broad whiskered muzzle, small rounded ears, bright eyes, prominent whiskers, a long sinuous streamlined tubular body, short powerful legs with webbed feet, and a long thick muscular tapering tail. Pose is playful and grounded, the body in a gentle S-curve, all four legs visible, tail trailing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The otter's coat is sleek and dense, so render it as smooth directional flow-hatch that follows the streamlined body in long curving strokes, suggesting wet-sleek fur — denser along the back, spine, and tail, lighter at the pale throat and belly. The whiskers are a few clean bold radiating strokes — a key accent — and the nose and bright eye are crisp dark accents. Webbed feet read with clean contour and minimal toe-hatch. Keep the throat patch open and bright. One bold continuous contour around the whole sinuous form and tapering tail. Weight hierarchy: thick contour, flowing sleek-fur hatch, crisp whiskers — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no water, no riverbank, no sky, no border, no text, no extra animals, no cartoon proportions, no sea otter, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-034 · European Badger

*Meles meles* · IUCN LC · slug `european-badger` · output `european-badger_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body European badger in left-facing profile, low to the ground, styled as a bold woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a low wedge-shaped body, a small pointed white head bearing the unmistakable bold black facial stripes running from the nose back over each eye to the ears, small rounded ears, a long mobile snout, a stocky muscular body, short powerful digging legs, and long front claws. Pose is grounded and purposeful, all four legs visible, head low and snout forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the striped face: render the two bold black facial stripes as clean solid shapes against the bright white head — the unmistakable focal accent — with bright eyes set within the stripes. The body coat is rendered with directional flick-hatch suggesting the coarse grizzled pelt, kept in readable clusters — moderately dense over the back, lighter at the flank — while the legs and underside read as darker clean shapes (the badger's dark belly and legs). The long digging claws are clean bold black hooks. One bold continuous contour around the whole low form. Weight hierarchy: thick contour, bold face stripes and dark legs, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no burrow, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no honey badger, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-035 · Striped Skunk

*Mephitis mephitis* · IUCN LC · slug `striped-skunk` · output `striped-skunk_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body striped skunk in left-facing profile, the bushy tail raised and arched over the back, styled as a clean woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a small triangular head with a thin white blaze running from the forehead down the muzzle, small rounded ears, a pointed nose, a stocky low body, short legs with long front digging claws, and a very large fluffy plume tail. The skunk's natural pattern IS bold black-and-white, so lean into it: render the body as a solid black mass split by the signature broad white back-stripes that fork from the nape and run down each side of the back and into the tail. Pose is grounded with the dramatic tail lifted high. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; the black/white pattern carries the entire emblem and traces perfectly to vector. Keep the black regions bold and solid with only minimal edge fur-grain hatch; keep the white stripes and the thin facial blaze as clean open shapes — the contrast is the point. The plume tail is rendered as bold tapered black-and-white locks fanning upward. Nose, eyes, and claws are crisp accents. One bold continuous contour around the whole form and the raised tail. Weight hierarchy: thick contour, bold solid black-and-white pattern, fine edge grain — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no foliage, no spray effect, no sky, no border, no text, no extra animals, no cartoon proportions, no muddy gray, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-036 · European Hedgehog

*Erinaceus europaeus* · IUCN NT · slug `hedgehog` · output `hedgehog_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body European hedgehog in a low left-facing three-quarter pose, styled as a textural woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small pointed face with a long twitching snout, a dark button nose, small bright eyes, small rounded ears mostly hidden, a domed back entirely covered in spines, short legs with small clawed feet just visible beneath the skirt, and a soft furred face and underside. Pose is grounded and snuffling, snout forward and low. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature — and the entire dorsal texture — is the spine coat: render the spines as a dense, ordered field of bold individual tapered black quill-strokes radiating outward over the domed back, each a clean directional wedge, layered in readable rows that catch a banded light (alternate quills carved to leave white gaps so the mass reads as spiky rather than solid). Keep the soft face, throat, and belly OPEN and bright with only fine short fur-hatch, contrasting the bristling dome. The snout, nose, and eye are crisp dark accents. Small feet read with clean contour. One bold continuous (spiky-edged) contour around the whole form. Weight hierarchy: thick contour, bold ordered quill field, fine face fur — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no garden, no leaves, no sky, no border, no text, no extra animals, no cartoon proportions, no porcupine quills, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-037 · Large Flying Fox

*Pteropus vampyrus* · IUCN NT · slug `flying-fox` · output `flying-fox_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body large flying fox (fruit bat) hanging upside-down from a short branch stub with one wing partly unfurled, styled as a dramatic woodcut emblem and upgraded natural-history engraving. Center it with clean white space; keep the branch stub minimal. Render the defining anatomy: a fox-like head with a long muzzle, large dark eyes, and tall pointed ears, a furred body, and the enormous membranous wings with their clearly visible elongated finger-bones radiating across the thin membrane, hooked thumb claws, and clawed feet gripping the branch above. Pose is inverted and grand, the body wrapped in or partly opening the wings. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the wing architecture: render the membrane as clean open white panels divided by bold confident finger-bone lines fanning across each wing — the bones are the strongest graphic element — with crisp membrane edges. The body and head fur is rendered as dense directional wedge cuts giving a thick ruff, the dark mass that anchors the inverted form, with the longer mantle hair as bold tapered locks. The face stays legible with bright eyes and a defined muzzle. Hooked claws are clean black accents. One bold continuous contour around the whole hanging spread form. Weight hierarchy: thick contour, bold finger-bones and body ruff, fine membrane edges — legible large and small. No ground shadow; ground the branch stub with minimal marks. Background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no cave, no night sky, no moon, no border, no text, no extra animals, no cartoon proportions, no demonic styling, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-038 · European Rabbit

*Oryctolagus cuniculus* · IUCN EN · slug `european-rabbit` · output `european-rabbit_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body European rabbit sitting alert in a left-facing three-quarter pose, styled as a clean woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a compact rounded body, a short rounded head, large upright oval ears, large bright eyes, a small twitching nose with whiskers, short forelegs tucked, powerful folded hind legs, large hind feet, and a small round fluffy tail. Pose is upright and watchful, ears raised, sitting on the haunches. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The rabbit's coat is soft and even, so render it with short curved directional fur-hatch in gentle readable clusters that follow the round body contours — slightly denser along the back, haunch, and ear edges, opening to bright white over the chest, face, and the cottontail. The tall ears get fine interior hatch with a clean bright inner channel and a defined dark rim. The eye is large and bright with a crisp dark outline; nose and whiskers are clean accents. Keep the whole emblem light and soft-edged but crisp, never noisy. One bold continuous contour around the whole sitting form. Weight hierarchy: thick contour, gentle directional fur-hatch, crisp ears and eye — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no meadow, no grass, no carrot, no sky, no border, no text, no extra animals, no cartoon proportions, no Easter styling, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-039 · Eastern Gray Squirrel

*Sciurus carolinensis* · IUCN LC · slug `gray-squirrel` · output `gray-squirrel_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body eastern gray squirrel sitting upright in left-facing profile, holding a nut in its forepaws, the great tail curled up behind its back, styled as a lively woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small rounded head with a blunt muzzle, large dark eyes, small rounded ears, prominent whiskers, small dexterous forepaws cupping a nut, a compact crouched body, strong hind legs, and the enormous bushy plume tail arched up over the back. Pose is upright on the haunches, nibbling, tail flourishing. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the magnificent tail: render it as a bold flowing plume of long tapered wedge cuts and layered fur-strokes, often carved to leave a bright outer fringe so the tail reads feathery and luminous — the dominant graphic shape. The body fur is short curved directional hatch in readable clusters, denser over the back and haunch, lighter at the pale chest and belly. The cupped paws and the nut are crisp small shapes; bright eye and whiskers are clean accents. One bold continuous contour around the whole sitting form and the arched tail. Weight hierarchy: thick contour, bold feathered tail, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the haunches; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no tree branch, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-040 · Black-tailed Jackrabbit

*Lepus californicus* · IUCN LC · slug `jackrabbit` · output `jackrabbit_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body black-tailed jackrabbit standing alert in left-facing profile, styled as a lean desert woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: an extremely long, large, upright pair of ears with dark tips, a lean elongated body far rangier than a rabbit, large prominent eyes set high, very long powerful hind legs and feet built for sprinting, slender forelegs, and a short tail with a black dorsal stripe. Pose is taut and grounded, ears erect and tall, body poised as if to bolt. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the enormous ears: render them as bold tall clean shapes with fine interior vein-hatch, a defined dark rim, and solid black ear tips — the focal accents that identify the animal. The coat is sleek, so keep the body largely OPEN and bright with restrained directional flick-hatch along the back, haunch, and the powerful hind leg only, emphasizing the lean run-build. The black tail-stripe and dark ear tips are crisp accents; the high-set eye is bright and clean. One bold continuous contour around the whole alert form, ears included. Weight hierarchy: thick contour, bold tall ears, restrained body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no desert scene, no cactus, no sky, no border, no text, no extra animals, no cartoon proportions, no short ears, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-041 · Nine-banded Armadillo

*Dasypus novemcinctus* · IUCN LC · slug `armadillo` · output `armadillo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body nine-banded armadillo in left-facing profile, snout low to the ground, styled as an armored woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a domed bony carapace covering the back, the signature series of flexible banded plates around the mid-body, a long pointed snouted head, large upright pointed ears, small eyes, short stocky digging legs with strong claws, and a long tapering scaly tail ringed with bony plates. Pose is grounded and snuffling, all four legs visible, snout down. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The entire texture is the bony armor, perfect for linocut: render the front and rear carapace shields as fields of small clean tessellated polygonal scute cells, and render the mid-body bands as bold clean transverse plate-rings separated by dark flex-grooves — every cell and band a closed traceable shape, organized in crisp ordered rows, never noisy. The tail is a series of clean ringed plates. The pointed snout, ears, and eye are crisp accents; the short legs read with clean contour and bold claws. One bold continuous contour around the whole armored form. Weight hierarchy: thick contour, bold banded plates and scute grid, fine groove lines — legible large and small. A few horizontal ground-shadow strokes beneath the body; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no rolled-up ball, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no three-banded species, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-042 · Giant Anteater

*Myrmecophaga tridactyla* · IUCN VU · slug `giant-anteater` · output `giant-anteater_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body giant anteater walking in left-facing profile, styled as an unmistakable woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: an extraordinarily long tubular tapering snout, a small eye and small rounded ear set far back, a long low body, the bold diagonal black-bordered shoulder stripe running from the chest up over the shoulder, sturdy forelegs with enormous curved digging claws (walked on the knuckles), and the magnificent enormous bushy banner tail nearly as large as the body. Pose is grounded and deliberate, all four legs visible, the long snout carried low and forward. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Two signatures carry the emblem: render the bold diagonal shoulder wedge as a clean solid black band with a crisp pale border, and render the giant banner tail as a spectacular fan of long coarse tapered black hair-strokes radiating outward — the dominant shape. The long snout and head read as a clean dark tapering form; the body coat is bold coarse directional hatch, denser at the forequarter, with the legs reading dark and the great front claws as bold clean hooks. One bold continuous contour around the whole long form and the banner tail. Weight hierarchy: thick contour, bold shoulder wedge and banner tail, coarse body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no grassland, no termite mound, no sky, no border, no text, no extra animals, no cartoon proportions, no short snout, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-043 · Meerkat

*Suricata suricatta* · IUCN LC · slug `meerkat` · output `meerkat_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body meerkat standing upright on its hind legs in a sentinel pose, near-front three-quarter view, styled as an alert woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slender upright body balanced on the hind legs with the tail braced as a prop, a small pointed face with the signature dark eye-patches, small dark crescent ears set low on the sides, a pointed nose, a lean torso with a sparsely furred belly, small clawed forepaws held to the chest, and a long thin tapering tail with a dark tip. Pose is the classic upright lookout, head high and scanning. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature is the face: render the dark eye-patches as bold clean shapes with bright alert eyes, and the small dark ears and nose as crisp accents. The coat carries faint transverse banding across the back — render this as a series of soft broken horizontal hatch-bands over the flanks (a subtle identifier), kept light and readable, while the chest and belly stay open and bright. The slim tail tapers to a clean dark tip. The braced hind feet and thin propping tail read with clean contour. One bold continuous contour around the whole upright form. Weight hierarchy: thick contour, bold eye-patches, soft back-banding hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hind feet and tail tip; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no desert mound, no burrow, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-044 · Ring-tailed Lemur

*Lemur catta* · IUCN EN · slug `ring-tailed-lemur` · output `ring-tailed-lemur_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body ring-tailed lemur seated in a left-facing three-quarter pose with its long tail raised and curling upward, styled as a distinctive woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small fox-like face with a pointed black muzzle, the signature dark eye-patches and bright forward eyes, large rounded ears, a slender body, long limbs with grasping hands and feet, and the unmistakable very long tail boldly ringed in alternating black and white bands. Pose is seated and upright, hands resting, the spectacular tail arching up and over. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The two signatures carry the emblem: render the ringed tail as a rhythmic series of clean alternating solid black and open white bands — the dominant graphic element, every band a closed traceable shape — and render the facial mask as bold clean dark eye-patches and black muzzle framing the bright staring eyes. The body fur is rendered as short curved directional hatch in soft readable clusters, denser along the back, lighter at the pale chest and belly. Ears and hands read with clean contour. One bold continuous contour around the whole seated form and the raised ringed tail. Weight hierarchy: thick contour, bold ringed tail and face mask, fine body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the seat; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no merged tail rings, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-045 · Bighorn Sheep

*Ovis canadensis* · IUCN LC · slug `bighorn-sheep` · output `bighorn-sheep_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body bighorn sheep ram standing on a rocky stance in left-facing profile, head proud, styled as a rugged mountain woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: the massive signature curled horns spiraling back, down, and forward in a full curl beside the face, a strong blocky head, a blunt muzzle, alert eye, short ears, a muscular thick-necked body, sturdy powerful legs built for cliffs, cloven hooves, a pale rump patch, and a short tail. Pose is sure-footed and grounded, all four legs visible, head carried high to display the horns. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The horns are the emblem's crown: render each massive curl as a bold clean spiral shape carved with crisp transverse growth-ridge lines that follow the curve — the dominant graphic feature. The density anchor is the muscular neck and shoulder coat: render bold curved directional hatch over the neck, chest, and shoulder, fading to lighter open hatch over the flank and the lower legs. Keep the pale rump patch a clean open shape. The face stays legible. One bold continuous contour around the whole form and both horn curls. Weight hierarchy: thick contour, bold ridged horns, layered neck hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no mountains, no cliffs, no sky, no border, no text, no extra animals, no cartoon proportions, no straight horns, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-046 · Mountain Goat

*Oreamnos americanus* · IUCN LC · slug `mountain-goat` · output `mountain-goat_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body mountain goat standing in left-facing profile on a rocky stance, styled as a clean alpine woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a thick shaggy white coat with a pronounced shoulder hump and a hanging "pantaloon" leg skirt, a long bearded chin, a narrow head, two short slender sharply pointed black horns curving slightly back, dark eyes, narrow ears, sturdy legs, and cloven hooves with the signature splayed grip. Pose is sure-footed and grounded, all four legs visible, head carried level. The animal is bright white, so build it like the polar bear — by contour and selective shadow, not fill. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Keep the coat overwhelmingly OPEN and bright; carve the form with a bold confident contour and the long shaggy pelt rendered as flowing tapered wedge-cut locks that hang from the chest beard, shoulder hump, belly, and the pantaloon legs — these hanging locks are the texture, giving a frosted, layered read while leaving the body white. Restrained shadow hatch tucks under the belly and behind the front leg. The two short pointed horns, the eye, the nose, and the hooves are the only true black accents — small and crisp. One bold continuous (shaggy-edged) contour throughout. Weight hierarchy: thick contour, hanging locks, restrained shadow — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no mountains, no cliffs, no snow, no sky, no border, no text, no extra animals, no cartoon proportions, no long horns, no filled black body, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-047 · Pronghorn

*Antilocapra americana* · IUCN LC · slug `pronghorn` · output `pronghorn_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body pronghorn standing alert in left-facing profile, styled as a clean prairie woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a lean deer-like build with a slender neck, the signature short black horns each bearing a forward-pointing prong, very large round dark eyes, tall ears, a distinct two-toned pattern with the signature white throat-bands across the neck, a white rump and belly, slim ultra-fast legs, and small hooves. Pose is taut and grounded, all four legs visible, head high and watchful. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The pronghorn's identity is its bold pattern, so build it graphically: render the pronged black horns as crisp clean shapes, and lay in the signature markings as bold clean black-and-white shapes — the dark upper neck, the two clean white throat-bands, the dark cheek patch, and the bright white rump and belly — every patch a closed traceable shape with crisp borders. Keep most of the coat OPEN and bright with only restrained directional flick-hatch along the back and shoulder to read the lean form. The big eye is bright and clean; nose is a crisp accent. One bold continuous contour throughout. Weight hierarchy: thick contour, bold pronged horns and pattern blocks, restrained body hatch — legible large and small. A few horizontal ground-shadow strokes beneath the hooves; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no prairie scene, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no antelope spiral horns, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-048 · Wolverine

*Gulo gulo* · IUCN LC · slug `wolverine` · output `wolverine_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body wolverine in a low aggressive left-facing profile, styled as a fierce woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a stocky muscular bear-like build low to the ground, a broad blunt head with small rounded ears, small fierce eyes, powerful jaws, a humped strong back, short heavily-muscled legs, very large feet with long curved claws, and a bushy thick tail. The signature is the coat pattern: a dark body crossed by the pale "gulo" stripe — a band of lighter fur sweeping from each shoulder along the flank to the base of the tail, plus a paler facial mask. Pose is low, coiled, and grounded, all four legs visible, head dropped and forward with a hard look. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density anchor is the dark shaggy body: render bold layered wedge cuts and coarse directional hatch over the back, legs, and bushy tail, the deepest blacks of the piece, then carve the signature pale flank-stripe and forehead mask as cleaner, more open zones of sparse hatch so they read distinctly lighter against the dark coat. The big claws are bold clean black hooks; the eyes and muzzle are crisp accents. One bold continuous contour around the whole low powerful form. Weight hierarchy: thick contour, dark shaggy mass with carved pale stripe, fine accents — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no snow, no forest, no sky, no border, no text, no extra animals, no cartoon proportions, no comic-book mutant, no claws on hands, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-049 · Snow Leopard

*Panthera uncia* · IUCN VU · slug `snow-leopard` · output `snow-leopard_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body snow leopard standing on a rocky stance in left-facing profile, the long tail curling low, styled as a premium mountain woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: a stocky cold-adapted build, a rounded head with a short muzzle and small rounded ears, large pale eyes, a deep chest, dense plush fur, relatively short powerful legs, large snow-paws, and the signature extraordinarily long, thick, plush tail nearly the length of the body. The coat carries large open rosettes and dark spots. Pose is poised and grounded, all four legs visible, the great tail trailing and curling. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signatures are the open rosettes and the giant tail: render the rosettes as clean broken black ring-clusters and the head/leg markings as solid spots — every mark a closed traceable shape — kept crisp and well-spaced over a bright plush coat, densest along the spine and flank, simplifying on the legs. Render the magnificent tail as a bold thick plume of layered fur-strokes ringed with dark spot-bands, often carved to leave a frosted outer fringe — the dominant graphic shape. Keep the face open and legible with the large pale eyes bright. One bold continuous contour throughout, the long tail included. Weight hierarchy: thick contour, clean rosettes and ringed plume tail, fine plush hatch — legible large and small. A few horizontal ground-shadow strokes beneath the paws; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft fur, no airbrush, no blurry edges, no mountains, no snow, no sky, no border, no text, no extra animals, no cartoon proportions, no solid-only spots, no thin tail, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-MAM-050 · Aardvark

*Orycteropus afer* · IUCN LC · slug `aardvark` · output `aardvark_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body aardvark in left-facing profile, snout low to the ground, styled as a peculiar but crisp woodcut emblem and upgraded natural-history engraving. Center it in a wide landscape frame with clean white space. Render the defining anatomy: an elongated pig-like body with an arched back, a long tubular snout ending in a flat pig-like nose disc, very large upright donkey-like ears, small eyes, a sparsely-haired thick wrinkled hide, stout muscular legs with powerful spade-like digging claws (longer on the hind feet), and a thick muscular tapering kangaroo-like tail. Pose is grounded and snuffling, all four legs visible, the long snout carried low. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The aardvark is nearly hairless, so density is carried by sculpted shadow and wrinkle rather than fur: render bold curved shadow shapes and deep crease hatch where the thick hide bunches at the neck, shoulder, joints, and along the arched back and tail, with directional hatch wrapping the barrel. Keep the upper back and flank fairly open and bright so the heavy form reads. The two large ears are the focal feature — render them as bold clean shapes with fine interior vein-hatch and a defined rim. The snout-disc and eye are crisp accents; the powerful digging claws are bold clean hooks. One bold continuous contour around the whole arched form and the thick tail. Weight hierarchy: thick contour, bold ears and fold shadows, fine wrinkle hatch — legible large and small. A few horizontal ground-shadow strokes beneath the feet; background blank white.
Negative prompt: no grayscale, no color, no photographic realism, no soft shading, no airbrush, no blurry edges, no burrow, no termite mound, no sky, no border, no text, no extra animals, no cartoon proportions, no anteater confusion, no random speckles, no ultra-thin lines, no fragmented outline.
```

## Roster Index

| ID  | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | American Bison | *Bison bison* | `american-bison` | NT |
| 002 | African Bush Elephant | *Loxodonta africana* | `african-elephant` | EN |
| 003 | Lion | *Panthera leo* | `lion` | VU |
| 004 | Bengal Tiger | *Panthera tigris tigris* | `bengal-tiger` | EN |
| 005 | Reticulated Giraffe | *Giraffa reticulata* | `reticulated-giraffe` | EN |
| 006 | Western Lowland Gorilla | *Gorilla gorilla gorilla* | `western-gorilla` | CR |
| 007 | Common Chimpanzee | *Pan troglodytes* | `chimpanzee` | EN |
| 008 | Grizzly Bear | *Ursus arctos horribilis* | `grizzly-bear` | LC |
| 009 | Gray Wolf | *Canis lupus* | `gray-wolf` | LC |
| 010 | Red Fox | *Vulpes vulpes* | `red-fox` | LC |
| 011 | Cheetah | *Acinonyx jubatus* | `cheetah` | VU |
| 012 | Leopard | *Panthera pardus* | `leopard` | VU |
| 013 | Jaguar | *Panthera onca* | `jaguar` | NT |
| 014 | Plains Zebra | *Equus quagga* | `plains-zebra` | NT |
| 015 | Common Hippopotamus | *Hippopotamus amphibius* | `hippopotamus` | VU |
| 016 | White Rhinoceros | *Ceratotherium simum* | `white-rhinoceros` | NT |
| 017 | Red Kangaroo | *Osphranter rufus* | `red-kangaroo` | LC |
| 018 | Koala | *Phascolarctos cinereus* | `koala` | VU |
| 019 | Giant Panda | *Ailuropoda melanoleuca* | `giant-panda` | VU |
| 020 | Polar Bear | *Ursus maritimus* | `polar-bear` | VU |
| 021 | Moose | *Alces alces* | `moose` | LC |
| 022 | Rocky Mountain Elk | *Cervus canadensis* | `elk` | LC |
| 023 | White-tailed Deer | *Odocoileus virginianus* | `white-tailed-deer` | LC |
| 024 | Caribou (Reindeer) | *Rangifer tarandus* | `caribou` | VU |
| 025 | Dromedary Camel | *Camelus dromedarius* | `dromedary-camel` | DOM |
| 026 | Wild Horse (Mustang) | *Equus ferus caballus* | `wild-horse` | FER |
| 027 | Cape Buffalo | *Syncerus caffer* | `cape-buffalo` | NT |
| 028 | Wild Boar | *Sus scrofa* | `wild-boar` | LC |
| 029 | Bornean Orangutan | *Pongo pygmaeus* | `bornean-orangutan` | CR |
| 030 | Three-toed Sloth | *Bradypus variegatus* | `three-toed-sloth` | LC |
| 031 | Common Raccoon | *Procyon lotor* | `raccoon` | LC |
| 032 | North American Beaver | *Castor canadensis* | `beaver` | LC |
| 033 | North American River Otter | *Lontra canadensis* | `river-otter` | LC |
| 034 | European Badger | *Meles meles* | `european-badger` | LC |
| 035 | Striped Skunk | *Mephitis mephitis* | `striped-skunk` | LC |
| 036 | European Hedgehog | *Erinaceus europaeus* | `hedgehog` | NT |
| 037 | Large Flying Fox | *Pteropus vampyrus* | `flying-fox` | NT |
| 038 | European Rabbit | *Oryctolagus cuniculus* | `european-rabbit` | EN |
| 039 | Eastern Gray Squirrel | *Sciurus carolinensis* | `gray-squirrel` | LC |
| 040 | Black-tailed Jackrabbit | *Lepus californicus* | `jackrabbit` | LC |
| 041 | Nine-banded Armadillo | *Dasypus novemcinctus* | `armadillo` | LC |
| 042 | Giant Anteater | *Myrmecophaga tridactyla* | `giant-anteater` | VU |
| 043 | Meerkat | *Suricata suricatta* | `meerkat` | LC |
| 044 | Ring-tailed Lemur | *Lemur catta* | `ring-tailed-lemur` | EN |
| 045 | Bighorn Sheep | *Ovis canadensis* | `bighorn-sheep` | LC |
| 046 | Mountain Goat | *Oreamnos americanus* | `mountain-goat` | LC |
| 047 | Pronghorn | *Antilocapra americana* | `pronghorn` | LC |
| 048 | Wolverine | *Gulo gulo* | `wolverine` | LC |
| 049 | Snow Leopard | *Panthera uncia* | `snow-leopard` | VU |
| 050 | Aardvark | *Orycteropus afer* | `aardvark` | LC |

*IUCN column is indicative and must be validated against the live Red List
before publication. `DOM` = domesticated; `FER` = feral/domesticated.

## Sign-off

Mammalian Beasts linocut library — 50 of 50 authored, house spec locked,
naming conventions established. First of the seven BEASTIQUE collections.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
