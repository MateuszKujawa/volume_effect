import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedOnScroll from '../../untils/AnimatedOnScroll';


const Whyus: React.FC = () => {
    const whyusImg = '/img/whyus.jpg'
    const navigate = useNavigate();

    return (
        <section className="py-8 px-4 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center max-w-[1920px] mx-auto gap-12">
        {/* Zdjęcie po lewej stronie */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, x: 0 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
            }}
          >
            <img
              src={whyusImg}
              alt="Why us"
              className="w-full h-auto lg:w-auto max-h-[450px] md:max-h-[600px] lg:max-h-[750px] rounded-sm shadow-lg mr-0 md:mr-12"
            />
          </AnimatedOnScroll>
        </div>
      
        {/* Tekst po prawej stronie */}
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col justify-center items-center lg:items-start lg:self-start space-y-4">
        <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, y: -50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1 },
            }}
          >
            <p className="text-red-600 text-md font-DMSans">Dlaczego warto nas odwiedzić?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-snug lg:leadin-auto font-DMSans">
                Jesteśmy więcej niż salon fryzjerski – to miejsce, gdzie możesz odpocząć i zrelaksować
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, x: -100 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1.2 },
            }}
          >
            <p className="text-zinc-600 text-base sm:text-lg font-DMSans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque nec nisi velit. Sed commodo nisl ut volutpat ultrices.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 1 },
            }}
          >
            <button
            onClick={() => navigate('/about')}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all font-DMSans">
            O nas
          </button>
          </AnimatedOnScroll>
        </div>
      </section>
      
    );
};

export default Whyus;