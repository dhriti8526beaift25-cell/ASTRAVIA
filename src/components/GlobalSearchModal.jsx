import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import destinations, { countries, regions, continents } from "../data/destinations";

/**
 * GlobalSearchModal Component
 * Search engine across Continents, Countries, Regions, Destinations & Landmarks.
 */
export function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search matches
  const matchedDestinations = trimmed
    ? destinations.filter((d) =>
        d.name.toLowerCase().includes(trimmed) ||
        d.country.toLowerCase().includes(trimmed) ||
        d.state?.toLowerCase().includes(trimmed) ||
        d.description.toLowerCase().includes(trimmed) ||
        d.category.toLowerCase().includes(trimmed) ||
        d.hotspots?.some((h) => h.title.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedCountries = trimmed
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.continentName?.toLowerCase().includes(trimmed) ||
        c.description.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedRegions = trimmed
    ? regions.filter((r) =>
        r.name.toLowerCase().includes(trimmed) ||
        r.capital?.toLowerCase().includes(trimmed) ||
        r.tag?.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = matchedDestinations.length + matchedCountries.length + matchedRegions.length;

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
    setQuery("");
  };

  return (
    <div className="hotspot-modal-backdrop" onClick={onClose}>
      <div
        className="hotspot-modal-card"
        style={{ maxWidth: "680px", maxHeight: "85vh", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ fontSize: "18px", color: "var(--accent-gold)" }}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search destination, country, region, landmark (e.g. Paris, Kashmir, Colosseum)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontSize: "15px",
              fontFamily: "var(--font-sans)"
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{ fontSize: "12px", color: "var(--text-muted)", padding: "4px 8px" }}
            >
              CLEAR
            </button>
          )}
          <button
            className="modal-close-btn"
            style={{ position: "static", width: "28px", height: "28px", fontSize: "16px" }}
            onClick={onClose}
            aria-label="Close search"
          >
            &times;
          </button>
        </div>

        {/* Results List */}
        <div style={{ overflowY: "auto", padding: "16px 24px", flex: 1, maxHeight: "60vh" }}>
          {!trimmed ? (
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--accent-gold)", marginBottom: "14px", textTransform: "uppercase" }}>
                POPULAR SEARCHES
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Kashmir", "Paris", "Tokyo", "Machu Picchu", "Cairo", "Rome", "Santorini", "Dubai"].map((term) => (
                  <button
                    key={term}
                    className="filter-chip"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", marginBottom: "8px" }}>
                No coordinates found for "{query}"
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Try searching for a continent, country, world city, or natural landmark.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Destinations */}
              {matchedDestinations.length > 0 && (
                <div>
                  <p style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", marginBottom: "10px", textTransform: "uppercase", fontWeight: "bold" }}>
                    DESTINATIONS ({matchedDestinations.length})
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {matchedDestinations.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => handleNavigate(`/destination/${d.id}`)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border-subtle)",
                          cursor: "pointer",
                          transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
                      >
                        <img
                          src={d.image}
                          alt={d.name}
                          style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", objectFit: "cover" }}
                        />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
                            {d.continent} &bull; {d.country}
                          </span>
                          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>
                            {d.name}
                          </h4>
                          <p style={{ fontSize: "11.5px", color: "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "380px" }}>
                            {d.tagline}
                          </p>
                        </div>
                        <span style={{ fontSize: "11px", color: "var(--accent-gold-light)", letterSpacing: "1px" }}>
                          EXPLORE &rarr;
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Countries */}
              {matchedCountries.length > 0 && (
                <div>
                  <p style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", marginBottom: "10px", textTransform: "uppercase", fontWeight: "bold" }}>
                    COUNTRIES ({matchedCountries.length})
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {matchedCountries.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleNavigate(`/country/${c.id}`)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border-subtle)",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
                            CONTINENT: {c.continentName}
                          </span>
                          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "var(--text-primary)" }}>
                            {c.name}
                          </h4>
                        </div>
                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                          {c.regionCount} Regions &rarr;
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GlobalSearchModal;
