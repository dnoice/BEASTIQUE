<!--
✒ Metadata
    - Title: Pending Forge Batches (BEASTIQUE Edition - v2.0)
    - File Name: PENDING-BATCHES.md
    - Relative Path: studio/state/forge/PENDING-BATCHES.md
    - Artifact Type: docs
    - Version: 2.0.0
    - Date: 2026-07-09
    - Update: Thursday, July 09, 2026
    - Author: Dennis 'dendogg' Smaltz
    - A.I. Acknowledgement: Anthropic - Claude Fable 5
    - Signature: ︻デ═─── ✦ ✦ ✦ | Aim Twice, Shoot Once!

✒ Changelog:
    - 2.0.0 (2026-07-09) [Anthropic - Claude Fable 5] — Expansion-B wave
      (4 of 5 submitted; geo-line NOT yet submitted). Previous wave (style
      core sets) fully fetched and retired 2026-07-08.
    - 1.0.0 (2026-07-08) — First wave (5 style core batches), fetched same day.

✒ Description:
    Live scratchpad of submitted-but-unfetched forge batch jobs, so batch ids
    never get lost to terminal scrollback. Delete each line after its fetch
    lands; delete the file when empty.

✒ Other Important Information:
    - Dependencies: tools/bq_linocut_forge.py (fetch mode)
    - Compatible platforms: any markdown renderer
---------
-->

# Pending Forge Batches — Expansion-B Wave

Submitted 2026-07-09 · 25 never-rendered species each at high · ~$2.06 each.

```bash
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5aecb7f08190a08d0499d7584c94 --libs studio/prompts/low-poly  --style low-poly  --quality high
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5afa04b88190a3baf3d4fd92b5ef --libs studio/prompts/woodcut   --style woodcut   --quality high
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5b03a3148190ae54942b2993b562 --libs studio/prompts/line-art  --style line-art  --quality high
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5b0cd3c08190a5cb12bf089b3ab2 --libs studio/prompts/stencil  --style stencil  --quality high
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5d09ae4c81909d251ee1a112779e --libs studio/prompts/geo-line --style geo-line --quality high
uv run tools/bq_linocut_forge.py fetch --batch-id batch_6a4f5d26e3d8819089bd6a1270f196af --libs studio/prompts/banners  --style silhouette --quality high
```

All Expansion-B batches + the banner wave are submitted (2026-07-09 ~01:34).
The AQU-103 manta icon redo ran as a live sync — it writes directly, no fetch.
