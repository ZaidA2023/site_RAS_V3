'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import SponsorDisplay from '../components/sponsorsData';

const Support: React.FC = () => {
  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div>
      <div className="mb-25">
        <Navbar scrollSet={false}/>
      </div>
      <div className="relative min-h-screen">
        <div className="text-black text-center font-bold text-3xl md:text-5xl mt-5 mb-5">
          Support RAS!
        </div>
        <div className="text-black text-center text-lg md:text-2xl mb-15 font-semibold">
          RAS is always excited to collaborate with corporate partners through general meetings and tech talks, 
          workshops, and social events. <br /> We offer virtual, in-person, and hybrid events. 
          Please{' '}
          <a 
            className="text-[#BF5700] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            href="mailto:gracewl@utexas.edu"
          >
            contact us
          </a>{' '}
          if you have any questions or for more information. <br /> <br />
          If you would like to become a supporter, please view our{' '}
          <a 
            onClick={() => handleClick("https://drive.google.com/file/d/1PpTgN_sBkZPoK2QfrdiO4NSIL-gvcZ-N/view")}  
            className="text-[#BF5700] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
          >
            corporate packet
          </a>{' '}
          for details.
        </div>

        <div className="text-black text-center font-bold text-3xl md:text-5xl mt-5 mb-5">
          Spring 2025 Partners
        </div> 
        <div className="text-black text-center text-lg md:text-2xl mb-10 font-semibold">
          We would like to thank our company partners for supporting and collaborating with us. We look forward to continuing to work with you!
        </div>
        <main>
          <SponsorDisplay/>
        </main>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </div>
  );
};

export default Support;
