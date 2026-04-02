import Image from 'next/image';

export default function Ebooks() {
  const books = [
    { 
      title: "Basics of Astrology", 
      price: "199", 
      img: "/book1.jpg" // Ye ab public folder se uthayega
    },
    { 
      title: "Vedic Remedies Guide", 
      price: "299", 
      img: "/book2.jpg" 
    },
    { 
      title: "Kundli Analysis Simplified", 
      price: "249", 
      img: "/book3.jpg" 
    },
    { 
      title: "Spiritual Healing Guide", 
      price: "199", 
      img: "/book4.jpg" 
    }
  ];

  return (
    <section id="ebooks" className="px-6 md:px-20 py-12 max-w-7xl mx-auto bg-white">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-1">Featured Ebooks</h2>
        <p className="text-gray-400 text-sm font-medium">Deepen your knowledge with our collection of digital books written by experts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {books.map((b, i) => (
          <div key={i} className="group cursor-pointer">
             <div className="relative h-72 mb-4 rounded-[28px] overflow-hidden shadow-sm border border-gray-100 transition-all group-hover:shadow-xl">
                <Image 
                  src={b.img} 
                  alt={b.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  priority={i < 2}
                  unoptimized 
                />
             </div>
             <h3 className="font-bold text-[#1A1A1A] text-[15px] mb-1 leading-tight">{b.title}</h3>
             <div className="flex items-center justify-between mt-1">
                <p className="text-[#FF5C00] font-extrabold text-xl">₹{b.price}</p>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-[#FF5C00] text-xs font-bold border border-orange-100">🛒</div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}