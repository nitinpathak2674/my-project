import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    title: "ज्ञान और आध्यात्म का संगम",
    subtitle: "Learn astrology, spirituality, and life wisdom from experts",
    cta: { label: "Explore Courses", link: "#courses" },
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600"
  });
}