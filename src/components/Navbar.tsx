import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5C00] rounded-lg flex items-center justify-center text-white font-bold">P</div>
          <span className="text-xl font-bold text-[#1A1A1A]">PrabhuBhakti</span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-500 uppercase tracking-wider">
          <Link href="#courses" className="hover:text-[#FF5C00] transition">Courses</Link>
          <Link href="#ebooks" className="hover:text-[#FF5C00] transition">Ebooks</Link>
          <Link href="#webinars" className="hover:text-[#FF5C00] transition">Webinars</Link>
          <Link href="#about" className="hover:text-[#FF5C00] transition">About</Link>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition">Sign In</button>
      </div>
    </nav>
  );
}