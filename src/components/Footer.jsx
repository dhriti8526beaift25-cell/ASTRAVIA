import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Footer Component (Evaluation-I)
 * Semantic footer with brand philosophy, navigation links, and newsletter subscription.
 * Demonstrates: Semantic HTML5 (<footer>), Flexbox, CSS Grid, controlled form input.
 */
export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="astravia-footer">
      <div className="footer-finale-banner">
        <span className="section-eyebrow">THE HORIZON BECKONS</span>
        <h2 className="footer-finale-title">WHERE WILL YOU GO NEXT?</h2>
        <p className="section-subtitle">
          Don't just visit the world. Experience it with Astravia.
        </p>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <h4>ASTRAVIA</h4>
          <p>
            Explore Beyond Boundaries. A next-generation virtual exploration platform crafted for immersive travel discovery.
          </p>
        </div>

        <div>
          <h5 className="footer-col-title">Destinations</h5>
          <ul className="footer-links">
            <li><Link to="/destination/kashmir">Kashmir</Link></li>
            <li><Link to="/destination/ladakh">Ladakh</Link></li>
            <li><Link to="/destination/rajasthan">Rajasthan</Link></li>
            <li><Link to="/destination/kerala">Kerala</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="footer-col-title">Navigation</h5>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#destinations">Destinations</a></li>
            <li><Link to="/my-journey">My Journey</Link></li>
            <li><a href="/#planner">Plan Trip</a></li>
          </ul>
        </div>

        <div>
          <h5 className="footer-col-title">Newsletter</h5>
          <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "10px" }}>
            Receive dispatches from remote corners of the earth.
          </p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">JOIN</button>
            </form>
          ) : (
            <p style={{ color: "var(--accent-gold-light)", fontSize: "12px" }}>
              ✨ Welcome to the Astravia expedition circle!
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>&copy; {new Date().getFullYear()} ASTRAVIA. All rights reserved.</span>
        <span>FEE-II Project-Based Evaluation-I (Lectures 1–42)</span>
      </div>
    </footer>
  );
}

export default Footer;
