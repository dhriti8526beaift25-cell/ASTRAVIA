/**
 * ASTRA Knowledge Base
 * Structured directory of verified ASTRAVIA destinations, routes, and experiences.
 * Used for both live AI system prompt injection and local demonstration mode.
 */

export const ASTRAVIA_KNOWLEDGE = {
  appName: "ASTRAVIA",
  tagline: "Explore Beyond Boundaries",
  mission: "Immersive virtual tourism platform featuring 360-degree panoramic exploration, cultural storytelling, interactive travel itineraries, and persistent saved journeys.",
  
  routes: {
    home: "/",
    explore: "/explore",
    countries: "/countries",
    itinerary: "/itinerary",
    myJourney: "/my-journey",
    experiences: "/experiences",
    museum: "/museum",
    stories: "/stories"
  },

  destinations: [
    {
      id: "kashmir",
      name: "Kashmir",
      country: "India",
      continent: "Asia",
      category: "Mountains & Lakes",
      vibes: ["peaceful", "mountains", "serene", "nature", "snow", "lakes", "houseboats", "romantic"],
      highlights: ["Dal Lake Shikara Rides", "Gulmarg Snow Peaks", "Pahalgam Valley of Shepherds", "Mughal Gardens"],
      cuisine: ["Kashmiri Wazwan", "Kahwa Saffron Tea", "Rogan Josh"],
      overviewRoute: "/destination/kashmir",
      virtual360Route: "/journey/kashmir",
      itineraryRoute: "/itinerary?destination=kashmir"
    },
    {
      id: "ladakh",
      name: "Ladakh",
      country: "India",
      continent: "Asia",
      category: "High Altitude Desert",
      vibes: ["adventure", "mountains", "monasteries", "high altitude", "stargazing", "rugged", "spiritual"],
      highlights: ["Pangong Tso Crystal Lake", "Nubra Valley Sand Dunes", "Thiksey Monastery", "Khardung La Pass"],
      cuisine: ["Thukpa Noodle Soup", "Tibetan Momos", "Butter Tea"],
      overviewRoute: "/destination/ladakh",
      virtual360Route: "/journey/ladakh",
      itineraryRoute: "/itinerary?destination=ladakh"
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      country: "India",
      continent: "Asia",
      category: "Heritage & Deserts",
      vibes: ["heritage", "culture", "palaces", "forts", "desert", "royalty", "history"],
      highlights: ["Amber Fort Jaipur", "Mehrangarh Fort Jodhpur", "Lake Pichola Udaipur", "Thar Desert Dunes"],
      cuisine: ["Dal Baati Churma", "Gatte ki Sabzi", "Laal Maas"],
      overviewRoute: "/destination/rajasthan",
      virtual360Route: "/journey/rajasthan",
      itineraryRoute: "/itinerary?destination=rajasthan"
    },
    {
      id: "kerala",
      name: "Kerala",
      country: "India",
      continent: "Asia",
      category: "Coastal & Backwaters",
      vibes: ["peaceful", "nature", "backwaters", "ayurveda", "tropical", "serene", "greenery"],
      highlights: ["Alleppey Houseboat Canals", "Munnar Tea Plantations", "Kovalam Beach", "Periyar Wildlife Sanctuary"],
      cuisine: ["Kerala Sadya Feast", "Appam with Stew", "Karimeen Fish Pollichathu"],
      overviewRoute: "/destination/kerala",
      virtual360Route: "/journey/kerala",
      itineraryRoute: "/itinerary?destination=kerala"
    },
    {
      id: "meghalaya",
      name: "Meghalaya",
      country: "India",
      continent: "Asia",
      category: "Waterfalls & Living Bridges",
      vibes: ["nature", "waterfalls", "adventure", "rainforest", "living bridges", "unspoiled", "mystical"],
      highlights: ["Nohkalikai Falls", "Cherrapunji Living Root Bridges", "Dawki Umngot River", "Mawsmai Caves"],
      cuisine: ["Jadoh Rice with Herbs", "Dohneiiong Pork", "Tungrymbai"],
      overviewRoute: "/destination/meghalaya",
      virtual360Route: "/journey/meghalaya",
      itineraryRoute: "/itinerary?destination=meghalaya"
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      continent: "Asia",
      category: "Beaches & Heritage",
      vibes: ["beaches", "sunsets", "coastal", "portuguese heritage", "relaxing", "nightlife"],
      highlights: ["Palolem Beach", "Basilica of Bom Jesus", "Dudhsagar Waterfalls", "Fontainhas Latin Quarter"],
      cuisine: ["Goan Fish Curry Rice", "Pork Vindaloo", "Bebinca Dessert"],
      overviewRoute: "/destination/goa",
      virtual360Route: "/journey/goa",
      itineraryRoute: "/itinerary?destination=goa"
    },
    {
      id: "taj-mahal",
      name: "Taj Mahal, Agra",
      country: "India",
      continent: "Asia",
      category: "World Wonder",
      vibes: ["monument", "heritage", "wonder", "romance", "architecture", "history"],
      highlights: ["Ivory-White Marble Mausoleum", "Charbagh Persian Gardens", "Yamuna River Reflection", "Agra Fort"],
      cuisine: ["Agra Petha Sweet", "Mughlai Biryani", "Bedmi Puri"],
      overviewRoute: "/destination/taj-mahal",
      virtual360Route: "/journey/taj-mahal",
      itineraryRoute: "/itinerary?destination=taj-mahal"
    },
    {
      id: "paris",
      name: "Paris",
      country: "France",
      continent: "Europe",
      category: "Art, History & Romance",
      vibes: ["culture", "romance", "art", "museums", "architecture", "food", "fashion"],
      highlights: ["Eiffel Tower", "Louvre Museum & Mona Lisa", "Seine River Bridges", "Montmartre & Sacré-Cœur"],
      cuisine: ["Fresh Butter Croissants", "Duck Confit", "Macarons"],
      overviewRoute: "/destination/paris",
      virtual360Route: "/journey/paris",
      itineraryRoute: "/itinerary?destination=paris"
    },
    {
      id: "rome",
      name: "Rome",
      country: "Italy",
      continent: "Europe",
      category: "Ancient Civilization",
      vibes: ["ancient history", "heritage", "architecture", "culture", "food", "monuments"],
      highlights: ["Flavian Colosseum", "Roman Forum Ruins", "Trevi Fountain", "Pantheon Dome"],
      cuisine: ["Authentic Carbonara", "Cacio e Pepe", "Artisanal Gelato"],
      overviewRoute: "/destination/rome",
      virtual360Route: "/journey/rome",
      itineraryRoute: "/itinerary?destination=rome"
    },
    {
      id: "santorini",
      name: "Santorini",
      country: "Greece",
      continent: "Europe",
      category: "Caldera Cliffs & Sunsets",
      vibes: ["beaches", "sunsets", "island", "romance", "scenic", "relaxing", "caldera"],
      highlights: ["Oia Whitewashed Caldera", "Blue Domed Churches", "Red Beach", "Akrotiri Minoan Ruins"],
      cuisine: ["Santorini Fava", "Tomato Keftedes", "Fresh Grilled Octopus"],
      overviewRoute: "/destination/santorini",
      virtual360Route: "/journey/santorini",
      itineraryRoute: "/itinerary?destination=santorini"
    },
    {
      id: "zermatt",
      name: "Zermatt & Matterhorn",
      country: "Switzerland",
      continent: "Europe",
      category: "Alpine Peaks & Glaciers",
      vibes: ["mountains", "peaceful", "snow", "skiing", "nature", "alps", "hiking", "clean"],
      highlights: ["Iconic Matterhorn Peak", "Gornergrat Alpine Railway", "Glacier Paradise", "Car-Free Alpine Village"],
      cuisine: ["Swiss Cheese Fondue", "Valais Raclette", "Rösti with Herbs"],
      overviewRoute: "/destination/zermatt",
      virtual360Route: "/journey/zermatt",
      itineraryRoute: "/itinerary?destination=zermatt"
    },
    {
      id: "reykjavik",
      name: "Reykjavik & Golden Circle",
      country: "Iceland",
      continent: "Europe",
      category: "Land of Fire and Ice",
      vibes: ["nature", "adventure", "waterfalls", "northern lights", "geothermal", "glaciers", "unearthly"],
      highlights: ["Gullfoss Waterfall", "Strokkur Geysir", "Blue Lagoon Geothermal Spa", "Thingvellir National Park"],
      cuisine: ["Icelandic Lamb Stew", "Plokkfiskur Fish Hash", "Rúgbrauð Rye Bread"],
      overviewRoute: "/destination/reykjavik",
      virtual360Route: "/journey/reykjavik",
      itineraryRoute: "/itinerary?destination=reykjavik"
    },
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      continent: "Asia",
      category: "Tradition & Neon Futurism",
      vibes: ["futuristic", "culture", "food", "vibrant", "temples", "city", "modern"],
      highlights: ["Shibuya Crossing", "Senso-ji Temple", "Meiji Shrine Forest", "Akihabara Electric Town"],
      cuisine: ["Edomae Sushi", "Tonkotsu Ramen", "Matcha Ceremonial Sweets"],
      overviewRoute: "/destination/tokyo",
      virtual360Route: "/journey/tokyo",
      itineraryRoute: "/itinerary?destination=tokyo"
    },
    {
      id: "machu-picchu",
      name: "Machu Picchu",
      country: "Peru",
      continent: "Americas",
      category: "Incan Citadel in the Clouds",
      vibes: ["adventure", "ancient", "mountains", "hiking", "wonder", "sacred", "heritage"],
      highlights: ["Intihuatana Sun Stone", "Huayna Picchu Summit", "Temple of the Three Windows", "Inca Trail Terraces"],
      cuisine: ["Lomo Saltado", "Causa Rellena", "Quinoa Stew"],
      overviewRoute: "/destination/machu-picchu",
      virtual360Route: "/journey/machu-picchu",
      itineraryRoute: "/itinerary?destination=machu-picchu"
    },
    {
      id: "cairo",
      name: "Giza & Cairo",
      country: "Egypt",
      continent: "Africa",
      category: "Cradle of Pharaohs",
      vibes: ["ancient", "heritage", "monuments", "pyramids", "desert", "history"],
      highlights: ["Great Pyramid of Khufu", "The Great Sphinx", "Egyptian Museum", "Nile Felucca Sailing"],
      cuisine: ["Koshari", "Ful Medames", "Umm Ali Pudding"],
      overviewRoute: "/destination/cairo",
      virtual360Route: "/journey/cairo",
      itineraryRoute: "/itinerary?destination=cairo"
    },
    {
      id: "new-york",
      name: "New York City",
      country: "USA",
      continent: "Americas",
      category: "Metropolis of Dreams",
      vibes: ["city", "architecture", "culture", "vibrant", "arts", "museums"],
      highlights: ["Manhattan Skyline", "Central Park", "Times Square", "Brooklyn Bridge"],
      cuisine: ["New York Style Pizza", "Classic Bagel with Lox", "Cheesecake"],
      overviewRoute: "/destination/new-york",
      virtual360Route: "/journey/new-york",
      itineraryRoute: "/itinerary?destination=new-york"
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "UAE",
      continent: "Asia",
      category: "Mirage of the Future",
      vibes: ["modern", "architecture", "luxury", "desert", "futuristic"],
      highlights: ["Burj Khalifa Observation Deck", "Dubai Fountain", "Desert Safari Dunes", "Dubai Marina"],
      cuisine: ["Al Harees", "Shawarma", "Luqaimat with Date Syrup"],
      overviewRoute: "/destination/dubai",
      virtual360Route: "/journey/dubai",
      itineraryRoute: "/itinerary?destination=dubai"
    },
    {
      id: "sydney",
      name: "Sydney",
      country: "Australia",
      continent: "Oceania",
      category: "Harbour Capital",
      vibes: ["coastal", "beaches", "harbour", "architecture", "nature", "outdoor"],
      highlights: ["Sydney Opera House", "Harbour Bridge Pylon", "Bondi to Coogee Coastal Walk", "Manly Ferry"],
      cuisine: ["Fresh Barramundi", "Meat Pie", "Pavlova with Passionfruit"],
      overviewRoute: "/destination/sydney",
      virtual360Route: "/journey/sydney",
      itineraryRoute: "/itinerary?destination=sydney"
    }
  ],

  experiences: [
    { id: "adventure", name: "Adventure Expeditions", desc: "Himalayan passes, Inca trails, high-altitude treks, and glacier crossings." },
    { id: "culture", name: "Cultural Immersions", desc: "Imperial shrines, Zen rituals, ancient heritage, and local gastronomy." },
    { id: "nature", name: "Untamed Nature", desc: "Living root bridges, crystal-clear glacial waters, and alpine valleys." },
    { id: "heritage", name: "Ancient Heritage", desc: "Colosseums, Giza Pyramids, Incan citadels, and royal marble monuments." },
    { id: "beaches", name: "Coastal & Islands", desc: "Santorini caldera cliffs, Arabian Sea beaches, and turquoise waters." },
    { id: "architecture", name: "Modern Architecture", desc: "World-record skyscrapers, futuristic skylines, and architectural wonders." }
  ]
};
