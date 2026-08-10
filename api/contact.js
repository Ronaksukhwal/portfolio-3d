import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ronaksukhwal5@gmail.com",
    pass: "yhyzfsgwaouimwej"
  }
});

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Please fill out all required fields." });
  }

  // HTML Email Template for Ronak (Inquiry Details)
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Portfolio Inquiry</title>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; background-color: #030014; color: #f1f5f9; margin: 0; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #0b0720; border: 1px solid rgba(124, 58, 237, 0.2); border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
        .header { border-bottom: 2px solid rgba(124, 58, 237, 0.3); padding-bottom: 15px; margin-bottom: 20px; text-align: center; }
        .header h2 { color: #06b6d4; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .field { margin-bottom: 18px; }
        .label { font-size: 10px; font-weight: bold; color: #7c3aed; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .value { font-size: 14px; color: #f1f5f9; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; }
        .message-box { font-size: 14px; color: #f1f5f9; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap; }
        .footer { text-align: center; font-size: 11px; color: #64748b; margin-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 15px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2>New Message Received</h2>
        </div>
        <div class="field">
          <div class="label">Sender Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Sender Email</div>
          <div class="value">${email}</div>
        </div>
        <div class="field">
          <div class="label">Subject</div>
          <div class="value">${subject || "Direct Portfolio Contact"}</div>
        </div>
        <div class="field">
          <div class="label">Inquiry Message</div>
          <div class="message-box">${message}</div>
        </div>
        <div class="footer">
          Sent automatically from Ronak Sukhwal's 3D Portfolio Hub
        </div>
      </div>
    </body>
    </html>
  `;

  // HTML Email Template for the Client (Confirmation receipt)
  const clientEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Your Inquiry</title>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; background-color: #030014; color: #f1f5f9; margin: 0; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #0b0720; border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
        .header { border-bottom: 2px solid rgba(6, 182, 212, 0.3); padding-bottom: 15px; margin-bottom: 20px; text-align: center; }
        .header h2 { color: #7c3aed; font-size: 22px; margin: 0; }
        .intro { font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-bottom: 25px; }
        .bio-block { background: rgba(124, 58, 237, 0.05); border: 1px solid rgba(124, 58, 237, 0.1); border-radius: 12px; padding: 15px; margin-bottom: 25px; }
        .bio-block h4 { margin: 0 0 8px 0; color: #06b6d4; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
        .bio-block p { margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5; }
        .links { text-align: center; margin-top: 25px; }
        .btn { display: inline-block; padding: 10px 20px; margin: 5px; border-radius: 20px; font-size: 12px; font-weight: bold; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; }
        .btn-github { background: #1e293b; color: #ffffff; border: 1px solid #334155; }
        .btn-portfolio { background: linear-gradient(to right, #7c3aed, #06b6d4); color: #ffffff; }
        .footer { text-align: center; font-size: 11px; color: #64748b; margin-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 15px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2>Inquiry Received successfully</h2>
        </div>
        <p class="intro">
          Hello <strong>${name}</strong>,<br><br>
          Thank you for reaching out! Your message has been successfully sent to the developer <strong>Ronak Sukhwal</strong>. He has received your enquiry details and will review and respond to you as soon as possible.
        </p>
        
        <div class="bio-block">
          <h4>About Ronak Sukhwal</h4>
          <p>
            Ronak is a Full-Stack Engineer and B.Tech IT scholar specializing in building modular, high-performance web applications with React frontends and Python/Django database backends.
          </p>
        </div>

        <p class="intro" style="font-size: 12px; color: #94a3b8;">
          A copy of your message subject/details has been cataloged. You can follow Ronak's latest coding projects and check out his active repository boards.
        </p>

        <div class="links">
          <a href="https://github.com/Ronaksukhwal" target="_blank" class="btn btn-github">GitHub Profile</a>
          <a href="https://sukhwalautoservice.in" target="_blank" class="btn btn-portfolio">Featured Project</a>
        </div>

        <div class="footer">
          Warm regards,<br>
          <strong>Ronak Sukhwal</strong><br>
          Bhilwara, Rajasthan, India
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // 1. Send inquiry notification to Ronak
    await transporter.sendMail({
      from: `"Portfolio Inquiry" <ronaksukhwal5@gmail.com>`,
      to: "ronaksukhwal5@gmail.com",
      subject: `New Portfolio Message: ${subject || "Inquiry"}`,
      html: adminEmailHtml
    });

    // 2. Send confirmation auto-reply to the Client
    await transporter.sendMail({
      from: `"Ronak Sukhwal" <ronaksukhwal5@gmail.com>`,
      to: email,
      subject: `Enquiry Received: ${subject || "Thank You!"}`,
      html: clientEmailHtml
    });

    return res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email Transmission Error:", error);
    return res.status(500).json({ success: false, message: "SMTP failure during email transmission." });
  }
}
