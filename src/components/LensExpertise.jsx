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
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif tracking-wider font-bold">VARILUX</span>
          <span className="text-2xl font-serif tracking-wider font-bold">ESSILOR</span>
          <span className="text-2xl font-sans tracking-widest font-semibold">HOYALUX</span>
        </div>
      </div>
    </section>
  );
}
