#!/usr/bin/env python3
"""
BEASTIQUE — Color Palette Extraction Tool
==========================================
Extracts dominant colors from species images using three algorithms:
  1. K-Means Clustering (scikit-learn)
  2. Median Cut (custom implementation)
  3. Histogram Peak Detection (custom implementation)

Outputs:
  - palettes-kmeans.json     — K-Means results for all images
  - palettes-mediancut.json  — Median Cut results for all images
  - palettes-histogram.json  — Histogram Peak results for all images
  - palettes-combined.json   — All three methods side-by-side per image
  - swatches/                — SVG swatch files for each image (one per algorithm)

Usage:
  python extract-colors.py [--input <dir>] [--output <dir>] [--colors <n>]
"""

import argparse
import json
import os
import sys
import colorsys
from pathlib import Path
from collections import Counter

import numpy as np
from PIL import Image
from sklearn.cluster import KMeans


# ═══════════════════════════════════════
# CONFIGURATION
# ═══════════════════════════════════════

DEFAULT_NUM_COLORS = 5
THUMBNAIL_SIZE = (256, 256)  # Downsample for performance
MIN_SATURATION = 0.04        # Filter near-grayscale for prominence ranking
MIN_BRIGHTNESS = 0.03        # Filter near-black
MAX_BRIGHTNESS = 0.97        # Filter near-white


# ═══════════════════════════════════════
# COLOR UTILITIES
# ═══════════════════════════════════════

def rgb_to_hex(r, g, b):
    """Convert RGB (0-255) to hex string."""
    return f"#{int(r):02x}{int(g):02x}{int(b):02x}"


def hex_to_rgb(hex_str):
    """Convert hex string to RGB tuple."""
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16) for i in (0, 2, 4))


def rgb_to_hsl(r, g, b):
    """Convert RGB (0-255) to HSL (h: 0-360, s: 0-100, l: 0-100)."""
    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
    return round(h * 360, 1), round(s * 100, 1), round(l * 100, 1)


def color_name_approx(r, g, b):
    """Approximate a human-readable color name from RGB."""
    h, s, l = rgb_to_hsl(r, g, b)

    # Achromatic
    if s < 10:
        if l < 15:
            return "black"
        elif l < 40:
            return "dark gray"
        elif l < 60:
            return "gray"
        elif l < 85:
            return "light gray"
        else:
            return "white"

    # Chromatic
    hue_names = [
        (15, "red"), (35, "orange"), (55, "yellow"), (75, "yellow-green"),
        (150, "green"), (185, "cyan"), (250, "blue"), (285, "purple"),
        (330, "pink"), (360, "red")
    ]

    for threshold, name in hue_names:
        if h < threshold:
            if l < 25:
                return f"dark {name}"
            elif l > 75:
                return f"light {name}"
            return name

    return "red"


def compute_luminance(r, g, b):
    """Relative luminance per WCAG 2.0."""
    def linearize(c):
        c = c / 255
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)


def contrast_ratio(color1, color2):
    """WCAG contrast ratio between two RGB tuples."""
    l1 = compute_luminance(*color1)
    l2 = compute_luminance(*color2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def format_color_entry(rgb, percentage=None, rank=None):
    """Build a standardized color dict from an RGB tuple."""
    r, g, b = int(rgb[0]), int(rgb[1]), int(rgb[2])
    h, s, l = rgb_to_hsl(r, g, b)
    entry = {
        "hex": rgb_to_hex(r, g, b),
        "rgb": [r, g, b],
        "hsl": [h, s, l],
        "name": color_name_approx(r, g, b),
        "luminance": round(compute_luminance(r, g, b), 4)
    }
    if percentage is not None:
        entry["percentage"] = round(percentage, 2)
    if rank is not None:
        entry["rank"] = rank
    return entry


# ═══════════════════════════════════════
# IMAGE PREPROCESSING
# ═══════════════════════════════════════

def load_and_prepare(image_path):
    """Load image, convert to RGB, thumbnail for performance, return pixel array."""
    img = Image.open(image_path).convert('RGB')
    img.thumbnail(THUMBNAIL_SIZE, Image.Resampling.LANCZOS)
    pixels = np.array(img).reshape(-1, 3)
    return pixels, img


def filter_extreme_pixels(pixels):
    """Remove near-black and near-white pixels that skew results."""
    # Convert to float for HSV check
    hsv = np.array([colorsys.rgb_to_hsv(r/255, g/255, b/255) for r, g, b in pixels])
    brightness = hsv[:, 2]
    mask = (brightness > MIN_BRIGHTNESS) & (brightness < MAX_BRIGHTNESS)
    filtered = pixels[mask]
    # If filtering removed too many pixels, return original
    if len(filtered) < len(pixels) * 0.1:
        return pixels
    return filtered


# ═══════════════════════════════════════
# ALGORITHM 1: K-MEANS CLUSTERING
# ═══════════════════════════════════════

def extract_kmeans(pixels, n_colors=DEFAULT_NUM_COLORS):
    """
    K-Means clustering on RGB pixel space.

    Pros: Mathematically optimal cluster centers, widely used, deterministic(ish)
    Cons: Can merge visually distinct colors if they occupy similar RGB space,
          sensitive to initialization (mitigated with k-means++)
    """
    filtered = filter_extreme_pixels(pixels)

    kmeans = KMeans(
        n_clusters=n_colors,
        n_init=10,
        max_iter=300,
        random_state=42
    )
    kmeans.fit(filtered)

    # Get cluster centers and sizes
    centers = kmeans.cluster_centers_
    labels = kmeans.labels_
    counts = np.bincount(labels, minlength=n_colors)
    total = len(labels)

    # Sort by cluster size (most dominant first)
    order = np.argsort(-counts)

    colors = []
    for rank, idx in enumerate(order):
        rgb = centers[idx]
        pct = (counts[idx] / total) * 100
        colors.append(format_color_entry(rgb, percentage=pct, rank=rank + 1))

    return colors


# ═══════════════════════════════════════
# ALGORITHM 2: MEDIAN CUT
# ═══════════════════════════════════════

def median_cut(pixels, depth, max_depth):
    """
    Recursive median cut quantization.

    Splits the pixel population along the channel with the widest range,
    at the median value of that channel, recursively until we have
    the desired number of buckets.

    Pros: Preserves perceptual color distribution, no randomness,
          handles gradients well
    Cons: Always produces 2^n buckets, less flexible cluster count
    """
    if depth >= max_depth or len(pixels) == 0:
        if len(pixels) == 0:
            return []
        avg = pixels.mean(axis=0)
        return [(avg, len(pixels))]

    # Find channel with widest range
    ranges = pixels.max(axis=0) - pixels.min(axis=0)
    channel = np.argmax(ranges)

    # Sort by that channel and split at median
    sorted_pixels = pixels[pixels[:, channel].argsort()]
    mid = len(sorted_pixels) // 2

    left = median_cut(sorted_pixels[:mid], depth + 1, max_depth)
    right = median_cut(sorted_pixels[mid:], depth + 1, max_depth)

    return left + right


def extract_mediancut(pixels, n_colors=DEFAULT_NUM_COLORS):
    """Median cut quantization — extract dominant palette."""
    filtered = filter_extreme_pixels(pixels)

    # Median cut produces 2^depth buckets — find the right depth
    # We want at least n_colors, then trim to top N
    depth = 0
    while (2 ** depth) < n_colors * 2:
        depth += 1

    buckets = median_cut(filtered, 0, depth)

    # Sort by population (most pixels first)
    buckets.sort(key=lambda b: b[1], reverse=True)

    total = sum(count for _, count in buckets)

    colors = []
    for rank, (rgb, count) in enumerate(buckets[:n_colors]):
        pct = (count / total) * 100
        colors.append(format_color_entry(rgb, percentage=pct, rank=rank + 1))

    return colors


# ═══════════════════════════════════════
# ALGORITHM 3: HISTOGRAM PEAK DETECTION
# ═══════════════════════════════════════

def extract_histogram(pixels, n_colors=DEFAULT_NUM_COLORS):
    """
    3D histogram with peak detection in HSL space.

    Quantizes pixels into HSL buckets, finds the most populated buckets,
    then refines by averaging the actual pixel values in each bucket.

    Pros: Works in perceptual color space (HSL), finds true visual peaks,
          handles images with many subtle gradations well
    Cons: Bucket size affects resolution, can miss thin color bands
    """
    filtered = filter_extreme_pixels(pixels)

    # Convert to HSL space for perceptual bucketing
    # Quantize: Hue into 18 bins (20deg each), Sat into 5 bins, Light into 5 bins
    h_bins, s_bins, l_bins = 18, 5, 5

    bucket_counts = Counter()
    bucket_pixels = {}

    for r, g, b in filtered:
        h, l, s = colorsys.rgb_to_hls(r/255, g/255, b/255)

        hb = min(int(h * h_bins), h_bins - 1)
        sb = min(int(s * s_bins), s_bins - 1)
        lb = min(int(l * l_bins), l_bins - 1)

        key = (hb, sb, lb)
        bucket_counts[key] += 1
        if key not in bucket_pixels:
            bucket_pixels[key] = []
        bucket_pixels[key].append([r, g, b])

    # Get top buckets by population
    top_buckets = bucket_counts.most_common(n_colors * 3)  # Over-select then merge

    total = sum(bucket_counts.values())

    # For each top bucket, compute the average RGB
    candidates = []
    for key, count in top_buckets:
        px = np.array(bucket_pixels[key])
        avg_rgb = px.mean(axis=0)
        pct = (count / total) * 100
        candidates.append((avg_rgb, pct))

    # Merge candidates that are too similar (within deltaE ~25 in RGB space)
    merged = []
    used = set()
    for i, (rgb_i, pct_i) in enumerate(candidates):
        if i in used:
            continue
        group_rgb = [rgb_i]
        group_pct = pct_i
        used.add(i)
        for j, (rgb_j, pct_j) in enumerate(candidates):
            if j in used:
                continue
            dist = np.sqrt(np.sum((rgb_i - rgb_j) ** 2))
            if dist < 40:  # RGB Euclidean distance threshold
                group_rgb.append(rgb_j)
                group_pct += pct_j
                used.add(j)
        # Weighted average of merged colors
        avg = np.mean(group_rgb, axis=0)
        merged.append((avg, group_pct))

    # Sort by percentage and take top N
    merged.sort(key=lambda x: x[1], reverse=True)

    colors = []
    for rank, (rgb, pct) in enumerate(merged[:n_colors]):
        colors.append(format_color_entry(rgb, percentage=pct, rank=rank + 1))

    return colors


# ═══════════════════════════════════════
# SVG SWATCH GENERATOR
# ═══════════════════════════════════════

def generate_swatch_svg(image_name, colors, algorithm, output_dir):
    """
    Generate an SVG palette swatch for a single image + algorithm.

    Layout: horizontal strip with colored rectangles + hex labels,
    plus the image name at the top.
    """
    n = len(colors)
    swatch_w = 80
    swatch_h = 100
    label_h = 50
    header_h = 40
    padding = 10
    total_w = padding + n * (swatch_w + padding)
    total_h = header_h + swatch_h + label_h + padding

    svg_lines = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_w} {total_h}" width="{total_w}" height="{total_h}">',
        f'  <rect width="{total_w}" height="{total_h}" fill="#0a0a0a" rx="6"/>',
        '',
        f'  <!-- {algorithm} palette for {image_name} -->',
        f'  <text x="{total_w / 2}" y="26" text-anchor="middle" fill="#e8e0d4" font-family="Raleway, sans-serif" font-size="12" font-weight="600" letter-spacing="0.1em">{image_name.upper()}</text>',
        f'  <text x="{total_w / 2}" y="{total_h - 6}" text-anchor="middle" fill="rgba(232,224,212,0.3)" font-family="Raleway, sans-serif" font-size="8" letter-spacing="0.15em">{algorithm.upper()}</text>',
        ''
    ]

    for i, color in enumerate(colors):
        x = padding + i * (swatch_w + padding)
        y = header_h

        hex_val = color["hex"]
        pct = color.get("percentage", 0)
        name = color.get("name", "")

        # Text color: white on dark swatches, black on light
        text_fill = "#0a0a0a" if color["luminance"] > 0.4 else "#e8e0d4"

        svg_lines.extend([
            f'  <rect x="{x}" y="{y}" width="{swatch_w}" height="{swatch_h}" fill="{hex_val}" rx="4"/>',
            f'  <text x="{x + swatch_w/2}" y="{y + swatch_h + 18}" text-anchor="middle" fill="#e8e0d4" font-family="monospace" font-size="10">{hex_val}</text>',
            f'  <text x="{x + swatch_w/2}" y="{y + swatch_h + 32}" text-anchor="middle" fill="rgba(232,224,212,0.5)" font-family="Raleway, sans-serif" font-size="8">{pct:.1f}%</text>',
            f'  <text x="{x + swatch_w/2}" y="{y + swatch_h/2 + 4}" text-anchor="middle" fill="{text_fill}" font-family="Raleway, sans-serif" font-size="9" font-weight="500" opacity="0.8">{name}</text>',
        ])

    svg_lines.append('</svg>')

    # Write file
    safe_name = image_name.replace(' ', '-').lower()
    filename = f"{safe_name}--{algorithm}.svg"
    filepath = os.path.join(output_dir, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg_lines))

    return filename


# ═══════════════════════════════════════
# MAIN PIPELINE
# ═══════════════════════════════════════

def process_image(image_path, n_colors):
    """Process a single image through all three algorithms."""
    print(f"  Processing: {os.path.basename(image_path)}")

    pixels, img = load_and_prepare(image_path)
    width, height = img.size

    kmeans_colors = extract_kmeans(pixels, n_colors)
    mediancut_colors = extract_mediancut(pixels, n_colors)
    histogram_colors = extract_histogram(pixels, n_colors)

    # Compute contrast between first two colors for each method
    def top_contrast(colors):
        if len(colors) >= 2:
            c1 = hex_to_rgb(colors[0]["hex"])
            c2 = hex_to_rgb(colors[1]["hex"])
            return round(contrast_ratio(c1, c2), 2)
        return None

    base_name = Path(image_path).stem
    relative_path = f"assets/images/aquatic/{os.path.basename(image_path)}"

    base_info = {
        "image": base_name,
        "file": relative_path,
        "dimensions": {"width": width, "height": height},
        "pixelsSampled": len(pixels)
    }

    return {
        "info": base_info,
        "kmeans": {
            **base_info,
            "algorithm": "kmeans",
            "description": "K-Means clustering in RGB space — finds optimal cluster centers",
            "colors": kmeans_colors,
            "topContrast": top_contrast(kmeans_colors)
        },
        "mediancut": {
            **base_info,
            "algorithm": "mediancut",
            "description": "Median Cut quantization — splits color space along widest channel range",
            "colors": mediancut_colors,
            "topContrast": top_contrast(mediancut_colors)
        },
        "histogram": {
            **base_info,
            "algorithm": "histogram",
            "description": "HSL histogram peak detection — finds perceptual color peaks",
            "colors": histogram_colors,
            "topContrast": top_contrast(histogram_colors)
        }
    }


def main():
    parser = argparse.ArgumentParser(description='BEASTIQUE Color Palette Extraction')
    parser.add_argument('--input', '-i', type=str, help='Input image directory')
    parser.add_argument('--output', '-o', type=str, help='Output directory for JSON + SVG files')
    parser.add_argument('--colors', '-c', type=int, default=DEFAULT_NUM_COLORS, help='Number of dominant colors to extract (default: 5)')
    args = parser.parse_args()

    # Resolve paths relative to this script's location
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    input_dir = Path(args.input) if args.input else project_root / "assets" / "images" / "aquatic"
    output_dir = Path(args.output) if args.output else project_root / "data" / "color-palettes" / "aquatic"

    if not input_dir.exists():
        print(f"Error: Input directory not found: {input_dir}")
        sys.exit(1)

    # Create output directories
    output_dir.mkdir(parents=True, exist_ok=True)
    swatch_dir = output_dir / "swatches"
    swatch_dir.mkdir(exist_ok=True)

    # Find all image files
    extensions = {'.png', '.jpg', '.jpeg', '.webp'}
    images = sorted([
        f for f in input_dir.iterdir()
        if f.suffix.lower() in extensions
    ])

    if not images:
        print(f"Error: No images found in {input_dir}")
        sys.exit(1)

    print(f"\n{'='*60}")
    print(f"  BEASTIQUE — Color Palette Extraction")
    print(f"  {len(images)} images | {args.colors} colors per image | 3 algorithms")
    print(f"{'='*60}\n")

    # Process all images
    kmeans_results = []
    mediancut_results = []
    histogram_results = []
    combined_results = []

    for image_path in images:
        result = process_image(str(image_path), args.colors)

        kmeans_results.append(result["kmeans"])
        mediancut_results.append(result["mediancut"])
        histogram_results.append(result["histogram"])

        combined_results.append({
            **result["info"],
            "palettes": {
                "kmeans": result["kmeans"]["colors"],
                "mediancut": result["mediancut"]["colors"],
                "histogram": result["histogram"]["colors"]
            }
        })

        # Generate SVG swatches for each algorithm
        base_name = result["info"]["image"]
        for algo_key in ["kmeans", "mediancut", "histogram"]:
            generate_swatch_svg(
                base_name,
                result[algo_key]["colors"],
                algo_key,
                str(swatch_dir)
            )

    # ── Write JSON files ──

    meta = {
        "generator": "beastique/tools/extract-colors.py",
        "category": "aquatic",
        "colorsPerImage": args.colors,
        "imageCount": len(images),
        "algorithms": {
            "kmeans": "K-Means clustering in RGB color space. Groups pixels into k clusters and returns cluster centers. Best for finding the mathematically dominant colors.",
            "mediancut": "Median Cut quantization. Recursively splits the color volume along its longest axis at the median. Preserves the natural distribution of the color space.",
            "histogram": "HSL histogram with peak detection and merging. Quantizes into perceptual HSL bins, finds population peaks, and merges similar colors. Best for capturing how humans perceive the image."
        }
    }

    # Individual algorithm files
    for name, results in [("kmeans", kmeans_results), ("mediancut", mediancut_results), ("histogram", histogram_results)]:
        filepath = output_dir / f"palettes-{name}.json"
        data = {"meta": {**meta, "algorithm": name}, "images": results}
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  Wrote: {filepath.name}")

    # Combined file
    combined_filepath = output_dir / "palettes-combined.json"
    combined_data = {"meta": meta, "images": combined_results}
    with open(combined_filepath, 'w', encoding='utf-8') as f:
        json.dump(combined_data, f, indent=2, ensure_ascii=False)
    print(f"  Wrote: {combined_filepath.name}")

    # SVG count
    svg_count = len(list(swatch_dir.glob("*.svg")))
    print(f"  Wrote: {svg_count} SVG swatches in swatches/")

    print(f"\n{'='*60}")
    print(f"  Done! Output: {output_dir}")
    print(f"{'='*60}\n")


if __name__ == '__main__':
    main()
