import React from "react";
import droneImg from "../assets/svg/drone-icon-white.svg";
import "../css/DroneTitles.css";

const DroneTitles = ({ title }) => {
  return (
    <div className="drone-title-wrapper">
      <img src={droneImg} alt="Drone" className="drone-svg" />
      <h2 className="drone-title">
        <span className="title-text">{title}</span>
      </h2>
    </div>
  );
};

export default DroneTitles;
