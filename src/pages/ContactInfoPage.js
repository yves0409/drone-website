import React, { useEffect, useState } from "react";
import "../css/ContactInfoPage.css";
import {
  FaInstagram,
  // FaFacebook,
  // FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import CustomHomeButton from "../components/CustomHomeButton";

const SUPPORT_EMAIL = process.env.REACT_APP_SUPPORT_EMAIL || "info@airgrid.be";

const ContactInfoPage = () => {
  const { t } = useTranslation("contact");
  const [mapLoaded, setMapLoaded] = useState(false);

  // Fail-open in case onLoad never fires (adblock, network, etc.)
  useEffect(() => {
    const id = setTimeout(() => setMapLoaded(true), 6000);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="contact-info">
      <div className="position-absolute top-0 start-0 m-4">
        <CustomHomeButton color="#1f1f1f" />
      </div>

      <div className="container py-5 custom-bg">
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <h1 className="animated-underline visible d-flex justify-content-center">
              {t("contact_info_heading")}
            </h1>
            <p className="mb-4 fs-5">{t("contact_info_subtext")}</p>

            <ul className="list-unstyled fs-5 contact-list">
              <li>
                <span className="contact-icon">📍</span>{" "}
                <strong>{t("contact_company")}:</strong> AirGrid (Supported By
                Staterslabo West-Vlaanderen CV)
              </li>

              <li>
                <strong>📞 {t("contact_phone")}:</strong>{" "}
                <a
                  href="tel:+32478531692"
                  className="text-decoration-none text-dark"
                >
                  +32 478 531 692
                </a>
              </li>

              <li>
                <strong>📧 {t("contact_email")}:</strong>{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>

              <li>
                <span className="contact-icon">🆔</span>{" "}
                <strong>{t("contact_registration")}:</strong> BE 0810 881 792
              </li>
            </ul>

            <div className="mt-4 text-center">
              <h6 className="fw-semibold mb-2 connect-title">
                {t("contact_connect")}
              </h6>

              <div className="social-icon-row">
                <a
                  href="https://instagram.com"
                  className="social-icon instagram"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
                {/* <a
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
                </a> */}
                <a
                  href="https://wa.me/32478531692?text=Hello%20AirGrid%2C%20I'm%20interested%20in%20drone%20services"
                  className="social-icon whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="rounded shadow overflow-hidden"
              style={{ height: "400px", position: "relative" }}
            >
              {/* Skeleton shown until iframe onLoad */}
              {!mapLoaded && (
                <div
                  className="skeleton-map"
                  role="status"
                  aria-busy="true"
                  aria-label="Loading map…"
                />
              )}

              <iframe
                title="AirGrid Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.660926712495!2d2.909471476812598!3d51.23020707175132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc197b2c8e0a39%3A0xc9ffbf04cb688d2b!2sOstend%2C%20Belgium!5e0!3m2!1sen!2sbe!4v1715851760004!5m2!1sen!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0, display: mapLoaded ? "block" : "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                onLoad={() => setMapLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoPage;
