"use client"

import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import with SSR disabled,
// Can enable later for speed? :D
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
      const startFade = 100; // Start fading after 100px scroll
      const endFade = 500;   // Fully faded out at 500px scroll
      
      let newOpacity = 1 - (scrollY - startFade) / (endFade - startFade);
      newOpacity = Math.min(Math.max(newOpacity, 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
        <Navbar />
         {/* Background image */}
        <div className="relative w-full">
          <img id = "home"
            className="w-[100%] flex m-auto z-5" 
            src="/vex.jpeg" 
            alt="Background"
          />
          {/* Home Gradient */}
          <div className= "absolute inset-0 bg-[linear-gradient(90deg,black_0%,black_5%,transparent_35%,transparent_100%)]"
          ></div> 
           {/* Home content*/}
           <p className = "text-2xl flex left-40 top-110 absolute"> MAKING ROBOTICS ACCESSIBLE </p>
           <p className = "text-4xl flex left-35 top-120 absolute">
            Teaching practical robotics skills to<br/> 
            all as the largest engineering group<br/>
            at UT with over 200 students across <br/>
            7 majors 
          </p>
          <p
            className="fixed flex top-30 left-30 text-center text-[#e7ebec] text-9xl font-extrabold"
            style={{ opacity: opacity }}
          >
            UT IEEE <br/>RAS
          </p>
        </div>

         {/* Post-home, about */}
        <div
          className="text-7xl container max-w-40 text-center relative text-black flex flex-col left-15 top-40 h-[300vh]"
        >
          What <br/> is <br/> RAS?
        </div>
      {/* 3d render experiments */}
      {/* <div id="3d_meshs" className="flex float-right w-full h-[50vh]">
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
      </div> */}
    </div>
  );
}
