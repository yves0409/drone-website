import i18n from "i18next";
import nlFlag from "../assets/svg/be.svg";
import enFlag from "../assets/svg/gb.svg";
import frFlag from "../assets/svg/fr.svg";

import "../css/LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="language-switcher d-flex gap-2 align-items-center me-4">
      <img
        src={enFlag}
        alt="EN"
        className="lang-flag"
        onClick={() => changeLanguage("en")}
      />
      <img
        src={nlFlag}
        alt="NL"
        className="lang-flag"
        onClick={() => changeLanguage("nl")}
      />
      <img
        src={frFlag}
        alt="FR"
        className="lang-flag"
        onClick={() => changeLanguage("fr")}
      />
    </div>
  );
};

export default LanguageSwitcher;
