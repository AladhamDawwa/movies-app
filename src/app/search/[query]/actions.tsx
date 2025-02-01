"use server";

import { searchMovies } from "@/lib/tmdb";

const loadMore = async ({ query, page }: { query: string; page: number }) => {
  const apiMovies = await searchMovies(query, page);
  return apiMovies;
};
export default loadMore;
