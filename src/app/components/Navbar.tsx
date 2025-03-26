'use client';

import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollSet = true, opacitySet = true }) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'committees', label: 'Committees' },
    { id: 'contact', label: 'Contact' },
  ];

  const [opacity, setOpacity] = useState(scrollSet ? 0 : 1);
  const [scrolled, setScrolled] = useState(scrollSet ? false : true);

  useEffect(() => {
    if (!scrollSet) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const startFade = 200; 
      const endFade = 500; 

      // Scroll state
      setScrolled(scrollY > 600);

      // Opacity handling
      if (opacitySet) {
        let newOpacity = (scrollY - startFade) / (endFade - startFade);
        newOpacity = Math.min(Math.max(newOpacity, 0), 1); 
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollSet, opacitySet]);

  return (
    <nav className="fixed top-0 z-50">
      <div className="absolute inset-0 h-20 transition-opacity duration-1000"></div>

      <div className="relative flex items-center h-20 w-screen">
        <a href="/#home">
          <img 
            src={scrolled ? "/images/ras_logo_dark.png" : "/images/ras_logo.png"}
            alt="Logo"
            className="pl-12"
            style={{ width: 120 }}
          />
        </a>
        <div className="w-full mx-auto flex justify-end gap-8 pr-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/${section.id}`}
              className={`px-4 py-2 border border-black rounded-full text-black font-bold hover:bg-[#BF5700] 
                    hover:text-white transition duration-300 
                    ${scrolled ? 'bg-transparent text-black border-transparent' : 'visibility: hidden'}`}
              style={{opacity: opacity}}
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