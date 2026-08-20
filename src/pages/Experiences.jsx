import { useState } from "react";
import { Link } from "react-router-dom";
import destinations, { experiences, stories } from "../data/destinations";

/**
 * Experiences Page (Immersive Experiences Hub)
 * Unifies 360° Virtual Journeys, Virtual Museum & Artifacts, Travel Stories, and Dimensions.
 */
export function Experiences() {
  const [activeStory, setActiveStory] = useState(null);

  // Featured 360 virtual tours
  const featuredTours = destinations.slice(0, 6);

  // Museum artifacts aggregate
  const featuredArtifacts = destinations.flatMap((d) =>
    (d.gallery || []).map((art) => ({ ...art, destinationName: d.name, destinationId: d.id }))
  ).slice(0, 4);

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      {/* Header */}
      <div className="section-header">
        <span className="section-eyebrow">IMMERSIVE TRAVEL DIMENSIONS</span>
        <h1 className="section-title">VIRTUAL EXPERIENCES</h1>
        <p className="section-subtitle">
          Step beyond standard photography into 360° panoramic landscapes, digital museum artifacts, and editorial stories from across the globe.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "flex", flexDirection: "column", gap: "80px" }}>
        {/* 1. Featured 360° Virtual Journeys */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "28px" }}>
            <div>
              <span className="section-eyebrow" style={{ marginBottom: "6px" }}>360° PANORAMIC EXPEDITIONS</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px" }}>FEATURED VIRTUAL TOURS</h2>
            </div>
            <Link to="/discover" style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--accent-gold-light)" }}>
              ALL DESTINATIONS &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {featuredTours.map((t) => (
              <article key={t.id} className="destination-card-3d" style={{ height: "380px", transform: "none" }}>
                <div className="card-bg-image" style={{ backgroundImage: `url(${t.image})` }} />
                <div className="card-gradient-scrim" />
                <div className="card-top-badges">
                  <span className="card-category-badge">{t.continent}</span>
                  <span className="card-category-badge" style={{ color: "var(--accent-gold-light)" }}>360° TOUR</span>
                </div>
                <div className="card-body-content">
                  <p className="card-region-label">{t.country}</p>
                  <h3 className="card-destination-title" style={{ fontSize: "22px" }}>{t.name}</h3>
                  <p className="card-destination-desc" style={{ marginBottom: "14px" }}>{t.quote}</p>
                  <Link to={`/virtual-journey/${t.id}`} className="btn-primary" style={{ width: "100%", padding: "12px", fontSize: "10px" }}>
                    LAUNCH 360° TOUR &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 2. Curated Travel Dimensions */}
        <section>
          <div style={{ marginBottom: "28px" }}>
            <span className="section-eyebrow" style={{ marginBottom: "6px" }}>HANDCRAFTED MOTIFS</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px" }}>TRAVEL DIMENSIONS</h2>
          </div>

          <div className="experience-grid">
            {experiences.map((exp) => (
              <article key={exp.id} className="experience-card">
                <div className="experience-card-bg" style={{ backgroundImage: `url(${exp.image})` }} />
                <div className="experience-card-scrim" />
                <div className="experience-card-content">
                  <p className="experience-count-tag">{exp.count}</p>
                  <h3 className="experience-name">{exp.name}</h3>
                  <p className="experience-sub" style={{ marginBottom: "12px" }}>{exp.subtitle}</p>
                  <Link to="/discover" className="card-action-btn" style={{ padding: "8px 12px", fontSize: "9px" }}>
                    EXPLORE WORLDS &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Virtual Museum & Artifact Archive */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "28px" }}>
            <div>
              <span className="section-eyebrow" style={{ marginBottom: "6px" }}>CULTURAL EXHIBITION</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px" }}>VIRTUAL MUSEUM ARTIFACTS</h2>
            </div>
            <Link to="/museum" style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--accent-gold-light)" }}>
              ENTER FULL MUSEUM &rarr;
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {featuredArtifacts.map((art) => (
              <article key={art.id} className="story-card" style={{ background: "var(--bg-card)" }}>
                <div className="story-card-img" style={{ height: "180px" }}>
                  <img src={art.image} alt={art.title} />
                </div>
                <div className="story-card-body">
                  <div className="story-meta">
                    <span>{art.category}</span>
                    <span>{art.date}</span>
                  </div>
                  <h4 className="story-title" style={{ fontSize: "16px" }}>{art.title}</h4>
                  <p className="story-excerpt">{art.description}</p>
                  <Link to="/museum" className="story-read-link">
                    INSPECT CONTEXT &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Stories from the Road */}
        <section>
          <div style={{ marginBottom: "28px" }}>
            <span className="section-eyebrow" style={{ marginBottom: "6px" }}>EDITORIAL TRAVELOGUES</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px" }}>STORIES FROM THE ROAD</h2>
          </div>

          <div className="stories-grid">
            {stories.map((story) => (
              <article
                key={story.id}
                className="story-card"
                onClick={() => setActiveStory(story)}
              >
                <div className="story-card-img">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-card-body">
                  <div className="story-meta">
                    <span>{story.location}</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-excerpt">{story.excerpt}</p>
                  <span className="story-read-link">
                    READ ARTICLE &bull; By {story.author} &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
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
                <p>{activeStory.excerpt}</p>
                <p>
                  Travel teaches us that boundaries exist primarily on maps. In real life, mountains dissolve into clouds, ocean currents connect distant archipelagos, and ancient stone citadels speak the universal language of human wonder.
                </p>
                <p>
                  Astravia invites you to transcend physical limitations and immerse yourself in the living stories of our planet.
                </p>
              </div>

              <div style={{ marginTop: "28px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link
                  to={`/destination/${activeStory.destinationId}`}
                  className="btn-primary"
                  style={{ padding: "10px 20px", fontSize: "10px" }}
                >
                  EXPLORE DESTINATION &rarr;
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

export default Experiences;
