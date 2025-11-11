import React from "react";
import profilePic from "../assets/about_temp.jpg";
import "../css/About.css";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import useBootstrapIcons from "../hooks/UseBootstrapIcons";

const About = () => {
  const { t } = useTranslation("about");

  // ✅ Load bootstrap-icons CSS only when this component is used
  useBootstrapIcons();

  return (
    <>
      <SEO namespace="about" />

      <section
        id="about"
        className="about-section text-light position-relative"
      >
        <div className="about-bg" />
        <div className="about-overlay" />

        <div className="container position-relative">
          <div className="row align-items-center gx-5 flex-column flex-md-row">
            <div className="col-md-6 text-md-start d-flex justify-content-md-start justify-content-center mb-4 mb-md-0">
              <img
                src={profilePic}
                alt="AirGrid Founder"
                className="about-img img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6 about-text-column mt-3 mt-md-0">
              {/* <h6 className="text-uppercase text-warning fw-semibold mb-2">
                Who Are We
              </h6> */}
              <h2 className="text-uppercase text-warning mb-4">
                {t("about_heading")}
              </h2>
              <p className="fw-medium mt-2 mb-0 text-light">
                {t("about_text")}
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
