import React, { useState, useEffect, useRef } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "../css/LanguageSwitcher.css";

const LANGS = [
  { code: "en", label: "EN", flag: "/flags/gb.svg" },
  { code: "nl", label: "NL", flag: "/flags/be.svg" },
  { code: "fr", label: "FR", flag: "/flags/fr.svg" },
];

export default function FlagLanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  // Persist selection
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []); // eslint-disable-line

  const current = LANGS.find((l) => l.code === i18n.language) || LANGS[0];

  const change = (code) => {
    i18next.changeLanguage(code);
    localStorage.setItem("lang", code);
    document.documentElement.lang = code; // a11y & SEO
    setOpen(false);
    // If you have RTL langs later: document.documentElement.dir = ["ar","he"].includes(code) ? "rtl" : "ltr";
  };

  // close on outside click / ESC
  useEffect(() => {
    const onDoc = (e) =>
      setOpen((o) =>
        btnRef.current && btnRef.current.contains(e.target) ? o : false
      );
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div className={`language-switcher dropdown ${className}`}>
      <button
        ref={btnRef}
        className="btn btn-light d-inline-flex align-items-center gap-2"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <img src={current.flag} alt="" width="20" height="14" />
        <span className="d-none d-sm-inline">{current.label}</span>
      </button>

      <ul
        className={`dropdown-menu ${open ? "show" : ""}`}
        role="listbox"
        style={{ minWidth: 180 }}
      >
        {LANGS.map((lang) => (
          <li key={lang.code}>
            <button
              className={`dropdown-item d-flex align-items-center gap-2 ${
                lang.code === current.code ? "active" : ""
              }`}
              role="option"
              aria-selected={lang.code === current.code}
              onClick={() => change(lang.code)}
            >
              <img src={lang.flag} alt="" width="20" height="14" />
              <span>{lang.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
