// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Navbar.css";
// import LanguageSwitcher from "./LanguageSwitcher";
// import { useTranslation } from "react-i18next";
// import { useTopic } from "../context/TopicContext";
// import { FaArrowRight } from "react-icons/fa";
// import { ReactComponent as BrandMark } from "../assets/svg/airgrid-mark.svg";

// const Navbar = () => {
//   const { t } = useTranslation("common");
//   const { setSelectedTopic } = useTopic();

//   const handleScrollToBooking = () => {
//     setSelectedTopic("general");
//     setTimeout(() => {
//       const el = document.getElementById("booking");
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg transparent-navbar position-absolute top-0 start-0 w-100 px-4">
//       <div className="container-fluid">
//         <Link
//           className="navbar-brand d-flex align-items-center"
//           to="/"
//           aria-label="AirGrid — Home"
//         >
//           <div className="brand-logo-wrap">
//             <BrandMark className="brand-logo" role="img" focusable="false" />
//           </div>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse w-100" id="mainNavbar">
//           <div className="d-flex w-100 flex-column flex-lg-row justify-content-between align-items-lg-center">
//             <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
//               {/* Nav Item 1 */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                 >
//                   {t("navbar_item_1")}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link
//                       className="dropdown-item"
//                       to="/services/property-showcases"
//                     >
//                       {t("nav_item_1_sub_1")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="dropdown-item"
//                       to="/services/aerial-videography"
//                     >
//                       {t("nav_item_1_sub_2")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/inspection">
//                       {t("nav_item_1_sub_3")}
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Nav Item 2 */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                 >
//                   {t("navbar_item_2")}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/services/real-estate">
//                       {t("nav_item_2_sub_1")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/construction">
//                       {t("nav_item_2_sub_2")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/services/events">
//                       {t("nav_item_2_sub_3")}
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Nav Item 3 */}
//               <li className="nav-item dropdown">
//                 <button
//                   className="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                 >
//                   {t("navbar_item_3")}
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" to="/contact-details">
//                       {t("nav_item_3_sub_1")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/about/mission">
//                       {t("nav_item_3_sub_2")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#about">
//                       {t("nav_item_3_sub_3")}
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="#gallery">
//                       {t("nav_item_3_sub_4")}
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>

//             <div className="nav-actions-container">
//               <LanguageSwitcher />
//               <div className="nav-button-wrapper">
//                 <button
//                   className="btn-slide-icon"
//                   onClick={handleScrollToBooking}
//                 >
//                   {t("navbar_quote_btn")} <FaArrowRight className="icon" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTopic } from "../context/TopicContext";
import { FaArrowRight } from "react-icons/fa";
import { ReactComponent as BrandMark } from "../assets/svg/airgrid-mark.svg";

const Navbar = () => {
  const { t } = useTranslation("common");
  const { setSelectedTopic } = useTopic();

  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimer = useRef(null);

  // Clear any pending scroll when the route changes (prevents late scroll on next page)
  useEffect(() => {
    return () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
    };
  }, [location.pathname]);

  const handleScrollToBooking = () => {
    setSelectedTopic("general");

    // If not already on Home, navigate with hash and let ScrollToTop handle it.
    if (location.pathname !== "/") {
      navigate("/#booking");
      return;
    }

    // Already on Home: scroll immediately (no long delay).
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      scrollTimer.current = null;
    }, 0);
  };

  return (
    <nav className="navbar navbar-expand-md transparent-navbar position-absolute top-0 start-0 w-100 px-4">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          aria-label="AirGrid — Home"
        >
          <div className="brand-logo-wrap">
            <BrandMark className="brand-logo" role="img" focusable="false" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse w-100" id="mainNavbar">
          <div className="d-flex w-100 flex-column flex-md-row justify-content-between align-items-md-center">
            <ul className="navbar-nav mx-auto mb-3 mb-md-0">
              {/* Nav Item 1 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {t("navbar_item_1")}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/property-showcases"
                    >
                      {t("nav_item_1_sub_1")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/aerial-videography"
                    >
                      {t("nav_item_1_sub_2")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services/inspection">
                      {t("nav_item_1_sub_3")}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Nav Item 2 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {t("navbar_item_2")}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/services/real-estate">
                      {t("nav_item_2_sub_1")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services/construction">
                      {t("nav_item_2_sub_2")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services/events">
                      {t("nav_item_2_sub_3")}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Nav Item 3 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {t("navbar_item_3")}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/contact-details">
                      {t("nav_item_3_sub_1")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about/mission">
                      {t("nav_item_3_sub_2")}
                    </Link>
                  </li>
                  <li>
                    {/* In-page anchors on the current page will be handled by ScrollToTop hash logic */}
                    <Link className="dropdown-item" to="#about">
                      {t("nav_item_3_sub_3")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#gallery">
                      {t("nav_item_3_sub_4")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="nav-actions-container">
              <LanguageSwitcher />
              <div className="nav-button-wrapper">
                <button
                  className="btn-slide-icon"
                  type="button"
                  onClick={handleScrollToBooking}
                >
                  {t("navbar_quote_btn")} <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
