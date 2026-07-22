export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] md:h-screen bg-vexxo-dark flex flex-col md:flex-row md:items-center overflow-hidden pt-24 md:pt-0">
      
      {/* Ponto de luz / Glow Global */}
      <div
        className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[10%] top-[30vh] md:top-[45%] -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] opacity-50 z-0 pointer-events-none"
        style={{ backgroundColor: '#e39c84' }}
      ></div>

      {/* Background/Modelo */}
      <div className="relative w-full h-[50vh] z-10 md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full flex justify-center md:justify-end items-center overflow-hidden md:overflow-visible">
        <img
          src="/modelo-hero.png"
          alt="Modelo Vexxo"
          className="h-[110%] md:h-[120%] w-full md:w-[100%] object-cover object-top md:object-right md:relative md:z-10 md:translate-y-24"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Degradê na parte de baixo da imagem apenas no mobile */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-vexxo-dark via-vexxo-dark/90 to-transparent z-30 md:hidden pointer-events-none"></div>
      </div>

      {/* Container do Texto */}
      <div className="relative z-20 w-full container mx-auto px-8 md:px-16 py-8 md:py-0 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Acetato puro italiano,<br className="hidden md:block" /> feito à mão no Brasil.
          </h2>
          <p className="text-base md:text-xl text-gray-400 font-sans font-light leading-relaxed mb-8 md:mb-10 max-w-lg">
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
