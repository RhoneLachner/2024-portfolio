import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { email, message } = req.body;

  // Comment out next three lines to test delivery to real email account
  if (email === 'test@example.com') {
    return res.status(200).json({ message: 'Test Email sent successfully!' });
  }

  if (!email || !message) {
    return res.status(400).json({ message: 'Email and message are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return res.status(500).json({ message: 'Failed to send email' });
    } else {
      console.error('Unexpected error:', error);
      return res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
}
