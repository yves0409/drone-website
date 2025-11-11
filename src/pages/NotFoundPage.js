import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";
import SEO from "../components/SEO"; // optional if you use your SEO component

export default function NotFoundPage() {
  return (
    <section className="notfound d-flex align-items-center">
      {/* Optional SEO */}
      <SEO namespace="common" />

      <div className="container text-center">
        <div className="nf-badge mx-auto mb-4" aria-hidden="true">
          {/* Minimal inline “drone” icon */}
          <svg
            className="nf-drone"
            viewBox="0 0 72 72"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Drone"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <circle cx="60" cy="12" r="8" />
              <circle cx="12" cy="60" r="8" />
              <circle cx="60" cy="60" r="8" />
              <rect x="26" y="26" width="20" height="20" rx="6" />
              <path d="M20 20 L28 28M44 28 L52 20M20 52 L28 44M52 52 L44 44" />
            </g>
          </svg>
        </div>

        <h1 className="display-4 fw-semibold mb-2">404</h1>
        <p className="lead text-muted mb-4">
          We couldn’t find that page — maybe it flew off somewhere.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-primary rounded-pill px-4">
            Back to Home
          </Link>
          <Link
            to="/contact-details"
            className="btn btn-outline-dark rounded-pill px-4"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
