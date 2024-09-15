'use client';

import React, { useState } from 'react';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';
import ProjectsModal from './ProjectsModal';
import DarkModeToggle from './DarkModeToggle';
import styles from './Header.module.css';

const Header = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const openModalHandler = (modalName: string) => {
    if (openModal === modalName) {
      setOpenModal(null);
    } else {
      setOpenModal(modalName); 
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.darkmodeToggleEmoji}>
          <DarkModeToggle />
        </div>

        <nav className={styles.nav}>
          <button
            className={`${styles.headerModalButton} ${openModal === 'about' ? styles.active : ''}`}
            onClick={() => openModalHandler('about')}
          >
            About
          </button>
          <button
            className={`${styles.headerModalButton} ${openModal === 'projects' ? styles.active : ''}`}
            onClick={() => openModalHandler('projects')}
          >
            Projects
          </button>
          <button
            className={`${styles.headerModalButton} ${openModal === 'contact' ? styles.active : ''}`}
            onClick={() => openModalHandler('contact')}
          >
            Contact
          </button>
        </nav>
      </header>
   
      <AboutModal isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} />
      <ProjectsModal isOpen={openModal === 'projects'} onClose={() => setOpenModal(null)} />
      <ContactModal isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} />
    </>
  );
};

export default Header;
