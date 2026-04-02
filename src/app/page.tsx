import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Ebooks from '@/components/sections/Ebooks';
import Courses from '@/components/sections/Courses';
import Webinars from '@/components/sections/Webinars';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  // Hardcoded data taaki Vercel par bina API ke bhi UI dikhe
  const coursesData = [
    { 
      id: 1, 
      title: "Mastering Vedic Astrology", 
      price: "₹4,999",
      instructor: "BY ACHARYA DEV",
      duration: "3 Months"
    },
    { 
      id: 2, 
      title: "Advanced Numerology Expert", 
      price: "₹3,499",
      instructor: "BY GURU RAJ",
      duration: "2 Months"
    },
    { 
      id: 3, 
      title: "Professional Vastu Consultant", 
      price: "₹5,999",
      instructor: "BY ACHARYA MEHTA",
      duration: "4 Months"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navbar />
      <Hero />
      <Ebooks />
      {/* Ab ye hamesha data dikhayega, loading ya empty nahi */}
      <Courses data={coursesData} isLoading={false} isError={false} /> 
      <Webinars />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}