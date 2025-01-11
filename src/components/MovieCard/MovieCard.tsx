import { FavoriteButton } from "@/components";
import { Movie } from "@/types/movie";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import PlaceholderImage from "../PlaceholderImage/PlaceholderImage";
import styles from "./MovieCard.module.scss";

const imageUrl = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div key={movie.id} className={styles.card}>
      <Link
        href={`/movie/${movie.id}`}
        className="flex flex-col h-full justify-stretch"
      >
        <PlaceholderImage src={imageUrl(movie.poster_path)} alt={movie.title} />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-lg">
            <FaStar color="yellow" className="mb-1" />
            {movie.vote_average.toFixed(1)}
          </div>
          <FavoriteButton movie={movie} />
        </div>
        <h3 className="text-left text-lg">{movie.title}</h3>
        <p className="text-left text-sm">{movie.release_date.split("-")[0]}</p>
      </Link>
    </div>
  );
};
export default MovieCard;
