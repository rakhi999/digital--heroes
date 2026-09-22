import { NextResponse } from 'next/server';

export async function GET() {
  const charities = [
    { id: "1", name: "Education for All", description: "Education support", total_raised: 12500 },
    { id: "2", name: "Health & Hope Foundation", description: "Medical support", total_raised: 8900 },
    { id: "3", name: "Green Earth Initiative", description: "Environment care", total_raised: 15200 },
    { id: "4", name: "Animal Rescue League", description: "Animal care", total_raised: 6700 }
  ];
    return NextResponse.json({ charities });
}
