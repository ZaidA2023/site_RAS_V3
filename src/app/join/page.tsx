'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Iframe from 'react-iframe';

const JoinPage: React.FC = () => {
  const handleClick = (link: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="mb-8">
        <Navbar scrollSet={false} />
      </header>

      <main className="flex-1 mx-4 sm:mx-8 md:mx-24 py-8">
        <h1 className="text-center text-black font-bold text-[clamp(2rem,5vw,3rem)] mt-5">
          Join RAS!
        </h1>

        <p className="text-black font-bold text-[clamp(1rem,3vw,1.5rem)] md:ml-[3%] mt-10 mx-auto max-w-3xl text-left">
          We live in EER room 0.822C, come in and say hi!
          <br />
          New members can join at any time. No experience necessary!
          <br />
          New members are required to fill a{' '}
          <a
            onClick={() =>
              handleClick(
                'https://docs.google.com/forms/d/e/1FAIpQLSf5v1L3MB3naSaYESixKXnwWSFYm6uatYRvCiesrBWiLwvQuQ/viewform'
              )
            }
            className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer"
          >
            Membership Form
          </a>{' '}
          and{' '}
          <a
            onClick={() =>
              handleClick(
                'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
              )
            }
            className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer"
          >
            Safety Waiver
          </a>.
          <br />
          Pay membership dues{' '}
          <a
            onClick={() =>
              handleClick(
                'https://utdirect.utexas.edu/nlogon/txshop/item_details.WBX?application_name=ENENGALU&component=0&dept_prefix=E2&item_id=199&cat_seq_chosen=02&subcategory_seq_chosen=000'
              )
            }
            className="text-[#BF5700] underline hover:text-[#cc7933] hover:cursor-pointer"
          >
            here!
          </a>
        </p>

        <div className="flex flex-col md:flex-row items-start mt-10 gap-8">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div
              onClick={() =>
                handleClick('https://www.instagram.com/ut_ieee_ras/')
              }
              className="text-[#BF5700] text-[clamp(1.5rem,4vw,2rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Instagram
            </div>
            <div
              onClick={() =>
                handleClick(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
                )
              }
              className="text-[#BF5700] text-[clamp(1.5rem,4vw,2rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Main Discord
            </div>
            <div
              onClick={() =>
                handleClick('https://www.youtube.com/@ut_ieee_ras')
              }
              className="text-[#BF5700] text-[clamp(1.5rem,4vw,2rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Youtube
            </div>
            <div
              onClick={() =>
                handleClick('https://github.com/ut-ras')
              }
              className="text-[#BF5700] text-[clamp(1.5rem,4vw,2rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Github
            </div>
            <div className="text-black text-[clamp(1.5rem,4vw,2rem)] mt-6">
              Committee Specific Discords
            </div>
            <div
              onClick={() =>
                handleClick(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
                )
              }
              className="text-[#BF5700] text-[clamp(1rem,3vw,1.5rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              IGVC
            </div>
            <div
              onClick={() =>
                handleClick(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
                )
              }
              className="text-[#BF5700] text-[clamp(1rem,3vw,1.5rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Demobots
            </div>
            <div
              onClick={() =>
                handleClick(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
                )
              }
              className="text-[#BF5700] text-[clamp(1rem,3vw,1.5rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              Robomaster
            </div>
            <div
              onClick={() =>
                handleClick(
                  'https://docs.google.com/forms/d/e/1FAIpQLSdRvNc2R3vnG0AXu4k7bypacyeB2jgF_D1nDPq76kE8WIIBmQ/viewform'
                )
              }
              className="text-[#BF5700] text-[clamp(1rem,3vw,1.5rem)] font-bold underline hover:text-[#cc7933] hover:cursor-pointer"
            >
              VexU
            </div>
          </div>

          <div className="flex-1">
            <div className="relative w-full">
              <Iframe
                url="https://www.youtube.com/embed/VXGF3trD92Q?si=vq6xR2tMxp60jdIi"
                width="100%"
                height="100%"
                id=""
                className="md:w-[50vw] md:h-[50vh] w-[92vw] h-[30vh]"
                display="block"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default JoinPage;
