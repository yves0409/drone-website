import React from "react";
import { Link } from "react-router-dom";
import "../css/AnimatedButtons.css";

const AnimatedButtons = ({ title, buttons }) => {
  return (
    <section className="animated-buttons-wrapper">
      {title && <h2 className="animated-buttons-title">{title}</h2>}

      <div className="animated-button-row">
        {buttons.map(({ label, icon, to, className }, idx) => (
          <Link key={idx} to={to}>
            <button className={className}>
              {icon}
              {label}
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnimatedButtons;
