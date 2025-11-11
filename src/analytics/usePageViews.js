// src/analytics/usePageViews.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageViews(measurementId = "G-SBVCJYYHJF") {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", measurementId, { page_path: pathname });
    }
  }, [pathname, measurementId]);
}
