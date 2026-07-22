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
          className="inline-flex items-center gap-3 px-10 py-5 bg-vexxo-lightbrown text-vexxo-dark font-sans font-semibold tracking-widest uppercase hover:bg-white transition-colors duration-300 mb-24"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Entre em contato
        </a>

        {/* Footer info */}
        <div className="w-full max-w-4xl border-t border-white/20 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-10">
          
          <div>
            <h4 className="text-white font-serif text-2xl mb-2">vexxo</h4>
            <p className="text-gray-500 font-sans text-sm">© {new Date().getFullYear()} Vexxo Optica. Todos os direitos reservados.</p>
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
