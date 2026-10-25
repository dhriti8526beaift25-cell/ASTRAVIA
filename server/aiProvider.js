/**
 * ASTRA Live AI Provider Integration
 * Supports Google Gemini API and OpenAI API using standard Node native fetch.
 * Injects ASTRAVIA Knowledge Base into the system prompt to guarantee ground truth
 * and prevent hallucination of non-existent routes or URLs.
 */

import { ASTRAVIA_KNOWLEDGE } from "./knowledgeBase.js";

// System prompt grounding the AI in ASTRAVIA
function buildSystemPrompt() {
  const destSummary = ASTRAVIA_KNOWLEDGE.destinations
    .map((d) => `- ${d.name} (${d.country}, ${d.continent}): ${d.category}. Vibes: ${d.vibes.join(", ")}. Highlights: ${d.highlights.join(", ")}. Cuisine: ${d.cuisine.join(", ")}. ID: "${d.id}". Overview: ${d.overviewRoute}, 360 Tour: ${d.virtual360Route}`)
    .join("\n");

  return `You are ASTRA, the elegant AI personal travel companion for ASTRAVIA — an immersive virtual tourism platform.
ASTRAVIA Tagline: "Explore Beyond Boundaries".
Tone: Sophisticated, culturally appreciative, poetic, warm, concise, and helpful.

ASTRAVIA Verified Destinations:
${destSummary}

ASTRAVIA Core Features & Internal Routes:
- Home: "/"
- Explore World Atlas: "/explore"
- Destination Overview: "/destination/:id"
- 360° Virtual Travel: "/journey/:id" (Real Three.js WebGL equirectangular sphere)
- Interactive Itinerary Planner: "/itinerary" (Supports pre-fill via "/itinerary?destination=:id")
- My Journey (Saved trips & Passport stamps): "/my-journey"
- Experiences: "/experiences"

Strict Rules:
1. ONLY recommend destinations from the verified list above.
2. NEVER invent URLs or external links. Internal routes must match the format "/destination/:id" or "/journey/:id" or "/itinerary" or "/my-journey".
3. When recommending a destination, mention its key highlights, cuisine, and virtual 360 tour.
4. Do not claim to know real-time prices, live flight bookings, or live weather forecast.
5. Keep responses concise (under 180 words) and nicely formatted with bullet points where appropriate.`;
}

/**
 * Call Google Gemini API
 */
export async function callGemini({ message, history = [], apiKey, model = "gemini-1.5-flash" }) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  // Format conversation history for Gemini
  const contents = [];

  // Add system instruction as preamble or contents
  contents.push({
    role: "user",
    parts: [{ text: `[System Instruction]\n${buildSystemPrompt()}\n\nPlease acknowledge and embody ASTRA.` }]
  });
  contents.push({
    role: "model",
    parts: [{ text: "Understood. I am ASTRA, your personal travel companion for ASTRAVIA. How may I guide your journey today?" }]
  });

  // Append recent user/assistant turns
  history.slice(-6).forEach((h) => {
    contents.push({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text || h.content || "" }]
    });
  });

  // Current message
  contents.push({
    role: "user",
    parts: [{ text: message }]
  });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    }),
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am here to guide your journey across ASTRAVIA.";

  // Extract structured suggestions based on destinations mentioned
  const suggestions = extractSuggestionsFromText(reply);

  return {
    reply,
    suggestions,
    mode: "live_ai",
    provider: "Google Gemini (" + model + ")"
  };
}

/**
 * Call OpenAI API
 */
export async function callOpenAI({ message, history = [], apiKey, model = "gpt-4o-mini" }) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const messages = [
    { role: "system", content: buildSystemPrompt() }
  ];

  history.slice(-6).forEach((h) => {
    messages.push({
      role: h.role === "user" ? "user" : "assistant",
      content: h.text || h.content || ""
    });
  });

  messages.push({ role: "user", content: message });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 600
    }),
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenAI API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "I am here to guide your journey across ASTRAVIA.";

  const suggestions = extractSuggestionsFromText(reply);

  return {
    reply,
    suggestions,
    mode: "live_ai",
    provider: "OpenAI (" + model + ")"
  };
}

/**
 * Parses response text and matches verified ASTRAVIA destinations to return structured pills
 */
function extractSuggestionsFromText(text) {
  const lower = text.toLowerCase();
  const matched = [];

  ASTRAVIA_KNOWLEDGE.destinations.forEach((d) => {
    if (lower.includes(d.name.toLowerCase()) || lower.includes(d.id.toLowerCase())) {
      matched.push({
        id: d.id,
        title: d.name,
        subtitle: `${d.country} • ${d.category}`,
        route: d.overviewRoute,
        tourRoute: d.virtual360Route,
        type: "destination"
      });
    }
  });

  if (matched.length === 0) {
    matched.push({
      id: "explore",
      title: "Explore Destinations",
      subtitle: "Browse the ASTRAVIA world atlas",
      route: "/explore",
      type: "navigation"
    });
  }

  return matched.slice(0, 4);
}
