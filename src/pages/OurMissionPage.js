import React from "react";
import "../css/OurMission.css";
import missionBg from "../assets/rome.png";
import { useTranslation } from "react-i18next";
import { FaCrosshairs, FaEye, FaPaperPlane } from "react-icons/fa";
import CustomHomeButton from "../components/CustomHomeButton";

const OurMissionPage = () => {
  const { t } = useTranslation("common");

  return (
    <section
      id="mission"
      className="mission-section text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${missionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="position-absolute top-0 start-0 m-4 z-2">
        <CustomHomeButton />
      </div>

      <div className="container text-center px-3">
        <div className="mission-overlay" />
        <div className="mission-content position-relative z-2">
          <h1 className=" display-4 mb-4">{t("mission_title")}</h1>
          <p
            className="fs-5 text-light mx-auto mb-5"
            style={{ maxWidth: "800px" }}
          >
            {t("mission_text")}
          </p>

          <div className="row g-5 justify-content-center">
            <div className="col-md-4">
              <div className="icon-box fade-in-up">
                <FaCrosshairs className="icon-drone" />
                <h5 className="mt-3">{t("mission_precision_title")}</h5>
                <p className="text-light small">
                  {t("mission_precision_text")}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="icon-box fade-in-up">
                <FaEye className="icon-drone" />
                <h5 className="mt-3">{t("mission_vision_title")}</h5>
                <p className="text-light small">{t("mission_vision_text")}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="icon-box fade-in-up">
                <FaPaperPlane className="icon-drone" />
                <h5 className="mt-3">{t("mission_delivery_title")}</h5>
                <p className="text-light small">{t("mission_delivery_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionPage;
