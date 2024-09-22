/**
 * ContactModal Component
 *
 * This modal component is rendered when the `isOpen` prop is set to true. It includes:
 * - DynamicCloseButton for dismissing the modal.
 * - DynamicSocialIcons for displaying links to social media sites.
 * - ContactForm to allow users to send a message via email.
 */

import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import DynamicCloseButton from '../DynamicIcons/DynamicCloseButton';
import DynamicSocialIcons from '../DynamicIcons/DynamicSocialIcons';

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
        <DynamicSocialIcons /> <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
