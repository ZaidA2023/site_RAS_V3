'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Iframe from 'react-iframe';

const JoinPage: React.FC = () => {
  const handleClick = (link) => {
    if (link) {
      window.open(
        link,
        '_blank'
      );
    }
  };

  return (
    <div>
    <div className = "mb-20"><Navbar scrollSet = {false}/></div>
    <div className = "relative">
      <div className = "text-black text-center font-bold text-5xl mt-5">Join RAS!</div> 
      <div className = "text-black text-start font-bold text-xl mt-10 ml-[5%]">
      We live in EER room 0.822C, come in and say hi!<br/>
      New members can join at any time. No experience necessary! <br/> 
      New members are required fill a <a onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSf5v1L3MB3naSaYESixKXnwWSFYm6uatYRvCiesrBWiLwvQuQ/viewform")} 
      className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer">Membership Form</a> and <a 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer">Safety Waiver</a>.  <br/>
      Pay membership dues <a className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer"
      onClick = {() => handleClick("https://utdirect.utexas.edu/nlogon/txshop/item_details.WBX?application_name=ENENGALU&component=0&dept_prefix=E2&item_id=199&cat_seq_chosen=02&subcategory_seq_chosen=000")}
      >here!</a>
      </div> 
      <div className = "flex">
      <div className = "flex-col">
      <div 
      onClick={() => handleClick("https://www.instagram.com/ut_ieee_ras/")}  
      className="text-[#BF5700] ml-[15%] mt-15 text-4xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Instagram</div>
      <div 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="className= text-[#BF5700] ml-[15%] mt-5 text-4xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Main Discord</div>
  
      <div className = "text-black text-4xl mt-10 ml-[15%] whitespace-nowrap">Committee Specific Discords</div> 
      <div 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="text-[#BF5700] ml-[20%] mt-3 text-2xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">IGVC</div>
      <div 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="text-[#BF5700] ml-[20%] mt-3 text-2xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Demobots</div>
      <div 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="text-[#BF5700] ml-[20%] mt-3 text-2xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Robomaster</div>
      <div 
      onClick={() => handleClick("https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform")}  
      className="text-[#BF5700] ml-[20%] mt-3 text-2xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">VexU</div>
      
      <div 
      onClick={() => handleClick("https://www.youtube.com/@ut_ieee_ras")}  
      className="className= text-[#BF5700] ml-[15%] mt-20 text-4xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Youtube</div>
      <div 
      onClick={() => handleClick("https://github.com/ut-ras")}  
      className="className= text-[#BF5700] ml-[15%] mt-5 text-4xl font-bold underline hover:text-[#cc7933] hover:cursor-pointer">Github</div>

      </div>
      <Iframe url="https://www.youtube.com/embed/VXGF3trD92Q?si=vq6xR2tMxp60jdIi"
        width="1000px"
        height="563px"
        id=""
        className="flex ml-auto mr-5 mt-10 mb-15"
        display="block"
        />
      </div>

    </div>
    <div className = "w-full"><Footer/></div>
    </div>
  );
};

export default JoinPage;
