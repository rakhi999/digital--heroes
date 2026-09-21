import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: "1", name: "Education for All" },
    { id: "2", name: "Health & Hope Foundation" },
    { id: "3", name: "Green Earth Initiative" },
    { id: "4", name: "Animal Rescue League" }
  ]);
}
