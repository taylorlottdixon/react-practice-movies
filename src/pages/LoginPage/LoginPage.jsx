import { useState } from "react";
import "./LoginPage.scss";

export default function LoginPage({ setUser }) {
  const [userLogin, setUserLogin] = useState("");

  function handleChange(evt) {
    const username = evt.target.value;
    setUserLogin(username);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setUser(userLogin);
    setUserLogin("");
  }

  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          name="name"
          value={userLogin}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
