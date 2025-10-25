// src/components/LoadingSpinner.js
import React from "react";
import "../css/LoadingSpinner.css"; // Create this CSS file

const LoadingSpinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
    </div>
  );
};

export default LoadingSpinner;
