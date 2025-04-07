import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

const Slideshow = ({ slides }) => {
  const handleImageClick = (link) => {
    if (link) {
      window.location.href = link; // Navigate to the external URL
    }
  };

  return (
    <div className="slider-container">
      <div className="wrapper w-full bg-transparent relative">
        <Splide
          options={{
            type: 'loop',
            arrows: true,
            pagination: false,
            perPage: 4,
            perMove: 1,
            speed: 400,
            drag: 'free',
            autoWidth: true,
          }}
        >
          {slides.map((slide, idx) => (
            <SplideSlide key={idx}>
              <div className="relative">
                <Image
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  width={300}
                  height={200}
                  className="w-full object-cover cursor-pointer slide-img"
                  onClick={() => handleImageClick(slide.link)}
                />
                {slide.caption && (
                  <div className="text-left text-black font-bold text-2xl pl-2 mt-2">
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
