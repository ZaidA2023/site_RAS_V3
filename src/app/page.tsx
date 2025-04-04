"use client"

import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Slideshow from './components/Slideshow';
import {slides, Redir} from './components/slides';
import Awards from './components/fade';
import Committees from "./components/committees";


//console.log(fetchData());
// Dynamically import with SSR disabled,
// const Scene = dynamic(
//   () => import('./meshs/Scene'),
//   { 
//     ssr: false,
//     loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
//   }
// );
// const Scene2 = dynamic(
//   () => import('./meshs/Scene2'),
//   { 
//     ssr: false,
//     loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
//   }
// );
// const Scene3 = dynamic(
//   () => import('./meshs/Scene3'),
//   { 
//     ssr: false,
//     loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
//   }
// );
// const Scene4 = dynamic(
//   () => import('./meshs/Scene4'),
//   { 
//     ssr: false,
//     loading: () => <div className="fixed inset-0 z-10 bg-gray-900" />
//   }
// );

export default function Home() {
  //Dynamic front page size
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
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
      <Navbar scrollSet={true} opacitySet={true}/>
      {/* Background image */}
      <div className="relative w-full">
        <img
          id="home"
          className='flex m-auto z-5'
          style = {{width: width, height: height}}
          src="/images/vex/vex.jpeg" 
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
        <div id="narrow" className="text-7xl text-center relative text-black flex-col left-15 mt-30">
          What <br /> is <br /> RAS?
        </div>
        <div id="wide" className="flex text-3xl justify-center text-black mt-35 relative leading-12">
          We are a student organization open to students from any background and major.<br/>
          Since 1997, we've helped students gain practical multi-disciplinary experience <br/>
          in the lab, then demonstrated our abilities at various robotics competitions while<br/> 
          promoting robotics via community outreach.
        </div>
      </div>
      <div className="flex">

{/* <div className="mx-auto flex grid grid-cols-2 gap-16 p-4 mt-10"> */}
<div className="mx-auto flex grid grid-cols-4 gap-16 p-4 mt-10">
  <a
    href="/"
    className="inline-flex items-center justify-center truncate text-4xl hover:cursor-pointer px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]"
  >
    Leadership
  </a>
  <a
    href="/#committees"
    className="inline-flex text-4xl items-center justify-center hover:cursor-pointer px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]"
  >
    Committees
  </a>
    <a
    href="/blog"
    className="inline-flex text-4xl items-center justify-center hover:cursor-pointer px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]"
  >
    Blog
  </a>
  <a
    href="/"
    className="inline-flex items-center justify-center text-4xl hover:cursor-pointer px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]"
  >
    Support RAS
  </a>
</div>
  {/* Left side: Image
  <div className="flex">
  <img
    src="/images/rbm/rmteamlead.jpg"
    alt="Your description"
    className="flex object-contain h-auto justify-center mr-15"
    style = {{width: width/2}}
  />
</div> */}
</div>
    {/* <div className = "flex">
      <div className = "flex w-[50%] flex-col items-center">
        <a href = "/committees" id = "committees" className = {`inline-flex mt-25 text-6xl hover:cursor-pointer
          px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]`}>
          Committees
        </a>
        <div className = "text-black text-center text-2xl mt-5 mb-10"> 
        All of our committees are happy to accept new members! <br/>
        </div>
      </div>
      <div className = "flex w-[50%] flex-col items-center">
        <a href = "/committees" id = "committees" className = {`inline-flex mt-25 text-6xl hover:cursor-pointer
          px-7 py-5 rounded-full transition duration-300 border-transparent hover:bg-[#994600] bg-[#BF5700]`}>
          Leadership
        </a>
        <div className = "text-black text-center text-2xl mt-5 mb-10"> 
          Meet our officers! <br/>
        </div>
      </div>
    </div> */}

      {/* Awards and total club photo :) */}
      <div className = "flex mt-15">
        <img
          src = "/images/rbm/rmteamlead.jpg"
          className='flex ml-15 justify-start z-5 mt-10 object-contain h-auto'
          style = {{width: width/2}}
        />
        <Awards/>
      </div>

      <div id = "committees" className = "text-black text-6xl text-center mt-20">Committees</div>
      <div> <Committees/> </div>
      <div className = "h-[10vh] text-black text-3xl text-center mt-40"> Site footer here!</div>
    </div>
  );
}
