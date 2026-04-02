export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="#FF5C00" /><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" /></svg>
            <h3 className="text-xl font-bold">PrabhuBhakti</h3>
          </div>
          <p className="text-gray-400 text-sm">Empowering your spiritual journey through Vedic wisdom.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className="text-gray-400 text-sm space-y-2"><li>Courses</li><li>Ebooks</li><li>Webinars</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm">help@prabhubhakti.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div className="flex gap-2">
            <input type="text" placeholder="Email" className="bg-gray-800 rounded-full px-4 py-2 text-sm w-full outline-none" />
            <button className="bg-[#FF5C00] px-4 py-2 rounded-full text-sm font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-[10px]">© 2026 PrabhuBhakti. All rights reserved.</div>
    </footer>
  );
}