import React from "react";
// import { Link } from "react-router-dom";
import "../css/InspectionPage.css";
import { useTranslation } from "react-i18next";
import {
  FaHardHat,
  FaBuilding,
  FaMountain,
  FaCogs,
  FaArrowRight,
  FaEnvelope,
  FaClipboardList,
} from "react-icons/fa";
import AnimatedButtons from "../components/AnimatedButtons";
import DroneTitles from "../components/DroneTitles";
import CustomHomeButton from "../components/CustomHomeButton";

const InspectionPage = () => {
  const { t } = useTranslation("services");

  const buttons = [
    {
      label: t("book_now"),
      icon: <FaArrowRight className="icon" />,
      to: { pathname: "/", search: "?topic=inspection", hash: "#booking" },
      className: "btn-slide-icon",
    },
    {
      label: t("contact"),
      icon: <FaEnvelope style={{ marginRight: "0.5rem" }} />,
      to: "/contact-details",
      className: "btn-animated-border",
    },
    {
      label: t("get_a_quote"),
      icon: <FaClipboardList style={{ marginRight: "0.5rem" }} />,
      to: { pathname: "/", search: "?topic=general", hash: "#booking" },
      className: "btn-glow-fill",
    },
  ];

  return (
    <div className="inspection-wrapper">
      <div className="video-banner">
        <video
          className="inspection-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto" /* or try "metadata" or "none" depending on your needs */
        >
          <source src="/videos/inspection_1080p_web.mp4" type="video/mp4" />
        </video>

        <CustomHomeButton />
        <div className="video-overlay">
          <h1>{t("inspection_title")}</h1>
          <p>{t("inspection_subtitle")}</p>
        </div>
      </div>

      <section className="inspection-grid">
        <div className="lined-title-wrapper centered">
          <DroneTitles title={t("service_card_inspection_title")} />
        </div>

        <div className="grid-container">
          <div className="grid-card">
            <FaHardHat className="grid-icon animate-icon" />
            <h3>{t("construction_sites")}</h3>
            <p>{t("construction_desc")}</p>
          </div>
          <div className="grid-card">
            <FaBuilding className="grid-icon animate-icon" />
            <h3>{t("building_facades")}</h3>
            <p>{t("building_desc")}</p>
          </div>
          <div className="grid-card">
            <FaMountain className="grid-icon animate-icon" />
            <h3>{t("remote_areas")}</h3>
            <p>{t("remote_desc")}</p>
          </div>
          <div className="grid-card">
            <FaCogs className="grid-icon animate-icon" />
            <h3>{t("industrial_equipment")}</h3>
            <p>{t("industrial_desc")}</p>
          </div>
        </div>

        <AnimatedButtons title={t("explore_services")} buttons={buttons} />
      </section>
    </div>
  );
};

export default InspectionPage;
