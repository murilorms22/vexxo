import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Craftsmanship from './components/Craftsmanship';
import Customization from './components/Customization';
import LensExpertise from './components/LensExpertise';
import Timeless from './components/Timeless';
import Contact from './components/Contact';

function App() {
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
