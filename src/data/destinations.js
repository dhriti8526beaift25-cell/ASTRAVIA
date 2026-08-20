// ==========================================================================
// ASTRAVIA GLOBAL TRAVEL DATA ARCHITECTURE
// Comprehensive world dataset: Continents, Countries, Regions, Destinations,
// Virtual 360 Tours, Hotspots, Museum Artifacts, Quizzes, Stories & Dimensions.
// ==========================================================================

// 1. CONTINENTS
export const continents = [
  {
    id: "asia",
    name: "Asia",
    tagline: "Cradle of Ancient Civilizations & Cosmic Horizons",
    description: "From the snow-crowned Himalayan spires to neon Tokyo metropolises, tropical archipelagoes, and ancient Silk Route sanctuaries.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
    countryCount: 6,
    destinationCount: 12
  },
  {
    id: "europe",
    name: "Europe",
    tagline: "Timeless Architecture, Alpine Splendor & Living History",
    description: "Centuries of Renaissance art, Parisian boulevards, glacier-carved Swiss Alps, Mediterranean coastlines, and Nordic aurora skies.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    countryCount: 6,
    destinationCount: 10
  },
  {
    id: "north-america",
    name: "North America",
    tagline: "Towering Canyons, Iconic Skylines & Glacial Wilderness",
    description: "From Manhattan's electric skyline and California's Pacific highway to the turquoise glacial lakes of the Canadian Rockies.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    countryCount: 3,
    destinationCount: 6
  },
  {
    id: "south-america",
    name: "South America",
    tagline: "Lost Empires, Amazonian Mysteries & Andean Peaks",
    description: "Incan citadels nestled in misty cloud forests, glacial Patagonian fjords, and vibrant carnival rhythms of the Atlantic coast.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    countryCount: 3,
    destinationCount: 5
  },
  {
    id: "africa",
    name: "Africa",
    tagline: "Eternal Deserts, Cradle of Humanity & Wild Frontiers",
    description: "Monumental pyramids of Giza, golden Sahara sands, Cape Peninsula cliffs, and ancient medinas echoing with spice traders.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    countryCount: 3,
    destinationCount: 5
  },
  {
    id: "oceania",
    name: "Oceania",
    tagline: "Azure Barrier Reefs, Polynesian Seas & Alpine Fjords",
    description: "Luminescent coral reefs, sunlit Sydney harbors, and dramatic Lord of the Rings landscapes across New Zealand's South Island.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
    countryCount: 2,
    destinationCount: 4
  },
  {
    id: "middle-east",
    name: "Middle East",
    tagline: "Mirage Metropolises, Incense Trails & Desert Wonders",
    description: "Gleaming futuristic skylines rising from golden dunes, rose-red carved canyon facades, and timeless Arabian hospitality.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    countryCount: 2,
    destinationCount: 4
  }
];

// 2. COUNTRIES (18+ Diverse Global Nations)
export const countries = [
  // ASIA
  {
    id: "india",
    continentId: "asia",
    continentName: "Asia",
    name: "India",
    tagline: "A Subcontinent of Timeless Wonders",
    description: "Snow-crowned Himalayan peaks, royal sandstone palaces, tropical emerald backwaters, and living bio-engineered bridges.",
    image: "/kashmir.jpg",
    regionCount: 6,
    destinationCount: 6
  },
  {
    id: "japan",
    continentId: "asia",
    continentName: "Asia",
    name: "Japan",
    tagline: "Where Ancient Zen Meets Future Horizons",
    description: "Centuries of serene Buddhist temples, bamboo groves, Mount Fuji snowscapes, and vibrant cybernetic culture.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    regionCount: 3,
    destinationCount: 3
  },
  {
    id: "thailand",
    continentId: "asia",
    continentName: "Asia",
    name: "Thailand",
    tagline: "Land of Golden Temples & Turquoise Shores",
    description: "Gilded Buddhist stupas, emerald limestone sea karsts, fragrant night bazaars, and lush northern mist jungles.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "nepal",
    continentId: "asia",
    continentName: "Asia",
    name: "Nepal",
    tagline: "Throne of the Highest Mountain Giants",
    description: "Eight of the world's ten tallest summits, sacred prayer-flagged high passes, and pagoda-lined medieval squares.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // EUROPE
  {
    id: "france",
    continentId: "europe",
    continentName: "Europe",
    name: "France",
    tagline: "Art, High Gastronomy & Riviera Radiance",
    description: "Iconic wrought-iron spires, royal châteaux of the Loire, lavender fields of Provence, and Mediterranean azure cliffs.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    regionCount: 3,
    destinationCount: 3
  },
  {
    id: "italy",
    continentId: "europe",
    continentName: "Europe",
    name: "Italy",
    tagline: "Cradle of Renaissance, Classical Rome & Amalfi Cliffs",
    description: "Ancient Colosseum gladiatorial arches, terracotta Tuscan hill towns, Venetian gondola canals, and pastel coastal villages.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    regionCount: 3,
    destinationCount: 3
  },
  {
    id: "switzerland",
    continentId: "europe",
    continentName: "Europe",
    name: "Switzerland",
    tagline: "Alpine Glaciers, Mirror Lakes & Matterhorn Spines",
    description: "Pristine cogwheel alpine railways, turquoise mountain tarns, wooden chalets, and untracked powder snow summits.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "united-kingdom",
    continentId: "europe",
    continentName: "Europe",
    name: "United Kingdom",
    tagline: "Imperial Towers, Misty Lochs & Royal Heritage",
    description: "Thames riverbank castles, Scottish Highland glens, ancient stone circles, and cozy cobblestone village inns.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "greece",
    continentId: "europe",
    continentName: "Europe",
    name: "Greece",
    tagline: "Mythological Acropolises & White-Washed Cyclades",
    description: "Sun-drenched marble Parthenon columns, Aegean blue-domed cliff chapels, and golden olive groves caressed by sea winds.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "iceland",
    continentId: "europe",
    continentName: "Europe",
    name: "Iceland",
    tagline: "Land of Fire, Ice & Dancing Northern Lights",
    description: "Thunderous black basalt waterfalls, volcanic geothermal lagoons, crystal ice caves, and cosmic aurora skies.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // NORTH AMERICA
  {
    id: "united-states",
    continentId: "north-america",
    continentName: "North America",
    name: "United States",
    tagline: "Epic National Parks & Cosmopolitan Icons",
    description: "From Manhattan's illuminated skyline and Golden Gate Pacific mists to Arizona's colossal Grand Canyon chasms.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop",
    regionCount: 3,
    destinationCount: 3
  },
  {
    id: "canada",
    continentId: "north-america",
    continentName: "North America",
    name: "Canada",
    tagline: "Turquoise Glacial Lakes & Majestic Rockies",
    description: "Mirror-still waters of Lake Louise, snow-capped Canadian Rocky crests, and vast untouched boreal wilderness.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // SOUTH AMERICA
  {
    id: "peru",
    continentId: "south-america",
    continentName: "South America",
    name: "Peru",
    tagline: "Incan Sanctuaries & Andean Cloud Forests",
    description: "Machu Picchu rising through swirling mountain mist, the Sacred Valley of the Incas, and rich Quechua textile traditions.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "brazil",
    continentId: "south-america",
    continentName: "South America",
    name: "Brazil",
    tagline: "Christ the Redeemer, Copacabana & Amazonian Jungles",
    description: "Granite peaks over Guanabara Bay, white sand tropical beaches, and the world's most colossal river rainforest basin.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // AFRICA
  {
    id: "egypt",
    continentId: "africa",
    continentName: "Africa",
    name: "Egypt",
    tagline: "Pharaohs, Colossal Pyramids & Timeless Nile",
    description: "The Great Pyramids of Giza standing 4,500 years, golden Tutankhamun treasures, and feluccas sailing along the life-giving Nile.",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "south-africa",
    continentId: "africa",
    continentName: "Africa",
    name: "South Africa",
    tagline: "Table Mountain, Cape Oceans & Big Five Savannas",
    description: "Table Mountain overlooking two colliding oceans, sunlit Cape winelands, and vast Kruger wildlife plains.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "morocco",
    continentId: "africa",
    continentName: "Africa",
    name: "Morocco",
    tagline: "Ochre Medinas, Atlas Peaks & Sahara Starlight",
    description: "Spice-scented souks of Marrakech, blue alleyways of Chefchaouen, and camel expeditions into towering Erg Chebbi dunes.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // OCEANIA
  {
    id: "australia",
    continentId: "oceania",
    continentName: "Oceania",
    name: "Australia",
    tagline: "Sydney Opera Sails, Outback Red Earth & Coral Reefs",
    description: "Iconic Sydney Harbour architecture, the turquoise expanse of the Great Barrier Reef, and ancient sacred monoliths.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },
  {
    id: "new-zealand",
    continentId: "oceania",
    continentName: "Oceania",
    name: "New Zealand",
    tagline: "Southern Alps Fjords & Geothermal Maori Valleys",
    description: "Milford Sound sheer glacial cliffs, turquoise alpine lakes, snow summits, and rich Maori cultural heritage.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  },

  // MIDDLE EAST
  {
    id: "uae",
    continentId: "middle-east",
    continentName: "Middle East",
    name: "United Arab Emirates",
    tagline: "Burj Khalifa, Mirage Metropolises & Desert Luxury",
    description: "The world's tallest architectural marvels, traditional Arabian dhows, desert dune resorts, and futuristic cultural museums.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    regionCount: 2,
    destinationCount: 2
  }
];

// 3. REGIONS / STATES / PROVINCES
export const regions = [
  // INDIA REGIONS
  { id: "jammu-kashmir", countryId: "india", continentId: "asia", name: "Jammu & Kashmir", capital: "Srinagar", destinationId: "kashmir", image: "/kashmir.jpg", tag: "Alpine Paradise" },
  { id: "uttar-pradesh-state", countryId: "india", continentId: "asia", name: "Uttar Pradesh (Agra)", capital: "Lucknow", destinationId: "taj-mahal", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", tag: "Mughal Wonder" },
  { id: "ladakh-ut", countryId: "india", continentId: "asia", name: "Ladakh", capital: "Leh", destinationId: "ladakh", image: "/ladakh.jpg", tag: "High Altitude Desert" },
  { id: "rajasthan-state", countryId: "india", continentId: "asia", name: "Rajasthan", capital: "Jaipur", destinationId: "rajasthan", image: "/rajasthan.jpg", tag: "Kingdom of Forts" },
  { id: "kerala-state", countryId: "india", continentId: "asia", name: "Kerala", capital: "Thiruvananthapuram", destinationId: "kerala", image: "/kerala.jpg", tag: "Tropical Backwaters" },
  { id: "meghalaya-state", countryId: "india", continentId: "asia", name: "Meghalaya", capital: "Shillong", destinationId: "meghalaya", image: "/meghalaya.jpg", tag: "Abode of Clouds" },
  { id: "goa-state", countryId: "india", continentId: "asia", name: "Goa", capital: "Panaji", destinationId: "goa", image: "/goa.jpg", tag: "Sun-Kissed Coast" },

  // JAPAN REGIONS
  { id: "kanto-tokyo", countryId: "japan", continentId: "asia", name: "Tokyo & Kanto", capital: "Tokyo", destinationId: "tokyo", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop", tag: "Neon Metropolis" },
  { id: "kansai-kyoto", countryId: "japan", continentId: "asia", name: "Kyoto & Kansai", capital: "Kyoto", destinationId: "kyoto", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop", tag: "Imperial Zen Sanctuaries" },

  // FRANCE REGIONS
  { id: "ile-de-france", countryId: "france", continentId: "europe", name: "Île-de-France", capital: "Paris", destinationId: "paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop", tag: "City of Light" },
  { id: "provence-riviera", countryId: "france", continentId: "europe", name: "Provence & Côte d'Azur", capital: "Marseille", destinationId: "paris", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop", tag: "Mediterranean Charm" },

  // ITALY REGIONS
  { id: "lazio-rome", countryId: "italy", continentId: "europe", name: "Lazio (Rome)", capital: "Rome", destinationId: "rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop", tag: "Eternal City" },
  { id: "tuscany-region", countryId: "italy", continentId: "europe", name: "Tuscany", capital: "Florence", destinationId: "tuscany", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop", tag: "Renaissance Heartland" },

  // SWITZERLAND REGIONS
  { id: "valais-matterhorn", countryId: "switzerland", continentId: "europe", name: "Valais (Zermatt)", capital: "Sion", destinationId: "zermatt", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop", tag: "Glacial Matterhorn" },

  // UK REGIONS
  { id: "greater-london", countryId: "united-kingdom", continentId: "europe", name: "Greater London", capital: "London", destinationId: "london", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop", tag: "Royal Capital" },

  // GREECE REGIONS
  { id: "cyclades-santorini", countryId: "greece", continentId: "europe", name: "Cyclades (Santorini)", capital: "Thira", destinationId: "santorini", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop", tag: "Aegean Cliff Sunsets" },

  // USA REGIONS
  { id: "new-york-state", countryId: "united-states", continentId: "north-america", name: "New York", capital: "Albany", destinationId: "new-york", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop", tag: "Empire State" },
  { id: "california-state", countryId: "united-states", continentId: "north-america", name: "California", capital: "Sacramento", destinationId: "san-francisco", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop", tag: "Pacific Coast" },

  // CANADA REGIONS
  { id: "alberta-rockies", countryId: "canada", continentId: "north-america", name: "Alberta (Banff)", capital: "Edmonton", destinationId: "banff", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop", tag: "Glacial Rockies" },

  // PERU REGIONS
  { id: "cusco-region", countryId: "peru", continentId: "south-america", name: "Cusco Region", capital: "Cusco", destinationId: "machu-picchu", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop", tag: "Incan Heartland" },

  // EGYPT REGIONS
  { id: "cairo-giza-reg", countryId: "egypt", continentId: "africa", name: "Cairo & Giza", capital: "Cairo", destinationId: "cairo", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop", tag: "Pyramid Plateau" },

  // AUSTRALIA REGIONS
  { id: "nsw-sydney", countryId: "australia", continentId: "oceania", name: "New South Wales", capital: "Sydney", destinationId: "sydney", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop", tag: "Harbour Capital" },

  // UAE REGIONS
  { id: "dubai-emirate", countryId: "uae", continentId: "middle-east", name: "Dubai Emirate", capital: "Dubai", destinationId: "dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop", tag: "Futuristic Oasis" }
];

// 4. DESTINATIONS (Fully Featured with 360 Panoramas, Hotspots, Quizzes & Museum Artifacts)
export const destinations = [
  // 1. KASHMIR (India)
  {
    id: "kashmir",
    name: "KASHMIR",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Jammu & Kashmir",
    stateId: "jammu-kashmir",
    title: "Paradise on Earth",
    tagline: "Where the mountains meet the sky.",
    quote: "A landscape carved by mountains, water and time.",
    description: "Nestled in the cradle of the Pir Panjal and Great Himalayan ranges, Kashmir is a world of mirror-calm alpine waters, carved cedar shikaras, floating flower markets, and centuries-old Mughal gardens framed by snow summits.",
    category: "MOUNTAINS",
    type: "Nature",
    region: "Northern India",
    bestTime: "April – October",
    duration: "5–7 Days",
    idealFor: "Nature · Culture · Adventure",
    image: "/kashmir.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "1,585 m – 4,124 m",
    coordinates: { x: 30, y: 15, lat: "34.0837° N", lng: "74.7973° E" },
    highlights: [
      "Gliding across Dal Lake in a wooden Shikara at sunrise",
      "Riding the Gulmarg Gondola to 3,980m Apharwat Peak",
      "Walking through pine-scented valleys in Pahalgam",
      "Gazing at Thajiwas Glacier in Sonamarg"
    ],
    scenes: [
      { id: "dal-lake-dawn", title: "Dal Lake at Dawn", subtitle: "Srinagar Mirror Waters", image: "/kashmir.jpg", description: "Morning mist drifts across calm waters as cedar houseboats and floating vegetable markets awaken." },
      { id: "gulmarg-peaks", title: "Gulmarg Alpine Meadow", subtitle: "The Meadow of Flowers", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop", description: "Expansive green slopes encircled by towering pine forests and Asia's highest operating cable car." }
    ],
    hotspots: [
      { id: "dal-lake", title: "Dal Lake", subtitle: "Floating Gardens & Houseboats", x: 50, y: 60, image: "/kashmir.jpg", category: "WATER & HERITAGE", description: "Dal Lake covers 18 square kilometers and is the cultural heartbeat of Srinagar with over 1,000 intricately carved cedar houseboats.", fact: "The lake creates a mystical morning steam mist known locally as 'Koh'." },
      { id: "gulmarg-gondola", title: "Gulmarg Gondola", subtitle: "Kongdoori & Apharwat Peak", x: 25, y: 40, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", category: "ADVENTURE & MOUNTAINS", description: "Reaching an altitude of 3,980 meters, the Gulmarg Gondola carries adventurers to Apharwat Peak.", fact: "It is the second highest operating cable car in the world." }
    ],
    gallery: [
      { id: "pashmina-craft", title: "Royal Kashmiri Pashmina Shawl", category: "TEXTILE ARTIFACT", date: "18th Century Craft", image: "/kashmir.jpg", description: "Spun from the undercoat fleece of Changthangi mountain goats grazing above 4,000 meters.", context: "A single ceremonial Pashmina shawl could take up to two years of continuous hand weaving." }
    ],
    itinerary: [
      { day: 1, title: "Srinagar Arrival & Sunset Shikara Ride", desc: "Check into a heritage cedar houseboat on Dal Lake and cruise floating flower markets." },
      { day: 2, title: "Mughal Gardens & Heritage Walk", desc: "Discover Shalimar Bagh, Nishat Bagh, and old city wooden architecture." },
      { day: 3, title: "Gulmarg Alpine Meadows & Gondola", desc: "Ascend Apharwat Peak via cable car and hike high alpine trails." }
    ],
    quiz: [
      { question: "What is the famous traditional wooden boat called in Kashmir?", options: ["Shikara", "Gondola", "Sampan", "Coracle"], correctIndex: 0, explanation: "Shikaras are handcrafted wooden boats synonymous with Dal Lake in Srinagar." },
      { question: "The Gulmarg Gondola reaches Apharwat Peak at approximately what altitude?", options: ["2,100 m", "3,980 m", "5,200 m", "1,200 m"], correctIndex: 1, explanation: "The Gulmarg Gondola Phase II ascends to an astounding 3,980 meters elevation." },
      { question: "Which spiced green tea with saffron and almonds is central to Kashmiri hospitality?", options: ["Matcha", "Kahwa", "Earl Grey", "Chai Masala"], correctIndex: 1, explanation: "Kahwa is an aromatic green tea brewed with saffron strands, crushed almonds, and cardamom." },
      { question: "What type of timber is traditionally used to construct Dal Lake houseboats?", options: ["Deodar Cedar", "Teak", "Pine", "Rosewood"], correctIndex: 0, explanation: "Deodar Cedar wood contains natural oils that make it water-resistant for over a century." },
      { question: "Which mountain range frames the breathtaking skyline of the Kashmir Valley?", options: ["Pir Panjal", "Western Ghats", "Aravalli Range", "Nilgiri Hills"], correctIndex: 0, explanation: "The Kashmir Valley is encircled by the Pir Panjal and Great Himalayan mountain ranges." }
    ]
  },

  // 2. TAJ MAHAL & AGRA (India)
  {
    id: "taj-mahal",
    name: "TAJ MAHAL & AGRA",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Uttar Pradesh",
    stateId: "uttar-pradesh-state",
    title: "Monument of Eternal Love",
    tagline: "A white marble poem on the banks of the Yamuna.",
    quote: "A tear on the face of eternity, sculpted from pure Makrana marble.",
    description: "Commissioned in 1631 by Mughal Emperor Shah Jahan for his beloved wife Mumtaz Mahal, the Taj Mahal is a UNESCO World Heritage site and an undisputed masterwork of Islamic symmetry, Pietra Dura lapidary art, and Persian garden design.",
    category: "HERITAGE",
    type: "Culture",
    region: "Northern India",
    bestTime: "October – March",
    duration: "2–4 Days",
    idealFor: "Mughal Architecture · History · Photography",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "171 m",
    coordinates: { x: 72, y: 38, lat: "27.1751° N", lng: "78.0421° E" },
    highlights: [
      "Viewing the ivory-white dome reflected in the central Charbagh pool at sunrise",
      "Examining intricate floral lapidary inlays of semiprecious stones in white marble",
      "Strolling the red sandstone courtyards and palaces of Agra Fort",
      "Watching the sunset silhouette of the Taj Mahal from Mehtab Bagh across the river"
    ],
    scenes: [
      { id: "taj-main-pool", title: "Reflecting Pools & Charbagh", subtitle: "Ivory Marble Spires", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop", description: "The iconic central reflecting pool mirroring the white dome and four flanking minarets." },
      { id: "agra-fort-view", title: "Agra Fort & Yamuna River", subtitle: "Mughal Imperial Seat", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop", description: "Massive 2.5km red sandstone fortress where Emperor Shah Jahan gazed at the Taj Mahal." }
    ],
    hotspots: [
      { id: "central-marble-dome", title: "Central White Marble Dome", subtitle: "73m Symmetrical Apex", x: 50, y: 35, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", category: "ARCHITECTURE", description: "The central bulbous dome rises 73 meters, constructed of luminous Makrana marble.", fact: "The dome changes color with the sun: pinkish at dawn, milky white at noon, and golden under the moon." },
      { id: "pietra-dura-inlay", title: "Pietra Dura Inlays", subtitle: "Floral Lapidary Art", x: 45, y: 65, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop", category: "CRAFT", description: "Over 28 varieties of precious and semi-precious stones (lapis lazuli, jade, crystal) hand-inlaid into white marble.", fact: "A single marble petal can contain up to 35 intricately fitted gemstone slivers." }
    ],
    gallery: [
      { id: "mughal-miniature", title: "Mughal Imperial Jade & Gold Inlay", category: "ROYAL TREASURE", date: "17th Century", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", description: "Carved nephrite jade vessels inlaid with rubies and 24-carat gold wire.", context: "Commissioned during the reign of Shah Jahan." }
    ],
    itinerary: [
      { day: 1, title: "Dawn at Taj Mahal & Charbagh Walk", desc: "Experience the sunrise lighting up the marble facade and explore the interior cenotaph chambers." },
      { day: 2, title: "Agra Fort & Sunset at Mehtab Bagh", desc: "Tour the royal pavilions of Agra Fort and watch the Taj Mahal silhouette across the Yamuna River from Mehtab Bagh." }
    ],
    quiz: [
      { question: "Which Mughal Emperor commissioned the construction of the Taj Mahal?", options: ["Shah Jahan", "Akbar the Great", "Aurangzeb", "Babur"], correctIndex: 0, explanation: "Emperor Shah Jahan built the Taj Mahal in memory of his beloved empress Mumtaz Mahal." },
      { question: "What type of white marble was used to build the Taj Mahal?", options: ["Makrana Marble", "Carrara Marble", "Parian Marble", "Pentelic Marble"], correctIndex: 0, explanation: "Luminous white Makrana marble was transported from Rajasthan using a fleet of 1,000 elephants." },
      { question: "Along the banks of which holy river is the Taj Mahal situated?", options: ["Yamuna River", "Ganges River", "Indus River", "Brahmaputra"], correctIndex: 0, explanation: "The Taj Mahal rests gracefully on the southern bank of the Yamuna River in Agra." },
      { question: "Why do the four exterior minarets lean slightly outward from the main tomb?", options: ["To prevent them falling on the tomb during earthquakes", "To create optical illusion", "Due to river soil sinking", "For acoustics"], correctIndex: 0, explanation: "The minarets were deliberately tilted outward so that in the event of an earthquake, they would fall away from the main dome." },
      { question: "Which four-quadrant garden layout surrounding the Taj Mahal symbolizes Paradise?", options: ["Charbagh", "Zen Garden", "Bagh-e-Fin", "Versailles Parterre"], correctIndex: 0, explanation: "Charbagh is the classical Persian four-part garden representing the four rivers of Paradise." }
    ]
  },

  // 3. PARIS (France)
  {
    id: "paris",
    name: "PARIS",
    country: "France",
    countryId: "france",
    continent: "Europe",
    continentId: "europe",
    state: "Île-de-France",
    stateId: "ile-de-france",
    title: "City of Light & Timeless Romance",
    tagline: "Where every boulevard is a museum.",
    quote: "A symphony of iron spires, limestone boulevards, and artistic soul.",
    description: "From the wrought-iron silhouette of the Eiffel Tower at twilight to the world's most colossal art collections inside the glass-pyramided Louvre and bohemian cobbled heights of Montmartre.",
    category: "HERITAGE",
    type: "Culture",
    region: "Western Europe",
    bestTime: "April – October",
    duration: "4–6 Days",
    idealFor: "Art · Architecture · Romance · Cuisine",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "35 m",
    coordinates: { x: 48, y: 32, lat: "48.8566° N", lng: "2.3522° E" },
    highlights: [
      "Ascending the Eiffel Tower for 360° panoramas across the Seine",
      "Gazing upon the Mona Lisa and Winged Victory inside the Louvre",
      "Strolling Montmartre to the gleaming white dome of Sacré-Cœur",
      "Cruising the Seine beneath illuminated stone bridges at dusk"
    ],
    scenes: [
      { id: "eiffel-twilight", title: "Champ de Mars & Eiffel Tower", subtitle: "The Iron Lady at Dusk", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop", description: "330 meters of puddled iron rising above Haussmann rooftops, illuminated with 20,000 sparkling golden flashbulbs." },
      { id: "louvre-pyramid", title: "Louvre Cour Napoleon", subtitle: "Grand Palace of Art", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop", description: "I.M. Pei's glass pyramid shimmering before the royal renaissance palace of French monarchs." }
    ],
    hotspots: [
      { id: "eiffel-tower", title: "Eiffel Tower", subtitle: "1889 World's Fair Monument", x: 45, y: 50, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop", category: "ICONIC LANDMARK", description: "Engineered by Gustave Eiffel for the 1889 Exposition Universelle, standing as the global symbol of France.", fact: "The tower shrinks by up to 15 cm in cold winter weather due to thermal contraction of the iron." },
      { id: "louvre-museum", title: "The Louvre Palace", subtitle: "World's Largest Art Museum", x: 75, y: 40, image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop", category: "WORLD MUSEUM", description: "Housing over 380,000 objects and 35,000 works of art including the Mona Lisa and Venus de Milo.", fact: "It would take approximately 200 days to see every artwork in the Louvre for 30 seconds each." }
    ],
    gallery: [
      { id: "louvre-sculpture", title: "Winged Victory of Samothrace", category: "HELLENISTIC SCULPTURE", date: "2nd Century BC", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop", description: "A masterpiece of Hellenistic sculpture depicting Nike, goddess of victory, poised on the prow of a warship.", context: "Discovered in 1863 on the Aegean island of Samothrace." }
    ],
    itinerary: [
      { day: 1, title: "Iconic Paris: Eiffel Tower & Seine Cruise", desc: "Ascend the Eiffel Tower and embark on an evening Seine cruise beneath illuminated stone bridges." },
      { day: 2, title: "The Louvre & Tuileries Gardens", desc: "Explore masterpieces of the Louvre and stroll down the Champs-Élysées to Arc de Triomphe." },
      { day: 3, title: "Montmartre Bohemian Artists & Sacré-Cœur", desc: "Wander cobbled alleyways of Place du Tertre and view panoramic city vistas from Sacré-Cœur." }
    ],
    quiz: [
      { question: "For which historic event was the Eiffel Tower originally constructed?", options: ["1889 World's Fair", "French Revolution", "Coronation of Napoleon", "Treaty of Versailles"], correctIndex: 0, explanation: "The Eiffel Tower was built as the entrance arch to the 1889 World's Fair." },
      { question: "Which famous river divides the Right Bank and Left Bank of Paris?", options: ["Seine River", "Danube", "Rhine", "Thames"], correctIndex: 0, explanation: "The Seine flows directly through the historical heart of Paris." },
      { question: "What is the famous bohemian hilltop neighborhood in northern Paris known for artists?", options: ["Montmartre", "Le Marais", "Latin Quarter", "Saint-Germain"], correctIndex: 0, explanation: "Montmartre was home to Monet, Picasso, and Van Gogh on its winding cobblestone slopes." },
      { question: "Who designed the modern glass pyramid entrance of the Louvre Museum?", options: ["I. M. Pei", "Gustave Eiffel", "Le Corbusier", "Renzo Piano"], correctIndex: 0, explanation: "Chinese-American architect I. M. Pei designed the glass pyramid unveiled in 1989." },
      { question: "What famous Gothic cathedral sits on the Île de la Cité in Paris?", options: ["Notre-Dame de Paris", "Sainte-Chapelle", "Sacré-Cœur", "Panthéon"], correctIndex: 0, explanation: "Notre-Dame de Paris is the celebrated 12th-century medieval Catholic cathedral." }
    ]
  },

  // 3. TOKYO (Japan)
  {
    id: "tokyo",
    name: "TOKYO",
    country: "Japan",
    countryId: "japan",
    continent: "Asia",
    continentId: "asia",
    state: "Tokyo & Kanto",
    stateId: "kanto-tokyo",
    title: "The Neon Metropolis of the Future",
    tagline: "Where ancient shrines sleep under neon skyscrapers.",
    quote: "A cybernetic wonderland pulsing with centuries of samurai discipline and futuristic energy.",
    description: "Tokyo is the world's most populous and technologically breathtaking metropolis, where tranquil 7th-century Buddhist temples coexist harmoniously with towering Shibuya crossing scrambles and Michelin-starred sushi masters.",
    category: "CULTURE",
    type: "Architecture",
    region: "East Asia",
    bestTime: "March – May & October – November",
    duration: "4–6 Days",
    idealFor: "Technology · Gastronomy · Shrines · Pop Culture",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "40 m",
    coordinates: { x: 88, y: 35, lat: "35.6762° N", lng: "139.6503° E" },
    highlights: [
      "Crossing the electric Shibuya Scramble surrounded by towering neon billboards",
      "Stepping through the massive red Kaminarimon Gate at Senso-ji Temple",
      "Gazing at Mount Fuji from the observation deck of Tokyo Skytree",
      "Savoring authentic Omakase sushi at early dawn in Toyosu Fish Market"
    ],
    scenes: [
      { id: "shibuya-night", title: "Shibuya Crossing at Night", subtitle: "World's Busiest Scramble", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop", description: "Up to 3,000 pedestrians cross simultaneously under thousands of square meters of blazing LED displays." },
      { id: "sensoji-shrine", title: "Senso-ji Temple, Asakusa", subtitle: "Tokyo's Oldest Sacred Site", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop", description: "Founded in 645 AD, featuring a 5-story pagoda and towering red paper lanterns." }
    ],
    hotspots: [
      { id: "shibuya-scramble", title: "Shibuya Scramble Crossing", subtitle: "Heart of Modern Tokyo", x: 45, y: 55, image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop", category: "METROPOLIS ICON", description: "The beating pulse of global youth culture, fashion, and cybernetic urban energy.", fact: "Over 2.4 million people traverse this single intersection every single day." },
      { id: "senso-ji", title: "Senso-ji Asakusa Kannon Temple", subtitle: "Ancient Sacred Buddhist Sanctuary", x: 75, y: 40, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop", category: "SACRED HERITAGE", description: "Dedicated to the bodhisattva Kannon, approached via the historic Nakamise-dori shopping street.", fact: "It is Tokyo's oldest temple, surviving wars and fires for nearly 1,400 years." }
    ],
    gallery: [
      { id: "samurai-katana", title: "Master Forged Bizen Samurai Katana", category: "ROYAL WEAPONRY", date: "15th Century Muromachi", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop", description: "Folded tamahagane steel folded over 15 times with a wave-pattern hamon temper line.", context: "Revered as the sacred soul of the samurai warrior class." }
    ],
    itinerary: [
      { day: 1, title: "Modern Tokyo: Shibuya, Shinjuku & Harajuku", desc: "Cross Shibuya Scramble, explore Meiji Shrine forest, and view neon nightscapes from Tokyo Metropolitan Government Building." },
      { day: 2, title: "Ancient Heritage: Asakusa & Akihabara Electric Town", desc: "Visit Senso-ji Temple and dive into the anime and robotics capital of Akihabara." },
      { day: 3, title: "Tsukiji Outer Market & Tokyo Skytree", desc: "Sample fresh sashimi at Toyosu and ascend the 634m Skytree for vistas across Tokyo Bay to Mt. Fuji." }
    ],
    quiz: [
      { question: "What is the famous pedestrian scramble crossing in Tokyo called?", options: ["Shibuya Crossing", "Shinjuku Plaza", "Ginza Square", "Akihabara Walk"], correctIndex: 0, explanation: "Shibuya Crossing is the world's busiest pedestrian intersection." },
      { question: "What is Tokyo's oldest Buddhist temple founded in 645 AD?", options: ["Senso-ji", "Meiji Jingu", "Kinkaku-ji", "Todai-ji"], correctIndex: 0, explanation: "Senso-ji in Asakusa was founded in 645 AD to honor the goddess Kannon." },
      { question: "What is the height of Tokyo Skytree, Japan's tallest structure?", options: ["634 m", "333 m", "450 m", "828 m"], correctIndex: 0, explanation: "Tokyo Skytree stands at exactly 634 meters (Musashi in historic Japanese wordplay)." },
      { question: "What iconic snow-capped volcano can be viewed from Tokyo on clear days?", options: ["Mount Fuji", "Mount Aso", "Mount Hiei", "Mount Yari"], correctIndex: 0, explanation: "Mount Fuji stands 100 kilometers southwest of Tokyo." },
      { question: "What traditional culinary art of multi-course seasonal cuisine originated in Japan?", options: ["Kaiseki", "Tapas", "Wazwan", "Dim Sum"], correctIndex: 0, explanation: "Kaiseki is a traditional multi-course Japanese dinner balancing taste, texture, and seasonal aesthetics." }
    ]
  },

  // 4. MACHU PICCHU (Peru)
  {
    id: "machu-picchu",
    name: "MACHU PICCHU",
    country: "Peru",
    countryId: "peru",
    continent: "South America",
    continentId: "south-america",
    state: "Cusco Region",
    stateId: "cusco-region",
    title: "Lost City of the Incas",
    tagline: "Where stone citadels touch the Andean clouds.",
    quote: "An architectural marvel suspended between emerald granite peaks and cosmic gods.",
    description: "Perched 2,430 meters above sea level on a narrow mountain ridge above the Urubamba River, Machu Picchu is the crown jewel of the Incan Empire, built with colossal polished dry-stone walls fitted without mortar.",
    category: "HERITAGE",
    type: "Heritage",
    region: "Andes Mountains",
    bestTime: "May – September",
    duration: "4–6 Days",
    idealFor: "Inca Ruins · Andean Trekking · Cloud Forests",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "2,430 m",
    coordinates: { x: 28, y: 68, lat: "13.1631° S", lng: "72.5450° W" },
    highlights: [
      "Watching dawn clouds part over the iconic Huayna Picchu mountain peak",
      "Examining the Intihuatana solar hitching stone used by Incan astronomers",
      "Walking the sacred stone agricultural terraces cascading down sheer cliffs",
      "Trekking the ancient cobblestone Inca Trail through Andean cloud forests"
    ],
    scenes: [
      { id: "machu-citadel", title: "Machu Picchu Citadel Overview", subtitle: "Sacred Incan Sanctuary", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop", description: "Over 200 stone structures, temples, palaces, and terraced fields overlooking the Urubamba canyon." }
    ],
    hotspots: [
      { id: "intihuatana-stone", title: "The Intihuatana Stone", subtitle: "Inca Astronomical Clock", x: 45, y: 45, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop", category: "ASTRONOMY HERITAGE", description: "A ritual stone carved from bedrock that aligns with the sun during both spring and autumn equinoxes.", fact: "The Incas believed the stone tied the sun to its path across the sky." },
      { id: "temple-of-sun", title: "Temple of the Sun (Torreon)", subtitle: "Semi-Circular Royal Sump", x: 65, y: 55, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop", category: "ROYAL SANCTUARY", description: "A semi-circular tower carved into living rock with windows perfectly aligning with summer solstice sunrise.", fact: "The dry-stone masonry is so precise that a razor blade cannot fit between the granite blocks." }
    ],
    gallery: [
      { id: "inca-gold-tumi", title: "Ceremonial Incan Golden Tumi", category: "SACRED ARTIFACT", date: "15th Century", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop", description: "A crescent-bladed ceremonial sacrificial knife adorned with the solar face of Inti.", context: "Used by Andean high priests during Inti Raymi solstice ceremonies." }
    ],
    itinerary: [
      { day: 1, title: "Imperial Cusco & Sacred Valley", desc: "Acclimatize in Cusco (3,400m), explore Sacsayhuamán megalithic fortress, and visit Pisac market." },
      { day: 2, title: "Ollantaytambo & Vistadome Train to Aguas Calientes", desc: "Tour the living Incan town of Ollantaytambo and ride the glass-roofed train through Urubamba canyon." },
      { day: 3, title: "Sunrise at Machu Picchu Citadel", desc: "Ascend to the lost citadel at dawn, hike Huayna Picchu, and marvel at the Temple of the Sun." }
    ],
    quiz: [
      { question: "At what approximate elevation above sea level does Machu Picchu sit?", options: ["2,430 m", "4,500 m", "1,200 m", "3,800 m"], correctIndex: 0, explanation: "Machu Picchu sits at an elevation of 2,430 meters (7,970 ft) in the Andes." },
      { question: "Which indigenous civilization engineered Machu Picchu in the 15th century?", options: ["Inca Empire", "Maya Civilization", "Aztec Empire", "Olmec"], correctIndex: 0, explanation: "Machu Picchu was built as an estate for the Inca emperor Pachacuti around 1450 AD." },
      { question: "What is the name of the steep mountain peak rising directly behind the Machu Picchu ruins?", options: ["Huayna Picchu", "Aconcagua", "Cotopaxi", "Chimborazo"], correctIndex: 0, explanation: "Huayna Picchu ('Young Peak') towers over the northern end of the citadel." },
      { question: "Which river flows thousands of feet below the cliffs of Machu Picchu?", options: ["Urubamba River", "Amazon River", "Parana River", "Orinoco River"], correctIndex: 0, explanation: "The Urubamba River loops around the three sides of the Machu Picchu ridge." },
      { question: "What unique masonry technique did the Incas use to resist earthquakes?", options: ["Ashlar dry-stone fitted without mortar", "Clay brick cementing", "Wooden log timbering", "Steel rebar pinning"], correctIndex: 0, explanation: "Inca ashlar masonry used perfectly cut interlocking stones without mortar that shift during earthquakes and settle back into place." }
    ]
  },

  // 5. CAIRO & GIZA (Egypt)
  {
    id: "cairo",
    name: "CAIRO & GIZA",
    country: "Egypt",
    countryId: "egypt",
    continent: "Africa",
    continentId: "africa",
    state: "Cairo & Giza",
    stateId: "cairo-giza-reg",
    title: "Cradle of the Pharaohs & Great Pyramids",
    tagline: "Where 4,500 years of human destiny stand eternal.",
    quote: "Man fears Time, yet Time fears the Pyramids.",
    description: "Rising monumental out of the golden Sahara sands, the Great Pyramids of Giza and the enigmatic Great Sphinx stand as the only surviving Wonder of the Ancient World, framed by the life-giving waters of the Nile.",
    category: "HERITAGE",
    type: "Heritage",
    region: "North Africa",
    bestTime: "October – April",
    duration: "4–6 Days",
    idealFor: "Pyramids · Pharaohs · Antiquities · Nile Cruising",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "75 m",
    coordinates: { x: 55, y: 40, lat: "29.9792° N", lng: "31.1342° E" },
    highlights: [
      "Standing at the base of the Great Pyramid of Khufu, built from 2.3 million limestone blocks",
      "Gazing into the carved stone face of the colossal Great Sphinx of Giza",
      "Inspecting the golden death mask of King Tutankhamun in the Grand Egyptian Museum",
      "Sailing in a traditional wooden felucca at sunset on the River Nile"
    ],
    scenes: [
      { id: "giza-plateau", title: "The Giza Plateau at Sunset", subtitle: "Khufu, Khafre & Menkaure", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop", description: "Three colossal limestone pyramids standing against the desert horizon as dusk turns the sands into molten copper." }
    ],
    hotspots: [
      { id: "great-pyramid", title: "Great Pyramid of Khufu", subtitle: "Sole Surviving Ancient Wonder", x: 40, y: 45, image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop", category: "ANCIENT WONDER", description: "Constructed around 2560 BC as a royal tomb for Pharaoh Khufu over a 20-year period.", fact: "It remained the tallest human-made structure in the world for over 3,800 years." },
      { id: "great-sphinx", title: "The Great Sphinx of Giza", subtitle: "Mythical Lion-Bodied Guardian", x: 70, y: 55, image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop", category: "MONUMENTAL SCULPTURE", description: "Carved from a single colossal ridge of limestone, measuring 73 meters long and 20 meters high.", fact: "Believed to represent the face of Pharaoh Khafre wearing the royal Nemes headdress." }
    ],
    gallery: [
      { id: "tutankhamun-mask", title: "Gold Death Mask of Tutankhamun", category: "ROYAL TREASURE", date: "1323 BC (18th Dynasty)", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop", description: "Forged from 10.23 kilograms of solid gold inlaid with semi-precious lapis lazuli, turquoise, and carnelian.", context: "Placed directly over the head and shoulders of the boy king's mummified body." }
    ],
    itinerary: [
      { day: 1, title: "The Pyramids of Giza & The Sphinx", desc: "Explore the Great Pyramid of Khufu, Khafre, Menkaure, and camel trek across the desert plateau." },
      { day: 2, title: "Grand Egyptian Museum & Old Islamic Cairo", desc: "Marvel at Tutankhamun's complete tomb treasures and wander Khan el-Khalili spice bazaar." },
      { day: 3, title: "Saqqara Step Pyramid & Sunset Nile Cruise", desc: "Discover Djoser's Step Pyramid (the world's first pyramid) and sail a wooden felucca on the Nile." }
    ],
    quiz: [
      { question: "How many stones are estimated to make up the Great Pyramid of Khufu?", options: ["2.3 Million Blocks", "500,000 Blocks", "10 Million Blocks", "100,000 Blocks"], correctIndex: 0, explanation: "The Great Pyramid is estimated to contain approximately 2.3 million carved limestone blocks." },
      { question: "What mythical creature combines the body of a lion with the head of a human?", options: ["Sphinx", "Griffin", "Chimera", "Minotaur"], correctIndex: 0, explanation: "The Sphinx is a mythical creature symbolizing supreme wisdom and strength." },
      { question: "Which ancient river nurtured the civilization of Ancient Egypt?", options: ["Nile River", "Tigris River", "Euphrates River", "Indus River"], correctIndex: 0, explanation: "The Nile River's annual flooding created fertile black silt for Egyptian agriculture." },
      { question: "Who was the young pharaoh whose unlooted tomb was discovered in 1922 by Howard Carter?", options: ["Tutankhamun", "Ramses II", "Akhenaten", "Thutmose III"], correctIndex: 0, explanation: "King Tutankhamun's intact tomb was unearthed in the Valley of the Kings in 1922." },
      { question: "Which ancient writing system used pictorial symbols carved in stone?", options: ["Hieroglyphs", "Cuneiform", "Linear B", "Phoenician"], correctIndex: 0, explanation: "Hieroglyphs ('sacred carvings') were Ancient Egypt's formal writing system." }
    ]
  },

  // 6. ROME (Italy)
  {
    id: "rome",
    name: "ROME",
    country: "Italy",
    countryId: "italy",
    continent: "Europe",
    continentId: "europe",
    state: "Lazio",
    stateId: "lazio-rome",
    title: "The Eternal City",
    tagline: "Where two thousand years of glory live on every stone.",
    quote: "Rome is not a city like any other; it is a grand museum of human civilization.",
    description: "From the monumental gladiatorial amphitheater of the Colosseum and the Roman Forum to the baroque splendor of Trevi Fountain and the sacred Sistine Chapel ceiling inside Vatican City.",
    category: "HERITAGE",
    type: "Culture",
    region: "Southern Europe",
    bestTime: "April – June & September – October",
    duration: "4–6 Days",
    idealFor: "History · Architecture · Roman Cuisine · Art",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "21 m",
    coordinates: { x: 50, y: 35, lat: "41.9028° N", lng: "12.4964° E" },
    highlights: [
      "Stepping onto the arena floor of the 2,000-year-old Colosseum",
      "Tossing a coin into the baroque waters of the Trevi Fountain",
      "Marveling at the unreinforced concrete dome of the ancient Pantheon",
      "Gazing up at Michelangelo's Genesis frescoes in the Sistine Chapel"
    ],
    scenes: [
      { id: "colosseum-sunset", title: "The Flavian Amphitheatre (Colosseum)", subtitle: "Monument of Imperial Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop", description: "Constructed of travertine limestone and volcanic tuff, once seating 65,000 Roman spectators." }
    ],
    hotspots: [
      { id: "colosseum", title: "The Colosseum", subtitle: "Gladiatorial Arena of Emperors", x: 45, y: 50, image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop", category: "ANCIENT ICON", description: "Commissioned by Emperor Vespasian in 72 AD, host to gladiatorial combats and wild animal hunts.", fact: "The arena could be flooded with water to stage mock naval battles (Naumachia)." },
      { id: "pantheon", title: "The Pantheon", subtitle: "Temple of All the Gods", x: 70, y: 40, image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop", category: "ROMAN ARCHITECTURE", description: "Built by Emperor Hadrian in 126 AD, featuring a 9-meter open oculus illuminating the interior.", fact: "It remains the world's largest unreinforced concrete dome even after 2,000 years." }
    ],
    gallery: [
      { id: "roman-bust", title: "Marble Bust of Emperor Augustus", category: "CLASSICAL SCULPTURE", date: "1st Century AD", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop", description: "Finely sculpted Carrara marble depicting Rome's first emperor wearing the civic crown of oak leaves.", context: "Displayed throughout the empire to project peace (Pax Romana) and divine lineage." }
    ],
    itinerary: [
      { day: 1, title: "Ancient Rome: Colosseum & Roman Forum", desc: "Walk the arena floor of the Colosseum, climb Palatine Hill, and explore the Roman Forum." },
      { day: 2, title: "Vatican City & Sistine Chapel", desc: "Tour St. Peter's Basilica, Vatican Museums, and Michelangelo's painted ceiling." },
      { day: 3, title: "Baroque Rome: Pantheon, Trevi & Piazza Navona", desc: "Toss a coin into Trevi Fountain, admire the Pantheon oculus, and enjoy authentic Roman carbonara." }
    ],
    quiz: [
      { question: "What is the largest ancient amphitheater ever built in the Roman world?", options: ["The Colosseum", "Verona Arena", "Arles Amphitheatre", "El Djem"], correctIndex: 0, explanation: "The Colosseum in Rome could hold up to 65,000 spectators." },
      { question: "According to legend, what twin brothers founded the city of Rome in 753 BC?", options: ["Romulus and Remus", "Castor and Pollux", "Apollo and Artemis", "Achilles and Patroclus"], correctIndex: 0, explanation: "Legend holds that twin brothers Romulus and Remus were raised by a she-wolf." },
      { question: "What unique architectural feature crowns the dome of the Roman Pantheon?", options: ["An open circular Oculus", "A gilded gold cross", "A stained glass rose", "A copper spire"], correctIndex: 0, explanation: "The Pantheon's dome is open to the sky through a 9-meter wide oculus." },
      { question: "Tradition says throwing a coin into Trevi Fountain ensures what outcome?", options: ["A return journey to Rome", "Infinite wealth", "Finding true love", "Good harvest"], correctIndex: 0, explanation: "Legend holds that tossing a coin over your left shoulder ensures you will return to Rome." },
      { question: "Which microstate and sovereign nation is situated entirely inside Rome?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], correctIndex: 0, explanation: "Vatican City is the world's smallest independent state, located entirely within Rome." }
    ]
  },

  // 7. NEW YORK CITY (USA)
  {
    id: "new-york",
    name: "NEW YORK CITY",
    country: "United States",
    countryId: "united-states",
    continent: "North America",
    continentId: "north-america",
    state: "New York",
    stateId: "new-york-state",
    title: "The Capital of the World",
    tagline: "The city that never sleeps.",
    quote: "Concrete canyons where dreams are sculpted into towering glass and steel.",
    description: "An electric global epicenter of culture, finance, theater, and architecture. From the copper crown of the Statue of Liberty to Central Park's green oasis and the dazzling neon canyons of Times Square.",
    category: "CULTURE",
    type: "Architecture",
    region: "East Coast USA",
    bestTime: "September – November & April – June",
    duration: "4–6 Days",
    idealFor: "Skylines · Broadway · Museums · Food",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "10 m",
    coordinates: { x: 25, y: 35, lat: "40.7128° N", lng: "74.0060° W" },
    highlights: [
      "Gazing from the 102nd floor observatory of the Empire State Building",
      "Strolling the lush elm-canopied paths of Central Park",
      "Standing under the blinding billboard lights of Times Square",
      "Taking the ferry past the Statue of Liberty in New York Harbor"
    ],
    scenes: [
      { id: "manhattan-skyline", title: "Manhattan Sunset Skyline", subtitle: "Empire State & Hudson River", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop", description: "Colossal art deco spires and glass skyscrapers catching golden sunset reflection over New York harbor." }
    ],
    hotspots: [
      { id: "times-square", title: "Times Square", subtitle: "Crossroads of the World", x: 50, y: 55, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop", category: "URBAN ICON", description: "A dazzling illuminated junction of Broadway and Seventh Avenue with massive interactive LED screens.", fact: "Over 330,000 people pass through Times Square daily." }
    ],
    gallery: [
      { id: "statue-liberty-torch", title: "Statue of Liberty Original 1886 Torch", category: "NATIONAL MONUMENT", date: "1886", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop", description: "Copper and gold leaf torch gifted by the people of France to celebrate American independence.", context: "Engineered by Gustave Eiffel with an interior flexible iron framework." }
    ],
    itinerary: [
      { day: 1, title: "Midtown Manhattan: Empire State & Times Square", desc: "Ascend the Empire State Building, explore Grand Central Terminal, and take in a Broadway show." },
      { day: 2, title: "Central Park & Museum Mile", desc: "Walk Central Park's Bethesda Terrace, visit The Met, and view contemporary art at MoMA." },
      { day: 3, title: "Downtown: Statue of Liberty & High Line", desc: "Take the harbor ferry, walk Wall Street, and stroll the elevated High Line park to Chelsea Market." }
    ],
    quiz: [
      { question: "What iconic green park stretches across 843 acres in the center of Manhattan?", options: ["Central Park", "Prospect Park", "Hyde Park", "Golden Gate Park"], correctIndex: 0, explanation: "Central Park was designed by Frederick Law Olmsted and Calvert Vaux in 1858." },
      { question: "Which country gifted the Statue of Liberty to the United States in 1886?", options: ["France", "United Kingdom", "Italy", "Spain"], correctIndex: 0, explanation: "The Statue of Liberty was a gift of friendship from the people of France." },
      { question: "What is New York City's famous theater district centered around Broadway?", options: ["Times Square / Theater District", "SoHo", "Greenwich Village", "Financial District"], correctIndex: 0, explanation: "Broadway's Theater District is home to 41 professional theaters." },
      { question: "What art deco skyscraper was the tallest building in the world from 1931 to 1970?", options: ["Empire State Building", "Chrysler Building", "One World Trade", "Rockefeller Center"], correctIndex: 0, explanation: "The Empire State Building soars 381 meters (1,250 ft) to its roof." },
      { question: "How many boroughs make up New York City?", options: ["5 (Manhattan, Brooklyn, Queens, Bronx, Staten Island)", "4", "7", "3"], correctIndex: 0, explanation: "New York City consists of 5 distinct boroughs." }
    ]
  },

  // 8. SANTORINI (Greece)
  {
    id: "santorini",
    name: "SANTORINI",
    country: "Greece",
    countryId: "greece",
    continent: "Europe",
    continentId: "europe",
    state: "Cyclades",
    stateId: "cyclades-santorini",
    title: "Jewel of the Aegean Sea",
    tagline: "Where cobalt domes meet dramatic volcanic calderas.",
    quote: "A white-washed dream perched on sheer cliffs rising from indigo seas.",
    description: "Born from one of the largest volcanic eruptions in recorded history, Santorini is an Aegean paradise of white-washed cubic villas, blue-domed churches, cliffside infinity pools, and world-renowned golden sunsets in Oia.",
    category: "BEACHES",
    type: "Beach",
    region: "Aegean Sea",
    bestTime: "May – October",
    duration: "4–6 Days",
    idealFor: "Sunsets · Aegean Sea · Volcanic Calderas · Wine",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "300 m (Cliff rim)",
    coordinates: { x: 58, y: 38, lat: "36.3932° N", lng: "25.4615° E" },
    highlights: [
      "Watching the sunset bathe the blue domes of Oia in peach and amber light",
      "Cruising the submerged volcanic caldera and swimming in sulfur thermal springs",
      "Walking the scenic 10km cliff rim trail from Fira to Oia",
      "Tasting volcanic Assyrtiko white wine at cliffside vineyards"
    ],
    scenes: [
      { id: "oia-cliffs", title: "Oia Village Caldera Rim", subtitle: "Iconic Blue-Domed Horizon", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop", description: "White-washed cave houses cascading down a 300-meter volcanic cliff face into the indigo Aegean Sea." }
    ],
    hotspots: [
      { id: "oia-domes", title: "Oia Blue-Domed Churches", subtitle: "Postcard of Greece", x: 45, y: 45, image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop", category: "CYCLADIC ARCHITECTURE", description: "Three iconic cobalt-blue church domes overlooking the caldera rim.", fact: "The blue and white colors mirror the national flag of Greece and reflect scorching summer sunlight." }
    ],
    gallery: [
      { id: "akrotiri-fresco", title: "Springtime Akrotiri Fresco", category: "MINOAN ARTIFACT", date: "16th Century BC", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop", description: "Ancient Minoan wall painting of blossoming lilies and swallows preserved beneath volcanic ash for 3,600 years.", context: "Dubbed the 'Minoan Pompeii', Akrotiri was buried during the Bronze Age Thera eruption." }
    ],
    itinerary: [
      { day: 1, title: "Arrival in Fira & Caldera Sunset Walk", desc: "Stroll the cobblestone cliff paths of Fira and watch dusk settle over the volcanic bay." },
      { day: 2, title: "Volcano Boat Tour & Hot Springs", desc: "Sail to Nea Kameni volcanic crater and swim in warm thermal mineral springs." },
      { day: 3, title: "Oia Village & World-Famous Sunset", desc: "Explore marble alleys of Oia, photograph blue domes, and watch the sun melt into the horizon." }
    ],
    quiz: [
      { question: "What geological event shaped the dramatic cliffside caldera of Santorini?", options: ["A colossal Bronze Age volcanic eruption", "A tectonic earthquake", "Glacial carving", "Meteor impact"], correctIndex: 0, explanation: "The Minoan eruption around 1600 BC created the submerged caldera." },
      { question: "What village in Santorini is celebrated globally for its cliffside sunsets?", options: ["Oia", "Fira", "Kamari", "Perissa"], correctIndex: 0, explanation: "Oia at the northern tip of Santorini is world-famous for its sunsets." },
      { question: "Which sea surrounds the Greek island of Santorini?", options: ["Aegean Sea", "Ionian Sea", "Adriatic Sea", "Tyrrhenian Sea"], correctIndex: 0, explanation: "Santorini is part of the Cyclades island group in the Aegean Sea." },
      { question: "What ancient Bronze Age settlement was preserved beneath volcanic ash on Santorini?", options: ["Akrotiri", "Knossos", "Delphi", "Olympia"], correctIndex: 0, explanation: "Akrotiri was a prosperous Minoan port buried by ash in the 17th century BC." },
      { question: "What native white wine grape variety thrives in Santorini's volcanic soil?", options: ["Assyrtiko", "Chardonnay", "Sauvignon Blanc", "Pinot Grigio"], correctIndex: 0, explanation: "Assyrtiko vines are woven into circular ground baskets ('kouloura') to protect against strong sea winds." }
    ]
  },

  // 9. DUBAI (UAE)
  {
    id: "dubai",
    name: "DUBAI",
    country: "United Arab Emirates",
    countryId: "uae",
    continent: "Middle East",
    continentId: "middle-east",
    state: "Dubai",
    stateId: "dubai-emirate",
    title: "City of Superlatives & Golden Dunes",
    tagline: "Where impossible architectural dreams rise from the desert.",
    quote: "A futuristic oasis redefining what humanity can build.",
    description: "Home to the world's tallest skyscraper (Burj Khalifa at 828m), palm-tree-shaped artificial islands, the world's largest choreographed fountain, and timeless desert safari dunes under Arabian stars.",
    category: "ADVENTURE",
    type: "Architecture",
    region: "Arabian Peninsula",
    bestTime: "November – March",
    duration: "4–6 Days",
    idealFor: "Architecture · Luxury · Desert Safaris · Shopping",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    video: "/hero-kashmir.mp4",
    altitude: "5 m",
    coordinates: { x: 62, y: 42, lat: "25.2048° N", lng: "55.2708° E" },
    highlights: [
      "Ascending to the 148th floor sky lounge of Burj Khalifa at 828 meters",
      "Watching the Dubai Fountain dance to music across 30 acres of Burj Lake",
      "Cruising past mega-yachts on the iconic Palm Jumeirah archipelago",
      "Dune bashing in 4x4s and stargazing at traditional Bedouin desert camps"
    ],
    scenes: [
      { id: "burj-khalifa-sky", title: "Burj Khalifa & Downtown Dubai", subtitle: "World's Tallest Skyscraper", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", description: "Soaring 828 meters into the Arabian sky with a spiral Y-shaped design inspired by the desert Hymenocallis flower." }
    ],
    hotspots: [
      { id: "burj-khalifa", title: "Burj Khalifa", subtitle: "828m Sovereign of Skylines", x: 45, y: 50, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop", category: "WORLD RECORD", description: "The tallest building in human history, containing 163 floors, high-speed double-decker elevators, and sky observatories.", fact: "You can watch the sunset from the ground, take the elevator up, and watch the sunset a second time from the top." }
    ],
    gallery: [
      { id: "arabian-dhow", title: "Traditional Hand-Crafted Wooden Dhow", category: "MARITIME ARTIFACT", date: "Historic Arabian Gulf", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop", description: "A lateen-rigged wooden sailing vessel used for pearl diving and spice trading across the Indian Ocean.", context: "Pearl diving was the primary economic lifeline of the Emirates for centuries prior to oil." }
    ],
    itinerary: [
      { day: 1, title: "Downtown Dubai & Burj Khalifa", desc: "Ascend Burj Khalifa At the Top, shop Dubai Mall, and view the evening fountain choreography." },
      { day: 2, title: "Old Dubai & Desert Safari", desc: "Take an abra across Dubai Creek, explore Gold Souk, and embark on a 4x4 desert safari with Bedouin dinner." },
      { day: 3, title: "Palm Jumeirah & Marina", desc: "Ride the monorail down Palm Jumeirah and dine alongside yachts at Dubai Marina." }
    ],
    quiz: [
      { question: "What is the height of Burj Khalifa, the world's tallest building?", options: ["828 m", "634 m", "508 m", "1,000 m"], correctIndex: 0, explanation: "Burj Khalifa in Dubai stands at an astounding 828 meters (2,717 ft)." },
      { question: "What is the famous palm-tree-shaped artificial island off the coast of Dubai?", options: ["Palm Jumeirah", "The World Islands", "Deira Islands", "Blue Waters"], correctIndex: 0, explanation: "Palm Jumeirah is a world-renowned man-made archipelago shaped like a palm tree." },
      { question: "What body of water lies along the coastline of Dubai?", options: ["Persian Gulf / Arabian Gulf", "Red Sea", "Mediterranean Sea", "Dead Sea"], correctIndex: 0, explanation: "Dubai is located on the eastern coast of the Arabian Peninsula bordering the Arabian Gulf." },
      { question: "What traditional water taxi is used to cross Dubai Creek?", options: ["Abra", "Gondola", "Shikara", "Dory"], correctIndex: 0, explanation: "Abras are motorized wooden ferry boats that ferry thousands across Dubai Creek daily." },
      { question: "What flower native to the desert inspired the Y-shaped floor plan of Burj Khalifa?", options: ["Hymenocallis (Spider Lily)", "Desert Rose", "Lotus", "Orchid"], correctIndex: 0, explanation: "Architect Adrian Smith modeled the tower's geometry on the desert Hymenocallis flower." }
    ]
  },

  // 10. LADAKH (India)
  {
    id: "ladakh",
    name: "LADAKH",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Ladakh UT",
    stateId: "ladakh-ut",
    title: "Land of High Passes",
    tagline: "Where earth touches the heavens.",
    quote: "A high-altitude desert sculpted by silence, wind and cosmic skies.",
    description: "Ladakh is a lunar wonderland of stark desert canyons, ancient cliff-hanging Buddhist monasteries, crystal-blue salt lakes, and dramatic motorable passes soaring over 5,300 meters.",
    category: "ADVENTURE",
    type: "Adventure",
    region: "Himalayas",
    bestTime: "May – September",
    duration: "6–8 Days",
    idealFor: "High Altitude · Stargazing · Monasteries",
    image: "/ladakh.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "3,000 m – 5,359 m",
    coordinates: { x: 38, y: 12, lat: "34.1526° N", lng: "77.5771° E" },
    highlights: [
      "Watching Pangong Tso change across 7 shades of blue",
      "Crossing Khardung La at 5,359 meters elevation",
      "Morning monk chants at Thiksey Monastery",
      "Bactrian camel rides in Nubra Valley sand dunes"
    ],
    scenes: [
      { id: "pangong-pan", title: "Pangong Tso Lake", subtitle: "4,225m Altitude Salt Lake", image: "/ladakh.jpg", description: "A 134-km long lake mirroring snow-capped peaks across the international border." }
    ],
    hotspots: [
      { id: "pangong-tso", title: "Pangong Tso Lake", subtitle: "High Altitude Salt Lake", x: 70, y: 45, image: "/ladakh.jpg", category: "LAKE", description: "Its saline waters change from turquoise to deep indigo throughout the day.", fact: "Completely freezes in winter despite being saline." }
    ],
    gallery: [
      { id: "thangka-silk", title: "Ancient Silk Thangka Scroll", category: "SACRED ART", date: "16th Century", image: "/ladakh.jpg", description: "Intricately painted Tibetan Buddhist scroll depicting the Wheel of Life.", context: "Used during sacred monastic Cham dances." }
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh & Acclimatization", desc: "Rest to adapt to 3,500m elevation." },
      { day: 2, title: "Indus Valley Monasteries", desc: "Visit Shey Palace, Thiksey Gompa, and Hemis." }
    ],
    quiz: [
      { question: "What is the cold desert valley in Ladakh with double-humped camels?", options: ["Nubra Valley", "Spiti", "Kangra", "Zanskar"], correctIndex: 0, explanation: "Nubra Valley features cold sand dunes at Hunder." }
    ]
  },

  // 11. RAJASTHAN (India)
  {
    id: "rajasthan",
    name: "RAJASTHAN",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Rajasthan",
    stateId: "rajasthan-state",
    title: "Land of Kings",
    tagline: "Where history lives in colour.",
    quote: "A timeless kingdom of golden deserts, royal palaces, and valorous legends.",
    description: "Golden sandstone fortresses rise out of the Thar Desert, pink and blue cities buzz with rich bazaars, and opulent palaces stand testament to royal dynasties.",
    category: "CULTURE",
    type: "Heritage",
    region: "Western India",
    bestTime: "October – March",
    duration: "6–9 Days",
    idealFor: "Palaces · Forts · Deserts",
    image: "/rajasthan.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "200 m – 1,722 m",
    coordinates: { x: 26, y: 38, lat: "26.9124° N", lng: "75.7873° E" },
    highlights: ["Exploring Amber Fort", "Sam Sand Dunes stargazing", "Lake Pichola cruising"],
    scenes: [{ id: "amber-citadel", title: "Amber Fort", subtitle: "Jaipur Royalty", image: "/rajasthan.jpg", description: "Sandstone courtyards and Sheesh Mahal mirror palace." }],
    hotspots: [{ id: "amber-fort", title: "Amber Fort", subtitle: "Hilltop Citadel", x: 60, y: 40, image: "/rajasthan.jpg", category: "ROYAL FORTRESS", description: "Red sandstone and marble palace with mirror ceilings.", fact: "A single candle illuminates the entire Sheesh Mahal ceiling." }],
    gallery: [{ id: "sheesh-mirror", title: "Belgian Concave Glass Mirror Inlay", category: "ROYAL ARCHITECTURE", date: "17th Century", image: "/rajasthan.jpg", description: "Curved foil-backed glass mirror tiles.", context: "Illuminates like a starry night sky." }],
    itinerary: [{ day: 1, title: "Pink City Jaipur", desc: "Explore Hawa Mahal and Amber Fort." }],
    quiz: [{ question: "Which palace in Jaipur has 953 honeycomb windows?", options: ["Hawa Mahal", "City Palace", "Jal Mahal", "Amber Palace"], correctIndex: 0, explanation: "Hawa Mahal was built with 953 jharokhas." }]
  },

  // 12. KERALA (India)
  {
    id: "kerala",
    name: "KERALA",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Kerala",
    stateId: "kerala-state",
    title: "God's Own Country",
    tagline: "Where nature slows time.",
    quote: "An emerald sanctuary of serene backwaters and mist tea hills.",
    description: "Labyrinthine backwaters glide past swaying palm groves, while Western Ghats slopes are draped in emerald tea gardens and aromatic spice plantations.",
    category: "NATURE",
    type: "Nature",
    region: "Southern India",
    bestTime: "September – March",
    duration: "5–8 Days",
    idealFor: "Backwaters · Tea Hills · Ayurveda",
    image: "/kerala.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "0 m – 2,695 m",
    coordinates: { x: 35, y: 82, lat: "9.9312° N", lng: "76.2673° E" },
    highlights: ["Overnight houseboat cruise in Alleppey", "Munnar mist tea highlands"],
    scenes: [{ id: "alleppey-lagoons", title: "Alleppey Backwaters", subtitle: "Canal Labyrinth", image: "/kerala.jpg", description: "Tranquil waterways and coconut palms." }],
    hotspots: [{ id: "alleppey-canals", title: "Alleppey Backwaters", subtitle: "Waterway Network", x: 45, y: 60, image: "/kerala.jpg", category: "WATERWAY", description: "Eco-friendly wooden houseboats.", fact: "Built without a single metal nail." }],
    gallery: [{ id: "kathakali-mask", title: "Kathakali Headdress Art", category: "PERFORMING ARTS", date: "17th Century", image: "/kerala.jpg", description: "Elaborate green face makeup.", context: "4 hours of ritual makeup preparation." }],
    itinerary: [{ day: 1, title: "Fort Kochi & Houseboat", desc: "Cruise Alleppey backwaters." }],
    quiz: [{ question: "What are traditional Kerala wooden houseboats called?", options: ["Kettuvallam", "Shikara", "Dhow", "Sampan"], correctIndex: 0, explanation: "Kettuvallam means boat tied with ropes in Malayalam." }]
  },

  // 13. MEGHALAYA (India)
  {
    id: "meghalaya",
    name: "MEGHALAYA",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Meghalaya",
    stateId: "meghalaya-state",
    title: "Abode of the Clouds",
    tagline: "Where clouds become landscapes.",
    quote: "A mystical kingdom of living root bridges and thunderous waterfalls.",
    description: "Dense rainforests receive the highest rainfall on Earth, giving birth to living root bridges guided by indigenous Khasi tribes and crystal-clear emerald rivers.",
    category: "NATURE",
    type: "Nature",
    region: "Northeast India",
    bestTime: "October – April",
    duration: "5–7 Days",
    idealFor: "Waterfalls · Root Bridges · Caves",
    image: "/meghalaya.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "150 m – 1,961 m",
    coordinates: { x: 80, y: 35, lat: "25.5788° N", lng: "91.8933° E" },
    highlights: ["Nongriat Double Decker Root Bridge", "Dawki crystal transparent water"],
    scenes: [{ id: "root-bridge-scene", title: "Double Decker Bridge", subtitle: "Bio-Engineering", image: "/meghalaya.jpg", description: "Living roots woven across jungle rivers." }],
    hotspots: [{ id: "root-bridge", title: "Living Root Bridge", subtitle: "Nongriat", x: 50, y: 55, image: "/meghalaya.jpg", category: "BIO-ENGINEERING", description: "Ficus elastica roots woven over 200 years.", fact: "Grows stronger with age." }],
    gallery: [{ id: "khasi-bamboo", title: "Khasi Bamboo Shield", category: "INDIGENOUS CRAFT", date: "Ancient Design", image: "/meghalaya.jpg", description: "Handcrafted rain shield.", context: "Used in torrential monsoons." }],
    itinerary: [{ day: 1, title: "Cherrapunji & Nongriat", desc: "Hike to Double Decker Root Bridge." }],
    quiz: [{ question: "What tree is trained to build living root bridges?", options: ["Ficus elastica (Rubber Tree)", "Teak", "Banyan", "Oak"], correctIndex: 0, explanation: "Khasi people train the aerial roots of Ficus elastica." }]
  },

  // 14. GOA (India)
  {
    id: "goa",
    name: "GOA",
    country: "India",
    countryId: "india",
    continent: "Asia",
    continentId: "asia",
    state: "Goa",
    stateId: "goa-state",
    title: "Pearl of the Orient",
    tagline: "Where the ocean sets the rhythm.",
    quote: "A sun-kissed coast where Portuguese heritage and golden sands unite.",
    description: "From secluded southern coves and UNESCO cathedrals to sunset beach shacks, Goa offers a vibrant coastal rhythm.",
    category: "BEACHES",
    type: "Beach",
    region: "Western Coast",
    bestTime: "November – March",
    duration: "4–6 Days",
    idealFor: "Beaches · Portuguese Architecture · Sunsets",
    image: "/goa.jpg",
    video: "/hero-kashmir.mp4",
    altitude: "0 m – 1,022 m",
    coordinates: { x: 28, y: 64, lat: "15.2993° N", lng: "74.1240° E" },
    highlights: ["Cabo de Rama sea cliffs", "Fontainhas Latin Quarter"],
    scenes: [{ id: "palolem-scene", title: "Palolem Crescent Beach", subtitle: "South Goa", image: "/goa.jpg", description: "Sheltered crescent bay and calm tides." }],
    hotspots: [{ id: "fontainhas", title: "Fontainhas Latin Quarter", subtitle: "UNESCO Heritage", x: 65, y: 40, image: "/rajasthan.jpg", category: "HERITAGE", description: "18th-century Portuguese mansions.", fact: "Asia's only preserved Latin Quarter." }],
    gallery: [{ id: "azulejos-tiles", title: "Goan-Portuguese Azulejo Tiles", category: "CERAMIC ART", date: "18th Century", image: "/goa.jpg", description: "Hand-painted cobalt blue tiles.", context: "Decorates historic Fontainhas facades." }],
    itinerary: [{ day: 1, title: "Old Goa & Fontainhas", desc: "Tour Basilica of Bom Jesus and Latin Quarter." }],
    quiz: [{ question: "What is the historic Latin Quarter in Panaji called?", options: ["Fontainhas", "Campal", "Miramar", "Dona Paula"], correctIndex: 0, explanation: "Fontainhas is the historic Latin Quarter in Panaji." }]
  }
];

// 5. GLOBAL EXPERIENCES
export const experiences = [
  { id: "adventure", name: "ADVENTURE", count: "48 Journeys", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop", subtitle: "Himalayan Passes, Inca Trails & Glaciers" },
  { id: "culture", name: "CULTURE", count: "64 Journeys", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop", subtitle: "Imperial Shrines, Zen Temples & Rituals" },
  { id: "nature", name: "NATURE", count: "52 Journeys", image: "/meghalaya.jpg", subtitle: "Alpine Waters, Living Bridges & Fjords" },
  { id: "heritage", name: "HERITAGE & FORTS", count: "42 Journeys", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop", subtitle: "Colosseum, Giza Pyramids & Citadels" },
  { id: "beaches", name: "BEACHES & ISLANDS", count: "36 Journeys", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop", subtitle: "Santorini Cliffs, Arabian Seas & Coral Reefs" },
  { id: "architecture", name: "MODERN ARCHITECTURE", count: "30 Journeys", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop", subtitle: "Burj Khalifa, Eiffel Tower & Skyscrapers" }
];

// 6. GLOBAL TRAVEL STORIES
export const stories = [
  {
    id: "into-the-himalayas",
    title: "Into the Himalayas",
    subtitle: "A soulful mountain journey through the silent valleys of Kashmir",
    destinationId: "kashmir",
    location: "Kashmir, India",
    author: "Aarav Sen",
    readTime: "4 min read",
    image: "/kashmir.jpg",
    excerpt: "The morning mist parted like a silk curtain over Dal Lake, revealing snow-dusted ridges reflected in still water."
  },
  {
    id: "midnight-in-paris",
    title: "Midnight on the Seine",
    subtitle: "Wandering cobblestone bridges under the golden glow of the Eiffel Tower",
    destinationId: "paris",
    location: "Paris, France",
    author: "Claire Dubois",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    excerpt: "The city exhales as the final riverboat passes beneath Pont Neuf, leaving the water like dark glass mirroring ancient stone."
  },
  {
    id: "clouds-of-machu-picchu",
    title: "In the Shadow of Huayna Picchu",
    subtitle: "Watching dawn mist lift from the sacred stone terraces of the Incas",
    destinationId: "machu-picchu",
    location: "Cusco, Peru",
    author: "Mateo Quispe",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop",
    excerpt: "At 2,400 meters, stone speaks a language older than memory, anchored deep in the living granite of the Andes."
  },
  {
    id: "tokyo-after-rain",
    title: "Tokyo: Reflections in Neon",
    subtitle: "Late night in Shibuya where wet asphalt turns into a river of electric light",
    destinationId: "tokyo",
    location: "Tokyo, Japan",
    author: "Kenji Sato",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
    excerpt: "Under an umbrella in Shibuya, the future does not arrive all at once—it hums softly in the reflection of neon billboards."
  }
];

// 7. BEFORE YOU GO & DESTINATION COMPARISON HELPERS
export function getBeforeYouGo(dest) {
  const specificData = {
    paris: {
      bestTime: "April – June & September – October",
      estimatedBudget: "₹₹₹ (Luxury / High)",
      languages: "French (English widely spoken in hospitality)",
      currency: "Euro (€)",
      localTransport: "Metro (RATP), RER commuter trains, Walking, Taxis",
      localFood: "Croissants, Crêpes, Duck Confit, Macarons, Baguettes",
      visaInfo: "Schengen Visa (or ETIAS waiver for eligible passports)",
      travelTip: "Reserve Eiffel Tower and Louvre Museum time-slots at least 2 weeks in advance.",
      accessibility: "Metro line 14 is fully step-free; major museums feature elevator access."
    },
    tokyo: {
      bestTime: "March – May (Cherry Blossoms) & October – November",
      estimatedBudget: "₹₹₹ (Moderate to High)",
      languages: "Japanese (English signage throughout transit)",
      currency: "Japanese Yen (¥)",
      localTransport: "JR Yamanote Line, Tokyo Metro, Suica / Pasmo IC cards",
      localFood: "Authentic Nigiri Sushi, Tonkotsu Ramen, Kaiseki, Matcha",
      visaInfo: "eVisa / Visa-free tourist waiver for 68+ nationalities",
      travelTip: "Purchase a digital Suica card on your phone for seamless contactless travel across all trains.",
      accessibility: "Tokyo has world-class tactile paving and elevator access in nearly all stations."
    },
    kashmir: {
      bestTime: "April – October (Spring blooms to Autumn Chinar)",
      estimatedBudget: "₹₹ (Moderate)",
      languages: "Kashmiri, Urdu, Hindi, English",
      currency: "Indian Rupee (₹)",
      localTransport: "Handcrafted Cedar Shikaras, Pre-paid Taxis, Shared Cabs",
      localFood: "Traditional 36-course Wazwan, Rogan Josh, Saffron Kahwa tea, Modur Pulao",
      visaInfo: "Domestic tourist destination (Valid Indian photo ID required, permit for border areas)",
      travelTip: "Book Gulmarg Gondola Phase-2 tickets online in advance to avoid queues at the base station.",
      accessibility: "Dal Lake houseboats require step boarding; Mughal Gardens have paved accessible pathways."
    },
    "taj-mahal": {
      bestTime: "October – March (Pleasant winter sunshine)",
      estimatedBudget: "₹₹ (Moderate)",
      languages: "Hindi, Urdu, English",
      currency: "Indian Rupee (₹)",
      localTransport: "Electric Auto-rickshaws, Pre-paid Taxis, Agra Metro, Walking",
      localFood: "Authentic Agra Petha, Mughlai Shahi Biryani, Bedmi Puri, Dalmoth",
      visaInfo: "Domestic destination (Valid Indian photo ID required / standard eVisa for international travelers)",
      travelTip: "Enter through the East Gate at 5:45 AM for sunrise photography with minimal crowds.",
      accessibility: "Step-free ramps and battery-operated golf cart transfers available inside monument grounds."
    },
    "machu-picchu": {
      bestTime: "May – September (Dry Andean Winter)",
      estimatedBudget: "₹₹₹ (Moderate to High)",
      languages: "Spanish, Quechua, English",
      currency: "Peruvian Sol (S/.)",
      localTransport: "PeruRail Vistadome Train, Shuttle Buses, Inca Trail",
      localFood: "Ceviche, Lomo Saltado, Quinoa Chowder, Chicha Morada",
      visaInfo: "Tourist visa exemption for 90 days for most international travelers",
      travelTip: "Acclimatize in Cusco (3,400m) for at least 24 hours before ascending to the citadel.",
      accessibility: "Stone stairs are steep; lower terrace circuit offers the most accessible viewing route."
    },
    cairo: {
      bestTime: "October – April (Cool desert season)",
      estimatedBudget: "₹₹ (Budget to Moderate)",
      languages: "Arabic (English widely understood in hospitality)",
      currency: "Egyptian Pound (E£)",
      localTransport: "Cairo Metro, Nile Feluccas, Uber, Private Drivers",
      localFood: "Koshari, Ful Medames, Grilled Kofta, Fresh Falafel, Mint Tea",
      visaInfo: "eVisa / Visa on Arrival available for 70+ nationalities at Cairo Airport",
      travelTip: "Visit the Giza Plateau at 8:00 AM sharp before tour buses and afternoon desert heat arrive.",
      accessibility: "Pyramid plateau has sandy gravel terrain; golf cart transfers available inside complex."
    },
    santorini: {
      bestTime: "May – October (Sunlit Aegean season)",
      estimatedBudget: "₹₹₹ (Luxury / High)",
      languages: "Greek, English",
      currency: "Euro (€)",
      localTransport: "KTEL Island Buses, Catamaran Ferries, Rental ATVs, Taxis",
      localFood: "Fresh Grilled Octopus, Fava Dip, Tomato Keftedes, Volcanic Assyrtiko Wine",
      visaInfo: "Schengen Visa / EU Freedom of Movement",
      travelTip: "Secure your sunset viewing spot in Oia near the Byzantine Castle ruins at least 90 minutes before dusk.",
      accessibility: "Caldera cliff paths have numerous stone steps; beach towns (Kamari/Perissa) are flat and accessible."
    },
    dubai: {
      bestTime: "November – March (Pleasant winter sunshine)",
      estimatedBudget: "₹₹₹ (Luxury)",
      languages: "Arabic, English (Universal business language)",
      currency: "UAE Dirham (AED)",
      localTransport: "Dubai Driverless Metro, Abras (Water Taxis), Taxis, Monorail",
      localFood: "Shawarma, Al Harees, Arabic Mezze, Luqaimat sweet dumplings",
      visaInfo: "30-day Visa on Arrival for GCC, EU, USA, UK, and easy eVisa for Indian passport holders",
      travelTip: "Book Burj Khalifa 'At the Top' sunset tickets 3 weeks ahead for the best twilight photography.",
      accessibility: "Dubai is one of the world's most accessible cities with step-free metro stations and tactile paths."
    },
    rome: {
      bestTime: "April – June & September – October",
      estimatedBudget: "₹₹₹ (Moderate to High)",
      languages: "Italian (English spoken in tourist areas)",
      currency: "Euro (€)",
      localTransport: "ATAC Metro & Trams, Regional Trains, Walking",
      localFood: "Authentic Spaghetti Carbonara, Cacio e Pepe, Roman Pizza, Gelato",
      visaInfo: "Schengen Area Visa",
      travelTip: "Always carry a reusable water bottle to fill from Rome's 2,500 historic 'Nasoni' public fountains.",
      accessibility: "Cobblestone streets require sturdy footwear; Colosseum and Vatican have elevator lifts."
    }
  };

  return specificData[dest.id] || {
    bestTime: dest.bestTime || "Year-Round Exploration",
    estimatedBudget: "₹₹ (Moderate)",
    languages: "Local National Language & English",
    currency: "Local Currency / Card Accepted",
    localTransport: "Public transit, scenic trains & local taxis",
    localFood: "Signature regional culinary specialties",
    visaInfo: "Standard tourist visa or eVisa requirements apply",
    travelTip: "Pack comfortable walking shoes and advance-book major historic landmarks.",
    accessibility: "Standard urban transit and paved routes available."
  };
}

export function getComparisonData(dest) {
  const ratings = {
    kashmir: { bestFor: "Alpine Nature & Serenity", nature: 5, adventure: 4, culture: 4, relaxation: 5, budget: "₹₹", season: "Apr – Oct", duration: "5–7 Days" },
    "taj-mahal": { bestFor: "Mughal Architecture & Heritage", nature: 3, adventure: 2, culture: 5, relaxation: 4, budget: "₹₹", season: "Oct – Mar", duration: "2–4 Days" },
    ladakh: { bestFor: "High Altitude & Stargazing", nature: 5, adventure: 5, culture: 4, relaxation: 3, budget: "₹₹", season: "May – Sep", duration: "6–8 Days" },
    paris: { bestFor: "Art, Architecture & Gastronomy", nature: 3, adventure: 2, culture: 5, relaxation: 4, budget: "₹₹₹", season: "Apr – Oct", duration: "4–6 Days" },
    tokyo: { bestFor: "Futuristic Metropolises & Shrines", nature: 3, adventure: 3, culture: 5, relaxation: 4, budget: "₹₹₹", season: "Mar – May, Oct – Nov", duration: "4–6 Days" },
    "machu-picchu": { bestFor: "Inca Ruins & Cloud Forests", nature: 5, adventure: 5, culture: 5, relaxation: 3, budget: "₹₹₹", season: "May – Sep", duration: "4–6 Days" },
    cairo: { bestFor: "Ancient Pyramids & Antiquities", nature: 3, adventure: 4, culture: 5, relaxation: 3, budget: "₹₹", season: "Oct – Apr", duration: "4–6 Days" },
    "new-york": { bestFor: "Iconic Skylines & World Culture", nature: 2, adventure: 3, culture: 5, relaxation: 3, budget: "₹₹₹", season: "Apr – Jun, Sep – Nov", duration: "4–6 Days" },
    santorini: { bestFor: "Aegean Sunsets & Caldera Views", nature: 5, adventure: 2, culture: 4, relaxation: 5, budget: "₹₹₹", season: "May – Oct", duration: "4–6 Days" },
    dubai: { bestFor: "Modern Architecture & Luxury", nature: 2, adventure: 4, culture: 3, relaxation: 5, budget: "₹₹₹", season: "Nov – Mar", duration: "4–6 Days" },
    rome: { bestFor: "Imperial History & Classical Art", nature: 3, adventure: 2, culture: 5, relaxation: 4, budget: "₹₹₹", season: "Apr – Jun, Sep – Oct", duration: "4–6 Days" },
    rajasthan: { bestFor: "Royal Citadels & Thar Deserts", nature: 3, adventure: 4, culture: 5, relaxation: 4, budget: "₹₹", season: "Oct – Mar", duration: "6–9 Days" },
    kerala: { bestFor: "Tropical Backwaters & Ayurveda", nature: 5, adventure: 3, culture: 4, relaxation: 5, budget: "₹₹", season: "Sep – Mar", duration: "5–8 Days" },
    meghalaya: { bestFor: "Living Root Bridges & Waterfalls", nature: 5, adventure: 5, culture: 4, relaxation: 3, budget: "₹₹", season: "Oct – Apr", duration: "5–7 Days" },
    goa: { bestFor: "Sun-Kissed Beaches & Heritage", nature: 4, adventure: 3, culture: 4, relaxation: 5, budget: "₹₹", season: "Nov – Mar", duration: "4–6 Days" }
  };

  return ratings[dest.id] || {
    bestFor: dest.idealFor || "Sightseeing & Discovery",
    nature: 4,
    adventure: 3,
    culture: 4,
    relaxation: 4,
    budget: "₹₹",
    season: dest.bestTime || "All Year",
    duration: dest.duration || "4–6 Days"
  };
}

export { hotels } from "./hotels.js";

export default destinations;