"use client";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { MovieCard } from "..";
import styles from "./SearchResults.module.scss";
import { APIResponse } from "@/types/apiResponse";
import loadMore from "@/app/search/[query]/actions";

const SearchResults = ({
  query,
  initialMovies,
}: {
  query: string;
  initialMovies: APIResponse<Movie>;
}) => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>(initialMovies.results);

  useEffect(() => {
    if (initialMovies.total_pages === 1) setHasMore(false);
  }, [initialMovies]);

  const loadMoreMovies = async () => {
    setLoading(true);
    const apiMovies = await loadMore({ query, page: page + 1 });
    if (apiMovies.total_pages === apiMovies.page) setHasMore(false);
    setMovies((movies) => [...movies, ...apiMovies.results]);
    setPage((page) => ++page);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center py-3 gap-3">
      <div className={styles.movieGrid}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {hasMore && (
        <button onClick={loadMoreMovies} className={styles.loadMore}>
          {loading ? <FaSpinner className="animate-spin" /> : "Load More"}
        </button>
      )}
    </div>
  );
};
export default SearchResults;
