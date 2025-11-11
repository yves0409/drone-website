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
import { Helmet } from "react-helmet"; // keep this if you're already using it
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SITE = "https://airgrid.be"; // <-- choose your ONE preferred base

function normalizePath(pathname) {
  // remove trailing slash except for root
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export default function SEO({ namespace, canonicalOverride }) {
  const { t } = useTranslation(namespace);
  const { pathname } = useLocation();

  // 1) build a stable canonical from the current route
  const path = normalizePath(pathname);
  const autoCanonical = `${SITE}${path}`;

  // 2) allow an explicit override (rare) or use i18n value *if it is absolute URL*
  const i18nCanonical = t("meta.canonical", { defaultValue: "" });
  const canonical =
    canonicalOverride ||
    (i18nCanonical?.startsWith("http") ? i18nCanonical : autoCanonical);

  return (
    <Helmet
      htmlAttributes={{
        lang: t("lang_code", { ns: "common", defaultValue: "en" }),
      }}
    >
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta name="keywords" content={t("meta.keywords")} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
