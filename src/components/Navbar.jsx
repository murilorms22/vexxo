export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-16 md:py-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-serif tracking-widest text-white">
          vexxo<span className="text-[0.4em] block uppercase tracking-[0.4em] font-sans -mt-1 ml-1 text-gray-400">Optica</span>
        </h1>
      </div>
      <a href="#contact" className="text-white hover:text-vexxo-lightbrown transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </nav>
  );
}
