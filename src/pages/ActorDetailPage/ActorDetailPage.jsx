import { useParams } from "react-router-dom";
import "./ActorDetailPage.css";

export default function ActorDetailPage({ movies }) {
  let { actorName } = useParams();

  let allActors = [];
  let actorMovies = [];

  function addActors(actorArr, movieArr) {
    movieArr.forEach((movie) => {
      movie.cast.forEach((actor) => actorArr.push(actor));
    });
  }

  addActors(allActors, movies);

  let actorsSet = new Set(allActors);

  let actors = Array.from(actorsSet);

  let actor = actors.find((actor) => actor === actorName);

  actorMovies = movies.map((movie) => {
    let inMovie = false;
    movie.cast.forEach((a) => {
      if (a === actorName) inMovie = true;
    });
    if (inMovie === true) return movie.title;
  });

  const noEmptyStrings = actorMovies.filter((str) => str !== "");

  return (
    <div className="ActorDetail">
      <h1 className="actor-title">{actor}</h1>
      <div className="actor-movies">
        <h2>Movies:</h2>
        <ul>
          {noEmptyStrings.map((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
