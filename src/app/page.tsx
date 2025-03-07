"use client"

import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import with SSR disabled
const Scene = dynamic(
  () => import('./meshs/Scene'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
  }
);
const Scene2 = dynamic(
  () => import('./meshs/Scene2'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
  }
);
const Scene3 = dynamic(
  () => import('./meshs/Scene3'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
  }
);
const Scene4 = dynamic(
  () => import('./meshs/Scene4'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
  }
);

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // Adjust these values to control when fading starts/ends
      const startFade = 100; // Start fading after 100px scroll
      const endFade = 500;   // Fully faded out at 500px scroll
      
      let newOpacity = 1 - (scrollY - startFade) / (endFade - startFade);
      newOpacity = Math.min(Math.max(newOpacity, 0), 1); // Clamp between 0 and 1
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <Navbar />
        <img 
          className="w-[100%] flex m-auto" 
          src="/vex.jpeg" 
          alt="Background"
        />
        <div className="absolute inset-0
           bg-[linear-gradient(90deg,black_0%,black_5%,transparent_35%,transparent_100%)]"
        ></div>
        {/* Changed positioning to fixed so the text stays in place */}
        <p
          className="fixed flex top-30 left-20 text-9xl font-extrabold text-center text-[#e7ebec] 
                        drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
          style={{ opacity: opacity }}
        >
          UT IEEE <br/>RAS
        </p>
      <div id="3d_meshs" className="flex float-right w-full h-[50vh]">
        <Scene/>
      </div>
      <div>
        <Scene2/>
      </div>
      <div>
        <Scene3/>
      </div>
      <div>
        <Scene4/>
      </div>
      </div>
    </div>
  );
}
