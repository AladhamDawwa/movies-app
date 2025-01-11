import { fetchMovies } from "@/lib/tmdb";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

const MoviesList = async ({ title, url }: { title: string; url: string }) => {
  const movies = await fetchMovies(url);
  return (
    <>
      <h2 className="text-3xl text-center mb-10">{title}</h2>
      <div className={styles.grid}>
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
export default MoviesList;
