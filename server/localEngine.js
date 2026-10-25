/**
 * ASTRA Local Demonstration Intelligence Engine
 * Generates context-aware, destination-grounded responses when no live AI API key is configured.
 * Strictly adheres to academic evaluation standards: clearly labeled as demonstration mode.
 */

import { ASTRAVIA_KNOWLEDGE } from "./knowledgeBase.js";

export function generateLocalResponse(userMessage = "") {
  const query = userMessage.toLowerCase().trim();
  const destinations = ASTRAVIA_KNOWLEDGE.destinations;

  let reply = "";
  let suggestions = [];

  // 1. Peaceful / Mountains / Serenity
  if (query.includes("peace") || query.includes("mountain") || query.includes("lake") || query.includes("seren")) {
    const matches = destinations.filter((d) =>
      d.vibes.includes("peaceful") || d.vibes.includes("mountains") || d.vibes.includes("lakes")
    );
    const chosen = matches.slice(0, 3);

    reply = `For profound peace and majestic mountain landscapes, I warmly recommend exploring **Kashmir**, **Zermatt**, and **Kerala**:

• **Kashmir**: The crown of the Himalayas with tranquil Dal Lake Shikara rides, snow-covered Gulmarg ridges, and scented pine valleys.
• **Zermatt, Switzerland**: A car-free alpine haven standing in the shadow of the legendary Matterhorn, surrounded by quiet glaciers.
• **Kerala**: Serene backwaters with traditional houseboats gliding along palm-canopied canals.

Would you like to step into a 360° virtual tour of any of these, or build a day-by-day travel plan?`;

    suggestions = chosen.map((d) => ({
      id: d.id,
      title: d.name,
      subtitle: d.category,
      route: d.overviewRoute,
      tourRoute: d.virtual360Route,
      type: "destination"
    }));
  }

  // 2. Virtual Tour / 360 Exploration specific (e.g., Kashmir)
  else if (query.includes("virtual") || query.includes("360") || query.includes("tour") || query.includes("kashmir")) {
    reply = `You can explore **Kashmir** and our global catalog through ASTRAVIA's interactive **360° Virtual Expeditions**:

• **Dal Lake & Houseboats**: Navigate across crystal water with real-time 3D look-around and procedural mountain breezes.
• **Gulmarg Alpine Heights**: Ascend into snow-dusted Himalayan horizons.
• **Interactive Hotspots**: Discover hidden local stories, floating markets, and traditional handicraft heritage.

You can enter the virtual experience directly or examine the destination overview below.`;

    suggestions = [
      {
        id: "kashmir",
        title: "360° Kashmir Tour",
        subtitle: "Launch immersive Three.js WebGL experience",
        route: "/journey/kashmir",
        type: "virtual_tour"
      },
      {
        id: "kashmir",
        title: "Kashmir Overview",
        subtitle: "Culture, Wazwan cuisine, and travel tips",
        route: "/destination/kashmir",
        type: "destination"
      },
      {
        id: "explore",
        title: "All Virtual Tours",
        subtitle: "Browse 360° expeditions worldwide",
        route: "/explore",
        type: "navigation"
      }
    ];
  }

  // 3. Adventure & Untamed Nature
  else if (query.includes("adventure") || query.includes("trek") || query.includes("hike") || query.includes("nature")) {
    const ladakh = destinations.find((d) => d.id === "ladakh");
    const reykjavik = destinations.find((d) => d.id === "reykjavik");
    const machu = destinations.find((d) => d.id === "machu-picchu");
    const meghalaya = destinations.find((d) => d.id === "meghalaya");

    reply = `If your spirit seeks rugged adventure and extraordinary natural wonders, here are top expeditions on ASTRAVIA:

• **Ladakh**: High-altitude Himalayan passes, crystal-blue Pangong Tso, and ancient monasteries perched on razor ridges.
• **Reykjavik & Golden Circle, Iceland**: Roaring Gullfoss waterfalls, active geysers, and geothermal volcanic springs.
• **Machu Picchu, Peru**: Sacred stone terraces rising above cloud forests in the Andes mountains.
• **Meghalaya**: Living root bridges woven by Khasi tribes across rain-swept jungle gorges.`;

    suggestions = [
      { id: ladakh.id, title: ladakh.name, subtitle: ladakh.category, route: ladakh.overviewRoute, tourRoute: ladakh.virtual360Route, type: "destination" },
      { id: reykjavik.id, title: reykjavik.name, subtitle: reykjavik.category, route: reykjavik.overviewRoute, tourRoute: reykjavik.virtual360Route, type: "destination" },
      { id: machu.id, title: machu.name, subtitle: machu.category, route: machu.overviewRoute, tourRoute: machu.virtual360Route, type: "destination" },
      { id: meghalaya.id, title: meghalaya.name, subtitle: meghalaya.category, route: meghalaya.overviewRoute, tourRoute: meghalaya.virtual360Route, type: "destination" }
    ];
  }

  // 4. Cultural / Ancient Heritage / History
  else if (query.includes("culture") || query.includes("heritage") || query.includes("history") || query.includes("ancient") || query.includes("art")) {
    const rajasthan = destinations.find((d) => d.id === "rajasthan");
    const rome = destinations.find((d) => d.id === "rome");
    const cairo = destinations.find((d) => d.id === "cairo");
    const tokyo = destinations.find((d) => d.id === "tokyo");

    reply = `ASTRAVIA offers deeply immersive cultural storytelling across four continents. Here are exceptional cultural journeys:

• **Rome, Italy**: Walk the footsteps of gladiators at the Colosseum and explore 2,000 years of living history.
• **Rajasthan, India**: Royal Rajput palaces, desert citadels, and timeless folk artistry.
• **Giza & Cairo, Egypt**: The Great Pyramids, the Sphinx, and millennia of pharaonic heritage.
• **Tokyo, Japan**: Harmonious contrast between ancient Shinto shrines and electric neon streets.`;

    suggestions = [
      { id: rajasthan.id, title: rajasthan.name, subtitle: rajasthan.category, route: rajasthan.overviewRoute, tourRoute: rajasthan.virtual360Route, type: "destination" },
      { id: rome.id, title: rome.name, subtitle: rome.category, route: rome.overviewRoute, tourRoute: rome.virtual360Route, type: "destination" },
      { id: cairo.id, title: cairo.name, subtitle: cairo.category, route: cairo.overviewRoute, tourRoute: cairo.virtual360Route, type: "destination" },
      { id: tokyo.id, title: tokyo.name, subtitle: tokyo.category, route: tokyo.overviewRoute, tourRoute: tokyo.virtual360Route, type: "destination" }
    ];
  }

  // 5. Itinerary & Travel Planning
  else if (query.includes("itinerary") || query.includes("plan") || query.includes("schedule") || query.includes("days")) {
    reply = `You can craft custom travel journeys using ASTRAVIA's **Interactive Itinerary Planner**:

• Choose a destination from our global atlas.
• Add custom travel days and organize activities by morning, afternoon, and evening.
• Reorder activities using intuitive reordering controls.
• Add logistical notes and view your journey summary ribbon.
• Save your itineraries to local storage and reopen them anytime from **My Journey**.

Would you like to open the planner now?`;

    suggestions = [
      { id: "planner", title: "Open Itinerary Planner", subtitle: "Craft a multi-day custom schedule", route: "/itinerary", type: "navigation" },
      { id: "my-journey", title: "View Saved Itineraries", subtitle: "Reopen your saved trips", route: "/my-journey", type: "navigation" }
    ];
  }

  // 6. Saved Journeys / My Journey / Passport
  else if (query.includes("saved") || query.includes("my journey") || query.includes("passport") || query.includes("bookmark")) {
    reply = `Your personal travel dashboard is located at **My Journey**:

• **Saved Destinations**: Easily jump back into bookmarked destinations and launch 360° virtual tours.
• **Saved Itineraries**: Review your multi-day travel schedules and reopen them in the planner to make edits.
• **Digital Explorer Passport**: Track your virtual stamps earned by discovering hidden hotspots across the world.`;

    suggestions = [
      { id: "my-journey", title: "Go to My Journey", subtitle: "Saved trips, destinations & passport stamps", route: "/my-journey", type: "navigation" }
    ];
  }

  // 7. General / Choosing Next Destination / Fallback
  else {
    const randomPick = destinations[Math.floor(Math.random() * destinations.length)];
    reply = `I would be delighted to guide your next journey! ASTRAVIA features curated virtual destinations across **India, Europe, Asia, Americas, Africa, and Oceania**.

Here are three ways to get started:
1. **Search & Filter**: Head to the **Explore** page to filter by continent (Asia, Europe, etc.) or category (Mountains, Deserts, Coastlines).
2. **Featured Recommendation**: Consider **${randomPick.name}** in ${randomPick.country} — celebrated for ${randomPick.tagline || randomPick.category}.
3. **Immersive 360° Tours**: Experience full-screen panoramic viewpoints with realistic procedural audio.

Tell me what you are looking for — such as *mountains*, *ancient history*, *culinary traditions*, or *sun-soaked beaches*!`;

    suggestions = [
      { id: randomPick.id, title: randomPick.name, subtitle: `${randomPick.country} • ${randomPick.category}`, route: randomPick.overviewRoute, tourRoute: randomPick.virtual360Route, type: "destination" },
      { id: "explore", title: "Explore All Destinations", subtitle: "Browse global atlas & filters", route: "/explore", type: "navigation" },
      { id: "itinerary", title: "Build an Itinerary", subtitle: "Plan day-by-day travel", route: "/itinerary", type: "navigation" }
    ];
  }

  return {
    reply,
    suggestions,
    mode: "demonstration",
    note: "ASTRA Local Demonstration Intelligence (Configured for academic evaluation; set GEMINI_API_KEY in server/.env for live LLM responses)"
  };
}
