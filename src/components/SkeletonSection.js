// src/components/SkeletonSection.js
import React from "react";
import "../css/SkeletonSection.css";

const SkeletonSection = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-heading" />
      <div className="skeleton-grid">
        <div className="skeleton-box" />
        <div className="skeleton-box" />
        <div className="skeleton-box" />
      </div>
    </div>
  );
};

export default SkeletonSection;
