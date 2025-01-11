import { Hero, Loader } from "@/components";
import MoviesList from "@/components/MoviesList/MoviesList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <div className="flex flex-col p-8 gap-4">
          <MoviesList title="🎬 Now Playing" url="/movie/now_playing" />
          <MoviesList title="🔥 Popular Movies" url="/movie/popular" />
          <MoviesList title="🌟 Top Rated Movies" url="/movie/top_rated" />
        </div>
      </Suspense>
    </>
  );
}
