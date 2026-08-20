import { useState } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

/**
 * VirtualMuseumPage Component
 * Digital Museum & Artifact Gallery showcasing cultural artifacts, architecture, art, and historical objects.
 * Features full artifact inspection modal with historical/cultural context.
 */
export function VirtualMuseumPage() {
  const [activeArtifact, setActiveArtifact] = useState(null);
  const [selectedDestFilter, setSelectedDestFilter] = useState("ALL");

  // Collect all artifacts across destinations
  const allArtifacts = destinations.flatMap((dest) =>
    (dest.gallery || []).map((item) => ({
      ...item,
      destinationName: dest.name,
      destinationId: dest.id
    }))
  );

  const filteredArtifacts = selectedDestFilter === "ALL"
    ? allArtifacts
    : allArtifacts.filter((a) => a.destinationId === selectedDestFilter);

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <span className="section-eyebrow">DIGITAL EXHIBITION ARCHIVE</span>
        <h1 className="section-title">VIRTUAL MUSEUM &amp; ARTIFACT GALLERY</h1>
        <p className="section-subtitle">
          Explore sacred relics, architectural wonders, royal textiles, and hand-forged historical objects preserved across centuries.
        </p>
      </div>

      {/* Destination Filter Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "40px", padding: "0 4vw" }}>
        <button
          className={`filter-chip ${selectedDestFilter === "ALL" ? "active" : ""}`}
          onClick={() => setSelectedDestFilter("ALL")}
        >
          ALL COLLECTIONS ({allArtifacts.length})
        </button>
        {destinations.map((d) => (
          <button
            key={d.id}
            className={`filter-chip ${selectedDestFilter === d.id ? "active" : ""}`}
            onClick={() => setSelectedDestFilter(d.id)}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Artifact Gallery Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
        {filteredArtifacts.map((artifact) => (
          <article
            key={artifact.id}
            className="story-card"
            style={{ cursor: "pointer" }}
            onClick={() => setActiveArtifact(artifact)}
          >
            <div className="story-card-img" style={{ height: "220px" }}>
              <img src={artifact.image} alt={artifact.title} />
            </div>
            <div className="story-card-body">
              <div className="story-meta">
                <span>{artifact.category}</span>
                <span>{artifact.date}</span>
              </div>
              <h3 className="story-title" style={{ fontSize: "20px" }}>{artifact.title}</h3>
              <p className="story-excerpt">{artifact.description}</p>
              <span className="story-read-link" style={{ marginTop: "8px" }}>
                INSPECT ARTIFACT CONTEXT &rarr;
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Artifact Context Lightbox Modal */}
      {activeArtifact && (
        <div className="hotspot-modal-backdrop" onClick={() => setActiveArtifact(null)}>
          <div
            className="hotspot-modal-card"
            style={{ maxWidth: "650px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-media-header" style={{ height: "260px" }}>
              <img src={activeArtifact.image} alt={activeArtifact.title} />
              <button
                className="modal-close-btn"
                onClick={() => setActiveArtifact(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="modal-content-body">
              <div className="story-meta" style={{ marginBottom: "8px" }}>
                <span>{activeArtifact.category} &bull; {activeArtifact.date}</span>
                <span>Provenance: {activeArtifact.destinationName}</span>
              </div>
              <h2 className="modal-title">{activeArtifact.title}</h2>
              <p className="modal-description" style={{ marginBottom: "16px" }}>{activeArtifact.description}</p>

              {activeArtifact.context && (
                <div className="modal-fact-box" style={{ marginBottom: "20px" }}>
                  <strong>HISTORICAL &amp; CULTURAL CONTEXT:</strong> {activeArtifact.context}
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link
                  to={`/destination/${activeArtifact.destinationId}`}
                  className="btn-primary"
                  style={{ padding: "10px 20px", fontSize: "10px" }}
                >
                  EXPLORE {activeArtifact.destinationName} &rarr;
                </Link>
                <button
                  className="btn-secondary"
                  style={{ padding: "10px 20px", fontSize: "10px" }}
                  onClick={() => setActiveArtifact(null)}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default VirtualMuseumPage;
