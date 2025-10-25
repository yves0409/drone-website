import React, { useState } from "react";
import "../css/Gallery.css";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection";

const Gallery = () => {
  const [enlargedVideo, setEnlargedVideo] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation("common");

  return (
    <section id="gallery" className="py-5 mt-4 mb-4 text-center">
      <FadeInSection>
        <div className="container">
          <h2 className="mb-5">{t("gallery_title")}</h2>
          <div className="row g-3">
            {[1, 2, 3, 4, 5, 6].map((i, idx) => (
              <div className="col-sm-6 col-md-4" key={i}>
                <video
                  className={`img-fluid rounded shadow-sm gallery-img ${
                    hoveredIndex !== null && hoveredIndex !== idx
                      ? "blurred"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setEnlargedVideo(`/gallery/gallery${i}.mp4`)}
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={`/gallery/gallery${i}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        {enlargedVideo && (
          <div className="image-modal" onClick={() => setEnlargedVideo(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="image-wrapper">
                <video
                  src={enlargedVideo}
                  controls
                  autoPlay
                  className="modal-video enlarged"
                >
                  Your browser does not support the video tag.
                </video>
                <button
                  className="close-btn"
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
