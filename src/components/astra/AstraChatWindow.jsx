import { useState, useRef, useEffect } from "react";
import AstraMessage from "./AstraMessage";
import AstraSuggestions from "./AstraSuggestions";

/**
 * AstraChatWindow Component
 * Interactive floating chat panel featuring conversation history, auto-scroll,
 * typing indicator, prompt suggestions, and error handling.
 */
export function AstraChatWindow({
  isOpen,
  onClose,
  messages = [],
  isLoading = false,
  error = null,
  onSendMessage,
  onClearConversation,
  onRetry,
  serverMode = "online"
}) {
  const [inputText, setInputText] = useState("");
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const conversationEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    const clean = inputText.trim();
    if (!clean || isLoading) return;

    onSendMessage(clean);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleFormSubmit();
    }
  };

  const handleSelectPrompt = (promptText) => {
    onSendMessage(promptText);
  };

  return (
    <div
      className="astra-window-container"
      role="dialog"
      aria-label="ASTRA AI Travel Companion"
      aria-modal="true"
    >
      {/* 1. Header Bar */}
      <header className="astra-header">
        <div className="astra-header-brand">
          <div className="astra-header-avatar" aria-hidden="true">
            ✦
          </div>
          <div>
            <h2 className="astra-header-title">ASTRA</h2>
            <p className="astra-header-subtitle">YOUR PERSONAL TRAVEL COMPANION</p>
          </div>
        </div>

        <div className="astra-header-actions">
          {/* Status Pill */}
          <span
            className={`astra-status-pill ${serverMode === "demonstration" ? "demo" : ""}`}
            title={serverMode === "demonstration" ? "Local Knowledge Engine Active" : "Live AI Server Active"}
          >
            <span className="astra-status-pulse" />
            {serverMode === "offline" ? "OFFLINE" : serverMode === "demonstration" ? "DEMO MODE" : "ONLINE"}
          </span>

          {/* Clear conversation trigger */}
          {messages.length > 1 && (
            <button
              type="button"
              className="astra-header-btn"
              onClick={() => setShowClearConfirm(true)}
              title="Clear conversation"
              aria-label="Clear conversation history"
            >
              🗑️
            </button>
          )}

          {/* Close button */}
          <button
            type="button"
            className="astra-header-btn"
            onClick={onClose}
            title="Close ASTRA"
            aria-label="Close ASTRA panel"
          >
            ✕
          </button>
        </div>
      </header>

      {/* 2. Scrollable Conversation Area */}
      <div className="astra-conversation">
        {messages.map((msg, index) => (
          <AstraMessage key={msg.id || index} message={msg} />
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="astra-msg-row assistant">
            <div className="astra-msg-meta">
              <span>✦ ASTRA &bull; COMPOSING</span>
            </div>
            <div className="astra-typing-indicator" aria-label="ASTRA is thinking">
              <span className="astra-dot" />
              <span className="astra-dot" />
              <span className="astra-dot" />
            </div>
          </div>
        )}

        <div ref={conversationEndRef} />
      </div>

      {/* 3. Error Banner */}
      {error && (
        <div className="astra-error-banner" role="alert">
          <span>{error}</span>
          {onRetry && (
            <button type="button" className="astra-retry-btn" onClick={onRetry}>
              RETRY
            </button>
          )}
        </div>
      )}

      {/* 4. Suggested Prompts */}
      <AstraSuggestions onSelectPrompt={handleSelectPrompt} disabled={isLoading} />

      {/* 5. Input Form */}
      <form className="astra-input-form" onSubmit={handleFormSubmit}>
        <div className="astra-input-wrapper">
          <textarea
            ref={inputRef}
            className="astra-textarea"
            placeholder="Ask ASTRA about destinations, 360° tours, itineraries..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            maxLength={500}
            disabled={isLoading}
            aria-label="Your message to ASTRA"
          />
        </div>

        <button
          type="submit"
          className="astra-send-btn"
          disabled={!inputText.trim() || isLoading}
          aria-label="Send message"
          title="Send message (Enter)"
        >
          &uarr;
        </button>
      </form>

      {/* 6. Clear Conversation Confirmation Modal */}
      {showClearConfirm && (
        <div className="astra-confirm-overlay">
          <div className="astra-confirm-box">
            <h3 className="astra-confirm-title">Clear Conversation?</h3>
            <p className="astra-confirm-desc">
              This will reset your conversation with ASTRA back to the initial greeting.
            </p>
            <div className="astra-confirm-actions">
              <button
                type="button"
                className="btn-secondary"
                style={{ padding: "6px 14px", fontSize: "10px" }}
                onClick={() => setShowClearConfirm(false)}
              >
                CANCEL
              </button>
              <button
                type="button"
                className="btn-primary"
                style={{ padding: "6px 14px", fontSize: "10px" }}
                onClick={() => {
                  onClearConversation();
                  setShowClearConfirm(false);
                }}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AstraChatWindow;
