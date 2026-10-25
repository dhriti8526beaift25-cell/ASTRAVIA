import { useState, useEffect, useCallback } from "react";
import AstraLauncher from "./AstraLauncher";
import AstraChatWindow from "./AstraChatWindow";
import { sendChatMessage, checkAstraHealth } from "../../services/astraService";
import "./astra.css";

const WELCOME_MESSAGE = {
  id: "welcome-msg",
  role: "assistant",
  text: "Welcome to ASTRAVIA. I'm ASTRA, your personal travel companion. Whether you're dreaming of mountains, exploring ancient cultures, or discovering extraordinary places, I'm here to help. Where would you like your next journey to take you?",
  time: "ASTRAVIA READY",
  suggestions: [
    {
      id: "explore",
      title: "Explore World Atlas",
      subtitle: "Filter by continents and landscape categories",
      route: "/explore",
      type: "navigation"
    },
    {
      id: "kashmir",
      title: "Kashmir 360° Expedition",
      subtitle: "Dal Lake and Himalayan peaks in WebGL",
      route: "/journey/kashmir",
      type: "virtual_tour"
    },
    {
      id: "itinerary",
      title: "Build My Itinerary",
      subtitle: "Craft and organize a multi-day journey",
      route: "/itinerary",
      type: "navigation"
    }
  ]
};

export function AstraChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastQuery, setLastQuery] = useState(null);
  const [serverMode, setServerMode] = useState("online");

  // Health check on mount
  useEffect(() => {
    checkAstraHealth().then((health) => {
      if (health.status === "offline") {
        setServerMode("offline");
      } else {
        setServerMode(health.mode || "demonstration");
      }
    });
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = useCallback(
    async (text) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      const userMsg = {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmed,
        time: userTime
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      setError(null);
      setLastQuery(trimmed);

      try {
        // Send to backend with conversation history
        const result = await sendChatMessage(trimmed, messages);

        const assistantTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const assistantMsg = {
          id: `ast-${Date.now()}`,
          role: "assistant",
          text: result.reply,
          suggestions: result.suggestions,
          mode: result.mode,
          provider: result.provider,
          time: assistantTime
        };

        setMessages((prev) => [...prev, assistantMsg]);
        if (result.mode) {
          setServerMode(result.mode);
        }
      } catch (err) {
        console.error("[ASTRA Chatbot Error]:", err);
        setError(err.message || "Failed to communicate with ASTRA. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  const handleRetry = () => {
    if (lastQuery) {
      handleSendMessage(lastQuery);
    }
  };

  const handleClearConversation = () => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
    setLastQuery(null);
  };

  return (
    <>
      {/* Floating launcher */}
      <AstraLauncher
        isOpen={isOpen}
        onToggle={handleToggle}
        serverMode={serverMode}
      />

      {/* Floating chat panel */}
      <AstraChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        isLoading={isLoading}
        error={error}
        onSendMessage={handleSendMessage}
        onClearConversation={handleClearConversation}
        onRetry={handleRetry}
        serverMode={serverMode}
      />
    </>
  );
}

export default AstraChatbot;
