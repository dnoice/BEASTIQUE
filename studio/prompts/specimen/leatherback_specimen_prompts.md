<!--
✒ Metadata
    - Title: Leatherback Specimen Prompt Library (BEASTIQUE Edition - v1.1)
    - File Name: leatherback_specimen_prompts.md
    - Relative Path: studio/prompts/specimen/leatherback_specimen_prompts.md
    - Artifact Type: data
    - Version: 1.1.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Removed all "render a
      vignette / dissolve to black at the edges / composed for a circular crop"
      language; the page clips the circle and adds the inner vignette in CSS.
      Each prompt now instructs the model to keep the subject centered within the
      central 75% safe zone of the square frame and fill the frame fully.
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial 7 entries.

✒ Other Important Information:
    - Dependencies: none (data). Rendered by tools/bq_linocut_forge.py v1.8.0+.
    - Run: --style specimen --size 1024x1024 --quality high . NOT traced.
    - Composition: subject centered in the central 75% safe zone; CSS handles the
      circular clip + edge vignette, so prompts must NOT bake those in.
    - Output: studio/collections/reptilian-beasts/specimen/<quality>/ , then the
      keepers are copied into the page's assets/images/.
---------
-->

# BEASTIQUE — Leatherback Specimen Library (forge-ready)

Run with `--style specimen --size 1024x1024 --quality high`. The page clips each
fact image to a circle and adds its own edge vignette, so every prompt keeps the
subject centered in the central 75% safe zone and fills the square frame fully —
no baked-in vignette, no corner fade, no circular-crop language.

---

## Reptilian

### BQ-SPEC-REP-001 · The Shell That Isn't

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-01` · output `leatherback-fact-01_specimen_01.{png,svg}`

```text
Extreme close-up of a leatherback sea turtle's carapace rendered as a hull of tanned, oil-darkened leather — seven long raised ridges like the keels of a ship, the hide stitched and seamed in saddle-leather tan (#c0894c) and soft hide (#d4a268), bronze rivets catching a single overhead light along the ridge crests (#e8c487). Beneath a torn seam, a glimpse of the pale bone-mosaic underneath in cool ivory-silver (#aec4bc). The deep teal-green water (#123330) recedes into darker green-black depth (#050d0c) behind the subject, fine suspended marine particles drifting. Painterly digital illustration, natural-history-museum specimen detail, dramatic raking light. Keep the carapace centered and contained within the central 75% of the square frame with an even margin of water all around it; fill the whole frame edge to edge with the scene, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-002 · Into the Crushing Deep

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-02` · output `leatherback-fact-02_specimen_01.{png,svg}`

```text
A leatherback sea turtle, its body forged of tanned leather and aged bronze, descending steeply into the lightless deep — seen from below as a powerful silhouette against a single fading shaft of cold light from far above. The leather carapace and long flippers catch the last green-tinged light in warm tan highlights (#c0894c, #e8c487) along their top edges, the underside in deep green-black (#050d0c). The water shifts from murky teal (#123330) near the light to dark depth below, a few rising bubbles and faint pressure lines in cool silver (#aec4bc). Painterly digital illustration, cathedral-scale depth and reverence, dramatic downward composition. Keep the descending turtle centered and contained within the central 75% of the square frame with clear water all around it; fill the whole frame with the scene, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-003 · Warm Heart in Cold Seas

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-03` · output `leatherback-fact-03_specimen_01.{png,svg}`

```text
A leatherback sea turtle of tanned leather and bronze swimming through frigid, near-arctic water, a warm amber-gold glow (#e8c487 fading to #c0894c) radiating outward from deep within its core and chest into the surrounding cold. The water is icy deep teal-green (#123330) deepening to green-black (#050d0c) behind it, with faint pale ice-light and suspended silver particles (#aec4bc). The whole image is the contrast of inner warmth against outer cold — a furnace wrapped in leather moving through the freezing dark. Painterly digital illustration, thermal-glow concept, cinematic deep-sea lighting. Keep the turtle centered and contained within the central 75% of the square frame with an even margin of water around it; fill the whole frame, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-004 · Built to Swallow the Sea

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-04` · output `leatherback-fact-04_specimen_01.{png,svg}`

```text
Looking into the open mouth and throat of a leatherback sea turtle, the gullet lined with hundreds of backward-pointing keratin spines (papillae) rendered as receding rows of bronze and bone-ivory thorns (#aec4bc, #e8c487) running back into shadow. A single translucent jellyfish drifts faintly at the entrance, softly lit. The leather jaw and skin frame the opening in tan and dark hide (#c0894c, #0a1816); deep teal-green water (#123330) recedes to dark depth (#050d0c) behind. Unsettling, beautiful, biological. Painterly digital illustration, dramatic interior lighting. Keep the open mouth centered and contained within the central 75% of the square frame with clear margin around it; fill the whole frame with the scene, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-005 · The Ocean Wanderer

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-05` · output `leatherback-fact-05_specimen_01.{png,svg}`

```text
An aerial-painterly view looking down onto a vast dark green ocean (#123330 deepening to #050d0c), a single leatherback sea turtle of tanned leather and bronze crossing the scene and trailing a long luminous migration wake of warm gold particles (#e8c487 to #c0894c) that curves across the open water like a course charted on an old map. The turtle is small against the immensity, purposeful and alone, with faint cool current lines in silver (#aec4bc). Painterly digital illustration, map-like aerial atmosphere with painterly depth. Keep the turtle and its curving wake centered within the central 75% of the square frame, with open water filling the margins; fill the whole frame, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-006 · Survivor of Deep Time

*Dermochelys coriacea* · IUCN VU · slug `leatherback-fact-06` · output `leatherback-fact-06_specimen_01.{png,svg}`

```text
A leatherback sea turtle of tanned leather and aged bronze rendered as an ancient relic surfacing from deep geological time — its leather hide weathered, cracked and patinated like a museum artifact, the bronze ridges gone green-gold with age. It rises from layered, fossil-toned dark water (#0a1816, #123330) where faint ghostly silhouettes of mosasaurs and ammonites dissolve into the silver-misted depth (#aec4bc) behind it. Warm tan and gold highlights (#c0894c, #e8c487) catch its leading edges. Painterly digital illustration, deep-time reverence, museum-relic texture. Keep the turtle centered and contained within the central 75% of the square frame with an even margin around it; fill the whole frame with the scene, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```

### BQ-SPEC-REP-007 · Closing Plate

*Dermochelys coriacea* · IUCN VU · slug `leatherback-closing` · output `leatherback-closing_specimen_01.{png,svg}`

```text
A reverent full-body portrait of a leatherback sea turtle rendered as a masterwork of tanned leather and bronze — the seven-ridged leather carapace gleaming with oiled highlights, long bronze-edged flippers spread mid-glide, suspended in deep still teal-green water (#123330 deepening to #050d0c) over a barely-visible pale rippled seabed. A single shaft of cold light from above catches the leather in warm tan and gold (#c0894c, #e8c487); the depths fall away to dark behind it. Calm and monumental, museum-plate composition. Painterly digital illustration, luxury-artifact reverence. Keep the whole turtle centered within the central 75% of the square frame with clear water around it; fill the whole frame with the scene, no border. Square 1:1, 1024x1024.
Negative prompt: No text, no labels, no watermarks, no borders, no UI frames, no white or bright saturated backgrounds, no sky or daylit water surface, no cartoon or flat vector style, no clipart, no stock-photo look, no busy backgrounds, no multiple competing subjects, no cheerful lighting, no human figures, no boats.
```
