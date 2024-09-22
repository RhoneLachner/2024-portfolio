/**
 * This API route handles sending emails through a POST request.
 * - Accepts two fields in the request body: 'email' and 'message'.
 * - Utilizes nodemailer to send emails via Gmail, with the credentials stored in environment variables.
 * - If the email is set to 'test@example.com', the email is simulated for testing purposes.
 * - The if statement icluding 'test@example.com' can be commented out to test real delivery to an email account. 
 * - Returns appropriate HTTP status codes based on the request method, input validation, and email sending success/failure.
 */

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
