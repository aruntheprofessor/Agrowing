import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-bold leading-tight tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-green-800' : 'text-white'
              }`}>
                AGROWING
              </span>
              <span className={`text-sm md:text-base font-medium leading-tight tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-green-600' : 'text-green-200'
              }`}>
                Farming as Investments
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#farmers" 
                onClick={(e) => handleNavClick(e, 'farmers')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                Farmers
              </a>
            </li>
            <li>
              <a 
                href="#investors" 
                onClick={(e) => handleNavClick(e, 'investors')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                Investors
              </a>
            </li>
            <li>
              <a 
                href="#buyers" 
                onClick={(e) => handleNavClick(e, 'buyers')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                Buyers
              </a>
            </li>
             <li>
              <a 
                href="#deliveryPartners" 
                onClick={(e) => handleNavClick(e, 'deliveryPartners')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                Delivery
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                    : 'text-white hover:text-green-300 hover:bg-white/10'
                }`}
              >
                How It Works
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300 px-6 py-2 rounded-lg font-semibold shadow-md"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isScrolled ? 'bg-gray-800' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="flex flex-col space-y-1 p-4">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-300 block px-4 py-3 rounded-lg font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-300 block px-4 py-3 rounded-lg font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#farmers" 
              onClick={(e) => handleNavClick(e, 'farmers')}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-300 block px-4 py-3 rounded-lg font-medium"
            >
              Farmers
            </a>
          </li>
          <li>
            <a 
              href="#investors" 
              onClick={(e) => handleNavClick(e, 'investors')}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-300 block px-4 py-3 rounded-lg font-medium"
            >
              Investors
            </a>
          </li>
          <li>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-300 block px-4 py-3 rounded-lg font-medium"
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300 block px-4 py-3 rounded-lg font-semibold text-center shadow-md mt-2"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;