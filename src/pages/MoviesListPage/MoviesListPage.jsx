import MovieCard from "../../components/MovieCard";
import "./MovieListPage.css";

export default function MoviesListPage({ movies }) {
  const movieCards = movies.map((movie, index) => (
    <MovieCard movie={movie} index={index} key={index} />
  ));

  return (
    <>
      <h1>Movies List Page</h1>
      <div className="MovieList">{movieCards}</div>
    </>
  );
}
