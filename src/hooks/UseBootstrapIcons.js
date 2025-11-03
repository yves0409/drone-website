import { useEffect } from "react";

let loaded = false;

export default function useBootstrapIcons() {
  useEffect(() => {
    if (loaded) return;
    // Load the CSS as a split chunk the first time any component needs it
    import("bootstrap-icons/font/bootstrap-icons.css");
    loaded = true;
  }, []);
}
