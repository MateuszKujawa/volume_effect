import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AnimatedOnScroll from '../untils/AnimatedOnScroll';
// import logo from '../../../public/img/logo.png';

const Footer: React.FC = () => {
  const logo = '/img/logo.png'
  return (
    <footer className="bg-zinc-900 text-white py-10 md:py-20 relative h-auto">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start max-w-7xl">
        {/* Lewa strona - Logo i opis */}
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
          }}>
            <div className="mb-8 lg:mb-0">
              <img
                src={logo}
                alt="Salon Logo"
                className="h-[90px] w-100 mb-4"
              />
              <p className="text-gray-400 max-w-xs">
                Twój ulubiony salon fryzjerski, oferujący profesjonalne usługi i produkty najwyższej jakości.
              </p>
            </div>
        </AnimatedOnScroll>
        

        {/* Prawa strona - Duży przycisk */}
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, x: 100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
          }}>
            <div className="flex lg:flex-col items-center lg:items-end space-y-4 mr-20">
              <button className="bg-red-600 hover:bg-red-700 text-white px-20 py-6 rounded-lg text-lg font-semibold group transition-all duration-500 relative overflow-hidden">
                {/* Ikona telefonu */}
                <span className="absolute flex items-center justify-center w-full h-full left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 transform -translate-x-full translate-y-[-25px]">
                  <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                </span>
                {/* Tekst przycisku */}
                <span className="absolute flex items-center justify-center w-full h-full left-0 group-hover:opacity-0 group-hover:translate-x-full transition-all duration-500 transform translate-x-0 translate-y-[-25px]">
                  Zadzwoń teraz
                </span>
              </button>
            </div>
        </AnimatedOnScroll>
        
      </div>

      {/* Oddzielająca kreska */}
      <hr className="my-10 border-neutral-700" />

      {/* Lista stron i kontaktu */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {/* Strony */}
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: -100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          }}>
            <div className="bg-gradient-to-r text-white p-6">
              <h4 className="text-2xl font-semibold mb-4">Strony</h4>
              <ul className="space-y-1 list-disc">
                <li>
                  <a href="/" className="hover:underline transition text-xl block text-center sm:text-left w-fit py-1 px-1">
                    Strona główna
                  </a>
                </li>
                <li>
                  <a href="#dlaczego-my" className="hover:underline transition text-xl block text-center sm:text-left w-fit py-1 px-1">
                    Dlaczego my
                  </a>
                </li>
                <li>
                  <a href="#uslugi" className="hover:underline transition text-xl block text-center sm:text-left w-fit py-1 px-1">
                    Usługi
                  </a>
                </li>
                <li>
                  <a href="#cennik" className="hover:underline transition text-xl block text-center sm:text-left w-fit py-1 px-1">
                    Cennik
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:underline transition text-xl block text-center sm:text-left w-fit py-1 px-1">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
        </AnimatedOnScroll>

        {/* Kontakt */}
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: -100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          }}>
            <div className="bg-gradient-to-r from-neutral-900 to-zinc-900 border border-zinc-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-44">
              <h4 className="text-2xl font-semibold mb-4 text-center">Kontakt</h4>
              <ul className="space-y-2 mx-auto w-fit">
                <li>
                  <span className="font-medium">Adres:</span> ul. Warszawska 45, Słupca
                </li>
                <li>
                  <span className="font-medium">Telefon:</span> 609 773 351
                </li>
              </ul>
            </div>
        </AnimatedOnScroll>

        {/* Godziny otwarcia */}
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: -100 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
          }}>
            <div className="bg-gradient-to-r from-zinc-900 to-neutral-900 border border-zinc-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-44">
              <h4 className="text-2xl font-semibold mb-4 text-center">Godziny otwarcia</h4>
              <ul className="space-y-2 text-center">
                <li>Pon-Pt: 9:00 - 18:00</li>
                <li>Sobota: 10:00 - 16:00</li>
                <li>Niedziela: Zamknięte</li>
              </ul>
            </div>
        </AnimatedOnScroll>
      </div>

      {/* Social media i copyright */}
      <div className="container mx-auto px-6 lg:px-12 mt-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-sm text-gray-400 mb-4 lg:mb-0">
          © 2024 Volume Effect. Wszelkie prawa zastrzeżone. | Design & Made by: <a href="https://mkujawa-portfolio.vercel.app" className="underline">Mateusz Kujawa</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
