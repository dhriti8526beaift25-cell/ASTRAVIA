import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import ExplorerPassport from "../components/ExplorerPassport";
import destinations from "../data/destinations";

/**
 * MyJourney Page
 * Personalized travel dashboard showing Saved Expeditions,
 * Explorer Quiz Certifications, and the official Explorer Passport.
 */
export function MyJourney({ savedIds = [], onToggleSave }) {
  const [quizScores, setQuizScores] = useState({});
  const [savedItineraries, setSavedItineraries] = useState(() => {
    try {
      const data = localStorage.getItem("astravia_saved_itineraries");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      const scores = localStorage.getItem("astravia_quiz_scores");
      if (scores) setQuizScores(JSON.parse(scores));
    } catch {
      setQuizScores({});
    }
  }, []);

  const handleDeleteItinerary = (id) => {
    const updated = savedItineraries.filter((it) => it.id !== id);
    setSavedItineraries(updated);
    try {
      localStorage.setItem("astravia_saved_itineraries", JSON.stringify(updated));
    } catch (err) {
      console.warn("Error deleting itinerary from storage:", err);
    }
  };

  const savedDestinations = destinations.filter((d) => savedIds.includes(d.id));

  return (
    <main className="my-journey-section" style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <span className="section-eyebrow">PERSONAL EXPEDITION DASHBOARD</span>
        <h1 className="section-title">MY JOURNEY</h1>
        <p className="section-subtitle">
          Track your bookmarked worlds, custom itineraries, verified passport stamps, and earned explorer badges.
        </p>
      </div>

      {/* Explorer Stats Summary Bar */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 40px", padding: "0 4vw" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "20px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
              SAVED WORLDS
            </span>
            <h3 style={{ fontSize: "28px", color: "var(--text-primary)", marginTop: "4px" }}>
              {savedDestinations.length} Destinations
            </h3>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "20px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
              SAVED ITINERARIES
            </span>
            <h3 style={{ fontSize: "28px", color: "var(--text-primary)", marginTop: "4px" }}>
              {savedItineraries.length} Expeditions
            </h3>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
                ITINERARY BUILDER
              </span>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                Ready to customize a plan?
              </p>
            </div>
            <Link to="/itinerary" className="btn-primary" style={{ padding: "8px 16px", fontSize: "10px" }}>
              PLAN TRIP &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 1. Saved Destinations Shelf */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 4vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", letterSpacing: "2px" }}>
            SAVED DESTINATIONS ({savedDestinations.length})
          </h2>
          {savedDestinations.length > 0 && (
            <Link to="/explore" style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold-light)" }}>
              + EXPLORE MORE DESTINATIONS
            </Link>
          )}
        </div>

        {savedDestinations.length > 0 ? (
          <div className="destination-3d-grid">
            {savedDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isSaved={true}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="journey-empty-state">
            <span className="section-eyebrow">EMPTY DESTINATIONS QUEUE</span>
            <h3 style={{ margin: "10px 0", fontSize: "24px" }}>NO SAVED DESTINATIONS YET</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              You haven't bookmarked any worlds yet. Click the heart button (♡) on any destination card to save your travels here.
            </p>
            <Link to="/explore" className="btn-primary">
              EXPLORE DESTINATIONS &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* 2. Saved Itineraries Shelf (Requirement 8) */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 4vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", letterSpacing: "2px" }}>
            MY SAVED ITINERARIES ({savedItineraries.length})
          </h2>
          <Link to="/itinerary" style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold-light)" }}>
            + CREATE NEW ITINERARY
          </Link>
        </div>

        {savedItineraries.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {savedItineraries.map((it) => (
              <article
                key={it.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: "bold" }}>
                    {it.destinationName || "GLOBAL"} &bull; {it.durationDays} DAYS
                  </span>
                  <button
                    onClick={() => handleDeleteItinerary(it.id)}
                    style={{ background: "none", border: "none", color: "#ff5252", fontSize: "14px", cursor: "pointer" }}
                    title="Delete itinerary"
                    aria-label="Delete saved itinerary"
                  >
                    🗑
                  </button>
                </div>

                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--text-primary)", margin: "0 0 8px" }}>
                  {it.name}
                </h3>

                <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", marginBottom: "16px", flex: 1 }}>
                  Departure: <strong>{it.startDate || "Flexible"}</strong> &bull; Total Activities: <strong>{it.activitiesCount || 0}</strong> &bull; Pace: {it.travelStyle || "Balanced"}
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    to={`/itinerary?edit=${it.id}`}
                    className="card-action-btn"
                    style={{ flex: 1, textAlign: "center", fontSize: "10px" }}
                  >
                    EDIT IN PLANNER &rarr;
                  </Link>
                  {it.destinationId && (
                    <Link
                      to={`/journey/${it.destinationId}`}
                      className="card-action-btn"
                      style={{ flex: 1, textAlign: "center", fontSize: "10px", background: "var(--accent-gold)", color: "#060c0e" }}
                    >
                      360° TOUR
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="journey-empty-state">
            <span className="section-eyebrow">NO ITINERARIES SAVED</span>
            <h3 style={{ margin: "10px 0", fontSize: "24px" }}>NO CUSTOM EXPEDITIONS YET</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              Plan your travel days, add signature places, and save your custom itineraries to view them here anytime.
            </p>
            <Link to="/itinerary" className="btn-primary">
              CREATE YOUR FIRST ITINERARY &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* 3. Official Explorer Passport */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 4vw" }}>
        <ExplorerPassport />
      </div>

      {/* 3. Explorer Quiz Certifications */}
      {Object.keys(quizScores).length > 0 && (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", letterSpacing: "2px", marginBottom: "20px" }}>
            EXPLORER QUIZ CERTIFICATIONS
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {Object.entries(quizScores).map(([destId, item]) => {
              const destObj = destinations.find((d) => d.id === destId);
              return (
                <div
                  key={destId}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-gold)",
                    borderRadius: "var(--radius-md)",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                  }}
                >
                  <div style={{ fontSize: "36px" }}>🏆</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase" }}>
                      {item.date || "Completed"}
                    </p>
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", margin: "2px 0 4px" }}>
                      {destObj?.name || destId.toUpperCase()}
                    </h4>
                    <p style={{ fontSize: "12.5px", color: "var(--accent-gold-light)", fontWeight: "bold" }}>
                      Score: {item.score} / {item.total || 5}
                    </p>
                  </div>
                  <Link
                    to={`/virtual-journey/${destId}`}
                    className="btn-secondary"
                    style={{ padding: "6px 12px", fontSize: "9px" }}
                  >
                    RE-ENTER
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}

export default MyJourney;