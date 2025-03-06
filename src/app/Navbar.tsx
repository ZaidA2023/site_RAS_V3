'use client';

import React from 'react';

const Navbar = () => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-grey-100 to-orange-600 shadow-xl h-20 flex items-center z-50">
      <div className="container mx-auto flex justify-end gap-10">
        {sections.map((section) => (
          <a
          key={section.id}
          href={`#${section.id}`}
          className="px-4 py-2 border border-white rounded-full 
                   text-white
                   hover:bg-white hover:text-black 
                   transition duration-300"
        >
          {section.label}
        </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
