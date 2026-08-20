import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import GlobalSearchModal from "./GlobalSearchModal";

/**
 * Navbar Component (Streamlined World-Centric Navigation)
 * Primary links: DISCOVER, EXPERIENCES, MY JOURNEY, PLAN + Global Search Overlay & Audio Control.
 */
export function Navbar({ savedCount = 0, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`astravia-nav ${isScrolled ? "scrolled" : ""}`}>
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <span className="brand-mark">△</span>
          <span>ASTRAVIA</span>
        </Link>

        {/* Simplified Primary Navigation */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <NavLink to="/discover" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
            DISCOVER
          </NavLink>
          <NavLink to="/experiences" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
            EXPERIENCES
          </NavLink>
          <NavLink to="/my-journey" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
            MY JOURNEY
          </NavLink>
          <NavLink to="/plan" className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}>
            PLAN
          </NavLink>
        </nav>

        {/* Actions: Global Search, Audio Soundscape & Saved Journeys Badge */}
        <div className="nav-actions">
          {/* Quick Search Button */}
          <button
            className="audio-toggle-btn"
            onClick={() => setIsSearchOpen(true)}
            title="Global Destination Search (Esc)"
            aria-label="Search Destinations"
          >
            <span>🔍</span>
            <span className="nav-search-label">SEARCH</span>
          </button>

          {/* Ambience Audio Toggle */}
          <button
            className={`audio-toggle-btn ${isAudioPlaying ? "playing" : ""}`}
            onClick={onToggleAudio}
            title="Toggle Cinematic Ambience"
            aria-label="Toggle Sound"
          >
            <span className="sound-icon">{isAudioPlaying ? "🔊" : "🔈"}</span>
            <span className="nav-sound-label">{isAudioPlaying ? "SOUND ON" : "SOUND OFF"}</span>
          </button>

          {/* Saved Journeys Badge */}
          <Link to="/my-journey" className="journey-badge-btn" title="View Saved Destinations" onClick={closeMenu}>
            <span>JOURNEY</span>
            {savedCount > 0 && <span className="journey-count">{savedCount}</span>}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer open">
            <ul className="mobile-nav-links">
              <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
              <li><NavLink to="/discover" onClick={closeMenu}>DISCOVER</NavLink></li>
              <li><NavLink to="/experiences" onClick={closeMenu}>EXPERIENCES</NavLink></li>
              <li><NavLink to="/my-journey" onClick={closeMenu}>MY JOURNEY ({savedCount})</NavLink></li>
              <li><NavLink to="/plan" onClick={closeMenu}>PLAN TRIP</NavLink></li>
            </ul>
          </div>
        )}
      </header>

      {/* Global Search Overlay Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
