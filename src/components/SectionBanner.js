import React, { useState } from "react";
import "../css/SectionBanner.css";

const SectionBanner = ({
  title,
  subtitle,
  image,
  minHeight = "60vh",
  overlay = "medium",
  className = "",
  children,
}) => {
  const [ready, setReady] = useState(false);

  return (
    <section
      className={`section-banner position-relative d-flex align-items-center text-white ${
        ready ? "is-ready" : ""
      } ${className}`}
      style={{ minHeight }}
    >
      <picture>
        <source srcSet={`/assets/${image}.avif`} type="image/avif" />
        <source srcSet={`/assets/${image}.webp`} type="image/webp" />
        <img
          src={`/assets/${image}.png`}
          alt=""
          className="section-banner__image"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          onLoad={() => setReady(true)}
        />
      </picture>

      <div className={`section-banner__overlay overlay--${overlay}`} />

      {/* NEW: floating slot positioned against the banner itself */}
      {children && <div className="section-banner__floating">{children}</div>}

      <div className="container text-center section-banner__content">
        {title && <h1 className="display-4">{title}</h1>}
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  );
};

export default SectionBanner;
