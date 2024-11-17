import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp, faPhone } from '@fortawesome/free-solid-svg-icons';
import AnimatedOnScroll from '../untils/AnimatedOnScroll';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleOutsideClick = () => {
    setIsMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
          }}>
          <div className="mx-auto max-w-[1200px] px-4 md:px-2 lg:px-8 py-4 flex items-center justify-between">
            {/* Tytuł po lewej */}
            <div className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl font-light font-poppins text-black flex-shrink-0">
              <a href="#">Volume Effect</a>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-2 sm:space-x-4 lg:space-x-8 text-black font-poppins">
              <a
                href="/"
                className="relative text-sm sm:text-base hover:text-zinc-500 transition group"
              >
                Strona główna
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* O salonie Dropdown */}
              <div className="relative">
                <button
                  className="relative flex items-center text-sm sm:text-base hover:text-zinc-500 transition group"
                  onClick={() => toggleDropdown('osalon')}
                >
                  O salonie
                  <FontAwesomeIcon
                    icon={dropdownOpen === 'osalon' ? faChevronUp : faChevronDown}
                    className="ml-2"
                  />
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div
                  className={`absolute bg-white shadow-lg mt-2 rounded-md transition-all duration-300 overflow-hidden w-48 sm:w-56 ${
                    dropdownOpen === 'osalon' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <a
                    href="#dlaczego-my"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dlaczego my
                  </a>
                  <a
                    href="#o-nas"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    O nas
                  </a>
                </div>
              </div>

              {/* Usługi Dropdown */}
              <div className="relative">
                <button
                  className="relative flex items-center text-sm sm:text-base hover:text-zinc-500 transition group"
                  onClick={() => toggleDropdown('uslugi')}
                >
                  Usługi
                  <FontAwesomeIcon
                    icon={dropdownOpen === 'uslugi' ? faChevronUp : faChevronDown}
                    className="ml-2"
                  />
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div
                  className={`absolute bg-white shadow-lg mt-2 rounded-md transition-all duration-300 overflow-hidden w-48 sm:w-56 ${
                    dropdownOpen === 'uslugi' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <a
                    href="#uslugi"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Usługi
                  </a>
                  <a
                    href="#cennik"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Cennik
                  </a>
                </div>
              </div>

              <a
                href="#produkty"
                className="relative text-sm sm:text-base hover:text-zinc-500 transition group"
              >
                Produkty
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#opinie"
                className="relative text-sm sm:text-base hover:text-zinc-500 transition group"
              >
                Opinie
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#kontakt"
                className="relative text-sm sm:text-base hover:text-zinc-500 transition group"
              >
                Kontakt
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>


            {/* Call Button */}
            <button className="hidden md:flex items-center justify-center bg-zinc-900 text-white px-14 lg:px-16 xl:px-16 py-4 lg:py-4 xl:py-4 rounded-md font-poppins text-sm sm:text-sm xl:text-md group hover:bg-zinc-800 transition-all duration-500 relative overflow-hidden">
              {/* Ikona telefonu */}
              <span className="absolute flex items-center justify-center w-full h-full left-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 transform -translate-x-full">
                <FontAwesomeIcon icon={faPhone} className="text-white text-sm sm:text-base" />
              </span>
              {/* Tekst przycisku */}
              <span className="font-semibold absolute flex items-center justify-center w-full h-full left-0 group-hover:opacity-0 group-hover:translate-x-full transition-all duration-500 transform translate-x-0">
                Zadzwoń teraz
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black text-2xl"
              onClick={() => setIsMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </AnimatedOnScroll>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-2/3 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <button className="text-black text-2xl mb-4" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className="flex flex-col space-y-2 font-poppins text-black">
            <AnimatedOnScroll
              animation={{
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.5 },
              }}
            >
              <a href="/" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Strona główna
              </a>
            </AnimatedOnScroll>

            {/* O salonie Dropdown */}
            <div className="w-full">
              <AnimatedOnScroll
                animation={{
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => toggleDropdown('osalon')}
                >
                  O salonie
                  <FontAwesomeIcon icon={dropdownOpen === 'osalon' ? faChevronUp : faChevronDown} />
                </button>
              </AnimatedOnScroll>

              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  dropdownOpen === 'osalon' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <AnimatedOnScroll
                  animation={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.7 },
                  }}
                >
                  <a href="#dlaczego-my" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    Dlaczego my
                  </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                  animation={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.8 },
                  }}
                >
                  <a href="#o-nas" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    O nas
                  </a>
                </AnimatedOnScroll>
              </div>
            </div>

            {/* Usługi Dropdown */}
            <div className="w-full">
              <AnimatedOnScroll
                animation={{
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.9 },
                }}
              >
                <button
                  className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                  onClick={() => toggleDropdown('uslugi')}
                >
                  Usługi
                  <FontAwesomeIcon icon={dropdownOpen === 'uslugi' ? faChevronUp : faChevronDown} />
                </button>
              </AnimatedOnScroll>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ${
                  dropdownOpen === 'uslugi' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <AnimatedOnScroll
                  animation={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 1 },
                  }}
                >
                  <a href="#uslugi" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    Usługi
                  </a>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                  animation={{
                    initial: { opacity: 0, x: -30 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 1.2 },
                  }}
                >
                  <a href="#cennik" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                    Cennik
                  </a>
                </AnimatedOnScroll>
              </div>
            </div>

            <AnimatedOnScroll
              animation={{
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 1.3 },
              }}
            >
              <a href="#produkty" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Produkty
              </a>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              animation={{
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 1.4 },
              }}
            >
              <a href="#opinie" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Opinie
              </a>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              animation={{
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 1.5 },
              }}
            >
              <a href="#kontakt" className="block w-full px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Kontakt
              </a>
            </AnimatedOnScroll>
          </nav>
          <AnimatedOnScroll
            animation={{
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 1.6 },
            }}
          >
            <button className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Zadzwoń teraz
            </button>
          </AnimatedOnScroll>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
