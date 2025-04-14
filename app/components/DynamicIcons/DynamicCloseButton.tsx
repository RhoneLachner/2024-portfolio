/**
 * DynamicCloseButton Component
 *
 * The close button triggers the `onClose` function when clicked, and it is used in all modal components.
 * This component renders a button with either a white or black close icon, depending on the current theme (light or dark).
 * The theme is determined by observing changes to the `data-theme` attribute.
 */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '../../assets/icons';

interface CloseButtonProps {
  // Function to handle the close action
  onClose: () => void;
}

const DynamicCloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  // State to store the current theme (light or dark)
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.getAttribute('data-theme');

    // Set initial theme when the component mounts
    setTheme(getCurrentTheme());

    // MutationObserver to detect changes to the `data-theme` attribute
    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    // Observe the document for theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  // Icon is chosen by current theme
  const closeIcon = theme === 'dark' ? ICONS.closeWhite : ICONS.closeBlack;

  return (
    <button onClick={onClose} className="closeButton">
      <Image src={closeIcon} alt="Close Icon" width={18} height={18} quality={90} />
    </button>
  );
};

export default DynamicCloseButton;
