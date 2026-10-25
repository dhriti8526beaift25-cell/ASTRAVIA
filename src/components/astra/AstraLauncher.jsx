/**
 * AstraLauncher Component
 * Floating circular launcher button in the bottom-right viewport.
 * Provides accessible toggling and status indicators.
 */

export function AstraLauncher({ isOpen, onToggle, serverMode = "online" }) {
  return (
    <button
      className="astra-launcher-btn"
      onClick={onToggle}
      aria-label={isOpen ? "Close ASTRA AI Travel Companion" : "Open ASTRA AI Travel Companion"}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      title="ASTRA • AI Travel Companion"
    >
      {/* Icon: Star / Sparkle when closed, Close X when open */}
      <span className="astra-launcher-icon" aria-hidden="true">
        {isOpen ? "✕" : "✦"}
      </span>

      {/* Status indicator dot */}
      <span
        className="astra-launcher-status-dot"
        style={{
          background: serverMode === "offline" ? "#ef4444" : "#34d399",
          boxShadow: serverMode === "offline" ? "0 0 6px #ef4444" : "0 0 8px #34d399"
        }}
        title={serverMode === "offline" ? "Server offline" : "ASTRA ready"}
      />

      {/* Tooltip on hover */}
      <span className="astra-launcher-tooltip">
        {isOpen ? "Close ASTRA" : "Talk with ASTRA"}
      </span>
    </button>
  );
}

export default AstraLauncher;
