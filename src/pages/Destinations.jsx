import { useState, useMemo } from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

/**
 * Destinations Page (Evaluation-I)
 * Dedicated Destination Catalog & Discovery Page with category filter chips and real-time search.
 * Demonstrates: useState, useMemo, array filter/map, lifting state for favorites.
 */
export function Destinations({ savedIds = [], onToggleSave }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", "MOUNTAINS", "BEACHES", "ADVENTURE", "CULTURE", "NATURE"];

  // Filtered destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchCat = activeCategory === "ALL" || dest.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.region.toLowerCase().includes(q) ||
        dest.tagline.toLowerCase().includes(q) ||
        dest.description.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="destinations-section" style={{ paddingTop: "120px", minHeight: "85vh" }}>
      {/* Header */}
      <div className="section-header">
        <span className="section-eyebrow">DESTINATION DISCOVERY</span>
        <h1 className="section-title">WHERE WILL YOU GO?</h1>
        <p className="section-subtitle">
          Every place has a story. What will be yours? Discover timeless realms across mountain peaks, desert fortresses, and crystal waterways.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="destination-controls" style={{ maxWidth: "1200px", margin: "0 auto 40px" }}>
        <div className="destination-search-box">
          <input
            type="text"
            className="destination-search-input"
            placeholder="Search Kashmir, Mountains, Culture, Beaches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search destinations"
          />
        </div>

        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Destination Cards Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="destination-3d-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {filteredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSaved={savedIds.includes(dest.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <div className="journey-empty-state">
          <span className="section-eyebrow">NO MATCHES FOUND</span>
          <h3 style={{ margin: "12px 0 8px" }}>No destinations match "{searchQuery}"</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
            Try adjusting your search terms or reset the filter category.
          </p>
          <button
            className="btn-secondary"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("ALL");
            }}
          >
            RESET DISCOVERY FILTERS
          </button>
        </div>
      )}
    </main>
  );
}

export default Destinations;
