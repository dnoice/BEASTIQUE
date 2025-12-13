#!/usr/bin/env python3
"""
BEASTIQUE Image Sorter
Sorts animal images into their respective collection/subcategory/artworks folders.
"""

import os
import shutil
import re
from pathlib import Path

# Base paths
BASE_DIR = Path("/storage/self/primary/1dd1/dev/projects/github/beastique")
ASSETS_DIR = BASE_DIR / "assets" / "images"
COLLECTIONS_DIR = BASE_DIR / "collections"

# Mapping of animal keywords to (collection, subcategory)
# Format: keyword -> (collection-folder, subcategory-folder)

ANIMAL_MAPPINGS = {
    # ============ MAMMALIAN-BEASTS ============

    # Primates
    "orangutan": ("mammalian-beasts", "primates"),
    "gorilla": ("mammalian-beasts", "primates"),
    "monkey": ("mammalian-beasts", "primates"),
    "spider-monkey": ("mammalian-beasts", "primates"),
    "tamarin": ("mammalian-beasts", "primates"),
    "lemur": ("mammalian-beasts", "primates"),
    "sifak": ("mammalian-beasts", "primates"),
    "loris": ("mammalian-beasts", "primates"),
    "langur": ("mammalian-beasts", "primates"),
    "vervet": ("mammalian-beasts", "primates"),

    # Carnivora (cats, dogs, bears, mustelids, etc.)
    "lion": ("mammalian-beasts", "carnivora"),
    "tiger": ("mammalian-beasts", "carnivora"),
    "leopard": ("mammalian-beasts", "carnivora"),
    "cheetah": ("mammalian-beasts", "carnivora"),
    "jaguar": ("mammalian-beasts", "carnivora"),
    "panther": ("mammalian-beasts", "carnivora"),
    "cat": ("mammalian-beasts", "carnivora"),
    "margay": ("mammalian-beasts", "carnivora"),
    "wolf": ("mammalian-beasts", "carnivora"),
    "fox": ("mammalian-beasts", "carnivora"),
    "coyote": ("mammalian-beasts", "carnivora"),
    "wild-dog": ("mammalian-beasts", "carnivora"),
    "hyena": ("mammalian-beasts", "carnivora"),
    "bear": ("mammalian-beasts", "carnivora"),
    "grizzly": ("mammalian-beasts", "carnivora"),
    "polar-bear": ("mammalian-beasts", "carnivora"),
    "kodiak": ("mammalian-beasts", "carnivora"),
    "mink": ("mammalian-beasts", "carnivora"),
    "polecat": ("mammalian-beasts", "carnivora"),
    "ferret": ("mammalian-beasts", "carnivora"),
    "marten": ("mammalian-beasts", "carnivora"),
    "fisher": ("mammalian-beasts", "carnivora"),
    "wolverine": ("mammalian-beasts", "carnivora"),
    "otter": ("mammalian-beasts", "carnivora"),
    "stoat": ("mammalian-beasts", "carnivora"),
    "raccoon": ("mammalian-beasts", "carnivora"),
    "kinkajou": ("mammalian-beasts", "carnivora"),
    "cacomistle": ("mammalian-beasts", "carnivora"),
    "husky": ("mammalian-beasts", "carnivora"),
    "malinois": ("mammalian-beasts", "carnivora"),
    "terrier": ("mammalian-beasts", "carnivora"),
    "rottweiler": ("mammalian-beasts", "carnivora"),
    "pinscher": ("mammalian-beasts", "carnivora"),
    "sheepdog": ("mammalian-beasts", "carnivora"),
    "smoushond": ("mammalian-beasts", "carnivora"),
    "leonberger": ("mammalian-beasts", "carnivora"),
    "herder": ("mammalian-beasts", "carnivora"),
    "kishu": ("mammalian-beasts", "carnivora"),
    "akbash": ("mammalian-beasts", "carnivora"),
    "chin": ("mammalian-beasts", "carnivora"),
    "fila": ("mammalian-beasts", "carnivora"),

    # Cetaceans (whales, dolphins)
    "whale": ("mammalian-beasts", "cetaceans"),
    "dolphin": ("mammalian-beasts", "cetaceans"),
    "orca": ("mammalian-beasts", "cetaceans"),
    "vaquita": ("mammalian-beasts", "cetaceans"),

    # Ungulates (hoofed mammals)
    "elephant": ("mammalian-beasts", "elephants"),
    "giraffe": ("mammalian-beasts", "ungulates"),
    "zebra": ("mammalian-beasts", "ungulates"),
    "zebrule": ("mammalian-beasts", "ungulates"),
    "horse": ("mammalian-beasts", "ungulates"),
    "przewalski": ("mammalian-beasts", "ungulates"),
    "rhino": ("mammalian-beasts", "ungulates"),
    "hippo": ("mammalian-beasts", "ungulates"),
    "tapir": ("mammalian-beasts", "ungulates"),
    "okapi": ("mammalian-beasts", "ungulates"),
    "antelope": ("mammalian-beasts", "ungulates"),
    "gazelle": ("mammalian-beasts", "ungulates"),
    "oryx": ("mammalian-beasts", "ungulates"),
    "addax": ("mammalian-beasts", "ungulates"),
    "impala": ("mammalian-beasts", "ungulates"),
    "kudu": ("mammalian-beasts", "ungulates"),
    "nyala": ("mammalian-beasts", "ungulates"),
    "eland": ("mammalian-beasts", "ungulates"),
    "bongo": ("mammalian-beasts", "ungulates"),
    "sitatunga": ("mammalian-beasts", "ungulates"),
    "wildebeest": ("mammalian-beasts", "ungulates"),
    "buffalo": ("mammalian-beasts", "ungulates"),
    "bison": ("mammalian-beasts", "ungulates"),
    "banteng": ("mammalian-beasts", "ungulates"),
    "tamaraw": ("mammalian-beasts", "ungulates"),
    "saola": ("mammalian-beasts", "ungulates"),
    "serow": ("mammalian-beasts", "ungulates"),
    "deer": ("mammalian-beasts", "ungulates"),
    "elk": ("mammalian-beasts", "ungulates"),
    "moose": ("mammalian-beasts", "ungulates"),
    "caribou": ("mammalian-beasts", "ungulates"),
    "pudu": ("mammalian-beasts", "ungulates"),
    "duiker": ("mammalian-beasts", "ungulates"),
    "dik-dik": ("mammalian-beasts", "ungulates"),
    "klipspringer": ("mammalian-beasts", "ungulates"),
    "oribi": ("mammalian-beasts", "ungulates"),
    "reedbuck": ("mammalian-beasts", "ungulates"),
    "blackbuck": ("mammalian-beasts", "ungulates"),
    "hirola": ("mammalian-beasts", "ungulates"),
    "sable": ("mammalian-beasts", "ungulates"),
    "muskox": ("mammalian-beasts", "ungulates"),
    "goat": ("mammalian-beasts", "ungulates"),
    "sheep": ("mammalian-beasts", "ungulates"),
    "camel": ("mammalian-beasts", "ungulates"),
    "warthog": ("mammalian-beasts", "ungulates"),

    # Rodents
    "mouse": ("mammalian-beasts", "rodents"),
    "rat": ("mammalian-beasts", "rodents"),
    "squirrel": ("mammalian-beasts", "rodents"),
    "beaver": ("mammalian-beasts", "rodents"),
    "porcupine": ("mammalian-beasts", "rodents"),
    "capybara": ("mammalian-beasts", "rodents"),
    "chinchilla": ("mammalian-beasts", "rodents"),
    "gopher": ("mammalian-beasts", "rodents"),
    "pika": ("mammalian-beasts", "rodents"),
    "hare": ("mammalian-beasts", "rodents"),
    "rabbit": ("mammalian-beasts", "rodents"),
    "jackrabbit": ("mammalian-beasts", "rodents"),
    "mole-rat": ("mammalian-beasts", "rodents"),
    "lemming": ("mammalian-beasts", "rodents"),

    # Marsupials
    "kangaroo": ("mammalian-beasts", "marsupials"),
    "koala": ("mammalian-beasts", "marsupials"),
    "wombat": ("mammalian-beasts", "marsupials"),
    "quokka": ("mammalian-beasts", "marsupials"),
    "quoll": ("mammalian-beasts", "marsupials"),
    "possum": ("mammalian-beasts", "marsupials"),
    "potoroo": ("mammalian-beasts", "marsupials"),
    "bettong": ("mammalian-beasts", "marsupials"),
    "dunnart": ("mammalian-beasts", "marsupials"),

    # Bats
    "bat": ("mammalian-beasts", "bats"),
    "flying-fox": ("mammalian-beasts", "bats"),

    # Marine mammals
    "seal": ("mammalian-beasts", "marine-mammals"),
    "walrus": ("mammalian-beasts", "marine-mammals"),
    "manatee": ("mammalian-beasts", "marine-mammals"),
    "dugong": ("mammalian-beasts", "marine-mammals"),

    # Other mammals
    "aardvark": ("mammalian-beasts", "other-mammals"),
    "armadillo": ("mammalian-beasts", "other-mammals"),
    "anteater": ("mammalian-beasts", "other-mammals"),
    "sloth": ("mammalian-beasts", "other-mammals"),
    "hedgehog": ("mammalian-beasts", "other-mammals"),
    "shrew": ("mammalian-beasts", "other-mammals"),
    "tenrec": ("mammalian-beasts", "other-mammals"),
    "echidna": ("mammalian-beasts", "other-mammals"),
    "platypus": ("mammalian-beasts", "other-mammals"),
    "hyrax": ("mammalian-beasts", "other-mammals"),
    "panda": ("mammalian-beasts", "other-mammals"),

    # ============ AVIAN-BEASTS ============

    # Raptors
    "eagle": ("avian-beasts", "raptors"),
    "hawk": ("avian-beasts", "raptors"),
    "falcon": ("avian-beasts", "raptors"),
    "kestrel": ("avian-beasts", "raptors"),
    "osprey": ("avian-beasts", "raptors"),
    "vulture": ("avian-beasts", "raptors"),
    "condor": ("avian-beasts", "raptors"),
    "harrier": ("avian-beasts", "raptors"),

    # Owls
    "owl": ("avian-beasts", "owls"),

    # Parrots
    "parrot": ("avian-beasts", "parrots"),
    "macaw": ("avian-beasts", "parrots"),
    "cockatoo": ("avian-beasts", "parrots"),
    "lorikeet": ("avian-beasts", "parrots"),

    # Songbirds
    "robin": ("avian-beasts", "songbirds"),
    "warbler": ("avian-beasts", "songbirds"),
    "finch": ("avian-beasts", "songbirds"),
    "grosbeak": ("avian-beasts", "songbirds"),
    "thrush": ("avian-beasts", "songbirds"),
    "sunbird": ("avian-beasts", "songbirds"),
    "liocichla": ("avian-beasts", "songbirds"),
    "tapaculo": ("avian-beasts", "songbirds"),
    "plushcap": ("avian-beasts", "songbirds"),
    "cock-of-the-rock": ("avian-beasts", "songbirds"),
    "monarch": ("avian-beasts", "songbirds"),

    # Waterfowl
    "duck": ("avian-beasts", "waterfowl"),
    "goose": ("avian-beasts", "waterfowl"),
    "swan": ("avian-beasts", "waterfowl"),
    "pintail": ("avian-beasts", "waterfowl"),
    "shelduck": ("avian-beasts", "waterfowl"),

    # Seabirds
    "albatross": ("avian-beasts", "seabirds"),
    "albatros": ("avian-beasts", "seabirds"),
    "pelican": ("avian-beasts", "seabirds"),
    "booby": ("avian-beasts", "seabirds"),
    "tern": ("avian-beasts", "seabirds"),
    "gull": ("avian-beasts", "seabirds"),
    "petrel": ("avian-beasts", "seabirds"),
    "guillemot": ("avian-beasts", "seabirds"),
    "auklet": ("avian-beasts", "seabirds"),
    "jaeger": ("avian-beasts", "seabirds"),

    # Flightless
    "penguin": ("avian-beasts", "flightless"),
    "ostrich": ("avian-beasts", "flightless"),
    "kiwi": ("avian-beasts", "flightless"),
    "emu": ("avian-beasts", "flightless"),

    # Wading birds
    "crane": ("avian-beasts", "wading-birds"),
    "stork": ("avian-beasts", "wading-birds"),
    "jabiru": ("avian-beasts", "wading-birds"),
    "heron": ("avian-beasts", "wading-birds"),
    "egret": ("avian-beasts", "wading-birds"),
    "sandpiper": ("avian-beasts", "wading-birds"),
    "phalarope": ("avian-beasts", "wading-birds"),
    "coot": ("avian-beasts", "wading-birds"),
    "sanderling": ("avian-beasts", "wading-birds"),

    # Gamebirds
    "pheasant": ("avian-beasts", "gamebirds"),
    "grouse": ("avian-beasts", "gamebirds"),
    "ptarmigan": ("avian-beasts", "gamebirds"),
    "turkey": ("avian-beasts", "gamebirds"),
    "prairie-chicken": ("avian-beasts", "gamebirds"),
    "peacock": ("avian-beasts", "gamebirds"),
    "monal": ("avian-beasts", "gamebirds"),

    # Other birds
    "hummingbird": ("avian-beasts", "other-birds"),
    "kingfisher": ("avian-beasts", "other-birds"),
    "woodpecker": ("avian-beasts", "other-birds"),
    "cuckoo": ("avian-beasts", "other-birds"),
    "roadrunner": ("avian-beasts", "other-birds"),
    "dove": ("avian-beasts", "other-birds"),
    "secretary-bird": ("avian-beasts", "other-birds"),

    # ============ REPTILIAN-BEASTS ============

    # Crocodilians
    "crocodile": ("reptilian-beasts", "crocodilians"),
    "alligator": ("reptilian-beasts", "crocodilians"),
    "caiman": ("reptilian-beasts", "crocodilians"),
    "gharial": ("reptilian-beasts", "crocodilians"),

    # Snakes
    "snake": ("reptilian-beasts", "snakes"),
    "python": ("reptilian-beasts", "snakes"),
    "boa": ("reptilian-beasts", "snakes"),
    "anaconda": ("reptilian-beasts", "snakes"),
    "cobra": ("reptilian-beasts", "snakes"),
    "viper": ("reptilian-beasts", "snakes"),
    "rattlesnake": ("reptilian-beasts", "snakes"),
    "copperhead": ("reptilian-beasts", "snakes"),
    "milksnake": ("reptilian-beasts", "snakes"),
    "atractaspis": ("reptilian-beasts", "snakes"),
    "serpent": ("reptilian-beasts", "snakes"),

    # Lizards
    "lizard": ("reptilian-beasts", "lizards"),
    "gecko": ("reptilian-beasts", "lizards"),
    "chameleon": ("reptilian-beasts", "lizards"),
    "iguana": ("reptilian-beasts", "lizards"),
    "monitor": ("reptilian-beasts", "lizards"),
    "komodo": ("reptilian-beasts", "lizards"),
    "skink": ("reptilian-beasts", "lizards"),
    "uromastyx": ("reptilian-beasts", "lizards"),
    "racerunner": ("reptilian-beasts", "lizards"),

    # Turtles/Tortoises
    "turtle": ("reptilian-beasts", "turtles-tortoises"),
    "tortoise": ("reptilian-beasts", "turtles-tortoises"),
    "terrapin": ("reptilian-beasts", "turtles-tortoises"),
    "slider": ("reptilian-beasts", "turtles-tortoises"),

    # Marine reptiles
    "sea-turtle": ("reptilian-beasts", "marine-reptiles"),
    "sea-snake": ("reptilian-beasts", "marine-reptiles"),
    "leatherback": ("reptilian-beasts", "marine-reptiles"),
    "loggerhead": ("reptilian-beasts", "marine-reptiles"),
    "green-sea": ("reptilian-beasts", "marine-reptiles"),

    # ============ AMPHIBIAN-BEASTS ============

    # Frogs and Toads
    "frog": ("amphibian-beasts", "frogs-toads"),
    "toad": ("amphibian-beasts", "frogs-toads"),
    "dart-frog": ("amphibian-beasts", "frogs-toads"),

    # ============ AQUATIC-BEASTS ============

    # Sharks
    "shark": ("aquatic-beasts", "sharks"),

    # Rays and Skates
    "ray": ("aquatic-beasts", "rays-skates"),
    "manta": ("aquatic-beasts", "rays-skates"),
    "guitarfish": ("aquatic-beasts", "rays-skates"),

    # Marine bony fish
    "tuna": ("aquatic-beasts", "bony-fish-marine"),
    "marlin": ("aquatic-beasts", "bony-fish-marine"),
    "mahi": ("aquatic-beasts", "bony-fish-marine"),
    "halibut": ("aquatic-beasts", "bony-fish-marine"),
    "lionfish": ("aquatic-beasts", "bony-fish-marine"),
    "pufferfish": ("aquatic-beasts", "bony-fish-marine"),
    "parrotfish": ("aquatic-beasts", "bony-fish-marine"),
    "triggerfish": ("aquatic-beasts", "bony-fish-marine"),

    # Freshwater fish
    "salmon": ("aquatic-beasts", "bony-fish-freshwater"),
    "sturgeon": ("aquatic-beasts", "bony-fish-freshwater"),
    "catfish": ("aquatic-beasts", "bony-fish-freshwater"),
    "tigerfish": ("aquatic-beasts", "bony-fish-freshwater"),
    "char": ("aquatic-beasts", "bony-fish-freshwater"),
    "barramundi": ("aquatic-beasts", "bony-fish-freshwater"),
    "eel": ("aquatic-beasts", "bony-fish-freshwater"),

    # Coral reef
    "clownfish": ("aquatic-beasts", "coral-reef"),
    "seahorse": ("aquatic-beasts", "coral-reef"),

    # Deep sea
    "anglerfish": ("aquatic-beasts", "deep-sea"),

    # Other aquatic
    "krill": ("aquatic-beasts", "other-fish"),
    "shrimp": ("aquatic-beasts", "other-fish"),
    "bobbit": ("aquatic-beasts", "other-fish"),

    # ============ INSECTA-BEASTS ============

    # Butterflies and Moths
    "butterfly": ("insecta-beasts", "butterflies-moths"),
    "moth": ("insecta-beasts", "butterflies-moths"),
    "hawkmoth": ("insecta-beasts", "butterflies-moths"),
    "swallowtail": ("insecta-beasts", "butterflies-moths"),
    "monarch-butterfly": ("insecta-beasts", "butterflies-moths"),
    "cruiser": ("insecta-beasts", "butterflies-moths"),
    "lanternfly": ("insecta-beasts", "butterflies-moths"),

    # Beetles
    "beetle": ("insecta-beasts", "beetles"),
    "weevil": ("insecta-beasts", "beetles"),
    "ladybug": ("insecta-beasts", "beetles"),
    "june-bug": ("insecta-beasts", "beetles"),
    "firefly": ("insecta-beasts", "beetles"),

    # Bees and Wasps
    "bee": ("insecta-beasts", "bees-wasps"),
    "wasp": ("insecta-beasts", "bees-wasps"),
    "hornet": ("insecta-beasts", "bees-wasps"),
    "yellow-jacket": ("insecta-beasts", "bees-wasps"),
    "velvet-ant": ("insecta-beasts", "bees-wasps"),

    # Ants
    "ant": ("insecta-beasts", "ants"),
    "fire-ant": ("insecta-beasts", "ants"),

    # Dragonflies
    "dragonfly": ("insecta-beasts", "dragonflies"),
    "amberwing": ("insecta-beasts", "dragonflies"),

    # Other insects
    "cockroach": ("insecta-beasts", "other-insects"),
    "mantis": ("insecta-beasts", "other-insects"),
    "walking-leaf": ("insecta-beasts", "other-insects"),
    "assassin-bug": ("insecta-beasts", "other-insects"),
    "silverfish": ("insecta-beasts", "other-insects"),
    "cricket": ("insecta-beasts", "crickets-grasshoppers"),
    "grasshopper": ("insecta-beasts", "crickets-grasshoppers"),

    # ============ ARACHNID-BEASTS ============

    # Spiders
    "spider": ("arachnid-beasts", "spiders"),
    "tarantula": ("arachnid-beasts", "spiders"),
    "recluse": ("arachnid-beasts", "spiders"),

    # Scorpions
    "scorpion": ("arachnid-beasts", "scorpions"),

    # Ticks and Mites
    "tick": ("arachnid-beasts", "ticks-mites"),
    "mite": ("arachnid-beasts", "ticks-mites"),
}

# Files to skip (branding, logos, etc.)
SKIP_FILES = {
    "beastique-hero-banner.png",
    "beastique-hero-banner-2.png",
    "BQ-Lion.png",
}

def get_category_for_image(filename):
    """
    Determine the collection and subcategory for an image based on its filename.
    Returns (collection, subcategory) tuple or None if no match.
    """
    # Remove extension and number suffix
    base_name = filename.lower().replace(".png", "")

    # Try to match against our mappings
    # First try exact matches, then partial matches
    for keyword, category in ANIMAL_MAPPINGS.items():
        if keyword in base_name:
            return category

    return None

def sort_images():
    """Main function to sort all images into their respective folders."""

    # Get all PNG files in assets/images (not in custom subfolder)
    image_files = []
    for f in ASSETS_DIR.iterdir():
        if f.is_file() and f.suffix.lower() == ".png":
            image_files.append(f)

    # Also check custom folder
    custom_dir = ASSETS_DIR / "custom"
    if custom_dir.exists():
        for f in custom_dir.iterdir():
            if f.is_file() and f.suffix.lower() == ".png":
                image_files.append(f)

    sorted_count = 0
    skipped_count = 0
    unmatched = []

    for img_path in sorted(image_files):
        filename = img_path.name

        # Skip branding files
        if filename in SKIP_FILES:
            print(f"SKIP (branding): {filename}")
            skipped_count += 1
            continue

        # Get category
        category = get_category_for_image(filename)

        if category:
            collection, subcategory = category
            dest_dir = COLLECTIONS_DIR / collection / subcategory / "artworks"
            dest_path = dest_dir / filename

            # Check if destination exists
            if dest_path.exists():
                print(f"EXISTS: {filename} -> {collection}/{subcategory}/artworks/")
                skipped_count += 1
                continue

            # Move the file
            try:
                shutil.copy2(img_path, dest_path)
                print(f"SORTED: {filename} -> {collection}/{subcategory}/artworks/")
                sorted_count += 1
            except Exception as e:
                print(f"ERROR: {filename} - {e}")
        else:
            unmatched.append(filename)

    print("\n" + "="*60)
    print(f"SUMMARY")
    print("="*60)
    print(f"Sorted: {sorted_count}")
    print(f"Skipped: {skipped_count}")
    print(f"Unmatched: {len(unmatched)}")

    if unmatched:
        print("\nUNMATCHED FILES:")
        for f in sorted(unmatched):
            print(f"  - {f}")

    return sorted_count, skipped_count, unmatched

if __name__ == "__main__":
    print("BEASTIQUE Image Sorter")
    print("="*60)
    sort_images()
