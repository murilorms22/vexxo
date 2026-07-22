import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 md:py-4 bg-black/60 backdrop-blur-md border-b border-white/10' 
          : 'py-6 md:py-8 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex items-center">
        <a href="/">
          <img 
            src="/vexxo-logo.png" 
            alt="Vexxo Óptica" 
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`} 
          />
        </a>
      </div>
      <a href="#contact" className="text-white hover:text-vexxo-lightbrown transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </nav>
  );
}
