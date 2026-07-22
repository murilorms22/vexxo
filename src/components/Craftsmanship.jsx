export default function Craftsmanship() {
  return (
    <section className="relative w-full bg-vexxo-dark py-24 px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Imagem */}
        <div className="w-full md:w-1/2 relative min-h-[500px] flex items-end justify-center md:justify-start mb-16 md:mb-0">
          <img 
            src="/mao-oculos.png" 
            alt="Produção Artesanal Vexxo" 
            className="absolute bottom-[-100px] md:bottom-[-200px] left-0 md:-left-10 h-[600px] md:h-[800px] object-contain origin-bottom object-left-bottom"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 md:pl-16 z-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            Brasileira, feita à mão e com todo o cuidado.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-lg">
            Nossa qualidade vem do acetato puro Mazzucchelli, nosso estilo vem do design único e exclusivo que só o acetato italiano tem...
          </p>
        </div>

      </div>
    </section>
  );
}
