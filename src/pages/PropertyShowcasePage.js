import React from "react";
import "../css/PropertyShowcasePage.css";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaVideo,
  FaImages,
  FaStreetView,
  FaArrowRight,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";
import AnimatedButtons from "../components/AnimatedButtons";
import DroneTitles from "../components/DroneTitles";
import CustomHomeButton from "../components/CustomHomeButton";
import VideoSectionBanner from "../components/VideoSectionBanner";

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
      <VideoSectionBanner
        title={t("showcase_title")}
        subtitle={t("showcase_subtitle")}
        overlay="light"
        minHeight="70vh"
        floating={<CustomHomeButton />}
        sources={[
          // include webm for better compression if available
          { src: "/videos/property_1080p_web.webm", type: "video/webm" },
          // { src: "/videos/property_1080p_web.mp4", type: "video/mp4" },
          {
            src: "https://res.cloudinary.com/yves/video/upload/v1762559289/itbqve8sp0wqmd8bncfn.mp4",
            type: "video/mp4",
          },
        ]}
        poster="/assets/property-poster.webp"
      />

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
