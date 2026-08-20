import { useState, useMemo } from "react";
import destinations, { hotels } from "../data/destinations";

/**
 * TravelPlanner Component
 * Dynamic Day-by-Day Itinerary Builder + Multi-Select Interests + Hotel Recommendations.
 * Guarantees that EXACTLY X days are generated when the user selects X days.
 */
export function TravelPlanner() {
  // Form State
  const [formData, setFormData] = useState({
    name: "Alex Vance",
    email: "alex.vance@example.com",
    destinationId: "paris",
    travelDate: "2026-09-15",
    durationDays: 5,
    interests: ["Culture", "Food", "Relaxation"],
    travelers: 2,
    travelStyle: "Balanced"
  });

  const [errors, setErrors] = useState({});
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [showHotels, setShowHotels] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Hotel Filters
  const [hotelPriceFilter, setHotelPriceFilter] = useState("ALL");
  const [hotelTypeFilter, setHotelTypeFilter] = useState("ALL");
  const [hotelRatingFilter, setHotelRatingFilter] = useState("ALL");

  const interestOptions = [
    { id: "Nature", label: "Nature & Landscapes", icon: "🌲" },
    { id: "Relaxation", label: "Relaxation & Leisure", icon: "☕" },
    { id: "Culture", label: "Culture & Art", icon: "🏛️" },
    { id: "Adventure", label: "Adventure & Thrill", icon: "🧗" },
    { id: "Food", label: "Food & Gastronomy", icon: "🍷" },
    { id: "Heritage", label: "Heritage & History", icon: "🏰" },
    { id: "Wellness", label: "Wellness & Spa", icon: "🌿" },
    { id: "Architecture", label: "Architecture", icon: "🏙️" },
    { id: "Photography", label: "Photography Spots", icon: "📷" }
  ];

  const travelStyles = ["Relaxed", "Balanced", "Active", "Luxury"];

  // Toggle multi-select interest
  const toggleInterest = (interestId) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interestId);
      const newInterests = exists
        ? prev.interests.filter((i) => i !== interestId)
        : [...prev.interests, interestId];
      // Keep at least 1 interest
      return { ...prev, interests: newInterests.length > 0 ? newInterests : [interestId] };
    });
  };

  // Adjust duration days with stepper
  const handleDurationChange = (delta) => {
    setFormData((prev) => ({
      ...prev,
      durationDays: Math.max(1, Math.min(30, Number(prev.durationDays) + delta))
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // Destination Object
  const selectedDest = useMemo(() => {
    return destinations.find((d) => d.id === formData.destinationId) || destinations[0];
  }, [formData.destinationId]);

  // Destination Hotels
  const availableHotels = useMemo(() => {
    const destHotels = hotels.filter((h) => h.destinationId === formData.destinationId);
    if (destHotels.length > 0) return destHotels;
    // Fallback template hotels adapted for this destination
    return [
      {
        id: `${formData.destinationId}-hotel-1`,
        destinationId: formData.destinationId,
        name: `Grand Palace Hotel ${selectedDest.name}`,
        image: selectedDest.image,
        location: `${selectedDest.name} Prime District`,
        rating: 4.8,
        type: "Hotel",
        pricePerNight: 12500,
        description: `Luxurious 5-star accommodation in the heart of ${selectedDest.name} with bespoke amenities.`,
        amenities: ["Wi-Fi", "Breakfast", "Pool", "Spa", "Concierge"]
      },
      {
        id: `${formData.destinationId}-hotel-2`,
        destinationId: formData.destinationId,
        name: `${selectedDest.name} Heritage Boutique Inn`,
        image: selectedDest.image,
        location: `Historic Quarter, ${selectedDest.name}`,
        rating: 4.6,
        type: "Boutique",
        pricePerNight: 7200,
        description: `Charming boutique retreat showcasing local craftsmanship and scenic vistas.`,
        amenities: ["Wi-Fi", "Breakfast", "Terrace", "Air Conditioning"]
      }
    ];
  }, [formData.destinationId, selectedDest]);

  // Filtered Hotels
  const filteredHotels = useMemo(() => {
    return availableHotels.filter((hotel) => {
      // Price filter
      if (hotelPriceFilter === "UNDER_5K" && hotel.pricePerNight >= 5000) return false;
      if (hotelPriceFilter === "5K_15K" && (hotel.pricePerNight < 5000 || hotel.pricePerNight > 15000)) return false;
      if (hotelPriceFilter === "ABOVE_15K" && hotel.pricePerNight <= 15000) return false;

      // Type filter
      if (hotelTypeFilter !== "ALL" && hotel.type !== hotelTypeFilter) return false;

      // Rating filter
      if (hotelRatingFilter === "4_5" && hotel.rating < 4.5) return false;

      return true;
    });
  }, [availableHotels, hotelPriceFilter, hotelTypeFilter, hotelRatingFilter]);

  // Generate dynamic custom itinerary matching EXACTLY formData.durationDays
  const handleGenerateItinerary = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required.";
    if (formData.interests.length === 0) newErrors.interests = "Select at least one travel interest.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const totalDays = Number(formData.durationDays) || 1;
    const dest = selectedDest;
    const interests = formData.interests;

    // Build intelligent day-by-day plan
    const daysPlan = [];

    // Template activity pools based on destination and selected interests
    const isRelax = interests.includes("Relaxation") || interests.includes("Wellness");
    const isFood = interests.includes("Food");
    const isCulture = interests.includes("Culture") || interests.includes("Heritage") || interests.includes("Architecture");
    const isAdventure = interests.includes("Adventure") || interests.includes("Nature");

    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      let morning = {
        title: `Morning Exploration of ${dest.name}`,
        location: `${dest.name} Historic Center`,
        desc: `Begin your morning discovering signature architecture and peaceful dawn vistas.`
      };
      let afternoon = {
        title: `Afternoon Cultural Encounters`,
        location: `${dest.name} Landmarks`,
        desc: `Immerse in curated landmark expeditions with expert local guidance.`
      };
      let evening = {
        title: `Sunset Contemplation & Dining`,
        location: `${dest.name} Waterfront / Terrace`,
        desc: `Relax with golden hour scenery and authentic regional delicacies.`
      };

      // Customize specific days
      if (dayNum === 1) {
        morning = {
          title: `Arrival & Heritage Check-in`,
          location: `${dest.name} Gateway`,
          desc: `Arrive in ${dest.name}, check into your accommodation, and acclimatize with a scenic introductory stroll.`
        };
        afternoon = {
          title: `Historic Quarter Orientation`,
          location: `${dest.name} Central Boulevard`,
          desc: isCulture
            ? `Guided tour of the oldest historical alleys, monuments, and artisan workshops.`
            : `Gentle walking tour of the lively central squares and scenic lookout points.`
        };
        evening = {
          title: `Welcome Dinner & Sunset Vista`,
          location: `${dest.name} Scenic Promenade`,
          desc: isFood
            ? `Savor a multi-course regional welcome feast pairing local wines with seasonal chef specialties.`
            : `Enjoy a serene sunset drink overlooking the illuminated landmarks.`
        };
      } else if (dayNum === 2) {
        morning = {
          title: isAdventure ? `High-Altitude Scenic Trek` : `Masterpiece Museum & Monument Walk`,
          location: dest.hotspots?.[0]?.title || `${dest.name} Landmark`,
          desc: isAdventure
            ? `Venture out early to witness morning mist lifting from mountain slopes or nature sanctuaries.`
            : `Beat the crowds to explore world-renowned art galleries and royal courtyards.`
        };
        afternoon = {
          title: isFood ? `Culinary Food Tasting Safari` : `Landmark Discovery & Photography`,
          location: dest.hotspots?.[1]?.title || `${dest.name} Plaza`,
          desc: isFood
            ? `Visit bustling local spice markets, artisan cheese makers, and street food masters.`
            : `Photograph panoramic perspectives and discover hidden courtyards.`
        };
        evening = {
          title: isRelax ? `Thermal Spa & Wellness Sanctuary` : `Atmospheric Twilight Cruise / Walk`,
          location: `${dest.name} Twilight Spot`,
          desc: isRelax
            ? `Unwind in mineral thermal pools and holistic aromatherapy treatments.`
            : `Stroll illuminated stone bridges and enjoy live acoustic music.`
        };
      } else if (dayNum === totalDays && totalDays > 2) {
        morning = {
          title: `Dawn Contemplation & Souvenir Hunting`,
          location: `${dest.name} Artisan Market`,
          desc: `Pick up handcrafted textiles, local tea/wine, and capture final photographs in soft morning light.`
        };
        afternoon = {
          title: `Scenic Farewell Lunch & Hidden Gems`,
          location: `${dest.name} Panoramic Overlook`,
          desc: `Enjoy a relaxed celebratory lunch reflecting on your expedition milestones.`
        };
        evening = {
          title: `Departure Transfer & Memories`,
          location: `${dest.name} Transit Gateway`,
          desc: `Transfer comfortably to the airport/station carrying timeless memories of ${dest.name}.`
        };
      } else {
        // Intermediate days (Day 3, 4, 5, etc.)
        const theme = (dayNum % 3 === 0) ? "Nature & Vistas" : (dayNum % 3 === 1) ? "Heritage Immersion" : "Culinary & Leisure";
        morning = {
          title: `Day ${dayNum} ${theme}: Sacred & Scenic Trails`,
          location: `${dest.name} Surrounds`,
          desc: isNature(interests)
            ? `Excursion into pristine botanical gardens, alpine valleys, or tranquil lakes.`
            : `Private guided exploration of centuries-old temples, palaces, and sacred architecture.`
        };
        afternoon = {
          title: isFood ? `Traditional Cooking Masterclass` : `Off-the-Beaten-Path Expedition`,
          location: `${dest.name} Outer District`,
          desc: isFood
            ? `Learn the secret recipes of local chefs using fresh organic farm ingredients.`
            : `Discover secluded viewpoints and quaint bohemian neighborhoods.`
        };
        evening = {
          title: isRelax ? `Candlelit Relaxation & Stargazing` : `Night Bazaar & Cultural Performance`,
          location: `${dest.name} Night Hub`,
          desc: isRelax
            ? `Gentle evening tea and fireside contemplation under the stars.`
            : `Attend a traditional folk dance, opera, or vibrant night bazaar.`
        };
      }

      daysPlan.push({
        day: dayNum,
        title: `Day ${dayNum} — ${dayNum === 1 ? 'Arrival & Welcome' : dayNum === totalDays ? 'Grand Finale & Departure' : 'Deep Exploration'}`,
        morning,
        afternoon,
        evening
      });
    }

    setGeneratedItinerary({
      destination: dest,
      durationDays: totalDays,
      durationNights: Math.max(1, totalDays - 1),
      travelers: formData.travelers,
      travelDate: formData.travelDate,
      interests: formData.interests,
      travelStyle: formData.travelStyle,
      days: daysPlan
    });

    setShowHotels(false);
  };

  function isNature(interests) {
    return interests.includes("Nature") || interests.includes("Adventure");
  }

  return (
    <section className="planner-section" id="planner-tool">
      <div className="section-header">
        <span className="section-eyebrow">CUSTOM EXPEDITION DESIGNER</span>
        <h2 className="section-title">PLAN YOUR GLOBAL JOURNEY</h2>
        <p className="section-subtitle">
          Select your destination, precise duration, and multiple travel interests to generate an exact day-by-day itinerary and recommended accommodations.
        </p>
      </div>

      <div className="planner-container">
        {/* Planner Configuration Form */}
        <form onSubmit={handleGenerateItinerary}>
          <div className="planner-form-grid">
            {/* 1. Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="traveler-name">Lead Explorer Name</label>
              <input
                id="traveler-name"
                name="name"
                type="text"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Alex Vance"
              />
              {errors.name && <span style={{ color: "#ff5252", fontSize: "11px" }}>{errors.name}</span>}
            </div>

            {/* 2. Email */}
            <div className="form-group">
              <label className="form-label" htmlFor="traveler-email">Email Address</label>
              <input
                id="traveler-email"
                name="email"
                type="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex.vance@example.com"
              />
              {errors.email && <span style={{ color: "#ff5252", fontSize: "11px" }}>{errors.email}</span>}
            </div>

            {/* 3. Destination Selector */}
            <div className="form-group">
              <label className="form-label" htmlFor="dest-select">Select World Destination</label>
              <select
                id="dest-select"
                name="destinationId"
                className="form-select"
                value={formData.destinationId}
                onChange={handleInputChange}
              >
                {destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} &bull; {d.country} ({d.continent})
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Travel Date */}
            <div className="form-group">
              <label className="form-label" htmlFor="travel-date">Expedition Departure Date</label>
              <input
                id="travel-date"
                name="travelDate"
                type="date"
                className="form-input"
                value={formData.travelDate}
                onChange={handleInputChange}
              />
            </div>

            {/* 5. Exact Duration (Days) Stepper Input */}
            <div className="form-group">
              <label className="form-label" htmlFor="travel-duration">
                Trip Duration: <strong>{formData.durationDays} Days</strong> ({Math.max(1, formData.durationDays - 1)} Nights)
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => handleDurationChange(-1)}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid var(--border-medium)",
                    color: "var(--accent-gold-light)",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}
                  title="Decrease Days"
                >
                  &minus;
                </button>

                <input
                  id="travel-duration"
                  name="durationDays"
                  type="number"
                  min="1"
                  max="30"
                  className="form-input"
                  style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}
                  value={formData.durationDays}
                  onChange={(e) => setFormData((prev) => ({ ...prev, durationDays: Math.max(1, Math.min(30, Number(e.target.value))) }))}
                />

                <button
                  type="button"
                  onClick={() => handleDurationChange(1)}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid var(--border-medium)",
                    color: "var(--accent-gold-light)",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}
                  title="Increase Days"
                >
                  &#43;
                </button>
              </div>
            </div>

            {/* 6. Travel Style */}
            <div className="form-group">
              <label className="form-label">Pacing &amp; Travel Style</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {travelStyles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    className={`style-option-btn ${formData.travelStyle === style ? "selected" : ""}`}
                    onClick={() => setFormData((prev) => ({ ...prev, travelStyle: style }))}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* 7. Multi-Select Travel Interests */}
            <div className="form-group full-width" style={{ marginTop: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <label className="form-label">
                  Multi-Select Travel Interests (Selected: {formData.interests.length})
                </label>
                <span style={{ fontSize: "11px", color: "var(--accent-gold-light)" }}>
                  Select all dimensions that inspire you
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
                {interestOptions.map((opt) => {
                  const isChecked = formData.interests.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleInterest(opt.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 14px",
                        borderRadius: "var(--radius-sm)",
                        border: isChecked ? "1px solid var(--accent-gold-light)" : "1px solid var(--border-subtle)",
                        background: isChecked ? "rgba(197, 162, 106, 0.18)" : "rgba(6, 12, 15, 0.6)",
                        color: isChecked ? "var(--text-primary)" : "var(--text-secondary)",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <span style={{ fontSize: "16px" }}>{opt.icon}</span>
                      <span style={{ fontSize: "12.5px", flex: 1, fontWeight: isChecked ? "600" : "400" }}>
                        {opt.label}
                      </span>
                      <span style={{ fontSize: "14px", color: isChecked ? "var(--accent-gold-light)" : "var(--text-muted)" }}>
                        {isChecked ? "☑" : "☐"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button type="submit" className="planner-submit-btn">
            GENERATE {formData.durationDays}-DAY ITINERARY &rarr;
          </button>
        </form>

        {/* Generated Itinerary Result Display */}
        {generatedItinerary && (
          <div style={{ marginTop: "48px", paddingTop: "36px", borderTop: "1px solid var(--border-gold)", animation: "modalPop 0.4s ease" }}>
            {/* Header Ribbon */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "28px" }}>
              <div>
                <span className="section-eyebrow" style={{ marginBottom: "4px" }}>
                  BESPOKE {generatedItinerary.durationDays}-DAY ITINERARY ({generatedItinerary.durationNights} NIGHTS)
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "var(--text-primary)" }}>
                  {generatedItinerary.destination.name} &bull; {generatedItinerary.travelStyle} Expedition
                </h3>
                <p style={{ color: "var(--accent-gold-light)", fontSize: "13px", marginTop: "4px" }}>
                  Interests Integrated: <strong>{generatedItinerary.interests.join(" · ")}</strong>
                </p>
              </div>

              {/* Suggest Hotels CTA Button */}
              <button
                className="btn-primary"
                onClick={() => setShowHotels(!showHotels)}
                style={{ padding: "12px 24px", fontSize: "11px" }}
              >
                {showHotels ? "HIDE HOTEL RECOMMENDATIONS" : "🏨 SUGGEST HOTELS &rarr;"}
              </button>
            </div>

            {/* Exact Day-by-Day Schedule (Guaranteed Exactly X Days) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {generatedItinerary.days.map((d) => (
                <div
                  key={d.day}
                  style={{
                    background: "rgba(6, 12, 15, 0.75)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "10px" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "18px", letterSpacing: "1.5px", color: "var(--accent-gold-light)" }}>
                      {d.title}
                    </span>
                    <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Day {d.day} of {generatedItinerary.durationDays}
                    </span>
                  </div>

                  {/* Morning, Afternoon, Evening breakdown */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                    {/* Morning */}
                    <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "var(--radius-sm)", borderLeft: "2px solid #e6cb96" }}>
                      <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "#e6cb96", textTransform: "uppercase", fontWeight: "bold" }}>
                        🌅 MORNING &bull; {d.morning.location}
                      </span>
                      <h4 style={{ fontSize: "14px", margin: "4px 0 6px", color: "var(--text-primary)" }}>{d.morning.title}</h4>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>{d.morning.desc}</p>
                    </div>

                    {/* Afternoon */}
                    <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "var(--radius-sm)", borderLeft: "2px solid var(--accent-gold)" }}>
                      <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold" }}>
                        ☀️ AFTERNOON &bull; {d.afternoon.location}
                      </span>
                      <h4 style={{ fontSize: "14px", margin: "4px 0 6px", color: "var(--text-primary)" }}>{d.afternoon.title}</h4>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>{d.afternoon.desc}</p>
                    </div>

                    {/* Evening */}
                    <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px", borderRadius: "var(--radius-sm)", borderLeft: "2px solid #8e734c" }}>
                      <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "#baa588", textTransform: "uppercase", fontWeight: "bold" }}>
                        🌙 EVENING &bull; {d.evening.location}
                      </span>
                      <h4 style={{ fontSize: "14px", margin: "4px 0 6px", color: "var(--text-primary)" }}>{d.evening.title}</h4>
                      <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.5" }}>{d.evening.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hotel Recommendations Section */}
            {showHotels && (
              <div style={{ background: "rgba(3, 7, 8, 0.8)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-lg)", padding: "30px", marginTop: "32px", animation: "modalPop 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "14px", marginBottom: "20px" }}>
                  <div>
                    <span className="section-eyebrow" style={{ marginBottom: "4px" }}>
                      ACCOMMODATION FOR {generatedItinerary.destination.name.toUpperCase()}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px" }}>
                      RECOMMENDED HOTELS &amp; RESORTS
                    </h3>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>
                      Estimated calculation for <strong>{generatedItinerary.durationNights} Nights</strong> &bull; Demo price rates may vary.
                    </p>
                  </div>

                  {/* Hotel Filters */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <select
                      className="form-select"
                      style={{ padding: "6px 12px", fontSize: "11px", width: "auto" }}
                      value={hotelPriceFilter}
                      onChange={(e) => setHotelPriceFilter(e.target.value)}
                    >
                      <option value="ALL">All Price Ranges</option>
                      <option value="UNDER_5K">Under ₹5,000 / night</option>
                      <option value="5K_15K">₹5,000 – ₹15,000 / night</option>
                      <option value="ABOVE_15K">₹15,000+ / night (Luxury)</option>
                    </select>

                    <select
                      className="form-select"
                      style={{ padding: "6px 12px", fontSize: "11px", width: "auto" }}
                      value={hotelTypeFilter}
                      onChange={(e) => setHotelTypeFilter(e.target.value)}
                    >
                      <option value="ALL">All Hotel Types</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Boutique">Boutique Inn</option>
                      <option value="Resort">Luxury Resort</option>
                      <option value="Villa">Seaside Villa</option>
                    </select>

                    <select
                      className="form-select"
                      style={{ padding: "6px 12px", fontSize: "11px", width: "auto" }}
                      value={hotelRatingFilter}
                      onChange={(e) => setHotelRatingFilter(e.target.value)}
                    >
                      <option value="ALL">All Ratings</option>
                      <option value="4_5">4.5+ Stars</option>
                    </select>
                  </div>
                </div>

                {/* Hotel Cards Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                  {filteredHotels.map((h) => {
                    const totalEstimatedPrice = h.pricePerNight * generatedItinerary.durationNights;
                    const isSelected = selectedHotel?.id === h.id;

                    return (
                      <div
                        key={h.id}
                        style={{
                          background: "var(--bg-card)",
                          border: isSelected ? "1px solid var(--accent-gold-light)" : "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-md)",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: isSelected ? "0 0 20px rgba(197, 162, 106, 0.3)" : "none",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <div style={{ height: "160px", overflow: "hidden", position: "relative" }}>
                          <img src={h.image} alt={h.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          <span style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.75)", padding: "3px 8px", borderRadius: "var(--radius-full)", fontSize: "11px", color: "#ffd700", fontWeight: "bold" }}>
                            ★ {h.rating}
                          </span>
                        </div>

                        <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: 1 }}>
                          <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold" }}>
                            {h.type} &bull; {h.location}
                          </span>
                          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", margin: "4px 0 6px", color: "var(--text-primary)" }}>
                            {h.name}
                          </h4>
                          <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.45", marginBottom: "12px", flex: 1 }}>
                            {h.description}
                          </p>

                          {/* Amenities Pills */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                            {h.amenities?.map((amenity, idx) => (
                              <span
                                key={idx}
                                style={{
                                  fontSize: "9.5px",
                                  padding: "2px 8px",
                                  borderRadius: "var(--radius-full)",
                                  background: "rgba(255,255,255,0.05)",
                                  border: "1px solid var(--border-subtle)",
                                  color: "var(--text-muted)"
                                }}
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>

                          {/* Pricing calculation */}
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid var(--border-subtle)", paddingTop: "12px", marginBottom: "14px" }}>
                            <div>
                              <span style={{ fontSize: "16px", fontWeight: "bold", color: "var(--text-primary)" }}>
                                ₹{h.pricePerNight.toLocaleString()}
                              </span>
                              <span style={{ fontSize: "10.5px", color: "var(--text-muted)" }}> / night</span>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <span style={{ fontSize: "11.5px", color: "var(--accent-gold-light)", fontWeight: "bold" }}>
                                Total: ₹{totalEstimatedPrice.toLocaleString()}
                              </span>
                              <span style={{ fontSize: "9.5px", color: "var(--text-muted)", display: "block" }}>
                                for {generatedItinerary.durationNights} nights
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            className={isSelected ? "btn-primary" : "btn-secondary"}
                            style={{ width: "100%", padding: "10px", fontSize: "10px" }}
                            onClick={() => setSelectedHotel(isSelected ? null : h)}
                          >
                            {isSelected ? "✓ HOTEL SELECTED" : "SELECT HOTEL"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default TravelPlanner;
