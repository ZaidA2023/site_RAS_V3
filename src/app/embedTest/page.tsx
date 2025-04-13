'use client'

import Navbar from "../components/Navbar";

export default function Embed({source}) {
  return (
  <div>
    <div><Navbar scrollSet={false} opacitySet={false} inverse = {true}/></div>
    <iframe 
    src={source}
    style={{width: "100%", height: "200vh", border: "none", padding: "0", position: "absolute"}}
    />
  </div>
  );
}