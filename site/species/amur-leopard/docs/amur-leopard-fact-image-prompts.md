<!--
✒ Metadata
    - Title: Remarkable Facts Image Prompts (BEASTIQUE Edition - v1.2)
    - File Name: amur-leopard-fact-image-prompts.md
    - Relative Path: amur-leopard\docs\amur-leopard-fact-image-prompts.md
    - Artifact Type: docs
    - Version: 1.2.0
    - Date: 2026-02-18
    - Update: Wednesday, February 18, 2026
    - Author: Dennis 'dnoice' Smaltz
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Image generation prompts for the six Remarkable Facts rosette illustrations
    on the Amur Leopard (Panthera pardus orientalis) species profile page. Each
    prompt is calibrated to match the page's "Siberian Twilight" aesthetic, the
    warm amber-gold hero image palette, and the rosette-ring circular crop format
    of the fact containers.

✒ Key Features:
    - Feature 1: Six primary prompts matched to exact webpage CSS palette
    - Feature 2: Two alternate prompts per fact for creative variation
    - Feature 3: Composition notes for rosette circular crop compatibility
    - Feature 4: Negative prompt guidance to maintain aesthetic consistency
    - Feature 5: Platform-agnostic (Midjourney, DALL-E, Stable Diffusion, Flux)
    - Feature 6: Color-matched to --color-shadow, --color-dusk, --color-amber, --color-ivory
    - Feature 7: Filter-audited language — no gore, violence, or ambiguous terms that trip AI platform safety filters
    - Feature 8: Artistic cohesion audit — ice-blue eyes, cool-toned coat undertones, blue-teal atmospheric forest, and hyper-detailed rendering style matched to hero artwork
---------
-->

# Amur Leopard — Remarkable Facts Image Prompts

## Page Aesthetic DNA

### CSS Palette (source of truth)

| CSS Variable              | Hex / Value                  | Role in Prompts                        |
| ------------------------- | ---------------------------- | -------------------------------------- |
| `--color-shadow`        | `#0a0806`                  | Edge vignette, void, deepest shadows   |
| `--color-dusk`          | `#161210`                  | Mid-ground forest, atmospheric depth   |
| `--color-umber`         | `#2d2319`                  | Ambient fill, forest floor, bark tones |
| `--color-bark`          | `#453526`                  | Tree surfaces, warm mid-tone browns    |
| `--color-amber`         | `#d4944a`                  | Primary warm accent, rosette spots     |
| `--color-amber-soft`    | `#e0a85e`                  | Dappled light, warm glow, lit fur      |
| `--color-amber-bright`  | `#f0b860`                  | Hottest warm highlights, life force    |
| `--color-ivory`         | `#f0e6d6`                  | Brightest point, snow, catch-light     |
| `--color-frost`         | `#c4b8a8`                  | Cool tones, winter coat, breath, bone  |
| `--color-mist`          | `rgba(255, 255, 255, 0.07)` | Atmospheric haze, falling snow, fog    |
| *(hero art only)*         | `#4a8db7` (approx)         | Ice-blue eye iris — signature detail   |
| *(hero art only)*         | `#6ba4c9` → `#cde0ef`     | Atmospheric forest mist, fog, backlight |

### Hero Image Reference

The hero leopard is a hyper-detailed digital rendering of an Amur leopard
seated regally on a snow-covered fallen log, facing the viewer directly.
Key artistic signatures that MUST carry into every fact image:

- **Ice-blue eyes** — vivid, piercing, electric blue irises. NOT amber, NOT
  gold. This is the single most distinctive stylistic choice in the piece
  and must be preserved in every prompt that includes the leopard's face.
- **Cool-dominant coat** — the overall fur reads cool: blue-white undertones
  on the chest, belly, and inner legs. Warm golden-brown tones appear in
  the rosette spots, face, and dorsal areas, but the animal as a whole
  leans cool against the cold environment.
- **Misty blue-teal atmospheric forest** — the Siberian taiga background is
  rendered in layered atmospheric perspective: snow-laden conifers fade
  into progressive blue-white fog with a bright diffused backlight glow
  at center. This is NOT a pure dark void — it is a living, breathing
  winter forest with depth and light.
- **Snow integration** — fine snow dusting sits ON the leopard (head,
  shoulders, whiskers) as well as throughout the environment. Snow is
  participatory, not just background decoration.
- **Photorealistic concept art** — the rendering style is hyper-detailed
  and cinematic, closer to nature documentary key art or high-end video
  game cinematics than loose painterly illustration. Every hair, every
  rosette, every snowflake is rendered with precision.
- **Decorative border frame** — the image sits within a dark border with
  textured, sparkling edge treatment (Inkscape-crafted). Fact images do
  NOT need this frame (the rosette CSS handles cropping), but the interior
  rendering quality must match.

### Rosette Circular Crop Constraints

- **Canvas** : 1024×1024px minimum (renders at ~120–200px on desktop)
- **Crop** : CSS `border-radius: 50%` via `.fact__rosette` — corners fully clipped
- **Safe zone** : Keep all critical detail within the center 75% diameter
- **Edge treatment** : Heavy vignette to `#0a0806` at edges so the circle
  dissolves seamlessly into the `--color-shadow` page background
- **Focal point** : Single centered subject — no competing elements at margins

### Style Direction

Hyper-detailed digital rendering. Photorealistic concept art with cinematic
lighting — NOT loose painterly illustration, NOT cartoonish. Think: the hero
art for a premium BBC Earth documentary series, or a AAA video game cinematic
cutscene set in Siberia. Every hair strand, every rosette, every snowflake
rendered with precision. Atmospheric depth achieved through layered fog and
mist, not flat darkness. The environment is always present — misty conifer
forest, snow, cold blue-teal atmosphere — even in close-up shots, the
surrounding winter world should bleed in at the edges. The tension between
the leopard's warm golden rosettes and the cold blue world it inhabits is
the emotional engine of every image.

### Global Negative Prompt

Append to every generation:

```text
No text, no labels, no watermarks, no borders, no frames, no white backgrounds,
no bright saturated backgrounds, no cartoon style, no flat illustration, no
clipart, no stock photo feel, no busy backgrounds, no multiple competing
subjects, no cheerful lighting, no daylight sky visible, no tropical or
savanna setting, no African leopard coloring, no green foliage, no amber or
gold eyes, no warm-toned eyes, no loose painterly brushwork
```

---

## Fact 01 — Ghost of the Forest

> *"Strictly nocturnal and fiercely solitary, it patrols territories of up to
> 120 square miles. Some individuals go years without a single confirmed
> sighting by human eyes."*

### Primary Prompt

```text
A pair of Amur leopard eyes emerging from total forest darkness — just the
eyes and the faintest suggestion of spotted facial contours. The eyes glow
with intense ice-blue luminance — vivid electric blue irises that pierce
through the void like frozen lightning. The surrounding darkness is dense
Siberian forest (#0a0806 to #161210) with only the barest suggestion of
snow-dusted bark texture (#2d2319) and faint blue-teal atmospheric mist
flanking the face at extreme edges. Between and around the eyes, the
faintest ghost-trace of rosette spots is visible — dark on dark, almost
imagined rather than seen. A few tiny ivory snowflakes (#f0e6d6) drift in
the foreground, catching the eye-glow. Fine snow dusting rests on the brow
ridge above each eye. The effect is primal: you are being watched by
something you cannot see. Hyper-detailed digital rendering, extreme
chiaroscuro with cinematic blue-teal atmospheric haze at edges, centered
symmetrical composition for circular crop. 1024x1024.
```

### Alternate A — Camera Trap Flash

```text
A frozen instant: an Amur leopard caught mid-stride by an infrared camera
trap flash. The image mimics the green-tinged monochrome of night-vision
footage but rendered as hyper-detailed digital art — the leopard's body in
spectral frost-green (#c4b8a8 with green cast) against pitch-black forest
(#0a0806). The eyes reflect back as two blazing ice-blue points, the only
cool-bright color in the frame — the signature eyeshine of a nocturnal
predator. Motion blur at the tail and rear legs suggests fluid movement
interrupted. Snowflakes frozen mid-fall around the body, with fine snow
dusting on the shoulders and spine. Hyper-detailed digital rendering,
camera trap documentary aesthetic rendered as cinematic concept art,
heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate B — Territory Map

```text
An aerial-perspective view looking down into a dark Siberian forest canopy
at night. The trees are rendered as dense dark masses (#0a0806 to #161210)
with faint frost-silver edges (#c4b8a8) and blue-teal atmospheric mist
drifting between the trunks. A single luminous amber trail (#d4944a to
#e0a85e) weaves through the forest — the patrol route of an unseen leopard
mapped as a warm glowing thread. The trail covers an enormous area, looping
and branching across the frame, emphasizing the scale of 120 square miles.
At one point along the trail, a tiny pair of ice-blue eye-dots marks the
leopard's current position. The trail fades to transparency at its oldest
points. Snow dusting visible on the canopy surfaces. Hyper-detailed digital
rendering, map-like aerial perspective with atmospheric depth, heavy dark
vignette, centered for circular crop. 1024x1024.
```

---

## Fact 02 — Olympic Athlete

> *"The Amur leopard can leap up to 19 feet horizontally and 10 feet
> vertically. At full sprint, it reaches 37 miles per hour."*

### Primary Prompt

```text
An Amur leopard captured at the apex of a massive horizontal leap — fully
airborne, body stretched to maximum extension, all four paws off the ground.
The leopard is rendered in warm golden-brown rosettes (#d4944a) over a coat
with cool blue-white undertones on the chest and belly, ice-blue eyes
flashing mid-flight. The background is a motion-blurred Siberian forest
(#161210 to blue-teal mist, streaked horizontally). The fur along the spine
and tail shows wind displacement. Below the leopard: a gap between two
snow-dusted boulders — the distance being cleared. Snow particles (#f0e6d6)
erupt from the launch point and trail behind like a comet tail. Fine frost
clings to the whiskers. The frozen instant of peak athleticism — power made
visible. Hyper-detailed digital rendering, sports photography frozen-moment
aesthetic, dramatic side lighting from left, heavy dark vignette, centered
for circular crop. 1024x1024.
```

### Alternate A — Vertical Ascent

```text
Looking upward from the base of a massive Siberian birch tree. An Amur
leopard is mid-leap vertically — paws outstretched, body coiled like a spring
releasing, rocketing upward along the trunk. The tree bark is rendered in
cool silver-frost (#c4b8a8) and deep umber (#2d2319). The leopard's
underside is visible — pale cream-white belly fur with cool blue undertones
(#f0e6d6) transitioning to the spotted golden-brown flanks (#d4944a). The
rear legs push off from a branch below while the forepaws reach for a
branch above — the full 10-foot vertical gap visible between. Vertical
motion lines in warm amber (#e0a85e at 30% opacity) trace the trajectory.
Background is dark canopy with blue-teal mist filtering through (#0a0806
to atmospheric blue). Snow shakes loose from the bark on impact.
Hyper-detailed digital rendering, dramatic worm's-eye perspective,
explosive upward energy, heavy dark vignette, centered vertical composition
for circular crop. 1024x1024.
```

### Alternate B — Speed Ghost

```text
A triple-exposure effect showing an Amur leopard in three phases of a
full-speed sprint: coiled, mid-stride, and fully extended. The rear-most
image is barely visible — a ghost in frost-silver (#c4b8a8 at 20% opacity).
The middle image is warmer and more solid (#d4944a at 50% opacity). The
foremost image is fully rendered in rich golden-brown with cool blue-white
belly undertones, ice-blue eyes sharp and focused. Together they form a
sequence of explosive acceleration across the frame. The ground beneath
shows disturbed snow (#f0e6d6) kicked up in the wake. Background is
Siberian forest blur (#161210 with blue-teal atmospheric mist).
Hyper-detailed digital rendering, chronophotography meets cinematic concept
art, lateral motion across frame, heavy dark vignette, centered for
circular crop. 1024x1024.
```

---

## Fact 03 — Unique Identity

> *"The arrangement of rosettes — irregular dark rings encircling lighter
> patches — is unique to each individual, like a human fingerprint."*

### Primary Prompt

```text
An extreme close-up of an Amur leopard's flank showing the rosette pattern
in extraordinary detail. Each rosette is a work of organic geometry — an
irregular ring of deep umber-black (#161210) encircling a warm golden-brown
center (#d4944a) that is slightly lighter than the surrounding base fur.
The base coat carries cool blue-white undertones between the spots,
especially where it catches ambient light. The rosettes vary in size,
spacing, and shape — no two identical. Warm side-lighting rakes across the
fur at a low angle (#e0a85e highlights on individual hair tips), emphasizing
the three-dimensional texture of the dense winter coat. Between rosettes,
fine individual hairs are visible. Fine snow crystals cling to a few guard
hair tips. Background dissolves into blue-teal forest mist at the edges.
Hyper-detailed digital rendering, museum specimen macro detail, fur texture
study rendered as cinematic concept art, heavy dark vignette, centered
composition for circular crop. 1024x1024.
```

### Alternate A — The Database

```text
A grid of six Amur leopard flank photographs arranged in a 3×2 matrix,
each showing a different individual's rosette pattern. Each panel is
rendered in warm golden-brown rosettes (#d4944a to #e0a85e) with cool
blue-white base coat undertones against dark forest backgrounds (#0a0806
to blue-teal mist). Faint overlay lines in frost-silver (#c4b8a8 at 30%
opacity) trace the rosette positions on each panel — the visual database
of a conservation scientist's identification system. Each panel is subtly
different: the rosettes vary in density, size, and cluster arrangement.
Thin dividing lines between panels in dark umber (#2d2319). The overall
impression: these are individuals, not interchangeable. Hyper-detailed
digital rendering, scientific identification chart meets cinematic gallery
wall, centered grid composition for circular crop. 1024x1024.
```

### Alternate B — Fingerprint Parallel

```text
Split composition: the left half shows an Amur leopard's rosette pattern
in warm golden-brown and umber tones (#d4944a spots, #161210 rings) with
cool blue-white base coat undertones. The right half shows a human
fingerprint rendered in matching warm tones — the whorls and ridges echoing
the organic irregularity of the rosettes. A thin vertical line of bright
amber (#f0b860) separates the two halves. The visual rhyme between
biological identification systems is immediate and striking. Both rendered
with equal detail and reverence. Background is deep shadow (#0a0806) with
faint blue-teal atmospheric haze. Hyper-detailed digital rendering,
scientific comparison concept, centered symmetrical composition for
circular crop. 1024x1024.
```

---

## Fact 04 — Winter Warrior

> *"It grows a dense winter coat up to 7 centimeters long that shifts from
> rich reddish-yellow in summer to pale, creamy gold in winter."*

### Primary Prompt

```text
A split-season portrait of the same Amur leopard face — left half in
summer coat, right half in winter coat. The summer side shows a rich
reddish-golden (#d4944a deepening to warm sienna) with shorter, sleeker
fur and vivid dark rosettes against a background suggesting dusk forest.
The winter side shows a pale creamy gold (#f0e6d6 to #e0a85e) with
visibly longer, denser fur — individual guard hairs catching light like
fiber optics — cool blue-white undertones in the cheek and throat fur,
and softened, paler rosettes against a background of falling snow and
blue-teal misty forest. The eye on each side is identical in its piercing
ice-blue intensity — the same soul in different armor. A thin dividing
line of bright amber (#f0b860) at center. Fine snow dusting on the winter
side's brow and ear tips. Hyper-detailed digital rendering, seasonal
comparison portrait, symmetrical split-face composition, heavy dark
vignette, centered for circular crop. 1024x1024.
```

### Alternate A — Fur Architecture

```text
An extreme macro cross-section view of Amur leopard winter fur — showing
the layered architecture of the coat in scientific-illustration detail.
The dense underfur appears as a thick, insulating lattice of fine fibers
in warm frost (#c4b8a8) with cool blue-white undertones, while the longer
outer guard hairs rise above like a protective canopy in rich golden-brown
(#d4944a to #e0a85e), each individual hair catching side-light and showing
its full 7cm length. Tiny ice crystals cling to the guard hair tips
(#f0e6d6 sparks). The root structures disappear into dark skin (#161210).
The rendering emphasizes engineering: this is a survival system, not
decoration. Background is deep shadow (#0a0806) with faint blue-teal
atmospheric haze at the edges. Hyper-detailed anatomical rendering,
textile-study detail meets cinematic concept art, centered vertical
composition for circular crop. 1024x1024.
```

### Alternate B — Forty Below

```text
An Amur leopard's face in extreme close-up during deep winter — breath
crystallizing in a plume of ivory mist (#f0e6d6 to transparent) that
drifts upward from the nostrils. The winter coat is thick, pale, almost
luminous cream-gold (#e0a85e to #f0e6d6) with cool blue-white undertones
in the cheek and throat fur. Ice crystals cling to the whiskers and brow
fur, each one catching light as a tiny bright spark. The eyes are
half-closed against the cold — ice-blue slits of fierce endurance.
Snowflakes rest on the forehead and ears without melting — the fur is so
dense it insulates completely. Background is frozen Siberian forest void
(#0a0806 with blue-teal atmospheric mist). Hyper-detailed digital
portrait, intimate winter survival study, warm breath against cold air,
heavy dark vignette, centered for circular crop. 1024x1024.
```

---

## Fact 05 — Tree Vault

> *"The Amur leopard drags its prey — often two to three times its own body
> weight — high into the branches of a tree."*

### Primary Prompt

```text
An Amur leopard perched on a thick horizontal branch high in a Siberian
oak, with a full-grown sika deer draped across the branch beside it. The
leopard holds the deer by the nape — the effort of the haul still visible
in the tensed neck and shoulder muscles. The leopard is rendered in warm
golden-brown rosettes (#d4944a) with cool blue-white chest undertones,
ice-blue eyes piercing through the darkness. The deer is rendered in cooler
frost-silver tones (#c4b8a8) — still and inert. The branch is thick, dark,
textured umber (#2d2319 to #453526). Below the branch: deep forest void
with faint blue-teal atmospheric mist (#0a0806 fading to atmospheric blue).
A few ivory snowflakes (#f0e6d6) drift through the empty space beneath.
Fine snow dusting on the leopard's shoulders. Hyper-detailed digital
rendering, dramatic display of raw strength, warm hunter against cool
stillness, heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate A — The Ascent

```text
Looking upward along a tree trunk as an Amur leopard climbs vertically
while holding a large deer firmly in its mouth. The leopard's hind claws
anchor into bark (#2d2319 to #453526), muscles straining visibly beneath
the spotted golden-brown coat (#d4944a) with cool blue-white belly
undertones. The deer hangs below the leopard's head, swaying — its full
weight emphasizing the impossible load being carried against gravity. Claw
impressions mark the bark below the leopard's current position, showing
the path of ascent. Warm side-lighting from the left (#e0a85e) rakes
across the leopard's straining body while the right side falls into deep
shadow with blue-teal atmospheric haze (#0a0806 to atmospheric blue). The
scale relationship between hunter and quarry — the deer is visibly larger
— tells the story of extraordinary strength. Hyper-detailed digital
rendering, vertical upward composition, physical tension, heavy dark
vignette, centered for circular crop. 1024x1024.
```

### Alternate B — Canopy Larder

```text
A wide establishing shot of a bare Siberian tree silhouetted against
deep twilight sky (#161210 with faint blue-teal atmospheric glow at
horizon). High in the branches, barely visible, a leopard's form and its
stored quarry are rendered as a warm golden-amber glow (#d4944a to
#e0a85e) — the only point of warmth in an otherwise cold, skeletal
composition. The tree's bare branches spread across the frame like a
network of dark veins (#0a0806 to #2d2319). Snow sits on the branches
in thin ivory lines (#f0e6d6). Blue-teal mist drifts between distant
tree trunks. The ground below is lost in shadow. The message: a pantry
hidden in plain sight, accessible only to something that can carry twice
its weight straight up. Hyper-detailed digital rendering, environmental
wide shot, lonely and powerful, heavy dark vignette, centered for
circular crop. 1024x1024.
```

---

## Fact 06 — Living Relic

> *"The Amur leopard's lineage stretches back to the Pleistocene epoch.
> While saber-toothed cats, cave lions, and woolly mammoths vanished,
> this subspecies endured."*

### Primary Prompt

```text
An Amur leopard standing in profile on a snow-covered ridge, rendered in
full warm golden-brown glory (#d4944a body, #e0a85e highlights) with cool
blue-white chest undertones and piercing ice-blue eye visible in profile.
Behind it, fading into the dark background in progressively ghostlier
layers, are the spectral silhouettes of extinct Pleistocene megafauna:
a cave lion, a saber-toothed cat, and a woolly mammoth — each rendered
as a pale frost outline (#c4b8a8 at decreasing opacity: 30%, 20%, 10%).
The living leopard is solid, warm, present. The ghosts are cold, fading,
gone. The snow beneath the leopard's paws is real and ivory (#f0e6d6);
the snow beneath the ghosts is absent — they stand on nothing. Fine snow
dusting on the leopard's back and shoulders. Background is deep forest
(#0a0806) with faint blue-teal atmospheric mist. Hyper-detailed digital
rendering, time-depth composition from present to past, warm life against
cold extinction, heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate A — Ice Age Eye

```text
A single Amur leopard eye in extreme macro, filling most of the frame.
The iris is rendered in extraordinary detail — vivid, piercing ice-blue
with subtle rings of depth (darker steel-blue at the outer rim, brighter
electric blue mid-ring, pale ice at the inner edge) with a deep black
pupil. Reflected in the curved surface of the eye, like a miniature
diorama, is a Pleistocene landscape: glaciers, tundra megafauna, vast ice
sheets — the world this lineage survived. The reflection is rendered in
cool frost and ivory tones (#c4b8a8, #f0e6d6) — a cold memory trapped
inside a living eye. The fur surrounding the eye is dense winter coat in
pale cream with cool blue-white undertones (#e0a85e to #f0e6d6), with
fine snow crystals on the brow hairs. Background dissolves to shadow
(#0a0806) with blue-teal atmospheric haze. Hyper-detailed digital
rendering, macro eye portrait with reflected history, intimate and
ancient, heavy dark vignette, centered for circular crop. 1024x1024.
```

### Alternate B — Fossil and Living

```text
Split composition: the left half shows a fossil impression of a leopard
skeletal profile embedded in pale limestone — rendered in cool ivory and
frost tones (#c4b8a8, #f0e6d6), ancient and still, with visible geological
strata surrounding it in layers of umber (#2d2319 to #453526). The right
half shows the same head form alive — a living Amur leopard's face in warm
golden-brown (#d4944a, #e0a85e) with cool blue-white undertones, breath
visible in the cold air, ice-blue eyes blazing, snow on the whiskers. A
thin vertical line of bright amber (#f0b860) separates stone from life.
The design has not changed. The fire inside it has not gone out. Background
is deep shadow (#0a0806) with faint blue-teal atmospheric haze.
Hyper-detailed digital rendering, geological time meets living moment,
centered symmetrical split for circular crop. 1024x1024.
```

---

## Implementation Notes

### Generation Order Recommendation

For visual coherence across all six, generate in this order:

1. **Fact 04** (Winter Warrior) — establishes the full-face leopard rendering
   style, fur texture, and lighting language
2. **Fact 03** (Unique Identity) — macro flank detail confirms rosette and
   fur rendering consistency
3. **Fact 05** (Tree Vault) — full-body in environment, confirms anatomy and
   branch interaction
4. **Fact 01** (Ghost of the Forest) — extreme darkness variant uses
   established eye and facial rendering as anchor
5. **Fact 06** (Living Relic) — full-body profile with spectral elements,
   builds on established form
6. **Fact 02** (Olympic Athlete) — motion-focused, most dynamic and
   independent from static rendering

### Color Consistency Checklist

After generating all six, verify:

- [ ] All backgrounds dissolve to `#0a0806` (--color-shadow) at edges
- [ ] Warm accents stay within amber family (`#d4944a` → `#e0a85e` → `#f0b860`)
- [ ] Dark tones stay within umber-dusk family (`#0a0806` → `#161210` → `#2d2319`)
- [ ] Cool tones limited to frost (`#c4b8a8`) and ivory (`#f0e6d6`) for snow and bone
- [ ] **Ice-blue eyes** in every prompt that shows the face — NOT amber, NOT gold
- [ ] **Cool blue-white undertones** on chest, belly, and throat fur in every body shot
- [ ] **Blue-teal atmospheric mist** present in backgrounds — not pure black voids
- [ ] **Snow dusting ON the animal** (head, shoulders, whiskers) where applicable
- [ ] No image introduces colors outside the page palette (no greens, no warm yellows)
- [ ] Style reads as hyper-detailed photorealistic concept art, NOT loose painterly
- [ ] Rosette crop test: all six look cohesive at 150px diameter side by side

### CSS Integration

Replace the current rosette number display:

```css
.fact__rosette {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    /* Remove existing ring/number styles */
    /* Remove .fact__rosette-ring and .fact__rosette-inner */
}

.fact__rosette img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

```html
<!-- Replace rosette number block with: -->
<div class="fact__rosette">
    <img src="assets/images/facts/fact-01-ghost-of-the-forest.webp"
         alt="Amber leopard eyes glowing from total forest darkness"
         loading="lazy"
         width="240"
         height="240">
</div>
```

### File Naming Convention

```text
assets/images/facts/
├── fact-01-ghost-of-the-forest.webp
├── fact-02-olympic-athlete.webp
├── fact-03-unique-identity.webp
├── fact-04-winter-warrior.webp
├── fact-05-tree-vault.webp
└── fact-06-living-relic.webp
```

Export at 1024×1024 PNG, then convert to WebP at quality 85 for production.
Keep PNG originals in a `_source/` directory for future edits.