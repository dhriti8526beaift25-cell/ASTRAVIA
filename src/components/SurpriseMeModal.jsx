import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

/**
 * SurpriseMeModal Component
 * Inspires exploration by algorithmically choosing a surprise world destination
 * with cinematic reveal animations and quick actions.
 */
export function SurpriseMeModal({ isOpen, onClose, onToggleSave, savedIds = [] }) {
  const [loading, setLoading] = useState(true);
  const [selectedDest, setSelectedDest] = useState(null);
  const [reason, setReason] = useState("");

  const reasonsList = [
    "Perfect match for travelers seeking profound serenity and scenic majesty.",
    "Selected for its peerless architectural heritage and world-class culinary soul.",
    "Curated for explorers who desire untamed natural wonders and mountain vistas.",
    "Chosen for its iconic coastal sunsets and timeless ancient traditions.",
    "Recommended for high-altitude stargazing and cosmic silence."
  ];

  const pickRandomDestination = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        const recent = JSON.parse(localStorage.getItem("astravia_recent_surprises") || "[]");
        const available = destinations.filter((d) => !recent.slice(-3).includes(d.id));
        const pool = available.length > 0 ? available : destinations;
        const randomDest = pool[Math.floor(Math.random() * pool.length)] || destinations.find((d) => d.id === "paris");

        const randomReason = reasonsList[Math.floor(Math.random() * reasonsList.length)];

        setSelectedDest(randomDest);
        setReason(randomReason);

        // Update recently suggested
        const updatedRecent = [...recent, randomDest.id].slice(-6);
        localStorage.setItem("astravia_recent_surprises", JSON.stringify(updatedRecent));
      } catch (e) {
        setSelectedDest(destinations.find((d) => d.id === "paris"));
      }
      setLoading(false);
    }, 650);
  };

  useEffect(() => {
    if (isOpen) {
      pickRandomDestination();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isSaved = selectedDest && savedIds.includes(selectedDest.id);

  return (
    <div className="hotspot-modal-backdrop" onClick={onClose}>
      <div
        className="hotspot-modal-card"
        style={{ maxWidth: "620px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {loading ? (
          <div style={{ padding: "80px 30px", textAlign: "center" }}>
            <div style={{ fontSize: "42px", animation: "hotspotPulse 1.2s infinite" }}>✨</div>
            <p className="modal-category-tag" style={{ marginTop: "16px" }}>PLANETARY TELEPORTATION</p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-primary)", margin: "8px 0" }}>
              Finding your next escape...
            </h3>
            <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
              Scanning world coordinates across 7 continents
            </p>
          </div>
        ) : selectedDest ? (
          <div>
            {/* Media Header */}
            <div className="modal-media-header" style={{ height: "240px" }}>
              <img src={selectedDest.image} alt={selectedDest.name} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(3,7,8,0.95) 100%)" }} />
              <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                &times;
              </button>
              <div style={{ position: "absolute", bottom: "16px", left: "20px" }}>
                <span className="card-category-badge">{selectedDest.continent}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "#fff", margin: "4px 0 0" }}>
                  {selectedDest.name}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="modal-content-body">
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--accent-gold-light)", marginBottom: "12px" }}>
                <span>📍 {selectedDest.country} &bull; {selectedDest.region}</span>
                <span>Best Time: {selectedDest.bestTime}</span>
              </div>

              <div className="modal-fact-box" style={{ marginBottom: "16px" }}>
                <strong>WHY THIS DESTINATION:</strong> {reason}
              </div>

              <p className="modal-description" style={{ marginBottom: "24px" }}>
                {selectedDest.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    to={`/destination/${selectedDest.id}`}
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: "center", fontSize: "10px" }}
                    onClick={onClose}
                  >
                    EXPLORE DESTINATION
                  </Link>
                  <Link
                    to={`/virtual-journey/${selectedDest.id}`}
                    className="btn-primary"
                    style={{ flex: 1, textAlign: "center", fontSize: "10px" }}
                    onClick={onClose}
                  >
                    BEGIN 360° JOURNEY &rarr;
                  </Link>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: "10px" }}
                    onClick={() => onToggleSave && onToggleSave(selectedDest.id)}
                  >
                    {isSaved ? "♥ SAVED TO MY JOURNEY" : "♡ SAVE DESTINATION"}
                  </button>
                  <button
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: "10px", borderColor: "var(--accent-gold-light)", color: "var(--accent-gold-light)" }}
                    onClick={pickRandomDestination}
                  >
                    ✦ SURPRISE ME AGAIN
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SurpriseMeModal;
