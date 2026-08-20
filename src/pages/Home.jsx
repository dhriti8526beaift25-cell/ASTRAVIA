import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import GlobalWorldMap from "../components/GlobalWorldMap";
import destinations, { continents } from "../data/destinations";

/**
 * Home Page (Global Virtual Tourism Portal)
 * Features world-centric hero, continent discovery carousel,
 * truly interactive SVG global world map with continental filters, and featured virtual tour portals.
 */
export function Home() {
  // Explicit spotlight destinations across diverse continents
  const spotlightIds = ["paris", "taj-mahal", "kashmir", "tokyo", "machu-picchu", "cairo"];
  const spotlightDestinations = spotlightIds
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <main>
      {/* 1. Fullscreen Global Cinematic Hero */}
      <Hero />

      {/* 2. Global Continents Discovery Strip */}
      <section style={{ padding: "90px 4vw", background: "var(--bg-void)" }}>
        <div className="section-header">
          <span className="section-eyebrow">CONTINENTS OF WONDER</span>
          <h2 className="section-title">EXPLORE BY CONTINENT</h2>
          <p className="section-subtitle">
            Navigate through ancient civilizations, alpine mountain summits, and pristine oceans across the globe.
          </p>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {continents.map((cont) => (
            <Link
              key={cont.id}
              to="/discover"
              className="experience-card"
              style={{ height: "340px" }}
            >
              <div
                className="experience-card-bg"
                style={{ backgroundImage: `url(${cont.image})` }}
              />
              <div className="experience-card-scrim" />

              <div className="experience-card-content">
                <span className="experience-count-tag">{cont.countryCount} COUNTRIES &bull; {cont.destinationCount} WORLDS</span>
                <h3 className="experience-name" style={{ fontSize: "24px" }}>{cont.name}</h3>
                <p className="experience-sub" style={{ marginBottom: "12px", fontSize: "11.5px", lineHeight: "1.4" }}>
                  {cont.tagline}
                </p>
                <span className="card-action-btn" style={{ padding: "8px 14px", fontSize: "9.5px", display: "inline-flex" }}>
                  DISCOVER &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Truly Global Interactive World Map */}
      <section className="map-section" style={{ background: "var(--bg-surface)", padding: "90px 4vw" }}>
        <div className="section-header">
          <span className="section-eyebrow">GLOBAL TELEPORTATION MATRIX</span>
          <h2 className="section-title">THE ASTRAVIA WORLD MAP</h2>
          <p className="section-subtitle">
            Filter by continent, click any glowing coordinate beacon to inspect regional intelligence, and launch a full 360° virtual tour.
          </p>
        </div>

        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <GlobalWorldMap />
        </div>
      </section>

      {/* 4. Global Spotlight Showcase */}
      <section style={{ padding: "80px 4vw 120px", background: "var(--bg-void)" }}>
        <div className="section-header">
          <span className="section-eyebrow">EXPEDITION SHOWCASE</span>
          <h2 className="section-title">GLOBAL VIRTUAL HIGHLIGHTS</h2>
          <p className="section-subtitle">
            Handpicked 360° panoramic destinations ready for instant virtual exploration.
          </p>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {spotlightDestinations.map((dest) => (
            <article key={dest.id} className="destination-card-3d" style={{ height: "420px", transform: "none" }}>
              <div className="card-bg-image" style={{ backgroundImage: `url(${dest.image})` }} />
              <div className="card-gradient-scrim" />
              <div className="card-top-badges">
                <span className="card-category-badge">{dest.continent}</span>
                <span className="card-category-badge" style={{ color: "var(--accent-gold-light)" }}>{dest.type || dest.category}</span>
              </div>
              <div className="card-body-content">
                <p className="card-region-label">{dest.country} &bull; {dest.region}</p>
                <h3 className="card-destination-title" style={{ fontSize: "24px" }}>{dest.name}</h3>
                <p className="card-destination-desc" style={{ marginBottom: "14px" }}>{dest.quote}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link to={`/destination/${dest.id}`} className="card-action-btn" style={{ flex: 1 }}>
                    OVERVIEW
                  </Link>
                  <Link to={`/virtual-journey/${dest.id}`} className="card-action-btn" style={{ flex: 1, background: "var(--accent-gold)", color: "#060c0e" }}>
                    360° TOUR &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="/discover" className="btn-primary">
            DISCOVER ALL GLOBAL DESTINATIONS &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;