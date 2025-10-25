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
        Privacy Policy – SkyPix
      </h1>

      <section id="en">
        <h2 style={{ color: "#ba4a1c", marginTop: "2rem" }}>English</h2>
        <p>
          SkyPix is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and store your data when you contact us
          or use our services.
        </p>
        <p>
          <strong>What data do we collect?</strong>
          <br />- Name
          <br />- Email address
          <br />- Phone number (optional)
          <br />- Message content
        </p>
        <p>
          <strong>Why do we collect your data?</strong>
          <br />
          We use your data solely to:
          <br />- Respond to inquiries
          <br />- Provide drone photography or videography services
          <br />- Improve our communication and service delivery
        </p>
        <p>
          <strong>How is your data stored?</strong>
          <br />
          Your data may be stored securely via third-party tools such as
          Firebase, Formspree, or Google Sheets. We ensure these services are
          GDPR-compliant and, when possible, hosted within the EU.
        </p>
        <p>
          <strong>Do we share your data?</strong>
          <br />
          No. We do not sell, rent, or share your data with third parties unless
          required by law.
        </p>
        <p>
          <strong>Your rights under GDPR:</strong>
          <br />- Access your data
          <br />- Request correction or deletion
          <br />- Withdraw consent at any time
        </p>
        <p>
          <strong>Contact:</strong>
          <br />
          For any privacy concerns, email us at:{" "}
          <a href="mailto:hello@skypix.be">hello@skypix.be</a>
        </p>
        <p>
          <em>This policy may be updated. Last revised: May 2025</em>
        </p>
      </section>

      <hr style={{ margin: "3rem 0", borderTop: "1px solid #ccc" }} />

      <section id="fr">
        <h2 style={{ color: "#ba4a1c" }}>Français</h2>
        <p>
          SkyPix s'engage à protéger votre vie privée. Cette politique de
          confidentialité explique comment nous collectons, utilisons et
          stockons vos données lorsque vous nous contactez ou utilisez nos
          services.
        </p>
        <p>
          <strong>Quelles données collectons-nous ?</strong>
          <br />- Nom
          <br />- Adresse e-mail
          <br />- Numéro de téléphone (optionnel)
          <br />- Contenu du message
        </p>
        <p>
          <strong>Pourquoi collectons-nous vos données ?</strong>
          <br />
          Nous utilisons vos données uniquement pour :<br />- Répondre aux
          demandes de contact
          <br />- Fournir nos services de photographie/vidéographie par drone
          <br />- Améliorer notre communication et nos prestations
        </p>
        <p>
          <strong>Comment vos données sont-elles stockées ?</strong>
          <br />
          Vos données peuvent être stockées de manière sécurisée via des
          services tiers tels que Firebase, Formspree ou Google Sheets. Nous
          veillons à ce que ces services respectent le RGPD et soient hébergés
          dans l'UE lorsque possible.
        </p>
        <p>
          <strong>Partageons-nous vos données ?</strong>
          <br />
          Non. Nous ne vendons, louons ou partageons pas vos données avec des
          tiers, sauf obligation légale.
        </p>
        <p>
          <strong>Vos droits selon le RGPD :</strong>
          <br />- Accès à vos données
          <br />- Demande de modification ou suppression
          <br />- Retrait du consentement à tout moment
        </p>
        <p>
          <strong>Contact :</strong>
          <br />
          Pour toute question relative à la confidentialité, contactez-nous à :{" "}
          <a href="mailto:hello@skypix.be">hello@skypix.be</a>
        </p>
        <p>
          <em>
            Cette politique peut être mise à jour. Dernière révision : mai 2025
          </em>
        </p>
      </section>

      <hr style={{ margin: "3rem 0", borderTop: "1px solid #ccc" }} />

      <section id="nl">
        <h2 style={{ color: "#ba4a1c" }}>Nederlands</h2>
        <p>
          SkyPix respecteert uw privacy. Dit privacybeleid legt uit hoe we uw
          gegevens verzamelen, gebruiken en opslaan wanneer u contact met ons
          opneemt of gebruik maakt van onze diensten.
        </p>
        <p>
          <strong>Welke gegevens verzamelen wij?</strong>
          <br />- Naam
          <br />- E-mailadres
          <br />- Telefoonnummer (optioneel)
          <br />- Berichtinhoud
        </p>
        <p>
          <strong>Waarom verzamelen wij uw gegevens?</strong>
          <br />
          Wij gebruiken uw gegevens uitsluitend om:
          <br />- Te reageren op contactverzoeken
          <br />- Onze dronefotografie- en videodiensten te leveren
          <br />- Onze communicatie en dienstverlening te verbeteren
        </p>
        <p>
          <strong>Hoe worden uw gegevens opgeslagen?</strong>
          <br />
          Uw gegevens kunnen veilig worden opgeslagen via diensten van derden
          zoals Firebase, Formspree of Google Sheets. We zorgen ervoor dat deze
          diensten GDPR-conform zijn en bij voorkeur in de EU worden gehost.
        </p>
        <p>
          <strong>Delen wij uw gegevens?</strong>
          <br />
          Nee. Wij verkopen, verhuren of delen uw gegevens niet met derden,
          tenzij wettelijk verplicht.
        </p>
        <p>
          <strong>Uw rechten onder de GDPR:</strong>
          <br />- Toegang tot uw gegevens
          <br />- Aanpassing of verwijdering aanvragen
          <br />- Toestemming op elk moment intrekken
        </p>
        <p>
          <strong>Contact:</strong>
          <br />
          Voor privacyvragen kunt u ons bereiken via:{" "}
          <a href="mailto:hello@skypix.be">hello@skypix.be</a>
        </p>
        <p>
          <em>
            Dit beleid kan worden bijgewerkt. Laatste herziening: mei 2025
          </em>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
