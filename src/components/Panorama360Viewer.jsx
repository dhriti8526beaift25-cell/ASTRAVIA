import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

/**
 * Panorama360Viewer Component
 * True WebGL 360° x 180° Equirectangular Sphere Viewer using Three.js.
 * Supports full 360° horizontal rotation, 180° vertical look-up/look-down,
 * mouse drag with inertia, touch swipe on mobile, FOV zoom, and 3D spatial hotspot tracking.
 */
export function Panorama360Viewer({
  panoramaUrl,
  hotspots = [],
  initialLon = 0,
  initialLat = 0,
  onHotspotClick,
  discoveredSpotIds = []
}) {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [projectedHotspots, setProjectedHotspots] = useState([]);

  // Viewer state refs
  const stateRef = useRef({
    lon: initialLon,
    lat: initialLat,
    targetLon: initialLon,
    targetLat: initialLat,
    isUserInteracting: false,
    onPointerDownPointerX: 0,
    onPointerDownPointerY: 0,
    onPointerDownLon: initialLon,
    onPointerDownLat: initialLat,
    fov: 75,
    targetFov: 75,
    camera: null,
    scene: null,
    renderer: null,
    mesh: null,
    material: null,
    animationFrameId: null
  });

  // Hotspots 3D positions calculation
  const getHotspot3DPos = useCallback((lon, lat, radius = 450) => {
    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }, []);

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    setIsLoading(true);
    setHasError(false);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(stateRef.current.fov, width / height, 1, 1200);
    camera.position.set(0, 0, 0);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 3. Equirectangular Sphere Geometry (inverted scale so camera is inside)
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    // 4. Texture Loader with Fallback
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");

    stateRef.current.scene = scene;
    stateRef.current.camera = camera;
    stateRef.current.renderer = renderer;

    textureLoader.load(
      panoramaUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        stateRef.current.mesh = mesh;
        stateRef.current.material = material;
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.warn("Panorama load error, trying fallback texture...", err);
        // Fallback to high-res reliable procedural/scenic texture
        textureLoader.load(
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop",
          (fallbackTexture) => {
            fallbackTexture.colorSpace = THREE.SRGBColorSpace;
            const material = new THREE.MeshBasicMaterial({ map: fallbackTexture });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            stateRef.current.mesh = mesh;
            stateRef.current.material = material;
            setIsLoading(false);
          },
          undefined,
          () => {
            setIsLoading(false);
            setHasError(true);
          }
        );
      }
    );

    // 5. Animation Loop
    const animate = () => {
      stateRef.current.animationFrameId = requestAnimationFrame(animate);

      // Smooth interpolation for camera orientation
      const state = stateRef.current;
      state.lat += (state.targetLat - state.lat) * 0.12;
      state.lon += (state.targetLon - state.lon) * 0.12;
      state.fov += (state.targetFov - state.fov) * 0.15;

      camera.fov = state.fov;
      camera.updateProjectionMatrix();

      // Convert spherical degrees to Cartesian target vector
      const phi = THREE.MathUtils.degToRad(90 - state.lat);
      const theta = THREE.MathUtils.degToRad(state.lon);

      const targetX = 500 * Math.sin(phi) * Math.cos(theta);
      const targetY = 500 * Math.cos(phi);
      const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(targetX, targetY, targetZ);
      renderer.render(scene, camera);

      // 6. Project 3D Hotspots into 2D Screen Space
      if (hotspots && hotspots.length > 0) {
        const containerW = container.clientWidth || width;
        const containerH = container.clientHeight || height;
        const projected = [];

        hotspots.forEach((spot) => {
          const v3 = getHotspot3DPos(spot.lon, spot.lat, 470);
          const screenPos = v3.clone().project(camera);

          // Only visible if in front of camera
          if (screenPos.z < 1.0) {
            const x = (screenPos.x * 0.5 + 0.5) * containerW;
            const y = (-(screenPos.y * 0.5) + 0.5) * containerH;

            // Check if within viewport boundaries
            if (x >= -50 && x <= containerW + 50 && y >= -50 && y <= containerH + 50) {
              projected.push({
                ...spot,
                screenX: x,
                screenY: y,
                isBehind: false
              });
            }
          }
        });
        setProjectedHotspots(projected);
      }
    };

    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (stateRef.current.animationFrameId) {
        cancelAnimationFrame(stateRef.current.animationFrameId);
      }
      if (stateRef.current.renderer) {
        stateRef.current.renderer.dispose();
      }
      if (stateRef.current.geometry) {
        stateRef.current.geometry.dispose();
      }
      if (stateRef.current.material) {
        stateRef.current.material.dispose();
      }
    };
  }, [panoramaUrl, hotspots, getHotspot3DPos]);

  // Set initial camera angles when scene changes
  useEffect(() => {
    stateRef.current.lon = initialLon;
    stateRef.current.lat = initialLat;
    stateRef.current.targetLon = initialLon;
    stateRef.current.targetLat = initialLat;
  }, [initialLon, initialLat, panoramaUrl]);

  // Mouse & Touch Pointer Event Handlers
  const handlePointerDown = (e) => {
    const state = stateRef.current;
    state.isUserInteracting = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    state.onPointerDownPointerX = clientX;
    state.onPointerDownPointerY = clientY;
    state.onPointerDownLon = state.targetLon;
    state.onPointerDownLat = state.targetLat;
  };

  const handlePointerMove = (e) => {
    const state = stateRef.current;
    if (!state.isUserInteracting) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    // Smooth drag sensitivity
    const deltaX = (state.onPointerDownPointerX - clientX) * 0.16;
    const deltaY = (clientY - state.onPointerDownPointerY) * 0.16;

    state.targetLon = state.onPointerDownLon + deltaX;
    // Clamp vertical look angle between -85° and +85°
    state.targetLat = Math.max(-85, Math.min(85, state.onPointerDownLat + deltaY));
  };

  const handlePointerUp = () => {
    stateRef.current.isUserInteracting = false;
  };

  // Mouse Wheel Zoom (FOV control)
  const handleWheel = (e) => {
    e.preventDefault();
    const state = stateRef.current;
    state.targetFov = Math.max(45, Math.min(95, state.targetFov + e.deltaY * 0.05));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: stateRef.current.isUserInteracting ? "grabbing" : "grab",
        userSelect: "none"
      }}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onWheel={handleWheel}
    >
      {/* WebGL Canvas Mount Container */}
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Cinematic Loading Overlay */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, #0b181d 0%, #030708 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 40,
            animation: "fadeIn 0.3s ease"
          }}
        >
          <div style={{ fontSize: "40px", animation: "hotspotPulse 1.4s infinite" }}>🌍</div>
          <span className="section-eyebrow" style={{ marginTop: "16px", marginBottom: "4px" }}>
            INITIALIZING 360° EQUIRECTANGULAR SPHERE
          </span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-primary)" }}>
            Entering 360° Virtual Journey...
          </h3>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
            Mapping full spherical coordinates • Drag or swipe to look around
          </p>
        </div>
      )}

      {/* Fallback Screen if Error */}
      {hasError && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3, 7, 8, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 40,
            padding: "24px",
            textAlign: "center"
          }}
        >
          <p style={{ color: "#ff5252", fontSize: "14px", fontWeight: "bold" }}>
            Virtual environment temporarily unavailable.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>
            Please check network connectivity or refresh the experience.
          </p>
        </div>
      )}

      {/* 3D Spatial Interactive Hotspots Screen Projection */}
      {!isLoading &&
        projectedHotspots.map((spot) => {
          const isDiscovered = discoveredSpotIds.includes(spot.id);

          return (
            <div
              key={spot.id}
              style={{
                position: "absolute",
                left: `${spot.screenX}px`,
                top: `${spot.screenY}px`,
                transform: "translate(-50%, -50%)",
                zIndex: 30,
                cursor: "pointer",
                pointerEvents: "auto",
                transition: "transform 0.15s ease"
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (onHotspotClick) onHotspotClick(spot);
              }}
            >
              {/* Pulsing Beacon */}
              <div style={{ position: "relative", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "-6px",
                    border: `1.5px solid ${isDiscovered ? "#66bb6a" : "var(--accent-gold-light)"}`,
                    borderRadius: "50%",
                    animation: "hotspotPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite"
                  }}
                />
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: isDiscovered ? "#66bb6a" : "var(--accent-gold-light)",
                    borderRadius: "50%",
                    boxShadow: `0 0 12px ${isDiscovered ? "#66bb6a" : "var(--accent-gold)"}`
                  }}
                />
              </div>

              {/* Hotspot Floating Pill Label */}
              <span
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "6px",
                  background: "rgba(6, 12, 15, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${isDiscovered ? "rgba(102, 187, 106, 0.6)" : "var(--border-gold)"}`,
                  color: isDiscovered ? "#66bb6a" : "var(--text-primary)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "10.5px",
                  letterSpacing: "1.2px",
                  whiteSpace: "nowrap",
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.6)"
                }}
              >
                {isDiscovered ? "✓ " : "● "} {spot.title}
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default Panorama360Viewer;
