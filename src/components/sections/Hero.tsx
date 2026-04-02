import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto gap-10">
      <div className="flex-1">
        <h1 className="text-6xl font-bold text-[#1A1A1A] mb-4">ज्ञान और आध्यात्म का संगम</h1>
        <p className="text-gray-500 text-lg mb-8">Learn astrology, spirituality, and life wisdom from experts</p>
        <button className="bg-[#FF5C00] text-white px-8 py-3 rounded-full font-bold shadow-lg">
          Explore Courses →
        </button>
      </div>
      <div className="flex-1 relative h-[450px] w-full rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white">
        <Image 
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2" 
          alt="Spiritual" 
          fill 
          className="object-cover"
        />
      </div>
    </section>
  );
}