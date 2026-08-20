import { useState } from "react";
import { Link } from "react-router-dom";
import { stories } from "../data/destinations";

/**
 * Stories Page (Evaluation-I)
 * Dedicated Editorial Travel Stories Page with interactive article reader modal.
 * Demonstrates: useState for modal state, conditional rendering, array mapping, semantic HTML.
 */
export function Stories() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <span className="section-eyebrow">EDITORIAL TRAVELOGUES</span>
        <h1 className="section-title">STORIES FROM THE ROAD</h1>
        <p className="section-subtitle">
          Journeys penned by explorers, poets, and wanderers who surrendered to the road and uncovered timeless wonders.
        </p>
      </div>

      <div className="stories-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw" }}>
        {stories.map((story) => (
          <article
            key={story.id}
            className="story-card"
            onClick={() => setActiveStory(story)}
          >
            <div className="story-card-img">
              <img src={story.image} alt={story.title} loading="lazy" />
            </div>
            <div className="story-card-body">
              <div className="story-meta">
                <span>{story.location}</span>
                <span>{story.readTime}</span>
              </div>
              <h2 className="story-title">{story.title}</h2>
              <p className="story-excerpt">{story.excerpt}</p>
              <span className="story-read-link">
                READ ARTICLE &bull; By {story.author} &rarr;
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Story Reader Modal */}
      {activeStory && (
        <div className="hotspot-modal-backdrop" onClick={() => setActiveStory(null)}>
          <div
            className="hotspot-modal-card"
            style={{ maxWidth: "680px", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-media-header" style={{ height: "240px" }}>
              <img src={activeStory.image} alt={activeStory.title} />
              <button
                className="modal-close-btn"
                onClick={() => setActiveStory(null)}
                aria-label="Close story"
              >
                &times;
              </button>
            </div>

            <div className="modal-content-body">
              <div className="story-meta" style={{ marginBottom: "8px" }}>
                <span>{activeStory.location} &bull; {activeStory.readTime}</span>
                <span>Author: {activeStory.author}</span>
              </div>

              <h3 className="modal-title" style={{ fontSize: "26px", marginBottom: "8px" }}>
                {activeStory.title}
              </h3>
              <p style={{ color: "var(--accent-gold-light)", fontStyle: "italic", marginBottom: "20px" }}>
                "{activeStory.subtitle}"
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14.5px", lineHeight: "1.8", color: "var(--text-secondary)" }}>
                <p>
                  {activeStory.excerpt}
                </p>
                <p>
                  There is a cadence to travel that changes the moment you leave the paved highways behind. In this territory, silence is not merely an absence of sound—it is a living presence that resonates in every breath of alpine air and whispers through ancient forest canopies.
                </p>
                <p>
                  Astravia invites you not just to observe coordinates on a digital map, but to forge a deeper, lasting connection with the earth and the communities who hold its stories.
                </p>
              </div>

              <div style={{ marginTop: "28px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link
                  to={`/destination/${activeStory.destinationId}`}
                  className="btn-primary"
                  style={{ padding: "10px 20px", fontSize: "10px" }}
                >
                  EXPLORE {activeStory.destinationId.toUpperCase()} &rarr;
                </Link>
                <button
                  className="btn-secondary"
                  style={{ padding: "10px 20px", fontSize: "10px" }}
                  onClick={() => setActiveStory(null)}
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

export default Stories;
