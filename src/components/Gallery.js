// import React, { useState } from "react";
// import "../css/Gallery.css";
// import { useTranslation } from "react-i18next";
// import FadeInSection from "../components/FadeInSection";

// const Gallery = () => {
//   const [enlargedVideo, setEnlargedVideo] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const { t } = useTranslation("common");

//   return (
//     <section id="gallery" className="gallery-section text-center">
//       <FadeInSection>
//         <div className="container">
//           <h2 className="mb-5">{t("gallery_title")}</h2>
//           <div className="row g-3">
//             {[1, 2, 3, 4, 5, 6].map((i, idx) => (
//               <div className="col-sm-6 col-md-4" key={i}>
//                 {/* <video
//                   className={`img-fluid rounded shadow-sm gallery-img ${
//                     hoveredIndex !== null && hoveredIndex !== idx
//                       ? "blurred"
//                       : ""
//                   }`}
//                   onMouseEnter={() => setHoveredIndex(idx)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                   onClick={() => setEnlargedVideo(`/gallery/gallery${i}.mp4`)}
//                   muted
//                   loop
//                   playsInline
//                   autoPlay
//                 >
//                   <source src={`/gallery/gallery${i}.mp4`} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video> */}
//                 {[1, 2, 3, 4, 5, 6].map((i, idx) => (
//                   <video
//                     key={i}
//                     className={`img-fluid rounded shadow-sm gallery-img ${
//                       hoveredIndex !== null && hoveredIndex !== idx
//                         ? "blurred"
//                         : ""
//                     }`}
//                     // don't download until needed
//                     preload="none"
//                     // show a tiny preview image instead of downloading video data
//                     poster={`/gallery/thumbs/gallery${i}.webp`}
//                     // UX: play/pause on hover (still muted for autoplay rules)
//                     muted
//                     loop
//                     playsInline
//                     onMouseEnter={(e) => {
//                       setHoveredIndex(idx);
//                       e.currentTarget.play();
//                     }}
//                     onMouseLeave={(e) => {
//                       setHoveredIndex(null);
//                       e.currentTarget.pause();
//                       e.currentTarget.currentTime = 0;
//                     }}
//                     onClick={() =>
//                       setEnlargedVideo(`/gallery/gallery${i}.web.mp4`)
//                     }
//                   >
//                     <source
//                       src={`/gallery/gallery${i}.web.mp4`}
//                       type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                   </video>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {enlargedVideo && (
//           <div className="image-modal" onClick={() => setEnlargedVideo(null)}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//               <div className="image-wrapper">
//                 <video
//                   src={enlargedVideo}
//                   controls
//                   autoPlay
//                   className="modal-video enlarged"
//                 />
//                 <button
//                   className="close-btn"
//                   onClick={() => setEnlargedVideo(null)}
//                 >
//                   &times;
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </FadeInSection>
//     </section>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import "../css/Gallery.css";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection";

const VIDEO_IDS = [1, 2, 3, 4, 5, 6]; // adjust if you have more/less

const Gallery = () => {
  const [enlargedVideo, setEnlargedVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation("common");

  return (
    <section id="gallery" className="gallery-section text-center">
      <FadeInSection>
        <div className="container">
          <h2 className="mb-5">{t("gallery_title")}</h2>

          <div className="row g-3">
            {VIDEO_IDS.map((i, idx) => (
              <div key={i} className="col-12 col-sm-6 col-md-4">
                <video
                  className={`img-fluid rounded shadow-sm gallery-img ${
                    hoveredIndex !== null && hoveredIndex !== idx
                      ? "blurred"
                      : ""
                  }`}
                  preload="none"
                  poster={`/gallery/thumbs/gallery${i}.webp`}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => {
                    setHoveredIndex(idx);
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  onClick={() =>
                    setEnlargedVideo(`/gallery/gallery${i}.web.mp4`)
                  }
                >
                  <source
                    src={`/gallery/gallery${i}.web.mp4`}
                    type="video/mp4"
                  />
                  {t("video_not_supported") ||
                    "Your browser does not support the video tag."}
                </video>
              </div>
            ))}
          </div>
        </div>

        {enlargedVideo && (
          <div
            className="image-modal"
            role="dialog"
            aria-modal="true"
            onClick={() => setEnlargedVideo(null)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="image-wrapper">
                <video
                  src={enlargedVideo}
                  controls
                  autoPlay
                  className="modal-video enlarged"
                />
                <button
                  type="button"
                  className="close-btn"
                  aria-label="Close"
                  onClick={() => setEnlargedVideo(null)}
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
        )}
      </FadeInSection>
    </section>
  );
};

export default Gallery;
