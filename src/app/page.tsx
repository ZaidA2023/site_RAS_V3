"use client"

import Image from "next/image";
import Navbar from "./Navbar";
import React from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import umidk from './meshs/Scene';


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
  return (
    <div className="absolute"> {/* Absolute for sticky Nav */}
      <Navbar />
      <div className="relative"> {/* Home area div */}
        <img 
          className="w-[95%] flex m-auto" 
          src="/vex.png" 
          alt="Background"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <p
          className="absolute inset-0 flex top-50 justify-center text-8xl font-extrabold text-center text-[#e7ebec] drop-shadow-lg"
        >
          WELCOME <br /> TO <br /> UT IEEE RAS
        </p>
      </div>
      <div id="3d_meshs" className = "flex float-right w-full h-[50vh]" > {/* some models ig */}
        <Scene/><Scene2/><Scene4/> <Scene3/>
      </div>

    </div>
  );
}
