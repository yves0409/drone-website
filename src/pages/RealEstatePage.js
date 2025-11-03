import React from "react";
import "../css/RealEstate.css";
import {
  FaVideo,
  FaMapMarkedAlt,
  FaSatellite,
  FaIdBadge,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import CustomHomeButton from "../components/CustomHomeButton";
import SectionBanner from "../components/SectionBanner";

const RealEstatePage = () => {
  const { t } = useTranslation("realestate");

  return (
    <>
      <SectionBanner
        image="realestate-banner"
        title={t("real_estate_title")}
        subtitle={t("real_estate_subtitle")}
        overlay="light"
      >
        <div className="position-absolute top-0 start-0 m-4">
          <CustomHomeButton />
        </div>
      </SectionBanner>

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
