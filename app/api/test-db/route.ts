import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    const result = await query('SELECT NOW()');
    return NextResponse.json({ time: result.rows[0].now });
  } catch (error: unknown) {
    console.error('Database query error:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}