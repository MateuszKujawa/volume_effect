import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedOnScroll from '../../untils/AnimatedOnScroll';


const Whyus: React.FC = () => {
    const whyusImg = '/img/whyus.webp'
    const navigate = useNavigate();

    return (
      <section className="max-w-[1920px] w-full mx-auto py-8 px-4 flex flex-col-reverse lg:flex-row items-start justify-center gap-12 mt-20">

        {/* Zdjęcie po lewej stronie */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
            <img
              src={whyusImg}
              alt="Why us"
              className="w-full h-auto lg:w-auto max-h-[450px] max-w-[350px] md:max-h-[600px] md:max-w-[400px] lg:max-h-[750px] lg:max-w-[500px] rounded-sm shadow-lg"
              style={{ willChange: "transform, opacity" }}
            />
        </div>
    
        <div className="w-full h-full lg:w-1/2 text-center lg:text-left flex flex-col space-y-4 lg:items-start">
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, x: 50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
            <p className="text-red-600 text-md font-DMSans">Dlaczego warto nas odwiedzić?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-snug lg:leadin-auto font-DMSans">
              Jesteśmy więcej niż salon fryzjerski – to miejsce, gdzie możesz odpocząć i zrelaksować
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-DMSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque nec nisi velit. Sed commodo nisl ut volutpat ultrices.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all font-DMSans"
            >
              O nas
            </button>
          </AnimatedOnScroll>
        </div>
      </section>
    );
};

export default Whyus;