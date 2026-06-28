<!--
✒ Metadata
    - Title: Remarkable Facts Image Prompts (BEASTIQUE Edition - v1.0)
    - File Name: beluga-sturgeon-fact-image-prompts.md
    - Relative Path: beluga-sturgeon\docs\beluga-sturgeon-fact-image-prompts.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2026-02-17
    - Update: Tuesday, February 17, 2026
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.6
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Image generation prompts for the six Remarkable Facts circular illustrations
    on the Beluga Sturgeon (Huso huso) species profile page. Each prompt is
    calibrated to match the page's cinematic dark-ocean aesthetic, the copper-rose
    hero image palette, and the circular crop format of the fact icon containers.

✒ Key Features:
    - Feature 1: Six primary prompts matched to exact webpage CSS palette
    - Feature 2: Two alternate prompts per fact for creative variation
    - Feature 3: Composition notes for circular crop compatibility
    - Feature 4: Negative prompt guidance to maintain aesthetic consistency
    - Feature 5: Platform-agnostic (Midjourney, DALL-E, Stable Diffusion, Flux)
    - Feature 6: Color-matched to --color-abyss, --color-deep, --color-teal, --color-coral
---------
-->

# Beluga Sturgeon — Remarkable Facts Image Prompts

## Page Aesthetic DNA

### CSS Palette (source of truth)

| CSS Variable             | Hex         | Role in Prompts                       |
| ------------------------ | ----------- | ------------------------------------- |
| `--color-abyss`        | `#0a1628` | Edge vignette, void, deepest shadows  |
| `--color-deep`         | `#0d1f35` | Mid-ground water, atmospheric depth   |
| `--color-ocean`        | `#143a52` | Ambient fill, underwater atmosphere   |
| `--color-teal`         | `#1a5f6a` | Current circle bg — match or replace |
| `--color-coral`        | `#d4565c` | Warm accent, organic highlights       |
| `--color-coral-soft`   | `#e07a7f` | Flesh tones, copper-rose glow         |
| `--color-coral-bright` | `#ff6b6b` | Hottest highlights, life force        |
| `--color-pearl`        | `#f5f0e8` | Brightest point, catch-light          |
| `--color-silver`       | `#c4d4dc` | Cool metallic, bone, ancient surfaces |

### Hero Image Reference

The hero sturgeon is rendered in warm copper-burgundy tones against deep ocean
darkness — the fish looks almost forged from the luxury materials extracted from
its body. This tension between warm organic subject and cold abyss environment
is the signature of the page. Every fact image must echo this relationship.

### Circular Crop Constraints

* **Canvas** : 1024×1024px minimum (renders at ~120–200px on desktop)
* **Crop** : CSS `border-radius: 50%` — corners are fully clipped
* **Safe zone** : Keep all critical detail within the center 75% diameter
* **Edge treatment** : Heavy vignette to `#0a1628` at edges so the circle
  dissolves seamlessly into the `--color-abyss` page background
* **Focal point** : Single centered subject — no competing elements at margins

### Style Direction

Painterly digital illustration. Natural history museum meets cinematic concept
art. NOT photorealistic, NOT cartoonish. Think: the illustration style of a
premium National Geographic special issue, lit like a Ridley Scott underwater
sequence. Every image should feel like it belongs in the same gallery as the
hero sturgeon rendering.

### Global Negative Prompt

Append to every generation:

```text
No text, no labels, no watermarks, no borders, no frames, no white backgrounds,
no bright saturated backgrounds, no cartoon style, no flat illustration, no
clipart, no stock photo feel, no busy backgrounds, no multiple competing
subjects, no cheerful lighting, no surface-level water with sky visible
```

---

## Fact 01 — Boneless Giant

> *"Its skeleton is made entirely of cartilage, similar to sharks."*

### Primary Prompt

```text
A ghostly translucent cross-section of a sturgeon's cartilaginous skeleton,
floating in dark abyssal water. The flexible cartilage framework glows from
within with soft blue-white bioluminescence — vertebral column, gill arches, and
skull capsule all visible as a delicate crystalline lattice. Warm copper-rose
highlights (#e07a7f) trace the edges where internal light refracts through the
translucent tissue. The surrounding water is inky midnight navy (#0a1628) fading
to deep teal (#143a52) in the mid-ground, with fine suspended particles catching
faint light like deep-sea snow. Single overhead light source creating subtle
god-rays through the translucent body. Heavy dark vignette at all edges.
Painterly digital illustration, museum anatomical exhibit quality, dramatic
chiaroscuro, centered composition optimized for circular crop. 1024x1024.
```

### Alternate A — Cathedral Ribbing

```text
Extreme close-up from below, looking up into the underside of a sturgeon's head
showing the cartilage gill arch structure fanning outward symmetrically like
gothic cathedral vaulting. The cartilage rendered in pale silver-pearl (#c4d4dc)
with translucent amber-coral internal glow (#e07a7f). Four sensory barbels hang
downward as delicate tendrils at the bottom of frame. Background is pure deep
ocean void (#0d1f35). The biological architecture reads as sacred geometry.
Painterly anatomical illustration, dramatic backlighting, dark vignette edges,
centered symmetrical composition for circular crop. 1024x1024.
```

### Alternate B — Shark Parallel

```text
Split composition: left half shows a ghostly sturgeon skull in translucent
cartilage, right half shows a shark skull in matching translucent cartilage,
mirrored like evolutionary twins. Both rendered in silvery-blue luminescence
against total darkness (#0a1628). A thin vertical line of warm coral light
(#d4565c) separates the two, suggesting a shared ancient lineage. Scattered
deep-sea particles in the water column. Moody, scientific, contemplative.
Painterly digital illustration, museum diorama lighting, centered composition
for circular crop. 1024x1024.
```

---

## Fact 02 — Liquid Gold

> *"Beluga caviar can fetch prices exceeding $10,000 per kilogram."*

### Primary Prompt

```text
A cascade of beluga caviar eggs spilling downward through dark water, each
individual egg rendered as a tiny sphere of deep amber-black with a luminous
golden core, resembling black pearls filled with molten gold. The eggs catch a
single shaft of warm overhead light, creating rich specular highlights in
copper-rose (#e07a7f) and pearl-white (#f5f0e8). Some eggs in sharp focus in
the center, others dissolving into soft bokeh at the edges. The surrounding
water is midnight navy void (#0a1628). The overall impression is precious
gemstones raining through darkness — beautiful and deeply unsettling. No
container, no spoon, no human elements. Painterly digital illustration,
luxury product photography lighting applied to natural subject, heavy dark
vignette, centered downward-cascade composition for circular crop. 1024x1024.
```

### Alternate A — The Price Inside

```text
A single massive beluga caviar egg in extreme macro, filling most of the frame.
The egg is rendered as a translucent dark sphere — like a black pearl with depth.
Inside, visible through the membrane, is a warm golden embryonic glow (#e07a7f
to #ff6b6b at its brightest point). The egg sits on a bed of fine river
sediment. Surrounding water is dark teal (#143a52) fading to abyss (#0a1628).
Tiny particles of silt suspended around it catch faint light. The single egg
as a world unto itself — one life worth more dead than alive. Painterly macro
illustration, dramatic single-source lighting from above, heavy vignette,
centered composition for circular crop. 1024x1024.
```

### Alternate B — Weight of Roe

```text
The silhouette of a large female sturgeon seen from the side in deep dark water,
her belly visibly distended and heavy. Through the silhouette, her egg mass
glows warmly from within — hundreds of thousands of tiny amber-gold points of
light visible through the dark skin, like a galaxy contained inside a living
body. The warm internal glow (#d4565c to #e07a7f) contrasts against the cold
surrounding navy-teal water (#0d1f35). She is swimming slowly, burdened.
Painterly digital illustration, dramatic rim-lighting along the dorsal edge
in cool silver (#c4d4dc), heavy dark vignette, subject centered for circular
crop. 1024x1024.
```

---

## Fact 03 — Epic Migrations

> *"They traveled up to 1,000 kilometers upstream in the Volga, Danube,
> and Ural rivers."*

### Primary Prompt

```text
An aerial-perspective view looking down into a dark river channel that glows
faintly with deep teal bioluminescence (#1a5f6a). A single massive sturgeon
silhouette moves upstream, its path traced by a long trailing wake of warm
copper-coral luminous particles (#d4565c to #e07a7f) that map its migration
route like a living GPS trail. The river channel winds from bottom of frame
upward and fades into darkness at the top — the journey disappearing into the
unknown. River banks are barely visible as dark masses (#0a1628). The sturgeon
itself is a dark form with faint silver scute highlights (#c4d4dc) along its
ridgeline. Painterly digital illustration, map-like aerial perspective with
painterly atmosphere, heavy dark vignette at edges, subject centered in lower
third moving upward for circular crop. 1024x1024.
```

### Alternate A — Blocked Passage

```text
Underwater perspective: a massive sturgeon faces a concrete dam wall that fills
the upper portion of the frame — cold, grey, industrial, unyielding. The fish
is rendered in warm copper-rose tones (#e07a7f body, #c4d4dc scutes), alive
and vital against the dead concrete. The dam surface is rendered in cold
blue-grey, scarred and algae-streaked. Between fish and wall: a narrow gap of
dark water (#0d1f35) — the impossible distance. Faint current lines flow
against the sturgeon. Painterly digital illustration, dramatic confrontational
composition, emotional tension between organic warmth and industrial cold,
heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate B — River Memory

```text
A ghostly double-exposure effect: the foreground shows a sturgeon swimming
through dark water, rendered in warm copper-silver tones. Superimposed through
the body, visible like a memory or map, is a branching river delta system
rendered as luminous teal-coral veins (#1a5f6a channels, #d4565c tributaries).
The river system inside the fish mirrors its circulatory system — the fish IS
the river, the river IS the fish. Surrounding darkness is deep navy (#0a1628).
Painterly digital illustration, ethereal double-exposure technique, contemplative
and poetic, heavy dark vignette, centered for circular crop. 1024x1024.
```

---

## Fact 04 — Sensory Masters

> *"Electroreceptors along their body sense the electrical fields generated
> by other organisms."*

### Primary Prompt

```text
Close-up of a sturgeon's snout from a three-quarter angle, the four barbels
extended downward into murky water. From each barbel tip and from clusters of
electroreceptor pores across the snout surface, delicate arcs of electricity
radiate outward — rendered as fine luminous coral-orange filaments (#d4565c to
#ff6b6b) that pulse and branch like neural lightning against the dark water.
The surrounding murk is deep teal-navy (#0d1f35 to #143a52) with suspended
sediment particles. The sturgeon's skin texture is rendered in muted
copper-silver (#664f5f to #c4d4dc), rough and ancient. The electrical field
visualization creates a warm halo around the cold-water subject. Painterly
digital illustration, scientific visualization meets fine art, dramatic close-up
with shallow depth of field, heavy dark vignette, centered for circular crop.
1024x1024.
```

### Alternate A — Electric Field Map

```text
A sturgeon viewed from directly above (dorsal view), its full body visible as a
dark elongated form. Radiating outward from the body in all directions is a
symmetrical electromagnetic field visualization — concentric rings and flowing
field lines rendered in warm coral gradients (#d4565c at center fading to
#e07a7f then to transparent). The field lines distort around small hidden prey
organisms (tiny bright points in the sediment). Background is pure deep navy
(#0a1628) representing the dark river bottom. The effect resembles thermal
imaging or sonar — a hidden sense made visible. Painterly scientific
illustration, top-down composition, heavy dark vignette, centered symmetrical
for circular crop. 1024x1024.
```

### Alternate B — Hunting in Darkness

```text
A murky underwater scene, nearly pitch black. In the center, the faint outline
of a sturgeon's head emerges from total darkness, just barely visible. The ONLY
light sources are the tiny electrical signatures of buried prey organisms in the
sediment below — rendered as small warm coral-gold sparks (#ff6b6b, #e07a7f)
scattered across the river bottom. Fine luminous threads connect these sparks
to the sturgeon's rostrum, showing the electroreceptive detection pathways.
Almost everything is in darkness except these connections. Painterly digital
illustration, extreme low-light atmosphere, tension and mystery, heavy vignette
(most of the frame IS the vignette), centered for circular crop. 1024x1024.
```

---

## Fact 05 — Armored Ancestors

> *"Five rows of bony plates called scutes run along the beluga's body."*

### Primary Prompt

```text
An extreme close-up of a sturgeon's flank showing the distinctive rows of bony
scutes in extraordinary detail. Each scute is rendered as an ancient shield —
textured like weathered bronze and fossilized bone, with visible growth rings
and battle scars accumulated over decades. The scutes catch warm side-lighting
in copper-rose (#e07a7f) along their raised edges while their recessed surfaces
hold deep teal shadow (#143a52). Between the scutes, the rough shark-like skin
is visible in muted silver (#c4d4dc). The lighting rakes across the surface at
a low angle, dramatizing every ridge and plate. Background dissolves into deep
navy water (#0a1628). Painterly digital illustration, museum specimen detail
level, macro photography aesthetic with painterly rendering, heavy dark vignette,
centered composition for circular crop. 1024x1024.
```

### Alternate A — Five Ridgelines

```text
A cross-section diagram of a sturgeon's body viewed from the front (anterior
view), showing the five distinct rows of scutes in their correct anatomical
positions — one dorsal row along the spine, two lateral rows along each flank,
and two ventral-lateral rows along the belly. The scutes are rendered as
luminous amber-copper plates (#e07a7f) embedded in the dark body form (#0d1f35),
glowing like armored jewels set into ancient skin. The body outline is rendered
in silver (#c4d4dc). Surrounding space is deep void (#0a1628) with faint
anatomical guide lines in dim teal (#1a5f6a). Painterly anatomical illustration,
scientific cross-section meets fine art, centered symmetrical composition for
circular crop. 1024x1024.
```

### Alternate B — Fossil Echo

```text
A split-time composition: the left half shows a living sturgeon scute in warm
copper-rose flesh tones (#e07a7f, #664f5f), glistening wet with river water.
The right half shows an identical scute fossilized in stone — the same shape,
the same ridges, but rendered in pale limestone and amber fossil preservation
(#c4d4dc, muted ochre). The two halves are separated by a thin luminous
teal line (#1a5f6a). The message: 200 million years and the design hasn't
changed. Background is deep navy (#0a1628). Painterly digital illustration,
time-comparison concept, museum exhibit quality, centered for circular crop.
1024x1024.
```

---

## Fact 06 — Record Breakers

> *"The largest beluga sturgeon ever recorded measured 7.2 meters and weighed
> 1,571 kilograms."*

### Primary Prompt

```text
A truly massive beluga sturgeon emerging from total darkness, rendered at an
extreme low angle looking upward to emphasize its impossible scale. The fish
fills nearly the entire frame — ancient, scarred, enormous. Its body is rendered
in weathered copper-bronze (#664f5f to #e07a7f) with silver-pearl scute
highlights (#c4d4dc to #f5f0e8) that catch overhead light. The mouth is
slightly open, revealing the toothless cartilaginous jaw. The sheer mass of
the animal distorts the water around it — visible compression waves. Below and
behind the fish: nothing but deep abyss (#0a1628). A single shaft of light
from above illuminates the head and forward body while the tail disappears
into darkness — the fish is too large to fit in the light. Painterly digital
illustration, cathedral-scale reverence, dramatic low-angle heroic composition,
heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate A — The Last Measurement

```text
A faded, ghostly outline of the record 7.2-meter sturgeon rendered as a pale
silver-pearl wireframe (#c4d4dc at 40% opacity) floating in dark water
(#0a1628). Within and around this ghost outline, a modern living sturgeon is
shown at roughly half the size — solid, warm, copper-rose (#e07a7f), alive but
diminished. The size difference between ghost and living fish tells the entire
story without words. Faint measurement lines in dim teal (#1a5f6a) suggest
scientific documentation. The ghost of what was; the reality of what remains.
Painterly digital illustration, data visualization meets elegy, contemplative
composition, heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate B — Leviathan Portrait

```text
A frontal portrait of an enormous beluga sturgeon face, staring directly at
the viewer. The broad flat head fills the frame. Ancient eyes — small, dark,
knowing — sit on either side of the massive rostrum. The four barbels hang
below like a patriarch's whiskers. The skin is rendered in every shade of the
page palette: deep navy in the shadows (#0d1f35), teal in the mid-tones
(#143a52), copper-coral in the warm-lit areas (#e07a7f), silver-pearl on the
scute highlights (#c4d4dc). The expression is not threatening — it is patient,
ancient, weary. It has seen everything. Surrounding water is pure dark void
(#0a1628). Painterly digital portrait, intimate and confrontational,
Rembrandt-style single-source lighting from upper left, heavy dark vignette,
face centered for circular crop. 1024x1024.
```

---

## Implementation Notes

### Generation Order Recommendation

For visual coherence across all six, generate in this order:

1. **Fact 06** (Record Breakers) — establishes the full-body sturgeon rendering
   style and lighting
2. **Fact 05** (Armored Ancestors) — macro detail of the same body, confirms
   texture language
3. **Fact 04** (Sensory Masters) — snout close-up, confirms face rendering
4. **Fact 01** (Boneless Giant) — translucent skeleton variant uses established
   body form as base
5. **Fact 03** (Epic Migrations) — environmental/atmospheric, uses silhouette
   of established form
6. **Fact 02** (Liquid Gold) — caviar-focused, most abstract/independent from
   body rendering

### Color Consistency Checklist

After generating all six, verify:

* [ ] All backgrounds dissolve to `#0a1628` (--color-abyss) at edges
* [ ] Warm accents stay within coral family (`#d4565c` → `#e07a7f` → `#ff6b6b`)
* [ ] Cool tones stay within teal-navy family (`#0d1f35` → `#143a52` → `#1a5f6a`)
* [ ] Silver-pearl highlights (`#c4d4dc` → `#f5f0e8`) appear sparingly
* [ ] No image introduces colors outside the page palette
* [ ] Circular crop test: all six look cohesive at 150px diameter side by side

### CSS Integration

Replace the current SVG icon setup:

```css
.fact-card__circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    /* Remove existing background/border styles */
    /* Remove SVG icon display */
}

.fact-card__circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

```html
<!-- Replace SVG icon block with: -->
<div class="fact-card__circle">
    <img src="assets/images/facts/fact-01-boneless-giant.jpg"
         alt="Translucent sturgeon cartilage skeleton glowing in deep water"
         loading="lazy"
         width="240"
         height="240">
</div>
```

### File Naming Convention

```text
assets/images/facts/
├── fact-01-boneless-giant.jpg
├── fact-02-liquid-gold.jpg
├── fact-03-epic-migrations.jpg
├── fact-04-sensory-masters.jpg
├── fact-05-armored-ancestors.jpg
└── fact-06-record-breakers.jpg
```

Export at 1024×1024 PNG, then convert to WebP at quality 85 for production.
Keep PNG originals in a `_source/` directory for future edits.
