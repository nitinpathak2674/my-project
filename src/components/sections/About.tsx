export default function About() {
  const stats = [
    { label: "STUDENTS", value: "10,000+" },
    { label: "EXPERTS", value: "50+" },
    { label: "COURSES", value: "20+" }
  ];

  return (
    <section id="about" className="py-24 bg-white text-center px-6 max-w-7xl mx-auto">
      
      <h2 className="text-[32px] md:text-[40px] font-black mb-4 text-[#1A1A1A]">
        About Us
      </h2>
      
      <p className="max-w-2xl mx-auto text-gray-500 mb-16 text-sm md:text-base leading-relaxed font-medium">
        We aim to bring authentic Vedic knowledge to everyone through modern digital platforms. 
        Learn from experienced astrologers and spiritual mentors.
      </p>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            
            <div className="text-4xl md:text-5xl font-black text-[#FF5C00] mb-2 tracking-tighter">
              {s.value}
            </div>
           
            <div className="text-[11px] md:text-[12px] font-black text-gray-400 tracking-[0.2em] uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
