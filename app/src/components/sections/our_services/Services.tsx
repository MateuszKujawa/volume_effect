import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../our_services/services.css";
import AnimatedOnScroll from "../../untils/AnimatedOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const imageServicesMap: { [key: string]: string } = {
  strzyzenie: "../img/services_img/obcinanie-uslugi.webp",
  mycie: "../img/services_img/mycie-uslugi.webp",
  koloryzacja: "../img/services_img/malowanie-uslugi.webp",
  stylizacja: "../img/services_img/stylizacja_uslugi.webp",
  regeneracja: "../img/services_img/regeneracja_uslugi.webp",
  prostowaniekeratynowe: "../img/services_img/prostowaniekeratynowe_uslugi.webp",
};

const ServiceSlider: React.FC = () => {
  const services = [
    {
      title: "Strzyżenie",
      description: "Odkryj nową fryzurę, która podkreśli Twoją osobowość.",
      image: imageServicesMap.strzyzenie,
      link: "/services/hair-styling",
      icon: "fas fa-cut",
    },
    {
      title: "Mycie & masaż głowy",
      description: "Rozpieść swoje zmysły i zadbaj o zdrowie skóry głowy.",
      image: imageServicesMap.mycie,
      link: "/services/waxing",
      icon: "fas fa-head-side-mask",
    },
    {
      title: "Koloryzacja",
      description: "Dodaj blasku i wyrazistości swoim włosom dzięki idealnemu kolorowi.",
      image: imageServicesMap.koloryzacja,
      link: "/services/skin-care",
      icon: "fas fa-palette",
    },
    {
      title: "Stylizacja",
      description: "Podkreśl swój styl dzięki perfekcyjnej stylizacji włosów.",
      image: imageServicesMap.stylizacja,
      link: "/services/nails",
      icon: "fas fa-brush",
    },
    {
      title: "Regeneracja włosów",
      description: "Przywróć swoim włosom siłę i blask dzięki intensywnej regeneracji.",
      image: imageServicesMap.prostowaniekeratynowe,
      link: "/services/nails",
      icon: "fas fa-hand-sparkles",
    },
  ];

  const [slidesConfig, setSlidesConfig] = useState({
    slidesPerView: 3.5,
    slidesOffsetBefore: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSlidesConfig({
          slidesPerView: 3.5,
          slidesOffsetBefore: width - 3.5 * 300,
        });
      } else if (width >= 768) {
        setSlidesConfig({
          slidesPerView: 2,
          slidesOffsetBefore: 0,
        });
      } else {
        setSlidesConfig({
          slidesPerView: 1,
          slidesOffsetBefore: 0,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-12 px-4 md:py-16 md:px-0 md:pl-12 h-auto bg-white flex items-center justify-center">
      <div className="w-full pb-16">
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <div className="text-center mb-12">
            <p className="text-red-600 text-md font-semibold">Nasze Usługi</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Sprawdź, co oferujemy</h2>
            <p className="text-zinc-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
              Wybierz spośród szerokiej gamy profesjonalnych usług, które oferujemy.
            </p>
          </div>
        </AnimatedOnScroll>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          slidesPerView={slidesConfig.slidesPerView}
          slidesOffsetBefore={slidesConfig.slidesOffsetBefore}
          slidesOffsetAfter={0}
          centeredSlides={false}
          initialSlide={0}
          loop={false} // Wyłącz pętlę, aby wyświetlić wszystkie slajdy
          className="relative overflow-visible h-[650px] py-16"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="relative w-[300px] overflow-visible">
              <div className="rounded overflow-visible flex flex-col max-w-2xl mx-auto relative">
                <a href={service.link}>
                  <img className="w-full" src={service.image} alt={service.title} />
                </a>
                <div className="absolute top-[75%] px-6 py-14 bg-white shadow-lg z-10 w-[90%]">
                  <div className="absolute bg-violet-400 top-[-50px] w-[100px] h-[100px] rounded-[50px] text-center flex justify-center align-middle items-center">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-5xl" />
                  </div>
                  <p className="font-semibold text-3xl inline-block mb-2">{service.title}</p>
                  <p className="text-zinc-600 text-xl">{service.description}</p>
                  <p className="mt-5">
                    <span className="text-md text-zinc-900 transition duration-500 ease-in-out">
                      {service.icon}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSlider;
