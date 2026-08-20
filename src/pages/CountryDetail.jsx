import { useParams, Link } from "react-router-dom";
import destinations, { countries, regions } from "../data/destinations";

/**
 * CountryDetail Page
 * State/Region selection page within a country (Country -> State/Region -> Destination).
 * Strictly binds countryId to its regions and associated destinations.
 */
export function CountryDetail() {
  const { countryId } = useParams();

  const country = countries.find((c) => c.id === countryId);

  if (!country) {
    return (
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px"
        }}
      >
        <span className="section-eyebrow">404 • UNKNOWN COUNTRY</span>
        <h1 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", margin: "16px 0" }}>
          Country Not Found
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "480px", marginBottom: "32px", fontSize: "14px" }}>
          The country "{countryId}" does not exist in our global index.
        </p>
        <Link to="/countries" className="btn-primary">
          EXPLORE ALL COUNTRIES &rarr;
        </Link>
      </main>
    );
  }

  // Filter regions strictly by countryId
  const countryRegions = regions.filter((r) => r.countryId === country.id);

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <Link
          to="/countries"
          style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--accent-gold-light)", display: "inline-block", marginBottom: "12px" }}
        >
          &larr; ALL COUNTRIES
        </Link>
        <span className="section-eyebrow" style={{ display: "block" }}>{country.name} REGIONAL HIERARCHY</span>
        <h1 className="section-title">STATES &amp; PROVINCES</h1>
        <p className="section-subtitle">
          {country.description}
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
        {countryRegions.map((st) => {
          const dest = destinations.find((d) => d.id === st.destinationId);
          if (!dest) return null;

          return (
            <article key={st.id} className="destination-card-3d" style={{ height: "420px", transform: "none" }}>
              <div
                className="card-bg-image"
                style={{ backgroundImage: `url(${st.image || dest.image})` }}
              />
              <div className="card-gradient-scrim" />

              <div className="card-top-badges">
                <span className="card-category-badge">{st.tag || dest.category}</span>
              </div>

              <div className="card-body-content">
                <p className="card-region-label">Capital: {st.capital}</p>
                <h3 className="card-destination-title" style={{ fontSize: "22px" }}>{st.name}</h3>
                <p className="card-destination-desc" style={{ marginBottom: "14px" }}>
                  Destination: {dest.name} ({dest.tagline})
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Link to={`/destination/${dest.id}`} className="card-action-btn" style={{ flex: 1 }}>
                    OVERVIEW
                  </Link>
                  <Link to={`/virtual-journey/${dest.id}`} className="card-action-btn" style={{ flex: 1, background: "var(--accent-gold)", color: "#060c0e" }}>
                    VIRTUAL 360° &rarr;
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default CountryDetail;
