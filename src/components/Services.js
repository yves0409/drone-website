import React from "react";
import "../css/Services.css";
import aerealImg from "../assets/aereal.png";
import realestateImg from "../assets/realestate.png";
import inspectingImg from "../assets/inspecting.png";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import FadeInSection from "../components/FadeInSection";

const Services = () => {
  const { t } = useTranslation("services");

  return (
    <section id="services" className="text-center">
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <h2 className="mb-5">{t("services")}</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <FadeInSection>
              <Link
                to="/services/property-showcases"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm service-card">
                  <img
                    src={realestateImg}
                    className="card-img-top service-img"
                    alt="Property Showcases"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {t("service_property_title")}
                    </h5>

                    <p className="card-text">{t("service_property")}</p>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          </div>

          <div className="col-md-4">
            <FadeInSection>
              <Link
                to="/services/aerial-videography"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm service-card">
                  <img
                    src={aerealImg}
                    className="card-img-top service-img"
                    alt="Aerial Videography"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{t("service_aerial_title")}</h5>

                    <p className="card-text">{t("service_aerial")}</p>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          </div>

          <div className="col-md-4">
            <FadeInSection>
              <Link
                to="/services/inspection"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm service-card">
                  <img
                    src={inspectingImg}
                    className="card-img-top service-img"
                    alt="Post-Production"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{t("service_edit_title")}</h5>

                    <p className="card-text">{t("service_edit")}</p>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </div>
      <svg
        className="section-divider"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#6e5b47"
          d="M0,224C120,160,360,0,720,32C1080,64,1320,160,1440,192V320H0Z"
        />
      </svg>
    </section>
  );
};

export default Services;
