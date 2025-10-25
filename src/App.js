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

const App = () => {
  const location = useLocation();

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
          <Route path="/services/construction" element={<ConstructionPage />} />
          <Route path="/about/team" element={<OurTeamPage />} />
          <Route path="/contact-details" element={<ContactInfoPage />} />
          <Route path="services/events" element={<WeddingsAndEventsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </TopicProvider>
    </>
  );
};

export default App;

////////////////////////////////////////////////////////////////////////////////////

// import React, { Suspense, lazy } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ScrollToTopButton from "./components/ScrollToTopButton";
// // import TopicProvider from "./context/TopicContext";
// import { TopicProvider } from "./context/TopicContext";

// // ✅ Load critical Hero normally (video background)
// import Hero from "./components/Hero";
// import LoadingSpinner from "./components/LoadingSpinner";

// // Lazy load non-critical components
// const Services = lazy(() => import("./components/Services"));
// const About = lazy(() => import("./components/About"));
// const Gallery = lazy(() => import("./components/Gallery"));
// const Booking = lazy(() => import("./components/Booking"));
// const Footer = lazy(() => import("./components/Footer"));

// // Lazy load page components
// const PropertyShowcasePage = lazy(() => import("./pages/PropertyShowcasePage"));
// const AerialVideographyPage = lazy(() =>
//   import("./pages/AerialVideographyPage")
// );
// const ConstructionPage = lazy(() => import("./pages/ConstructionPage"));
// const InspectionPage = lazy(() => import("./pages/InspectionPage"));
// const RealEstatePage = lazy(() => import("./pages/RealEstatePage"));
// const OurMissionPage = lazy(() => import("./pages/OurMissionPage"));
// const OurTeamPage = lazy(() => import("./pages/OurTeamPage"));
// const ContactInfoPage = lazy(() => import("./pages/ContactInfoPage"));
// const WeddingsAndEventsPage = lazy(() =>
//   import("./pages/WeddingsAndEventsPage")
// );
// const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

// const App = () => {
//   const location = useLocation();

//   const hideNavbarOnPaths = [
//     "/services/property-showcases",
//     "/services/aerial-videography",
//     "/services/inspection",
//     "/services/real-estate",
//     "/about/mission",
//     "/services/construction",
//     "/about/team",
//     "/contact-details",
//     "/services/events",
//     "/services/testpage",
//     "/privacy-policy",
//   ];

//   const hideNavbar = hideNavbarOnPaths.includes(location.pathname);

//   return (
//     <TopicProvider>
//       {!hideNavbar && <Navbar />}
//       <ScrollToTopButton />

//       {/* Wrap lazy-loaded content in Suspense */}

//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes>
//           {/* 🟢 Eager-loaded Hero */}
//           <Route path="/" element={<Hero />} />

//           {/* 🔵 Lazy-loaded content */}
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/footer" element={<Footer />} />

//           <Route
//             path="/services/property-showcases"
//             element={<PropertyShowcasePage />}
//           />
//           <Route
//             path="/services/aerial-videography"
//             element={<AerialVideographyPage />}
//           />
//           <Route path="/services/construction" element={<ConstructionPage />} />
//           <Route path="/services/inspection" element={<InspectionPage />} />
//           <Route path="/services/real-estate" element={<RealEstatePage />} />
//           <Route path="/about/mission" element={<OurMissionPage />} />
//           <Route path="/about/team" element={<OurTeamPage />} />
//           <Route path="/contact-details" element={<ContactInfoPage />} />
//           <Route path="/services/events" element={<WeddingsAndEventsPage />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//         </Routes>
//       </Suspense>
//     </TopicProvider>
//   );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { lazy, Suspense } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Booking from "./components/Booking";
// import Footer from "./components/Footer";
// import PropertyShowcasePage from "./pages/PropertyShowcasePage";
// import AerialVideographyPage from "./pages/AerialVideographyPage";
// import OurMissionPage from "./pages/OurMissionPage";
// import OurTeamPage from "./pages/OurTeamPage";
// import ContactInfoPage from "./pages/ContactInfoPage";
// import WeddingsAndEventsPage from "./pages/WeddingsAndEventsPage";
// import ScrollToTopButton from "./components/ScrollToTopButton";
// import { TopicProvider } from "./context/TopicContext";
// import PrivacyPolicy from "./pages/PrivacyPolicyPage";
// // 🧱 Shared skeleton placeholder
// import SkeletonSection from "./components/SkeletonSection";

// // 💤 Lazy loaded components
// const Gallery = lazy(() => import("./components/Gallery"));
// const RealEstatePage = lazy(() => import("./pages/RealEstatePage"));
// const InspectionPage = lazy(() => import("./pages/InspectionPage"));
// const ConstructionPage = lazy(() => import("./pages/ConstructionPage"));

// const App = () => {
//   const location = useLocation();

//   const hideNavbarOnPaths = [
//     "/services/property-showcases",
//     "/services/aerial-videography",
//     "/services/inspection",
//     "/services/real-estate",
//     "/services/construction",
//     "/about/mission",
//     "/about/team",
//     "/contact-details",
//     "/services/events",
//     "/services/testpage",
//     "/privacy-policy",
//   ];

//   const hideNavbar = hideNavbarOnPaths.includes(location.pathname);

//   return (
//     <TopicProvider>
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Services />
//               <About />

//               {/* 👇 Lazy-load with fallback skeleton */}
//               <Suspense fallback={<SkeletonSection />}>
//                 <Gallery />
//               </Suspense>

//               <Booking />
//             </>
//           }
//         />

//         <Route
//           path="/services/property-showcases"
//           element={<PropertyShowcasePage />}
//         />
//         <Route
//           path="/services/aerial-videography"
//           element={<AerialVideographyPage />}
//         />

//         <Route
//           path="/services/inspection"
//           element={
//             <Suspense fallback={<SkeletonSection />}>
//               <InspectionPage />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/services/real-estate"
//           element={
//             <Suspense fallback={<SkeletonSection />}>
//               <RealEstatePage />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/services/construction"
//           element={
//             <Suspense fallback={<SkeletonSection />}>
//               <ConstructionPage />
//             </Suspense>
//           }
//         />

//         <Route path="/about/mission" element={<OurMissionPage />} />
//         <Route path="/about/team" element={<OurTeamPage />} />
//         <Route path="/contact-details" element={<ContactInfoPage />} />
//         <Route path="/services/events" element={<WeddingsAndEventsPage />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       </Routes>

//       <ScrollToTopButton />
//       <Footer />
//     </TopicProvider>
//   );
// };

// export default App;
