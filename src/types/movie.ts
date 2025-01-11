export interface Movie {
  id: number;
  title: string;
  runtime: number;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  genres: { name: string }[];
  credits: { crew: { job: string; name: string }[]; cast: { name: string }[] };
}