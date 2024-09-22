import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '../../assets/icons'; // Importing icon paths

interface CloseButtonProps {
  onClose: () => void;
}

const DynamicCloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentTheme = () =>
      document.documentElement.getAttribute('data-theme');
    setTheme(getCurrentTheme());

    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const closeIcon = theme === 'dark' ? ICONS.closeWhite : ICONS.closeBlack;

  return (
    <button onClick={onClose} className="closeButton">
      <Image src={closeIcon} alt="Close Icon" width={18} height={18} />
    </button>
  );
};

export default DynamicCloseButton;
