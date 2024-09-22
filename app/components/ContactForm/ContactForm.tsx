import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    if (email && message) {
      setResponseMessage('');
    }
  }, [email, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setResponseMessage('Please fill in both the email and message fields.');
      return;
    }

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage('Message sent successfully!');
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage('Error sending message. Please try again.');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.emailInputContainer}>
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
        />
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </div>

      <textarea
        placeholder="send me a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textArea}
      ></textarea>

      {responseMessage && (
        <div className={styles.responseMessage}>{responseMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
