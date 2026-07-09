<!--
✒ Metadata
    - Title: Remarkable Facts Image Prompts (BEASTIQUE Edition - v1.0)
    - File Name: leatherback-sea-turtle-fact-image-prompts.md
    - Relative Path: site/species/leatherback-sea-turtle/docs/leatherback-sea-turtle-fact-image-prompts.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Image-generation prompts for the six Remarkable Facts material renders
    (plus the framed closing plate) on the Leatherback Sea Turtle (Dermochelys
    coriacea) profile page. Calibrated to the page's "Tanned Depths" aesthetic:
    warm tanned-leather and bronze creatures suspended in a cold, deep-green
    ocean, matching the hero plate and the fact containers.

✒ Key Features:
    - Feature 1: Palette locked to the page CSS (leather warms over teal-green cold)
    - Feature 2: Primary + one alternate per fact for re-roll variety
    - Feature 3: Square artboard composition notes for page-ready source images
    - Feature 4: Global negative prompt for aesthetic consistency
    - Feature 5: Hero-matched visual DNA notes for the studio render pipeline
---------
-->

# Leatherback Sea Turtle — Remarkable Facts Image Prompts

## Page Aesthetic DNA

### CSS Palette (source of truth)

| CSS Variable           | Hex         | Role in Prompts                         |
| ---------------------- | ----------- | --------------------------------------- |
| `--color-deep`         | `#0a1816`   | Deep-water mid-ground                    |
| `--color-ocean`        | `#123330`   | Ambient fill, murky teal-green water     |
| `--color-teal`         | `#2b6157`   | Living sea-green accent                  |
| `--color-coral`        | `#c0894c`   | Tanned saddle-leather — primary warm      |
| `--color-coral-soft`   | `#d4a268`   | Soft tan, supple leather flesh           |
| `--color-coral-bright` | `#e8c487`   | Bright sand-gold — hottest highlight      |
| `--color-pearl`        | `#f2ead7`   | Brightest catch-light, parchment         |
| `--color-silver`       | `#aec4bc`   | Cool sea-mist, bone, brushed metal       |

### Hero Image Reference

The hero leatherback is rendered as if **forged from tanned leather and bronze** —
the carapace a hull of stitched, oil-darkened leather panels with raised ridges,
metallic bronze edging on the flippers, suspended in cold green water over a pale
rippled seabed. The signature tension: a **warm, hand-crafted leather creature**
inside a **cold, vast, indifferent ocean**. Every fact image must echo that
relationship — warm material subject, cold deep-green environment.

Ignore the ornate frame around the hero. It is page chrome, not part of the image
DNA, and must never be generated into fact images or the closing plate.

### Square Artboard Guidance

* **Canvas:** 1024×1024 px
* **Post-processing:** the page handles any final presentation treatment
* **Composition:** keep the subject comfortably inside the square with natural
  breathing room
* **Lighting:** use the hero image's clear underwater realism — visible midtones,
  pale seabed when useful, suspended particles, and natural water haze
* **Do not bake presentation effects into the render:** generate clean full-square
  underwater artwork with no border and no frame

### Style Direction

Crisp cinematic material-render realism; the BEASTIQUE "material audit" language —
the animal and its world rendered in precious and industrial materials humans
extract: **tanned leather, aged bronze, brushed steel, oiled hide, bone-ivory.**
Natural-history-museum specimen craft meets luxury creature photography, lit like
a clear deep-sea sequence. Prioritize sharp edges, readable silhouettes, glossy
oil-darkened leather grain, raised stitching, rivets, bronze rim highlights,
visible suspended particles, and clean teal water separation.

NOT painterly, NOT watercolor, NOT washed out, NOT muddy, NOT cartoonish, NOT flat
vector. Every image must sit in the same gallery as the hero plate's inner
underwater artwork, without reproducing the external frame.

### Global Negative Prompt

Append to every generation:

```text
No text, no labels, no watermarks, no borders, no UI frames, no ornate frame,
no leather border, no chain border, no white or bright saturated backgrounds,
no sky or water surface with daylight, no cartoon style, no flat vector
illustration, no clipart, no stock-photo look, no soft painterly brushwork,
no watercolor wash, no muddied low-contrast rendering, no busy backgrounds,
no multiple competing subjects, no cheerful lighting, no human figures, no boats
```

---

## Fact 01 — The Shell That Isn't

> *"No hard shell — a flexible mosaic of bone under ridged, leathery skin."*

### Primary Prompt

```text
Extreme close-up of a leatherback sea turtle's carapace rendered as a hull of
tanned, oil-darkened leather — seven long raised ridges running away from the
viewer like the keels of a ship, the skin stitched and seamed in saddle-leather
tan (#c0894c) and soft hide (#d4a268), bronze rivets catching a single overhead
light along the ridge crests (#e8c487). Beneath a torn seam, a glimpse of the
pale bone-mosaic underneath in cool ivory-silver (#aec4bc). Surrounding water is
clear teal-green (#123330) water with natural depth falloff, fine suspended
particles drifting, and hero-like underwater haze. Crisp cinematic material
render, museum-specimen detail, raking low-angle light, full-square composition.
1024x1024.
```

### Alternate — Skin-Turtle Etymology

```text
A single leatherback ridge in macro, the leather hide peeled back at one edge to
reveal the underlying jigsaw of tiny polygonal bones, like bronze plates set in
dark leather. Warm tan and bronze (#c0894c, #e8c487) against deep teal water
shadow (#0a1816). Crisp anatomical material render, dramatic single-source light,
natural underwater background, full-square composition. 1024x1024.
```

---

## Fact 02 — Into the Crushing Deep

> *"The deepest-diving reptile alive — recorded at 1,280 metres."*

### Primary Prompt

```text
A leatherback sea turtle, body of tanned leather and bronze, descending steeply
into the deep — seen from below as a powerful silhouette against a
single soft shaft of cold light far above. Its leather carapace and long
flippers catch the last green-tinged light in warm tan highlights (#c0894c,
#e8c487) along the top edges while the underside remains readable in deep
green-blue shadow (#0a1816). The water shifts naturally from lit teal (#123330)
to darker depth below without an artificial corner treatment.
Faint pressure-compression lines and a few rising bubbles in cool silver
(#aec4bc). Crisp cinematic material render, cathedral-scale depth and reverence,
dramatic downward composition, full-square artwork.
1024x1024.
```

### Alternate — Twilight-Zone Descent

```text
Distant downward view of a tiny leatherback silhouette sinking through a column
of deepening teal-green water (#2b6157 to #050d0c), depth marked by faint drifting
marine snow in silver (#aec4bc). The turtle is small, warm-lit (#d4a268), utterly
alone in immense cold water. Crisp cinematic realism, atmospheric, scale-and-solitude,
full-square artwork. 1024x1024.
```

---

## Fact 03 — Warm Heart in Cold Seas

> *"Gigantothermy keeps it up to 18°C warmer than the water around it."*

### Primary Prompt

```text
A leatherback sea turtle of tanned leather and bronze swimming through frigid,
near-arctic water, a warm amber-gold glow (#e8c487 to #c0894c) radiating outward
from deep within its core and chest, diffusing into the surrounding cold. The water
is icy deep teal-green (#123330) with faint pale ice-light and suspended silver
particles (#aec4bc). The contrast of inner warmth against outer cold
is the whole image — a furnace wrapped in leather, moving through the freezing
water. Crisp cinematic material render, thermal-glow concept, full-square artwork.
1024x1024.
```

### Alternate — Countercurrent Flippers

```text
Close study of a leatherback's long front flipper, rendered in supple tan leather
(#c0894c) with bronze edging, faint warm vascular lines glowing beneath the hide
like heated wire (#e8c487) against cold teal water (#0a1816). Crisp
scientific-meets-luxury-material render, dramatic side light, natural underwater
background, full-square artwork. 1024x1024.
```

---

## Fact 04 — Built to Swallow the Sea

> *"Backward-pointing throat spines trap jellyfish; floating plastic is fatal."*

### Primary Prompt

```text
Looking into the open mouth and throat of a leatherback sea turtle, the gullet
lined with hundreds of backward-pointing keratin spines (papillae) rendered as
rows of bronze and bone-ivory thorns (#aec4bc, #e8c487) receding into shadow. A
single translucent jellyfish drifts at the entrance, faintly lit. The leather jaw
and skin frame the opening in tan and dark hide (#c0894c, #0a1816). Surrounding
water clear murky teal-green (#123330) with natural underwater depth. Unsettling,
beautiful, biological. Crisp cinematic material render, dramatic interior lighting,
full-square artwork. 1024x1024.
```

### Alternate — The Fatal Mistake

```text
A leatherback turtle of tanned leather approaching a single translucent drifting
shape in dark green water — half jellyfish, half ghostly plastic bag, ambiguous
and pale (#aec4bc) against the deep (#050d0c). Warm leather subject (#c0894c),
cold water, quiet dread. Crisp cinematic material render, natural underwater
background, full-square artwork. 1024x1024.
```

---

## Fact 05 — The Ocean Wanderer

> *"Transoceanic migrations up to 16,000 km — the most wide-ranging reptile."*

### Primary Prompt

```text
Aerial cinematic view down onto a vast dark-green ocean (#123330 to #050d0c), a
single leatherback sea turtle of tanned leather and bronze crossing the composition,
trailing a long luminous migration wake of warm gold particles (#e8c487 to
#c0894c) that curves across the open water like a charted course on an old map.
The turtle is small against the immensity, purposeful. Faint cool current lines
in silver (#aec4bc). Crisp cinematic material render, map-like aerial atmosphere,
full-square artwork with natural water lighting. 1024x1024.
```

### Alternate — Compass of the Open Blue

```text
A leatherback turtle in profile crossing endless deep teal-green water, a faint
compass-rose of warm bronze light (#e8c487) overlaid like a navigator's chart
around it, dissolving into deep teal water (#123330). Warm leather subject (#c0894c).
Crisp cinematic material render, contemplative, full-square artwork. 1024x1024.
```

---

## Fact 06 — Survivor of Deep Time

> *"Sole survivor of a 100-million-year lineage that outlasted the dinosaurs."*

### Primary Prompt

```text
A leatherback sea turtle of tanned leather and aged bronze rendered as an ancient
relic surfacing from deep geological time — its leather hide weathered, cracked,
and patinated like a museum artifact, bronze ridges gone green-gold with age. It
emerges from layered, fossil-toned dark water (#0a1816, #123330) where faint
ghostly silhouettes of mosasaurs and ammonites dissolve in the silver-misted
background (#aec4bc). Warm tan and gold highlights (#c0894c, #e8c487) on the
leading edges. Crisp cinematic material render, deep-time reverence, museum-relic
texture, full-square artwork with natural underwater lighting. 1024x1024.
```

### Alternate — Unchanged by Eons

```text
Split composition: a fossilized leatherback impression in pale stone and patinated
bronze on one side, a living leather-clad leatherback on the other, near-identical
across a hundred million years, divided by a faint teal seam (#2b6157). Deep teal
underwater background (#123330). Warm leather (#c0894c) vs cool fossil silver
(#aec4bc). Crisp cinematic material render, time-comparison concept, full-square
artwork. 1024x1024.
```

---

## Closing Plate — Framed Showcase

> Square (1024×1024), presented inside the page's ornate frame.

### Primary Prompt

```text
A reverent full-body portrait of a leatherback sea turtle rendered as a masterwork
of tanned leather and bronze — the seven-ridged leather carapace gleaming with
oiled highlights, long bronze-edged flippers spread mid-glide, suspended in deep,
still teal-green water (#123330 to #050d0c) over a barely-visible pale rippled
seabed. A single shaft of cold light from above catches the leather in warm tan
and gold (#c0894c, #e8c487); the depths fall away to black. Museum-plate
composition, calm and monumental, natural underwater atmosphere, centered subject.
Crisp cinematic material render, luxury-artifact reverence. 1024x1024.
```

---

## Studio / Forge Mapping

These are full-color cinematic material renders (NOT B&W trace styles). The forge-ready
twin lives at `studio/prompts/specimen/leatherback_specimen_prompts.md`
(`--style specimen`), rendering to
`studio/collections/reptilian-beasts/specimen/<quality>/`. After review, the
keepers are copied into this page's `assets/images/` as:

```text
assets/images/
├── hero.png                          (already placed — featured plate)
├── closing.png                       (Closing Plate)
└── facts/
    ├── fact-01-leather-shell.png
    ├── fact-02-deep-dive.png
    ├── fact-03-warm-blooded.png
    ├── fact-04-jellyfish-hunter.png
    ├── fact-05-ocean-wanderer.png
    └── fact-06-deep-time.png
```

Render at 1024×1024 PNG; convert to WebP (quality ~85) for production if desired.
