// import React from "react";
// import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";

// const SEO = ({ namespace }) => {
//   const { t } = useTranslation(namespace);

//   return (
//     <Helmet>
//       <title>{t("meta.title")}</title>
//       <meta name="description" content={t("meta.description")} />
//       <meta name="keywords" content={t("meta.keywords")} />
//       <link rel="canonical" href={t("meta.canonical")} />
//       <html lang={t("lang_code", { ns: "common" })} />
//     </Helmet>
//   );
// };

// export default SEO;

// src/components/SEO.js
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const SITE = "https://airgrid.be";

function normalizePath(pathname) {
  let p = pathname.replace(/\/index\.html$/i, ""); // strip /index.html
  p = p.replace(/\/+$/, ""); // strip trailing slash (except root)
  return p === "" ? "/" : p;
}

// Safe location hook (won't crash if used above Router)
function useSafeLocation() {
  try {
    return useLocation();
  } catch {
    return {
      pathname: typeof window !== "undefined" ? window.location.pathname : "/",
    };
  }
}

export default function SEO({ namespace, canonicalOverride }) {
  const { t } = useTranslation(namespace);
  const { pathname } = useSafeLocation();

  const path = normalizePath(pathname);
  const autoCanonical = `${SITE}${path}`;

  const i18nCanonical = t("meta.canonical", { defaultValue: "" });
  const canonical =
    canonicalOverride ||
    (i18nCanonical?.startsWith("http") ? i18nCanonical : autoCanonical);

  const title = t("meta.title", { defaultValue: "AirGrid" });
  const desc = t("meta.description", {
    defaultValue: "Drone services by AirGrid.",
  });
  const keys = t("meta.keywords", { defaultValue: "airgrid, drones" });
  const lang = t("lang_code", { ns: "common", defaultValue: "en" });

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keys} />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
}
