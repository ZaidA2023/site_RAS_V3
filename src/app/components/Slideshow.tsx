import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Slideshow = ({slides}) => {
  const links = [
    " ",
    " "
  ]
  
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
          smoothScroll: true,
          snap: false,
          drag: 'free',
          autoWidth: true
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="slide-img w-[100%]"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </div>
  );
};

export default Slideshow;