import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
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
        <DynamicSocialIcons /> <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
