import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceSlider: React.FC = () => {
  const services = [
    {
      title: "Makijaż",
      description: "Profesjonalne usługi makijażu na każdą okazję.",
      image: "https://cdn.prod.website-files.com/60993dcfc8e83c6e36ae8b81/60a31ae9fcaa55f8ebed345b_massages-featured-image-salon-webflow-template.jpg",
      link: "/services/makeup",
    },
    {
      title: "Stylizacja włosów",
      description: "Najlepsze stylizacje dostosowane do Twojego stylu.",
      image: "https://cdn.prod.website-files.com/60993dcfc8e83c6e36ae8b81/60a31ae9fcaa55f8ebed345b_massages-featured-image-salon-webflow-template.jpg",
      link: "/services/hair-styling",
    },
    {
      title: "Depilacja",
      description: "Skuteczne i delikatne zabiegi depilacji.",
      image: "https://cdn.prod.website-files.com/60993dcfc8e83c6e36ae8b81/60a31ae9fcaa55f8ebed345b_massages-featured-image-salon-webflow-template.jpg",
      link: "/services/waxing",
    },
    {
      title: "Pielęgnacja skóry",
      description: "Zabiegi, które rozświetlą Twoją skórę.",
      image: "https://cdn.prod.website-files.com/60993dcfc8e83c6e36ae8b81/60a31ae9fcaa55f8ebed345b_massages-featured-image-salon-webflow-template.jpg",
      link: "/services/skin-care",
    },
    {
      title: "Manicure",
      description: "Zadbaj o swoje paznokcie z naszymi specjalistami.",
      image: "https://cdn.prod.website-files.com/60993dcfc8e83c6e36ae8b81/60a31ae9fcaa55f8ebed345b_massages-featured-image-salon-webflow-template.jpg",
      link: "/services/nails",
    },
  ];

  return (
    <section className="relative py-4 px-4 md:py-8 md:px-8 bg-white">
      <div className="text-center mb-12">
        <p className="text-red-600 text-md font-semibold">Nasze Usługi</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Sprawdź, co oferujemy</h2>
        <p className="text-zinc-600 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
          Wybierz spośród szerokiej gamy profesjonalnych usług, które oferujemy.
        </p>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView="auto"
        slidesOffsetBefore={window.innerWidth / 2 - 300}
        slidesOffsetAfter={0}
        centeredSlides={false}
        breakpoints={{
          0: { // Małe ekrany
            slidesPerView: 1,
            slidesOffsetBefore: 0, // Usunięcie przesunięcia
            slidesOffsetAfter: 0,
          },
          640: { // Średnie ekrany
            slidesPerView: 2.5,
            slidesOffsetBefore: window.innerWidth / 2,
          },
          1024: { // Duże ekrany
            slidesPerView: 4.2,
            slidesOffsetBefore: window.innerWidth / 2 - 300,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="w-[300px]">
            <a
              href={service.link}
              className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="text-white font-bold text-lg">{service.title}</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-red-600 font-semibold">Zobacz usługę →</div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceSlider;
