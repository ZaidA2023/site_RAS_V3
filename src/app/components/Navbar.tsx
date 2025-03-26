'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface NavSection {
  id: string;
  label: string;
}

interface NavbarProps {
  scrollSet?: boolean;
  opacitySet?: boolean;
  inverse?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  scrollSet = true, 
  opacitySet = true, 
  inverse = false 
}) => {
  const sections: NavSection[] = useMemo(() => [
    { id: '', label: 'Home' },
    { id: 'committees', label: 'Committees' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const [opacity, setOpacity] = useState<number>(scrollSet ? 0 : 1);
  const [scrolled, setScrolled] = useState<boolean>(scrollSet ? false : true);

  useEffect(() => {
    if (!scrollSet) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const startFade = 200;
      const endFade = 500;
      const windowHeight = window.innerHeight;

      // Update scroll state
      setScrolled(scrollY > windowHeight - 100);

      // Manage opacity
      if (opacitySet) {
        const newOpacity = Math.min(
          Math.max((scrollY - startFade) / (endFade - startFade), 0),
          1
        );
        setOpacity(newOpacity);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollSet, opacitySet]);

  // Determine logo based on scroll state
  const logoSrc = scrolled 
    ? "/images/ras_logo_dark.png" 
    : "/images/ras_logo.png";

  return (
    <nav className="fixed top-0 z-50 pointer-events-none [&>*:not(.clickable)]:pointer-events-none">
      {/* Background overlay */}
      <div className="absolute inset-0 h-20 transition-opacity duration-1000 
        bg-white opacity-0 
        aria-hidden='true'"></div>

      {/* Navigation content */}
      <div className="relative flex items-center h-20 w-screen">
        {/* Logo */}
        <a 
          href="/#home" 
          className="clickable pointer-events-auto"
        >
          <img 
            src={logoSrc}
            alt="RAS Logo"
            className="pl-12"
            width={120}
            height={80}
          />
        </a>

        {/* Navigation Links */}
        <div className="w-full mx-auto flex justify-end gap-8 pr-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/${section.id}`}
              className={`
                px-4 py-2 
                rounded-full 
                font-bold 
                transition duration-300 
                clickable pointer-events-auto
                border-transparent
                hover:bg-[#BF5700] 
                hover:text-white
                ${scrolled && !inverse ? 'text-black' : 'text-white'}
              `}
              style={{ 
                opacity, 
                visibility: scrolled || !inverse ? 'visible' : 'hidden' 
              }}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);