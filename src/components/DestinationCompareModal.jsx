import { useState } from "react";
import { Link } from "react-router-dom";
import destinations, { getComparisonData } from "../data/destinations";

/**
 * DestinationCompareModal Component
 * Compares any two global destinations side-by-side across ratings, budgets,
 * ideal seasons, adventure/culture scores, and virtual experiences.
 */
export function DestinationCompareModal({
  destIdA = "kashmir",
  destIdB = "paris",
  isOpen,
  onClose,
  onSelectA,
  onSelectB,
  onClear
}) {
  const [selectedA, setSelectedA] = useState(destIdA);
  const [selectedB, setSelectedB] = useState(destIdB);

  if (!isOpen) return null;

  const destA = destinations.find((d) => d.id === (destIdA || selectedA)) || destinations.find((d) => d.id === "kashmir");
  const destB = destinations.find((d) => d.id === (destIdB || selectedB)) || destinations.find((d) => d.id === "paris");

  const dataA = getComparisonData(destA);
  const dataB = getComparisonData(destB);

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  const handleSwitchA = (newId) => {
    if (newId === destB.id) return; // Prevent comparing with self
    setSelectedA(newId);
    if (onSelectA) onSelectA(newId);
  };

  const handleSwitchB = (newId) => {
    if (newId === destA.id) return; // Prevent comparing with self
    setSelectedB(newId);
    if (onSelectB) onSelectB(newId);
  };

  return (
    <div className="hotspot-modal-backdrop" onClick={onClose}>
      <div
        className="hotspot-modal-card"
        style={{ maxWidth: "900px", maxHeight: "90vh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{ padding: "24px", borderBottom: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <span className="modal-category-tag">EXPEDITION INTELLIGENCE</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--text-primary)" }}>
              COMPARE DESTINATIONS
            </h2>
          </div>
          <button className="modal-close-btn" style={{ position: "static" }} onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        {/* Destination Selectors & Visual Headers */}
        <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", borderBottom: "1px solid var(--border-subtle)" }}>
          {/* Destination A Card */}
          <div style={{ background: "rgba(6, 12, 15, 0.7)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                DESTINATION 1
              </label>
              <select
                className="form-select"
                value={destA.id}
                onChange={(e) => handleSwitchA(e.target.value)}
                style={{ padding: "8px 12px", fontSize: "12px" }}
              >
                {destinations.map((d) => (
                  <option key={d.id} value={d.id} disabled={d.id === destB.id}>
                    {d.name} &bull; {d.country}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ height: "140px", borderRadius: "var(--radius-sm)", overflow: "hidden", position: "relative" }}>
              <img src={destA.image} alt={destA.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(3,7,8,0.9) 100%)" }} />
              <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
                <span style={{ fontSize: "9px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
                  {destA.continent}
                </span>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#fff", margin: 0 }}>
                  {destA.name}
                </h4>
              </div>
            </div>
          </div>

          {/* Destination B Card */}
          <div style={{ background: "rgba(6, 12, 15, 0.7)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                DESTINATION 2
              </label>
              <select
                className="form-select"
                value={destB.id}
                onChange={(e) => handleSwitchB(e.target.value)}
                style={{ padding: "8px 12px", fontSize: "12px" }}
              >
                {destinations.map((d) => (
                  <option key={d.id} value={d.id} disabled={d.id === destA.id}>
                    {d.name} &bull; {d.country}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ height: "140px", borderRadius: "var(--radius-sm)", overflow: "hidden", position: "relative" }}>
              <img src={destB.image} alt={destB.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(3,7,8,0.9) 100%)" }} />
              <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
                <span style={{ fontSize: "9px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
                  {destB.continent}
                </span>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#fff", margin: 0 }}>
                  {destB.name}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Metrics Table */}
        <div style={{ padding: "24px" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: "1.5px solid var(--border-gold)" }}>
                  <th style={{ textAlign: "left", padding: "12px", color: "var(--text-muted)", fontSize: "10.5px", letterSpacing: "2px", textTransform: "uppercase" }}>
                    CRITERIA
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", color: "var(--accent-gold-light)", fontSize: "12px", letterSpacing: "1.5px" }}>
                    {destA.name}
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", color: "var(--accent-gold-light)", fontSize: "12px", letterSpacing: "1.5px" }}>
                    {destB.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Best For</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{dataA.bestFor}</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{dataB.bestFor}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Ideal Duration</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{destA.duration}</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{destB.duration}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Best Season</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{destA.bestTime}</td>
                  <td style={{ padding: "12px", color: "var(--text-primary)" }}>{destB.bestTime}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Estimated Budget</td>
                  <td style={{ padding: "12px", color: "var(--accent-gold)" }}>{dataA.budget} ({dataA.budget === '₹₹₹' ? 'High' : 'Moderate'})</td>
                  <td style={{ padding: "12px", color: "var(--accent-gold)" }}>{dataB.budget} ({dataB.budget === '₹₹₹' ? 'High' : 'Moderate'})</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Nature &amp; Scenic Landscapes</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataA.nature)}</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataB.nature)}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Adventure &amp; Trekking</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataA.adventure)}</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataB.adventure)}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Culture &amp; Art History</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataA.culture)}</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataB.culture)}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Relaxation &amp; Leisure</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataA.relaxation)}</td>
                  <td style={{ padding: "12px", color: "#ffd700" }}>{renderStars(dataB.relaxation)}</td>
                </tr>

                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "12px", color: "var(--text-muted)", fontWeight: "600" }}>360° Virtual Tour</td>
                  <td style={{ padding: "12px", color: "#66bb6a", fontWeight: "bold" }}>✓ Available</td>
                  <td style={{ padding: "12px", color: "#66bb6a", fontWeight: "bold" }}>✓ Available</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Action Footer */}
          <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <button
              className="btn-secondary"
              onClick={onClear}
              style={{ fontSize: "10px", padding: "10px 18px" }}
            >
              CLEAR COMPARISON
            </button>

            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                to={`/destination/${destA.id}`}
                className="btn-secondary"
                style={{ fontSize: "10px", padding: "10px 18px" }}
                onClick={onClose}
              >
                EXPLORE {destA.name} &rarr;
              </Link>
              <Link
                to={`/destination/${destB.id}`}
                className="btn-primary"
                style={{ fontSize: "10px", padding: "10px 18px" }}
                onClick={onClose}
              >
                EXPLORE {destB.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCompareModal;
