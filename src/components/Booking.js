import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "../css/Booking.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTopic } from "../context/TopicContext";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [formSubmittedEffect, setFormSubmittedEffect] = useState(false);
  const { selectedTopic, setSelectedTopic } = useTopic();
  const recaptchaRef = useRef();
  const { t } = useTranslation("contact");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      });
    }

    const params = new URLSearchParams(location.search);
    const topicParam = params.get("topic");
    if (topicParam) {
      setSelectedTopic(topicParam); // ✅ Must include setSelectedTopic in deps
    }
  }, [location, setSelectedTopic]);

  useEffect(() => {
    if (selectedTopic) {
      document.querySelector("select[name='topic']")?.focus();
    }
  }, [selectedTopic]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

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
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyTT3G9OjG2Ix8rf3CKELUq08bJWMEPeyRmM63Gtv89qjWNJAqgzdPO3z2tbTjg9Vw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormSubmittedEffect(true);
        e.target.reset();
        recaptchaRef.current.reset();
        setCaptchaValid(false);
        setSubmitting(false);

        setTimeout(() => {
          setSubmitted(false);
          setFormSubmittedEffect(false);
        }, 5000);
      } else {
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
      <div className="position-absolute top-0 start-0 m-4"></div>
      <div className="container px-4 py-5">
        <div className="row g-5 align-items-start">
          {/* Left Column */}
          <div className="col-lg-6 text-start">
            <h2 className="section-heading-label">
              {t("contact_label")} {/* example: "CONTACT AirGrid" */}
            </h2>
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
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  className="social-icon facebook"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://linkedin.com"
                  className="social-icon linkedin"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/32472123456?text=Hello%20AirGrid%2C%20I'm%20interested%20in%20drone%20services"
                  className="floating-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 bg-light text-dark p-4 rounded shadow position-relative overflow-hidden">
            {/* ✅ Floating Success Icon */}
            {formSubmittedEffect && (
              <div className="floating-success-icon animate__animated animate__fadeIn">
                ✅
              </div>
            )}

            {/* ✅ Success Message */}
            {submitted && (
              <div className="alert alert-success animate__animated animate__fadeInDown">
                {t("form_success")}
              </div>
            )}

            {/* 📄 Form */}
            <form
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
                  rows="4"
                  placeholder={t("placeholder_details")}
                  required
                />
              </div>

              <div className="mb-3 d-flex justify-content-center">
                <ReCAPTCHA
                  sitekey="6LfW1zErAAAAAM_kJ6SNMQ_CzTMse9upYTvncUhP"
                  ref={recaptchaRef}
                  onChange={() => setCaptchaValid(true)}
                />
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
    </section>
  );
};

export default Booking;
