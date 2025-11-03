// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import "../css/Hero.css";
// import logoWebp from "../assets/airgrid-logo-trim.webp";
// import logoPng from "../assets/airgrid-logo-trim.png";
// import logoPng2x from "../assets/airgrid-logo@2x-trim.png";

// const Hero = () => {
//   const { t } = useTranslation("common");
//   const [ready, setReady] = useState(false);

//   return (
//     <div id="hero" className={`landing-page ${ready ? "is-ready" : ""}`}>
//       {/* <video
//         className="background-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto" // was "metadata"
//         poster="/assets/hero-poster.webp"
//         onLoadedData={() => setReady(true)} // <- key line
//       >
//         <source src="/videos/hero_1080p_web.mp4" type="video/mp4" />
//       </video> */}

//       <video
//         className="background-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         poster="/assets/hero-poster.webp"
//       >
//         <source src="/videos/hero_720p.webm" type="video/webm" />
//         <source src="/videos/hero_1080p.webm" type="video/webm" />
//         <source src="/videos/hero_1080p_fallback.mp4" type="video/mp4" />
//       </video>

//       <div className="video-overlay" />
//       <div className="content-overlay">
//         <h1 className="brand_name_hero" aria-label="AirGrid Creative Solutions">
//           <picture>
//             <source srcSet={logoWebp} type="image/webp" />
//             <img
//               src={logoPng}
//               srcSet={`${logoPng} 1x, ${logoPng2x} 2x`}
//               alt="AirGrid Creative Solutions"
//               className="logo"
//               width={520}
//               height="auto"
//               decoding="async"
//             />
//           </picture>
//         </h1>

//         <h2 className="hero-title">{t("hero_title")}</h2>
//         <h5>{t("hero")}</h5>
//       </div>

//       <div className="fade-transition" />
//     </div>
//   );
// };

// export default Hero;

// src/components/Hero.js

// src/components/Hero.js

// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import "../css/Hero.css";
// import logoWebp from "../assets/airgrid-logo-trim.webp";
// import logoPng from "../assets/airgrid-logo-trim.png";
// import logoPng2x from "../assets/airgrid-logo@2x-trim.png";

// const Hero = () => {
//   const { t } = useTranslation("common");

//   // Controls initial fade-in and swap to video
//   const [ready, setReady] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const [videoReady, setVideoReady] = useState(false);

//   // Start loading the video only when the hero is near the viewport
//   useEffect(() => {
//     const el = document.getElementById("hero");
//     if (!el) return;

//     const io = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setShowVideo(true);
//           io.disconnect();
//         }
//       },
//       { rootMargin: "200px" }
//     );

//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <div id="hero" className={`landing-page ${ready ? "is-ready" : ""}`}>
//       {/* Background poster (LCP target) */}
//       <picture className="hero-poster">
//         <source srcSet="/assets/hero-poster.avif" type="image/avif" />
//         <source srcSet="/assets/hero-poster.webp" type="image/webp" />
//         <img
//           className={`background-poster ${videoReady ? "is-swapped" : ""}`}
//           src="/assets/hero-poster.webp"
//           alt="Background aerial"
//           width={1920}
//           height={1080}
//           loading="eager"
//           decoding="async"
//           fetchpriority="high"
//           onLoad={() => setReady(true)} // Fade in page as soon as poster loads
//         />
//       </picture>

//       {/* Lazy video; only triggers the cross-fade when ready */}
//       {showVideo && (
//         <video
//           className="background-video"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata" // ensures video does NOT block first paint
//           poster="/assets/hero-poster.webp"
//           onLoadedData={() => setVideoReady(true)}
//         >
//           {/* Optional smaller MP4 for mobile first */}
//           <source
//             src="/videos/hero_720p_fallback.mp4"
//             type="video/mp4"
//             media="(max-width: 1024px)"
//           />
//           <source src="/videos/hero_1080p_fallback.mp4" type="video/mp4" />
//         </video>
//       )}

//       {/* Overlays */}
//       <div className="video-overlay" />

//       {/* Centered content */}
//       <div className="content-overlay">
//         <h1 className="brand_name_hero" aria-label="AirGrid Creative Solutions">
//           {/* Logo (not affected by poster positioning) */}
//           <picture>
//             <source srcSet={logoWebp} type="image/webp" />
//             <img
//               src={logoPng}
//               srcSet={`${logoPng} 1x, ${logoPng2x} 2x`}
//               alt="AirGrid Creative Solutions"
//               className="logo"
//               width={520}
//               height={260}
//               decoding="async"
//             />
//           </picture>
//         </h1>

//         <h2 className="hero-title">{t("hero_title")}</h2>
//         <h5>{t("hero")}</h5>
//       </div>

//       <div className="fade-transition" />
//     </div>
//   );
// };

// export default Hero;

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
