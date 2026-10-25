import { useNavigate } from "react-router-dom";

/**
 * AstraMessage Component
 * Formats user and assistant message bubbles, handles markdown-like text,
 * and renders interactive navigation cards for verified destinations.
 */
export function AstraMessage({ message, onNavigate }) {
  const navigate = useNavigate();
  const isUser = message.role === "user";

  const handleCardClick = (route) => {
    if (route) {
      navigate(route);
      if (onNavigate) onNavigate(route);
    }
  };

  // Safe line-by-line renderer with bold highlighting
  const renderFormattedText = (text = "") => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      // Empty line -> break
      if (!line.trim()) {
        return <div key={lineIdx} style={{ height: "6px" }} />;
      }

      // Bullet points
      const isBullet = line.trim().startsWith("•") || line.trim().startsWith("-");
      const cleanLine = isBullet ? line.replace(/^[•-]\s*/, "") : line;

      // Parse bold segments (**bold**)
      const parts = cleanLine.split(/(\*\*.*?\*\*)/g);
      const formattedParts = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={lineIdx} style={{ display: "flex", gap: "6px", marginBottom: "4px" }}>
            <span style={{ color: "var(--accent-gold-light)" }}>&bull;</span>
            <span>{formattedParts}</span>
          </div>
        );
      }

      return (
        <p key={lineIdx} style={{ margin: "0 0 6px 0" }}>
          {formattedParts}
        </p>
      );
    });
  };

  return (
    <div className={`astra-msg-row ${isUser ? "user" : "assistant"}`}>
      {/* Metadata bar */}
      <div className="astra-msg-meta">
        {isUser ? (
          <span>YOU &bull; {message.time || "JUST NOW"}</span>
        ) : (
          <>
            <span>✦ ASTRA</span>
            {message.mode === "demonstration" && (
              <span className="astra-msg-mode-tag" title="Local demonstration intelligence mode">
                DEMO MODE
              </span>
            )}
            {message.mode === "live_ai" && (
              <span className="astra-msg-mode-tag" style={{ color: "#34d399", borderColor: "rgba(52, 211, 153, 0.4)" }}>
                LIVE AI
              </span>
            )}
            <span style={{ color: "var(--text-muted)" }}>&bull; {message.time || "JUST NOW"}</span>
          </>
        )}
      </div>

      {/* Bubble */}
      <div className="astra-bubble">
        {renderFormattedText(message.text)}

        {/* Structured Destination / Navigation Suggestions */}
        {!isUser && Array.isArray(message.suggestions) && message.suggestions.length > 0 && (
          <div className="astra-suggestions-container">
            {message.suggestions.map((sug, sIdx) => (
              <div
                key={sIdx}
                className="astra-suggestion-card"
                onClick={() => handleCardClick(sug.route)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(sug.route);
                  }
                }}
              >
                <div className="astra-suggestion-left">
                  <span className="astra-suggestion-title">
                    {sug.type === "virtual_tour" ? "🧭 " : sug.type === "destination" ? "🏔️ " : "📍 "}
                    {sug.title}
                  </span>
                  {sug.subtitle && <span className="astra-suggestion-sub">{sug.subtitle}</span>}
                </div>
                <span className="astra-suggestion-arrow">&rarr;</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AstraMessage;
