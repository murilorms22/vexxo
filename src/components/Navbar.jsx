import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'py-3 md:py-4 bg-black/60 backdrop-blur-md border-b border-white/10' 
            : 'py-6 md:py-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center">
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/vexxo-logo.png" 
              alt="Vexxo Óptica" 
              className={`w-auto object-contain transition-all duration-500 ${isScrolled || isMenuOpen ? 'h-8 md:h-10' : 'h-10 md:h-12'}`} 
            />
          </a>
        </div>
        
        {/* Ícone Desktop (WhatsApp) */}
        <a href="#contact" className="hidden md:block text-white hover:text-vexxo-lightbrown transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>

        {/* Menu Hamburguer Mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Overlay Menu Mobile */}
      <div 
        className={`fixed inset-0 z-40 bg-vexxo-dark/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 text-2xl font-serif text-white mb-20">
          <li><a href="#" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Início</a></li>
          <li><a href="#produtos" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Coleções</a></li>
          <li><a href="#craftsmanship" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Feito à Mão</a></li>
          <li><a href="#customization" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Customização</a></li>
          <li><a href="#lenses" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Lentes</a></li>
          <li><a href="#timeless" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Estilo Atemporal</a></li>
          <li><a href="#contact" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
        </ul>

        {/* Ícones Sociais (Base do Menu) */}
        <div className="absolute bottom-16 flex space-x-10 items-center text-white">
          {/* WhatsApp */}
          <a href="#contact" className="hover:text-vexxo-lightbrown transition-colors" onClick={() => setIsMenuOpen(false)} title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          
          {/* Instagram */}
          <a href="https://instagram.com/opticavexxo" target="_blank" rel="noopener noreferrer" className="hover:text-vexxo-lightbrown transition-colors" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Linktree (Ícone de Link) */}
          <a href="https://linktr.ee/opticavexxo" target="_blank" rel="noopener noreferrer" className="hover:text-vexxo-lightbrown transition-colors" title="Linktree">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
