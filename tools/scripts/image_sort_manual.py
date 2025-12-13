#!/usr/bin/env python3
"""
BEASTIQUE Image Sorter - Manual Mappings
Each image carefully reviewed and assigned to correct collection/subcategory.
"""

import os
import shutil
from pathlib import Path

BASE_DIR = Path("/storage/self/primary/1dd1/dev/projects/github/beastique")
ASSETS_DIR = BASE_DIR / "assets" / "images"
COLLECTIONS_DIR = BASE_DIR / "collections"

# Manual mappings: image_name (without .png) -> (collection, subcategory)
# SKIP entries are branding/non-animal images

IMAGE_MAPPINGS = {
    # === A ===
    "aardvark-1": ("mammalian-beasts", "other-mammals"),
    "addax-1": ("mammalian-beasts", "ungulates"),
    "addax-2": ("mammalian-beasts", "ungulates"),
    "addra-gazelle-1": ("mammalian-beasts", "ungulates"),
    "adelie-penguin-1": ("avian-beasts", "flightless"),
    "african-buffalo": ("mammalian-beasts", "ungulates"),
    "african-elephant": ("mammalian-beasts", "elephants"),
    "african-elephant-1": ("mammalian-beasts", "elephants"),
    "african-elephant-2": ("mammalian-beasts", "elephants"),
    "african-fish-eagle-2": ("avian-beasts", "raptors"),
    "african-grey-parrot-1": ("avian-beasts", "parrots"),
    "african-grey-parrot-3": ("avian-beasts", "parrots"),
    "african-leopard": ("mammalian-beasts", "carnivora"),
    "african-leopard-1": ("mammalian-beasts", "carnivora"),
    "african-penguin": ("avian-beasts", "flightless"),
    "african-penguin-1": ("avian-beasts", "flightless"),
    "african-swallowtail-1": ("insecta-beasts", "butterflies-moths"),
    "african-wild-dog-1": ("mammalian-beasts", "carnivora"),
    "african-wild-dog-2": ("mammalian-beasts", "carnivora"),
    "akbash-1": ("mammalian-beasts", "carnivora"),
    "alaskan-husky-1": ("mammalian-beasts", "carnivora"),
    "albacore-tuna-1": ("aquatic-beasts", "bony-fish-marine"),
    "albatros": ("avian-beasts", "seabirds"),
    "albatross-1": ("avian-beasts", "seabirds"),
    "amazon-tree-boa-1": ("reptilian-beasts", "snakes"),
    "american_bison_1": ("mammalian-beasts", "ungulates"),
    "american-bison-2": ("mammalian-beasts", "ungulates"),
    "american-coot": ("avian-beasts", "wading-birds"),
    "american-coot-1": ("avian-beasts", "wading-birds"),
    "american-kestrel": ("avian-beasts", "raptors"),
    "american-robin-1": ("avian-beasts", "songbirds"),
    "american-staffordshire-terrier-1": ("mammalian-beasts", "carnivora"),
    "amur-leopard-1": ("mammalian-beasts", "carnivora"),
    "amur-leopard-2": ("mammalian-beasts", "carnivora"),
    "anaconda-1": ("reptilian-beasts", "snakes"),
    "anglerfish-1": ("aquatic-beasts", "deep-sea"),
    "antarctic-petrel-1": ("avian-beasts", "seabirds"),
    "antelope-1": ("mammalian-beasts", "ungulates"),
    "arabian-oryx": ("mammalian-beasts", "ungulates"),
    "arabian-oryx-1": ("mammalian-beasts", "ungulates"),
    "arabian-oryx-2": ("mammalian-beasts", "ungulates"),
    "arctic-char-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "arctic-fox-1": ("mammalian-beasts", "carnivora"),
    "arctic-hare-1": ("mammalian-beasts", "rodents"),
    "arctic-tern-1": ("avian-beasts", "seabirds"),
    "arctic-tern-2": ("avian-beasts", "seabirds"),
    "arctic-wolf": ("mammalian-beasts", "carnivora"),
    "arizona-coral-snake": ("reptilian-beasts", "snakes"),
    "arizona-coral-snake-1": ("reptilian-beasts", "snakes"),
    "armadillo-1": ("mammalian-beasts", "other-mammals"),
    "armored-catfish-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "asian-elephant-1": ("mammalian-beasts", "elephants"),
    "asiatic-lion-1": ("mammalian-beasts", "carnivora"),
    "assassin-bug-1": ("insecta-beasts", "other-insects"),
    "atlantic-halibut-1": ("aquatic-beasts", "bony-fish-marine"),
    "atlas-moth-1": ("insecta-beasts", "butterflies-moths"),
    "atlas-moth-2": ("insecta-beasts", "butterflies-moths"),
    "atractaspis-1": ("reptilian-beasts", "snakes"),
    "attwater's-prairie-chicken-1": ("avian-beasts", "gamebirds"),
    "australian-fur-seal-1": ("mammalian-beasts", "marine-mammals"),
    "australian-saltwater-crocodile": ("reptilian-beasts", "crocodilians"),
    "australian-saltwater-crocodile-1": ("reptilian-beasts", "crocodilians"),
    "austrian-pinscher-1": ("mammalian-beasts", "carnivora"),
    "austrian-pinscher-2": ("mammalian-beasts", "carnivora"),

    # === B ===
    "bald-eagle-1": ("avian-beasts", "raptors"),
    "banteng-1": ("mammalian-beasts", "ungulates"),
    "barramundi-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "basset-bleu-de-gascogne-1": ("mammalian-beasts", "carnivora"),
    "bay-duiker-1": ("mammalian-beasts", "ungulates"),
    "bear-1": ("mammalian-beasts", "carnivora"),
    "beastique-hero-banner": "SKIP",
    "beastique-hero-banner-2": "SKIP",
    "beaver-1": ("mammalian-beasts", "rodents"),
    "beech-marten-1": ("mammalian-beasts", "carnivora"),
    "belgian-malinois-1": ("mammalian-beasts", "carnivora"),
    "beluga-sturgeon-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "bengal-slow-loris-1": ("mammalian-beasts", "primates"),
    "bengal-slow-loris-2": ("mammalian-beasts", "primates"),
    "bengal-tiger-1": ("mammalian-beasts", "carnivora"),
    "bettong-1": ("mammalian-beasts", "marsupials"),
    "blackbuck-1": ("mammalian-beasts", "ungulates"),
    "black-footed-cat-1": ("mammalian-beasts", "carnivora"),
    "black-footed-ferret-1": ("mammalian-beasts", "carnivora"),
    "black-footed-ferret-2": ("mammalian-beasts", "carnivora"),
    "black-headed-python-1": ("reptilian-beasts", "snakes"),
    "black-panther": ("mammalian-beasts", "carnivora"),
    "black-rhinoceros-1": ("mammalian-beasts", "ungulates"),
    "black-tailed-jackrabbit-1": ("mammalian-beasts", "rodents"),
    "black-vine-weevil-1": ("insecta-beasts", "beetles"),
    "black-vine-weevil-2": ("insecta-beasts", "beetles"),
    "black-wildebeest-1": ("mammalian-beasts", "ungulates"),
    "blue-whale": ("mammalian-beasts", "cetaceans"),
    "blue-whale-1": ("mammalian-beasts", "cetaceans"),
    "blue-wildebeest-1": ("mammalian-beasts", "ungulates"),
    "bobbit-worm-1": ("aquatic-beasts", "other-fish"),
    "bohor-reedbuck-1": ("mammalian-beasts", "ungulates"),
    "bold-potoroo-1": ("mammalian-beasts", "marsupials"),
    "bornean-orangutan-1": ("mammalian-beasts", "primates"),
    "bowmouth-guitarfish-1": ("aquatic-beasts", "rays-skates"),
    "BQ-Lion": "SKIP",
    "brazilian-tapir-1": ("mammalian-beasts", "ungulates"),
    "brown-headed-spider-monkey-1": ("mammalian-beasts", "primates"),
    "brown-recluse-spider-1": ("arachnid-beasts", "spiders"),
    "buckeye-butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "bugun-liocichla-1": ("avian-beasts", "songbirds"),
    "bull-shark-1": ("aquatic-beasts", "sharks"),
    "bull-shark-2": ("aquatic-beasts", "sharks"),
    "burrowing-bettong-1": ("mammalian-beasts", "marsupials"),
    "butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "butterfly-2": ("insecta-beasts", "butterflies-moths"),
    "butterfly-3": ("insecta-beasts", "butterflies-moths"),
    "butterfly-4": ("insecta-beasts", "butterflies-moths"),

    # === C ===
    "cacomistle-1": ("mammalian-beasts", "carnivora"),
    "california-condor-1": ("avian-beasts", "raptors"),
    "cape-vulture": ("avian-beasts", "raptors"),
    "capybara-1": ("mammalian-beasts", "rodents"),
    "caribou-1": ("mammalian-beasts", "ungulates"),
    "carpenter-ant-1": ("insecta-beasts", "ants"),
    "cashmere-goat-1": ("mammalian-beasts", "ungulates"),
    "chameleon-1": ("reptilian-beasts", "lizards"),
    "cheetah": ("mammalian-beasts", "carnivora"),
    "cheetah-1": ("mammalian-beasts", "carnivora"),
    "cheetah-2": ("mammalian-beasts", "carnivora"),
    "chinchilla-1": ("mammalian-beasts", "rodents"),
    "chinook-salmon-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "christmas-island-flying-fox-1": ("mammalian-beasts", "bats"),
    "chusquea-tapaculo-1": ("avian-beasts", "songbirds"),
    "clownfish-1": ("aquatic-beasts", "coral-reef"),
    "clown-triggerfish-1": ("aquatic-beasts", "coral-reef"),
    "common-eland-1": ("mammalian-beasts", "ungulates"),
    "common-kingfisher-1": ("avian-beasts", "other-birds"),
    "common-mormon-butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "common-seahorse-1": ("aquatic-beasts", "coral-reef"),
    "common-warthog-1": ("mammalian-beasts", "ungulates"),
    "conehead-mantis-1": ("insecta-beasts", "other-insects"),
    "copperhead-snake-1": ("reptilian-beasts", "snakes"),
    "coppery-brushtail-possum-1": ("mammalian-beasts", "marsupials"),
    "coyote-1": ("mammalian-beasts", "carnivora"),
    "crane-1": ("avian-beasts", "wading-birds"),
    "crane-2": ("avian-beasts", "wading-birds"),
    "crested-shelduck-1": ("avian-beasts", "waterfowl"),
    "crocodile-1": ("reptilian-beasts", "crocodilians"),
    "cuvier's-gazelle-1": ("mammalian-beasts", "ungulates"),

    # === D ===
    "dama-gazelle-1": ("mammalian-beasts", "ungulates"),
    "death's-head-hawkmoth-1": ("insecta-beasts", "butterflies-moths"),
    "dolphin-1": ("mammalian-beasts", "cetaceans"),
    "dromedary-camel": ("mammalian-beasts", "ungulates"),
    "dromedary-camel-1": ("mammalian-beasts", "ungulates"),
    "dugong-1": ("mammalian-beasts", "marine-mammals"),
    "dusky-dolphin-1": ("mammalian-beasts", "cetaceans"),
    "dutch-smoushond-1": ("mammalian-beasts", "carnivora"),
    "dwarf-sperm-whale-1": ("mammalian-beasts", "cetaceans"),

    # === E ===
    "eagle-1": ("avian-beasts", "raptors"),
    "eagle-2": ("avian-beasts", "raptors"),
    "eastern-amberwing-dragonfly-1": ("insecta-beasts", "dragonflies"),
    "eastern-brown-snake-1": ("reptilian-beasts", "snakes"),
    "echidna-1": ("mammalian-beasts", "other-mammals"),
    "egyptian-uromastyx-1": ("reptilian-beasts", "lizards"),
    "egyptian-vulture-1": ("avian-beasts", "raptors"),
    "electric-eel-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "elk-1": ("mammalian-beasts", "ungulates"),
    "emperor-penguin": ("avian-beasts", "flightless"),
    "ethiopian-hare-1": ("mammalian-beasts", "rodents"),
    "ethiopian-highland-hare-1": ("mammalian-beasts", "rodents"),
    "ethiopian-wolf-1": ("mammalian-beasts", "carnivora"),
    "european-mink-1": ("mammalian-beasts", "carnivora"),
    "european-polecat-1": ("mammalian-beasts", "carnivora"),
    "european-polecat-2": ("mammalian-beasts", "carnivora"),
    "european-wolf-1": ("mammalian-beasts", "carnivora"),
    "evening-grosbeak-1": ("avian-beasts", "songbirds"),

    # === F ===
    "falkland-steamer-duck-1": ("avian-beasts", "waterfowl"),
    "false-killer-whale-1": ("mammalian-beasts", "cetaceans"),
    "fat-tailed-dunnart-2": ("mammalian-beasts", "marsupials"),
    "fennec-fox-1": ("mammalian-beasts", "carnivora"),
    "fila-brasileiro-3": ("mammalian-beasts", "carnivora"),
    "fin-whale-1": ("mammalian-beasts", "cetaceans"),
    "fisher-1": ("mammalian-beasts", "carnivora"),
    "flat-headed-gecko-1": ("reptilian-beasts", "lizards"),
    "flores-scops-owl-1": ("avian-beasts", "owls"),
    "forrest's-pika-1": ("mammalian-beasts", "rodents"),
    "four-horned-antelope-1": ("mammalian-beasts", "ungulates"),
    "fowler's-toad-1": ("amphibian-beasts", "frogs-toads"),
    "fox-terrier-1": ("mammalian-beasts", "carnivora"),

    # === G ===
    "gaboon-viper-1": ("reptilian-beasts", "snakes"),
    "galapagos-tortoise-1": ("reptilian-beasts", "turtles-tortoises"),
    "galapagos-tortoise-2": ("reptilian-beasts", "turtles-tortoises"),
    "ganges-river-dolphin-1": ("mammalian-beasts", "cetaceans"),
    "ganges-shark-1": ("aquatic-beasts", "sharks"),
    "garden-spider-1": ("arachnid-beasts", "spiders"),
    "gecko": ("reptilian-beasts", "lizards"),
    "gecko-1": ("reptilian-beasts", "lizards"),
    "geoffroy's-spider-monkey-1": ("mammalian-beasts", "primates"),
    "german-cockroach-1": ("insecta-beasts", "other-insects"),
    "giant-anteater-1": ("mammalian-beasts", "other-mammals"),
    "giant-armadillo-1": ("mammalian-beasts", "other-mammals"),
    "giant-manta-ray-1": ("aquatic-beasts", "rays-skates"),
    "giraffe": ("mammalian-beasts", "ungulates"),
    "giraffe-1": ("mammalian-beasts", "ungulates"),
    "giraffe-2": ("mammalian-beasts", "ungulates"),
    "giraffe-3": ("mammalian-beasts", "ungulates"),
    "giraffe-4": ("mammalian-beasts", "ungulates"),
    "golden-crowned-flying-fox-1": ("mammalian-beasts", "bats"),
    "golden-crowned-sifak-1": ("mammalian-beasts", "primates"),
    "golden-eagle-1": ("avian-beasts", "raptors"),
    "golden-poison-dart-frog-1": ("amphibian-beasts", "frogs-toads"),
    "golden-poison-dart-frog-2": ("amphibian-beasts", "frogs-toads"),
    "golden-poison-dart-frog-3": ("amphibian-beasts", "frogs-toads"),
    "golden-tamarin-1": ("mammalian-beasts", "primates"),
    "goliath-tigerfish-1": ("aquatic-beasts", "bony-fish-freshwater"),
    "gray-wolf-1": ("mammalian-beasts", "carnivora"),
    "greater-kudu-1": ("mammalian-beasts", "ungulates"),
    "greater-roadrunner-1": ("avian-beasts", "other-birds"),
    "greater-snow-goose-1": ("avian-beasts", "waterfowl"),
    "greater-swiss-mountain-dog-1": ("mammalian-beasts", "carnivora"),
    "great_horned_owl": ("avian-beasts", "owls"),
    "great-horned-owl-1": ("avian-beasts", "owls"),
    "great-horned-owl-2": ("avian-beasts", "owls"),
    "great-white-shark": ("aquatic-beasts", "sharks"),
    "great-white-shark-1": ("aquatic-beasts", "sharks"),
    "great-white-shark-2": ("aquatic-beasts", "sharks"),
    "green-humphead-parrotfish-1": ("aquatic-beasts", "coral-reef"),
    "green-sea-turtle-1": ("reptilian-beasts", "marine-reptiles"),
    "grevys-zebra-1": ("mammalian-beasts", "ungulates"),
    "grey-sunbird-1": ("avian-beasts", "songbirds"),
    "grey-wolf": ("mammalian-beasts", "carnivora"),
    "grey-wolf-1": ("mammalian-beasts", "carnivora"),
    "grizzly-bear-1": ("mammalian-beasts", "carnivora"),
    "grizzly-bear-2": ("mammalian-beasts", "carnivora"),
    "grizzly-bear-3": ("mammalian-beasts", "carnivora"),
    "guianan-cock-of-the-rock-1": ("avian-beasts", "songbirds"),

    # === H ===
    "hairy-nosed-otter-1": ("mammalian-beasts", "carnivora"),
    "hammerhead-shark-1": ("aquatic-beasts", "sharks"),
    "hammerhead-shark-2": ("aquatic-beasts", "sharks"),
    "hare-1": ("mammalian-beasts", "rodents"),
    "harpy-eagle-1": ("avian-beasts", "raptors"),
    "harris's-hawk-1": ("avian-beasts", "raptors"),
    "hedgehog-1": ("mammalian-beasts", "other-mammals"),
    "herdwick-sheep-1": ("mammalian-beasts", "ungulates"),
    "himalayan-brown-bear-1": ("mammalian-beasts", "carnivora"),
    "himalayan-monal-1": ("avian-beasts", "gamebirds"),
    "hirola-antelope-1": ("mammalian-beasts", "ungulates"),
    "honeybee-1": ("insecta-beasts", "bees-wasps"),
    "horse-1": ("mammalian-beasts", "ungulates"),
    "hummingbird-1": ("avian-beasts", "other-birds"),
    "humpback-whale": ("mammalian-beasts", "cetaceans"),
    "humpback-whale-2": ("mammalian-beasts", "cetaceans"),

    # === I ===
    "idaho-pocket-gopher-1": ("mammalian-beasts", "rodents"),
    "impala": ("mammalian-beasts", "ungulates"),
    "impala-1": ("mammalian-beasts", "ungulates"),
    "indian-cobra-1": ("reptilian-beasts", "snakes"),
    "indian-rhinoceros-1": ("mammalian-beasts", "ungulates"),
    "inyo-shrew-1": ("mammalian-beasts", "other-mammals"),
    "island-fox-1": ("mammalian-beasts", "carnivora"),

    # === J ===
    "jabiru-1": ("avian-beasts", "wading-birds"),
    "jacob-sheep-1": ("mammalian-beasts", "ungulates"),
    "jaguar-1": ("mammalian-beasts", "carnivora"),
    "japanese-chin-1": ("mammalian-beasts", "carnivora"),
    "japanese-hornet-1": ("insecta-beasts", "bees-wasps"),
    "japanese-rat-snake-1": ("reptilian-beasts", "snakes"),
    "javan-slow-loris-1": ("mammalian-beasts", "primates"),
    "june-bug-1": ("insecta-beasts", "beetles"),

    # === K ===
    "kerry-blue-terrier-1": ("mammalian-beasts", "carnivora"),
    "king-cobra-1": ("reptilian-beasts", "snakes"),
    "king-cobra-2": ("reptilian-beasts", "snakes"),
    "king-vulture-1": ("avian-beasts", "raptors"),
    "kinkajou-1": ("mammalian-beasts", "carnivora"),
    "kirk's-dik-dik-1": ("mammalian-beasts", "ungulates"),
    "kishu-1": ("mammalian-beasts", "carnivora"),
    "klipspringer-1": ("mammalian-beasts", "ungulates"),
    "koala-bear-1": ("mammalian-beasts", "marsupials"),
    "kodiak-bear-1": ("mammalian-beasts", "carnivora"),
    "kodiak-bear-2": ("mammalian-beasts", "carnivora"),
    "kodiak-bear-3": ("mammalian-beasts", "carnivora"),
    "komodo-dragon-1": ("reptilian-beasts", "lizards"),
    "komodo-dragon-2": ("reptilian-beasts", "lizards"),
    "krill-1": ("aquatic-beasts", "other-fish"),

    # === L ===
    "lady-amherst's-pheasant-1": ("avian-beasts", "gamebirds"),
    "ladybug-1": ("insecta-beasts", "beetles"),
    "lappet-faced-vulture-1": ("avian-beasts", "raptors"),
    "lapponian-herder-1": ("mammalian-beasts", "carnivora"),
    "large-beetle-1": ("insecta-beasts", "beetles"),
    "least-auklet-1": ("avian-beasts", "seabirds"),
    "leatherback-sea-turtle": ("reptilian-beasts", "marine-reptiles"),
    "leatherback-sea-turtle-3": ("reptilian-beasts", "marine-reptiles"),
    "lemming-1": ("mammalian-beasts", "rodents"),
    "lemur-1": ("mammalian-beasts", "primates"),
    "leonberger-1": ("mammalian-beasts", "carnivora"),
    "leopard-1": ("mammalian-beasts", "carnivora"),
    "lesser-kestrel-1": ("avian-beasts", "raptors"),
    "lesser-kestrel-2": ("avian-beasts", "raptors"),
    "lesser-kudu-1": ("mammalian-beasts", "ungulates"),
    "lion-1": ("mammalian-beasts", "carnivora"),
    "lion-2": ("mammalian-beasts", "carnivora"),
    "lionfish-1": ("aquatic-beasts", "coral-reef"),
    "little-red-frog-of-yapacana-1": ("amphibian-beasts", "frogs-toads"),
    "loggerhead-sea-turtles": ("reptilian-beasts", "marine-reptiles"),
    "long-tailed-jaeger-1": ("avian-beasts", "seabirds"),

    # === M ===
    "madagascar-hissing-cockroach-1": ("insecta-beasts", "other-insects"),
    "madagascar-serpent-eagle-1": ("avian-beasts", "raptors"),
    "mahi-mahi-1": ("aquatic-beasts", "bony-fish-marine"),
    "malagasy-giant-rat-1": ("mammalian-beasts", "rodents"),
    "malagasy-hippopotamus-1": ("mammalian-beasts", "ungulates"),
    "malayan-tapir-1": ("mammalian-beasts", "ungulates"),
    "malayan-tapir-2": ("mammalian-beasts", "ungulates"),
    "malayan-tiger-1": ("mammalian-beasts", "carnivora"),
    "malaysian-tapir-1": ("mammalian-beasts", "ungulates"),
    "manatee-1": ("mammalian-beasts", "marine-mammals"),
    "maned-wolf-1": ("mammalian-beasts", "carnivora"),
    "maned-wolf-2": ("mammalian-beasts", "carnivora"),
    "manta-ray-1": ("aquatic-beasts", "rays-skates"),
    "manta-ray-2": ("aquatic-beasts", "rays-skates"),
    "marbled-monitor-1": ("reptilian-beasts", "lizards"),
    "maremmano-abruzzese-sheepdog-1": ("mammalian-beasts", "carnivora"),
    "margay-1": ("mammalian-beasts", "carnivora"),
    "marlin-1": ("aquatic-beasts", "bony-fish-marine"),
    "masked-booby-1": ("avian-beasts", "seabirds"),
    "mason-bee-1": ("insecta-beasts", "bees-wasps"),
    "mason-bee-2": ("insecta-beasts", "bees-wasps"),
    "mesoamerican-river-turtle-1": ("reptilian-beasts", "turtles-tortoises"),
    "mew-gulls": ("avian-beasts", "seabirds"),
    "mexican-alligator-lizard-1": ("reptilian-beasts", "lizards"),
    "mexican-pine-snake-1": ("reptilian-beasts", "snakes"),
    "milkweed-leaf-beetle-1": ("insecta-beasts", "beetles"),
    "mojave-rattlesnake-1": ("reptilian-beasts", "snakes"),
    "monarch-butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "moose-1": ("mammalian-beasts", "ungulates"),
    "mountain-pine-beetle-1": ("insecta-beasts", "beetles"),
    "mountain-pit-viper-1": ("reptilian-beasts", "snakes"),
    "moupin-pika-1": ("mammalian-beasts", "rodents"),
    "mourning-dove-1": ("avian-beasts", "other-birds"),
    "mourning-gecko-1": ("reptilian-beasts", "lizards"),
    "mule-deer-tick-1": ("arachnid-beasts", "ticks-mites"),
    "muskox-1": ("mammalian-beasts", "ungulates"),

    # === N ===
    "naked-mole-rat-1": ("mammalian-beasts", "rodents"),
    "natal-red-rock-hare-1": ("mammalian-beasts", "rodents"),
    "nile-crocodile-1": ("reptilian-beasts", "crocodilians"),
    "nile-crocodile-2": ("reptilian-beasts", "crocodilians"),
    "nile-monitor-1": ("reptilian-beasts", "lizards"),
    "nilgai-antelope-1": ("mammalian-beasts", "ungulates"),
    "northern-alligator-lizard-1": ("reptilian-beasts", "lizards"),
    "northern-mole-cricket-1": ("insecta-beasts", "crickets-grasshoppers"),
    "northern-pacific-rattlesnake-1": ("reptilian-beasts", "snakes"),
    "northern-pintail-1": ("avian-beasts", "waterfowl"),
    "north-island-brown-kiwi-1": ("avian-beasts", "flightless"),
    "nyala-1": ("mammalian-beasts", "ungulates"),

    # === O ===
    "okapi-1": ("mammalian-beasts", "ungulates"),
    "okapi-2": ("mammalian-beasts", "ungulates"),
    "okapi-3": ("mammalian-beasts", "ungulates"),
    "okapi-4": ("mammalian-beasts", "ungulates"),
    "oribi-1": ("mammalian-beasts", "ungulates"),
    "osprey-1": ("avian-beasts", "raptors"),
    "ostrich-1": ("avian-beasts", "flightless"),
    "owl-1": ("avian-beasts", "owls"),

    # === P ===
    "pampas-cat-1": ("mammalian-beasts", "carnivora"),
    "panamint-rattlesnake-1": ("reptilian-beasts", "snakes"),
    "paper-wasp-1": ("insecta-beasts", "bees-wasps"),
    "peacock-1": ("avian-beasts", "gamebirds"),
    "pectoral-sandpiper-1": ("avian-beasts", "wading-birds"),
    "pelican": ("avian-beasts", "seabirds"),
    "peregrine-falcon-1": ("avian-beasts", "raptors"),
    "peregrine-falcon-2": ("avian-beasts", "raptors"),
    "peruvian-yellow-tailed-woolly-monkey-1": ("mammalian-beasts", "primates"),
    "philippine-eagle-1": ("avian-beasts", "raptors"),
    "pig-tailed-langur-1": ("mammalian-beasts", "primates"),
    "pileated-woodpecker-1": ("avian-beasts", "other-birds"),
    "pilot-whale-1": ("mammalian-beasts", "cetaceans"),
    "pintail-duck-1": ("avian-beasts", "waterfowl"),
    "pintail-duck-2": ("avian-beasts", "waterfowl"),
    "plains-zebra-1": ("mammalian-beasts", "ungulates"),
    "platypus-1": ("mammalian-beasts", "other-mammals"),
    "plushcap-1": ("avian-beasts", "songbirds"),
    "polar-bear": ("mammalian-beasts", "carnivora"),
    "polar-bear-1": ("mammalian-beasts", "carnivora"),
    "polar-bear-2": ("mammalian-beasts", "carnivora"),
    "polar-bear-3": ("mammalian-beasts", "carnivora"),
    "polar-bear-4": ("mammalian-beasts", "carnivora"),
    "polar-bear-5": ("mammalian-beasts", "carnivora"),
    "porcupine-1": ("mammalian-beasts", "rodents"),
    "potoroo-1": ("mammalian-beasts", "marsupials"),
    "przewalskis-horse-1": ("mammalian-beasts", "ungulates"),
    "ptarmigan-1": ("avian-beasts", "gamebirds"),
    "pudu-1": ("mammalian-beasts", "ungulates"),
    "pufferfish-1": ("aquatic-beasts", "bony-fish-marine"),
    "pygmy-hippopotamus-1": ("mammalian-beasts", "ungulates"),
    "pygmy-hippopotamus-2": ("mammalian-beasts", "ungulates"),
    "pygmy-hippopotamus-3": ("mammalian-beasts", "ungulates"),
    "pygmy-python-1": ("reptilian-beasts", "snakes"),

    # === Q ===
    "quagga-1": ("mammalian-beasts", "ungulates"),
    "quokka-1": ("mammalian-beasts", "marsupials"),
    "quoll-1": ("mammalian-beasts", "marsupials"),

    # === R ===
    "raccoon-1": ("mammalian-beasts", "carnivora"),
    "red-eared-slider-1": ("reptilian-beasts", "turtles-tortoises"),
    "red-imported-fire-ant-1": ("insecta-beasts", "ants"),
    "red-kangaroo-1": ("mammalian-beasts", "marsupials"),
    "red-panda-1": ("mammalian-beasts", "other-mammals"),
    "red-panda-2": ("mammalian-beasts", "other-mammals"),
    "red-phalarope-1": ("avian-beasts", "wading-birds"),
    "red-velvet-ant-1": ("insecta-beasts", "bees-wasps"),
    "red-velvet-ant-2": ("insecta-beasts", "bees-wasps"),
    "rhinoceros-1": ("mammalian-beasts", "ungulates"),
    "rock-hyrax-1": ("mammalian-beasts", "other-mammals"),
    "rock-ptarmigan": ("avian-beasts", "gamebirds"),
    "rock-squirrel-1": ("mammalian-beasts", "rodents"),
    "roloway-monkey-1": ("mammalian-beasts", "primates"),
    "ross-seal-1": ("mammalian-beasts", "marine-mammals"),
    "rottweiler-1": ("mammalian-beasts", "carnivora"),
    "rottweiler-2": ("mammalian-beasts", "carnivora"),
    "rough-legged-hawk-1": ("avian-beasts", "raptors"),
    "rowi-1": ("avian-beasts", "flightless"),
    "royal-antelope-1": ("mammalian-beasts", "ungulates"),
    "royal-tern-1": ("avian-beasts", "seabirds"),
    "ruffed-grouse-1": ("avian-beasts", "gamebirds"),
    "ruffed-lemur-1": ("mammalian-beasts", "primates"),
    "rufous-bellied-eagle-1": ("avian-beasts", "raptors"),
    "rufous-tailed-palm-thrush": ("avian-beasts", "songbirds"),
    "rufous-tailed-palm-thrush-1": ("avian-beasts", "songbirds"),

    # === S ===
    "sable-antelope-1": ("mammalian-beasts", "ungulates"),
    "saddleback-clownfish-1": ("aquatic-beasts", "coral-reef"),
    "saiga-antelope-1": ("mammalian-beasts", "ungulates"),
    "saltwater-crocodile-1": ("reptilian-beasts", "crocodilians"),
    "sanderling-1": ("avian-beasts", "wading-birds"),
    "saola-1": ("mammalian-beasts", "ungulates"),
    "savannah-monitor-1": ("reptilian-beasts", "lizards"),
    "scarlet-macaw": ("avian-beasts", "parrots"),
    "scorpion": ("arachnid-beasts", "scorpions"),
    "scorpion-1": ("arachnid-beasts", "scorpions"),
    "seahorse-seahorse-1": ("aquatic-beasts", "coral-reef"),
    "sea-snake-1": ("reptilian-beasts", "marine-reptiles"),
    "sea-turtle-1": ("reptilian-beasts", "marine-reptiles"),
    "secretary-bird": ("avian-beasts", "other-birds"),
    "secretary-bird-1": ("avian-beasts", "other-birds"),
    "serpent-1": ("reptilian-beasts", "snakes"),
    "shetland-sheep-1": ("mammalian-beasts", "ungulates"),
    "shoebill-stork-1": ("avian-beasts", "wading-birds"),
    "shrimp-1": ("aquatic-beasts", "other-fish"),
    "siberian-tiger-1": ("mammalian-beasts", "carnivora"),
    "silky-anteater-1": ("mammalian-beasts", "other-mammals"),
    "silverfish-1": ("insecta-beasts", "other-insects"),
    "sinaloan-milksnake-1": ("reptilian-beasts", "snakes"),
    "sitatunga-1": ("mammalian-beasts", "ungulates"),
    "six-banded-armadillo-1": ("mammalian-beasts", "other-mammals"),
    "six-lined-racerunner-1": ("reptilian-beasts", "lizards"),
    "skink-1": ("reptilian-beasts", "lizards"),
    "small-tree-frog-1": ("amphibian-beasts", "frogs-toads"),
    "smooth-snake-1": ("reptilian-beasts", "snakes"),
    "snowy-owl-1": ("avian-beasts", "owls"),
    "speckled-rattlesnake-1": ("reptilian-beasts", "snakes"),
    "spectacled-guillemot-1": ("avian-beasts", "seabirds"),
    "spider-1": ("arachnid-beasts", "spiders"),
    "spoon-billed-sandpiper-1": ("avian-beasts", "wading-birds"),
    "spotted-hyena-1": ("mammalian-beasts", "carnivora"),
    "spotted-hyena-2": ("mammalian-beasts", "carnivora"),
    "spotted-lanternfly-1": ("insecta-beasts", "other-insects"),
    "spotted-seal-1": ("mammalian-beasts", "marine-mammals"),
    "squirrel-1": ("mammalian-beasts", "rodents"),
    "sri-lankan-cruiser-butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "st-lucia-parrot": ("avian-beasts", "parrots"),
    "stoat-1": ("mammalian-beasts", "carnivora"),
    "stone-sheep-1": ("mammalian-beasts", "ungulates"),
    "sumatran-rhino-1": ("mammalian-beasts", "ungulates"),
    "sumatran-rhinoceros-1": ("mammalian-beasts", "ungulates"),
    "sumatran-serow-1": ("mammalian-beasts", "ungulates"),
    "sumatran-tiger-1": ("mammalian-beasts", "carnivora"),
    "sunda-scops-owl-1": ("avian-beasts", "owls"),
    "swan-1": ("avian-beasts", "waterfowl"),

    # === T ===
    "tahiti-monarch-1": ("avian-beasts", "songbirds"),
    "tamaraw-1": ("mammalian-beasts", "ungulates"),
    "tenrec-1": ("mammalian-beasts", "other-mammals"),
    "tiger-1": ("mammalian-beasts", "carnivora"),
    "tiger-2": ("mammalian-beasts", "carnivora"),
    "tiger-rattlesnake-1": ("reptilian-beasts", "snakes"),
    "tortoise-1": ("reptilian-beasts", "turtles-tortoises"),
    "tortoise-2": ("reptilian-beasts", "turtles-tortoises"),
    "tortoise-3": ("reptilian-beasts", "turtles-tortoises"),
    "toy-fox-terrier-1": ("mammalian-beasts", "carnivora"),
    "turkey-1": ("avian-beasts", "gamebirds"),
    "twig-snake-1": ("reptilian-beasts", "snakes"),
    "twin-spotted-rattlesnake-1": ("reptilian-beasts", "snakes"),

    # === V ===
    "vaquita-1": ("mammalian-beasts", "cetaceans"),
    "variegated-bush-frog": ("amphibian-beasts", "frogs-toads"),
    "variegated-bush-frog-1": ("amphibian-beasts", "frogs-toads"),
    "vervet-monkey-1": ("mammalian-beasts", "primates"),
    "vogelkop-monitor-1": ("reptilian-beasts", "lizards"),

    # === W ===
    "walking-leaf-1": ("insecta-beasts", "other-insects"),
    "walrus-1": ("mammalian-beasts", "marine-mammals"),
    "water-buffalo-1": ("mammalian-beasts", "ungulates"),
    "western-lowland-gorilla-1": ("mammalian-beasts", "primates"),
    "western-lowland-gorilla-2": ("mammalian-beasts", "primates"),
    "western-sandpiper-1": ("avian-beasts", "wading-birds"),
    "white-marlin-1": ("aquatic-beasts", "bony-fish-marine"),
    "white-rhinocero-1": ("mammalian-beasts", "ungulates"),
    "wire-fox-terrier-1": ("mammalian-beasts", "carnivora"),
    "wolf-1": ("mammalian-beasts", "carnivora"),
    "wolverine-1": ("mammalian-beasts", "carnivora"),
    "wombat-1": ("mammalian-beasts", "marsupials"),
    "wood-mouse-1": ("mammalian-beasts", "rodents"),

    # === Y ===
    "yellow-billed-cuckoo-1": ("avian-beasts", "other-birds"),
    "yellow-jacket-1": ("insecta-beasts", "bees-wasps"),
    "yellow-rumped-warbler-1": ("avian-beasts", "songbirds"),

    # === Z ===
    "zebra-1": ("mammalian-beasts", "ungulates"),
    "zebra-2": ("mammalian-beasts", "ungulates"),
    "zebra-swallowtail-butterfly-1": ("insecta-beasts", "butterflies-moths"),
    "zebrule-1": ("mammalian-beasts", "ungulates"),
}


def sort_images():
    """Copy images to their respective collection folders."""

    sorted_count = 0
    skipped_count = 0
    not_found = []
    unmapped = []

    for image_name, mapping in IMAGE_MAPPINGS.items():
        # Skip branding images
        if mapping == "SKIP":
            print(f"SKIP (branding): {image_name}")
            skipped_count += 1
            continue

        collection, subcategory = mapping

        # Find source file
        source_path = ASSETS_DIR / f"{image_name}.png"
        if not source_path.exists():
            not_found.append(image_name)
            continue

        # Destination path
        dest_dir = COLLECTIONS_DIR / collection / subcategory / "artworks"
        dest_path = dest_dir / f"{image_name}.png"

        # Check if already exists
        if dest_path.exists():
            print(f"EXISTS: {image_name} -> {collection}/{subcategory}")
            skipped_count += 1
            continue

        # Copy file
        try:
            shutil.copy2(source_path, dest_path)
            print(f"COPIED: {image_name} -> {collection}/{subcategory}")
            sorted_count += 1
        except Exception as e:
            print(f"ERROR: {image_name} - {e}")

    # Check for unmapped files in assets
    for f in ASSETS_DIR.iterdir():
        if f.is_file() and f.suffix.lower() == ".png":
            name = f.stem
            if name not in IMAGE_MAPPINGS:
                unmapped.append(name)

    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Copied: {sorted_count}")
    print(f"Skipped: {skipped_count}")
    print(f"Not found: {len(not_found)}")
    print(f"Unmapped in assets: {len(unmapped)}")

    if not_found:
        print("\nNOT FOUND:")
        for n in sorted(not_found):
            print(f"  - {n}")

    if unmapped:
        print("\nUNMAPPED FILES IN ASSETS:")
        for n in sorted(unmapped):
            print(f"  - {n}")


if __name__ == "__main__":
    print("BEASTIQUE Manual Image Sorter")
    print("="*60)
    sort_images()
