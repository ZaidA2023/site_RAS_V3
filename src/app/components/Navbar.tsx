'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';

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
    { id: 'join', label: 'Join' },
    { id: 'support', label: 'Supporters' },
    { id: 'blog', label: 'Blog' },
    { id: 'leaders', label: 'Leadership' },
  ], []);

  const [opacity, setOpacity] = useState<number>(scrollSet ? 0 : 1);
  const [scrolled, setScrolled] = useState<boolean>(scrollSet ? false : true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!scrollSet) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const startFade = 200;
      const endFade = 500;
      const windowHeight = window.innerHeight;

      setScrolled(scrollY > windowHeight - 100);

      if (opacitySet) {
        const newOpacity = Math.min(
          Math.max((scrollY - startFade) / (endFade - startFade), 0),
          1
        );
        setOpacity(newOpacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollSet, opacitySet]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && buttonRef.current && menuRef.current &&
          !buttonRef.current.contains(event.target as Node) &&
          !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const logoSrc = scrolled && !inverse
    ? "/images/ras_logo_dark.png" 
    : "/images/ras_logo.png";

  return (
    <nav className={`fixed top-0 z-50 pointer-events-none [&>*:not(.clickable)]:pointer-events-none w-full ${
      isMenuOpen ? 'pointer-events-auto' : ''
    }`}>
      <div className="absolute inset-0 h-20 transition-opacity duration-1000 bg-white opacity-0 aria-hidden='true'"></div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 pointer-events-auto"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="relative flex items-center justify-between h-20 w-screen">
        <a 
          href="/#home" 
          className="clickable pointer-events-auto"
        >
          <img 
            src={logoSrc}
            alt="RAS Logo"
            className="md:pl-8 md:pr-0 pr-12"
            width={120}
            height={80}
          />
        </a>

        <div className="hidden md:flex w-full mx-auto justify-end gap-8 pr-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/${section.id}`}
              className={`
                px-4 py-2 rounded-full font-bold transition duration-300 hover:cursor-pointer
                pointer-events-auto border-transparent hover:bg-[#BF5700] hover:text-white 
                ${scrolled ? 'clickable' : ""}
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

        <button
          ref={buttonRef}
          className="md:hidden clickable pointer-events-auto mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke={scrolled && !inverse ? 'black' : 'white'}
          >
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div
          ref={menuRef}
          className={`md:hidden fixed top-20 left-0 w-full z-50 transition-all duration-300 pointer-events-auto ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } ${scrolled ? 'bg-white' : 'bg-opacity-90 backdrop-blur-sm'}`}
        >
          <div className="flex flex-col items-center py-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`/${section.id}`}
                className={`w-full text-center px-4 py-3 font-bold transition-colors duration-300
                  ${scrolled && !inverse ? 'text-black' : 'text-white'}
                  hover:bg-[#BF5700] hover:text-white pointer-events-auto`}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;