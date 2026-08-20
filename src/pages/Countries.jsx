import { Link } from "react-router-dom";
import { countries } from "../data/destinations";

/**
 * Countries Page
 * Country-level exploration page in the hierarchy: Countries -> States/Regions -> Destinations.
 */
export function Countries() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <span className="section-eyebrow">GLOBAL REALMS</span>
        <h1 className="section-title">EXPLORE COUNTRIES</h1>
        <p className="section-subtitle">
          Select a nation to discover its states, provinces, and iconic virtual travel worlds.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
        {countries.map((country) => (
          <article
            key={country.id}
            className="destination-card-3d"
            style={{ height: "460px", transform: "none" }}
          >
            <div
              className="card-bg-image"
              style={{ backgroundImage: `url(${country.image})` }}
            />
            <div className="card-gradient-scrim" />

            <div className="card-top-badges">
              <span className="card-category-badge">{country.regionCount}</span>
              <span className="card-category-badge" style={{ color: "var(--accent-gold-light)" }}>{country.destinationCount}</span>
            </div>

            <div className="card-body-content">
              <p className="card-region-label">{country.tagline}</p>
              <h2 className="card-destination-title" style={{ fontSize: "28px" }}>{country.name}</h2>
              <p className="card-destination-desc" style={{ marginBottom: "16px" }}>{country.description}</p>

              <Link to={`/country/${country.id}`} className="card-action-btn">
                EXPLORE REGIONS &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Countries;
