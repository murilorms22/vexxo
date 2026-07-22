export default function Timeless() {
  return (
    <section className="w-full bg-vexxo-offwhite py-24 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2">
          <div className="aspect-video md:aspect-[4/3] overflow-hidden bg-gray-300">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0c5000509c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Estética Atemporal" 
              className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-vexxo-dark leading-tight mb-8">
            Estética atemporal que atravessa gerações.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-sans font-light leading-relaxed mb-6">
            O luxo verdadeiro reside naquilo que não precisa gritar para ser notado. A Vexxo é sobre discrição, sobre a força de um design bem executado e materiais nobres que envelhecem com beleza.
          </p>
        </div>

      </div>
    </section>
  );
}
