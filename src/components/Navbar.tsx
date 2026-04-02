import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-[#FF5C00] rounded-lg flex items-center justify-center text-white font-bold text-sm">P</div>
          <span className="text-lg md:text-xl font-bold text-[#1A1A1A] tracking-tight">PrabhuBhakti</span>
        </Link>

        {/* Navigation Tabs - Ab mobile par bhi dikhenge (Choti screen par text size thoda kam kar diya hai) */}
        <div className="flex gap-3 md:gap-8 text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-wider mx-2">
          <Link href="#courses" className="hover:text-[#FF5C00] transition">Courses</Link>
          <Link href="#ebooks" className="hover:text-[#FF5C00] transition whitespace-nowrap">Ebooks</Link>
          <Link href="#webinars" className="hover:text-[#FF5C00] transition">Webinars</Link>
          <Link href="#about" className="hover:text-[#FF5C00] transition">About</Link>
        </div>

       
        <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition shrink-0">
          Sign In
        </button>
      </div>
    </nav>
  );
}