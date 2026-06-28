#!/usr/bin/env python3
"""
normalize-sos-frames.py
-----------------------
Removes the Inkscape translate(84.725, -535.07) offset from SOS frame SVGs,
baking coordinates into native viewBox space (0-1792 x 0-1024).

The CR frame is already in native coords — this normalizes EN, EW, EX, LC, NT, VU
to match that same coordinate system.

Transform math per element type:
  No own transform:   new = old + (TX, TY)
  scale(1,-1):        new = old + (TX, -TY)     [scale flips Y before translate]
  rotate(90):         new = old + (TY, -TX)      [rotate swaps axes before translate]
"""

import xml.etree.ElementTree as ET
import re
import os
import sys

# ── The Inkscape offset to remove ──
TX = 84.725
TY = -535.07

SVG_NS = 'http://www.w3.org/2000/svg'
XLINK_NS = 'http://www.w3.org/1999/xlink'

ET.register_namespace('', SVG_NS)
ET.register_namespace('xlink', XLINK_NS)


def fmt(n):
    """Format number: up to 4 decimal places, strip trailing zeros."""
    if abs(n) < 1e-6:
        return '0'
    s = f'{n:.4f}'.rstrip('0').rstrip('.')
    return '0' if s == '-0' else s


def offset_moveto(d, dx, dy):
    """Offset the first m/M command coordinates in a path d attribute.
    All subsequent commands are relative so they stay unchanged."""
    m = re.match(
        r'([mM])\s*([-+]?\d*\.?\d+(?:e[-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:e[-+]?\d+)?)',
        d
    )
    if not m:
        print(f'  WARNING: Cannot parse moveto: {d[:60]}...')
        return d

    cmd = m.group(1)
    nx = float(m.group(2)) + dx
    ny = float(m.group(3)) + dy
    return f'{cmd}{fmt(nx)} {fmt(ny)}{d[m.end():]}'


def transform_element(el):
    """Transform one element's coordinates to remove parent translate."""
    tag = el.tag.split('}')[-1] if '}' in el.tag else el.tag
    t = el.get('transform', '')

    # Determine coordinate offsets based on element's own transform
    if 'scale(1,-1)' in t:
        dx, dy = TX, -TY           # +84.725, +535.07
    elif 'rotate(90)' in t:
        dx, dy = TY, -TX           # -535.07, -84.725
    else:
        dx, dy = TX, TY            # +84.725, -535.07

    if tag == 'path':
        el.set('d', offset_moveto(el.get('d', ''), dx, dy))
    elif tag == 'ellipse':
        el.set('cx', fmt(float(el.get('cx', '0')) + dx))
        el.set('cy', fmt(float(el.get('cy', '0')) + dy))
    elif tag == 'rect':
        el.set('x', fmt(float(el.get('x', '0')) + dx))
        el.set('y', fmt(float(el.get('y', '0')) + dy))


def walk_and_transform(parent):
    """Recursively transform all drawable elements."""
    count = 0
    for el in parent:
        tag = el.tag.split('}')[-1] if '}' in el.tag else el.tag
        if tag == 'g':
            count += walk_and_transform(el)
        elif tag in ('path', 'ellipse', 'rect'):
            transform_element(el)
            count += 1
    return count


def process_svg(filepath):
    """Normalize one SVG file in place."""
    name = os.path.basename(filepath)
    print(f'\n  {name}')

    tree = ET.parse(filepath)
    root = tree.getroot()

    # Find the translated <g> wrapper
    translated = None
    idx = 0
    for i, child in enumerate(root):
        if 'translate' in child.get('transform', ''):
            translated = child
            idx = i
            break

    if translated is None:
        print('    Already in native coords — skipped')
        return

    # Strip gradientTransform from defs
    for grad in root.iter(f'{{{SVG_NS}}}linearGradient'):
        if 'gradientTransform' in grad.attrib:
            del grad.attrib['gradientTransform']
            print(f'    Stripped gradientTransform from #{grad.get("id")}')

    # Transform all element coordinates
    count = walk_and_transform(translated)
    print(f'    Transformed {count} elements')

    # Unwrap: promote translated group's children into root
    children = list(translated)
    root.remove(translated)
    for i, child in enumerate(children):
        root.insert(idx + i, child)

    # Write back
    tree.write(filepath, encoding='unicode', xml_declaration=False)

    # Ensure trailing newline
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if not content.endswith('\n'):
        with open(filepath, 'a', encoding='utf-8') as f:
            f.write('\n')

    size = os.path.getsize(filepath)
    print(f'    Saved: {size:,} bytes')


def main():
    # Resolve frames directory relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    frames_dir = os.path.join(script_dir, '..', 'assets', 'custom-designs', 'sos-frames')
    frames_dir = os.path.normpath(frames_dir)

    if not os.path.isdir(frames_dir):
        print(f'ERROR: Frames directory not found: {frames_dir}')
        sys.exit(1)

    print(f'SOS Frame Normalizer')
    print(f'Directory: {frames_dir}')
    print(f'Offset to remove: translate({TX}, {TY})')

    # Process only the 6 frames with the offset (CR is already clean)
    targets = ['en', 'ew', 'ex', 'lc', 'nt', 'vu']

    for code in targets:
        path = os.path.join(frames_dir, f'bq_sos_frame_{code}.svg')
        if os.path.exists(path):
            process_svg(path)
        else:
            print(f'\n  bq_sos_frame_{code}.svg — NOT FOUND')

    print(f'\n  Done — all frames normalized to native viewBox coordinates.')


if __name__ == '__main__':
    main()
