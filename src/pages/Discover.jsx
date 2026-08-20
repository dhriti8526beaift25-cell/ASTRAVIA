import { useState, useMemo } from "react";
import DestinationCard from "../components/DestinationCard";
import SurpriseMeModal from "../components/SurpriseMeModal";
import DestinationCompareModal from "../components/DestinationCompareModal";
import destinations, { continents, countries } from "../data/destinations";

/**
 * Discover Page (Global Discovery Hub)
 * Hierarchical world explorer: Continent -> Country -> Destination,
 * with Surprise Me serendipity trigger and Destination Comparison tray.
 */
export function Discover({ savedIds = [], onToggleSave }) {
  const [selectedContinent, setSelectedContinent] = useState("ALL");
  const [selectedCountry, setSelectedCountry] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

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
        // Replace second
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

  // Filtered destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      if (selectedContinent !== "ALL" && dest.continentId !== selectedContinent) return false;
      if (selectedCountry !== "ALL" && dest.countryId !== selectedCountry) return false;
      if (selectedType !== "ALL") {
        const destType = (dest.type || dest.category || "").toUpperCase();
        if (destType !== selectedType.toUpperCase() && (dest.category || "").toUpperCase() !== selectedType.toUpperCase()) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesCountry = dest.country.toLowerCase().includes(q);
        const matchesDesc = dest.description.toLowerCase().includes(q);
        const matchesRegion = dest.region?.toLowerCase().includes(q);
        if (!matchesName && !matchesCountry && !matchesDesc && !matchesRegion) return false;
      }
      return true;
    });
  }, [selectedContinent, selectedCountry, selectedType, searchQuery]);

  const travelTypes = [
    "ALL",
    "NATURE",
    "CULTURE",
    "HERITAGE",
    "ADVENTURE",
    "BEACHES",
    "MOUNTAINS",
    "ARCHITECTURE"
  ];

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      {/* Discovery Hub Header with Surprise Me Button */}
      <div className="section-header">
        <span className="section-eyebrow">GLOBAL VIRTUAL EXPEDITIONS</span>
        <h1 className="section-title">DISCOVER THE WORLD</h1>
        <p className="section-subtitle" style={{ marginBottom: "20px" }}>
          From Himalayan peaks to European streets, tropical islands and ancient pyramids — experience the world from anywhere.
        </p>

        {/* Surprise Me Serendipity Button */}
        <button
          className="btn-primary"
          onClick={() => setIsSurpriseOpen(true)}
          style={{ padding: "12px 28px", fontSize: "11px" }}
        >
          ✦ SURPRISE ME &rarr;
        </button>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto 40px", padding: "0 4vw" }}>
        {/* 1. Continents Selector Strip */}
        <div style={{ marginBottom: "28px" }}>
          <p style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", textTransform: "uppercase", marginBottom: "10px", fontWeight: "bold" }}>
            1. SELECT CONTINENT
          </p>
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

        {/* 2. Country Filter */}
        <div style={{ marginBottom: "28px" }}>
          <p style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", textTransform: "uppercase", marginBottom: "10px", fontWeight: "bold" }}>
            2. FILTER BY COUNTRY
          </p>
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

        {/* 3. Search & Experience Type Filter Row */}
        <div className="destination-controls" style={{ marginTop: "32px", marginBottom: "32px" }}>
          <div className="destination-search-box">
            <input
              type="text"
              className="destination-search-input"
              placeholder="Search destination, city, country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filter-bar">
            {travelTypes.map((type) => (
              <button
                key={type}
                className={`filter-chip ${selectedType === type ? "active" : ""}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filter Summary */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", fontSize: "12.5px", color: "var(--text-secondary)" }}>
          <span>
            Displaying <strong>{filteredDestinations.length}</strong> world destination{filteredDestinations.length !== 1 ? "s" : ""}
          </span>
          {(selectedContinent !== "ALL" || selectedCountry !== "ALL" || selectedType !== "ALL" || searchQuery) && (
            <button
              style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textDecoration: "underline" }}
              onClick={() => {
                setSelectedContinent("ALL");
                setSelectedCountry("ALL");
                setSelectedType("ALL");
                setSearchQuery("");
              }}
            >
              RESET ALL FILTERS &times;
            </button>
          )}
        </div>

        {/* 3D Destination Cards Grid */}
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
            <span className="section-eyebrow">NO COORDINATES FOUND</span>
            <h3 style={{ margin: "12px 0 8px", fontSize: "24px" }}>NO MATCHING DESTINATIONS</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              No destinations match your current filter criteria. Try selecting another continent or clearing your search term.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                setSelectedContinent("ALL");
                setSelectedCountry("ALL");
                setSelectedType("ALL");
                setSearchQuery("");
              }}
            >
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
            style={{ fontSize: "11px", color: "var(--text-muted)", background: "none", border: "none" }}
            onClick={handleClearCompare}
          >
            CLEAR &times;
          </button>
        </div>
      )}

      {/* Surprise Me Modal */}
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

export default Discover;
