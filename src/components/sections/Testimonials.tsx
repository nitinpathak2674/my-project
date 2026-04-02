import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    { name: "Rohit Sharma", text: "Amazing course! I learned astrology from scratch.", stars: 5 },
    { name: "Priya Varma", text: "Very knowledgeable instructors and practical learning.", stars: 4 }, // 4 Stars
    { name: "Amit Singh", text: "The webinars are extremely insightful and engaging.", stars: 5 },
    { name: "Neha Kapoor", text: "Loved the ebooks and easy explanations.", stars: 4 }  // 4 Stars
  ];

  return (
    <section id="testimonials" className="px-6 md:px-16 py-20 max-w-7xl mx-auto bg-white">
      <h2 className="text-[32px] font-black mb-12 text-[#1A1A1A]">
        What Our Students Say
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col">
            {/* Stars Logic: 2nd and 4th card will show 4 yellow stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, starIndex) => (
                <span 
                  key={starIndex} 
                  className={`text-lg ${starIndex < r.stars ? 'text-[#FFD700]' : 'text-gray-200'}`}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm mb-6 italic leading-relaxed">
              "{r.text}"
            </p>

            <div className="flex items-center gap-3">
              {/* Logo with Dark Orange Background */}
              <div className="w-10 h-10 bg-[#FF5C00] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {r.name[0]}
              </div>
              <p className="font-bold text-sm text-[#1A1A1A]">{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}