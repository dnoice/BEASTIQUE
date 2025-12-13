#!/usr/bin/env python3
"""
BEASTIQUE Image Sorter - From YAML Manifest
Reads data/beastique-image-manifest.yaml and copies images to collection folders.
"""

import yaml
import shutil
from pathlib import Path

BASE_DIR = Path("/storage/self/primary/1dd1/dev/projects/github/beastique")
ASSETS_DIR = BASE_DIR / "assets" / "images"
COLLECTIONS_DIR = BASE_DIR / "collections"
MANIFEST_PATH = BASE_DIR / "data" / "beastique-image-manifest.yaml"

# Primary collection keys in the manifest
PRIMARY_COLLECTIONS = [
    "mammalian-beasts",
    "avian-beasts",
    "reptilian-beasts",
    "aquatic-beasts",
    "insecta-beasts",
    "arachnid-beasts",
    "amphibian-beasts",
]


def load_manifest():
    """Load the YAML manifest."""
    with open(MANIFEST_PATH, "r") as f:
        return yaml.safe_load(f)


def sort_images():
    """Copy images based on manifest mappings."""

    manifest = load_manifest()

    sorted_count = 0
    skipped_count = 0
    not_found = []
    errors = []

    for collection in PRIMARY_COLLECTIONS:
        if collection not in manifest:
            print(f"WARNING: Collection '{collection}' not found in manifest")
            continue

        subcategories = manifest[collection]

        for subcategory, images in subcategories.items():
            if not images:
                continue

            dest_dir = COLLECTIONS_DIR / collection / subcategory / "artworks"

            if not dest_dir.exists():
                print(f"WARNING: Destination doesn't exist: {dest_dir}")
                continue

            for image_name in images:
                source_path = ASSETS_DIR / image_name
                dest_path = dest_dir / image_name

                # Check if source exists
                if not source_path.exists():
                    not_found.append(image_name)
                    continue

                # Check if already exists
                if dest_path.exists():
                    print(f"EXISTS: {image_name}")
                    skipped_count += 1
                    continue

                # Copy file
                try:
                    shutil.copy2(source_path, dest_path)
                    print(f"COPIED: {image_name} -> {collection}/{subcategory}/")
                    sorted_count += 1
                except Exception as e:
                    errors.append(f"{image_name}: {e}")

    # Summary
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Copied: {sorted_count}")
    print(f"Already existed: {skipped_count}")
    print(f"Not found in assets: {len(not_found)}")
    print(f"Errors: {len(errors)}")

    if not_found:
        print("\nNOT FOUND IN assets/images/:")
        for n in sorted(set(not_found)):
            print(f"  - {n}")

    if errors:
        print("\nERRORS:")
        for e in errors:
            print(f"  - {e}")

    return sorted_count, skipped_count, not_found, errors


if __name__ == "__main__":
    print("BEASTIQUE Image Sorter - From Manifest")
    print("="*60)
    print(f"Manifest: {MANIFEST_PATH}")
    print(f"Source: {ASSETS_DIR}")
    print(f"Destination: {COLLECTIONS_DIR}")
    print("="*60 + "\n")

    sort_images()
