"use client";
import { useFavoritesStore } from "@/store/favoritesStore";
import styles from "./FavoriteButton.module.scss";
import { Movie } from "@/types/movie";
import { FaHeart } from "react-icons/fa";
import { useState, MouseEvent, useEffect } from "react";

const FavoriteButton = ({ movie }: { movie: Movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFavorite(movie)) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // Reset animation after 500ms
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        styles.favoriteButton + (isAnimating ? ` ${styles.heartBeat}` : "")
      }
    >
      {isMounted && <FaHeart color={isFavorite(movie) ? "red" : "gray"} />}
    </button>
  );
};

export default FavoriteButton;
