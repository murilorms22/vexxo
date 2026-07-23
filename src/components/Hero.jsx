export default function Hero() {
  return (
    <section
      className="relative w-full bg-vexxo-dark flex flex-col md:flex-row md:items-center overflow-hidden pt-20 md:pt-0"
      style={{ minHeight: 'calc(100dvh / var(--zoom-factor, 1))' }}
    >

      {/* Ponto de luz / Glow Global */}
      <div
        className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[10%] top-[30vh] md:top-[45%] -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] opacity-50 z-0 pointer-events-none"
        style={{ backgroundColor: '#e39c84' }}
      ></div>

      {/* Background/Modelo */}
      <div className="relative w-full h-[55vh] md:h-full z-10 md:absolute md:inset-y-0 md:right-0 md:w-1/2 flex justify-center md:justify-end items-start md:items-end overflow-hidden md:overflow-visible">
        <img
          src="/modelo-hero.png"
          alt="Modelo Vexxo"
          className="h-[100%] w-[100%] md:h-[95%] md:w-[95%] object-contain object-top md:right-32 md:object-contain md:object-right-bottom md:relative md:z-10 -mt-4 md:mt-0"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Degradê na parte de baixo da imagem (Mobile = Forte, Desktop = Suave) */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-vexxo-dark via-vexxo-dark/90 to-transparent z-30 md:hidden pointer-events-none"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-vexxo-dark/90 via-vexxo-dark/70 to-transparent z-30 pointer-events-none"></div>
      </div>

      {/* Container do Texto */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-start md:justify-center bg-vexxo-dark md:bg-transparent">
        <div className="w-full px-8 md:pl-[10%] lg:pl-[12%] xl:pl-[15%] pt-0 pb-12 md:py-0 flex flex-col justify-start md:justify-center -mt-12 md:mt-0 relative z-40">
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
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-6 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="animate-bounce">
          <a href="#produtos" className="text-white/60 hover:text-white transition-colors block" aria-label="Rolar para baixo">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
