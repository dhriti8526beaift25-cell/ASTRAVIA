import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ItineraryDay from "../components/ItineraryDay";
import destinations from "../data/destinations";

/**
 * Itinerary Page (Dedicated Interactive Itinerary Builder)
 * Requirement 7:
 * - Enter journey name
 * - Select destination
 * - Add places to itinerary
 * - Assign places to travel days
 * - Add notes or custom activities
 * - Remove places
 * - Reorder activities (Move Up ▲ / Move Down ▼)
 * - View itinerary organized by day
 * - Summary ribbon of planned journey
 * - Save to localStorage (astravia_saved_itineraries)
 * - Reopen and edit saved itineraries (?edit=id or from saved drawer)
 */
export function Itinerary() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query params
  const queryDest = searchParams.get("destination") || "kashmir";
  const editId = searchParams.get("edit");

  // Saved itineraries state from localStorage
  const [savedItineraries, setSavedItineraries] = useState(() => {
    try {
      const data = localStorage.getItem("astravia_saved_itineraries");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  // Active itinerary ID (if editing an existing saved itinerary)
  const [activeItineraryId, setActiveItineraryId] = useState(editId || null);

  // Form State
  const [journeyName, setJourneyName] = useState("My Himalayan Expedition");
  const [selectedDestId, setSelectedDestId] = useState(queryDest);
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split("T")[0];
  });
  const [durationDays, setDurationDays] = useState(3);
  const [travelStyle, setTravelStyle] = useState("Balanced");

  // Day-by-Day activities map: { 1: [place, ...], 2: [...], ... }
  const [daysActivities, setDaysActivities] = useState(() => ({
    1: [
      {
        id: "act_1",
        title: "Sunset Shikara Cruise on Dal Lake",
        timeSlot: "Evening",
        category: "Sightseeing",
        notes: "Witness the golden glow reflecting off the Zabarwan mountains"
      }
    ],
    2: [
      {
        id: "act_2",
        title: "Ascend Gulmarg Gondola Phase 2",
        timeSlot: "Morning",
        category: "Adventure",
        notes: "Reach 3,980m for panoramic vistas of Himalayan summits"
      },
      {
        id: "act_3",
        title: "Traditional Kashmiri Wazwan Feast",
        timeSlot: "Afternoon",
        category: "Culinary",
        notes: "Savor Rogan Josh, Gushtaba, and Saffron Kahwa tea"
      }
    ],
    3: [
      {
        id: "act_4",
        title: "Explore Shalimar & Nishat Mughal Gardens",
        timeSlot: "Morning",
        category: "Heritage",
        notes: "Terraced water fountains and 400-year-old chinar trees"
      }
    ]
  }));

  // Feedback states
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);

  // Current Destination Object
  const currentDest = useMemo(() => {
    return (
      destinations.find((d) => d.id === selectedDestId) ||
      destinations[0]
    );
  }, [selectedDestId]);

  // Load from ?edit=id parameter if present
  useEffect(() => {
    if (editId) {
      const match = savedItineraries.find((it) => it.id === editId);
      if (match) {
        setActiveItineraryId(match.id);
        setJourneyName(match.name || "Untitled Journey");
        setSelectedDestId(match.destinationId || "kashmir");
        setStartDate(match.startDate || "");
        setDurationDays(match.durationDays || 3);
        setTravelStyle(match.travelStyle || "Balanced");
        setDaysActivities(match.daysActivities || {});
      }
    } else if (queryDest) {
      setSelectedDestId(queryDest);
      const destObj = destinations.find((d) => d.id === queryDest);
      if (destObj) {
        setJourneyName(`${destObj.name} Discovery Journey`);
      }
    }
  }, [editId, queryDest, savedItineraries]);

  // Update localStorage whenever savedItineraries changes
  const persistSavedItineraries = (updatedList) => {
    setSavedItineraries(updatedList);
    try {
      localStorage.setItem("astravia_saved_itineraries", JSON.stringify(updatedList));
    } catch (e) {
      console.warn("Error saving itineraries to localStorage:", e);
    }
  };

  // Adjust duration days with stepper
  const handleDurationChange = (delta) => {
    const nextDays = Math.max(1, Math.min(30, durationDays + delta));
    setDurationDays(nextDays);

    // Ensure day entry exists for newly added days
    setDaysActivities((prev) => {
      const updated = { ...prev };
      for (let i = 1; i <= nextDays; i++) {
        if (!updated[i]) {
          updated[i] = [];
        }
      }
      return updated;
    });
  };

  // Switch destination and optionally load sample activities
  const handleDestinationChange = (e) => {
    const newId = e.target.value;
    setSelectedDestId(newId);
    const dest = destinations.find((d) => d.id === newId);
    if (dest) {
      setJourneyName(`Expedition to ${dest.name}`);
      // Pre-populate Day 1 with signature highlight if empty
      if (dest.highlights && dest.highlights.length > 0) {
        setDaysActivities({
          1: [
            {
              id: `act_${Date.now()}`,
              title: dest.highlights[0],
              timeSlot: "Morning",
              category: "Sightseeing",
              notes: `Key landmark in ${dest.name}`
            }
          ]
        });
      }
    }
  };

  // Add Place to specific day
  const handleAddPlace = (dayNum, place) => {
    setDaysActivities((prev) => {
      const dayList = prev[dayNum] ? [...prev[dayNum]] : [];
      return {
        ...prev,
        [dayNum]: [...dayList, place]
      };
    });
  };

  // Remove place from specific day
  const handleRemovePlace = (dayNum, index) => {
    setDaysActivities((prev) => {
      const dayList = prev[dayNum] ? [...prev[dayNum]] : [];
      dayList.splice(index, 1);
      return {
        ...prev,
        [dayNum]: dayList
      };
    });
  };

  // Move Place Up within a day
  const handleMoveUp = (dayNum, index) => {
    if (index === 0) return;
    setDaysActivities((prev) => {
      const dayList = [...(prev[dayNum] || [])];
      const temp = dayList[index - 1];
      dayList[index - 1] = dayList[index];
      dayList[index] = temp;
      return {
        ...prev,
        [dayNum]: dayList
      };
    });
  };

  // Move Place Down within a day
  const handleMoveDown = (dayNum, index) => {
    setDaysActivities((prev) => {
      const dayList = [...(prev[dayNum] || [])];
      if (index >= dayList.length - 1) return prev;
      const temp = dayList[index + 1];
      dayList[index + 1] = dayList[index];
      dayList[index] = temp;
      return {
        ...prev,
        [dayNum]: dayList
      };
    });
  };

  // Move Place to another day
  const handleMoveToDay = (currentDay, index, targetDay) => {
    if (currentDay === targetDay) return;
    setDaysActivities((prev) => {
      const sourceList = [...(prev[currentDay] || [])];
      const [item] = sourceList.splice(index, 1);
      const targetList = [...(prev[targetDay] || []), item];
      return {
        ...prev,
        [currentDay]: sourceList,
        [targetDay]: targetList
      };
    });
  };

  // Quick-add a destination highlight to Day 1 or active day
  const handleQuickAddHighlight = (highlightText) => {
    handleAddPlace(1, {
      id: `hl_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      title: highlightText,
      timeSlot: "Morning",
      category: "Sightseeing",
      notes: `Signature landmark of ${currentDest.name}`
    });
    setSaveSuccessMsg(`Added "${highlightText}" to Day 1!`);
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  // Total activities count calculation
  const totalActivitiesCount = useMemo(() => {
    return Object.values(daysActivities).reduce(
      (sum, list) => sum + (Array.isArray(list) ? list.length : 0),
      0
    );
  }, [daysActivities]);

  // Save Itinerary to localStorage
  const handleSaveItinerary = (e) => {
    e.preventDefault();

    // Validation
    if (!journeyName.trim()) {
      setErrorMessage("Please enter a name for your journey.");
      return;
    }
    if (totalActivitiesCount === 0) {
      setErrorMessage("Please schedule at least one activity before saving.");
      return;
    }
    setErrorMessage("");

    const newId = activeItineraryId || `itin_${Date.now()}`;
    const newItineraryRecord = {
      id: newId,
      name: journeyName.trim(),
      destinationId: selectedDestId,
      destinationName: currentDest.name,
      country: currentDest.country,
      image: currentDest.image,
      startDate,
      durationDays,
      travelStyle,
      daysActivities,
      activitiesCount: totalActivitiesCount,
      updatedAt: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
    };

    const existingIndex = savedItineraries.findIndex((it) => it.id === newId);
    let updatedList;
    if (existingIndex >= 0) {
      updatedList = [...savedItineraries];
      updatedList[existingIndex] = newItineraryRecord;
    } else {
      updatedList = [newItineraryRecord, ...savedItineraries];
    }

    persistSavedItineraries(updatedList);
    setActiveItineraryId(newId);
    setSaveSuccessMsg("✓ Itinerary successfully saved to My Journey!");
    setTimeout(() => setSaveSuccessMsg(""), 4000);
  };

  // Load a previously saved itinerary
  const handleLoadSavedItinerary = (it) => {
    setActiveItineraryId(it.id);
    setJourneyName(it.name);
    setSelectedDestId(it.destinationId);
    setStartDate(it.startDate || "");
    setDurationDays(it.durationDays || 3);
    setTravelStyle(it.travelStyle || "Balanced");
    setDaysActivities(it.daysActivities || {});
    setIsSavedDrawerOpen(false);
    setSearchParams({ edit: it.id });
    setSaveSuccessMsg(`Loaded "${it.name}"`);
    setTimeout(() => setSaveSuccessMsg(""), 3000);
  };

  // Delete saved itinerary
  const handleDeleteSavedItinerary = (id) => {
    const updated = savedItineraries.filter((it) => it.id !== id);
    persistSavedItineraries(updated);
    if (activeItineraryId === id) {
      setActiveItineraryId(null);
      setSearchParams({});
    }
  };

  // Reset to empty fresh plan
  const handleStartNewPlan = () => {
    setActiveItineraryId(null);
    setJourneyName("New Global Journey");
    setDurationDays(3);
    setDaysActivities({ 1: [], 2: [], 3: [] });
    setSearchParams({});
  };

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      {/* 1. Header */}
      <div className="section-header">
        <span className="section-eyebrow">CUSTOM TRAVEL ARCHITECT</span>
        <h1 className="section-title">ITINERARY BUILDER</h1>
        <p className="section-subtitle">
          Craft your bespoke day-by-day journey, add custom places, organize by days, reorder activities, and save directly to My Journey.
        </p>

        {/* Top Control Bar: Saved Manager & Start New */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setIsSavedDrawerOpen(true)}
            style={{ padding: "8px 18px", fontSize: "11px", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            📂 VIEW SAVED ITINERARIES ({savedItineraries.length})
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleStartNewPlan}
            style={{ padding: "8px 18px", fontSize: "11px" }}
          >
            + NEW BLANK ITINERARY
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "0 4vw" }}>
        {/* Success Alert Banner */}
        {saveSuccessMsg && (
          <div
            style={{
              background: "rgba(102, 187, 106, 0.15)",
              border: "1px solid #66bb6a",
              borderRadius: "var(--radius-sm)",
              padding: "12px 20px",
              marginBottom: "24px",
              color: "#66bb6a",
              fontSize: "13px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              animation: "fadeIn 0.3s ease"
            }}
          >
            <span>{saveSuccessMsg}</span>
            <Link to="/my-journey" style={{ color: "#fff", textDecoration: "underline", fontSize: "12px" }}>
              Go to My Journey &rarr;
            </Link>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div
            style={{
              background: "rgba(255, 82, 82, 0.15)",
              border: "1px solid #ff5252",
              borderRadius: "var(--radius-sm)",
              padding: "12px 20px",
              marginBottom: "24px",
              color: "#ff5252",
              fontSize: "13px"
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* 2. Journey Parameters Configuration Form */}
        <section
          style={{
            background: "rgba(6, 12, 15, 0.8)",
            border: "1px solid var(--border-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "32px",
            marginBottom: "36px"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {/* Journey Name */}
            <div>
              <label className="form-label" htmlFor="journey-title-input">
                Journey Name *
              </label>
              <input
                id="journey-title-input"
                type="text"
                className="form-input"
                value={journeyName}
                onChange={(e) => setJourneyName(e.target.value)}
                placeholder="e.g. Kashmir Autumn Serenity"
                required
              />
            </div>

            {/* Destination Selector */}
            <div>
              <label className="form-label" htmlFor="destination-select-input">
                Select Destination *
              </label>
              <select
                id="destination-select-input"
                className="form-select"
                value={selectedDestId}
                onChange={handleDestinationChange}
              >
                {destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} &bull; {d.country} ({d.continent})
                  </option>
                ))}
              </select>
            </div>

            {/* Departure Date */}
            <div>
              <label className="form-label" htmlFor="start-date-input">
                Departure Date
              </label>
              <input
                id="start-date-input"
                type="date"
                className="form-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* Duration Days Stepper */}
            <div>
              <label className="form-label">
                Duration: <strong>{durationDays} Days</strong> ({Math.max(1, durationDays - 1)} Nights)
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  type="button"
                  onClick={() => handleDurationChange(-1)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--accent-gold-light)",
                    fontSize: "18px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                  title="Decrease Days"
                  aria-label="Decrease trip duration"
                >
                  &minus;
                </button>

                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    lineHeight: "40px",
                    fontWeight: "bold",
                    color: "var(--text-primary)"
                  }}
                >
                  {durationDays} Days
                </div>

                <button
                  type="button"
                  onClick={() => handleDurationChange(1)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--accent-gold-light)",
                    fontSize: "18px",
                    cursor: "pointer",
                    fontWeight: "bold"
                  }}
                  title="Increase Days"
                  aria-label="Increase trip duration"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Travel Style Selector */}
          <div style={{ marginTop: "20px" }}>
            <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold", display: "block", marginBottom: "8px" }}>
              Travel Pacing
            </span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Relaxed", "Balanced", "Active", "Fast-Paced"].map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`filter-chip ${travelStyle === st ? "active" : ""}`}
                  onClick={() => setTravelStyle(st)}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Signature Highlights Quick-Add Shelf */}
          {currentDest.highlights && currentDest.highlights.length > 0 && (
            <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase", fontWeight: "bold" }}>
                  ✦ Quick-Add Highlights from {currentDest.name}
                </span>
                <span style={{ fontSize: "10.5px", color: "var(--text-muted)" }}>Click to insert into schedule</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {currentDest.highlights.map((hl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickAddHighlight(hl)}
                    style={{
                      background: "rgba(197, 162, 106, 0.1)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      padding: "6px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "11px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s ease"
                    }}
                    title={`Add "${hl}" to schedule`}
                  >
                    <span>+</span>
                    <span>{hl}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 3. Planned Journey Summary Ribbon */}
        <section
          style={{
            background: "rgba(197, 162, 106, 0.08)",
            border: "1.5px solid var(--border-gold)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            marginBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img
              src={currentDest.image}
              alt={currentDest.name}
              style={{ width: "54px", height: "54px", borderRadius: "var(--radius-sm)", objectFit: "cover" }}
            />
            <div>
              <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold" }}>
                ITINERARY SUMMARY
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--text-primary)", margin: "2px 0" }}>
                {journeyName}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                {currentDest.name}, {currentDest.country} &bull; {durationDays} Days ({Math.max(1, durationDays - 1)} Nights) &bull; {totalActivitiesCount} Activities Planned
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Link
              to={`/journey/${currentDest.id}`}
              className="btn-secondary"
              style={{ padding: "10px 18px", fontSize: "10px" }}
              title="Preview in 360° virtual tour"
            >
              PREVIEW 360° TOUR
            </Link>
            <button
              type="button"
              onClick={handleSaveItinerary}
              className="btn-primary"
              style={{ padding: "10px 24px", fontSize: "11px" }}
            >
              💾 SAVE ITINERARY
            </button>
          </div>
        </section>

        {/* 4. Day-by-Day Schedule Columns / Cards */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", letterSpacing: "1.5px" }}>
              DAY-BY-DAY SCHEDULE ({durationDays} DAYS)
            </h2>
            <span style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>
              Use ▲ / ▼ buttons to reorder activities within days
            </span>
          </div>

          {Array.from({ length: durationDays }, (_, i) => i + 1).map((dayNum) => (
            <ItineraryDay
              key={dayNum}
              dayNumber={dayNum}
              places={daysActivities[dayNum] || []}
              totalDays={durationDays}
              onAddPlace={handleAddPlace}
              onRemovePlace={handleRemovePlace}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
              onMoveToDay={handleMoveToDay}
            />
          ))}

          {/* Quick Action to Add Another Day */}
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleDurationChange(1)}
              style={{ padding: "10px 24px", fontSize: "11px" }}
            >
              + ADD ANOTHER DAY (DAY {durationDays + 1})
            </button>
          </div>
        </section>
      </div>

      {/* 5. Saved Itineraries Slide-Out Modal / Drawer */}
      {isSavedDrawerOpen && (
        <div
          className="hotspot-modal-backdrop"
          onClick={() => setIsSavedDrawerOpen(false)}
          style={{ zIndex: 1000 }}
        >
          <div
            className="hotspot-modal-card"
            style={{ maxWidth: "680px", maxHeight: "85vh", overflowY: "auto", padding: "32px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <span className="modal-category-tag">PERSISTENT STORAGE</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", margin: "4px 0" }}>
                  SAVED ITINERARIES
                </h3>
              </div>
              <button
                onClick={() => setIsSavedDrawerOpen(false)}
                style={{ background: "none", border: "none", fontSize: "22px", color: "var(--text-muted)", cursor: "pointer" }}
              >
                &times;
              </button>
            </div>

            {savedItineraries.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {savedItineraries.map((it) => (
                  <div
                    key={it.id}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: activeItineraryId === it.id ? "1.5px solid var(--accent-gold)" : "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      padding: "16px 20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px"
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold)", fontWeight: "bold" }}>
                        {it.destinationName?.toUpperCase() || "GLOBAL"} &bull; {it.durationDays} DAYS &bull; {it.activitiesCount || 0} PLACES
                      </span>
                      <h4 style={{ fontSize: "16px", margin: "3px 0 4px", color: "var(--text-primary)" }}>
                        {it.name}
                      </h4>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0 }}>
                        Last updated: {it.updatedAt || "Recently"} &bull; Departure: {it.startDate || "Flexible"}
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        type="button"
                        onClick={() => handleLoadSavedItinerary(it)}
                        className="btn-primary"
                        style={{ padding: "6px 14px", fontSize: "10px" }}
                      >
                        OPEN &amp; EDIT
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSavedItinerary(it.id)}
                        style={{
                          background: "rgba(255,82,82,0.1)",
                          border: "1px solid rgba(255,82,82,0.3)",
                          color: "#ff5252",
                          padding: "6px 10px",
                          borderRadius: "var(--radius-sm)",
                          cursor: "pointer",
                          fontSize: "11px"
                        }}
                        title="Delete itinerary"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text-muted)" }}>
                <p style={{ fontSize: "14px", marginBottom: "16px" }}>No itineraries saved in localStorage yet.</p>
                <button
                  className="btn-primary"
                  onClick={() => setIsSavedDrawerOpen(false)}
                  style={{ padding: "8px 18px", fontSize: "11px" }}
                >
                  START BUILDING FIRST ITINERARY
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Itinerary;
