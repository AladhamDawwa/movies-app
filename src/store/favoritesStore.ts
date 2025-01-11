import { Movie } from "@/types/movie";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movie: Movie) => void;
  isFavorite: (movie: Movie) => boolean;
}

export const useFavoritesStore = create(persist<FavoritesStore>(
  (set, get) => ({
    favorites: [],
    addFavorite: (movie) =>
      set((state) => {
        if (!state.favorites.some((fav) => fav.id === movie.id)) {
          return { favorites: [...state.favorites, movie] };
        }
        return state;
      }),
    removeFavorite: movie =>
      set((state) => ({
        favorites: state.favorites.filter((fav) => movie.id !== fav.id),
      })),
    isFavorite: movie => get().favorites.find((fav) => fav.id === movie.id) !== undefined,
  }),
  {
    name: "favorites-storage", // The name of the key in localStorage
  }
));
