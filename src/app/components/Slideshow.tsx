import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Slideshow = () => {
  const slides = [
    { id: 1, img: '/images/vex.jpeg' },
    { id: 2, img: '/images/Ray.jpg' },
    { id: 3, img: '/images/flaps.png' },
    { id: 4, img: '/images/whatisthis.jpg' },
    { id: 5, img: '/images/chessBot.jpg' },
  ];

  const links = [
    " ",
    " "
  ]
  
  return (
    <div className="wrapper w-full bg-transparent relative">
      <Splide
        options={{
          type: 'loop',
          arrows: true,
          pagination: false,
          perPage: 4,
          perMove: 1,
          speed: 400
        }}
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="slide-img"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slideshow;