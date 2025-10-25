import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../css/CustomHomeButton.css";

const CustomHomeButton = ({
  color = "white",
  background = "transparent", // matches your "background: none"
}) => {
  return (
    <Link
      to="/"
      className="HomeBtn"
      style={{
        color: color,
        backgroundColor: background,
      }}
    >
      <FaHome />
    </Link>
  );
};

export default CustomHomeButton;
