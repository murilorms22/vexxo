export default function Timeless() {
  return (
    <section className="w-full bg-vexxo-offwhite flex flex-col md:flex-row items-stretch md:min-h-[75vh]">
        
      {/* Título no Mobile (Aparece antes da imagem) */}
      <div className="w-full px-8 pt-24 pb-8 md:hidden">
        <h2 className="text-4xl font-serif text-vexxo-dark leading-tight">
          Estética atemporal que atravessa gerações.
        </h2>
      </div>

      <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-auto">
        <div className="w-full h-full absolute inset-0 overflow-hidden">
          <img 
            src="/oculos-variados.png" 
            alt="Estética Atemporal Vexxo" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:py-32 md:pl-20 md:pr-16 lg:pr-32">
        <h2 className="hidden md:block text-5xl lg:text-6xl font-serif text-vexxo-dark leading-tight mb-8">
          Estética atemporal que atravessa gerações.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-sans font-light leading-relaxed mb-0 md:mb-6">
          O luxo verdadeiro reside naquilo que não precisa gritar para ser notado. A Vexxo é sobre discrição, sobre a força de um design bem executado e materiais nobres que envelhecem com beleza.
        </p>
      </div>

    </section>
  );
}
