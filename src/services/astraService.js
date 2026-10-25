/**
 * ASTRA Chatbot Service
 * Communicates with the Express backend (/api/chat) with timeout protection,
 * health status checks, and resilient error recovery.
 */

const API_BASE = ""; // Relative path proxied via Vite dev server or production reverse-proxy

export async function sendChatMessage(message, history = []) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 16000); // 16s timeout

  try {
    const response = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        history: history.map((h) => ({
          role: h.role === "user" ? "user" : "assistant",
          text: h.text
        }))
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorMessage = `Server error (${response.status})`;
      try {
        const errorJson = await response.json();
        if (errorJson.error) errorMessage = errorJson.error;
      } catch {
        // Fallback to status text
      }
      const err = new Error(errorMessage);
      err.status = response.status;
      throw err;
    }

    const data = await response.json();
    return {
      reply: data.reply || "I am here to guide your journey across ASTRAVIA.",
      suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
      mode: data.mode || "live_ai",
      provider: data.provider,
      note: data.note,
      timestamp: data.timestamp || new Date().toISOString()
    };
  } catch (err) {
    clearTimeout(timeoutId);

    // Timeout Error
    if (err.name === "AbortError") {
      const timeoutError = new Error("ASTRA request timed out. Please check your connection and try again.");
      timeoutError.isTimeout = true;
      throw timeoutError;
    }

    // Network / Offline Error (e.g. backend server not started)
    if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
      const offlineError = new Error(
        "Unable to reach the ASTRA backend server. Please verify that the server is running on port 3001 (`npm run server`)."
      );
      offlineError.isOffline = true;
      throw offlineError;
    }

    throw err;
  }
}

export async function checkAstraHealth() {
  try {
    const res = await fetch(`${API_BASE}/api/health`, {
      signal: AbortSignal.timeout(3000)
    });
    if (res.ok) {
      return await res.json();
    }
    return { status: "error", mode: "offline" };
  } catch {
    return { status: "offline", mode: "offline" };
  }
}
