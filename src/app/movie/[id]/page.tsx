import { FavoriteButton } from "@/components";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import styles from "./page.module.scss";
import { Movie } from "@/types/movie";
import { fetchMovieDetails } from "@/lib/tmdb";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = (await params).id;
  let movie: Movie | null = null;
  try {
    movie = await fetchMovieDetails(movieId);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const director = movie?.credits.crew.find(
    (person) => person.job === "Director"
  )?.name;
  const cast = movie?.credits.cast
    .slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");

  return (
    movie && (
      <div
        className={styles.movieContainer}
        style={{ backgroundImage: `url(${backdropUrl})` }}
      >
        <div className={styles.overlay}>
          <Image
            className={styles.poster}
            src={posterUrl}
            alt={movie.title}
            width={500}
            height={750}
          />
          <div className={styles.info}>
            <div className={styles.header}>
              <div className="flex items-center gap-2">
                <h1>{movie.title}</h1>
                <FavoriteButton movie={movie} />
              </div>
              <div className="flex items-center gap-2 text-2xl">
                <FaStar color="yellow" className="mb-1" />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <p>{movie.overview}</p>
            <p>
              <strong>Genre:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Director:</strong> {director || "N/A"}
            </p>
            <p>
              <strong>Cast:</strong> {cast || "N/A"}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
          </div>
        </div>
      </div>
    )
  );
}
