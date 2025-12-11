// import React, { useState, useEffect } from "react";
// import "../css/Gallery.css";

// // Env-safe getter
// function getCloudName() {
//   if (
//     typeof process !== "undefined" &&
//     process.env &&
//     process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
//   ) {
//     return process.env.REACT_APP_CLOUDINARY_CLOUD_NAME; // CRA
//   }
//   try {
//     return typeof import.meta !== "undefined" &&
//       import.meta.env &&
//       import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
//       ? import.meta.env.VITE_CLOUDINARY_CLOUD_NAME // Vite
//       : undefined;
//   } catch {
//     return undefined;
//   }
// }

// const CLOUD_NAME = getCloudName() || "yves";

// const cldVideoUrl = (publicId) =>
//   `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${publicId}.mp4`;

// const CLOUDINARY_VIDEOS = [
//   "enlxkgcslhoox13n671k",
//   "ljbbgry3btmqsh51rwlp",
//   "ljvf30csgong6qroeaan",
//   "y4bkcvq4yrvvcc602zny",
//   "ibx5h3cwok2s7te87pgp",
//   "rdfownqit6wykyc65etj",
// ];

// export default function Gallery() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [enlargedVideo, setEnlargedVideo] = useState(null);

//   // ESC closes modal
//   useEffect(() => {
//     if (!enlargedVideo) return;
//     const onKey = (e) => e.key === "Escape" && setEnlargedVideo(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [enlargedVideo]);

//   // Lock scroll while modal open
//   useEffect(() => {
//     if (!enlargedVideo) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = prev);
//   }, [enlargedVideo]);

//   return (
//     <section id="gallery" className="gallery-section text-center">
//       <div className="container">
//         <h2 className="mb-5">Gallery</h2>

//         <div className="row g-3">
//           {CLOUDINARY_VIDEOS.map((publicId, idx) => {
//             const videoSrc = cldVideoUrl(publicId);
//             const poster = `/gallery/thumbs/gallery${idx + 1}.webp`; // keep your local posters

//             return (
//               <div key={publicId} className="col-12 col-sm-6 col-md-4">
//                 <video
//                   className={`img-fluid rounded shadow-sm gallery-img ${
//                     hoveredIndex !== null && hoveredIndex !== idx
//                       ? "blurred"
//                       : ""
//                   }`}
//                   preload="none"
//                   poster={poster}
//                   muted
//                   loop
//                   playsInline
//                   onMouseEnter={(e) => {
//                     setHoveredIndex(idx);
//                     e.currentTarget.play().catch(() => {});
//                   }}
//                   onMouseLeave={(e) => {
//                     setHoveredIndex(null);
//                     e.currentTarget.pause();
//                     e.currentTarget.currentTime = 0;
//                   }}
//                   onClick={() => setEnlargedVideo(videoSrc)}
//                   onError={(e) => {
//                     console.error("Video failed:", videoSrc);
//                     e.currentTarget.outerHTML = `<div class="p-3 border rounded text-muted small">Video unavailable</div>`;
//                   }}
//                   style={{ width: "100%", height: "auto", objectFit: "cover" }}
//                 >
//                   <source src={videoSrc} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Inline-styled modal so it always overlays */}
//       {enlargedVideo && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           onClick={() => setEnlargedVideo(null)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.85)",
//             display: "grid",
//             placeItems: "center",
//             zIndex: 9999,
//             backdropFilter: "blur(2px)",
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               position: "relative",
//               maxWidth: "min(1200px, 90vw)",
//               maxHeight: "90vh",
//               borderRadius: 12,
//               overflow: "hidden",
//               boxShadow: "0 10px 40px rgba(0,0,0,.5)",
//             }}
//           >
//             <video
//               src={enlargedVideo}
//               controls
//               autoPlay
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//                 background: "#000",
//               }}
//             />
//             <button
//               type="button"
//               aria-label="Close"
//               onClick={() => setEnlargedVideo(null)}
//               style={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 lineHeight: 1,
//                 border: "none",
//                 background: "rgba(0,0,0,.6)",
//                 color: "#fff",
//                 fontSize: 18,
//                 padding: "6px 10px",
//                 borderRadius: 999,
//                 cursor: "pointer",
//               }}
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import "../css/Gallery.css";

// ---------------------------------------------------------
// ENV SAFE CLOUDINARY NAME HANDLER
// ---------------------------------------------------------
function getCloudName() {
  if (
    typeof process !== "undefined" &&
    process.env &&
    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
  ) {
    return process.env.REACT_APP_CLOUDINARY_CLOUD_NAME; // CRA
  }
  try {
    return typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      ? import.meta.env.VITE_CLOUDINARY_CLOUD_NAME // Vite
      : undefined;
  } catch {
    return undefined;
  }
}

const CLOUD_NAME = getCloudName() || "yves";

const cldVideoUrl = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${publicId}.mp4`;

const CLOUDINARY_VIDEOS = [
  "enlxkgcslhoox13n671k",
  "ljbbgry3btmqsh51rwlp",
  "ljvf30csgong6qroeaan",
  "y4bkcvq4yrvvcc602zny",
  "ibx5h3cwok2s7te87pgp",
  "rdfownqit6wykyc65etj",
];

// ---------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------
export default function Gallery() {
  const GALLERY_ACTIVE = false; // Toggle to show/hide gallery

  // Hooks
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [enlargedVideo, setEnlargedVideo] = useState(null);

  // ESC closes modal
  useEffect(() => {
    if (!enlargedVideo) return;
    const onKey = (e) => e.key === "Escape" && setEnlargedVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enlargedVideo]);

  // Lock scroll while modal open
  useEffect(() => {
    if (!enlargedVideo) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [enlargedVideo]);

  return (
    <section
      id="gallery"
      className="gallery-section text-center"
      style={{ position: "relative" }}
    >
      {/* ---------------------------------------------------------
         BACKGROUND GALLERY (blurred & dimmed when disabled)
      ------------------------------------------------------------ */}
      <div
        style={{
          // opacity: GALLERY_ACTIVE ? 1 : 0.85,
          // filter: GALLERY_ACTIVE ? "none" : "blur(1px) grayscale(20%)",
          opacity: GALLERY_ACTIVE ? 1 : 0.97,
          filter: GALLERY_ACTIVE ? "none" : "none",
          pointerEvents: GALLERY_ACTIVE ? "auto" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div className="container">
          <h2 className="mb-5">Gallery</h2>

          <div className="row g-3">
            {CLOUDINARY_VIDEOS.map((publicId, idx) => {
              const videoSrc = cldVideoUrl(publicId);
              const poster = `/gallery/thumbs/gallery${idx + 1}.webp`;

              return (
                <div key={publicId} className="col-12 col-sm-6 col-md-4">
                  <video
                    className={`img-fluid rounded shadow-sm gallery-img ${
                      hoveredIndex !== null && hoveredIndex !== idx
                        ? "blurred"
                        : ""
                    }`}
                    preload="none"
                    poster={poster}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => {
                      setHoveredIndex(idx);
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      setHoveredIndex(null);
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    onClick={() => setEnlargedVideo(videoSrc)}
                    onError={(e) => {
                      e.currentTarget.outerHTML = `<div class="p-3 border rounded text-muted small">Video unavailable</div>`;
                    }}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------
         UNDER CONSTRUCTION OVERLAY
      ------------------------------------------------------------ */}
      {!GALLERY_ACTIVE && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.15))",

            backdropFilter: "blur(3px)",
            zIndex: 10,
            animation: "fadeIn 0.6s ease",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "420px",
              padding: "24px 22px",
              background: "rgba(10,10,10,0.85)",
              borderRadius: "14px",
              border: "2px solid #c9a14a",
              boxShadow: "0 0 25px rgba(201,161,74,0.3)",
              textAlign: "center",
              animation: "popIn 0.4s ease",
            }}
          >
            {/* Drone Icon */}
            <div
              style={{
                fontSize: "3.5rem",
                marginBottom: "10px",
                color: "#c9a14a",
                animation: "pulse 1.8s infinite ease-in-out",
              }}
            >
              🛸
            </div>

            <h2
              style={{
                fontSize: "2.3rem",
                marginBottom: "15px",
                color: "#f2d083",
                letterSpacing: "1px",
              }}
            >
              Under Construction
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#ddd",
                maxWidth: "420px",
                margin: "0 auto",
              }}
            >
              We're updating our gallery with new cinematic drone visuals.
              Please check back soon!
            </p>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------
         MODAL
      ------------------------------------------------------------ */}
      {enlargedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setEnlargedVideo(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "grid",
            placeItems: "center",
            zIndex: 9999,
            backdropFilter: "blur(2px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(1200px, 90vw)",
              maxHeight: "90vh",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,.5)",
            }}
          >
            <video
              src={enlargedVideo}
              controls
              autoPlay
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                background: "#000",
              }}
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setEnlargedVideo(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                lineHeight: 1,
                border: "none",
                background: "rgba(0,0,0,.6)",
                color: "#fff",
                fontSize: 18,
                padding: "6px 10px",
                borderRadius: 999,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
