import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // load translations via HTTP (public/locales)
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next) // pass i18n to react-i18next
  .init({
    fallbackLng: "en",
    debug: true,

    // Declare all namespaces you're using
    ns: [
      "common",
      "about",
      "contact",
      "mission",
      "services",
      "realestate",
      "event",
      "construction",
      "aerial",
    ],
    defaultNS: "common", // used when no namespace is specified

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    interpolation: {
      escapeValue: false, // react already escapes by default
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
