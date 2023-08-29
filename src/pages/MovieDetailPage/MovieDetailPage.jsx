import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();

  let movie = movies.find((movie) => movie.title === movieName);

  return (
    <div className="MovieDetail">
      <h1 className="movie-title">{movie.title}</h1>
      <h2 className="movie-release">Released on: {movie.releaseDate}</h2>
      <ul className="movie-cast">
        <h3>Cast</h3>
        {movie.cast.map((actor) => (
          <li>{actor}</li>
        ))}
      </ul>
      <img src={movie.posterPath} alt="Movie Poster" className="movie-poster" />
    </div>
  );
}
