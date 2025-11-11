import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher"; // ✅ ensure this import exists
import { useTranslation } from "react-i18next";
import { useTopic } from "../context/TopicContext";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation("common");
  const { setSelectedTopic } = useTopic();

  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    const closeAll = () => {
      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        menu.classList.remove("show");
        const parent = menu.closest(".dropdown");
        if (parent) parent.classList.remove("show");
        const toggle = parent?.querySelector(
          '.dropdown-toggle[aria-expanded="true"]'
        );
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });

      const openCollapse = document.querySelector(".navbar-collapse.show");
      const openToggler = document.querySelector(
        '.navbar-toggler[aria-expanded="true"]'
      );
      if (openCollapse && openToggler) {
        openCollapse.classList.remove("show");
        openToggler.setAttribute("aria-expanded", "false");
        openCollapse.style.height = "";
      }
    };

    const onScrollish = () => closeAll();
    const targets = [
      window,
      document,
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.querySelector("#root"),
      document.querySelector("main"),
      document.querySelector(".landing-page"),
      document.querySelector(".page-wrapper"),
      document.querySelector(".container-fluid"),
    ].filter(Boolean);

    const opts = { passive: true };
    targets.forEach((t) => t.addEventListener("scroll", onScrollish, opts));
    window.addEventListener("wheel", onScrollish, opts);
    window.addEventListener("touchmove", onScrollish, opts);
    const onKey = (e) => {
      if (
        [
          "PageDown",
          "PageUp",
          "End",
          "Home",
          "ArrowDown",
          "ArrowUp",
          " ",
        ].includes(e.key)
      )
        closeAll();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      targets.forEach((t) => t.removeEventListener("scroll", onScrollish));
      window.removeEventListener("wheel", onScrollish);
      window.removeEventListener("touchmove", onScrollish);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleScrollToBooking = () => {
    setSelectedTopic("general");
    if (location.pathname === "/") {
      document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/", { state: { scrollTo: "booking" } });
    }
  };

  // 👇 scroll-to-top when logo is clicked
  const handleBrandClick = (e) => {
    // close any open mobile menu if needed here

    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      e.preventDefault();
      navigate("/", { state: { scrollTo: "hero" } });
    }
  };

  return (
    <nav className="navbar navbar-expand-xl transparent-navbar position-absolute top-0 start-0 w-100 px-4 py-2">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          aria-label="AirGrid — Home"
          onClick={handleBrandClick}
        >
          <div className="brand-logo-wrap">
            <img
              src="/assets/ag-logo-black.svg"
              alt="AirGrid — Creative Solutions"
              className="brand-logo"
              // width={220}
              // height={220}
              decoding="async"
              loading="eager"
            />
          </div>
        </Link>

        {/* ✅ Language switcher next to logo on DESKTOP only */}
        <div className="ms-3 d-none d-xl-flex align-items-center">
          <LanguageSwitcher />
        </div>

        {/* Toggler */}
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

        {/* Menu */}
        <div className="collapse navbar-collapse w-100" id="mainNavbar">
          <div className="d-flex w-100 flex-column flex-md-row justify-content-between align-items-md-center">
            <ul className="navbar-nav mx-auto mb-3 mb-md-0">
              {/* Nav Item 1 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  // data-bs-display="static"
                  data-bs-offset="0,8"
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
                  // data-bs-display="static"
                  data-bs-offset="0,8"
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
                  // data-bs-display="static"
                  data-bs-offset="0,8"
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

            {/* Right actions */}
            <div className="nav-actions-container">
              {/* ✅ Mobile/tablet language switcher (hidden on desktop) */}
              <LanguageSwitcher className="d-xl-none" />

              <div className="nav-button-wrapper">
                <button
                  className="btn-slide-icon-2"
                  type="button"
                  onClick={handleScrollToBooking}
                >
                  {t("navbar_quote_btn")} <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
            {/* /Right actions */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
