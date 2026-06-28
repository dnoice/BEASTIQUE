<!--
✒ Metadata
    - Title: Workbench README (BEASTIQUE Edition - v1.1)
    - File Name: README.md
    - Relative Path: studio/workbench/README.md
    - Artifact Type: docs
    - Version: 1.1.0
    - Date: 2026-06-27
    - Update: Saturday, June 27, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Opus 4.8
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 1.1.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Moved with the
      restructure from collections/_workbench/ to studio/workbench/; repointed
      the gallery-path reference accordingly.
    - 1.0.0 (2026-06-27) [Anthropic - Claude Opus 4.8] — Initial workbench README.

✒ Description:
    Holding area for hand-developed studio work — manual traces, low-poly
    studies, and finished designs created by hand in Inkscape. This is NOT part
    of the forge/trace pipeline: nothing here is auto-generated, and the
    pipeline tools never read or write this folder.

✒ Key Features:
    - Keeps hand work out of the gallery render tree (no collision with the
      forge's <gallery>-beasts/<style>/<quality>/ structure).
    - Three buckets by work type: trace-studies, low-poly-studies, designs.
    - Every file is hand-edited (Inkscape) — treat as source, never overwrite.

✒ Other Important Information:
    - Dependencies: none (data/holding area).
    - Promotion: if a trace-study is a final keeper, copy it into the matching
      gallery's <style>/<quality>/traces/ rather than leaving it here.
---------
-->

# BEASTIQUE — Studio Workbench

Hand-developed studio work, kept separate from the forge/trace pipeline. The
pipeline tools never touch this folder.

## Buckets

- **trace-studies/** — hand traces and tracing exercises of individual beasts
  (the `*-trace-outcome` / `*-exercise` files, plus subject raster masters).
- **low-poly-studies/** — low-poly design iterations (the shark deep-dive and
  related `poly-`/`low-poly-` experiments).
- **designs/** — finished `beastique-` named pieces.

## Notes

- Every SVG here is Inkscape hand-edited — treat each as a source file and never
  overwrite it with an auto-trace.
- These are intentionally *outside* the render galleries
  (`studio/collections/<gallery>-beasts/<style>/<quality>/`). To make one part of
  a gallery, copy the keeper into that gallery's `<style>/<quality>/traces/`.
