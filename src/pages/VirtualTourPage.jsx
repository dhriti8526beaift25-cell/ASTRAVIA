import { useParams, Link } from "react-router-dom";
import VirtualTour from "../components/VirtualTour";
import destinations from "../data/destinations";

/**
 * VirtualTourPage Component
 * Dedicated Immersive 360° Full-Screen Panoramic Exploration Realm.
 * Strictly binds to the route destination ID with graceful fallback.
 */
export function VirtualTourPage() {
  const { id } = useParams();

  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#030708",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "24px",
          color: "#fff"
        }}
      >
        <span className="section-eyebrow" style={{ color: "var(--accent-gold-light)" }}>
          404 • UNKNOWN REALM
        </span>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            margin: "12px 0 16px",
            color: "var(--text-primary)"
          }}
        >
          Virtual Destination Not Found
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "460px",
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "28px"
          }}
        >
          The coordinate "{id}" has not been mapped into the Astravia 360° Virtual Matrix. Select from our verified global destinations.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link to="/discover" className="btn-primary">
            EXPLORE ALL WORLDS &rarr;
          </Link>
          <Link to="/" className="btn-secondary">
            RETURN HOME
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#030708", position: "relative" }}>
      <VirtualTour key={destination.id} destination={destination} />
    </main>
  );
}

export default VirtualTourPage;
