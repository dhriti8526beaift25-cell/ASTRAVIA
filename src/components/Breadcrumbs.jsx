import { Link } from "react-router-dom";

/**
 * Breadcrumbs Component
 * Renders an elegant, unobtrusive hierarchical breadcrumb trail:
 * WORLD / CONTINENT / COUNTRY / REGION / DESTINATION
 */
export function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="astravia-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumb-link">WORLD</Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="breadcrumb-segment">
            <span className="breadcrumb-separator">/</span>
            {isLast || !item.to ? (
              <span className="breadcrumb-current">{item.label?.toUpperCase()}</span>
            ) : (
              <Link to={item.to} className="breadcrumb-link">
                {item.label?.toUpperCase()}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
