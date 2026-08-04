import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyCaptchaChallenge } from "@/lib/captcha";
import {
  hasContactErrors,
  validateContactForm,
} from "@/lib/contact-validation";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  hearAbout?: string;
  captchaToken?: string;
  captchaAnswer?: string;
  agreed?: boolean;
};

const FALLBACK_VALIDATION = {
  firstNameRequired: "First name is required.",
  firstNameInvalid: "Enter a valid first name (at least 2 letters).",
  lastNameRequired: "Last name is required.",
  lastNameInvalid: "Enter a valid last name (at least 2 letters).",
  emailRequired: "Email is required.",
  emailInvalid: "Enter a valid email address.",
  phoneRequired: "Phone number is required.",
  phoneInvalid: "Enter a valid phone number.",
  companyRequired: "Company name is required.",
  messageTooLong: "Message must be 2000 characters or less.",
  hearAboutRequired: "Please select how you heard about us.",
  captchaRequired: "Please complete the captcha.",
  consentRequired: "Please agree to the Privacy Policy.",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as Partial<ContactPayload>;

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const hearAbout = body.hearAbout?.trim() ?? "";
    const captchaToken = body.captchaToken?.trim() ?? "";
    const captchaAnswer = body.captchaAnswer?.trim() ?? "";
    const agreed = Boolean(body.agreed);

    const fieldErrors = validateContactForm(
      {
        firstName,
        lastName,
        email,
        phone,
        company,
        message,
        hearAbout,
        captchaToken,
        captchaAnswer,
        agreed,
      },
      FALLBACK_VALIDATION,
    );

    if (hasContactErrors(fieldErrors)) {
      return NextResponse.json(
        { error: "Validation failed.", fields: fieldErrors },
        { status: 400 },
      );
    }

    if (!verifyCaptchaChallenge(captchaToken, captchaAnswer)) {
      return NextResponse.json(
        {
          error: "Captcha verification failed.",
          fields: { captcha: FALLBACK_VALIDATION.captchaRequired },
        },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@hawkbytes.cloud";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? "HawkBytes <onboarding@resend.dev>";

    const fullName = `${firstName} ${lastName}`;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New contact form message from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        `How they heard about us: ${hearAbout || "—"}`,
        "",
        "Message:",
        message || "—",
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>How they heard about us:</strong> ${escapeHtml(hearAbout || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "—").replaceAll("\n", "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 502 },
      );
    }

    // Visitor confirmation — Hostinger auto-reply won't fire because form mail
    // is delivered as info@ → info@ (same mailbox / loop protection).
    const { error: autoReplyError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      replyTo: toEmail,
      subject: "HawkBytes | Talebiniz alındı / We've received your message",
      text: [
        `Hello ${firstName},`,
        "",
        "Thank you for contacting HawkBytes.",
        "We've received your message and our team will get back to you within 24 hours.",
        "",
        "If your request is urgent, simply reply to this email.",
        "",
        "Best regards,",
        "HawkBytes Team",
        toEmail,
        "https://hawkbytes.cloud",
        "",
        "——————————————",
        "",
        `Merhaba ${firstName},`,
        "",
        "HawkBytes’a ulaştığınız için teşekkür ederiz.",
        "Mesajınızı aldık; ekibimiz en geç 24 saat içinde size dönüş yapacaktır.",
        "",
        "Acil bir durum varsa, bu e-postaya yanıt vermeniz yeterlidir.",
        "",
        "Saygılarımızla,",
        "HawkBytes Ekibi",
        toEmail,
        "https://hawkbytes.cloud",
      ].join("\n"),
      html: `
        <p>Hello ${escapeHtml(firstName)},</p>
        <p>Thank you for contacting <strong>HawkBytes</strong>.<br />
        We've received your message and our team will get back to you within 24 hours.</p>
        <p>If your request is urgent, simply reply to this email.</p>
        <p>Best regards,<br />HawkBytes Team<br />
        <a href="mailto:${escapeHtml(toEmail)}">${escapeHtml(toEmail)}</a><br />
        <a href="https://hawkbytes.cloud">https://hawkbytes.cloud</a></p>
        <hr />
        <p>Merhaba ${escapeHtml(firstName)},</p>
        <p>HawkBytes’a ulaştığınız için teşekkür ederiz.<br />
        Mesajınızı aldık; ekibimiz en geç 24 saat içinde size dönüş yapacaktır.</p>
        <p>Acil bir durum varsa, bu e-postaya yanıt vermeniz yeterlidir.</p>
        <p>Saygılarımızla,<br />HawkBytes Ekibi<br />
        <a href="mailto:${escapeHtml(toEmail)}">${escapeHtml(toEmail)}</a><br />
        <a href="https://hawkbytes.cloud">https://hawkbytes.cloud</a></p>
      `,
    });

    if (autoReplyError) {
      console.error("Resend auto-reply error:", autoReplyError);
      // Submission already delivered — don't fail the form for confirmation mail.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
