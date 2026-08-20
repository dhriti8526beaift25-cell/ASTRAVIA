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

  useEffect(() => {
    try {
      const scores = JSON.parse(localStorage.getItem("astravia_quiz_scores") || "{}");
      setQuizScores(scores);
    } catch (e) {}
  }, []);

  const savedDestinations = destinations.filter((d) => savedIds.includes(d.id));

  return (
    <main className="my-journey-section" style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <div className="section-header">
        <span className="section-eyebrow">PERSONAL EXPEDITION DASHBOARD</span>
        <h1 className="section-title">MY JOURNEY</h1>
        <p className="section-subtitle">
          Track your saved worlds, verified passport stamps, completed 360° virtual tours, and earned explorer badges.
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
              COMPLETED TOURS
            </span>
            <h3 style={{ fontSize: "28px", color: "var(--text-primary)", marginTop: "4px" }}>
              {Object.keys(quizScores).length || 3} Expeditions
            </h3>
          </div>

          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontSize: "10px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
                ITINERARY BUILDER
              </span>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                Ready to plan your trip?
              </p>
            </div>
            <Link to="/plan" className="btn-primary" style={{ padding: "8px 16px", fontSize: "10px" }}>
              PLAN &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 1. Saved Destinations Shelf */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 4vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", letterSpacing: "2px" }}>
            SAVED EXPEDITIONS ({savedDestinations.length})
          </h2>
          {savedDestinations.length > 0 && (
            <Link to="/discover" style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold-light)" }}>
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
            <span className="section-eyebrow">EMPTY EXPEDITION QUEUE</span>
            <h3 style={{ margin: "10px 0", fontSize: "24px" }}>YOUR JOURNEY IS EMPTY</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
              You haven't saved any destinations yet. Click the heart button (♡) on any destination card to bookmark your travels.
            </p>
            <Link to="/discover" className="btn-primary">
              EXPLORE DESTINATIONS &rarr;
            </Link>
          </div>
        )}
      </div>

      {/* 2. Official Explorer Passport */}
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