import Image from 'next/image';

interface CourseProps {
  data: any[];
  isLoading?: boolean;
  isError?: boolean;
}

export default function Courses({ data, isLoading, isError }: CourseProps) {
  // 1. LOADING STATE (Spinner)
  if (isLoading) {
    return (
      <section id="courses" className="px-6 py-32 flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#FF5C00] rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 font-bold animate-pulse uppercase tracking-widest text-xs">Fetching Courses...</p>
      </section>
    );
  }

  // 2. ERROR STATE (Fallback UI)
  if (isError) {
    return (
      <section id="courses" className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="bg-red-50 p-12 rounded-[40px] border border-red-100">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-2xl font-black text-red-600 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm">We're having trouble connecting to the server. Please check your internet or try again.</p>
          <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-red-200 active:scale-95 transition">Retry Now</button>
        </div>
      </section>
    );
  }

  // 3. EMPTY STATE (No Item Available)
  if (!data || data.length === 0) {
    return (
      <section id="courses" className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100">
          <div className="text-5xl mb-4">📦</div>
          <h3 className="text-2xl font-black text-[#1A1A1A] mb-2">No Items Available</h3>
          <p className="text-gray-500 font-medium text-sm">We are currently updating our curriculum. Check back soon!</p>
        </div>
      </section>
    );
  }

  // 4. DATA UI
  const displayData = data.slice(0, 3).map((course, index) => {
    const details = [
      { name: "BY ACHARYA DEV", dur: "3 Months", img: "/premc1.jpg" },
      { name: "BY GURU RAJ", dur: "2 Months", img: "/premc2.jpg" },
      { name: "BY ACHARYA MEHTA", dur: "4 Months", img: "/premc4.jpg" }
    ];
    return { ...course, ...details[index] };
  });

  return (
    <section id="courses" className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-[32px] font-black text-[#1A1A1A] mb-2">Premium Courses</h2>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">Master Vedic Wisdom</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayData.map((course) => (
          <div key={course.id} className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-all">
            <div className="relative h-64 w-full">
              <Image src={course.img} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-4 h-14 line-clamp-2">{course.title}</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] font-black text-gray-400 tracking-widest">{course.name}</span>
                <span className="bg-orange-50 text-[#FF5C00] text-[10px] font-black px-2 py-0.5 rounded border border-orange-100">{course.dur}</span>
              </div>
              <div className="flex justify-between items-center border-t pt-6 mt-auto">
                <span className="text-2xl font-black text-black">{course.price}</span>
                <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-[#FF5C00] transition-colors">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}