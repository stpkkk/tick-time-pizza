import { NextResponse } from 'next/server';
import { products } from './products';

export async function GET(req: Request) {
  return NextResponse.json(products, { status: 200 });
}
