import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function AuthLogin() {
  return (
    <main className="auth">
      <Login />
    </main>
  );
}

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/api/users/login",
        { username, password }
      );

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      window.localStorage.setItem("currentUser", response.data.fullname);
      navigate("/");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="login">
      <h3 className="el__title">Login now to get access</h3>
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form__inputs">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            className="form__inputs--input"
            placeholder="Enter your username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            className="form__inputs--input"
            placeholder="Create your password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__btnbox">
          <button type="submit" className="btn form__btnbox--btn">
            Login
          </button>
        </div>
      </form>
      <div className="que__box">
        <span className="que__box--text">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="que__box--link">
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
}
