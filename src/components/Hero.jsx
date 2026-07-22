export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-vexxo-dark flex items-center overflow-hidden">
      {/* Background/Modelo */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 flex justify-end">
        <img
          src="/modelo-hero.png"
          alt="Modelo Vexxo"
          className="h-full w-[80%] md:w-full object-cover object-right"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-8 md:px-16 mt-20 md:mt-0">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Acetato puro italiano,<br className="hidden md:block" /> feito à mão no Brasil.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed mb-10 max-w-lg">
            Mais que um acessório, uma extensão da sua personalidade. Durabilidade eterna e estética atemporal.
          </p>

          <a href="#produtos" className="inline-block px-8 py-4 bg-transparent border border-white text-white font-sans text-sm tracking-widest uppercase hover:bg-white hover:text-vexxo-dark transition-all duration-500 ease-in-out">
            Conheça as Coleções
          </a>
        </div>
      </div>
    </section>
  );
}
