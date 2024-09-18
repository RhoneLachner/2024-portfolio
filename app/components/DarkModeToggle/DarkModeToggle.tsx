'use client';
import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import styles from './DarkModeToggle.module.css'; 

const DarkModeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode(); // Use the custom hook

  return (
    <button
      onClick={toggleDarkMode}
      className={styles.toggleButton}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? '⚪️' : '⚫️'}{' '}
      {/* White for light mode, black for dark mode */}
    </button>
  );
};

export default DarkModeToggle;
