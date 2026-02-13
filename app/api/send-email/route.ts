import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, containsDangerousPatterns, validateJsonInput } from "@/lib/security";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
const RECIPIENT_EMAIL = process.env.EMAILJS_RECIPIENT_EMAIL || "roman.fedoniuk@gmail.com";

// Service name mapping
const SERVICE_NAMES: Record<string, string> = {
  'company-formation': 'Company Formation',
  'document-clearance': 'Document Clearance & PRO Services',
  'translation': 'Translation & Document Legalization',
  'power-of-attorney': 'Power of Attorney & Notary Services',
  'visa': 'Visa & Immigration Services',
  'labor': 'Labor & Employment Services',
  'banking': 'Banking Support Services',
  'tax': 'Tax Residency & Compliance Support',
  'ongoing': 'Ongoing Corporate & Administrative Support',
};

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const clientId = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const rateLimit = checkRateLimit(clientId, 20, 60000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Читаємо тіло запиту
    const bodyText = await req.text();
    
    // Валідація JSON
    const jsonValidation = validateJsonInput(bodyText, 50000);
    if (!jsonValidation.valid) {
      return NextResponse.json(
        { error: "Invalid input", details: jsonValidation.error },
        { status: 400 }
      );
    }

    const body = JSON.parse(bodyText);
    const { fullName, phone, email, service, preferredContact, taskDescription } = body;

    // Валідація обов'язкових полів
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }

    if (!preferredContact || typeof preferredContact !== 'string') {
      return NextResponse.json(
        { error: "Preferred contact method is required" },
        { status: 400 }
      );
    }

    // Перевірка на небезпечні паттерни
    const contentToCheck = `${fullName} ${phone} ${email || ''} ${service || ''} ${preferredContact} ${taskDescription || ''}`;
    if (containsDangerousPatterns(contentToCheck)) {
      return NextResponse.json(
        { error: "Dangerous patterns detected in form data" },
        { status: 400 }
      );
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
      console.error("EmailJS configuration is not set");
      return NextResponse.json(
        { error: "Email service not configured. Please set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, and EMAILJS_PRIVATE_KEY in environment variables." },
        { status: 500 }
      );
    }

    // Отримуємо читабельну назву послуги
    const serviceName = service ? (SERVICE_NAMES[service] || service) : 'Not specified';

    // Формуємо HTML повідомлення
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #222221;">New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Preferred Method of Contact:</strong> ${preferredContact}</p>
        ${taskDescription ? `<p><strong>Task/Request Description:</strong><br>${taskDescription.replace(/\n/g, '<br>')}</p>` : ''}
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was sent from the Flavus Business Services contact form.</p>
      </div>
    `;

    const emailText = `
New Contact Form Submission

Full Name: ${fullName}
Phone: ${phone}
${email ? `Email: ${email}` : ''}
Service: ${serviceName}
Preferred Method of Contact: ${preferredContact}
${taskDescription ? `\nTask/Request Description:\n${taskDescription}` : ''}
    `.trim();

    // Відправка email через EmailJS API
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          to_email: RECIPIENT_EMAIL,
          subject: `New Contact Form Submission from ${fullName}`,
          message: emailHtml,
          reply_to: email || RECIPIENT_EMAIL,
        },
      }),
    });

    const responseData = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", responseData);
      return NextResponse.json(
        { error: "Failed to send email", details: responseData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
