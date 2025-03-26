'use client'

import Navbar from "../components/Navbar";

export default function Committees() {
  return (
  <div>
    <div><Navbar scrollSet={false} opacitySet={false} inverse = {true}/></div>
    <iframe 
    src="https://ut-ieee-ras.notion.site/ebd/13debc1c571480fb89a5dd09b4ef6511"
    style={{width: "100%", height: "200vh", border: "none", padding: "0", position: "absolute"}}
    />
  </div>
  );
}
