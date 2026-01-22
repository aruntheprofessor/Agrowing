/* eslint-disable no-undef */
import express, { json } from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

config();
const app = express();

// Allow frontend to connect
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000']
}));
app.use(json());

// Handle contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Setup email
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email to you
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${name}`,
      html: `
        <h3>New Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Auto-reply to user
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for contacting Agrowing!',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We got your message and will reply within 24 hours.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br>Agrowing Team</p>
      `
    };

    // Send emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    res.json({ success: true, message: 'Message sent!' });

  } catch (error) {
    console.log('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});