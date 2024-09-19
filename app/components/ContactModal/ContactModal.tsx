import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Image from 'next/image';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const socialLinks = [
    {
      href: 'https://github.com/RhoneLachner',
      icon: '/images/icons/github-icon.png',
    },
    {
      href: 'https://www.linkedin.com/in/rhonelachner/',
      icon: '/images/icons/linkedin-icon.png',
    },
    {
      href: 'https://hopeandfailure.com/',
      icon: '/images/icons/band-website-icon.png',
    },
  ];

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button onClick={onClose} className="closeButton">
          <Image
            src="/images/icons/close-icon-white.png"
            alt="Close Icon"
            width={24}
            height={24}
          />
        </button>
        <div className={styles.socialIconsContainer}>
          {socialLinks.map((link, index) => (
            <a
              className={styles.socialLink}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                alt="Social Icon"
                width={48}
                height={48}
                className={styles.socialIconImage}
              />
            </a>
          ))}
        </div>
        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
