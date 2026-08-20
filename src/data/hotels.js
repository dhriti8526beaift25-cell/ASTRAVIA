// ==========================================================================
// ASTRAVIA GLOBAL HOTEL & ACCOMMODATION DATASET
// Realistic curated demo accommodation options mapped to global destinations.
// Includes pricing per night in INR, ratings, amenities, and hotel types.
// ==========================================================================

export const hotels = [
  // PARIS (France)
  {
    id: "paris-hotel-1",
    destinationId: "paris",
    name: "Le Grand Hôtel Saint-Germain",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "6th Arrondissement, Saint-Germain-des-Prés",
    rating: 4.8,
    type: "Boutique",
    pricePerNight: 18500,
    description: "Classic Haussmann elegance with courtyard garden, marble fireplaces, and steps from the Seine.",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Room Service", "Bar"]
  },
  {
    id: "paris-hotel-2",
    destinationId: "paris",
    name: "Hôtel Eiffel Trocadéro View",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "16th Arrondissement, Trocadéro",
    rating: 4.6,
    type: "Hotel",
    pricePerNight: 12800,
    description: "Eco-certified boutique hotel with direct private balcony views of the illuminated Eiffel Tower.",
    amenities: ["Wi-Fi", "Breakfast", "Eiffel View", "Air Conditioning"]
  },
  {
    id: "paris-hotel-3",
    destinationId: "paris",
    name: "Montmartre Bohemian Suites",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
    location: "18th Arrondissement, Montmartre Hill",
    rating: 4.5,
    type: "Boutique",
    pricePerNight: 7400,
    description: "Artisan-designed loft suites overlooking cobblestone artist alleys beneath Sacré-Cœur.",
    amenities: ["Wi-Fi", "Kitchenette", "City View", "Espresso Bar"]
  },

  // TOKYO (Japan)
  {
    id: "tokyo-hotel-1",
    destinationId: "tokyo",
    name: "Aman Tokyo Zen Sanctuary",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Otemachi, Tokyo Financial District",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 32000,
    description: "Towering luxury sanctuary featuring traditional basalt baths, washi paper lanterns, and Mount Fuji views.",
    amenities: ["Wi-Fi", "Breakfast", "Spa", "Pool", "Onsen", "Fine Dining"]
  },
  {
    id: "tokyo-hotel-2",
    destinationId: "tokyo",
    name: "Shibuya Stream Modern Hotel",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    location: "Shibuya Crossing, Tokyo",
    rating: 4.7,
    type: "Hotel",
    pricePerNight: 11500,
    description: "Sleek industrial-modern hotel directly connected to Shibuya Station and neon pedestrian boulevards.",
    amenities: ["Wi-Fi", "Breakfast", "Fitness Center", "Bar", "Smart TV"]
  },
  {
    id: "tokyo-hotel-3",
    destinationId: "tokyo",
    name: "Ryokan Asakusa Shigetsu",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
    location: "Asakusa, near Senso-ji Temple",
    rating: 4.6,
    type: "Boutique",
    pricePerNight: 6900,
    description: "Authentic Japanese traditional inn with tatami straw mat floors, yukata robes, and rooftop cypress bath.",
    amenities: ["Wi-Fi", "Traditional Breakfast", "Public Bath", "Tatami Rooms"]
  },

  // KASHMIR (India)
  {
    id: "kashmir-hotel-1",
    destinationId: "kashmir",
    name: "Sukoon Royal Cedar Houseboat",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Dal Lake & Nigeen Lake, Srinagar",
    rating: 4.9,
    type: "Boutique",
    pricePerNight: 9500,
    description: "Handcrafted carved deodar cedar luxury houseboat with solar power, Kashmiri rugs, and rooftop dining deck.",
    amenities: ["Wi-Fi", "Breakfast", "Shikara Transfers", "Heating", "Gourmet Wazwan"]
  },
  {
    id: "kashmir-hotel-2",
    destinationId: "kashmir",
    name: "The Khyber Himalayan Resort & Spa",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Gulmarg Heights (Near Gondola)",
    rating: 4.8,
    type: "Resort",
    pricePerNight: 24000,
    description: "World-class 5-star mountain resort nestled among pine forests with heated indoor pool and Apharwat Peak vistas.",
    amenities: ["Wi-Fi", "Breakfast", "Heated Pool", "Luxury Spa", "Ski Lounge"]
  },
  {
    id: "kashmir-hotel-3",
    destinationId: "kashmir",
    name: "Pahalgam Pine Valley Lodge",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "Lidder Riverfront, Pahalgam",
    rating: 4.4,
    type: "Hotel",
    pricePerNight: 4800,
    description: "Cozy riverside alpine cottages surrounded by cedar forests with log fire fireplaces and trout fishing.",
    amenities: ["Wi-Fi", "Breakfast", "River View", "Fireplace", "Parking"]
  },

  // TAJ MAHAL & AGRA (India)
  {
    id: "taj-hotel-1",
    destinationId: "taj-mahal",
    name: "The Oberoi Amarvilas Agra",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Taj East Gate Road, 600m from Taj Mahal",
    rating: 5.0,
    type: "Resort",
    pricePerNight: 38000,
    description: "Every room offers direct unobstructed views of the Taj Mahal, featuring Mughal arch architecture, terraced fountains, and royal pavilions.",
    amenities: ["Wi-Fi", "Taj View from Every Room", "Mughal Spa", "Pool", "Fine Dining", "Golf Cart Transfer"]
  },
  {
    id: "taj-hotel-2",
    destinationId: "taj-mahal",
    name: "ITC Mughal, A Luxury Collection Resort",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Fatehabad Road, Agra",
    rating: 4.7,
    type: "Resort",
    pricePerNight: 11500,
    description: "Sprawled across 23 acres of Mughal gardens, recipient of the Aga Khan Award for Architecture.",
    amenities: ["Wi-Fi", "Kaya Kalp Spa", "Swimming Pools", "Tennis Courts", "Mughlai Cuisine"]
  },
  {
    id: "taj-hotel-3",
    destinationId: "taj-mahal",
    name: "Tajview, IHCL SeleQtions",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "Tajganj, Agra",
    rating: 4.5,
    type: "Hotel",
    pricePerNight: 6200,
    description: "Warm heritage hotel with rooftop sky lounge offering evening views of the Taj Mahal silhouette.",
    amenities: ["Wi-Fi", "Rooftop Restaurant", "Taj View Lounge", "Pool", "Fitness Center"]
  },

  // MACHU PICCHU (Peru)
  {
    id: "peru-hotel-1",
    destinationId: "machu-picchu",
    name: "Belmond Sanctuary Lodge",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Directly adjacent to Machu Picchu Citadel",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 45000,
    description: "The only hotel located right at the entrance of the Incan citadel, offering immediate dawn access.",
    amenities: ["Wi-Fi", "Gourmet Breakfast", "Orchid Garden", "Spa", "Citadel Views"]
  },
  {
    id: "peru-hotel-2",
    destinationId: "machu-picchu",
    name: "Inkaterra Machu Picchu Pueblo Hotel",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Aguas Calientes Cloud Forest",
    rating: 4.7,
    type: "Boutique",
    pricePerNight: 16500,
    description: "Colonial stone casitas tucked inside an Andean cloud forest with 372 species of native orchids.",
    amenities: ["Wi-Fi", "Breakfast", "Andean Sauna", "Guided Nature Trails"]
  },
  {
    id: "peru-hotel-3",
    destinationId: "machu-picchu",
    name: "Tierra Viva Machu Picchu",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "Aguas Calientes Town Center",
    rating: 4.4,
    type: "Hotel",
    pricePerNight: 6200,
    description: "Comfortable modern alpine hotel alongside the river with direct access to the bus shuttle station.",
    amenities: ["Wi-Fi", "Breakfast", "River View", "Luggage Storage"]
  },

  // CAIRO (Egypt)
  {
    id: "cairo-hotel-1",
    destinationId: "cairo",
    name: "Marriott Mena House, Giza",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Giza Pyramid Plateau",
    rating: 4.8,
    type: "Resort",
    pricePerNight: 22000,
    description: "Historic palace hotel set within 40 acres of lush gardens with direct unobstructed views of the Great Pyramid of Khufu.",
    amenities: ["Wi-Fi", "Breakfast", "Swimming Pool", "Pyramid View", "Spa", "Dining"]
  },
  {
    id: "cairo-hotel-2",
    destinationId: "cairo",
    name: "Four Seasons at Nile Plaza",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Garden City, River Nile Promenade",
    rating: 4.8,
    type: "Hotel",
    pricePerNight: 18500,
    description: "Opulent waterfront hotel overlooking the River Nile with private balconies and Mediterranean dining.",
    amenities: ["Wi-Fi", "Breakfast", "Nile View", "Pool", "Spa", "Valet"]
  },
  {
    id: "cairo-hotel-3",
    destinationId: "cairo",
    name: "Pyramids View Boutique Inn",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
    location: "Nazlet El-Semman, Giza",
    rating: 4.5,
    type: "Boutique",
    pricePerNight: 4200,
    description: "Cozy rooftop terrace inn with front-row sunset views of the Sphinx Sound & Light show.",
    amenities: ["Wi-Fi", "Rooftop Breakfast", "Pyramid Terrace", "Air Conditioning"]
  },

  // ROME (Italy)
  {
    id: "rome-hotel-1",
    destinationId: "rome",
    name: "Hotel de Russie, Rocco Forte",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Piazza del Popolo / Spanish Steps",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 28000,
    description: "Legendary luxury hotel with terraced Secret Garden, classical marble statues, and Roman wellness spa.",
    amenities: ["Wi-Fi", "Breakfast", "Secret Garden", "Spa", "Cocktail Bar"]
  },
  {
    id: "rome-hotel-2",
    destinationId: "rome",
    name: "Palazzo Navona Hotel",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "Piazza Navona / Pantheon District",
    rating: 4.6,
    type: "Boutique",
    pricePerNight: 13500,
    description: "Contemporary Italian design hotel with panoramic rooftop terrace overlooking baroque church domes.",
    amenities: ["Wi-Fi", "Breakfast", "Rooftop Lounge", "Central Location"]
  },
  {
    id: "rome-hotel-3",
    destinationId: "rome",
    name: "Trastevere Historic Guesthouse",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
    location: "Trastevere Cobblestone Quarter",
    rating: 4.4,
    type: "Boutique",
    pricePerNight: 6500,
    description: "Charming 17th-century brick townhouse surrounded by traditional Roman trattorias and pizzerias.",
    amenities: ["Wi-Fi", "Breakfast", "Courtyard", "Express Check-in"]
  },

  // SANTORINI (Greece)
  {
    id: "santorini-hotel-1",
    destinationId: "santorini",
    name: "Canaves Oia Suites & Spa",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    location: "Oia Cliffside Caldera",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 35000,
    description: "Iconic white-washed cave suites carved into the volcanic cliffside with private infinity plunge pools.",
    amenities: ["Wi-Fi", "Champagne Breakfast", "Infinity Pool", "Caldera Sunset View", "Spa"]
  },
  {
    id: "santorini-hotel-2",
    destinationId: "santorini",
    name: "Astra Suites Imerovigli",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Imerovigli Caldera Rock",
    rating: 4.8,
    type: "Boutique",
    pricePerNight: 19500,
    description: "Award-winning cliffside boutique suites offering front-row views of the volcanic caldera and Skaros Rock.",
    amenities: ["Wi-Fi", "Breakfast", "Outdoor Jacuzzi", "Sea View", "Bar"]
  },

  // DUBAI (UAE)
  {
    id: "dubai-hotel-1",
    destinationId: "dubai",
    name: "Burj Al Arab Jumeirah",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    location: "Jumeirah Beach Private Island",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 65000,
    description: "The world's most iconic sail-shaped luxury hotel featuring 24-karat gold interiors and private butler service.",
    amenities: ["Wi-Fi", "Private Beach", "Helipad", "Spa", "Underwater Restaurant"]
  },
  {
    id: "dubai-hotel-2",
    destinationId: "dubai",
    name: "Address Downtown Dubai",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Downtown Dubai, opposite Burj Khalifa",
    rating: 4.7,
    type: "Hotel",
    pricePerNight: 17500,
    description: "Sophisticated luxury hotel with unobstructed views of the Burj Khalifa and the dancing Dubai Fountain.",
    amenities: ["Wi-Fi", "Breakfast", "Infinity Pool", "Fountain View", "Spa"]
  },

  // NEW YORK (USA)
  {
    id: "new-york-hotel-1",
    destinationId: "new-york",
    name: "The Plaza Hotel Fifth Avenue",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Fifth Avenue at Central Park South",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 42000,
    description: "Legendary luxury landmark hotel overlooking Central Park with iconic Palm Court afternoon tea.",
    amenities: ["Wi-Fi", "Central Park View", "Spa", "Champagne Bar", "Concierge"]
  },

  // LADAKH (India)
  {
    id: "ladakh-hotel-1",
    destinationId: "ladakh",
    name: "The Grand Dragon Ladakh",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Sheynam, Leh",
    rating: 4.8,
    type: "Hotel",
    pricePerNight: 12000,
    description: "Premier luxury solar-powered hotel in Leh with royal Ladakhi woodwork and Stok Kangri mountain views.",
    amenities: ["Wi-Fi", "Oxygen Facility", "Central Heating", "Mountain View", "Dining"]
  },

  // RAJASTHAN (India)
  {
    id: "rajasthan-hotel-1",
    destinationId: "rajasthan",
    name: "Rambagh Palace Jaipur",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    location: "Bhawani Singh Road, Jaipur",
    rating: 5.0,
    type: "Resort",
    pricePerNight: 48000,
    description: "Former residence of the Maharaja of Jaipur set in 47 acres of gardens with peacock lawns.",
    amenities: ["Wi-Fi", "Royal Butler Service", "Jiva Spa", "Polo Lounge", "Indoor Pool"]
  },

  // KERALA (India)
  {
    id: "kerala-hotel-1",
    destinationId: "kerala",
    name: "Kumarakom Lake Resort",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    location: "Vembanad Lake, Kumarakom",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 18000,
    description: "Traditional 16th-century heritage villas along backwater canals with meandering pool and Ayurveda spa.",
    amenities: ["Wi-Fi", "Ayurvedic Spa", "Meandering Pool", "Sunset Cruise", "Backwater Dining"]
  },

  // MEGHALAYA (India)
  {
    id: "meghalaya-hotel-1",
    destinationId: "meghalaya",
    name: "Ri Kynjai Serenity by the Lake",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    location: "Umiam Lake, Shillong",
    rating: 4.8,
    type: "Resort",
    pricePerNight: 14500,
    description: "Khasi thatch architecture inspired by upside-down boats overlooking tranquil pine-fringed Umiam Lake.",
    amenities: ["Wi-Fi", "Lake View Cottages", "Khasi Herbal Spa", "Organic Dining", "Nature Trails"]
  },

  // GOA (India)
  {
    id: "goa-hotel-1",
    destinationId: "goa",
    name: "Taj Exotica Resort & Spa",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    location: "Benaulim Beach, South Goa",
    rating: 4.9,
    type: "Resort",
    pricePerNight: 26000,
    description: "Mediterranean-style villa resort sprawling across 56 acres of lush gardens along direct private beach frontage.",
    amenities: ["Wi-Fi", "Private Beach Access", "Jiva Spa", "Golf Course", "Seafood Grill"]
  }
];

export default hotels;
