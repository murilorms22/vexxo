export default function Craftsmanship() {
  return (
    <section className="relative w-full bg-vexxo-dark pt-24 pb-0 md:py-24 px-8 md:px-16 overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Imagem */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[500px] flex items-end justify-center md:justify-start mt-12 md:mt-0">
          <img
            src="/mao-oculos.png"
            alt="Produção Artesanal Vexxo"
            className="absolute bottom-0 md:bottom-[-200px] left-0 md:-left-10 w-full md:w-auto h-[450px] md:h-[800px] object-contain object-bottom md:object-left-bottom"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
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
