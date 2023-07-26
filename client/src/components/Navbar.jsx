import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [shownav, setShownav] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("currentUser");
    hideNavbar();
    navigate("/auth/login");
  };

  const handleNavbar = () => {
    setShownav((prevValue) => !prevValue);
  };

  const hideNavbar = (e) => {
    setShownav(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        Recipe House
      </Link>

      {cookies.access_token ? (
        <span className="navbar__currentuser">
          Hello {window.localStorage.getItem("currentUser").split(" ")[0]}
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
        <Link to="/" onClick={hideNavbar} className="navbar__links--link">
          Home
        </Link>

        <Link
          onClick={hideNavbar}
          to={!cookies.access_token ? "/auth/signup" : "/create-recipe"}
          className="navbar__links--link"
        >
          Create Recipe
        </Link>

        {!cookies.access_token ? (
          <Link
            to="/auth/signup"
            onClick={hideNavbar}
            className="navbar__links--link"
          >
            Sign up
          </Link>
        ) : (
          <span>
            <Link
              to={!cookies.access_token ? "/" : "/saved-recipe"}
              onClick={hideNavbar}
              className="navbar__links--link"
            >
              Saved Recipe
            </Link>
            <button onClick={logout} className="el__logoutbtn">
              Logout
            </button>
          </span>
        )}
      </div>
    </nav>
  );
}
