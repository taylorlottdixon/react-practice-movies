import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar(user) {
  return (
    <nav>
      <a className="nav-link" href="/movies">
        All Movies
      </a>
      <a className="nav-link" href="/actors">
        All Actors
      </a>
      <p>Welcome, {user.user}!</p>
    </nav>
  );
}
