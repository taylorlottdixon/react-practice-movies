import ActorCard from "../../components/ActorCard";

export default function ActorListPage({ movies }) {
  let allActors = [];

  function addActors(actorArr, movieArr) {
    movieArr.forEach((movie) => {
      movie.cast.forEach((actor) => actorArr.push(actor));
    });
  }

  addActors(allActors, movies);

  let actorsSet = new Set(allActors);

  let actors = Array.from(actorsSet);

  const actorCards = actors.map((actor, index) => (
    <ActorCard actor={actor} index={index} key={index} />
  ));

  return (
    <>
      <h1>Actor List Page</h1>
      <div className="ActorList">{actorCards}</div>
    </>
  );
}
