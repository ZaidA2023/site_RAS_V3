import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Slideshow = ({ slides }) => {
  const router = useRouter();
  const [arrows, setArrows] = useState(true);
  
  useEffect(() => {
    const checkArrows = () => {
      if (slides.length < 5 && window.innerWidth > 1000) {
        setArrows(false);
      } else {
        setArrows(true);
      }
    };
    checkArrows();
    window.addEventListener('resize', checkArrows);
    return () => window.removeEventListener('resize', checkArrows);
  }, [slides.length]);

  const handleImageClick = (link) => {
    if (link) {
      router.push(link); 
    }
  };
  
  return (
    <div className="slider-container">
      <div className="wrapper w-full bg-transparent relative">
        <Splide
          options={{
            type: 'slide',
            arrows: arrows,
            pagination: false,           
            perMove: 2,
            speed: 400,
            drag: 'free',
            autoWidth: true,
          }}
        >
          {slides.map((slide, idx) => (
            <SplideSlide key={idx}>
              <div className="relative hover:bg-orange-200/20">
                <Image
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  width={300}
                  height={200}
                  className="w-full object-cover cursor-pointer slide-img"
                  onClick={() => handleImageClick(`/embed?source=${encodeURIComponent(slide.link)}`)}
                />
                {slide.caption && (
                  <div 
                    className="text-left text-black font-bold text-2xl pl-2 mt-2 hover:underline hover:cursor-pointer"
                    onClick={() => handleImageClick(`/embed?source=${encodeURIComponent(slide.link)}`)}
                  >
                    {slide.caption}
                  </div>
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slideshow;