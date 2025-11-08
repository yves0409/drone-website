// import React, { useState, useRef, useEffect, Suspense } from "react";
// import { useTranslation } from "react-i18next";
// import "../css/Booking.css";
// import { useLocation } from "react-router-dom";
// import { useTopic } from "../context/TopicContext";
// import { loadScript } from "../utils/LoadScript";
// import {
//   InstagramIcon,
//   FacebookIcon,
//   LinkedinIcon,
//   WhatsappIcon,
// } from "./SocialIcon";

// const ReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));
// const RECAPTCHA_SRC = "https://www.google.com/recaptcha/api.js";

// const SITE_KEY =
//   process.env.REACT_APP_RECAPTCHA_SITE_KEY ||
//   "6LfW1zErAAAAAM_kJ6SNMQ_CzTMse9upYTvncUhP";
// const GAS_URL =
//   process.env.REACT_APP_GAS_ENDPOINT ||
//   "https://script.google.com/macros/s/AKfycbyTT3G9OjG2Ix8rf3CKELUq08bJWMEPeyRmM63Gtv89qjWNJAqgzdPO3z2tbTjg9Vw/exec";

// const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || "32478531692";

// const Booking = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [captchaValid, setCaptchaValid] = useState(false);
//   const [captchaReady, setCaptchaReady] = useState(false);
//   const [formSubmittedEffect, setFormSubmittedEffect] = useState(false);

//   const { selectedTopic, setSelectedTopic } = useTopic();
//   const recaptchaRef = useRef(null);
//   const formRef = useRef(null);
//   const { t } = useTranslation("contact");
//   const location = useLocation();

//   // Scroll + preselect topic
//   useEffect(() => {
//     const hash = location.hash.replace("#", "");
//     if (hash) {
//       requestAnimationFrame(() => {
//         setTimeout(() => {
//           const el = document.getElementById(hash);
//           if (el) el.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       });
//     }
//     const params = new URLSearchParams(location.search);
//     const topicParam = params.get("topic");
//     if (topicParam) setSelectedTopic(topicParam);
//   }, [location, setSelectedTopic]);

//   useEffect(() => {
//     if (selectedTopic) {
//       document.querySelector("select[name='topic']")?.focus();
//     }
//   }, [selectedTopic]);

//   // Load reCAPTCHA dynamically when user scrolls to form
//   useEffect(() => {
//     const el = formRef.current; // capture once
//     if (!el || captchaReady) return;

//     let focused = false;
//     let disposed = false;

//     const loadCaptcha = async () => {
//       if (captchaReady || disposed) return;
//       await loadScript(RECAPTCHA_SRC);
//       setCaptchaReady(true);
//     };

//     const io = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           loadCaptcha();
//           io.disconnect();
//         }
//       },
//       { rootMargin: "200px" }
//     );
//     io.observe(el);

//     const onFirstFocus = () => {
//       if (!focused) {
//         focused = true;
//         loadCaptcha();
//         el.removeEventListener("focusin", onFirstFocus);
//       }
//     };
//     el.addEventListener("focusin", onFirstFocus);

//     return () => {
//       disposed = true;
//       io.disconnect();
//       el.removeEventListener("focusin", onFirstFocus);
//     };
//   }, [captchaReady]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = recaptchaRef.current?.getValue();
//     if (!token) {
//       alert(t("captcha_warning"));
//       return;
//     }

//     setSubmitting(true);
//     const data = {
//       firstName: e.target.firstName.value,
//       lastName: e.target.lastName.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       topic: e.target.topic.value,
//       details: e.target.details.value,
//       source: "Contact Page",
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       const response = await fetch(GAS_URL, {
//         method: "POST",
//         // ❌ no headers; Apps Script will reject preflight if we force JSON
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormSubmittedEffect(true);
//         e.target.reset();
//         recaptchaRef.current?.reset();
//         setCaptchaValid(false);
//         setSubmitting(false);
//         setTimeout(() => {
//           setSubmitted(false);
//           setFormSubmittedEffect(false);
//         }, 5000);
//       } else {
//         // tiny debug to console so we can see what's returned
//         try {
//           const txt = await response.text();
//           console.warn("GAS non-OK:", response.status, txt);
//         } catch {}
//         alert(t("form_error"));
//         setSubmitting(false);
//       }
//     } catch (error) {
//       console.error("Submission failed:", error);
//       alert(t("form_error"));
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section id="booking" className="contact-flyguys-style text-light">
//       <div className="container px-4 py-5">
//         <div className="row g-5 align-items-start">
//           {/* === LEFT COLUMN === */}
//           <div className="col-lg-6 text-start">
//             <h2 className="section-heading-label">{t("contact_label")}</h2>
//             <h1 className="display-5 fw-bold mb-4">{t("contact_heading")}</h1>
//             <p className="lead">{t("contact_subtext")}</p>

//             <div className="mt-4">
//               <h6 className="fw-semibold mb-2">{t("contact_connect")}</h6>
//               <div className="d-flex gap-3 fs-4">
//                 <a
//                   href="https://instagram.com"
//                   className="social-icon instagram"
//                   target="_blank"
//                   rel="noreferrer"
//                   title="Instagram"
//                 >
//                   <InstagramIcon />
//                 </a>
//                 <a
//                   href="https://facebook.com"
//                   className="social-icon facebook"
//                   target="_blank"
//                   rel="noreferrer"
//                   title="Facebook"
//                 >
//                   <FacebookIcon />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   className="social-icon linkedin"
//                   target="_blank"
//                   rel="noreferrer"
//                   title="LinkedIn"
//                 >
//                   <LinkedinIcon />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* === RIGHT COLUMN === */}
//           <div className="col-lg-6 bg-light text-dark p-4 rounded shadow position-relative overflow-hidden">
//             {formSubmittedEffect && (
//               <div className="floating-success-icon animate__animated animate__fadeIn">
//                 ✅
//               </div>
//             )}
//             {submitted && (
//               <div className="alert alert-success animate__animated animate__fadeInDown">
//                 {t("form_success")}
//               </div>
//             )}

//             <form
//               ref={formRef}
//               onSubmit={handleSubmit}
//               className={`${
//                 formSubmittedEffect ? "submitted-blur" : ""
//               } animate__animated animate__fadeIn`}
//             >
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label">{t("first_name")}</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     className="form-control"
//                     placeholder={t("placeholder_first_name")}
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">{t("last_name")}</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     className="form-control"
//                     placeholder={t("placeholder_last_name")}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label className="form-label">{t("email")}</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder={t("placeholder_email")}
//                     required
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <label className="form-label">{t("phone")}</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     className="form-control"
//                     placeholder={t("placeholder_phone")}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">{t("topic_label")}</label>
//                 <select
//                   name="topic"
//                   className="form-select"
//                   value={selectedTopic}
//                   onChange={(e) => setSelectedTopic(e.target.value)}
//                   required
//                 >
//                   <option value="" disabled>
//                     {t("topic_placeholder")}
//                   </option>
//                   <option value="real-estate">{t("topic_real_estate")}</option>
//                   <option value="inspection">{t("topic_inspection")}</option>
//                   <option value="events">{t("topic_events")}</option>
//                   <option value="general">{t("topic_general")}</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">{t("project_details")}</label>
//                 <textarea
//                   name="details"
//                   className="form-control"
//                   rows="4"
//                   placeholder={t("placeholder_details")}
//                   required
//                 />
//               </div>

//               {/* === reCAPTCHA === */}
//               <div
//                 className="mb-3 d-flex justify-content-center"
//                 aria-live="polite"
//               >
//                 {captchaReady ? (
//                   <Suspense
//                     fallback={<div className="text-muted">{t("loading")}…</div>}
//                   >
//                     <ReCAPTCHA
//                       sitekey={SITE_KEY}
//                       ref={recaptchaRef}
//                       onChange={() => setCaptchaValid(true)}
//                     />
//                   </Suspense>
//                 ) : (
//                   <button
//                     type="button"
//                     className="btn btn-outline-secondary"
//                     onClick={() => setCaptchaReady(true)}
//                   >
//                     {t("verify_human")}
//                   </button>
//                 )}
//               </div>

//               <label className="consent-label">
//                 <input type="checkbox" required /> I consent to my data being
//                 stored and used to contact me. Read our{" "}
//                 <a
//                   href="/privacy-policy"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Privacy Policy
//                 </a>
//                 .
//               </label>

//               <div className="d-grid">
//                 <button
//                   type="submit"
//                   className="btn btn-primary fw-bold"
//                   disabled={!captchaValid || submitting}
//                 >
//                   {submitting && (
//                     <span
//                       className="spinner-border spinner-border-sm me-2"
//                       role="status"
//                       aria-hidden="true"
//                     ></span>
//                   )}
//                   {submitting ? t("submitting") : t("submit")}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Floating WhatsApp */}

//       <a
//         href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//           "Hello AirGrid, I'm interested in drone services"
//         )}`}
//         className="floating-whatsapp"
//         target="_blank"
//         rel="noreferrer"
//         title="Chat on WhatsApp"
//       >
//         <WhatsappIcon />
//       </a>
//     </section>
//   );
// };

// export default Booking;

import React, { useState, useRef, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
import "../css/Booking.css";
import { useLocation } from "react-router-dom";
import { useTopic } from "../context/TopicContext";
import { loadScript } from "../utils/LoadScript";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "./SocialIcon";

const ReCAPTCHA = React.lazy(() => import("react-google-recaptcha"));
const RECAPTCHA_SRC = "https://www.google.com/recaptcha/api.js";

let SITE_KEY;

// CRA (Create React App) uses process.env.REACT_APP_
if (
  typeof process !== "undefined" &&
  process.env.REACT_APP_RECAPTCHA_SITE_KEY
) {
  SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
} else if (
  typeof import.meta !== "undefined" &&
  import.meta.env?.VITE_RECAPTCHA_SITE_KEY
) {
  SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
} else {
  SITE_KEY = "6LfW1zErAAAAAM_kJ6SNMQ_CzTMse9upYTvncUhP"; // fallback
}

// Use your Vercel serverless route
const API_URL = "/api/contact";

// const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || "32478531692";
const RAW_WA = process.env.REACT_APP_WHATSAPP_NUMBER || "3247XXXXXXXX";
const WA_NUMBER = RAW_WA.replace(/[^\d]/g, ""); // digits only
const WA_TEXT = encodeURIComponent(
  "Hello AirGrid, I'm interested in drone services"
);

// Universal web link
const waWeb = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
// App deep link (opens native WhatsApp when present)
const waApp = `whatsapp://send?phone=${WA_NUMBER}&text=${WA_TEXT}`;

// Decide best link for this device
const isMobile =
  typeof navigator !== "undefined" &&
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const waHref = isMobile ? waApp : waWeb;

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [formSubmittedEffect, setFormSubmittedEffect] = useState(false);

  const { selectedTopic, setSelectedTopic } = useTopic();
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const { t } = useTranslation("contact");
  const location = useLocation();

  // Scroll + preselect topic
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
    const params = new URLSearchParams(location.search);
    const topicParam = params.get("topic");
    if (topicParam) setSelectedTopic(topicParam);
  }, [location, setSelectedTopic]);

  useEffect(() => {
    if (selectedTopic) {
      document.querySelector("select[name='topic']")?.focus();
    }
  }, [selectedTopic]);

  // Load reCAPTCHA dynamically when user scrolls to form
  useEffect(() => {
    const el = formRef.current; // capture once
    if (!el || captchaReady) return;

    let focused = false;
    let disposed = false;

    const loadCaptcha = async () => {
      if (captchaReady || disposed) return;
      await loadScript(RECAPTCHA_SRC);
      setCaptchaReady(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadCaptcha();
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);

    const onFirstFocus = () => {
      if (!focused) {
        focused = true;
        loadCaptcha();
        el.removeEventListener("focusin", onFirstFocus);
      }
    };
    el.addEventListener("focusin", onFirstFocus);

    return () => {
      disposed = true;
      io.disconnect();
      el.removeEventListener("focusin", onFirstFocus);
    };
  }, [captchaReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert(t("captcha_warning"));
      return;
    }

    setSubmitting(true);
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      topic: e.target.topic.value,
      details: e.target.details.value,
      source: "Contact Page",
      timestamp: new Date().toISOString(),
      token, // send captcha token to server
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormSubmittedEffect(true);
        e.target.reset();
        recaptchaRef.current?.reset();
        setCaptchaValid(false);
        setSubmitting(false);
        setTimeout(() => {
          setSubmitted(false);
          setFormSubmittedEffect(false);
        }, 5000);
      } else {
        try {
          const txt = await response.text();
          console.warn("Contact API non-OK:", response.status, txt);
        } catch {}
        alert(t("form_error"));
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert(t("form_error"));
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" className="contact-flyguys-style text-light">
      <div className="container px-4 py-5">
        <div className="row g-5 align-items-start">
          {/* === LEFT COLUMN === */}
          <div className="col-lg-6 text-start">
            <h2 className="section-heading-label">{t("contact_label")}</h2>
            <h1 className="display-5 fw-bold mb-4">{t("contact_heading")}</h1>
            <p className="lead">{t("contact_subtext")}</p>

            <div className="mt-4">
              <h6 className="fw-semibold mb-2">{t("contact_connect")}</h6>
              <div className="d-flex gap-3 fs-4">
                <a
                  href="https://instagram.com"
                  className="social-icon instagram"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://facebook.com"
                  className="social-icon facebook"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  className="social-icon linkedin"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="col-lg-6 bg-light text-dark p-4 rounded shadow position-relative overflow-hidden">
            {formSubmittedEffect && (
              <div className="floating-success-icon animate__animated animate__fadeIn">
                ✅
              </div>
            )}
            {submitted && (
              <div className="alert alert-success animate__animated animate__fadeInDown">
                {t("form_success")}
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`${
                formSubmittedEffect ? "submitted-blur" : ""
              } animate__animated animate__fadeIn`}
            >
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">{t("first_name")}</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder={t("placeholder_first_name")}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("last_name")}</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder={t("placeholder_last_name")}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">{t("email")}</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder={t("placeholder_email")}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t("phone")}</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder={t("placeholder_phone")}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">{t("topic_label")}</label>
                <select
                  name="topic"
                  className="form-select"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    {t("topic_placeholder")}
                  </option>
                  <option value="real-estate">{t("topic_real_estate")}</option>
                  <option value="inspection">{t("topic_inspection")}</option>
                  <option value="events">{t("topic_events")}</option>
                  <option value="general">{t("topic_general")}</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">{t("project_details")}</label>
                <textarea
                  name="details"
                  className="form-control"
                  rows={4}
                  placeholder={t("placeholder_details")}
                  required
                />
              </div>

              {/* === reCAPTCHA === */}
              <div
                className="mb-3 d-flex justify-content-center"
                aria-live="polite"
              >
                {captchaReady ? (
                  <Suspense
                    fallback={<div className="text-muted">{t("loading")}…</div>}
                  >
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      ref={recaptchaRef}
                      onChange={() => setCaptchaValid(true)}
                      onExpired={() => setCaptchaValid(false)}
                      onErrored={() => setCaptchaValid(false)}
                    />
                  </Suspense>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setCaptchaReady(true)}
                  >
                    {t("verify_human")}
                  </button>
                )}
              </div>

              <label className="consent-label">
                <input type="checkbox" required /> I consent to my data being
                stored and used to contact me. Read our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </label>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary fw-bold"
                  disabled={!captchaValid || submitting}
                >
                  {submitting && (
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  )}
                  {submitting ? t("submitting") : t("submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}

      <a
        href={waHref}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        onClick={(e) => {
          // Extra fallback for desktop: try app deep link first, then web
          if (!isMobile) {
            const deep = `whatsapp://send?phone=${WA_NUMBER}&text=${WA_TEXT}`;
            // attempt app open
            window.location.href = deep;
            // fallback to web after a short delay
            setTimeout(
              () => window.open(waWeb, "_blank", "noopener,noreferrer"),
              400
            );
            e.preventDefault();
          }
        }}
      >
        <WhatsappIcon />
      </a>
    </section>
  );
};

export default Booking;
