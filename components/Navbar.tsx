
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { AGENCY_NAME, LOGO_URL } from '../constants';

interface NavbarProps {
  onBookAppraisal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookAppraisal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-gradient-to-b from-black/70 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
           {/* Zevesto Logo */}
           <div className="h-10 md:h-12 flex items-center">
             <img 
               src={LOGO_URL} 
               alt={AGENCY_NAME} 
               className={`h-full w-auto object-contain ${!isScrolled && 'brightness-0 invert'}`}
             />
           </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Market Stats', 'Highlights', 'Trends'].map((item) => {
            const id = item.toLowerCase().replace(' ', '-');
            return (
              <a 
                key={item} 
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`text-sm font-bold tracking-wide hover:text-zevesto-green transition-colors ${isScrolled ? 'text-zevesto-navy' : 'text-white'}`}
              >
                {item}
              </a>
            );
          })}
          <button 
            onClick={onBookAppraisal}
            className="bg-zevesto-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <Phone size={16} />
            Book Appraisal
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-zevesto-navy' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-zevesto-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zevesto-navy text-white py-8 px-6 md:hidden shadow-xl border-t border-white/10">
          <div className="flex flex-col space-y-6 text-center">
             {['Market Stats', 'Highlights', 'Trends'].map((item) => {
               const id = item.toLowerCase().replace(' ', '-');
               return (
                 <a 
                   key={item} 
                   href={`#${id}`}
                   onClick={(e) => scrollToSection(e, id)}
                   className="text-lg font-serif font-medium hover:text-zevesto-green cursor-pointer"
                 >
                   {item}
                 </a>
               );
             })}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookAppraisal();
              }}
              className="bg-zevesto-green text-white px-6 py-3 rounded-full font-bold w-full cursor-pointer"
            >
              Book Free Appraisal
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
