import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-6 leading-[1.1]">
            ज्ञान और आध्यात्म <br /> 
            <span className="text-[#FF5C00]">का संगम</span>
          </h1>
          <p className="text-gray-500 mb-10 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
            Master the ancient wisdom of Vedic Astrology, Numerology, and Vastu from world-renowned experts.
          </p>
          <a href="#courses" className="bg-[#FF5C00] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-orange-200 hover:bg-[#e65300] transition-all inline-block">
            Explore Courses
          </a>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full">
          <Image 
            src="/hero.jpg"  // ✅ Yahan humne naam change kar diya 'hero.jpg'
            alt="Spiritual Learning" 
            fill 
            className="object-cover rounded-[60px] shadow-2xl z-10 border-8 border-white"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}