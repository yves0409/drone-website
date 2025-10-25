import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaHardHat,
  FaBuilding,
  FaSolarPanel,
  FaIndustry,
} from "react-icons/fa";
import constructionImg from "../assets/construction-banner.png";
import "../css/Construction.css";
import CustomHomeButton from "../components/CustomHomeButton";

const ConstructionPage = () => {
  const { t } = useTranslation("construction");

  return (
    <>
      {/* Hero Banner */}
      <section
        className="construction-hero d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${constructionImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
        }}
      >
        <div className="position-absolute top-0 start-0 m-4 z-2">
          <CustomHomeButton />
        </div>
        <div className="overlay" />
        <div className="container text-center position-relative z-2">
          <h1 className="display-4 ">{t("construction_title")}</h1>
          <p className="lead">{t("construction_subtitle")}</p>
        </div>
      </section>

      <section className="textured-section text-center">
        <div className="container">
          <div className="text-start mx-auto content-wrapper">
            <p className="section-intro text-center">
              {t("construction_intro")}
            </p>

            <h5 className="fw-semibold mb-4 text-center">
              {t("construction_list_intro")}
            </h5>

            <ul className="list-unstyled icon-list">
              <li className="d-flex align-items-start mb-3">
                <FaHardHat className="icon text-warning me-2 mt-1" />
                {t("construction_point_1")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaBuilding className="icon text-secondary me-2 mt-1" />
                {t("construction_point_2")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaSolarPanel className="icon text-success me-2 mt-1" />
                {t("construction_point_3")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaIndustry className="icon text-primary me-2 mt-1" />
                {t("construction_point_4")}
              </li>
            </ul>

            <div className="divider-line"></div>

            <p className="section-outro text-center">
              {t("construction_closing")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConstructionPage;
