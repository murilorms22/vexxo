export default function Customization() {
  return (
    <section className="w-full bg-vexxo-offwhite py-24 px-8 md:px-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-vexxo-dark leading-tight mb-8">
            Design exclusivo, personalizável, que combine com seu rosto.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-sans font-light leading-relaxed mb-10 max-w-lg">
            Acreditamos que cada pessoa é única. Por isso, oferecemos a possibilidade de ajustar cada detalhe. O encaixe perfeito é aquele feito pensado exclusivamente para você.
          </p>
          <div>
            <a href="#contact" className="inline-block border-b border-vexxo-dark text-vexxo-dark pb-1 text-sm tracking-[0.2em] uppercase hover:text-vexxo-brown hover:border-vexxo-brown transition-colors duration-300">
              Personalize seu VEXXO®️
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Design Exclusivo Vexxo" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
