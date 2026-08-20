import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import destinations, { continents } from "../data/destinations";

/**
 * GlobalWorldMap Component
 * Interactive World Map with accurate global continental coordinate mapping,
 * continent filter toggles, pulsing gold teleporters, and destination preview drawer.
 */
export function GlobalWorldMap({ onSelectDestination }) {
  const [selectedContinent, setSelectedContinent] = useState("ALL");
  const [activeDestination, setActiveDestination] = useState(
    destinations.find((d) => d.id === "paris") || destinations[0]
  );

  // Filtered map markers
  const visibleDestinations = useMemo(() => {
    if (selectedContinent === "ALL") return destinations;
    return destinations.filter((d) => d.continentId === selectedContinent);
  }, [selectedContinent]);

  // World coordinates mapping on a 1000x500 equirectangular SVG plane (0-100% X and Y)
  const getMarkerCoords = (dest) => {
    const coordsMap = {
      paris: { x: 49.5, y: 31.0 },
      rome: { x: 52.0, y: 35.5 },
      santorini: { x: 56.5, y: 39.0 },
      tokyo: { x: 88.0, y: 36.0 },
      "taj-mahal": { x: 72.0, y: 38.0 },
      kashmir: { x: 71.0, y: 34.0 },
      ladakh: { x: 72.5, y: 33.0 },
      rajasthan: { x: 71.5, y: 40.5 },
      kerala: { x: 72.0, y: 52.0 },
      meghalaya: { x: 76.5, y: 41.0 },
      goa: { x: 71.2, y: 48.5 },
      "machu-picchu": { x: 30.5, y: 64.0 },
      cairo: { x: 57.5, y: 40.0 },
      "new-york": { x: 26.5, y: 34.0 },
      dubai: { x: 63.5, y: 42.5 }
    };
    return coordsMap[dest.id] || { x: dest.coordinates?.x || 50, y: dest.coordinates?.y || 50 };
  };

  const handleMarkerClick = (dest) => {
    setActiveDestination(dest);
    if (onSelectDestination) onSelectDestination(dest);
  };

  return (
    <div className="global-map-wrapper">
      {/* Continent Filter Bar */}
      <div className="map-continent-filters">
        <button
          className={`filter-chip ${selectedContinent === "ALL" ? "active" : ""}`}
          onClick={() => setSelectedContinent("ALL")}
        >
          🌍 ALL WORLD ({destinations.length})
        </button>
        {continents.map((cont) => (
          <button
            key={cont.id}
            className={`filter-chip ${selectedContinent === cont.id ? "active" : ""}`}
            onClick={() => setSelectedContinent(cont.id)}
          >
            {cont.name}
          </button>
        ))}
      </div>

      {/* Global Interactive Canvas */}
      <div className="global-map-canvas">
        {/* World Grid & Continental Silhouette SVG */}
        <svg
          className="world-map-svg"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mapGridGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#081418" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#030708" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e6cb96" stopOpacity="1" />
              <stop offset="40%" stopColor="#c5a26a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#c5a26a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ocean Background */}
          <rect width="1000" height="500" fill="url(#mapGridGrad)" />

          {/* Latitude and Longitude Grid Lines */}
          <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="4 6">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(197, 162, 106, 0.15)" strokeWidth="1.5" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="200" y1="0" x2="200" y2="500" />
            <line x1="400" y1="0" x2="400" y2="500" />
            <line x1="600" y1="0" x2="600" y2="500" stroke="rgba(197, 162, 106, 0.15)" strokeWidth="1.5" />
            <line x1="800" y1="0" x2="800" y2="500" />
          </g>

          {/* Stylized Continental Silhouettes (High-Fidelity Simplified Paths) */}
          <g fill="rgba(197, 162, 106, 0.06)" stroke="rgba(197, 162, 106, 0.2)" strokeWidth="1.2">
            {/* North America */}
            <path d="M120,60 L240,40 L310,70 L340,110 L280,140 L260,190 L210,230 L160,250 L140,200 L110,140 L90,90 Z" />
            {/* Greenland */}
            <path d="M340,30 L410,25 L400,70 L350,65 Z" />
            {/* South America */}
            <path d="M240,260 L320,270 L360,320 L340,410 L280,470 L250,420 L230,320 Z" />
            {/* Europe */}
            <path d="M460,90 L560,80 L580,120 L550,170 L510,190 L460,180 L440,130 Z" />
            {/* Africa */}
            <path d="M460,190 L570,185 L610,250 L590,340 L540,420 L480,390 L440,290 L430,220 Z" />
            {/* Asia */}
            <path d="M570,70 L860,60 L920,110 L900,190 L850,220 L780,280 L700,280 L670,220 L580,170 Z" />
            {/* Indian Subcontinent */}
            <path d="M680,210 L750,220 L740,290 L690,310 L670,240 Z" fill="rgba(197, 162, 106, 0.09)" />
            {/* Japan */}
            <path d="M870,160 L890,170 L875,210 L860,190 Z" />
            {/* Australia */}
            <path d="M780,330 L880,320 L910,380 L870,440 L790,420 L760,370 Z" />
            {/* New Zealand */}
            <path d="M920,410 L940,420 L925,460 L910,445 Z" />
          </g>

          {/* Connecting Flight/Expedition Routes */}
          <g stroke="rgba(230, 203, 150, 0.25)" strokeWidth="1" strokeDasharray="3 4">
            <path d="M 265 170 Q 380 120 495 155" fill="none" />
            <path d="M 495 155 Q 600 130 710 170" fill="none" />
            <path d="M 710 170 Q 795 160 880 180" fill="none" />
            <path d="M 305 320 Q 400 230 495 155" fill="none" />
            <path d="M 575 200 Q 645 170 710 170" fill="none" />
          </g>
        </svg>

        {/* Interactive Glowing Teleportation Pins */}
        {visibleDestinations.map((dest) => {
          const coords = getMarkerCoords(dest);
          const isSelected = activeDestination?.id === dest.id;

          return (
            <div
              key={dest.id}
              className={`map-node ${isSelected ? "active" : ""}`}
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`
              }}
              onClick={() => handleMarkerClick(dest)}
              title={`${dest.name} (${dest.country})`}
            >
              <div className="map-node-pulse" />
              <div className="map-node-dot" />
              <span className="map-node-label">
                {dest.name}
              </span>
            </div>
          );
        })}

        {/* Active Destination Information Drawer Card */}
        {activeDestination && (
          <div className="map-info-drawer">
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "6px" }}>
              <span className="modal-category-tag" style={{ margin: 0 }}>
                {activeDestination.continent?.toUpperCase()} &bull; {activeDestination.country?.toUpperCase()}
              </span>
            </div>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "19px", color: "var(--text-primary)", margin: "4px 0 6px" }}>
              {activeDestination.name}
            </h3>

            <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: "1.45", marginBottom: "14px" }}>
              {activeDestination.tagline || activeDestination.quote}
            </p>

            <div style={{ display: "flex", gap: "8px" }}>
              <Link
                to={`/destination/${activeDestination.id}`}
                className="btn-secondary"
                style={{ padding: "7px 12px", fontSize: "9px", flex: 1, textAlign: "center" }}
              >
                OVERVIEW
              </Link>
              <Link
                to={`/virtual-journey/${activeDestination.id}`}
                className="btn-primary"
                style={{ padding: "7px 12px", fontSize: "9px", flex: 1, textAlign: "center" }}
              >
                360° TOUR &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GlobalWorldMap;
