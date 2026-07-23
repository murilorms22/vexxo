export default function LensExpertise() {
  return (
    <section className="w-full bg-[#151515] py-32 px-8 md:px-16 text-center">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <h3 className="text-vexxo-lightbrown font-sans font-semibold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
          Referência em Lentes
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 text-balance">
          Especialista VARILUX. A principal marca de lentes progressivas do mundo.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed mb-12 max-w-2xl">
          Nossa curadoria óptica trabalha apenas com o que há de mais tecnológico e preciso no mercado global. Somos parceiros e especialistas em lentes Essilor/Varilux e Hoyalux.
        </p>
        
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl mb-16">
          <img 
            src="/oculos-studio.png" 
            alt="Óculos Vexxo Studio" 
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        <div className="flex flex-row items-center justify-center gap-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="/variluxlogo.webp" alt="Varilux" className="h-5 md:h-8 object-contain" />
          <div className="w-[1px] h-8 md:h-12 bg-white/20"></div>
          <img src="/essilor-logo.webp" alt="Essilor" className="h-5 md:h-8 object-contain" />
          <div className="w-[1px] h-8 md:h-12 bg-white/20"></div>
          <img src="/hoya-logo.webp" alt="Hoya" className="h-5 md:h-8 object-contain" />
        </div>
      </div>
    </section>
  );
}
