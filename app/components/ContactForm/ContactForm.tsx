// TO-DO - email contact form still needs configuration to send emails

import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.emailInputContainer}>
        <input
          type="email"
          placeholder="your email"
          className={styles.emailInput}
        />
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </div>

      <textarea
        placeholder="send me a message"
        className={styles.textArea}
      ></textarea>
    </form>
  );
};

export default ContactForm;
