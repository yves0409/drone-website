import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    const goTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // If there’s a hash (#section), try to scroll to that element
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      // Bad hash → clear it and go to top
      goTop();
      window.history.replaceState({}, "", pathname + (search || ""));
      return;
    }

    // No hash → go to top (twice to beat late autofocus/layout)
    goTop();
    setTimeout(goTop, 0);
  }, [pathname, hash, search]);

  return null;
}
