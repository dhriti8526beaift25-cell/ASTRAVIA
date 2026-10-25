import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import SurpriseMeModal from "../components/SurpriseMeModal";
import DestinationCompareModal from "../components/DestinationCompareModal";
import destinations, { continents, countries } from "../data/destinations";

/**
 * Explore Page (Immersive Virtual Tourism Exploration Hub)
 * Requirement 4:
 * - Premium heading: "WHERE WILL YOU GO?"
 * - Short subtitle about virtual exploration
 * - Real-time search by destination name, country, and region
 * - Functional continent and travel category filters
 * - Rich landscape cards with overlays, hover transitions, and Explore actions
 * - URL search params integration (?continent=... &category=...)
 */
export function Explore({ savedIds = [], onToggleSave }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize from search parameters if present
  const initialContinent = searchParams.get("continent") || "ALL";
  const initialCategory = searchParams.get("category") || searchParams.get("type") || "ALL";
  const initialQuery = searchParams.get("search") || "";

  const [selectedContinent, setSelectedContinent] = useState(initialContinent);
  const [selectedCountry, setSelectedCountry] = useState("ALL");
  const [selectedType, setSelectedType] = useState(initialCategory.toUpperCase());
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Synchronize state if URL query params change
  useEffect(() => {
    const qContinent = searchParams.get("continent");
    const qCategory = searchParams.get("category") || searchParams.get("type");
    const qSearch = searchParams.get("search");

    if (qContinent) setSelectedContinent(qContinent);
    if (qCategory) setSelectedType(qCategory.toUpperCase());
    if (qSearch !== null && qSearch !== undefined) setSearchQuery(qSearch);
  }, [searchParams]);

  // Modals state
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Toggle compare destination
  const handleToggleCompare = (id) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((dId) => dId !== id);
      }
      if (prev.length >= 2) {
        return [prev[0], id];
      }
      return [...prev, id];
    });
  };

  const handleClearCompare = () => {
    setCompareList([]);
    setIsCompareModalOpen(false);
  };

  // Available countries filtered by selected continent
  const availableCountries = useMemo(() => {
    if (selectedContinent === "ALL") return countries;
    return countries.filter((c) => c.continentId === selectedContinent);
  }, [selectedContinent]);

  // Filtered destinations array
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      // 1. Continent Filter
      if (selectedContinent !== "ALL" && dest.continentId !== selectedContinent) {
        return false;
      }

      // 2. Country Filter
      if (selectedCountry !== "ALL" && dest.countryId !== selectedCountry) {
        return false;
      }

      // 3. Category / Type Filter
      if (selectedType !== "ALL") {
        const dType = (dest.type || dest.category || "").toUpperCase();
        const dCategory = (dest.category || "").toUpperCase();
        if (dType !== selectedType && dCategory !== selectedType) {
          return false;
        }
      }

      // 4. Search Query (name, country, region, description, highlights)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = dest.name.toLowerCase().includes(q);
        const countryMatch = dest.country.toLowerCase().includes(q);
        const regionMatch = (dest.region || "").toLowerCase().includes(q);
        const descMatch = (dest.description || "").toLowerCase().includes(q);
        const tagMatch = (dest.tagline || "").toLowerCase().includes(q);

        if (!nameMatch && !countryMatch && !regionMatch && !descMatch && !tagMatch) {
          return false;
        }
      }

      return true;
    });
  }, [selectedContinent, selectedCountry, selectedType, searchQuery]);

  const travelCategories = [
    "ALL",
    "NATURE",
    "CULTURE",
    "HERITAGE",
    "ADVENTURE",
    "BEACHES",
    "MOUNTAINS",
    "ARCHITECTURE"
  ];

  const handleResetFilters = () => {
    setSelectedContinent("ALL");
    setSelectedCountry("ALL");
    setSelectedType("ALL");
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      {/* 1. Header Section */}
      <div className="section-header">
        <span className="section-eyebrow">GLOBAL VIRTUAL EXPLORATION</span>
        <h1 className="section-title">WHERE WILL YOU GO?</h1>
        <p className="section-subtitle" style={{ marginBottom: "22px" }}>
          Step through coordinates into 360-degree virtual travel, sacred heritage, and natural wonders across the world.
        </p>

        {/* Surprise Me Serendipity Trigger */}
        <button
          className="btn-primary"
          onClick={() => setIsSurpriseOpen(true)}
          style={{ padding: "12px 28px", fontSize: "11px", letterSpacing: "1.8px" }}
          aria-label="Surprise me with a random destination"
        >
          ✦ SURPRISE ME &rarr;
        </button>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto 40px", padding: "0 4vw" }}>
        {/* 2. Continent Filter Strip */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold" }}>
              1. CONTINENT
            </span>
            <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              {selectedContinent === "ALL" ? "Showing all continents" : `Filtered by ${selectedContinent.toUpperCase()}`}
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px" }}>
            <button
              className={`filter-chip ${selectedContinent === "ALL" ? "active" : ""}`}
              onClick={() => {
                setSelectedContinent("ALL");
                setSelectedCountry("ALL");
              }}
            >
              🌍 ALL CONTINENTS ({destinations.length})
            </button>
            {continents.map((cont) => (
              <button
                key={cont.id}
                className={`filter-chip ${selectedContinent === cont.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedContinent(cont.id);
                  setSelectedCountry("ALL");
                }}
              >
                {cont.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Country Filter (Dynamic based on selected continent) */}
        <div style={{ marginBottom: "24px" }}>
          <span style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", textTransform: "uppercase", marginBottom: "10px", fontWeight: "bold", display: "block" }}>
            2. COUNTRY
          </span>
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "6px" }}>
            <button
              className={`filter-chip ${selectedCountry === "ALL" ? "active" : ""}`}
              onClick={() => setSelectedCountry("ALL")}
            >
              ALL COUNTRIES
            </button>
            {availableCountries.map((c) => (
              <button
                key={c.id}
                className={`filter-chip ${selectedCountry === c.id ? "active" : ""}`}
                onClick={() => setSelectedCountry(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Search Bar & Category Filters */}
        <div className="destination-controls" style={{ marginTop: "28px", marginBottom: "28px" }}>
          {/* Real-time Search Input */}
          <div className="destination-search-box">
            <input
              type="text"
              className="destination-search-input"
              placeholder="Search by destination name, country, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search destinations by name or country"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="category-filter-bar">
            {travelCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-chip ${selectedType === cat ? "active" : ""}`}
                onClick={() => setSelectedType(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Filter Status & Active Count */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
          <span>
            Showing <strong>{filteredDestinations.length}</strong> destination{filteredDestinations.length !== 1 ? "s" : ""}
            {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
          </span>

          {(selectedContinent !== "ALL" || selectedCountry !== "ALL" || selectedType !== "ALL" || searchQuery) && (
            <button
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "var(--accent-gold-light)",
                textDecoration: "underline",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
              onClick={handleResetFilters}
            >
              RESET ALL FILTERS &times;
            </button>
          )}
        </div>

        {/* 6. Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="destination-3d-grid">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isSaved={savedIds.includes(dest.id)}
                onToggleSave={onToggleSave}
                onCompare={handleToggleCompare}
                isCompared={compareList.includes(dest.id)}
              />
            ))}
          </div>
        ) : (
          <div className="journey-empty-state">
            <span className="section-eyebrow">NO COORDINATES MATCHED</span>
            <h3 style={{ margin: "12px 0 8px", fontSize: "24px" }}>NO DESTINATIONS FOUND</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              No destinations match your active filters. Try clearing your search keyword or switching continents.
            </p>
            <button className="btn-primary" onClick={handleResetFilters}>
              RESET FILTERS &rarr;
            </button>
          </div>
        )}
      </div>

      {/* Floating Comparison Tray */}
      {compareList.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(6, 12, 15, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1.5px solid var(--border-gold)",
            borderRadius: "var(--radius-full)",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 900,
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
            animation: "modalPop 0.3s ease"
          }}
        >
          <span style={{ fontSize: "12px", color: "var(--text-primary)" }}>
            ⚖ Compare (<strong>{compareList.length} / 2</strong> selected)
          </span>

          <button
            className="btn-primary"
            style={{ padding: "8px 18px", fontSize: "10px" }}
            onClick={() => setIsCompareModalOpen(true)}
            disabled={compareList.length < 1}
          >
            {compareList.length === 1 ? "SELECT 2ND DESTINATION" : "COMPARE NOW &rarr;"}
          </button>

          <button
            style={{ fontSize: "11px", color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
            onClick={handleClearCompare}
          >
            CLEAR &times;
          </button>
        </div>
      )}

      {/* Surprise Me Serendipity Modal */}
      <SurpriseMeModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        onToggleSave={onToggleSave}
        savedIds={savedIds}
      />

      {/* Destination Compare Modal */}
      <DestinationCompareModal
        destIdA={compareList[0] || "kashmir"}
        destIdB={compareList[1] || (compareList[0] === "paris" ? "tokyo" : "paris")}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onClear={handleClearCompare}
      />
    </main>
  );
}

export default Explore;
