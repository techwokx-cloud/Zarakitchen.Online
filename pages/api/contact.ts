import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, subject, message } = req.body;

  if (!fullName || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Email to restaurant manager
    const managerEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Submitted from: Zara Kitchen Website</p>
    `;

    // Send to restaurant manager - LINE 36
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'restaurantmanager@zarakitchen.online',
      subject: `New Contact Form: ${subject} from ${fullName}`,
      html: managerEmailContent,
    });

    // Confirmation email to customer
    const customerEmailContent = `
      <h2>Thank you for contacting Zara Kitchen!</h2>
      <p>Hi ${fullName},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <hr>
      <h3>Your Message Details:</h3>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Best regards,<br><strong>Zara Kitchen Team</strong></p>
      <p>Phone: 059 159 9629 | Email: orders@zarakitchen.online</p>
    `;

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your message - Zara Kitchen',
      html: customerEmailContent,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
