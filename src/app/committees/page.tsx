'use client'

import Navbar from "../components/Navbar";
import React, { useEffect, useState } from 'react';

export default function Committees() {
  return (
  <div>
    <div><Navbar scrollSet={true} opacitySet={100}/></div>
    <iframe
      id="iframeElement"
      src="https://v2-embednotion.com/3d70d577106546ca8411e176fd82248e" 
      style={{ width: "100%", height: "100vh", position: "fixed", overflow: "hidden"}}
      className="mt-20"
    >
    </iframe> 
  </div>
  );
}
