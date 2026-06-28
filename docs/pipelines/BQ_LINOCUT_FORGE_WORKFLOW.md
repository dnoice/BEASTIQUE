<!--
========================================================================
✒ Metadata
    - Title: BEASTIQUE Linocut Forge — Workflow (BEASTIQUE Edition - v1.1)
    - File Name: BQ_LINOCUT_FORGE_WORKFLOW.md
    - Relative Path: BEASTIQUE/docs/pipelines/BQ_LINOCUT_FORGE_WORKFLOW.md
    - Artifact Type: docs
    - Version: 1.1.0
    - Date: 2026-06-25
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Restructure: repointed
      every forge command from docs/prompts/ to studio/prompts/ and the render
      folder from collections/ to studio/collections/.
    - 1.0.0 (2026-06-25) [Dennis 'dendogg' Smaltz] — Initial forge workflow.

✒ Description:
    The operating workflow for bulk-rendering the BEASTIQUE linocut prompt
    libraries through the OpenAI GPT Image API, driven by bq_linocut_forge.py.
    Records the model/tier/batch decisions and the reasoning behind them, the
    cost math, the calibrate-then-produce plan, and how the rendered output
    feeds the existing trace pipeline.

✒ Key Features:
    - Grounded model/tier recommendation for B&W line art (June 2026 lineup).
    - The negative-prompt-folding decision and why it is required.
    - Two-stage plan: cheap calibration sweep, then batched production.
    - Cost matrix for the 240-prompt library, sync vs batch.
    - Integration map into the render → trace → develop → flatten pipeline,
      including the white-animal invert rule.

✒ Usage Instructions:
    Read top to bottom once. Operate from the "Operating the forge" section.
    The companion engine is BEASTIQUE/tools/bq_linocut_forge.py.

✒ Other Important Information:
    - Dependencies: bq_linocut_forge.py; the openai SDK; an OpenAI API key.
    - Pricing figures are indicative (June 2026) and must be verified against
      the live OpenAI image calculator before any large run.
    - Compatible platforms: AURA (Win 11) and Z-Fold 6 Termux/proot Ubuntu.
========================================================================
-->

# BEASTIQUE Linocut Forge — Workflow

Bulk-render the five linocut prompt libraries (240 prompts) through the OpenAI
GPT Image API, then feed the output into the existing trace pipeline. The
engine is `bq_linocut_forge.py`; this document is the operating manual and the
record of why it is built the way it is.

## TL;DR

1. Use **`gpt-image-2`** (current flagship) at **Medium** for the production
   pass; line art does not need High, and Medium holds prompt adherence on the
   detailed density-map prompts.
2. Run the full library through the **Batch API** for the **50% discount** —
   the whole 240-prompt set lands at roughly **$5**.
3. Generate **2–3 variants per prompt** — at these prices the selectable spread
   is nearly free and matches the harness habit of picking a keeper from a few.
4. Always run **`plan`** (dry-run) first. It parses the real `.md` files,
   estimates the bill, and spends nothing.

## The landscape (June 2026)

The OpenAI image lineup, current flagship first:

| Model | Role | Per-image floor → ceiling |
| ----- | ---- | ------------------------- |
| `gpt-image-2` | Current flagship; arbitrary sizes | ~$0.005 → ~$0.211 |
| `gpt-image-1.5` | Previous flagship | ~$0.009 → ~$0.20 |
| `gpt-image-1` | **Deprecating Oct 23, 2026 — do not anchor on it** | ~$0.011 → ~$0.25 |
| `gpt-image-1-mini` | Budget floor | ~$0.005 → ~$0.052 |

Three facts that shaped the build:

1. **Batch API supports GPT Image.** Confirmed on the GPT Image 2 model page
   (`v1/batch` listed) and the platform changelog. It runs asynchronously over
   a 24-hour window at half the per-image price. A non-interactive 240-image
   library is the textbook batch job.
2. **There is no `negative_prompt` parameter.** The image API takes a single
   `prompt` string (32,000-char limit; our prompts run ~1,500–2,000). The
   "Negative prompt:" line in each library entry must be folded into the
   prompt body as instruction text. The forge does this automatically.
3. **`background: transparent` is supported** (with PNG/webp output). For B&W
   linework that yields the drawing on alpha with no white box — useful for
   direct layout use, though the default stays opaque white to match the trace
   bed (see integration below).

## Decisions and reasoning

### Model and tier — `gpt-image-2`, Medium

The output is graphically simple (pure black on white, no color, gradient, or
photoreal), which argues for a cheap tier. But the prompts are *detailed* —
per-subject density maps, posture rules, the thin-appendage guard — and that
adherence is what makes a linocut read correctly. Medium on the flagship holds
that adherence while costing a fraction of High. High is reserved for any
subject Medium fumbles; `gpt-image-1-mini` is the fallback if the budget ever
becomes the first constraint. The forge takes `--model` and `--quality`, so the
call is config, not code.

### Batch over sync for production

Sync is for calibration and one-offs — immediate feedback, pay full price.
Batch is for the library — half price, asynchronous, idempotent. The forge
supports both; the only reason to sync the full set is impatience.

### Variants map to the naming slot

The house render name already carries a two-digit slot
(`{slug}_linocut-bw_01.png`). The forge uses it for variants: variant 1 →
`_01`, variant 2 → `_02`. Generating three variants writes `_01/_02/_03` side
by side, so picking a keeper is a glance, not a re-run.

### Negative folding

Each entry's negative line is stripped of its label and appended as
"Strictly avoid all of the following (hard negative constraints): …". This is
the single non-obvious correctness requirement of using this API for these
libraries, and it is handled in one place.

## Cost

The full 240-prompt library, landscape `1536x1024`:

| Tier | Per image | 240 sync | 240 **batch** | 240 × 3 variants batch |
| ---- | --------- | -------- | ------------- | ---------------------- |
| `gpt-image-2` Medium | ~$0.041 | ~$9.84 | **~$4.92** | ~$14.76 |
| `gpt-image-2` High | ~$0.165 | ~$39.60 | **~$19.80** | ~$59.40 |
| `gpt-image-1-mini` High | ~$0.036 | ~$8.64 | **~$4.32** | ~$12.96 |

Figures are indicative; verify against the live calculator before a large run.
The takeaway holds regardless of small drift: the entire library is single- to
low-double-digit dollars, so tier anxiety is misplaced — generate variants.

## The two-stage plan

### Stage 1 — Calibrate (sync, cheap, fast)

Pick a representative handful across the galleries — something furry, something
hard-shelled, something with thin appendages, a white-on-white subject — and
sync them at two tiers to settle the production tier by eye.

```bash
uv run bq_linocut_forge.py sync --libs studio/prompts/linocut \
    --collections insecta --variants 2 --quality medium --workers 4
```

Judge the same way as the trace harness: does Medium hold the density map and
the bold appendages, or does a subject need High? Lock the tier from what the
eye says, not the price.

### Stage 2 — Produce (batch, half price)

Submit the whole library (or one gallery at a time) as a batch, then fetch when
it completes.

```bash
uv run bq_linocut_forge.py batch --libs studio/prompts/linocut --quality medium
uv run bq_linocut_forge.py fetch --batch-id batch_xxx --libs studio/prompts/linocut
```

The ledger records every submitted and completed unit, so fetch is safe to
re-run, and a second `batch` pass only submits what is still missing.

## Integration with the trace pipeline

The forge produces **step one** of the established pipeline. Nothing downstream
changes:

1. **Render** — the forge writes `{slug}_linocut-bw_{NN}.png` into
   `studio/collections/{gallery}-beasts/linocut/`. Merged galleries file correctly:
   REP and AMP both land under `reptilian-beasts/`, INS and ARA under
   `insecta-beasts/`.
2. **Trace** — Potrace at the frozen baseline (Brightness Cutoff / 0.500 /
   Speckles 10 / Smooth 1.00 / Optimize 5.000). Feather- and fur-heavy subjects
   ease Speckles/Optimize per the avian defection note.
3. **Develop** — the SVG is working material, not the product: node cleanup,
   comping, layer splits.
4. **Flatten** — ship the optimized PNG/WebP.

Two render-side notes carry straight in:

- **Background stays opaque white by default** so the render drops onto the
  trace bed exactly like the harness renders. Use `--background transparent`
  only when the linework is going straight into a layout without tracing.
- **White-animal cohort** (polar bear, snowy owl, beluga, arctic fox, harp seal
  pup): the silhouette does not fall out of a normal trace, because the subject
  is the same value as the page. The fix is **Invert** in the trace — fill the
  bright subject instead of the dark ink — which yields the solid body. So a
  white-animal render yields two assets from one file: the **non-inverted**
  linework and the **inverted** silhouette/stamp. No separate render settings
  are needed; flag these subjects at the trace step, not the forge step.

## Operating the forge

```bash
# Dry-run the whole library — parses, estimates, spends nothing
uv run bq_linocut_forge.py plan --libs studio/prompts/linocut

# Dry-run a heavier scenario
uv run bq_linocut_forge.py plan --libs studio/prompts/linocut --variants 3 --quality high

# Calibrate live on one gallery
uv run bq_linocut_forge.py sync --libs studio/prompts/linocut --collections mammalian

# Submit the full library as a batch (50% off)
uv run bq_linocut_forge.py batch --libs studio/prompts/linocut --quality medium

# Fetch a finished batch
uv run bq_linocut_forge.py fetch --batch-id batch_xxx --libs studio/prompts/linocut
```

Key flags: `--collections` filters by gallery slug; `--variants N` fans out;
`--quality` and `--model` set the tier; `--background transparent` for alpha
output; `--force` ignores the ledger and regenerates. Set `OPENAI_API_KEY` in
the environment before any live mode.

## Caveats

1. **Pricing is indicative.** The forge's table is a convenience; the invoice
   is authoritative. Verify before a large run.
2. **Verification may be required.** GPT Image models can require API
   organization verification on the OpenAI developer console before first use.
3. **Latency.** Complex prompts can take up to ~2 minutes each in sync mode;
   batch trades latency for the discount.
4. **The ledger is the safety net.** It makes every mode re-runnable without
   double-billing. Keep it with the run; do not delete it mid-project.

## Sign-off

The forge turns the five locked prompt libraries into a single batched render
job for a few dollars, files the output into the house tree, and hands step one
to the trace pipeline unchanged. Calibrate by eye, produce by batch, develop by
hand.

︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!
