import React from "react";
// import { Link } from "react-router-dom";
import "../css/AerialVideographyPage.css";
import { useTranslation } from "react-i18next";
import {
  FaFilm,
  FaCity,
  FaTree,
  FaSun,
  FaArrowRight,
  FaEnvelope,
  FaClipboardList,
} from "react-icons/fa";
import AnimatedButtons from "../components/AnimatedButtons";
import DroneTitles from "../components/DroneTitles";
import CustomHomeButton from "../components/CustomHomeButton";

const AerialVideographyPage = () => {
  const { t } = useTranslation("services");

  const buttons = [
    {
      label: t("book_now"),
      icon: <FaArrowRight className="icon" />,
      to: { pathname: "/", search: "?topic=events", hash: "#booking" },
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
    <div className="aerial-wrapper">
      <div className="video-banner">
        <video autoPlay muted loop playsInline className="aerial-video">
          <source src="/videos/areal_1080_web.mp4" type="video/mp4" />
        </video>

        <CustomHomeButton />
        <div className="video-overlay">
          <h1>{t("aerial_title")}</h1>
          <p>{t("aerial_subtitle")}</p>
        </div>
      </div>

      <section className="aerial-grid">
        <div className="lined-title-wrapper centered">
          <DroneTitles title={t("service_card_Aereal_title")} />
        </div>

        <div className="grid-container">
          <div className="grid-card">
            <FaFilm className="grid-icon animate-icon" />
            <h3>{t("cinematic_shots")}</h3>
            <p>{t("cinematic_desc")}</p>
          </div>
          <div className="grid-card">
            <FaCity className="grid-icon animate-icon" />
            <h3>{t("urban_landscapes")}</h3>
            <p>{t("urban_desc")}</p>
          </div>
          <div className="grid-card">
            <FaTree className="grid-icon animate-icon" />
            <h3>{t("nature_views")}</h3>
            <p>{t("nature_desc")}</p>
          </div>
          <div className="grid-card">
            <FaSun className="grid-icon animate-icon" />
            <h3>{t("sunset_shots")}</h3>
            <p>{t("sunset_desc")}</p>
          </div>
        </div>

        <AnimatedButtons title={t("explore_services")} buttons={buttons} />
      </section>
    </div>
  );
};

export default AerialVideographyPage;
