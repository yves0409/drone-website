import React from "react";
import "../css/RealEstate.css";
import bannerImg from "../assets/realestate-banner.png";
import {
  FaVideo,
  FaMapMarkedAlt,
  FaSatellite,
  FaIdBadge,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import CustomHomeButton from "../components/CustomHomeButton";

const RealEstatePage = () => {
  const { t } = useTranslation("realestate");

  return (
    <>
      <section
        className="real-estate-banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
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
          <h1 className="display-4 ">{t("real_estate_title")}</h1>
          <p className="lead">{t("real_estate_subtitle")}</p>
        </div>
      </section>

      <section className="textured-section text-center">
        <div className="container">
          <div className="text-start mx-auto content-wrapper">
            <p className="section-intro text-center">
              {t("real_estate_intro")}
            </p>

            <h5 className="fw-semibold mb-4 text-center">
              {t("real_estate_includes_title")}
            </h5>

            <ul className="list-unstyled icon-list">
              <li className="d-flex align-items-start mb-3">
                <FaVideo className="icon text-warning me-2 mt-1" />
                {t("real_estate_feature_1")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaMapMarkedAlt className="icon text-secondary me-2 mt-1" />
                {t("real_estate_feature_2")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaSatellite className="icon text-success me-2 mt-1" />
                {t("real_estate_feature_3")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaIdBadge className="icon text-primary me-2 mt-1" />
                {t("real_estate_feature_4")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaClock className="icon text-primary me-2 mt-1" />
                {t("real_estate_feature_5")}
              </li>
            </ul>

            <div className="divider-line"></div>

            <p className="section-outro text-center">
              {t("real_estate_closing")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RealEstatePage;
