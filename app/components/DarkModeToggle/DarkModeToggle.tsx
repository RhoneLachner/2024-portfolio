/**
 * DarkModeToggle Component
 *
 * This component renders a button that allows users to toggle between dark mode and light mode.
 * The current theme (dark or light) is managed using the `useDarkMode` custom hook.
 * The button's appearance and functionality are controlled by this hook, changing between a light (⚪️) 
 * and dark (⚫️) symbol based on the current theme. The button has an `aria-label` for accessibility.
 */

'use client'; 
import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode'; 
import styles from './DarkModeToggle.module.css'; 

const DarkModeToggle = () => {
  // Destructure the current theme state and the toggle function from the custom hook
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode} 
      className={styles.toggleButton} 
      aria-label="Toggle Dark Mode" 
    >
      {darkMode ? '⚪️' : '⚫️'}{' '}
    </button>
  );
};

export default DarkModeToggle;
