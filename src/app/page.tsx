"use client"

// import {NotionToMarkdown} from "notion-to-md";
// import fetchData  from "./components/Notion"
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Slideshow from './components/Slideshow';
import {slides, Redir} from './components/slides';

const vexSlides = [
  { id: 1, img: '/images/vex.jpeg' },
  { id: 2, img: '/images/Ray.jpg' },
  { id: 3, img: '/images/flaps.png' },
  { id: 4, img: '/images/whatisthis.jpg' },
  { id: 5, img: '/images/chessBot.jpg' },
];

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
        <div id="wide" className="flex text-3xl justify-center text-black mt-45 relative leading-12">
          We are a student organization open to students from any background and major.<br/>
          Since 1997, we've helped students gain practical multi-disciplinary experience <br/>
          in the lab, then demonstrated our abilities at various robotics competitions while<br/> 
          promoting robotics via community outreach.
        </div>
      </div>

      {/* Awards and total club photo :) */}
      <div className = "flex mt-15">
        <img
          src = "/images/rmteamlead.jpg"
          className='flex ml-15 mr-auto z-5 mt-10'
          style = {{width: width/2}}
        />
        <div className = "width-[50%] ml-5">
          <div className="text-6xl relative text-center text-black mt-5">
            Recent Awards
          </div>
          <div className = "text-black text-3xl mt-10 m-auto">
            <div className = 'font-bold'>2024</div>
            VEX AI Robotics Competition World Champion (Excellence Award)<br/>
            <div className = 'font-bold'>2023</div> VEXU World Championship Build Award<br/>
            <div className = 'font-bold'>2022</div> RoboMaster - First Prize - 4th in 2022 North American RoboMaster Competition<br/>
            {/* 2013<br/> IGVC - 15th place in AutoNav Challenge - DoloRAS<br/>
            2007<br/> IGVC JAUS Level 1 Award; BlastyRAS, IEEE Region 5 - 5th Best Run - Whiny 1.1, FIRST - Rookie All-Star Award, Nationals Qualification - TinMan<br/>
            2006:<br/>IGVC - Highest Rookie Score - RASlow, IEEE Region 5 - Final Qualification, 4th Highest Score - Whiny, DPRG - Outdoor Long Haul, 2nd Place - RASlow, BEST - BEST Mentor Award<br/>
            2005<br/> DPRG - RoboRama, 2nd Place<br/>
            2004<br/> IEEE Region 5 - Finals Qualification - Kim Smith<br/> */}
          </div>
        </div>

      </div>

      {/* Maybe another text box or smthn here before robots? */}
      <div id = "committees" className = "mt-25 text-black text-center text-6xl">
        Committees
      </div>
      <div className = "text-black text-center text-2xl mt-5 mb-20"> 
        All of our committees are happy to accept new members! <br/>
      </div>
      

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
