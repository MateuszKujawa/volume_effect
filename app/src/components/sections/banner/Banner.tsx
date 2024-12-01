import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPhone, faClock, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AnimatedOnScroll from '../../untils/AnimatedOnScroll';
const cardImg = '/img/white_abstract_bg.webp';
const cardImg2 = '/img/white_abstract_bg_2.jpg';
const cardImg3 = '/img/white_abstract_bg_3.webp';
const Banner: React.FC = () => {
  const images = [
    '/img/inside_galery/1.webp',
    '/img/inside_galery/2.webp',
    '/img/inside_galery/3.webp',
    '/img/inside_galery/4.webp',
  ];

  const handleScroll = () => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Swiper - Slider */}
      <div className="h-[100vh] sm:h-[80vh] relative">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="h-full"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          allowTouchMove={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay z tekstem */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 z-10">
          <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Volume Effect
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-xl">
              Odkryj styl, profesjonalizm i wyjątkową atmosferę. Odwiedź nasz salon fryzjerski
              i poczuj różnicę!
            </p>
            <button
              onClick={handleScroll}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-20 py-6 rounded-lg text-md sm:text-lg font-semibold group transition-all duration-500 relative overflow-hidden"
            >
              {/* Ikona strzałki */}
              <span className="absolute flex items-center justify-center w-full h-full left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 transform -translate-y-[25px]">
                <FontAwesomeIcon icon={faArrowDown} className="text-white text-lg" />
              </span>
              {/* Tekst przycisku */}
              <span className="absolute flex items-center justify-center w-full h-full left-0 group-hover:opacity-0 group-hover:translate-y-full transition-all duration-500 transform translate-y-[-25px]">
                Przejdź dalej
              </span>
            </button>
          </AnimatedOnScroll>
        </div>
      </div>


      {/* Karty Glassmorphism */}
      <AnimatedOnScroll
          animation={{
          initial: { opacity: 0, y: -50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 1 },
        }}>
        <div className="flex-grow bg-transparent py-8 px-4 sm:px-16 lg:px-32 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1920px] mx-auto my-12">
            <div className="glass-card h-full py-6 px-4 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[400px] w-full mx-auto" style={{ backgroundImage: `url(${cardImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
              <div className="text-base sm:text-xl font-semibold font-poppins flex flex-col">
                <FontAwesomeIcon icon={faPhone} className="text-base" /> Kontakt
              </div>
              <div className="mt-2 text-zinc-700 text-sm sm:text-lg">(+48) 609-773-351</div>
            </div>
            <div className="glass-card h-full py-6 px-4 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[400px] w-full mx-auto" style={{ backgroundImage: `url(${cardImg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="text-base sm:text-xl font-semibold flex flex-col">
                <FontAwesomeIcon icon={faClock} className="text-base" /> Godziny
              </div>
              <div className="mt-2 text-zinc-700 text-sm sm:text-lg">
                <ul className="space-y-2 text-center">
                  <li>Pon-Pt: 9:00 - 18:00</li>
                  <li>Sobota: 10:00 - 16:00</li>
                  <li>Niedziela: Zamknięte</li>
                </ul>
              </div>
            </div>
            <div className="glass-card h-full py-6 px-4 rounded-lg shadow-lg flex flex-col items-center text-center max-w-[400px] w-full mx-auto" style={{ backgroundImage: `url(${cardImg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="text-base sm:text-xl font-semibold flex flex-col">
                <FontAwesomeIcon icon={faLocationDot} className="text-base" /> Lokalizacja
              </div>
              <div className="mt-2 text-zinc-700 text-sm sm:text-lg">ul. Warszawska 45, Słupca</div>
            </div>
        </div>
      </AnimatedOnScroll>


    </section>
  );
};

export default Banner;
