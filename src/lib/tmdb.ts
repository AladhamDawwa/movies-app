import { APIResponse } from "@/types/apiResponse";
import { Movie } from "@/types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_Key = process.env.TMDB_API_KEY;

export const fetchTMDB = async (endpoint: string, queryParams: Record<string, string | number | boolean> = {}) => {
  const params = new URLSearchParams({ ...queryParams, api_key: API_Key! });
  const url = `${BASE_URL}${endpoint}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API Error: ${response.statusText}`);
  }

  return response.json();
};

export const fetchMovies = async (endpoint: string): Promise<APIResponse<Movie>> => {
  return fetchTMDB(endpoint);
};

export const fetchMovieDetails = async (movieId: string): Promise<Movie> => {
  return fetchTMDB(`/movie/${movieId}`, { append_to_response: "credits" });
};

export const searchMovies = async (query: string, page: number = 1) => {
  return fetchTMDB(`/search/movie`, { query, page });
};
