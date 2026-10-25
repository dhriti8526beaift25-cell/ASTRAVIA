import { Link } from "react-router-dom";

/**
 * Hero Component (Global Travel Cinema)
 * Fullscreen video hero with letter reveal animation and world exploration CTAs.
 */
export function Hero() {
  const brandLetters = "ASTRAVIA".split("");

  return (
    <section className="astravia-hero" aria-label="Hero">
      {/* Fullscreen Video & Atmospheric Vignette Overlays */}
      <div className="hero-media-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/kashmir.jpg"
          preload="auto"
        >
          <source src="/hero-kashmir.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient-overlay"></div>
        <div className="hero-particles"></div>
      </div>

      {/* Hero Center Text Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">THE WORLD IS WAITING</p>

        <h1 className="hero-main-title">
          {brandLetters.map((char, index) => (
            <span
              key={index}
              className="hero-letter"
              style={{ animationDelay: `${0.15 + index * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="hero-tagline-divider"></div>

        <p className="hero-subtitle">EXPLORE BEYOND BOUNDARIES.</p>
        <p className="hero-description">
          From Himalayan valleys to European streets, tropical islands and ancient civilizations — experience the world from anywhere.
        </p>

        {/* Hero Action CTAs */}
        <div className="hero-cta-group">
          <Link to="/journey/kashmir" className="btn-primary" id="hero-cta-primary">
            ENTER 360° EXPERIENCE &rarr;
          </Link>
          <Link to="/explore" className="btn-secondary" id="hero-cta-secondary">
            EXPLORE THE WORLD
          </Link>
        </div>
      </div>

      {/* Floating Side Social Icons */}
      <aside className="hero-social-strip" aria-label="Social Channels">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="Instagram" aria-label="Astravia on Instagram">
          <span>IG</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="360° Virtual Expeditions on YouTube" aria-label="360 Virtual Expeditions on YouTube">
          <span>YT</span>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="X (Twitter)" aria-label="Astravia on X">
          <span>𝕏</span>
        </a>
        <span className="hero-social-divider" aria-hidden="true" />
        <span className="hero-social-tag" aria-hidden="true">GLOBAL</span>
      </aside>

      {/* Mouse Scroll Indicator */}
      <div
        className="hero-scroll-indicator"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
          }
        }}
        aria-label="Scroll to discover continents"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="mouse-scroll-icon" aria-hidden="true">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
