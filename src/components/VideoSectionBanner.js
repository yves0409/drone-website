import React, { useState, useMemo } from "react";
import "../css/VideoSectionBanner.css";

/**
 * VideoSectionBanner
 * Props:
 * - title, subtitle: string | node
 * - minHeight: CSS size (default "60vh")
 * - overlay: "light" | "medium" | "dark" (default "medium")
 * - className: extra classes on the <section>
 * - floating: ReactNode (e.g., <CustomHomeButton />) -> corner anchored
 * - sources: [{ src: string, type?: string }]  // webm + mp4 recommended
 * - poster: string (optional)
 * - autoPlay, loop, muted, playsInline, preload (optional, sensible defaults)
 */
const VideoSectionBanner = ({
  title,
  subtitle,
  minHeight = "60vh",
  overlay = "medium",
  className = "",
  floating,
  sources = [],
  poster,
  autoPlay,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}) => {
  const [ready, setReady] = useState(false);
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <section
      className={`video-section-banner position-relative d-flex align-items-center text-white ${
        ready ? "is-ready" : ""
      } ${className}`}
      style={{ minHeight }}
    >
      <video
        className="video-section-banner__video"
        poster={poster}
        autoPlay={autoPlay ?? !reducedMotion}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        onLoadedData={() => setReady(true)}
      >
        {sources.map((s, i) => (
          <source key={i} src={s.src} type={s.type} />
        ))}
      </video>

      <div className={`video-section-banner__overlay overlay--${overlay}`} />

      {floating && (
        <div className="video-section-banner__floating">{floating}</div>
      )}

      <div className="container text-center video-section-banner__content">
        {title && <h1 className="display-4">{title}</h1>}
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  );
};

export default VideoSectionBanner;
