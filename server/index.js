/**
 * ASTRAVIA — ASTRA AI Companion Backend Server
 * Express.js server providing secure AI proxying, local demonstration intelligence,
 * request validation, rate protection, and health checks.
 */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateLocalResponse } from "./localEngine.js";
import { callGemini, callOpenAI } from "./aiProvider.js";

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Determine active AI Provider from environment
function getActiveProvider() {
  if (process.env.GEMINI_API_KEY || (process.env.AI_API_KEY && process.env.AI_PROVIDER === "gemini")) {
    return {
      type: "gemini",
      key: process.env.GEMINI_API_KEY || process.env.AI_API_KEY,
      model: process.env.GEMINI_MODEL || process.env.AI_MODEL || "gemini-1.5-flash"
    };
  }
  if (process.env.OPENAI_API_KEY || (process.env.AI_API_KEY && process.env.AI_PROVIDER === "openai")) {
    return {
      type: "openai",
      key: process.env.OPENAI_API_KEY || process.env.AI_API_KEY,
      model: process.env.OPENAI_MODEL || process.env.AI_MODEL || "gpt-4o-mini"
    };
  }
  return { type: "local_demonstration" };
}

// Security & Parsing Middleware
app.use(
  cors({
    origin: [CORS_ORIGIN, "http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(express.json({ limit: "30kb" }));

// 1. Health & Status Check Endpoint
app.get("/api/health", (req, res) => {
  const provider = getActiveProvider();
  res.json({
    status: "ok",
    service: "ASTRA AI Travel Companion",
    mode: provider.type === "local_demonstration" ? "demonstration" : "live_ai",
    provider: provider.type,
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// 2. Chat Processing Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body || {};

    // Input Validation
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Invalid input: 'message' is required and must be a non-empty string."
      });
    }

    const trimmed = message.trim();
    if (trimmed.length === 0) {
      return res.status(400).json({
        error: "Message cannot be empty."
      });
    }

    if (trimmed.length > 500) {
      return res.status(400).json({
        error: "Message is too long. Please limit your query to 500 characters."
      });
    }

    // Limit history length to protect memory & tokens
    const safeHistory = Array.isArray(history) ? history.slice(-8) : [];

    const activeProvider = getActiveProvider();

    // Case A: Live Gemini API
    if (activeProvider.type === "gemini") {
      try {
        const result = await callGemini({
          message: trimmed,
          history: safeHistory,
          apiKey: activeProvider.key,
          model: activeProvider.model
        });
        return res.json({
          ...result,
          timestamp: new Date().toISOString()
        });
      } catch (geminiError) {
        console.error("[ASTRA Server] Gemini API call failed:", geminiError.message);
        // Fallback gracefully to local engine with note
        const local = generateLocalResponse(trimmed);
        return res.json({
          ...local,
          note: "Live AI temporarily unavailable. Using ASTRA Local Intelligence fallback.",
          upstreamError: geminiError.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Case B: Live OpenAI API
    if (activeProvider.type === "openai") {
      try {
        const result = await callOpenAI({
          message: trimmed,
          history: safeHistory,
          apiKey: activeProvider.key,
          model: activeProvider.model
        });
        return res.json({
          ...result,
          timestamp: new Date().toISOString()
        });
      } catch (openaiError) {
        console.error("[ASTRA Server] OpenAI API call failed:", openaiError.message);
        const local = generateLocalResponse(trimmed);
        return res.json({
          ...local,
          note: "Live AI temporarily unavailable. Using ASTRA Local Intelligence fallback.",
          upstreamError: openaiError.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Case C: Local Demonstration Engine (Default when no key is set)
    const localResult = generateLocalResponse(trimmed);
    return res.json({
      ...localResult,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error("[ASTRA Server Error]:", err);
    return res.status(500).json({
      error: "Internal server error while processing your request.",
      details: err.message
    });
  }
});

// Start listening
app.listen(PORT, () => {
  const provider = getActiveProvider();
  console.log(`\n==================================================`);
  console.log(`  ✦ ASTRA AI Travel Companion Server Running ✦   `);
  console.log(`  Port: http://localhost:${PORT}`);
  console.log(`  Mode: ${provider.type.toUpperCase()}`);
  console.log(`  Health: http://localhost:${PORT}/api/health`);
  console.log(`==================================================\n`);
});
