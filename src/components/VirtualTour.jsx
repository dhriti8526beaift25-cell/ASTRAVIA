import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Panorama360Viewer from "./Panorama360Viewer";
import HotspotModal from "./HotspotModal";
import TourQuizModal from "./TourQuizModal";
import soundEngine from "../services/soundEngine";
import { getVirtualTour } from "../data/virtualTours";

/**
 * VirtualTour Component
 * True Immersive 360° WebGL Panoramic Experience with Three.js,
 * multi-scene navigation, destination-specific procedural soundscapes,
 * 3D spatial hotspot projection, and Explorer Passport integration.
 * Guaranteed 100% content & data isolation per destination.
 */
export function VirtualTour({
  destination,
  isAudioPlaying = false,
  onToggleAudio
}) {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Load centralized rich virtual tour data
  const tourData = useMemo(() => getVirtualTour(destination?.id), [destination?.id]);
  const allTourScenes = tourData.scenes || [];

  // Filter scenes strictly by destinationId to prevent ANY cross-destination contamination
  const scenes = useMemo(() => {
    return allTourScenes.filter((sc) => !sc.destinationId || sc.destinationId === destination?.id);
  }, [allTourScenes, destination?.id]);

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(isAudioPlaying);

  // Discovered progress tracking
  const [discoveredSpotIds, setDiscoveredSpotIds] = useState([]);
  const [isJourneyComplete, setIsJourneyComplete] = useState(false);

  // Reset state whenever destination changes
  useEffect(() => {
    setCurrentSceneIndex(0);
    setActiveHotspot(null);
    setIsQuizOpen(false);
    setIsJourneyComplete(false);
    soundEngine.stop();
    soundEngine.stopNarration();
  }, [destination?.id]);

  const safeIndex = currentSceneIndex < scenes.length ? currentSceneIndex : 0;
  const currentScene = scenes[safeIndex] || scenes[0];

  // Hotspots for current scene filtered strictly by destinationId and sceneId
  const currentSceneHotspots = useMemo(() => {
    if (!currentScene || !Array.isArray(currentScene.hotspots)) return [];
    return currentScene.hotspots.filter(
      (spot) =>
        (!spot.destinationId || spot.destinationId === destination?.id) &&
        (!spot.sceneId || spot.sceneId === currentScene.id)
    );
  }, [currentScene, destination?.id]);

  // Load existing discovered hotspots from localStorage
  useEffect(() => {
    if (!destination?.id) return;
    try {
      const savedProgress = JSON.parse(localStorage.getItem("astravia_discovered_hotspots") || "{}");
      const destProgress = savedProgress[destination.id] || [];
      setDiscoveredSpotIds(destProgress);
    } catch (e) {}
  }, [destination?.id]);

  // Manage Soundscape playback based on active scene soundProfile
  useEffect(() => {
    if (soundEnabled && currentScene?.soundProfile) {
      soundEngine.playProfile(currentScene.soundProfile);
    } else {
      soundEngine.stop();
    }

    return () => {
      soundEngine.stop();
      soundEngine.stopNarration();
    };
  }, [soundEnabled, destination?.id, safeIndex, currentScene?.soundProfile]);

  // Sound toggle handler
  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (onToggleAudio) onToggleAudio();
  };

  // Hotspot click handler
  const handleHotspotClick = (spot) => {
    setActiveHotspot(spot);

    setDiscoveredSpotIds((prev) => {
      if (!prev.includes(spot.id)) {
        const updated = [...prev, spot.id];
        try {
          const allProgress = JSON.parse(localStorage.getItem("astravia_discovered_hotspots") || "{}");
          allProgress[destination.id] = updated;
          localStorage.setItem("astravia_discovered_hotspots", JSON.stringify(allProgress));

          // Calculate total hotspots across all scenes
          const totalTourHotspots = scenes.reduce((acc, sc) => acc + (sc.hotspots?.length || 0), 0);
          if (updated.length >= Math.max(1, totalTourHotspots)) {
            setIsJourneyComplete(true);

            // Award verified Explorer Passport stamp
            const stamps = JSON.parse(localStorage.getItem("astravia_passport_stamps") || "{}");
            if (!stamps[destination.id]) {
              stamps[destination.id] = {
                date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
                verified: true
              };
              localStorage.setItem("astravia_passport_stamps", JSON.stringify(stamps));
            }
          }
        } catch (e) {}
        return updated;
      }
      return prev;
    });
  };

  // Scene navigation handlers
  const handleNextScene = () => {
    setActiveHotspot(null);
    soundEngine.stopNarration();
    if (currentSceneIndex < scenes.length - 1) {
      setCurrentSceneIndex((prev) => prev + 1);
    } else {
      setCurrentSceneIndex(0);
    }
  };

  const handlePrevScene = () => {
    setActiveHotspot(null);
    soundEngine.stopNarration();
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex((prev) => prev - 1);
    } else {
      setCurrentSceneIndex(scenes.length - 1);
    }
  };

  const handleSelectScene = (idx) => {
    setActiveHotspot(null);
    soundEngine.stopNarration();
    setCurrentSceneIndex(idx);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  const totalHotspots = scenes.reduce((acc, sc) => acc + (sc.hotspots?.length || 0), 0);
  const progressPercent = totalHotspots > 0
    ? Math.min(100, Math.round((discoveredSpotIds.length / totalHotspots) * 100))
    : 100;

  if (!currentScene) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#030708", color: "#fff" }}>
        <p>Initializing virtual journey coordinates for {destination?.name || "destination"}...</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="virtual-tour-container"
      style={{ position: "relative", width: "100%", height: "100vh", background: "#030708", overflow: "hidden" }}
      id="virtual-tour"
    >
      {/* 1. Real WebGL 360° Equirectangular Sphere Canvas */}
      <Panorama360Viewer
        key={`${destination.id}-${currentScene.id}`}
        panoramaUrl={currentScene.panoramaUrl}
        hotspots={currentSceneHotspots}
        initialLon={currentScene.initialLon || 0}
        initialLat={currentScene.initialLat || 0}
        onHotspotClick={handleHotspotClick}
        discoveredSpotIds={discoveredSpotIds}
      />

      {/* Cinematic Vignette Overlay */}
      <div className="tour-vignette-overlay" style={{ pointerEvents: "none" }} />

      {/* 2. Top HUD Navigation & Status Bar */}
      <div className="tour-header-bar" style={{ pointerEvents: "none" }}>
        {/* Destination & Active Scene Badge */}
        <div className="tour-title-badge" style={{ pointerEvents: "auto" }}>
          <span className="tour-drag-hint">
            ✥ 360° EQUIRECTANGULAR SPHERE &bull; {safeIndex + 1}/{scenes.length}
          </span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "var(--text-primary)", margin: "3px 0" }}>
            {destination.name} &bull; {currentScene.title}
          </h3>
          <p style={{ fontSize: "11px", color: "var(--accent-gold-light)", margin: 0 }}>
            {currentScene.subtitle}
          </p>
        </div>

        {/* Top Control Tools */}
        <div className="tour-controls-top" style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Sound Toggle Button */}
          <button
            className="tour-tool-btn"
            onClick={handleToggleSound}
            style={{
              background: soundEnabled ? "rgba(197, 162, 106, 0.25)" : "rgba(6, 12, 15, 0.85)",
              borderColor: soundEnabled ? "var(--accent-gold)" : "var(--border-subtle)",
              color: soundEnabled ? "var(--accent-gold-light)" : "var(--text-secondary)"
            }}
            title={soundEnabled ? "Mute Ambient Audio" : "Enable Destination Audio"}
          >
            {soundEnabled ? `🔊 ${(currentScene.soundProfile || "AUDIO").toUpperCase().replace("_", " ")}` : "🔇 SOUND OFF"}
          </button>

          {/* Quiz Trigger */}
          {destination.quiz && (
            <button
              className="tour-tool-btn"
              style={{ background: "rgba(197, 162, 106, 0.15)", borderColor: "var(--accent-gold)" }}
              onClick={() => setIsQuizOpen(true)}
              title="Test your exploration knowledge"
            >
              🏆 QUIZ
            </button>
          )}

          {/* Fullscreen Toggle */}
          <button className="tour-tool-btn" onClick={toggleFullscreen} title="Toggle Fullscreen">
            ⛶ FULLSCREEN
          </button>

          {/* Exit / Return to Overview */}
          <Link
            to={`/destination/${destination.id}`}
            className="tour-tool-btn"
            style={{ background: "rgba(255, 255, 255, 0.08)" }}
            title="Return to Destination Overview"
          >
            ✕ EXIT
          </Link>
        </div>
      </div>

      {/* 3. Bottom Scene Navigation & Progress Shelf */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "24px",
          right: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 30,
          pointerEvents: "none"
        }}
      >
        {/* Bottom Left: Drag & Orientation Hint */}
        <div
          style={{
            background: "rgba(6, 12, 15, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-full)",
            padding: "8px 16px",
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "var(--text-muted)",
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <span>✥</span>
          <span>DRAG MOUSE OR SWIPE TO EXPLORE 360° &bull; SCROLL TO ZOOM</span>
        </div>

        {/* Bottom Center: Multi-Scene Switcher Carousel */}
        {scenes.length > 1 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(6, 12, 15, 0.9)",
              backdropFilter: "blur(16px)",
              padding: "6px 12px",
              borderRadius: "var(--radius-full)",
              border: "1.5px solid var(--border-gold)",
              pointerEvents: "auto",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.8)"
            }}
          >
            <button
              onClick={handlePrevScene}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent-gold-light)",
                fontSize: "12px",
                padding: "4px 8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              title="Previous Location"
            >
              &larr; PREV
            </button>

            {scenes.map((sc, idx) => (
              <button
                key={sc.id || idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "10.5px",
                  letterSpacing: "1px",
                  color: safeIndex === idx ? "var(--text-primary)" : "var(--text-muted)",
                  background: safeIndex === idx ? "var(--accent-gold)" : "transparent",
                  fontWeight: safeIndex === idx ? "700" : "400",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onClick={() => handleSelectScene(idx)}
              >
                <span>●</span>
                <span>{sc.title.split("&")[0].split("•")[0]}</span>
              </button>
            ))}

            <button
              onClick={handleNextScene}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent-gold-light)",
                fontSize: "12px",
                padding: "4px 8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              title="Next Location"
            >
              NEXT &rarr;
            </button>
          </div>
        )}

        {/* Bottom Right: Discovery Progress Gauge */}
        <div
          style={{
            background: "rgba(6, 12, 15, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--border-gold)",
            borderRadius: "var(--radius-full)",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            pointerEvents: "auto"
          }}
        >
          <div style={{ width: "60px", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                background: "var(--accent-gold-light)",
                transition: "width 0.3s ease"
              }}
            />
          </div>
          <span style={{ fontSize: "10px", color: "var(--accent-gold-light)", fontWeight: "bold" }}>
            {discoveredSpotIds.length} / {Math.max(1, totalHotspots)} Discovered ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* 4. Hotspot Discovery Modal with Narration */}
      {activeHotspot && (
        <HotspotModal
          hotspot={activeHotspot}
          onClose={() => {
            soundEngine.stopNarration();
            setActiveHotspot(null);
          }}
        />
      )}

      {/* 5. Tour Complete Certification Modal */}
      {isJourneyComplete && (
        <div className="hotspot-modal-backdrop" onClick={() => setIsJourneyComplete(false)}>
          <div
            className="hotspot-modal-card"
            style={{ maxWidth: "540px", textAlign: "center", padding: "40px 28px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: "48px", marginBottom: "8px" }}>🎖️</div>
            <p className="modal-category-tag">100% DISCOVERED &bull; PASSPORT STAMP AWARDED</p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", color: "var(--text-primary)", margin: "8px 0 12px" }}>
              {destination.name} Has Been Fully Explored!
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "28px", lineHeight: "1.6" }}>
              You have uncovered all 360° spatial landmarks and scenes across <strong>{destination.name}</strong>. An official verified stamp has been permanently added to your <strong>Explorer Passport</strong>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "340px", margin: "0 auto" }}>
              {destination.quiz && (
                <button
                  className="btn-primary"
                  onClick={() => {
                    setIsJourneyComplete(false);
                    setIsQuizOpen(true);
                  }}
                >
                  TAKE DISCOVERY QUIZ &rarr;
                </button>
              )}
              <Link
                to="/my-journey"
                className="btn-secondary"
                onClick={() => setIsJourneyComplete(false)}
              >
                VIEW EXPLORER PASSPORT
              </Link>
              <button
                className="btn-secondary"
                onClick={() => setIsJourneyComplete(false)}
              >
                CONTINUE 360° EXPLORATION
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Discovery Quiz Modal */}
      {isQuizOpen && (
        <TourQuizModal
          quiz={destination.quiz}
          destinationName={destination.name}
          destinationId={destination.id}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
}

export default VirtualTour;
