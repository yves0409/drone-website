import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // --- If we're on the homepage, don't force scroll — let the hero stay stable ---
    if (pathname === "/") return;

    // --- If there’s a hash (#section), scroll to it instantly ---
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }

    // --- Otherwise, scroll to top once (no double scroll) ---
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
