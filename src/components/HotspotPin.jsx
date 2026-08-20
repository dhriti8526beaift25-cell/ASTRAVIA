/**
 * HotspotPin Component
 * Interactive landmark beacon inside panoramic environment with discovered state.
 */
export function HotspotPin({ hotspot, isDiscovered = false, onClick }) {
  return (
    <div
      className="hotspot-marker"
      style={{
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(hotspot);
      }}
      title={`Discover ${hotspot.title}`}
    >
      <div className="hotspot-beacon">
        <div className="hotspot-pulse-ring" style={{ borderColor: isDiscovered ? "#66bb6a" : "var(--accent-gold-light)" }}></div>
        <div className="hotspot-dot" style={{ background: isDiscovered ? "#66bb6a" : "var(--accent-gold-light)" }}></div>
      </div>
      <span className="hotspot-label-tag" style={{ borderColor: isDiscovered ? "rgba(102, 187, 106, 0.4)" : "var(--border-gold)" }}>
        {isDiscovered ? "✓ " : "● "} {hotspot.title}
      </span>
    </div>
  );
}

export default HotspotPin;
