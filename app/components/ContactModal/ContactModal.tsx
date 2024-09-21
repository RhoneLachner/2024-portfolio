import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import styles from './ContactModal.module.css';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';
import DynamicSocialIcons from '../DynamicIcons/DynamicSocialIcons'; // Import the dynamic social icons

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <DynamicCloseButton onClose={onClose} />

        <div className={styles.socialIconsContainer}>
          <DynamicSocialIcons />{' '}
        </div>

        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
