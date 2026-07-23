export default function Customization() {
  return (
    <section className="w-full bg-vexxo-offwhite pt-24 pb-0 px-8 md:px-16 relative z-20">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-16">

        <div className="w-full md:w-1/2 flex flex-col justify-center pb-0 md:pb-24 text-center md:text-left items-center md:items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-vexxo-dark leading-tight mb-8">
            Design exclusivo, personalizável, que combine com seu rosto.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-sans font-light leading-relaxed mb-10 max-w-lg">
            Acreditamos que cada pessoa é única. Por isso, oferecemos a possibilidade de ajustar cada detalhe. O encaixe perfeito é aquele feito pensado exclusivamente para você.
          </p>
          <div className="w-full flex justify-center md:justify-start mt-4">
            <a href="#contact" className="inline-block px-8 py-4 bg-transparent border border-vexxo-dark text-vexxo-dark font-sans text-sm tracking-widest uppercase hover:bg-vexxo-dark hover:text-white transition-all duration-500 ease-in-out">
              Personalize seu VEXXO®️
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex items-end justify-center">
          <img
            src="/modelo-customizado.png"
            alt="Design Exclusivo Vexxo"
            className="w-full md:w-auto md:max-w-[140%] max-h-[70vh] md:max-h-none md:h-[140%] md:absolute md:bottom-0 md:-right-16 lg:-right-16 object-contain object-bottom transition-all duration-700 z-30 pointer-events-none"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

      </div>
    </section>
  );
}
