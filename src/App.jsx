import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Craftsmanship from './components/Craftsmanship';
import Customization from './components/Customization';
import LensExpertise from './components/LensExpertise';
import Timeless from './components/Timeless';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Para telas entre 1024px e 1919px, faz o zoom out simulando 1920px
      let zoomLevel = 1;
      if (width >= 1024 && width < 1920) {
        zoomLevel = width / 1920;
      }
      document.documentElement.style.zoom = zoomLevel;
      document.documentElement.style.setProperty('--zoom-factor', zoomLevel);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Executa na montagem

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="w-full min-h-screen bg-vexxo-dark font-sans selection:bg-vexxo-brown selection:text-white">
      <Navbar />
      <Hero />
      <Products />
      <Craftsmanship />
      <Customization />
      <LensExpertise />
      <Timeless />
      <Contact />
    </main>
  );
}

export default App;
