import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import Destination from "./pages/Destination";
import VirtualTourPage from "./pages/VirtualTourPage";
import VirtualMuseumPage from "./pages/VirtualMuseumPage";
import Experiences from "./pages/Experiences";
import Stories from "./pages/Stories";
import MyJourney from "./pages/MyJourney";
import Itinerary from "./pages/Itinerary";
import NotFound from "./pages/NotFound";
import AstraChatbot from "./components/astra/AstraChatbot";
import { useLocalStorage } from "./hooks/useLocalStorage";

/**
 * ScrollToTop Helper Component
 * Automatically resets scroll position to top on route change.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * AppContent Component
 * Conditionally manages Navbar & Footer visibility for full-bleed 360° Virtual Tours.
 */
function AppContent() {
  const location = useLocation();
  const isVirtualTourRoute =
    location.pathname.startsWith("/journey") ||
    location.pathname.startsWith("/virtual-journey") ||
    location.pathname.startsWith("/virtual-tour");

  // 1. Saved destinations persistent state in localStorage
  const [savedIds, setSavedIds] = useLocalStorage("astravia_saved_journeys", ["paris", "kashmir", "tokyo"]);

  // 2. Ambient Audio state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleToggleSave = (destinationId) => {
    setSavedIds((prev) => {
      if (prev.includes(destinationId)) {
        return prev.filter((id) => id !== destinationId);
      } else {
        return [...prev, destinationId];
      }
    });
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <>
      <ScrollToTop />

      {/* Global Navbar (Hidden during full-bleed 360° virtual tours) */}
      {!isVirtualTourRoute && (
        <Navbar
          savedCount={savedIds.length}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
        />
      )}

      {/* Multi-Page Routes */}
      <Routes>
        {/* 1. Home Page */}
        <Route path="/" element={<Home />} />

        {/* 2. Explore the World Page & Aliases */}
        <Route
          path="/explore"
          element={
            <Explore
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />
        <Route
          path="/discover"
          element={
            <Explore
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />
        <Route
          path="/destinations"
          element={
            <Explore
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />

        {/* 3. Countries Explorer */}
        <Route path="/countries" element={<Countries />} />

        {/* 4. Country -> State/Region Explorer */}
        <Route path="/country/:country" element={<CountryDetail />} />
        <Route path="/country/:countryId" element={<CountryDetail />} />

        {/* 5. Destination Detail Page */}
        <Route
          path="/destination/:destination"
          element={
            <Destination
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />
        <Route
          path="/destination/:id"
          element={
            <Destination
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />

        {/* 6. True 360° Full-Screen Virtual Tour Pages */}
        <Route path="/journey/:destination" element={<VirtualTourPage />} />
        <Route path="/journey/:id" element={<VirtualTourPage />} />
        <Route path="/virtual-journey/:id" element={<VirtualTourPage />} />
        <Route path="/virtual-tour/:id" element={<VirtualTourPage />} />

        {/* 7. Dedicated Itinerary Planner Page */}
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/plan" element={<Itinerary />} />

        {/* 8. My Saved Journey Dashboard & Explorer Passport */}
        <Route
          path="/my-journey"
          element={
            <MyJourney
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          }
        />

        {/* 9. Virtual Museum & Artifact Gallery */}
        <Route path="/museum" element={<VirtualMuseumPage />} />

        {/* 10. Curated Experiences & Dimensions */}
        <Route path="/experiences" element={<Experiences />} />

        {/* 11. Travel Stories Page */}
        <Route path="/stories" element={<Stories />} />

        {/* 12. Custom 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Footer (Hidden during full-bleed 360° virtual tours) */}
      {!isVirtualTourRoute && <Footer />}

      {/* Global ASTRA AI Travel Companion */}
      <AstraChatbot />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;