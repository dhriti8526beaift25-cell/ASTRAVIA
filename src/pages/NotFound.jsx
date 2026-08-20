import { Link } from "react-router-dom";

/**
 * NotFound Page (Evaluation-I)
 * Custom 404 route component.
 * Demonstrates: React Router 404 handling, Semantic HTML, CSS Glassmorphism.
 */
export function NotFound() {
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
      <span className="section-eyebrow">404 &bull; COORDINATES UNKNOWN</span>
      <h1 className="section-title" style={{ fontSize: "clamp(32px, 5vw, 60px)", margin: "16px 0" }}>
        LOST BEYOND THE BOUNDARIES?
      </h1>
      <p style={{ color: "var(--text-secondary)", maxWidth: "480px", marginBottom: "32px", fontSize: "14px" }}>
        The coordinates you seek have faded into the Himalayan mist. Return to familiar horizons.
      </p>
      <Link to="/" className="btn-primary">
        RETURN TO ASTRAVIA &rarr;
      </Link>
    </main>
  );
}

export default NotFound;
