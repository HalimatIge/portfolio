import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Your Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #F9F4F4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: #2D2D2D; margin: 0;">New Message From Your Portfolio</h1>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #DDC0C5;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2D2D2D;">Name:</strong>
              <span style="color: #666; margin-left: 10px;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2D2D2D;">Email:</strong>
              <span style="color: #666; margin-left: 10px;">${email}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2D2D2D;">Subject:</strong>
              <span style="color: #666; margin-left: 10px;">${subject}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2D2D2D;">Message:</strong>
              <div style="color: #666; margin-top: 10px; white-space: pre-wrap; background: #f8f8f8; padding: 15px; border-radius: 5px;">${message}</div>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
