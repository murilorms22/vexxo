const glasses = [
  { id: 1, name: 'MANU', img: '/manu.png' },
  { id: 2, name: 'THEO', img: '/theo.png' },
  { id: 3, name: 'JADE', img: '/jade.png' }
];

export default function Products() {
  return (
    <section id="produtos" className="w-full bg-vexxo-offwhite py-24 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end">
          {glasses.map((item) => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full max-w-[280px] h-[120px] mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={item.img} 
                  alt={`Óculos ${item.name}`} 
                  className="max-h-full object-contain drop-shadow-xl"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h3 className="text-vexxo-dark font-sans font-bold tracking-[0.2em] uppercase text-sm border-b-2 border-transparent group-hover:border-vexxo-brown transition-colors duration-300 pb-1">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
