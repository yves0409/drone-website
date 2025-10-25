import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const SEO = ({ namespace }) => {
  const { t } = useTranslation(namespace);

  return (
    <Helmet>
      <title>{t("meta.title")}</title>
      <meta name="description" content={t("meta.description")} />
      <meta name="keywords" content={t("meta.keywords")} />
      <link rel="canonical" href={t("meta.canonical")} />
      <html lang={t("lang_code", { ns: "common" })} />
    </Helmet>
  );
};

export default SEO;
