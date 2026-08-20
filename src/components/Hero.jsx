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
          <Link to="/discover" className="btn-primary">
            ENTER THE JOURNEY &rarr;
          </Link>
          <Link to="/discover" className="btn-secondary">
            DISCOVER THE WORLD
          </Link>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <div className="mouse-scroll-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
