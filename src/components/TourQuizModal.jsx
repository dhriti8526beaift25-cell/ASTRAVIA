import { useState } from "react";

/**
 * TourQuizModal Component
 * Interactive 5-Question Discovery Challenge with score calculation,
 * local storage history tracking, and native Web Share API integration.
 */
export function TourQuizModal({ quiz = [], destinationName = "", destinationId = "", onClose, onQuizComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const currentQ = quiz[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quiz.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      // Save score & completed tour to localStorage
      try {
        const history = JSON.parse(localStorage.getItem("astravia_quiz_scores") || "{}");
        history[destinationId || destinationName.toLowerCase()] = {
          score: score + (selectedOption === currentQ.correctIndex ? 1 : 0),
          total: quiz.length,
          date: new Date().toLocaleDateString()
        };
        localStorage.setItem("astravia_quiz_scores", JSON.stringify(history));
        if (onQuizComplete) onQuizComplete();
      } catch (e) {}
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `Astravia Explorer Challenge: ${destinationName}`,
      text: `I just explored ${destinationName} virtually on Astravia and scored ${score}/${quiz.length}! Explore beyond boundaries:`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="hotspot-modal-backdrop" onClick={onClose}>
      <div className="hotspot-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "560px" }}>
        <div className="modal-content-body">
          <button className="modal-close-btn" style={{ top: "14px", right: "14px" }} onClick={onClose} aria-label="Close">
            &times;
          </button>

          <p className="modal-category-tag">DISCOVERY CHALLENGE &bull; {destinationName}</p>

          {!isCompleted ? (
            <>
              {/* Progress bar */}
              <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", margin: "10px 0 16px" }}>
                <div
                  style={{
                    width: `${((currentIndex + 1) / quiz.length) * 100}%`,
                    height: "100%",
                    background: "var(--accent-gold-light)",
                    borderRadius: "2px",
                    transition: "width 0.3s ease"
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "var(--accent-gold)" }}>
                  QUESTION {currentIndex + 1} OF {quiz.length}
                </span>
                <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                  Current Score: {score}
                </span>
              </div>

              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "16px", color: "var(--text-primary)", margin: "14px 0 20px", lineHeight: "1.5" }}>
                {currentQ.question}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                {currentQ.options.map((option, idx) => {
                  let borderCol = "var(--border-subtle)";
                  let bgCol = "rgba(6, 12, 15, 0.7)";
                  let textCol = "var(--text-secondary)";

                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      borderCol = "var(--accent-gold-light)";
                      bgCol = "rgba(197, 162, 106, 0.25)";
                      textCol = "var(--text-primary)";
                    } else if (idx === selectedOption) {
                      borderCol = "#ff5252";
                      bgCol = "rgba(255, 82, 82, 0.15)";
                      textCol = "#ff8585";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      style={{
                        padding: "13px 18px",
                        borderRadius: "var(--radius-sm)",
                        border: `1px solid ${borderCol}`,
                        background: bgCol,
                        textAlign: "left",
                        fontSize: "13.5px",
                        color: textCol,
                        cursor: isAnswered ? "default" : "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span style={{ marginRight: "10px", color: "var(--accent-gold)" }}>
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div style={{ animation: "modalPop 0.3s ease" }}>
                  <div className="modal-fact-box" style={{ marginBottom: "16px" }}>
                    {selectedOption === currentQ.correctIndex ? "✨ Correct! " : "💡 Cultural Note: "}
                    {currentQ.explanation}
                  </div>
                  <button className="btn-primary" style={{ width: "100%" }} onClick={handleNext}>
                    {currentIndex + 1 < quiz.length ? "NEXT QUESTION \u2192" : "VIEW EXPLORER SCORE \u2192"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0 20px" }}>
              <div style={{ fontSize: "52px", marginBottom: "10px" }}>
                {score >= 4 ? "🏆" : score >= 2 ? "⭐" : "🧭"}
              </div>

              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", letterSpacing: "3px", color: "var(--text-primary)", marginBottom: "6px" }}>
                {score === quiz.length ? "MASTER EXPEDITIONIST" : score >= 3 ? "CERTIFIED EXPLORER" : "PATHFINDER"}
              </h2>

              <p style={{ color: "var(--accent-gold-light)", fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
                YOUR SCORE: {score} / {quiz.length}
              </p>

              <p style={{ color: "var(--text-secondary)", fontSize: "13.5px", maxWidth: "420px", margin: "0 auto 28px", lineHeight: "1.6" }}>
                You have completed the virtual exploration challenge for {destinationName}. Your score has been logged to your Journey Profile.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "380px", margin: "0 auto" }}>
                <button
                  className="btn-primary"
                  onClick={handleShare}
                  style={{ width: "100%" }}
                >
                  {copiedLink ? "✓ LINK COPIED TO CLIPBOARD" : "📢 SHARE EXPERIENCE"}
                </button>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: "10px" }}
                    onClick={() => {
                      setCurrentIndex(0);
                      setSelectedOption(null);
                      setIsAnswered(false);
                      setScore(0);
                      setIsCompleted(false);
                    }}
                  >
                    RETRY QUIZ
                  </button>
                  <button
                    className="btn-secondary"
                    style={{ flex: 1, fontSize: "10px" }}
                    onClick={onClose}
                  >
                    CONTINUE TOUR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TourQuizModal;
