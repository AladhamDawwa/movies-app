"use client";
import { Loader, MovieCard } from "@/components";
import styles from "./favorites.module.scss";
import { useFavoritesStore } from "@/store/favoritesStore";
import { FaHeart } from "react-icons/fa";
import useIsMounted from "@/hooks/useIsMounted";

export default function FavoritesPage() {
  const { favorites } = useFavoritesStore();
  const isMounted = useIsMounted();

  if (!isMounted) return <Loader />;

  if (favorites.length === 0)
    return <h2 className={styles.noMovies}>No favorites yet!</h2>;

  return (
    <div className={styles.container}>
      <h1 className="flex items-center text-4xl gap-3 mb-12 justify-center">
        <div className="text-red-700">
          <FaHeart />
        </div>
        Your Favorite Movies
      </h1>
      <div className={styles.grid}>
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
