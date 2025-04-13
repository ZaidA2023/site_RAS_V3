'use client'

import { useSearchParams } from 'next/navigation';
import Navbar from "../components/Navbar";
//import Footer from '../components/footer';

export default function Embed() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  
  if (!source) return <p>Loading...</p>;
  
  return (
    <div>
      <div><Navbar scrollSet={false} opacitySet={false} inverse={true}/></div>
      <iframe 
        src={source}
        style={{width: "100%", height: "200vh", border: "none", padding: "0", position: "absolute", marginTop:-35}}
      />
    </div>
  );
}