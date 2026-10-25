import { useState } from "react";

/**
 * ItineraryDay Component
 * Modular day card that manages activities scheduled for a specific travel day.
 * Features:
 * - Activity cards with time slots (Morning, Afternoon, Evening)
 * - Move Up (▲) and Move Down (▼) activity reordering
 * - Move to another day selector
 * - Delete activity
 * - Inline activity adder
 */
export function ItineraryDay({
  dayNumber,
  places = [],
  totalDays,
  onAddPlace,
  onRemovePlace,
  onMoveUp,
  onMoveDown,
  onMoveToDay
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTimeSlot, setNewTimeSlot] = useState("Morning");
  const [newCategory, setNewCategory] = useState("Sightseeing");
  const [newNotes, setNewNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAddPlace(dayNumber, {
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      title: newTitle.trim(),
      timeSlot: newTimeSlot,
      category: newCategory,
      notes: newNotes.trim()
    });

    setNewTitle("");
    setNewNotes("");
    setIsAdding(false);
  };

  const getTimeBadgeColor = (slot) => {
    switch (slot) {
      case "Morning":
        return "#e6cb96";
      case "Afternoon":
        return "var(--accent-gold)";
      case "Evening":
        return "#baa588";
      default:
        return "var(--accent-gold-light)";
    }
  };

  return (
    <div
      className="itinerary-day-card"
      style={{
        background: "rgba(6, 12, 15, 0.75)",
        border: "1px solid var(--border-gold)",
        borderRadius: "var(--radius-md)",
        padding: "24px",
        marginBottom: "20px",
        transition: "border-color 0.2s ease"
      }}
    >
      {/* Day Card Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
          paddingBottom: "12px",
          borderBottom: "1px solid var(--border-subtle)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              background: "var(--accent-gold)",
              color: "#060c0e",
              fontWeight: "bold",
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "var(--radius-full)",
              letterSpacing: "1px"
            }}
          >
            DAY {dayNumber}
          </span>
          <span style={{ fontSize: "12.5px", color: "var(--text-secondary)" }}>
            {places.length} scheduled {places.length === 1 ? "activity" : "activities"}
          </span>
        </div>

        <button
          type="button"
          className="btn-secondary"
          style={{ padding: "6px 14px", fontSize: "10px", letterSpacing: "1px" }}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? "CANCEL" : "+ ADD PLACE"}
        </button>
      </div>

      {/* Inline Quick Add Activity Form */}
      {isAdding && (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px dashed var(--accent-gold)",
            borderRadius: "var(--radius-sm)",
            padding: "16px",
            marginBottom: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "10px", color: "var(--accent-gold)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                Place / Activity Title *
              </label>
              <input
                type="text"
                className="form-input"
                style={{ padding: "8px 12px", fontSize: "13px" }}
                placeholder="e.g. Shikara Ride on Dal Lake"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                autoFocus
                required
              />
            </div>

            <div>
              <label style={{ fontSize: "10px", color: "var(--accent-gold)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                Time of Day
              </label>
              <select
                className="form-select"
                style={{ padding: "8px 12px", fontSize: "12px" }}
                value={newTimeSlot}
                onChange={(e) => setNewTimeSlot(e.target.value)}
              >
                <option value="Morning">🌅 Morning</option>
                <option value="Afternoon">☀️ Afternoon</option>
                <option value="Evening">🌙 Evening</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "10px", color: "var(--accent-gold)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                Category
              </label>
              <select
                className="form-select"
                style={{ padding: "8px 12px", fontSize: "12px" }}
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option value="Sightseeing">Sightseeing</option>
                <option value="Heritage">Heritage</option>
                <option value="Nature">Nature</option>
                <option value="Culinary">Culinary</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              Notes or Highlights (Optional)
            </label>
            <input
              type="text"
              className="form-input"
              style={{ padding: "8px 12px", fontSize: "12px" }}
              placeholder="e.g. Best photographed at sunrise, bring cash for entry tickets"
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: "6px 14px", fontSize: "10px" }}
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: "6px 16px", fontSize: "10px" }}
              disabled={!newTitle.trim()}
            >
              Save Activity &rarr;
            </button>
          </div>
        </form>
      )}

      {/* Activities List */}
      {places.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {places.map((place, idx) => (
            <div
              key={place.id || idx}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-sm)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                borderLeft: `3px solid ${getTimeBadgeColor(place.timeSlot)}`
              }}
            >
              {/* Activity Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "9.5px",
                      letterSpacing: "1px",
                      color: getTimeBadgeColor(place.timeSlot),
                      textTransform: "uppercase",
                      fontWeight: "bold"
                    }}
                  >
                    {place.timeSlot === "Morning" ? "🌅" : place.timeSlot === "Afternoon" ? "☀️" : "🌙"} {place.timeSlot}
                  </span>
                  <span style={{ fontSize: "9.5px", color: "var(--text-muted)", background: "rgba(255,255,255,0.06)", padding: "1px 6px", borderRadius: "var(--radius-full)" }}>
                    {place.category || "Sightseeing"}
                  </span>
                </div>
                <h4 style={{ fontSize: "14px", margin: "0 0 2px", color: "var(--text-primary)" }}>
                  {place.title}
                </h4>
                {place.notes && (
                  <p style={{ fontSize: "11.5px", color: "var(--text-secondary)", margin: 0, fontStyle: "italic" }}>
                    "{place.notes}"
                  </p>
                )}
              </div>

              {/* Actions: Reorder Up, Reorder Down, Move Day, Delete */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {/* Move Up */}
                <button
                  type="button"
                  onClick={() => onMoveUp(dayNumber, idx)}
                  disabled={idx === 0}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: idx === 0 ? "rgba(255,255,255,0.2)" : "var(--accent-gold-light)",
                    width: "28px",
                    height: "28px",
                    borderRadius: "var(--radius-sm)",
                    cursor: idx === 0 ? "not-allowed" : "pointer",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Move Up"
                  aria-label="Move activity up"
                >
                  ▲
                </button>

                {/* Move Down */}
                <button
                  type="button"
                  onClick={() => onMoveDown(dayNumber, idx)}
                  disabled={idx === places.length - 1}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border-subtle)",
                    color: idx === places.length - 1 ? "rgba(255,255,255,0.2)" : "var(--accent-gold-light)",
                    width: "28px",
                    height: "28px",
                    borderRadius: "var(--radius-sm)",
                    cursor: idx === places.length - 1 ? "not-allowed" : "pointer",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Move Down"
                  aria-label="Move activity down"
                >
                  ▼
                </button>

                {/* Move to another Day */}
                {totalDays > 1 && (
                  <select
                    value={dayNumber}
                    onChange={(e) => onMoveToDay(dayNumber, idx, Number(e.target.value))}
                    style={{
                      background: "rgba(6, 12, 15, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      fontSize: "10.5px",
                      padding: "4px 8px",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer"
                    }}
                    title="Move to another Day"
                    aria-label="Move to another day"
                  >
                    {Array.from({ length: totalDays }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        Day {d}
                      </option>
                    ))}
                  </select>
                )}

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemovePlace(dayNumber, idx)}
                  style={{
                    background: "rgba(255, 82, 82, 0.1)",
                    border: "1px solid rgba(255, 82, 82, 0.3)",
                    color: "#ff5252",
                    width: "28px",
                    height: "28px",
                    borderRadius: "var(--radius-sm)",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Remove Activity"
                  aria-label="Remove activity"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            border: "1px dashed var(--border-subtle)",
            borderRadius: "var(--radius-sm)",
            padding: "20px",
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "12px"
          }}
        >
          <span>No activities scheduled for Day {dayNumber} yet.</span>
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            style={{
              background: "none",
              border: "none",
              color: "var(--accent-gold-light)",
              marginLeft: "8px",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            + Add place or choose from highlights
          </button>
        </div>
      )}
    </div>
  );
}

export default ItineraryDay;
