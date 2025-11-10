import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/typography-lock.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
// import "bootstrap-icons/font/bootstrap-icons.css";

window.__ENV_CHECK__ = {
  cloud: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  recaptcha: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
