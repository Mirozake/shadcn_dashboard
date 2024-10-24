import { sql } from '@vercel/postgres';

export async function query(text: string, params: unknown[] = []) {
  try {
    const result = await sql.query(text, params);
    return result;
  } catch (error: unknown) {
    console.error('Database query error:', error);
    throw error;
  }
}