import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("currentUser");
    navigate("/auth/login");
  };

  const [shownav, setShownav] = useState(false);
  const handleNavbar = () => {
    setShownav((prevValue) => !prevValue);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Recipe App
      </Link>

      {window.localStorage.getItem("currentUser") ? (
        <span className="navbar__currentuser">
          Hello {window.localStorage.getItem("currentUser")}
        </span>
      ) : (
        ""
      )}
      <div
        className="navbar__menu"
        data-shownav={shownav}
        onClick={handleNavbar}
      >
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
        <div className="navbar__menu--bars"></div>
      </div>
      <div className="navbar__links" data-shownav={shownav}>
        <Link to="/" className="navbar__links--link">
          Home
        </Link>
        <Link to="/saved-recipe" className="navbar__links--link">
          Saved Recipe
        </Link>
        <Link to="/create-recipe" className="navbar__links--link">
          Create Recipe
        </Link>
        {!cookies.access_token ? (
          <Link to="/auth/signup" className="navbar__links--link">
            Sign up
          </Link>
        ) : (
          <button onClick={logout} className="el__logoutbtn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
