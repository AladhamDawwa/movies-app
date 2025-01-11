import { SearchResults } from "@/components";
import { searchMovies } from "@/lib/tmdb";
import { FaSearch } from "react-icons/fa";
import styles from "./page.module.scss";

const page = async ({ params }: { params: Promise<{ query: string }> }) => {
  const { query } = await params;
  const movies = await searchMovies(query);

  return movies.results.length === 0 ? (
    <div className={styles.noMovies}>
      <h2>No movies found</h2>
    </div>
  ) : (
    <>
      <h2 className={styles.pageTitle}>
        <FaSearch />
        Search results for &apos;{decodeURIComponent(query)}&apos;
      </h2>
      <SearchResults initialMovies={movies} query={query} />
    </>
  );
};
export default page;
