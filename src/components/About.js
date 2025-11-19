import React from "react";
import profilePic from "../assets/about_img.png";

import "../css/About.css";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import useBootstrapIcons from "../hooks/UseBootstrapIcons";

const About = () => {
  const { t } = useTranslation("about");

  // Load bootstrap-icons CSS only when this component is used
  useBootstrapIcons();

  return (
    <>
      <SEO namespace="about" />

      <section id="about" className="about-section position-relative">
        {/* Background + overlay */}
        <div className="about-bg" />
        <div className="about-overlay" />

        {/* Foreground content */}
        <div className="container position-relative">
          <div className="row align-items-center gx-5 flex-column flex-md-row">
            {/* LEFT: image + ABOUT ME text under the image */}
            <div className=" col-md-5 mb-4 mb-md-0">
              <div className="d-flex about-image-col flex-column align-items-md-start align-items-center text-md-start text-center">
                <img
                  src={profilePic}
                  alt="AirGrid Founder"
                  className="about-img img-fluid  mb-3 rounded-circle"
                />

                <h5 className="text-uppercase text-light mb-2">
                  {t("about_me_title")}
                </h5>

                <p className="fw-medium mt-2 mb-2 text-light about-large-text">
                  {t("about_me_text")}
                </p>
              </div>
            </div>

            {/* RIGHT: main about text */}
            <div className="col-md-7 about-text-column mt-2  text-md-start text-center ">
              <h2 className="text-uppercase text-light mb-4">
                {t("about_heading")}
              </h2>

              <h5 className="text-uppercase text-light mb-2">
                {t("about_title")}
              </h5>
              <p className="fw-medium mb-5 text-light about-large-text">
                {t("about_text")}
              </p>

              <h5 className="text-uppercase text-light mb-2">
                {t("about_why_title")}
              </h5>
              <p className="fw-medium mt-2 mb-5 text-light about-large-text">
                {t("about_why_text")}
              </p>

              <h5 className="text-uppercase text-light mb-2">
                {t("about_locations_title")}
              </h5>
              <p className="fw-medium mt-2 mb-3 text-light about-large-text">
                {t("about_locations_text")}
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                <div className="text-center">
                  <i
                    className="bi bi-shield-check fs-3 text-primary"
                    aria-hidden="true"
                  ></i>
                  <p className="fw-medium mt-2 mb-0 text-light">
                    Licensed Drone Pilot
                  </p>
                </div>

                <div className="text-center">
                  <i
                    className="bi bi-award fs-3 text-success"
                    aria-hidden="true"
                  ></i>
                  <p className="fw-medium mt-2 mb-0 text-light">
                    Years Experience
                  </p>
                </div>

                <div className="text-center">
                  <i
                    className="bi bi-house-check fs-3 text-danger"
                    aria-hidden="true"
                  ></i>
                  <p className="fw-medium mt-2 mb-0 text-light">
                    Real Estate Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
