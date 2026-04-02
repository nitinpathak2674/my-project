import Image from 'next/image';

export default function Webinars() {
  const webinars = [
    { date: "SEP 10", title: "2024 Horoscope Insights", time: "7:00 PM", instructor: "Acharya Dev", price: "₹99", img: "/web1.jpg" },
    { date: "SEP 15", title: "Kundli Matching Secrets", time: "6:00 PM", instructor: "Pandit Sharma", price: "₹149", img: "/web2.jpg" },
    { date: "SEP 22", title: "Numerology Predictions 2024", time: "8:00 PM", instructor: "Guru Raj", price: "₹129", img: "/web3.jpg" },
    { date: "SEP 28", title: "Spiritual Growth Workshop", time: "7:30 PM", instructor: "Sendevi Anand", price: "₹199", img: "/web4.jpg" }
  ];

  return (
    <section id="webinars" className="px-6 md:px-16 py-20 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl font-black mb-10 text-[#1A1A1A]">Upcoming Live Webinars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {webinars.map((web, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-60 mb-5 rounded-[32px] overflow-hidden border border-gray-100 shadow-sm transition-all group-hover:shadow-lg">
              <Image src={web.img} alt={web.title} fill className="object-cover transition-transform group-hover:scale-110" unoptimized />
              <div className="absolute top-4 left-4 bg-white rounded-2xl p-2 text-center min-w-[45px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">{web.date.split(' ')[0]}</p>
                <p className="text-xl font-black text-black leading-none">{web.date.split(' ')[1]}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 px-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{web.time} • {web.instructor}</span>
              <h3 className="font-bold text-[#1A1A1A] text-sm mt-1 leading-tight">{web.title}</h3>
              <div className="flex items-center justify-between mt-4">
                <p className="text-black font-black text-lg">{web.price}</p>
                <button className="text-[#FF5C00] text-[10px] font-black border border-orange-100 bg-orange-50 px-3 py-1 rounded-full hover:bg-[#FF5C00] hover:text-white transition">Reserve Slot</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}