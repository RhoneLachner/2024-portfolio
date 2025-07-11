/**
 * ContactModal Component
 *
 * This modal component is rendered when the `isOpen` prop is set to true. It includes:
 * - DynamicCloseButton for dismissing the modal.
 * - DynamicSocialIcons for displaying links to social media sites.
 * - ContactForm to allow users to send a message via email.
 * - Buy me a tea button linking to Buy Me a Coffee page.
 */

import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';
import DynamicSocialIcons from '../DynamicIcons/DynamicSocialIcons';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  // Only render the modal if it is open
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <DynamicCloseButton onClose={onClose} />
        <DynamicSocialIcons />
        <ContactForm />
        <a
          href="https://buymeacoffee.com/rhone"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyMeTeaButton}
        >
          🫖 buy me a tea
        </a>
      </div>
    </div>
  );
};

export default ContactModal;
