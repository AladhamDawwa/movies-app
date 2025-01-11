import { MovieCard } from "@/components";
import { searchMovies } from "@/lib/tmdb";
import { Movie } from "@/types/movie";
import styles from "./page.module.scss";
import { FaSearch } from "react-icons/fa";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  let movies: Movie[] = [];
  const { query } = await params;
  try {
    const response = await searchMovies(query);
    movies = response.results;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }

  return movies.length === 0 ? (
    <div className={styles.noMovies}>
      <h2>No movies found</h2>
    </div>
  ) : (
    <>
      <h2 className={styles.pageTitle}>
        <FaSearch />
        Search results for &apos;{decodeURIComponent(query)}&apos;
      </h2>
      <div className={styles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
