#!/usr/bin/env python3
"""
BEASTIQUE — Combine Swatch SVGs
================================
Generates consolidated SVG palette files with the species image linked
alongside all three algorithm palettes (K-MEANS, MEDIAN CUT, HISTOGRAM).

Layout:
  ┌─────────────────────────┬──────────────────────────┐
  │                         │  SPECIES NAME            │
  │                         │                          │
  │      Species Image      │  K-MEANS                 │
  │     (linked, not        │  [■][■][■][■][■]         │
  │      embedded)          │                          │
  │                         │  MEDIAN CUT              │
  │                         │  [■][■][■][■][■]         │
  │                         │                          │
  │                         │  HISTOGRAM               │
  │                         │  [■][■][■][■][■]         │
  └─────────────────────────┴──────────────────────────┘

Usage:
  python combine-swatches.py
"""

import json
import os
from PIL import Image

BASE = os.path.join(os.path.dirname(__file__), '..', 'data', 'color-palettes', 'aquatic')
SWATCH_DIR = os.path.join(BASE, 'swatches')
COMBINED_JSON = os.path.join(BASE, 'palettes-combined.json')
IMG_DIR = os.path.join(os.path.dirname(__file__), '..', 'assets', 'images', 'aquatic')

# Relative path from swatches/ to images/aquatic/
IMG_REL_PATH = '../../../assets/images/aquatic'


def generate_combined_svg(image_entry):
    name = image_entry['image']
    filename = image_entry['file'].split('/')[-1]  # e.g. vaquita-1.png
    palettes = image_entry['palettes']

    # Get actual image dimensions for correct aspect ratio
    img_path = os.path.join(IMG_DIR, filename)
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            img_w, img_h = img.size
    else:
        img_w, img_h = 1792, 1024  # fallback

    aspect = img_w / img_h

    # ── Layout dimensions ──
    n_colors = 5
    swatch_w = 72
    swatch_h = 72
    swatch_gap = 8
    label_h = 36          # Space below swatch for hex + percentage
    algo_label_h = 18     # Algorithm name above row
    row_h = algo_label_h + swatch_h + label_h
    gap_between_rows = 14
    n_algos = 3
    padding = 14

    # Right panel: palette area
    palette_row_w = n_colors * (swatch_w + swatch_gap) - swatch_gap
    right_panel_w = palette_row_w + padding * 2
    header_h = 48         # Species name at top of right panel
    palette_area_h = header_h + n_algos * row_h + (n_algos - 1) * gap_between_rows + padding

    # Left panel: image sized to match palette area height
    img_display_h = palette_area_h
    img_display_w = round(img_display_h * aspect)

    total_w = img_display_w + right_panel_w
    total_h = palette_area_h

    # Image relative href
    img_href = f'{IMG_REL_PATH}/{filename}'

    lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"',
        f'     viewBox="0 0 {total_w} {total_h}" width="{total_w}" height="{total_h}">',
        f'  <!-- Combined palette for {name} -->',
        f'  <rect width="{total_w}" height="{total_h}" fill="#0a0a0a" rx="6"/>',
        '',
        f'  <!-- Species image (linked) -->',
        f'  <image x="0" y="0" width="{img_display_w}" height="{img_display_h}"',
        f'         preserveAspectRatio="xMidYMid slice"',
        f'         href="{img_href}"/>',
        '',
        f'  <!-- Species title -->',
        f'  <text x="{img_display_w + right_panel_w / 2}" y="32"',
        f'        text-anchor="middle" fill="#e8e0d4"',
        f'        font-family="Raleway, sans-serif" font-size="13"',
        f'        font-weight="700" letter-spacing="0.12em">{name.upper()}</text>',
    ]

    algo_order = [
        ('kmeans', 'K-MEANS'),
        ('mediancut', 'MEDIAN CUT'),
        ('histogram', 'HISTOGRAM'),
    ]

    for algo_idx, (algo_key, algo_display) in enumerate(algo_order):
        colors = palettes[algo_key]
        row_y = header_h + algo_idx * (row_h + gap_between_rows)

        # Algorithm label
        label_x = img_display_w + padding
        lines.append(f'  <text x="{label_x}" y="{row_y + 13}"'
                     f' fill="rgba(232,224,212,0.45)"'
                     f' font-family="Raleway, sans-serif" font-size="9"'
                     f' font-weight="600" letter-spacing="0.18em">{algo_display}</text>')

        # Swatches
        for i, color in enumerate(colors):
            x = img_display_w + padding + i * (swatch_w + swatch_gap)
            y = row_y + algo_label_h

            hex_val = color['hex']
            pct = color.get('percentage', 0)
            color_name = color.get('name', '')
            lum = color.get('luminance', 0.5)
            text_fill = '#0a0a0a' if lum > 0.4 else '#e8e0d4'

            cx = x + swatch_w / 2

            lines.extend([
                f'  <rect x="{x}" y="{y}" width="{swatch_w}" height="{swatch_h}" fill="{hex_val}" rx="4"/>',
                f'  <text x="{cx}" y="{y + swatch_h/2 + 4}" text-anchor="middle"'
                f' fill="{text_fill}" font-family="Raleway, sans-serif"'
                f' font-size="8" font-weight="500" opacity="0.8">{color_name}</text>',
                f'  <text x="{cx}" y="{y + swatch_h + 14}" text-anchor="middle"'
                f' fill="#e8e0d4" font-family="monospace" font-size="9">{hex_val}</text>',
                f'  <text x="{cx}" y="{y + swatch_h + 26}" text-anchor="middle"'
                f' fill="rgba(232,224,212,0.45)" font-family="Raleway, sans-serif"'
                f' font-size="7">{pct:.1f}%</text>',
            ])

    lines.append('</svg>')
    return '\n'.join(lines)


def main():
    with open(COMBINED_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)

    created = 0
    removed = 0

    for image_entry in data['images']:
        name = image_entry['image']
        svg_content = generate_combined_svg(image_entry)

        # Write combined file
        combined_path = os.path.join(SWATCH_DIR, f'{name}.svg')
        with open(combined_path, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        created += 1

    # Remove the manually created example file if it exists
    example = os.path.join(SWATCH_DIR, 'dwarf-sperm-whale-1-with-image.svg')
    if os.path.exists(example):
        os.remove(example)
        removed += 1

    remaining = sorted(os.listdir(SWATCH_DIR))
    print(f'Created {created} combined SVGs')
    print(f'Removed {removed} extra files')
    print(f'Files remaining: {len(remaining)}')
    for f in remaining[:3]:
        print(f'  {f}')
    print('  ...')
    for f in remaining[-3:]:
        print(f'  {f}')


if __name__ == '__main__':
    main()
