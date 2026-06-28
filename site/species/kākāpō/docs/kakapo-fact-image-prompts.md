<!--
✒ Metadata
    - Title: Remarkable Facts Image Prompts (BEASTIQUE Edition - v1.0)
    - File Name: kakapo-fact-image-prompts.md
    - Relative Path: kakapo\docs\kakapo-fact-image-prompts.md
    - Artifact Type: docs
    - Version: 1.0.0
    - Date: 2026-03-11
    - Update: Wednesday, March 11, 2026
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.6
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Description:
    Image generation prompts for the six Remarkable Facts circular illustrations
    on the Kākāpō (Strigops habroptilus) species profile page. Each prompt is
    calibrated to match the page's nocturnal ancient-forest aesthetic, the
    carved-wood hero image palette, and the circular crop format of the fact
    icon containers.

✒ Key Features:
    - Feature 1: Six primary prompts matched to exact webpage CSS palette
    - Feature 2: Two alternate prompts per fact for creative variation
    - Feature 3: Composition notes for circular crop compatibility
    - Feature 4: Negative prompt guidance to maintain aesthetic consistency
    - Feature 5: Platform-agnostic (Midjourney, DALL-E, Stable Diffusion, Flux)
    - Feature 6: Color-matched to --color-rootwood, --color-bark, --color-moonmist, --color-moss
---------
-->

# Kākāpō — Remarkable Facts Image Prompts

## Page Aesthetic DNA

### CSS Palette (source of truth)

| CSS Variable              | Hex       | Role in Prompts                          |
| ------------------------- | --------- | ---------------------------------------- |
`#1a100a`
`#3a2010`
`#6a4020`
`#986028`
`#487080`
`#6898a8`
`#384818`
`#e8e0d0`
`#c8d0d8`

### Hero Image Reference

The hero Kākāpō is rendered in warm carved-wood tones — the feathers read as
hand-shaped wooden scales, each one a polished amber-brown shield layered over
the round body. The bird sits grounded among ancient moss-covered tree roots in
a misty nocturnal forest. Behind it, bare trunks recede into cool blue-grey
moonlit fog, with a full moon glowing through the canopy. The palette splits
between warm foreground (bird, bark, moss, roots) and cool background (moonmist,
blue-grey atmosphere). This warm-subject-in-cold-world tension is the signature.
Every fact image must echo this nocturnal duality.

### Circular Crop Constraints

- **Canvas** : 1024×1024px minimum (renders at ~120–200px on desktop)
- **Crop** : CSS `border-radius: 50%` — corners are fully clipped
- **Safe zone** : Keep all critical detail within the center 75% diameter
- **Edge treatment** : Heavy vignette to `#0b0a05` at edges so the circle
  dissolves seamlessly into the `--color-rootwood` page background
- **Focal point** : Single centered subject — no competing elements at margins

### Style Direction

Glassmorphism-fused digital illustration. Frosted translucent layers, soft
light refraction through semi-transparent surfaces, luminous glass-like depth
with subtle backdrop blur. Natural history museum specimen precision rendered
through a lens of modern UI glass aesthetics — frosted-panel overlays on
living subjects, refractive edge glow, layered transparency with rich color
bleeding through. NOT photorealistic, NOT cartoonish, NOT flat vector. Lit
like a moonlit BBC Earth night-vision forest sequence — nocturnal, intimate,
reverent. Every surface carries a faint glassy luminosity and the atmosphere
feels like moonlight passing through mist crystal. Every image should feel
like it belongs in the same gallery as the hero Kākāpō rendering.

### Global Negative Prompt

Append to every generation:

```text
No text, no labels, no watermarks, no borders, no frames, no white backgrounds,
no bright saturated backgrounds, no cartoon style, no flat illustration, no
clipart, no stock photo feel, no busy backgrounds, no multiple competing
subjects, no daytime lighting, no direct sunlight, no tropical colors, no
bright greens, no blue sky, no oil painting texture, no visible brushstrokes,
no watercolor wash, no traditional media look
```

---

## Fact 01 — Boom Machine

> *"Males inflate a thoracic air sac to produce sub-100Hz booming calls that
> carry over five kilometers through the night forest — up to eight hours
> straight, for months on end."*

### Primary Prompt

```text
A male Kākāpō viewed from a low front angle, body pressed to the earth in
his booming posture — chest massively inflated into a round feathered drum,
head lowered, beak slightly parted. The inflated thoracic sac stretches the
breast feathers taut, the warm carved-wood brown plumage (#6a4020 to
#986028) catching soft moonlight on each raised feather edge. Around the
bird, visible concentric sound waves radiate outward through the misty
night air — rendered as subtle frosted-glass ripples in cool moonmist blue
(#487080 at 20% opacity), distorting the forest behind like heat shimmer.
The ground beneath is dark mossy earth (#384818 over #1a100a). Ancient tree
roots frame the edges in dark bark tones (#3a2010). The forest recedes into
deep blue-grey mist. Glassmorphism-fused digital illustration, subsonic
energy made visible through refractive atmospheric distortion, low-angle
intimate portrait, heavy dark vignette to #0b0a05, centered for circular
crop. 1024x1024.
```

### Alternate A — The Resonance Bowl

```text
A top-down aerial view looking into a Kākāpō's hand-dug booming bowl — a
shallow earthen depression in the forest floor, perfectly circular, with
radiating tracks cleared of debris extending outward like spokes. The bowl
walls are packed smooth earth and fine roots. At the center of the bowl, a
male Kākāpō is a round warm form (#6a4020) seen from above, chest inflated.
The cleared tracks extend outward toward the edges of the frame, disappearing
into dark moss (#384818) and root tangles (#3a2010). Faint frosted-glass
sound ripples emanate from the bowl in concentric rings of cool mist
(#487080). Moonlight falls directly from above, creating a natural spotlight
on the bowl. Glassmorphism-fused digital illustration, architectural
overhead perspective revealing the built environment of a bird, frosted
moonlit atmosphere, 1024x1024.
```

### Alternate B — Five Kilometer Voice

```text
A vast nocturnal forest landscape rendered in deep receding layers of
blue-grey mist (#487080 fading to #0b0a05). In the far distance, nearly
swallowed by the mist, a tiny warm point of amber-brown light marks a
Kākāpō on a ridge — barely visible, just a glow. From that distant point,
a single low-frequency sound wave propagates toward the viewer as a massive
frosted-glass arc sweeping across the entire frame — a wall of translucent
refractive energy bending the mist and trees as it passes. The wave is
enormous relative to its source. Fern silhouettes and tree trunks in the
foreground bend subtly in the wave's path. Glassmorphism-fused digital
illustration, landscape-scale sound visualization, the smallness of the
bird against the reach of its voice, heavy dark vignette to #0b0a05,
centered for circular crop. 1024x1024.
```

---

## Fact 02 — Owl in Parrot's Clothing

> *"A disc of specialized feathers frames its face like an owl's, its
> forward-facing eyes are tuned for twilight, and whisker-like bristles
> around its beak let it feel through total darkness."*

### Primary Prompt

```text
An extreme close-up portrait of a Kākāpō's face filling the entire frame
— the owl-like facial disc of fine radiating feathers rendered in exquisite
detail, each feather a soft filament of warm brown (#6a4020) with lighter
tips (#986028) arranged in concentric rings around the face. The
forward-facing eyes are large, dark, and glossy with a deep amber-brown iris
catching a single point of moonlight reflection (#e8e0d0). Below the eyes,
the stout ivory beak (#e8e0d0 fading to grey) emerges from a forest of
fine whisker-like bristle feathers that extend forward like sensory antennae.
The bristles catch moonlight at their tips, each one a tiny frosted-glass
filament glowing against the dark background (#0b0a05). The face fills the
circle perfectly — the disc IS the circular crop. Glassmorphism-fused digital
illustration, extreme macro portrait with frosted bristle-tip glow, intimate
and confrontational, heavy dark vignette to #0b0a05, face centered for
circular crop. 1024x1024.
```

### Alternate A — Night Vision

```text
A Kākāpō's head in three-quarter profile against total darkness (#0b0a05).
The eye is the focal point — enormous, glossy, black pupil fully dilated for
night vision with a thin warm amber iris ring. The eye catches and refracts
a complex moonlight reflection that reveals the forest canopy in miniature
on its wet curved surface — trees, moon, mist all visible in the eye's
convex mirror. The surrounding facial disc feathers radiate outward from the
eye in warm brown tones (#6a4020 to #3a2010), each feather tip catching
faint frosted moonlight. The beak below is a pale ivory anchor (#e8e0d0).
Glassmorphism-fused digital illustration, the world reflected in a
nocturnal eye, glassy eye surface with refractive forest reflection,
intimate macro portrait, heavy dark vignette to #0b0a05, centered for
circular crop. 1024x1024.
```

### Alternate B — The Bristle Array

```text
An ultra-close macro view of the whisker-like bristle feathers around a
Kākāpō's beak — dozens of fine sensory filaments extending forward from the
base of the ivory beak (#e8e0d0) into dark space. Each bristle is rendered
as a delicate translucent fiber catching moonlight along its length — warm
brown at the root (#3a2010) transitioning to frosted glass at the tip,
glowing with cool moonmist light (#6898a8). Between the bristles, the
darkness is absolute (#0b0a05). The bristles overlap and cross at different
focal depths, creating a three-dimensional sensory web. The beak surface
behind them shows fine keratin texture in pale ivory. Glassmorphism-fused
digital illustration, sensory biology rendered as frosted fiber-optic
architecture, extreme shallow depth of field, heavy dark vignette to
#0b0a05, centered for circular crop. 1024x1024.
```

---

## Fact 03 — Earthbound Heavyweight

> *"The world's heaviest parrot at up to four kilograms — too heavy to fly,
> but built with massive zygodactyl feet and powerful legs that make it an
> elite tree climber."*

### Primary Prompt

```text
A Kākāpō climbing a massive ancient tree trunk, viewed from below looking
upward. The bird clings to the rough bark at a steep angle, its powerful
blue-grey feet (#487080 with ivory claws #e8e0d0) gripping deep into the
bark fissures — two toes forward, two back, the zygodactyl grip clearly
visible and load-bearing. The bird's round heavy body (#6a4020 to #986028
feathers) is pressed against the trunk, wings slightly spread for balance.
The trunk recedes upward into moonlit canopy mist (#487080 to #6898a8).
Below the bird: the forest floor is a distant dark void (#0b0a05). The
scale of the trunk makes the bird look both massive and determined. Bark
texture is rendered in deep warm tones (#3a2010) with moss patches
(#384818). Glassmorphism-fused digital illustration, dramatic low-angle
climbing portrait with frosted mist layers above, weight and grip visible
in every detail, heavy dark vignette to #0b0a05, centered for circular
crop. 1024x1024.
```

### Alternate A — The Parachute Drop

```text
A Kākāpō mid-leap from a high branch, wings fully spread outward — not
flying but controlled falling, a feathered parachute descending at a steep
angle through moonlit forest air. The wings are spread wide, revealing the
warm brown undersides (#6a4020) with lighter feather edges (#986028), each
flight feather separated and catching air individually. The body is round
and heavy, clearly pulled by gravity. Below, the forest floor rushes
upward in dark mossy tones (#384818 over #0b0a05). The trajectory is steep
— this is a controlled plummet, not flight. Moonlight from behind catches
the wing edges in a cool frosted rim-light (#6898a8). Motion lines in the
mist suggest velocity without cartoon effect. Glassmorphism-fused digital
illustration, frozen-moment action capture of a flightless bird's airborne
compromise, frosted atmospheric motion blur, heavy dark vignette to
#0b0a05, centered for circular crop. 1024x1024.
```

### Alternate B — The Grip

```text
Extreme macro of a single Kākāpō foot gripping a moss-covered branch — the
four zygodactyl toes wrapped around the wood in two-forward-two-back
configuration, each toe thick, scaled in blue-grey (#487080), tipped with
curved ivory claws (#e8e0d0) that dig into the bark. The branch beneath is
ancient, textured, covered in fine moss (#384818) and lichen. The foot
occupies the full frame, every scale and wrinkle visible, the tendons
beneath the skin suggesting immense gripping force. Warm feathered leg
enters from the top of frame in brown plumage (#6a4020). Background is dark
bark and void (#3a2010 to #0b0a05). Glassmorphism-fused digital
illustration, biomechanical portrait of an evolutionary adaptation, glassy
claw surfaces with frosted scale texture, extreme macro, heavy dark vignette
to #0b0a05, centered for circular crop. 1024x1024.
```

---

## Fact 04 — The Architect

> *"Males excavate elaborate track-and-bowl court systems — shallow arenas
> dug into ridgetops with meticulously cleared trails radiating outward,
> positioned against rock faces that amplify their calls like natural
> concert halls."*

### Primary Prompt

```text
A moonlit ridgetop clearing in ancient forest, viewed at ground level along
one of the Kākāpō's meticulously cleared track-trails. The trail is a
narrow corridor of bare packed earth, perfectly clear of all debris, cutting
through dark fern and moss (#384818) on either side like a miniature
highway. The trail leads the eye toward a shallow earthen bowl in the
mid-ground — a perfect concave depression in the forest floor, smooth-walled,
positioned against a rock face that rises behind it like a natural
amphitheater wall (#3a2010 to #1a100a). Moonlight (#c8d0d8) falls on the
bowl and rock face. No bird visible — only the architecture it built. The
precision and intentionality of the cleared ground is the subject.
Glassmorphism-fused digital illustration, architectural landscape of a
bird's built environment, frosted moonlight pooling in the bowl depression,
ground-level perspective along the trail, heavy dark vignette to #0b0a05,
centered for circular crop. 1024x1024.
```

### Alternate A — The Arena Network

```text
A bird's-eye view looking down at a complete track-and-bowl system on a
moonlit hilltop — multiple shallow bowls connected by a network of cleared
trails, the whole system stretching across the frame like a ritual ground
plan. The trails are bare earth paths (#1a100a) carved through surrounding
moss and fern (#384818), with the bowls appearing as smooth concave circles
at trail intersections. Moonlight (#c8d0d8) catches the bowl surfaces while
the surrounding forest is dark. At the end of one trail, a small warm
Kākāpō form (#6a4020) is visible, just beginning its nightly approach. The
scale reveals the ambition — this is substantial earthwork, built by a bird
that weighs four kilos. Glassmorphism-fused digital illustration, frosted
moonlit ground plan with glassy light pooling in the bowls, cartographic
overhead perspective, heavy dark vignette to #0b0a05, centered for circular
crop. 1024x1024.
```

### Alternate B — Sound Architecture

```text
A cross-section perspective of a booming bowl positioned against a concave
rock face — the rock wall curves behind the bowl like a parabolic reflector.
The Kākāpō sits in the bowl, a warm rounded form (#6a4020 to #986028),
chest inflated. From the bird, frosted translucent sound arcs travel
upward and outward, hitting the rock face and reflecting forward in focused
beams of refractive energy (#487080 at 15% opacity) — the acoustic physics
made visible. The rock surface is rendered in cool moonlit grey (#3a2010
to #487080) while the bird and bowl are warm. Forest canopy above is dark
void (#0b0a05) with a suggestion of moon glow. Glassmorphism-fused digital
illustration, acoustic engineering diagram rendered as atmospheric art,
frosted sound-reflection visualization, heavy dark vignette to #0b0a05,
centered for circular crop. 1024x1024.
```

---

## Fact 05 — Century Bird

> *"With a lifespan that may reach 100 years, the Kākāpō is among the
> longest-lived birds on Earth — females have been known to breed
> successfully past the age of 80."*

### Primary Prompt

```text
A single ancient Kākāpō sitting motionless on a massive fallen log in
moonlit forest, rendered with extraordinary age and dignity. The bird is
old — its plumage is slightly worn, the feather edges softened by decades,
but the overall form is solid and patient. Each feather is rendered in
layered warm browns (#6a4020 base, #986028 edges) with fine silver-grey
frosting at the tips suggesting age, like grey hair (#c8d0d8 at low
opacity). The fallen log beneath is enormous, moss-covered (#384818),
itself ancient and slowly returning to the earth. Behind the bird, the
forest stretches into deep moonmist (#487080) — trees of various ages
recede into fog, suggesting the passage of time as depth. The bird has
outlived some of the trees. Glassmorphism-fused digital illustration, a
portrait of patience and deep time, frosted age-silver on feather tips,
atmospheric mist layers suggesting decades, heavy dark vignette to #0b0a05,
centered for circular crop. 1024x1024.
```

### Alternate A — Growth Rings

```text
A tightly cropped view of a Kākāpō's leg — the scaled, blue-grey skin
(#487080) of the tarsus showing fine overlapping scales that resemble tree
growth rings. The leg is positioned next to the cross-section of a cut
tree stump, and the tree's growth rings are visible in warm amber-brown
(#6a4020 to #986028) tones. The scales of the bird's leg and the rings of
the tree echo each other in pattern — two organisms measuring time in
concentric layers. The bird's curved ivory claws (#e8e0d0) rest on the
stump surface. Moonlight catches both textures equally. Background is dark
forest floor (#0b0a05 to #1a100a). Glassmorphism-fused digital
illustration, parallel time-markers in biology, glassy stump-surface with
frosted ring detail, intimate dual-texture macro, heavy dark vignette to
#0b0a05, centered for circular crop. 1024x1024.
```

### Alternate B — Night Watch

```text
A wide nocturnal scene: a Kākāpō sits alone on a high exposed root at the
base of an enormous rimu tree. The tree trunk towers upward until it
disappears into darkness and mist above (#487080 to #0b0a05). The tree is
ancient — its bark deeply furrowed (#3a2010), its base buttressed with
massive roots covered in decades of moss (#384818). The Kākāpō is small
against the tree, warm and golden-brown (#6a4020 to #986028), a moonlight
catch on its back feathers. The full moon (#c8d0d8) is visible through a
gap in the canopy high above, its light filtering down as cool frosted
atmosphere. The bird looks upward. Two ancient organisms sharing the same
forest, the same century. Glassmorphism-fused digital illustration, scale
contrast between bird and ancient tree, frosted moonlight descending
through canopy layers, contemplative vertical composition, heavy dark
vignette to #0b0a05, centered for circular crop. 1024x1024.
```

---

## Fact 06 — Sweet Scent

> *"The Kākāpō produces a distinctive honey-sweet body scent — and
> possesses the most highly developed sense of smell of any parrot,
> navigating its nocturnal world through an invisible map of odors."*

### Primary Prompt

```text
A Kākāpō moving along the forest floor at night, head low, beak nearly
touching the ground, the bristle-whiskers around its beak fanned forward
in active sensing posture. From the bird's plumage, a visible scent
signature rises — rendered as warm amber-golden vapor (#986028 at 25%
opacity) curling upward from the feathers in delicate wisps that glow
faintly with their own warmth against the cool night air. The vapor is
organic, beautiful, not toxic — it reads as perfume, not fume. Below the
bird's beak, the forest floor is alive with a different invisible layer:
faint trails of scent from plants, fungi, and soil rendered as cool
frosted-glass ribbons (#487080 at 15% opacity) tracing paths across the
moss (#384818) and root-work (#3a2010). Two scent worlds — one broadcast,
one received. Glassmorphism-fused digital illustration, olfactory biology
rendered as layered atmospheric scent-light, intimate ground-level tracking
perspective, heavy dark vignette to #0b0a05, centered for circular crop.
1024x1024.
```

### Alternate A — The Nose Knows

```text
An extreme close-up of a Kākāpō's beak and nares — the two nostril openings
at the base of the upper mandible rendered in extraordinary detail, set into
the pale ivory beak surface (#e8e0d0). The nares are positioned within the
cere, surrounded by fine bristle feathers that fan outward. From the
nostril openings, delicate frosted tendrils of scent-information flow
inward — cool forest-floor scent trails (#487080 at translucent) being
drawn in from the surrounding air, visible as glassy vapor filaments
converging on the nares from all directions. The beak surface has a subtle
frosted-glass quality, the keratin catching moonlight with refractive
depth. Background is warm out-of-focus plumage (#6a4020) above and dark
void (#0b0a05) below. Glassmorphism-fused digital illustration, olfactory
anatomy rendered as frosted-glass scent architecture, extreme macro with
glassy surface detail, heavy dark vignette to #0b0a05, centered for
circular crop. 1024x1024.
```

### Alternate B — Scent Trail

```text
A nocturnal forest floor scene with no bird visible — instead, the subject
is the invisible scent world made visible. A winding trail of warm
amber-gold vapor (#986028 at 20% opacity) hangs in the air at Kākāpō
height, tracing the path a bird recently walked — curving between tree
roots (#3a2010), over mossy logs (#384818), past fern fronds. The scent
trail is the warmest element in the frame, a ghost-signature of the bird's
passage. Surrounding it, the cold forest is rendered in moonmist tones
(#487080 to #0b0a05), still and empty. The trail leads the eye from the
foreground toward the background where it fades into distance. The bird is
gone but its presence lingers. Glassmorphism-fused digital illustration,
absence portrait — the animal represented by its invisible signature,
frosted scent-vapor trail as narrative thread, atmospheric nocturnal
forest, heavy dark vignette to #0b0a05, centered for circular crop.
1024x1024.
```

---

## Implementation Notes

### Generation Order Recommendation

For visual coherence across all six, generate in this order:

1. **Fact 02** (Owl in Parrot's Clothing) — establishes the face, feather
   texture, and lighting language at macro scale
2. **Fact 03** (Earthbound Heavyweight) — full body in motion, confirms body
   proportions and plumage rendering
3. **Fact 05** (Century Bird) — establishes the wide nocturnal forest
   environment and atmospheric mist treatment
4. **Fact 01** (Boom Machine) — behavioral portrait, combines established body
   form with sound visualization layer
5. **Fact 04** (The Architect) — environmental focus, the bird's built
   landscape without requiring detailed bird rendering
6. **Fact 06** (Sweet Scent) — most abstract visualization layer, builds on
   established atmospheric treatment

### Color Consistency Checklist

After generating all six, verify:

- [ ] All backgrounds dissolve to `#0b0a05` (--color-rootwood) at edges
- [ ] Warm tones stay within bark-feather family (`#3a2010` → `#6a4020` → `#986028`)
- [ ] Cool tones stay within moonmist family (`#487080` → `#6898a8` → `#c8d0d8`)
- [ ] Moss greens (`#384818`) appear only on ground surfaces, never dominant
- [ ] Ivory highlights (`#e8e0d0`) appear sparingly — beak, claws, moon catch
- [ ] No image introduces colors outside the page palette
- [ ] Circular crop test: all six look cohesive at 150px diameter side by side

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
    <img src="assets/images/facts/fact-01-boom-machine.png"
         alt="Male Kākāpō with inflated chest producing subsonic booming calls in moonlit forest"
         loading="lazy"
         width="240"
         height="240">
</div>
```

### File Naming Convention

```text
assets/images/facts/
├── fact-01-boom-machine.png
├── fact-02-owl-in-parrots-clothing.png
├── fact-03-earthbound-heavyweight.png
├── fact-04-the-architect.png
├── fact-05-century-bird.png
└── fact-06-sweet-scent.png
```

Export at 1024×1024 PNG, then convert to WebP at quality 85 for production.
Keep PNG originals in a `_source/` directory for future edits.
