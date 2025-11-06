import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div
      className="privacy-policy"
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1
        style={{ color: "#c56c29", fontSize: "2rem", marginBottom: "0.5rem" }}
      >
        Privacy Policy – AirGrid
      </h1>

      {/* ================= EN ================= */}
      <section id="en">
        <h2 style={{ color: "#ba4a1c", marginTop: "2rem" }}>English</h2>
        <p>
          AirGrid is committed to protecting your privacy. This policy explains
          what we collect, how we use it, and your rights when you contact us or
          use our services.
        </p>

        <h3>Data we collect</h3>
        <ul>
          <li>Name, email, phone (optional)</li>
          <li>Message content / project details</li>
          <li>Technical data for security (via Google reCAPTCHA)</li>
        </ul>

        <h3>How we use your data (purpose & lawful basis)</h3>
        <ul>
          <li>
            Respond to inquiries and provide quotes/services (
            <em>contract / legitimate interest</em>)
          </li>
          <li>
            Protect our forms from abuse with reCAPTCHA (
            <em>legitimate interest – security</em>)
          </li>
        </ul>

        <h3>Processors we use</h3>
        <ul>
          <li>
            <strong>Google Apps Script / Google Workspace</strong> — to receive
            form submissions by email and/or store them in Google Sheets.
          </li>
          <li>
            <strong>Google reCAPTCHA</strong> — to prevent spam and abuse. This
            service may collect device and usage data. See Google’s{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            .
          </li>
          <li>
            <strong>Google Fonts</strong> — used to display web fonts; no
            cookies are set by Google Fonts itself.
          </li>
        </ul>

        <h3>Cookies & local storage</h3>
        <ul>
          <li>No advertising or analytics cookies are used.</li>
          <li>
            We store your language preference in <code>localStorage</code> (not
            a cookie).
          </li>
          <li>
            reCAPTCHA may set cookies strictly for security/anti-abuse. These
            are treated as necessary for form protection.
          </li>
        </ul>

        <h3>Data retention</h3>
        <p>
          We keep contact submissions only as long as needed to handle your
          request and deliver services, typically up to{" "}
          <strong>12 months</strong>, unless a longer period is required for
          legal/accounting purposes.
        </p>

        <h3>International transfers</h3>
        <p>
          Google may process data on servers outside the EU/EEA. Google relies
          on appropriate safeguards (such as the EU–US Data Privacy Framework or
          Standard Contractual Clauses). See Google’s privacy documentation for
          details.
        </p>

        <h3>Do we share your data?</h3>
        <p>
          We do not sell or rent your data. We share it only with the processors
          above or if required by law.
        </p>

        <h3>Your rights (EU/EEA/UK)</h3>
        <ul>
          <li>Access, correction, deletion</li>
          <li>Restriction or objection to processing where applicable</li>
          <li>Data portability where applicable</li>
          <li>Withdraw consent if processing is based on consent</li>
        </ul>

        <h3>Contact</h3>
        <p>
          For privacy requests, contact:{" "}
          <a href="mailto:hello@airgrid.be">hello@airgrid.be</a>
        </p>

        <p>
          <em>Last updated: November 2025</em>
        </p>
      </section>

      <hr style={{ margin: "3rem 0", borderTop: "1px solid #ccc" }} />

      {/* ================= FR ================= */}
      <section id="fr">
        <h2 style={{ color: "#ba4a1c" }}>Français</h2>
        <p>
          AirGrid protège votre vie privée. Cette politique explique ce que nous
          collectons, comment nous l’utilisons et vos droits lorsque vous nous
          contactez ou utilisez nos services.
        </p>

        <h3>Données collectées</h3>
        <ul>
          <li>Nom, e-mail, téléphone (optionnel)</li>
          <li>Contenu du message / détails du projet</li>
          <li>
            Données techniques à des fins de sécurité (via Google reCAPTCHA)
          </li>
        </ul>

        <h3>Utilisation & base légale</h3>
        <ul>
          <li>
            Répondre aux demandes et fournir des devis/services (
            <em>contrat / intérêt légitime</em>)
          </li>
          <li>
            Protéger nos formulaires avec reCAPTCHA (
            <em>intérêt légitime – sécurité</em>)
          </li>
        </ul>

        <h3>Sous-traitants</h3>
        <ul>
          <li>
            <strong>Google Apps Script / Google Workspace</strong> — réception
            des formulaires par e-mail et/ou enregistrement dans Google Sheets.
          </li>
          <li>
            <strong>Google reCAPTCHA</strong> — prévention du spam et des abus.
            Ce service peut collecter des données d’appareil et d’usage.
            Consultez la{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Règle de confidentialité
            </a>{" "}
            et les{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Conditions
            </a>{" "}
            de Google.
          </li>
          <li>
            <strong>Google Fonts</strong> — affichage des polices web ; pas de
            cookies par Google Fonts lui-même.
          </li>
        </ul>

        <h3>Cookies & stockage local</h3>
        <ul>
          <li>Pas de cookies publicitaires ni d’analyse.</li>
          <li>
            Nous enregistrons votre langue dans le <code>localStorage</code>{" "}
            (pas un cookie).
          </li>
          <li>
            reCAPTCHA peut déposer des cookies strictement nécessaires à la
            sécurité/anti-abus.
          </li>
        </ul>

        <h3>Durées de conservation</h3>
        <p>
          Nous conservons les demandes de contact aussi longtemps que nécessaire
          pour traiter votre demande et fournir nos services, généralement
          jusqu’à <strong>12 mois</strong>, sauf obligation légale contraire.
        </p>

        <h3>Transferts internationaux</h3>
        <p>
          Google peut traiter des données en dehors de l’UE/EEE. Google s’appuie
          sur des garanties appropriées (par ex. EU–US Data Privacy Framework ou
          Clauses Contractuelles Types).
        </p>

        <h3>Partage des données</h3>
        <p>
          Nous ne vendons ni ne louons vos données. Partage limité aux
          sous-traitants ci-dessus ou obligations légales.
        </p>

        <h3>Vos droits</h3>
        <ul>
          <li>Accès, rectification, suppression</li>
          <li>Limitation ou opposition lorsque applicable</li>
          <li>Portabilité lorsque applicable</li>
          <li>Retrait du consentement si la base est le consentement</li>
        </ul>

        <h3>Contact</h3>
        <p>
          Pour toute demande, écrivez à :{" "}
          <a href="mailto:hello@airgrid.be">hello@airgrid.be</a>
        </p>

        <p>
          <em>Dernière mise à jour : novembre 2025</em>
        </p>
      </section>

      <hr style={{ margin: "3rem 0", borderTop: "1px solid #ccc" }} />

      {/* ================= NL ================= */}
      <section id="nl">
        <h2 style={{ color: "#ba4a1c" }}>Nederlands</h2>
        <p>
          AirGrid beschermt uw privacy. Dit beleid legt uit welke gegevens we
          verzamelen, hoe we die gebruiken en welke rechten u heeft wanneer u
          contact opneemt of van onze diensten gebruikmaakt.
        </p>

        <h3>Welke gegevens verzamelen we?</h3>
        <ul>
          <li>Naam, e-mail, telefoon (optioneel)</li>
          <li>Berichtinhoud / projectdetails</li>
          <li>Technische gegevens voor beveiliging (via Google reCAPTCHA)</li>
        </ul>

        <h3>Doeleinden & rechtsgrond</h3>
        <ul>
          <li>
            Beantwoorden van aanvragen en leveren van diensten (
            <em>contract / gerechtvaardigd belang</em>)
          </li>
          <li>
            Bescherming van formulieren met reCAPTCHA (
            <em>gerechtvaardigd belang – beveiliging</em>)
          </li>
        </ul>

        <h3>Verwerkers</h3>
        <ul>
          <li>
            <strong>Google Apps Script / Google Workspace</strong> — ontvangst
            van formulieren per e-mail en/of opslag in Google Sheets.
          </li>
          <li>
            <strong>Google reCAPTCHA</strong> — voorkomt spam en misbruik. Deze
            dienst kan apparaat- en gebruiksgegevens verwerken. Zie Google’s{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacybeleid
            </a>{" "}
            en{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Voorwaarden
            </a>
            .
          </li>
          <li>
            <strong>Google Fonts</strong> — weergave van webfonts; Google Fonts
            plaatst zelf geen cookies.
          </li>
        </ul>

        <h3>Cookies & local storage</h3>
        <ul>
          <li>Geen advertentie- of analysecookies.</li>
          <li>
            We bewaren uw taalkeuze in <code>localStorage</code> (geen cookie).
          </li>
          <li>
            reCAPTCHA kan cookies plaatsen die strikt noodzakelijk zijn voor
            beveiliging/anti-misbruik.
          </li>
        </ul>

        <h3>Bewaartermijnen</h3>
        <p>
          Contactaanvragen bewaren we alleen zolang nodig voor opvolging en
          dienstverlening, doorgaans tot <strong>12 maanden</strong>, tenzij een
          langere termijn wettelijk vereist is.
        </p>

        <h3>Internationale doorgifte</h3>
        <p>
          Google kan gegevens buiten de EU/EER verwerken. Google past passende
          waarborgen toe (bijv. EU–US Data Privacy Framework of
          Standaardcontractbepalingen).
        </p>

        <h3>Delen van gegevens</h3>
        <p>
          We verkopen of verhuren uw gegevens niet. Delen gebeurt alleen met
          bovenstaande verwerkers of als de wet dat vereist.
        </p>

        <h3>Uw rechten</h3>
        <ul>
          <li>Inzien, rectificatie, verwijdering</li>
          <li>Beperking of bezwaar waar van toepassing</li>
          <li>Overdraagbaarheid waar van toepassing</li>
          <li>Intrekken van toestemming indien van toepassing</li>
        </ul>

        <h3>Contact</h3>
        <p>
          Voor privacyverzoeken:{" "}
          <a href="mailto:hello@airgrid.be">hello@airgrid.be</a>
        </p>

        <p>
          <em>Laatst bijgewerkt: november 2025</em>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
