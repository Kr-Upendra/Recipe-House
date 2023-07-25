import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AuthSignup() {
  return (
    <main className="auth">
      <Signup />
    </main>
  );
}

export function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/api/users/signup",
        {
          fullname,
          username,
          password,
        }
      );

      alert(response.data.message);
      setFullname("");
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err.data);
    }
  };

  return (
    <div className="signup">
      <h3 className="el__title">Signup to explore things</h3>
      <form onSubmit={handleSubmitForm} className="form">
        <div className="form__inputs">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            required
            id="fullname"
            className="form__inputs--input"
            placeholder="Enter your fullname"
            autoComplete="off"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
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
            Sign up
          </button>
        </div>
      </form>
      <div className="que__box">
        <span className="que__box--text">
          Already an user?{" "}
          <Link to="/auth/login" className="que__box--link">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}
