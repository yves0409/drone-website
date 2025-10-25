import React from "react";
import "../css/Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className="landing-page">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
        compressed-hero Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />
      <div className="content-overlay">
        <h1 className="brand_name_hero">SkyPix</h1>
        <h1>{t("hero_title")}</h1>
        <h5>{t("hero")}</h5>
      </div>

      <div className="fade-transition"></div>
    </div>
  );
};

export default Hero;
