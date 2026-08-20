import { useState, useEffect } from "react";
import soundEngine from "../services/soundEngine";

/**
 * HotspotModal Component
 * Rich landmark discovery modal with photo, cultural details,
 * fascinating facts, and spoken audio narration.
 */
export function HotspotModal({ hotspot, onClose }) {
  const [isPlayingNarration, setIsPlayingNarration] = useState(false);

  useEffect(() => {
    return () => {
      soundEngine.stopNarration();
    };
  }, []);

  if (!hotspot) return null;

  const narrationText = hotspot.narration || `${hotspot.title}. ${hotspot.description} ${hotspot.fact || ""}`;

  const handleToggleNarration = () => {
    if (isPlayingNarration) {
      soundEngine.stopNarration();
      setIsPlayingNarration(false);
    } else {
      setIsPlayingNarration(true);
      soundEngine.speakNarration(narrationText, () => {
        setIsPlayingNarration(false);
      });
    }
  };

  const handleClose = () => {
    soundEngine.stopNarration();
    onClose();
  };

  return (
    <div className="hotspot-modal-backdrop" onClick={handleClose}>
      <div className="hotspot-modal-card" style={{ maxWidth: "540px" }} onClick={(e) => e.stopPropagation()}>
        {/* Media Header */}
        <div className="modal-media-header" style={{ height: "200px" }}>
          <img src={hotspot.image} alt={hotspot.title} />
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close discovery modal">
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="modal-content-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <p className="modal-category-tag" style={{ margin: 0 }}>
              {hotspot.category || "CULTURE & HERITAGE"}
            </p>

            {/* Audio Narration Action Button */}
            <button
              onClick={handleToggleNarration}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-gold)",
                background: isPlayingNarration ? "rgba(197, 162, 106, 0.3)" : "rgba(255, 255, 255, 0.05)",
                color: "var(--accent-gold-light)",
                fontSize: "10.5px",
                fontWeight: "bold",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              <span>{isPlayingNarration ? "⏹" : "▶"}</span>
              <span>{isPlayingNarration ? "STOP NARRATION" : "LISTEN TO NARRATION"}</span>
            </button>
          </div>

          <h3 className="modal-title" style={{ fontSize: "22px", marginBottom: "4px" }}>
            {hotspot.title}
          </h3>
          {hotspot.subtitle && (
            <p style={{ fontSize: "11.5px", color: "var(--accent-gold-light)", marginBottom: "12px" }}>
              {hotspot.subtitle}
            </p>
          )}

          <p className="modal-description">
            {hotspot.description}
          </p>

          {hotspot.fact && (
            <div className="modal-fact-box" style={{ marginTop: "16px" }}>
              <strong>DISCOVERY FACT:</strong> {hotspot.fact}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotspotModal;
