import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations";

/**
 * ExplorerPassport Component
 * Digital Travel Passport featuring verified stamps for completed virtual journeys,
 * continent discovery counters, and automatically unlocked achievement badges.
 */
export function ExplorerPassport() {
  const [stamps, setStamps] = useState({});
  const [quizScores, setQuizScores] = useState({});

  useEffect(() => {
    try {
      const savedStamps = JSON.parse(localStorage.getItem("astravia_passport_stamps") || "{}");
      const savedScores = JSON.parse(localStorage.getItem("astravia_quiz_scores") || "{}");

      // Default demo stamps if brand new user
      if (Object.keys(savedStamps).length === 0) {
        const initialStamps = {
          paris: { date: "15 Oct 2025", verified: true },
          kashmir: { date: "22 Nov 2025", verified: true },
          tokyo: { date: "10 Jan 2026", verified: true }
        };
        localStorage.setItem("astravia_passport_stamps", JSON.stringify(initialStamps));
        setStamps(initialStamps);
      } else {
        setStamps(savedStamps);
      }

      setQuizScores(savedScores);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Compute stats
  const exploredDestIds = Object.keys(stamps);
  const exploredDests = destinations.filter((d) => exploredDestIds.includes(d.id));

  const continentsDiscovered = useMemo(() => {
    const contSet = new Set(exploredDests.map((d) => d.continentId || d.continent?.toLowerCase()));
    return contSet.size || 1;
  }, [exploredDests]);

  const totalScores = Object.values(quizScores);
  const avgScorePercent = totalScores.length > 0
    ? Math.round((totalScores.reduce((acc, curr) => acc + (curr.score / (curr.total || 5)), 0) / totalScores.length) * 100)
    : 85;

  // Achievement Badges evaluation
  const achievements = [
    {
      id: "mountain-explorer",
      icon: "🏔️",
      title: "Mountain Explorer",
      desc: "Complete 2+ alpine & mountain expeditions",
      unlocked: exploredDests.filter((d) => d.category === "MOUNTAINS" || d.type === "Nature").length >= 2
    },
    {
      id: "ocean-wanderer",
      icon: "🌊",
      title: "Ocean Wanderer",
      desc: "Discover coastal, beach, or aquatic realms",
      unlocked: exploredDests.some((d) => d.category === "BEACHES" || d.type === "Beach")
    },
    {
      id: "culture-seeker",
      icon: "🏛️",
      title: "Culture Seeker",
      desc: "Explore 2+ historical & classical art worlds",
      unlocked: exploredDests.filter((d) => d.category === "HERITAGE" || d.category === "CULTURE").length >= 2
    },
    {
      id: "nature-lover",
      icon: "🌿",
      title: "Nature Lover",
      desc: "Explore pristine waterfalls, lakes, or rainforests",
      unlocked: exploredDests.some((d) => d.type === "Nature")
    },
    {
      id: "global-explorer",
      icon: "🌍",
      title: "Global Explorer",
      desc: "Discovered destinations across 3+ continents",
      unlocked: continentsDiscovered >= 3
    },
    {
      id: "virtual-voyager",
      icon: "🥽",
      title: "Virtual Voyager",
      desc: "Completed 3+ interactive 360° virtual tours",
      unlocked: exploredDestIds.length >= 3
    },
    {
      id: "master-pathfinder",
      icon: "📸",
      title: "Master Pathfinder",
      desc: "Scored 100% on any discovery quiz challenge",
      unlocked: Object.values(quizScores).some((q) => q.score === (q.total || 5))
    }
  ];

  const countryFlags = {
    india: "🇮🇳",
    france: "🇫🇷",
    japan: "🇯🇵",
    peru: "🇵🇪",
    egypt: "🇪🇬",
    italy: "🇮🇹",
    "united-states": "🇺🇸",
    greece: "🇬🇷",
    uae: "🇦🇪"
  };

  return (
    <section className="passport-section" style={{ marginTop: "40px" }}>
      {/* Passport Book Container */}
      <div
        className="passport-book"
        style={{
          background: "linear-gradient(145deg, #091316 0%, #04090b 100%)",
          border: "1.5px solid var(--border-gold)",
          borderRadius: "var(--radius-lg)",
          padding: "36px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.85), inset 0 0 30px rgba(197, 162, 106, 0.08)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Subtle Background Watermark Stamp */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "-40px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "2px dashed rgba(197, 162, 106, 0.08)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            letterSpacing: "4px",
            color: "rgba(197, 162, 106, 0.12)",
            transform: "rotate(-25deg)"
          }}
        >
          ★ ASTRAVIA OFFICIAL EXPEDITION SEAL ★
        </div>

        {/* Passport Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "24px", marginBottom: "32px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span style={{ fontSize: "24px" }}>🛂</span>
              <span className="section-eyebrow" style={{ margin: 0 }}>ASTRAVIA DIGITAL TRAVEL PASSPORT</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", letterSpacing: "3px", color: "var(--text-primary)" }}>
              EXPLORER PASSPORT &bull; CITIZEN OF EARTH
            </h2>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
              Official verification log for completed 360° virtual tours, discovery milestones, and earned expedition seals.
            </p>
          </div>

          <div style={{ background: "rgba(197, 162, 106, 0.12)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-sm)", padding: "10px 18px", textAlign: "right" }}>
            <span style={{ fontSize: "9.5px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
              PASSPORT STATUS
            </span>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)", margin: 0 }}>
              VERIFIED EXPLORER
            </p>
          </div>
        </div>

        {/* Passport 4-Column Statistics Ribbon */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
              Destinations Explored
            </span>
            <h3 style={{ fontSize: "32px", color: "var(--text-primary)", marginTop: "4px" }}>
              {exploredDestIds.length}
            </h3>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
              Continents Discovered
            </span>
            <h3 style={{ fontSize: "32px", color: "var(--text-primary)", marginTop: "4px" }}>
              {continentsDiscovered} / 7
            </h3>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
              Virtual Tours Completed
            </span>
            <h3 style={{ fontSize: "32px", color: "var(--text-primary)", marginTop: "4px" }}>
              {exploredDestIds.length}
            </h3>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "16px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "1.5px", color: "var(--accent-gold-light)", textTransform: "uppercase" }}>
              Average Quiz Score
            </span>
            <h3 style={{ fontSize: "32px", color: "var(--accent-gold-light)", marginTop: "4px" }}>
              {avgScorePercent}%
            </h3>
          </div>
        </div>

        {/* 1. Digital Passport Stamps Grid */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", letterSpacing: "2px" }}>
              COLLECTED PASSPORT STAMPS
            </h3>
            <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              Complete 360° virtual tours &amp; quizzes to stamp your passport
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {destinations.map((dest) => {
              const stampInfo = stamps[dest.id];
              const isStamped = Boolean(stampInfo);
              const flag = countryFlags[dest.countryId] || "🌐";

              return (
                <div
                  key={dest.id}
                  style={{
                    background: isStamped ? "rgba(197, 162, 106, 0.08)" : "rgba(255, 255, 255, 0.02)",
                    border: isStamped ? "1.5px dashed var(--accent-gold)" : "1px dashed var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "18px",
                    position: "relative",
                    opacity: isStamped ? 1 : 0.45,
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <img
                      src={dest.image}
                      alt={dest.name}
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: isStamped ? "1.5px solid var(--accent-gold-light)" : "1px solid var(--border-subtle)",
                        filter: isStamped ? "none" : "grayscale(80%)"
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: "9px", letterSpacing: "1.5px", color: "var(--accent-gold)", textTransform: "uppercase" }}>
                        {flag} {dest.country} &bull; {dest.continent}
                      </span>
                      <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "var(--text-primary)", margin: "2px 0" }}>
                        {dest.name}
                      </h4>
                      <p style={{ fontSize: "10.5px", color: isStamped ? "var(--accent-gold-light)" : "var(--text-muted)" }}>
                        {isStamped ? `STAMPED: ${stampInfo.date || "Completed"}` : "UNEXPLORED"}
                      </p>
                    </div>
                  </div>

                  {isStamped ? (
                    <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(197, 162, 106, 0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "9px", letterSpacing: "1px", color: "#66bb6a", fontWeight: "bold" }}>
                        ✓ TOUR VERIFIED
                      </span>
                      <Link to={`/virtual-journey/${dest.id}`} style={{ fontSize: "9.5px", color: "var(--accent-gold-light)", letterSpacing: "1px" }}>
                        REVISIT 360° &rarr;
                      </Link>
                    </div>
                  ) : (
                    <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "flex-end" }}>
                      <Link to={`/virtual-journey/${dest.id}`} className="btn-secondary" style={{ padding: "4px 10px", fontSize: "9px" }}>
                        EARN STAMP &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Unlockable Achievement Badges */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", letterSpacing: "2px" }}>
              EXPEDITION ACHIEVEMENTS
            </h3>
            <span style={{ fontSize: "11px", color: "var(--accent-gold-light)" }}>
              Unlocked: {achievements.filter((a) => a.unlocked).length} / {achievements.length}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {achievements.map((ach) => (
              <div
                key={ach.id}
                style={{
                  background: ach.unlocked ? "rgba(197, 162, 106, 0.12)" : "rgba(255, 255, 255, 0.02)",
                  border: ach.unlocked ? "1px solid var(--border-gold)" : "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  opacity: ach.unlocked ? 1 : 0.45
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: ach.unlocked ? "rgba(197, 162, 106, 0.2)" : "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    filter: ach.unlocked ? "drop-shadow(0 0 8px var(--accent-gold))" : "grayscale(100%)"
                  }}
                >
                  {ach.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "var(--text-primary)" }}>
                      {ach.title}
                    </h4>
                    {ach.unlocked && (
                      <span style={{ fontSize: "10px", color: "var(--accent-gold-light)", fontWeight: "bold" }}>
                        UNLOCKED ★
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px", lineHeight: "1.4" }}>
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExplorerPassport;
