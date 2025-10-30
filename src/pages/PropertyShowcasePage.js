import React from "react";
import "../css/PropertyShowcasePage.css";
import { useTranslation } from "react-i18next";
import { FaHome, FaVideo, FaImages, FaStreetView } from "react-icons/fa";
import { FaArrowRight, FaClipboardList, FaEnvelope } from "react-icons/fa";
import AnimatedButtons from "../components/AnimatedButtons";
import DroneTitles from "../components/DroneTitles";
import CustomHomeButton from "../components/CustomHomeButton";

const PropertyShowcasePage = () => {
  const { t } = useTranslation("services");

  const buttons = [
    {
      label: t("book_now"),
      icon: <FaArrowRight className="icon" />,
      to: { pathname: "/", search: "?topic=real-estate", hash: "#booking" },
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
    <div className="realestate-wrapper">
      <div className="video-banner">
        <video
          className="realestate-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto" /* or try "metadata" or "none" depending on your needs */
        >
          <source src="/videos/property_1080p_web.mp4" type="video/mp4" />
        </video>

        <CustomHomeButton />
        <div className="video-overlay">
          <h1>{t("real_estate_title")}</h1>
          <p>{t("real_estate_subtitle")}</p>
        </div>
      </div>

      <section className="realestate-grid">
        <div className="lined-title-wrapper centered">
          <DroneTitles title={t("service_card_showcase_title")} />
        </div>
        <div className="grid-container">
          <div className="grid-card">
            <FaHome className="grid-icon animate-icon" />
            <h3>{t("exterior_views")}</h3>
            <p>{t("exterior_desc")}</p>
          </div>
          <div className="grid-card">
            <FaStreetView className="grid-icon animate-icon" />
            <h3>{t("interior_walkthroughs")}</h3>
            <p>{t("interior_desc")}</p>
          </div>
          <div className="grid-card">
            <FaImages className="grid-icon animate-icon" />
            <h3>{t("aerial_photos")}</h3>
            <p>{t("aerial_desc")}</p>
          </div>
          <div className="grid-card">
            <FaVideo className="grid-icon animate-icon" />
            <h3>{t("promo_videos")}</h3>
            <p>{t("promo_desc")}</p>
          </div>
        </div>

        <AnimatedButtons title={t("explore_services")} buttons={buttons} />
      </section>
    </div>
  );
};

export default PropertyShowcasePage;
