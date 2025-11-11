import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import PropertyShowcasePage from "./pages/PropertyShowcasePage";
import AerialVideographyPage from "./pages/AerialVideographyPage";
import InspectionPage from "./pages/InspectionPage";
import ConstructionPage from "./pages/ConstructionPage";
import RealEstatePage from "./pages/RealEstatePage";
import OurMissionPage from "./pages/OurMissionPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactInfoPage from "./pages/ContactInfoPage";
import WeddingsAndEventsPage from "./pages/WeddingsAndEventsPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { TopicProvider } from "./context/TopicContext";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePageViews from "./analytics/usePageViews";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  usePageViews("G-SBVCJYYHJF");

  // A) Disable browser scroll history memory between routes
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // B) Always reset to top on real route changes (no hash)
  useEffect(() => {
    // Only when the path changes; not for hash/state noise
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0; // extra safety
    document.body.scrollTop = 0; // extra safety
  }, [location.pathname]);

  // C) Handle one-time scroll to booking when we *intentionally* asked for it
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo === "booking") {
      requestAnimationFrame(() => {
        document.getElementById("booking")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      // Clear the state so future Home visits land at the hero
      navigate("/", { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate]);

  // Define paths where the navbar should be hidden
  const hideNavbarOnPaths = [
    "/services/property-showcases",
    "/services/aerial-videography",
    "/services/inspection",
    "/services/real-estate",
    "/services/construction",
    "/about/mission",
    "/services/construction",
    "/about/team",
    "/contact-details",
    "/services/events",
    "/services/testpage",
    "/privacy-policy",
  ];

  const hideNavbar = hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      <TopicProvider>
        {!hideNavbar && <Navbar />}
        {/* <ScrollToTop /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Services />
                <About />
                <Gallery />
                <Booking />
              </>
            }
          />
          <Route
            path="/services/property-showcases"
            element={<PropertyShowcasePage />}
          />
          <Route
            path="/services/aerial-videography"
            element={<AerialVideographyPage />}
          />
          <Route path="/services/inspection" element={<InspectionPage />} />
          <Route path="/services/real-estate" element={<RealEstatePage />} />
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/about/mission" element={<OurMissionPage />} />
          <Route path="/about/team" element={<OurTeamPage />} />
          <Route path="/contact-details" element={<ContactInfoPage />} />
          <Route path="/services/events" element={<WeddingsAndEventsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ScrollToTopButton />

        <Footer />
      </TopicProvider>
    </>
  );
};

export default App;
