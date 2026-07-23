export default function Contact() {
  return (
    <section id="contact" className="w-full bg-vexxo-dark py-24 md:py-32 px-8 md:px-16 border-t border-white/10">
      <div className="container mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
          Dê o próximo passo em<br className="hidden md:block"/> direção à sua visão perfeita.
        </h2>
        <p className="text-lg text-gray-400 font-sans font-light mb-12 max-w-xl">
          Fale com um de nossos consultores e agende seu horário para personalizarmos o seu Vexxo.
        </p>

        <a 
          href="https://wa.me/559999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-white text-white font-sans font-semibold tracking-widest uppercase hover:bg-white hover:text-vexxo-dark transition-colors duration-500 mb-24"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          Entre em contato
        </a>

        {/* Footer info */}
        <div className="w-full max-w-4xl border-t border-white/20 pt-16 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
            <img src="/vexxo-logo.png" alt="Vexxo Óptica" className="h-8 mb-4 object-contain brightness-0 invert" />
            <p className="text-gray-500 font-sans text-sm">© {new Date().getFullYear()} Vexxo Optica.<br className="md:hidden" /> Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-col gap-4 md:text-right">
            <div>
              <p className="text-white font-sans text-sm font-medium">Loja 1</p>
              <p className="text-gray-400 font-sans text-sm">Rua Voluntários da Pátria 1229<br/>Pelotas, Brazil 96015-730</p>
            </div>
            <div>
              <p className="text-white font-sans text-sm font-medium">Loja 2</p>
              <p className="text-gray-400 font-sans text-sm">Shopping Pelotas - Quiosque 19<br/>Pelotas, Brazil 96015-730</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
