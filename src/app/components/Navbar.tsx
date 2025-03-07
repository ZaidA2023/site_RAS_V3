'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const [opacity, setOpacity] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const startFade = 200; 
      const endFade = 500; 
      if(scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
      let newOpacity = (scrollY - startFade) / (endFade - startFade);
      newOpacity = Math.min(Math.max(newOpacity, 0), 1); 
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50">
      {/* Background overlay*/}
      <div
        className="absolute inset-0 h-20 transition-opacity duration-1000 
        bg-[linear-gradient(-90deg,white_0%,white_20%,#7c2d12_80%,#7c2d12_100%)]"
          style={{opacity: opacity}}
      ></div>

      {/* Navbar content */}
      <div className="relative flex items-center h-20 w-screen">
        <img 
          src="/ras_logo.png"
          alt="Logo"
          className="pl-12"
          style={{ width: 120 }}
        />
        <div className="w-full mx-auto flex justify-end gap-10 pr-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`px-4 py-2 border border-black rounded-full text-black font-bold hover:bg-[#7c2d12] 
                    hover:text-white transition duration-300 
                    ${scrolled ? 'bg-transparent text-black border-transparent' : 'bg-white/80'}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
