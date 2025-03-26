"use client"

// import {NotionToMarkdown} from "notion-to-md";
// import fetchData  from "./components/Notion"
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Slideshow from './components/Slideshow';


//console.log(fetchData());
// Dynamically import with SSR disabled,
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

  // Effect for fading text based on scroll position
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

  // Effect to toggle iframe pointer events (and thus scrolling)
  useEffect(() => {
    const iframe = document.getElementById('iframeElement');
    if (!iframe) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If more than 50% of the iframe is visible, enable interactions.
        if (entry.intersectionRatio > 0.9) {
          iframe.style.pointerEvents = 'auto';
        } else {
          iframe.style.pointerEvents = 'none';
        }
      },
      {
        threshold: [0.9],
      }
    );
  
    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="relative">
      <Navbar />
      {/* Background image */}
      <div className="relative w-full">
        <img
          id="home"
          className="w-[100%] flex m-auto z-5 h-[100%]" 
          src="/images/vex.jpeg" 
          alt="Background"
        />
        {/* Home Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,black_0%,black_5%,transparent_35%,transparent_100%)]"></div> 
        {/* Home content */}
        <p className="text-2xl flex left-40 top-110 absolute">
          MAKING ROBOTICS ACCESSIBLE
        </p>
        <p className="text-4xl flex left-35 top-120 absolute">
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
      <div id="parent">
        <div id="narrow" className="text-7xl text-center relative text-black flex-col left-15 mt-40">
          What <br /> is <br /> RAS?
        </div>
        <div id="wide" className="flex text-2xl justify-center text-black mt-45 relative">
          There's the moon asking to stay <br />
          Long enough for the clouds to fly me away <br />
          Oh, it's my time coming, l'm not afraid <br />
          Afraid to die <br />
          My fading voice sings of love <br />
          - Jeff Buckley :)
        </div>
      </div>

      {/* Maybe another text box or smthn here before robots? */}
      <div className = "mt-25 text-black text-center text-5xl">
        HIII!!! BOBOT!!!
      </div>
      <div className = "wrapper w-full bg-transparent relative mt-5">
        <Slideshow/>
      </div>


      {/* Iframe, pointer events toggled on scroll */}
      {/* <iframe
        id="iframeElement"
        src="https://v2-embednotion.com/3d70d577106546ca8411e176fd82248e" 
        style={{ width: "100%", height: "100vh", overflow: "auto" }}
        className="mt-20"
      >
      </iframe> */}
      
      {/* 3d render experiments */}
      {/* 
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
      */}
    </div>
  );
}
