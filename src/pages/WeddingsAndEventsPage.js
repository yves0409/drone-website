import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart, FaGlassCheers, FaCameraRetro, FaMusic } from "react-icons/fa";
import "../css/WeddingsAndEvents.css";

import CustomHomeButton from "../components/CustomHomeButton";
import SectionBanner from "../components/SectionBanner";

const WeddingsAndEventsPage = () => {
  const { t } = useTranslation("event");

  return (
    <>
      {/* === Hero Banner === */}
      <SectionBanner
        image="wedding-banner"
        title={t("weddings_title")}
        subtitle={t("weddings_subtitle")}
        overlay="light" // weddings usually look nicer brighter
      >
        <div className="position-absolute top-0 start-0 m-4">
          <CustomHomeButton />
        </div>
      </SectionBanner>

      {/* === Content Section === */}
      <section className="textured-section text-center">
        <div className="container">
          <div className="text-start mx-auto content-wrapper">
            <p className="section-intro text-center">{t("weddings_intro")}</p>

            <h5 className="fw-semibold mb-4 text-center">
              {t("weddings_list_intro")}
            </h5>

            <ul className="list-unstyled icon-list">
              <li className="d-flex align-items-start mb-3">
                <FaHeart className="icon text-danger me-2 mt-1" />
                {t("weddings_point_1")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaGlassCheers className="icon text-warning me-2 mt-1" />
                {t("weddings_point_2")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaCameraRetro className="icon text-info me-2 mt-1" />
                {t("weddings_point_3")}
              </li>
              <li className="d-flex align-items-start mb-3">
                <FaMusic className="icon text-primary me-2 mt-1" />
                {t("weddings_point_4")}
              </li>
            </ul>

            <div className="divider-line"></div>

            <p className="section-outro text-center">{t("weddings_closing")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeddingsAndEventsPage;
