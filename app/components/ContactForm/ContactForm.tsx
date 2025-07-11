/**
 * This component renders a contact form that allows users to send a message via email.
 * It validates that both the email and message fields are filled before submission.
 * If either field is empty, an error message is displayed.
 * Upon successful submission, a success message is shown, otherwise, an error message is returned.
 */

import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  // State to store the email, message, and response messages (errors/success)
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Effect that clears the error message when both fields are filled
  useEffect(() => {
    if (email && message) {
      setResponseMessage('');
    }
  }, [email, message]);

  /**
   * Handle the form submission by checking if the fields are filled.
   * If fields are not filled, an error message is displayed.
   * Otherwise, the message is sent via the `/api/sendEmail` API and the result is handled.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email and message are filled before submitting
    if (!email || !message) {
      setResponseMessage('Please fill in both the email and message fields.');
      return;
    }

    try {
      // Send the email and message to the backend API
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      // Handle response: success or error messages
      if (res.ok) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      // Handle any network or unexpected errors
      setResponseMessage('Error sending message. Please try again.');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.emailInputContainer}>
        {/* Input for user's email */}
        <input
          type="email"
          placeholder="your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
        />
        {/* Submit button */}
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </div>

      {/* Textarea for user's message */}
      <textarea
        placeholder="send me a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textArea}
      ></textarea>

      {/* Conditionally render the response message (error or success) */}
      {responseMessage && (
        <div className={styles.responseMessage}>{responseMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
