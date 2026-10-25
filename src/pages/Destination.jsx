import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import destinations, { getBeforeYouGo, stories } from "../data/destinations";

/**
 * Destination Page (Global Detail Showcase)
 * Features global breadcrumb hierarchy, key travel stats ribbon,
 * practical "Before You Go" guide, museum artifacts, day-by-day itinerary, and virtual tour launcher.
 * Strictly binds to route destination ID.
 */
export function Destination({ savedIds = [], onToggleSave }) {
  const { id, destination: destParam } = useParams();
  const rawId = destParam || id || "";
  const targetId = rawId.toLowerCase().trim();

  const destination = destinations.find((d) => d.id.toLowerCase() === targetId);

  if (!destination) {
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
        <span className="section-eyebrow">404 • UNKNOWN DESTINATION</span>
        <h1 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)", margin: "16px 0" }}>
          Destination Not Found
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "480px", marginBottom: "32px", fontSize: "14px" }}>
          The destination "{rawId}" does not exist in our global index. Browse our catalog of global destinations.
        </p>
        <Link to="/explore" className="btn-primary">
          EXPLORE ALL DESTINATIONS &rarr;
        </Link>
      </main>
    );
  }

  const isSaved = savedIds.includes(destination.id);
  const beforeYouGo = getBeforeYouGo(destination);
  const matchedStory = stories ? stories.find((s) => s.destinationId === destination.id) : null;

  const breadcrumbItems = [
    { label: destination.continent || "Global", to: `/explore?continent=${destination.continentId || "asia"}` },
    { label: destination.country || "World", to: `/country/${destination.countryId || "india"}` },
    { label: destination.state || destination.region || "Region", to: "/explore" },
    { label: destination.name, to: null }
  ];

  return (
    <main className="destination-page-layout">
      {/* Destination Hero Header */}
      <section
        className="dest-detail-hero"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="dest-detail-scrim" />

        <div className="dest-hero-inner">
          <div className="dest-hero-main">
            {/* Global Breadcrumb Navigation */}
            <Breadcrumbs items={breadcrumbItems} />

            <h1 className="dest-hero-title">{destination.name}</h1>
            <p className="dest-hero-quote">"{destination.quote}"</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.7", maxWidth: "680px", marginBottom: "28px" }}>
              {destination.description}
            </p>

            {/* Key Stats Ribbon */}
            <div className="dest-stats-ribbon">
              <div className="stat-item">
                <span className="stat-label">Best Time</span>
                <span className="stat-val">{destination.bestTime}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Duration</span>
                <span className="stat-val">{destination.duration}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Experience</span>
                <span className="stat-val">{destination.idealFor}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Region</span>
                <span className="stat-val">{destination.country} &bull; {destination.region}</span>
              </div>
            </div>

            {/* Action CTAs: Enter 360, Build Itinerary, Save */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
              <Link to={`/journey/${destination.id}`} className="btn-primary" id="enter-360-experience-btn">
                ENTER 360° EXPERIENCE &rarr;
              </Link>
              <Link to={`/itinerary?destination=${destination.id}`} className="btn-secondary" id="build-my-itinerary-btn">
                BUILD MY ITINERARY
              </Link>
              <button
                className="btn-secondary"
                onClick={() => {
                  if (onToggleSave) onToggleSave(destination.id);
                }}
                id="save-destination-btn"
              >
                {isSaved ? "♥ SAVED TO MY JOURNEY" : "♡ SAVE TO MY JOURNEY"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Highlights Section */}
      <section style={{ padding: "80px 4vw 60px", background: "var(--bg-void)" }}>
        <div className="section-header">
          <span className="section-eyebrow">SIGNATURE HIGHLIGHTS</span>
          <h2 className="section-title">WHAT MAKES {destination.name} UNIQUE</h2>
          <p className="section-subtitle">
            Iconic encounters, natural wonders, and architectural milestones.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {destination.highlights?.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <span style={{ fontSize: "20px", color: "var(--accent-gold)" }}>✦</span>
              <p style={{ fontSize: "14px", color: "var(--text-primary)", lineHeight: "1.6" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BEFORE YOU GO (Practical Travel Guide) */}
      <section style={{ padding: "70px 4vw 80px", background: "var(--bg-surface)" }}>
        <div className="section-header">
          <span className="section-eyebrow">EXPEDITION LOGISTICS</span>
          <h2 className="section-title">BEFORE YOU GO</h2>
          <p className="section-subtitle">
            Essential practical intelligence for travelers planning an in-person or virtual journey to {destination.name}.
          </p>
        </div>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {/* Best Time & Budget */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>🌤️</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Best Time &amp; Budget</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", marginBottom: "6px" }}>
              <strong>Best Season:</strong> {beforeYouGo.bestTime}
            </p>
            <p style={{ fontSize: "12.5px", color: "var(--accent-gold-light)" }}>
              <strong>Estimated Budget:</strong> {beforeYouGo.estimatedBudget}
            </p>
          </div>

          {/* Languages & Currency */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>🗣️</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Language &amp; Currency</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", marginBottom: "6px" }}>
              <strong>Languages:</strong> {beforeYouGo.languages}
            </p>
            <p style={{ fontSize: "12.5px", color: "var(--accent-gold-light)" }}>
              <strong>Currency:</strong> {beforeYouGo.currency}
            </p>
          </div>

          {/* Transportation */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>🚕</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Local Transportation</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {beforeYouGo.localTransport}
            </p>
          </div>

          {/* Local Cuisine */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>🍽️</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Signature Food &amp; Dining</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {beforeYouGo.localFood}
            </p>
          </div>

          {/* Visa Info */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>🛂</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Visa &amp; Entry Guidelines</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              {beforeYouGo.visaInfo}
            </p>
          </div>

          {/* Essential Travel Tip */}
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-md)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "22px" }}>💡</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "var(--text-primary)" }}>Pro Traveler Tip</h3>
            </div>
            <p style={{ fontSize: "12.5px", color: "var(--accent-gold-light)", lineHeight: "1.5" }}>
              {beforeYouGo.travelTip}
            </p>
          </div>
        </div>
      </section>

      {/* Museum & Cultural Artifacts Preview */}
      {destination.gallery && destination.gallery.length > 0 && (
        <section style={{ padding: "70px 4vw 80px", background: "var(--bg-void)" }}>
          <div className="section-header">
            <span className="section-eyebrow">CULTURAL EXHIBITION</span>
            <h2 className="section-title">PRESERVED ARTIFACTS</h2>
            <p className="section-subtitle">
              Sacred relics, craftsmanship, and historic objects originating from {destination.name}.
            </p>
          </div>

          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {destination.gallery.map((art) => (
              <div
                key={art.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden"
                }}
              >
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img src={art.image} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <span style={{ fontSize: "9.5px", letterSpacing: "1.5px", color: "var(--accent-gold)", fontWeight: "bold" }}>
                    {art.category} &bull; {art.date}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", margin: "6px 0 8px" }}>
                    {art.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {art.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cultural Story & Historical Heritage Section */}
      <section style={{ padding: "70px 4vw", background: "var(--bg-void)" }}>
        <div className="section-header">
          <span className="section-eyebrow">CULTURAL CHRONICLE</span>
          <h2 className="section-title">STORIES OF {destination.name.toUpperCase()}</h2>
          <p className="section-subtitle">
            Ancient myths, oral histories, and the living soul of {destination.name}.
          </p>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", background: "var(--bg-card)", border: "1px solid var(--border-gold)", borderRadius: "var(--radius-lg)", padding: "36px", position: "relative" }}>
          <span style={{ position: "absolute", top: "20px", right: "24px", fontSize: "36px", opacity: 0.15, color: "var(--accent-gold)" }}>❦</span>
          <span style={{ fontSize: "10.5px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold", textTransform: "uppercase" }}>
            LIVING TRADITIONS &bull; {destination.country}
          </span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--text-primary)", margin: "8px 0 16px" }}>
            {matchedStory?.title || `The Timeless Spirit of ${destination.name}`}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "14.5px", lineHeight: "1.8", marginBottom: "20px" }}>
            {matchedStory?.excerpt ||
              `For centuries, travelers and pilgrims have traversed the terrain of ${destination.name}. Rooted in generational craftsmanship, sacred architecture, and deep harmony with nature, the culture here is preserved not in museums alone, but in daily rituals, hospitality, and living songs passed down through time.`}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border-subtle)", paddingTop: "16px" }}>
            <span style={{ fontSize: "12px", color: "var(--accent-gold-light)" }}>
              {matchedStory ? `Written by ${matchedStory.author} • ${matchedStory.readTime}` : `Astravia Cultural Expedition Archive • Curated Heritage`}
            </span>
            <Link to={`/journey/${destination.id}`} style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--text-primary)", fontWeight: "bold" }}>
              EXPERIENCE SPATIALLY &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Day-by-Day Expedition Itinerary */}
      {destination.itinerary && destination.itinerary.length > 0 && (
        <section style={{ padding: "60px 4vw 100px", background: "var(--bg-surface)" }}>
          <div className="section-header">
            <span className="section-eyebrow">SUGGESTED EXPEDITION</span>
            <h2 className="section-title">DAY BY DAY ITINERARY</h2>
            <p className="section-subtitle">
              A balanced route combining adventure, cultural immersion, and scenic contemplation for {destination.name}.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            {destination.itinerary.map((item) => (
              <div
                key={item.day}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px"
                }}
              >
                <span style={{ fontSize: "11px", letterSpacing: "2px", color: "var(--accent-gold)", fontWeight: "bold" }}>
                  DAY {item.day} &bull; {item.title}
                </span>
                <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", marginTop: "6px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to={`/itinerary?destination=${destination.id}`} className="btn-primary">
              BUILD MY ITINERARY WITH {destination.name.toUpperCase()} &rarr;
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

export default Destination;