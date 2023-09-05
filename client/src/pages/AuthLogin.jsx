import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAppBaseUrl } from "../hooks/useGetUserId";

export default function AuthLogin() {
  return (
    <main className="auth">
      <Login />
    </main>
  );
}

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const baseUrl = useAppBaseUrl();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}users/login`, {
        email,
        password,
      });

      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      window.localStorage.setItem("currentUser", response.data.fullname);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(
        err.response.data.message ||
          "SOME ERROR OCCURED! PLEASE TRY AGAIN LETER!"
      );
    }
  };

  return (
    <div className="login">
      <h3 className="el__title">Login now to get access</h3>
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form__inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            className="form__inputs--input"
            placeholder="Enter your Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            className="form__inputs--input"
            placeholder="Enter your password"
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
