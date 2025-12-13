#!/usr/bin/env python3
"""
Compare sorted artwork images against database species entries.
Shows matches, gaps, and opportunities.
"""

import sqlite3
import yaml
from pathlib import Path

BASE_DIR = Path("/storage/self/primary/1dd1/dev/projects/github/beastique")
DB_PATH = BASE_DIR / "data" / "database" / "beastique.db"
MANIFEST_PATH = BASE_DIR / "data" / "beastique-image-manifest.yaml"


def load_db_species():
    """Get all species names from database."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT common_name FROM species ORDER BY common_name")
    species = [row[0] for row in cursor.fetchall()]
    conn.close()
    return species


def load_image_names():
    """Get all image base names from manifest (without .png)."""
    with open(MANIFEST_PATH, "r") as f:
        manifest = yaml.safe_load(f)

    images = []
    collections = [
        "mammalian-beasts", "avian-beasts", "reptilian-beasts",
        "aquatic-beasts", "insecta-beasts", "arachnid-beasts", "amphibian-beasts"
    ]

    for coll in collections:
        if coll in manifest:
            for subcat, img_list in manifest[coll].items():
                if img_list:
                    for img in img_list:
                        # Remove .png and number suffix for matching
                        base = img.replace(".png", "")
                        images.append(base)

    return images


def normalize_name(name):
    """Normalize a name for fuzzy matching."""
    return name.lower().replace("'s", "").replace("'", "").replace("-", " ").replace("_", " ").strip()


def find_matches(db_species, image_names):
    """Find matches between database and images."""
    matches = []
    db_no_image = []
    images_no_db = []

    # Normalize all names
    db_normalized = {normalize_name(s): s for s in db_species}

    # Track matched images
    matched_images = set()

    for db_norm, db_orig in db_normalized.items():
        found = False
        for img in image_names:
            img_norm = normalize_name(img)
            # Check if db species name is contained in image name
            if db_norm in img_norm or img_norm in db_norm:
                matches.append((db_orig, img))
                matched_images.add(img)
                found = True
                break
            # Check individual words
            db_words = set(db_norm.split())
            img_words = set(img_norm.split())
            if len(db_words & img_words) >= 2:
                matches.append((db_orig, img))
                matched_images.add(img)
                found = True
                break

        if not found:
            db_no_image.append(db_orig)

    # Find images with no DB match
    for img in image_names:
        if img not in matched_images:
            images_no_db.append(img)

    return matches, db_no_image, images_no_db


def main():
    print("BEASTIQUE: Image vs Database Comparison")
    print("=" * 70)

    db_species = load_db_species()
    image_names = load_image_names()

    print(f"\nDatabase entries: {len(db_species)}")
    print(f"Artwork images: {len(image_names)}")

    matches, db_no_image, images_no_db = find_matches(db_species, image_names)

    print(f"\n{'=' * 70}")
    print(f"MATCHES FOUND: {len(matches)}")
    print(f"{'=' * 70}")
    for db_name, img_name in sorted(matches):
        print(f"  ✓ {db_name:40} <- {img_name}")

    print(f"\n{'=' * 70}")
    print(f"DATABASE SPECIES WITHOUT ARTWORK: {len(db_no_image)}")
    print(f"{'=' * 70}")
    for name in sorted(db_no_image):
        print(f"  ✗ {name}")

    print(f"\n{'=' * 70}")
    print(f"ARTWORK WITHOUT DATABASE ENTRY: {len(images_no_db)}")
    print(f"(These could be added to the database)")
    print(f"{'=' * 70}")

    # Group by type for easier reading
    unique_base_names = set()
    for img in sorted(images_no_db):
        # Remove number suffix to get base animal name
        parts = img.rsplit("-", 1)
        if len(parts) == 2 and parts[1].isdigit():
            base = parts[0]
        else:
            base = img
        unique_base_names.add(base)

    print(f"\nUnique animals in artwork (not in DB): {len(unique_base_names)}")
    for name in sorted(unique_base_names):
        print(f"  + {name}")


if __name__ == "__main__":
    main()
