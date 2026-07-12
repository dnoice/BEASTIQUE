<!--
========================================================================
✒ METADATA
  Title ................ BEASTIQUE — Avian Beasts · Linocut Prompt Library
  File Name ............ avian_beasts_linocut_prompts.md
  Relative Path ........ BEASTIQUE/studio/prompts/linocut/avian_beasts_linocut_prompts.md
  Artifact Type ........ Image-Generation Prompt Library (Markdown)
  Version .............. 1.0.0
  Date ................. 2026-06-24
  Update ............... 2026-06-24
  Author ............... Dennis 'dendogg' Smaltz
  A.I. Acknowledgement . Anthropic - Claude Opus 4.8
  Signature ............ ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ DESCRIPTION
  Fifty copy-paste-ready image-generation prompts for the 50 most widely
  recognized birds, each authored in the BEASTIQUE "linocut emblem" house
  style: refined, high-contrast, pure black-on-white, vector-traceable
  woodcut illustration suitable for downstream SVG / vinyl conversion. Each
  prompt is subject-specific — pose, anatomy, and the black-density map are
  tailored to the individual bird, never find-and-replaced from a single
  skeleton. The per-subject density map is built on feather-tract structure
  (separated flight-feather blades, overlapping covert rows, directional
  contour-feather hatch) rather than fluffy stipple, keeping every emblem
  vector-traceable.

✒ CHANGELOG
  - v1.0.0 (2026-06-24) [Anthropic - Claude Opus 4.8] — Initial library.
    Carried the locked house linocut skeleton over from the mammalian gold
    master, adapted the field rule into a four-posture system for birds,
    anchored density maps on feather-tract structure, authored all 50 avian
    entries. Third of the seven BEASTIQUE collections.

✒ KEY FEATURES
  - 50 standalone prompts, each a single fenced block (prompt + negative).
  - Stable prompt IDs (BQ-LINO-AVI-001 … -050) for cross-referencing.
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
  - FOUR-POSTURE FIELD RULE: birds are not uniform like swimmers, so the
    blank-white field forks by posture. (1) PERCHED — grip a short simple
    branch or perch stub, nothing more. (2) GROUND-STANDING — a few
    horizontal ground-shadow strokes beneath the feet (the mammalian
    convention). (3) IN FLIGHT — float alone on blank white, no ground (the
    swimmer rule). (4) SWIMMING — sit on blank white with at most a few
    minimal water-surface strokes at the waterline. In every case:
    background stays blank white, no scene, no border, no text, no extra
    animals.
  - TRACE-BASELINE NOTE: fine-feathered subjects are the first place the
    frozen Potrace baseline is expected to defect. When tracing these,
    expect to lower Speckles (~2–5) and ease Optimize from the clamp-heavy
    mammal profile so feather-tip detail and crisp feather steps survive.
    Prompts mitigate from the authoring side by structuring feather groups
    rather than scattering loose down.
  - "Recognized" is interpreted as globally iconic, instantly-named-on-
    sight species with strong, distinct silhouettes that read well as a
    carved emblem.
========================================================================
-->

# BEASTIQUE — Avian Beasts · Linocut Prompt Library

A library of 50 subject-specific linocut emblem prompts for the most
recognized birds. Density maps are anchored on **feather-tract structure** —
flight feathers as separated blades, coverts as clean overlapping rows,
breast and head as directional contour-feather hatch — so the texture and
the form are the same linework and the result traces clean to vector.

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
  silhouette around body, wings, tail, bill, and legs. Interior texture is
  tapered strokes, wedge cuts, and feather hatch that *follow the tracts*.
- **Weight hierarchy** — Thick outer contour, medium interior shadow
  shapes, smaller-but-clean feather hatch. Legible at both large and small
  sizes.
- **Density map (feather tracts)** — Each bird carries an intentional
  dark/dense region and a lighter/open region, drawn from its real plumage:
  flight feathers render as separated blade-feathers, wing coverts as clean
  overlapping scale-rows, breast and head as directional flick-hatch. The
  tract structure is the per-subject variable and the heart of each prompt
  — never fluffy stipple.
- **Field (four-posture)** — Perched birds grip a short branch stub;
  ground birds get a few horizontal foot-shadow strokes; birds in flight
  float on blank white; swimming birds sit on white with at most a few
  water-surface strokes. Background stays blank white. No scene, no border,
  no text, no extra animals.

## Naming Conventions

These conventions keep the linocut family cleanly separated from the
existing render sets and traceable end-to-end.

### Prompt IDs

Format: `BQ-LINO-{CLASS}-{NNN}` — e.g., `BQ-LINO-AVI-001`.

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
| Prompt library    | `{class}_beasts_linocut_prompts.md`                  | `avian_beasts_linocut_prompts.md`        |
| Raster render     | `{species-slug}_linocut-bw_{NN}.png`                 | `bald-eagle_linocut-bw_01.png`           |
| Vector trace      | `{species-slug}_linocut-bw_{NN}.svg`                 | `bald-eagle_linocut-bw_01.svg`           |
| Library folder    | `BEASTIQUE/studio/prompts/linocut/`                    | —                                        |
| Render folder     | `BEASTIQUE/studio/collections/{class}-beasts/linocut/`      | `studio/collections/avian-beasts/linocut/`      |

Slugs are lower-kebab and match the locked collection slugs (`bald-eagle`,
not `bald_eagle`). The `_linocut-bw_` variant tag is what separates these
emblems from the `{slug}-{n}.png` base/custom render family.

## The Library

Each entry below is a complete, standalone prompt. Lift the whole ```text
block — the negative prompt is the final line inside it.

### BQ-LINO-AVI-001 · Bald Eagle

*Haliaeetus leucocephalus* · IUCN LC · slug `bald-eagle` · output `bald-eagle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body bald eagle perched in left-facing profile with the head turned to show the fierce eye, styled as a heraldic woodcut emblem and upgraded antique natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a powerful hooked beak, a heavy brow giving the stern glare, the smooth white-feathered head and neck, a dark heavy body, broad folded wings, strong scaled legs, and large taloned feet gripping a short simple perch stub. The tail is white. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold countershade: the white head and white tail stay OPEN white, modeled only with a few fine contour-feather lines, while the dark body and wings carry the weight — render the wing coverts as clean overlapping scale-feather rows and the folded flight feathers as separated stacked blades, the breast as directional contour hatch. Keep the boundary between the white head and the dark body a crisp carved edge. The hooked beak and the brow-shadowed eye are the focal accents — keep the beak a clean bright shape with only a base shadow. The talons are bold clean hooks. One bold continuous contour around the whole perched bird and the perch stub. Weight hierarchy: thick contour, dark body with structured feather rows, open white head — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no background scene, no flag, no sky, no branches with leaves, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-002 · Golden Eagle

*Aquila chrysaetos* · IUCN LC · slug `golden-eagle` · output `golden-eagle_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body golden eagle perched on a rocky stub in a commanding three-quarter pose, wings slightly mantled, head lowered in a hunting glare, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a large hooked beak, a heavy brow, the signature golden nape hackles bristling at the back of the head and neck, a dark muscular body, broad folded wings, fully feathered legs (booted to the toes), and large taloned feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the dark body and wings dominate — render the wing coverts as overlapping scale-feather rows and the primaries as separated stacked blades, the breast and feathered legs as directional contour hatch — while the golden nape is rendered LIGHTER with fine radiating hackle-strokes so it reads as the paler crown shawl. Concentrate the deepest black in the back, folded wings, and the shadowed flank; keep the nape and the upper breast more open. The hooked beak and the shadowed eye are the focal accents. One bold continuous contour around the mantled bird and the rocky perch. Weight hierarchy: thick contour, dark structured wings, lighter hackle nape — legible large and small. Perched; a few minimal ground strokes at the rock; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no background scene, no mountains, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-003 · Peregrine Falcon

*Falco peregrinus* · IUCN LC · slug `peregrine-falcon` · output `peregrine-falcon_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body peregrine falcon perched upright in near-profile, head turned forward, alert and compact, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a short hooked beak with a notched tomial tooth, a large dark eye ringed by bare skin, the signature dark "helmet" hood and the bold dark malar mustache stripe running down each cheek, a slate-dark back, finely barred underparts, long folded pointed wings reaching toward the tail tip, and strong yellow taloned feet on a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold head pattern plus the barred breast: render the dark hood and the malar stripe as crisp solid black shapes framing a pale throat and cheek (reserved white), and render the underpart barring as a clean regular field of fine horizontal bars across the breast and belly — the defining texture, organized never noisy. The slate back and folded wings carry overlapping covert rows and stacked primary blades. The hooked beak and bold eye are the focal accents. One bold continuous contour around the upright bird and perch. Weight hierarchy: thick contour, bold hood and malar, clean breast barring — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no background scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-004 · Red-tailed Hawk

*Buteo jamaicensis* · IUCN LC · slug `red-tailed-hawk` · output `red-tailed-hawk_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red-tailed hawk perched in left-facing profile, head turned to a sharp forward glare, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a stout hooked beak, a fierce brow, a broad-shouldered body, the signature pale breast crossed by a dark streaked "belly band," dark patagial marks along the leading underwing, broad folded wings, a short broad tail, and strong taloned feet on a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the dark head, back, and folded wings carry the weight — render the wing coverts as overlapping scale-feather rows and the primaries as separated stacked blades — set against the paler breast which stays mostly open white, crossed by the bold streaked belly band rendered as a clean cluster of vertical dark dashes. The broad tail is rendered with a clean banded structure and a dark terminal band. The hooked beak and the brow-shadowed eye are the focal accents. One bold continuous contour around the perched hawk and perch. Weight hierarchy: thick contour, dark structured wings, clean belly-band accent on open breast — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no background scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-005 · Osprey

*Pandion haliaetus* · IUCN LC · slug `osprey` · output `osprey_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an osprey in flight, wings held in the characteristic gull-winged crook (an M-shape), talons lowered as if hunting, seen from a front-three-quarter angle, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; the long crooked wings span the width. Render the defining anatomy: a hooked beak, the signature broad dark eye-stripe (the mask) running back from the eye across a white head, a dark brown back and upperwings, white underparts and underwing-linings, dark carpal patches at the wing bends, long narrow crooked wings with separated fingered primaries, and long legs with taloned feet lowered. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold countershade in flight: the dark back, upperwing, and dark carpal patches carry the weight — render the flight feathers as cleanly separated stacked blades and the coverts as scale-rows — set against the white head, white underbody, and white underwing-linings kept open with only fine contour lines, the dark eye-mask a crisp stripe. The hooked beak and lowered talons are focal accents. One bold continuous contour around the crooked wings, body, and legs. Weight hierarchy: thick contour, dark structured upperwings, open white underbody — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no fish, no sky, no clouds, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-006 · Great Horned Owl

*Bubo virginianus* · IUCN LC · slug `great-horned-owl` · output `great-horned-owl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body great horned owl perched front-on, staring directly at the viewer, styled as a premium woodcut emblem and upgraded natural-history engraving with nocturnal menace. Center it in the frame with clean white space. Render the defining anatomy: the signature pair of prominent feather ear-tufts (horns) rising from the head, a broad facial disc bordered by a dark rim, two enormous forward-facing round eyes with heavy brows, a hooked beak nestled in facial bristles, a pale throat patch, a barred breast and belly, broad folded wings, and powerful feathered legs ending in taloned feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the barred plumage and the dark-rimmed disc: render the breast, belly, and folded wings as a clean regular field of fine horizontal barring (the defining texture, organized never noisy), with overlapping covert scale-rows on the wing shoulders. The facial disc is modeled with fine radial hatch sweeping outward from the beak, the dark disc-rim and the brows framing the two huge eyes — the focal accents, kept bold and round. The ear-tufts are bold clean shapes. One bold continuous contour around the upright owl and perch. Weight hierarchy: thick contour, clean body barring, bold eyes and tufts — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no background scene, no moon, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-007 · Barn Owl

*Tyto alba* · IUCN LC · slug `barn-owl` · output `barn-owl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body barn owl perched front-on, head slightly tilted, styled as an elegant ghostly premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the unmistakable smooth heart-shaped white facial disc with a fine dark rim, two small dark forward-facing eyes set in the disc, a pale hooked beak, a slender pale body, long folded wings, and long feathered legs ending in taloned feet on a perch stub. The barn owl is famously pale, so this subject INVERTS the usual density map: keep the heart-shaped face and the underbody largely OPEN white, building form from a confident contour and restrained accents rather than fill. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The heart-face is the hero — render its outline and fine inner rim crisply, with subtle radial hatch sweeping from the beak and the two dark eyes as the strongest accents. The back and upper wings carry the limited darkness — render the wing coverts as clean overlapping scale-rows with a sparse scatter of fine dark fleck-marks (the golden buff speckling), the flight feathers as separated blades. Keep the breast nearly pure white with only a few flecks. One bold continuous contour around the upright owl and perch. Weight hierarchy: thick contour, open white face and breast, structured darker back — the white IS the subject. Legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no over-darkened body, no background scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-008 · Snowy Owl

*Bubo scandiacus* · IUCN VU · slug `snowy-owl` · output `snowy-owl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body snowy owl perched front-on, rounded and alert, staring at the viewer, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a large round head with no ear-tufts, a smooth subtle facial disc, two piercing forward-facing round eyes, a hooked beak almost hidden in facial bristles, a heavy rounded white body, broad folded wings, and densely feathered legs and feet (feathered to the talons) gripping a perch stub. The snowy owl is predominantly white, so this is an OPEN-WHITE subject: keep the head, breast, and belly largely open white, building form from a confident contour and restrained marks. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the dark flecking: render the scattered dark bars and spots across the crown, back, wings, and flanks as a field of clean closed dash-and-spot marks (controlled and organized, never noise), denser on the wings and sparser toward the face and breast so the bird reads pale overall. The wing coverts are clean overlapping scale-rows; the flight feathers separated blades. The two big eyes and the beak are the focal accents. One bold continuous contour around the rounded owl and perch. Weight hierarchy: thick contour, open white mass, controlled dark flecking, bold eyes — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no over-darkened body, no snow scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```


### BQ-LINO-AVI-010 · Secretarybird

*Sagittarius serpentarius* · IUCN EN · slug `secretarybird` · output `secretarybird_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body secretarybird standing tall in left-facing profile, the long-legged snake-hunting raptor mid-stride, styled as a striking premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space to honor the height. Render the defining anatomy: a small eagle-like head with a hooked beak and a bare orange-red face patch, the signature crest of long black quill-like plumes projecting backward from the back of the head (the "secretary's quills"), a pale grey body and neck, the dramatic black "trousers" of dense dark thigh feathers, extremely long crane-like legs with short stout toes, long folded wings, and a long central pair of tail streamers. Pose conveys the bird striding to stomp prey. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the body and neck stay fairly open and pale (fine contour-feather hatch), while the darkness concentrates in three signature places — the backswept quill-crest (bold separated plume-strokes), the black thigh "trousers" (dense dark feather mass), and the black flight feathers and tail-streamer tips. The bare face patch, hooked beak, and the long bare legs are crisp focal accents. One bold continuous contour around the tall striding bird. Weight hierarchy: thick contour, pale open body, bold crest/trousers/flight-feather darks — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no grass, no savanna, no snake, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-011 · Mute Swan

*Cygnus olor* · IUCN LC · slug `mute-swan` · output `mute-swan_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body mute swan afloat in left-facing profile, the neck held in its signature graceful S-curve and the wings slightly raised in the arched "busking" display, styled as an elegant premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a long curved neck, a small head with the orange bill bearing a prominent black basal knob and black facial mask at the bill base, an arched body with the wings lifted in raised feathered sails over the back, and the tail. The mute swan is pure white, so this is an OPEN-WHITE subject: keep the body and neck almost entirely open white, building the form from a confident flowing contour and the most restrained accents. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Concentrate the limited darkness in three places: the black bill-knob and facial mask (the strongest accent), a few clean curved shadow strokes under the chin and along the lower neck curve, and fine separated feather-blade lines defining the edges of the raised wing-sails so the arched feathers read. Keep the breast and back pure white. One bold continuous contour around the swan, the S-neck, and the raised wing-sails. Weight hierarchy: thick flowing contour, open white body, bold bill-knob accent — the white IS the subject. Legible large and small. Afloat, with at most a few minimal water-surface strokes at the waterline; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no over-darkened body, no water scene, no reeds, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-012 · Canada Goose

*Branta canadensis* · IUCN LC · slug `canada-goose` · output `canada-goose_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Canada goose standing alert in left-facing profile, neck held tall, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the signature long black neck and black head, the bold white "chinstrap" cheek patch sweeping up from the throat across each cheek, a stout black bill, a brown barred body, a pale breast, folded wings, a black tail with a white rump band, and webbed feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold head-and-neck pattern: render the black head and neck as a solid clean black "sock" with the white chinstrap reserved as a crisp open shape — the unmistakable identifier — against the paler breast (open white) and the barred brown body. Render the body feathers as clean overlapping scale-rows with a regular barred wing pattern, the folded flight feathers as separated stacked blades, darkening toward the back and tail. The black bill and eye are crisp accents; the white rump band a clean reserve. One bold continuous contour around the standing goose. Weight hierarchy: thick contour, solid black neck-sock with reserved chinstrap, barred body — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no grass, no water, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-013 · Mallard

*Anas platyrhynchos* · IUCN LC · slug `mallard` · output `mallard_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body mallard drake afloat in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy of the drake: a rounded head with the iridescent dome (render dark), a flat broad bill, the crisp white neck ring separating the dark head from the body, a dark chest, a pale grey flank, a darker rear, the signature curled black upper-tail-curl feathers, folded wings with a bordered speculum patch, and webbed feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the drake's banded structure: render the iridescent head as a solid clean dark dome, set off by the reserved white neck ring (crisp), above a dark chest, then a paler open flank rendered with fine even vermiculation hatch (clean fine wavy lines, organized), and a dark rear with the bold curled tail-feathers as the signature accent. The folded wing carries a clean bordered speculum block and separated flight-feather blades. The bill and eye are crisp accents. One bold continuous contour around the floating drake. Weight hierarchy: thick contour, dark head/chest/rear, fine vermiculated flank, curled tail accent — legible large and small. Afloat, with at most a few minimal water-surface strokes at the waterline; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water scene, no reeds, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-014 · Mandarin Duck

*Aix galericulata* · IUCN LC · slug `mandarin-duck` · output `mandarin-duck_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body mandarin duck drake afloat in left-facing profile, styled as an ornate premium woodcut emblem and upgraded natural-history engraving — the most decorated duck. Center it in the frame with clean white space. Render the defining ornate anatomy of the drake: a small bill, a crested head with a long sweeping mane, the signature broad white eye-stripe (supercilium) flaring back from the eye, ornate elongated cheek whiskers (ruff), a striped breast with bold vertical bars, and the unmistakable pair of upright orange "sail" feathers (the enlarged tertials) standing like fans on the back, folded wings, and a compact rear. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. This is a PATTERN showpiece — translate the duck's flamboyant color blocks into bold black shapes and reserved white shapes: render the crested head and ruff as patterned blocks with the white eye-stripe reserved crisp, the breast's vertical bands as clean alternating dark bars, and the two upright sail-feathers as bold clean fan-shapes (the hero accent) with fine internal ribbing. Keep every pattern boundary sharp — the ornamentation is the entire emblem. One bold continuous contour around the floating drake and its raised sails. Weight hierarchy: thick contour, bold pattern blocks, crisp reserved whites, fan-sails — legible large and small. Afloat, with at most a few minimal water-surface strokes at the waterline; otherwise blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no muddy pattern, no water scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-015 · Greater Flamingo

*Phoenicopterus roseus* · IUCN LC · slug `greater-flamingo` · output `greater-flamingo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body greater flamingo standing in its iconic one-legged pose, the long neck folded into a graceful S-curve with the head lowered, styled as an elegant premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space to honor the height and curves. Render the defining anatomy: a very long sinuous neck, a small head with the signature thick down-bent bill (kinked sharply downward, with a black tip), a slender pale body, one impossibly long stilt leg planted with the other tucked up against the body, a backward-bending ankle joint, and folded wings. The flamingo's pale plumage makes this an OPEN-WHITE subject driven by line and curve. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Keep the body and neck almost entirely open white, built from a flowing confident contour. Concentrate the limited darkness in: the bold black-tipped down-bent bill (the strongest identifier and focal accent), a few clean curved shadow strokes along the underside of the body and neck-curve, the separated black flight-feather blades just visible at the folded wing, and the slender dark leg joint. The elegant pose IS the emblem. One bold continuous contour around the curved neck, body, and the single standing leg. Weight hierarchy: thick flowing contour, open white body, bold bent-bill accent — legible large and small. Ground-standing on one leg; a few minimal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no pink, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water scene, no flock, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-016 · Great Blue Heron

*Ardea herodias* · IUCN LC · slug `great-blue-heron` · output `great-blue-heron_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body great blue heron standing tall in left-facing profile, the neck held in its characteristic folded S-kink, poised and statuesque, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: a long dagger-like spear bill, a sleek head with a black eye-stripe extending into the signature thin black head-plume trailing off the crown, a long kinked neck with a streaked foreneck, the shoulder bearing long shaggy lanceolate plumes, a slender body, long folded wings, very long stilt legs, and long-toed feet. Pose conveys a patient wading hunter. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the body and wings carry mid-weight — render the wing coverts as overlapping scale-rows and the folded flight feathers as separated stacked blades, with the long shoulder plumes as elegant tapering separated strokes (a signature texture) — set against the paler neck rendered with a clean vertical streak-pattern down the foreneck. The dagger bill, the black crown-plume, and the eye-stripe are the crisp focal accents; the long legs are clean confident lines. One bold continuous contour around the tall heron. Weight hierarchy: thick contour, structured wings and shoulder plumes, streaked neck — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no reeds, no fish, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-017 · Grey Crowned Crane

*Balearica regulorum* · IUCN EN · slug `grey-crowned-crane` · output `grey-crowned-crane_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body grey crowned crane standing tall in an elegant near-profile, styled as a regal premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: the spectacular signature crown of stiff golden bristle-feathers radiating in a spiky halo from the back of the head, a striking face with bare cheek patches and a small wattle, a black-and-white patterned face, a short stout bill, a long slender neck, a rounded body, long folded wings bearing bold contrasting wing-panels, long legs, and long toes. Pose conveys the crane poised and stately. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the crown: render the radiating bristle-feathers as a clean spiky halo of fine separated tapering strokes fanning out from the crown — the defining focal motif. The patterned face is rendered as crisp black-and-white facial blocks (bare cheek reserved white, dark cap). The wings carry bold contrasting panels — render the dark and reserved-white wing sections as clean blocks with structured covert rows and separated flight-feather blades. The neck stays paler with fine contour hatch. One bold continuous contour around the standing crane. Weight hierarchy: thick contour, spiky crown halo, bold wing panels — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no grass, no savanna, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-018 · White Stork

*Ciconia ciconia* · IUCN LC · slug `white-stork` · output `white-stork_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body white stork standing tall in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: a long straight pointed bill, a small head with a bare patch around the eye, a long neck, a large white body, the signature black flight feathers covering the rear of the folded wing (white body, black wings), long straight legs, and webbed-based long toes. Pose conveys the stork standing erect and dignified. The body is white, so this is a partial OPEN-WHITE subject playing on bold contrast. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the clean white-body / black-wing contrast: keep the head, neck, breast, and body largely OPEN white with only fine contour-feather lines, and concentrate the darkness in the bold black folded flight feathers and scapulars at the rear of the wing — render these as crisp separated stacked blades and clean dark covert blocks, the defining contrast. The long bill and the long legs are bold clean shapes (with only base/joint shadow); the eye-patch a crisp accent. One bold continuous contour around the tall stork. Weight hierarchy: thick contour, open white body, bold black wing block, clean bill and legs — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no nest, no rooftop, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-019 · Roseate Spoonbill

*Platalea ajaja* · IUCN LC · slug `roseate-spoonbill` · output `roseate-spoonbill_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body roseate spoonbill standing in left-facing profile, head lowered to show the signature bill, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the unmistakable long flat spatulate bill widening to a rounded spoon at the tip, a bare greenish head (rendered as bare skin with fine texture), a white neck, a rounded body, long folded wings, long legs, and long toes. Pose conveys the wader poised mid-step. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the spoon-bill: render it as a bold clean flat shape broadening to the rounded spatula tip, with fine surface ridging and a defined base — the unmistakable identifier and focal accent. The bare head is rendered with fine clean skin-texture hatch and a crisp eye. The density map: the upper neck and breast stay paler (open with fine contour lines), while the wing and lower body carry richer feather structure — overlapping covert scale-rows and separated flight-feather blades, with a darker shoulder patch. The long legs are clean confident lines. One bold continuous contour around the standing spoonbill. Weight hierarchy: thick contour, hero spoon-bill, structured wings, open upper body — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no pink, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no reeds, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-020 · Shoebill

*Balaeniceps rex* · IUCN VU · slug `shoebill` · output `shoebill_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body shoebill standing front-three-quarter, fixing the viewer with its prehistoric stare, styled as a menacing premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the enormous signature clog-shaped bill (broad, bulbous, hooked at the tip, like a wooden shoe) dominating the face, a massive head, pale piercing forward-set eyes giving an unsettling stare, a short shaggy crest at the back of the head, a thick neck, a stout grey body, broad folded wings, long sturdy legs, and very long toes. Pose conveys a statue-still ambush predator. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the massive bill: render it as a bold clean clog-shape with a defined hooked tip, subtle surface mottle-hatch, and a strong shadow under its bulk — the entire emblem hinges on it. The pale staring eyes are the second focal accent, kept bold and slightly cold. The density map: render the grey body and wings as structured plumage — overlapping covert scale-rows and separated flight-feather blades — with the deepest darkness in the shadowed flank and under the wing, the shaggy nape crest as a few bold separated strokes. The long legs and toes are clean confident lines. One bold continuous contour around the standing shoebill. Weight hierarchy: thick contour, hero clog-bill, structured grey plumage, cold eyes — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no swamp, no reeds, no water, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-021 · Atlantic Puffin

*Fratercula arctica* · IUCN VU · slug `atlantic-puffin` · output `atlantic-puffin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Atlantic puffin standing upright in near-profile on a cliff stub, styled as a charming premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an upright stocky body, a large head, the signature deep triangular ridged bill (tall and laterally flattened, marked with curved grooves), a clean pale face disc with a sad-clown eye accented by fleshy eye-ornaments, a black cap and black back, a white face and white underparts, short stubby folded wings, and bright webbed feet. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold black-and-white tuxedo: render the black cap, nape, back, and collar as clean solid black shapes set against the reserved white face disc and white breast — crisp boundaries, the unmistakable identifier. The hero is the triangular bill: render its curved ridge-grooves as clean parallel carved lines across the bold bill shape, with the eye-ornament as a crisp accent above. The folded wings carry separated flight-feather blades; the webbed feet are clean shapes. One bold continuous contour around the upright puffin and the cliff stub. Weight hierarchy: thick contour, solid black tuxedo, reserved white face/breast, ridged bill hero — legible large and small. Perched/standing on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no cliff scene, no sea, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-022 · Wandering Albatross

*Diomedea exulans* · IUCN VU · slug `wandering-albatross` · output `wandering-albatross_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a wandering albatross in dynamic soaring flight, the immense wings fully extended in a long glide, seen from a front-three-quarter angle, styled as a majestic premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; the enormous wingspan stretches nearly the full width. Render the defining anatomy: an extremely long narrow wingspan (the longest of any bird), a large white body and head, a heavy pale hooked bill with tube-nostrils along the sides, dark wingtips and dark trailing edges on otherwise white wings, and a short tail, legs tucked. Pose conveys effortless ocean gliding, wings locked straight and long. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the white-body / dark-edge contrast across a vast span: keep the body, head, and the bulk of the wings OPEN white with only fine separated feather-blade lines defining the wing structure, and concentrate the darkness at the wingtips, the trailing edges, and a few upperwing markings — render these as crisp dark blade-feathers and clean edge bands. The heavy tube-nosed bill and the eye are the focal accents. One bold continuous contour around the long-winged glider. Weight hierarchy: thick contour, open white wings and body, crisp dark wing edges, clean bill — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no ocean, no waves, no ship, no sky, no clouds, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-023 · Brown Pelican

*Pelecanus occidentalis* · IUCN LC · slug `brown-pelican` · output `brown-pelican_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body brown pelican perched in left-facing profile, the long neck folded back so the head rests over the shoulders, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a very long heavy bill with the signature large expandable throat pouch slung beneath it, a large head with a pale crown, a long neck folded into an S against the body, a heavy body, long broad folded wings, short legs, and large webbed feet on a perch stub. Pose conveys the pelican hunched and resting. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the long bill and pouch: render the bill as a bold clean elongated shape with the slung pouch beneath it given a few curved fold-strokes to show its loose skin — the unmistakable identifier. The density map: render the body and folded wings as structured plumage — overlapping covert scale-rows and separated flight-feather blades, darkening toward the back and wings — while the pale crown and foreneck stay open with fine contour hatch, the shaggy nape as a few separated strokes. The eye and the long bill are the focal accents. One bold continuous contour around the perched pelican and stub. Weight hierarchy: thick contour, hero bill-and-pouch, structured wings, paler crown — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no pier, no fish, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-024 · Northern Gannet

*Morus bassanus* · IUCN LC · slug `northern-gannet` · output `northern-gannet_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a northern gannet in the dramatic pre-dive plunge pose — wings swept back into a streamlined arrow, bill pointed downward — seen from a front-three-quarter angle, styled as a striking premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a long pointed dagger bill, a sleek head washed with a buff crown, a long neck, a streamlined white body, long narrow wings with crisp black wingtips, and the body tapering to a pointed tail, feet tucked. Pose conveys the gannet folded into a living spear mid-plunge. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the clean white-body / black-wingtip contrast: keep the body and most of the wings OPEN white with only fine separated feather-blade lines, and concentrate the darkness in the crisp black wingtips (a bold clean block), the fine dark facial lines around the bill base, and a soft directional hatch over the buff crown so the head reads slightly shaded. The long dagger bill and the pale eye are the focal accents. One bold continuous contour around the arrow-shaped diving gannet. Weight hierarchy: thick contour, open white body, bold black wingtips, clean dagger bill — legible large and small. In flight/plunging, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no spray, no sea, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-025 · Indian Peafowl

*Pavo cristatus* · IUCN LC · slug `indian-peafowl` · output `indian-peafowl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of an Indian peacock in full display, the magnificent train fanned wide behind the body in a great arc, seen front-on, styled as the showpiece premium woodcut emblem and upgraded natural-history engraving of the collection. Center it in the frame with clean white space; the fanned train fills the composition as a grand radiating disc. Render the defining anatomy: a slender crested head bearing the signature fan-tipped feather crown (a row of small racket-tipped plumes), a long neck, a compact body in front, and behind it the spectacular train spread into a vast fan of long feathers, each ending in the iconic ocellus (eye-spot). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the train: render it as a radiating fan of long feather-shafts each carrying its ocellus at the tip — render each ocellus as a bold clean concentric eye-motif (a dark heart-shaped center ringed by clean concentric bands) — arranged in rhythmic rings across the fan, with the fine barbs of each feather as delicate even hatch radiating from the shafts between the eye-spots. Keep the ocelli crisp and regular: the pattern IS the emblem. The crested head, the neck (fine scale-feather hatch), and the body anchor the center. One bold continuous contour around the body and the great fanned train. Weight hierarchy: thick contour, bold ocelli motifs, fine radiating barb-hatch, crest crown — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no garden, no muddy eyespots, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-026 · Wild Turkey

*Meleagris gallopavo* · IUCN LC · slug `wild-turkey` · output `wild-turkey_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body wild turkey tom in full strut display, the broad tail fanned upright behind it and the wings dropped, seen in a front-three-quarter pose, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a small bare caruncled head and neck with wattles and a snood over the bill, the signature beard of bristles hanging from the chest, a heavy iridescent body, dropped folded wings with barred flight feathers, and the broad tail fanned into a great upright half-disc with a banded margin. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the body is the dark iridescent mass — render the body feathers as a field of clean overlapping scale-feathers each with a defined dark margin (the metallic scaled look), and the wing flight feathers as separated blades with clean horizontal barring. The fanned tail is rendered as a radiating set of broad feathers with a clean banded pattern and a bold terminal band — a strong focal half-disc. The bare caruncled head and neck are rendered with fine wrinkled skin-texture hatch, the snood and wattles as bold clean shapes, and the chest beard as a clean tuft of separated bristle-strokes. One bold continuous contour around the strutting tom and fanned tail. Weight hierarchy: thick contour, scaled body, banded fanned tail, textured bare head — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no farm, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-027 · Red Junglefowl

*Gallus gallus* · IUCN LC · slug `red-junglefowl` · output `red-junglefowl_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body red junglefowl rooster (the wild ancestor of the chicken) standing in a proud crowing strut, left-facing profile, head raised, styled as a classic premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an erect serrated comb on the crown, paired wattles hanging beneath the bill, white ear-lobes, a short stout bill, a proud arched neck draped in long pointed hackle feathers, a deep chest, the signature long arching sickle tail feathers sweeping up and back, drooping saddle hackles, folded wings, and strong scaled legs with spurs. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: render the neck and saddle hackles as flowing separated pointed-feather strokes (the signature drape), the long arching sickle tail-feathers as bold clean sweeping blades (the hero accent), and the body as overlapping scale-feather rows darkening toward the rear. Keep the chest and shoulder mid-toned with directional contour hatch. The serrated comb, wattles, and ear-lobe are crisp bold accents; the eye sharp; the scaled legs and spurs clean. One bold continuous contour around the strutting rooster and the arching tail. Weight hierarchy: thick contour, flowing hackles, bold sickle tail, scaled body — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no farm, no fence, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-028 · Ring-necked Pheasant

*Phasianus colchicus* · IUCN LC · slug `ring-necked-pheasant` · output `ring-necked-pheasant_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body ring-necked pheasant cock standing in left-facing profile, the very long tail streaming behind, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a wide composition with clean white space to honor the long tail. Render the defining anatomy: a small head with the signature bright bare red face-wattle and small ear-tufts, an iridescent dark head (rendered dark), the bold white neck ring separating the head from the body, a richly patterned mottled body, folded wings, and the unmistakable very long pointed tail of stiff feathers crossed by clean dark bars. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: render the iridescent head as a solid clean dark shape set off by the reserved white neck ring (crisp identifier), and the mottled body as a rich field of clean closed feather-spots and scalloped scale-rows (the defining body texture, organized never noisy), darker over the back. The hero is the long barred tail — render it as long clean tapering feathers crossed by evenly spaced bold dark bars, streaming back across the composition. The bare red face is rendered with fine skin-texture hatch; the eye and small bill are crisp accents. One bold continuous contour around the standing cock and the long tail. Weight hierarchy: thick contour, dark head with reserved ring, mottled body, barred streaming tail — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no field, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-029 · Common Ostrich

*Struthio camelus* · IUCN LC · slug `common-ostrich` · output `common-ostrich_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body common ostrich standing tall in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving — the largest living bird. Center it in a tall composition with clean white space. Render the defining anatomy: a small flat head with a short broad bill and a large prominent eye with long lashes, a very long bare slender neck, a huge rounded body covered in loose drooping plumes, small useless wings bearing soft plume-feathers, and the signature extremely long powerful bare legs with two-toed feet (one large clawed toe and a smaller one). Pose conveys the ostrich standing tall and watchful. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the great body is the dark plume mass — render the loose body plumes as bold drooping separated feather-strokes that hang and curl (the soft fluffy plumage given structure, not stipple), darkest over the back and tail, with the wing plumes as a paler reserved cluster. The long bare neck and the long bare legs stay open and pale, rendered with fine clean skin-texture and muscle hatch — a strong contrast to the dark plume body. The small head, the big lashed eye, and the two-toed feet are crisp focal accents. One bold continuous contour around the tall standing ostrich. Weight hierarchy: thick contour, bold drooping plume body, pale bare neck and legs — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush plumes, no blurry edges, no desert, no savanna, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-030 · Emu

*Dromaius novaehollandiae* · IUCN LC · slug `emu` · output `emu_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body emu standing in left-facing profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space. Render the defining anatomy: a small head with a short dark bill and a bright eye, a long slender neck partly bare with bluish skin showing through sparse feathering, the signature shaggy hair-like plumage of soft drooping double-shafted feathers covering the large rounded body, vestigial wings hidden in the plumage, and long sturdy three-toed legs. Pose conveys the emu standing tall and curious. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the shaggy hair-feathers: render the body plumage as a dense flowing field of long directional hair-like strokes that hang and drape down the body (giving the unmistakable shaggy emu coat structure, never flat stipple), darkest over the back and shoulders, lightening down the flank. The neck is rendered with a sparser stroke pattern over a paler bare-skin base so the bluish neck reads lighter. The small head, the bright eye, and the long scaled legs with three-toed feet are crisp focal accents. One bold continuous contour around the tall shaggy emu. Weight hierarchy: thick contour, flowing hair-feather coat, paler neck — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no outback, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-031 · Southern Cassowary

*Casuarius casuarius* · IUCN LC · slug `southern-cassowary` · output `southern-cassowary_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body southern cassowary standing in a front-three-quarter pose, head raised to show the casque, styled as a striking prehistoric premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the signature tall helmet-like casque rising from the crown, a bare brightly-skinned head and neck bearing two long hanging wattles at the throat, a fierce eye, a stout bill, the signature dense glossy black hair-like plumage draping the heavy rounded body, vestigial wings with bare quill-spines, and powerful legs with three toes — the inner toe bearing a long dagger-like claw. Pose conveys a dangerous, dinosaur-like bird. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the casque: render it as a bold clean raised helmet-shape with a defined ridge and base shadow. The density map: render the glossy black body plumage as a dense flowing field of long drooping hair-like feather-strokes (structured, not flat), the deepest black of the piece, set against the bare head-and-neck which stays paler — rendered with fine clean skin-texture hatch and the two hanging wattles as bold clean shapes. The fierce eye, the casque, and the dagger inner-claw are crisp focal accents. One bold continuous contour around the standing cassowary. Weight hierarchy: thick contour, hero casque, dense black hair-plumage, pale bare neck — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no rainforest, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-032 · Emperor Penguin

*Aptenodytes forsteri* · IUCN NT · slug `emperor-penguin` · output `emperor-penguin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body emperor penguin standing upright in a dignified near-profile, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a tall upright body, a rounded head, a long slightly down-curved slender bill, the signature bright auricular ear-patches curving down the sides of the head and blending into a pale upper breast wash, a black head and back, a clean white front, stiff flipper-like wings held at the sides, and short legs with webbed feet and a propping tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold formal tuxedo: render the head, back, and the outer edge of the flippers as solid clean black shapes set against the reserved white belly and breast — crisp clean boundaries, the classic two-tone. The signature ear-patches are rendered as clean teardrop reserves with a fine border where they meet the black head, sweeping toward the throat. The slender down-curved bill carries a fine stripe along the lower mandible; the eye is a small crisp accent. Keep the white front almost entirely open, modeled only with the faintest contour. One bold continuous contour around the upright penguin. Weight hierarchy: thick contour, solid black back/head, reserved white front, clean ear-patches — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no ice, no snow, no chick, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-033 · Southern Brown Kiwi

*Apteryx australis* · IUCN VU · slug `southern-brown-kiwi` · output `southern-brown-kiwi_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body southern brown kiwi foraging in left-facing profile, the long bill angled down toward the ground, styled as a charming premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a rounded pear-shaped body with no visible wings or tail, the signature very long slender slightly down-curved probing bill with nostrils near its tip, a small eye, bristly whiskers at the bill base, the unmistakable shaggy hair-like loose plumage covering the whole body like coarse fur, and short stout legs with strong clawed toes. Pose conveys the kiwi snuffling, bill to the ground. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the hair-like plumage: render the whole rounded body as a dense flowing field of long shaggy directional hair-feather strokes that drape and overlap (coarse fur structure, never flat stipple), darkest over the back and lightening slightly underneath. The hero is the long probing bill — a bold clean tapering line with a fine nostril accent near the tip. The small eye, the bristle-whiskers, and the stout clawed feet are crisp focal accents. One bold continuous shaggy contour around the round foraging kiwi. Weight hierarchy: thick contour, flowing hair-feather body, hero long bill — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft airbrush, no blurry edges, no forest floor, no ferns, no sky, no border, no text, no extra animals, no cartoon proportions, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-034 · Scarlet Macaw

*Ara macao* · IUCN LC · slug `scarlet-macaw` · output `scarlet-macaw_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body scarlet macaw perched in left-facing profile, the very long tail streaming down, head turned to show the eye, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space to honor the long tail. Render the defining anatomy: a large powerful strongly-hooked bill (pale upper mandible, dark lower), the signature large bare white facial patch around the eye marked with fine feather-lines, a rounded head, a robust body, broad folded wings, and the unmistakable very long tapering tail of two central streamer feathers. The macaw grips a perch stub with a zygodactyl foot (two toes forward, two back). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map translates the bold color blocks into tone: render the body and head as a structured dark mass of clean overlapping scale-feather rows, the broad wing with separated stacked flight-feather blades and clean banded covert blocks, and the long tail as bold clean tapering streamer-feathers. The hero accent is the bare white face patch — keep it reserved open white with the species' fine curved feather-line tracery across it. The big hooked bill and the zygodactyl gripping foot are crisp focal accents. One bold continuous contour around the perched macaw and the long tail. Weight hierarchy: thick contour, structured dark body and wings, reserved white face, streaming tail — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-035 · Sulphur-crested Cockatoo

*Cacatua galerita* · IUCN LC · slug `sulphur-crested-cockatoo` · output `sulphur-crested-cockatoo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body sulphur-crested cockatoo perched in near-profile with the signature crest raised in a dramatic forward-curving fan, styled as a premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the spectacular erectile crest of long narrow forward-curving plumes raised high over the head, a large dark strongly-hooked bill, a rounded white head and body, a dark eye, broad folded wings, and zygodactyl feet gripping a perch stub. The cockatoo is white-plumaged, so this is an OPEN-WHITE subject. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. Keep the head, body, and wings largely OPEN white, built from a confident contour and the most restrained feather lines. The hero is the raised crest — render its long curving plumes as clean separated tapering blades fanning forward, defined by their crisp edges against the white rather than by fill. Concentrate the limited darkness in: the bold dark hooked bill (the strongest accent), the dark round eye, a few clean shadow strokes under the wing and tail and beneath the body, and fine separated flight-feather lines defining the folded wing edge. One bold continuous contour around the perched cockatoo, raised crest, and stub. Weight hierarchy: thick contour, open white body, bold bill and crest edges — the white IS the subject. Legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no over-darkened body, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-036 · African Grey Parrot

*Psittacus erithacus* · IUCN EN · slug `african-grey-parrot` · output `african-grey-parrot_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body African grey parrot perched in left-facing profile, head turned to show the pale-eyed gaze, styled as a refined premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a strongly-hooked dark bill, the signature bare pale facial patch around a light eye, a rounded head, a body covered in the species' distinctive scalloped grey plumage (each feather pale-edged), broad folded wings, a short tail (red in life, rendered as a clean tonal block), and zygodactyl feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature texture is the scalloped plumage: render the body and head feathers as a clean regular field of overlapping scale-feathers, each feather drawn with a crisp pale edge so the whole bird reads as finely scalloped — the defining texture, organized and rhythmic, perfect for vector. The wing carries structured covert rows and separated flight-feather blades; the short tail is a clean defined block. The hero accent is the bare pale face patch — reserved open with a fine surrounding feather-edge — and the pale eye set within it. The hooked bill and gripping foot are crisp accents. One bold continuous contour around the perched parrot and stub. Weight hierarchy: thick contour, scalloped feather field, reserved face patch — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no foliage, no cage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-037 · Kakapo

*Strigops habroptilus* · IUCN CR · slug `kakapo` · output `kakapo_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body kakapo (the flightless owl-parrot) standing in a front-three-quarter pose, styled as a charming premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a large rounded heavy-bodied parrot, the signature owl-like facial disc of fine feathers around the face, a pale strongly-hooked bill nearly buried in facial bristles, small eyes, prominent bristly whiskers fanning from the face, broad short useless wings held against the body, stout strong legs, and large zygodactyl feet with heavy claws. Pose conveys a plump, ground-dwelling nocturnal parrot. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The signature textures are the facial disc and the mossy mottled plumage: render the facial disc as fine radial feather-hatch sweeping outward from the bill (the owl-like motif, a focal accent), and render the body plumage as a rich field of clean cross-barred and mottled feathers — each feather carrying fine dark barring over a paler base — giving the dappled camouflaged "moss" look, organized never noisy. Concentrate density over the back and folded wings (overlapping scale-rows, separated flight-feather blades), lightening on the breast. The hooked bill, the whisker-bristles, and the heavy clawed feet are crisp focal accents. One bold continuous contour around the round standing kakapo. Weight hierarchy: thick contour, owl-disc face, mottled barred body, heavy feet — legible large and small. Ground-standing; a few horizontal foot-shadow strokes; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft feathers, no airbrush, no blurry edges, no forest, no moss scene, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-038 · Common Raven

*Corvus corax* · IUCN LC · slug `common-raven` · output `common-raven_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body common raven perched in left-facing profile, head lowered and bill parted in a croak, styled as a brooding premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a heavy thick bill with a slight hook, a flat forehead, the signature shaggy throat hackles (bristled feathers bunched at the throat), a sleek glossy body, long broad folded wings, a wedge-shaped tail, and strong feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. The raven is glossy black, so this subject is built as a BOLD BLACK MASS with reserved highlights: fill the body, wings, and tail largely solid black, then model the form by reserving clean white highlight streaks along the back of the head, the wing coverts, and the leading edges of the folded flight feathers so the glossy sheen reads — the carved-light approach. Render the shaggy throat hackles as bold separated pointed strokes (the signature texture), and the folded flight feathers and wedge tail as cleanly separated stacked blades defined by reserved white gaps. The heavy bill and the eye (a crisp reserved spark) are the focal accents. One bold continuous contour around the perched raven and stub. Weight hierarchy: dominant black mass, reserved sheen highlights, shaggy hackles, separated blades — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no moon, no graveyard, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-039 · Eurasian Magpie

*Pica pica* · IUCN LC · slug `eurasian-magpie` · output `eurasian-magpie_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body Eurasian magpie perched in left-facing profile, the long tail angled down and back, styled as a premium woodcut emblem and upgraded natural-history engraving — a natural for black-and-white. Center it in a wide composition with clean white space to honor the long tail. Render the defining anatomy: a stout pointed bill, a sleek black head and breast, the signature clean white belly and white scapular shoulder-patches, black folded wings with long primary feathers, and the unmistakable very long graduated iridescent tail. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. This is a bold pied subject — render the pattern as crisp solid black against reserved pure white: the black head, breast, back, wings, and long tail as clean solid black shapes, with the white belly and the bold white scapular patches reserved as crisp open whites — the unmistakable magpie identifier. Model the black masses with a few reserved highlight streaks along the wing and the long tail to suggest the iridescent sheen, and render the long flight feathers and tail feathers as cleanly separated stacked blades defined by thin reserved white gaps. The pointed bill and the eye are crisp accents; the gripping feet clean. One bold continuous contour around the perched magpie and the long tail. Weight hierarchy: bold black/white pied blocks, separated tail blades, clean contour — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-040 · Blue Jay

*Cyanocitta cristata* · IUCN LC · slug `blue-jay` · output `blue-jay_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body blue jay perched in left-facing profile, crest raised and alert, styled as a crisp premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a pointed black bill, the signature pointed feathered crest raised on the crown, the bold black "necklace" collar curving across the throat and up behind the head, a pale face and underparts, folded wings and tail marked with the species' strong black barring and white-cornered patches, and feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold facial pattern and wing barring: render the black necklace, the crest accents, and the facial frame as crisp solid black shapes against the reserved pale face and breast (open white with fine contour), and render the wing and tail as a clean regular field of bold black bars with reserved white feather-corners — the defining patterned texture, organized and rhythmic. Keep the underparts mostly open white. The raised crest, the pointed bill, and the bright eye are crisp focal accents. One bold continuous contour around the perched jay and stub. Weight hierarchy: thick contour, bold necklace and barred wings, open pale breast — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no blue, no photographic realism, no soft feathers, no airbrush, no blurry edges, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-041 · Northern Cardinal

*Cardinalis cardinalis* · IUCN LC · slug `northern-cardinal` · output `northern-cardinal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body northern cardinal (male) perched in left-facing profile, crest raised, styled as a crisp premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the signature tall pointed feathered crest, a short stout conical seed-cracking bill, the bold black face mask surrounding the bill and eye, a full rounded body, folded wings, a long tail, and feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: the cardinal's body is uniformly bright in life (red), so render the body as a clean structured mid-tone built from even directional contour-feather hatch following the body's curves — enough to model the rounded form while keeping it distinct from a solid-black bird — with the wings carrying overlapping covert scale-rows and separated flight-feather blades, and the tail as clean stacked blades. The hero accent is the bold black face mask — render it as a crisp solid black shape wrapping the conical bill and the eye, the strongest contrast on the bird. The raised crest is a clean pointed shape; the stout bill a bold clean form; the eye a sharp spark within the mask. One bold continuous contour around the perched cardinal and stub. Weight hierarchy: thick contour, bold black mask, structured feather body, raised crest — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no soft feathers, no airbrush, no blurry edges, no foliage, no snow, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-042 · American Robin

*Turdus migratorius* · IUCN LC · slug `american-robin` · output `american-robin_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body American robin perched upright in left-facing profile, head cocked alertly, styled as a crisp premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: a slim straight bill, a rounded head, the signature broken white eye-ring (eye-arcs), a darker head and back, a full rounded breast (red-orange in life), folded wings, a longish tail, and slim legs with feet gripping a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the dark-head / toned-breast contrast: render the head, back, and folded wings as the darker mass — the head a clean dark shape, the back with overlapping covert scale-rows and separated flight-feather blades — set against the full rounded breast rendered as a clean structured mid-tone of even directional contour hatch (so the signature breast reads as a distinct tonal panel, neither solid black nor blank). Keep the lower belly open white. The hero accents are the crisp broken white eye-ring, the slim bill, and the sharp eye. The slim legs and gripping feet are clean lines. One bold continuous contour around the upright robin and stub. Weight hierarchy: thick contour, dark head and wings, toned breast panel, white eye-arcs — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no worm, no grass, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-043 · European Goldfinch

*Carduelis carduelis* · IUCN LC · slug `european-goldfinch` · output `european-goldfinch_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body European goldfinch perched in left-facing profile on a slender stub, alert and delicate, styled as a crisp premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space, the small bird rendered large and bold. Render the defining anatomy: a pointed pale conical bill, the signature bold face pattern — a bright red mask around the bill (rendered as a clean reserved-or-toned facial block) framed by a white cheek and a black crown patch sweeping behind — a pale buff body, folded wings carrying a broad bold wing-bar, a notched tail, and slim feet gripping the stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the bold face mask and the wing-bar: render the black crown-and-nape patches and the wing's black ground as crisp solid black shapes, with the broad pale wing-bar reserved as a clean bright band across the folded wing (the defining flash) and the white cheek reserved open. The face mask is rendered as a clean bordered facial block framing the bill. The pale body stays mostly open white with fine directional contour hatch on the flanks and back. The pointed bill and the bright eye in the mask are crisp focal accents. One bold continuous contour around the perched goldfinch and slender stub. Weight hierarchy: thick contour, bold face mask, reserved wing-bar, open body — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no thistle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-044 · Barn Swallow

*Hirundo rustica* · IUCN LC · slug `barn-swallow` · output `barn-swallow_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a barn swallow in dynamic flight, wings swept back and the long forked tail streaming, seen from a side-three-quarter angle, styled as a graceful premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; the swept wings and forked tail give the composition motion. Render the defining anatomy: a small flat head with a short broad bill and a wide gape, a dark glossy back and wings, a pale underbody, the signature dark rufous throat-and-forehead patch (rendered as a clean dark bib), long pointed scythe-like wings, and the unmistakable deeply forked tail with long outer streamers. Pose conveys a swift aerial insect-hunter in a banking glide. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map is the clean dark-back / pale-underbody contrast plus the signature shapes: render the glossy back, head, and the upper surface of the long pointed wings as solid clean dark shapes with a few reserved sheen highlights and separated flight-feather blades, set against the pale open underbody (white with fine contour). The hero shapes are the long scythe wings and the deep forked tail with its streamers — keep both crisp and elegant. The dark throat bib and the small gape are focal accents. One bold continuous contour around the flying swallow, swept wings, and forked tail. Weight hierarchy: thick contour, dark back and wings, open underbody, forked-tail streamers — legible large and small. In flight, floating alone on blank white; no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no barn, no wires, no sky, no clouds, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-045 · Greater Bird-of-paradise

*Paradisaea apoda* · IUCN LC · slug `greater-bird-of-paradise` · output `greater-bird-of-paradise_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a male greater bird-of-paradise in full courtship display, perched and leaning forward with the spectacular flank plumes cascading up and over the back in a fountain, styled as an ornate showpiece premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space; the cascade of plumes is the spectacle. Render the defining anatomy: a slender body, a small head with a fine pointed bill and a velvety face, a compact neck-shawl, two long wire-like central tail streamers, and the signature enormous spray of long filmy ornamental flank plumes erupting from the sides and arching up over the back like a cascading fountain of fine feathers. The bird grips a perch stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the plume cascade: render the long filmy flank plumes as a flowing fountain of fine separated tapering feather-strokes, each plume a clean delicate blade with airy barb-hatch, arching and cascading — keep them separated and rhythmic so the lacy spray reads and traces. The compact body and head anchor the base — render the head and shawl as a structured dark mass with a crisp eye and fine bill, the two wire streamers as clean long lines. Concentrate density in the body; let the plume spray stay lighter and airy against the white. One bold continuous contour around the displaying bird and the cascading plumes. Weight hierarchy: thick body contour, airy separated plume spray, clean wire streamers — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no matted plumes, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-046 · Ruby-throated Hummingbird

*Archilochus colubris* · IUCN LC · slug `ruby-throated-hummingbird` · output `ruby-throated-hummingbird_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a ruby-throated hummingbird hovering in mid-air, body angled and the long bill forward, wings extended and held crisply (rendered as clean separated feather-blades, NOT motion blur), styled as a jewel-like premium woodcut emblem and upgraded natural-history engraving. Center the tiny bird large and bold in the frame with clean white space. Render the defining anatomy: an extremely long slender needle bill, a small rounded head, the signature gorget throat-patch (iridescent in life), a compact body, long narrow pointed wings spread to either side, tiny feet tucked, and a notched/forked tail. Pose conveys a precise hover. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: render the back and crown as a clean structured dark mass with overlapping scale-feather hatch, the wings as crisp separated stacked flight-feather blades (sharp, not blurred), and the tail as clean stacked blades. The hero accent is the gorget throat — render it as a bold clean dark patch with a fine internal facet-texture and a crisp lower border (the iridescent flash), the strongest mark on the bird, set against a paler breast. The needle bill is a bold clean fine line; the bright eye a crisp spark. Keep the underbody open white. One bold continuous contour around the hovering hummingbird and spread wings. Weight hierarchy: thick contour, dark structured back, crisp wing blades, bold gorget — legible large and small. In flight/hovering, floating alone on blank white; no flower, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no motion blur, no blurry edges, no flower, no nectar, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-047 · Belted Kingfisher

*Megaceryle alcyon* · IUCN LC · slug `belted-kingfisher` · output `belted-kingfisher_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body belted kingfisher perched upright in near-profile on a bare stub, big-headed and alert, styled as a crisp premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: an oversized head with the signature shaggy double-pointed crest, a long heavy dagger bill, a thick neck, a stocky compact body, the bold breast band (a dark chest collar) across a white throat and underparts, short folded wings, and short legs gripping the stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The density map: render the head, shaggy crest, back, and folded wings as the darker structured mass — the crest as bold separated spiky strokes, the back with overlapping covert scale-rows and a fine speckle of clean reserved white spots, the flight feathers as separated stacked blades — set against the white throat and underparts kept largely open, crossed by the bold dark breast band rendered as a crisp solid collar (the defining identifier). The hero is the heavy dagger bill and the big-headed proportion; the bright eye and the white throat-spot near the bill are crisp accents. One bold continuous contour around the upright kingfisher and stub. Weight hierarchy: thick contour, shaggy dark crest and back, bold breast band, open white underparts — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no water, no fish, no branch with leaves, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-048 · Pileated Woodpecker

*Dryocopus pileatus* · IUCN LC · slug `pileated-woodpecker` · output `pileated-woodpecker_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body pileated woodpecker clinging vertically to a bare trunk stub, braced on its stiff tail, head raised as if about to hammer, styled as a striking premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the spectacular tall flaming triangular red crest sweeping back off the crown, a long chisel-tipped bill, the bold black-and-white striped face pattern (a stripe through the eye and down the neck), a black body, a pale throat, folded black wings showing white wing-flashes, a stiff pointed propping tail, and strong zygodactyl feet gripping the vertical trunk. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms, vector-traceable. This subject is bold pied — render the black body, wings, and tail as clean solid black masses (with separated stacked flight-feather blades and reserved white wing-flashes), set against the crisp black-and-white facial stripes reserved sharp, and the pale throat open. The hero is the tall pointed crest — render it as a bold clean swept triangular shape (rendered dark since this is B&W, with a crisp carved edge), the dramatic silhouette read. The long chisel bill, the bright eye in its stripe, and the white wing-flashes are crisp focal accents. The bracing tail and gripping feet anchor the vertical pose. One bold continuous contour around the clinging woodpecker and trunk stub. Weight hierarchy: bold black/white pied masses, swept crest, crisp facial stripes — legible large and small. Clinging to a vertical trunk stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no red, no photographic realism, no soft feathers, no airbrush, no blurry edges, no forest, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-049 · Toco Toucan

*Ramphastos toco* · IUCN LC · slug `toco-toucan` · output `toco-toucan_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a full-body toco toucan perched in left-facing profile on a short stub, styled as a bold premium woodcut emblem and upgraded natural-history engraving. Center it in the frame with clean white space. Render the defining anatomy: the enormous signature oversized bill (huge, curved, with a dark tip), the bare skin patch around the eye, a rounded black head and body, the clean white throat-and-breast bib, short broad folded wings, a short tail, and zygodactyl feet gripping the stub. Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the giant bill — render it as a bold clean massive curved shape with a defined dark tip and a fine base-border where it meets the face, with the subtlest surface modeling so its bulk reads; it dominates the emblem. The density map is the bold black-body / white-bib contrast: render the black head, body, wings, and tail as clean solid black masses (with separated stacked flight-feather blades and a few reserved sheen highlights), set against the crisp reserved white throat-and-breast bib — the classic toucan two-tone. The bare eye-patch is rendered with fine clean skin-texture and a crisp eye. The gripping zygodactyl foot is a clean accent. One bold continuous contour around the perched toucan, the giant bill, and the stub. Weight hierarchy: hero giant bill, solid black body, reserved white bib — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no photographic realism, no soft feathers, no airbrush, no blurry edges, no jungle, no foliage, no fruit, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

### BQ-LINO-AVI-050 · Resplendent Quetzal

*Pharomachrus mocinno* · IUCN NT · slug `resplendent-quetzal` · output `resplendent-quetzal_linocut-bw_01.{png,svg}`

```text
Create a refined, high-contrast black-and-white vector-compatible linocut illustration of a male resplendent quetzal perched upright in near-profile on a stub, the spectacular tail-covert streamers cascading far down below, styled as the ornate finale premium woodcut emblem and upgraded natural-history engraving. Center it in a tall composition with clean white space to honor the streaming train. Render the defining anatomy: a rounded head bearing a fine bristly helmet-crest over a small bill, a large dark eye, a compact body with a full breast, short folded wings, and the unmistakable pair of extremely long flowing upper-tail-covert streamers trailing far below the perch in graceful curves (far longer than the body). Use pure black ink on pure white only — no grayscale, no color, no gradients, no painterly shading; closed forms and carved hatch, vector-traceable. The hero is the streaming train: render the two long tail-covert streamers as flowing clean ribbon-feathers with fine even barb-hatch along their length, curving and cascading down the tall composition — the defining ornament and silhouette. The body is rendered as a structured mass: the back and folded wings with clean overlapping scale-feather rows and separated flight-feather blades, the rounded breast as an even directional contour-hatch panel, the bristly crest as a fine clean helmet of short strokes over the crown. The small bill and the large dark eye are crisp focal accents. One bold continuous contour around the perched quetzal and the long cascading streamers. Weight hierarchy: thick contour, structured body, flowing barb-hatched streamers, crested head — legible large and small. Perched on a short stub; background blank white, no scene.
Negative prompt: no grayscale, no color, no green, no photographic realism, no soft feathers, no airbrush, no blurry edges, no jungle, no foliage, no sky, no border, no text, no extra animals, no cartoon proportions, no fluffy stipple, no random speckles, no ultra-thin lines, no fragmented outline.
```

## Roster Index

| ID  | Common name | Scientific name | Slug | IUCN* |
| --- | ----------- | --------------- | ---- | ----- |
| 001 | Bald Eagle | *Haliaeetus leucocephalus* | `bald-eagle` | LC |
| 002 | Golden Eagle | *Aquila chrysaetos* | `golden-eagle` | LC |
| 003 | Peregrine Falcon | *Falco peregrinus* | `peregrine-falcon` | LC |
| 004 | Red-tailed Hawk | *Buteo jamaicensis* | `red-tailed-hawk` | LC |
| 005 | Osprey | *Pandion haliaetus* | `osprey` | LC |
| 006 | Great Horned Owl | *Bubo virginianus* | `great-horned-owl` | LC |
| 007 | Barn Owl | *Tyto alba* | `barn-owl` | LC |
| 008 | Snowy Owl | *Bubo scandiacus* | `snowy-owl` | VU |
| 009 | Andean Condor | *Vultur gryphus* | `andean-condor` | VU |
| 010 | Secretarybird | *Sagittarius serpentarius* | `secretarybird` | EN |
| 011 | Mute Swan | *Cygnus olor* | `mute-swan` | LC |
| 012 | Canada Goose | *Branta canadensis* | `canada-goose` | LC |
| 013 | Mallard | *Anas platyrhynchos* | `mallard` | LC |
| 014 | Mandarin Duck | *Aix galericulata* | `mandarin-duck` | LC |
| 015 | Greater Flamingo | *Phoenicopterus roseus* | `greater-flamingo` | LC |
| 016 | Great Blue Heron | *Ardea herodias* | `great-blue-heron` | LC |
| 017 | Grey Crowned Crane | *Balearica regulorum* | `grey-crowned-crane` | EN |
| 018 | White Stork | *Ciconia ciconia* | `white-stork` | LC |
| 019 | Roseate Spoonbill | *Platalea ajaja* | `roseate-spoonbill` | LC |
| 020 | Shoebill | *Balaeniceps rex* | `shoebill` | VU |
| 021 | Atlantic Puffin | *Fratercula arctica* | `atlantic-puffin` | VU |
| 022 | Wandering Albatross | *Diomedea exulans* | `wandering-albatross` | VU |
| 023 | Brown Pelican | *Pelecanus occidentalis* | `brown-pelican` | LC |
| 024 | Northern Gannet | *Morus bassanus* | `northern-gannet` | LC |
| 025 | Indian Peafowl | *Pavo cristatus* | `indian-peafowl` | LC |
| 026 | Wild Turkey | *Meleagris gallopavo* | `wild-turkey` | LC |
| 027 | Red Junglefowl | *Gallus gallus* | `red-junglefowl` | LC |
| 028 | Ring-necked Pheasant | *Phasianus colchicus* | `ring-necked-pheasant` | LC |
| 029 | Common Ostrich | *Struthio camelus* | `common-ostrich` | LC |
| 030 | Emu | *Dromaius novaehollandiae* | `emu` | LC |
| 031 | Southern Cassowary | *Casuarius casuarius* | `southern-cassowary` | LC |
| 032 | Emperor Penguin | *Aptenodytes forsteri* | `emperor-penguin` | NT |
| 033 | Southern Brown Kiwi | *Apteryx australis* | `southern-brown-kiwi` | VU |
| 034 | Scarlet Macaw | *Ara macao* | `scarlet-macaw` | LC |
| 035 | Sulphur-crested Cockatoo | *Cacatua galerita* | `sulphur-crested-cockatoo` | LC |
| 036 | African Grey Parrot | *Psittacus erithacus* | `african-grey-parrot` | EN |
| 037 | Kakapo | *Strigops habroptilus* | `kakapo` | CR |
| 038 | Common Raven | *Corvus corax* | `common-raven` | LC |
| 039 | Eurasian Magpie | *Pica pica* | `eurasian-magpie` | LC |
| 040 | Blue Jay | *Cyanocitta cristata* | `blue-jay` | LC |
| 041 | Northern Cardinal | *Cardinalis cardinalis* | `northern-cardinal` | LC |
| 042 | American Robin | *Turdus migratorius* | `american-robin` | LC |
| 043 | European Goldfinch | *Carduelis carduelis* | `european-goldfinch` | LC |
| 044 | Barn Swallow | *Hirundo rustica* | `barn-swallow` | LC |
| 045 | Greater Bird-of-paradise | *Paradisaea apoda* | `greater-bird-of-paradise` | LC |
| 046 | Ruby-throated Hummingbird | *Archilochus colubris* | `ruby-throated-hummingbird` | LC |
| 047 | Belted Kingfisher | *Megaceryle alcyon* | `belted-kingfisher` | LC |
| 048 | Pileated Woodpecker | *Dryocopus pileatus* | `pileated-woodpecker` | LC |
| 049 | Toco Toucan | *Ramphastos toco* | `toco-toucan` | LC |
| 050 | Resplendent Quetzal | *Pharomachrus mocinno* | `resplendent-quetzal` | NT |

*IUCN column is indicative and must be validated against the live Red List
before publication. Conservation spread: 1 CR (kakapo), 3 EN, 6 VU, 2 NT,
remainder LC.

## Sign-off

Avian Beasts linocut library — 50 of 50 authored, house spec carried
forward, four-posture field rule and feather-tract density maps locked.
Third of the seven BEASTIQUE collections. Trace baseline expected to defect
here first: ease Speckles and Optimize for fine feather work.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
