import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
  const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <footer className="bg-black/95 text-gray-200 py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <Link 
            className="arrow cursor-pointer"
            href="#top"
            aria-label="Go to new URL"
          ></Link>
        </div>
        <div className="mb-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">UT IEEE RAS</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 mt-0 md:mt-[-3%]">
            <h3 className="text-base md:text-lg font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-3 gap-4">
              <Link href="/#home">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Home
                </button>
              </Link>
              <Link href="/join">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Join
                </button>
              </Link>
              <Link href="/support">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Supporters
                </button>
              </Link>
              <Link href="/blog">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Blog
                </button>
              </Link>
              <Link href="/leaders">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Leadership
                </button>
              </Link>
              <Link href="https://hcb.hackclub.com/donations/start/austin-ieee-ras">
                <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                  Donate
                </button>
              </Link>
            </div>
          </div>
          {/* Contact Links */}
          <div className="flex flex-col space-y-2 mb-4 mt-0 md:mb-8 md:mt-[-2%]">
            <h3 className="text-lg md:text-xl font-semibold">Contact Us</h3>
            <p 
              className="hover:text-white text-base md:text-lg transition-colors"
            >
              ut.ieee.ras+web@gmail.com
            </p>
            <p
              className="hover:text-white text-base md:text-lg transition-colors"
            >
              UT Austin
            </p>
            {/* New Contact Links */}
            <Link
              href="https://www.instagram.com/ut_ieee_ras/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cc7933] text-[#BF5700] text-base md:text-lg transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://discord.gg/ehmhUTZ2NZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cc7933] text-[#BF5700] text-base md:text-lg transition-colors"
            >
              Discord
            </Link>
            <Link
              href="https://www.youtube.com/@ut_ieee_ras"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cc7933] text-[#BF5700] text-base md:text-lg transition-colors"
            >
              Youtube
            </Link>
            <Link
              href="https://github.com/ut-ras"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cc7933] text-[#BF5700] text-base md:text-lg transition-colors"
            >
              Github
            </Link>
          </div>
        </div>
        <div className="text-xs md:text-sm text-center mt-2">
          Site by{' '}
          <div 
            onClick={() => handleClick("https://github.com/ZaidA2023")} 
            className="inline hover:cursor-pointer text-[#BF5700] underline hover:text-[#cc7933]"
          >
            Zaid Albustami
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
