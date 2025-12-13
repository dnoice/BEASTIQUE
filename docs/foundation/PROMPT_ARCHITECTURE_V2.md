<!--
✒ Metadata
    - Title: BEASTIQUE Prompt Architecture v2.0 (digiSpace Edition - v2.0)
    - File Name: PROMPT_ARCHITECTURE_V2.md
    - Relative Path: /docs/PROMPT_ARCHITECTURE_V2.md
    - Artifact Type: docs
    - Version: 2.0.0
    - Date: 2025-11-28
    - Update: Friday, November 28, 2025
    - Author: Dennis 'dnoice' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.5
    - Signature:  ︻デ═—··· 🎯 = Aim Twice, Shoot Once!

✒ Description:
    The definitive prompt engineering guide for BEASTIQUE image regeneration.
    Ensures AI image generators produce hyper-realistic industrial material
    transformations—NOT illustrations, NOT paintings, NOT soft organic renders.
    Living creatures rendered as chrome, marble, obsidian, glass—but still alive.

✒ Key Features:
    - Feature 1: Material-first token weighting structure (front-loaded anchors)
    - Feature 2: Safe style reference library (Sorayama, Giger, automotive CGI)
    - Feature 3: Banned style reference blacklist (illustration, watercolor, etc.)
    - Feature 4: Negative prompt templates for major AI platforms
    - Feature 5: Before/after prompt comparison examples
    - Feature 6: Surface finish vocabulary guide
    - Feature 7: Lighting terminology for product-grade renders
    - Feature 8: Environment framing that reinforces material thesis
    - Feature 9: Common failure modes and how to avoid them
    - Feature 10: Regeneration validation checklist

✒ Usage Instructions:
    Reference this document when writing or revising AI Generation Prompt
    Optimization sections in the aquatic_beasts_image_prompts_catalog.md.
    
    Every prompt MUST:
        1. Lead with material anchor (first 10 words)
        2. Specify surface finish properties
        3. Include hyper-realism style anchors
        4. Exclude banned soft/illustration references
        5. End with negative guidance if platform supports

✒ Other Important Information:
    - Dependencies: None (documentation only)
    - Compatible platforms: Midjourney, DALL-E, Stable Diffusion, Firefly, etc.
    - Scope: ALL BEASTIQUE image regeneration across all catalogs
    - Failure consequence: Soft illustration output instead of industrial material
---------
-->

# 🎯 BEASTIQUE Prompt Architecture v2.0

## Hyper-Realistic Industrial Material Transformation

> **Core Thesis:** Living creatures rendered as industrial materials—chrome, marble, 
> obsidian, glass—but still alive, still swimming, still breathing. NOT taxidermy. 
> NOT illustration. NOT soft organic renders. **Impossible but alive.**

---

## Table of Contents

1. [The Problem We're Solving](#1-the-problem-were-solving)
2. [Prompt Token Weighting](#2-prompt-token-weighting)
3. [Material Anchor Library](#3-material-anchor-library)
4. [Surface Finish Vocabulary](#4-surface-finish-vocabulary)
5. [Safe Style References](#5-safe-style-references)
6. [Banned Style References](#6-banned-style-references)
7. [Negative Prompt Templates](#7-negative-prompt-templates)
8. [Lighting Terminology](#8-lighting-terminology)
9. [Environment Framing](#9-environment-framing)
10. [Prompt Structure Template](#10-prompt-structure-template)
11. [Before/After Examples](#11-beforeafter-examples)
12. [Common Failure Modes](#12-common-failure-modes)
13. [Regeneration Validation Checklist](#13-regeneration-validation-checklist)

---

## 1. The Problem We're Solving

### Failure Mode Observed

When prompts emphasize **color + environment + anatomy** but under-emphasize **material transformation**, AI generators default to:

- Natural organic textures (fish skin, mammal hide)
- Illustration/painterly styles
- Soft edges and diffused surfaces
- "Pretty nature art" instead of "industrial artifact"

### The BEASTIQUE Standard

Every regenerated image must pass the **"What Is This Made Of?" Test:**

> If someone asks "What material is this creature made of?" the answer must be 
> immediate and specific: "Chrome." "Marble." "Obsidian." "Damascus steel."
> 
> If the answer is "...fish skin?" — **the prompt failed.**

---

## 2. Prompt Token Weighting

AI image generators weight tokens by position. **First tokens = highest weight.**

### Token Priority Order

```
Position 1-10:   MATERIAL ANCHOR (highest weight)
Position 11-25:  SURFACE PROPERTIES
Position 26-40:  SPECIES ANATOMY
Position 41-60:  LIGHTING/ENVIRONMENT
Position 61-80:  STYLE ANCHORS
Position 81+:    NEGATIVE GUIDANCE
```

### Critical Rule

**NEVER start a prompt with species name or environment.**

```
❌ WRONG:  "Arctic char swimming in glacial waters with metallic scales..."
✅ RIGHT:  "Hyper-realistic chrome-plated fish sculpture, Arctic char, 
           mirror-polish automotive finish..."
```

The word "swimming" tells the AI "make it look alive and natural." 
The phrase "chrome-plated sculpture" tells the AI "make it look manufactured."

---

## 3. Material Anchor Library

Use these exact phrases in the first 10 words of every prompt.

### Metal Materials

| Material | Anchor Phrase |
|----------|---------------|
| Chrome | `Hyper-realistic polished chrome sculpture` |
| Brushed Steel | `Brushed stainless steel industrial sculpture` |
| Damascus Steel | `Forged Damascus steel with visible pattern layers` |
| Copper/Bronze | `Patinated bronze museum sculpture` |
| Gold | `24-karat gold-plated luxury object` |
| Gunmetal | `Matte gunmetal aerospace-grade finish` |

### Stone Materials

| Material | Anchor Phrase |
|----------|---------------|
| Marble | `Polished Carrara marble carved sculpture` |
| Obsidian | `Volcanic obsidian glass sculpture` |
| Jade | `Imperial jade carved artifact` |
| Malachite | `Polished malachite with natural banding` |
| Onyx | `Black onyx gemstone sculpture` |

### Glass/Crystal Materials

| Material | Anchor Phrase |
|----------|---------------|
| Crystal | `Swarovski crystal sculpture with light refraction` |
| Murano Glass | `Hand-blown Murano glass with internal color` |
| Holographic | `Holographic iridescent glass material` |
| Translucent | `Translucent resin sculpture with internal glow` |

### Ceramic/Porcelain Materials

| Material | Anchor Phrase |
|----------|---------------|
| Porcelain | `Fine bone china porcelain sculpture` |
| Raku | `Japanese raku pottery with crackle glaze` |
| Celadon | `Celadon ceramic with jade-green glaze` |

### Specialty Materials

| Material | Anchor Phrase |
|----------|---------------|
| Bioluminescent | `Bioluminescent material with internal light emission` |
| Holographic Chrome | `Holographic chrome with rainbow light shift` |
| Liquid Metal | `Liquid mercury metallic surface` |
| Pearlescent | `Automotive pearlescent multi-layer paint` |

---

## 4. Surface Finish Vocabulary

Specify exact surface properties immediately after material anchor.

### Reflectivity Scale

| Term | Meaning | Roughness Value |
|------|---------|-----------------|
| Mirror-polish | Perfect reflection, no diffusion | 0.0-0.05 |
| High-gloss | Sharp reflections, minimal diffusion | 0.05-0.15 |
| Satin | Soft reflections, visible but diffused | 0.15-0.25 |
| Semi-matte | Minimal reflection, soft highlight | 0.25-0.40 |
| Matte | No reflection, flat surface | 0.40-0.60 |
| Textured matte | No reflection, visible texture | 0.60+ |

### Surface Texture Terms

**Use these:** `polished, brushed, hammered, etched, sandblasted, 
anodized, powder-coated, chrome-plated, electroplated, forged, cast, 
carved, faceted, beveled, machined, lathed, CNC-milled`

**Avoid these:** `smooth, soft, organic, natural, skin-like, fleshy`

---

## 5. Safe Style References

These references reinforce hyper-realistic industrial material rendering.

### Artists/Designers

| Reference | Use For |
|-----------|---------|
| **Hajime Sorayama** | Chrome, reflective metal, gynoid aesthetic |
| **HR Giger** | Biomechanical, dark industrial organic fusion |
| **Syd Mead** | Futurism, vehicle design, industrial concept |
| **Jeff Koons** | Polished balloon sculptures, mirror-chrome |
| **Anish Kapoor** | Reflective installations, vantablack, curves |
| **Zaha Hadid** | Parametric architecture, flowing metal forms |
| **Ron Mueck** | Hyper-realistic sculpture, uncanny detail |

### Industry References

| Reference | Use For |
|-----------|---------|
| **Automotive photography** | Chrome, paint finishes, studio lighting |
| **Luxury watch macro** | Polished metal, precision, mechanical detail |
| **Jewelry photography** | Gemstones, gold, reflective surfaces |
| **Industrial design viz** | Product renders, material accuracy |
| **Weta/ILM CGI** | Creature design, realistic material shaders |
| **AAA game cinematics** | High-fidelity creature rendering |
| **Architectural visualization** | Material accuracy, lighting quality |

### Rendering Terminology

**Use these:** `Octane render, V-Ray, Unreal Engine 5, photorealistic CGI, 
8K texture, ray-traced reflections, global illumination, subsurface scattering, 
physically-based rendering (PBR), HDRI lighting`

---

## 6. Banned Style References

**NEVER use these terms.** They trigger illustration/soft rendering modes.

### Absolute Blacklist

| Banned Term | Why It Fails |
|-------------|--------------|
| ❌ Illustration | Triggers flat, graphic styles |
| ❌ Watercolor | Soft edges, transparent washes |
| ❌ Painterly | Visible brushstrokes, texture |
| ❌ Children's book | Simplified, friendly, soft |
| ❌ Storybook | Whimsical, illustrated |
| ❌ Cartoon | Simplified, exaggerated |
| ❌ Anime | Stylized, cel-shaded |
| ❌ Sketch | Unfinished, line-based |
| ❌ Hand-drawn | Organic imperfection |
| ❌ Folk art | Naive, craft aesthetic |
| ❌ Whimsical | Soft, playful, cute |
| ❌ Impressionist | Soft focus, color blending |
| ❌ Expressionist | Emotional distortion |
| ❌ Taxidermy | Dead, preserved, mounted |
| ❌ Specimen | Scientific, clinical, lifeless |
| ❌ Documentary | Natural, unaltered |
| ❌ Nature photography | Organic, real-world capture |

### Dangerous Phrases

| Phrase | Problem |
|--------|---------|
| ❌ "Swimming gracefully" | Implies natural organic movement |
| ❌ "Beautiful creature" | Triggers pretty nature art |
| ❌ "Majestic animal" | Wildlife photography mode |
| ❌ "In its natural habitat" | Documentary realism |
| ❌ "Lifelike" | Organic accuracy, not material |
| ❌ "Realistic fish" | Natural texture default |

---

## 7. Negative Prompt Templates

Use platform-appropriate negative guidance.

### Midjourney (--no flag)

```
--no illustration, painting, watercolor, sketch, cartoon, anime, 
soft, organic texture, natural skin, fish scales, documentary, 
wildlife photography, blurry, low quality
```

### Stable Diffusion / SDXL

```
Negative prompt: illustration, painting, watercolor, sketch, 
cartoon, anime, hand-drawn, soft focus, organic texture, 
natural fish skin, realistic scales, nature documentary, 
wildlife photography, blurry, low resolution, jpeg artifacts
```

### DALL-E 3 (embedded in prompt)

```
...NOT an illustration, NOT a painting, NOT watercolor, 
NOT cartoon, NOT anime, photorealistic CGI only, 
NO organic fish texture, NO natural skin
```

### Firefly (Style Reference)

```
Style: Photorealistic, CGI, 3D Render
Avoid: Illustration, Painting, Sketch, Watercolor
```

---

## 8. Lighting Terminology

Lighting reinforces material perception. Use product/studio terminology.

### Recommended Lighting Terms

| Term | Effect |
|------|--------|
| **Studio lighting** | Clean, controlled, product-grade |
| **Three-point lighting** | Classic product photography setup |
| **Rim lighting** | Edge definition, material separation |
| **Caustic lighting** | Light refraction through water/glass |
| **Volumetric god rays** | Dramatic depth, atmospheric |
| **HDRI environment** | Realistic reflections on chrome |
| **Softbox key light** | Even illumination, soft shadows |
| **Specular highlights** | Material reflectivity emphasis |
| **Chiaroscuro** | Dramatic contrast, gallery feel |

### Avoid These

| Term | Problem |
|------|---------|
| ❌ "Natural lighting" | Organic, documentary feel |
| ❌ "Ambient light" | Flat, undefined |
| ❌ "Soft glow" | Dreamy, illustration-like |
| ❌ "Warm sunlight" | Nature photography mode |

---

## 9. Environment Framing

Environment should reinforce "museum display" or "product photography" — NOT "nature documentary."

### Safe Environment Frames

| Frame | Use For |
|-------|---------|
| **Museum pedestal display** | Sculptural specimens |
| **Product photography backdrop** | Clean isolation |
| **Gallery installation** | Art object presentation |
| **Underwater studio** | Controlled aquatic setting |
| **Industrial showroom** | Chrome/metal pieces |
| **Luxury display case** | Precious material emphasis |

### Underwater Environments (Safe)

```
"...suspended in crystalline water with studio lighting..."
"...underwater product photography environment..."
"...submerged in clear water with controlled volumetric lighting..."
```

### Underwater Environments (Dangerous)

```
❌ "...swimming in the ocean..."
❌ "...in its natural coral reef habitat..."
❌ "...hunting prey in murky waters..."
```

---

## 10. Prompt Structure Template

### Complete Prompt Formula

```
[MATERIAL ANCHOR - 10 words]
Hyper-realistic [MATERIAL] sculpture of [SPECIES], 

[SURFACE PROPERTIES - 15 words]
[finish type] surface, [reflectivity], [texture detail], 
photorealistic material accuracy,

[ANATOMICAL FEATURES - 15 words]
[species-specific anatomy], [distinctive features], 
anatomically correct [species] form,

[LIGHTING - 10 words]
[lighting type], [light quality], studio-grade illumination,

[ENVIRONMENT - 10 words]
[environment type], [atmosphere], [depth/context],

[STYLE ANCHORS - 15 words]
[artist reference] aesthetic, Octane render, 8K detail, 
CGI creature design, photorealistic,

[NEGATIVE GUIDANCE - 15 words]
NOT illustration, NOT painting, NOT watercolor, NOT organic texture,
NOT natural skin, photorealistic only
```

### Example: Arctic Char (v2 Prompt)

```
Hyper-realistic chrome-plated fish sculpture of Arctic char,
mirror-polish automotive finish with rainbow pearlescent shift, 
sharp specular reflections, metallic surface texture,
anatomically accurate salmonid body with adipose fin, 
pale spot pattern rendered as embedded LED points,
studio three-point lighting with rim light edge definition,
suspended in crystalline water with volumetric god rays,
Hajime Sorayama chrome aesthetic, Octane render, 8K texture,
automotive photography style, CGI product visualization,
NOT illustration, NOT painting, NOT organic fish skin, 
NOT watercolor, NOT documentary photography, photorealistic CGI only
```

---

## 11. Before/After Examples

### Arctic Char

**v1 (Failed):**
```
Key terms: arctic char, Salvelinus alpinus, pearl-metallic rainbow gradient,
sub-glacial ice environment, cold spectrum lighting, BBC Earth documentary 
style meets industrial material palette...
```
*Result: Beautiful nature documentary fish, no material transformation*

**v2 (Fixed):**
```
Hyper-realistic chrome-plated fish sculpture of Arctic char,
mirror-polish automotive finish with rainbow pearlescent shift,
sharp specular reflections, metallic surface NOT organic scales,
Hajime Sorayama aesthetic, Octane render, 8K texture,
NOT illustration, NOT documentary, NOT natural fish skin
```

---

### Dugong

**v1 (Failed):**
```
Key terms: dugong, iridescent pink-purple-blue gradient, marble veining,
Lisa Frank rainbow aesthetic meets marine documentary...
```
*Result: Naturally pink animal with visible veins, no marble quality*

**v2 (Fixed):**
```
Hyper-realistic polished marble sculpture of Dugong,
Carrara marble with pink-purple-blue mineral veining,
high-gloss stone surface with sharp specular highlights,
Jeff Koons polished sculpture aesthetic, Octane render,
NOT organic skin, NOT natural mammal, NOT soft texture,
carved stone material only
```

---

### Clown Triggerfish

**v1 (Failed):**
```
Key terms: clown triggerfish, Art Deco geometric marble sculpture,
terracotta-orange teal panels, Frank Lloyd Wright stained glass 
meets tropical aquarium...
```
*Result: Paper origami craft, not polished stone*

**v2 (Fixed):**
```
Hyper-realistic carved stone sculpture of Clown Triggerfish,
polished terracotta and teal jade inlay, Art Deco geometric panels,
high-gloss carved marble finish with sharp faceted edges,
architectural sculpture aesthetic, museum artifact quality,
Octane render, 8K texture detail, NOT paper, NOT origami,
NOT craft material, polished stone only
```

---

## 12. Common Failure Modes

| Symptom | Cause | Fix |
|---------|-------|-----|
| Organic skin texture | Material anchor too late in prompt | Move material to first 10 words |
| Painterly/soft look | "Beautiful" or "majestic" in prompt | Remove emotional adjectives |
| Illustration style | Style reference contamination | Check for banned terms |
| Natural habitat feel | "Swimming" or "hunting" verbs | Use static display framing |
| Too realistic (natural) | "Lifelike" or "realistic animal" | Specify "realistic MATERIAL" not "realistic creature" |
| Flat/matte when should be glossy | Missing reflectivity terms | Add "mirror-polish" "specular highlights" |
| Wrong material entirely | Material anchor too vague | Use specific material phrases from library |

---

## 13. Regeneration Validation Checklist

Before approving a regenerated image, verify:

### Material Test
- [ ] Can you immediately name the material? (Chrome/Marble/Obsidian/etc.)
- [ ] Does the surface have appropriate reflectivity?
- [ ] Are specular highlights visible and sharp?
- [ ] Is there NO organic skin/scale texture?

### Style Test
- [ ] Does it look like CGI/3D render, NOT illustration?
- [ ] Are edges sharp and defined, NOT soft/painterly?
- [ ] Is the overall feel "industrial artifact" NOT "nature art"?

### Anatomy Test
- [ ] Is the species recognizable and accurate?
- [ ] Are distinctive features preserved?
- [ ] Does the material transformation enhance, not obscure, the form?

### Mood Test
- [ ] Does it feel ALIVE but IMPOSSIBLE?
- [ ] Is there tension between organic form and industrial material?
- [ ] Would this fit in a high-end design museum?

---

## Final Word

**Material first. Hyper-realism always. Illustration never.**

Every prompt must answer the question: "What is this creature made of?"

If the answer isn't immediate and specific — the prompt needs work.

︻デ═—··· 🎯 = Aim Twice, Shoot Once!

---

*Document generated: Friday, November 28, 2025*