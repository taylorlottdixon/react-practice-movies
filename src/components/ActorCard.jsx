import React from "react";
import { Link } from "react-router-dom";
import "../pages/ActorListPage/ActorListPage.css";

export default function ActorCard({ actor, index }) {
  const actorName = actor;
  const actorURL = `/actors/${actorName}`;
  return (
    <Link to={actorURL}>
      <div
        className="ActorCard"
        style={{
          backgroundImage: `url('https://picsum.photos/id/${Math.floor(
            Math.random() * 1000 + 1
          )}/200/100')`
        }}
      >
        <h3 className="actor-name">{actorName}</h3>
      </div>
    </Link>
  );
}
