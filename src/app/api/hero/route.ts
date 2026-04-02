import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: "ज्ञान और आध्यात्म का संगम",
    subtitle: "Learn astrology, spirituality, and life wisdom from experts",
    cta: { label: "Explore Courses", link: "#courses" },
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000" 
  });
}
