import { NextResponse } from 'next/server';

export async function GET() {
  const courses = [
    {
      id: 1,
      title: "Complete Astrology Course",
      instructor: "Dr. Arun Sharma",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173" 
    },
    {
      id: 2,
      title: "Numerology Mastery",
      instructor: "Sandeep Bajaj",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1454165833767-0220206977d1" 
    },
    {
      id: 3,
      title: "Advanced Horoscope Reading",
      instructor: "Acharya Vinay",
      price: "₹7,999",
      image: "https://images.unsplash.com/photo-1515847049116-ea216dc58911" 
    }
  ];
  return NextResponse.json(courses);
}
