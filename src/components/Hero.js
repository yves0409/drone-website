import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "../css/Hero.css";
import logoWebp from "../assets/airgrid-logo-trim.webp";
import logoPng from "../assets/airgrid-logo-trim.png";
import logoPng2x from "../assets/airgrid-logo@2x-trim.png";

const Hero = () => {
  const { t } = useTranslation("common");
  const [visible, setVisible] = useState(false); // fades the section in
  const [swap, setSwap] = useState(false); // fades poster out

  const onPosterLoad = useCallback(() => setVisible(true), []);
  const onVideoCanPlay = useCallback(() => setSwap(true), []);

  return (
    <div id="hero" className={`landing-page ${visible ? "is-ready" : ""}`}>
      {/* poster paints first and makes page visible */}
      <img
        className={`background-poster ${swap ? "is-swapped" : ""}`}
        src="/assets/hero-poster.avif"
        srcSet="/assets/hero-poster.avif 1x, /assets/hero-poster.webp 1x"
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchpriority="high"
        onLoad={onPosterLoad}
      />

      {/* video swaps in after it can play */}
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/hero-poster.avif"
        onCanPlay={onVideoCanPlay}
      >
        <source src="/videos/hero_1080p_web.mp4" type="video/mp4" />
        <source src="/videos/hero_1080p.webm" type="video/webm" />
      </video>

      <div className="video-overlay" />
      <div className="content-overlay">
        <h1 className="brand_name_hero" aria-label="AirGrid Creative Solutions">
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img
              src={logoPng}
              srcSet={`${logoPng} 1x, ${logoPng2x} 2x`}
              alt="AirGrid Creative Solutions"
              className="logo"
              width={520}
              height="auto"
              decoding="async"
            />
          </picture>
        </h1>
        <h2 className="hero-title">{t("hero_title")}</h2>
        <h5>{t("hero")}</h5>
      </div>

      <div className="fade-transition" />
    </div>
  );
};

export default Hero;
