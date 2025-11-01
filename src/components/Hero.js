// import React from "react";
// import { useTranslation } from "react-i18next";
// import "../css/Hero.css";
// import logoWebp from "../assets/airgrid-logo.webp";
// import logoPng from "../assets/airgrid-logo.png";
// import logoPng2x from "../assets/airgrid-logo@2x.png";

// const Hero = () => {
//   const { t } = useTranslation("common");

//   return (
//     <div id="hero" className="landing-page">

//       <video
//         className="background-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//         poster="/assets/hero-poster.webp"
//       >
//         <source src="/videos/hero_1080p_web.mp4" type="video/mp4" />
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

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Hero.css";
import logoWebp from "../assets/airgrid-logo-trim.webp";
import logoPng from "../assets/airgrid-logo-trim.png";
import logoPng2x from "../assets/airgrid-logo@2x-trim.png";
// import logoWebp from "../assets/airgrid-logo.webp";
// import logoPng from "../assets/airgrid-logo.png";
// import logoPng2x from "../assets/airgrid-logo@2x.png";

const Hero = () => {
  const { t } = useTranslation("common");
  const [ready, setReady] = useState(false);

  return (
    <div id="hero" className={`landing-page ${ready ? "is-ready" : ""}`}>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // was "metadata"
        poster="/assets/hero-poster.webp"
        onLoadedData={() => setReady(true)} // <- key line
      >
        <source src="/videos/hero_1080p_web.mp4" type="video/mp4" />
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
