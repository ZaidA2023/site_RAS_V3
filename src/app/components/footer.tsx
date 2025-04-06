import React from 'react';

const Footer: React.FC = () => {
  const handleClick = (link) => {
    if (link) {
      window.open(
        link,
        '_blank'
      );
    }
  };
  return (
    <footer className="bg-black/95 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <a 
            className="arrow cursor-pointer"
            href = "/#home"
            aria-label="Go to new URL"
          ></a>
        </div>
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">UT IEEE RAS</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 mt-[-3%]">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-3 gap-4">
                <a href = "/#home">
                  <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                    Home
                  </button>
                </a>
                <a href = "/join">
                  <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                      Join
                  </button>
                </a>
                <a href = "/contact">
                  <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                    Supporters
                  </button>
                </a>
                <a href = "/blog">
                  <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                    Blog
                  </button>
                </a>
                <a href = "/leaders">
                  <button className="hover:cursor-pointer w-full bg-[#BF5700] text-white py-2 px-4 rounded hover:bg-[#c5681a] transition-colors">
                    Leadership
                  </button>
                </a>
            </div>
          </div>
          {/* Contact Links */}
          <div className="flex flex-col space-y-2 mb-8 mt-[-2%]">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <a href="mailto:info@company.com" className="hover:text-[#cc7933] text-[#c5681a] text-lg transition-colors">
              blahblah@blah.com
            </a>
            <a href="tel:+1234567890" className="hover:text-white transition-colors">
              +1 (234) 567-890
            </a>
            <a
              href="https://www.google.com/maps/place/Your+Address"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Address?
            </a>
          </div>
        </div>
        <div className="text-sm text-center mb-[-1%]">
          Site by <div onClick={() => handleClick("https://github.com/ZaidA2023")} 
          className="hover:cursor-pointer text-[#BF5700] underline hover:text-[#cc7933]">Zaid Albustami</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
