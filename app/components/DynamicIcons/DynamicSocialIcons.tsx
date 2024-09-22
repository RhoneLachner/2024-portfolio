/**
 * DynamicSocialIcons Component
 *
 * This component renders a set of light and dark social media icons that change depending on the current theme (light or dark).
 * The current theme is tracked via the `data-theme` attribute on the document.
 * Links to external URLs are provided from the `socialLinkCopy` object.
 */

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '../../assets/icons'; 
import { socialLinkCopy } from '../../assets/socialLinks'; 

const socialLinks = {
  github: {
    light: ICONS.githubLight,
    dark: ICONS.githubDark,
  },
  linkedin: {
    light: ICONS.linkedinLight,
    dark: ICONS.linkedinDark,
  },
  bandsite: {
    light: ICONS.bandsiteLight,
    dark: ICONS.bandsiteDark,
  },
};

const DynamicSocialIcons: React.FC = () => {
  // State to track the current theme (light or dark)
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Function to get current theme from the `data-theme` attribute
    const getCurrentTheme = () =>
      document.documentElement.getAttribute('data-theme');
    setTheme(getCurrentTheme());

    // MutationObserver to detect changes to the `data-theme` attribute
    const observer = new MutationObserver(() => {
      setTheme(getCurrentTheme());
    });

    // Observe changes to the `data-theme` attribute
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="socialIconsContainer">
      {/* LinkedIn Icon */}
      <a
        href={socialLinkCopy.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.linkedin[theme === 'dark' ? 'dark' : 'light']}
          alt="LinkedIn Icon"
          width={48}
          height={48}
        />
      </a>
  
      <a href={socialLinkCopy.github} target="_blank" rel="noopener noreferrer">
        <Image
          className="socialIconImage"
          src={socialLinks.github[theme === 'dark' ? 'dark' : 'light']}
          alt="GitHub Icon"
          width={48}
          height={48}
        />
      </a>
   
      <a
        href={socialLinkCopy.bandsite}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="socialIconImage"
          src={socialLinks.bandsite[theme === 'dark' ? 'dark' : 'light']}
          alt="Music Icon"
          width={48}
          height={48}
        />
      </a>
    </div>
  );
};

export default DynamicSocialIcons;
