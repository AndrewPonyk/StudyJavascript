import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log(request);
  return NextResponse.json({ message: 'Hello from the API!' });
}
