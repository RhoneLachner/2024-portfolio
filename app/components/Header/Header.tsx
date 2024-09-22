/**
 * Header Component
 *
 * This component renders the header of the website with navigation buttons to open modals (About, Projects, Contact).
 * It includes the DarkModeToggle component, and manages the modal state via the `useModalContext` hook.
 * The modals for About, Projects, and Contact are conditionally rendered based on the current open modal.
 */

import React from 'react';
import AboutModal from '../AboutModal/AboutModal';
import { useModalContext } from '../../context/ModalContext';
import ContactModal from '../ContactModal/ContactModal';
import ProjectsModal from '../ProjectsModal/ProjectsModal';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import styles from './Header.module.css';

const Header = () => {
  // Modal state from ModalContext
  const { openModal, setOpenModal } = useModalContext();

  /**
   * Toggles the modal state for a specific modal.
   * If the current modal is already open, it closes it. Otherwise, it opens the selected modal.
   */
  const openModalHandler = (modalName: string) => {
    setOpenModal(openModal === modalName ? null : modalName);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.darkmodeToggleEmoji}>
          <DarkModeToggle />
        </div>

        <nav className={styles.nav}>
          <button
            className={`${styles.headerModalButton} ${
              openModal === 'about' ? styles.active : ''
            }`}
            onClick={() => openModalHandler('about')}
          >
            About
          </button>
          <button
            className={`${styles.headerModalButton} ${
              openModal === 'projects' ? styles.active : ''
            }`}
            onClick={() => openModalHandler('projects')}
          >
            Projects
          </button>
          <button
            className={`${styles.headerModalButton} ${
              openModal === 'contact' ? styles.active : ''
            }`}
            onClick={() => openModalHandler('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Conditionally render the modals based on the current open modal */}
      <AboutModal
        isOpen={openModal === 'about'}
        onClose={() => setOpenModal(null)}
      />
      <ProjectsModal
        isOpen={openModal === 'projects'}
        onClose={() => setOpenModal(null)}
      />
      <ContactModal
        isOpen={openModal === 'contact'}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
};

export default Header;
