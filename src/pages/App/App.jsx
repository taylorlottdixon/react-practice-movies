import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../../styles.css";
import "./App.css";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";
import NavBar from "../../components/NavBar";
import { movies } from "../../data.js";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route
              path="/actors/:actorName"
              element={<ActorDetailPage movies={movies} />}
            />
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <>
          <LoginPage setUser={setUser} />
        </>
      )}
    </div>
  );
}
