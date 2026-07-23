export default function Craftsmanship() {
  return (
    <section className="relative w-full bg-vexxo-dark pt-24 pb-0 md:py-24 px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Imagem */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px] flex items-end justify-center md:justify-start mt-12 md:mt-0">
          <img
            src="/mao-oculos.png"
            alt="Produção Artesanal Vexxo"
            className="absolute bottom-0 md:bottom-[-200px] left-0 md:-left-10 w-full md:w-auto h-[450px] md:h-[800px] object-contain object-bottom md:object-left-bottom z-10 pointer-events-none"
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          {/* Cards Flutuantes */}
          <div className="absolute top-4 md:top-12 -right-10 md:right-20 z-0 md:z-20 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hidden md:flex items-center gap-3 md:gap-4 transition-transform duration-500 hover:-translate-y-2 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white/80 shrink-0"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13"></path><path d="M12 3v19"></path></svg>
            <span className="text-white font-sans font-medium text-xs md:text-lg leading-tight text-left">
              <span className="block md:inline">Acetato</span>
              <span className="hidden md:inline"> </span>
              <span className="block md:inline">Mazzucchelli</span>
            </span>
          </div>

          <div className="absolute top-[45%] md:top-[50%] -left-5 md:-left-28 z-20 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hidden md:flex items-center gap-3 md:gap-4 transition-transform duration-500 hover:-translate-y-2 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white/80 shrink-0"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            <span className="text-white font-sans font-medium text-xs md:text-lg leading-tight text-left">
              <span className="block md:inline">Acabamento</span>
              <span className="hidden md:inline"> </span>
              <span className="block md:inline">Premium</span>
            </span>
          </div>

          <div className="absolute bottom-10 md:bottom-24 right-0 md:right-28 z-20 md:z-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg hidden md:flex items-center gap-3 md:gap-4 transition-transform duration-500 hover:-translate-y-2 cursor-default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white/80 shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
            <span className="text-white font-sans font-medium text-xs md:text-lg leading-tight text-left">
              <span className="block md:inline">Alta</span>
              <span className="hidden md:inline"> </span>
              <span className="block md:inline">Durabilidade</span>
            </span>
          </div>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 md:pl-16 z-10 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 md:mb-8">
            Brasileira, feita à mão e com todo o cuidado.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-lg mx-auto md:mx-0 pb-12">
            Nossa qualidade vem do acetato puro Mazzucchelli, nosso estilo vem do design único e exclusivo que só o acetato italiano tem.
          </p>
        </div>

      </div>
    </section>
  );
}
