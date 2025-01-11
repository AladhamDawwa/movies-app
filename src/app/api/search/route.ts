import { searchMovies } from '@/lib/tmdb';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const page = parseInt(searchParams.get('page') || '1');

  try {
    const movies = await searchMovies(query, page);
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch movies' }), { status: 500 });
  }
}