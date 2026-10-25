/**
 * ASTRAVIA 360° Virtual Tour Dataset
 * Centralized, validated repository for full 360° equirectangular panoramas,
 * multi-scene locations, spatial hotspot coordinates, and ambient soundscape profiles.
 * Every scene and hotspot is strictly stamped with destinationId.
 */

export const virtualTours = {
  // 1. KASHMIR (India)
  kashmir: {
    destinationId: "kashmir",
    destinationName: "Kashmir",
    country: "India",
    tagline: "Paradise on Earth",
    scenes: [
      {
        id: "kashmir-dal-lake",
        destinationId: "kashmir",
        title: "Dal Lake & Floating Boulevard",
        subtitle: "Srinagar • Golden Hour Waters",
        panoramaUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "lake_waters",
        initialLon: 180,
        initialLat: 0,
        description: "Stand on the calm cedar deck of a traditional Shikara boat as twilight casts a golden glow across Dal Lake and the Zabarwan mountain range.",
        hotspots: [
          {
            id: "shikara-craft",
            sceneId: "kashmir-dal-lake",
            destinationId: "kashmir",
            title: "Handcrafted Cedar Shikara",
            subtitle: "Heritage Watercraft",
            lon: 175,
            lat: -12,
            category: "CRAFT",
            image: "/kashmir.jpg",
            description: "Carved from Himalayan deodar cedar wood with cushioned velvet seating, these gondolas have navigated Srinagar's waterways for five centuries.",
            fact: "Shikara boats are custom-crafted without metal nails, utilizing traditional wooden dowel joinery.",
            narration: "You are looking at a masterfully carved cedar Shikara. These iconic boats glide silently across Dal Lake, carrying travelers past floating lotus gardens and snow-capped peaks."
          },
          {
            id: "floating-market",
            sceneId: "kashmir-dal-lake",
            destinationId: "kashmir",
            title: "Floating Vegetable & Saffron Market",
            subtitle: "Century-Old Trade Ritual",
            lon: 245,
            lat: 5,
            category: "HERITAGE",
            image: "/kashmir.jpg",
            description: "A bustling dawn trading gathering where local farmers barter fresh organic produce, saffron bulbs, and water lilies directly boat-to-boat.",
            fact: "This is one of only two floating wholesale markets in all of Asia.",
            narration: "At sunrise, farmers gather here in hundreds of wooden boats to exchange fresh harvest in a barter tradition unchanged since the Mughal era."
          },
          {
            id: "zabarwan-crest",
            sceneId: "kashmir-dal-lake",
            destinationId: "kashmir",
            title: "Zabarwan Himalayan Range",
            subtitle: "Alpine Mountain Horizon",
            lon: 310,
            lat: 22,
            category: "NATURE",
            image: "/kashmir.jpg",
            description: "Majestic sub-Himalayan ridges framing Srinagar at an elevation exceeding 3,200 meters, cloaked in snow from November to May.",
            fact: "The Zabarwan hills cradle Asia's largest tulip garden along their lower foothills.",
            narration: "The towering Zabarwan mountain range forms a natural amphitheater around Srinagar, trapping cool alpine air and nurturing dense pine and chinar forests."
          }
        ]
      },
      {
        id: "kashmir-gulmarg",
        destinationId: "kashmir",
        title: "Gulmarg Meadow of Flowers & Apharwat",
        subtitle: "Pir Panjal Range • Alpine Slopes",
        panoramaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 90,
        initialLat: 5,
        description: "Immerse yourself in the high-altitude meadow of Gulmarg at 2,650m, surrounded by evergreen conifer forests and the colossal Apharwat peak.",
        hotspots: [
          {
            id: "gulmarg-gondola",
            sceneId: "kashmir-gulmarg",
            destinationId: "kashmir",
            title: "Gulmarg Gondola Phase 2",
            subtitle: "World's Highest Cable Car",
            lon: 85,
            lat: 18,
            category: "ADVENTURE",
            image: "/kashmir.jpg",
            description: "Ascending to an astronomical 3,980 meters on Mount Apharwat, offering panoramic views of Nanga Parbat and K2 on clear days.",
            fact: "It is the second highest operating cable car in the world, carrying skiers directly to glacial powder runs.",
            narration: "The Gulmarg Gondola carries explorers high above the tree line to Mount Apharwat, providing access to premier backcountry alpine ski terrain."
          },
          {
            id: "st-mary-church",
            sceneId: "kashmir-gulmarg",
            destinationId: "kashmir",
            title: "St. Mary's Victorian Stone Church",
            subtitle: "1902 Alpine Sanctuary",
            lon: 190,
            lat: -6,
            category: "ARCHITECTURE",
            image: "/kashmir.jpg",
            description: "An elegant Victorian stone church built in 1902, featuring stained glass windows and gray granite walls standing amid alpine meadows.",
            fact: "Survives heavy 10-foot winter snowpacks thanks to its steeply pitched cedar gables.",
            narration: "Standing solitary in the rolling green meadows, this 120-year-old stone chapel evokes the timeless charm of Victorian alpine architecture."
          }
        ]
      },
      {
        id: "kashmir-pahalgam",
        destinationId: "kashmir",
        title: "Pahalgam & Lidder Riverbank",
        subtitle: "Valley of Shepherds • Glacial River",
        panoramaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "lake_waters",
        initialLon: 0,
        initialLat: 0,
        description: "Walk along the foaming turquoise torrent of the Lidder River, winding through deep pine forests and shepherd huts.",
        hotspots: [
          {
            id: "lidder-river",
            sceneId: "kashmir-pahalgam",
            destinationId: "kashmir",
            title: "Glacial Lidder River",
            subtitle: "Crystal Mountain Torrent",
            lon: 340,
            lat: -14,
            category: "NATURE",
            image: "/kashmir.jpg",
            description: "Originating from the high Kolahoi Glacier, its roaring glacial waters are famed for brown trout and white-water kayaking.",
            fact: "Feeds fertile saffron fields and apple orchards downstream across the entire valley.",
            narration: "The Lidder River roars with crystal clear glacial meltwater, sustaining the lush pine ecosystems and traditional shepherd communities of Pahalgam."
          },
          {
            id: "betaab-meadows",
            sceneId: "kashmir-pahalgam",
            destinationId: "kashmir",
            title: "Betaab Valley Meadows",
            subtitle: "Pristine Himalayan Basin",
            lon: 60,
            lat: 10,
            category: "NATURE",
            image: "/kashmir.jpg",
            description: "A wide emerald river basin dotted with weeping willows and framed by dramatic snow-dusted limestone cliffs.",
            fact: "Named after the historic 1983 Bollywood blockbuster film that showcased its untouched beauty to the world.",
            narration: "Betaab Valley is surrounded by lush green pastures, snow-draped mountains, and meandering crystal streams that flow directly from Himalayan glaciers."
          }
        ]
      }
    ]
  },

  // 2. TAJ MAHAL (India)
  "taj-mahal": {
    destinationId: "taj-mahal",
    destinationName: "Taj Mahal & Agra",
    country: "India",
    tagline: "Monument of Eternal Love",
    scenes: [
      {
        id: "taj-mahal-main",
        destinationId: "taj-mahal",
        title: "Main Reflecting Pool & White Marble Dome",
        subtitle: "Agra • Makrana Marble Masterpiece",
        panoramaUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "palace_ambience",
        initialLon: 180,
        initialLat: 10,
        description: "Stand before the ivory-white marble mausoleum commissioned in 1631 by Mughal Emperor Shah Jahan, mirrored in the central Charbagh water pool.",
        hotspots: [
          {
            id: "central-marble-dome",
            sceneId: "taj-mahal-main",
            destinationId: "taj-mahal",
            title: "Central Makrana Marble Dome",
            subtitle: "73-Meter Symmetrical Apex",
            lon: 180,
            lat: 28,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
            description: "The bulbous white dome reaches 73 meters into the sky, constructed of translucent white Makrana marble from Rajasthan.",
            fact: "The dome changes color throughout the day: soft pink at sunrise, brilliant milky white at noon, and golden bronze under moonlight.",
            narration: "You are admiring the majestic central dome of the Taj Mahal. Built entirely of pure Makrana marble, its perfect symmetry represents the apex of Indo-Islamic architecture."
          },
          {
            id: "four-minarets",
            sceneId: "taj-mahal-main",
            destinationId: "taj-mahal",
            title: "Four Outward-Tilting Minarets",
            subtitle: "40-Meter Defensive Spires",
            lon: 140,
            lat: 18,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
            description: "Four identical three-tiered minarets framing the central plinth, engineered to lean outward by approximately two degrees.",
            fact: "The outward tilt was intentionally engineered so that in the event of a catastrophic earthquake, the minarets would fall away from the sacred tomb.",
            narration: "The four flanking minarets were deliberately angled outward by Mughal engineers to safeguard the main mausoleum chamber from earthquake collapse."
          },
          {
            id: "pietra-dura-inlay",
            sceneId: "taj-mahal-main",
            destinationId: "taj-mahal",
            title: "Pietra Dura (Parchin Kari) Inlays",
            subtitle: "Imperial Lapidary Gemstone Art",
            lon: 220,
            lat: -10,
            category: "CRAFT",
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
            description: "Intricate floral arabesques created by inlaying 28 varieties of precious and semi-precious stones (lapis lazuli, jade, crystal, carnelian) into marble.",
            fact: "A single marble floral petal can incorporate up to 35 precisely ground gemstone slivers.",
            narration: "Pietra Dura lapidary art adorns the marble surfaces with flowers that never fade, handcrafted with semi-precious stones from Persia, China, and Sri Lanka."
          }
        ]
      },
      {
        id: "taj-mahal-charbagh",
        destinationId: "taj-mahal",
        title: "Charbagh Persian Paradise Gardens",
        subtitle: "Geometric Quadrangle & Lotus Basins",
        panoramaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "lake_waters",
        initialLon: 0,
        initialLat: 0,
        description: "Walk the symmetrical sandstone pathways of Charbagh, representing the four rivers of Paradise in classical Persian garden design.",
        hotspots: [
          {
            id: "charbagh-fountains",
            sceneId: "taj-mahal-charbagh",
            destinationId: "taj-mahal",
            title: "Al-Kawthar Central Water Basin",
            subtitle: "Celestial Pool of Abundance",
            lon: 5,
            lat: -8,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
            description: "The elevated marble water tank placed at the center of the gardens, designed to reflect the entire Taj Mahal from any angle.",
            fact: "The fountains operate without mechanical pumps, utilizing an ancient gravity-fed copper pipe network with balanced pressure reservoirs.",
            narration: "This central pool is known as the Tank of Abundance. Its still waters create the world-famous mirror reflection of the Taj Mahal's marble facade."
          },
          {
            id: "great-gate-darwaza",
            sceneId: "taj-mahal-charbagh",
            destinationId: "taj-mahal",
            title: "Darwaza-i-Rauza (The Great Gate)",
            subtitle: "Monumental Red Sandstone Portal",
            lon: 180,
            lat: 15,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
            description: "The massive red sandstone entry gate inscribed with Arabic calligraphy inviting pure souls into Paradise.",
            fact: "The Arabic lettering is graduated in size so that it appears uniform from ground level to the top of the 30-meter arch.",
            narration: "The Great Gate serves as the grand threshold between the bustling mortal world outside and the serene paradise sanctuary within."
          }
        ]
      },
      {
        id: "taj-mahal-yamuna",
        destinationId: "taj-mahal",
        title: "Mehtab Bagh & Yamuna Riverfront",
        subtitle: "Moonlight Garden • Sunset Silhouette",
        panoramaUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "palace_ambience",
        initialLon: 90,
        initialLat: 5,
        description: "Gaze across the sacred Yamuna River from Mehtab Bagh as twilight paints the white marble mausoleum in amber and indigo hues.",
        hotspots: [
          {
            id: "mehtab-bagh-view",
            sceneId: "taj-mahal-yamuna",
            destinationId: "taj-mahal",
            title: "Mehtab Bagh (Moonlight Garden)",
            subtitle: "Riverside Sunset Vantage",
            lon: 95,
            lat: 12,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
            description: "Built by Emperor Babur and aligned perfectly with the Taj Mahal across the river to view the monument illuminated by moonlight.",
            fact: "Excavations revealed a massive octagonal pool with 25 fountains designed to mirror the Taj under full moon skies.",
            narration: "Mehtab Bagh offers an unobstructed panoramic vantage of the Taj Mahal from across the Yamuna River, especially magical during golden sunset."
          }
        ]
      }
    ]
  },

  // 3. PARIS (France)
  paris: {
    destinationId: "paris",
    destinationName: "Paris",
    country: "France",
    tagline: "City of Light & Classical Splendor",
    scenes: [
      {
        id: "eiffel-champ-de-mars",
        destinationId: "paris",
        title: "Eiffel Tower & Champ de Mars",
        subtitle: "7th Arrondissement • Iron Masterpiece",
        panoramaUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 180,
        initialLat: 10,
        description: "Stand directly at the foot of Gustave Eiffel's 330-meter wrought-iron lattice tower as sunlight reflects off Parisian stone boulevards.",
        hotspots: [
          {
            id: "eiffel-summit",
            sceneId: "eiffel-champ-de-mars",
            destinationId: "paris",
            title: "Eiffel Tower Spire",
            subtitle: "330m Architectural Marvel",
            lon: 180,
            lat: 38,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
            description: "Erected for the 1889 Exposition Universelle, composed of 18,038 puddle iron components bound by 2.5 million rivets.",
            fact: "Thermal expansion causes the tower to grow by up to 15 cm taller during hot summer days.",
            narration: "Rising 330 meters above the Seine, the Eiffel Tower remains one of the world's most recognizable triumphs of 19th-century structural engineering."
          },
          {
            id: "champ-de-mars",
            sceneId: "eiffel-champ-de-mars",
            destinationId: "paris",
            title: "Champ de Mars Gardens",
            subtitle: "Historic Promenade",
            lon: 270,
            lat: -10,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
            description: "Lush geometric public greenspace named after the Roman god of war, lined with meticulously pruned chestnut trees.",
            fact: "Originally utilized as military drill grounds by the cadets of the École Militaire.",
            narration: "The Champ de Mars offers sweeping lawns where locals and travelers gather for evening picnics under the golden illumination of the Eiffel Tower."
          }
        ]
      },
      {
        id: "louvre-courtyard",
        destinationId: "paris",
        title: "Louvre Museum & Glass Pyramid",
        subtitle: "1st Arrondissement • Royal Palace",
        panoramaUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 90,
        initialLat: 0,
        description: "Explore the vast Cour Napoléon where I.M. Pei's futuristic glass pyramid intersects with 800 years of French Renaissance palace architecture.",
        hotspots: [
          {
            id: "glass-pyramid",
            sceneId: "louvre-courtyard",
            destinationId: "paris",
            title: "Pei's Glass Pyramid",
            subtitle: "Modernist Masterpiece (1989)",
            lon: 95,
            lat: 12,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
            description: "Constructed with 673 diamond-shaped and triangular glass segments, creating an airy subterranean grand entrance hall.",
            fact: "The glass was specially engineered to be ultra-clear with zero green tint so the palace facades remain uncolored.",
            narration: "Designed by visionary architect I.M. Pei, this diamond glass pyramid serves as the entrance portal to the world's most visited art museum."
          }
        ]
      }
    ]
  },

  // 4. TOKYO (Japan)
  tokyo: {
    destinationId: "tokyo",
    destinationName: "Tokyo",
    country: "Japan",
    tagline: "Where Neon Metropolis Meets Ancient Shrines",
    scenes: [
      {
        id: "shibuya-crossing",
        destinationId: "tokyo",
        title: "Shibuya Crossing & Neon Canyon",
        subtitle: "Shibuya Ward • World's Busiest Intersection",
        panoramaUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 0,
        initialLat: 5,
        description: "Stand at the center of Shibuya Crossing as thousands of pedestrians surge under colossal LED screens and electric neon lights.",
        hotspots: [
          {
            id: "shibuya-scramble",
            sceneId: "shibuya-crossing",
            destinationId: "tokyo",
            title: "The Great Scramble",
            subtitle: "Urban Symphony of Motion",
            lon: 10,
            lat: -15,
            category: "URBAN",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
            description: "Up to 3,000 pedestrians cross simultaneously on a single light change, orchestrated with razor-sharp Japanese transit precision.",
            fact: "Over 2.4 million people cross this intersection every single day.",
            narration: "Shibuya Scramble is the energetic heartbeat of modern Tokyo—a mesmerizing dance of synchronized crowds and vibrant neon light."
          },
          {
            id: "hachiko-statue",
            sceneId: "shibuya-crossing",
            destinationId: "tokyo",
            title: "Hachiko Memorial Plaza",
            subtitle: "Symbol of Unwavering Loyalty",
            lon: 260,
            lat: -8,
            category: "CULTURE",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
            description: "Bronze statue commemorating the faithful Akita dog who waited daily for 9 years at Shibuya Station for his deceased master.",
            fact: "The statue was unveiled in 1934 in the presence of Hachiko himself.",
            narration: "This beloved bronze monument honors Hachiko, the loyal Akita dog celebrated across Japan as an enduring symbol of devotion and loyalty."
          }
        ]
      },
      {
        id: "sensoji-temple",
        destinationId: "tokyo",
        title: "Senso-ji Ancient Buddhist Temple",
        subtitle: "Asakusa • Founded 645 AD",
        panoramaUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "temple_zen",
        initialLon: 180,
        initialLat: 8,
        description: "Immerse yourself in Tokyo's oldest temple sanctuary, surrounded by incense burners, five-story pagodas, and vermilion gates.",
        hotspots: [
          {
            id: "kaminarimon-gate",
            sceneId: "sensoji-temple",
            destinationId: "tokyo",
            title: "Kaminarimon Thunder Gate",
            subtitle: "Iconic 700kg Lantern",
            lon: 175,
            lat: 10,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
            description: "Massive entrance gate housing statues of Raijin (Thunder God) and Fujin (Wind God) flanking a colossal red paper lantern.",
            fact: "The iconic red lantern is handcrafted from Japanese washi paper and cedar by artisans in Kyoto.",
            narration: "The Kaminarimon Thunder Gate marks the sacred threshold into Senso-ji Temple, protecting Tokyo with ancient spirit guardians."
          }
        ]
      }
    ]
  },

  // 5. MACHU PICCHU (Peru)
  "machu-picchu": {
    destinationId: "machu-picchu",
    destinationName: "Machu Picchu",
    country: "Peru",
    tagline: "Lost City of the Incas in the Clouds",
    scenes: [
      {
        id: "citadel-guardhouse",
        destinationId: "machu-picchu",
        title: "Upper Guardhouse & Sacred Terraces",
        subtitle: "Andes Mountains • 2,430m Elevation",
        panoramaUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 180,
        initialLat: 0,
        description: "Overlook the entire Incan stone citadel nestled between sheer granite precipices and the iconic cone peak of Huayna Picchu.",
        hotspots: [
          {
            id: "huayna-picchu",
            sceneId: "citadel-guardhouse",
            destinationId: "machu-picchu",
            title: "Huayna Picchu Peak",
            subtitle: "Sacred Mountain Sentinel",
            lon: 185,
            lat: 25,
            category: "NATURE",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop",
            description: "Rising 260 meters above the ruins, featuring dizzying 'Death Stairs' carved into vertical cliffs leading to the Temple of the Moon.",
            fact: "Incan high priests resided at the summit of Huayna Picchu to monitor astronomical alignments.",
            narration: "Huayna Picchu towers dramatically above the citadel, providing a backdrop of sheer granite and tropical cloud forest."
          },
          {
            id: "agricultural-terraces",
            sceneId: "citadel-guardhouse",
            destinationId: "machu-picchu",
            title: "Incan Agricultural Andenes",
            subtitle: "Engineering Feat of 1450 AD",
            lon: 110,
            lat: -20,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop",
            description: "Over 700 stone-retained agricultural terraces with multi-layered gravel drainage that prevent erosion on 40-degree mountain slopes.",
            fact: "The dark stone walls absorbed daytime solar heat, preventing frost on crops during frigid Andean nights.",
            narration: "These masterfully engineered stone terraces stabilized the steep mountain slopes and created localized microclimates for cultivating diverse crops."
          }
        ]
      }
    ]
  },

  // 6. CAIRO (Egypt)
  cairo: {
    destinationId: "cairo",
    destinationName: "Cairo & Giza",
    country: "Egypt",
    tagline: "Eternal Pyramids & Ancient Nile",
    scenes: [
      {
        id: "giza-plateau",
        destinationId: "cairo",
        title: "Great Pyramid of Giza & Desert Sands",
        subtitle: "Giza Plateau • 2560 BC",
        panoramaUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "desert_wind",
        initialLon: 0,
        initialLat: 5,
        description: "Stand before the colossal limestone blocks of Khufu's pyramid—the only surviving Wonder of the Ancient World.",
        hotspots: [
          {
            id: "khufu-blocks",
            sceneId: "giza-plateau",
            destinationId: "cairo",
            title: "Great Pyramid of Khufu",
            subtitle: "2.3 Million Limestone Megaliths",
            lon: 10,
            lat: 28,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800&auto=format&fit=crop",
            description: "Originally rising 146.6 meters, it stood as the tallest man-made structure on Earth for over 3,800 consecutive years.",
            fact: "The pyramid is aligned to true celestial north with an error of just four-sixtieths of a degree.",
            narration: "The Great Pyramid of Khufu has stood for over 4,500 years, constructed with extraordinary mathematical precision from millions of carved limestone blocks."
          },
          {
            id: "sphinx-sentinel",
            sceneId: "giza-plateau",
            destinationId: "cairo",
            title: "The Great Sphinx of Giza",
            subtitle: "Lion-Bodied Guardian",
            lon: 200,
            lat: 10,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
            description: "Carved from a single ridge of limestone, measuring 73 meters long and 20 meters high.",
            fact: "Believed to represent the face of Pharaoh Khafre wearing the royal Nemes headdress.",
            narration: "The Great Sphinx stands eternal vigil over the Giza Plateau, the ancient symbol of pharaonic power and divine wisdom."
          }
        ]
      }
    ]
  },

  // 7. ROME (Italy)
  rome: {
    destinationId: "rome",
    destinationName: "Rome",
    country: "Italy",
    tagline: "The Eternal City",
    scenes: [
      {
        id: "colosseum-arena",
        destinationId: "rome",
        title: "The Flavian Amphitheatre (Colosseum)",
        subtitle: "Piazza del Colosseo • 80 AD",
        panoramaUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 180,
        initialLat: 5,
        description: "Stand inside the colossal travertine stone arches of the ancient Roman Colosseum, where 50,000 citizens once gathered.",
        hotspots: [
          {
            id: "colosseum-arches",
            sceneId: "colosseum-arena",
            destinationId: "rome",
            title: "Travertine Arcade Arches",
            subtitle: "Doric, Ionic & Corinthian Orders",
            lon: 175,
            lat: 18,
            category: "HERITAGE",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop",
            description: "Four tiers of monumental arches showcasing stacked classical architectural orders built from 100,000 cubic meters of travertine stone.",
            fact: "The arena could be flooded with aqueduct water to stage mock naval sea battles known as naumachiae.",
            narration: "The Colosseum stands as an enduring monument to Roman engineering and imperial majesty, having witnessed two millennia of history."
          }
        ]
      }
    ]
  },

  // 8. SANTORINI (Greece)
  santorini: {
    destinationId: "santorini",
    destinationName: "Santorini",
    country: "Greece",
    tagline: "Aegean Blue Domes & Volcanic Calderas",
    scenes: [
      {
        id: "oia-caldera",
        destinationId: "santorini",
        title: "Oia Cliffside & Blue-Domed Chapels",
        subtitle: "Cyclades • Aegean Sea Vista",
        panoramaUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "ocean_waves",
        initialLon: 180,
        initialLat: 0,
        description: "Take in the cliffside village of Oia, where white-washed cave houses and cobalt blue domes cling to 300-meter volcanic sea cliffs.",
        hotspots: [
          {
            id: "blue-domes",
            sceneId: "oia-caldera",
            destinationId: "santorini",
            title: "Three Blue Domes of Oia",
            subtitle: "Agios Spiridonas & Anastasis",
            lon: 175,
            lat: 10,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
            description: "World-famous cobalt blue cupolas mirroring the Aegean sky, crowning 19th-century cliffside orthodox chapels.",
            fact: "The white whitewash incorporates lime which historically acted as a natural antibacterial disinfectant for rainwater harvesting.",
            narration: "Perched over the Aegean caldera, these iconic blue domes represent quintessential Cycladic architecture and world-famous sunset vistas."
          }
        ]
      }
    ]
  },

  // 9. DUBAI (UAE)
  dubai: {
    destinationId: "dubai",
    destinationName: "Dubai",
    country: "United Arab Emirates",
    tagline: "Mirage Metropolises & Futuristic Horizons",
    scenes: [
      {
        id: "downtown-burj",
        destinationId: "dubai",
        title: "Burj Khalifa & Downtown Promenade",
        subtitle: "Downtown Dubai • 828m Sovereign Spire",
        panoramaUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 0,
        initialLat: 15,
        description: "Gaze upward at the soaring 828-meter spire of Burj Khalifa reflecting desert sunlight and dancing fountain waters.",
        hotspots: [
          {
            id: "burj-spire",
            sceneId: "downtown-burj",
            destinationId: "dubai",
            title: "Burj Khalifa Pinnacle",
            subtitle: "World's Tallest Structure",
            lon: 5,
            lat: 42,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
            description: "163 habitable floors engineered with a Y-shaped tri-axial geometry inspired by the desert Spider Lily flower (Hymenocallis).",
            fact: "You can watch the sunset from the base, take the high-speed elevator to floor 148, and watch the exact same sunset again.",
            narration: "Piercing the sky at 828 meters, the Burj Khalifa is the tallest building on Earth—a masterwork of modern structural engineering and desert architecture."
          }
        ]
      }
    ]
  },

  // 10. NEW YORK (USA)
  "new-york": {
    destinationId: "new-york",
    destinationName: "New York City",
    country: "United States",
    tagline: "The Capital of the World",
    scenes: [
      {
        id: "manhattan-skyline",
        destinationId: "new-york",
        title: "Manhattan Sunset Skyline & Hudson River",
        subtitle: "Midtown Manhattan • Art Deco Icons",
        panoramaUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "city_ambience",
        initialLon: 180,
        initialLat: 5,
        description: "Look across the legendary Manhattan skyline as evening falls over the Empire State Building, Chrysler spire, and Hudson River.",
        hotspots: [
          {
            id: "empire-state-spire",
            sceneId: "manhattan-skyline",
            destinationId: "new-york",
            title: "Empire State Building",
            subtitle: "Art Deco Sovereign of Skylines",
            lon: 185,
            lat: 25,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
            description: "Soaring 381 meters to its roof, completed in 1931 during the height of the skyscraper race.",
            fact: "The building was designed to serve as a mooring mast for transatlantic passenger dirigible airships.",
            narration: "The Empire State Building is an enduring symbol of American innovation and art deco elegance."
          }
        ]
      }
    ]
  },

  // 11. LADAKH (India)
  ladakh: {
    destinationId: "ladakh",
    destinationName: "Ladakh",
    country: "India",
    tagline: "Land of High Passes & Cosmic Skies",
    scenes: [
      {
        id: "pangong-tso-scene",
        destinationId: "ladakh",
        title: "Pangong Tso High Altitude Salt Lake",
        subtitle: "4,225m Altitude • Changthang Plateau",
        panoramaUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 0,
        initialLat: 0,
        description: "Stand along the cobalt blue shoreline of Pangong Tso, mirroring 6,000-meter snow summits across the high plateau.",
        hotspots: [
          {
            id: "pangong-waters",
            sceneId: "pangong-tso-scene",
            destinationId: "ladakh",
            title: "Pangong Tso 7-Color Gradient",
            subtitle: "Endorheic Saline Lake",
            lon: 10,
            lat: -10,
            category: "NATURE",
            image: "/ladakh.jpg",
            description: "Extending 134 km across high Himalayas, famous for changing hues from crystal turquoise to deep indigo throughout the day.",
            fact: "Despite being saline, it completely freezes over during winter, with temperatures dropping below -30°C.",
            narration: "Pangong Tso sits at over 4,200 meters elevation, surrounded by barren golden mountains and crystal blue skies."
          }
        ]
      }
    ]
  },

  // 12. RAJASTHAN (India)
  rajasthan: {
    destinationId: "rajasthan",
    destinationName: "Rajasthan",
    country: "India",
    tagline: "Kingdom of Forts & Thar Desert",
    scenes: [
      {
        id: "amber-fort-scene",
        destinationId: "rajasthan",
        title: "Amber Fort & Sheesh Mahal Courtyard",
        subtitle: "Jaipur • Rajput Royalty",
        panoramaUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "palace_ambience",
        initialLon: 180,
        initialLat: 5,
        description: "Wander through the yellow and pink sandstone courtyards of Amber Fort, overlooking Maota Lake in the Aravalli Hills.",
        hotspots: [
          {
            id: "sheesh-mahal-spot",
            sceneId: "amber-fort-scene",
            destinationId: "rajasthan",
            title: "Sheesh Mahal (Mirror Palace)",
            subtitle: "Convex Glass Mosaic Art",
            lon: 175,
            lat: 12,
            category: "HERITAGE",
            image: "/rajasthan.jpg",
            description: "Walls and ceilings covered in thousands of concave Belgian mirror pieces that illuminate the entire chamber with a single candle.",
            fact: "The hall was designed so royalty could experience sleeping beneath a starlit night sky indoors during cold winter nights.",
            narration: "The Sheesh Mahal is a marvel of Mughal and Rajput decorative craftsmanship, shimmering with intricate mirror mosaics."
          }
        ]
      }
    ]
  },

  // 13. KERALA (India)
  kerala: {
    destinationId: "kerala",
    destinationName: "Kerala",
    country: "India",
    tagline: "God's Own Country & Tropical Backwaters",
    scenes: [
      {
        id: "alleppey-backwaters-scene",
        destinationId: "kerala",
        title: "Alleppey Backwaters & Palm Canals",
        subtitle: "Vembanad Lake • Kettuvallam Route",
        panoramaUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "lake_waters",
        initialLon: 0,
        initialLat: 0,
        description: "Cruise along the serene emerald backwaters of Alleppey aboard a traditional thatched-roof wooden houseboat.",
        hotspots: [
          {
            id: "kettuvallam-boat",
            sceneId: "alleppey-backwaters-scene",
            destinationId: "kerala",
            title: "Hand-Tied Kettuvallam Houseboat",
            subtitle: "Coir-Bound Anjili Wood",
            lon: 15,
            lat: -12,
            category: "CRAFT",
            image: "/kerala.jpg",
            description: "Constructed entirely of wild jackfruit wood tied with coconut coir ropes without a single iron nail.",
            fact: "Originally used as grain barges to transport harvested rice along canals to seaport markets.",
            narration: "Kettuvallam houseboats glide peacefully through palm-fringed lagoons, offering a timeless glimpse into traditional backwater life."
          }
        ]
      }
    ]
  },

  // 14. MEGHALAYA (India)
  meghalaya: {
    destinationId: "meghalaya",
    destinationName: "Meghalaya",
    country: "India",
    tagline: "Abode of the Clouds & Living Root Bridges",
    scenes: [
      {
        id: "nongriat-bridge-scene",
        destinationId: "meghalaya",
        title: "Nongriat Double Decker Living Root Bridge",
        subtitle: "East Khasi Hills • Bio-Engineering",
        panoramaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "lake_waters",
        initialLon: 180,
        initialLat: -5,
        description: "Gaze at the botanical marvel of living Ficus elastica tree roots woven across roaring jungle streams over two centuries.",
        hotspots: [
          {
            id: "living-root-bridge",
            sceneId: "nongriat-bridge-scene",
            destinationId: "meghalaya",
            title: "Double Decker Root Bridge (Jingkieng Nongriat)",
            subtitle: "Living Architecture",
            lon: 185,
            lat: 5,
            category: "NATURE",
            image: "/meghalaya.jpg",
            description: "Trained aerial roots of Indian rubber trees guided through hollow betel nut trunks across river chasms.",
            fact: "Unlike steel or concrete bridges that deteriorate, living root bridges grow stronger and more resilient with age.",
            narration: "These living root bridges are indigenous Khasi bio-engineering masterpieces that have endured torrential monsoon rains for generations."
          }
        ]
      }
    ]
  },

  // 15. GOA (India)
  goa: {
    destinationId: "goa",
    destinationName: "Goa",
    country: "India",
    tagline: "Sun-Kissed Coast & Portuguese Heritage",
    scenes: [
      {
        id: "palolem-beach-scene",
        destinationId: "goa",
        title: "Palolem Crescent Beach & Arabian Sea",
        subtitle: "South Goa • Golden Hour Tides",
        panoramaUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "ocean_waves",
        initialLon: 0,
        initialLat: 0,
        description: "Relax on the tranquil crescent sands of Palolem Beach framed by towering coconut palms and calm Arabian Sea waves.",
        hotspots: [
          {
            id: "palolem-cove",
            sceneId: "palolem-beach-scene",
            destinationId: "goa",
            title: "Palolem Sheltered Bay",
            subtitle: "Natural Coastal Sanctuary",
            lon: 345,
            lat: -10,
            category: "NATURE",
            image: "/goa.jpg",
            description: "A serene semi-circular natural cove known for dolphin sightings and breathtaking pastel ocean sunsets.",
            fact: "The southern headland creates a natural breakwater that keeps waters safe and calm throughout the season.",
            narration: "Palolem Beach offers gentle Arabian Sea surf, swaying coconut groves, and colorful sunset skies."
          }
        ]
      }
    ]
  },

  // 16. ZERMATT (Switzerland)
  zermatt: {
    destinationId: "zermatt",
    destinationName: "Zermatt & Matterhorn",
    country: "Switzerland",
    tagline: "Glacial Majesty beneath the Matterhorn",
    scenes: [
      {
        id: "zermatt-matterhorn-scene",
        destinationId: "zermatt",
        title: "Gornergrat Alpine Vista & The Matterhorn",
        subtitle: "Swiss Alps • 3,135m Elevation",
        panoramaUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 180,
        initialLat: 5,
        description: "Gaze across 29 high-alpine glaciers and the unmistakable pyramid crest of the Matterhorn piercing the azure European sky.",
        hotspots: [
          {
            id: "matterhorn-spire",
            sceneId: "zermatt-matterhorn-scene",
            destinationId: "zermatt",
            title: "The Matterhorn Peak (4,478m)",
            subtitle: "Global Alpine Icon",
            lon: 180,
            lat: 16,
            category: "NATURE",
            image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
            description: "Four steep triangular faces facing the cardinal compass points, shaped by glacial erosion over millions of years.",
            fact: "The Matterhorn is depicted on iconic Swiss chocolate and represents the pinnacle of mountaineering.",
            narration: "Before you stands the Matterhorn, the most photographed mountain peak in the world, rising 4,478 meters above sea level."
          },
          {
            id: "gorner-glacier",
            sceneId: "zermatt-matterhorn-scene",
            destinationId: "zermatt",
            title: "Gorner Glacier System",
            subtitle: "Ancient Alpine Ice Stream",
            lon: 230,
            lat: -14,
            category: "NATURE",
            image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
            description: "The second largest glacial system in the Alps, stretching across the Monte Rosa massif.",
            fact: "Gorner Glacier features deep turquoise crevasses and dynamic glacial meltwater rivers.",
            narration: "The vast Gorner Glacier carves its way through the mountain pass beneath you, carrying centuries of compressed blue ice."
          }
        ]
      }
    ]
  },

  // 17. SYDNEY (Australia)
  sydney: {
    destinationId: "sydney",
    destinationName: "Sydney & Harbour",
    country: "Australia",
    tagline: "Harbour of Light & Architectural Sails",
    scenes: [
      {
        id: "sydney-harbour-scene",
        destinationId: "sydney",
        title: "Circular Quay & Opera House Panorama",
        subtitle: "Sydney Harbour • Pacific Horizon",
        panoramaUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "ocean_waves",
        initialLon: 0,
        initialLat: 0,
        description: "Stand at the water's edge in Sydney Harbour, surrounded by the world-famous Opera House sails and bustling green and yellow ferries.",
        hotspots: [
          {
            id: "opera-house-shell",
            sceneId: "sydney-harbour-scene",
            destinationId: "sydney",
            title: "Sydney Opera House Sails",
            subtitle: "Jørn Utzon UNESCO Monument",
            lon: 350,
            lat: 10,
            category: "ARCHITECTURE",
            image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=800&auto=format&fit=crop",
            description: "Inaugurated in 1973, this expressionist architectural wonder hosts over 1,500 performances annually.",
            fact: "The soaring shells were constructed using precast concrete panels based on the geometry of a single sphere.",
            narration: "You are looking at the Sydney Opera House. Its radiant ceramic tiles catch the sun and reflect the Pacific Ocean waters."
          }
        ]
      }
    ]
  },

  // 18. REYKJAVIK (Iceland)
  reykjavik: {
    destinationId: "reykjavik",
    destinationName: "Reykjavik & Iceland",
    country: "Iceland",
    tagline: "Fire, Ice & Celestial Auroras",
    scenes: [
      {
        id: "iceland-gullfoss-scene",
        destinationId: "reykjavik",
        title: "Gullfoss Golden Waterfall & Canyon",
        subtitle: "Hvítá Glacial River • South Iceland",
        panoramaUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 90,
        initialLat: 0,
        description: "Feel the glacial mist of Gullfoss, plunging 32 meters into a deep basalt gorge fed by Langjökull glacier.",
        hotspots: [
          {
            id: "gullfoss-cataract",
            sceneId: "iceland-gullfoss-scene",
            destinationId: "reykjavik",
            title: "Gullfoss Double Cascade",
            subtitle: "Glacial Canyon Fissure",
            lon: 95,
            lat: -8,
            category: "NATURE",
            image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=800&auto=format&fit=crop",
            description: "Surging with glacial runoff at up to 140 cubic meters per second during summer.",
            fact: "Protected in the early 20th century by Sigríður Tómasdóttir, recognized as Iceland's first environmentalist.",
            narration: "Gullfoss, or the Golden Falls, roars with power as glacial meltwater from Langjökull plunges down a dramatic two-tiered canyon."
          }
        ]
      }
    ]
  }
};

/**
 * Retrieve virtual tour strictly by destination ID with safety validation
 */
export function getVirtualTour(destinationId) {
  if (destinationId && virtualTours[destinationId]) {
    return virtualTours[destinationId];
  }

  // Safety fallback tailored to the requested destination ID
  const cleanId = (destinationId || "global").toLowerCase();
  return {
    destinationId: cleanId,
    destinationName: cleanId.toUpperCase(),
    country: "World",
    tagline: "Explore Beyond Boundaries",
    scenes: [
      {
        id: `${cleanId}-primary-scene`,
        destinationId: cleanId,
        title: `${cleanId.toUpperCase()} Panoramic Realm`,
        subtitle: "Global 360° Equirectangular Sphere",
        panoramaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop",
        soundProfile: "alpine_wind",
        initialLon: 0,
        initialLat: 0,
        description: `Immerse yourself in full 360° panoramic exploration of ${cleanId.toUpperCase()}.`,
        hotspots: [
          {
            id: `${cleanId}-landmark-spot`,
            sceneId: `${cleanId}-primary-scene`,
            destinationId: cleanId,
            title: `${cleanId.toUpperCase()} Landmark Coordinate`,
            subtitle: "Verified Spatial Coordinate",
            lon: 0,
            lat: 0,
            category: "EXPLORATION",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
            description: `Key point of interest located in ${cleanId.toUpperCase()}.`,
            fact: "Explored and cataloged by Astravia Virtual Tourism.",
            narration: `Welcome to this panoramic destination. Use your mouse or touch swipe to explore in full 360 degrees.`
          }
        ]
      }
    ]
  };
}

export default virtualTours;
