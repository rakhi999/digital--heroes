import { NextResponse } from 'next/server';

export async function GET() {
  const charities = [
    { id: '1', name: 'Education for All' },
    { id: '2', name: 'Health & Hope' },
    { id: '3', name: 'Clean Ocean' },
    { id: '4', name: 'Animal Rescue' },
  ];
  return NextResponse.json({charities});
}
