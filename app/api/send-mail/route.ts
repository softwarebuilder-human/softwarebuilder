import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "softwarebuilder.human@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "softwarebuilder.human@gmail.com",
    to: "ironman1001ic@gmail.com",
    subject: `New Project Inquiry: ${data.projectType} Project`,
    text: `
Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Project Type: ${data.projectType}
Budget: ${data.budget}
Timeline: ${data.timeline}

Description:
${data.description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
