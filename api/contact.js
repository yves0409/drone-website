// api/contact.js
// Serverless contact endpoint for Vercel + Resend + reCAPTCHA v2 (checkbox)

export default async function handler(req, res) {
  // Optional: CORS preflight (safe no-op if same-origin)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Guard server-side env (early & clear)
  const missing = [
    ["RECAPTCHA_SECRET_KEY", process.env.RECAPTCHA_SECRET_KEY],
    ["RESEND_API_KEY", process.env.RESEND_API_KEY],
    ["RESEND_DOMAIN", process.env.RESEND_DOMAIN],
    ["CONTACT_TO_EMAIL", process.env.CONTACT_TO_EMAIL],
  ].filter(([, v]) => !v);

  if (missing.length) {
    return res.status(500).json({
      error: "Server misconfigured",
      detail: `Missing env: ${missing.map(([k]) => k).join(", ")}`,
    });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      topic,
      details,
      token, // reCAPTCHA client token
      source,
      timestamp,
    } = req.body || {};

    // Basic validation
    if (!firstName || !lastName || !email || !details || !token) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 1) Verify reCAPTCHA (server-side, v2 checkbox)
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
    params.append("response", token);

    const verifyResp = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      }
    );
    const verify = await verifyResp.json();

    if (!verify.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    // 2) Send email via Resend REST API
    const html = `
      <h2>New Contact Submission</h2>
      <p><b>Name:</b> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Phone:</b> ${escapeHtml(phone || "-")}</p>
      <p><b>Topic:</b> ${escapeHtml(topic || "-")}</p>
      <p><b>Source:</b> ${escapeHtml(source || "Contact Form")}</p>
      <p><b>Timestamp:</b> ${escapeHtml(
        timestamp || new Date().toISOString()
      )}</p>
      <hr/>
      <p><b>Details:</b></p>
      <div>${escapeHtml(details).replace(/\n/g, "<br/>")}</div>
    `;

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `AIRGRID <info@${process.env.RESEND_DOMAIN}>`, // must be a verified domain in Resend
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email, // <— so you can reply straight to the sender
        subject: `New inquiry: ${topic || "Contact Form"}`,
        html,
      }),
    });

    if (!r.ok) {
      const txt = await r.text().catch(() => "");
      return res.status(502).json({ error: "Email send failed", detail: txt });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact handler error", err);
    return res
      .status(500)
      .json({ error: "Server error", detail: err?.message });
  }
}

// Simple HTML escape to avoid accidental HTML injection in emails
function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
