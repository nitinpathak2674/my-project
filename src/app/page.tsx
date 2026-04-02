import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Ebooks from '@/components/sections/Ebooks';
import Courses from '@/components/sections/Courses';
import Webinars from '@/components/sections/Webinars';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/Footer';

async function getCoursesData() {
  try {
    const res = await fetch('http://localhost:3000/api/courses', { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (e) { return []; }
}

export default async function Home() {
  const coursesData = await getCoursesData();

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <Hero />
      <Ebooks />
      <Courses data={coursesData} /> 
      <Webinars />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}