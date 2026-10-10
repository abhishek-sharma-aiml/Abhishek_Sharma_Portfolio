import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, botcheck } = body;

    // Honeypot spam check
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Message dispatched" });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USERNAME || "abhis699675@gmail.com";
    const pass = (process.env.SMTP_PASSWORD || "yxcj bdfj timy owdw").replace(/\s+/g, "");

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to: process.env.CONTACT_EMAIL || user,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject || "New Message"} - from ${name}`,
      text: `Sender: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0891b2; margin-top: 0; margin-bottom: 8px;">New Message from Portfolio</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0891b2;">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0; white-space: pre-wrap; color: #334155; line-height: 1.6;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 24px; margin-bottom: 0;">
            Received from portfolio contact form · Dispatched via Gmail SMTP
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to send email via SMTP." },
      { status: 500 }
    );
  }
}
