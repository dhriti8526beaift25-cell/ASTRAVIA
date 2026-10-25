import { useState, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * DestinationCard Component
 * Interactive 3D tilt card with favorite save toggle and destination comparison trigger.
 */
export function DestinationCard({
  destination,
  isSaved,
  onToggleSave,
  onCompare,
  isCompared = false
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D Perspective Tilt calculation using mouse coordinates
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="destination-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <article
        ref={cardRef}
        className="destination-card-3d"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Background Image */}
        <div
          className="card-bg-image"
          style={{ backgroundImage: `url(${destination.image})` }}
        />
        <div className="card-gradient-scrim" />

        {/* Top Badges */}
        <div className="card-top-badges">
          <span className="card-category-badge">{destination.continent || destination.category}</span>
          <div style={{ display: "flex", gap: "6px" }}>
            {onCompare && (
              <button
                className="card-favorite-btn"
                style={{
                  color: isCompared ? "var(--accent-gold-light)" : "var(--text-secondary)",
                  borderColor: isCompared ? "var(--accent-gold-light)" : "var(--border-subtle)",
                  background: isCompared ? "rgba(197, 162, 106, 0.25)" : "rgba(6, 12, 15, 0.8)",
                  fontSize: "12px"
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onCompare(destination.id);
                }}
                title={isCompared ? "Remove from comparison" : "Compare this destination"}
              >
                ⚖
              </button>
            )}

            <button
              className={`card-favorite-btn ${isSaved ? "saved" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onToggleSave) {
                  onToggleSave(destination.id);
                }
              }}
              title={isSaved ? "Remove from My Journey" : "Save to My Journey"}
              aria-label={isSaved ? "Remove from favorites" : "Add to favorites"}
            >
              {isSaved ? "♥" : "♡"}
            </button>
          </div>
        </div>

        {/* Card Content with 3D Depth */}
        <div className="card-body-content">
          <p className="card-region-label">{destination.country} &bull; {destination.region}</p>
          <h3 className="card-destination-title">{destination.name}</h3>
          <p className="card-destination-desc">{destination.tagline}</p>

          <div className="card-meta-row">
            <span>⏳ {destination.duration}</span>
            <span>☀️ {destination.bestTime}</span>
          </div>

          <Link to={`/destination/${destination.id}`} className="card-action-btn">
            EXPLORE DESTINATION &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
}

export default DestinationCard;
